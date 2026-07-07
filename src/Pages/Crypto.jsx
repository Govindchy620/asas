import React, { useState } from 'react';
import { 
  Shield, 
  TrendingUp, 
  Globe, 
  Zap, 
  Smartphone, 
  HelpCircle, 
  ChevronDown, 
  CheckCircle2, 
  ArrowRight,
  Bitcoin,
  Coins,
  Lock,
  Cpu,
  RefreshCcw,
  ZapOff,
  Activity
} from 'lucide-react';

export default function Crypto() {
  return (
    <div className="bg-[#050617] text-slate-300">
      
      {/* NEW PREMIUM HERO SECTION */}
      <section className="relative pt-32 pb-40 lg:pt-10 lg:pb-10 overflow-hidden flex items-center min-h-[90vh]">
        {/* Deep Space & Grid Background */}
        <div className="absolute inset-0 bg-[#050617] z-0"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] z-0"></div>
        
        {/* Ambient Neon Glows */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-purple-600/20 blur-[150px] rounded-full mix-blend-screen pointer-events-none"></div>
        <div className="absolute bottom-10 left-1/4 w-[500px] h-[500px] bg-blue-600/20 blur-[150px] rounded-full mix-blend-screen pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-20">
            
            {/* Left Content */}
            <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left relative z-10">
              {/* Live Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl">
                <Bitcoin size={16} className="text-purple-400 animate-bounce" />
                <span className="text-xs font-semibold text-purple-100 tracking-wide uppercase">The Future of Digital Finance</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.15] tracking-tight">
                Trade the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500">
                  Crypto Markets
                </span> <br />
                With Confidence.
              </h1>

              {/* Subheadline */}
              <p className="text-base md:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Speculate on the price of Bitcoin, Ethereum, and major altcoins through CFDs. Enjoy zero wallet hassle, lightning-fast execution, and institutional-grade security.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <a 
                  href="https://trade.fxcelite.com/register"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-purple-500 hover:bg-purple-400 text-white font-bold text-base transition-all shadow-[0_0_40px_-10px_rgba(168,85,247,0.6)] hover:shadow-[0_0_60px_-15px_rgba(168,85,247,0.8)] hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  Start Trading Crypto <ArrowRight size={18} />
                </a>
                <a 
                  href="https://trade.fxcelite.com/login"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-transparent border border-white/20 text-white font-bold text-base hover:bg-white/10 transition-all flex items-center justify-center gap-2 text-center"
                >
                  Explore Assets
                </a>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start gap-4 pt-4 text-sm text-slate-500 font-medium">
                <span className="flex items-center gap-1.5"><Shield size={16} className="text-emerald-400" /> Regulated</span>
                <span className="flex items-center gap-1.5"><Zap size={16} className="text-purple-400" /> &lt;10ms Execution</span>
              </div>
            </div>

            {/* Right Content - Glassmorphic Crypto UI */}
            <div className="w-full lg:w-1/2 relative lg:h-[500px] flex items-center justify-center">
              {/* Main Glass Dashboard Card */}
              <div className="relative w-full max-w-md bg-[#0a0f25]/80 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden z-10 transform hover:scale-[1.02] transition-transform duration-500">
                {/* Header */}
                <div className="p-5 border-b border-white/10 bg-white/[0.02] flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <Activity size={20} className="text-purple-400" />
                    <span className="font-bold text-base text-white tracking-wide">Live CFDs</span>
                  </div>
                  <span className="text-xs font-medium bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full animate-pulse">24/7 Market</span>
                </div>

                {/* Coin List */}
                <div className="p-2">
                  {[
                    { name: 'Bitcoin', code: 'BTC/USD', price: '$64,231.50', change: '+4.25%', isUp: true, color: 'text-orange-400', bg: 'bg-orange-500/10 border-orange-500/20' },
                    { name: 'Ethereum', code: 'ETH/USD', price: '$3,452.12', change: '+2.10%', isUp: true, color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/20' },
                    { name: 'Solana', code: 'SOL/USD', price: '$145.80', change: '-1.45%', isUp: false, color: 'text-purple-400', bg: 'bg-purple-500/10 border-purple-500/20' },
                  ].map((coin, i) => (
                    <div key={i} className="flex justify-between items-center p-4 hover:bg-white/5 rounded-2xl transition-colors cursor-pointer group">
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center border ${coin.bg} ${coin.color}`}>
                          <Bitcoin size={20} />
                        </div>
                        <div>
                          <div className="font-bold text-sm text-white group-hover:text-purple-400 transition-colors">{coin.name}</div>
                          <div className="text-xs text-slate-500">{coin.code}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-mono font-bold text-sm text-white">{coin.price}</div>
                        <div className={`text-xs font-semibold ${coin.isUp ? 'text-emerald-400' : 'text-rose-400'}`}>{coin.change}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* SVG Trend Graph */}
                <div className="h-28 bg-gradient-to-t from-purple-900/40 to-transparent border-t border-white/5 relative mt-2">
                  <svg className="absolute bottom-0 w-full h-full preserve-3d" viewBox="0 0 400 100" preserveAspectRatio="none">
                    <path d="M0,100 L0,70 Q50,90 100,50 T200,40 T300,60 T400,20 L400,100 Z" fill="url(#crypto-grad)" opacity="0.5"/>
                    <path d="M0,70 Q50,90 100,50 T200,40 T300,60 T400,20" fill="none" stroke="#a855f7" strokeWidth="2"/>
                    <defs>
                      <linearGradient id="crypto-grad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#a855f7" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              {/* Floating Element 1 */}
              <div className="absolute -right-8 top-10 w-32 p-4 bg-[#0B0E2A]/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl z-20 animate-bounce" style={{animationDuration: '4s'}}>
                <div className="text-xs text-slate-500 mb-1">24h Vol</div>
                <div className="font-bold text-white text-sm">$84.2B</div>
                <div className="text-emerald-400 text-xs mt-1 flex items-center gap-1"><TrendingUp size={12}/> High</div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS CRYPTO TRADING + PHOTO */}
      <section className="py-20 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-purple-500 to-blue-500 rounded-3xl blur-2xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#0B0E2A] shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1622630998477-20aa696ecb05?q=80&w=2000&auto=format&fit=crop" 
                  alt="Ethereum Abstract" 
                  className="w-full h-80 object-cover opacity-70 group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E2A] via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
                    <p className="text-slate-300 text-sm leading-relaxed font-medium">
                      "Skip the cold storage. Trade instantly on a secure platform to capture market entries and exits."
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 space-y-6">
              <div className="inline-flex p-3 rounded-2xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                <RefreshCcw size={24} />
              </div>
              <h2 className="text-3xl font-bold text-white tracking-tight">What Is Cryptocurrency Trading?</h2>
              <div className="space-y-4 text-base leading-relaxed text-slate-400">
                <p>
                  Basically, cryptocurrency trading involves speculating on the price movements of digital currencies. Although a few people buy coins with the idea of storing them over a long period, most modern traders prefer to trade digital currencies through CFDs (Contracts for Difference).
                </p>
                <div className="p-5 rounded-2xl bg-white/5 border-l-4 border-purple-500 my-4">
                   <p className="text-white font-medium text-sm">
                     The main advantage: With CFDs, you trade purely on the price movement of the asset without actually owning it (meaning no need to secure "private keys").
                   </p>
                </div>
                <p>
                  This mode of trading is particularly favored in the case of Bitcoin and Ethereum due to the availability of greater leverage and quicker transactions. Instead of worrying about exchange hacks, you use a secure brokerage to make your trades instantly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE SECTION */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none">
          <img src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2070&auto=format&fit=crop" alt="Abstract Tech" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Fxcelite for Crypto?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base leading-relaxed">Navigating the crypto markets requires a partner you can trust. We offer a trading platform built for high performance and maximum security.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: "24/7 Access", desc: "The crypto markets never sleep. Trade anytime, day or night.", icon: <Globe size={24}/> },
              { title: "Low Spreads", desc: "Keep entry costs highly competitive with razor-thin spreads.", icon: <TrendingUp size={24}/> },
              { title: "No Wallets", desc: "Get straight to price action without the technical hassle.", icon: <ZapOff size={24}/> },
              { title: "Top Security", desc: "Encrypted data and funds kept in strictly segregated accounts.", icon: <Shield size={24}/> },
            ].map((feature, i) => (
              <div key={i} className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-purple-500/50 hover:bg-white/[0.04] transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-5 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 tracking-tight">{feature.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES & BEST CRYPTO SECTION WITH IMAGES */}
      <section className="py-20 bg-white/[0.01] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Left Col: Features */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-white tracking-tight">Platform Features</h2>
              <div className="text-base text-slate-400 italic">
                Our crypto trading platform is designed to handle the unique volatility of the digital asset market. We provide the tools you need to stay ahead of the curve.
              </div>
              
              {/* Added Image inside the features column */}
              <div className="rounded-2xl overflow-hidden border border-white/10 my-6 h-48 relative">
                <img 
                  src="https://images.unsplash.com/photo-1605792657660-596af9009e82?q=80&w=2000&auto=format&fit=crop" 
                  alt="Trading Setup" 
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-purple-900/20 mix-blend-multiply"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-black/60 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full border border-white/20">Pro Charts Included</span>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { t: "Real-time Data", d: "Access real-time prices for Bitcoin, Ethereum, and leading altcoins." },
                  { t: "Leveraged Trading", d: "Max out your market exposure with our leverage trading feature." },
                  { t: "Technical Tools", d: "Use over 30 indicators on your crypto CFD trading charts." },
                  { t: "Instant Execution", d: "Exit your trades in milliseconds to freeze market prices." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-purple-500/20 transition-all group">
                    <div className="shrink-0 w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 border border-purple-500/20">
                      <CheckCircle2 size={16} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base mb-0.5">{item.t}</h4>
                      <p className="text-slate-500 text-sm">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Col: Top Cryptos */}
            <div className="space-y-8 lg:sticky lg:top-16">
              <div className="p-8 rounded-3xl bg-[#0B0E2A] border border-white/10 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 p-6 opacity-[0.03] pointer-events-none">
                  <Cpu size={120} />
                </div>
                <h2 className="text-2xl font-bold text-white mb-6 tracking-tight relative z-10">Best Cryptos to Trade</h2>
                <p className="text-slate-400 mb-6 text-sm leading-relaxed relative z-10">
                  Liquidity is concentrated in high-utility assets. While there are thousands of coins, these are considered the top tier for CFD traders:
                </p>
                <div className="space-y-3 relative z-10">
                  {[
                    { n: "Bitcoin (BTC)", d: "The “digital gold” and market sentiment leader." },
                    { n: "Ethereum (ETH)", d: "The foundation of DeFi and smart contracts." },
                    { n: "Solana (SOL)", d: "Famous for fast transactions and an expanding ecosystem." },
                    { n: "Stablecoins", d: "Traders’ go-to assets for parking funds." },
                    { n: "Ripple (XRP)", d: "Focuses on international payment solutions." }
                  ].map((coin, i) => (
                    <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/[0.08] hover:border-purple-400/40 transition-all">
                      <div>
                        <div className="font-bold text-sm text-white tracking-tight">{coin.n}</div>
                        <div className="text-xs text-slate-500 mt-0.5">{coin.d}</div>
                      </div>
                      <TrendingUp size={16} className="text-purple-400" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 group relative overflow-hidden shadow-xl">
                 <img 
                  src="https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=2000&auto=format&fit=crop" 
                  alt="Coins" 
                  className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:scale-105 transition-transform duration-1000" 
                 />
                 <h2 className="text-xl font-bold text-white mb-4 relative z-10 tracking-tight">Crypto vs Traditional Trading</h2>
                 <p className="text-slate-400 text-sm leading-relaxed relative z-10">
                 Cryptocurrency trading is based on technology adoption and global liquidity. Volatility in crypto markets is often much higher, which means bigger trading opportunities in a shorter period of time.
                 </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW TO TRADE SECTION */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">How to Trade Crypto CFDs</h2>
            <p className="text-slate-400 text-base">Starting your journey into digital asset trading is simple:</p>
          </div>
          <div className="grid md:grid-cols-5 gap-5">
            {[
              { n: "01", t: "Register", d: "Sign up for your Live Trading Account." },
              { n: "02", t: "Verify", d: "Complete your profile securely." },
              { n: "03", t: "Fund", d: "Deposit using Fiat or Crypto methods." },
              { n: "04", t: "Select", d: "Choose Bitcoin, Ethereum, or Altcoins." },
              { n: "05", t: "Trade", d: "Place your trade with Stop-Loss orders." },
            ].map((step, i) => (
              <div key={i} className="p-6 rounded-3xl bg-[#0B0E2A] border border-white/5 hover:border-purple-500/40 hover:-translate-y-1 transition-all duration-300 text-center relative overflow-hidden shadow-lg">
                <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500/5 blur-[30px] rounded-full"></div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-blue-600 text-white flex items-center justify-center font-black text-lg mx-auto mb-4 shadow-md">
                  {step.n}
                </div>
                <h4 className="text-base font-bold text-white mb-2 tracking-tight">{step.t}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECURITY & TARGET SECTION */}
      <section className="py-20 bg-gradient-to-b from-transparent to-[#0B0E2A]/40 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="p-8 lg:p-10 rounded-3xl bg-[#0B0E2A] border border-white/10 shadow-2xl relative group overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2000&auto=format&fit=crop" 
                alt="Cybersecurity" 
                className="absolute inset-0 w-full h-full object-cover opacity-5 group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-purple-400/10 text-purple-400 border border-purple-400/20">
                    <Lock size={24} />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">Security & Reliability</h2>
                </div>
                <p className="text-base text-slate-400 leading-relaxed font-light">
                  We are aware of the concerns regarding digital assets. This is why we offer a safe crypto trading platform that uses bank-standard encryption. With CFD trading, you can forget about losing your assets to "lost passwords" or "wallet hacks."
                </p>
              </div>
            </div>

            <div className="p-8 lg:p-10 rounded-3xl bg-[#0B0E2A] border border-white/10 shadow-2xl relative group overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1642104704074-907c0698cbd9?q=80&w=2000&auto=format&fit=crop" 
                alt="Who Trades Crypto" 
                className="absolute inset-0 w-full h-full object-cover opacity-5 group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-blue-400/10 text-blue-400 border border-blue-400/20">
                    <Smartphone size={24} />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">Who Should Trade Crypto?</h2>
                </div>
                <ul className="space-y-4">
                  {[
                    "Volatility Seekers: Profit from big daily price movements.",
                    "Tech Enthusiasts: Those who value blockchain adoption.",
                    "Diversifiers: Adding high-growth assets to a portfolio.",
                    "Active Traders: Taking advantage of 24/7 market hours."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.5)] mt-2"></div>
                      <span className="text-sm md:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-24 text-center max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight">Why is FXCElite the Best Choice?</h2>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-10 font-light">
              You get the thrill of the crypto market and the dependability of a professional trading brokerage. Enjoy low spreads, 24/7 market access, and a team of experts ready to assist you.
            </p>
            <div className="space-y-6">
              <a 
                href="https://trade.Fxcelite.com/register"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 rounded-full bg-white text-black font-bold text-base hover:bg-purple-500 hover:text-white hover:-translate-y-1 transition-all shadow-[0_10px_30px_-10px_rgba(168,85,247,0.3)] text-center"
              >
                Join Fxcelite Today
              </a>
              <div className="flex flex-col items-center gap-3">
                <p className="text-purple-400 font-bold uppercase tracking-widest text-xs">
                  The future is digital. Start trading today!
                </p>
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-purple-400 animate-bounce"></div>
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce delay-100"></div>
                  <div className="w-2 h-2 rounded-full bg-purple-400 animate-bounce delay-200"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 bg-[#050617]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-2xl bg-purple-500/10 text-purple-400 mb-4 border border-purple-500/20">
              <HelpCircle size={32} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "1. What is cryptocurrency trading?", a: "It is the speculation on the price movements of digital assets such as Bitcoin or Ethereum." },
              { q: "2. Can I trade cryptocurrencies online 24/7?", a: "Yes, unlike stocks or forex, the crypto market is open 24 hours a day, 7 days a week." },
              { q: "3. What is crypto CFD trading?", a: "It allows you to trade the price movement of a coin without owning the actual coin or managing a digital wallet." },
              { q: "4. Is Bitcoin trading safe?", a: "When trading through a secure crypto trading platform like Fxcelite, your account is protected by professional security protocols." },
              { q: "5. What is the best crypto to trade for beginners?", a: "Bitcoin and Ethereum are usually recommended due to their high liquidity and stability compared to smaller altcoins." },
              { q: "6. Do I require a wallet to trade on Fxcelite?", a: "No, as you will be trading CFDs, you will not need to create or maintain a personal digital wallet." },
              { q: "7. Can I trade crypto with low spreads?", a: "Yes, we provide cryptocurrency trading with low spreads so that you can retain more of your profits." },
              { q: "8. What influences the price of cryptocurrencies?", a: "The most important factors include supply and demand, technological advancements, regulatory announcements, and market liquidity." },
              { q: "9. Can I trade Ethereum and Bitcoin on the same platform?", a: "Yes, our bitcoin and ethereum trading platform enables you to manage all your digital assets from one place." },
              { q: "10. How do I begin trading digital assets?", a: "Simply register with Fxcelite, make a deposit, and you can start trading crypto CFDs within minutes." },
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
      isOpen ? 'border-purple-500/40 bg-purple-500/5 shadow-[0_0_20px_-10px_rgba(168,85,247,0.2)]' : 'border-white/10 bg-white/[0.02] hover:bg-white/[0.04]'
    }`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left group"
      >
        <span className={`font-bold text-base md:text-lg transition-colors ${isOpen ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
          {question}
        </span>
        <div className={`w-8 h-8 rounded-lg flex shrink-0 items-center justify-center transition-all duration-300 ml-4 ${
          isOpen ? 'bg-purple-400 text-black rotate-180' : 'bg-white/5 text-slate-500 group-hover:bg-white/10'
        }`}>
            <ChevronDown size={18} />
        </div>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 text-slate-400 text-sm md:text-base leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="h-[1px] w-full bg-white/5 mb-4"></div>
          {answer}
        </div>
      )}
    </div>
  );
}