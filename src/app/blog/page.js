"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Dummy blog post data
const blogPosts = [
  {
    id: 1,
    title: "Pengenalan Teknologi GPT",
    excerpt:
      "Pelajari bagaimana GPT bekerja dan bagaimana model ini digunakan untuk membangun aplikasi cerdas seperti chatbot dan summarizer.",
    date: "16 September 2025",
    author: "Tim Cansixtpyy",
  },
  {
    id: 2,
    title: "Manfaat AI dalam Dunia Bisnis",
    excerpt:
      "Bagaimana AI membantu otomatisasi proses bisnis, meningkatkan efisiensi kerja, dan memberikan wawasan data yang lebih dalam.",
    date: "10 September 2025",
    author: "AI Research Team",
  },
  {
    id: 3,
    title: "Cara Mengintegrasikan API OpenAI di Web",
    excerpt:
      "Panduan lengkap bagaimana menggunakan API OpenAI ke dalam project front-end dan back-end dengan aman dan optimal.",
    date: "5 September 2025",
    author: "Dev Team",
  },
];

export default function Blog() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <main className="relative flex flex-col items-center min-h-screen bg-gradient-to-br from-[#0a0618] to-[#18102e] overflow-hidden pb-20">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full bg-gradient-to-br from-[#2a1a5e]/30 to-[#1a1040]/0 blur-3xl opacity-50"
          data-aos="fade"
        ></div>
      </div>

      {/* Header */}
      <section className="mt-32 text-center px-4" data-aos="fade-up">
        <h1 className="text-white text-5xl md:text-6xl font-bold mb-4">Blog Cansixtpyy AI</h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Temukan artikel seputar teknologi AI, panduan teknis, dan insight dari tim kami.
        </p>
      </section>

      {/* Blog Posts */}
      <section
        className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 w-full max-w-6xl"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-[#18102e]/80 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <p className="text-sm text-purple-400">{post.date}</p>
            <h2 className="text-white text-2xl font-semibold mt-2">{post.title}</h2>
            <p className="text-gray-400 mt-3">{post.excerpt}</p>
            <p className="mt-4 text-sm text-gray-500">By {post.author}</p>
            <button className="mt-4 inline-block text-purple-500 hover:underline">
              Baca Selengkapnya →
            </button>
          </div>
        ))}
      </section>
    </main>
  );
}
