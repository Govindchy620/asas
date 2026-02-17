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
  Scaling
} from 'lucide-react';

export default function MicroAccount() {
  return (
    <div className="bg-[#020410] text-slate-300 font-sans selection:bg-cyan-500/30 overflow-x-hidden">
      
      {/* --- PREMIUM HERO SECTION --- */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-32 overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#06b6d410,transparent_70%)]"></div>
          <img 
            src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-[0.05] mix-blend-screen"
            alt="Micro Tech Background"
          />
          {/* Animated Glows */}
          <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-cyan-500/10 blur-[130px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-blue-500/10 blur-[110px] rounded-full animate-pulse delay-700"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/5 border border-cyan-500/20 backdrop-blur-md mb-8">
            <Sparkles size={14} className="text-cyan-400" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">Micro Precision Trading</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tight mb-6">
            Micro Trading <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-cyan-500/50">Account</span>
          </h1>
          
          <p className="text-base md:text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed font-light mb-12">
            Start Small, Trade Big with Low Risk
          </p>

          <div className="grid lg:grid-cols-3 gap-6 mb-16 text-left max-w-5xl mx-auto">
             <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl group hover:border-cyan-500/30 transition-all duration-500">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-5 group-hover:scale-110 transition-transform">
                  <Scaling size={24} />
                </div>
                <h3 className="text-white font-bold text-lg mb-2 tracking-tight italic">Micro Lots</h3>
                <p className="text-sm text-slate-500 leading-relaxed">Trade in "Micro Lots" which are 1/100th of a standard lot. Perfect for tight risk control.</p>
             </div>
             <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl group hover:border-blue-500/30 transition-all duration-500">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-5 group-hover:scale-110 transition-transform">
                  <BadgePercent size={24} />
                </div>
                <h3 className="text-white font-bold text-lg mb-2 tracking-tight italic">Low Entry</h3>
                <p className="text-sm text-slate-500 leading-relaxed">Take advantage of our micro forex account with low entry requirements and affordable deposits.</p>
             </div>
             <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl group hover:border-cyan-500/30 transition-all duration-500">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-5 group-hover:scale-110 transition-transform">
                  <Zap size={24} />
                </div>
                <h3 className="text-white font-bold text-lg mb-2 tracking-tight italic">Fast Execution</h3>
                <p className="text-sm text-slate-500 leading-relaxed">Just like our Standard accounts, your orders are filled in milliseconds on our top-tier platforms.</p>
             </div>
          </div>

          <div className="flex flex-col items-center gap-6">
            <button className="px-10 py-4 rounded-2xl bg-white text-black font-bold text-base hover:bg-cyan-400 transition-all shadow-[0_15px_40px_-15px_rgba(6,182,212,0.4)] hover:-translate-y-1 active:scale-95">
              Open Your Micro Trading Account
            </button>
            <p className="text-cyan-400 text-sm max-w-md font-medium italic tracking-wide">
              Ready to trade live with minimal risk? Start your journey with a low deposit today!
            </p>
          </div>
        </div>

        {/* Scroll Line */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
           <div className="w-[1px] h-10 bg-gradient-to-b from-cyan-500 to-transparent"></div>
           <span className="text-[10px] font-bold text-cyan-500/50 uppercase tracking-[0.2em]">Scroll Down</span>
        </div>
      </section>

      {/* --- WHAT IS SECTION --- */}
      <section className="py-24 relative border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                What Is a <br/> Micro Trading Account?
              </h2>
              <div className="space-y-6 text-base text-slate-400 leading-relaxed font-light">
                <p>
                  Nevertheless, it can be very frightening for many first time traders to go from a micro account to a live market. This is where a micro trading account steps in. A micro trading account is designed for those traders who want to experience the market without risking their financial situation.
                </p>
                <p>
                  FXCElite's micro forex trading account allows you to trade with much smaller contract sizes. At FXCElite, we have the conviction that global markets should be accessible to everyone regardless of how little capital they start with.
                </p>
                <div className="p-6 rounded-2xl bg-cyan-500/5 border-l-4 border-cyan-500 backdrop-blur-sm">
                   <p className="text-white text-base font-medium leading-relaxed italic">
                     "A micro trading account is a type of retail trading account that gives the traders the ability to trade micro lots (1,000 units of the base currency)."
                   </p>
                </div>
                <p>
                  On the other hand, a standard trading account trades in 100,000 units. Because of this, forex trading with a micro account is much more reachable for the people who just want to try a little at first.
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative group">
               <div className="absolute inset-0 bg-cyan-500/10 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                 <img 
                    src="https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?q=80&w=1932&auto=format&fit=crop" 
                    className="w-full h-[500px] object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                    alt="Precision"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#020410] via-transparent to-transparent"></div>
                 <div className="absolute bottom-6 left-6 right-6 p-6 rounded-xl bg-black/60 backdrop-blur-2xl border border-white/10">
                    <p className="text-slate-200 text-sm leading-relaxed font-medium">By using a low deposit trading account, you can learn firsthand the effects of price actions, spreads, and speeds of execution without getting worried about significant financial losses.</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE SECTION --- */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">Why Choose a Micro <br/>Account for Beginners?</h2>
            <p className="text-slate-500 text-base font-light leading-relaxed max-w-2xl">Choosing a micro account for beginners is a strategic move to build confidence. It offers a "middle ground" between a risk-free demo and a high-stakes professional account.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Trade micro accounts", desc: "This helps you manage your risk by trading in smaller increments.", icon: <Globe />, color: "cyan" },
              { title: "Low Initial Capital", desc: "The micro trading account minimum deposit is set to be accessible to everyone.", icon: <Wallet />, color: "blue" },
              { title: "Real Market Psychology", desc: "Unlike the demo account, here you experience the real emotions of profit and loss, but in a controlled manner.", icon: <Activity />, color: "cyan" },
              { title: "Full Feature Access", desc: "You get to enjoy the same features of the micro trading account as our premium accounts.", icon: <Layers />, color: "blue" },
              { title: "Flexible Learning", desc: "It is the best micro account for small traders to test out new strategies or Expert Advisors (EAs).", icon: <Target />, color: "cyan" },
              { title: "Ideal For Newbies", desc: "It is the ideal low risk trading account for newbies who are determined to become good at trading.", icon: <Sparkles />, color: "blue" },
            ].map((item, i) => (
              <div key={i} className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-cyan-500/20 transition-all duration-500 flex flex-col items-start relative overflow-hidden">
                <div className={`w-12 h-12 rounded-xl bg-${item.color}-500/10 flex items-center justify-center text-${item.color}-400 mb-6 border border-${item.color}-500/10 group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-3 tracking-tight">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FEATURES SECTION --- */}
      <section className="py-24 bg-white/[0.01] border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-10">
               <div>
                 <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-4 uppercase">Key Features of the <br/>Micro Trading Account</h2>
                 <p className="text-base text-slate-500 italic leading-relaxed font-light">
                   Our micro trading account features ensure that while your risk is small, your trading experience is professional and high-quality.
                 </p>
               </div>

               <div className="grid gap-4">
                 {[
                   { t: "Micro Lot Trading", d: "Trade on 0.01 lots to control your position sizing.", icon: <Scaling /> },
                   { t: "Affordable Entry", d: "Take advantage of our micro forex account with low entry requirements.", icon: <BadgePercent /> },
                   { t: "Tight Spreads", d: "Enjoy our competitive pricing even on smaller trade sizes.", icon: <BarChart /> },
                   { t: "Expert Platforms", d: "Trade on our top-of-the-line Trading Platforms with complete technical analysis tools.", icon: <Monitor /> },
                   { t: "Fast Execution", d: "Just like our Standard accounts, your orders are filled in milliseconds.", icon: <Zap /> },
                 ].map((feature, i) => (
                   <div key={i} className="group flex items-start gap-5 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-cyan-500/20 transition-all duration-300">
                      <div className="shrink-0 w-10 h-10 rounded-lg bg-cyan-500/5 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black transition-all">
                        {React.cloneElement(feature.icon, { size: 20 })}
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors uppercase tracking-tight">{feature.t}</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">{feature.d}</p>
                      </div>
                   </div>
                 ))}
               </div>
            </div>

            <div className="lg:col-span-5 lg:sticky lg:top-32">
               <div className="relative p-8 rounded-3xl bg-[#0B0E2A] border border-white/10 shadow-2xl overflow-hidden group">
                  <div className="absolute inset-0 z-0">
                    <img 
                      src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop" 
                      className="w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-700"
                      alt="Trading Charts"
                    />
                  </div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-[60px] rounded-full"></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Trading Conditions</h3>
                    <div className="space-y-6">
                       <div className="space-y-4 text-base text-slate-300 leading-relaxed font-light">
                          <p>At FXCElite, we make sure that our micro account forex terms are always fair and transparent. Even with smaller trade volumes, you can enjoy full access to our global liquidity.</p>
                          <p>Our Trading Conditions are designed to ensure that your low risk trading account for beginners always works well even during high volatility trading sessions.</p>
                          <p>We also make sure that the Deposit and Withdrawal process is seamless so that you can focus on your growth as a trader.</p>
                       </div>
                       <div className="pt-6 border-t border-white/10">
                          <p className="text-cyan-400 font-medium text-sm mb-6 leading-relaxed italic">
                            Perfect your strategy with real skin in the game. Sign Up for a Micro Account and trade with precision.
                          </p>
                          <button className="w-full py-4 rounded-xl bg-white text-black font-bold hover:bg-cyan-400 transition-all text-base shadow-lg shadow-cyan-500/20">
                             Sign Up for a Micro Account
                          </button>
                       </div>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- HOW TO OPEN SECTION --- */}
      <section className="py-24 bg-[#020410] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">How to Open a <br/>Micro Trading Account</h2>
            <p className="text-slate-500 text-sm md:text-base font-medium uppercase tracking-[0.1em]">Joining the world of online forex trading is simple:</p>
          </div>

          <div className="grid lg:grid-cols-5 gap-6">
            {[
              { n: "01", t: "Sign Up", d: "Click on the open micro trading account and fill in your basic information.", icon: <MousePointer2 /> },
              { n: "02", t: "Verify", d: "Undergo a fast KYC process to guarantee a safe zone.", icon: <Shield /> },
              { n: "03", t: "Fund", d: "Fund your micro trading account minimum deposit through our secure channels.", icon: <Wallet /> },
              { n: "04", t: "Connect", d: "Access your desired platform (WebTrader or Desktop).", icon: <Smartphone /> },
              { n: "05", t: "Trade", d: "Begin trading with 0.01 lots and build your account at your preferred speed.", icon: <TrendingUp /> },
            ].map((step, i) => (
              <div key={i} className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-cyan-500/40 transition-all duration-300 text-center mt-6 lg:mt-0">
                 <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-lg bg-[#020410] border border-white/10 flex items-center justify-center font-bold text-sm text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black transition-all">
                    {step.n}
                 </div>
                 <div className="w-12 h-12 rounded-full bg-cyan-500/5 text-cyan-400 flex items-center justify-center mx-auto mb-4 border border-cyan-500/10 group-hover:scale-110 transition-transform mt-2">
                   {React.cloneElement(step.icon, { size: 20 })}
                 </div>
                 <h4 className="text-base font-bold text-white mb-2 tracking-tight leading-tight">{step.t}</h4>
                 <p className="text-sm text-slate-500 leading-relaxed font-medium">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECURITY & WHO SECTION --- */}
      <section className="py-24 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Security Card with Background Image */}
            <div className="p-8 md:p-10 rounded-3xl bg-[#0B0E2A] border border-white/10 overflow-hidden relative group shadow-2xl">
               <div className="absolute inset-0 z-0">
                 <img 
                   src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" 
                   className="w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-700"
                   alt="Cyber Security Concept"
                 />
                 <div className="absolute inset-0 bg-[#0B0E2A]/60 mix-blend-multiply"></div>
               </div>
               
               <div className="relative z-10 space-y-6">
                 <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 border border-cyan-500/30">
                     <Shield size={24} />
                   </div>
                   <h2 className="text-2xl font-bold text-white tracking-tight">Security & Reliability</h2>
                 </div>
                 <p className="text-base text-slate-300 leading-relaxed font-light italic">
                   Even with a low deposit trading account, your security is our priority. At FXCElite, your data and funds are protected by advanced encryption. Your funds are held in segregated accounts, ensuring a secure micro account for small traders to grow their portfolios.
                 </p>
               </div>
            </div>

            {/* Who Should Use Card with Background Image */}
            <div className="p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/5 relative group shadow-2xl overflow-hidden">
               <div className="absolute inset-0 z-0">
                 <img 
                   src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1974&auto=format&fit=crop" 
                   className="w-full h-full object-cover opacity-5 group-hover:opacity-10 transition-opacity duration-700 grayscale"
                   alt="Traders Collaboration"
                 />
               </div>

               <div className="relative z-10 space-y-6">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 border border-blue-500/30">
                      <UserCheck size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-white tracking-tight">Who Should Use?</h2>
                 </div>
                 <div className="grid gap-4">
                    {[
                      { l: "Absolute Beginners", d: "People transitioning from a demo account to real money." },
                      { l: "Small Capital Traders", d: "Investors looking for a micro forex account with a low deposit." },
                      { l: "Strategy Testers", d: "Experienced traders testing a new strategy in a real-world environment." },
                      { l: "Risk-Averse Individuals", d: "Anyone who wants to trade forex while ensuring potential losses are small." }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-3 group/item">
                        <div className="shrink-0 w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 shadow-[0_0_10px_#06b6d4] group-hover/item:scale-150 transition-transform"></div>
                        <div className="text-sm md:text-base">
                          <span className="text-white font-bold">{item.l}: </span>
                          <span className="text-slate-400 font-light leading-relaxed">{item.d}</span>
                        </div>
                      </div>
                    ))}
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- ELITE CHOICE FINALE --- */}
      <section className="py-24 relative">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-8">
           <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">Why FXCElite is The Best Choice?</h2>
           <p className="text-base md:text-lg text-slate-400 leading-relaxed font-light">
             We provide a micro trading account that doesn’t compromise on quality. With institutional-grade execution and a supportive environment, we help you bridge the gap to professional trading.
           </p>
           <div className="space-y-6 pt-4">
              <button className="px-10 py-4 rounded-2xl bg-white text-black font-bold text-base hover:bg-cyan-400 transition-all shadow-[0_15px_40px_-15px_rgba(6,182,212,0.4)] hover:-translate-y-1">
                Launch Your Micro Account Today
              </button>
              <div className="flex flex-col items-center gap-3">
                 <p className="text-cyan-400 font-bold uppercase tracking-widest text-xs">
                   Start small, dream big. Join us today!
                 </p>
                 <div className="flex gap-1.5">
                    <div className="w-3 h-1 bg-cyan-500 rounded-full animate-pulse"></div>
                    <div className="w-6 h-1 bg-blue-500 rounded-full animate-pulse delay-75"></div>
                    <div className="w-3 h-1 bg-cyan-500 rounded-full animate-pulse delay-150"></div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">Frequently Asked</h2>
            <p className="text-slate-500 font-medium uppercase tracking-widest text-sm">Micro Account Knowledge Base</p>
          </div>
          
          <div className="space-y-4">
            {[
              { q: "1. What is a micro trading account?", a: "It is a trading account that enables you to trade in micro lots (1,000 units), which is 100 times smaller than a standard trading account." },
              { q: "2. Is a micro account better for beginners?", a: "Yes, it is the best low risk trading account for beginners because it enables you to have real trading experience with minimal financial risk." },
              { q: "3. What is the micro trading account minimum deposit?", a: "We keep our deposit requirements low so that every small trader can take part in the markets." },
              { q: "4. Can I trade more than just forex on a micro account?", a: "Yes, you can trade different assets, although the lot sizes are particularly optimized for forex pairs." },
              { q: "5. What is a micro lot size?", a: "A micro lot is 0.01 of a standard lot, which is 1,000 units of the base currency." },
              { q: "6. Does a micro account have the same characteristics as a standard account?", a: "Yes, you get the same micro trading account features, including fast execution and powerful charting." },
              { q: "7. Can I use leverage on a micro account?", a: "Absolutely. Leverage is available to help you manage your positions effectively." },
              { q: "8. Is the execution speed slow on micro accounts?", a: "Not at all. At FXCElite, we offer a micro account with fast execution on all account types." },
              { q: "9. How do I manage my risk?", a: "With micro lots, you can risk a few cents or dollars per trade, which is perfect for learning." },
              { q: "10. How do I open a micro trading account?", a: "Just register on our website, choose the 'Micro' account type, and you are ready to trade." },
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
      isOpen ? 'border-cyan-500/40 bg-[#0B0E2A] shadow-xl' : 'border-white/5 bg-white/[0.01] hover:bg-white/[0.03]'
    }`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left group"
      >
        <span className={`font-bold text-base md:text-lg transition-colors ${isOpen ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
          {question}
        </span>
        <div className={`w-8 h-8 rounded-lg flex shrink-0 items-center justify-center transition-all duration-300 ml-4 ${
          isOpen ? 'bg-cyan-400 text-black rotate-180' : 'bg-white/5 text-slate-500 group-hover:bg-white/10'
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

// Utility icon for monitor
const Monitor = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="14" x="2" y="3" rx="2" /><line x1="8" x2="16" y1="21" y2="21" /><line x1="12" x2="12" y1="17" y2="21" />
  </svg>
);