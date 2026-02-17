import React, { useState } from 'react';
import { 
  BarChart, 
  LineChart, 
  Layers, 
  Users, 
  Zap, 
  Shield, 
  Globe, 
  Search, 
  ArrowRight, 
  ChevronDown, 
  MousePointer2, 
  Settings, 
  Code2, 
  RefreshCw, 
  Maximize2, 
  Bell, 
  PlayCircle,
  Lock,
  Grid3X3,
  ExternalLink,
  CheckCircle2,
  Database,
  Eye
} from 'lucide-react';

export default function TradingViewIntegration() {
  return (
    <div className="bg-[#131722] text-white font-sans selection:bg-[#2962ff]/30 overflow-x-hidden">
      
      {/* --- HERO: GEOMETRIC INTERFACE --- */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-32 overflow-hidden">
        {/* TradingView Dot Grid Background */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(#2962ff44_1px,transparent_1px)] [background-size:20px_20px]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:100px_100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm bg-[#2962ff]/20 border border-[#2962ff]/50 backdrop-blur-xl mb-8">
            <BarChart size={14} className="text-white" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white">Integrated Visualization Module</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tight mb-6">
            TradingView <br/> <span className="text-[#2962ff] italic uppercase">Integration</span>
          </h1>
          
          <p className="text-base md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light mb-8 uppercase tracking-widest italic">
            Professional Charting & Social Trading
          </p>

          <div className="max-w-3xl mx-auto text-sm md:text-base text-white/90 leading-relaxed font-light mb-12 px-6 py-8 bg-[#1c212d] border border-white/20 relative shadow-xl">
             <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#2962ff]"></div>
             <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#2962ff]"></div>
             Everything is about data visualization in today's trading world. TradingView integration allows you to combine the world's most popular charting interface with FXCElite's institutional-grade execution. This powerful synergy gives you access to an online charting platform used by millions, while ensuring your trades are filled on a secure trading platform.
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="relative group">
              <div className="absolute -inset-1 bg-[#2962ff] rounded-none blur opacity-40 group-hover:opacity-80 transition duration-1000"></div>
              <button className="relative px-10 py-4 bg-white text-black font-bold text-base transition-all hover:bg-[#2962ff] hover:text-white active:scale-95 flex items-center gap-3">
                Connect to TradingView <ExternalLink size={18} />
              </button>
            </div>
            <p className="text-[#2962ff] text-sm font-bold uppercase tracking-[0.2em] italic animate-pulse font-mono">
              [ Elevate your analysis today ]
            </p>
          </div>
        </div>
      </section>

      {/* --- WHAT IS: THE TECHNICAL BRIDGE --- */}
      <section className="py-24 relative bg-white/[0.02] border-y border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
               <div className="space-y-6">
                 <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight leading-tight italic border-b-4 border-[#2962ff] pb-3 inline-block">What is TradingView <br/> Integration?</h2>
                 <div className="space-y-6 text-base text-white/90 leading-relaxed font-light">
                   <p>
                     With the use of TradingView for forex trading, one stands to benefit from an outstanding library of indicators, community-driven insights, and advanced drawing tools. This is a professional charting software solution that bridges a gap between social market insights and real-world execution, making it ideal for both beginners and professional traders.
                   </p>
                   <p className="text-white font-medium italic bg-white/10 p-5 border-r-2 border-[#2962ff]">
                     The feature of TradingView is a technical bridge that enables you to access your FXCElite trading account directly inside a TradingView interface.
                   </p>
                   <p>
                     It is a high-performance online charting platform that offers tick-by-tick data. You can now analyze and trade in one place without switching between tabs in your browser. This type of set-up is especially popular with CFD trading charts as it enables seamless "Chart Trading."
                   </p>
                 </div>
               </div>
            </div>

            <div className="relative group lg:sticky lg:top-32">
               <div className="absolute inset-0 bg-[#2962ff11] blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <div className="relative p-1 bg-[#1c212d] border border-white/20 shadow-2xl overflow-hidden rounded-xl">
                 {/* FIXED VISIBLE IMAGE */}
                 <img 
                    src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1200" 
                    className="w-full h-[400px] object-cover group-hover:scale-105 transition-all duration-700"
                    alt="TradingView Interface"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#131722] via-[#131722]/20 to-transparent pointer-events-none"></div>
                 <div className="absolute bottom-6 left-6 right-6 p-6 bg-black/90 border border-[#2962ff]/50 backdrop-blur-xl rounded-lg shadow-xl">
                    <p className="text-white/90 text-sm leading-relaxed font-medium">
                      It enables users to drag and drop their Limit and Stop orders directly onto the price action, which acts as a useful visual aid for managing Live Account positions.
                    </p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHY USE: LINEAR GRID --- */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase italic leading-tight">Why Use TradingView for <br/> Forex Trading?</h2>
            <p className="text-[#2962ff] text-sm font-bold uppercase tracking-[0.2em] font-mono">[ Beyond the Standard Terminal ]</p>
            <p className="text-white/80 text-base max-w-2xl mx-auto font-light leading-relaxed italic">
              Choosing an online charting platform like TradingView provides an edge that standard terminals sometimes miss.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-px bg-white/20 border border-white/20 shadow-xl">
            {[
              { title: "Adv. Charting", desc: "Over 100+ pre-built indicators and 50+ smart drawing tools are available.", icon: <Settings /> },
              { title: "Social Insights", desc: "Thousands of expert ideas and scripts are shared globally.", icon: <Users /> },
              { title: "Custom Frames", desc: "Develop uncommon timeframes like the 2-minute or the 8-hour charts.", icon: <Maximize2 /> },
              { title: "Cloud Alerts", desc: "Create complex alerts triggered on price, indicators, or touch points.", icon: <Bell /> },
              { title: "Multi-Asset", desc: "Get advanced charts in one place for Forex, Stocks, Crypto, and Indices.", icon: <Grid3X3 /> },
            ].map((item, i) => (
              <div key={i} className="group p-6 bg-[#131722] hover:bg-[#1c212d] transition-all duration-300 flex flex-col items-center text-center relative overflow-hidden">
                <div className="w-12 h-12 bg-[#2962ff]/20 flex items-center justify-center text-white mb-5 border border-[#2962ff]/50 group-hover:bg-[#2962ff] group-hover:text-white transition-all rounded-lg">
                   {React.cloneElement(item.icon, { size: 24 })}
                </div>
                <h3 className="text-base font-bold text-white mb-2 tracking-tight leading-tight uppercase italic">{item.title}</h3>
                <p className="text-white/80 text-xs leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FEATURES: CODED BLOCKS --- */}
      <section className="py-24 bg-white/[0.02] border-y border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2962ff]/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8 space-y-10">
               <div className="space-y-4">
                 <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase leading-tight italic">Key Features of <br/> the Platform</h2>
                 <p className="text-base text-white/80 italic leading-relaxed font-light">
                   Our TradingView integration unlocks a suite of features designed for high-precision market timing.
                 </p>
               </div>

               <div className="grid md:grid-cols-2 gap-5">
                 {[
                   { t: "Pine Script® Support", d: "Develop and test your proprietary technical indicators and custom trading strategies.", icon: <Code2 /> },
                   { t: "Bar Replay", d: "Rewind the market and practice your strategy on historical data, great for Demo Accounts.", icon: <PlayCircle /> },
                   { t: "Volumetric Analysis", d: "Use Volume Profile and VWAP to see where the big players are positioning themselves.", icon: <Database /> },
                   { t: "Multi-chart layouts", d: "Monitor as many as 8 charts on one tab of the browser to show correlation.", icon: <Layers /> },
                   { t: "Screener Tools", d: "Leverage the embedded scanner to discover new trading opportunities with custom filters.", icon: <Search /> },
                 ].map((feature, i) => (
                   <div key={i} className="group p-6 bg-[#1c212d] border-l-2 border-l-transparent hover:border-l-[#2962ff] transition-all duration-300 relative rounded-r-xl border-y border-r border-white/10">
                      <div className="w-10 h-10 bg-[#2962ff]/20 flex items-center justify-center text-white mb-4 border border-[#2962ff]/50 group-hover:scale-110 transition-transform rounded-lg">
                        {React.cloneElement(feature.icon, { size: 20 })}
                      </div>
                      <h4 className="text-base font-bold text-white mb-2 uppercase tracking-tight italic leading-tight">{feature.t}</h4>
                      <p className="text-white/80 text-sm leading-relaxed font-light italic">{feature.d}</p>
                   </div>
                 ))}
               </div>
            </div>

            <div className="lg:col-span-4 lg:sticky lg:top-32">
               <div className="relative p-8 bg-[#1c212d] border border-white/20 shadow-2xl overflow-hidden group rounded-2xl">
                  <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform duration-1000">
                    <LineChart size={100} className="text-[#2962ff]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-6 tracking-tight uppercase border-b border-white/20 pb-4">Hybrid Edge</h3>
                  <div className="space-y-6">
                     <p className="text-base text-white font-bold leading-tight italic bg-[#2962ff]/20 p-4 rounded-lg border border-[#2962ff]/30">
                       Experience the best of both worlds. Link Your Account and start trading with TradingView precision.
                     </p>
                     <div className="text-sm text-white/90 leading-relaxed font-light italic">
                        <p>Combine world-class aesthetics with FXCElite's institutional infrastructure.</p>
                     </div>
                     <button className="w-full py-4 bg-white text-black font-bold hover:bg-[#2962ff] hover:text-white transition-all text-sm uppercase tracking-tight rounded-xl">
                        Link Your Account
                     </button>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- VS SECTION: RIGID TABLE --- */}
      <section className="py-24 bg-black border-y border-white/10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16 space-y-2">
             <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase leading-tight italic">TradingView vs. MetaTrader 5</h2>
             <p className="text-white/80 text-sm font-bold uppercase tracking-[0.2em] italic underline decoration-[#2962ff] decoration-4 underline-offset-[8px]">Undisputed Leaders</p>
          </div>

          <div className="border border-white/20 overflow-x-auto shadow-xl rounded-2xl bg-[#131722]">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-[#2962ff]/30">
                  <th className="p-5 text-sm font-bold text-white uppercase italic tracking-widest border-r border-white/20">Feature</th>
                  <th className="p-5 text-sm font-bold text-white uppercase italic tracking-widest border-r border-white/20">TradingView</th>
                  <th className="p-5 text-sm font-bold text-white uppercase italic tracking-widest">MetaTrader 5</th>
                </tr>
              </thead>
              <tbody className="text-sm md:text-base font-mono">
                {[
                  { f: "Interface", c: "Modern & Web-Centric", m: "Classic & Desktop-Focused" },
                  { f: "Community", c: "Social Ideas & Scripts", m: "Automated Bots (EAs)" },
                  { f: "Charting", c: "World-Class Aesthetics", m: "Functional & Professional" },
                  { f: "Scripting", c: "Pine Script (Easy)", m: "MQL5 (Complex/High-Perf)" },
                  { f: "Accessibility", c: "Native Browser App", m: "Desktop/Mobile App" }
                ].map((row, i) => (
                  <tr key={i} className="group hover:bg-white/10 transition-colors border-b border-white/20">
                    <td className="p-5 font-bold text-white/90 border-r border-white/20 uppercase tracking-tight">{row.f}</td>
                    <td className="p-5 font-black text-white border-r border-white/20 italic group-hover:text-[#2962ff] transition-colors">{row.c}</td>
                    <td className="p-5 font-medium text-white/80 italic">{row.m}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-8 text-center text-white/80 text-sm italic max-w-2xl mx-auto bg-white/5 p-4 rounded-xl border border-white/10">
            While MetaTrader 5 is the king of automated bots, TradingView is the undisputed leader in manual analysis and social interaction.
          </p>
        </div>
      </section>

      {/* --- HOW TO START: NODE STEPPER --- */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase italic leading-tight">How to Start Trading <br/> with TradingView</h2>
            <p className="text-[#2962ff] text-sm font-bold uppercase tracking-[0.2em] font-mono">[ Technical Handshake Sequence ]</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 relative">
            {/* Connection Line Decor */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#2962ff55] to-transparent hidden lg:block"></div>

            {[
              { n: "01", t: "Sign Up", d: "Open a Live Account with FXCElite.", icon: <Settings /> },
              { n: "02", t: "Connect", d: "Open the TradingView Trading Panel and select FXCElite.", icon: <RefreshCw /> },
              { n: "03", t: "Trade", d: "Log in with your credentials and execute directly from charts.", icon: <MousePointer2 /> },
            ].map((step, i) => (
              <div key={i} className="group relative p-8 bg-[#1c212d] border border-white/20 hover:border-[#2962ff] transition-all duration-500 text-center rounded-2xl shadow-lg mt-8 lg:mt-0">
                 <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#131722] border-2 border-[#2962ff] flex items-center justify-center font-bold text-white text-lg group-hover:bg-[#2962ff] group-hover:text-white transition-all rounded-xl shadow-[0_0_15px_#2962ff]">
                    {step.n}
                 </div>
                 <div className="w-14 h-14 bg-[#2962ff]/20 text-white flex items-center justify-center mx-auto mb-6 border border-[#2962ff]/50 group-hover:scale-110 transition-transform rounded-xl mt-2">
                   {React.cloneElement(step.icon, { size: 24 })}
                 </div>
                 <h4 className="text-xl font-bold text-white mb-3 uppercase tracking-tight italic">{step.t}</h4>
                 <p className="text-sm text-white/90 leading-relaxed font-light italic">
                   {step.d}
                 </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TRUST & AUDIENCE: STRUCTURAL PANELS --- */}
      <section className="py-24 bg-[#0a0c14] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
             <div className="p-10 bg-black border border-white/20 relative group overflow-hidden shadow-2xl rounded-3xl">
                <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:rotate-12 transition-transform duration-1000">
                    <Shield size={180} className="text-[#2962ff]" />
                </div>
                <div className="relative z-10 space-y-8">
                   <div className="flex items-center gap-5">
                      <div className="w-14 h-14 bg-[#2962ff] flex items-center justify-center text-white shadow-[0_0_20px_#2962ff] rounded-xl">
                         <Lock size={24} />
                      </div>
                      <h2 className="text-2xl font-bold text-white tracking-tight uppercase italic">Security & Reliability</h2>
                   </div>
                   <div className="text-base text-white/90 leading-relaxed font-light italic space-y-6">
                      <p>When you trade using TradingView via FXCELite, your security is our topmost concern. Secure API protocols are used whenever you link your accounts.</p>
                      <div className="p-6 bg-white/10 border-l-4 border-[#2962ff] font-medium text-white italic rounded-r-xl shadow-lg">
                         This means that TradingView will only have access to your trading signals, but not your financial information or capital.
                      </div>
                   </div>
                </div>
             </div>

             <div className="space-y-10 lg:p-8">
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight uppercase italic leading-tight">Who is <br/> TradingView For?</h2>
                  <p className="text-[#2962ff] font-bold uppercase tracking-[0.3em] text-xs font-mono">[ Target Visualization Profiles ]</p>
                </div>
                <div className="grid gap-5">
                   {[
                     { l: "Visual Traders", d: "Individuals who rely heavily on price action and clean charting.", icon: <Eye /> },
                     { l: "Social Traders", d: "Investors that enjoy sharing and learning from community ideas.", icon: <Users /> },
                     { l: "Technical Analysts", d: "Users who require the most advanced technical analysis tools.", icon: <Code2 /> },
                     { l: "Beginners", d: "It is highly intuitive and a great platform to learn market behavior.", icon: <PlayCircle /> }
                   ].map((item, i) => (
                     <div key={i} className="flex gap-5 group/item items-center p-5 bg-white/5 border border-white/10 hover:border-[#2962ff]/50 transition-all rounded-2xl">
                       <div className="shrink-0 w-12 h-12 bg-[#2962ff]/20 flex items-center justify-center text-white border border-[#2962ff]/50 group-hover/item:scale-110 transition-transform rounded-xl">
                         {React.cloneElement(item.icon, { size: 20 })}
                       </div>
                       <div>
                         <span className="text-white text-lg font-bold uppercase tracking-tight italic">{item.l}</span>
                         <p className="text-white/80 text-sm font-light leading-relaxed italic mt-1">{item.d}</p>
                       </div>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* --- TECHNICAL ANALYSIS: DUAL COLUMN WITH VISIBLE IMAGE --- */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative group">
                <div className="absolute inset-0 bg-[#2962ff]/20 blur-[80px] rounded-full opacity-50"></div>
                <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl p-1 bg-[#1c212d]">
                    {/* FIXED VISIBLE IMAGE */}
                    <img 
                      src="https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=1200" 
                      className="w-full h-[400px] object-cover group-hover:scale-105 transition-all duration-1000 rounded-2xl"
                      alt="Market Pattern"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#010208] via-[#010208]/20 to-transparent pointer-events-none"></div>
                    <div className="absolute bottom-6 left-6 right-6 p-6 rounded-xl bg-black/90 backdrop-blur-xl border border-white/20">
                        <p className="text-white text-sm font-medium">By combining these online trading charts with a healthy Topup strategy, you make sure you have the margin needed to capitalize on the trends you spot.</p>
                    </div>
                </div>
            </div>

            <div className="order-1 lg:order-2 space-y-8">
               <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight uppercase leading-tight">Technical Analysis <br/> Charts for <br/> Forex and CFDs</h2>
               <div className="space-y-6 text-base text-white/90 leading-relaxed font-light bg-white/5 p-6 rounded-2xl border border-white/10">
                 <p>The whole theory of technical analysis is based on the fact that history always repeats itself. Our interactive technical analysis charts are designed to enable you to recognize repeatable patterns.</p>
                 <p>On our charting platform, you could spot "ascending staircases" in a bull market or "head and shoulders" reversals. Our platform helps you trace out the correlation between indices or parabolic trends in commodities.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA: THE CHART GATE --- */}
      <section className="py-24 bg-[#0d1017] text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 space-y-10">
           <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase leading-tight italic">Why FXCElite is the Best <br/> Choice for TradingView?</h2>
           <p className="text-base md:text-lg text-white/90 leading-relaxed font-light italic max-w-3xl mx-auto bg-white/5 p-6 rounded-xl border border-white/10">
             We provide the raw speed and low spreads that TradingView traders demand. By combining our execution with their visualization, we offer the best web-based trading solution on the market.
           </p>
           <div className="pt-6 flex flex-col items-center gap-6">
              <div className="relative group">
                <div className="absolute -inset-2 bg-[#2962ff] rounded-2xl blur opacity-40 group-hover:opacity-80 transition duration-1000"></div>
                <button className="relative px-12 py-5 bg-white text-black font-bold text-lg transition-all shadow-[0_15px_40px_-15px_rgba(41,98,255,0.6)] uppercase tracking-tight italic hover:-translate-y-1 rounded-xl">
                  Unlock TradingView Power
                </button>
              </div>
              <div className="space-y-4">
                <p className="text-[#2962ff] font-bold uppercase tracking-[0.4em] text-xs italic font-mono">Command the charts. Trade with full power today!</p>
                <div className="flex justify-center gap-3">
                   <div className="w-8 h-[2px] bg-white/30"></div>
                   <div className="w-16 h-[2px] bg-[#2962ff] animate-pulse"></div>
                   <div className="w-8 h-[2px] bg-white/30"></div>
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* --- FAQ: GRID STYLE --- */}
      <section className="py-24 border-t border-white/10 bg-black">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight uppercase italic font-mono">[ SYNC FAQ ]</h2>
            <p className="text-white/80 font-bold uppercase tracking-widest text-sm italic">Visualization Knowledge Base</p>
          </div>
          
          <div className="space-y-4">
            {[
              { q: "1. What is TradingView integration?", a: "This enables you to link your account with an FXCElite broker to trade using their charts." },
              { q: "2. Is it free to use TradingView with FXCElite?", a: "Yes, the basic integration is free for all our clients, and some advanced features will be available with their premium account." },
              { q: "3. Can I trade Forex and CFDs on TradingView?", a: "Absolutely. You are able to trade any assets offered by FXCElite, such as Forex, Indices, and Commodities." },
              { q: "4. Is TradingView better than MT5?", a: "It depends on your style. TradingView is more suited for chart work and social ideas, while MT5 is more suitable for automated EAs." },
              { q: "5. Can I use my Demo Account on TradingView?", a: "Yes, you can connect your Demo Account to practice risk-free on their charts." },
              { q: "6. Do I need to download software?", a: "No, TradingView is a browser-based trading platform, they do offer a desktop application if you wish to use that." },
              { q: "7. Is my account data safe?", a: "Yes, the link is via a secure encrypted API." },
              { q: "8. Can I use custom indicators?", a: "Yes, you can use any of the thousands of community scripts or write your own using Pine Script." },
              { q: "9. Does TradingView support mobile trading?", a: "Yes, they have a world-class mobile app that seamlessly integrates with your desktop analysis." },
              { q: "10. How do I link my account?", a: "Just access the 'Trading Panel' located at the bottom part of the TradingView chart and select FXCElite." },
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
    <div className={`rounded-xl border transition-all duration-300 overflow-hidden ${
      isOpen ? 'border-[#2962ff] bg-[#1c212d] shadow-lg' : 'border-white/20 bg-white/5 hover:bg-white/10'
    }`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left group"
      >
        <span className={`font-bold text-sm md:text-base transition-colors tracking-tight uppercase italic ${isOpen ? 'text-white' : 'text-white/90 group-hover:text-white'}`}>
          {question}
        </span>
        <div className={`w-8 h-8 flex items-center justify-center shrink-0 transition-all duration-300 ml-4 rounded-lg ${
          isOpen ? 'bg-[#2962ff] text-white rotate-180 shadow-[0_0_15px_#2962ff]' : 'bg-white/10 text-white/80 group-hover:bg-white/20'
        }`}>
            <ChevronDown size={16} />
        </div>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 text-white/80 text-sm md:text-base leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300 font-light italic">
          <div className="h-[1px] w-full bg-white/10 mb-4"></div>
          {answer}
        </div>
      )}
    </div>
  );
}