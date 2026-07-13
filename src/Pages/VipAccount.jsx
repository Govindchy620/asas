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
  Lock,
  Wallet,
  Scaling,
  Server,
  ZapOff,
  Briefcase,
  Gift
} from 'lucide-react';

export default function VipAccount() {
  return (
    <div className="bg-[#020410] text-slate-300 font-sans selection:bg-amber-500/30 overflow-x-hidden">
      
      {/* --- HERO: INSTITUTIONAL PRECISION --- */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-2 pb-3 overflow-hidden">
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#f59e0b0a,transparent_70%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] z-0"></div>
          
          {/* Animated Gold Orbs */}
          <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-amber-500/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none animate-pulse"></div>
          <div className="absolute bottom-10 left-1/4 w-[500px] h-[500px] bg-yellow-600/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-20">
            
            {/* Left Content */}
            <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left relative z-10">
              {/* VIP Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl">
                <Sparkles size={14} className="text-amber-400" />
                <span className="text-xs font-normal uppercase tracking-[0.2em] text-amber-400">Tier 1 Institutional Access</span>
              </div>
              
              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
                VIP & ECN <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-500 to-orange-500">
                  Trading Account
                </span>
              </h1>
              
              {/* Subheadline */}
              <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                For high-volume professionals who require the tightest spreads and fastest execution. Trade directly on the interbank market with zero broker interference.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <button 
                  onClick={() => window.open('https://trade.FXCELITE.com/register', '_blank')}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black font-normal text-base transition-all shadow-[0_0_40px_-10px_rgba(245,158,11,0.6)] hover:shadow-[0_0_60px_-15px_rgba(245,158,11,0.8)] hover:-translate-y-1 flex items-center justify-center gap-2">
                  Open ECN Account <ArrowRight size={18} />
                </button>
                <button
                  onClick={() => window.open('https://trade.FXCELITE.com/login', '_blank')}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-transparent border border-white/20 text-white font-normal text-base hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                  View Raw Spreads
                </button>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-4 pt-4 text-sm text-slate-500 font-medium">
                <span className="flex items-center gap-1.5"><Activity size={16} className="text-amber-400" /> 0.0 Pips</span>
                <span className="flex items-center gap-1.5"><Server size={16} className="text-amber-400" /> Equinix NY4</span>
              </div>
            </div>

            {/* Right Content - Glassmorphic ECN UI */}
            <div className="w-full lg:w-1/2 relative lg:h-[500px] flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 to-orange-600/10 rounded-full blur-3xl pointer-events-none"></div>

              {/* Main Glass Dashboard Card */}
              <div className="relative w-full max-w-md bg-[#0a0f25]/80 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden z-10 transform hover:scale-[1.02] transition-transform duration-500">
                {/* Header */}
                <div className="p-5 border-b border-white/10 bg-white/[0.02] flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <Activity size={20} className="text-amber-400" />
                    <span className="font-normal text-base text-white tracking-wide">Direct Market Access</span>
                  </div>
                  <span className="text-xs font-normal bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full animate-pulse border border-amber-500/30">Live Feed</span>
                </div>

                {/* ECN Spread List */}
                <div className="p-2">
                  {[
                    { pair: 'EUR/USD', bid: '1.09420', ask: '1.09420', spread: '0.0' },
                    { pair: 'GBP/USD', bid: '1.26351', ask: '1.26352', spread: '0.1' },
                    { pair: 'USD/JPY', bid: '149.821', ask: '149.821', spread: '0.0' },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center p-4 hover:bg-white/5 rounded-2xl transition-colors cursor-pointer border border-transparent hover:border-white/5">
                      <div>
                        <div className="font-normal text-sm text-white">{item.pair}</div>
                        <div className="text-xs text-emerald-400 flex items-center gap-1 mt-1"><Zap size={10} /> {item.spread} Pips</div>
                      </div>
                      <div className="flex gap-4 text-right">
                        <div>
                          <div className="text-xs text-slate-500 mb-0.5">Bid</div>
                          <div className="font-mono font-medium text-sm text-white">{item.bid}</div>
                        </div>
                        <div>
                          <div className="text-xs text-slate-500 mb-0.5">Ask</div>
                          <div className="font-mono font-medium text-sm text-white">{item.ask}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Depth of Market Graphic */}
                <div className="p-5 border-t border-white/10 bg-gradient-to-t from-amber-900/20 to-transparent">
                   <div className="flex justify-between text-xs text-slate-400 mb-2 font-medium">
                     <span>Liquidity Depth</span>
                     <span className="text-amber-400">14 Providers Active</span>
                   </div>
                   <div className="flex items-end h-16 gap-1 w-full opacity-80">
                      {[30, 45, 60, 40, 80, 50, 90, 70, 100, 85, 110, 65, 80, 50].map((h, i) => (
                        <div key={i} className="w-full bg-amber-500/40 hover:bg-amber-400 transition-colors rounded-t-sm" style={{ height: `${h}%` }}></div>
                      ))}
                   </div>
                </div>
              </div>

              {/* Floating Element */}
              <div className="absolute -left-6 bottom-16 w-40 p-4 bg-[#0B0E2A]/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl z-20 animate-bounce" style={{animationDuration: '5s'}}>
                <div className="text-xs text-slate-500 mb-1">Execution Speed</div>
                <div className="font-normal text-white text-sm flex items-center gap-2"><Zap size={14} className="text-amber-400"/> &lt; 15 ms</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CORE CONTENT: DESCRIPTION --- */}
      <section className="py-24 relative border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-normal text-white tracking-tight leading-tight">
                Institutional Power <br/> at Your Fingertips
              </h2>
              <div className="space-y-6 text-base text-slate-400 leading-relaxed font-light">
                <p>
                  The VIP trading account is tailored for high-frequency traders, scalpers, and algorithmic traders who need the tightest spreads and the fastest execution speeds available in the retail industry. By offering a professional trading account and real ECN technology, we guarantee that your trades will be executed directly in the interbank market without any broker interference.
                </p>
                <div className="p-6 rounded-2xl bg-amber-500/5 border-l-4 border-amber-500 backdrop-blur-sm relative overflow-hidden">
                   <p className="text-white text-base font-medium leading-relaxed relative z-10 italic">
                     "Our ECN forex trading account gives you direct access to a deep liquidity pool of providers, including world-class banks and financial institutions."
                   </p>
                </div>
                <p>
                  When you open an ECN trading account with us, you get to trade on "Raw Spreads"—the real market price without any markup. In exchange, a small commission fee is applied, making it the best setup for those who value absolute transparency.
                </p>
              </div>
            </div>

            <div className="relative group">
               <div className="absolute inset-0 bg-amber-500/10 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                 <img 
                    src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop" 
                    className="w-full h-[400px] object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                    alt="Institutional Performance"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#020410] via-transparent to-transparent"></div>
                 <div className="absolute bottom-6 left-6 right-6 p-6 rounded-xl bg-black/80 backdrop-blur-md border border-white/10">
                    <div className="flex items-center gap-3 mb-2">
                      <Zap size={20} className="text-amber-500" />
                      <span className="text-white text-lg font-normal tracking-tight uppercase">Direct Execution</span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed font-medium">Command the markets with institutional power. Elevate to VIP Status.</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHAT IS ECN: BOLD SECTION --- */}
      <section className="py-24 relative bg-black/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 space-y-6">
               <h2 className="text-3xl md:text-5xl font-normal text-white tracking-tight uppercase">What is an ECN Account?</h2>
               <div className="w-16 h-1.5 bg-amber-500 rounded-full"></div>
            </div>
            <div className="lg:w-1/2 space-y-6 text-base text-slate-400 leading-relaxed font-light">
               <p>
                 An ECN account forex is an "No Dealing Desk" (NDD) account. This means that instead of the broker being the counterparty in a trade, an ECN account acts as a "bridge" that connects your buy and sell orders directly with top liquidity providers.
               </p>
               <p>
                 This provides a direct link to ensure you get the best possible bid and ask prices from multiple sources simultaneously. This results in an ECN account with low spreads (often 0.0 pips on EUR/USD) and the complete removal of re-quotes—essential for high-risk trading.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE VIP: PREMIUM CARDS --- */}
      <section className="py-24 border-y border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-normal text-white tracking-tight">Why Choose a VIP Account?</h2>
            <p className="text-slate-400 text-base font-medium leading-relaxed max-w-2xl">
              A VIP account for high volume traders is more than just an account type; it’s a premium service. If you trade large lot sizes, you need an environment that rewards your activity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Raw Spreads", desc: "Trade with ECN trading account with raw spreads from 0.0 pips.", icon: <Activity />, color: "amber" },
              { title: "Lower Costs", desc: "High volume traders can take advantage of lower commission fees and rebates.", icon: <BadgePercent />, color: "slate" },
              { title: "Priority Execution", desc: "Take advantage of an ECN account with average execution speeds of < 30ms.", icon: <Zap />, color: "amber" },
              { title: "Anonymity", desc: "Your trades will be executed on the network anonymously without disclosing identity.", icon: <Lock />, color: "slate" },
              { title: "Deep Liquidity", desc: "Trade large volumes with low slippage with our multi-bank liquidity feed.", icon: <Layers />, color: "amber" },
              { title: "Elite Reliability", desc: "A secure ECN trading account is what separates a professional from an amateur.", icon: <Shield />, color: "slate" },
            ].map((item, i) => (
              <div key={i} className="group p-8 rounded-3xl bg-[#0B0E2A] border border-white/5 hover:border-amber-500/40 transition-all duration-500 flex flex-col items-start relative overflow-hidden shadow-xl">
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:scale-125 transition-transform pointer-events-none">
                   {React.cloneElement(item.icon, { size: 100 })}
                </div>
                <div className={`w-14 h-14 rounded-2xl bg-${item.color === 'amber' ? 'amber-500/10' : 'white/5'} flex items-center justify-center text-${item.color === 'amber' ? 'amber-500' : 'white'} mb-6 border border-white/10 group-hover:scale-110 transition-transform`}>
                   {React.cloneElement(item.icon, { size: 24 })}
                </div>
                <h3 className="text-xl font-normal text-white mb-3 tracking-tight">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FEATURES: BENTO TECH GRID --- */}
      <section className="py-24 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-10">
               <div>
                 <h2 className="text-2xl md:text-3xl font-normal text-white tracking-tight mb-4 uppercase">Key Features of the <br/>VIP & ECN Account</h2>
                 <p className="text-base text-slate-500 italic leading-relaxed font-light">
                   Our professional trading account features are built to support sophisticated strategies and high-performance trading bots.
                 </p>
               </div>

               <div className="grid gap-4">
                 {[
                   { t: "Level II Market Depth", d: "View the entire list of executable prices directly from the liquidity providers.", icon: <BarChart /> },
                   { t: "No Restrictions", d: "Employ any trading method, scalping, news trading, and HFT (High Frequency Trading).", icon: <Scaling /> },
                   { t: "Personal Account Manager", d: "VIP account holders get one-on-one \"white glove\" service for all technical inquiries.", icon: <UserCheck /> },
                   { t: "Free VPS Hosting", d: "Run your EAs 24/7 with zero downtime on our ultra-low latency servers.", icon: <Server /> },
                   { t: "Advanced Reporting", d: "Get advanced trade analysis to maximize your performance.", icon: <FileText /> },
                 ].map((feature, i) => (
                   <div key={i} className="group flex items-start gap-5 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-amber-500/20 transition-all duration-300">
                      <div className="shrink-0 w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-all">
                        {React.cloneElement(feature.icon, { size: 24 })}
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-base font-normal text-white group-hover:text-amber-500 transition-colors">{feature.t}</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">{feature.d}</p>
                      </div>
                   </div>
                 ))}
               </div>
            </div>

            <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-8">
               <div className="relative p-8 rounded-3xl bg-[#0B0E2A] border border-white/10 shadow-2xl overflow-hidden group">
                  <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=2026&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-[0.05] group-hover:scale-110 transition-transform duration-1000" alt="Tech" />
                  <h3 className="text-2xl font-normal text-white mb-6 tracking-tight relative z-10">Experience the Power</h3>
                  <div className="space-y-6 relative z-10">
                     <p className="text-base text-amber-500 font-medium leading-relaxed italic">
                        Experience the raw power of the interbank market. Open an ECN Account Online and see the difference in every pip.
                     </p>
                     <div className="space-y-4 text-sm text-slate-400 leading-relaxed font-light">
                        <p>At FXCELITE, we house our servers in Equinix data centers, so you can be sure that your trading orders are handled with the highest level of reliability.</p>
                     </div>
                    
                  </div>
               </div>

               <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/5 space-y-4">
                  <h3 className="text-xl font-normal text-white">ECN vs. Standard & Micro</h3>
                  <p className="text-sm text-slate-400 leading-relaxed font-light">
                    The main difference is in pricing and execution. Standard accounts involve a markup on the spread, while ECN accounts involve the true market price with a small commission attached.
                  </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- HOW TO OPEN: LUXURY STEPPER --- */}
      <section className="py-24 bg-[#020410] border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-normal text-white tracking-tight mb-3">How to Open an ECN Account</h2>
            <p className="text-amber-500 text-sm font-normal uppercase tracking-widest">Institutional Grade Deployment</p>
          </div>

          <div className="grid lg:grid-cols-5 gap-6">
            {[
              { n: "01", t: "Application", d: "Click to open an ECN account and register as a professional.", icon: <Briefcase /> },
              { n: "02", t: "Verify", d: "Deep KYC verification to ensure a safe institutional environment.", icon: <Shield /> },
              { n: "03", t: "Capitalize", d: "Deposit money (VIP status demands a higher initial deposit).", icon: <Wallet /> },
              { n: "04", t: "Setup", d: "Use our high-speed ECN bridge through MT5 or WebTrader.", icon: <Cpu /> },
              { n: "05", t: "Trade", d: "Experience raw spreads and instant market execution.", icon: <Activity /> },
            ].map((step, i) => (
              <div key={i} className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-amber-500/40 transition-all duration-500 text-center mt-6 lg:mt-0">
                 <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-xl bg-black border border-amber-500/20 flex items-center justify-center font-normal text-amber-500 text-sm group-hover:bg-amber-500 group-hover:text-black transition-all">
                    {step.n}
                 </div>
                 <div className="w-16 h-16 rounded-full bg-amber-500/5 text-amber-500 flex items-center justify-center mx-auto mb-4 border border-amber-500/10 group-hover:scale-110 transition-transform mt-2">
                   {React.cloneElement(step.icon, { size: 24 })}
                 </div>
                 <h4 className="text-base font-normal text-white mb-2 tracking-tight">{step.t}</h4>
                 <p className="text-sm text-slate-400 leading-relaxed font-medium">{step.d}</p>
                 
                 {i < 4 && (
                   <div className="hidden lg:block absolute top-[50%] -right-3 w-6 h-[1px] bg-white/10 translate-x-1/2"></div>
                 )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- VIP BENEFITS: OBSIDIAN CARDS --- */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="p-8 md:p-10 rounded-3xl bg-[#0B0E2A] border border-white/10 relative group shadow-2xl overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:rotate-12 transition-transform duration-1000">
                  <Briefcase size={150} />
               </div>
               <div className="relative z-10 space-y-8">
                 <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500 border border-amber-500/20">
                      <Gift size={24} />
                    </div>
                    <h2 className="text-2xl font-normal text-white tracking-tight">VIP Benefits</h2>
                 </div>
                 <div className="grid gap-6">
                    {[
                      { l: "Higher Interest", d: "Earn interest on your unused margin balance." },
                      { l: "Rapid Withdrawals", d: "Your withdrawal requests are given absolute priority." },
                      { l: "Exclusive Insights", d: "Receive daily institutional-grade market research." },
                      { l: "Custom Limits", d: "Flexible API limits for large-scale operations." }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4 group/item">
                        <div className="shrink-0 w-2 h-2 rounded-full bg-amber-500 mt-2 shadow-[0_0_10px_#f59e0b] group-hover/item:scale-150 transition-transform"></div>
                        <div className="text-sm md:text-base">
                          <span className="text-white font-normal">{item.l}: </span>
                          <span className="text-slate-400 font-light">{item.d}</span>
                        </div>
                      </div>
                    ))}
                 </div>
               </div>
            </div>

            <div className="flex flex-col justify-center space-y-8">
               <h2 className="text-3xl md:text-4xl font-normal text-white tracking-tight">Why FXCELITE is The Best Choice?</h2>
               <div className="space-y-6 text-base text-slate-400 leading-relaxed font-light">
                 <p>
                   We offer the infrastructure that professionals require to win. With an ECN account featuring low spreads, no conflict of interest, and the prestige of a VIP trading account, FXCELITE is the destination of choice for the world’s most demanding traders.
                 </p>
                 <div className="pt-4 flex flex-col gap-6">
                    <button
                      onClick={() => window.open('https://trade.FXCELITE.com/register', '_blank')}
                      className="px-10 py-4 rounded-full bg-white text-black font-normal text-base hover:bg-amber-500 transition-all shadow-[0_15px_40px_-15px_rgba(245,158,11,0.4)] hover:-translate-y-1">
                      Apply for VIP Status Today
                    </button>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ: INSTITUTIONAL STYLE --- */}
      <section className="py-24 border-t border-white/5 bg-[#010208]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-normal text-white tracking-tight mb-3">Frequently Asked</h2>
            <p className="text-slate-500 font-medium uppercase tracking-widest text-sm">Institutional Knowledge Base</p>
          </div>
          
          <div className="space-y-4">
            {[
              { q: "1. What is an ECN trading account?", a: "It is a \"No Dealing Desk\" account that links you directly to the interbank market for the best possible prices." },
              { q: "2. What is the difference between ECN and Standard accounts?", a: "ECN accounts provide raw spreads plus a commission, while Standard accounts provide wider spreads but no commission." },
              { q: "3. Do VIP accounts have lower spreads?", a: "Yes, VIP account holders are provided with raw spreads that can go as low as 0.0 pips." },
              { q: "4. Is there a minimum deposit for a VIP account?", a: "Yes, because of the advanced services it provides, the VIP account for high volume traders requires a higher initial deposit than standard accounts." },
              { q: "5. Is scalping allowed on ECN accounts?", a: "Absolutely. In fact, an ECN account with fast execution is the best environment for scalpers." },
              { q: "6. What are raw spreads?", a: "Raw spreads are the original buy/sell prices offered by banks without any markup charged by the broker." },
              { q: "7. Can I use Expert Advisors (EAs) on an ECN account?", a: "Yes, our ECN environment is optimized for algorithmic trading and fast execution." },
              { q: "8. Are there re-quotes on an ECN account?", a: "No, since you are trading directly with the market, your orders are executed at the best available price without re-quotes." },
              { q: "9. How is the commission calculated?", a: "The commission is a fixed fee per lot traded, which is clearly shown in your trade history." },
              { q: "10. How do I open an ECN account online?", a: "Register on the FXCELITE portal, select the ECN/VIP account type, and complete the verification process." },
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
      isOpen ? 'border-amber-500/40 bg-[#0B0E2A] shadow-xl' : 'border-white/5 bg-white/[0.01] hover:bg-white/[0.03]'
    }`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left group"
      >
        <span className={`font-normal text-base md:text-lg transition-colors ${isOpen ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
          {question}
        </span>
        <div className={`w-8 h-8 rounded-lg flex shrink-0 items-center justify-center transition-all duration-500 ml-4 ${
          isOpen ? 'bg-amber-500 text-black rotate-180' : 'bg-white/5 text-slate-500 group-hover:bg-white/10'
        }`}>
            <ChevronDown size={18} />
        </div>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 text-slate-400 text-sm md:text-base leading-relaxed animate-in fade-in slide-in-from-top-2 duration-500 font-light">
          <div className="h-[1px] w-full bg-white/5 mb-4"></div>
          {answer}
        </div>
      )}
    </div>
  );
}