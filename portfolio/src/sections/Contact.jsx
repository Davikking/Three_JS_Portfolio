import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    })
    const handleSubmit = async(e) => {
        e.preventDefault();
        setLoading(true);
        try{
            await emailjs.send("service_fw86b9f", "template_yn4up7a", {from_name: form.name, to_name: 'Christoph', from_email: form.email, to_email: 'christophschwartz50@gmail.com', message: form.message}, 'rWcyVeeTzkI5CVcE6' );
            setLoading(false);
            alert('Message sent!');
            setForm({
                name: '',
                email: '',
                message: ''
            })
        }
        catch(err){
            setLoading(false);
            console.log(err);
            alert('There was an error trying to send the message. Please try again later.');
        }

    }
    const handleChange = ({target:{name, value}}) => {
        setForm({...form, [name]: value});
    }
    //service_fw86b9f
    return (
        <section className="c-space my-20"  id={"contact"}>
            <div className="relative min-h-screen flex items-center justify-center flex-col">
                <img src="/assets/terminal.png" alt="terminal-bg" className="absolute inset-0 min-h-screen" />
                <div className={"contact-container"}>
                    <h3 className="head-text"> Reach Out</h3>
                    <p className={"text-lg text-white-600"}>
                        Whether you are looking to hire me, want to build websites or improve an existing one, I am here to help!
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit} className={"mt-12 flex flex-col spacy-y-7"}>
                        <label className={"space-y-3"}>
                            <span className={"field-label"}>
                                Full Name
                            </span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className={"field-input"}
                                placeholder="Davik King"
                                />

                        </label>
                        <label className={"space-y-3"}>
                            <span className={"field-label"}>
                                email
                            </span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className={"field-input"}
                                placeholder="email@example.com"
                            />

                        </label>
                        <label className="space-y-3">
                            <span className="field-label">Your message</span>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="field-input"
                                placeholder="Share your thoughts or inquiries..."
                            />
                        </label>
                        <button className={"field-btn" } type="submit" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}
                            <img src={"/assets/arrow-up.png"} alt={"arrow-up"} className={"field-btn_arrow"}/>
                        </button>
                    </form>
                </div>

            </div>

        </section>
    )
}
export default Contact
