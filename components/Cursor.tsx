import { motion } from "framer-motion";
import Image from "next/image";

// Spring animated cursor
export default function Cursor({ color, x, y, location }) {
  return (
    <motion.div
      className="flex items-center flex-col w-fit h-fit"
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
      {location?.city && (
        <span
          style={{ backgroundColor: color }}
          className="text-white font-bold px-2 py-1 rounded-lg mt-2"
        >
          {location.city}, {location.region}, {location.country}
        </span>
      )}
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
