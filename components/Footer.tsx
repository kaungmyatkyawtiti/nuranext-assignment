import {
  SOCIALS_LINKS,
  WE_OFFER_LINKS,
  WE_ONENEX_LINKS
} from "@/constants";
import Link from "next/link";
import FooterColumn from "./FooterColumn";
import Logo from "./Logo";
import ContactCTA from "./ContactCTA";
import Magnetic from "./animations/Magnetic";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Top Description */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
          <h2 className="text-[clamp(24px,4vw,3.6rem)] font-bold uppercase leading-tight text-primary-blue dark:text-white">
            We are your partner for <br /> innovation & growth
          </h2>
          <ContactCTA />
        </div>

        {/* Scrollable grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 max-h-[40vh] overflow-y-auto md:max-h-none md:overflow-visible">
          <FooterColumn title="We Onenex" links={WE_ONENEX_LINKS} />
          <FooterColumn title="We Offer" links={WE_OFFER_LINKS} />

          <div>
            <h4 className="footer-subtitle">
              Follow Us
            </h4>
            <div className="flex gap-2">
              {SOCIALS_LINKS.map(link => (
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  <Magnetic className="social-link">
                    <link.Icon size={20} />
                  </Magnetic>
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
      </div>
    </footer>
  );
};

export default Footer;
