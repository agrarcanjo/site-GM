'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X, Instagram, Linkedin } from 'lucide-react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex items-center" id='logo-with-name'>
            <div className="relative w-40 h-20 sm:w-52 sm:h-24 lg:w-64 lg:h-28">
              <Image
                src="/main-logo.png"
                alt="Glória Menezes Advocacia"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 ml-auto">
            <button
              onClick={() => scrollToSection('inicio')}
              className="nav-link text-white hover:text-light-green font-medium transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('sobre')}
              className="nav-link text-white hover:text-light-green font-medium transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('servicos')}
              className="nav-link text-white hover:text-light-green font-medium transition-colors"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('areas')}
              className="nav-link text-white hover:text-light-green font-medium transition-colors"
            >
              Áreas de Atuação
            </button>
            <button
              onClick={() => scrollToSection('depoimentos')}
              className="nav-link text-white hover:text-light-green font-medium transition-colors"
            >
              Depoimentos
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="nav-link text-white hover:text-light-green font-medium transition-colors"
            >
              Contato
            </button>
          </nav>

          {/* Social Links & Contact */}
          <div className="hidden lg:flex items-center space-x-4 ml-8">
            <a
              href="https://www.instagram.com/gloriamenezs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-light-green transition-colors"
            >
              <Instagram size={20}/>
            </a>
            <a
              href="https://www.linkedin.com/in/gloria-menezes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-light-green transition-colors"
            >
              <Linkedin size={20}/>
            </a>
            <button
              onClick={() => scrollToSection('contato')}
              className="btn-primary px-6 py-2 text-sm"
            >
              Entre em Contato
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24}/> : <Menu size={24}/>}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-black/95 shadow-lg border-t border-gray-700">
            <div className="px-4 py-4 space-y-4">
              <button
                onClick={() => scrollToSection('inicio')}
                className="block w-full text-left py-2 text-white hover:text-light-green"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('sobre')}
                className="block w-full text-left py-2 text-white hover:text-light-green"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="block w-full text-left py-2 text-white hover:text-light-green"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('areas')}
                className="block w-full text-left py-2 text-white hover:text-light-green"
              >
                Áreas de Atuação
              </button>
              <button 
                onClick={() => scrollToSection('depoimentos')}
                className="block w-full text-left py-2 text-white hover:text-light-green"
              >
                Depoimentos
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="block w-full text-left py-2 text-white hover:text-light-green"
              >
                Contato
              </button>
              
              {/* Mobile Social Links */}
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-700">
                <a 
                  href="https://www.instagram.com/gloriamenezs" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-light-green transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/gloria-menezes" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-light-green transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              </div>
              
              <button 
                onClick={() => scrollToSection('contato')}
                className="btn-primary w-full py-3 mt-4"
              >
                Entre em Contato
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header