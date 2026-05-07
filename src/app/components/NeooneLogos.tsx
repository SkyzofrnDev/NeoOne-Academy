import React from "react";

// Full logo: puzzle icon + "neoone academy" text
export const LogoFull: React.FC<{ inverted?: boolean; size?: "sm" | "md" | "lg" }> = ({
  inverted = false,
  size = "md",
}) => {
  const heights = { sm: 28, md: 36, lg: 48 };
  const h = heights[size];
  const textColor = inverted ? "#ffffff" : "#1F2937";
  const subColor = inverted ? "rgba(255,255,255,0.7)" : "#6B7280";

  return (
    <div className="flex items-center gap-2.5" style={{ height: h }}>
      {/* Puzzle icon cluster */}
      <svg width={h} height={h} viewBox="0 0 48 48" fill="none">
        {/* Top-left green piece */}
        <path
          d="M2 2 L18 2 Q18 -4 22 -4 Q26 -4 26 2 L26 18 Q20 18 20 22 Q20 26 26 26 L26 26 L2 26 L2 20 Q-4 20 -4 16 Q-4 12 2 12 Z"
          fill="#0F9D58"
          transform="translate(1,1)"
        />
        {/* Top-right blue piece */}
        <path
          d="M0 2 L16 2 L16 18 Q10 18 10 22 Q10 26 16 26 L16 26 L22 26 Q28 26 28 20 L28 14 Q34 14 34 10 Q34 6 28 6 L28 2 Q28 -4 22 -4 Q16 -4 16 2 Z"
          fill="#4285F4"
          transform="translate(18,1)"
        />
        {/* Bottom yellow piece */}
        <path
          d="M2 2 L24 2 Q24 -4 28 -4 Q32 -4 32 2 L46 2 Q46 14 46 14 L46 20 Q40 20 40 24 Q40 28 46 28 L46 28 L2 28 L2 22 Q-4 22 -4 18 Q-4 14 2 14 Z"
          fill="#F4B400"
          transform="translate(1,20)"
        />
      </svg>

      {/* Text */}
      <div className="flex flex-col leading-none">
        <span
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 800,
            fontSize: h * 0.44,
            color: textColor,
            letterSpacing: "-0.02em",
            lineHeight: 1,
          }}
        >
          neoone
        </span>
        <span
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 500,
            fontSize: h * 0.3,
            color: subColor,
            letterSpacing: "0.08em",
            lineHeight: 1.2,
            textTransform: "uppercase",
          }}
        >
          academy
        </span>
      </div>
    </div>
  );
};

// Icon-only puzzle logo (3 interlocking pieces)
export const LogoIcon: React.FC<{
  size?: number;
  opacity?: number;
  className?: string;
}> = ({ size = 32, opacity = 1, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    opacity={opacity}
    className={className}
    aria-hidden="true"
  >
    {/* Green piece top-left */}
    <path
      d="M2 2 L18 2 Q18 -3 22 -3 Q26 -3 26 2 L26 18 Q21 18 21 22 Q21 26 26 26 L2 26 L2 20 Q-3 20 -3 16 Q-3 12 2 12 Z"
      fill="#0F9D58"
      transform="translate(1,1)"
    />
    {/* Blue piece top-right */}
    <path
      d="M0 2 L14 2 L14 18 Q9 18 9 22 Q9 26 14 26 L22 26 Q28 26 28 20 L28 14 Q33 14 33 10 Q33 6 28 6 L28 2 Q28 -3 23 -3 Q18 -3 18 2 Z"
      fill="#4285F4"
      transform="translate(19,1)"
    />
    {/* Yellow piece bottom */}
    <path
      d="M2 0 L22 0 Q22 -5 26 -5 Q30 -5 30 0 L44 0 L44 12 Q39 12 39 16 Q39 20 44 20 L2 20 L2 14 Q-3 14 -3 10 Q-3 6 2 6 Z"
      fill="#F4B400"
      transform="translate(2,26)"
    />
  </svg>
);
