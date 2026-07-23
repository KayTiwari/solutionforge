"use client";

import { useEffect } from "react";

const SIZE = 64;
const OUTER_FLAME =
  "M34 7c2 9 13 14 14 27 1 12-7 21-17 21s-17-7-17-17c0-8 4-14 10-21 0 6 2 10 6 13 3-7 1-15 4-23Z";
const CORE_FLAME =
  "M31 27c1 6 8 9 8 17 0 6-4 11-10 11s-10-4-10-10c0-5 3-10 8-15 0 4 1 8 4 10 2-4 0-8 0-13Z";
const INNER_FLAME =
  "M29 39c1 4 5 6 5 10 0 3-2 6-5 6s-6-3-6-6c0-4 3-6 5-9 0 2 0 3 1 4 1-2 0-3 0-5Z";

type FlameMotion = {
  anchorX: number;
  anchorY: number;
  offsetX: number;
  offsetY: number;
  rotation: number;
  shear: number;
  scaleX: number;
  scaleY: number;
};

function drawMovingPath(
  ctx: CanvasRenderingContext2D,
  path: Path2D,
  fill: string,
  motion: FlameMotion,
) {
  ctx.save();
  ctx.translate(
    motion.anchorX + motion.offsetX,
    motion.anchorY + motion.offsetY,
  );
  ctx.rotate(motion.rotation);
  ctx.transform(1, 0, motion.shear, 1, 0, 0);
  ctx.scale(motion.scaleX, motion.scaleY);
  ctx.translate(-motion.anchorX, -motion.anchorY);
  ctx.fillStyle = fill;
  ctx.fill(path);
  ctx.restore();
}

function drawEmber(
  ctx: CanvasRenderingContext2D,
  seconds: number,
  phase: number,
  originX: number,
  originY: number,
  color: string,
  size: number,
) {
  const progress = (seconds * 0.62 + phase) % 1;
  const fadeIn = Math.min(progress / 0.16, 1);
  const fadeOut = Math.min((1 - progress) / 0.3, 1);
  const opacity = Math.max(0, Math.min(fadeIn, fadeOut));
  const drift = Math.sin(progress * Math.PI * 2 + phase * 4) * 2.2;

  ctx.save();
  ctx.globalAlpha = opacity * 0.9;
  ctx.translate(originX + drift, originY - progress * 15);
  ctx.scale(1 - progress * 0.35, 1 - progress * 0.35);
  ctx.fillStyle = color;
  ctx.fillRect(-size / 2, -size / 2, size, size);
  ctx.restore();
}

export function AnimatedFavicon() {
  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.width = SIZE;
    canvas.height = SIZE;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const outerFlame = new Path2D(OUTER_FLAME);
    const coreFlame = new Path2D(CORE_FLAME);
    const innerFlame = new Path2D(INNER_FLAME);

    const link = document.createElement("link");
    link.rel = "icon";
    link.type = "image/png";
    link.sizes = "64x64";

    const removeCompetingIcons = () => {
      document
        .querySelectorAll('link[rel="icon"], link[rel="shortcut icon"]')
        .forEach((element) => {
          if (element !== link) element.remove();
        });
    };

    removeCompetingIcons();
    document.head.appendChild(link);

    const iconObserver = new MutationObserver(removeCompetingIcons);
    iconObserver.observe(document.head, { childList: true });

    const drawFrame = (seconds: number) => {
      ctx.clearRect(0, 0, SIZE, SIZE);

      ctx.fillStyle = "#111a18";
      ctx.beginPath();
      ctx.roundRect(2, 2, 60, 60, 11);
      ctx.fill();

      ctx.strokeStyle = "#35413e";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.roundRect(2.75, 2.75, 58.5, 58.5, 10.25);
      ctx.stroke();

      const outerPulse =
        Math.sin(seconds * 7.1) * 0.65 +
        Math.sin(seconds * 11.3 + 0.7) * 0.35;
      const outerSway =
        Math.sin(seconds * 5.4) * 0.58 +
        Math.sin(seconds * 8.7 + 0.8) * 0.27 +
        Math.sin(seconds * 2.1 + 0.2) * 0.15;

      drawMovingPath(ctx, outerFlame, "#ff5a36", {
        anchorX: 31,
        anchorY: 55,
        offsetX: outerSway * 3.2,
        offsetY: Math.sin(seconds * 8.3 + 0.4) * 1.2,
        rotation: outerSway * 0.14,
        shear: outerSway * 0.11,
        scaleX: 1 - outerPulse * 0.1,
        scaleY: 1 + outerPulse * 0.17,
      });

      const corePulse =
        Math.sin(seconds * 8.2 + 0.8) * 0.7 +
        Math.sin(seconds * 13.1) * 0.3;
      const coreSway =
        Math.sin(seconds * 6.1 + 1.2) * 0.7 +
        Math.sin(seconds * 10.2) * 0.3;

      ctx.save();
      ctx.globalAlpha = 0.84 + Math.sin(seconds * 9.4) * 0.16;
      drawMovingPath(ctx, coreFlame, "#ffb15f", {
        anchorX: 29,
        anchorY: 55,
        offsetX: coreSway * 2.4,
        offsetY: Math.sin(seconds * 10.4 + 0.9) * 1.1,
        rotation: coreSway * 0.11,
        shear: coreSway * 0.12,
        scaleX: 1 - corePulse * 0.11,
        scaleY: 1 + corePulse * 0.18,
      });
      ctx.restore();

      const innerPulse = Math.sin(seconds * 10.2 + 2.1);
      const innerSway =
        Math.sin(seconds * 7.4 + 2.4) * 0.72 +
        Math.sin(seconds * 12.6 + 0.4) * 0.28;

      drawMovingPath(ctx, innerFlame, "#fff3c4", {
        anchorX: 29,
        anchorY: 55,
        offsetX: innerSway * 1.6,
        offsetY: Math.sin(seconds * 12.1 + 1.1) * 1,
        rotation: innerSway * 0.09,
        shear: innerSway * 0.1,
        scaleX: 1 - innerPulse * 0.13,
        scaleY: 1 + innerPulse * 0.2,
      });

      drawEmber(ctx, seconds, 0.05, 44, 28, "#bcec75", 4.5);
      drawEmber(ctx, seconds, 0.53, 19, 31, "#ffb15f", 4);
    };

    let elapsed = 0;
    let last = performance.now();
    let rafId = 0;

    const draw = (now: number) => {
      const delta = Math.min(now - last, 50);
      last = now;
      elapsed += delta / 1000;

      drawFrame(elapsed);
      link.href = canvas.toDataURL("image/png");
      rafId = requestAnimationFrame(draw);
    };

    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    const showStaticIcon = () => {
      cancelAnimationFrame(rafId);
      rafId = 0;
      elapsed = 0;
      link.type = "image/svg+xml";
      link.removeAttribute("sizes");
      link.href = "/favicon.svg";
    };

    const startAnimation = () => {
      if (rafId) return;
      link.type = "image/png";
      link.sizes = "64x64";
      last = performance.now();
      rafId = requestAnimationFrame(draw);
    };

    const handleMotionPreference = (event: MediaQueryListEvent) => {
      if (event.matches) {
        showStaticIcon();
      } else {
        startAnimation();
      }
    };

    motionPreference.addEventListener("change", handleMotionPreference);

    if (motionPreference.matches) {
      showStaticIcon();
    } else {
      startAnimation();
    }

    return () => {
      cancelAnimationFrame(rafId);
      motionPreference.removeEventListener("change", handleMotionPreference);
      iconObserver.disconnect();
      link.remove();
    };
  }, []);

  return null;
}
