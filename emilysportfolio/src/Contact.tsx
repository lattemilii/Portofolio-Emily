function Contact() {
    return(
        <>
        <section id="contact" className="flex flex-col items-start mx-28 justify-center min-h-screen">
            <h1 className="text-4xl font-bold mb-4 text-primary">Contact Me!</h1>
            <p className="text-start text-secondary">Let's get in touch</p>
            <p className="text-start text-secondary">Phone: +62 878-8715-2688</p>
            <p className="text-start text-accent hover:underline">Email: <a href="mailto:emilygouw4@gmail.com">emilygouw4@gmail.com</a></p>
            <p className="text-start text-accent hover:underline">LinkedIn: <a className="cursor-pointer underline" href="https://www.linkedin.com/in/emilyfgouw">https://www.linkedin.com/in/emilyfgouw</a></p>
        </section>
        </>
    )
}

export default Contact;