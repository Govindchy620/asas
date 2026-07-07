import React, { useState } from 'react';
import { 
  Globe, 
  Zap, 
  Shield, 
  TrendingUp, 
  Monitor, 
  Smartphone, 
  Lock, 
  CheckCircle2, 
  ArrowRight, 
  ChevronDown, 
  MousePointer2,
  RefreshCw,
  Layout,
  Layers,
  Activity,
  History,
  Cloud,
  Chrome
} from 'lucide-react';

export default function WebTrading() {
  return (
    <div className="bg-[#050617] text-slate-300 font-sans selection:bg-cyan-500/30 overflow-x-hidden">
      
      {/* --- HERO: THE CLOUD TERMINAL --- */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-32 overflow-hidden">
        {/* Animated Background Data Streams */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#0e749015,transparent_70%)]"></div>
          <div className="absolute h-[1px] w-full top-1/4 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent animate-[slide_8s_linear_infinite]"></div>
          <div className="absolute h-[1px] w-full top-1/2 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent animate-[slide_12s_linear_infinite_reverse]"></div>
          <div className="absolute h-[1px] w-full top-3/4 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent animate-[slide_10s_linear_infinite]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/5 border border-cyan-500/20 backdrop-blur-xl mb-8 animate-fade-in">
            <Cloud size={14} className="text-cyan-400" />
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-cyan-400 italic">Cloud Native Interface v2.0</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tight mb-6">
            Web Trading <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-white italic">Platform</span>
          </h1>
          
          <p className="text-base md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light mb-8 uppercase tracking-widest italic">
            Professional Trading Directly from Your Browser
          </p>

          <div className="max-w-3xl mx-auto text-sm md:text-base text-slate-400 leading-relaxed font-light mb-12 px-6 py-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-3xl shadow-2xl relative group overflow-hidden">
             <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:scale-110 transition-transform">
               <Chrome size={80} />
             </div>
             Accessibility and speed are the two most critical factors that determine the success of a trader in today's market. A web trading platform removes the requirement for heavy software installations and enables you to trade in the worldwide markets using any device connected to the internet.
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
              <button className="relative px-10 py-4 rounded-xl bg-white text-black font-bold text-base transition-all hover:scale-[1.03] active:scale-95 shadow-2xl flex items-center gap-3">
                Launch Our Web Platform <ArrowRight size={20} />
              </button>
            </div>
            <p className="text-cyan-400 text-sm font-bold uppercase tracking-[0.2em] italic animate-pulse">
              No download, no delays. Start trading in seconds!
            </p>
          </div>
        </div>
      </section>

      {/* --- WHAT IS: THE FLOATING TAB --- */}
      <section className="py-24 relative border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
               <div className="space-y-6">
                 <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-tight italic underline decoration-cyan-500 decoration-4 underline-offset-[8px]">What Is a Web <br/> Trading Platform?</h2>
                 <div className="space-y-6 text-base text-slate-400 leading-relaxed font-light">
                   <p>
                     Fxcelite's online web trading platform is an innovative tool that offers users a smooth experience, combining the best features of the desktop version with the convenience of a browser. You can now trade online without download wherever you are—at home, in the office, or on the road, and never miss a market movement.
                   </p>
                   <p className="text-white font-bold italic">
                     Our web based trading platform is equipped to deliver outstanding performance, featuring ultra-low latency and a secure environment. It is the ideal choice of a CFD web trading platform for those who cherish versatility.
                   </p>
                   <p>
                     A web-based trading software refers to a version of a trading terminal that functions solely within a web browser such as Chrome, Safari, or Firefox. In contrast to the traditional MetaTrader desktop version, it does not take up any disk space and requires no maintenance.
                   </p>
                 </div>
               </div>
            </div>

            <div className="relative group lg:sticky lg:top-32">
               <div className="absolute inset-0 bg-cyan-500/10 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#0B0E2A]">
                 <div className="h-8 bg-white/5 border-b border-white/10 flex items-center px-4 gap-2 relative z-10">
                    <div className="w-2 h-2 rounded-full bg-rose-500/50"></div>
                    <div className="w-2 h-2 rounded-full bg-amber-500/50"></div>
                    <div className="w-2 h-2 rounded-full bg-emerald-500/50"></div>
                    <div className="ml-3 h-4 w-40 bg-white/5 rounded-sm border border-white/5 text-[8px] flex items-center px-2 text-slate-500">https://webtrader.fxcelite.com</div>
                 </div>
                 <div className="relative h-[400px] w-full overflow-hidden bg-[#050617]">
                   <img 
                      src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop" 
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                      alt="Web Terminal interface"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#050617] via-[#050617]/40 to-transparent"></div>
                 </div>
                 
                 <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-black/80 backdrop-blur-2xl border border-white/10 z-10">
                    <p className="text-slate-300 text-sm leading-relaxed font-medium">
                      It is simply trading online through a browser that instantly syncs with your account, giving you a consistent experience on all your devices. Although being browser based, a secure web trading platform at FXCElite does not sacrifice analytical capabilities.
                    </p>
                    <div className="mt-4 flex items-center gap-3">
                      <RefreshCw size={16} className="text-cyan-400" />
                      <span className="text-cyan-400 font-bold uppercase tracking-widest text-[10px]">Real-Time Account Sync</span>
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE: FLOATING ICON GRID --- */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase italic leading-tight">Why Choose Web Trading <br/> Without Software Download?</h2>
            <p className="text-cyan-400 text-sm font-bold uppercase tracking-[0.2em]">Zero Weight, Max Power</p>
            <p className="text-slate-500 text-base max-w-2xl mx-auto font-light leading-relaxed italic">
              Choosing a web trading without software download offers several strategic advantages for active traders.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { title: "Instant Access", desc: "Just login to your account and get ready to trade forex with online web trading - no waiting necessary!", icon: <Zap /> },
              { title: "Device Neutrality", desc: "Whether you are using Windows, Macintosh, or Linux, the platform always works flawlessly for you.", icon: <Monitor /> },
              { title: "Secure Environment", desc: "Take Advantage of Secure Web Trading, security software that utilizes 256-bit SSL encryption.", icon: <Shield /> },
              { title: "Real-Time Data", desc: "Get a web-based platform with real-time charts and live market data feed in one browser window.", icon: <Activity /> },
              { title: "Shared Device Safety", desc: "Since data is never stored locally, it is the safest way to trade on a shared or public device.", icon: <Lock /> },
            ].map((item, i) => (
              <div key={i} className="group p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 transition-all duration-500 flex flex-col items-center text-center relative overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6 border border-white/5 group-hover:scale-110 group-hover:bg-cyan-400 group-hover:text-black transition-all">
                   {React.cloneElement(item.icon, { size: 24 })}
                </div>
                <h3 className="text-base font-bold text-white mb-3 tracking-tight leading-tight uppercase italic">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FEATURES: BENTO GLASS PANELS --- */}
      <section className="py-24 bg-white/[0.01] border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-600/5 blur-[120px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8 space-y-10">
               <div className="space-y-4">
                 <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase leading-tight italic">Key Features of <br/> the Web Platform</h2>
                 <p className="text-base text-slate-500 italic leading-relaxed font-light">
                   Our online web trading platform is packed with high-end features that provide a professional edge.
                 </p>
               </div>

               <div className="grid md:grid-cols-2 gap-5">
                 {[
                   { t: "One-Click Trading", d: "Get immediate order execution with just a single click using the CFD web trading platform.", icon: <MousePointer2 /> },
                   { t: "Advanced Drawing Tools", d: "Use trendlines, Fibonacci levels, and shapes in Forex price chart analysis.", icon: <Layers /> },
                   { t: "Technical Indicators", d: "Gain access to 30+ technical indicators such as RSI, Moving Averages, MACD, etc.", icon: <TrendingUp /> },
                   { t: "Full Order History", d: "Directly access your trading performance and history within the trading software itself.", icon: <History /> },
                   { t: "Risk Management", d: "Stop Losses and Take Profit points can be set with ease.", icon: <Shield /> },
                 ].map((feature, i) => (
                   <div key={i} className="group p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/20 transition-all duration-500 relative shadow-lg">
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-4 border border-white/5 group-hover:scale-110 transition-transform">
                        {React.cloneElement(feature.icon, { size: 20 })}
                      </div>
                      <h4 className="text-base font-bold text-white mb-2 uppercase tracking-tight italic leading-tight">{feature.t}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed font-light italic">{feature.d}</p>
                   </div>
                 ))}
               </div>
            </div>

            <div className="lg:col-span-4 lg:sticky lg:top-32">
               <div className="relative p-8 rounded-3xl bg-[#0B0E2A] border border-white/10 shadow-2xl overflow-hidden group">
                  <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:scale-110 transition-transform duration-1000">
                    <Monitor size={100} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-6 tracking-tight uppercase border-b border-white/10 pb-4">Instant Access</h3>
                  <div className="space-y-6">
                     <p className="text-base text-cyan-400 font-bold leading-tight italic">
                       Experience the flexibility of the cloud. Open Your Live Account and access the web platform today.
                     </p>
                     <div className="text-sm text-slate-500 leading-relaxed font-light italic">
                        <p>No downloads. No latency. Just pure institutional-grade trading through your browser.</p>
                     </div>
                     <button className="w-full py-4 rounded-xl bg-white text-black font-bold hover:bg-cyan-500 transition-all text-sm shadow-xl shadow-cyan-500/20 uppercase tracking-tight">
                        Access WebTrader
                     </button>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- COMPARISON: TECHNICAL MATRIX --- */}
      <section className="py-24 bg-black border-y border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16 space-y-2">
             <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase leading-tight">Web vs. Desktop</h2>
             <p className="text-slate-500 text-sm font-bold uppercase tracking-[0.2em] italic underline decoration-cyan-500 decoration-4 underline-offset-[8px]">Performance Head-to-Head</p>
          </div>

          <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black/40 backdrop-blur-xl overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-cyan-900/20">
                  <th className="p-5 text-sm font-bold text-white uppercase italic tracking-widest border-b border-white/10">Feature</th>
                  <th className="p-5 text-sm font-bold text-cyan-400 uppercase italic tracking-widest border-b border-white/10 bg-cyan-500/5">Web Platform</th>
                  <th className="p-5 text-sm font-bold text-slate-500 uppercase italic tracking-widest border-b border-white/10">Desktop</th>
                </tr>
              </thead>
              <tbody className="text-sm md:text-base">
                {[
                  { f: "Installation", c: "None (Browser)", m: "Required" },
                  { f: "Accessibility", c: "Any device/OS", m: "Installed device" },
                  { f: "Speed", c: "Instant Login", m: "Moderate Startup" },
                  { f: "Security", c: "SSL Encrypted", m: "Locally Stored Data" },
                  { f: "Ease of Use", c: "Highly Intuitive", m: "Learning Curve" }
                ].map((row, i) => (
                  <tr key={i} className="group hover:bg-white/[0.02] transition-colors">
                    <td className="p-5 font-bold text-slate-400 border-b border-white/5">{row.f}</td>
                    <td className="p-5 font-bold text-white border-b border-white/5 bg-cyan-500/[0.02] group-hover:text-cyan-400 transition-colors italic">{row.c}</td>
                    <td className="p-5 font-medium text-slate-600 border-b border-white/5">{row.m}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-8 text-center text-slate-500 text-sm italic">
            While many pros still use the desktop version for complex automated bots, the web version is the preferred choice for fast execution and monitoring.
          </p>
        </div>
      </section>

      {/* --- HOW TO TRADE: SCROLLING STEPPER --- */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase italic leading-tight">How to Trade Online <br/> Without Download</h2>
            <p className="text-cyan-400 text-sm font-bold uppercase tracking-[0.2em]">Starting your journey is a 3-step process</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { n: "01", t: "Login", d: "Please input your Fxcelite credentials on our safe web portal.", icon: <Lock /> },
              { n: "02", t: "Choose Asset", d: "At the web trading platform, with live charts, select your asset of preference, either a pair or a CFD.", icon: <Activity /> },
              { n: "03", t: "Place Trade", d: "Assess price action and click to instantly execute 'Buy' or 'Sell'.", icon: <MousePointer2 /> },
            ].map((step, i) => (
              <div key={i} className="group relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/40 transition-all duration-500 text-center shadow-xl mt-6 lg:mt-0">
                 <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-black border-2 border-cyan-500/20 flex items-center justify-center font-black text-cyan-500 text-xl group-hover:bg-cyan-400 group-hover:text-black transition-all">
                    {step.n}
                 </div>
                 <div className="w-16 h-16 rounded-2xl bg-cyan-500/5 text-cyan-400 flex items-center justify-center mx-auto mb-6 border border-white/5 group-hover:scale-110 transition-transform mt-4">
                   {React.cloneElement(step.icon, { size: 32 })}
                 </div>
                 <h4 className="text-xl font-black text-white mb-3 tracking-tight leading-tight uppercase italic">{step.t}</h4>
                 <p className="text-sm text-slate-500 leading-relaxed font-medium italic">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TRUST & AUDIENCE: GLASS PANELS --- */}
      <section className="py-24 border-y border-white/5 bg-[#0a0c1a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
             <div className="p-10 rounded-3xl bg-black border border-white/10 relative group overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 p-10 opacity-[0.03] group-hover:rotate-12 transition-transform duration-1000">
                    <Shield size={180} />
                </div>
                <div className="relative z-10 space-y-8">
                   <div className="flex items-center gap-5">
                      <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 border border-cyan-500/20 group-hover:bg-cyan-500 group-hover:text-black transition-all duration-500">
                         <Lock size={24} />
                      </div>
                      <h2 className="text-2xl font-black text-white tracking-tight uppercase italic underline decoration-cyan-500 decoration-4 underline-offset-[8px]">Security & Reliability</h2>
                   </div>
                   <div className="text-base text-slate-400 leading-relaxed font-light italic space-y-6">
                      <p>Security is the backbone of our secure web trading site. We know the value of the security of data for our online traders while they trade online without the need for download.</p>
                      <div className="p-6 rounded-2xl bg-white/[0.03] border-l-4 border-cyan-500 italic font-medium text-white shadow-xl">
                         We offer end-to-end encryption in our online trading platform, and our secure web trading service guarantees that your funds and credentials are fully secured. We have a 99.9% uptime record.
                      </div>
                   </div>
                </div>
             </div>

             <div className="space-y-10 lg:p-8">
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight uppercase italic leading-tight">Who is Web <br/> Trading For?</h2>
                  <p className="text-cyan-400 font-bold uppercase tracking-[0.2em] text-xs">Diversified Access Profiles</p>
                </div>
                <div className="grid gap-5">
                   {[
                     { l: "Traders on the Move", d: "Traders who rely on various locations for administering positions.", icon: <Globe /> },
                     { l: "Beginners", d: "Those looking for the best online trading platforms in a user-friendly format.", icon: <MousePointer2 /> },
                     { l: "Mac & Linux Users", d: "Traders who prefer not to use emulators or complex setups.", icon: <Monitor /> },
                     { l: "Backup Traders", d: "Traders using the web as a reliable backup to their main terminal.", icon: <History /> }
                   ].map((item, i) => (
                     <div key={i} className="flex gap-5 group/item items-center p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all">
                       <div className="shrink-0 w-12 h-12 rounded-full bg-cyan-500/5 flex items-center justify-center text-cyan-400 border border-cyan-500/10 group-hover/item:scale-110 transition-transform">
                         {React.cloneElement(item.icon, { size: 24 })}
                       </div>
                       <div>
                         <span className="text-white text-lg font-bold uppercase tracking-tight italic">{item.l}</span>
                         <p className="text-slate-500 text-sm font-light leading-relaxed italic mt-1">{item.d}</p>
                       </div>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA: THE TERMINAL GATE --- */}
      <section className="py-24 bg-[#02030d] text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 space-y-10">
           <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase leading-tight italic">Why Fxcelite is the Best <br/> Web Trading Choice?</h2>
           <p className="text-base md:text-lg text-slate-400 leading-relaxed font-light italic max-w-3xl mx-auto">
             With our online web trading platform, you can take advantage of the benefits offered by the modern web in association with the power of institutional-grade trading. From a web platform with real-time charts to ultra-secure execution, you can do all you need in trading forex online.
           </p>
           <div className="pt-6 flex flex-col items-center gap-6">
              <div className="relative group">
                <div className="absolute -inset-2 bg-cyan-500 rounded-3xl blur opacity-20 group-hover:opacity-60 transition duration-[1000ms]"></div>
                <button className="relative px-12 py-5 rounded-2xl bg-white text-black font-bold text-lg transition-all shadow-[0_20px_60px_-15px_rgba(34,211,238,0.4)] uppercase tracking-tight italic hover:-translate-y-1">
                  Start Trading Online
                </button>
              </div>
              <div className="space-y-3">
                <p className="text-cyan-400 font-bold uppercase tracking-[0.2em] text-xs italic">The markets are just a click away. Experience the freedom now!</p>
                <div className="flex justify-center gap-2">
                   <div className="w-6 h-1 bg-white/10 rounded-full"></div>
                   <div className="w-12 h-1 bg-cyan-500 rounded-full animate-pulse"></div>
                   <div className="w-6 h-1 bg-white/10 rounded-full"></div>
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* --- FAQ: CLOUD STYLE --- */}
      <section className="py-24 border-t border-white/5 bg-black">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight uppercase italic">Web FAQ</h2>
            <p className="text-slate-500 font-medium uppercase tracking-widest text-sm italic">Browser Terminal Knowledge Base</p>
          </div>
          
          <div className="space-y-4">
            {[
              { q: "1. What is a Web Trading Platform?", a: "It is a terminal that enables you to trade financial markets directly through your web browsers without having to download any special software." },
              { q: "2. Is Web trading safe?", a: "Yes, our web trading platform has high-level encryption and a secure login mechanism in place to protect your data." },
              { q: "3. Do I need to pay for web-based trading software?", a: "No, Fxcelite offers its online web trading platform for free for all its registered account holders." },
              { q: "4. Can I trade Forex & CFDs on a web platform?", a: "Absolutely. Our CFD-based web trading platform provides users with an opportunity to trade Forex, Stocks, Indices, and Commodities." },
              { q: "5. Does web trading support real-time charts?", a: "Yes, we do have a web-based trading platform, and we have real-time charts that will update with each tick of the market." },
              { q: "6. Will it work on my Mac or Linux?", a: "Yes, a browser-based trading platform would be OS-independent and work with just about any computer that has a web browser." },
              { q: "7. How to trade online without download?", a: "All you need to do is access the website, click the link that says 'WebTrader', and you're trading in an instant." },
              { q: "8. Is the execution speed slow in a browser?", a: "Not at all. Online trading via browser is optimized for ultra-low latency and competence with desktop applications." },
              { q: "9. Am I able to set Stop-Loss and Take-Profit orders?", a: "Yes, all standard and advanced order types are fully supported on our web trading platform." },
              { q: "10. What is the best web trading platform for forex and CFDs?", a: "The best platform would offer security, speed, and real-time data, all core features of the Fxcelite web terminal." },
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
    <div className={`rounded-2xl border transition-all duration-500 overflow-hidden ${
      isOpen ? 'border-cyan-500 bg-[#0B0E2A] shadow-xl' : 'border-white/5 bg-white/[0.01] hover:bg-white/[0.03]'
    }`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left group"
      >
        <span className={`font-bold text-sm md:text-base transition-colors tracking-tight uppercase italic ${isOpen ? 'text-white' : 'text-slate-500 group-hover:text-white'}`}>
          {question}
        </span>
        <div className={`w-8 h-8 rounded-lg flex shrink-0 items-center justify-center transition-all duration-500 ml-4 ${
          isOpen ? 'bg-cyan-500 text-black rotate-180 shadow-[0_0_15px_#22d3ee]' : 'bg-white/5 text-slate-500 group-hover:bg-white/10'
        }`}>
            <ChevronDown size={16} />
        </div>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 text-slate-400 text-sm md:text-base leading-relaxed animate-in fade-in slide-in-from-top-2 duration-500 font-light italic">
          <div className="h-[1px] w-full bg-white/5 mb-4"></div>
          {answer}
        </div>
      )}
    </div>
  );
}