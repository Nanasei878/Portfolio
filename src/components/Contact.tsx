
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. 
            Let's discuss how we can work together to create data-driven solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl">Send a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="First Name" />
                <Input placeholder="Last Name" />
              </div>
              <Input placeholder="Email Address" type="email" />
              <Input placeholder="Subject" />
              <Textarea placeholder="Your Message" className="min-h-32" />
              <Button className="w-full hover-scale">
                <Mail className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </CardContent>
          </Card>
          
          <div className="space-y-8">
            <Card className="shadow-xl hover-scale">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <Mail className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-semibold">Email</h3>
                    <p className="text-muted-foreground">kwabena.osei-tutu@etu.unilasalle.fr</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-xl hover-scale">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6">Connect With Me</h3>
                <div className="space-y-4">
                  <a href="https://github.com/Nanasei878" className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
                    <Github className="h-6 w-6 text-primary" />
                    <span>GitHub Profile</span>
                  </a>
                  <a href="https://www.linkedin.com/in/kwabena-osei-tutu-1b6009a0/" className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
                    <Linkedin className="h-6 w-6 text-primary" />
                    <span>LinkedIn Profile</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
