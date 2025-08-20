
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
          
          <Card className="shadow-xl hover-scale">
            <CardContent className="p-8 md:p-12">
              <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p>
                  I am a <span className="text-primary font-semibold">Data Enthusiast and Full Stack Developer</span> with 
                  over four years of experience in the telecom IT sector. My expertise lies in data and software development, 
                  specializing in data mining, machine learning, and deep learning.
                </p>
                
                <p>
                  In addition to my data science capabilities, I have extensive experience in 
                  <span className="text-primary font-semibold"> frontend web development and backend development</span>, 
                  allowing me to create end-to-end solutions that bridge the gap between data insights and user-friendly applications.
                </p>
                
                <p>
                  My passion is <span className="text-primary font-semibold">leveraging data to drive strategic decisions and efficiencies</span> in 
                  various sectors. I am keen to utilize my skills and knowledge to achieve excellent engineering results and am 
                  excited to bring my enthusiasm to make meaningful contributions to innovative teams.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
