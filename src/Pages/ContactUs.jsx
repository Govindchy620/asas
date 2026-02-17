import React, { useState } from 'react';
import { 
  Mail, 
  MessageSquare, 
  MapPin, 
  ShieldCheck, 
  Globe, 
  Activity, 
  CheckCircle2, 
  ArrowRight, 
  ChevronDown, 
  Terminal, 
  Monitor, 
  Zap, 
  Users, 
  Target, 
  Headphones, 
  HelpCircle, 
  Lock, 
  Phone, 
  Network, 
  Cpu, 
  Layers, 
  Search, 
  ExternalLink,
  Briefcase,
  Building,
  HeartHandshake,
  UserCheck,
  FileText,
  RefreshCw
} from 'lucide-react';

export default function ContactUs() {
  return (
    <div className="bg-[#020408] text-white font-sans selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* --- HERO: THE GLOBAL NERVE CENTER --- */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-32 overflow-hidden">
        {/* Geometric Technical Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b10_1px,transparent_1px),linear-gradient(to_bottom,#1e293b10_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#3b82f608,transparent_70%)]"></div>
          
          {/* Animated Communication Pulses */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 blur-[120px] rounded-full animate-pulse"></div>
          
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-10"
            alt="Global Network Hub"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-blue-500/30 bg-blue-500/10 backdrop-blur-md rounded-lg mb-8 animate-fade-in">
            <Terminal size={14} className="text-blue-400" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-blue-400">Communication Terminal v9.0-Active</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tight mb-6 uppercase italic">
            Contact <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-blue-200">Us</span>
          </h1>
          
          <p className="text-base md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light mb-8 uppercase tracking-widest italic font-mono">
            We Are Here to Support Your Trading Success
          </p>

          <div className="max-w-3xl mx-auto text-sm md:text-base text-white/90 leading-relaxed font-light mb-12 px-6 py-8 bg-white/[0.05] border border-white/20 rounded-3xl relative shadow-2xl backdrop-blur-sm">
             <div className="absolute top-0 left-0 w-12 h-1 bg-blue-500 rounded-tl-3xl"></div>
             <div className="absolute bottom-0 right-0 w-12 h-1 bg-blue-500 rounded-br-3xl"></div>
             FXCElite holds the view that top trading technology should be accompanied by top communication. Whether you want to understand the market better, require technical help, or are interested in our Partnership Programs, our staff is poised to assist you.
             <br/><br/>
             Experts of the trading platform at FXCElite are more than just a source of a response. We offer several ways to get in touch with forex broker support, so that regardless of which part of the world you are in, you are always just a few seconds away from an answer. Our forex broker customer service through various means of communication is designed as fast and reliable as our trade execution.
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="relative group">
              <div className="absolute -inset-1 bg-blue-600 rounded-2xl blur opacity-40 group-hover:opacity-80 transition duration-1000"></div>
              
            </div>
            <p className="text-blue-400 text-sm font-bold uppercase tracking-[0.2em] italic font-mono animate-pulse">
              [ Communication is the key to a better trading experience ]
            </p>
          </div>
        </div>
      </section>

      {/* --- SECTION 1: REACH THE TEAM --- */}
      <section className="py-24 relative border-y border-white/10 bg-white/[0.02] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
               <div className="space-y-6">
                 <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight leading-tight italic border-l-4 border-blue-600 pl-4">How to Reach the <br/> FXCElite Team</h2>
                 <div className="space-y-6 text-base text-white/80 leading-relaxed font-light italic">
                   <p>
                     Accessing the contact details of the appropriate forex broker should not be an issue for you. We have organized our contact channels to ensure your query reaches the appropriate department instantly.
                   </p>
                   <p className="text-white font-medium italic bg-white/10 p-5 border-l-2 border-blue-400 rounded-r-lg shadow-lg">
                     Whether you require customer support for online trading due to a technical concern or wish to contact forex broker representatives with respect to institutional services, you can utilize the directory below to obtain the fastest response.
                   </p>
                 </div>
               </div>
            </div>

            <div className="relative group lg:sticky lg:top-32">
               <div className="absolute inset-0 bg-blue-500/20 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <div className="relative border border-white/20 shadow-2xl bg-[#0a0f24] overflow-hidden rounded-3xl p-1">
                 <img 
                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1200" 
                    className="w-full h-[400px] object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 rounded-2xl"
                    alt="Corporate Support Terminal"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#020408] via-transparent to-transparent pointer-events-none"></div>
                 <div className="absolute bottom-6 left-6 right-6 p-6 bg-black/90 border border-white/20 backdrop-blur-xl shadow-xl rounded-xl">
                    <div className="flex items-center gap-3 mb-3">
                      <Network size={20} className="text-blue-500" />
                      <span className="text-white text-lg font-bold tracking-tight uppercase italic">Global Sync</span>
                    </div>
                    <p className="text-white/90 text-sm leading-relaxed font-medium italic">
                      "Fast and reliable as our trade execution. Regardless of where you are, an answer is just seconds away."
                    </p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: DIRECTORY (THE DATA BLADES) --- */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase italic leading-tight">Our Contact <br/> Details</h2>
            <p className="text-blue-400 text-sm font-bold uppercase tracking-[0.2em] font-mono">[ DIRECT_NODE_ACCESS ]</p>
            <p className="text-white/80 text-base max-w-2xl mx-auto font-light leading-relaxed italic pt-4">
              Use the following forex broker contact details online to connect with us directly:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { 
                title: "General Support & Inquiries", 
                desc: "For help with your Demo Account, platform navigation, or general questions.", 
                details: ["Email: support@fxcelite.com", "Live Chat: Available 24/5 via the icon at the bottom right."], 
                icon: <Globe /> 
              },
              { 
                title: "Technical Helpdesk", 
                desc: "For trading account support contact regarding MT5, WebTrader, or mobile app issues.", 
                details: ["Email: tech@fxcelite.com"], 
                icon: <Cpu /> 
              },
              { 
                title: "Partnership & IB Support", 
                desc: "For those looking to contact online trading platform support regarding our affiliate or IB programs.", 
                details: ["Email: partners@fxcelite.com"], 
                icon: <Briefcase /> 
              },
              { 
                title: "Corporate Headquarters", 
                desc: "For official correspondence and legal inquiries.", 
                details: ["Address: Financial District, St. Vincent & the Grenadines"], 
                icon: <Building /> 
              },
            ].map((item, i) => (
              <div key={i} className="group p-8 bg-white/[0.05] border border-white/10 hover:border-blue-600/50 transition-all duration-500 flex flex-col items-start relative overflow-hidden shadow-xl rounded-2xl">
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-125 transition-transform duration-700">
                   {React.cloneElement(item.icon, { size: 100, className: "text-white" })}
                </div>
                <div className="w-12 h-12 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-400 mb-6 border border-blue-500/30 group-hover:bg-blue-600 group-hover:text-white transition-all">
                   {React.cloneElement(item.icon, { size: 24 })}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-tight italic leading-tight relative z-10">{item.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed font-medium mb-6 border-b border-white/10 pb-6 relative z-10">{item.desc}</p>
                <div className="space-y-3 relative z-10 w-full">
                  {item.details.map((detail, idx) => (
                    <p key={idx} className="text-white font-mono text-xs italic bg-white/10 px-3 py-2 border-l-2 border-blue-500 rounded-r-md w-full">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 3: WHY GET IN TOUCH (PHOSPHOR BLOCKS) --- */}
      <section className="py-24 bg-white/[0.02] border-y border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8 space-y-10">
               <div className="space-y-4">
                 <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase leading-tight italic">Why Get in Touch <br/> with Our Team?</h2>
                 <p className="text-base text-white/80 italic leading-relaxed font-light max-w-2xl pt-4 border-l-2 border-blue-600 pl-4 font-mono">
                   We have optimized our trading platform contact page to cater to all types of traders:
                 </p>
               </div>

               <div className="grid md:grid-cols-2 gap-5">
                 {[
                   { t: "24/5 Availability", d: "Our contact trading support team operates on a schedule that matches the global markets.", icon: <Activity /> },
                   { t: "Multilingual Staff", d: "Forex broker customer support services are carried out in various major languages.", icon: <Globe /> },
                   { t: "Rapid Response", d: "We strive to reply to all emails within 2-4 hours on business days.", icon: <Zap /> },
                   { t: "Expert Solutions", d: "Talk to the people who really know about trading platform customer care.", icon: <UserCheck /> },
                 ].map((feature, i) => (
                   <div key={i} className="group p-6 bg-[#020408] border border-white/10 hover:bg-white/10 transition-all duration-500 relative shadow-xl rounded-2xl">
                      <div className="w-10 h-10 bg-blue-500/20 flex items-center justify-center text-blue-400 mb-4 border border-blue-500/30 group-hover:scale-110 transition-transform rounded-lg">
                        {React.cloneElement(feature.icon, { size: 20 })}
                      </div>
                      <h4 className="text-base font-bold text-white mb-2 uppercase tracking-tight italic leading-tight">{feature.t}</h4>
                      <p className="text-white/80 text-sm leading-relaxed font-light italic">{feature.d}</p>
                   </div>
                 ))}
               </div>
            </div>

            <div className="lg:col-span-4 lg:sticky lg:top-32">
               <div className="relative p-8 bg-black border border-white/20 shadow-[0_20px_60px_-15px_rgba(59,130,246,0.3)] group overflow-hidden rounded-3xl">
                  <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform duration-1000">
                    <Headphones size={100} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-6 tracking-tight uppercase border-b border-white/20 pb-4 italic">Support Access</h3>
                  <div className="space-y-6 relative z-10">
                     <p className="text-base text-blue-400 font-bold leading-tight italic uppercase">
                       Not ready for a live account? Open a Demo Account and test our support responsiveness!
                     </p>
                     <div className="text-sm text-white/80 leading-relaxed font-light italic">
                        <p>Experience the human side of high-frequency trading infrastructure.</p>
                     </div>
                     <button className="w-full py-4 bg-white text-black font-bold hover:bg-blue-600 hover:text-white transition-all text-sm uppercase tracking-tight italic shadow-lg rounded-xl">
                        Try Demo Account
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
            <p className="text-blue-400 text-sm font-bold uppercase tracking-[0.2em] font-mono">[ Connection Protocol Initiation ]</p>
            <p className="text-white/80 text-base font-light italic pt-4 max-w-2xl mx-auto">If you need to contact online trading platform support right now, follow these steps:</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 relative">
            <div className="absolute top-[30%] left-0 w-full h-[1px] bg-blue-500/30 hidden lg:block"></div>
            {[
              { n: "01", t: "Search the FAQ", d: "Common questions about Account Support are answered in our knowledge base.", icon: <Search /> },
              { n: "02", t: "Live Chat", d: "For urgent assistance, the instant chat feature on our website is available.", icon: <MessageSquare /> },
              { n: "03", t: "Create a Ticket", d: "If complex, address an email to our trading account support contact address.", icon: <FileText /> },
            ].map((step, i) => (
              <div key={i} className="group relative p-6 bg-white/[0.05] border border-white/10 hover:border-blue-500/50 transition-all duration-500 text-center shadow-xl rounded-3xl mt-8 lg:mt-0">
                 <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-black border-2 border-blue-500/50 flex items-center justify-center font-bold text-white text-sm group-hover:bg-blue-600 group-hover:text-white transition-all shadow-[0_0_15px_rgba(59,130,246,0.5)] rounded-full">
                    {step.n}
                 </div>
                 <div className="w-12 h-12 bg-blue-500/20 text-blue-400 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform mt-2 rounded-xl">
                   {React.cloneElement(step.icon, { size: 24 })}
                 </div>
                 <h4 className="text-lg font-bold text-white mb-2 tracking-tight leading-tight uppercase italic">{step.t}</h4>
                 <p className="text-sm text-white/80 leading-relaxed font-light italic">{step.d}</p>
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
                <div className="absolute inset-0 bg-indigo-500/20 blur-[80px] rounded-full opacity-50"></div>
                <div className="relative border border-white/20 shadow-2xl bg-black/60 backdrop-blur-2xl p-10 rounded-3xl space-y-8">
                   <div className="flex items-center gap-4 border-b border-white/10 pb-6 mb-6">
                      <Terminal className="text-indigo-400" size={32} />
                      <h2 className="text-3xl font-black text-white tracking-tight uppercase italic leading-none">Diagnostic <br/> HUD</h2>
                   </div>
                   <div className="grid gap-6">
                      {[
                        { t: "Connectivity Issues", d: "Ensuring your terminal is well connected to our high-speed trade servers.", icon: <Globe /> },
                        { t: "Order Execution Questions", d: "Margin of slippage, spread, fill price transparency provided.", icon: <Activity /> },
                        { t: "Software Updates", d: "Assist with the latest versions of our online trading helpdesk mobile and desktop apps.", icon: <RefreshCw /> }
                      ].map((item, idx) => (
                        <div key={idx} className="flex gap-5 group/item items-start">
                           <div className="p-3 bg-white/5 text-white/70 group-hover/item:text-indigo-400 group-hover/item:bg-indigo-500/20 transition-all rounded-lg shrink-0">
                              {React.cloneElement(item.icon, { size: 20 })}
                           </div>
                           <div className="space-y-1">
                             <h4 className="text-white font-bold uppercase text-sm italic tracking-tight">{item.t}</h4>
                             <p className="text-white/70 text-xs italic leading-relaxed">{item.d}</p>
                           </div>
                        </div>
                      ))}
                   </div>
                </div>
             </div>

             <div className="order-1 lg:order-2 space-y-8">
                <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase leading-[0.9] italic underline decoration-indigo-500 decoration-4 underline-offset-[8px]">Technical Issues: <br/> Trading Platform <br/> Troubleshooting</h2>
                <p className="text-base text-white/90 leading-relaxed font-light italic border-l-4 border-white/20 pl-6">
                  After all, even the best of technologies can sometimes have certain hiccups. Our forex trading helpdesk support is specially trained to handle them.
                </p>
                <div className="pt-6">
                   <div className="p-6 bg-white/[0.05] border border-white/10 flex items-center gap-6 group cursor-default rounded-2xl hover:bg-white/10 transition-colors">
                      <div className="shrink-0 w-16 h-16 bg-white flex items-center justify-center text-black font-black italic text-2xl shadow-lg group-hover:bg-indigo-500 group-hover:text-white transition-all rounded-xl">FIX</div>
                      <p className="text-white/80 text-sm font-light italic leading-relaxed">Systematic problem solving with human expertise. Your uptime is our metric of success.</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 6: TARGET AUDIENCE (IDENTITY TILES) --- */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase italic leading-tight">Who is the <br/> Helpdesk For?</h2>
            <p className="text-indigo-400 text-sm font-bold uppercase tracking-[0.2em] font-mono">Strategic Support Profiles</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
            //   { l: "New Traders", d: "Who need to get assistance on the basics of their trading accounts and navigation of the trading platforms.", icon: <Sparkles /> },
              { l: "Pro Traders", d: "Advanced technical support, trading for automated systems.", icon: <Terminal /> },
              { l: "MAM/PAMM Managers", d: "Looking for customer service for trading platforms to manage multiple accounts.", icon: <Layers /> },
              { l: "Affiliates", d: "Those who need help with their IB Dashboard or tracking links.", icon: <Globe /> }
            ].map((item, i) => (
              <div key={i} className="group relative p-6 bg-white/[0.02] border border-white/10 hover:border-indigo-500/40 transition-all duration-500 text-center shadow-xl rounded-2xl">
                  <div className="w-14 h-14 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center mx-auto mb-5 border border-white/10 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                    {React.cloneElement(item.icon, { size: 24 })}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 tracking-tight leading-tight uppercase italic">{item.l}</h4>
                  <p className="text-sm text-white/80 leading-relaxed font-medium italic">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 7: FINAL CTA (MISSION STATEMENT) --- */}
      <section className="py-24 bg-black text-center relative overflow-hidden border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 space-y-10">
           <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase leading-tight italic underline decoration-white/20 decoration-4 underline-offset-[8px]">Why FXCElite Offers the <br/> Best Trading Support?</h2>
           <p className="text-base md:text-lg text-white/90 leading-relaxed font-light italic max-w-3xl mx-auto bg-white/5 p-6 rounded-2xl border border-white/10">
             With our focus on human expertise and trading platform support services, FXCElite offers a trading help desk that listens. No robots for us; only human professionals who understand the importance of urgency with the Forex market.
           </p>
           <div className="pt-6 flex flex-col items-center gap-6">
              <div className="relative group">
                <div className="absolute -inset-2 bg-indigo-600 rounded-2xl blur opacity-40 group-hover:opacity-80 transition duration-1000"></div>
                
              </div>
              <div className="space-y-4">
                <p className="text-indigo-400 font-bold uppercase tracking-[0.3em] text-xs italic font-mono max-w-xl mx-auto">Your success is our mission. Experience the best support!</p>
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
      <section className="py-24 border-t border-white/10 bg-[#020408]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight uppercase italic font-mono underline decoration-indigo-600 decoration-4 underline-offset-[8px]">[ SUPPORT FAQ ]</h2>
            <p className="text-white/80 font-bold uppercase tracking-widest text-sm italic font-mono pt-4">Node Intelligence Archive</p>
          </div>
          
          <div className="space-y-4">
            {[
              { q: "1. What are the Helpdesk hours?", a: "Our forex broker support is available 24 hours a day, 5 days a week, coinciding with global market hours." },
              { q: "2. How do I get assistance with my trading account?", a: "Please reach us via live chat on our website, email, or call our dedicated trading helpdesk lines." },
              { q: "3. Is technical support provided for MT5?", a: "Yes, technical support trading is provided for all our platforms, including MetaTrader 5 and WebTrader." },
              { q: "4. Can helpdesk advise me on trading?", a: "No, our customer service provides technical and account assistance only. We do not provide financial advice." },
              { q: "5. How long does it take to get a response?", a: "Live chat is usually immediate, while online trading customer support via e-mail can take a few hours." },
              { q: "6. Is the trading helpdesk available in different languages?", a: "Yes. Our helpdesk service is available in different major languages to facilitate our international clients." },
              { q: "7. What should I do if I have technical issues?", a: "Check your internet connection first. If it continues, contact us immediately at the live chat facility." },
              { q: "8. Is there a fee associated with support?", a: "All trading platform support services are offered free to all FXCElite clients." },
              { q: "9. Can you help with my withdrawal request?", a: "Absolutely. Our trading account support is available to assist with the status of your funds." },
              { q: "10. Where is the best place for beginners to get help?", a: "We recommend our live chat for quick questions, or visit our FAQ section for comprehensive guides." },
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
    <div className={`rounded-xl transition-all duration-500 overflow-hidden border border-white/10 ${
      isOpen ? 'bg-[#0a0f24] shadow-lg border-blue-500/30' : 'bg-transparent hover:bg-white/5'
    }`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left group"
      >
        <span className={`font-bold text-sm md:text-base transition-colors tracking-tight uppercase italic ${isOpen ? 'text-white' : 'text-white/90 group-hover:text-white'}`}>
          {question}
        </span>
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-500 ml-4 ${
          isOpen ? 'bg-blue-600 text-white rotate-180 shadow-[0_0_15px_#2563eb]' : 'bg-white/10 text-white/80 group-hover:bg-white/20'
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