import React from 'react'
import {clientReviews} from "../constants/index.js";

const Testimonial = () => {
    return (
        <section className={"c-space my-20"}>
            <h3 className={"head-text"}>Hear from the people I've worked with</h3>
            <div className={"client-container"}>
                {clientReviews.map(({id, name, review, img, position}) => (
                    <div key={id} className={"client-review"}>
                        <div>
                            <p class={" font-light text-white"}>
                                {review}
                            </p>
                        </div>
                        <div className={"client-review"}>
                            <div className={"flex gap-3"}>
                                <img src={img} alt={name} className={"w-12 h-12 rounded-full"} />
                                <p className={"font-semibold text-white-800"}>
                                    {name}
                                </p>
                                <p className={"text-white-500 md:text-base text-sm"}>
                                    {position}
                                </p>
                            </div>
                        </div>
                        <div className={"flex self-end items-center gap-2"}>
                            {Array.from({length:5}).map((_, index)=> (
                                <img key={{index}} src={"/assets/star.png"} alt={"star"} className={"w-5 h-5"}/>
                                )
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default Testimonial
