import fishPenguin from "@assets/generated_images/Penguin_holding_fish_playfully_be518c79.png";
import waddlingPenguin from "@assets/generated_images/Penguin_waddling_side_view_157e004b.png";

export default function StorySection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-chart-2/20 to-chart-2/10 dark:from-teal-950 dark:to-teal-900" data-testid="section-story">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-center mb-4 text-foreground" data-testid="heading-story">
          A Penguin in the Spotlight!
        </h2>
        <p className="text-center text-lg md:text-xl text-muted-foreground mb-12 lg:mb-16">
          From sanctuary resident to internet sensation
        </p>
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
          <div>
            <div className="space-y-6 text-base md:text-lg text-foreground">
              <p>
                In China, where pandas reign as beloved national treasures, penguins like YoMee are capturing hearts in a whole new way. While pandas symbolize strength and grace, <strong className="font-semibold">YoMee shows that even the clumsiest creatures can make the biggest impact.</strong>
              </p>
              
              <p>
                Playful, curious, and endlessly entertaining, YoMee reminds millions to slow down and savor life's small joys. In a world obsessed with speed and constant achievement, this fluffy penguin proves that <span className="text-primary font-semibold">soft power can be just as influential</span>—turning the internet into a joyful ice wonderland.
              </p>
              
              <p className="text-chart-2 font-semibold text-xl">
                Every waddle, every tumble, every fish-eating moment is a reminder that happiness comes in the simplest forms.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={fishPenguin}
                alt="YoMee with a fish"
                className="w-full h-auto"
                data-testid="img-story-fish"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg mt-8">
              <img
                src={waddlingPenguin}
                alt="YoMee waddling"
                className="w-full h-auto"
                data-testid="img-story-waddle"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}