import React from 'react'

const page = ({ params, searchParams }) => {
    const { id } = params
    return (
        <div>{id}</div>
    )
}

export default page