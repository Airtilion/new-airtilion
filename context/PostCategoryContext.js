'use client'

import { createContext, useContext, useState } from "react"

const CategoryContext = createContext('');

export const CategoryProvider = ({children}) => {
    const [category, setCategory] = useState('');

    return (
        <CategoryContext.Provider value={{category, setCategory}}>
            {children}
        </CategoryContext.Provider>
    )
}

export const useCategory = () => {
    const ctx = useContext(CategoryContext)

    if(!ctx){
        throw new Error('useCategory must be used wthin ThemeProvider');
    }

    return ctx;
}