'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Icon } from '@iconify/react/dist/iconify.cjs'

const labelMap = { 'wiedza': 'Baza wiedzy' }

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const formatSegment = (segment) => labelMap[segment] ?? capitalize(segment.replace(/-/g, ' '))

const Breadcrumbs = ({ dict }) => {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);

  return (
    <nav aria-label={dict.ariaLabels[0]}>
      <ol className='flex items-center text-white'>
        <li>
          <Link href='/' aria-label={dict.ariaLabels[1]} className='custom-hover-text'>
            <Icon icon='ph:house-bold' width={16} height={16} />
          </Link>
        </li>

        {segments.map((segment, idx) => {
          const href = '/' + segments.slice(0, idx + 1).join('/');
          const isLast = idx === segments.length - 1
          const label = formatSegment(decodeURIComponent(segment));

          return (
            <React.Fragment key={href}>
              <li aria-hidden="true">
                <Icon icon="mingcute:right-line" width={16} height={16} />
              </li>
              <li>
                {isLast ? (
                  <span aria-current='page' className='text-(--hover-text-color)'>{label}</span>
                ) : (
                  <Link href={href} className='block custom-hover-text'>{label}</Link>
                )}
              </li>
            </React.Fragment>
          )
        })}
      </ol>
    </nav>
  )
}

export default Breadcrumbs