import React, { useState } from 'react';
import { 
  Leaf, 
  Coins, 
  TrendingUp, 
  Wallet, 
  Shield, 
  Lock, 
  RefreshCw, 
  ArrowRight, 
  ChevronDown, 
  Clock, 
  BadgePercent, 
  Eye, 
  Activity, 
  Target, 
  Sparkles, 
  Users, 
  Landmark, 
  BarChart3,
  Sun,
  Zap,
  Briefcase,
  PieChart,
  Sprout,
  Gem
} from 'lucide-react';

export default function Savings() {
  return (
    <div className="bg-[#011a15] text-white font-sans selection:bg-amber-500/30 overflow-x-hidden">
      
      {/* --- HERO: THE GILDED OASIS --- */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-2 pb-3 overflow-hidden">
        {/* Verdant Background Layer */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#d9770612,transparent_70%)]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[700px] bg-gradient-to-r from-emerald-900/30 via-amber-900/10 to-transparent blur-[140px] rounded-full rotate-6"></div>
          <img 
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-10"
            alt="Organic Growth"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 backdrop-blur-xl mb-8 animate-fade-in">
            <Sun size={14} className="text-amber-400" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-amber-400 italic">Financial Growth Ecosystem v14.0</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tight mb-6">
            Forex <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-white to-emerald-200 italic uppercase">Savings</span>
          </h1>
          
          <p className="text-base md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light mb-8 uppercase tracking-widest italic">
            Earn Interest on Your Unused Trading Balance
          </p>

          <div className="max-w-3xl mx-auto text-sm md:text-base text-white/90 leading-relaxed font-light mb-12 px-6 py-8 border border-white/20 bg-white/[0.05] backdrop-blur-3xl relative shadow-2xl rounded-3xl group overflow-hidden">
             <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform">
               <Sprout size={80} className="text-emerald-400" />
             </div>
             In the trading world, timing is everything. Sometimes it might be better to just stay out of the market and wait for the perfect setup. Fxcelite is of the opinion that your capital shouldn't be idle at any time. It is possible to earn interest on trading balance funds that aren't currently committed to an open position through our forex savings account feature. For those who want to combine the high growth potential of trading actively with the safety of a traditional savings model, it is the perfect online trading savings account.
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-amber-600 to-emerald-600 rounded-3xl blur opacity-40 group-hover:opacity-80 transition duration-1000"></div>
              <button
                onClick={() => window.open('https://trade.fxcelite.com/login', '_blank')}
                className="relative px-10 py-4 bg-white text-black font-bold text-base md:text-lg rounded-2xl transition-all hover:scale-[1.03] active:scale-95 shadow-xl uppercase tracking-tight italic flex items-center gap-2">
                Activate Your Savings Feature <Sparkles size={20} className="ml-2 text-amber-600" />
              </button>
            </div>
            <p className="text-amber-400 text-sm font-bold uppercase tracking-[0.2em] italic animate-pulse">
              Make your money work 24/7. Start earning interest today!
            </p>
          </div>
        </div>
      </section>

      {/* --- SECTION 1: THE CORE DEFINITION --- */}
      <section className="py-24 relative border-y border-white/10 bg-white/[0.02] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
               <div className="space-y-6">
                 <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight leading-tight italic border-l-4 border-amber-500 pl-4">What is a Trading <br/> Savings Account?</h2>
                 <div className="space-y-6 text-base text-white/90 leading-relaxed font-light italic">
                   <p>
                     Turning on the savings account for traders will allow you to pay a steady return on your free margin. This isn't merely a trading platform; it's a passive income trading account where your "resting" money becomes an "active" asset, and you keep earning money whether you are in a trading position or not.
                   </p>
                   <p className="text-white font-medium italic bg-white/10 p-6 border-r-2 border-emerald-500 rounded-xl shadow-lg">
                     A trading savings account with Fxcelite is a unique aspect of your Live Account where the interest is calculated on your "Free Margin." A trading forex account with interest is tailored for traders with large liquidity, as it is quite the opposite of what you get in a conventional bank account.
                   </p>
                   <p>
                     The explanation of this savings trading account feature is quite straightforward: if your money in the account has not been used for margin, it earns interest every day. Hence, you get a trading account featuring daily returns, as the interest is directly credited to your balance, thus increasing your buying power.
                   </p>
                 </div>
               </div>
            </div>

            <div className="relative group lg:sticky lg:top-32">
               <div className="absolute inset-0 bg-amber-500/20 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <div className="relative border border-white/20 shadow-2xl bg-[#01261e] overflow-hidden rounded-3xl p-1">
                 <img 
                    src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=1200" 
                    className="w-full h-[400px] object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 rounded-2xl"
                    alt="Institutional Wealth"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#011a15] via-transparent to-transparent pointer-events-none"></div>
                 <div className="absolute bottom-6 left-6 right-6 p-6 bg-black/90 border border-amber-500/50 backdrop-blur-xl rounded-2xl shadow-xl">
                    <div className="w-8 h-1 bg-amber-500 mb-4"></div>
                    <p className="text-white/90 text-sm leading-relaxed font-medium italic">
                      "A trading forex account with interest is tailored for traders with large liquidity, offering the growth of resting capital."
                    </p>
                    <div className="mt-4 flex items-center gap-4">
                      <div className="p-2 rounded-lg bg-amber-500/20">
                        <RefreshCw size={18} className="text-amber-400 animate-spin-slow" />
                      </div>
                      <span className="text-amber-400 font-bold uppercase tracking-widest text-[10px] font-mono">Daily Yield Accrual Node Active</span>
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: WHY USE (THE GROWTH ENGINE) --- */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase italic leading-tight">Why Use an Online <br/> Trading Savings Account?</h2>
            <p className="text-amber-400 text-sm font-bold uppercase tracking-[0.2em]">A Safety Net and a Growth Engine</p>
            <p className="text-white/80 text-base max-w-2xl mx-auto font-light leading-relaxed italic pt-4">
              To a disciplined investor, a forex savings account acts as both a safety net and a growth engine.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Earn Daily Interest", desc: "Gives you a reward for each 24 hours, depending on the average daily free equity.", icon: <Clock /> },
              { title: "Passive Income", desc: "Build wealth even in low-volatility conditions when you are not actively engaged in forex trading.", icon: <Activity /> },
              { title: "No Lock-in Periods", desc: "This is different from fixed deposits. Your fund is available at all times to be traded or withdrawn.", icon: <Lock /> },
              { title: "Maximize Efficiency", desc: "Put your earned interest to work and reinvest it in your next top-ups or increase trade size.", icon: <Zap /> },
              { title: "Compound Growth", desc: "Track the growth of your balance as the returns accumulate and get reinvested back in your account.", icon: <TrendingUp /> },
            ].map((item, i) => (
              <div key={i} className="group p-6 bg-white/[0.05] border border-white/10 hover:border-amber-500/50 transition-all duration-500 flex flex-col items-start text-left relative overflow-hidden rounded-2xl shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-b from-amber-500/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400 mb-6 border border-white/20 group-hover:scale-110 group-hover:bg-amber-400 group-hover:text-black transition-all">
                   {React.cloneElement(item.icon, { size: 24 })}
                </div>
                <h3 className="text-lg font-bold text-white mb-3 tracking-tight leading-tight uppercase italic">{item.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed font-light italic">{item.desc}</p>
                {item.title === "Compound Growth" && (
                   <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                     
                   </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 3: KEY FEATURES (THE BENTO VAULT) --- */}
      <section className="py-24 bg-white/[0.02] border-y border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-600/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8 space-y-10">
               <div className="space-y-4">
                 <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase leading-tight italic underline decoration-emerald-500 decoration-4 underline-offset-[8px]">Key Features of <br/> the Savings Account</h2>
                 <p className="text-base text-white/80 italic leading-relaxed font-light max-w-2xl pt-4">
                   Our passive income trading accounts are designed to give institutional-quality yields to retail investors.
                 </p>
               </div>

               <div className="grid md:grid-cols-2 gap-5">
                 {[
                   { t: "Daily Accrual", d: "We determine your interest daily, giving you an account that reflects daily returns.", icon: <RefreshCw /> },
                   { t: "Tiered Rates", d: "The more liquid you are, the higher interest rate you can achieve.", icon: <BadgePercent /> },
                   { t: "Transparent Tracking", d: "See exactly how much you have earned through your specialized forex report.", icon: <Eye /> },
                   { t: "Auto Activation", d: "After the balance reaches a certain level, the earning process begins automatically.", icon: <Sparkles /> },
                   { t: "Safe & Regulated", d: "The security of your funds is assured through the same tech that protects your trades.", icon: <Shield /> },
                 ].map((feature, i) => (
                   <div key={i} className="group p-6 rounded-2xl bg-black/60 border border-white/10 hover:border-amber-500/50 transition-all duration-500 relative shadow-xl backdrop-blur-xl">
                      <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400 mb-5 border border-white/20 group-hover:scale-110 transition-transform">
                        {React.cloneElement(feature.icon, { size: 24 })}
                      </div>
                      <h4 className="text-base font-bold text-white mb-2 uppercase tracking-tight italic leading-tight">{feature.t}</h4>
                      <p className="text-white/80 text-sm leading-relaxed font-light italic">{feature.d}</p>
                   </div>
                 ))}
               </div>
            </div>

            <div className="lg:col-span-4 lg:sticky lg:top-32">
               <div className="relative p-8 rounded-3xl bg-[#022c22] border border-amber-500/50 shadow-2xl overflow-hidden group">
                  <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform duration-1000">
                    <PieChart size={100} className="text-amber-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-6 tracking-tight uppercase border-b border-white/20 pb-4 italic">Growth Node</h3>
                  <div className="space-y-6 relative z-10">
                     <p className="text-base text-amber-400 font-bold leading-tight italic">
                       Why settle for zero? Open a Live Account and turn your account into a high-yield savings engine.
                     </p>
                     <div className="text-sm text-white/80 leading-relaxed font-light italic">
                        <p>Resting capital is now an active asset. Secure your future with institutional-grade yields.</p>
                     </div>
                     <button 
                        onClick={() => window.open('https://trade.fxcelite.com/register', '_blank')}
                        className="w-full py-4 rounded-xl bg-white text-black font-bold hover:bg-amber-400 transition-all text-sm shadow-xl shadow-amber-500/20 uppercase tracking-tight italic">
                        Open a Live Account
                     </button>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: HOW TO EARN (THE ACCRUAL PATH) --- */}
      <section className="py-24 relative bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase italic leading-tight">How to Earn Daily <br/> Interest on Your Account</h2>
            <p className="text-amber-400 text-sm font-bold uppercase tracking-[0.2em] font-mono">Establishment Sequence</p>
            <p className="text-white/80 text-base font-light italic pt-2">Establishing your passive income trading account is a smooth process:</p>
          </div>

          <div className="grid lg:grid-cols-4 gap-6 relative">
            {/* The Path Decor */}
            <div className="absolute top-[30%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent hidden lg:block"></div>

            {[
              { n: "01", t: "Fund Account", d: "Use any of our secure methods for a deposit.", icon: <Wallet /> },
              { n: "02", t: "Free Margin", d: "Ensure you have free funds in your saving account.", icon: <Target /> },
              { n: "03", t: "Auto Accrual", d: "The system tracks your daily average free equity.", icon: <Activity /> },
              { n: "04", t: "Daily Payout", d: "Earn interest paid directly into your account daily.", icon: <RefreshCw /> },
            ].map((step, i) => (
              <div key={i} className="group relative p-6 rounded-3xl bg-white/[0.05] border border-white/10 hover:border-amber-500/50 transition-all duration-500 text-center shadow-xl mt-8 lg:mt-0">
                 <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-black border-2 border-amber-500/50 flex items-center justify-center font-bold text-amber-400 text-lg group-hover:bg-amber-400 group-hover:text-black transition-all rounded-full">
                    {step.n}
                 </div>
                 <div className="w-14 h-14 bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto mb-6 border border-white/20 group-hover:scale-110 transition-transform rounded-xl mt-4">
                   {React.cloneElement(step.icon, { size: 24 })}
                 </div>
                 <h4 className="text-lg font-bold text-white mb-2 tracking-tight leading-tight uppercase italic">{step.t}</h4>
                 <p className="text-sm text-white/80 leading-relaxed font-light italic">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 5: COMPARISON (THE POLISHED SLATE) --- */}
      <section className="py-24 bg-[#001c16] border-y border-white/10 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
             <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase leading-tight italic underline decoration-amber-500 decoration-4 underline-offset-[8px]">Yield Advantage</h2>
             <p className="text-white/80 text-sm font-bold uppercase tracking-[0.2em] italic pt-4">Savings Account vs. Traditional Banks</p>
             <p className="text-white/70 text-base font-light italic max-w-2xl mx-auto">When you choose the best forex savings account, the benefits far outweigh traditional banking.</p>
          </div>

          <div className="rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-black/60 backdrop-blur-xl overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-amber-900/40">
                  <th className="p-5 text-sm font-bold text-white uppercase italic tracking-widest border-b border-white/20">Feature</th>
                  <th className="p-5 text-sm font-bold text-amber-400 uppercase italic tracking-widest border-b border-white/20 bg-amber-500/10">Fxcelite Savings</th>
                  <th className="p-5 text-sm font-bold text-white/80 uppercase italic tracking-widest border-b border-white/20">Bank Savings</th>
                </tr>
              </thead>
              <tbody className="text-sm md:text-base font-light italic">
                {[
                  { f: "Interest Frequency", c: "Daily", m: "Monthly / Quarterly" },
                  { f: "Liquidity", c: "Instant (Trade or Withdraw)", m: "Often Restricted" },
                  { f: "Accessibility", c: "24/7 via Trading Platform", m: "Banking Hours" },
                  { f: "Return Potential", c: "Competitive Market Rates", m: "Usually Low" },
                  { f: "Purpose", c: "Growth + Trading Power", m: "Static Storage" }
                ].map((row, i) => (
                  <tr key={i} className="group hover:bg-white/10 transition-colors border-b border-white/10 last:border-0">
                    <td className="p-5 font-bold text-white/90 uppercase tracking-tight">{row.f}</td>
                    <td className="p-5 font-bold text-white bg-amber-500/[0.05] group-hover:text-amber-300 transition-colors">{row.c}</td>
                    <td className="p-5 font-medium text-white/70">{row.m}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* --- SECTION 6: SECURITY & AUDIENCE (MARBLE PANELS) --- */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
             <div className="p-8 md:p-10 rounded-3xl bg-black border border-white/20 relative group overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform duration-1000">
                    <Shield size={180} className="text-amber-500" />
                </div>
                <div className="relative z-10 space-y-8">
                   <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-amber-500/20 flex items-center justify-center text-amber-400 border border-amber-500/50 group-hover:bg-amber-500 group-hover:text-black transition-all duration-500">
                         <Lock size={24} />
                      </div>
                      <h2 className="text-2xl font-bold text-white tracking-tight uppercase italic">Security & <br/> Transparency</h2>
                   </div>
                   <div className="text-base text-white/90 leading-relaxed font-light italic space-y-6">
                      <p>We realize that earning passive income with features of a forex trading account involves trust.</p>
                      <div className="p-6 rounded-2xl bg-white/10 border-l-4 border-amber-500 italic font-medium text-white shadow-lg">
                         Your savings is safeguarded by segregated funds and Tier-1 banking partnerships. We offer a very secure savings feature via regular audits and real-time reporting that assure your "resting" capital is as safe as your "active" capital.
                      </div>
                   </div>
                </div>
             </div>

             <div className="space-y-10 lg:p-8">
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight uppercase italic leading-tight">Who is <br/> This For?</h2>
                  <p className="text-amber-400 font-bold uppercase tracking-[0.2em] text-xs font-mono">Institutional Yield Profiles</p>
                </div>
                <div className="grid gap-4">
                   {[
                     { l: "Patient Traders", d: "Wait for high-probability setups while making interest on balances.", icon: <Clock /> },
                     { l: "High Net Worth", d: "Searching for the best savings account to hold large-scale funds.", icon: <Landmark /> },
                     { l: "Conservative Investors", d: "Need passive income without excessive stress.", icon: <Shield /> },
                     { l: "Strategic Hedgers", d: "Make use of the interest to hedge against potential costs.", icon: <Briefcase /> }
                   ].map((item, i) => (
                     <div key={i} className="flex gap-5 group/item items-center p-5 bg-white/[0.05] border border-white/10 hover:bg-white/10 transition-all rounded-2xl">
                       <div className="shrink-0 w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400 border border-amber-500/50 group-hover/item:scale-110 transition-transform">
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

      {/* --- SECTION 7: FINAL CTA (OASIS GATE) --- */}
      <section className="py-24 bg-[#011a15] text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 space-y-10">
           <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight uppercase leading-tight italic underline decoration-amber-500 decoration-4 underline-offset-[8px]">Wealth Evolution</h2>
           <p className="text-base md:text-lg text-white/90 leading-relaxed font-light italic max-w-3xl mx-auto">
             With our trading account and daily returns, at Fxcelite, we offer the best forex savings accounts for traders. We don't just offer a place to trade, but a place to grow your entire financial ecosystem.
           </p>
           <div className="pt-6 flex flex-col items-center gap-6">
              <div className="relative group">
                <div className="absolute -inset-2 bg-amber-500 rounded-3xl blur-xl opacity-40 group-hover:opacity-80 transition duration-1000"></div>
                <button 
                  onClick={() => window.open('https://trade.fxcelite.com/login', '_blank')}
                  className="relative px-12 py-5 bg-white text-black font-bold text-lg rounded-2xl transition-all shadow-xl uppercase tracking-tight italic hover:-translate-y-1">
                  Deposit Funds
                </button>
              </div>
              <div className="space-y-4">
                <p className="text-amber-400 font-bold uppercase tracking-[0.2em] text-xs italic font-mono">Stop leaving money on the table. Start earning today!</p>
                <div className="flex justify-center gap-2">
                   <div className="w-8 h-[2px] bg-white/20"></div>
                   <div className="w-16 h-[2px] bg-amber-500 animate-pulse"></div>
                   <div className="w-8 h-[2px] bg-white/20"></div>
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* --- SECTION 8: FAQ (BOTANICAL ARCHITECTURE) --- */}
      <section className="py-24 border-t border-white/10 bg-black">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight uppercase italic underline decoration-emerald-500 decoration-4 underline-offset-[8px]">Savings FAQ</h2>
            <p className="text-white/80 font-bold uppercase tracking-widest text-sm italic font-mono pt-4">Growth Knowledge Base</p>
          </div>
          
          <div className="space-y-4">
            {[
              { q: "1. What is a Forex Savings Account?", a: "It is a feature that pays you interest on the funds in your trading account that are not being used as margin for open trades." },
              { q: "2. How do I earn interest on my balance?", a: "It’s as simple as maintaining a positive \"Free Margin\" in your Live Account, and we will calculate and pay out interest accordingly." },
              { q: "3. Is there a lock-in period for my savings?", a: "No. Because this is an internet trading savings account, funds are always accessible to be traded or withdrawn." },
              { q: "4. How often is the interest paid?", a: "We provide trading account services that attract interest on a daily basis but get paid on a monthly basis." },
              { q: "5. What is the minimum balance necessary?", a: "Each account type has a threshold to reach for unused funds to generate interest. Check your portal for specific information." },
              { q: "6. Is this feature available in Demo Accounts?", a: "No, you can only earn real passive income on a verified Live Account." },
              { q: "7. Are the interest rates fixed?", a: "Our rates may change depending on market conditions and your account category, though we strive to provide the best yields." },
              { q: "8. Can I withdraw my interest earnings?", a: "Yes, your interest is added to your account balance and is available for trading or withdrawal like other profits." },
              { q: "9. Is my saved money safe?", a: "It is. Your savings account for traders is held with Tier-1 global banks in segregated accounts." },
              { q: "10. How do I see my earnings?", a: "You can view a detailed report of your daily interest on your trading account in the 'Reports' section of your client area." },
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
    <div className={`rounded-2xl transition-all duration-500 overflow-hidden border border-white/10 ${
      isOpen ? 'bg-[#0B2a24] shadow-lg border-emerald-500/30' : 'bg-[#011a15] hover:bg-white/10'
    }`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left group"
      >
        <span className={`font-bold text-sm md:text-base transition-colors tracking-tight uppercase italic ${isOpen ? 'text-white' : 'text-white/90 group-hover:text-white'}`}>
          {question}
        </span>
        <div className={`w-8 h-8 rounded-lg flex shrink-0 items-center justify-center transition-all duration-500 ml-4 ${
          isOpen ? 'bg-amber-500 text-black rotate-180 shadow-[0_0_15px_#d97706]' : 'bg-white/10 text-white/80 group-hover:bg-white/20'
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