import React from "react";
import { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const items = [
  {
    id: 1,
    content: "1. Show up with friends in a halloween costume",
    photo: "/notesimages/16.webp",
  },
  {
    id: 2,
    content: "2. Design and build a website that will act as a room for the virtual haunted house.",
    photo: "/notesimages/11.webp",
  },
  {
    id: 3,
    content:
      "3. Submit a room so we can link it with the rest of the house.",
    photo: "/notesimages/15.webp",
  },
  {
    id: 4,
    content: "4. Explore the haunted house as it starts to build up.",
    photo: "/notesimages/25.webp",
  },
];

export const COLORS = [
  "#e57373",
  "#9575cd",
  "#4fc3f7",
  "#81c784",
  "#fff176",
  "#ff8a65",
  "#f06292",
  "#7986cb",
];

const NotesBoard = () => {
  const [state, setState] = useState<{ id: number; content: string }[]>(items);

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result as { id: number; content: string }[];
  };

  return (
    <DragDropContext
      enableDefaultSensors
      onDragEnd={(result) => {
        if (!result.destination) return;

        const items = reorder(
          state,
          result.source.index,
          result.destination.index
        );
        setState(items);
      }}
    >
      <Row items={state} />
    </DragDropContext>
  );
};

const Row = ({ items }) => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true));
    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, []);

  if (!enabled) return null;

  return (
    <Droppable droppableId="droppable" direction="horizontal">
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          className="w-full px-8 grid grid-cols-1 md:grid-cols-2 lg:flex flex-wrap lg:flex-nowrap gap-12  lg:gap-8 max-w-7xl mx-auto bg-[url('/darkcork.webp')] bg-cover py-10 border-[10px] border-accent-darker rounded-[5px] filter-black"
          {...provided.droppableProps}
        >
          {items.map((item, index) => {
            const num = Math.floor(Math.random() * COLORS.length);
            const color = `bg-stickies-${Math.floor(
              Math.random() * COLORS.length
            )}`;

            return (
              <Draggable key={item.id} draggableId={item.content} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    style={{
                      cursor: snapshot.isDragging ? "grabbing" : "grab",
                    }}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={`bg-stickies-0 rotate-[${num}deg] w-full max-w-[20rem] h-full relative aspect-square  shadow-2xl mx-auto my-auto p-[30px]`}
                  >
                    {/* <img
                    src="/cardimages/tape.webp"
                    className="w-[26%] max-w-[7rem] -top-[20%] left-[45%] absolute z-50"
                  /> */}
                    <img
                      src="/pin.png"
                      className="w-[18%] max-w-[7rem] absolute z-50"
                      style={{
                        transform: snapshot.isDragging
                          ? "rotate(50deg)"
                          : "rotate(0deg)",
                        top: "8px",
                        left: "50%",
                        translate: "-50%",
                        transition: "transform 0.2s ease-in-out",
                      }}
                    />
                    <div className="overflow-hidden relative">
                      <img src={item.photo} className="mt-4 sm:block hidden" />
                      <h1 className="pb-4 notes text-2xl lg:text-2xl xl:text-3xl mt-2 relative z-50 font-black text-black">
                        {item.content}
                      </h1>
                    </div>
                  </div>
                )}
              </Draggable>
            );
          })}

          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default NotesBoard;
