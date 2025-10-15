import fishPenguin from "@assets/generated_images/Penguin_holding_fish_playfully_be518c79.png";
import waddlingPenguin from "@assets/generated_images/Penguin_waddling_side_view_157e004b.png";
import storyTitle from "@assets/generated_images/Bull_Market_story_section_title_6f3d9ef6.png";

export default function StorySection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-chart-3 dark:bg-chart-3" data-testid="section-story">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="mb-12 lg:mb-16" data-testid="heading-story">
          <span className="sr-only">A Penguin in a Bull Market!</span>
          <img 
            src={storyTitle} 
            alt="" 
            className="w-full max-w-2xl mx-auto md:mx-0"
            role="presentation"
          />
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border-4 border-black">
              <img
                src={fishPenguin}
                alt="YoMee with a fish"
                className="w-full h-auto"
                data-testid="img-story-fish"
              />
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="space-y-4 text-base md:text-lg text-white leading-relaxed">
              <p>
                In China, where pandas are national treasures, penguins like YoMee are capturing hearts in a whole new way. While pandas symbolize strength and grace, YoMee shows that even the smallest creatures can make the biggest impact.
              </p>
              
              <p>
                Playful, curious, and endlessly entertaining, YoMee reminds millions to slow down and enjoy life's simple joys. In a world obsessed with "bullish" markets and moonshots, YoMee proves that soft power can be just as influential—turning the internet into YoMee's very own ice wonderland.
              </p>
              
              <p className="font-bold">
                Every waddle, every tumble, every fish-eating moment is a reminder that success comes in the simplest forms. YoMee isn't just a cute penguin. YoMee is a movement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}