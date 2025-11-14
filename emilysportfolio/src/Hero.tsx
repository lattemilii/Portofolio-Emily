function Hero() {

    const downloadCV = () => {
        const link = document.createElement('a');
                // Vite serves files from the `public` folder at the root path
                link.href = '/files/CV_Emily Francesca Gouw.pdf';
        link.download = 'Emily Francesca Gouw_CV.pdf';
        link.click();
    };

    return(
        <>
                <section id="home" className="flex flex-col justify-center min-h-screen  sm:px-6 md:px-24 overflow-x-hidden">
                        <div className="w-full max-w-5xl mx-auto">
                            <h1 className="text-2xl sm:text-4xl md:text-6xl md:text-center font-bold mb-4 text-primary text-center md:text-left break-words">
                                Nice to meet you, I'm Emily!
                            </h1>
                            <p className="text-secondary text-center md:text-left whitespace-normal">
                                Web Development, Data Engineering, and Computer Networks Enthusiast
                            </p>
                            <div className="mt-6 flex justify-center md:justify-start">
                                <button onClick={downloadCV} aria-label="Download CV" className="button text-input inline-flex items-center justify-center px-4 py-2">
                                    My CV
                                </button>
                            </div>
                        </div>
                </section>
        </>
    )
}

export default Hero;