'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PAIRS = [
  {
    problem: {
      title: 'No voice. No context.',
      description: 'Service arrives, doesn\'t know what the guest wants.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
          <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
          <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
          <line x1="4" y1="4" x2="20" y2="20" strokeWidth="2" />
        </svg>
      ),
    },
    solution: {
      title: 'Voice to Text',
      subtitle: 'OFFLINE',
      description: 'Guests speak naturally. Crew receives clear, written requests instantly – no internet required.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
          <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
          <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
          <line x1="12" y1="19" x2="12" y2="23" />
          <line x1="8" y1="23" x2="16" y2="23" />
        </svg>
      ),
    },
  },
  {
    problem: {
      title: 'No multi-language support.',
      description: 'Guest speaks English, French, or Chinese – crew guesses.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
          <circle cx="12" cy="12" r="10" />
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
          <line x1="12" y1="17" x2="12.01" y2="17" strokeWidth="2" />
        </svg>
      ),
    },
    solution: {
      title: 'Instant Translation',
      subtitle: '30+ LANGUAGES',
      description: 'Real-time translation between guests and crew. Every request understood perfectly, every time.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
    },
  },
  {
    problem: {
      title: 'No real workflow.',
      description: 'System isn\'t built for yachts. No duty management, task reassignment, or guest preferences.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <line x1="9" y1="9" x2="15" y2="15" strokeWidth="2" />
          <line x1="15" y1="9" x2="9" y2="15" strokeWidth="2" />
        </svg>
      ),
    },
    solution: {
      title: 'Crew Management',
      subtitle: 'DUTY SYSTEM',
      description: 'Built for yachts. Duty schedules, task assignments, and guest preferences – all in one system.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
  },
];

// Animated Arrow Component
function AnimatedArrow({ isHovered, direction = 'right' }: { isHovered: boolean; direction?: 'right' | 'down' }) {
  const isVertical = direction === 'down';

  return (
    <div className={`relative flex items-center justify-center ${isVertical ? 'h-16 w-full' : 'w-24 h-full'}`}>
      <svg
        viewBox={isVertical ? "0 0 24 48" : "0 0 80 24"}
        className={`${isVertical ? 'h-12 w-6' : 'w-20 h-6'} transition-all duration-500 ${isHovered ? 'scale-110' : ''}`}
        fill="none"
      >
        {isVertical ? (
          <>
            {/* Vertical Arrow Line */}
            <motion.line
              x1="12"
              y1="0"
              x2="12"
              y2="38"
              stroke="url(#arrowGradientV)"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
            {/* Arrow Head */}
            <motion.path
              d="M6 36 L12 44 L18 36"
              stroke="url(#arrowGradientV)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            />
            {/* Pulse Effect */}
            <motion.circle
              cx="12"
              cy="22"
              r="3"
              fill="#C9A962"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 0.8, 0],
                scale: [0.5, 1.5, 0.5],
                cy: [10, 35, 10]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <defs>
              <linearGradient id="arrowGradientV" x1="12" y1="0" x2="12" y2="48" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#666666" />
                <stop offset="100%" stopColor="#C9A962" />
              </linearGradient>
            </defs>
          </>
        ) : (
          <>
            {/* Horizontal Arrow Line */}
            <motion.line
              x1="0"
              y1="12"
              x2="65"
              y2="12"
              stroke="url(#arrowGradient)"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
            {/* Arrow Head */}
            <motion.path
              d="M60 6 L72 12 L60 18"
              stroke="url(#arrowGradient)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            />
            {/* Flowing Pulse Effect */}
            <motion.circle
              cx="0"
              cy="12"
              r="3"
              fill="#C9A962"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 0.8, 0],
                scale: [0.5, 1.5, 0.5],
                cx: [5, 60, 5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <defs>
              <linearGradient id="arrowGradient" x1="0" y1="12" x2="80" y2="12" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#666666" />
                <stop offset="100%" stopColor="#C9A962" />
              </linearGradient>
            </defs>
          </>
        )}
      </svg>

      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 bg-luxury-bronze/20 blur-xl rounded-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.5 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
}

// Problem Box Component
function ProblemBox({ title, description, icon, isHovered }: { title: string; description: string; icon: React.ReactNode; isHovered: boolean }) {
  return (
    <motion.div
      className={`relative p-8 rounded-xl border transition-all duration-500 ${
        isHovered
          ? 'bg-luxury-charcoal-light/60 border-red-500/30'
          : 'bg-luxury-charcoal-light/30 border-luxury-gray-dark/20'
      }`}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Old/Problem indicator */}
      <div className="absolute top-4 right-4">
        <span className="text-xs uppercase tracking-wider text-red-400/60 font-medium">Problem</span>
      </div>

      {/* Icon */}
      <div className={`mb-4 transition-all duration-500 ${isHovered ? 'text-red-400/80 scale-110' : 'text-red-400/50'}`}>
        {icon}
      </div>

      <h3 className="text-2xl font-serif text-luxury-white/90 mb-3 pr-16">
        {title}
      </h3>
      <p className="text-luxury-gray-light/80 text-base leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}

// Solution Box Component
function SolutionBox({ title, subtitle, description, icon, isHovered }: { title: string; subtitle: string; description: string; icon: React.ReactNode; isHovered: boolean }) {
  return (
    <motion.div
      className={`relative p-8 rounded-xl border transition-all duration-500 overflow-hidden ${
        isHovered
          ? 'bg-gradient-to-br from-luxury-charcoal-light to-luxury-black border-luxury-bronze/50 shadow-lg shadow-luxury-bronze/10'
          : 'bg-gradient-to-br from-luxury-charcoal-light/80 to-luxury-black border-luxury-bronze/20'
      }`}
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Solution indicator */}
      <div className="absolute top-4 right-4">
        <span className="text-xs uppercase tracking-wider text-luxury-bronze font-medium">Solution</span>
      </div>

      {/* Icon */}
      <div className={`mb-5 transition-all duration-500 ${isHovered ? 'text-luxury-bronze scale-110' : 'text-luxury-bronze/70'}`}>
        {icon}
      </div>

      <h3 className={`text-2xl font-serif mb-2 transition-colors duration-500 ${isHovered ? 'text-luxury-bronze' : 'text-luxury-white'}`}>
        {title}
      </h3>
      <p className="text-luxury-bronze/80 text-xs uppercase tracking-[0.2em] font-medium mb-3">
        {subtitle}
      </p>
      <p className="text-luxury-gray-light/80 text-sm leading-relaxed">
        {description}
      </p>

      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-luxury-bronze/10 to-transparent rounded-xl pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

// Responsive Arrow - decorative element that changes direction based on breakpoint
function ResponsiveArrow({ isHovered }: { isHovered: boolean }) {
  return (
    <>
      {/* Desktop: horizontal arrow */}
      <div className="hidden md:block">
        <AnimatedArrow isHovered={isHovered} direction="right" />
      </div>
      {/* Mobile: vertical arrow */}
      <div className="block md:hidden">
        <AnimatedArrow isHovered={isHovered} direction="down" />
      </div>
    </>
  );
}

// Row Component
function ProblemSolutionRow({ pair, index }: { pair: typeof PAIRS[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true }}
    >
      {/* Single responsive layout: vertical on mobile, horizontal grid on desktop */}
      <div className="flex flex-col items-center gap-2 md:grid md:grid-cols-[1fr_auto_1fr] md:gap-6 md:items-center">
        <ProblemBox
          title={pair.problem.title}
          description={pair.problem.description}
          icon={pair.problem.icon}
          isHovered={isHovered}
        />
        <ResponsiveArrow isHovered={isHovered} />
        <SolutionBox
          title={pair.solution.title}
          subtitle={pair.solution.subtitle}
          description={pair.solution.description}
          icon={pair.solution.icon}
          isHovered={isHovered}
        />
      </div>
    </motion.div>
  );
}

export default function ProblemSolution() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/yacht-bg.jpg)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/95 via-luxury-black/90 to-luxury-black/95" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-luxury-white mb-6">
            The old call button era is <span className="text-gradient-bronze">over.</span>
          </h2>
          <p className="text-luxury-gray-light text-lg max-w-2xl mx-auto">
            See how Obedio transforms every pain point into a seamless solution.
          </p>
        </motion.div>

        {/* Problem-Solution Rows */}
        <div className="space-y-8 md:space-y-12">
          {PAIRS.map((pair, index) => (
            <ProblemSolutionRow key={index} pair={pair} index={index} />
          ))}
        </div>

        {/* Bottom Accent */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-20 flex justify-center"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-luxury-bronze/50" />
            <span className="text-luxury-bronze text-xs uppercase tracking-[0.3em]">Obedio Excellence</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-luxury-bronze/50" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
