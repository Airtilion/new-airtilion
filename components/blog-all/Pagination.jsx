'use client'

import React from 'react'

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const renderPageNumbers = () => {
    const pages = []

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      pages.push(1)

      if (currentPage > 3) {
        pages.push('...')
      }

      for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        if (i > 1 && i < totalPages) {
          pages.push(i)
        }
      }

      if (currentPage < totalPages - 2) {
        pages.push('...')
      }

      pages.push(totalPages)
    }

    return pages.map((page, index) =>
      typeof page === 'number' ? (
        <button
          key={index}
          onClick={() => onPageChange(page)}
          className={`px-2 py-1 ${page === currentPage ? 'bg-[#e28350] text-black rounded-[5px]' : 'hover:bg-[#EFD8A720] rounded-[5px] duration-500'}`}
        >
          {page}
        </button>
      ) : (
        <span key={index} className="px-2 py-1">
          {page}
        </span>
      )
    )
  }

  return (
    <div className="flex gap-2 items-center border-[0.5px] border-[#ABABAB40] rounded-[5px] w-fit px-[48px] py-[16px] mx-auto max-sm:flex-col">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage <= 1}
        className="px-2 py-1 disabled:opacity-50 hover:text-[#EFD8A7] duration-500"
      >
        Poprzednia
      </button>
      <div>
        {renderPageNumbers()}
      </div>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
        className="px-2 py-1 disabled:opacity-50 hover:text-[#EFD8A7] duration-500"
      >
        Następna
      </button>
    </div>
  )
}

export default Pagination
