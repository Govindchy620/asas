import React, { useState } from 'react';
import { 
  Shield, 
  TrendingUp, 
  Zap, 
  Smartphone, 
  HelpCircle, 
  ChevronDown, 
  CheckCircle2, 
  ArrowRight,
  UserCheck,
  Layout,
  BarChart,
  Target,
  FileText,
  BadgePercent,
  Layers,
  Sparkles,
  MousePointer2,
  Clock,
  Activity,
  Cpu,
  Globe,
  Lock
} from 'lucide-react';

export default function StandardAccount() {
  return (
    <div className="bg-[#020410] text-slate-300 font-sans selection:bg-emerald-500/30 overflow-x-hidden">
      
      {/* --- HERO: PREMIER FINTECH IMMERSION --- */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-32 overflow-hidden">
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#10b98110,transparent_70%)]"></div>
          <img 
            src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-[0.07] mix-blend-luminosity"
            alt="Abstract Tech"
          />
          {/* Animated Orbs */}
          <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-cyan-500/10 blur-[100px] rounded-full animate-pulse delay-700"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/5 border border-emerald-500/20 backdrop-blur-md mb-8 animate-fade-in">
            <Sparkles size={14} className="text-emerald-400" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">Institutional Standard v2.0</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black text-white leading-[1.1] tracking-tight mb-6">
            Standard Trading <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-emerald-500/50">Account</span>
          </h1>
          
          <p className="text-base md:text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed font-light mb-12">
            The All-Inclusive Solution for Every Trader
          </p>

          <div className="grid lg:grid-cols-3 gap-6 mb-16 text-left max-w-5xl mx-auto">
             <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl group hover:border-emerald-500/30 transition-all">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4">
                  <BadgePercent size={20} />
                </div>
                <h3 className="text-white font-bold text-base mb-2 italic tracking-tight">Commission-Free</h3>
                <p className="text-sm md:text-base text-slate-500 leading-relaxed">Enjoy a commission-free trading experience where all expenses are clearly reflected in the spread.</p>
             </div>
             <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl group hover:border-cyan-500/30 transition-all">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-4">
                  <Activity size={20} />
                </div>
                <h3 className="text-white font-bold text-base mb-2 italic tracking-tight">Consistent Performance</h3>
                <p className="text-sm md:text-base text-slate-500 leading-relaxed">A powerful trading tool meant for consistency. Straightforward experience without complex calculations.</p>
             </div>
             <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl group hover:border-emerald-500/30 transition-all">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4">
                  <Layers size={20} />
                </div>
                <h3 className="text-white font-bold text-base mb-2 italic tracking-tight">Flexible Assets</h3>
                <p className="text-sm md:text-base text-slate-500 leading-relaxed">Whether you are trading major currency pairs or CFDs, this account gives you the consistency you need.</p>
             </div>
          </div>

          <div className="flex flex-col items-center gap-6">
            <a 
              href="https://trade.fxcelite.com/register"
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block text-center px-10 py-4 rounded-2xl bg-white text-black font-bold text-base hover:bg-emerald-400 transition-all shadow-[0_15px_40px_-15px_rgba(16,185,129,0.3)] hover:-translate-y-1 active:scale-95"
            >
              Open Your Standard Trading Account
            </a>
            <p className="text-slate-500 text-sm md:text-base max-w-md font-medium italic animate-pulse">
              Start your trading journey with ease. Experience commission-free trading today!
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
           <div className="w-[1px] h-10 bg-gradient-to-b from-emerald-500 to-transparent"></div>
           <span className="text-xs font-bold text-emerald-500/50 uppercase tracking-[0.2em]">Explore</span>
        </div>
      </section>

      {/* --- WHAT IS SECTION: BOLD SIDE-BY-SIDE --- */}
      <section className="py-24 relative border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 order-2 lg:order-1">
              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                  What Is a <br/> Standard Account?
                </h2>
                <div className="absolute -top-6 -left-6 text-[80px] font-black text-white/[0.02] pointer-events-none select-none">BASIC</div>
              </div>
              <div className="space-y-6 text-base text-slate-400 leading-relaxed font-light">
                <p>
                  For most people, the entry point into the financial markets is through a standard trading account. This is the most flexible and widely used account type, which is meant to create a balanced platform for both new and experienced traders. At Fxcelite, our standard forex trading account is based on the "spread-only" system, which means that you get to enjoy a commission-free trading experience where all expenses are clearly reflected in the spread.
                </p>
                <div className="p-6 rounded-2xl bg-emerald-500/5 border-l-4 border-emerald-500 backdrop-blur-sm">
                   <p className="text-white text-base font-medium leading-relaxed italic">
                     "The standard lots of 100,000 units of currency make the standard account trading terms ideal for traders who want to fully experience the market."
                   </p>
                </div>
                <p>
                  But with the flexible leverage provided by Fxcelite, you can trade these large positions with a small amount of capital, making it the best standard forex account for traders.
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative group">
               <div className="absolute inset-0 bg-emerald-500/20 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                 <img 
                    src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                    alt="Market Analysis"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#020410] via-transparent to-transparent"></div>
                 <div className="absolute bottom-6 left-6 right-6 p-6 rounded-xl bg-black/60 backdrop-blur-xl border border-white/10">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-white font-bold tracking-tight text-base">Market Access</span>
                      <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400/30"></div>
                      </div>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">The standard trading account is the most preferred option for traders in general.</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE: HIGH-CONTRAST GRID --- */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">Why Choose a Standard Account?</h2>
              <p className="text-slate-500 text-base font-medium leading-relaxed">Choosing a standard account for online trading is about peace of mind. You don't have to worry about hidden fees or complex math.</p>
            </div>
            <div className="shrink-0 flex items-center gap-3 text-emerald-400 font-bold uppercase tracking-widest text-sm">
               <div className="w-10 h-[1px] bg-emerald-500/30"></div>
               Seamless Trading
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Zero Commissions", desc: "Concentrate on your trading plan without having to pay for execution commissions.", icon: <BadgePercent />, color: "emerald" },
              { title: "Simplified Accounting", desc: "Because the commission is in the spread, your P&L will reflect exactly how much you can expect to make.", icon: <FileText />, color: "cyan" },
              { title: "High Accessibility", desc: "The standard account minimum deposit requirement is typically very low, so you can start with a small amount.", icon: <Target />, color: "blue" },
              { title: "Stability", desc: "You get standard trading account benefits such as stable spreads even in times of moderate market volatility.", icon: <Shield />, color: "purple" },
              { title: "Full Asset Access", desc: "You can trade everything from Forex Trading to Commodities from a single interface.", icon: <Globe />, color: "emerald" },
              { title: "Online Ease", desc: "Choosing a standard account for online trading is about peace of mind. Zero complexity.", icon: <Zap />, color: "cyan" },
            ].map((item, i) => (
              <div key={i} className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-emerald-500/20 transition-all duration-500 flex flex-col items-start text-left relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform pointer-events-none">
                  {React.cloneElement(item.icon, { size: 80 })}
                </div>
                <div className={`w-12 h-12 rounded-xl bg-${item.color}-500/10 flex items-center justify-center text-${item.color}-400 mb-6 border border-${item.color}-500/10 group-hover:scale-110 transition-transform`}>
                  {React.cloneElement(item.icon, { size: 24 })}
                </div>
                <h3 className="text-lg font-bold text-white mb-3 tracking-tight">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FEATURES: TECH-CENTRIC DASHBOARD VIEW --- */}
      <section className="py-24 bg-white/[0.01] border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-10">
               <div>
                 <h2 className="text-2xl lg:text-3xl font-bold text-white tracking-tight mb-4">Key Features of the Standard Trading Account</h2>
                 <p className="text-base text-slate-500 italic leading-relaxed font-light">
                   Our standard trading account features are engineered to provide a professional edge with a user-friendly interface.
                 </p>
               </div>

               <div className="grid gap-4">
                 {[
                   { t: "Standard Lot Sizes", d: "Get full market positions for maximum profit potential.", icon: <Layers /> },
                   { t: "Adjustable Leverage", d: "Control your risk with the leverage that suits your trading style.", icon: <Target /> },
                   { t: "Instant Execution", d: "Enjoy a standard trading account with instant execution to enter your trades at the price you want.", icon: <Zap /> },
                   { t: "Comprehensive Tools", d: "Get full access to all technical indicators and Trading Platforms such as WebTrader and MT5.", icon: <BarChart /> },
                   { t: "24/5 Expert Support", d: "Get help whenever the global markets are open.", icon: <Smartphone /> },
                 ].map((feature, i) => (
                   <div key={i} className="group flex items-start gap-5 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-emerald-500/20 transition-all duration-300">
                      <div className="shrink-0 w-10 h-10 rounded-lg bg-emerald-500/5 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-400 group-hover:text-black transition-all">
                        {React.cloneElement(feature.icon, { size: 20 })}
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">{feature.t}</h4>
                        <p className="text-slate-500 text-sm leading-relaxed">{feature.d}</p>
                      </div>
                   </div>
                 ))}
               </div>
            </div>

            <div className="lg:col-span-5 lg:sticky lg:top-32">
               <div className="relative p-8 rounded-3xl bg-[#0B0E2A] border border-white/10 shadow-2xl overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-[60px] rounded-full"></div>
                  <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Trading Conditions</h3>
                  <div className="space-y-6">
                     <div className="space-y-4 text-base text-slate-400 leading-relaxed font-light">
                        <p>At Fxcelite, we operate on the principle of transparency. Our standard account terms of trading are made to be competitive and fair.</p>
                        <p>We offer a standard trading account with low spreads, ensuring that the markup is as tight as possible. This enables you to break even on your trades much faster than with traditional high-markup brokers.</p>
                        <p>Moreover, our standard account with fast execution ensures that your trades are executed in milliseconds, putting you in control of your entries and exits.</p>
                     </div>
                     <div className="pt-6 border-t border-white/10">
                        <p className="text-emerald-400 font-medium text-base mb-4 leading-relaxed italic">
                          Experience precision without the complexity. Try a Free Demo and see why our standard account is a trader favorite.
                        </p>
                        <a 
                          href="https://trade.fxcelite.com/register"
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="block text-center w-full py-4 rounded-xl bg-white text-black font-bold hover:bg-emerald-400 transition-all text-base shadow-lg shadow-emerald-500/10"
                        >
                           Try a Free Demo Now
                        </a>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- ACCOUNT COMPARISON: MINIMALIST OVERLAY --- */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
           <div className="p-10 md:p-14 rounded-3xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Layers size={100} />
              </div>
              <div className="relative z-10 text-center space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Standard vs. Raw Spread Account</h2>
                <div className="max-w-3xl mx-auto text-base text-slate-400 leading-relaxed font-light">
                   Whereas a Raw account is ideal for scalpers, the trading account is the best option for swing traders and long-term traders. Since there are no commissions per lot, you can trade for days or weeks without having to worry about entry fees. It is the best standard forex account for traders who appreciate a “set and forget” strategy.
                </div>
                <div className="flex justify-center gap-2 pt-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
                   <div className="w-1.5 h-1.5 rounded-full bg-emerald-400/30"></div>
                   <div className="w-1.5 h-1.5 rounded-full bg-emerald-400/10"></div>
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* --- HOW TO OPEN: NEON STEPPER --- */}
      <section className="py-24 bg-[#020410] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">Start in Minutes</h2>
            <p className="text-slate-500 text-base font-medium uppercase tracking-[0.1em]">Quick & Secure Process</p>
          </div>

          <div className="grid lg:grid-cols-5 gap-6">
            {[
              { n: "01", t: "Register", d: "Click on the open standard trading account and enter your information.", icon: <UserCheck /> },
              { n: "02", t: "Verify", d: "Submit your ID for a secure and regulated experience.", icon: <Shield /> },
              { n: "03", t: "Deposit", d: "Make the standard account minimum deposit using our secure gateways.", icon: <Wallet /> },
              { n: "04", t: "Launch", d: "Open our Trading Platforms and log in to your dashboard.", icon: <Activity /> },
              { n: "05", t: "Trade", d: "Choose your favorite pair and make your first commission-free trade.", icon: <TrendingUp /> },
            ].map((step, i) => (
              <div key={i} className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-emerald-500/40 transition-all duration-300 text-center mt-6 lg:mt-0">
                 <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-lg bg-[#020410] border border-white/10 flex items-center justify-center font-bold text-sm text-emerald-400 group-hover:bg-emerald-400 group-hover:text-black transition-all">
                    {step.n}
                 </div>
                 <div className="w-12 h-12 rounded-full bg-emerald-500/5 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/10 group-hover:scale-110 transition-transform mt-2">
                   {React.cloneElement(step.icon, { size: 20 })}
                 </div>
                 <h4 className="text-base font-bold text-white mb-2 tracking-tight leading-tight">{step.t}</h4>
                 <p className="text-sm text-slate-500 leading-relaxed font-medium">{step.d}</p>
                 
                 {i < 4 && (
                   <div className="hidden lg:block absolute top-[50%] -right-3 w-6 h-[1px] bg-white/10 translate-x-1/2"></div>
                 )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECURITY & WHO SECTION: DUAL CARDS --- */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="p-8 md:p-10 rounded-3xl bg-[#0B0E2A] border border-white/10 overflow-hidden relative group">
               <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:scale-110 transition-transform">
                  <Lock size={120} />
               </div>
               <div className="relative z-10 space-y-6">
                 <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                     <Shield size={24} />
                   </div>
                   <h2 className="text-2xl font-bold text-white tracking-tight">Security & Reliability</h2>
                 </div>
                 <p className="text-base text-slate-400 leading-relaxed font-light">
                   Your funds are protected at Fxcelite. Our basic trading account is operated in a highly regulated environment with secure transactions and client funds segregation. We offer a secure basic account for online trading so that you can concentrate 100% on the markets.
                 </p>
               </div>
            </div>

            <div className="p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/5 relative group">
               <div className="space-y-6">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                      <UserCheck size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-white tracking-tight">Who Should Use?</h2>
                 </div>
                 <div className="grid gap-4">
                    {[
                      { l: "Beginners", d: "Individuals seeking a straightforward, commission-free method." },
                      { l: "Swing Traders", d: "Traders who maintain positions and avoid entry commissions." },
                      { l: "Small to Mid-Size", d: "Anyone seeking a standard account minimum deposit." },
                      { l: "Casual Traders", d: "Individuals seeking a reliable, all-inclusive experience." }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-3 group/item">
                        <div className="shrink-0 w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shadow-[0_0_8px_#10b981] group-hover/item:scale-150 transition-transform"></div>
                        <div className="text-sm md:text-base">
                          <span className="text-white font-bold">{item.l}: </span>
                          <span className="text-slate-400">{item.d}</span>
                        </div>
                      </div>
                    ))}
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- ELITE FINALE --- */}
      <section className="py-24 relative">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-8">
           <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">Why Fxcelite Is The Best Choice?</h2>
           <p className="text-base md:text-lg text-slate-400 leading-relaxed font-light">
             We bring together a standard trading account with low spreads and elite-tier technology. With no hidden costs and fast execution, Fxcelite brings you the ultimate trading platform to achieve your financial objectives.
           </p>
           <div className="space-y-6 pt-4">
              <a 
                href="https://trade.fxcelite.com/register"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block text-center px-10 py-4 rounded-2xl bg-white text-black font-bold text-base hover:bg-emerald-400 hover:-translate-y-1 transition-all shadow-[0_15px_40px_-15px_rgba(16,185,129,0.4)]"
              >
                Sign Up for a Standard Account
              </a>
              <div className="flex flex-col items-center gap-3">
                 <p className="text-emerald-400 font-bold uppercase tracking-widest text-xs">
                   Trade with a broker that puts you first
                 </p>
                 <div className="flex gap-1.5">
                    <div className="w-3 h-1 bg-emerald-500 rounded-full animate-pulse"></div>
                    <div className="w-6 h-1 bg-cyan-500 rounded-full animate-pulse delay-75"></div>
                    <div className="w-3 h-1 bg-emerald-500 rounded-full animate-pulse delay-150"></div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* --- FAQ: ARCHITECTURAL DESIGN --- */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">Frequently Asked</h2>
            <p className="text-slate-500 font-medium uppercase tracking-widest text-sm">Standard Account FAQ</p>
          </div>
          
          <div className="space-y-4">
            {[
              { q: "1. What is a standard trading account?", a: "A standard trading account is a commission-free account where the broker’s commission is included in the spread (the difference between the buy and sell price)." },
              { q: "2. Do I pay commissions on a standard account?", a: "No, a standard forex trading account at Fxcelite has zero commissions per trade." },
              { q: "3. Is the standard account minimum deposit high?", a: "Not at all. We make it easy for everyone to open a standard trading account with an affordable starting balance." },
              { q: "4. What are the best standard trading account features?", a: "The best features of a standard trading account include zero commissions, instant execution, and access to all tradable assets." },
              { q: "5. How fast is the execution on a standard account?", a: "We provide a standard account with fast execution, meaning that your trades are executed in milliseconds." },
              { q: "6. Can I trade other instruments besides forex?", a: "Yes, you can trade indices, commodities, and cryptos using only your standard trading account." },
              { q: "7. Is a standard account more suitable for new traders?", a: "Yes, as the pricing model is easier to comprehend and manage compared to commission accounts." },
              { q: "8. What leverage options are available in a standard account?", a: "We provide flexible leverage options so you can manage bigger positions with a smaller margin." },
              { q: "9. Are the spreads fixed?", a: "Our standard trading account with low spreads is optimized to maintain stable pricing even during peak market times." },
              { q: "10. How do I open a standard account?", a: "If you are already a client with us, you can quickly open a new standard sub-account right from your user account page." },
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
    <div className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
      isOpen ? 'border-emerald-500/40 bg-[#0B0E2A] shadow-xl' : 'border-white/5 bg-white/[0.01] hover:bg-white/[0.03]'
    }`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left group"
      >
        <span className={`font-bold text-base md:text-lg transition-colors ${isOpen ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
          {question}
        </span>
        <div className={`w-8 h-8 rounded-lg flex shrink-0 items-center justify-center transition-all duration-300 ml-4 ${
          isOpen ? 'bg-emerald-400 text-black rotate-180' : 'bg-white/5 text-slate-500 group-hover:bg-white/10'
        }`}>
            <ChevronDown size={18} />
        </div>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 text-slate-400 text-sm md:text-base leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300 font-light">
          <div className="h-[1px] w-full bg-white/5 mb-4"></div>
          {answer}
        </div>
      )}
    </div>
  );
}

// Utility icon for wallet since lucide Wallet might be used
const Wallet = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" /><path d="M3 5v14a2 2 0 0 0 2 2h16v-5" /><path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
  </svg>
);