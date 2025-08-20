
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Data Scientist",
      company: "MTN",
      period: "06/2021 - Present",
      achievements: [
        "Enhanced complex business logic in the ETL pipeline process to drive data warehouse performance up by 15%",
        "Integrated Enterprise Data Modelling best practices to ensure seamless alignment with business requirements and data governance policies",
        "Collaborated on Data Regulatory Affairs compliance initiatives, ensuring adherence to GDPR and other industry standards",
        "Implemented monitoring scripts using Python to deliver notifications in the occurrence of ETL processing failure, raising up-time to 96%",
        "Provided expert guidance on data visualization tools and recommended the most suitable solutions for building interactive and insightful dashboards"
      ]
    },
    {
      title: "Software Developer and Trainer",
      company: "Linguistic Communications, Montreuil, France",
      period: "04/2023 - 06/2024",
      achievements: [
        "Designed and implemented RESTful APIs to enhance data integration processes, emphasizing Data Quality and accuracy in reporting",
        "Architected serverless applications that utilized Data Governance Tools to maintain data integrity across systems",
        "Delivered training programs focusing on data-driven decision-making and compliance with data regulatory requirements"
      ]
    },
    {
      title: "Data Scientist",
      company: "INRAE Colmar, France",
      period: "09/2020 - 01/2021",
      achievements: [
        "Developed dashboards to track weather conditions and predict price volatility with an 83% accuracy rate",
        "Constructed a quantitative model to assess agroecosystem resilience, successfully identifying resilient systems in the Grand Est region"
      ]
    },
    {
      title: "Data Scientist",
      company: "Copeeks SAS Lannion, France",
      period: "05/2020 - 06/2020",
      achievements: [
        "Built a forecasting model that predicted temperature humidity indices with 94% accuracy",
        "Implemented ETL pipeline with pandas for temperature humidity index calculations and created a dashboard for visualization using Tableau",
        "Created an alert system for high heat stress, communicating precise solutions to stakeholders"
      ]
    },
    {
      title: "Data Engineer",
      company: "Millicom International Cellular SA, Accra, Ghana",
      period: "10/2014 - 09/2019",
      achievements: [
        "Developed dashboards to track weather conditions and predict price volatility with an 83% accuracy rate",
        "Applied principles of Enterprise Data Modelling to optimize the integration of environmental and economic datasets",
        "Constructed a quantitative model to assess agroecosystem resilience, incorporating key metrics aligned with Data Quality standards"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="shadow-xl hover-scale">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <CardTitle className="flex items-center gap-3">
                    <Briefcase className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                      <p className="text-lg text-muted-foreground">{exp.company}</p>
                    </div>
                  </CardTitle>
                  <Badge variant="outline" className="text-primary border-primary">
                    {exp.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground leading-relaxed">{achievement}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
