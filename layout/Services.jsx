"use client";

import { services } from "@/constants";
import { ServiceCard } from "@/components";

const Services = () => {
  return (
    <div className="max_container flex justify-center flex-wrap gap-10">
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </div>
  );
};

export default Services;
