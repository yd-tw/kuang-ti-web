"use client";

import { motion, useMotionValue, animate } from "motion/react";
import { useEffect, useState } from "react";

interface CountUpProps {
  from?: number;
  end: number;
  duration?: number;
  decimals?: number;
}

export default function CountUp({
  from = 0,
  end,
  duration = 2,
  decimals = 0,
}: CountUpProps) {
  const count = useMotionValue(from);
  const [display, setDisplay] = useState(from.toFixed(decimals));

  useEffect(() => {
    const controls = animate(count, end, {
      duration,
      onUpdate(value) {
        setDisplay(value.toFixed(decimals));
      },
    });

    return controls.stop;
  }, [end, duration, decimals, count]);

  return <motion.span>{display}</motion.span>;
}
