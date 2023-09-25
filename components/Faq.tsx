import { Definition } from "./Satellites/definitionThis";
import { Projects } from "./Satellites/projectsThis";
import { Vibe } from "./Satellites/vibeThis";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";

const items = [
  {
    header: "What is Lorem Ipsum?",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing...",
  },
  {
    header: "Where does it come from?",
    content: "Quisque eget luctus mi, vehicula mollis lorem...",
  },
  {
    header: "Why do we use it?",
    content: "Suspendisse massa risus, pretium id interdum in...",
  },
];

const AccordionItem = ({ header, ...rest }) => (
  <Item
    {...rest}
    header={({ state: { isEnter } }) => (
      <>
        <h4 className="text-2xl tracking-normal">{header}</h4>
        <img
          className={`ml-auto transition-transform duration-200 ease-out ${
            isEnter && "rotate-180"
          }`}
          src={"/chevron.svg"}
          alt="Chevron"
        />
      </>
    )}
    className="border-b rounded-lg border-solid border bg-black border-accent-default"
    buttonProps={{
      className: ({ isEnter }) =>
        `flex w-full p-4 text-accent-default text-left ${isEnter && ""}`,
    }}
    contentProps={{
      className:
        "transition-height duration-200 ease-out text-beige tracking-wide text-lg",
    }}
    panelProps={{ className: "p-4" }}
  />
);

export const Faq = () => {
  return (
    <div className="p-8 md:p-12 w-full border-t border-b border-accent-default border-dashed divide-x-0 divide-accent-default divide-dashed">
      <h1 className="text-accent-default text-7xl text-center mb-6">FAQs</h1>

      <div className="flex space-x-4 w-full">
        <Accordion
          transition
          transitionTimeout={250}
          className="space-y-4 w-full"
        >
          {items.map(({ header, content }, i) => (
            <AccordionItem header={header} key={i}>
              {content}
            </AccordionItem>
          ))}
        </Accordion>
        <Accordion
          transition
          transitionTimeout={250}
          className="space-y-4 w-full"
        >
          {items.map(({ header, content }, i) => (
            <AccordionItem header={header} key={i}>
              {content}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};
