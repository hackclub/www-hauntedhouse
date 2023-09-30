import { useMyPresence, useOthers } from "@/liveblocks.config";
import { ReactFlashlight } from "react-flashlight";
import Cursor from "./Cursor";
import { useCallback, useEffect, useRef, useState } from "react";

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
  const callBackRef = useRef(null);

  const normalizeCursor = (x, y) => {
    if (!dimensions) {
      return { x, y };
    }

    const normalizedX = (x - dimensions.left) / dimensions.width;
    const normalizedY = (y - dimensions.top) / dimensions.height;

    return {
      x: normalizedX,
      y: normalizedY,
    };
  };

  const handlePointerMove = (event) => {
    event.preventDefault();

    const { clientX, clientY } = event;

    const normalizedCursor = normalizeCursor(clientX, clientY);
    setNormalizedCoords(normalizedCursor);

    // Update cursor position in MyPresence
    updateMyPresence({
      cursor: {
        x: normalizedCursor.x,
        y: normalizedCursor.y,
      },
    });
  };

  const handlePointerLeave = () => {
    // When the pointer goes out, set cursor to null
    updateMyPresence({
      cursor: null,
    });
  };

  const others = useOthers();

  useEffect(() => {
    const handleResize = () => {
      if (callBackRef.current) {
        setDimensions(callBackRef.current.getBoundingClientRect());
      }
    };

    window.addEventListener("resize", handleResize);

    if (callBackRef.current) {
      setDimensions(callBackRef.current.getBoundingClientRect());
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative flex ouija flex-col xl:flex-row h-full space-x-0 space-y-8 xl:space-y-0 xl:space-x-8"
    >
      <ReactFlashlight
        className="z-0"
        showCursor
        initialPosition={{ x: 10, y: 10 }}
      >
        <div
          ref={(node) => (callBackRef.current = node)}
          className="border-10 rounded-lg border-accent-default"
        >
          <img src="/ouijaboard.jpeg" className="w-full" alt="Ouija Board" />
        </div>
      </ReactFlashlight>

      <div className="absolute w-full h-full overflow-x-hidden">
        {others.map(({ connectionId, presence }) => {
          if (presence.cursor === null) {
            return null;
          }
          return (
            <Cursor
              key={`cursor-${connectionId}`}
              color={COLORS[connectionId % COLORS.length]}
              x={presence.cursor.x}
              y={presence.cursor.y}
            />
          );
        })}
      </div>
    </div>
  );
};
