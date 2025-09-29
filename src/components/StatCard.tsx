import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  description: string;
}

const StatCard = ({ icon: Icon, value, label, description }: StatCardProps) => {
  return (
    <Card className="group border-0 bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300 text-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
      
      <CardContent className="p-8 relative">
        <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-8 h-8 text-white" />
        </div>
        
        <div className="font-display text-4xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
          {value}
        </div>
        
        <div className="font-semibold text-foreground mb-2">
          {label}
        </div>
        
        <div className="text-sm text-muted-foreground">
          {description}
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;