import React, { useState } from 'react';
import { 
  Zap, 
  Gift, 
  Shield, 
  TrendingUp, 
  ArrowRight, 
  ChevronDown, 
  Lock, 
  Coins, 
  Target, 
  BadgePercent, 
  Users, 
  Sparkles, 
  Activity, 
  CheckCircle2, 
  Layers, 
  History, 
  Rocket, 
  Search, 
  Clock, 
  MousePointer2, 
  Terminal,
  Gem,
  Flame,
  Gauge,
  Eye
} from 'lucide-react';

export default function Bonuses() {
  return (
    <div className="bg-[#03040b] text-white font-sans selection:bg-pink-500/30 overflow-x-hidden">
      
      {/* --- HERO: THE DIGITAL FIREPOWER --- */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-2 pb-3 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#db277712,transparent_70%)]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[700px] bg-gradient-to-r from-pink-900/20 via-indigo-900/10 to-transparent blur-[140px] rounded-full rotate-6"></div>
          <img 
            src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=2070" 
            className="w-full h-full object-cover opacity-10 mix-blend-overlay scale-110"
            alt="Energy and Boost"
          />
          {/* Neon Grid Overlay */}
          <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#db2777_1px,transparent_1px),linear-gradient(to_bottom,#db2777_1px,transparent_1px)] bg-[size:100px_100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-pink-500/30 bg-pink-500/10 backdrop-blur-xl mb-8 animate-pulse">
            <Flame size={14} className="text-pink-400" />
            <span className="text-xs font-normal uppercase tracking-[0.3em] text-pink-400 italic">Capital Accelerator v15.0</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-normal text-white leading-[1.1] tracking-tight mb-6">
            Forex Trading <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-white to-cyan-400 italic uppercase">Bonuses</span>
          </h1>
          
          <p className="text-base md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light mb-8 uppercase tracking-widest italic">
            Boost Your Capital and Trading Potential
          </p>

          <div className="max-w-3xl mx-auto text-sm md:text-base text-white/80 leading-relaxed font-light mb-12 px-6 py-8 border border-white/20 bg-white/[0.05] backdrop-blur-3xl relative shadow-2xl rounded-3xl group overflow-hidden">
             <div className="absolute top-0 left-0 p-6 opacity-10 group-hover:scale-110 transition-transform">
               <Rocket size={80} className="text-pink-500" />
             </div>
             In the cutthroat currency trading market, having a reserve of extra funds can literally be the line that separates one missed opportunity from a successful trade. We at FXCELITE are glad to offer a wide range of bonus schemes from forex brokers that are aimed to inject more "firepower" into your trading account. Whether you are a newbie who needs a competitive advantage or a seasoned professional who wants to make the most of your margin, we have tailored forex trading bonus offers that can help your development and prolong your stay in the market.
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-pink-600 to-indigo-600 rounded-3xl blur opacity-40 group-hover:opacity-80 transition duration-1000"></div>
              <button 
                onClick={() => window.open('https://trade.FXCELITE.com/login', '_blank')}
                className="relative px-10 py-4 bg-white text-black font-normal text-base md:text-lg rounded-2xl transition-all hover:scale-[1.03] active:scale-95 shadow-xl uppercase tracking-tight italic flex items-center gap-3">
                Check Current Bonus Offers <Sparkles size={20} className="text-pink-600" />
              </button>
            </div>
            <p className="text-pink-400 text-sm font-normal uppercase tracking-[0.2em] italic">
              Ready to supercharge your account? Claim your boost today!
            </p>
          </div>
        </div>
      </section>

      {/* --- SECTION 1: TRANSPARENCY PHILOSOPHY --- */}
      <section className="py-24 relative border-y border-white/10 bg-white/[0.02] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
               <div className="space-y-6">
                 <h2 className="text-3xl md:text-5xl font-normal text-white uppercase tracking-tight leading-tight italic border-l-4 border-pink-500 pl-4">Strategic <br/> Leverage</h2>
                 <div className="space-y-6 text-base text-white/80 leading-relaxed font-light italic">
                   <p>
                     We, at FXCELITE, have taken the approach of forex trading bonuses as a matter of transparency. We are of the opinion that a bonus should be a lever for accomplishing success rather than an undisclosed snare. Therefore, we deliver secure and transparent trading bonuses with very clear rules so that you understand perfectly how to qualify, trade, and, finally, withdraw your winnings.
                   </p>
                   <div className="p-6 rounded-2xl bg-pink-500/10 border-r-2 border-cyan-500 backdrop-blur-xl text-white font-normal shadow-lg">
                     <h3 className="text-xl font-black mb-3 uppercase tracking-tight">How Forex Bonuses Work</h3>
                     <p className="text-sm text-white/90 font-medium">
                       A forex deposit bonus refers to a credit or a payment by a broker to a client who has funded their account. It is an extra margin that enables you to take bigger positions or sustain your trades during market fluctuations.
                     </p>
                   </div>
                   <p>
                     Most bonuses for trading are given in the form of "Trading Equity". That is to say, the bonus will probably not be withdrawable right away, but any profits made with that money belong to you.
                   </p>
                 </div>
               </div>
            </div>

            <div className="relative group lg:sticky lg:top-32">
               <div className="absolute inset-0 bg-pink-500/20 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <div className="relative border border-white/20 shadow-2xl bg-[#0B0E2A] overflow-hidden rounded-3xl p-1">
                 <img 
                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200" 
                    className="w-full h-[400px] object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 rounded-2xl"
                    alt="Digital Security and Finance"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#03040b] via-transparent to-transparent pointer-events-none"></div>
                 <div className="absolute bottom-6 left-6 right-6 p-6 bg-black/90 border border-pink-500/50 backdrop-blur-xl rounded-2xl shadow-xl">
                    <div className="w-8 h-1 bg-pink-500 mb-4"></div>
                    <p className="text-white/90 text-sm leading-relaxed font-medium italic">
                      "A bonus should be a lever for accomplishing success rather than an undisclosed snare."
                    </p>
                    <div className="mt-4 flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-pink-500/20">
                        <Gauge size={18} className="text-pink-400" />
                      </div>
                      <span className="text-pink-400 font-normal uppercase tracking-widest text-[10px] font-mono">Live Equity Boost Active</span>
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: TYPES (THE NEON GRID) --- */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-normal text-white tracking-tight uppercase italic leading-tight">Types of Online <br/> Trading Bonuses</h2>
            <p className="text-pink-400 text-sm font-normal uppercase tracking-[0.2em]">Optimized for every goal</p>
            <p className="text-white/70 text-base max-w-2xl mx-auto font-light leading-relaxed italic border-t border-white/10 pt-4 mt-4">
              We offer several types of bonus for forex traders to suit different experience levels and goals:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Welcome Bonus", desc: "An incentive offered to new clients who are opening their first live account.", icon: <Sparkles /> },
              { title: "Deposit Bonus", desc: "A percentage-based match (e.g., 50% or 100%) on what you deposit, applicable to top-ups.", icon: <BadgePercent /> },
              { title: "No Deposit Bonus", desc: "A small amount of 'free' capital given to the trader after verification to pursue risk-free trading.", icon: <Coins /> },
              { title: "Loyalty & Rebate", desc: "Ongoing rewards for high-volume traders, where a percentage of spreads is returned.", icon: <Target /> },
            ].map((item, i) => (
              <div key={i} className="group p-6 bg-white/[0.05] border border-white/10 hover:border-pink-500/50 transition-all duration-500 flex flex-col items-start text-left relative overflow-hidden rounded-2xl shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-b from-pink-500/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center text-pink-400 mb-5 border border-white/20 group-hover:scale-110 group-hover:bg-pink-500 group-hover:text-white transition-all">
                   {React.cloneElement(item.icon, { size: 24 })}
                </div>
                <h3 className="text-lg font-normal text-white mb-3 tracking-tight leading-tight uppercase italic">{item.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed font-light italic">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 3: WHY USE (THE POWER BENTO) --- */}
      <section className="py-24 bg-white/[0.02] border-y border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8 space-y-10">
               <div className="space-y-4">
                 <h2 className="text-3xl md:text-5xl font-normal text-white tracking-tight uppercase leading-tight italic underline decoration-pink-500 decoration-4 underline-offset-[8px]">Why Use a <br/> Deposit Bonus?</h2>
                 <p className="text-base text-white/80 italic leading-relaxed font-light max-w-2xl pt-4">
                   Utilizing forex broker bonuses offers several strategic advantages for disciplined traders:
                 </p>
               </div>

               <div className="grid md:grid-cols-2 gap-5">
                 {[
                   { t: "Increased Margin", d: "Provides more margin, which can prevent early account stop-outs during market volatility.", icon: <Shield /> },
                   { t: "Larger Position Sizing", d: "As equity grows, you can open larger trades, increasing your profit for each pip gained.", icon: <TrendingUp /> },
                   { t: "New Strategies", d: "Use bonus funds to test ambitious strategies without affecting your initial capital too much.", icon: <Zap /> },
                   { t: "Extended Survival", d: "Excess funding provides a cushion that helps investors stay longer in the market during drawdowns.", icon: <Layers /> },
                 ].map((feature, i) => (
                   <div key={i} className="group p-6 rounded-2xl bg-black/60 border border-white/10 hover:border-pink-500/40 transition-all duration-500 relative shadow-xl backdrop-blur-xl">
                      <div className="w-10 h-10 rounded-lg bg-pink-500/20 flex items-center justify-center text-pink-400 mb-4 border border-white/20 group-hover:scale-110 transition-transform">
                        {React.cloneElement(feature.icon, { size: 20 })}
                      </div>
                      <h4 className="text-base font-normal text-white mb-2 uppercase tracking-tight italic leading-tight">{feature.t}</h4>
                      <p className="text-white/80 text-sm leading-relaxed font-light italic">{feature.d}</p>
                   </div>
                 ))}
               </div>
            </div>

            <div className="lg:col-span-4 lg:sticky lg:top-32">
               <div className="relative p-8 rounded-3xl bg-[#0B0E2A] border border-pink-500/50 shadow-2xl overflow-hidden group">
                  <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform duration-1000">
                    <Gem size={100} className="text-pink-500" />
                  </div>
                  <h3 className="text-xl font-normal text-white mb-6 tracking-tight uppercase border-b border-white/20 pb-4 italic">Performance Node</h3>
                  <div className="space-y-6 relative z-10">
                     <p className="text-base text-pink-400 font-normal leading-tight italic">
                       Knowledge is power. Read the Full Bonus Terms to maximize your promotional benefits.
                     </p>
                     <div className="text-sm text-white/80 leading-relaxed font-light italic">
                        <p>Transparency is our priority. Each and every online trading bonus at FXCELITE is processed under a clear policy.</p>
                     </div>
                     <button 
                        onClick={() => window.open('https://trade.FXCELITE.com/register', '_blank')}
                        className="w-full py-4 rounded-xl bg-white text-black font-normal hover:bg-pink-500 hover:text-white transition-all text-sm shadow-xl shadow-pink-500/20 uppercase tracking-tight italic">
                        Read Full Terms
                     </button>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: TERMS AND NO DEPOSIT (THE COMPLIANCE SLATE) --- */}
      <section className="py-24 relative bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
               <h2 className="text-3xl md:text-5xl font-normal text-white tracking-tight uppercase leading-tight italic">Bonus Terms <br/> & Conditions</h2>
               <p className="text-base text-white/70 font-light italic">We urge all our traders to read the fine print to ensure a safe and transparent trading bonuses experience.</p>
               <div className="grid gap-4">
                 {[
                   { l: "Volume of Trading", d: "You have to trade a certain amount of 'Lots' prior to the bonus cash being able to be taken out." },
                   { l: "Time Limits", d: "Some offers must be used, or 'vested', in a certain period of time (e.g. 90 days)." },
                   { l: "Impact of Withdrawal", d: "If you withdraw your deposit without achieving volume targets, you may forfeit the bonus." },
                   { l: "Eligible Accounts", d: "Bonuses usually extend to Standard and Micro Accounts, often excluding ECNs." }
                 ].map((item, i) => (
                   <div key={i} className="flex gap-4 group items-center p-5 rounded-2xl bg-white/[0.05] border border-white/10 hover:bg-white/10 transition-all">
                      <div className="shrink-0 w-2 h-2 rounded-full bg-pink-500 group-hover:scale-150 transition-transform shadow-[0_0_10px_#db2777]"></div>
                      <div>
                        <span className="text-white text-base font-normal uppercase tracking-tight italic">{item.l}</span>
                        <p className="text-white/80 text-sm font-light leading-relaxed italic">{item.d}</p>
                      </div>
                   </div>
                 ))}
               </div>
            </div>

            <div className="p-8 md:p-10 rounded-3xl bg-[#050617] border border-white/20 relative group overflow-hidden shadow-2xl self-center">
                <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:rotate-12 transition-transform duration-1000">
                    <Activity size={180} className="text-cyan-500" />
                </div>
                <div className="relative z-10 space-y-8">
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 border border-cyan-500/50 group-hover:bg-cyan-500 group-hover:text-black transition-all duration-500">
                         <Terminal size={24} />
                      </div>
                      <h2 className="text-2xl font-normal text-white tracking-tight uppercase italic">No Deposit Bonus <br/> Explained</h2>
                   </div>
                   <div className="text-base text-white/90 leading-relaxed font-light italic space-y-6">
                      <p>For those who wish to "test drive" our platform, the no deposit bonus essentially means we provide the capital and you provide the skill.</p>
                      <div className="p-6 rounded-2xl bg-white/10 border-l-4 border-cyan-500 italic font-medium text-white shadow-xl">
                         The no deposit bonus we offer is normally smaller ($30-$50), available once you validate your credentials. Perfect to experience live trading without commitment.
                      </div>
                   </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 5: HOW TO CLAIM (KINETIC STEPPER) --- */}
      <section className="py-24 relative border-y border-white/10 bg-[#03040b]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-3xl md:text-5xl font-normal text-white tracking-tight uppercase italic leading-tight">How to Claim Your <br/> Trading Bonus</h2>
            <p className="text-pink-400 text-sm font-normal uppercase tracking-[0.2em] font-mono">Deployment Sequence</p>
          </div>

          <div className="grid lg:grid-cols-4 gap-6 relative">
            <div className="absolute top-[30%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-pink-500/30 to-transparent hidden lg:block"></div>

            {[
              { n: "01", t: "Register", d: "Open a Live Account and complete verification.", icon: <MousePointer2 /> },
              { n: "02", t: "Opt-In", d: "Choose the bonuses you want from the list provided.", icon: <CheckCircle2 /> },
              { n: "03", t: "Deposit", d: "Hold a Topup meeting the minimum requirement.", icon: <BadgePercent /> },
              { n: "04", t: "Trade", d: "Bonus is credited immediately, trade with increased equity.", icon: <Activity /> },
            ].map((step, i) => (
              <div key={i} className="group relative p-6 rounded-3xl bg-white/[0.05] border border-white/10 hover:border-pink-500/50 transition-all duration-500 text-center shadow-xl mt-8 lg:mt-0">
                 <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-black border-2 border-pink-500/50 flex items-center justify-center font-normal text-pink-400 text-sm group-hover:bg-pink-400 group-hover:text-black transition-all">
                    {step.n}
                 </div>
                 <div className="w-12 h-12 rounded-xl bg-pink-500/20 text-pink-400 flex items-center justify-center mx-auto mb-4 border border-white/20 group-hover:scale-110 transition-transform mt-2">
                   {React.cloneElement(step.icon, { size: 24 })}
                 </div>
                 <h4 className="text-base font-normal text-white mb-2 tracking-tight leading-tight uppercase italic">{step.t}</h4>
                 <p className="text-xs text-white/80 leading-relaxed font-medium italic">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 6: SECURITY & AUDIENCE (NEON PANELS) --- */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
             <div className="p-8 md:p-10 rounded-3xl bg-black border border-white/20 relative group overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform duration-1000">
                    <Shield size={180} className="text-pink-500" />
                </div>
                <div className="relative z-10 space-y-8">
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center text-pink-400 border border-pink-500/50 group-hover:bg-pink-500 group-hover:text-white transition-all duration-500">
                         <Lock size={24} />
                      </div>
                      <h2 className="text-2xl font-normal text-white tracking-tight uppercase italic underline decoration-pink-500 decoration-4 underline-offset-[8px]">Security & Transparency</h2>
                   </div>
                   <div className="text-base text-white/90 leading-relaxed font-light italic space-y-6">
                      <p>What sets FXCELITE apart is our commitment to giving our clients the secure and transparent option of trading bonuses. Unlike competitors, we do not believe in "locking up" your initial deposit.</p>
                      <div className="p-6 rounded-2xl bg-white/10 border-l-4 border-pink-500 italic font-medium text-white shadow-xl">
                         Instead, we encourage a fair play policy where the money you deposit is always at your disposal for withdrawal, providing a true bonus for career advancement.
                      </div>
                   </div>
                </div>
             </div>

             <div className="space-y-10 lg:p-8">
                <div className="space-y-4 text-center lg:text-left">
                  <h2 className="text-3xl md:text-4xl font-normal text-white tracking-tight uppercase italic leading-tight">Who Should Use <br/> Bonuses?</h2>
                  <p className="text-pink-400 font-normal uppercase tracking-[0.2em] text-xs font-mono">Accelerator Target Profiles</p>
                </div>
                <div className="grid gap-4">
                   {[
                     { l: "New Traders", d: "Looking for a welcome bonus to create initial portfolio.", icon: <Users /> },
                     { l: "Day Traders", d: "Who can fulfill volume requirements to liquidate bonuses.", icon: <Zap /> },
                     { l: "Small Accounts", d: "Leveraging no deposit bonuses to scale up risk-free.", icon: <BadgePercent /> },
                     { l: "Risk Managers", d: "Bonuses used as an additional margin for Forex accounts.", icon: <Shield /> }
                   ].map((item, i) => (
                     <div key={i} className="flex gap-5 group/item items-center p-5 rounded-2xl bg-white/[0.05] border border-white/10 hover:bg-white/10 transition-all">
                       <div className="shrink-0 w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center text-pink-400 border border-pink-500/50 group-hover/item:scale-110 transition-transform">
                         {React.cloneElement(item.icon, { size: 20 })}
                       </div>
                       <div>
                         <span className="text-white text-lg font-normal uppercase tracking-tight italic">{item.l}</span>
                         <p className="text-white/80 text-sm font-light leading-relaxed italic mt-1">{item.d}</p>
                       </div>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 7: FINAL CTA (FIREPOWER GATE) --- */}
      <section className="py-24 bg-[#03040b] text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 space-y-10">
           <h2 className="text-3xl md:text-5xl font-normal text-white tracking-tight uppercase leading-tight italic underline decoration-pink-500 decoration-4 underline-offset-[8px]">Market Mastery</h2>
           <p className="text-base md:text-lg text-white/90 leading-relaxed font-light italic max-w-3xl mx-auto">
             By providing secure and transparent bonus trading options to traders at different levels of their journey, FXCELITE stands as the best option for cost-effective scaling. We offer you the capital boost you need with the honesty you deserve.
           </p>
           <div className="pt-6 flex flex-col items-center gap-6">
              <div className="relative group">
                <div className="absolute -inset-2 bg-pink-500 rounded-2xl blur opacity-40 group-hover:opacity-80 transition duration-1000"></div>
                <button 
                  onClick={() => window.open('https://trade.FXCELITE.com/register', '_blank')}
                  className="relative px-12 py-5 bg-white text-black font-normal text-lg rounded-xl transition-all shadow-[0_15px_40px_-15px_rgba(219,39,119,0.5)] uppercase tracking-tight italic hover:-translate-y-1">
                  Get Your Trading Bonus
                </button>
              </div>
              <div className="space-y-4">
                <p className="text-pink-400 font-normal uppercase tracking-[0.3em] text-xs italic font-mono">Start with an edge. Take your first step today!</p>
                <div className="flex justify-center gap-2">
                   <div className="w-8 h-[2px] bg-white/20"></div>
                   <div className="w-16 h-[2px] bg-pink-500 animate-pulse"></div>
                   <div className="w-8 h-[2px] bg-white/20"></div>
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* --- SECTION 8: FAQ (ARCHITECTURAL STYLE) --- */}
      <section className="py-24 border-t border-white/10 bg-black">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-3xl md:text-4xl font-normal text-white tracking-tight uppercase italic underline decoration-cyan-500 decoration-4 underline-offset-[8px]">Bonus FAQ</h2>
            <p className="text-white/80 font-normal uppercase tracking-widest text-sm italic font-mono pt-4">Accelerator Knowledge Base</p>
          </div>
          
          <div className="space-y-4">
            {[
              { q: "1. What is a bonus offered by a forex broker?", a: "A bonus is a promotional offer in the form of an extra amount given to the account holder." },
              { q: "2. Can I withdraw my forex deposit bonus immediately?", a: "Generally no, brokers require you to trade a certain volume before withdrawing the money. Profit, though, is often withdrawable." },
              { q: "3. Is a no deposit trading bonus real money?", a: "Yes. While it is normally not withdrawable as is, profits realized from it may be withdrawn upon certain conditions." },
              { q: "4. Does a deposit bonus increase my risk?", a: "No, it actually helps increase your margin. However, avoid over-leveraging just because of greater funding." },
              { q: "5. How do bonuses interact with leverage?", a: "The bonus sum is added to your equity, which allows you to take larger positions through leverage." },
              { q: "6. Do I need to verify my ID for a welcome bonus?", a: "Yes, to maintain a secure environment, all bonus recipients must undergo KYC verification." },
              { q: "7. Can I lose my bonus?", a: "Yes, if account equity dips below the bonus amount (stop out) or by breaking the bonus rules." },
              { q: "8. Are there hidden fees?", a: "There are no hidden fees at FXCELITE; all rules are clearly outlined in the terms and conditions." },
              { q: "9. May I have more than one bonus?", a: "Generally, just one running forex trading bonus offer is allowed on a given trading account at a time." },
              { q: "10. Why do brokers offer bonuses?", a: "To attract new customers and retain loyal traders by providing extra value for their activity." },
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
    <div className={`rounded-xl border transition-all duration-500 overflow-hidden ${
      isOpen ? 'bg-[#0a0b1e] border-pink-500/50 shadow-lg' : 'bg-[#03040b] border-white/20 hover:bg-white/5'
    }`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left group"
      >
        <span className={`font-normal text-sm md:text-base transition-colors tracking-tight uppercase italic ${isOpen ? 'text-white' : 'text-white/90 group-hover:text-white'}`}>
          {question}
        </span>
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-500 ml-4 ${
          isOpen ? 'bg-pink-500 text-white rotate-180 shadow-[0_0_15px_#db2777]' : 'bg-white/10 text-white/80 group-hover:bg-white/20'
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