import React, { useState } from 'react';
import { 
  Network, 
  Zap, 
  Shield, 
  TrendingUp, 
  Layers, 
  Globe, 
  Activity, 
  ChevronDown, 
  Lock, 
  RefreshCw,
  Users,
  Target,
  BadgePercent,
  Settings,
  Database,
  Cpu,
  Server,
  FileText,
  Briefcase,
  CheckCircle,
  HelpCircle,
  Monitor,
  Grid3X3,
  Eye
} from 'lucide-react';

export default function PammAccountExactContent() {
  return (
    <div className="bg-[#010208] text-slate-300 font-sans selection:bg-indigo-500/30 overflow-x-hidden">
      
      {/* --- HERO SECTION: ANALYTICAL COMMAND CENTER --- */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-2 pb-3 overflow-hidden">
        {/* Futuristic Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#6366f108,transparent_70%)]"></div>
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent animate-[scan_6s_linear_infinite]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/5 border border-indigo-500/20 backdrop-blur-md mb-8">
              <Activity size={14} className="text-indigo-400" />
              <span className="text-xs font-normal uppercase tracking-[0.2em] text-indigo-400">Analytical Precision v4.1</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-normal text-white leading-[1.1] tracking-tight mb-6 uppercase">
              PAMM Trading Account – <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-indigo-200 to-indigo-500/50">
                The Power of Pooled Investing at FXCELITE
              </span>
            </h1>
            
            <p className="text-base md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light mb-8 uppercase tracking-tight">
              Often the pain point that stands between many investors and the financial market profit is either a shortage of time or lack of technical know-how. A PAMM trading account (Percentage Allocation Management Module) is your solution if you want to invest your money in a master fund managed by a professional trader.
            </p>

            <div className="max-w-3xl mx-auto text-sm md:text-base text-slate-500 leading-relaxed font-light mb-8 px-4 border-x border-white/5 py-4">
              At FXCELITE, we offer a PAMM investment platform that is a transparent, secure, and automated ecosystem in which investors and expert traders cooperate for mutual success. If you want a forex managed investment account to increase your savings, or if you are a professional trader wishing to expand your strategy, our PAMM forex account infrastructure can handle large amounts of capital with institutional precision.
            </div>

            <p className="text-lg md:text-xl text-indigo-400 font-normal italic mb-12">
              It is a perfect solution for people who want to rely on market experts to generate a passive income.
            </p>

            <div className="flex flex-col items-center gap-6">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-fuchsia-500 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                <button 
                  onClick={() => window.open('https://trade.FXCELITE.com/login', '_blank')}
                  className="relative px-10 py-4 rounded-xl bg-white text-black font-normal text-base transition-all active:scale-95 flex items-center gap-3">
                  Join Our PAMM Platform <Monitor size={20} />
                </button>
              </div>
              <p className="text-indigo-400 text-sm font-normal uppercase tracking-[0.2em] max-w-md mx-auto leading-snug">
                Let the experts trade for you. Join Our PAMM Platform and start growing your wealth with a managed forex investment account today!
              </p>
            </div>
          </div>
        </div>

        {/* HUD Decoration */}
        <div className="absolute bottom-10 left-10 hidden xl:block space-y-2 opacity-50">
            <div className="w-32 h-1 bg-white/5 rounded-full overflow-hidden">
                <div className="w-1/3 h-full bg-indigo-500 animate-pulse"></div>
            </div>
            <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">System: Nominal</div>
        </div>
      </section>

      {/* --- WHAT IS PAMM: TECHNICAL PANEL --- */}
      <section className="py-24 relative border-y border-white/5 bg-[#050617]/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="p-1 border-l-4 border-indigo-500 pl-6">
                 <h2 className="text-3xl md:text-4xl font-normal text-white tracking-tight mb-6 uppercase">What is a PAMM Account in Forex?</h2>
                 <div className="space-y-6 text-base text-slate-400 leading-relaxed font-light">
                   <p>
                     A PAMM account forex setup creates a very innovative piece of software that enables the pooling of all the investment assets of different investors into one Master Account. This Master Account is then used by the professional money manager to trade the markets. The most interesting feature of a percentage allocation management module plan is that all the profits and losses are distributed in proportion to the investment amounts of the different individuals.
                   </p>
                 </div>
              </div>
            </div>

            <div className="relative group lg:sticky lg:top-32">
               <div className="absolute inset-0 bg-indigo-500/10 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#0B0E2A] p-8">
                 <div className="absolute top-6 left-6 flex gap-3">
                    <div className="px-3 py-1.5 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-indigo-400 uppercase tracking-widest">Active Pool</div>
                    <div className="px-3 py-1.5 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-emerald-400 uppercase tracking-widest">Automated</div>
                 </div>
                 <div className="mt-12 p-6 rounded-xl bg-black/80 backdrop-blur-2xl border border-white/10">
                    <div className="flex items-center gap-3 mb-4">
                      <Grid3X3 size={20} className="text-indigo-500" />
                      <span className="text-white text-lg font-normal tracking-tight uppercase">Allocation Example</span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed font-medium italic">
                      For instance, if your contribution is 10% of the total pool, then you will earn 10% of the profits, excluding the money manager's fees, thus ensuring that all investors, regardless of their amounts, earn a satisfactory percentage on their contributed amount.
                    </p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHY INVEST: ANALYTIC GRID --- */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl space-y-4">
              <h2 className="text-3xl md:text-5xl font-normal text-white tracking-tight uppercase leading-tight">Why Invest in a PAMM Account for Passive Income?</h2>
              <p className="text-indigo-400 text-sm font-normal uppercase tracking-[0.2em]">The "Why" behind the "What"</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { t: "Hands-Free Growth", d: "There is no analysis of technical patterns required; the execution is delivered by the manager.", icon: <Zap /> },
              { t: "Track Records", d: "Our investment platform offers verified track records of all the investment managers under the PAMM system.", icon: <Activity /> },
              { t: "Low Entry Barrier", d: "Investors can invest in the forex market with a fraction of the capital required to invest using the PAMM account for private wealth management.", icon: <BadgePercent /> },
              { t: "Automatic Distribution", d: "Profit calculations and distribution are undertaken, guaranteeing overall accuracy and transparency.", icon: <RefreshCw /> },
              { t: "Security", d: "Your funds are in your name and yours alone in a safe Live account, and the manager does not have withdrawal privileges, merely trading privileges.", icon: <Shield /> },
            ].map((feature, i) => (
              <div key={i} className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-indigo-500/40 transition-all duration-500 flex flex-col items-start relative overflow-hidden">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6 border border-white/5 group-hover:bg-indigo-400 group-hover:text-black transition-all">
                   {React.cloneElement(feature.icon, { size: 24 })}
                </div>
                <h3 className="text-lg font-normal text-white mb-3 tracking-tight uppercase">{feature.t}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{feature.d}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 p-8 rounded-2xl bg-indigo-500/5 border border-indigo-500/20 text-center max-w-3xl mx-auto">
            <p className="text-slate-300 text-base font-light leading-relaxed">
              Using a PAMM account for investors is one of the most effective ways to diversify your portfolio without needing to watch the charts 24/5.
            </p>
          </div>
        </div>
      </section>

      {/* --- PAMM vs MAM: WORKSTATION DESIGN --- */}
      <section className="py-24 bg-white/[0.01] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-10">
               <div className="space-y-4">
                 <h2 className="text-3xl md:text-4xl font-normal text-white tracking-tight uppercase leading-tight">PAMM Account vs. MAM Account: Which One to Choose?</h2>
                 <p className="text-base text-slate-500 leading-relaxed font-light">
                   While both are managed solutions, understanding the PAMM account vs MAM account difference is key for both investors and managers:
                 </p>
               </div>

               <div className="grid md:grid-cols-2 gap-5">
                 <div className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-300">
                    <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-4 border border-indigo-500/10 group-hover:scale-110 transition-transform">
                      <Layers size={20} />
                    </div>
                    <h4 className="text-base font-normal text-white mb-2 uppercase tracking-tight">PAMM (Percentage Allocation)</h4>
                    <p className="text-slate-500 text-sm leading-relaxed font-light">All the money is invested together in a pool. It is easy for the investors and suitable for those who require a passive income with no management involvement.</p>
                 </div>

                 <div className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-300">
                    <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-4 border border-indigo-500/10 group-hover:scale-110 transition-transform">
                      <Users size={20} />
                    </div>
                    <h4 className="text-base font-normal text-white mb-2 uppercase tracking-tight">MAM (Multi-Account Manager)</h4>
                    <p className="text-slate-500 text-sm leading-relaxed font-light">The accounts have a common relationship. The accounts are managed separately. MAM is suitable for a higher net-worth individual. Check out more about MAM here.</p>
                 </div>
               </div>
            </div>

            <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-8">
               <div className="relative p-8 rounded-3xl bg-[#0B0E2A] border border-white/10 shadow-2xl overflow-hidden group">
                  <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:scale-110 transition-transform">
                    <Monitor size={120} />
                  </div>
                  <h3 className="text-2xl font-normal text-white mb-6 tracking-tight uppercase">2026 Tech</h3>
                  <div className="space-y-6">
                     <p className="text-base text-indigo-400 font-medium leading-relaxed">
                       Experience the power of 2026 technology. Open a Live Account to unlock full charting capabilities.
                     </p>
                     <div className="text-sm text-slate-500 leading-relaxed font-light">
                        <p>Our interactive technical analysis charts for Forex and CFDs are designed to enable you to recognize repeatable patterns.</p>
                     </div>
                     <button 
                       onClick={() => window.open('https://trade.FXCELITE.com/register', '_blank')}
                       className="w-full py-4 rounded-xl bg-white text-black font-normal hover:bg-indigo-400 transition-all text-base shadow-lg">
                       Open Live Account
                     </button>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- KEY FEATURES: DUAL COLUMN --- */}
        <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
            {/* Content Wrapper */}
            <div className="space-y-16">
            
            {/* Heading Section (Centered in the Middle) */}
            <div className="space-y-4 max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-normal text-white tracking-tight uppercase leading-tight">
                Key Features of the FXCELITE PAMM Platform
                </h2>
                <p className="text-indigo-400 text-sm font-normal uppercase tracking-[0.2em]">
                We provide a professional PAMM account environment that prioritizes the investor experience.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 relative">
                {/* Background Blur Effect */}
                <div className="absolute inset-0 bg-indigo-500/10 blur-[80px] rounded-full opacity-30 pointer-events-none"></div>

                <div className="space-y-4 z-10">
                {[
                    { t: "Deep Performance Analytics", d: "Filter managers by ROI, drawdown, and age of the account." },
                    { t: "Flexible Funding", d: "Adding or withdrawing funds from your Forex PAMM account is possible during predefined \"open windows.\"" },
                    { t: "Manager Ratings", d: "The clear ranking system will help you to choose the best PAMM account for forex trading." },
                ].map((feature, i) => (
                    <div key={i} className="flex gap-4 group/item items-center p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-all">
                    <div className="shrink-0 w-12 h-12 rounded-lg bg-indigo-500/5 flex items-center justify-center text-indigo-400 border border-indigo-500/10 group-hover/item:scale-110 transition-transform">
                        <CheckCircle size={20} />
                    </div>
                    <div className="text-left">
                        <span className="text-white text-base font-normal uppercase tracking-tight">{feature.t}</span>
                        <p className="text-slate-500 text-sm font-light mt-1">{feature.d}</p>
                    </div>
                    </div>
                ))}
                </div>

                <div className="space-y-4 z-10">
                {[
                    { t: "Risk Protection", d: "Set your own \"Stop-Loss\" levels for the entire investment to protect your capital." },
                    { t: "Instant Onboarding", d: "Get from Live to a PAMM investment in only a few clicks." },
                ].map((feature, i) => (
                    <div key={i} className="flex gap-4 group/item items-center p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-all">
                    <div className="shrink-0 w-12 h-12 rounded-lg bg-indigo-500/5 flex items-center justify-center text-indigo-400 border border-indigo-500/10 group-hover/item:scale-110 transition-transform">
                        <CheckCircle size={20} />
                    </div>
                    <div className="text-left">
                        <span className="text-white text-base font-normal uppercase tracking-tight">{feature.t}</span>
                        <p className="text-slate-500 text-sm font-light mt-1">{feature.d}</p>
                    </div>
                    </div>
                ))}
                </div>

            </div>
            </div>
        </div>
        </section>

      {/* --- HOW TO INVEST: STEPPER GRID --- */}
      <section className="py-24 bg-black relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-3xl md:text-5xl font-normal text-white tracking-tight uppercase">How to Invest in a Forex PAMM Account</h2>
            <p className="text-indigo-400 text-sm font-normal uppercase tracking-[0.2em]">Starting your journey into managed investing is a 4-step process:</p>
          </div>

          <div className="grid lg:grid-cols-4 gap-6">
            {[
              { t: "Registration", d: "Open your Live account with FXCELITE.", icon: <FileText /> },
              { t: "Browse", d: "Go to the PAMM-investment platform and consider the manager leaderboard.", icon: <Globe /> },
              { t: "Invest", d: "Select a manager and determine the amount of your capital to be invested.", icon: <Target /> },
              { t: "Monitor", d: "Your growth in real time through your investor dashboard.", icon: <Activity /> },
            ].map((step, i) => (
              <div key={i} className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-indigo-500/40 transition-all duration-500 text-center mt-6 lg:mt-0">
                 <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-xl bg-black border border-indigo-500/20 flex items-center justify-center font-normal text-indigo-400 text-sm group-hover:bg-indigo-400 group-hover:text-black transition-all">
                    0{i + 1}
                 </div>
                 <div className="w-14 h-14 rounded-full bg-indigo-500/5 text-indigo-400 flex items-center justify-center mx-auto mb-6 border border-indigo-500/10 group-hover:scale-110 transition-transform mt-2">
                   {React.cloneElement(step.icon, { size: 24 })}
                 </div>
                 <h4 className="text-base font-normal text-white mb-2 tracking-tight uppercase">{step.t}</h4>
                 <p className="text-sm text-slate-500 leading-relaxed font-medium">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECURITY & RELIABILITY --- */}
      <section className="py-24 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
             <div className="p-10 rounded-3xl bg-indigo-500/5 border border-indigo-500/20 relative group overflow-hidden shadow-xl">
                <div className="absolute top-0 right-0 p-10 opacity-[0.03] group-hover:rotate-12 transition-transform duration-1000">
                    <Shield size={150} />
                </div>
                <div className="relative z-10 space-y-8">
                   <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 border border-indigo-500/20">
                         <Shield size={24} />
                      </div>
                      <h2 className="text-2xl font-normal text-white tracking-tight uppercase">Security & Reliability for Investors</h2>
                   </div>
                   <div className="text-base text-slate-400 leading-relaxed font-light space-y-4">
                      <p>The main concern of any investor is the safety of their capital. Our PAMM account designed for investors in forex is designed in a highly regulated and encrypted system.</p>
                      <p className="text-white font-medium">The management module in the percentage allocation is done by our in-house software. This way, the money manager does not touch your money in the actual sense; they just handle the trading signal.</p>
                   </div>
                </div>
             </div>

             <div className="space-y-8 lg:p-6">
                <h2 className="text-3xl md:text-4xl font-normal text-white tracking-tight uppercase">Who is the PAMM Account For?</h2>
                <div className="grid gap-4">
                   {[
                     { t: "Busy Professionals", d: "This includes people who wish to have market exposure but do not have time to do their own trading." },
                     { t: "New Investors", d: "Those interested in investing PAMM to learn how the pros do it for a beginner." },
                     { t: "Diversifiers", d: "Those interested in moving from low-yielding bank accounts into a managed investment account trading foreign currencies." },
                     { t: "Pro Traders", d: "These are professional traders who wish to open a professional PAMM account to manage external capital and earn performance fees." },
                   ].map((item, i) => (
                     <div key={i} className="flex gap-4 group/item items-center p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-all">
                       <div className="shrink-0 w-12 h-12 rounded-lg bg-indigo-500/5 flex items-center justify-center text-indigo-400 border border-indigo-500/10 group-hover/item:scale-110 transition-transform">
                         <Users size={20} />
                       </div>
                       <div>
                         <span className="text-white text-base font-normal uppercase tracking-tight">{item.t}</span>
                         <p className="text-slate-500 text-sm font-light mt-1">{item.d}</p>
                       </div>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* --- WHY FXCELITE CTA --- */}
      <section className="py-24 bg-[#010208] text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 space-y-10">
           <h2 className="text-3xl md:text-5xl font-normal text-white tracking-tight uppercase leading-tight">Why FXCELITE is the Best Choice for PAMM Trading?</h2>
           <p className="text-base md:text-lg text-slate-400 leading-relaxed font-light">
             We offer the best PAMM account for forex trading by specializing in transparency, data authenticity, and a user-friendly investment platform. Our goal is to empower investors in creating and building wealth by linking them with the top forex traders in the world.
           </p>
           <div className="pt-6 flex flex-col items-center gap-6">
              <div className="relative group">
                <div className="absolute -inset-1 bg-indigo-500 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <button 
                  onClick={() => window.open('https://trade.FXCELITE.com/register', '_blank')}
                  className="relative px-12 py-5 rounded-xl bg-white text-black font-normal text-lg transition-all shadow-[0_15px_40px_-15px_rgba(99,102,241,0.4)] hover:-translate-y-1">
                  Start Your PAMM Investment
                </button>
              </div>
              <p className="text-indigo-400 font-normal uppercase tracking-[0.2em] text-xs">Your wealth, professionally managed. Start Your PAMM Investment and take the first step toward passive financial growth!</p>
           </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-24 border-t border-white/5 bg-[#000000]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-3xl md:text-4xl font-normal text-white tracking-tight uppercase">Frequently Asked Questions (FAQs)</h2>
            <p className="text-slate-500 font-medium uppercase tracking-widest text-sm">Advanced Charting Knowledge Base</p>
          </div>
          
          <div className="space-y-4">
            {[
              { q: "1. What is a PAMM trading account?", a: "It is an investment account wherein a trader handles the investments of various investors." },
              { q: "2. How do I make money in a PAMM account?", a: "You make a proportionate share of the profits made by the manager, net of his performance fees." },
              { q: "3. Are there any minimum investments for a PAMM account?", a: "Yes, each manager has their respective minimum, but our PAMM account is designed for investors of different budgets." },
              { q: "4. Can I lose money in a PAMM account?", a: "Yes, there is the potential to lose funds, as this is a form of foreign exchange trading; however, the key is to check the drawdown history of the individual’s trades." },
              { q: "5. What are the differences between PAMM and Copy Trading?", a: "When trading in Copy Trading, you copy trades, while in PAMM, your money and other people’s money are combined in an account managed by the EA." },
              { q: "6. When can I withdraw my money?", a: "Withdrawals may be possible during so-called \"open intervals,\" which are designated by the manager." },
              { q: "7. Who is the best PAMM-account provider in forex trading?", a: "The answer is that the best PAMM-account provider is the one whose manager demonstrates consistent performance in increasing capital without taking unnecessary risks—performance which is clearly reflected in our leaderboard." },
              { q: "8. Do I have to give a fee to the manager?", a: "Yes, but only a \"Performance Fee\" on the profits made. If the manager does not make a profit, no fee is paid." },
              { q: "9. Can I manage my own PAMM account?", a: "If you are a professional trader, you can apply to become a Manager and offer your professional PAMM account to our investor community." },
              { q: "10. How do I start?", a: "You can open a Live account with FXCELITE and proceed to the section called PAMM, which can be accessed via our client area." },
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
    <div className={`rounded-xl border transition-all duration-300 overflow-hidden ${
      isOpen ? 'border-indigo-500/40 bg-[#0B0E2A] shadow-lg' : 'border-white/5 bg-white/[0.01] hover:bg-white/[0.03]'
    }`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left group"
      >
        <span className={`font-normal text-sm md:text-base transition-colors uppercase tracking-tight ${isOpen ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
          {question}
        </span>
        <div className={`w-8 h-8 rounded-lg flex shrink-0 items-center justify-center transition-all duration-300 ml-4 ${
          isOpen ? 'bg-indigo-400 text-black rotate-180' : 'bg-white/5 text-slate-500 group-hover:bg-white/10'
        }`}>
            <ChevronDown size={16} />
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