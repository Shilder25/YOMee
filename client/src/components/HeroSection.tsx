import { Button } from "@/components/ui/button";
import { Twitter, Send } from "lucide-react";
import { SiTiktok } from "react-icons/si";
import heroPenguin from "@assets/generated_images/Cute_penguin_mascot_hero_3e3f625a.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-chart-3 dark:bg-yellow-900">
      <div className="absolute top-4 right-4 flex gap-3 z-10">
        <Button
          size="icon"
          variant="ghost"
          className="bg-foreground text-background hover-elevate active-elevate-2"
          data-testid="button-twitter"
          onClick={() => console.log('Twitter clicked')}
        >
          <Twitter className="h-5 w-5" />
        </Button>
        <Button
          size="icon"
          variant="ghost"
          className="bg-foreground text-background hover-elevate active-elevate-2"
          data-testid="button-tiktok"
          onClick={() => console.log('TikTok clicked')}
        >
          <SiTiktok className="h-5 w-5" />
        </Button>
        <Button
          size="icon"
          variant="ghost"
          className="bg-foreground text-background hover-elevate active-elevate-2"
          data-testid="button-telegram"
          onClick={() => console.log('Telegram clicked')}
        >
          <Send className="h-5 w-5" />
        </Button>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 flex justify-center">
            <img
              src={heroPenguin}
              alt="YoMee the adorable penguin"
              className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain"
              data-testid="img-hero-penguin"
            />
          </div>

          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h1 className="font-heading font-extrabold text-5xl md:text-6xl lg:text-7xl mb-4 text-foreground leading-tight">
              YoMee
              <span className="block text-4xl md:text-5xl lg:text-6xl mt-2">萌萌企鹅</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 text-foreground font-semibold">
              China's most adorable internet star
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button
                size="lg"
                className="font-accent text-base md:text-lg px-10 py-6 rounded-xl hover-elevate active-elevate-2"
                data-testid="button-follow"
                onClick={() => console.log('Follow Now clicked')}
              >
                Follow Now
              </Button>
              <Button
                size="lg"
                className="font-accent text-base md:text-lg px-10 py-6 rounded-xl bg-chart-2 text-white border-0 hover-elevate active-elevate-2"
                data-testid="button-watch"
                onClick={() => console.log('Watch Videos clicked')}
              >
                Watch Videos
              </Button>
            </div>

            <div className="inline-block bg-chart-2 rounded-xl px-6 py-3">
              <p className="text-sm text-white font-mono" data-testid="text-social-handle">
                @YoMeePenguin on Douyin
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}