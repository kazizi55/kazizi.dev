// This is your config file, place any global data here.
// You can import this data from anywhere in your site by using the `import` keyword.

type Config = {
  title: string;
  description: string;
  lang: string;
  profile: {
    author: string;
    description?: string;
  };
};

type SocialLink = {
  icon: string;
  friendlyName: string; // for accessibility
  link: string;
};

export const siteConfig: Config = {
  title: "kazizi.dev",
  description: "kazizi.dev - Kazuya Iijima's personal blog.",
  lang: "en-GB",
  profile: {
    author: "Kazuya Iijima",
    description: "your bio description",
  },
};

/** 
  These are you social media links. 
  It uses https://github.com/natemoo-re/astro-icon#readme
  You can find icons @ https://icones.js.org/
*/
export const socialLinks: Array<SocialLink> = [
  {
    icon: "mdi:github",
    friendlyName: "Github",
    link: "https://github.com/kazizi55",
  },
  {
    icon: "mdi:twitter",
    friendlyName: "X",
    link: "https://twitter.com/kazizi55",
  },
];

export const NAV_LINKS: Array<{ title: string; path: string }> = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "Archive",
    path: "/archive",
  },
];
