'use client'

import {useEffect, useState} from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion'
import {ArrowDown, Phone} from 'lucide-react'

const Hero = () => {
    const [mounted, setMounted] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        setMounted(true)
        
        // Detectar se é dispositivo móvel
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }
        
        checkMobile()
        window.addEventListener('resize', checkMobile)
        
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    const scrollToContact = () => {
        const element = document.getElementById('contato')
        if (element) {
            element.scrollIntoView({behavior: 'smooth'})
        }
    }

    return (
        <section id="inicio" className="relative min-h-screen overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="relative w-full h-full">
                    {mounted && (
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover"
                        >
                            <source src={isMobile ? "/background-video-small.mp4" : "/background-video.mp4"} type="video/mp4"/>
                        </video>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-r from-dark-green/80 to-transparent"></div>
                </div>
            </div>

            <div className="relative z-10 w-full min-h-screen flex items-center pt-32 sm:pt-28 lg:pt-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-32 items-end w-full py-8 lg:py-12">
                        <motion.div
                            initial={{opacity: 0, x: -50}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.8}}
                            className="text-white pb-8 lg:pb-16"
                        >
                            <motion.p
                                initial={{opacity: 0, y: 30}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.8, delay: 0.4}}
                                className="text-xl lg:text-2xl mb-4 text-gray-100  font-bold"
                            >
                                Estratégia jurídica para superar o endividamento e proteger o seu legado no campo
                            </motion.p>

                            <motion.p
                                initial={{opacity: 0, y: 30}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.8, delay: 0.6}}
                                className="text-lg mb-8 text-gray-200 leading-relaxed text-justify"
                            >
                                Com sólida experiência no setor bancário, atuamos para restaurar a viabilidade econômica
                                e a capacidade produtiva do produtor rural, transformando passivos em soluções
                                sustentáveis.
                            </motion.p>

                            <motion.div
                                initial={{opacity: 0, y: 30}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.8, delay: 0.8}}
                                className="flex flex-col sm:flex-row gap-4"
                            >
                                <button
                                    onClick={scrollToContact}
                                    className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-dark-green transition-all duration-300 hover:scale-105"
                                >
                                    <Phone size={20} className="mr-2"/>
                                    Agendar Consulta
                                </button>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{opacity: 0, x: 50}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.8, delay: 0.4}}
                            className="relative hidden lg:flex justify-end items-end"
                        >
                            <div className="relative w-full h-[calc(100vh-180px)] min-h-[500px] max-h-[850px]" style={{marginBottom: '-50px'}}>
                                <Image
                                    src="/lawyer-photo-main.png"
                                    alt="Dra. Glória Menezes"
                                    fill
                                    className="object-contain object-bottom"
                                    priority
                                    sizes="(max-width: 1024px) 0vw, 50vw"
                                />
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{opacity: 0, scale: 0.8}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{duration: 0.8, delay: 0.6}}
                        className="lg:hidden relative w-full h-[400px] mt-8 mb-16"
                    >
                        <Image
                            src="/lawyer-photo-main.png"
                            alt="Dra. Glória Menezes"
                            fill
                            className="object-contain object-bottom"
                            priority
                            sizes="100vw"
                        />
                    </motion.div>
                </div>

                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1, delay: 1.2}}
                    className="absolute bottom-8 lg:bottom-16 left-1/2 transform -translate-x-1/2 z-20"
                >
                    <ArrowDown className="w-8 h-8 text-white animate-bounce"/>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero