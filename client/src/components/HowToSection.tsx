import waddlingPenguin from "@assets/generated_images/Penguin_waddling_side_view_157e004b.png";

const steps = [
  {
    number: "01",
    title: "Create Wallet",
    description: "Open your favorite wallet app and create a new wallet to store your YoMee tokens.",
  },
  {
    number: "02",
    title: "Fund BNB",
    description: "Purchase BNB from an exchange and send it to your wallet address.",
  },
  {
    number: "03",
    title: "Swap Tokens",
    description: "Use a DEX to swap your BNB for YoMee tokens using the contract address.",
  },
  {
    number: "04",
    title: "Enjoy $$$",
    description: "Congratulations! You're now part of the YoMee family. Watch your investment grow!",
  },
];

export default function HowToSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-chart-2 dark:bg-chart-2" data-testid="section-howto">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="font-heading font-black text-black text-5xl md:text-6xl lg:text-7xl mb-12 lg:mb-16 uppercase" data-testid="heading-howto">
          How to Buy?
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="relative rounded-2xl overflow-hidden border-4 border-black max-w-sm">
              <img
                src={waddlingPenguin}
                alt="YoMee waddling"
                className="w-full h-auto"
                data-testid="img-howto-penguin"
              />
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="bg-chart-3 dark:bg-chart-3 rounded-2xl p-6 hover-elevate active-elevate-2 transition-all duration-300 cursor-pointer"
                  data-testid={`card-step-${index + 1}`}
                  onClick={() => console.log(`Step ${step.number} clicked`)}
                >
                  <div className="flex flex-col space-y-3">
                    <div className="font-heading font-black text-4xl text-white">
                      {step.number}
                    </div>
                    
                    <h3 className="font-heading font-bold text-lg text-white uppercase">
                      {step.title}
                    </h3>
                    
                    <p className="text-white text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}