import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Web Developer & Department Coordinator",
      company: "BMO Human Development Pvt Ltd, Kochi",
      period: "April 2024 – Present",
   /*   responsibilities: [
        "Led strategic planning and implementation of digital solutions for subsidiary brands and government collaborated projects",
        "Specialized in front-end development using HTML, CSS, JavaScript, React.js, and Flutter (Dart)",
        "Collaborated with UI/UX teams on wireframing, prototyping, and interface development",
        "Mentored students in Industry on Campus (IOC) program on modern web and mobile frameworks",
        "Implemented efficient API architectures and optimized modular coding practices",
        "Developed web and mobile platforms for HR Management, LMS, Real-time chat application, and Smart Parking Systems"
      ] */
    },
    {
      title: "Technical Assistant",
      company: "National Institute of Technology, Calicut",
      period: "Feb 2023 - March 2024",
     /* responsibilities: [
        "Handled system administration, network maintenance, and desktop support",
        "Performed technical troubleshooting to resolve hardware, software, and network issues",
        "Supported departmental administrative tasks, documentation, and coordination"
      ] */
    },
    {
      title: "Technical Assistant",
      company: "Kmct School of Business",
      period: "Nov 2021 - March 2023",
    /*  responsibilities: [
        "Handled computer hardware and software maintenance to ensure efficient lab operations",
        "Guided and assisted students in computer lab programming activities aligned with KTU PG-MCA syllabus",
        "Supervised postgraduate students in planning and completing academic project work"
      ] */
    },
    {
      title: "Full Stack Developer Intern",
      company: "Dots HR Solutions, Calicut",
      period: "2021",
    /*  responsibilities: [
        "Designed, coded, tested and deployed software solutions using HTML, CSS, JavaScript, Angular, Node.js (Express.js) & SQL Server",
        "Collaborated with design team to gather end user requirements",
        "Implemented solutions for ERP (Enterprise Resource Planning) systems"
      ] */
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16 text-center animate-fade-in">
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">
              <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Work Experience
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Building impactful digital solutions across diverse industries
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30 hidden md:block" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card 
                  key={index}
                  className="relative border-border bg-card hover:shadow-lg transition-all duration-300 animate-slide-in-left"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-2 top-8 w-4 h-4 rounded-full bg-primary hidden md:block" />
                  
                  <CardContent className="p-6 md:ml-12">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Briefcase className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                        <p className="text-primary font-medium mb-2">{exp.company}</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>
                    
                  { /*<ul className="space-y-2 ml-4">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="text-muted-foreground text-sm flex gap-2">
                          <span className="text-primary mt-1.5 block w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  */}
                  
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;