import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Pricing from "./components/Pricing"
import Testimonial from "./components/Testimonials"
import Footer from "./components/Footer"
import Features from "./components/Features"
import { useEffect, useState } from "react"

function App() {
  const [scrolled, setOnScrolled] = useState(false)

  useEffect(()=>{

    const handleScroll = ()=>setOnScrolled(window.scrollY > 50)

    window.addEventListener("scroll",handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  },[])
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <Navbar onscroll = {scrolled}/>
      <Hero/>
      <Features/>
      <Pricing/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default App
