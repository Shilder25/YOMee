import penguinFront from "@assets/generated_images/Cute_YoMee_penguin_front_d3cea83e.png";
import penguinJumping from "@assets/generated_images/YoMee_penguin_jumping_happy_73c1e57a.png";
import penguinSitting from "@assets/generated_images/YoMee_penguin_sitting_curious_f0c4d666.png";
import penguinWaving from "@assets/generated_images/YoMee_penguin_waving_hello_d1ffa465.png";

interface BackgroundPenguinsProps {
  count?: number;
}

export default function BackgroundPenguins({ count = 6 }: BackgroundPenguinsProps) {
  const penguins = [penguinFront, penguinJumping, penguinSitting, penguinWaving];
  
  const positions = [
    { top: '10%', left: '5%', size: '120px', delay: 0 },
    { top: '25%', right: '8%', size: '100px', delay: 0.5 },
    { top: '50%', left: '3%', size: '90px', delay: 1 },
    { top: '70%', right: '5%', size: '110px', delay: 1.5 },
    { top: '85%', left: '10%', size: '95px', delay: 2 },
    { top: '40%', right: '12%', size: '85px', delay: 2.5 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {positions.slice(0, count).map((pos, index) => (
        <div
          key={index}
          className="absolute rounded-full opacity-15 animate-float"
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
