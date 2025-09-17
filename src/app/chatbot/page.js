"use client";

import { useState } from "react";
import Image from "next/image";

const GEMINI_API_KEY = "AIzaSyD1uGyM6rjCvwvXM6O1ndlQ8VFS1YmrRoE";
const GEMINI_API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";

async function fetchGeminiReply(text) {
  const res = await fetch(GEMINI_API_URL + `?key=${GEMINI_API_KEY}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text }] }],
    }),
  });
  const data = await res.json();
  // Ambil hasil dari response Gemini dan rapihkan jawaban
  let reply =
    data?.candidates?.[0]?.content?.parts?.[0]?.text ||
    "Maaf, AI tidak bisa menjawab saat ini.";
  // Hilangkan karakter ** dan rapihkan spasi
  reply = reply.replace(/\*\*/g, "").trim();
  return reply;
}

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // Helper to simulate GPT-like typing effect
  const typeAiReply = async (fullText) => {
    return new Promise((resolve) => {
      let words = fullText.split(" ");
      let current = "";
      let idx = 0;
      function typeNext() {
        if (idx < words.length) {
          current += (idx === 0 ? "" : " ") + words[idx];
          setMessages((prev) => {
            // Replace last AI message with current typing
            const updated = [...prev];
            updated[updated.length - 1] = { role: "ai", content: current };
            return updated;
          });
          idx++;
          setTimeout(typeNext, 40); // Adjust speed here (ms per word)
        } else {
          resolve();
        }
      }
      typeNext();
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);
    const aiReply = await fetchGeminiReply(input);
    // Add empty AI message first, then type it out
    setMessages((prev) => [...prev, { role: "ai", content: "" }]);
    await typeAiReply(aiReply);
    setLoading(false);
  };

  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#0a0618] to-[#18102e] overflow-hidden">
      {/* GPT-like chat section */}
      <div className="w-full max-w-2xl mx-auto mt-16 flex flex-col items-center mb-64">
        {messages.length === 0 ? (
          <>
            <div className="mb-6 text-gray-300 text-center text-2xl">
              Ada yang bisa saya bantu?
            </div>
            <form className="w-full flex" onSubmit={handleSubmit}>
              <input
                id="gpt-input"
                type="text"
                placeholder="Type your question..."
                className="flex-1 px-4 py-3 rounded-l-lg bg-[#18102e]/80 text-white border border-[#2a1a5e] focus:outline-none focus:ring-2 focus:ring-[#7c3aed] text-xl"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-r-lg bg-[#7c3aed] text-white font-semibold hover:bg-[#a78bfa] transition text-xl"
              >
                Send
              </button>
            </form>
          </>
        ) : (
          <div className="w-full border border-[#2a1a5e] rounded-xl p-6 bg-[#18102e]/60">
            <div className="flex flex-col gap-6 mb-8">
              {messages.map((msg, idx) =>
                msg.role === "user" ? (
                  <div className="flex justify-end" key={idx}>
                    <div className="bg-[#23232b] text-white px-5 py-3 rounded-2xl max-w-[60%] text-right shadow text-xl">
                      {msg.content}
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-start" key={idx}>
                    <div className="bg-[#18102e] text-white px-5 py-3 rounded-2xl max-w-[60%] shadow border border-[#2a1a5e] whitespace-pre-line text-xl">
                      {msg.content}
                      <div className="flex gap-2 mt-3 text-gray-400 text-xl">
                        <span>💬</span>
                        <span>👍</span>
                        <span>👎</span>
                        <span>🔄</span>
                        <span>⋯</span>
                      </div>
                    </div>
                  </div>
                )
              )}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-[#18102e] text-gray-400 px-5 py-3 rounded-2xl max-w-[60%] shadow border border-[#2a1a5e] text-xl">
                    AI sedang mengetik...
                  </div>
                </div>
              )}
            </div>
            {/* Input di bawah chat */}
            <form className="w-full flex" onSubmit={handleSubmit}>
              <input
                id="gpt-input"
                type="text"
                placeholder="Type your question..."
                className="flex-1 px-4 py-3 rounded-l-lg bg-[#18102e]/80 text-white border border-[#2a1a5e] focus:outline-none focus:ring-2 focus:ring-[#7c3aed] text-xl"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-r-lg bg-[#7c3aed] text-white font-semibold hover:bg-[#a78bfa] transition text-xl"
              >
                Send
              </button>
            </form>
          </div>
        )}
      </div>
    </main>
  );
}
