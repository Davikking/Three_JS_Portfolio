import React, {Suspense} from 'react'
import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera, Ring} from "@react-three/drei";
import { HackerRoom } from '../components/HackerRoom.jsx';
import CanvasLoader from "../components/CanvasLoader.jsx";

import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "../constants/index.js";
import Target from "../components/target.jsx";
import ReactLogo from "../components/ReactLogo.jsx";
import Cube from "../components/Cube.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import Button from "../components/Button.jsx";

const Hero = () => {

    const isSmall =useMediaQuery({maxWidth: 480});
    const isMobile = useMediaQuery({maxWidth: 768});
    const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024});
    const sizes = calculateSizes(isSmall,isMobile, isTablet);
    return (
        <section className="min-h-screen w-full flex flex-col relative">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl font-medium text-white text-center font-generalsans">
                    <span className="waving-hand">👋🏻</span> My name is Christoph,

                     I am a Software Developer and Cybersecurity Specialist with a focus on the games industry.
                </p>
               <p className="hero_tag">
                   building fun apps and cool games
               </p>
                <div className="w-full h-full absolute inset-0">

                    <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader />}>
                            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
                        <HeroCamera isMobile={isMobile}>
                            <HackerRoom
                                scale={sizes.deskScale}
                                position={sizes.deskPosition}
                                rotation={[0.6,3,0]}
                                />
                        </HeroCamera>
                        <group>
                                <Target position={sizes.targetPosition} />
                                <ReactLogo position={sizes.reactLogoPosition} />
                                <Cube position={sizes.cubePosition} />
                                <Ring position={sizes.ringPosition} />

                            </group>


                            <ambientLight intensity = {1} />
                            <directionalLight  position={[10, 10, 10]} intensity = {0.5} />
                    </Suspense>
                    </Canvas>
                </div>
                <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
                    <a href="#contact" className="w-fit">
                        <Button name="Lets Connect" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
                    </a>

                </div>
            </div>
        </section>
    )
}
export default Hero
