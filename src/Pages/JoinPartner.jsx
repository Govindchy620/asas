import React, { useState } from 'react';
import { 
  Users, 
  TrendingUp, 
  Shield, 
  Zap, 
  ArrowRight, 
  ChevronDown, 
  Globe, 
  Layout, 
  Network, 
  Target, 
  Crown, 
  Sparkles, 
  Activity, 
  Layers, 
  FileText, 
  Lock, 
  Smartphone,
  Megaphone,
  Briefcase,
  SearchCode,
  BadgePercent,
  Award,
  Star,
  DollarSign,
  Rocket,
  Share2,
  Cpu
} from 'lucide-react';

export default function JoinPartner() {
  return (
    <div className="bg-[#000000] text-white font-sans selection:bg-amber-500/30 overflow-x-hidden">
      
      {/* --- HERO: THE SOVEREIGN GATEWAY --- */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-32 overflow-hidden">
        {/* Background Visuals */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#7e22ce10,transparent_70%)]"></div>
          <div className="absolute -top-20 -right-20 w-[800px] h-[800px] bg-amber-500/10 blur-[160px] rounded-full"></div>
          
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-10 scale-110"
            alt="Corporate Excellence"
          />
          
          {/* Angular Geometric Shards */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_45%,#d4af37_45%,#d4af37_46%,transparent_46%)] bg-[length:100px_100px]"></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border-l-2 border-amber-500 bg-amber-500/10 mb-8 animate-fade-in">
            <Award size={14} className="text-amber-400" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-amber-400 italic">Sovereign Alliance Program 2026</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tight mb-6 italic uppercase">
            Forex Partner <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-white to-purple-400">Program</span>
          </h1>
          
          <p className="text-base md:text-xl text-white/90 max-w-5xl mx-auto leading-relaxed font-light mb-8 uppercase tracking-widest font-serif">
            Next-Level Business Growth
          </p>

          <div className="max-w-3xl mx-auto text-sm md:text-base text-white/90 leading-relaxed font-light mb-12 px-6 py-8 border border-white/20 bg-white/[0.05] backdrop-blur-3xl relative shadow-2xl rounded-2xl group overflow-hidden">
             <div className="absolute -top-px -left-px w-6 h-6 border-t-2 border-l-2 border-amber-500"></div>
             <div className="absolute -bottom-px -right-px w-6 h-6 border-b-2 border-r-2 border-purple-500"></div>
             <p className="mb-4">
               The journey to financial freedom is, in most cases, the result of partnering with the right people. The moment you decide to become a forex partner with FXCElite, you are choosing to be on the same side as a globally regulated broker that is determined to provide their clients with trading environments that convert highly.
             </p>
             <p>
               We present to you a broker partnership program with multiple tiers that can help you make money from your network. Our program offers instant commission payouts, advanced tracking, and a dedicated support team. You entitle yourself to a world-class partnership that will reward your influence with the most competitive rebates and CPA rates.
             </p>
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="relative group">
              <div className="absolute -inset-1 bg-amber-500 blur opacity-40 group-hover:opacity-80 transition duration-1000"></div>
              <button className="relative px-10 py-4 bg-white text-black font-bold text-base md:text-lg transition-all hover:bg-amber-400 active:scale-95 shadow-xl uppercase tracking-tight italic flex items-center gap-2 rounded-xl">
                Apply to Become a Partner <ArrowRight size={20} className="ml-2" />
              </button>
            </div>
            <p className="text-amber-400 text-sm font-bold uppercase tracking-[0.2em] italic animate-pulse">
              Turn your network into a business. Unlock your earning potential!
            </p>
          </div>
        </div>
      </section>

      {/* --- SECTION 1: THE PRISMATIC VAULT --- */}
      <section className="py-24 relative border-y border-white/10 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight italic leading-tight">Forex Affiliate vs. <br/> IB Program</h2>
            <p className="text-purple-400 text-sm font-bold uppercase tracking-[0.2em] font-mono">Which One is Your Fit?</p>
            <p className="text-white/80 text-base max-w-2xl mx-auto font-light italic mt-4">
              Understanding the difference is crucial for optimizing your revenue model. We support both pathways, allowing you to choose the one that aligns with your style.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-px bg-white/20 border border-white/20 shadow-2xl rounded-2xl overflow-hidden">
            {/* Affiliate Column */}
            <div className="p-10 bg-[#000000] relative group overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
                 <Globe size={150} className="text-purple-500" />
               </div>
               <h3 className="text-3xl font-black text-purple-400 uppercase italic tracking-tight mb-8 border-b border-white/20 pb-4">Forex Affiliate</h3>
               <div className="space-y-6 relative z-10">
                  {[
                    { l: "Best For", v: "Bloggers, SEO Specialists, Influencers" },
                    { l: "Earnings Model", v: "One-time CPA (Cost Per Acquisition)" },
                    { l: "Relationship", v: "Digital-first / Anonymous traffic" },
                    { l: "Focus", v: "High conversion and lead volume" },
                    { l: "Primary Goal", v: "Fast, upfront commissions" }
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col gap-1">
                       <span className="text-[10px] text-white/50 uppercase tracking-[0.2em] font-bold">{item.l}</span>
                       <span className="text-base text-white font-medium italic">{item.v}</span>
                    </div>
                  ))}
               </div>
            </div>
            {/* IB Column */}
            <div className="p-10 bg-[#000000] relative group overflow-hidden border-t lg:border-t-0 lg:border-l border-white/20">
               <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
                 <Network size={150} className="text-amber-500" />
               </div>
               <h3 className="text-3xl font-black text-amber-400 uppercase italic tracking-tight mb-8 border-b border-white/20 pb-4">Introducing Broker</h3>
               <div className="space-y-6 relative z-10">
                  {[
                    { l: "Best For", v: "Educators, Signal Providers, Fund Managers" },
                    { l: "Earnings Model", v: "Recurring Rebates (per Lot traded)" },
                    { l: "Relationship", v: "Direct client support & management" },
                    { l: "Focus", v: "Client retention and trading longevity" },
                    { l: "Primary Goal", v: "Long-term, sustainable passive income" }
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col gap-1">
                       <span className="text-[10px] text-white/50 uppercase tracking-[0.2em] font-bold">{item.l}</span>
                       <span className="text-base text-white font-medium italic">{item.v}</span>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: WHY CHOOSE (THE GEOMETRIC MONOLITHS) --- */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase italic leading-tight mb-6 border-l-4 border-amber-500 pl-4">Why Choose the <br/> FXCElite Program?</h2>
              <p className="text-base text-white/90 italic leading-relaxed font-light">
                We have developed the best forex partnership program by maintaining the three fundamental pillars of success: Technology, Trust, and Transparency.
              </p>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-purple-500/20 blur-[80px] rounded-full"></div>
              <img 
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1200" 
                className="w-full h-[350px] object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 border border-white/20 rounded-2xl shadow-2xl"
                alt="Fintech Strategy"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 shadow-xl rounded-xl overflow-hidden">
            {[
              { title: "High Rebates", desc: "Get ongoing commissions from each transaction by referred customers, with no limits.", icon: <TrendingUp /> },
              { title: "Tiered Affiliates", desc: "Access a flexible affiliate program with lucrative CPA commissions that rise with qualified traders.", icon: <BadgePercent /> },
              { title: "Advanced Portal", desc: "Control all facets of your business through a single dashboard with real-time reporting.", icon: <Layout /> },
              { title: "Marketing Support", desc: "A complete toolkit of high-converting banners, landing pages, and educational content.", icon: <Megaphone /> },
              { title: "Multi-Tier", desc: "Create a tier system of sub-partners and receive override income based on their volume.", icon: <Network /> },
              { title: "Infrastructure", desc: "Our program offers features the 2026 market requires with instant commission payouts.", icon: <Zap /> },
            ].map((item, i) => (
              <div key={i} className="group p-8 bg-[#000000] hover:bg-white/5 transition-all duration-500 flex flex-col items-start relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-125 transition-transform duration-700">
                   {React.cloneElement(item.icon, { size: 100, className: "text-amber-500" })}
                </div>
                <div className="w-12 h-12 bg-amber-500/20 flex items-center justify-center text-amber-400 mb-6 border border-white/20 group-hover:bg-amber-500 group-hover:text-black transition-all rounded-xl relative z-10">
                   {React.cloneElement(item.icon, { size: 24 })}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-tight italic leading-tight relative z-10">{item.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed font-light italic relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 3: HOW TO BECOME (THE GOLDEN THREAD) --- */}
      <section className="py-24 bg-white/[0.02] border-y border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8 space-y-16">
               <div className="space-y-4">
                 <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase leading-tight italic underline decoration-purple-600 decoration-4 underline-offset-[8px]">How to Become an <br/> Introducing Broker</h2>
                 <p className="text-base text-white/80 italic leading-relaxed font-light max-w-2xl pt-4">
                   Launching your online trading partnership with FXCElite is a streamlined and professional process:
                 </p>
               </div>

               <div className="space-y-12 relative pl-8 md:pl-0">
                 {/* The Vertical Thread */}
                 <div className="absolute top-0 left-[22px] md:left-8 w-px h-full bg-gradient-to-b from-amber-500 via-purple-500 to-amber-500"></div>

                 {[
                   { n: "01", t: "Register", d: "Register via our portal and decide on an option between affiliate or introducing broker.", icon: <FileText /> },
                   { n: "02", t: "Verify", d: "Fill out the quick KYC process for your individual or business entity.", icon: <Shield /> },
                   { n: "03", t: "Promote", d: "Use tracking links and marketing materials to begin referring traders.", icon: <Globe /> },
                   { n: "04", t: "Earn", d: "Get real-time tracking on your commissions and fast, reliable payouts.", icon: <DollarSign /> },
                 ].map((step, i) => (
                   <div key={i} className="group flex flex-col md:flex-row gap-6 md:gap-12 items-start relative">
                      <div className="shrink-0 w-12 h-12 bg-black border-2 border-amber-500 flex items-center justify-center font-bold text-white text-lg shadow-[0_0_20px_rgba(212,175,55,0.4)] z-10 rounded-full md:w-16 md:h-16 md:text-2xl absolute -left-[24px] md:static">
                        {step.n}
                      </div>
                      <div className="space-y-3 pt-2 md:pt-0">
                        <div className="inline-flex p-3 bg-purple-500/20 text-purple-400 group-hover:scale-110 transition-transform rounded-xl">
                          {React.cloneElement(step.icon, { size: 20 })}
                        </div>
                        <h4 className="text-xl font-bold text-white uppercase tracking-tight italic leading-tight">{step.t}</h4>
                        <p className="text-white/80 text-sm leading-relaxed font-light italic">{step.d}</p>
                      </div>
                   </div>
                 ))}
               </div>
            </div>

            <div className="lg:col-span-4 lg:sticky lg:top-32">
               <div className="relative p-8 bg-[#050505] border-2 border-amber-500 shadow-[0_0_50px_-10px_rgba(212,175,55,0.3)] overflow-hidden group rounded-3xl">
                  <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform duration-1000">
                    <Crown size={100} className="text-amber-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-6 tracking-tight uppercase border-b border-white/20 pb-4 italic">Alliance Hub</h3>
                  <div className="space-y-6 relative z-10">
                     <p className="text-base text-amber-400 font-bold leading-tight italic uppercase">
                       Experience institutional-grade support. Sign Up as a Partner and get a dedicated manager.
                     </p>
                     <div className="text-sm text-white/80 leading-relaxed font-light italic">
                        <p>Our brokerage program is not just about the first deposit. It’s about earning commission for the lifetime of your clients' journey.</p>
                     </div>
                     <button className="w-full py-4 bg-white text-black font-bold hover:bg-amber-400 transition-all text-sm uppercase tracking-tight italic rounded-xl shadow-lg">
                        Sign Up as a Partner
                     </button>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: EXPLAINED (PILLARS OF SUCCESS) --- */}
      <section className="py-24 relative bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div className="order-2 lg:order-1 relative group">
                <div className="absolute inset-0 bg-purple-500/20 blur-[80px] rounded-full opacity-50"></div>
                <div className="relative border border-white/20 shadow-2xl overflow-hidden rounded-3xl p-1 bg-[#0a0a0a]">
                   <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
                    className="w-full h-[400px] object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 rounded-2xl"
                    alt="Corporate Success"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black via-[#00000088] to-transparent pointer-events-none"></div>
                   <div className="absolute bottom-6 left-6 right-6 p-6 bg-black/90 backdrop-blur-xl border border-white/20 rounded-xl shadow-xl">
                      <p className="text-amber-400 text-base font-bold italic mb-3">"Your success will be tied to the quality of broker you represent."</p>
                      <p className="text-white/90 text-sm italic leading-relaxed">Promoting an organization recognized for tight spreads, fast execution, and safe funds management.</p>
                   </div>
                </div>
             </div>

             <div className="order-1 lg:order-2 space-y-8">
                <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase leading-tight italic">Partner Program <br/> Explained</h2>
                <p className="text-purple-400 text-sm font-bold uppercase tracking-[0.2em] font-mono">[ Pillars of Success ]</p>
                <div className="space-y-6 text-base text-white/90 leading-relaxed font-light italic border-l-4 border-purple-500 pl-6 bg-white/5 p-6 rounded-r-2xl">
                  <p>If you are new to the industry, then the forex partner program explained is simple: you are essentially acting as the bridge between the trader and the marketplace. Through the partnership of FXCElite, you will be promoting an organization that is recognized for having those key elements which convert leads to active and loyal traders.</p>
                  <p>Our brokerage partnership program is not just about the first deposit. It’s about earning commission as a forex partner for the lifetime of your clients' trading journey. We give you the education tools and trading signals that keep your clients active, which means your income is sustainable.</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 5: BENEFICIARIES (SOVEREIGN CARDS) --- */}
      <section className="py-24 border-y border-white/10 bg-[#050505] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase italic leading-tight">Who Can Benefit <br/> From Our Partnership?</h2>
            <p className="text-amber-400 text-sm font-bold uppercase tracking-[0.2em] font-mono">Dynamic Revenue Profiles</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { l: "Trading Educators", d: "Scale your mentorship business by becoming an IB-partner Forex.", icon: <Award /> },
              { l: "SEO & Webmasters", d: "Monetize your finance traffic with our high-CPA affiliate program.", icon: <SearchCode /> },
              { l: "Social Influencers", d: "Turn your followers into a community of traders and earn commissions.", icon: <Users /> },
              { l: "EA & Bot Developers", d: "Integrate automated software with our IB program to earn rebates.", icon: <Cpu /> }
            ].map((item, i) => (
              <div key={i} className="group relative p-6 bg-white/[0.05] border border-white/10 hover:border-amber-500 transition-all duration-500 text-center shadow-xl overflow-hidden rounded-3xl">
                 <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-125 transition-transform duration-700">
                   {React.cloneElement(item.icon, { size: 60, className: "text-white" })}
                 </div>
                 <div className="w-16 h-16 bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto mb-6 border border-amber-500/30 group-hover:bg-amber-400 group-hover:text-black transition-all rounded-2xl relative z-10">
                   {React.cloneElement(item.icon, { size: 28 })}
                 </div>
                 <h4 className="text-lg font-bold text-white mb-3 tracking-tight leading-tight uppercase italic relative z-10">{item.l}</h4>
                 <p className="text-sm text-white/80 leading-relaxed font-light italic relative z-10">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 6: THE FINAL NUCLEUS (SOVEREIGN CTA) --- */}
      <section className="py-24 bg-black text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 space-y-10">
           <h2 className="text-3xl md:text-6xl font-black text-white tracking-tight uppercase leading-tight italic">Why is FXCElite the <br/> <span className="text-amber-500 underline decoration-white decoration-4">Best Choice</span>?</h2>
           <p className="text-base md:text-lg text-white/90 leading-relaxed font-light italic max-w-3xl mx-auto bg-white/5 p-6 rounded-2xl border border-white/10">
             With institutional-grade liquidity, a huge range of tradable assets, Forex, Metals, Indices, Crypto, and a commitment to partner success, FXCElite is the best forex partnership program for the serious professional. We provide a platform, but we also offer a relationship that grows with you.
           </p>
           <div className="pt-6 flex flex-col items-center gap-6">
              <div className="relative group">
                <div className="absolute -inset-2 bg-amber-500 rounded-2xl blur opacity-40 group-hover:opacity-80 transition duration-1000"></div>
                <button className="relative px-12 py-5 bg-white text-black font-bold text-lg transition-all shadow-[0_15px_40px_-15px_rgba(212,175,55,0.5)] uppercase tracking-tight italic rounded-xl hover:-translate-y-1">
                  Join the Partner Program
                </button>
              </div>
              <div className="space-y-4">
                <p className="text-amber-400 font-bold uppercase tracking-[0.2em] text-xs italic font-mono max-w-xl mx-auto">Ready to lead the market? Start your journey to 6-figure earnings!</p>
                <div className="flex justify-center gap-3">
                   <div className="w-8 h-[2px] bg-white/20"></div>
                   <div className="w-16 h-[2px] bg-amber-500 animate-pulse"></div>
                   <div className="w-8 h-[2px] bg-white/20"></div>
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* --- SECTION 7: FAQ (CRYSTALLINE ACCORDION) --- */}
      <section className="py-24 border-t border-white/10 bg-[#030303]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight uppercase italic font-mono underline decoration-purple-600 decoration-4 underline-offset-[8px]">[ SOVEREIGN FAQ ]</h2>
            <p className="text-white/80 font-bold uppercase tracking-widest text-sm italic font-mono pt-4">Expert Alliance Knowledge Base</p>
          </div>
          
          <div className="space-y-px bg-white/20 border border-white/20 shadow-xl rounded-2xl overflow-hidden">
            {[
              { q: "1. What is a Forex partner?", a: "A forex partner is an entity or person who refers clients to a broker like FXCElite in consideration of commissions or rebates." },
              { q: "2. How do I earn commission as a forex partner?", a: "Earning is through CPA (a fixed price per client), or an IB model (where rebates are made depending on the volume of the trade)." },
              { q: "3. Is there a fee to join the introducing broker program?", a: "No, registration for the FXCElite Forex partnership program is completely free." },
              { q: "4. What is the difference between a forex affiliate vs. IB program?", a: "Affiliates typically specialize in digital marketing and are paid by one-time CPA fees, while IBs focus on client relations with ongoing rebate payments." },
              { q: "5. Can I refer other partners to the program?", a: "Yes, of course! Our program offers a multi-level structure, in which you also earn from your sub-IBs." },
              { q: "6. Do I need a financial license to become a Forex partner?", a: "Requirements differ based on area. In some areas, you can be an affiliate or IB without a license; however, this depends on local regulations." },
              { q: "7. How do I track my earnings?", a: "You will have access to a sophisticated dashboard where you can get real-time data on all clicks and commissions." },
              { q: "8. Will FXCElite provide marketing materials?", a: "Yes, we offer high converting banners, pages, and email templates to help you become an introducing broker successfully." },
              { q: "9. When are partner commissions paid?", a: "Flexible and reliable payout schedules, generally on a monthly or a bi-weekly basis, depending on your volume." },
              { q: "10. How do I start?", a: "Just click on the \"Become a Partner\" button, fill in the form, and a partner manager will be in touch with you." },
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
      isOpen ? 'bg-[#101010] hover:bg-[#1a1a1a]' : 'bg-white/[0.02] hover:bg-white/[0.05]'
    }`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left group"
      >
        <span className={`font-bold text-sm md:text-base transition-colors tracking-tight uppercase italic ${isOpen ? 'text-amber-400' : 'text-white/90 group-hover:text-white'}`}>
          {question}
        </span>
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-500 ml-4 ${
          isOpen ? 'bg-amber-500 text-black rotate-180 shadow-[0_0_15px_#d4af37]' : 'bg-white/10 text-white/80 group-hover:bg-white/20'
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