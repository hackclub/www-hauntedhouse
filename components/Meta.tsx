import { NextSeo } from "next-seo";
const title = "The Hack Club Haunted House";

const description =
  "🎃 Where Fright Meets Byte: A Haunted House Hackathon Experience. Oct 28th to 29th 2023 in Downtown Chicago";
const url = "https://www-hauntedhouse.hackclub.dev";
const Meta = () => {
  return (
    <NextSeo
      title={title}
      description={description}
      openGraph={{
        title,
        description,
        url,
        type: "website",
        images: [
            {
              url: "/metaimg.png",
              width: 1200,  
              height: 630,  
              alt: "Hack Club Haunted House Image"  
            }
          ],
      }}
      twitter={{
        cardType: "summary",
      }}
    />
  );
};

export default Meta;