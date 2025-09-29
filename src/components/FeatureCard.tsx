import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

const FeatureCard = ({ icon: Icon, title, description, features }: FeatureCardProps) => {
  return (
    <Card className="group border-0 bg-gradient-card shadow-card hover:shadow-hover transition-all duration-500 hover:-translate-y-2 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
      
      <CardHeader className="relative">
        <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 animate-float">
          <Icon className="w-8 h-8 text-white" />
        </div>
        <CardTitle className="text-2xl font-display group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </CardHeader>
      
      <CardContent className="relative">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li 
              key={index} 
              className="flex items-start gap-3 text-sm text-muted-foreground group-hover:text-foreground transition-colors"
            >
              <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;