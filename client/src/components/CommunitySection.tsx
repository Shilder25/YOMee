import { Twitter, Send, Heart } from "lucide-react";
import { SiTiktok } from "react-icons/si";
import communityPenguin from "@assets/generated_images/Cute_penguin_mascot_hero_3e3f625a.png";
import communityTitle from "@assets/image_1760564599690.png";

export default function CommunitySection() {
  return (
    <section className="py-12 md:py-14 lg:py-16 bg-chart-2 dark:bg-chart-2" data-testid="section-community">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="mb-6 lg:mb-8" data-testid="heading-community">
          <span className="sr-only">Join The Com!</span>
          <img 
            src={communityTitle} 
            alt="" 
            className="w-full max-w-2xl mx-auto md:mx-0"
            role="presentation"
          />
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center mb-6">
          <div className="order-2 lg:order-1">
            <div className="space-y-3 text-base md:text-lg text-black leading-relaxed">
              <p>
                Join the thousands of YoMee fans as part of a growing community around the fluffiest penguin on the web! Follow for the latest updates from YoMee's daily life and support this adorable journey from ice wonderland to the moon.
              </p>
              
              <p>
                Follow our socials, share heartwarming posts, join the community, connect with fans. Every share, every heart, every post helps YoMee waddle one step closer to reaching new heights—turning the internet into a warm, fuzzy place one flap at a time.
              </p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative rounded-2xl overflow-hidden border-4 border-black max-w-sm bg-chart-3">
              <img
                src={communityPenguin}
                alt="YoMee penguin"
                className="w-full h-auto p-6"
                data-testid="img-community-penguin"
              />
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-chart-2 border-4 border-black flex items-center justify-center">
                <Heart className="h-6 w-6 text-black fill-black" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-3 justify-center items-center">
          <button
            className="w-12 h-12 rounded-md bg-black text-white flex items-center justify-center hover-elevate active-elevate-2"
            data-testid="button-community-twitter"
            onClick={() => console.log('Twitter clicked')}
          >
            <Twitter className="h-6 w-6" />
          </button>
          <button
            className="w-12 h-12 rounded-md bg-black text-white flex items-center justify-center hover-elevate active-elevate-2"
            data-testid="button-community-tiktok"
            onClick={() => console.log('TikTok clicked')}
          >
            <SiTiktok className="h-6 w-6" />
          </button>
          <button
            className="w-12 h-12 rounded-md bg-black text-white flex items-center justify-center hover-elevate active-elevate-2"
            data-testid="button-community-telegram"
            onClick={() => console.log('Telegram clicked')}
          >
            <Send className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
}