import Image from 'next/image'
import { Instagram, Linkedin, Mail, Phone } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-dark-green text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative w-10 h-10">
                <Image
                  src="/logo.png"
                  alt="Glória Menezes Advocacia"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-playfair font-bold">Glória Menezes</h3>
                <p className="text-sm text-light-green">Advocacia do Agronegócio</p>
              </div>
            </div>
            <p className="text-gray-300 mb-2">
              OAB/GO n° 75263
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Áreas de Atuação</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#areas" className="hover:text-light-green transition-colors">
                  Crédito Rural e Endividamento
                </a>
              </li>
              <li>
                <a href="#areas" className="hover:text-light-green transition-colors">
                  Direito Agrário e Imobiliário
                </a>
              </li>
              <li>
                <a href="#areas" className="hover:text-light-green transition-colors">
                  Gestão Ambiental
                </a>
              </li>
              <li>
                <a href="#areas" className="hover:text-light-green transition-colors">
                  Planejamento Sucessório
                </a>
              </li>
              <li>
                <a href="#areas" className="hover:text-light-green transition-colors">
                  Propriedade Intelectual
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-light-green" />
                <div>
                  <a 
                    href="https://wa.me/5562982144754" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-light-green transition-colors"
                  >
                    (62) 98214-4754
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-light-green" />
                <div>
                  <a 
                    href="mailto:gloriamenezes.adv@gmail.com"
                    className="text-white hover:text-light-green transition-colors"
                  >
                    gloriamenezes.adv@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3">Siga-nos:</h4>
              <div className="flex space-x-3">
                <a
                  href="https://www.instagram.com/gloriamenezs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-brown rounded-lg flex items-center justify-center hover:bg-brown/80 transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/gloria-menezes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-brown rounded-lg flex items-center justify-center hover:bg-brown/80 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Glória Menezes Advocacia. Todos os direitos reservados.
          </p>
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <span>OAB/GO n° 75263</span>
            <span>•</span>
            <span>Crédito Rural</span>
            <span>•</span>
            <span>Agronegócio</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer