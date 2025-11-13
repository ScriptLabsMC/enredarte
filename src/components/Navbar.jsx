'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faStore, 
    faUser, 
    faShoppingCart, 
    faSearch, 
    faBars,
    faTimes,
    faMoon,
    faSun
} from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/components/navbar.module.css'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        // Check localStorage for saved theme preference
        const savedTheme = localStorage.getItem('theme')
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        const isDarkMode = savedTheme === 'dark' || (savedTheme === null && prefersDark)
        
        setIsDark(isDarkMode)

        // Listen for storage changes from other tabs
        const handleStorageChange = () => {
            const currentTheme = localStorage.getItem('theme')
            const currentDark = currentTheme === 'dark'
            setIsDark(currentDark)
        }

        window.addEventListener('storage', handleStorageChange)
        return () => window.removeEventListener('storage', handleStorageChange)
    }, [])

    const toggleTheme = () => {
        const body = document.body
        const html = document.documentElement
        
        // Check current state from DOM
        const currentlyDark = body.classList.contains('dark')
        const newDarkMode = !currentlyDark
        
        if (newDarkMode) {
            html.classList.add('dark')
            body.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            html.classList.remove('dark')
            body.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
        
        setIsDark(newDarkMode)
    }

    return (
        <nav className={`${styles.navbar} ${isScrolled ? styles.navbarScrolled : ''}`}>
            <div className={styles.navContainer}>
                {/* Logo */}
                <Link href="/" className={styles.navLogo}>
                    <span className={styles.logoBadge}>
                        <FontAwesomeIcon icon={faStore} className={styles.logoIcon} />
                    </span>
                    <span>EnredArte</span>
                </Link>

                {/* Navigation Links */}
                <div className={`${styles.navMenu} ${isMenuOpen ? styles.navMenuActive : ''}`}>
                    <Link href="/" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
                        Inicio
                    </Link>
                    <Link href="/bisuteria" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
                        Bisutería
                    </Link>
                    <Link href="/maquillaje" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
                        Maquillaje
                    </Link>
                    <Link href="/pulseras" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
                        Pulseras
                    </Link>
                    <Link href="/about" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
                        Sobre Nosotros
                    </Link>
                </div>

                {/* Right Side Icons */}
                <div className={styles.navIcons}>
                    <button className={styles.iconBtn} aria-label="Buscar">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                    <button className={styles.iconBtn} aria-label="Cuenta">
                        <FontAwesomeIcon icon={faUser} />
                    </button>
                    <button className={`${styles.iconBtn} ${styles.cartBtn}`} aria-label="Carrito">
                        <FontAwesomeIcon icon={faShoppingCart} />
                        <span className={styles.cartCount}>0</span>
                    </button>
                    <button 
                        className={styles.iconBtn}
                        onClick={toggleTheme}
                        aria-label="Toggle tema"
                    >
                        <FontAwesomeIcon icon={isDark ? faMoon : faSun} />
                    </button>
                    
                    {/* Mobile Menu Toggle */}
                    <button 
                        className={styles.mobileToggle}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
                    </button>
                </div>
            </div>
        </nav>
    )
}