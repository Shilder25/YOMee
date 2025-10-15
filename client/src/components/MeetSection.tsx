import playingPenguin from "@assets/generated_images/Penguin_playing_in_snow_3cf5fd3c.png";
import meetTitle from "@assets/image_1760564557081.png";

export default function MeetSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-chart-3 dark:bg-chart-3" data-testid="section-meet">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="mb-12 lg:mb-16" data-testid="heading-meet">
          <span className="sr-only">Meet YoMee!</span>
          <img 
            src={meetTitle} 
            alt="" 
            className="w-full max-w-2xl mx-auto md:mx-0"
            role="presentation"
          />
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="order-2 lg:order-1">
            <div className="space-y-4 text-base md:text-lg text-white leading-relaxed">
              <p>
                In a country already famous for its adorable animals, it takes something truly special to capture the nation's heart. YoMee (萌萌), the fluffy penguin from a wildlife sanctuary in China, has done exactly that.
              </p>
              
              <p>
                With big round eyes, soft downy feathers, and an irresistibly clumsy waddle, YoMee has become the darling of Chinese social media. Every video of this precious penguin tumbling, playing, or nibbling on fish spreads like wildfire across Douyin, Weibo, and Xiaohongshu.
              </p>
              
              <p>
                Fans say YoMee has the soul of a playful child. One moment waddling confidently, the next sliding belly-first into a snowbank. YoMee's playful innocence feels raw and real.
              </p>
              
              <p className="font-bold">
                In a world that moves too fast, YoMee reminds millions to pause, smile, and feel that warm fuzzy feeling.
              </p>
              
              <p>
                YoMee is China's little penguin with a big heart, the fluffy friend who turned the internet into one big, happy ice wonderland.
              </p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden border-4 border-black">
              <img
                src={playingPenguin}
                alt="YoMee playing in the snow"
                className="w-full h-auto"
                data-testid="img-meet-penguin"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}