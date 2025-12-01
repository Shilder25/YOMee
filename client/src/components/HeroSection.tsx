import { Button } from "@/components/ui/button";
import { Twitter } from "lucide-react";
import { SiTiktok } from "react-icons/si";
import heroPenguin from "@assets/image_1760583505761.png";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-chart-2 dark:bg-chart-2">
      <div className="absolute top-8 md:top-12 lg:top-16 left-1/2 -translate-x-1/2 z-10 flex gap-4 md:gap-5">
        <a
          href="https://x.com/i/communities/1995354029581296039"
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-lg bg-black text-white flex items-center justify-center hover-elevate active-elevate-2 transition-transform"
          data-testid="button-twitter"
        >
          <Twitter className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12" />
        </a>
        <a
          href="https://www.douyin.com/user/MS4wLjABAAAAGiLz1gg7IgM1EnvH4vaHt7R6o6ZKj7ljzSqyD2Z_8POEukCh9jynF3suM10QbKyl?from_tab_name=main&vid=7456017404477410600"
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-lg bg-black text-white flex items-center justify-center hover-elevate active-elevate-2 transition-transform"
          data-testid="button-tiktok"
        >
          <SiTiktok className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12" />
        </a>
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
              className="w-[512px] h-[512px] md:w-[768px] md:h-[768px] lg:w-[1000px] lg:h-[1000px] object-contain"
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
              {t('hero.title')}
            </h1>
            <h2 className="font-heading font-black text-6xl md:text-7xl lg:text-8xl mb-8 text-black dark:text-black leading-none">
              {t('hero.subtitle')}
            </h2>
            <p className="text-xl md:text-2xl lg:text-3xl mb-10 text-black dark:text-black font-bold">
              {t('hero.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start mb-8">
              <Button
                size="lg"
                className="font-bold text-xl md:text-2xl px-12 py-8 rounded-xl bg-chart-3 text-white border-0 hover-elevate active-elevate-2 uppercase min-h-[60px]"
                data-testid="button-follow"
                onClick={() => console.log('Follow Now clicked')}
              >
                {t('hero.buyNow')}
              </Button>
              <Button
                size="lg"
                className="font-bold text-xl md:text-2xl px-12 py-8 rounded-xl bg-white text-black border-2 border-black hover-elevate active-elevate-2 uppercase min-h-[60px]"
                data-testid="button-watch"
                onClick={() => console.log('Watch Videos clicked')}
              >
                {t('hero.chart')}
              </Button>
            </div>

            <div className="inline-block rounded-xl px-8 py-5 border-4 border-black" style={{ backgroundColor: '#FF6B9D' }}>
              <p className="text-base md:text-lg text-white font-mono font-bold" data-testid="text-social-handle">
                {t('hero.contractAddress')}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
