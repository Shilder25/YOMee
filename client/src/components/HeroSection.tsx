import { Button } from "@/components/ui/button";
import { Twitter, Send } from "lucide-react";
import { SiTiktok } from "react-icons/si";
import heroPenguin from "@assets/image_1760583186455.png";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-chart-2 dark:bg-chart-2">
      <div className="absolute top-4 right-4 flex gap-3 z-10">
        <button
          className="w-14 h-14 md:w-16 md:h-16 rounded-lg bg-black text-white flex items-center justify-center hover-elevate active-elevate-2 transition-transform"
          data-testid="button-twitter"
          onClick={() => console.log('Twitter clicked')}
        >
          <Twitter className="h-7 w-7 md:h-8 md:w-8" />
        </button>
        <button
          className="w-14 h-14 md:w-16 md:h-16 rounded-lg bg-black text-white flex items-center justify-center hover-elevate active-elevate-2 transition-transform"
          data-testid="button-tiktok"
          onClick={() => console.log('TikTok clicked')}
        >
          <SiTiktok className="h-7 w-7 md:h-8 md:w-8" />
        </button>
        <button
          className="w-14 h-14 md:w-16 md:h-16 rounded-lg bg-black text-white flex items-center justify-center hover-elevate active-elevate-2 transition-transform"
          data-testid="button-telegram"
          onClick={() => console.log('Telegram clicked')}
        >
          <Send className="h-7 w-7 md:h-8 md:w-8" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
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
              className="w-[768px] h-[768px] md:w-[1152px] md:h-[1152px] lg:w-[1500px] lg:h-[1500px] object-contain"
              data-testid="img-hero-penguin"
            />
          </motion.div>

          <motion.div 
            className="order-2 lg:order-2 text-center lg:text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="font-heading font-black text-7xl md:text-8xl lg:text-9xl mb-3 text-black dark:text-black leading-none uppercase stroke-text">
              YoMee
            </h1>
            <h2 className="font-heading font-black text-6xl md:text-7xl lg:text-8xl mb-8 text-black dark:text-black leading-none">
              萌萌企鹅
            </h2>
            <p className="text-xl md:text-2xl lg:text-3xl mb-10 text-black dark:text-black font-bold">
              China's most adorable internet star
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start mb-8">
              <Button
                size="lg"
                className="font-bold text-xl md:text-2xl px-12 py-8 rounded-xl bg-chart-3 text-white border-0 hover-elevate active-elevate-2 uppercase min-h-[60px]"
                data-testid="button-follow"
                onClick={() => console.log('Follow Now clicked')}
              >
                Buy Now
              </Button>
              <Button
                size="lg"
                className="font-bold text-xl md:text-2xl px-12 py-8 rounded-xl bg-white text-black border-2 border-black hover-elevate active-elevate-2 uppercase min-h-[60px]"
                data-testid="button-watch"
                onClick={() => console.log('Watch Videos clicked')}
              >
                Chart
              </Button>
            </div>

            <div className="inline-block rounded-xl px-8 py-5 border-4 border-black" style={{ backgroundColor: '#FF6B9D' }}>
              <p className="text-base md:text-lg text-white font-mono font-bold" data-testid="text-social-handle">
                CA: @YoMeePenguin on Douyin
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}