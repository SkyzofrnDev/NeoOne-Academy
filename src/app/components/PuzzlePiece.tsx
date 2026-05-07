import React from "react";

interface PuzzlePieceProps {
  color?: string;
  size?: number;
  rotate?: number;
  opacity?: number;
  className?: string;
  variant?: 1 | 2 | 3 | 4;
}

// Four puzzle variants that interlock with each other
const paths = {
  // Tab top + Tab right + Blank bottom + Blank left
  1: "M 0 0 L 35 0 Q 35 -14 50 -14 Q 65 -14 65 0 L 100 0 L 100 35 Q 114 35 114 50 Q 114 65 100 65 L 100 100 L 65 100 Q 65 86 50 86 Q 35 86 35 100 L 0 100 L 0 65 Q 14 65 14 50 Q 14 35 0 35 Z",
  // Blank top + Tab right + Tab bottom + Blank left
  2: "M 0 0 L 35 0 Q 35 14 50 14 Q 65 14 65 0 L 100 0 L 100 35 Q 114 35 114 50 Q 114 65 100 65 L 100 100 L 65 100 Q 65 114 50 114 Q 35 114 35 100 L 0 100 L 0 65 Q 14 65 14 50 Q 14 35 0 35 Z",
  // Tab top + Blank right + Blank bottom + Tab left
  3: "M 0 0 L 35 0 Q 35 -14 50 -14 Q 65 -14 65 0 L 100 0 L 100 35 Q 86 35 86 50 Q 86 65 100 65 L 100 100 L 65 100 Q 65 86 50 86 Q 35 86 35 100 L 0 100 L 0 65 Q -14 65 -14 50 Q -14 35 0 35 Z",
  // Blank top + Blank right + Tab bottom + Tab left
  4: "M 0 0 L 35 0 Q 35 14 50 14 Q 65 14 65 0 L 100 0 L 100 35 Q 86 35 86 50 Q 86 65 100 65 L 100 100 L 65 100 Q 65 114 50 114 Q 35 114 35 100 L 0 100 L 0 65 Q -14 65 -14 50 Q -14 35 0 35 Z",
};

const viewBoxes = {
  1: "-14 -14 128 128",
  2: "-14 -14 128 128",
  3: "-14 -14 128 128",
  4: "-14 -14 128 128",
};

export const PuzzlePiece: React.FC<PuzzlePieceProps> = ({
  color = "#4285F4",
  size = 60,
  rotate = 0,
  opacity = 0.15,
  className = "",
  variant = 1,
}) => (
  <svg
    width={size}
    height={size}
    viewBox={viewBoxes[variant]}
    className={className}
    style={{ transform: `rotate(${rotate}deg)`, opacity, display: "block" }}
    aria-hidden="true"
  >
    <path d={paths[variant]} fill={color} />
  </svg>
);

// A group of 3 interlocking puzzle pieces
export const PuzzleGroup: React.FC<{
  colors?: [string, string, string];
  size?: number;
  opacity?: number;
  className?: string;
}> = ({
  colors = ["#4285F4", "#0F9D58", "#F4B400"],
  size = 50,
  opacity = 0.18,
  className = "",
}) => (
  <div className={`flex gap-0.5 ${className}`} aria-hidden="true">
    <svg width={size} height={size} viewBox="-14 -14 128 128">
      <path d={paths[3]} fill={colors[0]} opacity={opacity * 6} />
    </svg>
    <svg width={size} height={size} viewBox="-14 -14 128 128">
      <path d={paths[1]} fill={colors[1]} opacity={opacity * 6} />
    </svg>
    <svg width={size} height={size} viewBox="-14 -14 128 128">
      <path d={paths[4]} fill={colors[2]} opacity={opacity * 6} />
    </svg>
  </div>
);
