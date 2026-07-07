import React, { useState } from 'react';
import { 
  Wallet, 
  Shield, 
  Zap, 
  Globe, 
  Activity, 
  Lock, 
  CreditCard, 
  Bitcoin, 
  RefreshCw, 
  ArrowRight, 
  ChevronDown, 
  CheckCircle2, 
  Smartphone, 
  History, 
  Coins, 
  Landmark, 
  TrendingUp,
  UserCheck,
  MousePointer2,
  Sparkles,
  BarChart3,
  BadgePercent,
  Monitor,
  LayoutDashboard
} from 'lucide-react';

export default function Deposit() {
  return (
    <div className="bg-[#020410] text-slate-300 font-sans selection:bg-emerald-500/30 overflow-x-hidden">
      
      {/* --- HERO: THE LIQUIDITY STREAM --- */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-16 pb-24 overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#10b98108,transparent_70%)]"></div>
          <img 
            src="https://images.unsplash.com/photo-1554224155-1696413575b8?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-10"
            alt="Capital Background"
          />
          {/* Moving Liquidity Rails */}
          <div className="absolute top-1/4 -left-1/4 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent animate-[slide_10s_linear_infinite]"></div>
          <div className="absolute top-1/2 -right-1/4 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-amber-500/30 to-transparent animate-[slide_15s_linear_infinite_reverse]"></div>
          <div className="absolute bottom-1/4 -left-1/4 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent animate-[slide_12s_linear_infinite] delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm border-l-2 border-emerald-500 bg-emerald-500/5 backdrop-blur-xl mb-8 animate-fade-in">
            <Zap size={14} className="text-emerald-400" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">Funding Pipeline v9.0-Active</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tight mb-6">
            Forex <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-white to-amber-500 italic">Deposit</span>
          </h1>
          
          <p className="text-base md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light mb-8 uppercase tracking-widest italic">
            Fast, Secure, and Instant Account Funding
          </p>

          <div className="max-w-3xl mx-auto text-white text-sm md:text-base leading-relaxed font-light mb-12 px-6 py-8 border border-white/5 bg-white/[0.02] backdrop-blur-3xl rounded-2xl relative group">
             <div className="absolute text-white top-0 right-0 p-4 opacity-5 group-hover:scale-110 transition-transform">
               <Wallet size={80} />
             </div>
             Funding your account should indeed be the simplest step in your trading journey. At Fxcelite, we've refined our forex deposit method so that your money can swiftly flow from your bank into the markets without any delays that aren't absolutely necessary. Whether this is a first-time money deposit in a trading account or an instant forex deposit by a seasoned trader to grab a market breakout, our setup is made for fast and safe delivery.
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-amber-500 blur opacity-25 group-hover:opacity-80 transition duration-1000"></div>
              <button className="relative px-10 py-4 bg-white text-black font-bold text-base transition-all hover:scale-[1.03] active:scale-95 shadow-xl flex items-center gap-3 uppercase tracking-tight italic rounded-xl">
                Fund Your Account Now <Zap size={20} />
              </button>
            </div>
            <p className="text-emerald-400 text-sm font-bold uppercase tracking-[0.2em] italic animate-pulse">
              Ready to hit the markets? Start trading today!
            </p>
          </div>
        </div>

        {/* Scroll Line */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
           <div className="w-[1px] h-10 bg-gradient-to-b from-emerald-500 to-transparent"></div>
        </div>
      </section>

      {/* --- EXPLAINED: THE FUNDING PIPELINE --- */}
      <section className="py-24 relative border-y border-white/5 bg-white/[0.01] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
               <div className="space-y-6">
                 <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight leading-tight italic underline decoration-emerald-500 decoration-4 underline-offset-[8px]">Forex Deposit <br/> Process Explained</h2>
                 <div className="space-y-6 text-base text-slate-400 leading-relaxed font-light">
                   <p>
                     As a top global broker, we provide various forex broker deposit methods, including bank wires, traditional ones, and e-wallets and cryptocurrencies. Every online trading account deposit enjoys top-level encryption, thus ensuring a secure forex deposit environment that safeguards your financial information always.
                   </p>
                   <p className="text-white font-medium italic bg-white/5 p-5 border-l-2 border-emerald-500 rounded-r-lg">
                     The deposit system for forex and CFD trading is made straightforward and enjoyable for the user. We at Fxcelite facilitate your access to the international financial markets through your local currency.
                   </p>
                   <p>
                     Once you make a deposit to your trading account online, the money is immediately changed into the base currency of your account (e.g., USD, EUR, or GBP) and you can see it in your MT4/MT5 terminal. This trading account deposit gives you the ability to trade any of our asset classes, such as Forex, Indices, and Commodities, really fast after the confirmation of the transaction.
                   </p>
                 </div>
               </div>
            </div>

            <div className="relative group lg:sticky lg:top-32">
               <div className="absolute inset-0 bg-emerald-500/10 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <div className="relative border border-white/10 shadow-2xl bg-[#0B0E2A] rounded-2xl overflow-hidden">
                 <img 
                    src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=1200" 
                    className="w-full h-[400px] object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    alt="Account Funding Interface"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#020410] via-transparent to-transparent pointer-events-none"></div>
                 <div className="absolute bottom-6 left-6 right-6 p-6 bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl">
                    <p className="text-slate-300 text-sm leading-relaxed font-medium italic">
                      "Instantly changed into your base currency and synced with your trading terminal."
                    </p>
                    <div className="mt-4 flex items-center gap-3">
                      <RefreshCw size={18} className="text-emerald-400" />
                      <span className="text-emerald-400 font-bold uppercase tracking-widest text-[10px] font-mono">Automated Conversion Active</span>
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SPEED MATTERS SECTION --- */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase italic leading-tight">Why Choose Fxcelite for <br/> Account Funding?</h2>
            <p className="text-amber-500 text-sm font-bold uppercase tracking-[0.2em]">The Ultimate Speed in Liquidity</p>
            <p className="text-slate-500 text-base max-w-2xl mx-auto font-light leading-relaxed italic">
              We understand that the fastest way to deposit trading funds is what matters most to active traders.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { title: "Instant Forex Deposit", desc: "Choice of credit/debit card or e-wallet to allow for instant deposit.", icon: <Zap /> },
              { title: "Secure Forex Deposit", desc: "PCI-DSS certified payment gateways and 256-bit SSL encryption.", icon: <Shield /> },
              { title: "No Hidden Fees", desc: "No internal charges, enabling you to trade with more of your money.", icon: <BadgePercent /> },
              { title: "Flexible Methods", desc: "Variety of deposit methods to choose from, depending on location.", icon: <Globe /> },
              { title: "Seamless Mgmt", desc: "Manage all Topups and Withdrawal requests through a unified portal.", icon: <Activity /> },
            ].map((item, i) => (
              <div key={i} className="group p-6 bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 transition-all duration-500 flex flex-col items-center text-center relative overflow-hidden rounded-2xl shadow-xl">
                <div className="w-12 h-12 bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-5 border border-white/5 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-black transition-all rounded-xl">
                   {React.cloneElement(item.icon, { size: 24 })}
                </div>
                <h3 className="text-base font-bold text-white mb-2 tracking-tight leading-tight uppercase italic">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FEATURES: 2026 DIGITAL BENTO --- */}
      <section className="py-24 bg-white/[0.01] border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-600/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8 space-y-10">
               <div className="space-y-4">
                 <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight uppercase leading-tight italic">Key Features of our <br/> Funding System</h2>
                 <p className="text-base text-slate-500 italic leading-relaxed font-light">
                   Our trading account funding system is built for the digital economy, prioritizing the user experience.
                 </p>
               </div>

               <div className="grid md:grid-cols-2 gap-5">
                 {[
                   { t: "Multi-Currency Support", d: "You can deposit in your local currency to avoid high conversion spreads.", icon: <Coins /> },
                   { t: "One-Click Topups", d: "Preserve your preferred method for faster funding of your accounts in the future.", icon: <MousePointer2 /> },
                   { t: "High Limits", d: "We serve both retail and institutional clients with our flexible limit structure.", icon: <TrendingUp /> },
                   { t: "Automated Processing", d: "Our instant deposit system operates on a 7x24 basis, including weekends.", icon: <Activity /> },
                   { t: "Direct MT5 Integration", d: "Funds are synced directly to your MetaTrader 5 platform terminal.", icon: <Monitor /> },
                 ].map((feature, i) => (
                   <div key={i} className="group p-6 bg-white/[0.02] border border-white/5 hover:border-amber-500/20 transition-all duration-500 relative shadow-lg rounded-2xl">
                      <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 mb-4 border border-white/5 group-hover:scale-110 transition-transform">
                        {React.cloneElement(feature.icon, { size: 20 })}
                      </div>
                      <h4 className="text-base font-bold text-white mb-2 uppercase tracking-tight italic leading-tight">{feature.t}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed font-light italic">{feature.d}</p>
                   </div>
                 ))}
               </div>
            </div>

            <div className="lg:col-span-4 lg:sticky lg:top-32">
               <div className="relative p-8 bg-black border border-emerald-500/30 shadow-2xl overflow-hidden group rounded-2xl">
                  <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:scale-110 transition-transform duration-1000">
                    <History size={100} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-6 tracking-tight uppercase border-b border-white/10 pb-4 font-mono">Liquidity Access</h3>
                  <div className="space-y-6">
                     <p className="text-base text-emerald-400 font-bold leading-tight italic">
                       Start small or go big. Sign Up and Deposit to access institutional-grade liquidity today.
                     </p>
                     <div className="text-sm text-slate-500 leading-relaxed font-light italic">
                        <p>Our instant deposit forex trading account system ensures zero downtime for your trading strategy.</p>
                     </div>
                     <button className="w-full py-4 bg-white text-black font-bold hover:bg-emerald-500 transition-all text-sm shadow-xl shadow-emerald-500/20 uppercase tracking-tight italic rounded-xl">
                        Deposit Today
                     </button>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- STEP BY STEP: THE FUNDING RAIL --- */}
      <section className="py-24 relative bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight uppercase italic leading-tight">Step by Step <br/> Forex Deposit</h2>
            <p className="text-emerald-400 text-sm font-bold uppercase tracking-[0.2em]">Follow this sequence to get started</p>
          </div>

          <div className="grid lg:grid-cols-5 gap-6 relative">
            {/* The Rail Decor */}
            <div className="absolute top-[30%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent hidden lg:block"></div>

            {[
              { n: "01", t: "Login", d: "Access your secure client area of Fxcelite.", icon: <Lock /> },
              { n: "02", t: "Go to Funds", d: "Click on the 'Deposit' tab on your dashboard.", icon: <Wallet /> },
              { n: "03", t: "Method", d: "Choose your chosen deposit method (Visa, USDT, etc).", icon: <CheckCircle2 /> },
              { n: "04", t: "Amount", d: "Specify the amount of funds you intend to deposit.", icon: <TrendingUp /> },
              { n: "05", t: "Confirm", d: "Complete secure checkout. Instant balance update.", icon: <Activity /> },
            ].map((step, i) => (
              <div key={i} className="group relative p-6 bg-white/[0.02] border border-white/5 hover:border-emerald-500/50 transition-all duration-500 text-center rounded-2xl shadow-lg mt-6 lg:mt-0">
                 <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-black border-2 border-emerald-500/20 flex items-center justify-center font-bold text-emerald-400 text-sm group-hover:bg-emerald-400 group-hover:text-black transition-all rounded-lg">
                    {step.n}
                 </div>
                 <div className="w-12 h-12 bg-emerald-500/5 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-white/5 group-hover:scale-110 transition-transform rounded-xl mt-2">
                   {React.cloneElement(step.icon, { size: 24 })}
                 </div>
                 <h4 className="text-base font-bold text-white mb-2 tracking-tight leading-tight uppercase italic">{step.t}</h4>
                 <p className="text-xs text-slate-500 leading-relaxed font-medium italic">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECURITY & TARGET: PRISMATIC PANELS --- */}
      <section className="py-24 border-y border-white/5 bg-[#0a0c1a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
             <div className="p-8 md:p-10 bg-black border border-white/10 relative group overflow-hidden shadow-2xl rounded-3xl">
                <div className="absolute top-0 right-0 p-8 opacity-[0.02] group-hover:rotate-12 transition-transform duration-1000">
                    <Shield size={150} />
                </div>
                <div className="relative z-10 space-y-8">
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-black transition-all duration-500 rounded-xl">
                         <Lock size={24} />
                      </div>
                      <h2 className="text-2xl font-bold text-white tracking-tight uppercase italic underline decoration-emerald-500 decoration-4 underline-offset-[8px]">Security & Reliability</h2>
                   </div>
                   <div className="text-base text-slate-400 leading-relaxed font-light italic space-y-6">
                      <p>Our commitment to a safe forex deposit. Any funds deposited by you in our trading account are held in segregated accounts in Tier 1 international banks.</p>
                      <div className="p-6 bg-white/[0.03] border-l-4 border-emerald-500 italic font-medium text-white shadow-xl rounded-r-lg">
                        These bank accounts are held sensibly aside from our bank account. This ensures a safe online trading account deposit from which any amount can be Withdrawn by you when you want. 
                      </div>
                   </div>
                </div>
             </div>

             <div className="space-y-10 lg:p-8">
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight uppercase italic leading-tight">Who is This <br/> For?</h2>
                  <p className="text-amber-500 font-bold uppercase tracking-[0.2em] text-xs font-mono">Liquidity Access Profiles</p>
                </div>
                <div className="grid gap-5">
                   {[
                     { l: "New Traders", d: "Seeking an instant deposit to begin their journey.", icon: <UserCheck /> },
                     { l: "Professional Scalpers", d: "Those who require quick deposits to sustain margin.", icon: <Zap /> },
                     { l: "MAM Managers", d: "For master accounts to always be funded for execution.", icon: <LayoutDashboard /> },
                     { l: "Crypto Investors", d: "People who prefer secured deposits through Crypto.", icon: <Bitcoin /> }
                   ].map((item, i) => (
                     <div key={i} className="flex gap-5 group/item items-center p-5 bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all rounded-2xl">
                       <div className="shrink-0 w-12 h-12 bg-emerald-500/5 flex items-center justify-center text-emerald-400 border border-emerald-500/10 group-hover/item:scale-110 transition-transform rounded-xl">
                         {React.cloneElement(item.icon, { size: 20 })}
                       </div>
                       <div>
                         <span className="text-white text-lg font-bold uppercase tracking-tight italic">{item.l}</span>
                         <p className="text-slate-500 text-sm font-light leading-relaxed italic mt-1">{item.d}</p>
                       </div>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA: THE DEPOSIT GATE --- */}
      <section className="py-24 bg-[#02030d] text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 space-y-10">
           <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight uppercase leading-tight italic">Why Fxcelite is the Best <br/> Choice for Funding?</h2>
           <p className="text-base md:text-lg text-slate-400 leading-relaxed font-light italic max-w-3xl mx-auto">
             Because of our commitment to instant forex deposit technology and a transparent trading account funding policy, we offer you the most reliable deposit experience available. It is not just that we accept your deposit; it’s that we open the doors to your financial success.
           </p>
           <div className="pt-6 flex flex-col items-center gap-6">
              <div className="relative group">
                <div className="absolute -inset-2 bg-emerald-500 rounded-2xl blur opacity-20 group-hover:opacity-60 transition duration-1000"></div>
                <button className="relative px-12 py-5 bg-white text-black font-bold text-lg transition-all shadow-[0_15px_40px_-15px_rgba(16,185,129,0.4)] uppercase tracking-tight italic hover:-translate-y-1 rounded-xl">
                  Deposit Today
                </button>
              </div>
              <div className="space-y-4">
                <p className="text-emerald-400 font-bold uppercase tracking-[0.3em] text-xs italic font-mono">Your trading capital, ready when you are.</p>
                <div className="flex justify-center gap-2">
                   <div className="w-8 h-[2px] bg-white/10"></div>
                   <div className="w-16 h-[2px] bg-amber-500 animate-pulse"></div>
                   <div className="w-8 h-[2px] bg-white/10"></div>
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* --- FAQ: LIQUID STYLE --- */}
      <section className="py-24 border-t border-white/5 bg-black">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight uppercase italic">Deposit FAQ</h2>
            <p className="text-slate-500 font-medium uppercase tracking-widest text-sm font-mono">Funding Knowledge Base</p>
          </div>
          
          <div className="space-y-4">
            {[
              { q: "1. How long does a forex deposit take?", a: "For most payment options such as cards and e-wallets, the forex account top up is done instantly. With bank wire, it may take 1-3 business days." },
              { q: "2. Is there a minimum deposit amount?", a: "Yes, every account type is assigned a particular deposit minimum, as low as $10 for Micro accounts." },
              { q: "3. What are the available deposit options?", a: "We accept Visa/Mastercard, Neteller, Skrill, Bank Wire, and Cryptocurrencies." },
              { q: "4. Does Fxcelite charge a fee for a deposit?", a: "We do not charge any fees for a forex deposit, but there may be bank charges on your end." },
              { q: "5. Can I deposit using my phone?", a: "Yes, our portal has been optimized for a secure forex deposit using Android and iOS devices." },
              { q: "6. Is it safe to provide my card details?", a: "Yes, our system uses the highest level of encryption and is PCI-DSS compliant." },
              { q: "7. Can I deposit in my local currency?", a: "Yes, we support many currencies, and it will automatically be converted into your account's base currency." },
              { q: "8. What is the fastest way to deposit?", a: "Using a Credit/Debit card or a verified E-wallet is typically the fastest way." },
              { q: "9. Can I deposit funds for another person?", a: "No, to comply with AML laws you can only deposit money in an account held in your own name." },
              { q: "10. Do I need to verify my account before topping up?", a: "Although you can top up immediately, full verification is required for withdrawals and larger amounts." },
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
      isOpen ? 'border-emerald-500/40 bg-[#0B0E2A] shadow-lg' : 'border-white/5 bg-white/[0.01] hover:bg-white/[0.03]'
    }`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left group"
      >
        <span className={`font-bold text-sm md:text-base transition-colors tracking-tight uppercase italic ${isOpen ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
          {question}
        </span>
        <div className={`w-8 h-8 flex items-center justify-center shrink-0 transition-all duration-500 ml-4 rounded-lg ${
          isOpen ? 'bg-emerald-500 text-black rotate-180 shadow-[0_0_15px_#10b981]' : 'bg-white/5 text-slate-500 group-hover:bg-white/10'
        }`}>
            <ChevronDown size={16} />
        </div>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 text-slate-400 text-sm md:text-base leading-relaxed animate-in fade-in slide-in-from-top-2 duration-500 font-light italic">
          <div className="h-[1px] w-full bg-white/5 mb-4"></div>
          {answer}
        </div>
      )}
    </div>
  );
}