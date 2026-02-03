import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen p-8 md:p-24">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">

        {/* Left side: Contact Description */}
        <div className="flex flex-col justify-between space-y-12">
          <div>
            <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-8">
              {`Let's`} <br /> <span className="text-brand-primary">Connect.</span>
            </h1>
            <p className="text-2xl text-foreground/80 max-w-md leading-relaxed">
              {`We're ready if you are.Let's get to it`}
            </p>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <ContactForm />
      </div>
    </main >
  );
}
