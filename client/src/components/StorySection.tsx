import fishPenguin from "@assets/generated_images/Penguin_holding_fish_playfully_be518c79.png";
import waddlingPenguin from "@assets/generated_images/Penguin_waddling_side_view_157e004b.png";

export default function StorySection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-chart-2 dark:bg-teal-800" data-testid="section-story">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="font-heading font-extrabold text-white text-4xl md:text-5xl lg:text-6xl mb-12 lg:mb-16" data-testid="heading-story">
          A PENGUIN IN THE SPOTLIGHT!
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="rounded-2xl overflow-hidden">
            <img
              src={fishPenguin}
              alt="YoMee with a fish"
              className="w-full h-auto"
              data-testid="img-story-fish"
            />
          </div>
          
          <div>
            <div className="space-y-6 text-base md:text-lg text-white">
              <p>
                In China, where pandas reign as beloved national treasures, penguins like YoMee are capturing hearts in a whole new way. While pandas symbolize strength and grace, YoMee shows that even the clumsiest creatures can make the biggest impact.
              </p>
              
              <p>
                Clumsy, playful, and endlessly curious, YoMee reminds millions to slow down and enjoy life's small joys. In a world obsessed with speed and "bullish" ambition, YoMee proves that soft power can be just as influential—turning the internet into YoMee's very own happy ice wonderland.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}