
import React, { useState, useRef, useEffect } from 'react';
import { getAIResponse } from '../services/gemini';
import { ChatMessage, MessageRole } from '../types';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: MessageRole.BOT, text: "Welcome to Taj Garden Lawns! I'm your AI event planner. How can I help you plan your special occasion today?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = { role: MessageRole.USER, text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const botResponse = await getAIResponse(input);
    setMessages(prev => [...prev, { role: MessageRole.BOT, text: botResponse || "I didn't quite catch that. Could you rephrase?" }]);
    setIsLoading(false);
  };

  return (
    <>
      {/* Trigger Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[60] w-14 h-14 bg-gold rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      >
        {isOpen ? (
          <span className="text-zinc-950 text-2xl">✕</span>
        ) : (
          <div className="relative">
            <span className="text-zinc-950 text-2xl">✨</span>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-zinc-950"></div>
          </div>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-[60] w-[350px] max-h-[500px] bg-zinc-900 border border-gold/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="p-4 bg-gold text-zinc-950 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">✨</div>
            <div>
              <h4 className="font-bold text-sm">Taj AI Planner</h4>
              <p className="text-[10px] opacity-70">Always Online</p>
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 max-h-[350px]">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === MessageRole.USER ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-xs leading-relaxed ${
                  m.role === MessageRole.USER 
                    ? 'bg-gold text-zinc-950 rounded-br-none' 
                    : 'bg-zinc-800 text-zinc-200 rounded-bl-none border border-white/5'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-zinc-800 p-3 rounded-2xl rounded-bl-none border border-white/5 flex gap-1">
                  <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce delay-75"></div>
                  <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-3 border-t border-white/10 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about capacity, dates..." 
              className="flex-1 bg-zinc-800 border border-white/10 rounded-full px-4 py-2 text-xs focus:outline-none focus:border-gold"
            />
            <button 
              onClick={handleSend}
              className="w-8 h-8 bg-gold rounded-full flex items-center justify-center text-zinc-950 disabled:opacity-50"
              disabled={isLoading}
            >
              ➔
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AIAssistant;
