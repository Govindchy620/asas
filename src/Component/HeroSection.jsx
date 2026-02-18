import React, { useState } from 'react';
import { 
  ArrowRight, 
  ChevronDown, 
  Zap, 
  Shield, 
  Globe, 
  Activity, 
  Smartphone, 
  Monitor, 
  Laptop, 
  BarChart3, 
  TrendingUp, 
  Users, 
  CheckCircle2, 
  Layout, 
  Download, 
  HelpCircle, 
  Lock, 
  MousePointer2, 
  Layers, 
  Sparkles,
  Search,
  Play,
  Cpu,
  BadgePercent,
  Wallet,
  Coins,
  Target,
  Network,
  Rocket,
  UserCheck
} from 'lucide-react';

export default function Home() {
  // Unified professional background color
  const bgMain = "bg-[#050a18]";

  return (
    <div className={`${bgMain} text-white font-sans selection:bg-teal-500/30 overflow-x-hidden`}>
      
      {/* --- HERO: THE ZENITH GATEWAY --- */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-14 pb-32 overflow-hidden">
        {/* Dynamic Tech Atmosphere */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_40%,#14b8a608,transparent_60%)]"></div>
          <div className="absolute h-full w-full opacity-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          
          <img 
            src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-10"
            alt="Elite Trading Hub"
          />
          
          {/* Animated Accents */}
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-teal-500/10 blur-[120px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full animate-pulse delay-700"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6 uppercase">
            Welcome to <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-white to-blue-400">FXCElite</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed font-medium mb-8 uppercase tracking-widest font-mono">
            Your All-in-One Online Trading Platform
          </p>

          <div className="max-w-4xl mx-auto text-sm md:text-base text-white/80 leading-relaxed font-normal mb-12 px-6 py-8 border border-white/20 bg-white/[0.05] backdrop-blur-3xl rounded-3xl relative shadow-2xl">
             <div className="absolute top-0 left-0 w-12 h-1 bg-teal-500 rounded-tl-3xl"></div>
             <div className="absolute bottom-0 right-0 w-12 h-1 bg-teal-500 rounded-br-3xl"></div>
             Welcome to the future of your financial prosperity. FXCElite is a global premier trading platform that offers both retail and institutional investors direct access to the world's most liquid markets. Our trading platform is set up to give you the same level of performance as the top tier institutions wherever you choose to place your trades: forex, online CFDs on indices, metals, or cryptocurrencies. In a market where every second matters, we deliver the best online trading experience by combining the fastest order execution times with deep liquidity.
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="relative group">
              <div className="absolute -inset-1 bg-teal-500 rounded-2xl blur opacity-30 group-hover:opacity-80 transition duration-1000"></div>
              <button className="relative px-10 py-4 bg-white text-black font-bold text-base md:text-lg transition-all hover:bg-teal-500 hover:text-white active:scale-95 shadow-xl uppercase tracking-tight rounded-xl flex items-center gap-2">
                Open Your Live Account <ArrowRight size={20} className="ml-2" />
              </button>
            </div>
            <p className="text-teal-400 text-sm font-bold uppercase tracking-[0.2em] animate-pulse font-mono">
              Market opportunities wait for no one. Open your account today!
            </p>
          </div>
        </div>
      </section>

      {/* --- SCREENSHOT SECTION 1: TRADE COPIER --- */}
      <section className={`py-24 relative ${bgMain} border-y border-white/10 overflow-hidden`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-8">
               <div className="space-y-4">
                  <span className="text-blue-400 font-bold uppercase tracking-[0.2em] text-xs font-mono">Trade Copier</span>
                  <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight uppercase">Trade with MT5, <br/> Execute with <br/> Match-Trader</h2>
               </div>
               <p className="text-base text-white/80 leading-relaxed font-normal border-l-4 border-teal-500 pl-6 bg-teal-500/10 py-4 rounded-r-xl">
                  Easily copy your trades from MT5, the industry's most popular platform, to Match-Trader. Instant, accurate, and reliable—built for traders who demand the best.
               </p>
               <div className="flex flex-wrap gap-4 pt-2 items-center">
                  <button className="px-8 py-3 bg-teal-500 text-white font-bold text-sm hover:bg-white hover:text-black transition-all shadow-lg rounded-xl">
                    Download File
                  </button>
                  <button className="text-teal-400 font-bold text-sm hover:text-white transition-colors flex items-center gap-2 group">
                    Check Full Guide <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
               </div>
            </div>

            <div className="lg:col-span-6 relative">
               <div className="absolute inset-0 bg-blue-600/20 blur-[80px] rounded-full"></div>
               <div className="relative bg-gradient-to-br from-blue-900/40 to-[#040612] border border-white/20 rounded-3xl p-8 overflow-hidden shadow-2xl group">
                 <img 
                   src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1200" 
                   className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 group-hover:scale-105 transition-all duration-1000"
                   alt="MT5 Match Trader"
                 />
                 <div className="relative z-10 flex flex-col items-center justify-center min-h-[300px]">
                    <div className="text-center space-y-3 mb-8">
                       <h3 className="text-3xl font-bold text-white">MetaTrader 5</h3>
                       <div className="flex items-center justify-center gap-4">
                          <div className="h-px w-8 bg-white/40"></div>
                          <span className="text-xl text-white/60 font-light">×</span>
                          <span className="text-2xl text-white font-bold tracking-tight">Match-Trader</span>
                          <div className="h-px w-8 bg-white/40"></div>
                       </div>
                    </div>
                    <button className="w-16 h-16 rounded-full bg-blue-500/80 border border-white/30 backdrop-blur-md flex items-center justify-center text-white hover:bg-blue-400 transition-all hover:scale-110 shadow-lg">
                       <Play size={24} fill="white" />
                    </button>
                    <p className="mt-10 text-white/60 font-mono text-[10px] uppercase tracking-widest bg-black/40 px-3 py-1 rounded-full">Powered by Match-Trade</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SCREENSHOT SECTION 2: MARKETS GRID --- */}
      <section className={`py-24 relative overflow-hidden ${bgMain}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white uppercase leading-tight tracking-tight">Access the World’s <br/> Leading Markets</h2>
            <p className="text-white/80 text-base md:text-lg font-normal max-w-2xl mx-auto">
              Trade forex, commodities, indices, and crypto — the world’s most liquid assets, all from one powerful platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { l: "Forex", d: "Trade top global forex instruments", icon: <Globe />, bg: "from-blue-600/10" },
              { l: "Commodities", d: "Trade top global commodities", icon: <Layers />, bg: "from-teal-600/10" },
              { l: "Indices", d: "Trade top global indices", icon: <BarChart3 />, bg: "from-purple-600/10" },
              { l: "Crypto", d: "Trade top global crypto instruments", icon: <Coins />, bg: "from-pink-600/10" }
            ].map((item, i) => (
              <div key={i} className={`group relative p-8 bg-white/[0.02] border border-white/10 hover:border-white/30 transition-all duration-500 text-center rounded-2xl overflow-hidden shadow-lg`}>
                 <div className={`absolute inset-0 bg-gradient-to-b ${item.bg} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                 <div className="relative z-10 space-y-6">
                    <div className="w-20 h-20 mx-auto bg-[#0b0e2a] border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors rounded-xl shadow-inner relative overflow-hidden">
                        <div className="p-4 bg-white/5 rounded-full blur-[20px] absolute inset-0"></div>
                        {React.cloneElement(item.icon, { size: 32, className: "text-white relative z-10 group-hover:scale-110 transition-transform" })}
                    </div>
                    <div className="space-y-2">
                       <h4 className="text-xl font-bold text-white uppercase tracking-tight">{item.l}</h4>
                       <p className="text-white/70 text-sm font-medium">{item.d}</p>
                    </div>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION: UNIFIED ACCOUNT --- */}
      <section className={`py-24 border-y border-white/10 bg-white/[0.02] ${bgMain}`}>
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-10">
                 <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight uppercase">Trade Global Markets <br/> from One <span className="text-teal-400">Unified Account</span></h2>
                 <p className="text-base text-white/80 leading-relaxed font-normal">
                    Why manage multiple logins when you can use one single all-in-one online trading platform? FXCElite offers you the opportunity to explore the global financial markets with ease.
                 </p>
                 <div className="grid gap-5">
                    {[
                      { t: "Online Forex Trading", d: "Get access to 70+ currency pairs, starting at 0.0 pip spread.", icon: <Activity /> },
                      { t: "CFD Trading Platform", d: "Trade global indices, commodities like Oil and Gold, and Crypto.", icon: <Layers /> },
                      { t: "Advanced Trading Tools", d: "Leverage sophisticated platforms including MetaTrader 5.", icon: <Zap /> },
                      { t: "Flexible Leverage", d: "Increase your potential using competitive leverage up to 1:1000.", icon: <TrendingUp /> }
                    ].map((feat, i) => (
                      <div key={i} className="flex gap-5 group items-start p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                         <div className="shrink-0 w-12 h-12 bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-400 rounded-lg group-hover:scale-110 transition-transform">
                            {React.cloneElement(feat.icon, { size: 20 })}
                         </div>
                         <div className="space-y-1">
                            <h4 className="text-lg font-bold text-white uppercase tracking-tight">{feat.t}</h4>
                            <p className="text-white/70 text-sm font-normal">{feat.d}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="relative group">
                 <div className="absolute -inset-4 bg-teal-500/20 blur-[100px] rounded-full"></div>
                 <div className="relative border border-white/20 p-1 bg-[#0B0E2A] rounded-3xl overflow-hidden shadow-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=1200" 
                      className="w-full h-[450px] object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 rounded-2xl"
                      alt="Market Pulse"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none"></div>
                    <div className="absolute bottom-6 left-6 right-6 p-6 bg-black/90 backdrop-blur-xl border border-white/20 border-t-2 border-t-teal-500 shadow-xl rounded-xl">
                       <p className="text-white text-xl font-bold uppercase leading-none mb-2">Unified liquidity</p>
                       <p className="text-white/80 text-sm font-normal">Access deep order books across all asset classes with a single biometric login.</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* --- SECTION: BEGINNERS vs PROS --- */}
      <section className={`py-24 relative ${bgMain} overflow-hidden`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tight leading-tight">The Best Online Trading <br/> Platform for All Levels</h2>
            <p className="text-white/80 text-base max-w-2xl mx-auto font-normal leading-relaxed">
              We believe professional-grade tools should be accessible. Our platform offers a scalable environment tailored to your exact skill level.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                title: "For Beginners", 
                items: ["Risk-Free Demo Account", "Simplified WebTrader", "Helpdesk tutorials"], 
                icon: <Target />,
                cta: "Try Risk-Free Demo",
                accent: "text-teal-400",
                border: "border-teal-500/50"
              },
              { 
                title: "For Professionals", 
                items: ["MT5 ECN infrastructure", "Trading algorithms (EAs)", "Market depth (DOM)"], 
                icon: <Zap />,
                cta: "Go Institutional",
                accent: "text-blue-400",
                border: "border-blue-500/50"
              },
              { 
                title: "For Partners", 
                items: ["Elite IB Dashboard", "Affiliate programs", "Global multi-tier network"], 
                icon: <Network />,
                cta: "Become a Partner",
                accent: "text-purple-400",
                border: "border-purple-500/50"
              }
            ].map((card, i) => (
              <div key={i} className={`group p-8 bg-[#02040a] hover:bg-white/[0.05] transition-all duration-300 flex flex-col justify-between rounded-2xl border border-white/10 hover:${card.border} shadow-lg`}>
                <div className="space-y-8">
                   <div className="w-12 h-12 bg-white/10 border border-white/20 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform rounded-xl">
                     {React.cloneElement(card.icon, { size: 24 })}
                   </div>
                   <h3 className={`text-2xl font-bold uppercase ${card.accent}`}>{card.title}</h3>
                   <ul className="space-y-4">
                      {card.items.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-white/80 text-sm font-medium">
                           <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
                           {item}
                        </li>
                      ))}
                   </ul>
                </div>
                <button className="mt-10 w-full py-3 bg-white/10 border border-white/20 font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all rounded-lg">
                   {card.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION: TRADE ANYWHERE --- */}
      <section className={`py-24 relative bg-white/[0.02] border-y border-white/10 ${bgMain}`}>
        <div className="max-w-7xl mx-auto px-6">
           <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2 relative w-full max-w-sm mx-auto">
                 <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full"></div>
                 <div className="relative bg-[#0B0E2A] rounded-[3rem] border-[8px] border-[#1e293b] w-full aspect-[9/16] overflow-hidden shadow-2xl group">
                    <img 
                      src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800" 
                      className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
                      alt="Mobile Interface"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-black/90 flex flex-col items-center justify-end p-6 pointer-events-none">
                       <Smartphone size={32} className="text-blue-400 mb-3 animate-bounce" />
                       <span className="text-white font-bold uppercase text-[10px] tracking-widest bg-white/10 px-3 py-1 rounded-full backdrop-blur-md border border-white/20">Mobile Native</span>
                    </div>
                 </div>
              </div>

              <div className="lg:w-1/2 space-y-10 text-center lg:text-left">
                 <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight uppercase underline decoration-teal-500 decoration-4 underline-offset-[8px]">Trade Anywhere: <br/> Web, Mobile, Desktop</h2>
                 <p className="text-base text-white/80 leading-relaxed font-normal">
                    In 2026, your trading desk will be wherever you are. With FXCElite, trade anywhere, anytime, thanks to web and smartphone trading solutions that sync instantly across all of your devices.
                 </p>
                 <div className="grid gap-6 text-left">
                    {[
                      { t: "Desktop Power", d: "The complete platform experience for Windows and Mac.", icon: <Laptop /> },
                      { t: "Web Convenience", d: "Access without downloading software via any browser.", icon: <Monitor /> },
                      { t: "Mobile Agility", d: "Manage your portfolio, view charts, and get notifications on iOS/Android.", icon: <Smartphone /> }
                    ].map((plat, i) => (
                      <div key={i} className="group flex gap-5 items-center p-5 bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all rounded-2xl shadow-md">
                         <div className="shrink-0 w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                            {React.cloneElement(plat.icon, { size: 20 })}
                         </div>
                         <div className="space-y-1">
                            <h4 className="text-lg font-bold text-white uppercase tracking-tight">{plat.t}</h4>
                            <p className="text-white/70 text-sm font-normal leading-snug">{plat.d}</p>
                         </div>
                      </div>
                    ))}
                 </div>
                 <div className="pt-6 flex flex-col items-center lg:items-start gap-4">
                    <button className="px-10 py-4 rounded-xl bg-teal-500 text-white font-bold text-base hover:bg-teal-400 transition-all shadow-lg uppercase tracking-tight">
                      Start Trading Online
                    </button>
                    <p className="text-teal-400 font-bold uppercase tracking-[0.2em] text-[10px]">Experience the Elite difference. join a global community!</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* --- SECTION: WHY CHOOSE --- */}
      <section className={`py-24 relative ${bgMain}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white uppercase leading-tight">Why Choose FXCElite as <br/> Your Trading Platform?</h2>
            <p className="text-teal-400 text-sm font-bold uppercase tracking-[0.2em] font-mono">[ Zenith Benchmark Layer ]</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Institutional Execution", desc: "100% of trades are made in less than a second. Average speed is 0.002s.", icon: <Zap /> },
              { title: "Transparent Pricing", desc: "No hidden fees – only Raw Spreads and clear Trading Pricing.", icon: <Search /> },
              { title: "Elite Funding", desc: "Quick and safe options for Deposits and Withdrawals. Crypto supported.", icon: <Wallet /> },
              { title: "24/5 Expert Support", desc: "Our Helpdesk is operational while the global markets are open.", icon: <Users /> },
              { title: "Growth Incentives", desc: "Make the most of our 10X Quest & Growth Plan to scale your capital.", icon: <Rocket /> },
              { title: "Sovereign Trust", desc: "Advanced security made for the digital economy of 2026.", icon: <Shield /> },
            ].map((item, i) => (
              <div key={i} className="group p-8 bg-white/[0.05] border border-white/10 hover:border-teal-500/50 transition-all duration-500 flex flex-col items-center text-center rounded-2xl shadow-xl">
                <div className="w-14 h-14 bg-teal-500/20 flex items-center justify-center text-teal-400 mb-6 border border-teal-500/40 group-hover:scale-110 group-hover:bg-teal-500 group-hover:text-white transition-all rounded-xl">
                   {React.cloneElement(item.icon, { size: 24 })}
                </div>
                <h3 className="text-lg font-bold text-white mb-3 tracking-tight uppercase leading-tight">{item.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed font-normal">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION: 3 STEPS --- */}
      <section className={`py-24 ${bgMain} border-y border-white/10 relative overflow-hidden`}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-blue-600/10 blur-[120px] rounded-full rotate-12 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight uppercase leading-tight">How to Start Your <br/> Trading Journey</h2>
            <p className="text-teal-400 text-sm font-bold uppercase tracking-[0.2em]">Protocol Activation in 3 Steps</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 relative">
            <div className="absolute top-[30%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent hidden lg:block"></div>

            {[
              { n: "01", t: "Register", d: "Sign up for your Live Account in under 2 minutes.", icon: <UserCheck /> },
              { n: "02", t: "Deposit", d: "Fund through convenient and secure deposit options.", icon: <Wallet /> },
              { n: "03", t: "Trade", d: "Access the global financial markets and execute.", icon: <Activity /> },
            ].map((step, i) => (
              <div key={i} className="group relative p-8 rounded-3xl bg-black/60 backdrop-blur-xl border border-white/10 hover:border-teal-500/50 transition-all duration-500 text-center shadow-2xl mt-6 lg:mt-0">
                 <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-black border-2 border-white/20 flex items-center justify-center font-bold text-white text-lg group-hover:border-teal-400 transition-all font-mono rounded-full shadow-[0_0_15px_rgba(45,212,191,0.2)]">
                    {step.n}
                 </div>
                 <div className="w-16 h-16 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center mx-auto mb-6 border border-teal-500/30 group-hover:scale-110 transition-transform mt-2">
                   {React.cloneElement(step.icon, { size: 28 })}
                 </div>
                 <h4 className="text-xl font-bold text-white mb-3 tracking-tight leading-tight uppercase">{step.t}</h4>
                 <p className="text-sm text-white/80 leading-relaxed font-normal font-mono uppercase tracking-widest">{step.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
             <button className="px-12 py-5 rounded-xl bg-white text-black font-bold text-lg hover:bg-teal-400 transition-all shadow-[0_15px_40px_-15px_rgba(45,212,191,0.5)] uppercase tracking-tight">
               Activate Your Account
             </button>
          </div>
        </div>
      </section>

      {/* --- SECTION: FAQ --- */}
      <section className={`py-24 border-t border-white/10 ${bgMain}`}>
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight uppercase font-mono underline decoration-teal-500 decoration-4 underline-offset-[8px]">[ GLOBAL FAQ ]</h2>
            <p className="text-white/80 font-bold uppercase tracking-widest text-sm font-mono pt-4">Archive Access Terminal-1</p>
          </div>
          
          <div className="space-y-px bg-white/10 border border-white/20 rounded-2xl overflow-hidden shadow-xl">
            {[
              { q: "1. What online trading platform is the best for beginners?", a: "FXCE is usually regarded as top due to its user-friendly interface, educational materials, and Demo Accounts." },
              { q: "2. Can I trade forex online through FXCElite?", a: "We are at the forefront of providing trading accounts for forex majors, minors, and exotics at very low spreads." },
              { q: "3. Is FXCElite a worldwide trading platform?", a: "Certainly. We offer our forex trading services to the whole world and provide 24/5 multilingual support." },
              { q: "4. What platforms and tools are offered?", a: "We provide MT5, a high performance WebTrader, and a mobile app, all with advanced charting tools." },
              { q: "5. How can I initiate trading online?", a: "Click the registration button, confirm your identity, and make a deposit for immediate market access." },
              { q: "6. Is this an all-in-one platform?", a: "Absolutely, you can trade Forex, Metals, Indices, and Crypto all from one FXCElite account." },
              { q: "7. Can I trade on my phone?", a: "Definitely, you can trade from anywhere through web and mobile trading by installing our iOS or Android app." },
              { q: "8. What is a CFD trading platform?", a: "A CFD platform enables you to bet on price changes of assets like stocks or gold without owning the physical asset." },
              { q: "9. Why choose forex over traditional investing?", a: "Forex provides high liquidity, 24/5 market access, and the opportunity to profit in both rising and falling markets." },
              { q: "10. Is my data secure?", a: "For sure, we implement bank-grade SSL encryption and 2FA to keep your experience safe and secure." },
            ].map((faq, i) => (
              <FaqItem key={i} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
}

function FaqItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`transition-all duration-500 overflow-hidden ${
      isOpen ? 'bg-[#0a142a] border-l-4 border-teal-500' : 'bg-transparent hover:bg-white/5 border-l-4 border-transparent'
    }`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left group"
      >
        <span className={`font-bold text-sm md:text-base transition-colors tracking-tight uppercase ${isOpen ? 'text-white' : 'text-white/90 group-hover:text-white'}`}>
          {question}
        </span>
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-500 ml-4 ${
          isOpen ? 'bg-teal-500 text-white rotate-180 shadow-[0_0_15px_#2dd4bf]' : 'bg-white/10 text-white/80 group-hover:bg-white/20'
        }`}>
            <ChevronDown size={16} />
        </div>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 text-white/80 text-sm md:text-base leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300 font-normal">
          <div className="h-[1px] w-full bg-white/20 mb-4"></div>
          {answer}
        </div>
      )}
    </div>
  );
}