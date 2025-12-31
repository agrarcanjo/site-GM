
'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, Award, Users, Clock } from 'lucide-react'

const About = () => {
  const [mounted, setMounted] = useState(false)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const stats = [
    { icon: Clock, number: '15+', label: 'Anos de Experiência' },
    { icon: Users, number: '500+', label: 'Clientes Atendidos' },
    { icon: Award, number: '95%', label: 'Taxa de Sucesso' },
    { icon: GraduationCap, number: '10+', label: 'Especializações' },
  ]

  return (
    <section id="sobre" className="py-20 bg-gray-50 section-padding">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-dark-green mb-6">
            Sobre a Advocacia
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Especializada em direito do agronegócio com foco em soluções jurídicas eficazes para o setor rural
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-playfair font-bold text-dark-green mb-6">
              Dra. Glória Menezes
            </h3>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Com mais de 15 anos de experiência em direito do agronegócio, dedico-me exclusivamente 
                ao atendimento de produtores rurais, cooperativas e empresas do setor agrícola, oferecendo 
                soluções jurídicas especializadas e eficazes.
              </p>
              
              <p>
                Minha trajetória profissional é marcada por profundo conhecimento em crédito rural, 
                tendo assessorado centenas de clientes em negociações complexas de dívidas, estruturação 
                de CPRs e contratos do agronegócio.
              </p>
              
              <p>
                Formada pela Universidade Federal de Goiás (UFG), com especialização em Direito do 
                Agronegócio pela PUC-GO e MBA em Gestão do Agronegócio. Membro efetivo da Comissão de 
                Direito do Agronegócio da OAB-GO.
              </p>
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-semibold text-dark-green mb-4">Principais Competências:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-brown rounded-full"></div>
                  <span className="text-gray-700">Crédito Rural</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-brown rounded-full"></div>
                  <span className="text-gray-700">Negociação de Dívidas</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-brown rounded-full"></div>
                  <span className="text-gray-700">CPR e Derivatives</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-brown rounded-full"></div>
                  <span className="text-gray-700">Contratos do Agronegócio</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-brown rounded-full"></div>
                  <span className="text-gray-700">Recuperação Judicial Rural</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-brown rounded-full"></div>
                  <span className="text-gray-700">Compliance Agrário</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] max-w-lg mx-auto">
              <Image
                src="/lawyer-photo-2.jpg"
                alt="Dra. Glória Menezes em seu escritório"
                fill
                className="object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-dark-green/10 to-transparent"></div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center card-hover bg-white p-6 rounded-xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-brown/10 rounded-full mb-4">
                <stat.icon className="w-8 h-8 text-brown" />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="text-3xl font-bold text-dark-green mb-2"
              >
                {stat.number}
              </motion.div>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
