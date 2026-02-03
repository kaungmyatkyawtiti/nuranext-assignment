import ContactCTA from "./ContactCTA";

const ContactHero = () => {
  return (
    <section className="min-h-dvh flex flex-col">
      <div className="grow flex flex-col justify-center items-center text-center px-4 gap-8">
        <h4 className="text-xl font-semibold uppercase text-foreground/80">
          Seeking partners in change?
        </h4>

        <h1 className="text-5xl md:text-7xl font-semibold text-brand-primary leading-tight max-w-5xl">
          {`Let's talk about`} <br /> your project.
        </h1>

        <ContactCTA />
      </div>
    </section>
  );
};

export default ContactHero;
