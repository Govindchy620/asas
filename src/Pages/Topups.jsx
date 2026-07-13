import React, { useState } from 'react';
import { 
  Shield, 
  Zap, 
  Wallet, 
  CreditCard, 
  Smartphone, 
  ChevronDown, 
  CheckCircle2, 
  ArrowRight,
  Clock,
  Activity,
  Lock,
  Bitcoin,
  Coins,
  Sparkles,
  MousePointer2,
  RefreshCw,
  Calculator,
  UserCheck,
  FileText,
  Cpu,
  TrendingUp
} from 'lucide-react';

export default function Topups() {
  return (
    <div className="bg-[#020410] text-slate-300 font-sans selection:bg-emerald-500/30 overflow-x-hidden">
      
      {/* --- HERO: INSTANT FUNDING --- */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-2 pb-3 overflow-hidden">
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#10b98110,transparent_70%)]"></div>
          {/* <img 
            src="https://images.unsplash.com/photo-1554224155-1696413575b8?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-[0.1] mix-blend-luminosity"
            alt="Financial Background"
          /> */}
          {/* Animated Glows */}
          <div className="absolute top-1/3 -right-20 w-[600px] h-[600px] bg-emerald-500/10 blur-[130px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 -left-20 w-[500px] h-[500px] bg-cyan-500/10 blur-[110px] rounded-full animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/5 border border-emerald-500/20 backdrop-blur-md mb-8 animate-fade-in">
            <Zap size={14} className="text-emerald-400" />
            <span className="text-xs font-normal uppercase tracking-[0.2em] text-emerald-400">Instant Liquidity Deployment</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-normal text-white leading-[1.1] tracking-tight mb-6">
            Trading Account <br/> <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-emerald-500/50">Top Up</span>
          </h1>
          
          <p className="text-base md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light mb-8 uppercase tracking-tight">
            Fast, Secure, and Instant Funding
          </p>

          <div className="max-w-3xl mx-auto text-sm md:text-base text-slate-400 leading-relaxed font-light mb-12 px-4">
            In the rapidly changing environment of financial markets, timing is a crucial factor. It is indeed very irritating when one loses the chance of making money due to a lack of funds. That's why we've made the process of depositing money to your trading account extremely simple. At FXCELITE, we offer multiple options for adding funds instantly, so you can take advantage of market changes without delay.
          </div>

          <div className="flex flex-col items-center gap-6">
            <button 
              onClick={() => window.open('https://trade.FXCELITE.com/login', '_blank')}
              className="px-10 py-4 rounded-2xl bg-white text-black font-normal text-base hover:bg-emerald-400 transition-all shadow-[0_15px_40px_-15px_rgba(16,185,129,0.4)] hover:-translate-y-1 active:scale-95">
              Top Up Your Trading Account
            </button>
            <p className="text-emerald-400 text-sm font-normal uppercase tracking-[0.2em] animate-pulse">
              Don't let your balance hold you back.
            </p>
          </div>
        </div>

        {/* Scroll Line */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
           <div className="w-[1px] h-10 bg-gradient-to-b from-emerald-500 to-transparent"></div>
        </div>
      </section>

      {/* --- SPEED MATTERS SECTION --- */}
      <section className="py-24 relative border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-10">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-normal text-white tracking-tight leading-tight uppercase">
                  Why Speed Matters in <br/> Account Funding
                </h2>
                <div className="text-base text-slate-400 leading-relaxed font-light space-y-4">
                  <p>
                    If you are thinking of a quick forex account top-up to save a margin call or if you simply want to increase your trading account balance to take a bigger position, our system is designed for speed. Our instant top-up features allow your money to be transferred from your wallet to your MT4/MT5 terminal within seconds.
                  </p>
                  <p>
                    A secure top-up is useless if it takes days to reflect. In modern trading, you demand an online funding process that matches the speed of the fiber-optic markets.
                  </p>
                </div>
              </div>

              <div className="grid gap-4">
                {[
                  { t: "Instant Top Up", d: "Most of our payment options will be reflected in your account balance instantly.", icon: <Zap /> },
                  { t: "Fastest Funding Ways", d: "Make use of our local payment options or e-wallets for an instant transaction.", icon: <RefreshCw /> },
                  { t: "Margin Protection", d: "Top up your trading account instantly to secure your open positions during high volatility.", icon: <Shield /> },
                  { t: "Zero Interruption", d: "Ensure your EAs are running without interruptions by keeping a healthy balance.", icon: <Activity /> },
                  { t: "Precision Planning", d: "Use our Trading Calculator to know exactly how much you need to top up.", icon: <Calculator /> },
                ].map((item, i) => (
                  <div key={i} className="group flex items-start gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/20 transition-all duration-300">
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-emerald-500/5 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-400 group-hover:text-black transition-all">
                      {React.cloneElement(item.icon, { size: 20 })}
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-base font-normal text-white group-hover:text-emerald-400 transition-colors uppercase tracking-tight">{item.t}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative group lg:sticky lg:top-32">
               <div className="absolute inset-0 bg-emerald-500/10 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#0B0E2A]">
                 <img 
                    src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=2071&auto=format&fit=crop" 
                    className="w-full h-[500px] object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                    alt="Digital Transaction"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#020410] via-transparent to-transparent"></div>
                 <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/10">
                    <div className="flex items-center gap-3 mb-4">
                      <Wallet size={24} className="text-emerald-400" />
                      <span className="text-white text-xl font-normal tracking-tight uppercase">How to Add Funds</span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed font-medium mb-4">
                      We have made the trading account funding process simple and intuitive for all our users.
                    </p>
                    <div className="space-y-3">
                      {[
                        { s: "Login", d: "Login to your secure client area." },
                        { s: "Select Top Up", d: "Proceed to the 'Funds' section and click top up." },
                        { s: "Choose Method", d: "Choose Cards, E-Wallets, Wire, or Crypto." },
                        { s: "Enter Amount", d: "Enter the required deposit amount." },
                        { s: "Confirm", d: "Finish the secure process for instant balance updates." }
                      ].map((step, idx) => (
                        <div key={idx} className="flex gap-3 items-center">
                          <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center text-black font-normal text-xs shrink-0">{idx + 1}</div>
                          <div>
                            <span className="text-white font-normal text-sm">{step.s}: </span>
                            <span className="text-slate-400 text-xs">{step.d}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- KEY FEATURES SECTION: NEON BENTO --- */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-2xl space-y-4">
              <h2 className="text-3xl md:text-5xl font-normal text-white tracking-tight uppercase leading-tight">Key Features of <br/> FXCELITE Top Ups</h2>
              <p className="text-slate-500 text-base font-medium leading-relaxed italic">Our online trading account top up system is designed with a "Trader-First" philosophy.</p>
            </div>
            <div className="shrink-0 flex items-center gap-3 text-emerald-400 font-normal uppercase tracking-[0.2em] text-xs">
               <div className="w-10 h-[1px] bg-emerald-500/30"></div>
               Seamless Experience
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Multi-Currency", desc: "Recharge your account in USD, EUR, GBP, or local currencies to avoid excessive conversion charges.", icon: <Coins /> },
              { title: "Secure & Protected", desc: "Each transaction is safeguarded by 256-bit SSL encryption and 3D Secure protection.", icon: <Lock /> },
              { title: "No Hidden Charges", desc: "We operate on a transparent system—what you pay is what you see in your account balance.", icon: <CheckCircle2 /> },
              { title: "24/7 Accessibility", desc: "Our account funding system is available even when the markets are closed.", icon: <Clock /> },
              { title: "Mobile Optimized", desc: "Fund your trading account instantly from your mobile device through our mobile interface.", icon: <Smartphone /> },
              { title: "Instant Reflection", desc: "Experience the fastest way to top up. Login, fund your account, and get back to the charts.", icon: <Activity /> },
            ].map((item, i) => (
              <div key={i} className="group p-8 rounded-3xl bg-[#0B0E2A] border border-white/5 hover:border-emerald-500/40 transition-all duration-500 flex flex-col items-start relative overflow-hidden shadow-xl">
                <div className="absolute top-0 right-0 p-8 opacity-[0.02] group-hover:scale-125 transition-transform pointer-events-none">
                   {React.cloneElement(item.icon, { size: 100 })}
                </div>
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 border border-emerald-500/10 group-hover:scale-110 transition-transform">
                   {React.cloneElement(item.icon, { size: 24 })}
                </div>
                <h3 className="text-lg font-normal text-white mb-3 tracking-tight uppercase leading-tight">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- RELIABILITY SECTION: DUAL PANEL --- */}
      <section className="py-24 bg-white/[0.01] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="p-10 rounded-3xl bg-[#0B0E2A] border border-white/10 relative group shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 p-10 opacity-[0.03] group-hover:rotate-12 transition-transform duration-1000">
                <Shield size={180} />
              </div>
              <div className="relative z-10 space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20">
                    <Lock size={24} />
                  </div>
                  <h2 className="text-2xl font-normal text-white tracking-tight uppercase">Secure & Reliable</h2>
                </div>
                <div className="space-y-6 text-base text-slate-400 leading-relaxed font-light">
                  <p>
                    By opting for FXCELITE, you are opting for the best online broker for instant account top up. We understand that security is your topmost priority when it comes to adding funds to your trading account. Our system ensures your financial information is never stored on our servers and is processed by PCI-DSS compliant gateways.
                  </p>
                  <p className="text-white font-medium">
                    Are you currently using a Demo Account and ready to enter the live markets? Our online top up system is the bridge that helps you convert your practice into real-life profits.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-10 lg:p-8">
              <div className="space-y-4 text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-normal text-white tracking-tight uppercase leading-tight">Top Up Methods <br/> Available</h2>
                <p className="text-emerald-400 font-normal uppercase tracking-[0.2em] text-xs">Fastest options for global traders</p>
              </div>
              <div className="grid gap-4">
                {[
                  { l: "Credit/Debit Cards", d: "Visa and Mastercard for instant funding.", icon: <CreditCard /> },
                  { l: "E-Wallets", d: "Skrill, Neteller, and Perfect Money for rapid transfers.", icon: <Wallet /> },
                  { l: "Bank Wire", d: "Secure and traditional funding for larger capital moves.", icon: <Activity /> },
                  { l: "Cryptocurrency", d: "Fund using Bitcoin, USDT, or Ethereum for borderless transactions.", icon: <Bitcoin /> }
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 group/item items-center p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-emerald-500/5 flex items-center justify-center text-emerald-400 border border-emerald-500/10 group-hover/item:scale-110 transition-transform">
                      {React.cloneElement(item.icon, { size: 24 })}
                    </div>
                    <div>
                      <span className="text-white text-lg font-normal uppercase tracking-tight">{item.l}</span>
                      <p className="text-slate-400 text-sm font-light mt-1">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHO IT'S FOR: DARK CARDS --- */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-normal text-white tracking-tight uppercase leading-tight">Who is This For?</h2>
            <p className="text-emerald-400 text-sm font-normal uppercase tracking-[0.2em]">Fueling Every Strategy</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { l: "Active Day Traders", d: "People requiring immediate top up to respond to news events.", icon: <Zap /> },
              { l: "Swing Traders", d: "People requiring a top up to maintain long-term balances.", icon: <RefreshCw /> },
              { l: "New Investors", d: "People seeking the best broker offering immediate funding to start.", icon: <UserCheck /> },
              { l: "Automated Traders", d: "People requiring accounts to be kept funded for continuous EAs.", icon: <Cpu /> }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl bg-[#0B0E2A] border border-white/10 relative group shadow-2xl overflow-hidden text-center">
                 <div className="w-16 h-16 rounded-full bg-emerald-500/5 text-emerald-400 flex items-center justify-center mx-auto mb-6 border border-emerald-500/10 group-hover:scale-110 transition-transform shadow-[0_0_30px_-10px_rgba(16,185,129,0.3)]">
                   {React.cloneElement(item.icon, { size: 28 })}
                 </div>
                 <h4 className="text-lg font-normal text-white mb-3 tracking-tight uppercase">{item.l}</h4>
                 <p className="text-sm text-slate-400 leading-relaxed font-light">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FINAL CTA: OBSIDIAN POWER --- */}
      <section className="py-24 bg-black relative">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-normal text-white tracking-tight uppercase leading-tight">Why FXCELITE for <br/> Instant Funding?</h2>
            <p className="text-emerald-400 font-normal uppercase tracking-[0.2em] text-xs">The Fuel for Your Success</p>
          </div>
          <div className="text-base md:text-lg text-slate-400 leading-relaxed font-light italic">
             With our emphasis on safe, secure top-ups and our dedication to zero-latency processing, we deliver the ultimate funding experience. We do not only deliver a top-up service; we deliver the fuel for your success.
          </div>
          <div className="space-y-8 pt-4">
              <button 
                onClick={() => window.open('https://trade.FXCELITE.com/login', '_blank')}
                className="px-12 py-5 rounded-2xl bg-white text-black font-normal text-lg hover:bg-emerald-400 transition-all shadow-[0_20px_60px_-15px_rgba(16,185,129,0.4)] hover:-translate-y-1">
                Top Up Now
              </button>
              <div className="flex flex-col items-center gap-4">
                 <p className="text-emerald-400 font-normal uppercase tracking-[0.2em] text-xs">
                   Take control of your capital. Trade with confidence today!
                 </p>
                 <div className="flex gap-2">
                    <div className="w-4 h-1 bg-emerald-500 rounded-full animate-pulse"></div>
                    <div className="w-8 h-1 bg-emerald-400 rounded-full animate-pulse delay-75"></div>
                    <div className="w-4 h-1 bg-emerald-500 rounded-full animate-pulse delay-150"></div>
                 </div>
              </div>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-24 border-t border-white/5 bg-[#010208]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-normal text-white tracking-tight uppercase">Frequently Asked</h2>
            <p className="text-slate-500 font-medium uppercase tracking-widest text-sm">Account Funding Knowledge Base</p>
          </div>
          
          <div className="space-y-4">
            {[
              { q: "1. How long does a trading account top up take?", a: "For most payment options such as cards and e-wallets, the forex account top up is done instantly." },
              { q: "2. Is there a fee to add funds to my trading account?", a: "FXCELITE does not charge any deposit fees for a trading account funding top up, but your payment provider may." },
              { q: "3. What is the fastest way to top up a trading account?", a: "Credit/Debit card or a popular E-wallet is the fastest way to top up a trading account." },
              { q: "4. Is it safe to add money to my trading account online?", a: "Yes, we offer a safe and secure trading account top up environment with high-level encryption." },
              { q: "5. Can I top up my account using Cryptocurrency?", a: "Yes, we support multiple digital currencies for a fast and secure trading account top up." },
              { q: "6. What is the minimum amount I can top up?", a: "The minimum amount for top up of the trading account balance may vary depending on the payment method, but it is intended to be convenient for all users." },
              { q: "7. Can I top up during the weekend?", a: "Yes, our online trading account top up system is available 24/7, even during weekends when markets are closed." },
              { q: "8. How do I know if my top up was successful?", a: "You will receive an email confirmation, and your balance will be reflected in your Trading Platforms dashboard." },
              { q: "9. Can I top up for someone else?", a: "No, for security and AML purposes, we only permit a top up of the trading account from accounts in your name." },
              { q: "10. Do I need to verify my account before topping up?", a: "Although you can top up your trading account immediately, full verification is required for withdrawals and larger top up amounts." },
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
      isOpen ? 'border-emerald-500/40 bg-[#0B0E2A] shadow-xl' : 'border-white/5 bg-white/[0.01] hover:bg-white/[0.03]'
    }`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left group"
      >
        <span className={`font-normal text-sm md:text-base transition-colors uppercase tracking-tight ${isOpen ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
          {question}
        </span>
        <div className={`w-8 h-8 rounded-lg flex shrink-0 items-center justify-center transition-all duration-500 ml-4 ${
          isOpen ? 'bg-emerald-400 text-black rotate-180' : 'bg-white/5 text-slate-500 group-hover:bg-white/10'
        }`}>
            <ChevronDown size={16} />
        </div>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed animate-in fade-in slide-in-from-top-2 duration-500 font-light">
          <div className="h-[1px] w-full bg-white/5 mb-4"></div>
          {answer}
        </div>
      )}
    </div>
  );
}