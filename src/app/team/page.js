"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const teamMembers = [
  {
    name: "Andi Saputra",
    role: "Founder & CTO",
    image: "/team/andi.jpg",
  },
  {
    name: "Rina Marlina",
    role: "AI Engineer",
    image: "/team/rina.jpg",
  },
  {
    name: "Bagas Nugraha",
    role: "Frontend Developer",
    image: "/team/bagas.jpg",
  },
];

export default function Team() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0a0618] to-[#18102e] text-white py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto" data-aos="fade-up">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Tim Kami
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, i) => (
            <div
              key={member.name}
              className="bg-[#150c2b]/60 border border-gray-800 p-6 rounded-xl text-center hover:scale-105 transition-transform duration-300"
              data-aos="fade-up"
              data-aos-delay={i * 150}
            >
              <Image
                src={member.image}
                alt={`Foto ${member.name} - ${member.role}`}
                width={96}
                height={96}
                className="w-24 h-24 mx-auto rounded-full mb-4 border-2 border-purple-400 object-cover"
              />
              <h2 className="text-xl font-semibold text-purple-400">
                {member.name}
              </h2>
              <p className="text-gray-300">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
