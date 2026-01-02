'use client'

import {useEffect, useState} from 'react'
import {motion} from 'framer-motion'
import {useInView} from 'react-intersection-observer'
import {useToast} from '@/hooks/use-toast'
import {Clock, Instagram, Linkedin, Mail, MapPin, MessageSquare, Phone, Send} from 'lucide-react'

const Contact = () => {
    const [mounted, setMounted] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    })

    const {toast} = useToast()
    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            if (response.ok) {
                toast({
                    title: "Mensagem enviada com sucesso!",
                    description: "Entraremos em contato em breve.",
                })
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    subject: '',
                    message: ''
                })
            } else {
                throw new Error('Erro ao enviar mensagem')
            }
        } catch (error) {
            toast({
                title: "Erro ao enviar mensagem",
                description: "Tente novamente ou entre em contato pelo WhatsApp.",
                variant: "destructive",
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    const contactInfo = [
        {
            icon: Phone,
            title: 'Telefone/WhatsApp',
            content: '(62) 98214-4754',
            action: () => window.open('https://wa.me/5562982144754', '_blank')
        },
        {
            icon: Mail,
            title: 'Email',
            content: 'gloriamenezes.adv@gmail.com',
            action: () => window.open('mailto:gloriamenezes.adv@gmail.com', '_blank')
        },
        {
            icon: MapPin,
            title: 'Localização',
            content: 'Goiânia - GO',
            action: null
        },
        {
            icon: Clock,
            title: 'Horário de Atendimento',
            content: 'Segunda a Sexta: 8h às 18h',
            action: null
        }
    ]

    const subjectOptions = [
        'Crédito Rural e Endividamento',
        'Direito Agrário e Imobiliário',
        'Gestão Ambiental e Sustentabilidade',
        'Planejamento Sucessório e Societário',
        'Propriedade Intelectual e Inovação',
        'Outro assunto'
    ]

    return (
        <section id="contato" className="py-20 bg-[#1a1a1a] section-padding">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial={{opacity: 0, y: 50}}
                    animate={inView ? {opacity: 1, y: 0} : {opacity: 0, y: 50}}
                    transition={{duration: 0.8}}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-light-green mb-6">
                        Entre em Contato
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto italic">
                        "Nossa atuação une o rigor do Direito Agrário à expertise operacional do Crédito Rural,
                        entregando soluções que se alinham à realidade das instituições financeiras e atendem às
                        necessidades do produtor."
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16">
                    <motion.div
                        initial={{opacity: 0, x: -50}}
                        animate={inView ? {opacity: 1, x: 0} : {opacity: 0, x: -50}}
                        transition={{duration: 0.8, delay: 0.2}}
                    >
                        <h3 className="text-2xl font-bold text-light-green mb-8">
                            Informações de Contato
                        </h3>

                        <div className="space-y-6 mb-8">
                            {contactInfo.map((info, index) => (
                                <div
                                    key={index}
                                    className={`flex items-start space-x-4 p-4 rounded-lg ${
                                        info.action ? 'cursor-pointer hover:bg-[#252525] transition-colors' : 'bg-[#252525]'
                                    } border border-gray-800`}
                                    onClick={info.action || undefined}
                                >
                                    <div
                                        className="flex-shrink-0 w-12 h-12 bg-brown/20 rounded-lg flex items-center justify-center">
                                        <info.icon className="w-6 h-6 text-brown"/>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-light-green mb-1">{info.title}</p>
                                        <p className="text-gray-400">{info.content}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-light-green mb-4">
                                Redes Sociais
                            </h4>
                            <div className="flex space-x-4">
                                <a
                                    href="https://www.instagram.com/gloriamenezs"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-12 h-12 bg-brown text-white rounded-lg hover:bg-brown/80 transition-colors"
                                >
                                    <Instagram size={24}/>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/gloria-menezes"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-12 h-12 bg-brown text-white rounded-lg hover:bg-brown/80 transition-colors"
                                >
                                    <Linkedin size={24}/>
                                </a>
                                <button
                                    onClick={() => window.open('https://wa.me/5562982144754', '_blank')}
                                    className="flex items-center justify-center w-12 h-12 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                                >
                                    <MessageSquare size={24}/>
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{opacity: 0, x: 50}}
                        animate={inView ? {opacity: 1, x: 0} : {opacity: 0, x: 50}}
                        transition={{duration: 0.8, delay: 0.4}}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                    Nome Completo *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-[#252525] border border-gray-700 rounded-lg focus:ring-2 focus:ring-brown focus:border-transparent transition-all text-white"
                                    placeholder="Seu nome"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                    Email *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-[#252525] border border-gray-700 rounded-lg focus:ring-2 focus:ring-brown focus:border-transparent transition-all text-white"
                                    placeholder="seu@email.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                                    Telefone *
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    required
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-[#252525] border border-gray-700 rounded-lg focus:ring-2 focus:ring-brown focus:border-transparent transition-all text-white"
                                    placeholder="(00) 00000-0000"
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                                    Assunto *
                                </label>
                                <select
                                    id="subject"
                                    name="subject"
                                    required
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-[#252525] border border-gray-700 rounded-lg focus:ring-2 focus:ring-brown focus:border-transparent transition-all text-white"
                                >
                                    <option value="">Selecione um assunto</option>
                                    {subjectOptions.map((option, index) => (
                                        <option key={index} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                    Mensagem *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows={5}
                                    className="w-full px-4 py-3 bg-[#252525] border border-gray-700 rounded-lg focus:ring-2 focus:ring-brown focus:border-transparent transition-all resize-none text-white"
                                    placeholder="Descreva sua necessidade..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-brown text-white py-4 px-6 rounded-lg font-semibold hover:bg-brown/90 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div
                                            className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                        <span>Enviando...</span>
                                    </>
                                ) : (
                                    <>
                                        <Send size={20}/>
                                        <span>Enviar Mensagem</span>
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Contact