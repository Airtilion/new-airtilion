export async function GET() {
    try {
      // Fetch all categories from WP REST API
      const BLOG_URL = process.env.BLOG_URL;
      const url = new URL(`${BLOG_URL}/wp-json/wp/v2/categories?per_page=100`);
      // Możesz dodać parametry per_page, order itp.
      // url.searchParams.set('per_page', 100);
  
      const resp = await fetch(url);
      if (!resp.ok) {
        throw new Error(`WP API (categories) zwróciło błąd ${resp.status}`);
      }
  
      const categories = await resp.json();

      const exclude_categories = ['Polecane', 'Popularne', 'Bez kategorii'];

      const filtredCategories = categories.filter(cat => !exclude_categories.includes(cat.name))
  
      const firstSix = filtredCategories.slice(0,6);

      // Uproszczony format
      const simplified = firstSix.map(cat => ({
        id: cat.id,
        name: cat.name,
        slug: cat.slug,
        count: cat.count
      }));
  
      return new Response(JSON.stringify(simplified), { status: 200 });
    } catch (error) {
      console.error('Błąd pobierania kategorii:', error);
      return new Response(
        JSON.stringify({ error: 'Błąd serwera' }),
        { status: 500 }
      );
    }
  }