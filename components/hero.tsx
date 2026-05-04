'use client'

import {useEffect, useState} from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion'
import {ArrowDown, Phone} from 'lucide-react'

const Hero = () => {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const scrollToContact = () => {
        const element = document.getElementById('contato')
        if (element) {
            element.scrollIntoView({behavior: 'smooth'})
        }
    }

    return (
        <section id="inicio" className="relative min-h-screen overflow-hidden">
            <div className="absolute inset-x-0 top-24 bottom-0 z-0">
                <div className="relative w-full h-full">
                    {mounted && (
                        <Image
                            src="/background.png"
                            alt="Background"
                            fill
                            className="object-cover"
                            priority
                            quality={100}
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-r from-dark-green/80 to-transparent"></div>
                </div>
            </div>

            <div className="relative z-10 w-full min-h-screen flex items-center pt-32 sm:pt-28 lg:pt-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="w-full py-8 lg:py-12">
                        <motion.div
                            initial={{opacity: 0, x: -50}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.8}}
                            className="text-white pb-8 lg:pb-16 max-w-3xl"
                        >
                            <motion.p
                                initial={{opacity: 0, y: 30}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.8, delay: 0.4}}
                                className="text-xl lg:text-2xl mb-4 text-gray-100  font-bold"
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
                    </div>
                </div>

                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1, delay: 1.2}}
                    className="absolute bottom-2 lg:bottom-4 left-1/2 transform -translate-x-1/2 z-20"
                >
                    <ArrowDown className="w-8 h-8 text-white animate-bounce"/>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero