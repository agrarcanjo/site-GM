'use client'

import {useEffect, useState} from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion'
import {useInView} from 'react-intersection-observer'
import {Clock, DollarSign, FileCheck, GraduationCap, ChevronLeft, ChevronRight} from 'lucide-react'
import {Carousel, CarouselContent, CarouselItem, type CarouselApi} from '@/components/ui/carousel'

const About = () => {
    const [mounted, setMounted] = useState(false)
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)
    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    useEffect(() => {
        setMounted(true)
    }, [])

    // Monitorar mudanças no slide atual
    useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap())

        api.on('select', () => {
            setCurrent(api.selectedScrollSnap())
        })
    }, [api])

    // Autoplay do carrossel
    useEffect(() => {
        if (!api) {
            return
        }

        const autoplay = setInterval(() => {
            api.scrollNext()
        }, 4000) // Troca de imagem a cada 4 segundos

        return () => clearInterval(autoplay)
    }, [api])

    if (!mounted) return null

    const images = [
        { src: '/lawyer-1.jpg', alt: 'Dra. Glória Menezes - Foto 1' },
        { src: '/lawyer-2.png', alt: 'Dra. Glória Menezes - Foto 2' },
        { src: '/lawyer-3.png', alt: 'Dra. Glória Menezes - Foto 3' },
        { src: '/lawyer-4.jpeg', alt: 'Dra. Glória Menezes - Foto 4' },
        { src: '/lawyer-5.jpeg', alt: 'Dra. Glória Menezes - Foto 5' },
    ]

    const stats = [
        {icon: DollarSign, number: '+ R$ 3 bi', label: 'em crédito rural administrado'},
        {icon: Clock, number: '+8 anos', label: ' em instituição financeira'},
        {icon: FileCheck, number: 'FBB420', label: 'Certificação Crédito Rural'},
        {icon: GraduationCap, number: 'Especialização', label: 'Direito Agrário e Agronegócio'},
    ]

    return (
        <section id="sobre" className="py-20 bg-[#1a1a1a] section-padding">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial={{opacity: 0, y: 50}}
                    animate={inView ? {opacity: 1, y: 0} : {opacity: 0, y: 50}}
                    transition={{duration: 0.8}}
                    className="text-center mb-16"
                >
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto italic">
                        A segurança de uma advocacia que compreende os fluxos internos do sistema financeiro.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
                    <motion.div
                        initial={{opacity: 0, x: -50}}
                        animate={inView ? {opacity: 1, x: 0} : {opacity: 0, x: -50}}
                        transition={{duration: 0.8, delay: 0.2}}
                    >
                        <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-light-beige mb-6">
                            Glória Menezes
                        </h2>

                        <div className="space-y-4 text-gray-300 leading-relaxed text-justify">
                            <p>
                                Advogada com atuação no Direito do Agronegócio e mais de 8 anos de experiência no setor bancário, com vivência prática em análise e gestão de crédito rural. Sua atuação reúne conhecimento jurídico e compreensão das instituições financeiras, com foco em renegociação de dívidas, contratos, regularização de propriedades e proteção patrimonial no campo.
                            </p>

                        
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{opacity: 0, x: 50}}
                        animate={inView ? {opacity: 1, x: 0} : {opacity: 0, x: 50}}
                        transition={{duration: 0.8, delay: 0.4}}
                        className="relative"
                    >
                        <div className="relative group">
                            <Carousel 
                                setApi={setApi}
                                opts={{
                                    align: 'start',
                                    loop: true,
                                }}
                                className="w-full"
                            >
                                <CarouselContent>
                                    {images.map((image, index) => (
                                        <CarouselItem key={index}>
                                            <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-xl">
                                                <Image
                                                    src={image.src}
                                                    alt={image.alt}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                            </Carousel>

                            {/* Botões de navegação - estilo Instagram */}
                            <button
                                onClick={() => api?.scrollPrev()}
                                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
                                aria-label="Foto anterior"
                            >
                                <ChevronLeft className="w-6 h-6 text-gray-800" />
                            </button>

                            <button
                                onClick={() => api?.scrollNext()}
                                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
                                aria-label="Próxima foto"
                            >
                                <ChevronRight className="w-6 h-6 text-gray-800" />
                            </button>

                            {/* Indicadores - estilo Instagram */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                                {images.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => api?.scrollTo(index)}
                                        className={`transition-all duration-300 rounded-full ${
                                            index === current 
                                                ? 'w-8 h-2 bg-white' 
                                                : 'w-2 h-2 bg-white/50 hover:bg-white/75'
                                        }`}
                                        aria-label={`Ir para foto ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{opacity: 0, y: 50}}
                    animate={inView ? {opacity: 1, y: 0} : {opacity: 0, y: 50}}
                    transition={{duration: 0.8, delay: 0.6}}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-[#252525] p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow border border-gray-800"
                        >
                            <div className="flex justify-center mb-4">
                                <div className="w-16 h-16 bg-brown/20 rounded-full flex items-center justify-center">
                                    <stat.icon className="w-8 h-8 text-brown"/>
                                </div>
                            </div>
                            <div className="text-3xl font-bold text-light-beige mb-2">{stat.number}</div>
                            <div className="text-gray-400">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{opacity: 0, y: 50}}
                    animate={inView ? {opacity: 1, y: 0} : {opacity: 0, y: 50}}
                    transition={{duration: 0.8, delay: 0.8}}
                    className="mt-16 text-center"
                >
                    <p className="text-xl text-gray-300 italic max-w-4xl mx-auto">
                        Resultados construídos com base em experiência real e domínio técnico do mercado.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default About