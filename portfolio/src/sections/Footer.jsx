import React from 'react'

const Footer = () => {
    return (
        <section className={"c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5"}>
            <div className={"text-white-500 flex gap-2"}>
                <p>Terms & Conditions</p>
                <p></p>
                <p>Privacy Policy</p>
            </div>
            <div className={"flex gap-2"}>
                <div className={"social-icon"}>
                    <a href={"https://github.com/Davikking"} className={"social-icon"}>
                    <img src={"/assets/github.svg"} alt={"github"} className={"w-1/2 h-1/2"}/>
                    </a>
                </div>
                <div className={"social-icon"}>
                    <a href={"https://www.linkedin.com/in/christoph-schwartz-5546311b2"} className={"social-icon"}>
                    <img src={"/assets/LinkedIn_icon.svg.png"} alt={"Linkedin"} className={"w-1/2 h-1/2"}/>
                    </a>
                </div>
            </div>
            <p className={"text-white-500"}>
                © 2025 Christoph Schwartz all rights reserved

            </p>
        </section>
    )
}
export default Footer
