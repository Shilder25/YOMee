import { Button } from "@/components/ui/button";
import { Twitter, Send } from "lucide-react";
import { SiTiktok } from "react-icons/si";
import heroPenguin from "@assets/image_1760558769926.png";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-chart-2 dark:bg-chart-2">
      <div className="absolute top-4 right-4 flex gap-3 z-10">
        <Button
          size="icon"
          variant="ghost"
          className="bg-black text-white hover-elevate active-elevate-2"
          data-testid="button-twitter"
          onClick={() => console.log('Twitter clicked')}
        >
          <Twitter className="h-5 w-5" />
        </Button>
        <Button
          size="icon"
          variant="ghost"
          className="bg-black text-white hover-elevate active-elevate-2"
          data-testid="button-tiktok"
          onClick={() => console.log('TikTok clicked')}
        >
          <SiTiktok className="h-5 w-5" />
        </Button>
        <Button
          size="icon"
          variant="ghost"
          className="bg-black text-white hover-elevate active-elevate-2"
          data-testid="button-telegram"
          onClick={() => console.log('Telegram clicked')}
        >
          <Send className="h-5 w-5" />
        </Button>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div 
            className="order-1 lg:order-1 flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.05, rotate: 5 }}
          >
            <img
              src={heroPenguin}
              alt="YoMee the adorable penguin"
              className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain"
              data-testid="img-hero-penguin"
            />
          </motion.div>

          <motion.div 
            className="order-2 lg:order-2 text-center lg:text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="font-heading font-black text-6xl md:text-7xl lg:text-8xl mb-2 text-black dark:text-black leading-none uppercase stroke-text">
              YoMee
            </h1>
            <h2 className="font-heading font-black text-5xl md:text-6xl lg:text-7xl mb-6 text-black dark:text-black leading-none">
              萌萌企鹅
            </h2>
            <p className="text-lg md:text-xl mb-8 text-black dark:text-black font-bold">
              China's most adorable internet star
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
              <Button
                size="lg"
                className="font-bold text-base md:text-lg px-10 py-6 rounded-lg bg-chart-3 text-white border-0 hover-elevate active-elevate-2 uppercase"
                data-testid="button-follow"
                onClick={() => console.log('Follow Now clicked')}
              >
                Follow Now
              </Button>
              <Button
                size="lg"
                className="font-bold text-base md:text-lg px-10 py-6 rounded-lg bg-white text-black border-2 border-black hover-elevate active-elevate-2 uppercase"
                data-testid="button-watch"
                onClick={() => console.log('Watch Videos clicked')}
              >
                Videos
              </Button>
            </div>

            <div className="inline-block bg-black rounded-lg px-6 py-3">
              <p className="text-sm text-white font-mono" data-testid="text-social-handle">
                CA: @YoMeePenguin on Douyin
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}