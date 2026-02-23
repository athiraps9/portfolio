import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Front-End",
      skills: ["HTML5", "CSS3", "Bootstrap 3", "Tailwind CSS", "JavaScript", "React.js","Next.js"]
    },
    {
      title: "UI/UX & Tools",
      skills: ["Figma","Photoshop","Vercel", "Vite"]
    },
    {
      title: "Backend & APIs",
      skills: ["Node.js", "Express.js", "RESTful APIs", "JSON", "API Integration"]
    },
    {
      title: "Databases",
      skills: ["MySQL", "MongoDB"]
    },
    {
      title: "Version Control",
      skills: ["Git", "GitHub"]
    },
    {
      title: "Development Tools",
      skills: ["VS Code", "MS Office"]
    },
   
    {
      title: "Soft Skills",
      skills: ["Team Collaboration", "Mentoring", "Leadership", "Technical Support", "Business Analysis"]
    }
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 bg-secondary">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 sm:mb-16 text-center animate-fade-in">
            <h2 className="mb-4 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Skills & <span className="text-primary">Expertise</span>
            </h2>
            <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto px-4">
              A comprehensive toolkit for building modern, scalable web applications
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category, index) => (
              <Card 
                key={category.title}
                className="border-white/10 bg-navy-light hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in hover:border-primary/30"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl text-primary">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill}
                        variant="secondary"
                        className="bg-white/10 text-white/90 hover:bg-primary hover:text-primary-foreground transition-all cursor-default border border-white/20 text-xs sm:text-sm"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;