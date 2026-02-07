import { SERVICES } from "@/constants";
import FadeInOnScroll from "./animations/CompFadeInWrapper";

const ServiceList = () => {
  return (
    <section className="px-6 py-15">
      <div className="max-w-7xl mx-auto">
        {SERVICES.map((service, ind) => (
          <FadeInOnScroll
            key={`${ind} - ${service.category}`}
            delay={ind * 0.1}
          >
            <div
              className="border-t last:border-b py-16 space-y-10"
            >
              <h3
                className="text-[clamp(26px,4vw,2.6rem)] font-extrabold uppercase tracking-tighter text-brand-primary"
              >
                {service.category}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
                <div>
                  <p className="text-lg leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-base md:text-lg font-bold uppercase tracking-widest text-primary-pink">
                    Service Detail
                  </h4>
                  <ul className="space-y-2">
                    {service.details.map((detail, i) => (
                      <li key={i} className="font-medium text-brand-foreground">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </FadeInOnScroll>
        ))}
      </div>
    </section>
  );
};

export default ServiceList;
