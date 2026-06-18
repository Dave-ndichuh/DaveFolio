"use client";

import { useState, useRef, useEffect } from "react";
import { useChat } from "ai/react";
import { MessageSquare, X, Send, Bot } from "lucide-react";

export default function NexusAssistantWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat({
    api: "/api/nexus-assistant",
    initialMessages: [
      { id: "1", role: "assistant", content: "Hello! I am the Nexus Group Technical Liaison. How can I help you today?" }
    ]
  });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, error]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Widget Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500 text-slate-900 shadow-lg shadow-cyan-500/30 transition-transform hover:scale-110 focus:outline-none"
        >
          <MessageSquare size={24} />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="flex h-[500px] w-[350px] flex-col overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl sm:w-[400px]">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-700 bg-slate-800 p-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400">
                <Bot size={18} />
              </div>
              <div>
                <h3 className="font-semibold text-slate-50">Nexus Assistant</h3>
                <p className="text-xs text-slate-400">Technical Liaison</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 transition-colors hover:text-slate-50 focus:outline-none"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-slate-700">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${
                  msg.role === "user" 
                    ? "bg-cyan-500 text-slate-900 rounded-br-none" 
                    : "bg-slate-800 text-slate-200 border border-slate-700 rounded-bl-none"
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            
            {error && (
              <div className="flex justify-start">
                <div className="max-w-[80%] rounded-2xl px-4 py-2 text-sm bg-red-900/50 text-red-200 border border-red-700 rounded-bl-none">
                  Connection error. Please try again later.
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSubmit} className="border-t border-slate-700 bg-slate-800 p-4">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder="Ask about Nexus ventures..."
                className="flex-1 rounded-full border border-slate-600 bg-slate-900 px-4 py-2 text-sm text-slate-200 placeholder-slate-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500 text-slate-900 transition-colors hover:bg-cyan-400 disabled:opacity-50"
              >
                <Send size={16} />
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
