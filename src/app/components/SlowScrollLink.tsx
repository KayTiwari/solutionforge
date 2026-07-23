"use client";

import { MouseEvent, ReactNode, useRef } from "react";

type SlowScrollLinkProps = {
  children: ReactNode;
  className?: string;
  href: `#${string}`;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
};

const scrollDuration = 1150;
const headerOffset = 76;

export default function SlowScrollLink({ children, className, href, onClick }: SlowScrollLinkProps) {
  const animationFrame = useRef<number | null>(null);

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }

    const target = document.querySelector<HTMLElement>(href);
    if (!target) return;

    event.preventDefault();

    if (animationFrame.current !== null) {
      cancelAnimationFrame(animationFrame.current);
    }

    const startY = window.scrollY;
    const targetY = Math.max(0, target.getBoundingClientRect().top + startY - headerOffset);
    const distance = targetY - startY;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      window.scrollTo(0, targetY);
      window.history.pushState(null, "", href);
      return;
    }

    let startTime: number | null = null;

    const step = (time: number) => {
      if (startTime === null) startTime = time;

      const progress = Math.min((time - startTime) / scrollDuration, 1);
      const eased = progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      window.scrollTo(0, startY + distance * eased);

      if (progress < 1) {
        animationFrame.current = requestAnimationFrame(step);
      } else {
        animationFrame.current = null;
        window.history.pushState(null, "", href);
      }
    };

    animationFrame.current = requestAnimationFrame(step);
  };

  return (
    <a className={className} href={href} onClick={handleClick}>
      {children}
    </a>
  );
}
