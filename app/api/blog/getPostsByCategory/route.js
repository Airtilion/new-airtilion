export async function POST(req) {
  try {
    const { categoryName, limit, paginate, page, searchTerm } = await req.json();

    if (categoryName === undefined || categoryName === null) {
      return new Response(
        JSON.stringify({ error: 'Brak wymaganego parametru categoryName' }),
        { status: 400 }
      );
    }
    if (paginate && (page === undefined || page === null)) {
      return new Response(
        JSON.stringify({ error: 'Parametr page jest wymagany, gdy paginate ma wartość true' }),
        { status: 400 }
      );
    }

    const BLOG_URL = process.env.BLOG_URL;

    // 1) Pobierz ID kategorii jeśli potrzeba
    let categoryId = null;
    if (categoryName !== '') {
      const catUrl = new URL(`${BLOG_URL}/wp-json/wp/v2/categories`);
      catUrl.searchParams.set('search', categoryName);
      const catResp = await fetch(catUrl);
      if (!catResp.ok) throw new Error(`WP API (categories) zwróciło błąd ${catResp.status}`);
      const catData = await catResp.json();
      const matched = catData.find(c => c.name.toLowerCase() === categoryName.toLowerCase());
      if (!matched) return new Response(
          JSON.stringify({ error: `Kategoria o nazwie "${categoryName}" nie znaleziona` }),
          { status: 404 }
        );
      categoryId = matched.id;
    }

    // 2) Przygotuj zapytanie do WP
    const perPage = limit ?? 100;
    const postsUrl = new URL(`${BLOG_URL}/wp-json/wp/v2/posts`);
    postsUrl.searchParams.set('_embed', '');
    postsUrl.searchParams.set('per_page', perPage);
    if (paginate) postsUrl.searchParams.set('page', page);
    if (categoryId !== null) postsUrl.searchParams.set('categories', categoryId);
    if (searchTerm) postsUrl.searchParams.set('search', searchTerm);

    const resp = await fetch(postsUrl);
    if (!resp.ok) throw new Error(`WP API (posts) zwróciło błąd ${resp.status}`);
    const posts = await resp.json();

    // 3) Pobierz z nagłówków WP całkowitą liczbę elementów
    const totalItemsHeader = resp.headers.get('X-WP-Total');
    const totalItems = totalItemsHeader ? parseInt(totalItemsHeader, 10) : posts.length;
    const totalPages = paginate ? Math.ceil(totalItems / perPage) : 1;

    // 4) Mapowanie wyników z kategorią, ale nie zwracaj 'Popularne' czy 'Polecane'
    const SPECIAL_CATS = ['Popularne', 'Polecane'];
    const simplified = posts.map(post => {
      const embeddedCats = post._embedded?.['wp:term']?.[0] ?? [];
      const firstValid = embeddedCats.find(c => !SPECIAL_CATS.includes(c.name));
      return {
        title: post.title.rendered,
        category: SPECIAL_CATS.includes(categoryName)
          ? (firstValid ? firstValid.name : 'Bez kategorii')
          : categoryName || (firstValid ? firstValid.name : 'Bez kategorii'),
        intro: post.acf?.intro_text || null,
        image: post.acf?.image_link || null,
        slug: post.slug,
      };
    });

    // 5) Zwróć dane i liczbę stron
    return new Response(
      JSON.stringify({ totalPages, posts: simplified }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Błąd pobierania:', error);
    return new Response(
      JSON.stringify({ error: 'Błąd serwera' }),
      { status: 500 }
    );
  }
}
