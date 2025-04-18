import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Define the main text (name) and the subtitle to be animated
const name = "NARVINSACHANIYA";

export default function HomeDesign() {
  // State to control whether to play the reverse (exit) animation
  const [reverse, setReverse] = useState(false);

  // The delay is calculated based on the length of the name.
  useEffect(() => {
    const nameTime = name.length * 100 + 600;
    const timer1 = setTimeout(() => setShowSubtitle(true), nameTime);
    return () => clearTimeout(timer1);
  }, []);

  // Log when the reverse animation is complete (you can add more logic here if needed)
  useEffect(() => {
    if (!reverse) return;
    const reverseTime = name.length * 100 + subtitle.length * 50 + 1000;
    console.log("Reverse animation complete");
  }, [reverse]);

  return (
    <AnimatePresence>
      {/* Container with full screen width and height, responsive flex centering */}
      <motion.div
        key="intro"
        initial={{ opacity: 1, scaleY: 1 }}
        exit={{ opacity: 0, scaleY: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        style={{ originY: 0 }}
        className="w-screen h-screen bg-black flex flex-col items-center justify-center overflow-hidden relative">
        {/* Name Animation */}
        <div className="relative flex flex-wrap justify-center">
          {name.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ y: "200%", opacity: 0 }}
              animate={reverse ? { y: "-200%", opacity: 0 } : { y: "0%", opacity: 1 }}
              transition={{
                delay: index * 0.08, // Same delay for both forward and reverse animation
                duration: 0.6,
                ease: "easeOut",
              }}
              // Responsive font sizes: smaller on mobile, larger on medium and large screens
              className="font-extrabold tracking-tight leading-none text-white
                         text-[80px] sm:text-[100px] md:text-[120px] lg:text-[130px]"
            >
              {char}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
