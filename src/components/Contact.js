import { useRef, useState } from 'react';
import emailjs from "@emailjs/browser";


const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    })

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm({ ...form, [name]: value })
    }


    // template_g92dwni
    // service_bw0b7vc
    // grVbgbfuOkvQumoHk
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.send(
            'service_bw0b7vc',
            'template_g92dwni',
            {
                from_name: form.name,
                to_name: 'Akshay',
                from_email: form.email,
                to_email: 'akshayrs096@gmail.com',
                message: form.message,
            },
            'grVbgbfuOkvQumoHk'
        ).then(() => {
            setLoading(false);
            alert("Thank you. I will get back to you as soon as possible.");
            setForm({
                name: "",
                email: "",
                message: "",
            });
        },
            (error) => {
                setLoading(false);
                console.log(error);
                alert("Ahh, something went wrong. Please try again.");
            }
        )
    }
    return (
        <section id='contact'>
        <div className="w-full px-6 pb-6 md:px-40">
            <div
                className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
            >
                <div
                    className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
                >
                    <h1
                        className="text-4xl font-extrabold sm:text-7xl md:text-8xl"
                        data-aos='fade-up'
                        data-aos-delay='200'
                        data-aos-offset='200'
                    >
                        Get in touch
                    </h1>

                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className='flex flex-col gap-8 mt-12'
                    >
                        <label className='flex flex-col'>
                            <span className='mb-4 font-medium text-black'>Your Name</span>
                            <input
                                type='text'
                                name='name'
                                value={form.name}
                                onChange={handleChange}
                                placeholder="What's your good name?"
                                className='px-6 py-4 font-medium text-black border-none rounded-lg outline-none bg-orange-50 placeholder:text-secondary'
                            />
                        </label>
                        <label className='flex flex-col'>
                            <span className='mb-4 font-medium text-black'>Your email</span>
                            <input
                                type='email'
                                name='email'
                                value={form.email}
                                onChange={handleChange}
                                placeholder="What's your web address?"
                                className='px-6 py-4 font-medium text-black border-none rounded-lg outline-none bg-orange-50 placeholder:text-secondary'
                            />
                        </label>
                        <label className='flex flex-col'>
                            <span className='mb-4 font-medium text-black'>Your Message</span>
                            <textarea
                                rows={7}
                                name='message'
                                value={form.message}
                                onChange={handleChange}
                                placeholder='What you want to say?'
                                className='px-6 py-4 font-medium text-black border-none rounded-lg outline-none bg-orange-50 placeholder:text-secondary'
                            />
                        </label>

                        <button
                            type='submit'
                            className='px-8 py-3 font-bold text-black bg-orange-300 shadow-md outline-none rounded-xl w-fit shadow-primary hover:bg-orange-600'
                        >
                            {loading ? "Sending..." : "Send"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
        </section>
    );
};

export default Contact;
