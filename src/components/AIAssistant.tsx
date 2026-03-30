import { GoogleGenAI } from "@google/genai";
import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Loader2, X } from "lucide-react";
import Markdown from "react-markdown";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: "user" | "model"; text: string }[]>([
    { role: "model", text: "Hello! I'm your ADBMS Lab Assistant. Ask me anything about MySQL or MongoDB!" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
    setIsLoading(true);

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [...messages, { role: "user", text: userMessage }].map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        })),
        config: {
          systemInstruction: "You are an expert ADBMS Lab Assistant. Help students with MySQL and MongoDB. Explain concepts with simple analogies. Correct their SQL/NoSQL logic if they provide code. Be concise and encouraging."
        }
      });

      setMessages((prev) => [...prev, { role: "model", text: response.text || "I'm sorry, I couldn't generate a response." }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages((prev) => [...prev, { role: "model", text: "Error connecting to AI. Please check your API key." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-black text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform z-50"
        id="ai-toggle"
      >
        <Bot size={28} />
      </button>

      {isOpen && (
        <div className="fixed inset-0 md:inset-auto md:bottom-24 md:right-6 md:w-96 md:h-[600px] bg-white md:rounded-2xl shadow-2xl flex flex-col z-50 border border-neutral-200 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="p-4 border-bottom border-neutral-100 flex items-center justify-between bg-neutral-50">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white">
                <Bot size={18} />
              </div>
              <span className="font-semibold text-sm">Exam Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-neutral-200 rounded-full transition-colors">
              <X size={20} />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-white">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${m.role === "user" ? "bg-black text-white" : "bg-neutral-100 text-neutral-800"}`}>
                  <Markdown>{m.text}</Markdown>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-neutral-100 p-3 rounded-2xl">
                  <Loader2 size={18} className="animate-spin text-neutral-400" />
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-neutral-100 bg-white">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask about MySQL/MongoDB..."
                className="w-full pl-4 pr-12 py-3 bg-neutral-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black/5 transition-all"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black text-white rounded-lg disabled:opacity-50 transition-opacity"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
