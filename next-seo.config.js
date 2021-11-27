/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "Yehez-Pokemon",
  titleTemplate: "%s | YehezGun",
  defaultTitle: "Yehez-Pokemon",
  description: "Capture your pokemon here.",
  canonical: "https://pokemon.yehezgun.com",
  openGraph: {
    url: "https://pokemon.yehezgun.com",
    title: "yehez-pokemon",
    description: "Capture your pokemon here.",
    type: "website",
    images: [
      {
        url: "https://yehez-og-image.yehezgun.com/Yehez-Pokemon.png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fres.cloudinary.com%2Fyehez%2Fimage%2Fupload%2Fv1636202181%2Fpeep_amkhuu.svg&widths=250&heights=250",
        alt: "yehez-pokemon.yehezgun.com og-image",
        width: 800,
        height: 600,
      },
    ],
    site_name: "yehez-pokemon",
  },
  twitter: {
    handle: "@handle",
    site: "@site",
    cardType: "summary_large_image",
  },
  additionalLinkTags: [
    {
      rel: "icon",
      href: "https://image.flaticon.com/icons/png/512/1068/1068780.png",
    },
  ],
};

export default defaultSEOConfig;
