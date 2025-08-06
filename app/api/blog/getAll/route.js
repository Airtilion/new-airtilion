
export async function POST(req) {
  try {
    const response = await fetch('http://localhost:8886/wp-json/wp/v2/posts?_embed');
    const posts = await response.json();

    const simplifiedPosts = posts.map(post => ({
      title: post.title.rendered,
      category: post._embedded?.['wp:term']?.[0]?.[0]?.name || null,
      intro: post.acf?.intro_text || null,
      image: post.acf?.image_link || null
    }));

    return new Response(JSON.stringify(simplifiedPosts), { status: 200 });
  } catch (error) {
    console.error('Błąd pobierania:', error);
    return new Response(JSON.stringify({ error: 'Błąd serwera' }), { status: 500 });
  }
}
