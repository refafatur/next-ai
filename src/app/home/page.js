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
        {/* Tambahan kartu fitur AI */}
        <div className="bg-[#18102e]/80 rounded-xl p-6 shadow-lg flex flex-col items-center">
          <h2 className="mt-4 text-white text-xl font-semibold">
            Image Generator
          </h2>
          <p className="mt-2 text-gray-400 text-center">
            Create stunning images from text prompts using advanced AI models.
          </p>
        </div>
        <div className="bg-[#18102e]/80 rounded-xl p-6 shadow-lg flex flex-col items-center">
          <h2 className="mt-4 text-white text-xl font-semibold">
            Code Completion
          </h2>
          <p className="mt-2 text-gray-400 text-center">
            Boost your productivity with AI-powered code suggestions and
            autocompletion.
          </p>
        </div>
        <div className="bg-[#18102e]/80 rounded-xl p-6 shadow-lg flex flex-col items-center">
          <h2 className="mt-4 text-white text-xl font-semibold">
            Sentiment Analysis
          </h2>
          <p className="mt-2 text-gray-400 text-center">
            Analyze customer feedback and social media posts for sentiment
            insights.
          </p>
        </div>
        <div className="bg-[#18102e]/80 rounded-xl p-6 shadow-lg flex flex-col items-center">
          <h2 className="mt-4 text-white text-xl font-semibold">
            Language Translation
          </h2>
          <p className="mt-2 text-gray-400 text-center">
            Instantly translate text between multiple languages with AI.
          </p>
        </div>
        <div className="bg-[#18102e]/80 rounded-xl p-6 shadow-lg flex flex-col items-center">
          <h2 className="mt-4 text-white text-xl font-semibold">
            Speech to Text
          </h2>
          <p className="mt-2 text-gray-400 text-center">
            Convert spoken words into written text quickly and accurately.
          </p>
        </div>
        <div className="bg-[#18102e]/80 rounded-xl p-6 shadow-lg flex flex-col items-center">
          <h2 className="mt-4 text-white text-xl font-semibold">
            Text to Speech
          </h2>
          <p className="mt-2 text-gray-400 text-center">
            Generate natural-sounding speech from written text for
            accessibility.
          </p>
        </div>
        {/* Tambahan kartu fitur AI */}
        <div className="bg-[#18102e]/80 rounded-xl p-6 shadow-lg flex flex-col items-center">
          <h2 className="mt-4 text-white text-xl font-semibold">
            Document Q&A
          </h2>
          <p className="mt-2 text-gray-400 text-center">
            Ask questions about your documents and get instant AI-powered
            answers.
          </p>
        </div>
        <div className="bg-[#18102e]/80 rounded-xl p-6 shadow-lg flex flex-col items-center">
          <h2 className="mt-4 text-white text-xl font-semibold">
            Email Writer
          </h2>
          <p className="mt-2 text-gray-400 text-center">
            Compose professional emails in seconds with AI assistance.
          </p>
        </div>
        <div className="bg-[#18102e]/80 rounded-xl p-6 shadow-lg flex flex-col items-center">
          <h2 className="mt-4 text-white text-xl font-semibold">
            Resume Builder
          </h2>
          <p className="mt-2 text-gray-400 text-center">
            Generate and optimize your resume using AI suggestions.
          </p>
        </div>
        <div className="bg-[#18102e]/80 rounded-xl p-6 shadow-lg flex flex-col items-center">
          <h2 className="mt-4 text-white text-xl font-semibold">
            Plagiarism Checker
          </h2>
          <p className="mt-2 text-gray-400 text-center">
            Detect duplicate content and ensure originality with AI-powered
            checks.
          </p>
        </div>
        <div className="bg-[#18102e]/80 rounded-xl p-6 shadow-lg flex flex-col items-center">
          <h2 className="mt-4 text-white text-xl font-semibold">
            Keyword Extractor
          </h2>
          <p className="mt-2 text-gray-400 text-center">
            Extract important keywords from any text for SEO and analysis.
          </p>
        </div>
        <div className="bg-[#18102e]/80 rounded-xl p-6 shadow-lg flex flex-col items-center">
          <h2 className="mt-4 text-white text-xl font-semibold">Paraphraser</h2>
          <p className="mt-2 text-gray-400 text-center">
            Instantly rewrite sentences or paragraphs with AI to avoid
            duplication.
          </p>
        </div>
        <div className="bg-[#18102e]/80 rounded-xl p-6 shadow-lg flex flex-col items-center">
          <h2 className="mt-4 text-white text-xl font-semibold">
            Grammar Checker
          </h2>
          <p className="mt-2 text-gray-400 text-center">
            Correct grammar and spelling mistakes in your writing automatically.
          </p>
        </div>
        <div className="bg-[#18102e]/80 rounded-xl p-6 shadow-lg flex flex-col items-center">
          <h2 className="mt-4 text-white text-xl font-semibold">
            Headline Generator
          </h2>
          <p className="mt-2 text-gray-400 text-center">
            Create catchy headlines for your articles and marketing campaigns.
          </p>
        </div>
        <div className="bg-[#18102e]/80 rounded-xl p-6 shadow-lg flex flex-col items-center">
          <h2 className="mt-4 text-white text-xl font-semibold">
            Product Description Writer
          </h2>
          <p className="mt-2 text-gray-400 text-center">
            Generate compelling product descriptions for your e-commerce store.
          </p>
        </div>
      </div>
      {/* Section: Why Choose Us */}
      <section
        className="w-full max-w-5xl mt-24 px-4"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#18102e]/80 rounded-xl p-6 shadow-lg flex flex-col items-center">
            <span className="text-[#a78bfa] text-4xl mb-2">⚡</span>
            <h3 className="text-white text-lg font-semibold mb-1">
              Fast & Reliable
            </h3>
            <p className="text-gray-400 text-center">
              Lightning-fast AI responses and 99.9% uptime for your business
              needs.
            </p>
          </div>
          <div className="bg-[#18102e]/80 rounded-xl p-6 shadow-lg flex flex-col items-center">
            <span className="text-[#a78bfa] text-4xl mb-2">🔒</span>
            <h3 className="text-white text-lg font-semibold mb-1">Secure</h3>
            <p className="text-gray-400 text-center">
              Your data is encrypted and privacy is our top priority.
            </p>
          </div>
          <div className="bg-[#18102e]/80 rounded-xl p-6 shadow-lg flex flex-col items-center">
            <span className="text-[#a78bfa] text-4xl mb-2">🛠️</span>
            <h3 className="text-white text-lg font-semibold mb-1">
              Easy Integration
            </h3>
            <p className="text-gray-400 text-center">
              Integrate with your apps and workflow in minutes, not hours.
            </p>
          </div>
        </div>
      </section>
      {/* Section: Testimonials */}
      <section
        className="w-full max-w-4xl mt-24 px-4"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#18102e]/80 rounded-xl p-6 shadow-lg">
            <p className="text-gray-300 italic mb-2">
              "The AI tools here helped us launch our MVP in record time. Highly
              recommended!"
            </p>
            <span className="text-[#a78bfa] font-semibold">
              — Sarah, Startup Founder
            </span>
          </div>
          <div className="bg-[#18102e]/80 rounded-xl p-6 shadow-lg">
            <p className="text-gray-300 italic mb-2">
              "Integration was seamless and the support team is fantastic."
            </p>
            <span className="text-[#a78bfa] font-semibold">
              — Michael, Product Manager
            </span>
          </div>
        </div>
      </section>
      {/* Section: Call to Action */}
      <section
        className="w-full max-w-3xl mt-24 mb-16 px-4 flex flex-col items-center"
        data-aos="zoom-in"
        data-aos-delay="600"
      >
        <h2 className="text-2xl font-bold text-white mb-4 text-center">
          Ready to supercharge your workflow?
        </h2>
        <p className="text-gray-300 text-center mb-6">
          Start your free trial today and experience the power of AI for your
          business.
        </p>
        <a
          href="#"
          className="px-8 py-3 rounded-lg bg-[#7c3aed] text-white text-lg font-semibold shadow-lg hover:bg-[#a78bfa] transition"
        >
          Get Started Now
        </a>
      </section>
      {/* Section: Latest AI News */}
      <section
        className="w-full max-w-5xl mt-24 px-4"
        data-aos="fade-up"
        data-aos-delay="700"
      >
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          Latest AI News
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#18102e]/80 rounded-xl p-6 shadow-lg">
            <h3 className="text-white text-lg font-semibold mb-2">
              OpenAI Releases New GPT-5 Model
            </h3>
            <p className="text-gray-400 text-sm">
              The latest GPT-5 model brings improved reasoning and faster
              response times.{" "}
              <a
                href="#"
                className="text-[#a78bfa] underline"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                Read more
              </a>
            </p>
          </div>
          <div className="bg-[#18102e]/80 rounded-xl p-6 shadow-lg">
            <h3 className="text-white text-lg font-semibold mb-2">
              AI in Healthcare: Transforming Patient Care
            </h3>
            <p className="text-gray-400 text-sm">
              Hospitals are leveraging AI for diagnostics and personalized
              treatment plans.{" "}
              <a
                href="#"
                className="text-[#a78bfa] underline"
                data-aos="fade-up"
                data-aos-delay="900"
              >
                Learn more
              </a>
            </p>
          </div>
          <div className="bg-[#18102e]/80 rounded-xl p-6 shadow-lg">
            <h3 className="text-white text-lg font-semibold mb-2">
              New AI Regulations Announced
            </h3>
            <p className="text-gray-400 text-sm">
              Governments worldwide are introducing new policies for ethical AI
              use.{" "}
              <a
                href="#"
                className="text-[#a78bfa] underline"
                data-aos="fade-up"
                data-aos-delay="1000"
              >
                Details
              </a>
            </p>
          </div>
        </div>
      </section>
      {/* Section: FAQ */}
      <section
        className="w-full max-w-4xl mt-24 mb-24 px-4"
        data-aos="fade-up"
        data-aos-delay="800"
      >
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          <div className="bg-[#18102e]/80 rounded-xl p-5 shadow-lg">
            <h3 className="text-white font-semibold mb-1">
              How do I get started?
            </h3>
            <p className="text-gray-400 text-sm">
              Simply sign up for a free trial and explore our AI-powered
              features instantly.
            </p>
          </div>
          <div className="bg-[#18102e]/80 rounded-xl p-5 shadow-lg">
            <h3 className="text-white font-semibold mb-1">Is my data safe?</h3>
            <p className="text-gray-400 text-sm">
              Yes, we use industry-standard encryption and never share your data
              with third parties.
            </p>
          </div>
          <div className="bg-[#18102e]/80 rounded-xl p-5 shadow-lg">
            <h3 className="text-white font-semibold mb-1">
              Can I cancel anytime?
            </h3>
            <p className="text-gray-400 text-sm">
              Absolutely! You can cancel your subscription at any time from your
              dashboard.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
