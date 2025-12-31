'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Wheat, 
  Banknote, 
  FileCheck, 
  Gavel, 
  Leaf, 
  Building2,
  CircleDollarSign,
  Users
} from 'lucide-react'

const Areas = () => {
  const [mounted, setMounted] = useState(false)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  const areas = [
    {
      icon: Banknote,
      title: 'Crédito Rural',
      description: 'Especialização em todas as modalidades de crédito rural, desde financiamentos de custeio até investimentos em longo prazo.',
      details: [
        'Custeio agrícola e pecuário',
        'Financiamento para investimentos',
        'Comercialização e industrialização',
        'PRONAF e programas governamentais'
      ]
    },
    {
      icon: CircleDollarSign,
      title: 'Renegociação de Dívidas',
      description: 'Atuação estratégica na renegociação de passivos rurais, buscando as melhores condições para nossos clientes.',
      details: [
        'Alongamento de dívidas vencidas',
        'Prorrogação compulsória',
        'Novação de contratos',
        'Defesa em execuções fiscais'
      ]
    },
    {
      icon: FileCheck,
      title: 'CPR e Contratos',
      description: 'Elaboração e análise de Cédulas de Produto Rural e contratos agrícolas com segurança jurídica.',
      details: [
        'CPR física e financeira',
        'Contratos de compra e venda',
        'Arrendamento rural',
        'Parceria agrícola'
      ]
    },
    {
      icon: Gavel,
      title: 'Contencioso Rural',
      description: 'Defesa judicial e extrajudicial em questões relacionadas ao agronegócio.',
      details: [
        'Ações de cobrança',
        'Execuções de títulos',
        'Embargos e defesas',
        'Recursos e apelações'
      ]
    },
    {
      icon: Leaf,
      title: 'Direito Ambiental',
      description: 'Consultoria em legislação ambiental aplicada ao setor rural.',
      details: [
        'Licenciamento ambiental',
        'CAR e regularização',
        'Reserva legal',
        'Defesa em autuações'
      ]
    },
    {
      icon: Building2,
      title: 'Cooperativas',
      description: 'Assessoria jurídica completa para cooperativas agropecuárias.',
      details: [
        'Constituição e registro',
        'Governança corporativa',
        'Assembleias e atas',
        'Contratos cooperativos'
      ]
    },
    {
      icon: Wheat,
      title: 'Direito Agrário',
      description: 'Consultoria em questões fundiárias e propriedade rural.',
      details: [
        'Regularização fundiária',
        'Usucapião rural',
        'Desapropriação',
        'Sucessão rural'
      ]
    },
    {
      icon: Users,
      title: 'Consultoria Preventiva',
      description: 'Orientação jurídica para prevenir conflitos e garantir segurança nas operações.',
      details: [
        'Due diligence rural',
        'Compliance agrícola',
        'Planejamento sucessório',
        'Gestão de riscos'
      ]
    }
  ]

  if (!mounted) {
    return (
      <section id="areas" className="section-padding bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-dark-green mb-4">
              Áreas de Atuação
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluções jurídicas especializadas para o agronegócio
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="areas" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-dark-green mb-4">
            Áreas de Atuação
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções jurídicas especializadas para o agronegócio
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {areas.map((areaItem, index) => {
            const IconComponent = areaItem.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.05 }}
                className="card-hover bg-white p-6 rounded-xl border border-gray-100 group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-brown/10 rounded-lg mb-4 group-hover:bg-brown/20 transition-colors">
                  <IconComponent className="w-6 h-6 text-brown" />
                </div>
                
                <h3 className="text-lg font-bold text-dark-green mb-3">
                  {areaItem.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {areaItem.description}
                </p>
                
                <div className="space-y-2">
                  {areaItem.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-light-green rounded-full mt-2 mr-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-600">{detail}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Areas