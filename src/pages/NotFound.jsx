import React from 'react'
import { useRouteError } from 'react-router-dom'

const NotFound = () => {
    const errors = useRouteError();
    return (
        <div className='container mt-5'>
            <h1>Page not found :|</h1>
            <div className='alert alert-darger'>{errors.statusText || errors.message}</div>
        </div>
    )
}

export default NotFound