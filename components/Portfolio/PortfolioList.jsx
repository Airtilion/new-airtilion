'use client'

import React, { useEffect, useState, useCallback } from 'react'
import useScrollObserver from '@/hooks/useScrollObserver'
import PortfolioElement from './PortfolioItem'

const PortfolioList = ({ dict }) => {
  const [projects, setProjects] = useState([])
  const [offset, setOffset]     = useState(0)
  const [hasMore, setHasMore]   = useState(true)
  const [loading, setLoading]   = useState(false)

  const [loadMoreRef, isVisible] = useScrollObserver({
    rootMargin: '200px',
    threshold: 0.1
  })

  const fetchProjects = useCallback(async () => {
    if (loading || !hasMore) return;
    setLoading(true);

    try {
      const res = await fetch('/api/projects/get', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ limit: 6, offset })
      });

      if (!res.ok) throw new Error('Network response was not ok');

      const { items, hasMore: more } = await res.json();

      console.log(items)

      setProjects(prev => [...prev, ...items]);
      setOffset(prev => prev + items.length);
      setHasMore(more);
    } catch (err) {
      console.error('Błąd pobierania:', err);
    } finally {
      setLoading(false);
    }
  }, [offset, loading, hasMore]);

  useEffect(() => {
    if (isVisible) {
      fetchProjects();
    }
  }, [isVisible, fetchProjects]);

  useEffect(() => {
    fetchProjects();
  }, []); 

  return (
    <section className='w-[1240px] max-2xl:w-[1180px] max-xl:w-[960px] max-lg:w-[90%] mx-auto'>
      <h2 className='w-fit heading-gradient-gray text-[30px] max-2xl:text-[25px] max-sm:text-[20px]'>{dict.title}</h2>
      <p className='text-[16px] max-2xl:text-[15px] max-sm:text-[14px] mt-4'>{dict.content}</p>

      <article className='flex flex-wrap gap-8 justify-center mt-16'>
        {projects.map((proj, idx) => (
            <>
                <PortfolioElement item={proj} key={idx}/>        
            </>
        ))}
      </article>

      {/* {loading && (
        <div className='text-center py-4'>
          <span>Ładowanie...</span>
        </div>
      )} */}

      {/* {!hasMore && (
        <div className='text-center py-4 text-gray-500'>
          <span>To już wszystkie projekty.</span>
        </div>
      )} */}
    </section>
  )
}

export default PortfolioList
