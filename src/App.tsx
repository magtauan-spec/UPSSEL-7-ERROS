/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, AlertCircle, TrendingUp, ShieldCheck } from 'lucide-react';

export default function App() {
  const [timeLeft, setTimeLeft] = useState(13 * 60); // 13 minutes

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return {
      mins: String(mins).padStart(2, '0'),
      secs: String(secs).padStart(2, '0'),
    };
  };

  const { mins, secs } = formatTime(timeLeft);

  return (
    <div id="landing-page" className="min-h-screen font-sans bg-[#050D0A] text-white selection:bg-[#D4AF37] selection:text-[#0A261F]">
      
      {/* BLOCO 1 — TOPO */}
      <header className="bg-[#9E0A0A] py-8 px-4 text-center border-b border-[#D4AF37]/20 shadow-2xl relative overflow-hidden">
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')]" />
        
        <h1 className="text-xl md:text-3xl font-black uppercase tracking-tight mb-8 relative z-10 max-w-4xl mx-auto leading-tight">
          PARE! TEMOS UMA OFERTA EXCLUSIVA PARA VOCÊ.
        </h1>
        
        <div className="flex justify-center gap-4 max-w-xs mx-auto relative z-10">
          <div className="bg-white rounded-xl py-4 px-6 flex-1 text-[#0A261F] shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
            <div className="text-4xl md:text-5xl font-black leading-none font-serif">{mins}</div>
            <div className="text-[10px] font-bold uppercase mt-1 tracking-widest opacity-70">Minutos</div>
          </div>
          <div className="bg-white rounded-xl py-4 px-6 flex-1 text-[#0A261F] shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
            <div className="text-4xl md:text-5xl font-black leading-none font-serif">{secs}</div>
            <div className="text-[10px] font-bold uppercase mt-1 tracking-widest opacity-70">Segundos</div>
          </div>
        </div>
      </header>

      {/* BLOCO 2 — COMPRA QUASE FINALIZADA */}
      <section className="max-w-3xl mx-auto px-6 py-16 text-center flex flex-col items-center">
        <p className="text-lg md:text-xl font-medium leading-tight mb-2 opacity-90">
          Sua compra está quase concluída, mas antes queremos te oferecer uma
        </p>
        <p className="text-2xl md:text-3xl font-serif italic text-[#D4AF37] font-bold mb-12">
          oferta exclusiva...
        </p>

        {/* Progress Bar */}
        <div className="w-full max-w-md mb-12">
          <div className="flex justify-between items-end mb-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#D4AF37]">SUA COMPRA</span>
            <span className="text-[10px] font-black uppercase tracking-widest text-[#D4AF37]">99%</span>
          </div>
          <div className="h-4 w-full bg-white/5 rounded-full overflow-hidden border border-white/10">
            <motion.div 
              initial={{ width: "0%" }}
              animate={{ width: "99%" }}
              transition={{ duration: 2, ease: "circOut" }}
              className="h-full bg-gradient-to-r from-[#1A5C4F] to-[#2E8B57] rounded-full relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[shimmer_3s_infinite]" />
            </motion.div>
          </div>
        </div>

        {/* Triple Gold Arrows */}
        <div className="flex flex-col items-center gap-0 mb-16 opacity-80">
          {[0, 0.2, 0.4].map((delay, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay }}
              className={i > 0 ? "-mt-4" : ""}
            >
              <ChevronDown className="text-[#D4AF37] w-10 h-10 stroke-[2.5px]" />
            </motion.div>
          ))}
        </div>

        {/* BLOCO 3 — OFERTA */}
        <h2 className="text-xl md:text-2xl font-bold leading-relaxed mb-12 max-w-2xl">
          Agora, além dos +100 projetos de sítio, você também pode levar o{' '}
          <span className="text-[#D4AF37]">Pacote Antierro do Produtor</span> para evitar prejuízos e tomar decisões mais seguras no seu terreno.
        </h2>

        {/* Product Mockup */}
        <div className="relative w-full max-w-md mb-12 group">
          <div className="absolute -inset-4 bg-[#D4AF37]/10 blur-3xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
          <img 
            src="https://i.imgur.com/bLfXpEJ.jpeg" 
            alt="Pacote Antierro do Produtor Mockup"
            className="relative z-10 w-full h-auto rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 group-hover:scale-[1.02] transition-all duration-700"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Pricing */}
        <div className="flex flex-col items-center mb-10 gap-2">
          <div className="text-lg opacity-60 font-medium">
            De <span className="line-through decoration-[#D4AF37]">R$97,00</span> por apenas
          </div>
          <div className="text-[#D4AF37] text-5xl md:text-7xl font-black font-serif tracking-tighter drop-shadow-sm">
            R$37,00
          </div>
        </div>

        {/* CTA Button */}
        <motion.a 
          href="https://pay.cakto.com.br/aknbhhz_871328"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="w-full max-w-md bg-[#28a745] hover:bg-[#218838] text-white py-6 px-4 rounded-2xl text-lg md:text-xl font-black uppercase tracking-tight shadow-[0_15px_30px_rgba(40,167,69,0.3)] transition-all flex items-center justify-center gap-3 mb-6 cursor-pointer"
        >
          <TrendingUp size={24} />
          SIM, QUERO EVITAR ERROS E TER MAIS LUCRO
        </motion.a>

        {/* Link Rejection */}
        <button className="text-sm opacity-40 hover:opacity-100 underline decoration-white/30 underline-offset-4 transition-all mb-16">
          Não quero evitar erros e prefiro arriscar meu dinheiro
        </button>

        {/* Scarcity */}
        <div className="p-6 bg-white/5 rounded-2xl border border-white/10 max-w-lg mb-20">
           <p className="text-sm md:text-base italic opacity-80 leading-relaxed font-medium">
             "Essa é sua única chance de adicionar esse material com desconto. Essa oferta não será mostrada novamente."
           </p>
        </div>

        {/* BLOCO 4 — RODAPÉ */}
        <footer className="w-full border-t border-white/10 pt-16 flex flex-col items-center gap-6">
           <h3 className="text-2xl md:text-4xl font-black text-[#D4AF37] uppercase tracking-tighter font-serif italic text-center">
              OBRIGADO POR COMPRAR CONOSCO!
           </h3>
           <p className="text-lg md:text-xl font-medium opacity-80 max-w-sm mx-auto leading-snug">
              Você receberá seu acesso no e-mail em breve.
           </p>
           
           <div className="mt-12 flex items-center gap-3 opacity-30 grayscale pointer-events-none">
              <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center">
                <span className="text-[10px] font-bold">SP</span>
              </div>
              <span className="text-[10px] uppercase font-bold tracking-[0.3em]">Safe Purchase Guaranteed</span>
           </div>
        </footer>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}} />
    </div>
  );
}
