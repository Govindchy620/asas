import React, { useState } from 'react';
import { 
  Network, 
  Zap, 
  Shield, 
  TrendingUp, 
  Layers, 
  Globe, 
  Activity, 
  CheckCircle2, 
  ArrowRight, 
  ChevronDown, 
  Smartphone, 
  Lock, 
  RefreshCw,
  Briefcase,
  Users,
  Target,
  BadgePercent,
  Settings,
  Database,
  Cpu,
  Server,
  FileText
} from 'lucide-react';

export default function MamAccount() {
  return (
    <div className="bg-[#080a0f] text-slate-300 font-sans selection:bg-amber-500/30 overflow-x-hidden">
      
      {/* --- HERO: ARCHITECTURAL HUB --- */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-2 pb-3 overflow-hidden">
        {/* Blueprint Grid Background */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:120px_120px]"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#080a0f] to-[#080a0f]"></div>
        
        {/* Thematic Imagery */}
        <img 
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" 
          className="absolute inset-0 w-full h-full object-cover opacity-[0.08] grayscale"
          alt="Manager Command Center"
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-sm border-l-2 border-amber-500 bg-amber-500/5 backdrop-blur-md mb-8 animate-fade-in">
              <Network size={14} className="text-amber-500" />
              <span className="text-xs font-normal uppercase tracking-[0.4em] text-amber-500">Block Execution Engine v5.0</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-normal text-white leading-[1.1] tracking-tight mb-6 uppercase italic">
              MAM Trading <br/> <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-400 to-amber-500/40 text-glow-amber">Account</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light mb-8 uppercase tracking-widest italic">
              The Ultimate Multi-Account Management Solution
            </p>

            <div className="max-w-3xl mx-auto text-base md:text-lg text-slate-400 leading-relaxed font-light mb-12 px-8 py-6 border border-white/5 bg-white/[0.02] backdrop-blur-sm relative">
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-amber-500/50"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-amber-500/50"></div>
              Efficiency is the master word to scale a business whether you are a professional fund manager or an investment firm. A MAM trading account (Multi-Account Manager) refers to a particular software integration that permits a single trader to perform block trades across an unlimited number of client accounts simultaneously.
            </div>

            <div className="flex flex-col items-center gap-6">
              <div className="group relative">
                <button 
                  onClick={() => window.open('https://trade.FXCELITE.com/login', '_blank')}
                  className="relative px-12 py-5 bg-amber-500 text-black font-normal text-lg uppercase tracking-tight hover:bg-white transition-all active:scale-95 shadow-[0_15px_40px_-15px_rgba(245,158,11,0.4)]">
                  Apply for a MAM Account
                </button>
                <div className="absolute -inset-1 border border-amber-500/20 group-hover:-inset-2 transition-all"></div>
              </div>
              <p className="text-amber-500 text-sm font-normal uppercase tracking-[0.2em] italic animate-pulse">
                Manage global capital with institutional-grade technology!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- DEFINITION: THE CORE LOGIC --- */}
      <section className="py-24 relative bg-white/[0.01] border-y border-white/5 overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-[0.02] rotate-45">
           <Network size={300} />
        </div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
               <h2 className="text-3xl md:text-4xl font-normal text-white uppercase tracking-tight leading-tight italic underline decoration-amber-500/50 underline-offset-4">What is a MAM <br/> Account in Forex?</h2>
               <div className="space-y-6 text-base text-slate-400 leading-relaxed font-light">
                 <p>
                   At FXCELITE, we have prepared our MAM account forex trading solution to equip professional money managers with the accuracy, adaptability, and clarity that managing large-scale capital can be done effortlessly.
                 </p>
                 <p>
                   Our MAM trading platform serves as a connecting link between your master strategy and your investors' sub accounts. Contrary to traditional systems, our multi account manager trading software enables proportional equity allocation so each investor gets their portion of the profits accurately depending on their individual balance.
                 </p>
                 <p>
                   A MAM account forex trading setup is one of the advanced versions of the PAMM model. Though both permit managed trading, a MAM trading solution offers a manager higher flexibility. With the same money, it permits different allocation methods like Lot, Percentage, or Proportional. It allows the holder of the money manager's trading account total control over how the trades are distributed.
                 </p>
               </div>
            </div>

            <div className="relative group lg:sticky lg:top-32">
               <div className="relative p-1 rounded-sm bg-gradient-to-br from-amber-500/40 to-slate-800 shadow-2xl">
                 <div className="bg-[#080a0f] p-1 overflow-hidden rounded-sm relative">
                   <img 
                      src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop" 
                      className="w-full h-[400px] object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                      alt="Allocation Engine Dashboard"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#080a0f] via-transparent to-transparent"></div>
                 </div>
                 <div className="absolute bottom-6 left-6 right-6 p-6 bg-black/90 border border-amber-500/30 backdrop-blur-xl shadow-xl">
                    <p className="text-slate-300 text-sm leading-relaxed font-medium italic">
                      "In the Forex MAM account, each sub-account remains independent; all are connected to the Master's terminal. This guarantees that when a manager opens a trade, it will be opened instantly across the whole 'pool' of capital."
                    </p>
                    <div className="mt-4 flex items-center gap-3">
                       <div className="h-[2px] w-8 bg-amber-500"></div>
                       <span className="text-amber-500 font-normal uppercase tracking-widest text-[10px]">Zero Latency Fill Guarantee</span>
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE: RACK-MOUNT MODULES --- */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-2xl space-y-4">
              <h2 className="text-3xl md:text-5xl font-normal text-white tracking-tight uppercase leading-tight italic">Why Choose FXCELITE <br/> for MAM Trading?</h2>
              <p className="text-amber-500 text-sm font-normal uppercase tracking-[0.2em]">Scaling Technical Needs</p>
              <p className="text-slate-500 text-base font-light">We provide the best MAM account for forex trading by focusing on the technical needs of professional managers.</p>
            </div>
            <div className="hidden lg:flex items-center gap-2 font-mono text-slate-700 text-xs">
               <span className="animate-pulse">[ STATUS: STABLE ]</span>
               <span className="animate-pulse delay-75">[ NODE: MASTER ]</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { title: "MAM Trading Platform", desc: "Completely integrated with MT4 and MT5 trading platforms for block order trading.", icon: <Server /> },
              { title: "Unlimited Sub-Accounts", desc: "Grow your business from 10 to 1,000+ investors without sacrificing performance.", icon: <Users /> },
              { title: "Account For Fund Managers", desc: "Create your own unique fee structures such as performance, management, and commission fees.", icon: <Briefcase /> },
              { title: "Real-Time Reporting", desc: "Both managers and investors are able to receive real-time reporting on their own dashboards.", icon: <Activity /> },
              { title: "Deep Liquidity", desc: "Trade large lot sizes with minimal slippage via our institutional liquidity bridge.", icon: <Database /> },
            ].map((item, i) => (
              <div key={i} className="group p-6 rounded-sm bg-white/[0.02] border border-white/5 border-l-amber-500/20 border-l-2 hover:border-l-amber-500 hover:bg-white/[0.04] transition-all duration-300 flex flex-col items-start relative shadow-lg">
                <div className="w-10 h-10 bg-amber-500/5 border border-amber-500/10 flex items-center justify-center text-amber-500 mb-5 group-hover:bg-amber-500 group-hover:text-black transition-all">
                   {React.cloneElement(item.icon, { size: 20 })}
                </div>
                <h3 className="text-base font-normal text-white mb-2 uppercase tracking-tight leading-tight italic">{item.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FEATURES: CIRCUITRY CARDS --- */}
      <section className="py-24 border-y border-white/5 bg-[#0a0c14]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8 space-y-10">
               <div className="space-y-4">
                 <h2 className="text-3xl md:text-5xl font-normal text-white tracking-tight uppercase leading-tight italic">Key Features of the <br/> MAM Trading Solution</h2>
                 <p className="text-base text-slate-500 italic leading-relaxed font-light">
                   Our MAM trading solution for fund managers is packed with advanced features to streamline your operations.
                 </p>
               </div>

               <div className="grid md:grid-cols-2 gap-5">
                 {[
                   { t: "Flexible Allocation Methods", d: "Choose from 6+ allocation styles such as Proportional by Equity, Lot, Percent, etc.", icon: <Settings /> },
                   { t: "Partial Close Support", d: "Control risk efficiently through closing partial positions in all sub-accounts simultaneously.", icon: <Lock /> },
                   { t: "Expert Advisor Compatibility", d: "Execute your automated trading programs across accounts without experiencing any lag.", icon: <Cpu /> },
                   { t: "Direct Market Access", d: "Every trade goes directly to the interbank market, providing a secure environment.", icon: <Globe /> },
                   { t: "Transparent Fee Management", d: "Automate the calculation and payment of the manager fees to your account.", icon: <BadgePercent /> },
                 ].map((feature, i) => (
                   <div key={i} className="group p-6 bg-white/[0.02] border border-white/5 hover:border-amber-500/40 transition-all duration-300 relative rounded-xl">
                      <div className="absolute top-3 right-3">
                         <div className="w-1.5 h-1.5 rounded-full bg-amber-500 group-hover:animate-ping opacity-50"></div>
                      </div>
                      <div className="w-10 h-10 bg-amber-500/10 flex items-center justify-center text-amber-500 mb-5 group-hover:scale-110 transition-transform rounded-lg">
                        {React.cloneElement(feature.icon, { size: 20 })}
                      </div>
                      <h4 className="text-base font-normal text-white mb-2 uppercase tracking-tight italic">{feature.t}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed font-light italic">{feature.d}</p>
                   </div>
                 ))}
               </div>
            </div>

            <div className="lg:col-span-4 lg:sticky lg:top-32">
               <div className="relative p-8 bg-black border border-white/5 shadow-2xl overflow-hidden group rounded-2xl">
                  <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:scale-110 transition-transform duration-1000">
                    <Database size={100} />
                  </div>
                  <h3 className="text-xl font-normal text-white mb-6 tracking-tight uppercase border-b border-white/10 pb-4">Sandbox Mode</h3>
                  <div className="space-y-6">
                     <p className="text-base text-amber-500 font-normal leading-relaxed italic">
                       Not ready to manage live funds? Open a Demo Account to test the MAM software interface first.
                     </p>
                     <p className="text-slate-500 text-sm font-light leading-relaxed">
                        Familiarize yourself with block execution and allocation methods in a risk-free environment.
                     </p>
                     <button 
                        onClick={() => window.open('https://trade.FXCELITE.com/register', '_blank')}
                        className="w-full py-4 bg-white text-black font-black hover:bg-amber-500 transition-all text-sm uppercase tracking-tight rounded-xl shadow-lg shadow-amber-500/10">
                        Open Demo Account
                     </button>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- MAM VS PAMM: TECHNICAL SPEC --- */}
      <section className="py-24 bg-black relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-3">
             <h2 className="text-3xl md:text-5xl font-normal text-white tracking-tight uppercase leading-tight">MAM vs. PAMM</h2>
             <p className="text-amber-500 text-sm font-normal uppercase tracking-[0.2em] italic underline decoration-amber-500/50 underline-offset-4">Which is Right for You?</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
             <div className="p-8 md:p-10 bg-black space-y-6">
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 rounded-xl">
                      <Settings size={24} />
                   </div>
                   <h3 className="text-2xl font-normal text-white uppercase italic">MAM Account</h3>
                </div>
                <div className="text-base text-slate-400 leading-relaxed font-light space-y-6 italic">
                   <p>More control is possible with MAM, and managers can adjust risk for individual sub-accounts and use different lot sizes.</p>
                   <div className="p-4 bg-amber-500/5 border-l-2 border-amber-500 text-amber-500 font-black uppercase text-xs tracking-widest rounded-r-xl">
                      Professional choice for active managers
                   </div>
                </div>
             </div>
             <div className="p-8 md:p-10 bg-black space-y-6">
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 bg-slate-800/50 border border-white/10 flex items-center justify-center text-slate-400 rounded-xl">
                      <Layers size={24} />
                   </div>
                   <h3 className="text-2xl font-black text-slate-500 uppercase italic">PAMM Module</h3>
                </div>
                <div className="text-base text-slate-500 leading-relaxed font-light space-y-6 italic">
                   <p>This system simplifies matters by aggregating all capital under a single large account. This might be helpful for the investor but is a disadvantage for the technical approach of the manager.</p>
                </div>
             </div>
          </div>
          <div className="mt-8 text-center text-slate-600 font-mono text-[10px] uppercase tracking-widest">
             [ While both manage multiple accounts, MAM is built for technical control ]
          </div>
        </div>
      </section>

      {/* --- HOW TO MANAGE: PIPELINE FLOW --- */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between mb-16 gap-6">
            <h2 className="text-3xl md:text-4xl font-normal text-white tracking-tight uppercase leading-tight italic">How to Manage <br/> multiple accounts</h2>
            <div className="text-center lg:text-right">
               <p className="text-amber-500 text-sm font-normal uppercase tracking-[0.2em]">Professional Deployment</p>
               <p className="text-slate-500 text-sm font-light mt-1">Starting your professional management journey with FXCELITE</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-5 gap-6">
            {[
              { n: "01", t: "Application", d: "Provide your professional track record to open up a MAM account for fund managers.", icon: <FileText /> },
              { n: "02", t: "Agreement", d: "Determine how you structure your fee terms for management and performance.", icon: <Briefcase /> },
              { n: "03", t: "Setup", d: "Link your Master Account with our MAM trading platform.", icon: <Settings /> },
              { n: "04", t: "Onboarding", d: "Ask your investors to link their accounts to your Master ID.", icon: <Users /> },
              { n: "05", t: "Execution", d: "Simply start trading and see the strategy scale across all of the capital.", icon: <Zap /> },
            ].map((step, i) => (
              <div key={i} className="group relative pt-8 border-t border-white/5 hover:border-amber-500/50 transition-all duration-500">
                 <div className="absolute -top-4 left-0 px-3 py-1 bg-amber-500 text-black font-black text-sm skew-x-12">
                    {step.n}
                 </div>
                 <div className="w-12 h-12 bg-amber-500/5 text-amber-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform rounded-lg">
                   {React.cloneElement(step.icon, { size: 24 })}
                 </div>
                 <h4 className="text-lg font-normal text-white mb-3 tracking-tight leading-tight uppercase italic">{step.t}</h4>
                 <p className="text-sm text-slate-500 leading-relaxed font-medium italic">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TRUST & AUDIENCE: STRUCTURAL CARDS --- */}
      <section className="py-24 border-y border-white/5 bg-[#0a0c14]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
             <div className="p-10 bg-black border border-white/5 relative group overflow-hidden shadow-2xl rounded-3xl">
                <div className="absolute top-0 right-0 p-10 opacity-[0.02] group-hover:rotate-12 transition-transform duration-1000">
                    <Shield size={150} />
                </div>
                <div className="relative z-10 space-y-8">
                   <div className="flex items-center gap-5">
                      <div className="w-14 h-14 bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 rounded-xl">
                         <Lock size={24} />
                      </div>
                      <h2 className="text-2xl font-normal text-white tracking-tight uppercase italic border-b-2 border-amber-500 pb-1">Security & Reliability</h2>
                   </div>
                   <div className="text-base text-slate-400 leading-relaxed font-light italic space-y-6">
                      <p>Trust is the most valuable asset a fund manager can have. Our forex MAM account, designed specifically for money managers, has an extremely secure and encrypted system.</p>
                      <p className="text-white font-medium italic">In addition, the funds of every investor are held individually and directly in the name of the investor, and the money manager has only "Trading Access."</p>
                   </div>
                </div>
             </div>

             <div className="space-y-10 lg:p-8">
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-normal text-white tracking-tight uppercase italic leading-tight">Who is a MAM <br/> Account For?</h2>
                  <p className="text-amber-500 font-normal uppercase tracking-[0.2em] text-xs">Targeted Institutional Profiles</p>
                </div>
                <div className="grid gap-5">
                   {[
                     { l: "Professional Fund Managers", d: "Seeking scalable money manager trading account.", icon: <Target /> },
                     { l: "Investment Firms", d: "Wealth management for a group of private clients.", icon: <Globe /> },
                     { l: "Family Offices", d: "Needing to find a safe MAM trading account for family asset management.", icon: <Users /> },
                     { l: "Professional Traders", d: "Successful strategy looking to attract investors for performance fees.", icon: <Zap /> }
                   ].map((item, i) => (
                     <div key={i} className="flex gap-5 group/item items-center p-6 bg-white/[0.02] border-r-2 border-r-transparent hover:border-r-amber-500 transition-all rounded-xl">
                       <div className="shrink-0 w-12 h-12 bg-amber-500/5 flex items-center justify-center text-amber-500 border border-amber-500/10 group-hover/item:scale-110 transition-transform rounded-lg">
                         {React.cloneElement(item.icon, { size: 24 })}
                       </div>
                       <div>
                         <span className="text-white text-lg font-black uppercase tracking-tight italic">{item.l}</span>
                         <p className="text-slate-500 text-sm font-light leading-relaxed italic mt-1">{item.d}</p>
                       </div>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA: MULTIPLIED SUCCESS --- */}
      <section className="py-24 bg-black text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 space-y-10">
           <h2 className="text-3xl md:text-5xl font-normal text-white tracking-tight uppercase leading-tight italic">Why FXCELITE is the Best <br/> MAM Trading Choice?</h2>
           <p className="text-base md:text-lg text-slate-400 leading-relaxed font-light italic max-w-3xl mx-auto">
             Benefit from the best MAM account for forex trading with our professional MAM trading platform, ultra-low latency execution, and transparent reporting. We won't just give you an account; we'll give you the technology to grow your management business.
           </p>
           <div className="pt-6 flex flex-col items-center gap-6">
              <div className="relative group">
                <button 
                  onClick={() => window.open('https://trade.FXCELITE.com/register', '_blank')}
                  className="relative px-12 py-5 bg-white text-black font-normal text-lg uppercase tracking-tight hover:bg-amber-500 transition-all shadow-[0_20px_60px_-15px_rgba(245,158,11,0.4)] rounded-2xl">
                  Contact Institutional Team
                </button>
              </div>
              <p className="text-amber-500 font-normal uppercase tracking-[0.3em] text-xs italic">Your success, multiplied. Launch your MAM solution today!</p>
           </div>
        </div>
      </section>

      {/* --- FAQ: SCHEMATIC STYLE --- */}
      <section className="py-24 border-t border-white/5 bg-[#000000]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-3xl md:text-4xl font-normal text-white tracking-tight uppercase leading-tight italic underline decoration-amber-500/50 underline-offset-[8px]">MAM FAQ</h2>
            <p className="text-slate-500 font-normal uppercase tracking-widest text-sm italic mt-4">Institutional Knowledge Base</p>
          </div>
          
          <div className="space-y-3">
            {[
              { q: "1. What is a MAM trading account?", a: "A MAM trading account is defined as management software that can enable a professional trader to control all client accounts using one single terminal." },
              { q: "2. Is a MAM account different from a PAMM account?", a: "Yes, the conceptual framework of a MAM account forex trading solution offers technical flexibility and allocation methods compared to the pooled account system of the PAMM." },
              { q: "3. Can I use EAs on the MAM trading platform?", a: "Absolutely, our Multiples Automated Monitoring platform is compatible with EAs and trading bots." },
              { q: "4. How do I get paid as a money manager?", a: "The system automatically calculates and pays your performance and management fees, as established by your agreements with investors." },
              { q: "5. Is there a limit to the number of accounts I can manage?", a: "No, our professional MAM trading platform has the ability to support an unlimited number of sub-accounts." },
              { q: "6. Do the investors maintain control of their funds?", a: "Yes, they can check their accounts at any time and withdraw their control if they wish to do so." },
              { q: "7. What makes a MAM account suitable for Forex?", a: "The most suitable is one which incorporates minimal latency and a secure space—a factor considered essential in the FXCELITE MAM scheme." },
              { q: "8. Can I manage various lot sizes of various clients?", a: "Yes, the MAM trading solution offered to fund managers can handle various allocation styles." },
              { q: "9. How secure is the MAM account forex trading setup?", a: "The security of the MAM account forex trading setup is very high. The managers have restricted rights to trade, while the individuals are responsible for any funds that are transferred." },
              { q: "10. How do I start managing multiple trading accounts with MAM?", a: "Become a Professional Trader by signing up with FXCELITE, then contact us for assistance in activating your MAM Master Account." },
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
    <div className={`border transition-all duration-500 overflow-hidden rounded-xl ${
      isOpen ? 'border-amber-500 bg-[#0B0E2A] shadow-xl' : 'border-white/5 bg-white/[0.01] hover:bg-white/[0.03]'
    }`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left group"
      >
        <span className={`font-normal text-sm md:text-base transition-colors tracking-tight uppercase italic ${isOpen ? 'text-white' : 'text-slate-500 group-hover:text-white'}`}>
          {question}
        </span>
        <div className={`w-8 h-8 rounded-lg flex shrink-0 items-center justify-center transition-all duration-500 ml-4 ${
          isOpen ? 'bg-amber-500 text-black rotate-180 shadow-[0_0_15px_#f59e0b]' : 'bg-white/5 text-slate-500 group-hover:bg-white/10'
        }`}>
            <ChevronDown size={18} />
        </div>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300 font-light italic">
          <div className="h-[1px] w-full bg-white/5 mb-4"></div>
          {answer}
        </div>
      )}
    </div>
  );
}