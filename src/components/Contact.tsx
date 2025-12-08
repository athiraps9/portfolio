import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github ,Mail, Linkedin,  Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 text-center animate-fade-in">
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">
              <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Let's Connect
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Open to exciting opportunities and collaborations
            </p>
          </div>

          <Card className="border-border bg-card shadow-xl animate-fade-in">
            <CardContent className="p-8">
              <div className="grid gap-6 md:grid-cols-2">
                <a href="https://github.com/athiraps9"   
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all group"
                >
                  <div className="p-3 rounded-full bg-background/10">
                    <Github className="w-6 h-6 text-primary" />
                  </div>

                  <div>
                    <p className="text-sm opacity-80 text-white">GitHub</p>
                    <p className="font-medium text-white">athiraps9</p> 
                    {/* or "View Projects" */}
                  </div>
                </a>


                <a
                  href="https://linkedin.com/in/athira-ps-developer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all group"
                >
                  <div className="p-3 rounded-full bg-background/10">
                    <Linkedin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm opacity-80 text-white">LinkedIn</p>
                    <p className="font-medium text-white">athira-ps-developer</p>
                  </div>
                </a>

                <a href="tel:+919539377826"
                    className="flex items-center gap-4 p-4 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all group ">
                    <div className="p-3 rounded-full bg-background/10">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>

                    <div>
                      <p className="text-sm opacity-80 text-white">Phone</p>
                      <p className="font-medium text-white">+91 9539377826</p>
                    </div>
                  </a>

                

                <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all group">
                  <div className="p-3 rounded-full bg-background/10">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div >

                    <p className="text-sm opacity-80 text-white">Location</p>
                    <p className="font-medium text-white">Kozhikode ,Kerala, India</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all"
                  onClick={() => window.location.href = 'https://mail.google.com/mail/?view=cm&fs=1&to=athirapspalakkal98@gmail.com'}
                >
                  Send Email
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;