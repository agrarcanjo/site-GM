'use client'

import {useEffect, useState} from 'react'
import {motion} from 'framer-motion'
import {useInView} from 'react-intersection-observer'
import {
    FileText,
    DollarSign,
    Shield,
    Users,
    Scale,
    TrendingUp,
    CheckCircle,
    ArrowRight
} from 'lucide-react'

const Services = () => {
    const [mounted, setMounted] = useState(false)
    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    const services = [
        {
            icon: DollarSign,
            title: 'Negociação de Dívidas Rurais',
            description: 'Renegociação e alongamento de dívidas de crédito rural, defesa em execuções e acordos estratégicos.',
            features: ['Alongamento de dívidas', 'Defesa em execuções', 'Acordos judiciais', 'Prorrogação compulsória']
        },
        {
            icon: FileText,
            title: 'CPR e Operações de Crédito',
            description: 'Estruturação de CPRs físicas, financeiras e verdes, além de outras modalidades de crédito rural.',
            features: ['CPR Física e Financeira', 'CPR Verde', 'Contratos de financiamento', 'Due diligence']
        },
        {
            icon: Shield,
            title: 'Garantias e Alienação Fiduciária',
            description: 'Constituição, acompanhamento e defesa em questões envolvendo garantias rurais.',
            features: ['Alienação fiduciária', 'Penhor rural', 'Hipoteca cedular', 'Consolidação patrimonial']
        },
        {
            icon: Users,
            title: 'Assessoria a Cooperativas',
            description: 'Consultoria jurídica especializada para cooperativas agropecuárias e seus associados.',
            features: ['Contratos cooperativos', 'Governança corporativa', 'Compliance', 'Resolução de conflitos']
        },
        {
            icon: Scale,
            title: 'Recuperação Judicial Rural',
            description: 'Acompanhamento completo em processos de recuperação judicial para produtores rurais.',
            features: ['Plano de recuperação', 'Assembleia de credores', 'Cumprimento do plano', 'Levantamento patrimonial']
        },
        {
            icon: TrendingUp,
            title: 'Contratos do Agronegócio',
            description: 'Elaboração e revisão de contratos específicos do setor agrícola e agropecuário.',
            features: ['Arrendamento rural', 'Parcerias agrícolas', 'Contratos de barter', 'Supply agreements']
        }
    ]

    return (
        <section id="servicos" className="py-20 bg-gray-100 section-padding">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial={{opacity: 0, y: 50}}
                    animate={inView ? {opacity: 1, y: 0} : {opacity: 0, y: 50}}
                    transition={{duration: 0.8}}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-dark-green mb-6">
                        Nossos Serviços
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Soluções jurídicas especializadas para atender todas as demandas do agronegócio
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{opacity: 0, y: 50}}
                            animate={inView ? {opacity: 1, y: 0} : {opacity: 0, y: 50}}
                            transition={{duration: 0.8, delay: index * 0.1}}
                            className="card-hover bg-gray-50 p-8 rounded-xl border border-gray-100"
                        >
                            <div
                                className="inline-flex items-center justify-center w-16 h-16 bg-brown/10 rounded-full mb-6">
                                <service.icon className="w-8 h-8 text-brown"/>
                            </div>

                            <h3 className="text-xl font-bold text-dark-green mb-4">
                                {service.title}
                            </h3>

                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {service.description}
                            </p>

                            <ul className="space-y-3 mb-6">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-sm text-gray-700">
                                        <CheckCircle size={16} className="text-light-green mr-3 flex-shrink-0"/>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={() => {
                                    const element = document.getElementById('contato')
                                    if (element) {
                                        element.scrollIntoView({behavior: 'smooth'})
                                    }
                                }}
                                className="inline-flex items-center text-brown font-semibold hover:text-dark-green transition-colors"
                            >
                                Saiba mais
                                <ArrowRight size={16} className="ml-2"/>
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{opacity: 0, y: 50}}
                    animate={inView ? {opacity: 1, y: 0} : {opacity: 0, y: 50}}
                    transition={{duration: 0.8, delay: 0.8}}
                    className="text-center mt-16 bg-gradient-to-r from-dark-green to-brown p-8 rounded-2xl text-dark-green"
                >
                    <h3 className="text-2xl font-bold mb-4">
                        Precisa de assessoria jurídica especializada?
                    </h3>
                    <p className="text-lg mb-6 opacity-90">
                        Entre em contato e descubra como podemos ajudar seu negócio no agronegócio
                    </p>
                    <button
                        onClick={() => {
                            const element = document.getElementById('contato')
                            if (element) {
                                element.scrollIntoView({behavior: 'smooth'})
                            }
                        }}
                        className="btn-primary bg-white text-dark-green hover:bg-gray-100 px-8 py-3"
                    >
                        Solicitar Consultoria
                    </button>
                </motion.div>
            </div>
        </section>
    )
}

export default Services
