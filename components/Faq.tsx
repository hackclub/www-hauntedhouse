import { Definition } from "./Satellites/definitionThis";
import { Projects } from "./Satellites/projectsThis";
import { Vibe } from "./Satellites/vibeThis";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";

const items = [
  {
    header: "Am I eligible to participate in Haunted House?",
    content: (
      <div>
        If you're eighteen or under, yes, we are so excited to see you in
        Chicago! If you're over 18 but still in high school, shoot us a mail at{" "}
        <a href="mailto:hauntedhouse@hackclub.com" className="underline">
          hauntedhouse@hackclub.com
        </a>
        .
      </div>
    ),
  },
  {
    header: "What has Hack Club done before?",
    content: (
      <div>
        We have run multiple events of this scale around the world. Each one,
        however is special in its own way. The summer of '21, we{" "}
        <a
          href="https://www.youtube.com/watch?v=2BID8_pGuqA"
          className="underline"
        >
          chartered a train across America
        </a>{" "}
        and ran the world's longest hackathon on land. Earlier this year, we ran
        an outdoors do-it-yourself camping adventure in Cabot, Vermont. Check it
        out{" "}
        <a href="TODO:outernet_documentary" className="underline">
          here
        </a>
        !
      </div>
    ),
  },
  {
    header: "What do I need to bring to Haunted House?",
    content:
      "Your laptop, chargers, anything for your hack, toiletries, sleeping bags, and an open mind.",
  },
  {
    header: "I'm not that good at coding, can I join?",
    content: (
      <div>
        This hackathon is for hackers of all skill levels! We'll have workshops
        and other events so join us and let's learn together. If you'd like to
        start exploring some introductory projects, check out{" "}
        <a href="https://workshops.hackclub.com" className="underline">
          Hack Club Workshops
        </a>
        .
      </div>
    ),
  },
  {
    header: "My parents are worried! What should I do?",
    content: (
      <div>
        We're here to help, ask them to reach out to us at{" "}
        <a href="mailto:hauntedhouse@hackclub.com" className="underline">
          hauntedhouse@hackclub.com
        </a>{" "}
        and we'll make sure to answer all their questions. Haunted House will be
        supervised by background checked staff and overseen by 24/7 security
        staff. Read more in our{" "}
        <a href="https://outernet.hackclub.com FIX TODO" className="underline">
          parent's guide
        </a>
        .
      </div>
    ),
  },
];

const items2 = [
  {
    header: "Does participating cost anything?",
    content:
      "Nothing! We’ll have meals, snacks, and beverages onsite at the hackathon, as well as swag, prizes, and fun mini-events.",
  },
  {
    header: "What can I make at Haunted House?",
    content: (
      <div>
        At Haunted House, we're building a haunted house on the interwebs. We’ll
        provide an “entry point” that links to the website you made, which will
        then link to another participant’s website. By linking all of these
        sites together we'll have created an epic multi-room virtual haunted
        house that you can share with friends and family.
      </div>
    ),
  },
  {
    header: "What are the sleeping arrangements?",
    content: (
      <div>
        On both nights we will have a designated gender-seperated and supervised
        sleeping area in the venue with low lights and minimal sound for you to
        rest! Make sure to bring a sleeping bag!
      </div>
    ),
  },
  {
    header: "I have more questions, how can I reach out?",
    content: (
      <div>
        Contact us! Reach out on{" "}
        <span className="italics underline">#hauntedhouse</span> on the Hack
        Club Slack or email us at{" "}
        <a href="mailto:hauntedhouse@hackclub.com" className="underline">
          hauntedhouse@hackclub.com
        </a>
        . We're always ready to answer all your questions!
      </div>
    ),
  },
];

const AccordionItem = ({ header, ...rest }) => (
  <Item
    {...rest}
    header={({ state: { isEnter } }) => (
      <>
        <h4 className="text-xl md:text-2xl tracking-normal">{header}</h4>
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
    <div className="p-8 md:p-12 w-full border-t border-accent-default border-dashed divide-x-0 divide-accent-default divide-dashed">
      <h1 className="text-accent-default text-7xl text-center mb-6">FAQs</h1>

      <div className="flex-col lg:flex-row flex space-y-4 lg:space-y-0 lg:space-x-4 w-full">
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
          {items2.map(({ header, content }, i) => (
            <AccordionItem header={header} key={i}>
              {content}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};
