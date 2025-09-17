"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  const [status, setStatus] = useState("");

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Mengirim...");
    setTimeout(() => {
      setStatus("Pesan berhasil dikirim!");
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0a0618] to-[#18102e] text-white py-20 px-6 md:px-12">
      <div className="max-w-3xl mx-auto" data-aos="fade-up">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Hubungi Kami
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-[#150c2b]/60 border border-gray-800 p-8 rounded-xl space-y-6"
        >
          <div>
            <label className="block text-sm mb-2 text-gray-300">Nama</label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 rounded-md bg-[#1f153c] text-white border border-gray-700 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm mb-2 text-gray-300">Email</label>
            <input
              type="email"
              required
              className="w-full px-4 py-2 rounded-md bg-[#1f153c] text-white border border-gray-700 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm mb-2 text-gray-300">Pesan</label>
            <textarea
              required
              rows={5}
              className="w-full px-4 py-2 rounded-md bg-[#1f153c] text-white border border-gray-700 focus:outline-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 transition-colors px-6 py-2 rounded-md font-semibold"
          >
            Kirim
          </button>
          {status && (
            <p className="text-sm text-green-400 mt-2 font-medium">{status}</p>
          )}
        </form>
      </div>
    </main>
  );
}
