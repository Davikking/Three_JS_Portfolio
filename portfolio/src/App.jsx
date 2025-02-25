import React from 'react'
import Navbar from "./sections/navbar.jsx";
import Hero from "./sections/hero.jsx";
import About from "./sections/about.jsx";
import Projects from "./sections/Projects.jsx";
import Testimonial from "./sections/Testimonial.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";
import Work from "./sections/Work.jsx";

const App = () => {
    return (
        <main className="max-w-7xl mx-auto relative">
           <Navbar/>
            <Hero/>
            <About/>
            <Projects/>
            <Testimonial />
            <Work/>
            <Contact/>
            <Footer/>
        </main>
    )
}
export default App
