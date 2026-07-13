import { motion } from "motion/react";

export function HeroShape() {
  return (
    <div className="relative aspect-square w-full">
      <motion.div
        className="absolute inset-0 rounded-full border border-hair"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute inset-[8%] rounded-full border border-hair"
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute inset-[18%] rounded-full border border-hair"
        animate={{ rotate: 360 }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 h-[52%] w-[52%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink"
        animate={{ scale: [1, 1.03, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-[10%] top-[15%] h-3 w-3 rounded-full bg-ink"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[12%] right-[8%] h-2 w-2 rounded-full bg-ink"
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[16%] top-[22%] h-6 w-6 rounded-sm border border-ink"
        animate={{ rotate: [0, 90, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="pointer-events-none absolute inset-0 flex flex-col justify-between p-6 text-[10px] uppercase tracking-[0.25em] text-ink-soft">
        <div className="flex justify-between"><span>001 / Studio</span><span>NYC · LDN · RMT</span></div>
        <div className="flex justify-between"><span>AI · Design · Growth</span><span>v.2026</span></div>
      </div>
    </div>
  );
}