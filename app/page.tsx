import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Sustainability from "@/components/sustainability"
import Products from "@/components/products"
import Process from "@/components/process"
import LegalCompliance from "@/components/legal-compliance"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Sustainability />
        <Products />
        <Process />
        <LegalCompliance />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
