export const metadata = {
  title: "Airtilion - Twoje źródło wiedzy o web designie i developmentcie",
  description: "Na blogu Airtilion znajdziesz praktyczne tutoriale, case studies oraz najnowsze trendy w projektowaniu stron i aplikacji. Sprawdź i rozwijaj swoje umiejętności!",
  alternates: {
    canonical: 'https://airtilion.com/blog',
  },
}

import { CategoryProvider } from '@context/PostCategoryContext'
import React from 'react'

const layout = ({ children }) => {
    return (
        <CategoryProvider>
            {children}
        </CategoryProvider>
    )
}

export default layout