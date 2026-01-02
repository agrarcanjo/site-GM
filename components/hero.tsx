'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Phone, MessageSquare, ArrowDown } from 'lucide-react'

const Hero = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToContact = () => {
    const element = document.getElementById('contato')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const openWhatsApp = () => {
    window.open('https://wa.me/5562982144754?text=Olá, gostaria de saber mais sobre seus serviços de advocacia em crédito rural.', '_blank')
  }

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-24 sm:pt-0">
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          {mounted && (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/background-video.mp4" type="video/mp4" />
            </video>
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-dark-green/80 to-brown/70"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl lg:text-6xl font-playfair font-bold mb-6"
            >
              Glória{' '}
              <span className="text-light-green">Menezes</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl lg:text-2xl mb-4 text-gray-100"
            >
              Estratégia jurídica para superar o endividamento e proteger o seu legado no campo
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg mb-8 text-gray-200 leading-relaxed"
            >
              Com sólida experiência no setor bancário, atuamos para restaurar a viabilidade econômica e a capacidade produtiva do produtor rural, transformando passivos em soluções sustentáveis.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={openWhatsApp}
                className="inline-flex items-center justify-center px-8 py-4 bg-light-green text-dark-green font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <MessageSquare size={20} className="mr-2" />
                WhatsApp
              </button>

              <button
                onClick={scrollToContact}
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-dark-green transition-all duration-300 hover:scale-105"
              >
                <Phone size={20} className="mr-2" />
                Agendar Consulta
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/lawyer-photo-main.png"
                alt="Dra. Glória Menezes"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDown className="w-8 h-8 text-white animate-bounce" />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero