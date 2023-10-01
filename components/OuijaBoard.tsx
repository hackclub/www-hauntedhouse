import { useMyPresence, useOthers } from "@/liveblocks.config";
import { PointerEvent, useEffect, useRef, useState } from "react";
import { ReactFlashlight } from "react-flashlight";
import Cursor from "./Cursor";

const COLORS = [
  "#E57373",
  "#9575CD",
  "#4FC3F7",
  "#81C784",
  "#FFF176",
  "#FF8A65",
  "#F06292",
  "#7986CB",
];

export const OuijaBoard = () => {
  const [normalizedCoords, setNormalizedCoords] = useState({ x: 0, y: 0 });
  const [{ cursor }, updateMyPresence] = useMyPresence();

  const [dimensions, setDimensions] = useState(null);
  const callBackRef = useRef<HTMLDivElement>(null);

  const normalizeCursor = (x: number, y: number) => {
    if (!dimensions) return { x, y };

    const { left, top, width, height } = dimensions;
    const normalizedX = (x - left) / width;
    const normalizedY = (y - top) / height;

    return { x: normalizedX, y: normalizedY };
  };

  const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    e.preventDefault();

    const normalizedCursor = normalizeCursor(e.clientX, e.clientY);
    setNormalizedCoords(normalizedCursor);

    const width = callBackRef.current.getBoundingClientRect().width;
    const height = callBackRef.current.getBoundingClientRect().height;

    // Update cursor position in MyPresence
    updateMyPresence({
      dimensions: { width, height },
      cursor: { x: normalizedCursor.x * width, y: normalizedCursor.y * height },
    });
  };

  const others = useOthers();

  useEffect(() => {
    const handleResize = () => {
      setDimensions(callBackRef.current.getBoundingClientRect());
    };

    if (callBackRef.current) {
      setDimensions(callBackRef.current.getBoundingClientRect());
      window.addEventListener("resize", handleResize);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      onPointerMove={handlePointerMove}
      onPointerLeave={() => updateMyPresence({ cursor: null })}
      className="relative flex ouija flex-col h-full space-x-0 space-y-8 xl:space-y-0 xl:space-x-8"
    >
      <div ref={callBackRef} className="border-10 relative rounded-lg border-accent-default">
        <ReactFlashlight className="z-0" showCursor initialPosition={{ x: 10, y: 10 }}>
          <div>
            <img src="/ouijaboard.jpeg" className="w-full h-full" alt="Ouija Board" />
          </div>
        </ReactFlashlight>

        <div className="absolute w-full h-full overflow-x-hidden top-0 left-0 mt-0 p-0">
          {others.map(({ connectionId, presence }, i) => {
            if (!presence.cursor) return null;

            const currentWidth = dimensions.width;
            const currentHeight = dimensions.height;

            console.log(presence.cursor);

            return (
              <Cursor
                key={`cursor-${connectionId}`}
                color={COLORS[connectionId % COLORS.length]}
                x={presence.cursor.x * (currentWidth / presence.dimensions.width)}
                y={presence.cursor.y * (currentHeight / presence.dimensions.height)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
