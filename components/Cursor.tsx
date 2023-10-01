import { motion } from "framer-motion";
import Image from "next/image";

// Spring animated cursor
export default function Cursor({ color, x, y }) {
  return (
    <motion.div
      initial={{ x, y }}
      animate={{ x, y }}
      transition={{
        type: "spring",
        damping: 30,
        mass: 0.8,
        stiffness: 100,
      }}
    >
      <CursorSvg color={color} />
    </motion.div>
  );
}

// SVG cursor shape
function CursorSvg({ color }) {
  return (
    <div>
      <Image src="/ouijasmallish.png" alt="cursor" width={32} height={44} />
    </div>
  );
}
