import React from 'react'
import Navbar from './componants/Navbar/Navbar.jsx'
import Footer from './componants/Footer/Footer.jsx'
import { Outlet } from 'react-router-dom'

export default function Root() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}
