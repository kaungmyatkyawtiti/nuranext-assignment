import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen px-8 md:px-12 lg:px-20 col-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 w-full">
        {/* Left side: Contact Description */}
        <div>
          <h1 className="text-[clamp(2.2rem,6vw,50px)] font-bold leading-tight mb-4">
            {`Let's`} <span className="text-brand-primary">Connect.</span>
          </h1>
          <p className="text-[clamp(16px,4vw,1.2rem)] text-foreground/80 max-w-md leading-relaxed">
            {`We're ready if you are.Let's get to it`}
          </p>
        </div>

        {/* Right Side: Contact Form */}
        <ContactForm />
      </div>
    </main >
  );
}
