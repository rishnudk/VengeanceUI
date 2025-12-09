"use client";
import { Button } from "@/components/ui/button";
import AnimatedButton from "@/components/ui/animated-button";
import { FlipText } from "@/components/ui/flip-text";
import { Sparkles } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <div className="relative grid lg:grid-cols-2 grid-cols-1 pt-32 pb-20 min-h-screen w-full gap-12 lg:gap-16 items-center">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20 dark:from-black dark:via-black dark:to-black pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-start justify-center space-y-6 max-w-2xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted/50 dark:bg-black/50 border border-border/50 text-sm text-muted-foreground"
        >
          <Sparkles className="h-3.5 w-3.5" />
          <span>Vengeance UI Components</span>
        </motion.div>

        <h1 className="text-5xl lg:text-6xl font-semibold leading-tight tracking-tight text-foreground">
          Build beautiful interfaces
          <FlipText
            className="block mt-2 ml-2 text-muted-foreground font-normal text-4xl lg:text-5xl"
            delay={0.5}
          >
            with precision and speed
          </FlipText>
        </h1>

        <p className="text-lg text-muted-foreground leading-relaxed max-w-xl font-light">
          A carefully crafted React component library for building modern, responsive web applications.
          Every component is designed with attention to detail.
        </p>

        <div className="flex flex-wrap gap-4 mt-8">
          <Link href={"/docs/components-overview"}>
            <AnimatedButton
              as="div"
              className="group relative overflow-hidden rounded-lg bg-gradient-to-b from-white to-neutral-100 dark:from-neutral-800 dark:to-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 text-sm font-medium px-6 py-2.5 transition-all duration-300 hover:from-neutral-50 hover:to-neutral-100 dark:hover:from-neutral-800 dark:hover:to-neutral-800 shadow-[0_1px_2px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,1)] dark:shadow-[0_1px_2px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.05)]"
              whileHover={{ scale: 1.05 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Components
              </span>
            </AnimatedButton>
          </Link>
          <Button
            variant={"outline"}
            size="lg"
            className="font-normal"
          >
            Custom Components
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative hidden lg:block"
      >
        <div className="relative rounded-2xl border border-border/30 bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-950 p-6 shadow-2xl shadow-black/5 dark:shadow-black/30 overflow-hidden">
          {/* Animated background glow */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-orange-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

          {/* "Explore" Text Preview */}
          <motion.div
            className="text-center mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <span className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-white">
              {"Explore".split('').map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 + i * 0.05 }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </span>
          </motion.div>

          {/* Mini StaggeredGrid Preview */}
          <div className="relative z-10 grid grid-cols-7 grid-rows-4 gap-1.5 w-full aspect-[1.4]">
            {Array.from({ length: 28 }).map((_, i) => {
              // Calculate stagger delay based on distance from center
              const col = i % 7;
              const row = Math.floor(i / 7);
              const centerCol = 3;
              const distanceFromCenter = Math.abs(col - centerCol);
              const delay = 0.6 + distanceFromCenter * 0.08 + row * 0.05;

              // Middle row, center 3 cells are the bento preview
              const isBentoArea = row === 1 && col >= 2 && col <= 4;

              if (isBentoArea) {
                if (col === 2) {
                  // Render bento group spanning 3 cells
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 30, scale: 0.8 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.5, delay: delay, ease: "easeOut" }}
                      className="col-span-3 flex gap-1 h-full"
                    >
                      {/* Bento Card 1 */}
                      <motion.div
                        className="flex-1 rounded-lg bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center shadow-lg cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="w-3 h-3 rounded-full bg-white/30" />
                      </motion.div>
                      {/* Bento Card 2 */}
                      <motion.div
                        className="flex-1 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-lg cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="w-3 h-3 rounded-full bg-white/30" />
                      </motion.div>
                      {/* Bento Card 3 */}
                      <motion.div
                        className="flex-1 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="w-3 h-3 rounded-full bg-white/30" />
                      </motion.div>
                    </motion.div>
                  );
                }
                // Skip the cells that are part of the bento group
                return null;
              }

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: delay,
                    ease: "easeOut"
                  }}
                  whileHover={{
                    scale: 1.1,
                    zIndex: 10,
                    transition: { duration: 0.2 }
                  }}
                  className="rounded-lg bg-zinc-200 dark:bg-zinc-800 border border-zinc-300/50 dark:border-zinc-700/50 flex items-center justify-center cursor-pointer hover:bg-zinc-300 dark:hover:bg-zinc-700 hover:shadow-lg transition-colors group"
                >
                  {/* Mini icon placeholder */}
                  <div className="w-2 h-2 rounded-full bg-zinc-400 dark:bg-zinc-600 group-hover:bg-zinc-500 dark:group-hover:bg-zinc-400 transition-colors" />
                </motion.div>
              );
            })}
          </div>

          {/* Label */}
          <motion.div
            className="mt-4 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <span className="text-[10px] uppercase tracking-widest text-zinc-400 dark:text-zinc-500 font-medium">
              StaggeredGrid Preview
            </span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
