import waddlingPenguin from "@assets/generated_images/Penguin_waddling_side_view_157e004b.png";
import howToTitle from "@assets/image-removebg-preview (38)_1760571034682.png";
import AnimatedSection from "./AnimatedSection";
import BackgroundPenguins from "./BackgroundPenguins";
import { motion } from "framer-motion";

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
    <section className="relative py-12 md:py-14 lg:py-16 bg-chart-2 dark:bg-chart-2" data-testid="section-howto">
      <BackgroundPenguins count={6} offset={8} />
      <AnimatedSection>
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="mb-8 lg:mb-12" data-testid="heading-howto">
          <span className="sr-only">How to Buy?</span>
          <img 
            src={howToTitle} 
            alt="" 
            className="w-full max-w-4xl mx-auto"
            role="presentation"
          />
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          <div className="order-2 lg:order-1 flex justify-center">
            <motion.div 
              className="relative rounded-2xl overflow-hidden border-4 border-black max-w-sm"
              whileHover={{ scale: 1.03, rotate: 2 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={waddlingPenguin}
                alt="YoMee waddling"
                className="w-full h-auto"
                data-testid="img-howto-penguin"
              />
            </motion.div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="bg-chart-3 dark:bg-chart-3 rounded-2xl p-4 hover-elevate active-elevate-2 transition-all duration-300 cursor-pointer"
                  data-testid={`card-step-${index + 1}`}
                  onClick={() => console.log(`Step ${step.number} clicked`)}
                >
                  <div className="flex flex-col space-y-2">
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
      </AnimatedSection>
    </section>
  );
}