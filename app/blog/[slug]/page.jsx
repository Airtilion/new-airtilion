import React from 'react'
import { notFound } from 'next/navigation';

import Route from '@components/blog-singlePost/Route';
import BgBlog from '@components/blog-singlePost/BgBlog';
import Category from '@components/blog-all/Category';
import Introduction from '@components/blog-singlePost/Introduction';
import ArticleIntro from '@components/blog-singlePost/ArticleIntro';
import TableContents from '@components/blog-singlePost/TableContents';
import Content from '@components/blog-singlePost/Content';
import Author from '@components/blog-singlePost/Author';
import OtherPosts from '@components/blog-singlePost/OtherPosts';

import BlogBottomWrapper from '@components/blog-singlePost/BlogBottomWrapper';

import { getDictionary } from '@utils/getDictionary';
import JsonLd from '@components/JsonLd';
import { getBlogPostSchema } from '@lib/schema';

// export const dynamic = 'force-static';
export const revalidate = 3600;

const BLOG_URL = process.env.BLOG_URL;

export async function generateStaticParams() {
  try {
    const res = await fetch(`${BLOG_URL}/wp-json/wp/v2/posts?per_page=100&_fields=slug`);
    const posts = await res.json();
    return posts.map((post) => ({
      slug: String(post.slug),
    }))
  } catch (e) {
    return [];
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const res = await fetch(`${BLOG_URL}/wp-json/wp/v2/posts?slug=${slug}&_fields=title,acf,slug`);

  if (!res.ok) return {};
  const posts = await res.json()
  if (!posts || posts.length === 0) return {};
  const post = posts[0]

  return {
    title: `${post.acf.meta_title} - Airtilion`,
    description: post.acf.meta_desc,
    alternates: {
      canonical: `https://airtilion.com/blog/${post.slug}`
    }
  }
}

const page = async ({ params }) => {
  const { slug } = await params

  const lang = 'pl';

  const file = await getDictionary(lang, 'blog');
  const dictionary = file || {};

  const res = await fetch(`${BLOG_URL}/wp-json/wp/v2/posts?slug=${slug}&_embed`);
  if (!res.ok) notFound();
  const posts = await res.json();
  if (!posts || posts.length === 0) notFound();
  const post = posts[0]

  const allCategories = post._embedded?.['wp:term']?.[0] ?? [];
  const filtredCategory = allCategories.filter(el => el.name !== 'Popularne' && el.name !== 'Polecane' && el.name !== 'Bez kategorii');
  const category = filtredCategory[0] || { name: 'Ogólne' };

  const schema = getBlogPostSchema({
    title: post.acf.meta_title,
    description: post.acf.meta_desc,
    slug: `https://airtilion.com/blog/${post.slug}`,
    publishDate: post.date,
    image: post.acf.image_link,
    authorName: post.acf.author
  })

  return (
    <>
      <main className='mt-[150px] relative fold:mt-[170px]'>

        <BgBlog />
        <Route title={post.title.rendered} />

        <article className='relative z-10'>
          <div className=' mt-[52px] w-[1240px] mx-auto max-xl:w-[1000px] max-lg:w-[90%]'>
            <Category name={category.name} />
          </div>

          <Introduction title={post.title.rendered} date={post.date} time={post.acf.time} />
          <ArticleIntro title={post.title.rendered} image_link={post.acf.image_link} intro_text={post.acf.intro_text} />
          <TableContents content={post.content.rendered} />
          <Content content={post.content.rendered} />
          <Author authorName={post.acf.author} />
          <OtherPosts category={category.name} />

          <BlogBottomWrapper initialDictionary={dictionary} initialContactDict={dictionary.cta} />

        </article>

      </main>
      <JsonLd data={schema} />

    </>
  )
}

export default page