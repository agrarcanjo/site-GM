'use client'

import {motion} from 'framer-motion'
import {useInView} from 'react-intersection-observer'
import {Quote, Star} from 'lucide-react'

const Testimonials = () => {
    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    const testimonials = [
        {
            name: 'André Aidar',
            role: 'Doutor em Agronegócio e Professor de Direito da PUC/GO',
            content: 'Dra. Glória Menezes foi uma aluna brilhante na Faculdade de Direito e não me  surpreende a grande profissional que ela se tornou, sendo uma das maiores especialistas em crédito rural da nossa região. Tenho imensa segurança e tranquilidade em trabalhar ao lado dela na defesa dos produtores rurais.',
            rating: 5
        },
        {
            name: 'Alex Miller',
            role: 'CEO Academia de Negócios Agro',
            content: 'Quando o assunto envolve o agro, o crédito rural e judiciário, a Glória é, para mim uma referência! Hoje, não basta apenas conhecimento teórico, a prática faz toda a diferença e esse é o diferencial dela.',
            rating: 5
        },
        {
            name: 'Fazenda Santa Rita Ltda.',
            role: 'Grupo Agropecuário - RS',
            content: 'A Doutora Glória Menezes é uma profissional de sólida bagagem no setor bancário, aplicando seu conhecimento com precisão e estratégia ao agronegócio. Sua atuação técnica demonstra visão prática e segurança jurídica que traz soluções consistentes e bem estruturadas.',
            rating: 5
        },
        {
            name: 'Frederico',
            role: 'Conselheiro da OAB, Doutor em Direito Agrário',
            content: 'Contratamos os serviços para estruturação de contratos de parceria agrícola. O trabalho foi impecável, com atenção a todos os detalhes legais e comerciais. Recomendamos sem reservas.',
            rating: 5
        },
        {
            name: 'Daniella',
            role: 'Advogada especialista em crédito rural',
            content: 'A Dra. Glória nos orientou na recuperação judicial da fazenda. Graças ao seu trabalho, conseguimos manter nossa propriedade e reorganizar as finanças. Gratidão eterna!',
            rating: 5
        },
        {
            name: 'Luciana Bernardes',
            role: 'Superintendente de Crédito em instituição financeira',
            content: 'Assessoria completa em compliance e governança corporativa. Trabalho de altíssima qualidade que elevou o padrão da nossa gestão jurídica. Parceria de longo prazo garantida.',
            rating: 5
        }
    ]

    return (
        <section id="depoimentos" className="py-20 bg-gray-100 section-padding">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial={{opacity: 0, y: 50}}
                    animate={inView ? {opacity: 1, y: 0} : {opacity: 0, y: 50}}
                    transition={{duration: 0.8}}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-dark-green mb-6">
                        Depoimentos
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        O depoimento de nossos parceiros é nossa maior conquista
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{opacity: 0, y: 50}}
                            animate={inView ? {opacity: 1, y: 0} : {opacity: 0, y: 50}}
                            transition={{duration: 0.8, delay: index * 0.1}}
                            className="card-hover bg-gray-50 p-8 rounded-xl border border-gray-100 relative"
                        >
                            <Quote className="absolute top-4 right-4 w-8 h-8 text-brown/20"/>

                            <div className="flex items-center mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current"/>
                                ))}
                            </div>

                            <p className="text-gray-700 mb-6 leading-relaxed italic">
                                "{testimonial.content}"
                            </p>

                            <div>
                                <p className="font-bold text-dark-green">{testimonial.name}</p>
                                <p className="text-sm text-brown">{testimonial.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{opacity: 0, y: 50}}
                    animate={inView ? {opacity: 1, y: 0} : {opacity: 0, y: 50}}
                    transition={{duration: 0.8, delay: 0.8}}
                    className="text-center mt-16"
                >
                    <div className="bg-gradient-to-r from-light-green/20 to-brown/10 p-8 rounded-2xl">
                        <h3 className="text-2xl font-bold text-dark-green mb-4">
                            Seja o próximo case de sucesso!
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Entre em contato e descubra como podemos ajudar você a alcançar seus objetivos no
                            agronegócio
                        </p>
                        <button
                            onClick={() => {
                                const element = document.getElementById('contato')
                                if (element) {
                                    element.scrollIntoView({behavior: 'smooth'})
                                }
                            }}
                            className="btn-primary px-8 py-3"
                        >
                            Solicitar Atendimento
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Testimonials
