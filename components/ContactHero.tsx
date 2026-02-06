import ScrambleText from "./animations/ScrambleText";
import ContactCTA from "./ContactCTA";

const text = "Let's talk about \n your project"

const ContactHero = () => {
  return (
    <section className="min-h-screen col-center px-4 py-20">
      <div className="max-w-7xl gap-10 text-center space-y-4 mb-14">
        <h4 className="text-lg md:text-xl font-semibold uppercase text-foreground/80">
          Seeking partners in change?
        </h4>

        <ScrambleText
          className="text-[clamp(2rem,6vw,4rem)] font-semibold text-brand-primary leading-tight"
          text={text}
        />
      </div>

      <ContactCTA />
    </section>
  );
};

export default ContactHero;
