function Projects() {
    return(
        <>
        <section id="projects" className="flex flex-col mx-28 min-h-screen">
            <h1 className="text-4xl font-bold mb-4 text-primary mt-30 text-center">Projects</h1>
            <p className="text-center text-secondary"> These are the projects I've worked on in university</p>
            <section className="flex flex-col items-start mt-8">
                <h1 className="text-primary font-semibold">Lensz</h1>
                <p className="text-secondary mt-2 mb-4">A web application to help "Optik Gembira" in inventory checking. This web application uses React Typescript and some of the components are made by using Shadcn.</p>
                <h1 className="text-primary font-semibold">Garuda Hacks - FrugalWatt</h1>
                <p className="text-secondary mt-2 mb-4">A project made during Garuda Hacks Hackathon. Me and my group come up with an idea for sustainability where we keep track of energy consumption. The web uses Next.js and the database is directly connected to Supabase.</p>
                <h1 className="text-primary font-semibold">JualannMommy</h1>
                <p className="text-secondary mt-2 mb-4">A website for a client that has a shopping service on clothing where the admin can input catalog to the website and is saved into the database. The website uses Laravel PHP blade and MySQL. </p>
                <h1 className="text-primary font-semibold">MyUMN MockUp</h1>
                <p className="text-secondary mt-2 mb-4">A website that is made up some features on MyUMN, Universitas Multimedia Nusantara's portal. This mockup uses PHP and MySQL </p>
            </section>

        </section>
        <div>
        </div>
        </>
    )
}

export default Projects;