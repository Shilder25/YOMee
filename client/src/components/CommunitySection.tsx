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
    <section className="py-16 md:py-20 lg:py-24 bg-chart-3 dark:bg-yellow-900" data-testid="section-community">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl mb-8 text-foreground" data-testid="heading-community">
            JOIN THE COMMUNITY!
          </h2>
          <p className="text-base md:text-lg text-foreground max-w-3xl mx-auto mb-8">
            Be part of spreading joy with China's most playful penguin! Follow YoMee's socials, share the adorable story, and bring this curious, heartwarming spirit to fans around the world.
          </p>
          <p className="text-base md:text-lg text-foreground max-w-3xl mx-auto">
            Every post, every supporter, and every fan helps YoMee's happiness reach new heights—together we make the digital ice wonderland a little brighter.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="font-accent text-base md:text-lg px-10 py-6 rounded-xl hover-elevate active-elevate-2"
            data-testid="button-follow-all"
            onClick={() => console.log('Follow on All Platforms clicked')}
          >
            Follow YoMee
          </Button>
          <Button
            size="lg"
            className="font-accent text-base md:text-lg px-10 py-6 rounded-xl bg-chart-2 text-white border-0 hover-elevate active-elevate-2"
            data-testid="button-share"
            onClick={() => console.log('Share YoMee clicked')}
          >
            Share the Joy
          </Button>
        </div>
      </div>
    </section>
  );
}