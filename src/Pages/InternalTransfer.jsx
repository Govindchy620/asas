import React, { useState } from 'react';
import { 
  ArrowLeftRight, 
  Shield, 
  Zap, 
  Globe, 
  Activity, 
  Lock, 
  RefreshCw, 
  ArrowRight, 
  ChevronDown, 
  CheckCircle2, 
  Smartphone, 
  History, 
  Coins, 
  TrendingUp,
  UserCheck,
  Sparkles,
  Layers,
  Network,
  Database,
  Cpu,
  Fingerprint,
  Wallet,
  BadgePercent,
  Briefcase
} from 'lucide-react';

export default function InternalTransfer() {
  return (
    <div className="bg-[#050212] text-white font-sans selection:bg-purple-500/30 overflow-x-hidden">
      
      {/* --- HERO: THE NEURAL SYNAPSE --- */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-32 overflow-hidden">
        {/* Animated Background Data Nodes */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#8b5cf608,transparent_70%)]"></div>
          <img 
            src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=2070" 
            className="w-full h-full object-cover opacity-10"
            alt="Data Synergy"
          />
          {/* Synapse Line Decor */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent rotate-12"></div>
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent -rotate-12"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/20 border border-purple-500/50 backdrop-blur-xl mb-8">
            <ArrowLeftRight size={14} className="text-white" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white">Account Synapse v11.0</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tight mb-6">
            Internal <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-white to-cyan-400 italic uppercase">Transfer</span>
          </h1>
          
          <p className="text-base md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light mb-8 uppercase tracking-widest italic">
            Seamless Fund Movement Between Your Accounts
          </p>

          <div className="max-w-3xl mx-auto text-sm md:text-base text-white/90 leading-relaxed font-light mb-12 px-6 py-8 border border-white/20 bg-white/[0.05] backdrop-blur-3xl rounded-3xl relative group">
             <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform">
               <Network size={80} className="text-purple-400" />
             </div>
             Managing a portfolio with diversified investments usually implies having multiple sub accounts, for example, a Forex account, a MAM structure, or even a crypto terminal. The most convenient way to move your money between these different accounts without having to withdraw and re-deposit is by having an internal transfer trading account facility. At FXCElite, we offer a flash fast internal fund transfer service that enables you to rebalance your equity instantly and without any charges.
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl blur opacity-40 group-hover:opacity-80 transition duration-1000"></div>
              <button className="relative px-10 py-4 rounded-2xl bg-white text-black font-bold text-base transition-all hover:scale-[1.03] active:scale-95 shadow-xl flex items-center gap-3 uppercase tracking-tight italic">
                Perform an Internal Transfer <Zap size={20} />
              </button>
            </div>
            <p className="text-purple-400 text-sm font-bold uppercase tracking-[0.2em] italic animate-pulse">
              Optimize your capital allocation. Move funds instantly!
            </p>
          </div>
        </div>
      </section>

      {/* --- EXPLAINED: THE SECURE ECOSYSTEM --- */}
      <section className="py-24 relative border-y border-white/10 bg-white/[0.02] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
               <div className="space-y-6">
                 <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight leading-tight italic border-l-4 border-purple-500 pl-4">Internal Transfer <br/> Process Explained</h2>
                 <div className="space-y-6 text-base text-white/90 leading-relaxed font-light">
                   <p>
                     We have developed our trading account internal transfer system to be highly flexible. You, as a trader, can benefit from our internal transfer trading concept in the following ways: After a successful trade, when you wish to reinvest your profits in a new strategy or when you need to move the margin to shore up your position, our online internal transfer trading platform can ensure that your funds are always at your discretion to use wherever and whenever you want to.
                   </p>
                   <p className="text-white font-medium italic bg-white/10 p-5 border-l-2 border-cyan-500 backdrop-blur-md rounded-r-lg shadow-lg">
                     An internal transfer trading account process refers to the transfer of money between two accounts under the same FXCElite profile. Unlike a Deposit or Withdrawal that involves external banks, an internal fund transfer remains within our secure ecosystem.
                   </p>
                   <p>
                     A change of funds between trading accounts is done internally by our servers, so there are no blockchain confirmations or bank processing times to be concerned about. Most of our customers consider this broker to be the best for an internal fund transfer experience because single click portfolio management at a high speed is enabled by it.
                   </p>
                 </div>
               </div>
            </div>

            <div className="relative group lg:sticky lg:top-32">
               <div className="absolute inset-0 bg-purple-500/10 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <div className="relative border border-white/20 shadow-2xl bg-[#0B0E2A] overflow-hidden rounded-3xl">
                 <img 
                    src="https://images.unsplash.com/photo-1644088379091-d574269d422f?auto=format&fit=crop&q=80&w=1200" 
                    className="w-full h-[400px] object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    alt="Internal Sync Interface"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#050212] via-transparent to-transparent pointer-events-none"></div>
                 <div className="absolute bottom-6 left-6 right-6 p-6 bg-black/90 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl">
                    <p className="text-white/90 text-sm leading-relaxed font-medium italic">
                      "Rebalance your equity instantly and without any charges, right from your unified dashboard."
                    </p>
                    <div className="mt-4 flex items-center gap-3">
                      <RefreshCw size={18} className="text-purple-400" />
                      <span className="text-purple-400 font-bold uppercase tracking-widest text-[10px]">Direct Server Fund Movement</span>
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHY USE: STRATEGIC GRID --- */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase italic leading-tight">Why Use Internal <br/> Fund Transfer?</h2>
            <p className="text-cyan-400 text-sm font-bold uppercase tracking-[0.2em]">The Strategic Edge in Forex</p>
            <p className="text-white/80 text-base max-w-2xl mx-auto font-light leading-relaxed italic">
              Using forex internal transfer tools provides a strategic advantage for traders who operate across different asset classes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { title: "Instant Transfer", desc: "Funds moved between Account A and B in real time, 24/7 service.", icon: <Zap /> },
              { title: "Zero Fees", desc: "We do not impose fees on internal moves, keeping your costs at zero.", icon: <BadgePercent /> },
              { title: "Secure Environment", desc: "Funds remain within our secured ecosystem, eliminating external risks.", icon: <Shield /> },
              { title: "Margin Management", desc: "Instantly transfer funds to prevent margin calls in volatile markets.", icon: <Activity /> },
              { title: "Profit Segregation", desc: "Move weekly gains into a separate 'Vault' account for safety.", icon: <Lock /> },
            ].map((item, i) => (
              <div key={i} className="group p-6 bg-white/[0.05] border border-white/10 hover:border-purple-500/50 transition-all duration-500 flex flex-col items-center text-center relative overflow-hidden rounded-2xl shadow-xl">
                <div className="w-12 h-12 bg-purple-500/20 flex items-center justify-center text-white mb-5 border border-white/20 group-hover:scale-110 group-hover:bg-purple-500 group-hover:text-white transition-all rounded-xl">
                   {React.cloneElement(item.icon, { size: 24 })}
                </div>
                <h3 className="text-base font-bold text-white mb-2 tracking-tight leading-tight uppercase italic">{item.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FEATURES: BENTO CORE --- */}
      <section className="py-24 bg-white/[0.02] border-y border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8 space-y-10">
               <div className="space-y-4">
                 <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase leading-tight italic">Key Features of our <br/> Internal System</h2>
                 <p className="text-base text-white/80 italic leading-relaxed font-light">
                   Our broker internal transfer system is built to be the most reliable in the market.
                 </p>
               </div>

               <div className="grid md:grid-cols-2 gap-5">
                 {[
                   { t: "Unlimited Transfers", d: "There is no limit to the number of internal transfers you can make.", icon: <RefreshCw /> },
                   { t: "Cross Currency Support", d: "Easily transfer funds between accounts with different base currencies.", icon: <Coins /> },
                   { t: "Unified Dashboard", d: "Control your entire internal movement from a simple, clean interface.", icon: <Layers /> },
                   { t: "Transaction History", d: "Every transaction made through an internal fund transfer is recorded.", icon: <History /> },
                   { t: "Automatic Sync", d: "Transferred funds reflect in MT5 or WebTrader as soon as confirmed.", icon: <RefreshCw /> },
                 ].map((feature, i) => (
                   <div key={i} className="group p-6 bg-white/[0.05] border border-white/10 hover:border-cyan-500/30 transition-all duration-300 relative shadow-lg rounded-2xl text-left">
                      <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center text-white mb-4 border border-white/20 group-hover:scale-110 transition-transform">
                        {React.cloneElement(feature.icon, { size: 20 })}
                      </div>
                      <h4 className="text-base font-bold text-white mb-2 uppercase tracking-tight italic leading-tight">{feature.t}</h4>
                      <p className="text-white/80 text-sm leading-relaxed font-light italic">{feature.d}</p>
                   </div>
                 ))}
               </div>
            </div>

            <div className="lg:col-span-4 lg:sticky lg:top-32">
               <div className="relative p-8 bg-black border border-purple-500/50 shadow-2xl overflow-hidden group rounded-3xl">
                  <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform duration-1000">
                    <History size={100} className="text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-6 tracking-tight uppercase border-b border-white/20 pb-4">Instant Rebalance</h3>
                  <div className="space-y-6">
                     <p className="text-base text-purple-400 font-bold leading-tight italic">
                       Experience the fastest way to rebalance. Login to Your Dashboard and try an instant internal transfer today.
                     </p>
                     <div className="text-sm text-white/80 leading-relaxed font-light italic">
                        <p>Our online internal transfer trading platform ensures your funds are always at your discretion.</p>
                     </div>
                     <button className="w-full py-4 bg-white text-black font-bold hover:bg-purple-500 hover:text-white transition-all text-sm shadow-xl shadow-purple-500/20 uppercase tracking-tight italic rounded-xl">
                        Login to Dashboard
                     </button>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- STEP BY STEP: THE NEURAL SYNAPSE --- */}
      <section className="py-24 relative bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase italic leading-tight">Internal Transfer <br/> Step by Step</h2>
            <p className="text-purple-400 text-sm font-bold uppercase tracking-[0.2em]">The secure movement sequence</p>
          </div>

          <div className="grid lg:grid-cols-5 gap-6 relative">
            {/* The Synapse Decor */}
            <div className="absolute top-[30%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent hidden lg:block"></div>

            {[
              { n: "01", t: "Login", d: "Login to our secure FXCElite Client Portal.", icon: <UserCheck /> },
              { n: "02", t: "Select", d: "Click on the 'Funds' menu and select internal transfer.", icon: <ArrowLeftRight /> },
              { n: "03", t: "Accounts", d: "Choose the 'Source Account' and the 'Destination Account'.", icon: <Database /> },
              { n: "04", t: "Amount", d: "Enter the amount of the trading balance internal transfer.", icon: <TrendingUp /> },
              { n: "05", t: "Confirm", d: "Finish the process. Money transfer will be instantaneous.", icon: <Activity /> },
            ].map((step, i) => (
              <div key={i} className="group relative p-6 bg-white/[0.05] border border-white/10 hover:border-purple-500/50 transition-all duration-500 text-center rounded-2xl shadow-xl mt-6 lg:mt-0">
                 <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-black border-2 border-purple-500/50 flex items-center justify-center font-bold text-white text-sm group-hover:bg-purple-500 group-hover:text-white transition-all rounded-lg">
                    {step.n}
                 </div>
                 <div className="w-12 h-12 bg-purple-500/20 text-white flex items-center justify-center mx-auto mb-4 border border-white/20 group-hover:scale-110 transition-transform rounded-xl mt-2">
                   {React.cloneElement(step.icon, { size: 24 })}
                 </div>
                 <h4 className="text-base font-bold text-white mb-2 tracking-tight leading-tight uppercase italic">{step.t}</h4>
                 <p className="text-xs text-white/80 leading-relaxed font-medium italic">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECURITY & TARGET: PRISMATIC PANELS --- */}
      <section className="py-24 border-y border-white/10 bg-[#08041a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
             <div className="p-8 md:p-10 rounded-3xl bg-black border border-white/20 relative group overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform duration-1000">
                    <Shield size={180} className="text-purple-500" />
                </div>
                <div className="relative z-10 space-y-8">
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-purple-500/20 flex items-center justify-center text-white border border-purple-500/50 group-hover:bg-purple-500 group-hover:text-white transition-all duration-500 rounded-xl">
                         <Lock size={24} />
                      </div>
                      <h2 className="text-2xl font-bold text-white tracking-tight uppercase italic underline decoration-purple-500 decoration-4 underline-offset-[8px]">Security & Reliability</h2>
                   </div>
                   <div className="text-base text-white/90 leading-relaxed font-light italic space-y-6">
                      <p>That being said, while the funds stay within our system, every internal transfer of a trading account request receives the highest level of security standards.</p>
                      <div className="p-6 bg-white/10 border-l-4 border-purple-500 italic font-medium text-white shadow-xl rounded-r-lg">
                        Every safe internal fund transfer forex move requires multi-factor authentication (MFA). These ensure that only you can move your money. Therefore, FXCElite is the best broker for the safest inter fx transfers.
                      </div>
                   </div>
                </div>
             </div>

             <div className="space-y-10 lg:p-8">
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight uppercase italic leading-tight">Who is Internal <br/> Transfer For?</h2>
                  <p className="text-cyan-400 font-bold uppercase tracking-[0.2em] text-xs font-mono">Precision Allocation Profiles</p>
                </div>
                <div className="grid gap-4">
                   {[
                     { l: "Multi-Strategy Traders", d: "Segregate scalping and swing trading into different accounts.", icon: <Layers /> },
                     { l: "Risk Managers", d: "Users requiring instant internal transfers to move margin.", icon: <Activity /> },
                     { l: "MAM & PAMM Managers", d: "Moving performance fees from investors to personal accounts.", icon: <Briefcase /> },
                     { l: "Currency Diversifiers", d: "Traders maintaining balances in a variety of base currencies.", icon: <Globe /> }
                   ].map((item, i) => (
                     <div key={i} className="flex gap-5 group/item items-center p-5 bg-white/[0.05] border border-white/10 hover:bg-white/10 transition-all rounded-2xl">
                       <div className="shrink-0 w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center text-white border border-purple-500/50 group-hover/item:scale-110 transition-transform">
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

      {/* --- FINAL CTA: THE POWER GATE --- */}
      <section className="py-24 bg-[#050212] text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 space-y-10">
           <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight uppercase leading-tight italic">Why FXCElite is the Best <br/> Choice for Transfers?</h2>
           <p className="text-base md:text-lg text-white/90 leading-relaxed font-light italic max-w-3xl mx-auto">
             With our focus on instant internal transfer trading account technology and our dedication to providing zero fee trading account fund movement, FXCElite delivers the most professional internal banking experience currently available. We provide you with tools that give you complete freedom to manage your wealth.
           </p>
           <div className="pt-6 flex flex-col items-center gap-6">
              <div className="relative group">
                <div className="absolute -inset-2 bg-purple-500 rounded-2xl blur opacity-40 group-hover:opacity-80 transition duration-1000"></div>
                <button className="relative px-12 py-5 bg-white text-black font-bold text-lg transition-all shadow-[0_15px_40px_-15px_rgba(139,92,246,0.6)] uppercase tracking-tight italic rounded-xl hover:-translate-y-1">
                  Start an Internal Transfer
                </button>
              </div>
              <div className="space-y-4">
                <p className="text-purple-400 font-bold uppercase tracking-[0.3em] text-xs italic font-mono">Your capital, perfectly balanced. Experience the speed now!</p>
                <div className="flex justify-center gap-2">
                   <div className="w-8 h-[2px] bg-white/30"></div>
                   <div className="w-16 h-[2px] bg-cyan-400 animate-pulse"></div>
                   <div className="w-8 h-[2px] bg-white/30"></div>
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* --- FAQ: NEURAL STYLE --- */}
      <section className="py-24 border-t border-white/10 bg-black">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight uppercase italic underline decoration-purple-500 decoration-4 underline-offset-[8px]">Transfer FAQ</h2>
            <p className="text-white/80 font-medium uppercase tracking-widest text-sm italic font-mono pt-4">Fund Management Knowledge Base</p>
          </div>
          
          <div className="space-y-4">
            {[
              { q: "1. What is an internal transfer trading account?", a: "It is the process of transferring funds from one account to another, which are both different accounts in the FXCELite platform." },
              { q: "2. How long does an internal fund transfer take?", a: "Most internal fund transfers are instant, i.e., the money is available immediately." },
              { q: "3. Are there any fees associated with trading account internal transfer?", a: "No, FXCElite offers a trading account internal transfer service for free." },
              { q: "4. Can I move money between accounts with different currencies?", a: "Yes. Our online internal transfer trading system allows for currency conversion using the existing exchange rates." },
              { q: "5. Is it safe to transfer money internally via forex?", a: "Yes, it it! It's because we use a safe internal fund transfer forex protocol with an encrypted session and an authentication requirement." },
              { q: "6. Is there a minimum or maximum limit for internal transfers?", a: "The limits are very flexible, encompassing both small-scale rebalancing and large-scale trading account fund movement." },
              { q: "7. Can I affect internal transfers on the weekends?", a: "Yes, our instant internal transfer trading account system works 24/7." },
              { q: "8. Can I transfer funds to another person's FXCELite account?", a: "No, an internal transfer from one account to another for security/AML purposes is only available to accounts in the same name." },
              { q: "9. Why can't I see my transferred funds in MetaTrader?", a: "Please make sure to refresh your platform/app or re-log in your accounts, as usually, an update will be made within seconds." },
              { q: "10. How do I know which broker is best for internal fund transfer?", a: "The best broker available would always be a broker like FXCElite, which offers its customers instant, free, and secure internal transfers." },
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
      isOpen ? 'border-purple-500/50 bg-[#0B0E2A] shadow-lg' : 'border-white/20 bg-white/[0.02] hover:bg-white/[0.05]'
    }`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left group"
      >
        <span className={`font-bold text-sm md:text-base transition-colors tracking-tight uppercase italic ${isOpen ? 'text-white' : 'text-white/90 group-hover:text-white'}`}>
          {question}
        </span>
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-500 ml-4 ${
          isOpen ? 'bg-purple-500 text-white rotate-180 shadow-[0_0_15px_#8b5cf6]' : 'bg-white/10 text-white/80 group-hover:bg-white/20'
        }`}>
            <ChevronDown size={16} />
        </div>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 text-white/80 text-sm md:text-base leading-relaxed animate-in fade-in slide-in-from-top-2 duration-500 font-light italic">
          <div className="h-[1px] w-full bg-white/10 mb-4"></div>
          {answer}
        </div>
      )}
    </div>
  );
}