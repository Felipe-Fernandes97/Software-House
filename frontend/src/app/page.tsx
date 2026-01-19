"use client";

import { useState, useEffect } from "react";
import { Zap, Palette, Gem, ArrowRight, Clock } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(timer);
    };
  }, []);

  const gradientStyle = {
    background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.15), transparent 40%)`,
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 dark:from-slate-950 dark:via-indigo-950 dark:to-slate-900">
      <ThemeToggle />

      <div
        className="absolute inset-0 transition-all duration-300 ease-out pointer-events-none"
        style={gradientStyle}
      />

      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30 dark:opacity-30" />

      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-12">
        <div className="max-w-4xl w-full space-y-12 text-center">
          <div className="space-y-6 animate-[fadeIn_1s_ease-out]">
            <div className="inline-block">
              <h1 className="text-7xl md:text-9xl font-black tracking-tighter">
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent animate-[shimmer_3s_ease-in-out_infinite]">
                  Bem-vindo
                </span>
              </h1>
            </div>

            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-light tracking-wide">
              Sistema CRM moderno e completo para sua empresa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="group relative overflow-hidden rounded-2xl bg-white/80 dark:bg-gradient-to-br dark:from-slate-800/50 dark:to-slate-900/50 p-8 backdrop-blur-sm border border-slate-200 dark:border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/20 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Rápido</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Performance otimizada para a melhor experiência</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-white/80 dark:bg-gradient-to-br dark:from-slate-800/50 dark:to-slate-900/50 p-8 backdrop-blur-sm border border-slate-200 dark:border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform duration-300">
                  <Palette className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Moderno</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Design contemporâneo e inovador</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-white/80 dark:bg-gradient-to-br dark:from-slate-800/50 dark:to-slate-900/50 p-8 backdrop-blur-sm border border-slate-200 dark:border-slate-700/50 hover:border-pink-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/20 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-xl bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 group-hover:scale-110 transition-transform duration-300">
                  <Gem className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Único</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Interface exclusiva e diferenciada</p>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105">
              <span className="relative z-10 flex items-center gap-2">
                Começar Agora
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

            <button className="px-8 py-4 rounded-full font-semibold text-slate-700 dark:text-slate-300 bg-white dark:bg-transparent border-2 border-slate-300 dark:border-slate-700 hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/30">
              Saiba Mais
            </button>
          </div>

          <div className="mt-12 inline-flex items-center gap-2 text-slate-500 dark:text-slate-500 text-sm font-mono bg-white/50 dark:bg-slate-800/50 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700">
            <Clock className="w-4 h-4" />
            {time.toLocaleTimeString('pt-BR')}
          </div>
        </div>
      </main>
    </div>
  );
}
