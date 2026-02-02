import {
  SOCIALS_LINKS,
  WE_OFFER_LINKS,
  WE_ONENEX_LINKS
} from "@/constants";
import { RiArrowRightLongLine } from "@remixicon/react";
import Link from "next/link";
import FooterColumn from "./FooterColumn";
import Logo from "./Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-footer-background px-6 py-12 md:px-16 lg:px-24 border-t">
      {/* Top Description */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
        <h2 className="title">
          We are your partner for <br /> innovation & growth
        </h2>
        <button className="primary-btn border text-brand-blue hover:bg-brand-blue hover:text-brand-blue-foreground">
          GET IN TOUCH
          <RiArrowRightLongLine size={22} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        <FooterColumn
          title={"We Onenex"}
          links={WE_ONENEX_LINKS}
        />

        <FooterColumn
          title={"We Offer"}
          links={WE_OFFER_LINKS}
        />

        <div>
          <h4 className="footer-subtitle">Follow Us</h4>
          <div className="flex gap-2">
            {SOCIALS_LINKS.map(link => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="social-link"
              >
                <link.Icon size={20} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Branding and Copyright */}
      <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t gap-4">
        <Logo />
        <div className="text-xs uppercase text-secondary-blue dark:text-white/85 font-semibold">
          ONENEX © COPYRIGHT {currentYear}. ALL RIGHT RESERVED.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
