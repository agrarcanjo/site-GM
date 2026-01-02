'use client'

import {useEffect, useState} from 'react'
import {motion} from 'framer-motion'
import {useInView} from 'react-intersection-observer'
import {
    Banknote,
    FileCheck,
    Leaf,
    Building2,
    Lightbulb
} from 'lucide-react'

const Areas = () => {
    const [mounted, setMounted] = useState(false)
    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    useEffect(() => {
        setMounted(true)
    }, [])

    const areas = [
        {
            icon: Banknote,
            title: 'Crédito Rural e Endividamento',
            description: 'Consultoria estratégica em operações de financiamento, prorrogação de dívidas rurais, reversão de desclassificação de operações e defesa em execuções, com foco na preservação do fluxo de caixa e do patrimônio do produtor.',
            details: []
        },
        {
            icon: FileCheck,
            title: 'Direito Agrário e Imobiliário',
            description: 'Regularização de propriedades, gestão de conflitos possessórios e estruturação de contratos de arrendamento e parceria, com foco em segurança documental e estabilidade da atividade rural.',
            details: []
        },
        {
            icon: Leaf,
            title: 'Gestão Ambiental e Sustentabilidade',
            description: 'Assessoria em licenciamentos, conformidade com o Código Florestal e defesa em processos administrativos ambientais, alinhando produção e responsabilidade socioambiental.',
            details: []
        },
        {
            icon: Building2,
            title: 'Planejamento Sucessório e Societário',
            description: 'Estruturação de holdings rurais e protocolos familiares para garantir uma sucessão organizada, redução de conflitos e preservação do patrimônio ao longo das gerações.',
            details: []
        },
        {
            icon: Lightbulb,
            title: 'Propriedade Intelectual e Inovação no Agronegócio',
            description: 'Proteção de cultivares, marcas e tecnologias aplicadas ao campo, assegurando competitividade e segurança jurídica em projetos de inovação.',
            details: []
        }
    ]

    if (!mounted) return null

    return (
        <section id="areas" className="py-20 bg-white section-padding">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial={{opacity: 0, y: 50}}
                    animate={inView ? {opacity: 1, y: 0} : {opacity: 0, y: 50}}
                    transition={{duration: 0.8}}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-dark-green mb-6">
                        Áreas de Atuação
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto italic">
                        "Assessoria jurídica completa para o agronegócio, unindo rigor técnico e visão estratégica em
                        todas as etapas da atividade rural."
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {areas.map((area, index) => (
                        <motion.div
                            key={index}
                            initial={{opacity: 0, y: 50}}
                            animate={inView ? {opacity: 1, y: 0} : {opacity: 0, y: 50}}
                            transition={{duration: 0.8, delay: index * 0.1}}
                            className="bg-gray-50 p-8 rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                        >
                            <div className="flex justify-center mb-6">
                                <div className="w-16 h-16 bg-brown/10 rounded-full flex items-center justify-center">
                                    <area.icon className="w-8 h-8 text-brown"/>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-dark-green mb-4 text-center">
                                {area.title}
                            </h3>

                            <p className="text-gray-600 mb-6 text-center leading-relaxed">
                                {area.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Areas