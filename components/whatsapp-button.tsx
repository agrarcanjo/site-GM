
'use client'

import { useEffect, useState } from 'react'
import { MessageSquare } from 'lucide-react'

const WhatsAppButton = () => {
  const [mounted, setMounted] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    setMounted(true)
    
    const handleScroll = () => {
      // Hide button when at the very top (hero section)
      const scrollY = window.scrollY
      setIsVisible(scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!mounted) return null

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      'Olá! Vim através do site e gostaria de saber mais sobre os serviços de advocacia em crédito rural.'
    )
    window.open(`https://wa.me/5562982144754?text=${message}`, '_blank')
  }

  return (
    <button
      onClick={openWhatsApp}
      className={`whatsapp-btn transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      title="Entre em contato pelo WhatsApp"
    >
      <MessageSquare size={28} className="text-white" />
      
      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30"></span>
    </button>
  )
}

export default WhatsAppButton
