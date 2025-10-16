import storyTitle from "@assets/image_1760564583305.png";
import DouyinEmbed from "./DouyinEmbed";
import AnimatedSection from "./AnimatedSection";
import BackgroundPenguins from "./BackgroundPenguins";
import { useLanguage } from "@/contexts/LanguageContext";

export default function StorySection() {
  const { t } = useLanguage();
  
  return (
    <section className="relative py-12 md:py-14 lg:py-16 bg-chart-3 dark:bg-chart-3" data-testid="section-story">
      <BackgroundPenguins count={6} offset={4} />
      <AnimatedSection>
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="mb-6 lg:mb-8" data-testid="heading-story">
          <span className="sr-only">{t('story.title')}</span>
          <img 
            src={storyTitle} 
            alt="" 
            className="w-full max-w-2xl mx-auto md:mx-0"
            role="presentation"
          />
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          <div className="order-2 lg:order-1">
            <DouyinEmbed 
              videoId="7456017404477410600" 
              data-testid="video-story-viral"
            />
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="space-y-3 text-base md:text-lg text-white leading-relaxed">
              <p>
                {t('story.p1')}
              </p>
              
              <p>
                {t('story.p2')}
              </p>
              
              <p className="font-bold">
                {t('story.p3')}
              </p>
            </div>
          </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}