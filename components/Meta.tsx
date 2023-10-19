import Head from "next/head";

const Meta = ({
  title = `Haunted House - 🎃 Where Fright Meets Byte: A Haunted House Hackathon Experience.`, // page title
  name = `Haunted House - 🎃 Where Fright Meets Byte: A Haunted House Hackathon Experience.`, // site name
  description = "150 teenagers gather in Chicago at BUILD on October 28th 2023 to build apps, websites, games and more!", // page description
  image = "/metaimg.png", // social card image URL
  url = "https://haunted.hackclub.com",
}) => (
  <Head>
    <meta key="og_locale" property="og:locale" content="en_US" />
    <meta key="og_type" property="og:type" content="website" />
    <meta key="og_site" property="og:site_name" content={name} />
    <title key="title">{title}</title>
    <meta key="og_title" property="og:title" content={title} />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
      rel="stylesheet"
    ></link>
    <meta key="tw_title" name="twitter:title" content={title} />
    {description && (
      <>
        <meta key="desc" name="description" content={description} />
        <meta key="og_desc" property="og:description" content={description} />
        <meta key="tw_desc" name="twitter:description" content={description} />
      </>
    )}
    {image && (
      <>
        <meta key="og_img" property="og:image" content={image} />
        <meta key="tw_card" name="twitter:card" content="summary_large_image" />
        <meta key="tw_img" name="twitter:image" content={`/metaimg.png`} />
      </>
    )}
    <link
      key="apple_icon"
      rel="apple-touch-icon"
      sizes="180x180"
      href={`${url}/apple-touch-icon.png`}
    />
    <link
      key="favicon_32"
      rel="icon"
      type="image/png"
      sizes="32x32"
      href={`${url}/favicon-32x32.png`}
    />
    <link
      key="favicon_16"
      rel="icon"
      type="image/png"
      sizes="16x16"
      href={`${url}/favicon-16x16.png`}
    />
    <link key="manifest" rel="manifest" href={`${url}/site.webmanifest`} />
  </Head>
);

export default Meta;
