'use client'

import { useEffect, useState } from 'react'

export default function ThemeProvider({ children }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Initialize theme on mount (client-side only)
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const isDark = savedTheme === 'dark' || (savedTheme === null && prefersDark)
    
    const html = document.documentElement
    const body = document.body
    
    if (isDark) {
      html.classList.add('dark')
      body.classList.add('dark')
    } else {
      html.classList.remove('dark')
      body.classList.remove('dark')
    }
    
    setMounted(true)
  }, [])

  // Prevent hydration mismatch by only rendering after client mount
  if (!mounted) {
    return children
  }

  return children
}
