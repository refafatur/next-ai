"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const pricingPlans = [
  {
    name: "Gratis",
    price: "Rp0",
    features: ["100 request/hari", "Akses Chatbot", "Support dasar"],
  },
  {
    name: "Pro",
    price: "Rp99.000/bulan",
    features: [
      "10.000 request/bulan",
      "Akses semua fitur",
      "Prioritas support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Permintaan tidak terbatas",
      "Integrasi khusus",
      "Dukungan SLA & onboarding",
    ],
  },
];

export default function Pricing() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0a0618] to-[#18102e] text-white py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto" data-aos="fade-up">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Paket Harga
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, i) => (
            <div
              key={i}
              className="bg-[#150c2b]/60 border border-gray-800 p-6 rounded-xl hover:scale-105 transition-transform duration-300"
            >
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">
                {plan.name}
              </h2>
              <p className="text-3xl font-bold mb-6">{plan.price}</p>
              <ul className="space-y-3 text-gray-300">
                {plan.features.map((feature, index) => (
                  <li key={index}>✅ {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
