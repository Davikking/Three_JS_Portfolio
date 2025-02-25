import React from 'react'
import Globe from "react-globe.gl"
import Button from "../components/Button.jsx";
const About = () => {
    const [hasCopied, setHasCopied] = React.useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText('christophshcwartz50@gmail.com')
        setHasCopied(true);
        setTimeout(() => {
            setHasCopied(false)
        }, 2000);
    }
    return (
        <section className="c-space my-20">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className=" col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-cover" />
                        <div>
                            <p className="grid-headtext"> Hi, I'm Christoph </p>
                            <p className="grid-subtext">
                                a programmer, AI researcher, and game developer. My passion for games led me into programming and computer science.
                                Additionally, I develop AI-powered systems, research wireless security threats, and create immersive 3D web experiences using React and Three.js.
                                My work combines cutting-edge technology with a passion for innovation, bridging the gap between security, AI, and interactive design.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-container" />
                        <div>
                            <p className="grid-headtext"> Tech Stack</p>
                            <p className="grid-subtext">
                                I specialize in React.js, Three.js, and Tailwind CSS for building immersive 3D web experiences, alongside Python, PyTorch, and OpenCV for AI-driven applications.
                                I work with Scapy, Wireshark, and networking protocols.
                                 </p>
                        </div>
                    </div>

                </div>
                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe
                                height={326}
                                width={326}
                                background="rgba(0,0,0,0)"
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                />
                        </div>
                        <p className="grid-headtext">
                            I work remotely across most timezones
                        </p>
                        <p className="grid-subtext">
                            I am based in New York, with remote work available.
                        </p>
                        <Button name = "Contact Me" isBeam containerClass="w-full mt-10" />
                    </div>
                </div>
                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />
                        <div>
                            <p className="grid-headtext"> my passion for coding </p>
                            <p className="grid-subtext"> I love solving problems and building cool things that I can see others enjoy.

                            </p>
                        </div>

                    </div>
                </div>
                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img src="/assets/grid4.png" className="w-full sm:h-[276px] md:h-[126px] h-fit object-cover sm:object-top"  alt="grid 4"/>
                        <div className="space-y-2">
                            <p className="grid-subtext text-center">
                                Contact me
                            </p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg' } alt="copy" />
                                <p className="lg:text-2xl md:text-xl font-medium text-gray-gradient text-white">
                                    christophshcwartz50@gmail.com
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
export default About
