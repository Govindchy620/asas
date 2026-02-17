import React, { useState } from 'react';
import { 
  Terminal, 
  Bot, 
  Cpu, 
  Layers, 
  Globe, 
  Activity, 
  ChevronDown, 
  ArrowRight, 
  Download, 
  Shield, 
  Lock, 
  Server, 
  Zap, 
  Calendar, 
  BarChart3, 
  Layout,
  MousePointer2,
  Settings,
  Sparkles,
  Search,
  CheckCircle2,
  FileCode,
  Gauge,
  RefreshCw
} from 'lucide-react';

export default function Mt5() {
  return (
    <div className="bg-[#020617] text-slate-300 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* --- HERO: DIAGNOSTIC BLUEPRINT --- */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-32 overflow-hidden">
        {/* Schematic Grid Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:32px_32px]"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#2563eb08,transparent_70%)]"></div>
          <img 
            src="https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-[0.05] grayscale"
            alt="MT5 Trading Engine"
          />
          {/* Diagnostic Scanning Accents */}
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-600/5 blur-[100px] rounded-full animate-pulse delay-700"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-none border border-blue-500/30 bg-blue-500/5 backdrop-blur-md mb-8 animate-fade-in">
            <Terminal size={14} className="text-blue-400" />
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-blue-400 italic">Core Terminal v5.0-Deployment</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tight mb-6">
            MetaTrader 5 <br/> <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-400 to-blue-500/50 italic font-thin uppercase">Platform</span>
          </h1>
          
          <p className="text-base md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light mb-8 uppercase tracking-widest italic">
            The Future of Multi-Asset Trading
          </p>

          <div className="max-w-3xl mx-auto text-white text-sm md:text-base text-slate-500 leading-relaxed font-white mb-12 px-6 py-8 bg-white/[0.02] border border-white/5 relative overflow-hidden group backdrop-blur-sm">
             <div className="absolute top-0 left-0 w-2 h-2 bg-blue-500"></div>
             <div className="absolute bottom-0 right-0 w-2 h-2 bg-blue-500"></div>
             If we talk about the top platform for very efficient trading, MetaTrader 5 is the standard in the trading industry. It is a great multi-asset platform that helps you trade even more than just currencies. In fact, it's the powerful successor of MT4. We at FXCElite offer a solid MT5 trading platform environment through which you can freely access the global markets.
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="relative group">
              <div className="absolute -inset-1 bg-blue-600 rounded-none blur opacity-20 group-hover:opacity-60 transition duration-1000"></div>
              <button className="relative px-10 py-4 bg-white text-black font-bold text-base transition-all hover:bg-blue-600 hover:text-white active:scale-95 flex items-center gap-3 uppercase tracking-tight italic">
                Download MetaTrader 5 <Download size={20} />
              </button>
            </div>
            <p className="text-blue-400 text-sm font-bold uppercase tracking-[0.2em] italic animate-pulse font-mono">
              [ Step into the next generation of trading ]
            </p>
          </div>
        </div>
      </section>

      {/* --- EXPLAINED: THE MULTI-ASSET ENGINE --- */}
      <section className="py-24 relative border-y border-white/5 bg-white/[0.01] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
               <div className="space-y-6">
                 <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight leading-tight italic border-l-4 border-blue-600 pl-4">MT5 Platform <br/> Explained</h2>
                 <div className="space-y-6 text-base text-slate-400 leading-relaxed font-light">
                   <p>
                     Whether you're sticking to MetaTrader 5 forex trading or deciding on venturing into stocks and futures, this platform has all the pace and range to be your modern market success. Being a top MetaTrader 5 broker platform, we have made our server ready for the fastest trade execution with ultra-low latency.
                   </p>
                   <p className="text-white font-medium italic bg-white/5 p-5 border-r-2 border-blue-500">
                     MT5 is more than just an update to MT4; it is a complete solution for online trading that provides advanced technical tools, better charting, and a well-organized infrastructure for automated strategies.
                   </p>
                   <p>
                     If you are asking why the MetaTrader 5 trading software is different, it is mainly because of the versatility. Whereas MT4 was focused mainly on Forex, MT5 was given the ability to serve MetaTrader 5 CFD trading in all asset classes, including indices, commodities, and equities from the very start.
                   </p>
                 </div>
               </div>
            </div>

            <div className="relative group lg:sticky lg:top-32">
               <div className="absolute inset-0 bg-blue-500/10 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <div className="relative border border-white/10 shadow-2xl bg-[#0B0E2A]">
                 <div className="h-8 bg-white/5 border-b border-white/10 flex items-center px-4 gap-3 relative z-10">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Diagnostic Terminal Interface_05</div>
                 </div>
                 <div className="relative h-[400px] w-full overflow-hidden bg-[#020617]">
                   <img 
                      src="https://images.unsplash.com/photo-1611974717482-982c7a005b36?q=80&w=2070&auto=format&fit=crop" 
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                      alt="MT5 Multi-Asset View"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent"></div>
                 </div>
                 
                 <div className="absolute bottom-6 left-6 right-6 p-6 bg-black/80 border border-blue-500/30 backdrop-blur-xl z-10">
                    <p className="text-slate-300 text-sm leading-relaxed font-medium italic">
                      The platform has an "Economic Calendar" built right into the interface, plus a greater number of timeframes and technical indicators. 
                    </p>
                    <div className="mt-4 flex items-center gap-3">
                      <Gauge size={20} className="text-blue-400" />
                      <span className="text-white text-lg font-bold tracking-tight uppercase italic">Depth of Market (DOM)</span>
                    </div>
                    <p className="mt-2 text-slate-500 text-xs italic">
                      Check bid and ask prices at different volume levels with transparency once reserved for institutional traders.
                    </p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE: INDUSTRIAL GRID --- */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase italic leading-tight">Why Choose FXCElite <br/> for MT5 Trading?</h2>
            <p className="text-blue-500 text-sm font-bold uppercase tracking-[0.2em] font-mono">[ Execution Environment Optimization ]</p>
            <p className="text-white text-base max-w-2xl mx-auto font-light leading-relaxed">
              Finding the best broker for MetaTrader 5 is about more than just software; it’s about the execution environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-px bg-white/10 border border-white/10 overflow-hidden shadow-xl">
            {[
              { title: "Unified Access", desc: "Access a massive range of symbols through a single unified account.", icon: <Layers /> },
              { title: "Superior Speed", desc: "Take advantage of millisecond execution and no re-quotes.", icon: <Zap /> },
              { title: "Adv. Charting", desc: "21 time frames and more than 80 technical indicators inbuilt.", icon: <BarChart3 /> },
              { title: "Hedge & Netting", desc: "Supports both systems for Forex and exchange markets.", icon: <Settings /> },
              { title: "Sync analysis", desc: "Easily sync analysis with TradingView or enjoy our web-based version.", icon: <RefreshCw /> },
            ].map((item, i) => (
              <div key={i} className="group p-6 bg-[#020617] hover:bg-[#050b24] transition-all duration-300 flex flex-col items-center text-center relative overflow-hidden">
                <div className="w-12 h-12 bg-blue-500/5 flex items-center justify-center text-blue-400 mb-5 border border-blue-500/20 group-hover:bg-blue-500 group-hover:text-white transition-all">
                   {React.cloneElement(item.icon, { size: 24 })}
                </div>
                <h3 className="text-base font-bold text-white mb-2 tracking-tight leading-tight uppercase italic">{item.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FEATURES: DIAGNOSTIC HUD BLOCKS --- */}
      <section className="py-24 bg-white/[0.01] border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8 space-y-10">
               <div className="space-y-4">
                 <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase leading-tight italic">Key Features of <br/> MetaTrader 5</h2>
                 <p className="text-base text-slate-500 italic leading-relaxed font-light font-mono">
                   The software is uniquely balanced to serve all skill levels.
                 </p>
               </div>

               <div className="grid md:grid-cols-2 gap-6">
                 {[
                   { t: "For Beginners", d: "Clean and highly customizable interface. Start with a Demo Account to practice.", icon: <Sparkles /> },
                   { t: "For Professionals", d: "Supports MQL5, high-performance programming language used for automated trading.", icon: <FileCode /> },
                   { t: "Technical Depth", d: "Max 100 charts allowed with a vast amount of custom technical indicators and scripts.", icon: <Layout /> },
                   { t: "Automated Systems", d: "Quicker and more efficient than alternatives. The best platform for trading bots.", icon: <Bot /> },
                   { t: "Backtesting", d: "Test your EAs on historical data with incredible accuracy in strategy testers.", icon: <RefreshCw /> },
                 ].map((feature, i) => (
                   <div key={i} className="group p-6 bg-white/[0.02] border-l-2 border-l-transparent hover:border-l-blue-500 hover:bg-white/[0.04] transition-all duration-300 relative">
                      <div className="w-10 h-10 bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4 border border-blue-500/20 group-hover:scale-110 transition-transform">
                        {React.cloneElement(feature.icon, { size: 20 })}
                      </div>
                      <h4 className="text-base font-bold text-white mb-2 uppercase tracking-tight italic leading-tight">{feature.t}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed font-light italic">{feature.d}</p>
                   </div>
                 ))}
               </div>
            </div>

            <div className="lg:col-span-4 lg:sticky lg:top-32">
               <div className="relative p-8 bg-[#0B0E2A] border border-blue-500/30 shadow-2xl overflow-hidden group">
                  <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:scale-110 transition-transform duration-1000">
                    <Server size={100} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-6 tracking-tight uppercase border-b border-white/10 pb-4 italic">Virtual Mastery</h3>
                  <div className="space-y-6">
                     <p className="text-base text-blue-400 font-bold leading-tight italic">
                       Perfect your strategy before going live. Master MT5 with virtual funds today.
                     </p>
                     <div className="text-sm text-slate-500 text-white leading-relaxed font-light italic">
                        <p>Our MetaTrader 5 automated trading platform supports High-Speed Backtesting and VPS integration for 24/7 automation.</p>
                     </div>
                     <button className="w-full py-4 bg-white text-black font-bold hover:bg-blue-600 hover:text-white transition-all text-sm uppercase tracking-tight italic">
                        Open Demo Account
                     </button>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- AUTOMATION: THE LOGIC CORE --- */}
      <section className="py-24 bg-black relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative group">
                <div className="absolute inset-0 bg-blue-500/10 blur-[80px] rounded-full opacity-50"></div>
                <div className="relative border border-white/10 p-8 bg-white/[0.01]">
                    <div className="flex items-center gap-5 mb-8">
                      <div className="w-12 h-12 bg-blue-500 flex items-center justify-center text-white shadow-[0_0_20px_#2563eb]">
                        <Bot size={24} />
                      </div>
                      <h2 className="text-2xl font-bold text-white uppercase italic tracking-tight">Automated <br/> Trading</h2>
                    </div>
                    <div className="space-y-4">
                       <div className="p-5 border border-white/5 bg-white/[0.03] hover:border-blue-500/50 transition-colors">
                          <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-1 flex items-center gap-2">
                             <Zap size={14} className="text-blue-400" /> MQL5 Community
                          </h4>
                          <p className="text-slate-400 text-xs font-medium">Access thousands of ready-made trading signals and robots directly from the platform.</p>
                       </div>
                       <div className="p-5 border border-white/5 bg-white/[0.03] hover:border-blue-500/50 transition-colors">
                          <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-1 flex items-center gap-2">
                             <Server size={14} className="text-blue-400" /> Virtual Private Server
                          </h4>
                          <p className="text-slate-400 text-xs font-medium">Automate trades, and keep them going 24/7 without having your PC turned on.</p>
                       </div>
                    </div>
                </div>
            </div>

            <div className="order-1 lg:order-2 space-y-8">
               <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight uppercase leading-tight italic underline decoration-blue-600 decoration-4 underline-offset-[8px]">Automated <br/> Trading Platform</h2>
               <div className="space-y-6 text-white text-base text-slate-400 leading-relaxed font-light italic">
                 <p>Yet another impressive feature offered by the MetaTrader 5 platform is its ability to execute advanced algorithmic trading systems. It is much quicker and more efficient compared to other alternatives and thus can be considered the best platform for forex trading bots in relation to its predecessor.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- HOW TO TRADE: INTEGRATED HUD SEQUENCE --- */}
      <section className="py-24 relative border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight uppercase italic leading-tight">How to Trade <br/> on MetaTrader 5</h2>
            <p className="text-blue-500 text-sm font-bold uppercase tracking-[0.2em] font-mono">[ Deployment Command Sequence ]</p>
          </div>

          <div className="relative border border-white/10 bg-white/[0.01] p-8 md:p-12 overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
               <Gauge size={150} />
            </div>
            
            <div className="grid lg:grid-cols-3 gap-12 relative z-10">
              {[
                { 
                  n: "01", 
                  t: "Download & Install", 
                  d: "The MetaTrader 5 platform for Windows, Mac, and Mobile can be downloaded from the FXCElite portal.", 
                  icon: <Download />
                },
                { 
                  n: "02", 
                  t: "Login", 
                  d: "Enter your FXCElite login details to connect to our High-Speed Trade Servers.", 
                  icon: <Lock />
                },
                { 
                  n: "03", 
                  t: "Analyze & Trade", 
                  d: "Modify your workspace, add indicators, and enter a market or pending order.", 
                  icon: <Activity />
                },
              ].map((step, i) => (
                <div key={i} className="group relative">
                  <div className="flex items-center gap-4 mb-6">
                     <span className="text-4xl font-black text-blue-600/30 group-hover:text-blue-500 transition-colors font-mono">{step.n}</span>
                     <div className="flex-1 h-[1px] bg-white/10 group-hover:bg-blue-500/50 transition-colors"></div>
                  </div>
                  <div className="w-12 h-12 bg-blue-500/5 flex items-center justify-center text-blue-400 mb-6 border border-blue-500/20 group-hover:bg-blue-500 group-hover:text-black transition-all">
                     {React.cloneElement(step.icon, { size: 24 })}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-tight italic">{step.t}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-light italic">
                    {step.d}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA: THE TERMINAL GATE --- */}
      <section className="py-24 bg-[#020617] text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 space-y-10">
           <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight uppercase leading-tight italic">Why FXCElite is the Best <br/> Choice for MT5?</h2>
           <p className="text-base md:text-lg text-white  text-slate-400 leading-relaxed font-light italic max-w-3xl mx-auto">
             We don't just provide the software; we provide the power behind it. With MetaTrader 5 trading platform explained through our extensive guides and a server infrastructure optimized for speed, FXCElite is the best broker for MetaTrader 5.
           </p>
           <div className="pt-6 flex flex-col items-center gap-6">
              <div className="relative group">
                <div className="absolute -inset-2 bg-blue-600 rounded-sm blur opacity-20 group-hover:opacity-60 transition duration-1000"></div>
                <button className="relative px-12 py-4 bg-white text-black font-bold text-base transition-all shadow-[0_15px_40px_-15px_rgba(37,99,235,0.4)] uppercase tracking-tight italic hover:-translate-y-1">
                  Sign Up for MT5 Now
                </button>
              </div>
              <div className="space-y-4">
                <p className="text-blue-400 font-bold uppercase tracking-[0.3em] text-xs italic font-mono">Command the markets with the best tools.</p>
                <div className="flex justify-center gap-2">
                   <div className="w-12 h-[1px] bg-blue-500 rounded-full animate-pulse"></div>
                   <div className="w-6 h-[1px] bg-white/10 rounded-full"></div>
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* --- FAQ: INDUSTRIAL STYLE --- */}
      <section className="py-24 border-t border-white/5 bg-black">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight uppercase italic font-mono">[ MT5 FAQ ]</h2>
            <p className="text-slate-500 font-medium uppercase tracking-widest text-sm italic">Cutting-Edge Terminal Knowledge Base</p>
          </div>
          
          <div className="space-y-4">
            {[
              { q: "1. What is the MetaTrader 5 trading platform?", a: "It is a cutting-edge trading platform for trading Forex, Stocks, CFDs, and other financial instruments using advanced technical analysis tools." },
              { q: "2. Is MetaTrader 5 better than MetaTrader 4?", a: "Yes, as MetaTrader 5 is more advanced, allowing for more timeframes, more indicators, and easier non-forex asset trading, as opposed to MT4." },
              { q: "3. Is the MetaTrader 5 trading platform free?", a: "FXCELite offers its clients the MetaTrader 5 trading platform for free." },
              { q: "4. Is MetaTrader 5 accessible on a Mac?", a: "Yes, we have a special version of the MetaTrader 5 trading platform designed and optimized for macOS." },
              { q: "5. Is MetaTrader 5 automated trading platform-supported?", a: "Indeed, it is the best automated MetaTrader 5 platform, employing the potent MQL5 language." },
              { q: "6. Can I trade Forex using MetaTrader 5?", a: "Yes, MetaTrader 5 Forex Trading is one of the most powerful advantages of the MetaTrader 5 Forex platform." },
              { q: "7. What is the difference between Hedging and Netting?", a: "Hedging enables one to have multiple positions in the same pair in different directions, as opposed to Netting where all positions are made into one single price." },
              { q: "8. How do I get the MetaTrader 5 online trading app?", a: "You can download it onto your mobile device via the Apple App Store or Google Play Store and then proceed to log in using your FXCElite account." },
              { q: "9. What is the best broker for MetaTrader 5?", a: "The best broker for MetaTrader 5 is a broker such as FXCELite that offers low spreads, execution speed, and technical support 24/5." },
              { q: "10. Do I require a high-end computer for MT5?", a: "No, this is because the trading platform is highly optimized and can run smoothly on most computers and laptops." },
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
    <div className={`rounded-xl border transition-all duration-500 overflow-hidden ${
      isOpen ? 'border-blue-500 bg-[#0B0E2A] shadow-lg' : 'border-white/5 bg-white/[0.01] hover:bg-white/[0.03]'
    }`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left group"
      >
        <span className={`font-bold text-sm md:text-base transition-colors tracking-tight uppercase italic ${isOpen ? 'text-white' : 'text-slate-500 group-hover:text-white'}`}>
          {question}
        </span>
        <div className={`w-8 h-8 flex items-center justify-center shrink-0 transition-all duration-500 ml-4 ${
          isOpen ? 'bg-blue-500 text-white rotate-180 shadow-[0_0_15px_#2563eb] rounded-lg' : 'bg-white/5 text-slate-500 group-hover:bg-white/10 rounded-lg'
        }`}>
            <ChevronDown size={16} />
        </div>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 text-slate-400 text-sm md:text-base leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300 font-light italic">
          <div className="h-[1px] w-full bg-white/5 mb-4"></div>
          {answer}
        </div>
      )}
    </div>
  );
}