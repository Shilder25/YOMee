interface SectionDividerProps {
  topColor: "teal" | "pink";
  bottomColor: "teal" | "pink";
}

export default function SectionDivider({ topColor, bottomColor }: SectionDividerProps) {
  const topBg = topColor === "teal" ? "#4ECDC4" : "#FF6B9D";
  const bottomBg = bottomColor === "teal" ? "#4ECDC4" : "#FF6B9D";

  return (
    <div className="relative w-full h-16 md:h-24" style={{ backgroundColor: topBg }}>
      <svg
        className="absolute bottom-0 w-full h-full"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,0 C300,80 900,80 1200,0 L1200,120 L0,120 Z"
          fill={bottomBg}
        />
      </svg>
    </div>
  );
}
