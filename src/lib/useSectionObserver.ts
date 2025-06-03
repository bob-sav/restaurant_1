// lib/useSectionObserver.ts
import { useEffect, useState } from "react";

export type SectionState = {
  id: string;
  ratio: number; // 0 to 1
  isIntersecting: boolean;
};

export function useSectionObserver(sectionIds: string[]) {
  const [sections, setSections] = useState<SectionState[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const updates = entries.map((entry) => ({
          id: entry.target.id,
          ratio: entry.intersectionRatio,
          isIntersecting: entry.isIntersecting,
        }));

        setSections((prev) => {
          const merged = [...prev];
          updates.forEach((update) => {
            const index = merged.findIndex((s) => s.id === update.id);
            if (index !== -1) merged[index] = update;
            else merged.push(update);
          });
          return merged;
        });
      },
      {
        threshold: Array.from({ length: 11 }, (_, i) => i / 10), // 0.0 to 1.0
        rootMargin: "-30% 0px -50% 0px",
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return sections;
}
