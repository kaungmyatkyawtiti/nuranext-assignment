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
    <footer>
      {/* Top Description */}
      <div className="footer-desc">
        <h2 className="text-[clamp(1.5rem,6vw,3.75rem)] font-bold uppercase leading-tight text-primary-blue dark:text-white">
          We are your partner for <br /> innovation & growth
        </h2>
        <button className="primary-btn w-auto">
          GET IN TOUCH
          <RiArrowRightLongLine size={22} />
        </button>
      </div>

      <div className="w-full">
        {/* Scrollable grid */}
        <div className="footer-grid">
          <FooterColumn title="We Onenex" links={WE_ONENEX_LINKS} />
          <FooterColumn title="We Offer" links={WE_OFFER_LINKS} />

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
        <div className="footer-copyright">
          <Logo />
          <div className="text-xs uppercase text-secondary-blue dark:text-white/85 font-semibold">
            ONENEX © COPYRIGHT {currentYear}. ALL RIGHT RESERVED.
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
