import { revalidatePath } from 'next/cache';

export async function POST(request) {
  try {
    const { secret } = await request.json();

    if (secret !== process.env.REVALIDATION_SECRET) {
      return new Response('Invalid secret', { status: 401 });
    }

    const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
    let portfolioCount = 0;
    let blogCount = 0;
    const errors = [];

    try {
      const resProjects = await fetch(new URL('/api/projects/ids', base));
      
      if (resProjects.ok) {
        const ids = await resProjects.json();
        for (const id of ids) {
          revalidatePath(`/portfolio/${id}`);
          portfolioCount++;
        }
        revalidatePath('/portfolio'); 
      } else {
        errors.push(`Portfolio API error: ${resProjects.statusText}`);
      }
    } catch (e) {
      console.error('Portfolio revalidation error:', e);
      errors.push(`Portfolio error: ${e.message}`);
    }

    try {
      const blogUrl = process.env.BLOG_URL;
      
      if (blogUrl) {
        const resBlog = await fetch(`${blogUrl}/wp-json/wp/v2/posts?per_page=100&_fields=slug`);
        
        if (resBlog.ok) {
          const posts = await resBlog.json();
          for (const post of posts) {
            revalidatePath(`/blog/${post.slug}`);
            blogCount++;
          }
          revalidatePath('/blog');
        } else {
          errors.push(`WP API error: ${resBlog.statusText}`);
        }
      } else {
        errors.push('Missing BLOG_URL env variable');
      }
    } catch (e) {
      console.error('Blog revalidation error:', e);
      errors.push(`Blog error: ${e.message}`);
    }

    console.log(`Zrewalidowano: ${portfolioCount} projektów, ${blogCount} postów.`);

    return new Response(JSON.stringify({ 
        revalidated: true, 
        portfolioCount, 
        blogCount,
        errors: errors.length > 0 ? errors : null
    }), { 
        status: 200, 
        headers: { 'Content-Type': 'application/json' } 
    });

  } catch (error) {
    console.error('General Revalidation Error:', error);
    return new Response(`Error: ${error.message}`, { status: 500 });
  }
}