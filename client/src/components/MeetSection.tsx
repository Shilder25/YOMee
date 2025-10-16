import meetTitle from "@assets/image-removebg-preview (37)_1760571035709.png";
import DouyinEmbed from "./DouyinEmbed";
import AnimatedSection from "./AnimatedSection";
import BackgroundPenguins from "./BackgroundPenguins";
import { useLanguage } from "@/contexts/LanguageContext";

export default function MeetSection() {
  const { t } = useLanguage();
  
  return (
    <section className="relative py-12 md:py-14 lg:py-16 bg-chart-3 dark:bg-chart-3" data-testid="section-meet">
      <BackgroundPenguins count={6} offset={0} />
      <AnimatedSection>
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="mb-8 lg:mb-12" data-testid="heading-meet">
          <span className="sr-only">{t('meet.title')}</span>
          <img 
            src={meetTitle} 
            alt="" 
            className="w-full max-w-4xl mx-auto"
            role="presentation"
          />
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          <div className="order-2 lg:order-1">
            <div className="space-y-3 text-base md:text-lg text-white leading-relaxed">
              <p>
                {t('meet.p1')}
              </p>
              
              <p>
                {t('meet.p2')}
              </p>
              
              <p>
                {t('meet.p3')}
              </p>
              
              <p className="font-bold">
                {t('meet.p4')}
              </p>
              
              <p>
                {t('meet.p5')}
              </p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <DouyinEmbed 
              videoId="7474871030444592419" 
              data-testid="video-meet-penguin"
            />
          </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}