import React from "react";

const services = [
  {
    title: "Special Doctors",
    description:
      "Choose from our team of qualified doctors and get expert advice and treatment.",
    button: "Book an appointment",
    icon: "👨‍⚕️",
  },
  {
    title: "24/7 Support",
    description:
      "Reach us anytime! Our support team is available 24/7.",
    button: "Book an appointment",
    icon: "📞",
  },
  {
    title: "Emergency Services",
    description:
      "In emergencies, we are here to provide immediate care and assistance.",
    button: "Book an appointment",
    icon: "🚑",
  },
];

const ServiceCards = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 mt-8">
      {services.map((service, index) => (
        <div
          key={index}
          className="w-80 bg-gray-200 rounded-2xl shadow-md p-6 text-center"
        >
          <div className="text-4xl mb-3">{service.icon}</div>
          <h3 className="text-lg font-semibold text-gray-900">
            {service.title}
          </h3>
          <p className="text-gray-600 text-sm mt-2 mb-4">
            {service.description}
          </p>
          <button className="w-full rounded-xl bg-[#192832] text-white py-2 hover:bg-[#0f1c24]">
            {service.button}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ServiceCards;