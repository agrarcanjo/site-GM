'use client'

import {useEffect, useState} from 'react'
import {motion} from 'framer-motion'
import {useInView} from 'react-intersection-observer'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import {HelpCircle} from 'lucide-react'

const FAQ = () => {
    const [mounted, setMounted] = useState(false)
    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    const faqs = [
        {
            question: 'É possível prorrogar uma dívida rural mesmo após o vencimento?',
            answer: 'Sim. O Manual de Crédito Rural (MCR) prevê mecanismos de prorrogação e reestruturação de débitos em situações específicas, como frustração de safra ou dificuldades de comercialização. A análise técnica dos fluxos bancários é essencial para fundamentar esse direito.'
        },
        {
            question: 'O banco pode desclassificar minha operação de crédito rural?',
            answer: 'A desclassificação ocorre quando a instituição financeira entende que houve desvio de finalidade ou descumprimento de normas. No entanto, essa decisão pode ser revertida caso seja comprovada a regularidade da operação e o cumprimento das diretrizes do SNCR.'
        },
        {
            question: 'Como funciona o planejamento sucessório para propriedades rurais?',
            answer: 'O planejamento sucessório utiliza ferramentas como a constituição de holdings, doações com reserva de usufruto e protocolos familiares. O objetivo é garantir a continuidade da atividade produtiva, reduzir a carga tributária e evitar conflitos entre herdeiros.'
        },
        {
            question: 'O escritório atende produtores de quais regiões?',
            answer: 'Graças à digitalização dos processos judiciais e administrativos, prestamos assessoria jurídica estratégica para produtores rurais e empresas do agronegócio em todo o território nacional, contando também com parceiros especializados em diversas regiões do país.'
        },
        {
            question: 'Qual o diferencial de uma assessoria jurídica com experiência bancária?',
            answer: 'O diferencial reside na compreensão dos processos internos de aprovação e cobrança dos bancos. Isso permite antecipar movimentos da instituição financeira, identificar falhas contratuais e construir propostas de negociação que sejam tecnicamente viáveis para ambas as partes.'
        }
    ]

    return (
        <section id="faq" className="py-20 bg-white section-padding">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial={{opacity: 0, y: 50}}
                    animate={inView ? {opacity: 1, y: 0} : {opacity: 0, y: 50}}
                    transition={{duration: 0.8}}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-light-green/10 mb-6">
                        <HelpCircle className="w-8 h-8 text-dark-green" />
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-dark-green mb-6">
                        Perguntas Frequentes
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Tire suas principais dúvidas sobre nossos serviços jurídicos especializados em direito do agronegócio
                    </p>
                </motion.div>

                <motion.div
                    initial={{opacity: 0, y: 30}}
                    animate={inView ? {opacity: 1, y: 0} : {opacity: 0, y: 30}}
                    transition={{duration: 0.8, delay: 0.2}}
                >
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="border border-gray-200 rounded-lg px-6 py-2 bg-white hover:shadow-lg transition-all duration-300"
                            >
                                <AccordionTrigger className="text-left hover:no-underline">
                                    <span className="text-lg font-semibold text-dark-green pr-4">
                                        {faq.question}
                                    </span>
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-700 leading-relaxed pt-2 pb-4">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div>

                <motion.div
                    initial={{opacity: 0}}
                    animate={inView ? {opacity: 1} : {opacity: 0}}
                    transition={{duration: 0.8, delay: 0.4}}
                    className="mt-12 text-center"
                >
                    <p className="text-gray-600 mb-6">
                        Não encontrou a resposta que procurava?
                    </p>
                    <a
                        href="#contato"
                        className="inline-flex items-center px-8 py-4 bg-brown text-white font-semibold rounded-lg hover:bg-brown/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                        Entre em Contato
                    </a>
                </motion.div>
            </div>
        </section>
    )
}

export default FAQ
