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
  Calculator,
  Laptop,
  Users,
  GraduationCap
} from 'lucide-react';

export default function DemoAccount() {
  return (
    <div className="bg-[#020410] text-slate-300 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* --- HERO: THE MASTERY GATEWAY --- */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-2 pb-3 overflow-hidden">
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#3b82f610,transparent_70%)]"></div>
          <img 
            src="https://images.unsplash.com/photo-1642104704074-907c0698cbd9?q=80&w=1932&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-[0.1] mix-blend-screen"
            alt="Futuristic Trading Environment"
          />
          {/* Animated Orbs */}
          <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-blue-500/10 blur-[140px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 -left-20 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-blue-500/5 border border-blue-500/20 backdrop-blur-md mb-10 animate-fade-in">
            <GraduationCap size={16} className="text-blue-400" />
            <span className="text-xs font-normal uppercase tracking-[0.2em] text-blue-400 italic">Risk-Free Market Mastery</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-normal text-white leading-[1.1] tracking-tight mb-6">
            Trading Demo <br/> <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-blue-500/50">Account</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 max-w-5xl mx-auto leading-relaxed font-light mb-8 uppercase tracking-tight">
            Master the Markets Risk-Free
          </p>

          <div className="max-w-3xl mx-auto text-base md:text-lg text-slate-500 leading-relaxed font-light mb-12 px-4">
            Your skills must be honed first in a non-risk environment before you risk your hard-earned money in the live markets. A trading demo account is the perfect place for both new and seasoned traders to play and learn.
          </div>

          <div className="flex flex-col items-center gap-6">
            <button 
              onClick={() => window.open('https://trade.FXCELITE.com/register', '_blank')}
              className="px-12 py-5 rounded-full bg-white text-black font-normal text-lg hover:bg-blue-500 hover:text-white transition-all shadow-[0_20px_60px_-15px_rgba(59,130,246,0.4)] hover:-translate-y-1 active:scale-95">
              Open Your Free Demo Account
            </button>
            <p className="text-blue-400 text-sm font-normal uppercase tracking-[0.2em] italic animate-pulse">
              Practice makes perfect. Start trading with zero risk today!
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
           <div className="w-[1px] h-12 bg-gradient-to-b from-blue-500 to-transparent"></div>
        </div>
      </section>

      {/* --- WHAT IS SECTION: GLASSY BENTO --- */}
      <section className="py-24 relative border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6 text-base text-slate-400 leading-relaxed font-light">
                <p>
                  It can give you the experience of market fluctuations in real time, the use of professional tools and the testing of various strategies without the risk of losing money. At FXCELITE, we offer a free forex demo account that exactly matches our live trading environment, thus giving you the most realistic practice possible.
                </p>
                <p>
                  If you want to open a demo forex account to get acquainted with the basics or require the best MT4 demo account to test a complicated automated strategy, we have you covered. Our online trading demo account is loaded with virtual funds, which allow you to trade Forex pairs, commodities, and indices under real-market scenarios.
                </p>
                <div className="p-8 rounded-3xl bg-blue-500/5 border-l-4 border-blue-400 backdrop-blur-xl relative overflow-hidden group">
                   <img src="https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=2070&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-[0.05] group-hover:scale-105 transition-transform duration-[2000ms]" alt="" />
                   <h3 className="text-white text-xl font-normal tracking-tight uppercase mb-4 relative z-10">What is a Demo Account?</h3>
                   <p className="text-slate-300 text-sm leading-relaxed font-medium italic relative z-10">
                     "A free demo trading account is basically a practice platform a broker offers where you can make trades. Instead of real money, you get to trade with the broker's virtual money, but the price feeds and charting tools that you see are exactly the same ones that professional traders use."
                   </p>
                </div>
              </div>
            </div>

            <div className="relative group lg:sticky lg:top-32">
               <div className="absolute inset-0 bg-blue-500/10 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#0B0E2A]">
                 <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
                    className="w-full h-[500px] object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                    alt="Learning Environment"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#020410] via-transparent to-transparent"></div>
                 <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-black/80 backdrop-blur-3xl border border-white/10">
                    <p className="text-slate-300 text-sm leading-relaxed font-medium">
                      If you take an online trading demo account for a test drive, you will be able to work out how to get around the platform, open different orders, and figure out how leverage is applied. That is the very first step that every trader who subsequently becomes successful takes before they open a Live Account.
                    </p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHY OPEN SECTION: BOLD CARDS --- */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 space-y-4 text-center">
            <h2 className="text-3xl md:text-5xl font-normal text-white tracking-tight uppercase">Why Open a Free <br/> Trading Demo Account?</h2>
            <p className="text-blue-400 text-sm font-normal uppercase tracking-[0.2em]">Transition with confidence</p>
            <p className="text-slate-500 text-base max-w-2xl mx-auto font-light leading-relaxed pt-2">
              Transitioning from a curious observer to a confident trader requires hands-on experience. A forex demo account provides exactly that.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Risk-Free Experience", desc: "You can test your concepts without worrying about losing real money.", icon: <Shield />, color: "blue" },
              { title: "Expertise in Platform", desc: "Familiarize yourself with our Trading Platforms before entering the live market.", icon: <Laptop />, color: "indigo" },
              { title: "Try Out Strategies", desc: "Use your free demo account to test whether your technical analysis is valid.", icon: <Target />, color: "blue" },
              { title: "Knowledge of Leverage", desc: "Understand how margin influences your purchasing power using our tools.", icon: <Calculator />, color: "indigo" },
              { title: "No Commitment", desc: "Our free forex demo account does not require you to make any deposits.", icon: <Zap />, color: "blue" },
              { title: "1:1 Replica", desc: "We provide a 1:1 replica of our live trading infrastructure for true practice.", icon: <Activity />, color: "indigo" },
            ].map((item, i) => (
              <div key={i} className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-blue-500/40 transition-all duration-500 flex flex-col items-start text-left relative overflow-hidden shadow-xl">
                <div className="absolute top-0 right-0 p-6 opacity-[0.02] group-hover:scale-125 transition-transform pointer-events-none">
                   {React.cloneElement(item.icon, { size: 100 })}
                </div>
                <div className={`w-14 h-14 rounded-2xl bg-${item.color}-500/10 flex items-center justify-center text-${item.color}-400 mb-6 border border-white/10 group-hover:scale-110 transition-transform`}>
                   {React.cloneElement(item.icon, { size: 24 })}
                </div>
                <h3 className="text-lg font-normal text-white mb-3 tracking-tight uppercase leading-tight">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FEATURES: TECH-DASHBOARD --- */}
      <section className="py-24 bg-white/[0.02] border-y border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-10">
               <div className="space-y-4">
                 <h2 className="text-3xl md:text-4xl font-normal text-white tracking-tight uppercase italic">Key Features of the <br/> FXCELITE Demo Account</h2>
                 <p className="text-base text-slate-500 italic leading-relaxed font-light">
                   We offer what many consider the best demo account for forex trading by providing a 1:1 replica of our live trading infrastructure.
                 </p>
               </div>

               <div className="grid gap-6">
                 {[
                   { t: "Real-Time Price Feeds", d: "Practice with the same spreads and movements as real traders.", icon: <Activity /> },
                   { t: "Virtual Capital", d: "Begin with a flexible balance of virtual money to meet your practice requirements.", icon: <Wallet /> },
                   { t: "Full Asset Access", d: "Trade all Forex Trading pairs, Gold, Oil, and Global Indices.", icon: <Globe /> },
                   { t: "Technical Indicators", d: "Use 50+ in-built indicators and tools for in-depth analysis.", icon: <BarChart /> },
                   { t: "Expert Advisor (EA) Support", d: "We offer the best MT4 demo account environment to test your algorithmic bots.", icon: <Cpu /> },
                 ].map((feature, i) => (
                   <div key={i} className="group flex items-start gap-6 p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-blue-500/20 transition-all duration-300">
                      <div className="shrink-0 w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-400 group-hover:text-black transition-all">
                        {React.cloneElement(feature.icon, { size: 24 })}
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-base font-normal text-white group-hover:text-blue-400 transition-colors uppercase tracking-tight">{feature.t}</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">{feature.d}</p>
                      </div>
                   </div>
                 ))}
               </div>
            </div>

            <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-8">
               <div className="relative p-8 rounded-3xl bg-[#0B0E2A] border border-white/10 shadow-2xl overflow-hidden group">
                  <img src="https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=2070&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-[0.05] group-hover:scale-105 transition-transform duration-1000" alt="" />
                  <h3 className="text-2xl font-normal text-white mb-6 tracking-tight uppercase relative z-10">Ready to perform?</h3>
                  <div className="space-y-6 relative z-10">
                     <p className="text-base text-blue-400 font-medium leading-relaxed italic">
                       Ready to see how you perform? Sign Up for a Free Demo and take your first step toward market mastery.
                     </p>
                     <div className="space-y-4 text-sm text-slate-400 leading-relaxed font-light italic">
                        <h4 className="text-white font-normal uppercase tracking-tight">Demo Account vs. Live Account</h4>
                        <p>Although the same tools are used, the big difference is in the psychology. In a forex demo trading account, your emotions are not connected with real money. Once you have a profitable strategy, you can switch to a real trading environment. We always recommend risk-free practice first.</p>
                     </div>
                     <button 
                        onClick={() => window.open('https://trade.FXCELITE.com/register', '_blank')}
                        className="w-full py-4 rounded-2xl bg-white text-black font-normal hover:bg-blue-400 transition-all text-base shadow-lg shadow-blue-500/20">
                        Sign Up for a Free Demo
                     </button>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- HOW TO OPEN: NEON STEPPER --- */}
      <section className="py-24 bg-black relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-3xl md:text-5xl font-normal text-white tracking-tight uppercase">How to Open a <br/> Demo Forex Account</h2>
            <p className="text-blue-400 text-sm font-normal uppercase tracking-[0.2em]">Getting started is a 60-second process</p>
          </div>

          <div className="grid lg:grid-cols-5 gap-6">
            {[
              { n: "01", t: "Register", d: "Fill out a simple form to open a free trading demo account.", icon: <FileText /> },
              { n: "02", t: "Platform", d: "Select your software of choice (WebTrader or MT4/MT5).", icon: <Laptop /> },
              { n: "03", t: "Balance", d: "Decide on the amount of virtual money you wish to trade with.", icon: <Wallet /> },
              { n: "04", t: "Launch", d: "Open the platform from your browser or download it.", icon: <Cpu /> },
              { n: "05", t: "Trade", d: "Make your first practice trade and see the market in action.", icon: <TrendingUp /> },
            ].map((step, i) => (
              <div key={i} className="group relative p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-blue-500/40 transition-all duration-500 text-center mt-6 lg:mt-0">
                 <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-xl bg-black border border-blue-500/20 flex items-center justify-center font-normal text-blue-500 text-sm group-hover:bg-blue-400 group-hover:text-black transition-all">
                    {step.n}
                 </div>
                 <div className="w-14 h-14 rounded-full bg-blue-500/5 text-blue-500 flex items-center justify-center mx-auto mb-6 border border-blue-500/10 group-hover:scale-110 transition-transform mt-2">
                   {React.cloneElement(step.icon, { size: 24 })}
                 </div>
                 <h4 className="text-base font-normal text-white mb-2 tracking-tight uppercase">{step.t}</h4>
                 <p className="text-sm text-slate-500 leading-relaxed font-medium">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHO IT'S FOR: DARK CARDS --- */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="p-10 rounded-3xl bg-[#0B0E2A] border border-white/10 relative group shadow-2xl overflow-hidden">
               <div className="absolute top-0 right-0 p-10 opacity-[0.03] group-hover:rotate-6 transition-transform duration-1000">
                  <Laptop size={150} />
               </div>
               <div className="relative z-10 space-y-8">
                 <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20">
                      <Users size={28} />
                    </div>
                    <h2 className="text-2xl font-normal text-white tracking-tight uppercase">Who is it For?</h2>
                 </div>
                 <div className="grid gap-5">
                    {[
                      { l: "Total Beginners", d: "People learning \"what is forex\" without risking capital." },
                      { l: "Intermediate Traders", d: "People wanting to improve their entry and exit points." },
                      { l: "Pro Traders", d: "Algorithmic traders testing their new EA code." },
                      { l: "Platform Switchers", d: "People switching from another broker getting familiar with FXCELITE." }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4 group/item">
                        <div className="shrink-0 w-2 h-2 rounded-full bg-blue-500 mt-2 shadow-[0_0_10px_#3b82f6] group-hover/item:scale-150 transition-transform"></div>
                        <div className="text-sm md:text-base">
                          <span className="text-white font-normal uppercase tracking-tight">{item.l}: </span>
                          <span className="text-slate-400 font-light leading-relaxed">{item.d}</span>
                        </div>
                      </div>
                    ))}
                 </div>
               </div>
            </div>

            <div className="flex flex-col justify-center space-y-8 lg:p-8 text-center lg:text-left">
               <div className="space-y-4">
                 <h2 className="text-3xl md:text-5xl font-normal text-white tracking-tight uppercase leading-tight">Why FXCELITE is <br/> The Best Choice?</h2>
                 <p className="text-blue-400 font-normal uppercase tracking-[0.2em] text-sm">Close as possible to the real thing</p>
               </div>
               <div className="space-y-6 text-base text-slate-400 leading-relaxed font-light italic">
                 <p>
                   We don't "sugarcoat" our demo results. We offer a free forex demo account with the same latency and liquidity conditions as our live servers, so that your risk free practice is as close to the real thing as possible.
                 </p>
                 <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
                    <h4 className="text-white font-normal uppercase tracking-tight text-sm flex items-center gap-2">
                      <Shield size={16} className="text-blue-400" /> Security & Professionalism
                    </h4>
                    <p className="text-sm">Although you are using an online trading demo account, we protect your information in the same way that we protect our live accounts. We give you a professional environment.</p>
                 </div>
                 <div className="pt-4 flex flex-col gap-6 items-center lg:items-start">
                    <button 
                      onClick={() => window.open('https://trade.FXCELITE.com/register', '_blank')}
                      className="px-10 py-4 rounded-2xl bg-white text-black font-normal text-base hover:bg-blue-400 transition-all shadow-[0_15px_40px_-15px_rgba(59,130,246,0.4)] hover:-translate-y-1">
                      Open Your Demo Account Now
                    </button>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-24 border-t border-white/5 bg-[#010208]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-3xl md:text-4xl font-normal text-white tracking-tight uppercase">Frequently Asked</h2>
            <p className="text-slate-500 font-medium uppercase tracking-widest text-sm italic">Demo Account Knowledge Base</p>
          </div>
          
          <div className="space-y-4">
            {[
              { q: "1. Is the forex demo account free?", a: "Yes, our free forex demo account does not require any deposit or credit card information." },
              { q: "2. How long does the demo account last?", a: "Most of our demo accounts will last as long as you use them. See our terms for more information." },
              { q: "3. Can I reset my demo account balance?", a: "Yes. If you have depleted your balance, you can refill your online trading demo account through your account dashboard." },
              { q: "4. Is the price on the demo account real?", a: "Yes, we provide the same real-time price feeds for our free forex demo account as we do for our live accounts." },
              { q: "5. What is the best MT4 demo account for EAs?", a: "FXCELITE offers a high-speed server environment that is optimized for demo testing of Expert Advisors." },
              { q: "6. Do I have to verify my ID to open a demo account?", a: "No, you can open a demo forex account with only an email address to begin practicing right away." },
              { q: "7. Can I trade from my mobile phone?", a: "Yes, you can access your trading demo account using our mobile app or online platform." },
              { q: "8. What is the best way to practice?", a: "You can use our Trading Calculator to help you manage your risk and try to act as if your demo money was real." },
              { q: "9. How do I go from demo to live?", a: "When you feel ready, you can apply for a Live Account from your user area." },
              { q: "10. What products are available on the demo account?", a: "You have access to Forex Trading, Commodities, Indices, and Cryptocurrencies." },
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
      isOpen ? 'border-blue-500/40 bg-[#0B0E2A] shadow-xl' : 'border-white/5 bg-white/[0.01] hover:bg-white/[0.03]'
    }`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left group"
      >
        <span className={`font-normal text-sm md:text-base transition-colors uppercase tracking-tight ${isOpen ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
          {question}
        </span>
        <div className={`w-8 h-8 rounded-lg flex shrink-0 items-center justify-center transition-all duration-300 ml-4 ${
          isOpen ? 'bg-blue-400 text-black rotate-180' : 'bg-white/5 text-slate-500 group-hover:bg-white/10'
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