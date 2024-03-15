export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + NextUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    // {
    //   label: "Home",
    //   href: "/",
    // },
    {
      label: "About",
      href: "/about",
      dropdown: [
        {
          label: "Bio",
          href: "/bio",
        },
        {
          label: "Sutranovum Institute",
          href: "/sutranovumInstitute",
        },
        {
          label: "Coaching and Therapy",
          href: "/coachingAndTherapy",
        },
        {
          label: "Podcasts",
          href: "/Podcasts",
        },
        {
          label: "Pubic speaking- Retreats",
          href: "/PubicSpeakingRetreats",
        },
      ],
    },
    {
      label: "Bodisutra",
      href: "/bodisutra",
    },
    {
      label: "Shop",
      href: "/shop",
    },
    {
      label: "Licensing",
      href: "/licensing",
    },
    {
      label: "The Course in Miracles",
      href: "/theCourseInMiracles ",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    goFundMe: "https://gofund.me/a6c3c8a3",
  },
  sutranovumLinks: {
    youtube: "https://www.youtube.com/@sutranovumchannel",
    twitter: "https://twitter.com/sutranovum",
    instagram: "https://www.instagram.com/sutranovum/",
  },
};
