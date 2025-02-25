import React from 'react'
import Navbar from "./sections/navbar.jsx";
import Hero from "./sections/hero.jsx";
import About from "./sections/about.jsx";
import Projects from "./sections/Projects.jsx";

const App = () => {
    return (
        <main className="max-w-7xl mx-auto">
           <Navbar/>
            <Hero/>
            <About/>
            <Projects/>
        </main>
    )
}
export default App
