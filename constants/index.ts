import { Project, ServiceItem } from "@/types";
import { RiFacebookCircleFill, RiInstagramLine, RiLinkedinBoxFill, RiYoutubeLine } from "@remixicon/react";

export const NAV_LINKS = [
  { label: "Cases", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
];

// Can change href
export const SOCIALS_LINKS = [
  {
    Icon: RiInstagramLine,
    label: "Instagram",
    href: "https://instagram.com/yourpage",
  },
  {
    Icon: RiLinkedinBoxFill,
    label: "LinkedIn",
    href: "https://linkedin.com/company/yourpage",
  },
  {
    Icon: RiFacebookCircleFill,
    label: "Facebook",
    href: "https://facebook.com/yourpage",
  },
  {
    Icon: RiYoutubeLine,
    label: "YouTube",
    href: "https://youtube.com/@yourpage",
  },
];

export const WE_ONENEX_LINKS = [
  { label: "Cases", href: "#" },
  { label: "Contact us", href: "#" },
  { label: "Services", href: "#" },
];

export const WE_OFFER_LINKS = [
  { label: "UI/UX Development", href: "#" },
  { label: "Web Development", href: "#" },
  { label: "Android Development", href: "#" },
  { label: "iOS Development", href: "#" },
];

export const DUMMY_PROJECTS: Project[] = [
  {
    id: 1,
    category: 'App',
    title: 'Synpitarn Pico-Finance Platform',
    client: 'SYNPITARN',
    image: '/img.jpg',
    color: 'bg-[#EAE8E4]'
  },
  {
    id: 2,
    category: 'Website',
    title: 'The Goodlife Website: A Digital Content Hub',
    client: 'THE GOODLIFE',
    image: '/img.jpg',
    color: 'bg-[#634CC9]'
  },
  {
    id: 3,
    category: 'App',
    title: 'Creating An Intuitive Banking Experience',
    client: 'A BANK',
    image: '/img.jpg',
    color: 'bg-[#5039B5]'
  },
  {
    id: 4,
    category: 'Website',
    title: 'Revitalizing the Website Design and Development',
    client: 'MAHA',
    image: '/img.jpg',
    color: 'bg-[#2D5A27]'
  },
  {
    id: 5,
    category: 'App',
    title: 'Bridging Financial Gaps for Migrant Workers',
    client: 'SYNPITARN',
    image: '/img.jpg',
    color: 'bg-[#1E3A8A]'
  },
  {
    id: 6,
    category: 'Website',
    title: 'E-Commerce Fashion Experience',
    client: 'HOTLOTZ',
    image: '/img.jpg',
    color: 'bg-[#D1D5DB]'
  },
  {
    id: 7,
    category: 'App',
    title: 'Class Digital Bidding Platform',
    client: 'HOTLOTZ',
    image: '/img.jpg',
    color: 'bg-[#111827]'
  },
  {
    id: 8,
    category: 'Website',
    title: 'Modern Lifestyle Brand Hub',
    client: 'THE LIFESTYLE',
    image: '/img.jpg',
    color: 'bg-[#7C3AED]'
  },
  {
    id: 9,
    category: 'E-commerce',
    title: 'The Goodlife Website: A Digital Content Hub',
    client: 'THE GOODLIFE',
    image: '/img.jpg',
    color: 'bg-[#634CC9]'
  },

];

export const SERVICES: ServiceItem[] = [
  {
    category: "Branding",
    description: "Figuring out who you are and what you're really about. We help come up with a branding creative that tells your story.",
    details: [
      "Findings & Opportunities",
      "Brand Strategy",
      "Identity Development",
      "Digital Collateral",
      "Brand Guidelines"
    ]
  },
  {
    category: "Discovery",
    description: "We uncover insights and design products through a process of exploration to achieve user-centric products.",
    details: ["User Research", "Market Analysis", "Product Strategy"]
  },
  {
    category: "Digital Experiences",
    description: "We help build digital products and solutions that enhance consumer's lives and help them navigate better.",
    details: [
      "Marketing Websites",
      "Digital Products",
      "Mobile Apps",
      "Design Systems"
    ]
  },
  {
    category: "ENGINEERING",
    description: "We build products based upon modern technologies and lean approaches.",
    details: [
      "Front-end Development",
      "Website Development",
      "Product Development",
      "Cloud Engineering & Dev Ops"
    ]
  }
];

export const DUMMY_LATEST: Project[] = [
  {
    id: 1,
    category: 'App',
    title: 'Synpitarn Pico-Finance Platform',
    client: 'SYNPITARN',
    image: '/img.jpg',
    color: 'bg-[#EAE8E4]'
  },
  {
    id: 2,
    category: 'Website',
    title: 'The Goodlife Website: A Digital Content Hub',
    client: 'THE GOODLIFE',
    image: '/img.jpg',
    color: 'bg-[#634CC9]'
  },
  {
    id: 3,
    category: 'App',
    title: 'Creating An Intuitive Banking Experience',
    client: 'A BANK',
    image: '/img.jpg',
    color: 'bg-[#5039B5]'
  },
]
