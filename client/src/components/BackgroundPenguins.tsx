import penguin1 from "@assets/stock_images/yomee_penguin_plush__2be70961.jpg";
import penguin2 from "@assets/stock_images/yomee_penguin_plush__14fa11b3.jpg";
import penguin3 from "@assets/stock_images/yomee_penguin_plush__f33a4c77.jpg";
import penguin4 from "@assets/stock_images/yomee_penguin_plush__fb4bfe0a.jpg";
import penguin5 from "@assets/stock_images/yomee_penguin_plush__1346c204.jpg";
import penguin6 from "@assets/stock_images/realistic_penguin_pl_3fff98e6.jpg";
import penguin7 from "@assets/stock_images/realistic_penguin_pl_28355db3.jpg";
import penguin8 from "@assets/stock_images/realistic_penguin_pl_a5695958.jpg";
import penguin9 from "@assets/stock_images/realistic_penguin_pl_1ce00f22.jpg";
import penguin10 from "@assets/stock_images/realistic_penguin_pl_49446e2e.jpg";

interface BackgroundPenguinsProps {
  count?: number;
}

export default function BackgroundPenguins({ count = 8 }: BackgroundPenguinsProps) {
  const penguins = [penguin1, penguin2, penguin3, penguin4, penguin5, penguin6, penguin7, penguin8, penguin9, penguin10];
  
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
