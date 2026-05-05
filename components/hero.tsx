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
                            preload="metadata"
                            poster="/background-poster.jpg"
                            className="absolute inset-0 w-full h-full object-cover"
                        >
                            <source src={isMobile ? "/background-video-small.webm" : "/background-video.webm"} type="video/webm"/>
                            <source src={isMobile ? "/background-video-small.mp4" : "/background-video.mp4"} type="video/mp4"/>
                        </video>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-r from-dark-green/80 to-transparent"></div>
                </div>
            </div>

            <div className="relative z-10 w-full min-h-screen">
                {/* Container de Conteúdo Desktop */}
                <div className="hidden lg:flex lg:items-center min-h-screen pt-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                        <div className="grid grid-cols-2 gap-8 items-center">
                            <motion.div
                                initial={{opacity: 0, x: -50}}
                                animate={{opacity: 1, x: 0}}
                                transition={{duration: 0.8}}
                                className="text-white"
                            >
                                <motion.p
                                    initial={{opacity: 0, y: 30}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{duration: 0.8, delay: 0.4}}
                                    className="text-xl lg:text-2xl mb-4 text-gray-100 font-bold"
                                >
                                    Estratégia jurídica para produtores rurais endividados
                                </motion.p>

                                <motion.p
                                    initial={{opacity: 0, y: 30}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{duration: 0.8, delay: 0.6}}
                                    className="text-lg mb-8 text-gray-200 leading-relaxed text-justify"
                                >
                                    Atuação em renegociação de dívidas rurais, reestruturação de passivos, análise de contratos e medidas jurídicas para proteger a atividade produtiva e o patrimônio no campo.
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
                            {/* Espaço reservado para a imagem */}
                            <div></div>
                        </div>
                    </div>
                </div>

                {/* Container de Conteúdo Mobile */}
                <div className="lg:hidden pt-32 pb-[55vh]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <motion.div
                            initial={{opacity: 0, x: -50}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.8}}
                            className="text-white"
                        >
                            <motion.p
                                initial={{opacity: 0, y: 30}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.8, delay: 0.4}}
                                className="text-xl mb-4 text-gray-100 font-bold"
                            >
                                Estratégia jurídica para produtores rurais endividados
                            </motion.p>

                            <motion.p
                                initial={{opacity: 0, y: 30}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.8, delay: 0.6}}
                                className="text-base mb-8 text-gray-200 leading-relaxed text-justify"
                            >
                                Atuação em renegociação de dívidas rurais, reestruturação de passivos, análise de contratos e medidas jurídicas para proteger a atividade produtiva e o patrimônio no campo.
                            </motion.p>

                            <motion.div
                                initial={{opacity: 0, y: 30}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.8, delay: 0.8}}
                                className="flex flex-col gap-4"
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
                    </div>
                </div>

                {/* Imagem Desktop - Posicionada absolutamente no bottom direito */}
                <motion.div
                    initial={{opacity: 0, x: 50}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 0.8, delay: 0.4}}
                    className="hidden lg:block absolute bottom-0 right-0 w-1/2 h-[calc(100vh-120px)] max-h-[900px]"
                >
                    <Image
                        src="/lawyer_main.png"
                        alt="Dra. Glória Menezes"
                        fill
                        className="object-contain object-bottom"
                        priority
                        sizes="50vw"
                    />
                </motion.div>

                {/* Imagem Mobile - Posicionada absolutamente no bottom */}
                <motion.div
                    initial={{opacity: 0, scale: 0.8}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.8, delay: 0.6}}
                    className="lg:hidden absolute bottom-0 left-0 right-0 h-[50vh] min-h-[300px]"
                >
                    <Image
                        src="/lawyer_main.png"
                        alt="Dra. Glória Menezes"
                        fill
                        className="object-contain object-bottom"
                        priority
                        sizes="100vw"
                    />
                </motion.div>

                {/* Arrow - Posicionada absolutamente no bottom */}
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1, delay: 1.2}}
                    className="hidden lg:block absolute bottom-4 left-1/2 transform -translate-x-1/2"
                >
                    <ArrowDown className="w-8 h-8 text-white animate-bounce"/>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero