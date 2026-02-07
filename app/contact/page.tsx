import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <section className="min-h-screen section-container col-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
          {/* Left side: Contact Description */}
          <div>
            <h1 className="text-[clamp(2rem,4vw,3.6rem)] font-bold leading-tight mb-3">
              {`Let's`} <span className="text-brand-primary">Connect.</span>
            </h1>
            <p className="text-[clamp(15px,4vw,1.2rem)] text-primary-pink max-w-md leading-relaxed">
              {`We're ready if you are.Let's get to it`}
            </p>
          </div>

          {/* Right Side: Contact Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
