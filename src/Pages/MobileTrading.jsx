import React, { useState } from 'react';
import { 
  Smartphone, 
  Zap, 
  Shield, 
  TrendingUp, 
  Globe, 
  Activity, 
  Bell, 
  Fingerprint, 
  ChevronDown, 
  ArrowRight, 
  Download, 
  CheckCircle2, 
  Layout, 
  BarChart3, 
  SmartphoneNfc, 
  Lock, 
  RefreshCw,
  Rocket,
  MousePointer2,
  Calendar,
  Apple,
  PlayCircle,
  Eye,
  Settings,
  Sparkles,
  Users
} from 'lucide-react';

export default function MobileTrading() {
  return (
    <div className="bg-[#020410] text-slate-300 font-sans selection:bg-indigo-500/30 overflow-x-hidden">
      
      {/* --- HERO: KINETIC POCKET TERMINAL --- */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-2 pb-3 overflow-hidden">
        {/* Animated Flux Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#6366f115,transparent_70%)]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-indigo-600/5 blur-[200px] rounded-full animate-pulse"></div>
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-pink-600/5 blur-[150px] rounded-full animate-pulse delay-1000"></div>
          
          {/* Floating UI Elements Decor */}
          <div className="absolute top-1/3 left-10 w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl rotate-12 flex items-center justify-center animate-bounce duration-[4000ms] hidden lg:flex">
            <TrendingUp size={24} className="text-indigo-400" />
          </div>
          <div className="absolute bottom-1/4 right-10 w-14 h-14 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-xl -rotate-12 flex items-center justify-center animate-bounce duration-[6000ms] delay-500 hidden lg:flex">
            <Activity size={20} className="text-pink-400" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 backdrop-blur-xl mb-8 animate-fade-in">
            <Smartphone size={14} className="text-indigo-400" />
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-indigo-400 italic font-mono">Mobile Core Engine v8.0</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tight mb-6">
            Mobile Trading <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-pink-400 to-white italic">App</span>
          </h1>
          
          <p className="text-base md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light mb-8 uppercase tracking-widest italic">
            Trade Forex & CFDs Anytime, Anywhere
          </p>

          <div className="max-w-3xl mx-auto text-sm md:text-base text-slate-400 leading-relaxed font-light mb-12 px-6 py-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-3xl shadow-2xl relative group overflow-hidden">
             <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:scale-110 transition-transform">
               <SmartphoneNfc size={80} />
             </div>
             Nowadays, in a rapidly changing financial world, being able to respond to market changes instantly is no longer a good to have but a must have. A professional trading app on your mobile device basically gives you access to worldwide markets anytime, anywhere.
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
              <button 
                onClick={() => window.open('https://trade.fxcelite.com/login', '_blank')}
                className="relative px-10 py-4 rounded-2xl bg-white text-black font-bold text-base transition-all hover:scale-[1.03] active:scale-95 shadow-2xl flex items-center gap-3">
                Download Our Mobile App <Download size={20} />
              </button>
            </div>
            <p className="text-indigo-400 text-sm font-bold uppercase tracking-[0.2em] italic animate-pulse">
              The markets never sleep. Start trading on the go!
            </p>
          </div>
        </div>
      </section>

      {/* --- WHAT IS: THE NATIVE EXPERIENCE --- */}
      <section className="py-24 relative border-y border-white/5 bg-white/[0.01] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
               <div className="space-y-6">
                 <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight leading-tight italic underline decoration-indigo-500 decoration-4 underline-offset-[8px]">What Is a Mobile <br/> Trading App?</h2>
                 <div className="space-y-6 text-base text-slate-400 leading-relaxed font-light">
                   <p>
                     At Fxcelite, we offer an efficient online trading app through which you can handle your portfolio, study charts, and place orders just with one tap. No matter if you are on a bus, in a plane, or simply away from your computer, our app will make sure that you continue to be in touch with the markets.
                   </p>
                   <p className="text-white font-medium italic border-l-2 border-indigo-500 pl-4 bg-white/[0.02] py-2">
                     Our CFD trading app is built for speed and stability, thus the smooth experience whenever you decide to switch from a desktop to mobile.
                   </p>
                   <p>
                     A mobile trading application is a piece of software exclusively meant for use on smartphones and tablets that allows the user to have a direct connection with the financial markets. In contrast to a mobile browser, a native trading app for Android or iOS trading app is fine-tuned for the specific device hardware.
                   </p>
                 </div>
               </div>
            </div>

            <div className="relative group lg:sticky lg:top-32">
               <div className="absolute inset-0 bg-indigo-500/10 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#0B0E2A]">
                 <img 
                    src="https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop" 
                    className="w-full h-[500px] object-cover mix-blend-luminosity grayscale group-hover:grayscale-0 group-hover:mix-blend-normal transition-all duration-1000"
                    alt="Mobile App Interface"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#020410] via-transparent to-transparent"></div>
                 <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-black/80 backdrop-blur-2xl border border-white/10">
                    <p className="text-slate-300 text-sm leading-relaxed font-medium">
                      Our forex trading app offers a full range of services, including live price monitoring, MAM sub-account management, and the capability to submit complicated orders. 
                    </p>
                    <div className="mt-4 flex items-center gap-3">
                      <RefreshCw size={16} className="text-indigo-400" />
                      <span className="text-indigo-400 font-bold uppercase tracking-widest text-[10px] font-mono">Synced with Professional Desktop</span>
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHY USE: KINETIC FLEXIBILITY --- */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase italic leading-tight">Why Use a Forex <br/> Trading App?</h2>
            <p className="text-pink-500 text-sm font-bold uppercase tracking-[0.2em]">The Ultimate Edge in Flexibility</p>
            <p className="text-slate-500 text-base max-w-2xl mx-auto font-light leading-relaxed italic">
              In a market where seconds can define your profit margins, having a secure mobile trading app for online trading is your most valuable tool.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { title: "Instant Execution", desc: "Open and close positions with millisecond latency.", icon: <Zap /> },
              { title: "Push Notifications", desc: "Receive instant notifications whenever a target is hit.", icon: <Bell /> },
              { title: "Forex & CFDs", desc: "Trade currencies, gold, oil, and indices on one screen.", icon: <Globe /> },
              { title: "Biometric Security", desc: "FaceID or Fingerprint scanning to keep your capital safe.", icon: <Fingerprint /> },
              { title: "On-the-Go Analysis", desc: "Mobile platform with real-time charts for technical analysis.", icon: <Activity /> },
            ].map((item, i) => (
              <div key={i} className="group p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-indigo-500/30 transition-all duration-500 flex flex-col items-center text-center relative overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6 border border-white/5 group-hover:scale-110 group-hover:bg-indigo-400 group-hover:text-black transition-all">
                   {React.cloneElement(item.icon, { size: 24 })}
                </div>
                <h3 className="text-base font-bold text-white mb-2 tracking-tight leading-tight uppercase italic">{item.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FEATURES: BENTO GLASS PANELS --- */}
      <section className="py-24 bg-white/[0.01] border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-pink-600/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8 space-y-10">
               <div className="space-y-4">
                 <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase leading-tight italic">Key Features of the <br/> Fxcelite Mobile App</h2>
                 <p className="text-base text-slate-500 italic leading-relaxed font-light">
                   We have packed our online trading app with features that empower you to trade with professional precision.
                 </p>
               </div>

               <div className="grid md:grid-cols-2 gap-5">
                 {[
                   { t: "Real-Time Quotes", d: "Live tick-by-tick quotes for all major, minor, and exotic currency pairs.", icon: <RefreshCw /> },
                   { t: "Advanced Charting", d: "Full-screen charts, 30+ technical indicators, and various timeframes.", icon: <BarChart3 /> },
                   { t: "Full Account Mgmt", d: "Deposit, withdraw, and transfer funds directly through the app.", icon: <Settings /> },
                   { t: "Economic Calendar", d: "Keep up-to-date with key news events that impact markets.", icon: <Calendar /> },
                   { t: "One-Tap Trading", d: "Make a market, limit, or stop order with a simple tap.", icon: <MousePointer2 /> },
                 ].map((feature, i) => (
                   <div key={i} className="group p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-pink-500/20 transition-all duration-500 relative shadow-lg">
                      <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center text-pink-400 mb-4 border border-white/5 group-hover:scale-110 transition-transform">
                        {React.cloneElement(feature.icon, { size: 24 })}
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
                    <Rocket size={100} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-6 tracking-tight uppercase border-b border-white/10 pb-4 font-mono">v8.0 Sandbox</h3>
                  <div className="space-y-6">
                     <p className="text-base text-indigo-400 font-bold leading-tight italic">
                       Transitioning from practice to profit? Use your Demo Account on our mobile app to master the interface risk-free.
                     </p>
                     <div className="text-sm text-slate-500 leading-relaxed font-light italic">
                        <p>Our app handles the transition from virtual to real markets with absolute continuity.</p>
                     </div>
                     <button 
                        onClick={() => window.open('https://trade.fxcelite.com/register', '_blank')}
                        className="w-full py-4 rounded-2xl bg-white text-black font-bold hover:bg-indigo-500 transition-all text-sm shadow-xl shadow-indigo-500/20 uppercase tracking-tight italic">
                        Try Demo Mode
                     </button>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- MODE SWITCH: DUALITY --- */}
      <section className="py-24 bg-[#050118] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
               <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight uppercase italic leading-tight">Beginners vs. <br/> Professionals</h2>
               <p className="text-base text-pink-500 font-bold uppercase tracking-widest italic">The Best App for Everyone</p>
               <p className="text-sm md:text-base text-slate-500 font-light leading-relaxed">
                 Whether you are opening your first trade or managing a multi-million dollar fund, our app adapts to your level of expertise.
               </p>
            </div>
            
            <div className="lg:col-span-7 grid md:grid-cols-2 gap-6">
               <div className="p-8 rounded-3xl bg-black border border-indigo-500/20 group hover:border-indigo-500 transition-colors shadow-2xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                      <Sparkles size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white uppercase italic">Easy Mode</h3>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed font-light italic">
                    For inexperienced traders, we have an ease of use feature for learning the basics of trading with intuitive controls and educational overlays.
                  </p>
               </div>
               <div className="p-8 rounded-3xl bg-black border border-pink-500/20 group hover:border-pink-500 transition-colors shadow-2xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center text-pink-400 group-hover:scale-110 transition-transform">
                      <Zap size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white uppercase italic">Pro Mode</h3>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed font-light italic">
                    For experienced traders, we offer complex order types, in-depth market depth (Level II products), and integrated MAM management!
                  </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- THE NEW APP-FLOW STEPPER: DYNAMIC PATH --- */}
      <section className="py-24 relative bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase italic leading-tight">How to Trade <br/> on Mobile</h2>
            <p className="text-indigo-400 text-sm font-bold uppercase tracking-[0.2em]">A simple 3-step kinetic process</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* The Central Path Line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-indigo-500 via-pink-500 to-indigo-500 hidden md:block opacity-30"></div>

            <div className="space-y-16">
              {[
                { 
                  n: "01", 
                  t: "Download", 
                  d: "To download Fxcelite trading app, one can simply go to App Store or Google Play.", 
                  icon: <Download />,
                  align: "left"
                },
                { 
                  n: "02", 
                  t: "Login", 
                  d: "Use your existing account or Open a Live Account directly through the app.", 
                  icon: <Fingerprint />,
                  align: "right"
                },
                { 
                  n: "03", 
                  t: "Trade", 
                  d: "Find your favorite asset, analyze real-time charts, and execute your trade.", 
                  icon: <TrendingUp />,
                  align: "left"
                },
              ].map((step, i) => (
                <div key={i} className={`flex flex-col ${step.align === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 relative`}>
                  
                  {/* The Indicator Node */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black border-2 border-indigo-500 rounded-full z-20 hidden md:flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.5)]">
                     <div className="w-1.5 h-1.5 bg-white rounded-full animate-ping"></div>
                  </div>

                  {/* Visual Phone Mockup Segment */}
                  <div className="md:w-1/2 w-full flex justify-center">
                    <div className="relative group/phone">
                      <div className="absolute -inset-2 bg-gradient-to-tr from-indigo-500 to-pink-500 rounded-3xl blur-xl opacity-10 group-hover/phone:opacity-30 transition duration-1000"></div>
                      <div className="w-48 h-[350px] bg-[#0B0E2A] rounded-3xl border-[6px] border-[#1e293b] relative overflow-hidden shadow-2xl">
                         {/* Dynamic Internal Content (Placeholders) */}
                         <div className="p-4 space-y-4 pt-8">
                           <div className="w-8 h-1 bg-white/10 rounded-full mx-auto"></div>
                           <div className="flex flex-col items-center gap-3 py-6">
                             <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 animate-pulse">
                                {React.cloneElement(step.icon, { size: 24 })}
                             </div>
                             <div className="h-2 w-24 bg-white/5 rounded-full"></div>
                             <div className="h-2 w-16 bg-white/5 rounded-full"></div>
                           </div>
                           <div className="space-y-2">
                              <div className="h-8 w-full bg-white/5 rounded-lg"></div>
                              <div className="h-8 w-full bg-indigo-500 rounded-lg"></div>
                           </div>
                         </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Segment */}
                  <div className={`md:w-1/2 w-full ${step.align === 'left' ? 'md:text-left' : 'md:text-right'} text-center space-y-4`}>
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/[0.03] border border-white/10 text-xl font-bold italic text-indigo-400 mb-2 font-mono shadow-xl`}>
                      {step.n}
                    </div>
                    <h3 className="text-2xl md:text-4xl font-bold text-white uppercase italic tracking-tight">{step.t}</h3>
                    <p className="text-base text-slate-500 leading-relaxed font-light italic max-w-sm mx-auto md:mx-0">
                      {step.d}
                    </p>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- SECURITY & AUDIENCE: PRISMATIC PANELS --- */}
      <section className="py-24 border-y border-white/5 bg-[#0a0c1a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
             <div className="p-10 rounded-3xl bg-black border border-white/10 relative group overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 p-10 opacity-[0.03] group-hover:rotate-12 transition-transform duration-[2000ms]">
                    <Shield size={180} />
                </div>
                <div className="relative z-10 space-y-8">
                   <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 border border-indigo-500/20 group-hover:bg-indigo-500 group-hover:text-black transition-all duration-500">
                         <Lock size={24} />
                      </div>
                      <h2 className="text-2xl font-bold text-white tracking-tight uppercase italic underline decoration-indigo-500 decoration-4 underline-offset-[8px]">Security & Reliability</h2>
                   </div>
                   <div className="text-base text-slate-400 leading-relaxed font-light italic space-y-6">
                      <p>Security is at the heart of our innovative and secure mobile trading application, which is the best for online trading.</p>
                      <div className="p-6 rounded-2xl bg-white/[0.03] border-l-4 border-indigo-500 italic font-medium text-white shadow-xl">
                        We use 256-bit encryption to ensure confidentiality and security of information exchanged, and our mobile trading application is upgraded frequently to include the latest security updates.
                      </div>
                   </div>
                </div>
             </div>

             <div className="space-y-10 lg:p-8">
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight uppercase italic leading-tight">Who Should Use <br/> the Mobile App?</h2>
                  <p className="text-pink-500 font-bold uppercase tracking-[0.2em] text-xs font-mono">Mobile Optimization Profiles</p>
                </div>
                <div className="grid gap-5">
                   {[
                     { l: "Active Day Traders", d: "Keep track of positions during the day.", icon: <Activity /> },
                     { l: "News Traders", d: "Instantly respond to breaking economic news.", icon: <Zap /> },
                     { l: "Busy Professionals", d: "Trade on the move during free time.", icon: <Layout /> },
                     { l: "MAM Managers", d: "Remotely access sub-accounts on the go.", icon: <Users /> }
                   ].map((item, i) => (
                     <div key={i} className="flex gap-5 group/item items-center p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all">
                       <div className="shrink-0 w-12 h-12 rounded-full bg-indigo-500/5 flex items-center justify-center text-indigo-400 border border-indigo-500/10 group-hover/item:scale-110 transition-transform">
                         {React.cloneElement(item.icon, { size: 20 })}
                       </div>
                       <div>
                         <span className="text-white text-lg font-bold uppercase tracking-tight italic">{item.l}</span>
                         <p className="text-slate-500 text-sm font-light leading-relaxed italic">{item.d}</p>
                       </div>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA: POCKET DESK --- */}
      <section className="py-24 bg-[#02030d] text-center relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 space-y-10">
           <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight uppercase leading-tight italic">Why Fxcelite is the Best <br/> Mobile Trading Choice?</h2>
           <p className="text-base md:text-lg text-slate-400 leading-relaxed font-light italic max-w-3xl mx-auto">
             With our forex trading app designed for Android and iPhone, we have redefined what it means by trading on the go. We have brought to you the ultimate mobile trading app experience, with lightning-fast trade execution, along with real-time charts.
           </p>
           <div className="pt-6 flex flex-col items-center gap-8">
              <div className="relative group">
                <div className="absolute -inset-2 bg-indigo-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-60 transition duration-1000"></div>
                <button 
                  onClick={() => window.open('https://trade.fxcelite.com/register', '_blank')}
                  className="relative px-12 py-5 rounded-3xl bg-white text-black font-bold text-lg md:text-xl transition-all shadow-[0_20px_60px_-15px_rgba(99,102,241,0.4)] uppercase tracking-tight italic hover:-translate-y-1">
                  Download the App Today
                </button>
              </div>
              <div className="space-y-4">
                <p className="text-indigo-400 font-bold uppercase tracking-[0.3em] text-xs italic font-mono">Your trading desk is now in your pocket.</p>
                <div className="flex justify-center gap-2">
                   <div className="w-6 h-1 bg-white/10 rounded-full"></div>
                   <div className="w-12 h-1 bg-pink-500 rounded-full animate-pulse"></div>
                   <div className="w-6 h-1 bg-white/10 rounded-full"></div>
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* --- FAQ: MOBILE STYLE --- */}
      <section className="py-24 border-t border-white/5 bg-black">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight uppercase italic">Mobile FAQ</h2>
            <p className="text-slate-500 font-medium uppercase tracking-widest text-sm italic font-mono">Portable Knowledge Base</p>
          </div>
          
          <div className="space-y-4">
            {[
              { q: "1. Is this mobile trading app free to download?", a: "The Fxcelite online trading app is free to download, both on Android and iOS." },
              { q: "2. Can I open a live account through the app?", a: "Yes, sure. You will be able to do all this through the trading app." },
              { q: "3. Is it safe to trade forex on mobile?", a: "Yes, our mobile trading app for online trading is designed with bank-grade encryption and biometric security that ensures the safety of your money." },
              { q: "4. What is the best mobile trading app for beginners?", a: "The Fxcelite app is recommended to beginners, as it offers an intuitive trading platform and a Demo Account option in which one can practice trading." },
              { q: "5. Is the app capable of providing real-time charts?", a: "The answer is yes; it is a full mobile trading platform providing real-time charts, changing every millisecond." },
              { q: "6. Is it possible to manage my MAM account on the app?", a: "Professional managers can manage their MAM structures and investor sub-accounts using the mobile interface of the trading platform." },
              { q: "7. Will I have a separate login for the mobile app?", a: "No, you use the same credentials for our desktop, web, and mobile trading app platforms." },
              { q: "8. Is it possible to trade stocks and crypto in the application?", a: "Yes, through access to our CFD trading application, you can trade Forex, Stocks, Indices, Commodities, and Cryptocurrencies." },
              { q: "9. What if I get a call during trading?", a: "The App will run in the background, but for security, you may be asked to authenticate again if the App is closed for a pretty long time period." },
              { q: "10. How can I download the forex trading application for Android and iPhone?", a: "You can download the best mobile trading app from the Google Play Store or Apple App Store by searching for \"Fxcelite\"." },
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
      isOpen ? 'border-indigo-500/40 bg-[#0B0E2A] shadow-xl' : 'border-white/5 bg-white/[0.01] hover:bg-white/[0.03]'
    }`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left group"
      >
        <span className={`font-bold text-sm md:text-base transition-colors tracking-tight uppercase italic ${isOpen ? 'text-white' : 'text-slate-500 group-hover:text-white'}`}>
          {question}
        </span>
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-500 ml-4 ${
          isOpen ? 'bg-indigo-400 text-black rotate-180 shadow-[0_0_15px_#6366f1]' : 'bg-white/5 text-slate-500 group-hover:bg-white/10'
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