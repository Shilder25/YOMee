import { useEffect, useState } from "react";
import heroPenguin from "@assets/image_1760558769926.png";

export default function Loader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-chart-2 transition-opacity duration-500"
      style={{ opacity: isVisible ? 1 : 0 }}
      data-testid="loader"
    >
      <div className="flex flex-col items-center gap-6">
        <div className="animate-bounce">
          <img
            src={heroPenguin}
            alt="Loading YoMee"
            className="w-32 h-32 md:w-40 md:h-40"
            data-testid="img-loader-penguin"
          />
        </div>
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-black rounded-full animate-pulse" style={{ animationDelay: "0ms" }}></div>
          <div className="w-3 h-3 bg-black rounded-full animate-pulse" style={{ animationDelay: "150ms" }}></div>
          <div className="w-3 h-3 bg-black rounded-full animate-pulse" style={{ animationDelay: "300ms" }}></div>
        </div>
      </div>
    </div>
  );
}
