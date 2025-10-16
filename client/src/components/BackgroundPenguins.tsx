import penguin1 from "@assets/stock_images/cute_baby_penguin_fl_acf2f2e9.jpg";
import penguin2 from "@assets/stock_images/cute_baby_penguin_fl_034dd642.jpg";
import penguin3 from "@assets/stock_images/cute_baby_penguin_fl_daa4ddcf.jpg";
import penguin4 from "@assets/stock_images/cute_baby_penguin_fl_e4128d44.jpg";
import penguin5 from "@assets/stock_images/cute_baby_penguin_fl_9cb4be71.jpg";

interface BackgroundPenguinsProps {
  count?: number;
}

export default function BackgroundPenguins({ count = 8 }: BackgroundPenguinsProps) {
  const penguins = [penguin1, penguin2, penguin3, penguin4, penguin5];
  
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
