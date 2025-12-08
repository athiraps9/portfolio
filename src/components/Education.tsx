import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "APJ Abdul Kalam Technological University",
      location: "Kozhikode, Kerala",
      year: "2021"
    },
    {
      degree: "Diploma in Computer Engineering",
      institution: "Technical University",
      location: "Kozhikode, Kerala",
      year: "2018"
    },
    {
      degree: "Plus Two Science",
      institution: "State Board",
      location: "Kozhikode, Kerala",
      year: "2015"
    }
  ];

  return (
    <section id="education" className="py-20 bg-secondary/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 text-center animate-fade-in">
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">
              <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Education
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Academic foundation in computer science and technology
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-1">
            {education.map((edu, index) => (
              <Card 
                key={index}
                className="border-border bg-card hover:shadow-lg transition-all duration-300 hover:scale-[1.02] animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                      <p className="text-primary font-medium mb-3">{edu.institution}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.year}</span>
                        </div>
                      </div>
                    </div>
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

export default Education;