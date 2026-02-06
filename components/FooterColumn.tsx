import Link from "next/link";

type FooterLink = {
  label: string;
  href: string;
};

type FooterColumnProps = {
  title: string;
  links: FooterLink[];
};

const FooterColumn = ({ title, links }: FooterColumnProps) => {
  return (
    <div>
      <h4 className="footer-subtitle">{title}</h4>
      <ul className="space-y-3 text-foreground/85 font-semibold text-sm md:text-base">
        {links.map(({ label, href }) => (
          <li key={label}>
            <Link href={href} className="hover:underline">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;
