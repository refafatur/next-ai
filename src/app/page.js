"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#0a0618] to-[#18102e] overflow-hidden">
      {/* Background gradient circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full bg-gradient-to-br from-[#2a1a5e]/30 to-[#1a1040]/0 blur-3xl opacity-60"
          data-aos="fade"
        ></div>
      </div>
      {/* Launch badge */}
      <div className="mt-24 mb-6" data-aos="fade-down">
        <span className="px-4 py-2 rounded-full bg-[#2a1a5e]/40 text-white text-sm font-medium shadow">
          🚀 Launch Your AI Startup with
        </span>
      </div>
      {/* Title */}
      <h1
        className="text-white text-5xl md:text-6xl font-bold text-center leading-tight"
        data-aos="fade-up"
      >
        OpenAI + Next.js SaaS
        <br />
        Boilerplate and Starter Kit
      </h1>
      {/* Subtitle */}
      <p
        className="mt-8 text-gray-300 text-lg text-center max-w-2xl"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Ideal for developers looking to build SaaS applications using OpenAI and
        Next.js, this starter kit comes with pre-configured and pre-built
        examples, making it easier to quickly kickstart your AI startup.
      </p>
      {/* Button */}
      <div className="mt-10" data-aos="zoom-in" data-aos-delay="200">
        <button className="px-8 py-3 rounded-lg bg-[#7c3aed] text-white text-lg font-semibold shadow-lg hover:bg-[#a78bfa] transition">
          Try AI Examples
        </button>
      </div>

      {/* Example cards section */}
      <div
        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl px-4"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div className="bg-[#18102e]/80 rounded-xl p-6 shadow-lg flex flex-col items-center">
          <h2 className="mt-4 text-white text-xl font-semibold">AI Chatbot</h2>
          <p className="mt-2 text-gray-400 text-center">
            Conversational AI powered by OpenAI GPT for customer support and
            automation.
          </p>
        </div>
        <div className="bg-[#18102e]/80 rounded-xl p-6 shadow-lg flex flex-col items-center">
          <h2 className="mt-4 text-white text-xl font-semibold">
            Text Summarizer
          </h2>
          <p className="mt-2 text-gray-400 text-center">
            Instantly summarize articles, emails, or documents using AI.
          </p>
        </div>
        <div className="bg-[#18102e]/80 rounded-xl p-6 shadow-lg flex flex-col items-center">
          <h2 className="mt-4 text-white text-xl font-semibold">
            Content Generator
          </h2>
          <p className="mt-2 text-gray-400 text-center">
            Generate blog posts, product descriptions, and more with AI
            assistance.
          </p>
        </div>
      </div>

    </main>
  );
}
