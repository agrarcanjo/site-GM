'use client'

import {useEffect, useState} from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion'
import {useInView} from 'react-intersection-observer'
import {Clock, DollarSign, FileCheck, GraduationCap} from 'lucide-react'

const About = () => {
    const [mounted, setMounted] = useState(false)
    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    const stats = [
        {icon: DollarSign, number: '+ R$ 3 bi', label: 'em crédito rural administrado'},
        {icon: Clock, number: '+ 7 anos', label: 'atuando em instituição financeira'},
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
                        "A segurança de uma advocacia que compreende os fluxos internos do sistema financeiro."
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
                                Advogada com sólida vivência no mercado financeiro, com mais de sete anos de <strong>experiência
                                no setor bancário</strong>, onde desenvolveu expertise em análise e gestão de <strong>Crédito
                                Rural</strong>. Com atuação destacada na administração de mais de <strong>R$ 3
                                bilhões em recursos</strong> e definição de taxas de juros, possui <strong>domínio dos
                                fluxos internos das instituições financeiras</strong>, garantindo um <strong>diferencial
                                estratégico</strong> ao identificar soluções precisas para as demandas de produtores
                                rurais junto ao sistema bancário e demais financiadoras.
                            </p>

                            <p>
                                Graduada em Direito pela Pontifícia Universidade Católica de Goiás (PUC-GO) é
                                pós-graduanda em Direito Agrário e do Agronegócio e possui a certificação FBB420
                                (Crédito Rural) pela Febraban. Sua atuação une o conhecimento prático e técnico das
                                normas bancárias à especialização em Direito do Agronegócio, entregando soluções seguras
                                para a renegociação de dívidas, regularização de propriedades e proteção do patrimônio
                                no campo.
                            </p>

                            <p>
                                Sua atuação une o conhecimento prático e técnico das normas bancárias à especialização
                                em Direito Agrário, entregando soluções seguras para a renegociação de dívidas,
                                regularização de propriedades e proteção do patrimônio no campo.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{opacity: 0, x: 50}}
                        animate={inView ? {opacity: 1, x: 0} : {opacity: 0, x: 50}}
                        transition={{duration: 0.8, delay: 0.4}}
                        className="relative"
                    >
                        <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-xl">
                            <Image
                                src="/lawyer-photo.jpg"
                                alt="Dra. Glória Menezes"
                                fill
                                className="object-cover"
                            />
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
                        "Resultados construídos com base em experiência real e domínio técnico do mercado."
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default About