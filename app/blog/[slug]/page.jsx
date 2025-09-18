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
import Footer from '@components/Footer';
import { getDictionary } from '@utils/getDictionary';
import PortfolioCallToAction from '@components/singlePortfolio/PortfolioCallToAction';
import SlideUpContact from '@components/SlideUpContact';


export const revalidate = 60;
const BLOG_URL = process.env.BLOG_URL;

export async function generateStaticParams() {
  const posts = await fetch(`${BLOG_URL}/wp-json/wp/v2/posts/`).then((res) =>
    res.json()
  )
  return posts.map((post) => ({
    slug: String(post.slug),
  }))
}

export async function generateMetadata({ params }) {
  const res = await fetch(`${BLOG_URL}/wp-json/wp/v2/posts?slug=${params.slug}`)

  if (!res.ok) notFound();

  const posts = await res.json()

  if (!posts || posts.length === 0) notFound();

  const post = posts[0]

  return {
    title: `${post.acf.meta_title} - Airtilion`,
    description: post.acf.meta_desc,
    alternates: {
      canonical: `https://airtilion.com/blog/${post.slug}`
    }
  }
}

const page = async ({ params, searchParams }) => {
  const { slug } = await params

  const sParams = searchParams instanceof Promise ? await searchParams : searchParams;
  const { lang = 'pl' } = await sParams
  const file = await getDictionary(lang, 'blog');
  const dictionary = file || {};

  const res = await fetch(`${BLOG_URL}/wp-json/wp/v2/posts?slug=${slug}&_embed`);

  if (!res.ok) notFound();

  const posts = await res.json();

  if (!posts || posts.length === 0) notFound();

  const post = posts[0]

  const allCategories = post._embedded?.['wp:term']?.[0] ?? [];

  const filtredCategory = allCategories.filter(el => el.name !== 'Popularne' && el.name !== 'Polecane' && el.name !== 'Bez kategorii');

  const category = filtredCategory[0];

  console.log(lang);

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

          <PortfolioCallToAction dict={dictionary.cta} mt={96} />
          <SlideUpContact dict={dictionary.cta.form} lang={lang} />
        </article>

      </main>
      <Footer dict={dictionary.footer} />
    </>
  )
}

export default page