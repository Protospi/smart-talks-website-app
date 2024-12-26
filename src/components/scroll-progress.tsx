'use client'

import { useEffect, useState } from 'react'

export function ScrollProgress() {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const calculateScrollProgress = () => {
      const winScroll = window.scrollY
      const height = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = (winScroll / height) * 100
      
      setIsVisible(winScroll > 50)
      setProgress(scrolled)
    }

    window.addEventListener('scroll', calculateScrollProgress)
    return () => window.removeEventListener('scroll', calculateScrollProgress)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div
      className={`fixed bottom-8 right-8 h-12 w-12 cursor-pointer transition-opacity duration-300 z-50 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={scrollToTop}
    >
      <div className="progress-wrap">
        <svg
          className="progress-circle"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            style={{
              transition: 'stroke-dashoffset 10ms linear',
              strokeDasharray: '307.919, 307.919',
              strokeDashoffset: `${307.919 - (progress * 307.919) / 100}`,
            }}
          />
        </svg>
        <div className="arrow-up">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="none"
          >
            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" 
                  transform="rotate(-90 12 12)"/>
          </svg>
        </div>
      </div>
    </div>
  )
} 