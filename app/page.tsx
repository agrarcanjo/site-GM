
import Header from '@/components/header'
import Hero from '@/components/hero'
import About from '@/components/about'
import Services from '@/components/services'
import Areas from '@/components/areas'
import FAQ from '@/components/faq'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Areas />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
