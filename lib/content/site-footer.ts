type FooterLink = {
  label: string;
  href: string;
};

type FooterHeading = {
  label: string;
  span: number;
};

type FooterGroup = {
  links: FooterLink[];
};

export const siteFooter = {
  newsletter: {
    tagline:
      "Stay Up to date with our latest features and releases by joining our newsletter.",
    placeholder: "Enter your email",
    actionLabel: "Subscribe",
    disclaimer:
      "By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.",
  },
  nav: {
    headings: [
      { label: "Browse", span: 2 },
      { label: "Platform", span: 1 },
    ] satisfies FooterHeading[],
    groups: [
      {
        links: [
          { label: "Featured Courses", href: "#" },
          { label: "Featured Categories", href: "#" },
          { label: "Business", href: "#" },
          { label: "IT", href: "#" },
          { label: "Design", href: "#" },
        ],
      },
      {
        links: [
          { label: "Development", href: "#" },
          { label: "Marketing", href: "#" },
          { label: "Photography", href: "#" },
          { label: "Finance", href: "#" },
          { label: "Sport", href: "#" },
        ],
      },
      {
        links: [
          { label: "Become a Creator", href: "#" },
          { label: "Affiliate Program", href: "#" },
          { label: "Contact", href: "#" },
          { label: "Help", href: "#" },
          { label: "About", href: "#" },
        ],
      },
    ] satisfies FooterGroup[],
  },
  legal: {
    copyright: "@ 2023 ByteSpace. All rights reserved.",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookies Settings", href: "#" },
    ] satisfies FooterLink[],
  },
};