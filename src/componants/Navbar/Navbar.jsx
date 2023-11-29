import React from 'react'
import { Link } from 'react-router-dom'
import styles from './navbar.module.css'

export default function Navbar() {
  return (
    <header className={styles.navbar}>
    <Link to = {"/"} className={styles.link} >WikiSearch</Link>
    <nav>
        <Link to = {"/favourites"} className={styles.linkFav}>Favourites</Link>
    </nav>
    </header>
  )
}
