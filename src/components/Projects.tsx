import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "QuickChat - Real-time Chat Application",
      description: "A real-time chat application with user authentication, instant messaging, and responsive design. Built with modern web technologies for seamless communication.",
      technologies: ["React.js", "Node.js", "MongoDB", "WebSocket", "Tailwind CSS"],
      liveUrl: "https://quickchat.greatstack.in/login",
      githubUrl: "https://github.com/athiraps9/ChatApp_socket",
      category: "Full Stack"
    },
    {
      title: "MVD Virtual PRO",
      description: "A digital platform that provides easy and coordinated access to MVD services, information, contact details, and public notices, making the department’s services more accessible to the public",
      technologies: ["Figma","Adobe Acrobat"],
      liveUrl: "https://mvdvpro.bmohd.com/",
      githubUrl: "#",
      category: "Government Collaboration"
    },
     {
      title: "MLA Dashboard for  Perinthalmanna Assembly Constituency",
      description: "A transparency-driven web platform that presents verified, real-time insights into an MLA’s activities, attendance, and development initiatives,enabling citizens to access transparent and reliable public information",
      technologies: ["Tailwind CSS","React.js","Node.js","Express.js","Mongodb"],
      liveUrl: "",
      githubUrl: "https://github.com/athiraps9/MLA_dashboard",
      category: ["Freelance","Fullstack"]
    },
    {
      title: "Mini Inventory Dashboard ",
      description: "A mini inventory management system for managing products, tracking stock status, and viewing inventory through a responsive, user-friendly dashboard",
      technologies: ["Vanila CSS","Next.js","Node.js","Express.js","Mongodb"],
      liveUrl: "",
      githubUrl: "https://github.com/athiraps9/mini_inventory_system",
      category: "Fullstack" 
    },
    
   
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 sm:mb-16 text-center animate-fade-in">
            <h2 className="mb-4 text-3xl sm:text-4xl md:text-5xl font-bold text-secondary">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Showcasing real-world applications built with modern technologies and best practices
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 grid-cols-1 lg:grid-cols-2">
            {projects.map((project, index) => (
              <Card 
                key={project.title}
                className="border-border bg-card hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <CardTitle className="text-lg sm:text-xl text-secondary group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <Badge variant="secondary" className="bg-primary/10 text-primary border border-primary/20 text-xs whitespace-nowrap">
                      {project.category}
                    </Badge>
                  </div>
                  <CardDescription className="text-sm sm:text-base text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech}
                        variant="outline"
                        className="bg-secondary/5 text-secondary border-secondary/20 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <Button 
                      size="sm"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Live
                    </Button>
                    <Button 
                      size="sm"
                      variant="outline"
                      className="border-secondary text-secondary hover:bg-secondary hover:text-white w-full sm:w-auto"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Source Code
                    </Button>
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

export default Projects;
