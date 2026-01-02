'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, Award, Users, Clock, TrendingUp, DollarSign, FileCheck, Shield } from 'lucide-react'

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
    { icon: DollarSign, number: '+ R$ 3 bi', label: 'em crédito rural administrado' },
    { icon: Clock, number: '+ 7 anos', label: 'atuando em instituição financeira' },
    { icon: FileCheck, number: 'FBB420', label: 'Certificação Crédito Rural' },
    { icon: GraduationCap, number: 'Especialização', label: 'Direito Agrário e Agronegócio' },
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
            Glória Menezes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto italic">
            "A segurança de uma advocacia que compreende os fluxos internos do sistema financeiro."
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-playfair font-bold text-dark-green mb-6">
              Experiência Bancária + Especialização Jurídica
            </h3>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Advogada com sólida vivência no mercado financeiro, com mais de sete anos de experiência no setor bancário, onde desenvolveu expertise em análise e gestão de Crédito Rural. Com atuação destacada na administração de mais de R$ 3 bilhões em recursos e definição de taxas de juros, possui domínio técnico dos fluxos internos das instituições financeiras, garantindo um diferencial estratégico ao identificar soluções precisas para as demandas de produtores rurais junto ao sistema bancário e demais financiadoras.
              </p>
              
              <p>
                Graduada em Direito pela Pontifícia Universidade Católica de Goiás (PUC-GO) é pós-graduanda em Direito Agrário e do Agronegócio, possui a certificação FBB420 (Crédito Rural) pela Febraban, credencial que atesta seu domínio técnico sobre as diretrizes do Manual de Crédito Rural (MCR), o Sistema Nacional de Crédito Rural (SNCR) e os programas governamentais de financiamento agropecuário.
              </p>
              
              <p>
                Sua atuação une o conhecimento prático e técnico das normas bancárias à especialização em Direito Agrário, entregando soluções seguras para a renegociação de dívidas, regularização de propriedades e proteção do patrimônio no campo.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/lawyer-photo-2.jpg"
                alt="Dra. Glória Menezes"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-brown/10 rounded-full flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-brown" />
                </div>
              </div>
              <div className="text-3xl font-bold text-dark-green mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-xl text-gray-700 italic max-w-4xl mx-auto">
            "Resultados construídos com base em experiência real e domínio técnico do mercado."
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default About