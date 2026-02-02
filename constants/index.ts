import { RiFacebookCircleFill, RiInstagramLine, RiLinkedinBoxFill, RiYoutubeLine } from "@remixicon/react";

export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Cases", href: "/cases" },
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
