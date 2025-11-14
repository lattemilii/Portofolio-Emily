import { Card } from '@/components/ui/card';

function Skills() {
  return (
    <section id="skills" className="flex flex-col items-center justify-center min-h-screen px-4">
      <h1 className="text-4xl font-bold mb-8 text-primary">Skills</h1>

      <div className="flex flex-col gap-12 md:flex-row md:items-start w-full max-w-5xl">
        
        {/* Hard Skills */}
        <div className="flex flex-col space-y-4 flex-1">
          <h2 className="text-3xl font-semibold mb-2 text-primary">Hard Skills</h2>

          <Card className="p-4 bg-accent/10">
            <h2 className="text-2xl font-bold mb-2 text-secondary">Web Development</h2>
            <p className="text-secondary">HTML, CSS, Typescript, JavaScript, React, Tailwind CSS, Vite</p>
          </Card>

          <Card className="p-4 bg-accent/10">
            <h2 className="text-2xl font-bold mb-2 text-secondary">Data Engineering</h2>
            <p className="text-secondary">SQL, PostgreSQL</p>
          </Card>

          <Card className="p-4 bg-accent/10">
            <h2 className="text-2xl font-bold mb-2 text-secondary">Programming Languages</h2>
            <p className="text-secondary">Python, Java, C</p>
          </Card>

          <Card className="p-4 bg-accent/10">
            <h2 className="text-2xl font-bold mb-2 text-secondary">Computer Network</h2>
            <p className="text-secondary">Cisco Packet Tracer</p>
          </Card>
        </div>

        {/* Soft Skills */}
        <div className="flex flex-col space-y-4 flex-1">
          <h2 className="text-3xl font-semibold mb-2 text-primary">Soft Skills</h2>

          <Card className="p-4 bg-accent/10">
            <h2 className="text-2xl font-bold mb-2 text-secondary">Communication</h2>
            <p className="text-secondary">Able to effectively convey ideas and information.</p>
          </Card>

          <Card className="p-4 bg-accent/10">
            <h2 className="text-2xl font-bold mb-2 text-secondary">Teamwork</h2>
            <p className="text-secondary">Collaborative and works well within a team environment.</p>
          </Card>

          <Card className="p-4 bg-accent/10">
            <h2 className="text-2xl font-bold mb-2 text-secondary">Problem-Solving</h2>
            <p className="text-secondary">Adept at analyzing situations and developing solutions.</p>
          </Card>

          <Card className="p-4 bg-accent/10">
            <h2 className="text-2xl font-bold mb-2 text-secondary">Adaptability</h2>
            <p className="text-secondary">Able to adjust to new conditions and challenges.</p>
          </Card>
        </div>

      </div>
    </section>
  );
}

export default Skills;
