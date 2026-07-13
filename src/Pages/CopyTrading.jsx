import React, { useState } from 'react';
import { 
  Users, 
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
  Rocket,
  Search,
  Eye,
  Target,
  BadgePercent,
  Play,
  Clock
} from 'lucide-react';

export default function CopyTrading() {
  return (
    <div className="bg-[#050110] text-slate-300 font-sans selection:bg-purple-500/30 overflow-x-hidden">
      
      {/* --- HERO: SOCIAL SYNERGY --- */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-2 pb-3 overflow-hidden">
        {/* Signal Propagation Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,#7e22ce15,transparent_50%),radial-gradient(circle_at_80%_70%,#ec489910,transparent_50%)]"></div>
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-[0.06] mix-blend-screen grayscale"
            alt="Social Trading Network"
          />
          {/* Pulsing Neural Nodes */}
          <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-purple-500 rounded-full animate-ping"></div>
          <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-pink-500 rounded-full animate-ping delay-500"></div>
          <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-indigo-500 rounded-full animate-ping delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 backdrop-blur-md mb-8">
            <Users size={14} className="text-purple-400" />
            <span className="text-xs font-normal uppercase tracking-[0.3em] text-purple-400 italic">Collective Intelligence v3.0</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-normal text-white leading-[1.1] tracking-tight mb-6">
            Copy Trading <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-500">Platform</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light mb-8 uppercase tracking-tight italic">
            Automate Your Success with FXCELITE
          </p>

          <div className="max-w-3xl mx-auto text-base md:text-lg text-slate-500 leading-relaxed font-light mb-12 px-6 py-4 border-y border-white/5 relative">
            <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-[2px] h-8 bg-purple-500"></div>
            Financial time availability or lack of technical expertise can be the greatest obstacles preventing many people from entering the financial markets. Copy trading platforms are the solution to the problem. You can simply and automatically track trading of professional, high-performing traders live through such platforms.
            <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-[2px] h-8 bg-pink-500"></div>
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
              <button 
                onClick={() => window.open('https://trade.FXCELITE.com/register', '_blank')}
                className="relative px-10 py-4 rounded-full bg-white text-black font-normal text-base transition-all hover:scale-[1.02] active:scale-95 shadow-xl">
                Join Our Copy Trading Platform
              </button>
            </div>
            <p className="text-purple-400 text-sm font-normal uppercase tracking-[0.2em] italic animate-pulse">
              Don't trade alone. Let the experts lead the way!
            </p>
          </div>
        </div>
      </section>

      {/* --- DEFINITION: THE MIRROR EFFECT --- */}
      <section className="py-24 relative bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
               <div className="space-y-6 text-base text-slate-400 leading-relaxed font-light italic">
                 <p>
                   At FXCELITE, we offer a social trading platform that integrates expert strategy and individual growth. New to the market? Or a busy professional? Now, through copy trading, you can trade forex without a lot of time spent on analyzing the charts.
                 </p>
                 <p>
                   Our forex copy trading system aims at both transparency and giving you control. You can select the "Strategy Providers" you like from their track record. Besides performance, you also get to see risk levels and winning rates, among other metrics. Once you press "Copy", our automated copy trading system takes over and replicates all the trades proportionally in your account.
                 </p>
               </div>
               
               <div className="p-8 rounded-3xl bg-gradient-to-br from-purple-900/20 to-indigo-900/20 border border-white/10 backdrop-blur-xl">
                 <h3 className="text-2xl font-normal text-white uppercase tracking-tight mb-4 underline decoration-pink-500 decoration-2 underline-offset-4">What is Copy Trading?</h3>
                 <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                   Copy trading, also known as mirror trading, is a form of social trading whereby your account is connected to the master account of a trader. When he or she opens up a position, the same is opened in your account. This is the ultimate copy trading for beginners solution because it removes the emotional stress and complexity of making manual decisions.
                 </p>
               </div>
            </div>

            <div className="relative group lg:sticky lg:top-32">
               <div className="absolute inset-0 bg-purple-500/10 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#0B0E2A]">
                 <img 
                    src="https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=2070&auto=format&fit=crop" 
                    className="w-full h-[500px] object-cover mix-blend-luminosity grayscale group-hover:grayscale-0 group-hover:mix-blend-normal transition-all duration-1000"
                    alt="Master Dashboard"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#050110] via-transparent to-transparent"></div>
                 <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/10 space-y-4">
                    <p className="text-slate-300 text-sm leading-relaxed font-medium">
                      Unlike traditional investment funds, a social trading platform puts you in complete control: You can start or stop copying at any time, adjust your risk settings, or even close individual trades manually. 
                    </p>
                    <div className="h-[1px] w-full bg-white/10"></div>
                    <p className="text-purple-400 text-xs font-normal italic">
                      Highly flexible, this copy trading forex platform experience takes the power of institutional-grade expertise down to your personal dashboard level.
                    </p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE: DATA FLOW CARDS --- */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-normal text-white tracking-tight uppercase italic leading-tight">Why Choose FXCELITE for <br/> Forex Copy Trading?</h2>
            <p className="text-pink-500 text-sm font-normal uppercase tracking-[0.2em]">Speed meets verification</p>
            <p className="text-slate-500 text-base max-w-2xl mx-auto font-light">We have developed the best copy trading platform by focusing on execution speed and trader verification.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { title: "Automatic Copying", desc: "Our system is 100% automated. Select a trader, and each move is replicated instantly.", icon: <Zap /> },
              { title: "Verified Results", desc: "Every Strategy Provider is audited for accuracy, ensuring you see real results.", icon: <RefreshCw /> },
              { title: "Equity Protection", desc: "Establish levels to automatically stop copying if a drawdown exceeds your comfort zone.", icon: <Shield /> },
              { title: "Strategic Mix", desc: "Subscribe to many traders at the same time to spread risk across different strategies.", icon: <Layers /> },
              { title: "Standard Entry", desc: "Start with a Standard Account and follow professionals with a fraction of the capital.", icon: <BadgePercent /> },
            ].map((item, i) => (
              <div key={i} className="group p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-purple-500/40 transition-all duration-500 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-5 group-hover:bg-purple-500 group-hover:text-black transition-all">
                   {React.cloneElement(item.icon, { size: 24 })}
                </div>
                <h3 className="text-base font-normal text-white mb-2 uppercase tracking-tight leading-tight italic">{item.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- COMPARISON: NEON TABLE --- */}
      <section className="py-24 border-y border-white/5 bg-[#0a0118]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-normal text-white tracking-tight mb-4 uppercase">Copy vs. Manual</h2>
            <p className="text-slate-500 text-base font-medium leading-relaxed italic">Choosing between copy trading vs manual trading depends on your lifestyle and goals.</p>
          </div>

          <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black/40 backdrop-blur-xl overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-purple-900/20">
                  <th className="p-6 text-sm font-normal text-white uppercase italic tracking-widest border-b border-white/10">Feature</th>
                  <th className="p-6 text-sm font-normal text-purple-400 uppercase italic tracking-widest border-b border-white/10 bg-purple-500/5">Copy Trading</th>
                  <th className="p-6 text-sm font-normal text-slate-500 uppercase italic tracking-widest border-b border-white/10">Manual Trading</th>
                </tr>
              </thead>
              <tbody className="text-sm md:text-base">
                {[
                  { f: "Time Required", c: "Minimal (Set & Forget)", m: "High (Daily Chart Analysis)" },
                  { f: "Skill Level", c: "Beginner Friendly", m: "Requires Deep Technical Knowledge" },
                  { f: "Emotional Stress", c: "Low", m: "High (Fear & Greed)" },
                  { f: "Control", c: "Proportional to Master", m: "100% Individual Control" },
                  { f: "Learning Curve", c: "Fast (Learn by Watching)", m: "Steep (Months/Years to Master)" }
                ].map((row, i) => (
                  <tr key={i} className="group hover:bg-white/[0.02] transition-colors">
                    <td className="p-6 font-normal text-slate-300 border-b border-white/5">{row.f}</td>
                    <td className="p-6 font-normal text-white border-b border-white/5 bg-purple-500/[0.02] group-hover:text-purple-400 transition-colors">{row.c}</td>
                    <td className="p-6 font-medium text-slate-500 border-b border-white/5">{row.m}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* --- FEATURES: PERFORMANCE PROFILES --- */}
      <section className="py-24 bg-white/[0.01] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8 space-y-10">
               <div className="space-y-4">
                 <h2 className="text-3xl md:text-4xl font-normal text-white tracking-tight uppercase leading-tight italic">Key Features of the <br/> FXCELITE Copy Platform</h2>
                 <p className="text-base text-slate-500 italic leading-relaxed font-light">
                   Our automatic copy trading environment is packed with tools to help you succeed.
                 </p>
               </div>

               <div className="grid md:grid-cols-2 gap-6">
                 {[
                   { t: "Performance Leaderboard", d: "Traders are ranked according to ROI, Maximum Drawdown, and the number of followers.", icon: <Activity /> },
                   { t: "Instant Replication", d: "The execution time is in milliseconds, leading to identical entry and exit points.", icon: <Zap /> },
                   { t: "Proportional Multiplier", d: "When the master risks 1%, you can choose to risk 1%, 0.5%, or 2% of your account.", icon: <TrendingUp /> },
                   { t: "Detailed Analytics", d: "See the full trade history of all providers before depositing your funds.", icon: <Layers /> },
                   { t: "Mobile Sync", d: "The performance of your copy trading platform is easily accessible from your mobile phone.", icon: <Smartphone /> },
                 ].map((feature, i) => (
                   <div key={i} className="group p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-purple-500/20 transition-all duration-500">
                      <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-5 border border-white/10 group-hover:scale-110 transition-transform">
                        {React.cloneElement(feature.icon, { size: 20 })}
                      </div>
                      <h4 className="text-lg font-normal text-white mb-2 uppercase tracking-tight">{feature.t}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed font-light">{feature.d}</p>
                   </div>
                 ))}
               </div>
            </div>

            <div className="lg:col-span-4 lg:sticky lg:top-32">
               <div className="relative p-8 rounded-3xl bg-[#0B0E2A] border border-white/10 shadow-2xl overflow-hidden group">
                  <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:scale-110 transition-transform duration-1000">
                    <Rocket size={120} />
                  </div>
                  <h3 className="text-2xl font-normal text-white mb-6 tracking-tight uppercase relative z-10">Social Power</h3>
                  <div className="space-y-6 relative z-10">
                     <p className="text-base text-purple-400 font-normal leading-tight italic">
                       Experience the power of social trading. Open a Demo Account to test the copy platform with virtual funds first.
                     </p>
                     <div className="space-y-4 text-sm text-slate-500 leading-relaxed font-light italic">
                        <p>Learn from how professional traders manage their trades while earning proportionally.</p>
                     </div>
                     <button 
                        onClick={() => window.open('https://trade.FXCELITE.com/register', '_blank')}
                        className="w-full py-4 rounded-2xl bg-white text-black font-normal hover:bg-purple-500 hover:text-white transition-all text-base shadow-lg">
                        Open a Demo Account
                     </button>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- HOW TO START: VERTICAL KINETIC FLOW --- */}
      <section className="py-24 bg-black relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-3xl md:text-5xl font-normal text-white tracking-tight uppercase italic leading-tight">How to Trade Forex <br/> Using Copy Trading</h2>
            <p className="text-purple-400 text-sm font-normal uppercase tracking-[0.2em]">A simple 4-step process</p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {[
              { n: "01", t: "Join FXCELITE", d: "Register for a Standard Account.", icon: <Search /> },
              { n: "02", t: "Browse Masters", d: "Go to our Social Platform section and study the leaderboard.", icon: <Eye /> },
              { n: "03", t: "Allocate Funds", d: "Decide the amount you want to invest in a particular trader.", icon: <Target /> },
              { n: "04", t: "Activate", d: "Simply click 'Copy' and watch your platform spring to life!", icon: <Play /> },
            ].map((step, i) => (
              <div key={i} className="group relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-pink-500/40 transition-all duration-500 text-center mt-6 lg:mt-0">
                 <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-black border border-purple-500/20 flex items-center justify-center font-normal text-purple-500 text-sm group-hover:bg-purple-500 group-hover:text-black transition-all">
                    {step.n}
                 </div>
                 <div className="w-14 h-14 rounded-full bg-purple-500/5 text-purple-500 flex items-center justify-center mx-auto mb-6 border border-purple-500/10 group-hover:scale-110 transition-transform shadow-[0_0_20px_-5px_rgba(168,85,247,0.3)] mt-2">
                   {React.cloneElement(step.icon, { size: 24 })}
                 </div>
                 <h4 className="text-lg font-normal text-white mb-3 tracking-tight leading-tight uppercase italic">{step.t}</h4>
                 <p className="text-sm text-slate-500 leading-relaxed font-medium">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TRUST & TARGET: DUAL PANEL --- */}
      <section className="py-24 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
             <div className="p-10 rounded-3xl bg-[#0B0E2A] border border-white/10 relative group overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 p-10 opacity-[0.03] group-hover:rotate-12 transition-transform duration-1000">
                    <Shield size={150} />
                </div>
                <div className="relative z-10 space-y-8">
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 border border-purple-500/20">
                         <Lock size={24} />
                      </div>
                      <h2 className="text-2xl font-normal text-white tracking-tight uppercase italic underline decoration-purple-500 decoration-4 underline-offset-[8px]">Security & Transparency</h2>
                   </div>
                   <div className="text-base text-slate-400 leading-relaxed font-light italic space-y-4">
                      <p>Trust is the key on which our best copy trading platform for forex is built. We guarantee that your money is never sent to your master trader. The money is always yours, and it is still in your own secure account.</p>
                      <p className="text-white font-medium italic">The master trader is just sending "signals," and this is where our copy trading platform comes into play, doing the replication for you.</p>
                   </div>
                </div>
             </div>

             <div className="space-y-10 lg:p-8">
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-normal text-white tracking-tight uppercase italic leading-tight">Who is Copy <br/> Trading For?</h2>
                  <p className="text-purple-400 font-normal uppercase tracking-[0.2em] text-xs">Diversification for every investor</p>
                </div>
                <div className="grid gap-5">
                   {[
                     { l: "Busy Professionals", d: "Individuals interested in the markets but lack time to look at charts.", icon: <Clock /> },
                     { l: "New Traders", d: "Learn from how professional traders manage their trades.", icon: <RefreshCw /> },
                     { l: "Investors", d: "Those looking to earn passive income via automatic systems.", icon: <Activity /> },
                     { l: "Risk Managers", d: "Traders diversifying their Standard Account to trade different styles.", icon: <Shield /> }
                   ].map((item, i) => (
                     <div key={i} className="flex gap-4 group/item items-center p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-all">
                       <div className="shrink-0 w-10 h-10 rounded-xl bg-purple-500/5 flex items-center justify-center text-purple-400 border border-purple-500/10 group-hover/item:scale-110 transition-transform">
                         {React.cloneElement(item.icon, { size: 20 })}
                       </div>
                       <div>
                         <span className="text-white text-base font-normal uppercase tracking-tight italic">{item.l}</span>
                         <p className="text-slate-500 text-sm font-light mt-1">{item.d}</p>
                       </div>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* --- FINALE: SOCIAL EXPLOSION --- */}
      <section className="py-24 bg-[#050110] text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 space-y-10">
           <h2 className="text-3xl md:text-5xl font-normal text-white tracking-tight uppercase leading-tight italic">Why FXCELITE is the Best <br/> Copy Trading Choice?</h2>
           <p className="text-base md:text-lg text-slate-400 leading-relaxed font-light italic">
             With a focus on automatic forex copy trading and a platform designed with the speed of modern markets in mind, FXCELITE is the best platform for those who understand the value of results. We pride ourselves on being a secure and profitable social environment.
           </p>
           <div className="pt-6 flex flex-col items-center gap-6">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                <button 
                  onClick={() => window.open('https://trade.FXCELITE.com/register', '_blank')}
                  className="relative px-12 py-5 rounded-2xl bg-white text-black font-normal text-lg transition-all shadow-[0_20px_60px_-15px_rgba(168,85,247,0.4)] hover:-translate-y-1">
                  Start Copy Trading Today
                </button>
              </div>
              <p className="text-purple-400 font-normal uppercase tracking-[0.3em] text-xs italic">Let the pros do the work. Elevate your portfolio!</p>
           </div>
        </div>
      </section>

      {/* --- FAQ: PRISMATIC STYLE --- */}
      <section className="py-24 border-t border-white/5 bg-black">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-3xl md:text-4xl font-normal text-white tracking-tight uppercase italic">Social FAQ</h2>
            <p className="text-slate-500 font-medium uppercase tracking-widest text-sm italic">Copy Trading Knowledge Base</p>
          </div>
          
          <div className="space-y-4">
            {[
              { q: "1. What is a copy trading platform?", a: "This is a service that enables you to automatically mirror another trader's trades right in your account." },
              { q: "2. Is copy trading for beginners only?", a: "Not at all. While it is a favorite copy trading platform among beginners, even pro investors use it to diversify their portfolios." },
              { q: "3. Must I pay the trader that I copy?", a: "Most strategy providers charge what's called a \"Performance Fee\". Its some percentage of the profits they make on your behalf. If they don't make you money, you pay nothing." },
              { q: "4. Can I stop copying at any time?", a: "Yes, on our social trading platform, you're in 100% control. You have the ability to stop or pause a copy with one click." },
              { q: "5. How much money do I need to start?", a: "You can start with a Standard Account and follow traders with only a few hundred dollars, depending on the provider's requirements." },
              { q: "6. Is copy trading safer compared to manual trading?", a: "Copy trading can be safer because it eliminates emotional mistakes, but market risk still remains. You need to always pick traders who have low drawdowns." },
              { q: "7. Can I copy more than one trader?", a: "Yes, for sure! We encourage you to follow multiple experts on our Forex Social Trading Platform in order to diversify your risk." },
              { q: "8. What if the master trader loses money?", a: "Since the trades are mirrored, when a master trader loses, the follower does so proportionally, too. That is why the setting of limits is important." },
              { q: "9. Do I have to keep my computer on all the time?", a: "No, our copy trading platform is cloud-based. After you click copy, it will work 24/7 even if your device is off." },
              { q: "10. How to Choose the Best Forex Copy Trading Platform", a: "Look for transparency, fast execution, and a large pool of verified traders. All these are possible with FXCELITE." },
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
      isOpen ? 'border-purple-500/40 bg-[#0B0E2A] shadow-lg' : 'border-white/5 bg-white/[0.01] hover:bg-white/[0.03]'
    }`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left group"
      >
        <span className={`font-normal text-sm md:text-base transition-colors uppercase italic ${isOpen ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
          {question}
        </span>
        <div className={`w-8 h-8 rounded-lg flex shrink-0 items-center justify-center transition-all duration-300 ml-4 ${
          isOpen ? 'bg-purple-500 text-black rotate-180' : 'bg-white/5 text-slate-500 group-hover:bg-white/10'
        }`}>
            <ChevronDown size={16} />
        </div>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 text-slate-400 text-sm md:text-base leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300 font-light italic">
          <div className="h-[1px] w-full bg-white/5 mb-4"></div>
          {answer}
        </div>
      )}
    </div>
  );
}