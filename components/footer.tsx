
import Image from 'next/image'
import { Instagram, Linkedin, Mail, Phone } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-dark-green text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand & Contact */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative w-10 h-10">
                <Image
                  src="/logo-3.png"
                  alt="Glória Menezes Advocacia"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-playfair font-bold">Glória Menezes</h3>
                <p className="text-sm text-light-green">Advocacia Especializada</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Especialista em crédito rural e direito do agronegócio, oferecendo soluções jurídicas 
              eficazes para produtores rurais e empresas do setor.
            </p>
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

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Áreas de Atuação</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#servicos" className="hover:text-light-green transition-colors">
                  Crédito Rural
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-light-green transition-colors">
                  Negociação de Dívidas
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-light-green transition-colors">
                  CPR e Operações de Crédito
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-light-green transition-colors">
                  Contratos do Agronegócio
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-light-green transition-colors">
                  Recuperação Judicial Rural
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-light-green" />
                <div>
                  <p className="text-gray-300">WhatsApp</p>
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
                  <p className="text-gray-300">Email</p>
                  <a 
                    href="mailto:gloriamenezesadv@gmail.com"
                    className="text-white hover:text-light-green transition-colors"
                  >
                    gloriamenezesadv@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-gray-300 text-sm mb-2">Horário de Atendimento:</p>
              <p className="text-white text-sm">Segunda a Sexta: 8h às 18h</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Glória Menezes Advocacia. Todos os direitos reservados.
          </p>
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <span>OAB/GO</span>
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
