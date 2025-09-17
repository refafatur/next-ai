"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const docsSections = [
  {
    id: "intro",
    title: "Pendahuluan",
    content: `Cansixtpyy AI menyediakan layanan AI seperti chatbot, text summarizer, dan content generator. Halaman ini menjelaskan cara kerja sistem dan bagaimana Anda dapat mengintegrasikannya ke dalam platform Anda.`,
  },
  {
    id: "getting-started",
    title: "Memulai",
    content: `Untuk menggunakan layanan kami, Anda harus mendaftar dan mendapatkan API Key.\n\nLangkah-langkah:\n1. Buat akun\n2. Login ke dashboard\n3. Ambil API key dari menu "API Access"\n4. Gunakan API key tersebut untuk mengakses endpoint AI`,
  },
  {
    id: "authentication",
    title: "Autentikasi",
    content: `Semua permintaan ke API harus disertai dengan header Authorization:\n\n\`\`\`bash\nAuthorization: Bearer YOUR_API_KEY\n\`\`\``,
  },
  {
    id: "api-chatbot",
    title: "Endpoint Chatbot",
    content: `Gunakan endpoint berikut untuk melakukan percakapan dengan chatbot:\n\n\`\`\`http\nPOST /api/chat\n\`\`\`\n\nBody JSON:\n\`\`\`json\n{\n  "message": "Halo, siapa kamu?"\n}\n\`\`\`\n\nContoh respon:\n\`\`\`json\n{\n  "response": "Halo! Saya adalah asisten AI dari Cansixtpyy."\n}\n\`\`\``,
  },
  {
    id: "api-summarizer",
    title: "Endpoint Summarizer",
    content: `Endpoint untuk merangkum teks:\n\n\`\`\`http\nPOST /api/summarize\n\`\`\`\n\nBody:\n\`\`\`json\n{\n  "text": "Teks panjang yang ingin diringkas..."\n}\n\`\`\``,
  },
  {
    id: "rate-limiting",
    title: "Batas Penggunaan (Rate Limits)",
    content: `Paket gratis memiliki batas 100 permintaan per hari. Paket berbayar mendapatkan limit lebih tinggi.\n\nJika Anda melewati batas:\n\`\`\`json\n{\n  "error": "Rate limit exceeded"\n}\n\`\`\``,
  },
  {
    id: "error-handling",
    title: "Penanganan Error",
    content: `Respon error akan diberikan dalam format JSON standar:\n\n\`\`\`json\n{\n  "error": "Deskripsi error"\n}\n\`\`\`\n\nKode status umum:\n- 401 Unauthorized\n- 429 Rate Limit\n- 500 Internal Server Error`,
  },
];

export default function Docs() {
  const [activeId, setActiveId] = useState("intro");

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const formatContent = (text) => {
    return text.split("\n").map((line, i) =>
      line.startsWith("```") ? (
        <pre
          key={i}
          className="bg-[#1f153c] text-sm p-3 rounded-md text-gray-200 overflow-x-auto my-4"
        >
          <code>{line.replace(/```(bash|json|http)?/, "").trim()}</code>
        </pre>
      ) : (
        <p key={i} className="text-gray-300 leading-relaxed mb-2">
          {line}
        </p>
      )
    );
  };

  return (
    <main className="min-h-screen flex bg-gradient-to-br from-[#0a0618] to-[#18102e] text-white">
      {/* Sidebar */}
      <aside className="w-64 hidden md:block border-r border-gray-800 bg-[#150c2b]/60 p-6 sticky top-0 h-screen overflow-y-auto">
        <h2 className="text-2xl font-bold mb-6">📘 Dokumentasi</h2>
        <ul className="space-y-4">
          {docsSections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => setActiveId(section.id)}
                className={`text-left w-full ${
                  activeId === section.id
                    ? "text-purple-400 font-semibold"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {section.title}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main content */}
      <section className="flex-1 px-6 md:px-12 py-20" data-aos="fade-up">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Dokumentasi Cansixtpyy AI
          </h1>

          {/* Section Content */}
          {docsSections.map((section) => (
            <div
              key={section.id}
              id={section.id}
              className={`mb-16 ${
                activeId === section.id ? "block" : "hidden"
              }`}
            >
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">
                {section.title}
              </h2>
              {formatContent(section.content)}
            </div>
          ))}

          {/* Navigation */}
          <div className="mt-12 flex justify-between text-sm text-purple-400">
            <button
              disabled={activeId === docsSections[0].id}
              className={`hover:underline ${
                activeId === docsSections[0].id ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={() => {
                const currentIndex = docsSections.findIndex((s) => s.id === activeId);
                if (currentIndex > 0) {
                  setActiveId(docsSections[currentIndex - 1].id);
                }
              }}
            >
              ← Sebelumnya
            </button>
            <button
              disabled={activeId === docsSections[docsSections.length - 1].id}
              className={`hover:underline ${
                activeId === docsSections[docsSections.length - 1].id
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              onClick={() => {
                const currentIndex = docsSections.findIndex((s) => s.id === activeId);
                if (currentIndex < docsSections.length - 1) {
                  setActiveId(docsSections[currentIndex + 1].id);
                }
              }}
            >
              Selanjutnya →
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
