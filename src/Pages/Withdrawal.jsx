import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Shield, 
  Zap, 
  Globe, 
  Activity, 
  Lock, 
  CreditCard, 
  Bitcoin, 
  RefreshCw, 
  ArrowRight, 
  ChevronDown, 
  CheckCircle2, 
  Smartphone, 
  History, 
  Coins, 
  Landmark, 
  TrendingUp,
  UserCheck,
  MousePointer2,
  Sparkles,
  PieChart,
  BadgePercent,
  Check,
  Scale,
  LogOut,
  Map,
  Briefcase
} from 'lucide-react';

export default function Withdrawal() {
  return (
    <div className="bg-[#05081a] text-slate-300 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* --- HERO: THE CRYSTAL PATH --- */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-32 overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#0ea5e910,transparent_70%)]"></div>
          <img 
            src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-10"
            alt="Wealth Access"
          />
          {/* Moving Success Pulses */}
          <div className="absolute top-1/3 -left-20 w-40 h-40 bg-emerald-500/20 blur-[80px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/3 -right-20 w-60 h-60 bg-blue-500/10 blur-[100px] rounded-full animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/5 border border-blue-500/20 backdrop-blur-xl mb-8 animate-fade-in">
            <ArrowUpRight size={14} className="text-blue-400" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400">Profit Transit System v10.0</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tight mb-6">
            Forex <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-emerald-400 italic uppercase">Withdrawal</span>
          </h1>
          
          <p className="text-base md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light mb-8 uppercase tracking-widest italic">
            Fast, Secure, and Transparent Profit Access
          </p>

          <div className="max-w-3xl mx-auto text-sm md:text-base text-slate-400 leading-relaxed font-light mb-12 px-6 py-8 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-3xl shadow-2xl relative group overflow-hidden">
             <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:scale-110 transition-transform">
               <LogOut size={80} />
             </div>
             At FXCElite, it is our conviction that the most effective measure of a brokerage's excellence is the speed and consistency of their forex withdrawal process. You made the money, so it is only fair that you should enjoy your profits without delay. That's why we've designed a system which puts the forex withdrawal experience at the forefront of our priorities. No matter when you want to withdraw money, our super-efficient portal makes sure your request is given top priority.
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-3xl blur opacity-25 group-hover:opacity-80 transition duration-1000"></div>
              <button className="relative px-10 py-4 rounded-2xl bg-white text-black font-bold text-base transition-all hover:scale-[1.03] active:scale-95 shadow-xl flex items-center gap-3 uppercase tracking-tight italic">
                Request a Withdrawal <ArrowUpRight size={20} />
              </button>
            </div>
            <p className="text-blue-400 text-sm font-bold uppercase tracking-[0.2em] italic animate-pulse">
              Ready to enjoy your profits? Fastest processing starts here!
            </p>
          </div>
        </div>
      </section>

      {/* --- WHAT IS: THE RETURN POLICY --- */}
      <section className="py-24 relative border-y border-white/5 bg-white/[0.01] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
               <div className="space-y-6">
                 <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight leading-tight italic border-l-4 border-blue-500 pl-4">Withdrawal Process <br/> Explained Simply</h2>
                 <div className="space-y-6 text-base text-slate-400 leading-relaxed font-light">
                   <p>
                     We have a broad selection of withdrawal methods at forex brokers, so you can always get your money out in the same way that you made your Deposit. In addition to bank transfers, we also offer instant forex withdrawal options via e-wallets and crypto. With us, you have the freedom to convert your financial achievements through the withdrawal of forex trading profits in a self-sufficient manner.
                   </p>
                   <p className="text-white font-medium italic bg-white/5 p-5 border-l-2 border-emerald-500 rounded-r-lg">
                     We follow a stringent "return-to-source" policy to guarantee utmost safety and adherence to the laws regulating international financial transactions. Simply put, the money you take out is paid back to the same method through which you originally deposited.
                   </p>
                   <p>
                     When you withdraw funds from a trading account online, our finance team reviews the request to ensure all security protocols are met. Once approved, the funds are released. Depending on your chosen method, you could benefit from an instant withdrawal experience, with funds reaching you in just a few hours.
                   </p>
                 </div>
               </div>
            </div>

            <div className="relative group lg:sticky lg:top-32">
               <div className="absolute inset-0 bg-blue-500/10 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#0B0E2A]">
                 <img 
                    src="https://images.unsplash.com/photo-1554224155-1696413575b8?auto=format&fit=crop&q=80&w=1200" 
                    className="w-full h-[400px] object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    alt="Withdrawal Portal"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#05081a] via-transparent to-transparent pointer-events-none"></div>
                 <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-black/80 backdrop-blur-xl border border-blue-500/30">
                    <p className="text-slate-300 text-sm leading-relaxed font-medium italic">
                      "Request reviewed by our finance team to ensure all security protocols are met before release."
                    </p>
                    <div className="mt-4 flex items-center gap-3">
                      <CheckCircle2 size={18} className="text-emerald-400" />
                      <span className="text-emerald-400 font-bold uppercase tracking-widest text-[10px] font-mono">Verified Return-to-Source Policy</span>
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE: DATA VORTEX GRID --- */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase italic leading-tight">Why Choose FXCElite for <br/> Fast Forex Withdrawal?</h2>
            <p className="text-emerald-500 text-sm font-bold uppercase tracking-[0.2em]">The fastest way to withdraw funds</p>
            <p className="text-slate-500 text-base max-w-2xl mx-auto font-light leading-relaxed italic">
              We understand that for a trader, the fastest way to withdraw trading funds is a non-negotiable requirement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { title: "Instant Forex Withdrawal", desc: "This feature applies to verified e-wallet users for rapid access.", icon: <Zap /> },
              { title: "Secure Forex Withdrawal", desc: "Protected by multiple authentication factors and high-level encryption.", icon: <Shield /> },
              { title: "No Hidden Fees", desc: "We are committed to keeping our internal withdrawal costs at zero.", icon: <BadgePercent /> },
              { title: "Transparent Tracking", desc: "Track the status of your online trading account withdrawal in real-time.", icon: <Map /> },
              { title: "Global Access", desc: "Designed to serve the needs of traders from over 150 countries worldwide.", icon: <Globe /> },
            ].map((item, i) => (
              <div key={i} className="group p-6 bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-all duration-500 flex flex-col items-center text-center relative overflow-hidden rounded-2xl shadow-xl">
                <div className="w-12 h-12 bg-blue-500/10 flex items-center justify-center text-blue-400 mb-5 border border-white/5 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-black transition-all rounded-xl">
                   {React.cloneElement(item.icon, { size: 24 })}
                </div>
                <h3 className="text-base font-bold text-white mb-2 tracking-tight leading-tight uppercase italic">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- METHODS: PRISMATIC MATRIX --- */}
      <section className="py-24 bg-white/[0.01] border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-600/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-12 space-y-10">
               <div className="space-y-4 text-center">
                 <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight uppercase leading-tight italic underline decoration-blue-500 decoration-4 underline-offset-[8px]">Forex Withdrawal <br/> Methods Explained</h2>
                 <p className="text-base text-slate-500 italic leading-relaxed font-light max-w-2xl mx-auto pt-4">
                   To ensure flexibility, we support a variety of channels to withdraw money from trading account balances.
                 </p>
               </div>

               <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                 {[
                   { t: "E-Wallets", d: "Skrill, Neteller: Fastest method for withdrawing funds, usually done in hours.", icon: <Smartphone /> },
                   { t: "Credit/Debit Cards", d: "Safely return your initial investment to your credit/debit card.", icon: <CreditCard /> },
                   { t: "Cryptocurrency", d: "USDT, BTC: Modern, borderless, and qualifies for instant withdrawal.", icon: <Bitcoin /> },
                   { t: "Bank Wire Transfer", d: "The most reliable way of transferring large amounts of capital to your bank.", icon: <Landmark /> },
                 ].map((feature, i) => (
                   <div key={i} className="group p-6 bg-white/[0.02] border border-white/5 hover:border-emerald-500/20 transition-all duration-500 relative shadow-lg rounded-2xl text-center">
                      <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-5 border border-white/5 group-hover:scale-110 transition-transform mx-auto">
                        {React.cloneElement(feature.icon, { size: 24 })}
                      </div>
                      <h4 className="text-base font-bold text-white mb-2 uppercase tracking-tight italic leading-tight">{feature.t}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed font-light italic">{feature.d}</p>
                   </div>
                 ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- THE VELOCITY MATRIX TABLE --- */}
      <section className="py-24 relative bg-black">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
             <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight uppercase leading-tight italic">How Long Does <br/> Forex Withdrawal Take?</h2>
             <p className="text-blue-500 text-sm font-bold uppercase tracking-[0.2em]">Institutional Service Benchmarks</p>
             <p className="text-slate-500 text-base max-w-2xl mx-auto pt-2">At FXCElite, we process most requests within 24 business hours.</p>
          </div>

          <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-white/[0.01] backdrop-blur-xl overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-blue-600/10 border-b border-white/10">
                  <th className="p-5 text-sm font-bold text-white uppercase italic tracking-widest">Method</th>
                  <th className="p-5 text-sm font-bold text-white uppercase italic tracking-widest">Processing Time</th>
                  <th className="p-5 text-sm font-bold text-white uppercase italic tracking-widest">Speed Rating</th>
                </tr>
              </thead>
              <tbody className="text-sm md:text-base font-light italic">
                {[
                  { m: "E-Wallets", t: "1 – 6 Hours", s: "Instant/Ultra-Fast", color: "text-emerald-400" },
                  { m: "Cryptocurrency", t: "1 – 12 Hours", s: "Fast", color: "text-blue-400" },
                  { m: "Credit/Debit Cards", t: "2 – 5 Business Days", s: "Standard", color: "text-slate-500" },
                  { m: "Bank Wire", t: "3 – 5 Business Days", s: "Reliable for Large Sums", color: "text-slate-500" }
                ].map((row, i) => (
                  <tr key={i} className="group hover:bg-white/5 transition-colors border-b border-white/5 last:border-0">
                    <td className="p-5 font-bold text-white uppercase tracking-tight">{row.m}</td>
                    <td className="p-5 text-slate-400">{row.t}</td>
                    <td className={`p-5 font-bold uppercase tracking-widest text-xs ${row.color}`}>
                       <div className="flex items-center gap-2">
                         <div className={`w-1.5 h-1.5 rounded-full ${row.color.replace('text-', 'bg-')} animate-pulse`}></div>
                         {row.s}
                       </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* --- STEP BY STEP: THE TRANSIT HUD --- */}
      <section className="py-24 relative border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight uppercase italic leading-tight">Step by Step <br/> Funds Withdrawal</h2>
            <p className="text-emerald-400 text-sm font-bold uppercase tracking-[0.2em]">The route from profit to pocket</p>
          </div>

          <div className="grid lg:grid-cols-5 gap-6 relative">
            {/* The Rail Decor */}
            <div className="absolute top-[30%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent hidden lg:block"></div>

            {[
              { n: "01", t: "Login", d: "Access your FXCElite Secure Client Area.", icon: <Lock /> },
              { n: "02", t: "Verify Info", d: "Make sure accounts are closed or have sufficient margin.", icon: <Scale /> },
              { n: "03", t: "Request", d: "Access 'Funds' and choose trading account withdrawal.", icon: <ArrowUpRight /> },
              { n: "04", t: "Amount", d: "Enter the amount and select your verified option.", icon: <TrendingUp /> },
              { n: "05", t: "Confirm", d: "Complete security verification. Our team handles the rest.", icon: <Activity /> },
            ].map((step, i) => (
              <div key={i} className="group relative p-6 bg-white/[0.02] border border-white/5 hover:border-blue-500/50 transition-all duration-500 text-center rounded-2xl shadow-lg mt-6 lg:mt-0">
                 <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-black border-2 border-blue-500/20 flex items-center justify-center font-bold text-blue-400 text-sm group-hover:bg-blue-400 group-hover:text-black transition-all rounded-lg">
                    {step.n}
                 </div>
                 <div className="w-12 h-12 bg-blue-500/5 text-blue-400 flex items-center justify-center mx-auto mb-4 border border-white/5 group-hover:scale-110 transition-transform rounded-xl mt-2">
                   {React.cloneElement(step.icon, { size: 24 })}
                 </div>
                 <h4 className="text-base font-bold text-white mb-2 tracking-tight leading-tight uppercase italic">{step.t}</h4>
                 <p className="text-xs text-slate-500 leading-relaxed font-medium italic">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECURITY & AML BANNER --- */}
      <section className="py-24 bg-[#0a0c1a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
             <div className="p-8 md:p-10 rounded-3xl bg-black border border-white/10 relative group overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:rotate-12 transition-transform duration-1000">
                    <Shield size={180} />
                </div>
                <div className="relative z-10 space-y-8">
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20 group-hover:bg-blue-500 group-hover:text-black transition-all duration-500 rounded-xl">
                         <Lock size={24} />
                      </div>
                      <h2 className="text-2xl font-bold text-white tracking-tight uppercase italic">Security & AML</h2>
                   </div>
                   <div className="text-base text-slate-400 leading-relaxed font-light italic space-y-6">
                      <p>In our quest for a secure online forex withdrawal service, we conform fully to the Anti-Money Laundering (AML) regulations.</p>
                      <div className="p-6 bg-white/[0.03] border-l-4 border-blue-500 italic font-medium text-white shadow-xl rounded-r-lg">
                        This ensures that the name on your withdrawal matches the name on your FXCElite account. Our community is fully protected from fraud.
                      </div>
                   </div>
                </div>
             </div>

             <div className="space-y-10 lg:p-8">
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight uppercase italic leading-tight">Who is This <br/> For?</h2>
                  <p className="text-emerald-500 font-bold uppercase tracking-[0.2em] text-xs font-mono">Withdrawal Accessibility Profiles</p>
                </div>
                <div className="grid gap-4">
                   {[
                     { l: "Day Traders", d: "Need quick forex withdrawal of their weekly gains.", icon: <Activity /> },
                     { l: "Pro Investors", d: "Require reliable facility to withdraw significant capital.", icon: <Briefcase /> },
                     { l: "Casual Traders", d: "Seek convenience and security while withdrawing.", icon: <UserCheck /> },
                     { l: "Crypto Users", d: "Want an instant withdrawal using digital currencies.", icon: <Bitcoin /> }
                   ].map((item, i) => (
                     <div key={i} className="flex gap-5 group/item items-center p-5 bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all rounded-2xl">
                       <div className="shrink-0 w-12 h-12 rounded-xl bg-blue-500/5 flex items-center justify-center text-blue-400 border border-blue-500/10 group-hover/item:scale-110 transition-transform">
                         {React.cloneElement(item.icon, { size: 20 })}
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

      {/* --- FINAL CTA: THE FRUIT GATE --- */}
      <section className="py-24 bg-[#02030d] text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 space-y-10">
           <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight uppercase leading-tight italic">Why FXCElite is the Best <br/> Choice for Withdrawals?</h2>
           <p className="text-base md:text-lg text-slate-400 leading-relaxed font-light italic max-w-3xl mx-auto">
             We are dedicated to transparency, and as the fastest way to withdraw trading funds, FXCElite is one of a kind. We make sure you get to enjoy the fruits of your labor with absolute peace of mind.
           </p>
           <div className="pt-6 flex flex-col items-center gap-6">
              <div className="relative group">
                <div className="absolute -inset-2 bg-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-60 transition duration-1000"></div>
                <button className="relative px-12 py-5 bg-white text-black font-bold text-lg transition-all shadow-[0_15px_40px_-15px_rgba(14,165,233,0.4)] uppercase tracking-tight italic hover:-translate-y-1 rounded-xl">
                  Login to Withdraw
                </button>
              </div>
              <div className="space-y-4">
                <p className="text-blue-400 font-bold uppercase tracking-[0.3em] text-xs italic font-mono">Your profits, your way.</p>
                <div className="flex justify-center gap-2">
                   <div className="w-8 h-[2px] bg-white/10"></div>
                   <div className="w-16 h-[2px] bg-emerald-500 animate-pulse"></div>
                   <div className="w-8 h-[2px] bg-white/10"></div>
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* --- FAQ: CRYSTAL STYLE --- */}
      <section className="py-24 border-t border-white/5 bg-black">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight uppercase italic">Withdrawal FAQ</h2>
            <p className="text-slate-500 font-medium uppercase tracking-widest text-sm font-mono">Access Knowledge Base</p>
          </div>
          
          <div className="space-y-4">
            {[
              { q: "1. How long does forex withdrawal take?", a: "Internal processing takes up to 24 hours. The transfer of funds happens instantly or in a matter of business days depending on the transfer method." },
              { q: "2. Are there any fees for a trading account withdrawal?", a: "FXCElite does not charge any internal fees for making withdrawals, though there may be associated charges from your banking or processing service." },
              { q: "3. What is the fastest method of withdrawing trading funds?", a: "E-Wallets and Cryptocurrencies offer the fastest means to withdraw trade funds, which are often reflected the same day." },
              { q: "4. Can I withdraw money if I have open trades?", a: "Yes, but you must have \"Free Margin\" in your Forex account to keep those positions open." },
              { q: "5. Why is my withdrawal taking longer than expected?", a: "Most often, the cause relates to bank processing time or KYC verification. Ensure your account is fully verified." },
              { q: "6. Do you offer an instant withdrawal trading account?", a: "Yes, we do have automated systems for e-wallets which deliver an immediate forex withdrawal service." },
              { q: "7. Can I withdraw funds to someone else’s account?", a: "No, as a security measure, we can ONLY make the forex withdrawal into an account in your own name." },
              { q: "8. What are the available withdrawal methods?", a: "We currently support Bank Wire, Credit/Debit Cards, Skrill, Neteller, and various Crypto." },
              { q: "9. Is there a minimum amount that can be withdrawn?", a: "The minimum varies by method but remains small to permit easy access to funds for all traders." },
              { q: "10. How do I know when my withdrawal is complete?", a: "You will receive a confirmation email just after we release the funds from our side." },
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
      isOpen ? 'border-blue-500/40 bg-[#0B0E2A] shadow-lg' : 'border-white/5 bg-white/[0.01] hover:bg-white/[0.03]'
    }`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left group"
      >
        <span className={`font-bold text-sm md:text-base transition-colors tracking-tight uppercase italic ${isOpen ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
          {question}
        </span>
        <div className={`w-8 h-8 flex items-center justify-center shrink-0 transition-all duration-500 ml-4 rounded-lg ${
          isOpen ? 'bg-blue-500 text-white rotate-180 shadow-[0_0_15px_#0ea5e9]' : 'bg-white/5 text-slate-500 group-hover:bg-white/10'
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