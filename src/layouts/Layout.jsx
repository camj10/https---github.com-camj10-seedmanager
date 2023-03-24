import React from 'react'
import { Outlet } from 'react-router-dom'
import './layout.css'
const Layout = () => {

    return (
        <>
            <div className='container'>
                <Outlet />
            </div>

        </>
    )
}

export default Layout