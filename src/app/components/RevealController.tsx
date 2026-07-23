"use client";

import { useEffect } from "react";

const revealSelectors = [
  ".confidence-layout",
  ".services-section .section-intro",
  ".service-row",
  ".fit-note",
  ".growth-section .section-intro",
  ".growth-offer",
  ".growth-path",
  ".growth-deliverables",
  ".approach-section",
  ".approach-thesis",
  ".phase-list",
  ".phase-list > li",
  ".work-section .section-intro",
  ".blueprint",
  ".done-panel",
  ".contact-section",
  ".contact-copy",
  ".brief-panel",
  ".site-footer",
  ".kinetic-heading",
].join(",");

export default function RevealController() {
  useEffect(() => {
    const root = document.documentElement;
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(revealSelectors),
    );
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const reveal = (target: HTMLElement) => {
      target.classList.add("reveal-once", "is-revealed");
    };

    const revealAll = () => {
      targets.forEach(reveal);
      root.classList.remove("reveal-ready");
    };

    const finishReveal = (target: HTMLElement) => {
      target.getAnimations({ subtree: true }).forEach((animation) => {
        const endTime = animation.effect?.getComputedTiming().endTime;
        if (typeof endTime !== "number" || !Number.isFinite(endTime)) return;

        try {
          animation.finish();
        } catch {
          // An animation can become non-finishable between inspection and finish.
        }
      });
    };

    if (motion.matches || !("IntersectionObserver" in window)) {
      revealAll();
      return;
    }

    targets.forEach((target) => {
      const rect = target.getBoundingClientRect();
      const isInitiallyVisible =
        rect.top < window.innerHeight &&
        rect.bottom > 0;

      if (isInitiallyVisible) reveal(target);
    });

    root.classList.add("reveal-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          reveal(entry.target as HTMLElement);
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px",
        threshold: 0.05,
      },
    );

    targets.forEach((target) => {
      if (!target.classList.contains("is-revealed")) observer.observe(target);
    });

    const onFocusIn = (event: FocusEvent) => {
      const target = (event.target as Element | null)?.closest(
        revealSelectors,
      ) as HTMLElement | null;
      if (!target) return;

      reveal(target);
      finishReveal(target);
      requestAnimationFrame(() => finishReveal(target));
    };

    const onMotionChange = (event: MediaQueryListEvent) => {
      if (!event.matches) return;
      observer.disconnect();
      revealAll();
    };

    document.addEventListener("focusin", onFocusIn);
    motion.addEventListener("change", onMotionChange);

    return () => {
      observer.disconnect();
      document.removeEventListener("focusin", onFocusIn);
      motion.removeEventListener("change", onMotionChange);
      root.classList.remove("reveal-ready");
    };
  }, []);

  return null;
}
