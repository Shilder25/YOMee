import { Twitter, Heart } from "lucide-react";
import { SiTiktok } from "react-icons/si";
import communityPenguin from "@assets/generated_images/Cute_penguin_mascot_hero_3e3f625a.png";
import communityTitle from "@assets/image-removebg-preview (39)_1760571033643.png";
import AnimatedSection from "./AnimatedSection";
import BackgroundPenguins from "./BackgroundPenguins";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CommunitySection() {
  const { t } = useLanguage();
  
  return (
    <section className="relative py-12 md:py-14 lg:py-16 bg-chart-2 dark:bg-chart-2" data-testid="section-community">
      <BackgroundPenguins count={6} offset={12} />
      <AnimatedSection>
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="mb-8 lg:mb-12" data-testid="heading-community">
          <span className="sr-only">{t('community.title')}</span>
          <img 
            src={communityTitle} 
            alt="" 
            className="w-full max-w-4xl mx-auto"
            role="presentation"
          />
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center mb-6">
          <div className="order-2 lg:order-1">
            <div className="space-y-3 text-base md:text-lg text-black leading-relaxed">
              <p>
                {t('community.p1')}
              </p>
              
              <p>
                {t('community.p2')}
              </p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <motion.div 
              className="relative rounded-2xl overflow-hidden border-4 border-black max-w-sm bg-chart-3"
              whileHover={{ scale: 1.03, rotate: -2 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={communityPenguin}
                alt="YoMee penguin"
                className="w-full h-auto p-6"
                data-testid="img-community-penguin"
              />
              <motion.div 
                className="absolute top-4 right-4 w-12 h-12 rounded-full bg-chart-2 border-4 border-black flex items-center justify-center"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Heart className="h-6 w-6 text-black fill-black" />
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="flex gap-4 justify-center items-center">
          <a
            href="https://x.com/i/communities/1995354029581296039"
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 md:w-20 md:h-20 rounded-lg bg-black text-white flex items-center justify-center hover-elevate active-elevate-2 transition-transform"
            data-testid="button-community-twitter"
          >
            <Twitter className="h-8 w-8 md:h-10 md:w-10" />
          </a>
          <a
            href="https://www.douyin.com/search/yomee"
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 md:w-20 md:h-20 rounded-lg bg-black text-white flex items-center justify-center hover-elevate active-elevate-2 transition-transform"
            data-testid="button-community-tiktok"
          >
            <SiTiktok className="h-8 w-8 md:h-10 md:w-10" />
          </a>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
