import React, { useState } from 'react';
import { 
  Headphones, 
  MessageSquare, 
  Search, 
  ShieldCheck, 
  Zap, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  ChevronDown, 
  Globe, 
  Terminal, 
  Monitor, 
  Smartphone, 
  Mail, 
  Phone, 
  LifeBuoy, 
  Cpu, 
  Activity, 
  Sparkles,
  Layers,
  FileText,
  BadgePercent,
  RefreshCw
} from 'lucide-react';

export default function Helpdesk() {
  return (
    <div className="bg-[#020617] text-white font-sans selection:bg-indigo-500/30 overflow-x-hidden">
      
      {/* --- HERO: THE OBSIDIAN BEACON --- */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-32 overflow-hidden">
        {/* Radiating Light Effect */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-indigo-600/10 blur-[150px] rounded-full animate-pulse"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,#020617)]"></div>
          
          {/* Subtle Grid */}
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff11_1px,transparent_1px),linear-gradient(to_bottom,#ffffff11_1px,transparent_1px)] bg-[size:50px_50px]"></div>
          
          <img 
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-10 grayscale"
            alt="Support Center"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-xl mb-8 animate-fade-in rounded-lg">
            <LifeBuoy size={14} className="text-indigo-400 animate-spin-slow" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-indigo-400">Node Sigma: Support Alpha</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tight mb-6 italic uppercase">
            Trading <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-white to-indigo-600">Helpdesk</span>
          </h1>
          
          <p className="text-base md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light mb-8 uppercase tracking-widest italic font-serif">
            Professional Support for Your Trading Journey
          </p>

          <div className="max-w-3xl mx-auto text-sm md:text-base text-white/90 leading-relaxed font-light mb-12 px-6 py-8 bg-white/[0.05] border border-white/20 relative shadow-2xl backdrop-blur-xl rounded-2xl group">
             <div className="absolute top-0 left-0 w-8 h-[2px] bg-indigo-500"></div>
             <div className="absolute bottom-0 right-0 w-8 h-[2px] bg-indigo-500"></div>
             <p className="mb-4">
               When trading in the global financial markets, you have to be very precise and a trustworthy trading help desk is a great partner for you to keep your advantage. Fxcelite knows that sometimes, no matter if you are a novice placing your very first order or a seasoned trader handling complicated portfolios, there will be questions in your mind.
             </p>
             <p>
               Our forex trading support team is geared up to give you quick, precise, and completely human-based solutions so that you can concentrate 100% on the charts. We are not just responding to your queries; we deliver trading platform support services that enable you to trade with absolute security.
             </p>
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="relative group">
              <div className="absolute -inset-1 border border-indigo-500 opacity-40 group-hover:opacity-100 transition-opacity rounded-xl"></div>
              <button className="relative px-10 py-4 bg-white text-black font-bold text-base md:text-lg transition-all hover:bg-indigo-600 hover:text-white active:scale-95 shadow-xl uppercase tracking-tight italic flex items-center gap-2 rounded-lg">
                Access Live Support <MessageSquare size={20} className="ml-2" />
              </button>
            </div>
            <p className="text-indigo-400 text-sm font-bold uppercase tracking-[0.2em] italic animate-pulse">
              [ Need immediate assistance? Visit our Contact Us page ]
            </p>
          </div>
        </div>
      </section>

      {/* --- SECTION 1: COMPREHENSIVE HUB --- */}
      <section className="py-24 relative border-y border-white/10 bg-[#030712] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div className="space-y-8">
                <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight leading-tight italic">Comprehensive Customer <br/> Support for Your Trading Platform</h2>
                <div className="space-y-6 text-base text-white/80 leading-relaxed font-light italic">
                  <p>A high-performance customer support trading platform is the backbone of a great broker. Equipped with a multi-channel support system, Fxcelite aims to resolve your queries in record time.</p>
                  <p>Whether you are experiencing technical issues like some trading platform users run into or need some assistance with trading account verification, we are here to assist you. We offer trading platform customer support with all your requirements met, be it about Forex trading hours or any platform-related issues regarding MT5 or WebTrader.</p>
                </div>
             </div>
             <div className="relative group">
                <div className="absolute inset-0 bg-indigo-500/20 blur-[80px] rounded-full opacity-50"></div>
                <div className="relative border border-white/20 shadow-2xl overflow-hidden p-1 bg-gradient-to-br from-indigo-500/20 to-transparent rounded-3xl">
                   <img 
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200" 
                    className="w-full h-[400px] object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 rounded-2xl"
                    alt="Digital Hub"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent pointer-events-none"></div>
                   <div className="absolute bottom-6 left-6 right-6 p-6 bg-black/90 backdrop-blur-xl border border-white/20 border-t-indigo-500 border-t-4 rounded-xl shadow-xl">
                      <p className="text-white text-lg font-bold italic mb-2 uppercase tracking-tight">"A world-class online trading partnership rewards influence."</p>
                      <p className="text-indigo-400 text-xs italic font-mono uppercase tracking-[0.2em]">Integrated Support Node V2</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: WHY CHOOSE (THE RADAR GRID) --- */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase italic leading-tight">Why Choose Fxcelite for <br/> Online Trading Customer Support?</h2>
            <p className="text-indigo-400 text-sm font-bold uppercase tracking-[0.2em] font-mono">24/5 Precision Ecosystem</p>
            <p className="text-white/80 text-base max-w-2xl mx-auto font-light leading-relaxed italic pt-4">
              We have built our forex trading helpdesk support around the needs of the modern trader:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/20 border border-white/20 shadow-xl rounded-2xl overflow-hidden">
            {[
              { title: "24/5 Availability", desc: "Our support is in line with global market hours, available when markets are open.", icon: <Globe /> },
              { title: "Humanize", desc: "Our team gives you quick, precise, and completely human-based solutions.", icon: <Users /> },
              { title: "Fast Resolution", desc: "Support tickets get top priority so you don't wait during critical moves.", icon: <Zap /> },
              { title: "Multilingual", desc: "We cater to the global community by providing assistance in various languages.", icon: <Activity /> },
            ].map((item, i) => (
              <div key={i} className="group p-8 bg-[#020617] hover:bg-white/5 transition-all duration-500 flex flex-col items-center text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-125 transition-transform duration-700">
                   {React.cloneElement(item.icon, { size: 100, className: "text-indigo-400" })}
                </div>
                <div className="w-12 h-12 bg-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6 border border-indigo-500/50 group-hover:bg-indigo-600 group-hover:text-white transition-all rounded-xl relative z-10">
                   {React.cloneElement(item.icon, { size: 24 })}
                </div>
                <h3 className="text-lg font-bold text-white mb-3 tracking-tight leading-tight relative z-10">{item.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed font-medium italic relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center flex justify-center">
             <div className="inline-flex items-center gap-4 px-8 py-5 bg-white/5 border border-white/20 shadow-xl rounded-2xl">
                <ShieldCheck className="text-indigo-400" size={28} />
                <div className="text-left">
                  <h4 className="text-white font-bold uppercase text-base italic tracking-tight">Secure Support Environment</h4>
                  <p className="text-white/80 text-sm italic">All channels are encrypted, so your account support is private.</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: KEY SERVICES (BENTO BLOCKS) --- */}
      <section className="py-24 bg-white/[0.02] border-y border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8 space-y-10">
               <div className="space-y-4">
                 <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase leading-tight italic">Key Helpdesk <br/> Services</h2>
                 <p className="text-base text-white/80 italic leading-relaxed font-light max-w-2xl pt-4">
                   Our trading platform support services are categorized to help you get to the right expert faster:
                 </p>
               </div>

               <div className="grid md:grid-cols-2 gap-5">
                 {[
                   { t: "Account Services", d: "Guidance on Deposit & Withdrawals, as well as KYC Verification.", icon: <BadgePercent /> },
                   { t: "Technical Helpdesk", d: "Technical problems related to settings, installation, and mobile app syncing.", icon: <Cpu /> },
                   { t: "Trading Assistance", d: "Information on contract specification, leverage, and trading conditions.", icon: <Activity /> },
                   { t: "Partnership Support", d: "Special support for the members of our 'Become a Partner' program.", icon: <Users /> },
                 ].map((feature, i) => (
                   <div key={i} className="group p-6 rounded-2xl bg-black border-l-2 border-l-transparent border border-white/20 hover:border-l-indigo-500 hover:bg-white/5 transition-all duration-500 relative shadow-xl">
                      <div className="w-10 h-10 bg-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4 border border-white/20 group-hover:scale-110 transition-transform rounded-lg">
                        {React.cloneElement(feature.icon, { size: 20 })}
                      </div>
                      <h4 className="text-base font-bold text-white mb-2 uppercase tracking-tight italic leading-tight">{feature.t}</h4>
                      <p className="text-white/80 text-sm leading-relaxed font-light italic">{feature.d}</p>
                   </div>
                 ))}
               </div>
            </div>

            <div className="lg:col-span-4 lg:sticky lg:top-32">
               <div className="relative p-8 bg-[#0a0f24] border border-white/20 shadow-2xl group overflow-hidden rounded-3xl">
                  <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform duration-1000">
                    <Sparkles size={100} className="text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-6 tracking-tight uppercase border-b border-white/20 pb-4 italic">Premium Care</h3>
                  <div className="space-y-6 relative z-10">
                     <p className="text-base text-indigo-400 font-bold leading-tight italic">
                       Experience the gold standard of service. Open a Support Ticket and let us handle the technicalities for you.
                     </p>
                     <div className="text-sm text-white/80 leading-relaxed font-light italic">
                        <p>Join thousands of traders who rely on our institutional-grade helpdesk for their daily operations.</p>
                     </div>
                     <button className="w-full py-4 bg-white text-black font-bold hover:bg-indigo-600 hover:text-white transition-all text-sm uppercase tracking-tight italic shadow-lg rounded-xl">
                        Open a Support Ticket
                     </button>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: HOW TO GET HELP (STEPPER) --- */}
      <section className="py-24 relative bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase italic leading-tight">How to Get Help with <br/> Your Trading Account</h2>
            <p className="text-indigo-400 text-sm font-bold uppercase tracking-[0.2em] font-mono">Simple 3-Step Protocol</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 relative">
            <div className="absolute top-[30%] left-0 w-full h-[1px] bg-indigo-500/20 hidden lg:block"></div>
            {[
              { n: "01", t: "Search FAQ", d: "Most common questions are answered in our knowledge base.", icon: <Search /> },
              { n: "02", t: "Live Chat", d: "For urgent assistance, use the instant chat feature on our website.", icon: <MessageSquare /> },
              { n: "03", t: "Direct Contact", d: "For complex issues, use our Contact Us page for email and phone support.", icon: <Phone /> },
            ].map((step, i) => (
              <div key={i} className="group relative p-8 bg-white/5 border border-white/10 hover:border-indigo-500/50 transition-all duration-500 text-center shadow-xl rounded-3xl mt-6 lg:mt-0">
                 <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-black border-2 border-indigo-500/50 flex items-center justify-center font-bold text-indigo-400 text-sm group-hover:bg-indigo-500 group-hover:text-white transition-all rounded-full shadow-lg">
                    {step.n}
                 </div>
                 <div className="w-12 h-12 bg-indigo-500/20 text-indigo-400 flex items-center justify-center mx-auto mb-5 border border-white/20 group-hover:scale-110 transition-transform rounded-xl mt-2">
                   {React.cloneElement(step.icon, { size: 24 })}
                 </div>
                 <h4 className="text-lg font-bold text-white mb-3 tracking-tight leading-tight uppercase italic">{step.t}</h4>
                 <p className="text-sm text-white/80 leading-relaxed font-medium italic">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 5: TROUBLESHOOTING (DIAGNOSTIC HUB) --- */}
      <section className="py-24 border-y border-white/10 bg-[#050a1f] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
             <div className="order-2 lg:order-1 relative group">
                <div className="absolute inset-0 bg-indigo-500/20 blur-[100px] rounded-full"></div>
                <div className="relative border border-white/20 shadow-2xl bg-black/60 backdrop-blur-xl p-8 rounded-3xl space-y-8">
                   <div className="flex items-center gap-4 border-b border-white/10 pb-6 mb-6">
                      <Terminal className="text-indigo-400" size={32} />
                      <h2 className="text-3xl font-bold text-white tracking-tight uppercase italic leading-none">Diagnostic <br/> HUD</h2>
                   </div>
                   <div className="grid gap-6">
                      {[
                        { t: "Connectivity Issues", d: "Ensuring terminal is connected to high-speed servers.", icon: <Globe /> },
                        { t: "Order Execution", d: "Margin, slippage, spread, and fill price transparency.", icon: <Activity /> },
                        { t: "Software Updates", d: "Assist with latest versions of mobile and desktop apps.", icon: <RefreshCw /> }
                      ].map((item, idx) => (
                        <div key={idx} className="flex gap-5 group/item items-start">
                           <div className="p-3 bg-white/10 text-white/70 group-hover/item:text-indigo-400 group-hover/item:bg-indigo-500/20 transition-all rounded-lg">
                              {React.cloneElement(item.icon, { size: 20 })}
                           </div>
                           <div className="space-y-1">
                             <h4 className="text-white font-bold uppercase text-base italic tracking-tight">{item.t}</h4>
                             <p className="text-white/80 text-sm italic leading-relaxed">{item.d}</p>
                           </div>
                        </div>
                      ))}
                   </div>
                </div>
             </div>

             <div className="order-1 lg:order-2 space-y-8">
                <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase leading-tight italic underline decoration-indigo-500 decoration-4 underline-offset-[8px]">Technical Issues: <br/> Troubleshooting</h2>
                <p className="text-base text-white/90 leading-relaxed font-light italic border-l-4 border-indigo-500 pl-4 bg-white/5 p-4 rounded-r-xl">
                  After all, even the best of technologies can sometimes have certain hiccups. Our forex trading helpdesk support is specially trained to handle issues quickly.
                </p>
                <div className="pt-4">
                   <div className="p-6 bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center gap-5 group rounded-2xl shadow-lg">
                      <div className="shrink-0 w-16 h-16 bg-indigo-500 flex items-center justify-center text-white font-black italic text-xl shadow-xl rounded-xl group-hover:scale-105 transition-transform">FIX</div>
                      <p className="text-white/90 text-sm font-medium italic leading-relaxed text-center sm:text-left">Systematic problem solving with human expertise. Your uptime is our metric of success.</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 6: TARGET AUDIENCE (IDENTITY TILES) --- */}
      <section className="py-24 relative bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase italic leading-tight">Who is the <br/> Helpdesk For?</h2>
            <p className="text-indigo-400 text-sm font-bold uppercase tracking-[0.2em] font-mono">Strategic Support Profiles</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { l: "New Traders", d: "Need assistance on basics and platform navigation.", icon: <Sparkles /> },
              { l: "Pro Traders", d: "Advanced technical support for automated systems.", icon: <Terminal /> },
              { l: "MAM/PAMM", d: "Customer service for managing multiple accounts.", icon: <Layers /> },
              { l: "Affiliates", d: "Those who need help with Dashboards or links.", icon: <Globe /> }
            ].map((item, i) => (
              <div key={i} className="group relative p-8 bg-white/5 border border-white/10 hover:border-indigo-500/50 transition-all duration-500 text-center shadow-xl rounded-2xl">
                 <div className="w-14 h-14 bg-indigo-500/20 text-indigo-400 flex items-center justify-center mx-auto mb-6 border border-white/20 group-hover:bg-indigo-500 group-hover:text-white transition-all rounded-xl">
                   {React.cloneElement(item.icon, { size: 24 })}
                 </div>
                 <h4 className="text-lg font-bold text-white mb-3 tracking-tight leading-tight uppercase italic">{item.l}</h4>
                 <p className="text-sm text-white/80 leading-relaxed font-medium italic">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 7: FINAL CTA (MISSION STATEMENT) --- */}
      <section className="py-24 bg-[#020617] text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 space-y-10">
           <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase leading-tight italic underline decoration-white/20 decoration-4 underline-offset-[8px]">Why Fxcelite Offers the <br/> Best Trading Support?</h2>
           <p className="text-base md:text-lg text-white/90 leading-relaxed font-light italic max-w-3xl mx-auto bg-white/5 p-6 rounded-2xl border border-white/10">
             With our focus on human expertise and trading platform support services, Fxcelite offers a trading help desk that listens. No robots for us; only human professionals who understand the importance of urgency with the Forex market.
           </p>
           <div className="pt-6 flex flex-col items-center gap-6">
              <div className="relative group">
                <div className="absolute -inset-2 bg-indigo-600 rounded-2xl blur opacity-40 group-hover:opacity-80 transition duration-1000"></div>
                <button className="relative px-12 py-5 bg-white text-black font-bold text-lg transition-all shadow-[0_15px_40px_-15px_rgba(99,102,241,0.5)] uppercase tracking-tight italic rounded-xl hover:-translate-y-1">
                  Start a Chat
                </button>
              </div>
              <div className="space-y-4">
                <p className="text-indigo-400 font-bold uppercase tracking-[0.2em] text-xs italic font-mono max-w-xl mx-auto">Your success is our mission. Experience the best support!</p>
                <div className="flex justify-center gap-3">
                   <div className="w-8 h-[2px] bg-white/20"></div>
                   <div className="w-16 h-[2px] bg-indigo-500 animate-pulse"></div>
                   <div className="w-8 h-[2px] bg-white/20"></div>
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* --- SECTION 8: FAQ (MODERN ACCORDION) --- */}
      <section className="py-24 border-t border-white/10 bg-black">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight uppercase italic font-mono underline decoration-indigo-600 decoration-4 underline-offset-[8px]">[ SUPPORT FAQ ]</h2>
            <p className="text-white/80 font-bold uppercase tracking-widest text-sm italic font-mono pt-4">Node Intelligence Archive Delta-9</p>
          </div>
          
          <div className="space-y-4">
            {[
              { q: "1. What are the Helpdesk hours?", a: "Our forex broker support is available 24 hours a day, 5 days a week, coinciding with global market hours." },
              { q: "2. How do I get assistance with my trading account?", a: "Reach us via live chat on our website, email, or call our dedicated helpdesk lines." },
              { q: "3. Is technical support provided for MT5?", a: "Yes, technical support is provided for all our platforms, including MetaTrader 5 and WebTrader." },
              { q: "4. Can helpdesk advise me on trading?", a: "No, our customer service provides technical and account assistance only. We do not provide financial advice." },
              { q: "5. How long does it take to get a response?", a: "Live chat is usually immediate, while email support can take a few hours." },
              { q: "6. Is the helpdesk available in different languages?", a: "Yes. Our service is available in different major languages to facilitate our international clients." },
              { q: "7. What should I do if I have technical issues?", a: "Check your internet connection. If the problem continues, contact us immediately via live chat." },
              { q: "8. Is there a fee associated with the help desk?", a: "All trading platform support services are offered free to all Fxcelite clients." },
              { q: "9. Can you help with my withdrawal request?", a: "Absolutely. Our support team is available to assist with any information regarding the status of your funds." },
              { q: "10. Where is the best place for beginners to get help?", a: "Try our live chat for quick questions, or visit our comprehensive FAQ section for guides." },
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
    <div className={`rounded-2xl transition-all duration-500 overflow-hidden ${
      isOpen ? 'bg-[#0a0f24] border border-indigo-500/50 shadow-lg' : 'bg-white/5 hover:bg-white/10 border border-white/10'
    }`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left group"
      >
        <span className={`font-bold text-sm md:text-base transition-colors tracking-tight uppercase italic ${isOpen ? 'text-white' : 'text-white/90 group-hover:text-white'}`}>
          {question}
        </span>
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-500 ml-4 ${
          isOpen ? 'bg-indigo-600 text-white rotate-180 shadow-[0_0_15px_#6366f1]' : 'bg-white/10 text-white/80 group-hover:bg-white/20'
        }`}>
            <ChevronDown size={16} />
        </div>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 text-white/80 text-sm md:text-base leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300 font-light italic">
          <div className="h-[1px] w-full bg-white/20 mb-4"></div>
          {answer}
        </div>
      )}
    </div>
  );
}