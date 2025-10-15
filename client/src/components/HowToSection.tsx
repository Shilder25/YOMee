import { Card } from "@/components/ui/card";
import { Heart, Share2, Bell, MessageCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Follow YoMee",
    description: "Find @YoMeePenguin on Douyin, Weibo, or your favorite social platform and hit that follow button.",
    icon: Heart,
    color: "text-primary",
  },
  {
    number: "02",
    title: "Watch & Share",
    description: "Enjoy daily doses of penguin cuteness and share YoMee's adorable moments with friends and family.",
    icon: Share2,
    color: "text-chart-2",
  },
  {
    number: "03",
    title: "Turn on Notifications",
    description: "Never miss a waddle! Enable notifications to catch every new video the moment it drops.",
    icon: Bell,
    color: "text-chart-4",
  },
  {
    number: "04",
    title: "Join the Community",
    description: "Connect with millions of YoMee fans worldwide. Share your love and spread the penguin joy!",
    icon: MessageCircle,
    color: "text-chart-3",
  },
];

export default function HowToSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-background" data-testid="section-howto">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-center mb-4 text-foreground" data-testid="heading-howto">
          How to Follow
        </h2>
        <p className="text-center text-lg md:text-xl text-muted-foreground mb-12 lg:mb-16">
          Join millions in the YoMee fan community
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card
                key={index}
                className="p-6 md:p-8 hover-elevate active-elevate-2 transition-all duration-300 cursor-pointer"
                data-testid={`card-step-${index + 1}`}
                onClick={() => console.log(`Step ${step.number} clicked`)}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className={`w-16 h-16 rounded-full bg-muted flex items-center justify-center ${step.color}`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  
                  <div className={`font-heading font-bold text-3xl ${step.color}`}>
                    {step.number}
                  </div>
                  
                  <h3 className="font-heading font-semibold text-xl text-foreground">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}