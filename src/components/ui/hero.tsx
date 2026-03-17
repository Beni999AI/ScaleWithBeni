"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

interface Beam {
  x: number;
  y: number;
  width: number;
  length: number;
  angle: number;
  speed: number;
  opacity: number;
  pulse: number;
  pulseSpeed: number;
  layer: number;
}

function createBeam(width: number, height: number, layer: number): Beam {
  const angle = -35 + Math.random() * 10;
  const baseSpeed = 0.2 + layer * 0.2;
  const baseOpacity = 0.08 + layer * 0.05;
  const baseWidth = 10 + layer * 5;
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    width: baseWidth,
    length: height * 2.5,
    angle,
    speed: baseSpeed + Math.random() * 0.2,
    opacity: baseOpacity + Math.random() * 0.1,
    pulse: Math.random() * Math.PI * 2,
    pulseSpeed: 0.01 + Math.random() * 0.015,
    layer,
  };
}

export const PremiumHero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const noiseRef = useRef<HTMLCanvasElement>(null);
  const beamsRef = useRef<Beam[]>([]);
  const animationFrameRef = useRef<number>(0);
  const [titleNumber, setTitleNumber] = useState(0);

  const LAYERS = 3;
  const BEAMS_PER_LAYER = 8;

  const aiTitles = [
    "Not because you're a bad agent.",
    "Because you don't have the system needed.",
    "Because your competition moves faster.",
    "I fix that.",
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    const noiseCanvas = noiseRef.current;
    if (!canvas || !noiseCanvas) return;
    const ctx = canvas.getContext("2d");
    const nCtx = noiseCanvas.getContext("2d");
    if (!ctx || !nCtx) return;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      noiseCanvas.width = window.innerWidth * dpr;
      noiseCanvas.height = window.innerHeight * dpr;
      noiseCanvas.style.width = `${window.innerWidth}px`;
      noiseCanvas.style.height = `${window.innerHeight}px`;
      nCtx.setTransform(1, 0, 0, 1, 0, 0);
      nCtx.scale(dpr, dpr);

      beamsRef.current = [];
      for (let layer = 1; layer <= LAYERS; layer++) {
        for (let i = 0; i < BEAMS_PER_LAYER; i++) {
          beamsRef.current.push(
            createBeam(window.innerWidth, window.innerHeight, layer)
          );
        }
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const generateNoise = () => {
      const imgData = nCtx.createImageData(
        noiseCanvas.width,
        noiseCanvas.height
      );
      for (let i = 0; i < imgData.data.length; i += 4) {
        const v = Math.random() * 255;
        imgData.data[i] = v;
        imgData.data[i + 1] = v;
        imgData.data[i + 2] = v;
        imgData.data[i + 3] = 12;
      }
      nCtx.putImageData(imgData, 0, 0);
    };

    const drawBeam = (beam: Beam) => {
      ctx.save();
      ctx.translate(beam.x, beam.y);
      ctx.rotate((beam.angle * Math.PI) / 180);

      const pulsingOpacity = Math.min(
        1,
        beam.opacity * (0.8 + Math.sin(beam.pulse) * 0.4)
      );
      const gradient = ctx.createLinearGradient(0, 0, 0, beam.length);
      gradient.addColorStop(0, `rgba(171,171,171,0)`);
      gradient.addColorStop(
        0.2,
        `rgba(171,171,171,${pulsingOpacity * 0.5})`
      );
      gradient.addColorStop(0.5, `rgba(171,171,171,${pulsingOpacity})`);
      gradient.addColorStop(
        0.8,
        `rgba(171,171,171,${pulsingOpacity * 0.5})`
      );
      gradient.addColorStop(1, `rgba(171,171,171,0)`);

      ctx.fillStyle = gradient;
      ctx.filter = `blur(${2 + beam.layer * 2}px)`;
      ctx.fillRect(-beam.width / 2, 0, beam.width, beam.length);
      ctx.restore();
    };

    const animate = () => {
      if (!canvas || !ctx) return;

      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, "#050505");
      gradient.addColorStop(1, "#111111");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      beamsRef.current.forEach((beam) => {
        beam.y -= beam.speed * (beam.layer / LAYERS + 0.5);
        beam.pulse += beam.pulseSpeed;
        if (beam.y + beam.length < -50) {
          beam.y = window.innerHeight + 50;
          beam.x = Math.random() * window.innerWidth;
        }
        drawBeam(beam);
      });

      generateNoise();
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleNumber((prev) => (prev + 1) % aiTitles.length);
    }, 2500);
    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <canvas
        ref={noiseRef}
        className="absolute inset-0 z-0 pointer-events-none"
      />
      <canvas ref={canvasRef} className="absolute inset-0 z-10" />

      <div className="relative z-20 h-screen w-full flex flex-col items-center justify-start pt-24 md:justify-center md:pt-0 px-6 text-center">
        <div className="container mx-auto flex flex-col items-center gap-6 md:gap-10 text-center">
          <div className="hidden sm:inline-flex items-center gap-2 rounded-full border border-cyan-dim bg-white/5 px-4 py-1.5 text-sm text-cyan backdrop-blur-sm">
            AI Systems for Dubai Real Estate
            <MoveRight className="w-4 h-4" />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl max-w-5xl tracking-tighter font-regular">
            <span className="text-white">You&apos;re losing deals you should have closed.</span>
            <span className="relative flex w-full justify-center [overflow-y:clip] md:pb-4 md:pt-1 min-h-[7rem] md:min-h-0">
              &nbsp;
              {aiTitles.map((title, index) => (
                <motion.span
                  key={index}
                  className="absolute font-semibold text-cyan whitespace-normal sm:whitespace-nowrap w-full sm:w-auto"
                  initial={{ opacity: 0, y: "-100" }}
                  transition={{ type: "spring", stiffness: 50 }}
                  animate={
                    titleNumber === index
                      ? { y: 0, opacity: 1 }
                      : {
                          y: titleNumber > index ? -150 : 150,
                          opacity: 0,
                        }
                  }
                >
                  {title}
                </motion.span>
              ))}
            </span>
          </h1>

          <p className="text-base md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
            Your competition responds instantly. You don&apos;t. Stop losing commission with the help of AI systems  — fully managed, built for Dubai.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 flex-wrap justify-center w-full sm:w-auto">
            <Button
              size="lg"
              className="gap-2 bg-cyan text-black font-semibold hover:bg-cyan/90"
              asChild
            >
              <a href="https://wa.me/36307926211" target="_blank" rel="noopener noreferrer">
                Book a Free Strategy Call <MoveRight className="w-4 h-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 border-cyan-dim text-white hover:bg-white/5" asChild>
              <a href="/services">
                See What I Build
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
