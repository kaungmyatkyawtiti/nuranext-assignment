import { SERVICES } from "@/constants";

const ServiceList = () => {
  return (
    <section className="w-full bg-gradient-violet px-6 md:px-16 py-20">
      <div className="max-w-7xl mx-auto">
        {SERVICES.map((service, ind) => (
          <div
            key={`${ind} - ${service.category}`}
            className="border-t border-white/85 last:border-b py-16 space-y-10"
          >
            <h3
              className="text-3xl md:text-4xl font-extrabold uppercase tracking-tighter text-cyan-300 dark:text-cyan-400"
            >
              {service.category}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
              <div>
                <p className="text-lg leading-relaxed text-white/85">
                  {service.description}
                </p>
              </div>

              <div>
                <h4 className="text-base md:text-lg font-bold uppercase tracking-widest text-cyan-300 dark:text-cyan-400 mb-6">
                  Service Detail
                </h4>
                <ul className="space-y-2">
                  {service.details.map((detail, i) => (
                    <li key={i} className="font-medium text-white/85">
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceList;
