
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Briefcase } from "lucide-react";

const Skills = () => {
  const dataSkills = [
    "Python", "Machine Learning", "Deep Learning", "Data Mining", 
    "ETL Pipeline", "Data Visualization", "Tableau", "Pandas", 
    "Data Governance", "GDPR Compliance", "Quantitative Modeling"
  ];
  
  const developmentSkills = [
    "JavaScript", "React", "Node.js", "RESTful APIs", 
    "Serverless Architecture", "Frontend Development", "Backend Development",
    "Full Stack Development", "Data Integration", "Dashboard Development"
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="shadow-xl hover-scale">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <Briefcase className="h-6 w-6 text-primary" />
                Data Science & Analytics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {dataSkills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-xl hover-scale">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <Code className="h-6 w-6 text-primary" />
                Full Stack Development
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {developmentSkills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
