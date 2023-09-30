import { useMyPresence, useOthers } from "@/liveblocks.config";
import { ReactFlashlight } from "react-flashlight";
import Cursor from "./Cursor";
import { useCallback, useState } from "react";

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
  const [coords, setCoords] = useState([10, 10]);
  const [{ cursor }, updateMyPresence] = useMyPresence();

  const [dimensions, setDimensions] = useState(null);

  const callBackRef = useCallback((domNode) => {
    if (domNode) {
      setDimensions(domNode.getBoundingClientRect());
    } else {
      console.log("hi there");
    }
  }, []);

  /**
   * Return all the other users in the room and their presence (a cursor position in this case)
   */
  const others = useOthers();

  return (
    <div
      onPointerMove={(event) => {
        event.preventDefault();

        setCoords([event.clientX, event.clientY]);

        // Check if dimensions is available before updating cursor position

        updateMyPresence({
          cursor: {
            x: Math.round(event.clientX),
            y: Math.round(event.clientY),
          },
        });
      }}
      onPointerLeave={() =>
        // When the pointer goes out, set cursor to null
        updateMyPresence({
          cursor: null,
        })
      }
      className="relative flex ouija flex-col xl:flex-row h-full space-x-0 space-y-8 xl:space-y-0 xl:space-x-8"
    >
      <ReactFlashlight
        className="z-0"
        showCursor
        initialPosition={{ x: 10, y: 10 }}
      >
        {/**
         * Iterate over other users and display a cursor based on their presence
         */}
        <div
          ref={callBackRef}
          className="border-10 rounded-lg border-accent-default"
        >
          <img src="/ouijaboard.jpeg" className="w-full" alt="Ouija Board" />
        </div>
      </ReactFlashlight>

      <div className="absolute w-full h-full">
        {others.map(({ connectionId, presence }) => {
          if (presence.cursor === null) {
            return null;
          }
          return (
            <Cursor
              key={`cursor-${connectionId}`}
              // connectionId is an integer that is incremented at every new connections
              // Assigning a color with a modulo makes sure that a specific user has the same colors on every clients
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
