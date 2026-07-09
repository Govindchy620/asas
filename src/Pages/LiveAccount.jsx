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
  Coins,
  History,
  Scale,
  Users
} from 'lucide-react';

export default function LiveAccount() {
  return (
    <div className="bg-[#020410] text-slate-300 font-sans selection:bg-emerald-500/30 overflow-x-hidden">
      
      {/* --- HERO: EMERALD IMMERSION --- */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-1 pb-2 overflow-hidden">
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#10b98115,transparent_70%)]"></div>
          {/* <img 
            src="https://images.unsplash.com/photo-1611974717482-982c7a005b36?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-[0.12] mix-blend-luminosity"
            alt="Live Trading Terminal"
          /> */}
          {/* Animated Orbs */}
          <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-emerald-500/10 blur-[130px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-cyan-500/10 blur-[110px] rounded-full animate-pulse delay-700"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-emerald-500/5 border border-emerald-500/20 backdrop-blur-md mb-10 animate-fade-in">
            <Sparkles size={16} className="text-emerald-400" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-400 italic">Institutional Grade Environment</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tight mb-8">
            Live Trading <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-emerald-500/50">Account</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 max-w-5xl mx-auto leading-relaxed font-light mb-8 uppercase tracking-tighter">
            Start Trading with Real Money at Fxcelite
          </p>

          <div className="max-w-3xl mx-auto text-base md:text-lg text-slate-500 leading-relaxed font-light mb-12 px-4">
            Switching to a live trading account is a historical moment for every trader. This is the stage where theoretical learning is turned into practice and market fundamentals finally determine your real world earnings.
          </div>

          <div className="flex flex-col items-center gap-6">
            <button 
              onClick={() => window.open('https://trade.fxcelite.com/register', '_blank')}
              className="px-12 py-5 rounded-full bg-white text-black font-black text-lg hover:bg-emerald-400 transition-all shadow-[0_20px_60px_-15px_rgba(16,185,129,0.4)] hover:-translate-y-1 active:scale-95">
              Open Your Live Trading Account
            </button>
            <p className="text-emerald-400 text-sm font-bold uppercase tracking-[0.2em] italic">
              Ready to turn your analysis into action? Start trading today!
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
           <div className="w-[1px] h-12 bg-gradient-to-b from-emerald-500 to-transparent"></div>
        </div>
      </section>

      {/* --- INTRO SECTION: BOLD TEXT & GLASS --- */}
      <section className="py-24 relative border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6 text-base text-slate-400 leading-relaxed font-light">
                <p>
                  At Fxcelite, we create an environment for a live forex trading account which is highly capable of supporting the dynamic and fast-changing global market needs. Our live trading environment is perfect for retail traders as well as professionals to have a flawless, fair, and safe trading experience.
                </p>
                <div className="p-6 rounded-3xl bg-emerald-500/5 border-l-4 border-emerald-400 backdrop-blur-xl relative overflow-hidden group">
                   <img src="https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=2070&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-[0.05] group-hover:scale-105 transition-transform duration-[2000ms]" alt="" />
                   <p className="text-white text-lg font-bold leading-relaxed relative z-10 italic">
                     "Through a live trading account, you get the chance to enjoy institutional-level liquidity and state of the art technology."
                   </p>
                </div>
                <p>
                  It's more than just trading software; it's a professional live trading account setting that functions as your gateway to the global financial markets. Apart from the spreads, the speed of execution and all other aspects are geared towards your success when you are trading with real money.
                </p>
              </div>
            </div>

            <div className="relative group lg:sticky lg:top-32">
               <div className="absolute inset-0 bg-emerald-500/10 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#0B0E2A]">
                 <img 
                    src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop" 
                    className="w-full h-[500px] object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                    alt="Market Analysis Live"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#020410] via-transparent to-transparent"></div>
                 <div className="absolute bottom-6 left-6 right-6 p-8 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/10">
                    <div className="flex items-center gap-4 mb-4">
                      <TrendingUp size={24} className="text-emerald-400" />
                      <span className="text-white text-xl font-bold tracking-tight uppercase">What is a Live Account?</span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed font-medium">
                      A live trading account allows you to trade with real money in the financial markets. In contrast to the Demo account, operating with real money means real profit and real loss.
                    </p>
                    <p className="mt-4 text-slate-500 text-xs italic font-light">
                      Our live account forex trading system is a direct link to the markets, carrying out buying and selling of currencies, commodities, and indices.
                    </p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- VS SECTION: HIGH CONTRAST DUALITY --- */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight uppercase">Difference Between <br/> Demo and Live Account</h2>
            <p className="text-emerald-400 text-sm font-bold uppercase tracking-[0.2em]">Crucial for long-term success</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Psychology", desc: "There is no emotional risk in a demo account. In a live account, it is important to control your emotions as well as your trades.", icon: <Activity />, color: "emerald" },
              { title: "Execution", desc: "Live accounts involve real market liquidity, meaning slippage and market gaps are now part of your trading reality.", icon: <Zap />, color: "white" },
              { title: "Profit/Loss", desc: "Real profits and losses will affect your balance. You need to be very disciplined in your risk management.", icon: <Coins />, color: "emerald" },
              { title: "Speed", desc: "In an instant live trading account, you need a stable connection to enter and exit at the price levels you want.", icon: <Clock />, color: "white" },
            ].map((item, i) => (
              <div key={i} className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/40 transition-all duration-500 flex flex-col items-center text-center relative overflow-hidden shadow-xl">
                <div className={`w-16 h-16 rounded-2xl bg-${item.color === 'emerald' ? 'emerald-500/10' : 'white/5'} flex items-center justify-center text-${item.color === 'emerald' ? 'emerald-400' : 'white'} mb-6 border border-white/10 group-hover:scale-110 transition-transform`}>
                   {React.cloneElement(item.icon, { size: 28 })}
                </div>
                <h3 className="text-lg font-bold text-white mb-3 tracking-tight uppercase">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE: PREMIUM BENTO --- */}
      <section className="py-24 bg-white/[0.02] border-y border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-2xl space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight uppercase leading-tight">Why Choose Fxcelite for Your <br/> Live Trading Account?</h2>
              <p className="text-slate-500 text-base font-medium leading-relaxed italic">We focus on the three pillars of trading: speed, cost, and security.</p>
            </div>
            <div className="shrink-0 flex items-center gap-3 text-emerald-400 font-bold uppercase tracking-[0.2em] text-xs">
               <div className="w-10 h-[1px] bg-emerald-500/30"></div>
               Elite Selection
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Instant Live Account", desc: "Get verified and begin trading in minutes with our easy sign-up process.", icon: <Zap /> },
              { title: "Low Spreads", desc: "Take home more of your profits with some of the lowest spreads on the market.", icon: <Target /> },
              { title: "Security of Funds", desc: "Your money is held in segregated bank accounts, away from our company funds.", icon: <Lock /> },
              { title: "Multi-Asset Access", desc: "Diversify your Forex account to include gold, oil, and world indices.", icon: <Layers /> },
              { title: "Expert Support", desc: "Enjoy 24/5 technical and account support as you begin trading live.", icon: <Smartphone /> },
              { title: "Institutional Liquidity", desc: "Prices you see are the very ones you trade on with real-time data feeds.", icon: <Globe /> },
            ].map((item, i) => (
              <div key={i} className="group p-8 rounded-3xl bg-[#0B0E2A] border border-white/5 hover:border-emerald-500/40 transition-all duration-500 flex flex-col items-start relative overflow-hidden shadow-xl">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-125 transition-transform pointer-events-none">
                   {React.cloneElement(item.icon, { size: 100 })}
                </div>
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 border border-emerald-500/10 group-hover:scale-110 transition-transform">
                   {React.cloneElement(item.icon, { size: 24 })}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight uppercase leading-tight">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- KEY FEATURES: TECH-DASHBOARD VIEW --- */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-10">
               <div className="space-y-4">
                 <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight uppercase italic">Key Features of the Live Account</h2>
                 <p className="text-base text-slate-500 italic leading-relaxed font-light">
                   Our live trading account for beginners and pros alike includes a suite of premium features.
                 </p>
               </div>

               <div className="grid gap-6">
                 {[
                   { t: "Real-Time Execution", d: "Take advantage of ultra-low latency and millisecond order execution.", icon: <Cpu /> },
                   { t: "Flexible Leverage", d: "Select the leverage ratio that suits your risk tolerance.", icon: <Scale /> },
                   { t: "Advanced Analytics", d: "Leverage our technical analysis tools and indicators.", icon: <BarChart /> },
                   { t: "Mobile Trading", d: "Control your real-time account forex trading activities on the move.", icon: <Smartphone /> },
                   { t: "Transparent Pricing", d: "No hidden costs—only pure and clean market pricing.", icon: <Shield /> },
                 ].map((feature, i) => (
                   <div key={i} className="group flex items-start gap-6 p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-emerald-500/20 transition-all duration-300">
                      <div className="shrink-0 w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-400 group-hover:text-black transition-all">
                        {React.cloneElement(feature.icon, { size: 24 })}
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors uppercase tracking-tight">{feature.t}</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">{feature.d}</p>
                      </div>
                   </div>
                 ))}
               </div>
            </div>

            <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-8">
               <div className="relative p-8 rounded-3xl bg-[#0B0E2A] border border-white/10 shadow-2xl overflow-hidden group">
                  <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=2026&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-[0.05] group-hover:scale-105 transition-transform duration-1000" alt="" />
                  <h3 className="text-2xl font-bold text-white mb-6 tracking-tight uppercase relative z-10">Trade with Confidence</h3>
                  <div className="space-y-6 relative z-10">
                     <p className="text-base text-emerald-400 font-medium leading-relaxed italic">
                       Experience the best live forex trading account. Sign Up Now and trade with a broker that values your growth.
                     </p>
                     <div className="space-y-4 text-sm text-slate-400 leading-relaxed font-light italic">
                        <p>When you trade with a professional live trading account at Fxcelite, security is our number one concern. We employ high-level SSL encryption to protect your information, and our site is constantly monitored for reliability.</p>
                        <p>When trading with real money, you need a partner who adheres to strict financial guidelines to bring you peace of mind.</p>
                     </div>
                     <button
                        onClick={() => window.open('https://trade.fxcelite.com/register', '_blank')}
                        className="w-full py-4 rounded-2xl bg-white text-black font-bold hover:bg-emerald-400 transition-all text-base shadow-lg shadow-emerald-500/20">
                        Sign Up Now
                     </button>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- HOW TO START: CHROME STEPPER --- */}
      <section className="py-24 bg-black relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight uppercase">How to Start Trading <br/> with a Live Account</h2>
            <p className="text-emerald-400 text-sm font-bold uppercase tracking-[0.2em]">A Secure and Simple Process</p>
          </div>

          <div className="grid lg:grid-cols-5 gap-6">
            {[
              { n: "01", t: "Register", d: "Fill out our online application form.", icon: <FileText /> },
              { n: "02", t: "Verify", d: "Send us your ID documents to ensure a secure environment.", icon: <Shield /> },
              { n: "03", t: "Deposit", d: "Select from a variety of secure payment options.", icon: <Wallet /> },
              { n: "04", t: "Login", d: "Use your credentials to access our Trading Platforms.", icon: <UserCheck /> },
              { n: "05", t: "Trade", d: "Analyze the markets and execute your first trade.", icon: <TrendingUp /> },
            ].map((step, i) => (
              <div key={i} className="group relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/40 transition-all duration-500 text-center mt-6 lg:mt-0">
                 <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-xl bg-black border border-emerald-500/20 flex items-center justify-center font-bold text-emerald-400 text-sm group-hover:bg-emerald-400 group-hover:text-black transition-all">
                    {step.n}
                 </div>
                 <div className="w-16 h-16 rounded-full bg-emerald-500/5 text-emerald-400 flex items-center justify-center mx-auto mb-6 border border-emerald-500/10 group-hover:scale-110 transition-transform mt-2">
                   {React.cloneElement(step.icon, { size: 24 })}
                 </div>
                 <h4 className="text-lg font-bold text-white mb-3 tracking-tight uppercase">{step.t}</h4>
                 <p className="text-sm text-slate-500 leading-relaxed font-medium">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHO IT'S FOR: DARK NEON CARDS --- */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="p-10 rounded-3xl bg-[#0B0E2A] border border-white/10 relative group shadow-2xl overflow-hidden">
               <div className="absolute top-0 right-0 p-10 opacity-[0.03] group-hover:rotate-6 transition-transform duration-1000">
                  <UserCheck size={180} />
               </div>
               <div className="relative z-10 space-y-8">
                 <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20">
                      <Users size={28} />
                    </div>
                    <h2 className="text-2xl font-bold text-white tracking-tight uppercase">Who is it For?</h2>
                 </div>
                 <div className="grid gap-5">
                    {[
                      { l: "Serious Beginners", d: "People who have demo experience and are ready for real markets." },
                      { l: "Ambitious Investors", d: "People wanting to earn secondary income by market speculation." },
                      { l: "Professional Traders", d: "People who need fast execution and low spreads." },
                      { l: "Diversifiers", d: "People moving money from savings to dynamic global markets." }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4 group/item">
                        <div className="shrink-0 w-2 h-2 rounded-full bg-emerald-500 mt-2 shadow-[0_0_10px_#10b981] group-hover/item:scale-150 transition-transform"></div>
                        <div className="text-sm md:text-base">
                          <span className="text-white font-bold uppercase tracking-tight">{item.l}: </span>
                          <span className="text-slate-400 font-light leading-relaxed">{item.d}</span>
                        </div>
                      </div>
                    ))}
                 </div>
               </div>
            </div>

            <div className="flex flex-col justify-center space-y-8 lg:p-8 text-center lg:text-left">
               <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight uppercase leading-tight">Why Fxcelite is The Best Choice?</h2>
               <div className="space-y-6 text-base text-slate-400 leading-relaxed font-light italic">
                 <p>
                   With an instant live trading account opening and a world-class trading environment, we offer the best experience in having a live forex trading account. We don't just offer a platform; we offer the bridge to your financial independence.
                 </p>
                 <div className="pt-6 flex flex-col gap-6 items-center lg:items-start">
                   
                    <div className="flex items-center gap-3">
                       <div className="w-8 h-[1px] bg-white/20"></div>
                       <span className="text-emerald-400 font-bold uppercase tracking-widest text-xs">Your trading career starts here</span>
                       <div className="w-8 h-[1px] bg-white/20"></div>
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ: ARCHITECTURAL DESIGN --- */}
      <section className="py-24 border-t border-white/5 bg-[#010208]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight uppercase">Frequently Asked</h2>
            <p className="text-slate-500 font-medium uppercase tracking-widest text-sm italic">Live Account Knowledge Base</p>
          </div>
          
          <div className="space-y-4">
            {[
              { q: "1. How can I open a live trading account?", a: "It is very easy; you just need to click on the \"Sign Up\" button and fill in the required information, and then you will be able to open a live trading account." },
              { q: "2. What is the minimum deposit for a live trading account?", a: "We have different types of accounts to cater to the needs of all traders, no matter how much money they have." },
              { q: "3. Is my money safe in a live trading account?", a: "Yes, at Fxcelite, we keep all of our clients' money in a separate account at a reputable bank." },
              { q: "4. What is the difference between demo and live account execution?", a: "Live account execution is done in real market conditions, while demo account execution is simulated." },
              { q: "5. How long does it take to open an instant live trading account?", a: "If your documents are in order, you can open an instant live trading account on the same day." },
              { q: "6. Can I trade using my mobile phone?", a: "Yes. Our live account forex trading platform is fully optimized for smartphones and tablets." },
              { q: "7. Do you offer a live trading account with low spreads?", a: "Yes, we pride ourselves on providing highly competitive spreads to help our traders succeed." },
              { q: "8. What assets can I trade?", a: "With one account, you can trade Forex, Commodities, Indices, and Cryptocurrencies." },
              { q: "9. How do I withdraw my profits?", a: "You can request a withdrawal via your user dashboard, and the funds will be sent to your original payment method." },
              { q: "10. Is a professional live trading account suitable for everyone?", a: "Trading involves risk. We recommend that everyone starts with a Demo account before committing real capital." },
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
        <span className={`font-bold text-sm md:text-base transition-colors uppercase tracking-tight ${isOpen ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
          {question}
        </span>
        <div className={`w-8 h-8 rounded-lg flex shrink-0 items-center justify-center transition-all duration-300 ml-4 ${
          isOpen ? 'bg-emerald-400 text-black rotate-180' : 'bg-white/5 text-slate-500 group-hover:bg-white/10'
        }`}>
            <ChevronDown size={16} />
        </div>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300 font-light">
          <div className="h-[1px] w-full bg-white/5 mb-4"></div>
          {answer}
        </div>
      )}
    </div>
  );
}