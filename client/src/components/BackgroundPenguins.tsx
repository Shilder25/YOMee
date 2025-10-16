import yomee1 from "@assets/image_1760582391376.png";
import yomee2 from "@assets/image_1760582396165.png";
import yomee3 from "@assets/image_1760582407741.png";
import yomee4 from "@assets/image_1760582412908.png";
import yomee5 from "@assets/image_1760582417909.png";
import yomee6 from "@assets/image_1760582422963.png";
import yomee7 from "@assets/image_1760582433162.png";
import yomee8 from "@assets/image_1760582442627.png";
import yomee9 from "@assets/image_1760582448371.png";
import yomee10 from "@assets/image_1760582453469.png";
import yomee11 from "@assets/image_1760582466508.png";
import yomee12 from "@assets/image_1760582471807.png";
import yomee13 from "@assets/image_1760582478875.png";
import yomee14 from "@assets/image_1760582484318.png";
import yomee15 from "@assets/image_1760582489812.png";
import yomee16 from "@assets/image_1760582494597.png";
import yomee17 from "@assets/image_1760582499035.png";

interface BackgroundPenguinsProps {
  count?: number;
}

export default function BackgroundPenguins({ count = 8 }: BackgroundPenguinsProps) {
  const penguins = [yomee1, yomee2, yomee3, yomee4, yomee5, yomee6, yomee7, yomee8, yomee9, yomee10, yomee11, yomee12, yomee13, yomee14, yomee15, yomee16, yomee17];
  
  const positions = [
    { top: '8%', left: '5%', size: '180px', delay: 0 },
    { top: '20%', right: '6%', size: '160px', delay: 0.8 },
    { top: '45%', left: '4%', size: '150px', delay: 1.5 },
    { top: '65%', right: '7%', size: '170px', delay: 2.2 },
    { top: '82%', left: '8%', size: '155px', delay: 3 },
    { top: '35%', right: '10%', size: '145px', delay: 3.8 },
    { top: '55%', left: '12%', size: '165px', delay: 4.5 },
    { top: '75%', right: '4%', size: '140px', delay: 5.2 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {positions.slice(0, count).map((pos, index) => (
        <div
          key={index}
          className="absolute rounded-full opacity-35 animate-float"
          style={{
            top: pos.top,
            left: pos.left,
            right: pos.right,
            width: pos.size,
            height: pos.size,
            animationDelay: `${pos.delay}s`,
          }}
        >
          <img
            src={penguins[index % penguins.length]}
            alt=""
            className="w-full h-full object-cover rounded-full"
            role="presentation"
          />
        </div>
      ))}
    </div>
  );
}
