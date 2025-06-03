"use client";

import { useEffect, useRef, useState } from "react";
import "../styles/globals.css";

const ingredientPositions: Record<number, number> = {
  0: (Math.PI * 7) / 6, // 0th ingredient → 210° (7/6 π)
  1: (Math.PI * 4) / 3, // 1st → 240° (4/3 π)
  2: -Math.PI / 2, // 2nd → -90° (or 270°)
  3: (Math.PI * 5) / 3, // 3rd → 300°
  4: (Math.PI * 11) / 6, // 4th → 330°
  5: 0, // 5th → 0° (3 o'clock)
};

export default function DishModal({
  onClose,
  selectedDish,
}: {
  onClose: () => void;
  selectedDish: MenuItem;
}) {
  const [isMounted, setIsMounted] = useState(false);
  const [radius, setRadius] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true); // Trigger animation

    const computeRadius = () => {
      if (wrapperRef.current) {
        const size = wrapperRef.current.offsetWidth;
        setRadius(size * 0.4); // 🔁 40% of wrapper width
      }
    };

    computeRadius();
    window.addEventListener("resize", computeRadius);
    return () => window.removeEventListener("resize", computeRadius);
  }, []);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="dish-wrapper" ref={wrapperRef}>
          <div className="dish-backdrop" />
          <img
            src={`/media/dishes/${selectedDish.dishImage}`}
            className={`dish-center ${isMounted ? "visible" : ""}`}
            alt={selectedDish.name}
          />
          {selectedDish.ingredients?.map((ingredient, index) => {
            const rad = ingredientPositions[index] ?? 0;
            const x = radius * Math.cos(rad);
            const y = radius * Math.sin(rad);

            return (
              <div
                key={ingredient}
                className={`ingredient ${isMounted ? "visible" : ""}`}
                style={
                  {
                    "--x": `${x}px`,
                    "--y": `${y}px`,
                    animationDelay: `${500 + index * 150}ms`,
                  } as React.CSSProperties
                }
              >
                <div className="ingredient-backdrop" />
                <img
                  src={`/media/ingredients/${ingredient}.png`}
                  alt={`Ingredient: ${ingredient}`}
                  className="ingredient-img"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
