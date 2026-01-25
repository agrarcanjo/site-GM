'use client'

import {useEffect, useState} from 'react'
import Image from 'next/image'
import {Instagram, Linkedin, Menu, X} from 'lucide-react'

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
            element.scrollIntoView({behavior: 'smooth'})
        }
        setIsOpen(false)
    }

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#181817] backdrop-blur-sm shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-24">
                    <div className="flex items-center" id='logo-with-name'>
                        <div className="relative w-40 h-20 sm:w-52 sm:h-24 lg:w-64 lg:h-28 cursor-pointer">
                            <Image
                                src="/main-logo.png"
                                alt="Glória Menezes Advocacia"
                                fill
                                className="object-contain"
                                priority
                                onClick={() => scrollToSection('inicio')}
                            />
                        </div>
                    </div>

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
                    </div>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden text-white hover:text-light-green transition-colors"
                    >
                        {isOpen ? <X size={28}/> : <Menu size={28}/>}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="lg:hidden bg-black/95 backdrop-blur-sm">
                    <nav className="px-4 pt-2 pb-4 space-y-2">
                        <button
                            onClick={() => scrollToSection('inicio')}
                            className="block w-full text-left px-4 py-3 text-white hover:text-light-green hover:bg-white/10 rounded transition-colors"
                        >
                            Início
                        </button>
                        <button
                            onClick={() => scrollToSection('sobre')}
                            className="block w-full text-left px-4 py-3 text-white hover:text-light-green hover:bg-white/10 rounded transition-colors"
                        >
                            Sobre
                        </button>
                        <button
                            onClick={() => scrollToSection('servicos')}
                            className="block w-full text-left px-4 py-3 text-white hover:text-light-green hover:bg-white/10 rounded transition-colors"
                        >
                            Serviços
                        </button>
                        <button
                            onClick={() => scrollToSection('areas')}
                            className="block w-full text-left px-4 py-3 text-white hover:text-light-green hover:bg-white/10 rounded transition-colors"
                        >
                            Áreas de Atuação
                        </button>
                        <button
                            onClick={() => scrollToSection('depoimentos')}
                            className="block w-full text-left px-4 py-3 text-white hover:text-light-green hover:bg-white/10 rounded transition-colors"
                        >
                            Depoimentos
                        </button>
                        <button
                            onClick={() => scrollToSection('contato')}
                            className="block w-full text-left px-4 py-3 text-white hover:text-light-green hover:bg-white/10 rounded transition-colors"
                        >
                            Contato
                        </button>

                        <div className="flex items-center space-x-4 px-4 pt-4">
                            <a
                                href="https://www.instagram.com/gloriamenezs"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-light-green transition-colors"
                            >
                                <Instagram size={24}/>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/gloria-menezes"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-light-green transition-colors"
                            >
                                <Linkedin size={24}/>
                            </a>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    )
}

export default Header