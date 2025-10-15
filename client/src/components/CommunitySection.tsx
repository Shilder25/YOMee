import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Twitter, Instagram, MessageCircle, Globe } from "lucide-react";
import { SiTiktok } from "react-icons/si";

const socialPlatforms = [
  {
    name: "Douyin",
    icon: SiTiktok,
    handle: "@YoMeePenguin",
    followers: "2.4M",
    color: "hover:text-pink-500",
  },
  {
    name: "Weibo",
    icon: Globe,
    handle: "@萌萌企鹅YoMee",
    followers: "1.8M",
    color: "hover:text-red-500",
  },
  {
    name: "Twitter",
    icon: Twitter,
    handle: "@YoMeeOfficial",
    followers: "890K",
    color: "hover:text-blue-400",
  },
  {
    name: "Instagram",
    icon: Instagram,
    handle: "@yomeepenguin",
    followers: "650K",
    color: "hover:text-pink-600",
  },
];

export default function CommunitySection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-primary/10 via-chart-4/10 to-primary/20 dark:from-pink-950 dark:via-orange-950 dark:to-pink-900" data-testid="section-community">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-4 text-foreground" data-testid="heading-community">
            Join the Community!
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6">
            Be part of spreading joy with China's most playful penguin!
          </p>
          <p className="text-base md:text-lg text-foreground max-w-3xl mx-auto">
            Follow YoMee's socials, share the adorable story, and bring this curious, heartwarming spirit to fans around the world. Every post, every supporter, and every fan helps YoMee's happiness reach new heights—together we make the digital ice wonderland a little brighter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {socialPlatforms.map((platform, index) => {
            const Icon = platform.icon;
            return (
              <Card
                key={index}
                className="p-6 hover-elevate active-elevate-2 transition-all duration-300 cursor-pointer text-center"
                data-testid={`card-social-${platform.name.toLowerCase()}`}
                onClick={() => console.log(`${platform.name} clicked`)}
              >
                <div className="flex flex-col items-center space-y-3">
                  <Icon className={`w-12 h-12 text-foreground transition-colors ${platform.color}`} />
                  <h3 className="font-heading font-semibold text-lg text-foreground">
                    {platform.name}
                  </h3>
                  <p className="text-sm text-muted-foreground font-mono">
                    {platform.handle}
                  </p>
                  <p className="text-2xl font-bold text-primary">
                    {platform.followers}
                  </p>
                  <p className="text-xs text-muted-foreground">followers</p>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="font-accent text-base md:text-lg px-10 py-6 rounded-xl hover-elevate active-elevate-2"
            data-testid="button-follow-all"
            onClick={() => console.log('Follow on All Platforms clicked')}
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Follow on All Platforms
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="font-accent text-base md:text-lg px-10 py-6 rounded-xl hover-elevate active-elevate-2"
            data-testid="button-share"
            onClick={() => console.log('Share YoMee clicked')}
          >
            Share YoMee's Story
          </Button>
        </div>
      </div>
    </section>
  );
}