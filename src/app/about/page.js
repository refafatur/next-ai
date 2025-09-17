"use client";

import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// FAQ component
const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border border-gray-700 rounded-lg p-4 bg-[#1c1433]/80 cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <h3 className="text-white font-semibold">{question}</h3>
      {open && <p className="mt-2 text-gray-400">{answer}</p>}
    </div>
  );
};

export default function About() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#0a0618] to-[#18102e] overflow-hidden pb-20">
      {/* Background gradient circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full bg-gradient-to-br from-[#2a1a5e]/30 to-[#1a1040]/0 blur-3xl opacity-60"
          data-aos="fade"
        ></div>
      </div>

      {/* Title */}
      <h1
        className="text-white text-5xl md:text-6xl font-bold text-center leading-tight mt-32"
        data-aos="fade-up"
      >
        About AI
      </h1>

      {/* Subtitle */}
      <p
        className="mt-8 text-gray-300 text-lg text-center max-w-2xl"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Halaman ini berisi penjelasan tentang teknologi AI yang digunakan pada
        platform Cansixtpyy AI. Anda dapat bertanya seputar AI, fitur, dan
        implementasi yang tersedia.
      </p>


      {/* FAQ Section */}
      <div className="mt-24 w-full max-w-3xl px-4" data-aos="fade-up" data-aos-delay="300">
        <h2 className="text-white text-3xl font-bold text-center mb-6">Pertanyaan Umum</h2>
        <div className="space-y-4">
          <FAQItem
            question="Apa itu Cansixtpyy AI?"
            answer="Cansixtpyy AI adalah platform yang memanfaatkan teknologi AI untuk berbagai kebutuhan seperti chat otomatis, pembuatan konten, dan ringkasan teks."
          />
          <FAQItem
            question="Bagaimana cara menggunakan fitur AI Chatbot?"
            answer="Anda bisa mengakses fitur chatbot di halaman utama dan mulai mengetik pertanyaan Anda."
          />
          <FAQItem
            question="Apakah data saya aman?"
            answer="Kami berkomitmen menjaga keamanan dan kerahasiaan data pengguna dengan standar enkripsi dan kebijakan privasi yang ketat."
          />
        </div>
      </div>

      {/* Timeline Section */}
      <div className="mt-24 max-w-4xl w-full px-4" data-aos="fade-up" data-aos-delay="400">
        <h2 className="text-white text-3xl font-bold text-center mb-8">Perjalanan Teknologi AI</h2>
        <ul className="space-y-6 border-l-2 border-purple-600 pl-6">
          <li>
            <div className="text-purple-400 font-semibold">2021</div>
            <p className="text-gray-300">Pengembangan awal menggunakan GPT-3 untuk chatbot internal.</p>
          </li>
          <li>
            <div className="text-purple-400 font-semibold">2022</div>
            <p className="text-gray-300">Implementasi summarizer untuk dokumen legal dan email.</p>
          </li>
          <li>
            <div className="text-purple-400 font-semibold">2023</div>
            <p className="text-gray-300">Integrasi GPT-4 untuk kemampuan generatif lebih canggih.</p>
          </li>
          <li>
            <div className="text-purple-400 font-semibold">2024+</div>
            <p className="text-gray-300">Pengembangan multimodal AI dan ekspansi layanan API.</p>
          </li>
        </ul>
      </div>

      {/* Testimonials */}
<div className="mt-24 w-full max-w-4xl px-4" data-aos="fade-up" data-aos-delay="500">
  <h2 className="text-white text-3xl font-bold text-center mb-8">Apa Kata Pengguna?</h2>
  <div className="grid md:grid-cols-2 gap-6">
    <div className="bg-[#1c1433] rounded-xl p-6 text-gray-300">
      <p>&quot;AI Chatbot-nya sangat membantu dalam customer support kami!&quot;</p>
      <span className="block mt-4 text-sm text-purple-400">– Sarah, Customer Support Lead</span>
    </div>
    <div className="bg-[#1c1433] rounded-xl p-6 text-gray-300">
      <p>&quot;Fitur summarizer-nya memotong waktu saya membaca dokumen jadi setengahnya.&quot;</p>
      <span className="block mt-4 text-sm text-purple-400">– Dimas, Legal Consultant</span>
    </div>
  </div>
</div>


      {/* Optional: Video Section */}
      
      <div className="mt-24 w-full max-w-3xl px-4" data-aos="fade-up" data-aos-delay="600">
        <h2 className="text-white text-3xl font-bold text-center mb-6">Lihat Demo Singkat</h2>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            className="rounded-lg w-full h-full"
            src="https://www.youtube.com/embed/your-video-id"
            title="Demo Cansixtpyy AI"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div> 
     

    </main>
  );
}
