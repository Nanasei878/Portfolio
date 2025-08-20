
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Sales Dashboard",
      image: "/lovable-uploads/SalesDashboard.png",
      link: "https://public.tableau.com/app/profile/kwabena.osei.tutu/viz/SalesDashboard_16702086220270/SalesDashboard",
      type: "tableau"
    },
    {
      title: "Car Price Prediction Web App",
      image: "/lovable-uploads/aa15e2fe-0efe-4e7f-ae24-bf2b2187aa24.png",
      link: "https://github.com/Nanasei878/ML_with_flask",
      type: "github"
    },
    {
      title: "Syntaxmap Web App",
      image: "/lovable-uploads/syntaxmap.PNG",
      link: "https://syntax-map-pro-front.vercel.app/",
      type: "web"
    },
    {
      title: "Apple detection and classification",
      image: "/lovable-uploads/e994ba46-ef69-435e-a6ba-713d862430e4.png",
      link: "https://github.com/Nanasei878/Apple-identification-and-classification-",
      type: "github"
    },
    {
      title: "US Food Import Analysis",
      image: "/lovable-uploads/fc84578d-69f5-4ee7-b44a-86f454e934da.png",
      link: "https://public.tableau.com/app/profile/kwabena.osei.tutu/viz/USFoodImport/Dashboard12",
      type: "tableau"
    },
    {
      title: "Air Passenger Forecasting with Recurrent Neural Networks",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=500&h=300&fit=crop",
      link: "https://github.com/Nanasei878/Air-Passengers-Forecast",
      type: "github"
    },
    {
      title: "EIM Consult Ltd Website",
      image: "/lovable-uploads/eim.jpeg",
      link: "https://www.eimconsultld.com/",
      type: "web"
    },
    {
      title: "KNG Fresh Cleaning Services Website",
      image: "/lovable-uploads/kng.jpg",
      link: "https://kngfreshcleaning.com/",
      type: "web"
    },
    {
      title: "Sales Agents report tool for MTN Sierra Leone",
      image: "/lovable-uploads/74a3b688-f647-42ca-8211-e1fa86a42777.png",
      link: "#",
      type: "web"
    },
    {
      title: "Book Recommender System",
      image: "/lovable-uploads/802151e8-d41c-47ef-b938-693bca35b8df.png",
      link: "https://github.com/Nanasei878/Book-Recommender-System",
      type: "github"
    },
    {
      title: "Global Telecom Market Dashboard",
      image: "/lovable-uploads/41d9c8dd-f06b-4e39-aada-152ff6f9b590.png",
      link: "https://public.tableau.com/app/profile/kwabena.osei.tutu/viz/WorldTelecomMarket/GlobalTelecomMarketDashboard",
      type: "tableau"
    },
    {
      title: "Graduate Employability Prediction",
      image: "/lovable-uploads/grad.jpg",
      link: "https://github.com/Nanasei878/Campus-Recruitment",
      type: "github"
    },
    {
      title: "Morningstar Financials Web scraper",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      link: "https://github.com/Nanasei878/Morningstarfinancials",
      type: "github"
    },
    {
      title: "Agence Française de Développement (AFD) Data Analysis",
      image: "/lovable-uploads/511eb088-156f-46c0-b1d0-7058362cb8fd.png",
      link: "https://public.tableau.com/app/profile/kwabena.osei.tutu/viz/TheAgenceFranaisedeDveloppementAFDBeneficiarynationsworldwide/AFDDonations",
      type: "tableau"
    },
    {
      title: "New York State Salary Analysis",
      image: "/lovable-uploads/122e28de-d7d9-44be-9b3f-1aae2a4bb1c9.png",
      link: "#",
      type: "web"
    },
    {
      title: "Capital Bikeshare Trip Data Analysis",
      image: "/lovable-uploads/50693dc5-2f63-4841-ba43-b5917ad873e3.png",
      link: "https://public.tableau.com/app/profile/kwabena.osei.tutu/viz/CapitalBikeshareTripDataAnalysis/CapitalBikeshareDataStory",
      type: "tableau"
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "github":
        return <Github className="w-4 h-4" />;
      case "tableau":
      case "web":
        return <ExternalLink className="w-4 h-4" />;
      default:
        return <ExternalLink className="w-4 h-4" />;
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Portfolio
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Here are some of my projects:
          </p>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover-scale overflow-hidden shadow-lg">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3 line-clamp-2">
                  {project.title}
                </h3>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-200 font-medium"
                >
                  View Project
                  {getIcon(project.type)}
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
