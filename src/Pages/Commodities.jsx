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
  Database,
  Search,
  Layers,
  Activity,
  Droplets
} from 'lucide-react';

export default function Commodities() {
  return (
    <div className="bg-[#050617] text-slate-300">
      
      {/* NEW PREMIUM HERO SECTION */}
      <section className="relative pt-2 pb-3 lg:pt-2 lg:pb-3 overflow-hidden flex items-center min-h-[90vh]">
        {/* Deep Space & Grid Background */}
        <div className="absolute inset-0 bg-[#050617] z-0"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] z-0"></div>
        
        {/* Ambient Neon Glows */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-amber-500/20 blur-[150px] rounded-full mix-blend-screen pointer-events-none"></div>
        <div className="absolute bottom-10 left-1/4 w-[500px] h-[500px] bg-orange-600/20 blur-[150px] rounded-full mix-blend-screen pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-20">
            
            {/* Left Content */}
            <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left relative z-10">
              {/* Live Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                </span>
                <span className="text-xs font-semibold text-amber-100 tracking-wide uppercase">Real-World Resources</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.15] tracking-tight">
                Trade the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500">
                  Global Commodities
                </span> <br />
                Market.
              </h1>

              {/* Subheadline */}
              <p className="text-base md:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Hedge against inflation and diversify your portfolio. Trade Gold, Crude Oil, and essential global resources with lightning-fast execution and zero physical storage hassle.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <a 
                  href="https://trade.FXCELITE.com/register"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-900 font-normal text-base transition-all shadow-[0_0_40px_-10px_rgba(245,158,11,0.6)] hover:shadow-[0_0_60px_-15px_rgba(245,158,11,0.8)] hover:-translate-y-1 flex items-center justify-center gap-2 text-center"
                >
                  Start Trading Commodities <ArrowRight size={18} />
                </a>
                <a 
                  href="https://trade.FXCELITE.com/login"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-transparent border border-white/20 text-white font-normal text-base hover:bg-white/10 transition-all flex items-center justify-center gap-2 text-center"
                >
                  Explore Assets
                </a>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start gap-4 pt-4 text-sm text-slate-500 font-medium">
                <span className="flex items-center gap-1.5"><Shield size={16} className="text-emerald-400" /> Regulated</span>
                <span className="flex items-center gap-1.5"><Zap size={16} className="text-amber-400" /> &lt;10ms Execution</span>
              </div>
            </div>

            {/* Right Content - Glassmorphic Commodities UI */}
            <div className="w-full lg:w-1/2 relative lg:h-[500px] flex items-center justify-center">
              {/* Main Glass Dashboard Card */}
              <div className="relative w-full max-w-md bg-[#0a0f25]/80 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden z-10 transform hover:scale-[1.02] transition-transform duration-500">
                {/* Header */}
                <div className="p-5 border-b border-white/10 bg-white/[0.02] flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <Droplets size={20} className="text-amber-400" />
                    <span className="font-normal text-base text-white tracking-wide">Commodities Live</span>
                  </div>
                  <span className="text-xs font-medium bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full animate-pulse">Markets Open</span>
                </div>

                {/* Resource List */}
                <div className="p-2">
                  {[
                    { name: 'Gold', code: 'XAU/USD', price: '$2,154.20', change: '+0.85%', isUp: true, color: 'text-yellow-400', bg: 'bg-yellow-500/10 border-yellow-500/20' },
                    { name: 'Crude Oil', code: 'WTI', price: '$78.45', change: '-1.10%', isUp: false, color: 'text-slate-300', bg: 'bg-slate-500/10 border-slate-500/20' },
                    { name: 'Silver', code: 'XAG/USD', price: '$24.12', change: '+1.45%', isUp: true, color: 'text-slate-400', bg: 'bg-slate-400/10 border-slate-400/20' },
                  ].map((asset, i) => (
                    <div key={i} className="flex justify-between items-center p-4 hover:bg-white/5 rounded-2xl transition-colors cursor-pointer group">
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center border font-normal text-xs ${asset.bg} ${asset.color}`}>
                          {asset.name.substring(0,2).toUpperCase()}
                        </div>
                        <div>
                          <div className="font-normal text-sm text-white group-hover:text-amber-400 transition-colors">{asset.name}</div>
                          <div className="text-xs text-slate-500">{asset.code}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-mono font-normal text-sm text-white">{asset.price}</div>
                        <div className={`text-xs font-semibold ${asset.isUp ? 'text-emerald-400' : 'text-rose-400'}`}>{asset.change}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* SVG Trend Graph */}
                <div className="h-28 bg-gradient-to-t from-amber-900/40 to-transparent border-t border-white/5 relative mt-2">
                  <svg className="absolute bottom-0 w-full h-full preserve-3d" viewBox="0 0 400 100" preserveAspectRatio="none">
                    <path d="M0,100 L0,80 Q50,60 100,70 T200,40 T300,50 T400,20 L400,100 Z" fill="url(#commodity-grad)" opacity="0.5"/>
                    <path d="M0,80 Q50,60 100,70 T200,40 T300,50 T400,20" fill="none" stroke="#f59e0b" strokeWidth="2"/>
                    <defs>
                      <linearGradient id="commodity-grad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              {/* Floating Element */}
              <div className="absolute -right-8 top-10 w-36 p-4 bg-[#0B0E2A]/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl z-20 animate-bounce" style={{animationDuration: '4s'}}>
                <div className="text-xs text-slate-500 mb-1">XAU/USD Trend</div>
                <div className="font-normal text-white text-sm">Strong Buy</div>
                <div className="text-emerald-400 text-xs mt-1 flex items-center gap-1"><TrendingUp size={12}/> High Volatility</div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS COMMODITIES TRADING */}
      <section className="py-20 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-amber-500 to-orange-500 rounded-3xl blur-2xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#0B0E2A] shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1612152605347-f93296cb657d?q=80&w=2070&auto=format&fit=crop" 
                  alt="Gold Bars" 
                  className="w-full h-80 object-cover opacity-70 group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E2A] via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
                    <div className="flex items-center gap-3">
                      <Activity className="text-amber-400" size={24} />
                      <div className="text-slate-200 text-sm font-medium">Global Economy Drivers</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 space-y-5">
              <div className="inline-flex p-3 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <Layers size={24} />
              </div>
              <h2 className="text-2xl lg:text-3xl font-normal text-white tracking-tight">What Is Commodities Trading?</h2>
              <div className="space-y-4 text-base leading-relaxed text-slate-400">
                <p>
                  In layman's terms, commodity trading is the act of buying and selling commodities that fuel the world economy. These are usually categorized into "Hard Commodities" (mined commodities such as Gold and Oil) and "Soft Commodities" (agricultural commodities such as Coffee or Wheat).
                </p>
                <div className="p-5 rounded-2xl bg-white/5 border-l-4 border-amber-500 my-4">
                  <p className="text-white font-medium text-sm">
                    With FXCELITE, you are engaging in commodity CFD trading. This means that you are entering into a contract based on the price action of the underlying asset, bypassing delivery and storage.
                  </p>
                </div>
                <p>
                  If you think the price of a commodity will increase, you go "Long." If you think the price will decrease, you "Short" the market. This versatility, combined with our secure platform, makes CFDs the choice of the modern trader.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE SECTION */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full lg:w-1/3 h-full opacity-5 pointer-events-none">
          <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" alt="Resource Charts" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-normal text-white mb-4">Why Choose FXCELITE for Commodities?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base leading-relaxed">When dealing with global resources, execution speed and cost are vital. We offer a low spread commodity trading platform designed to maximize your efficiency.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: "24/5 Access", desc: "Trade global commodities online 24/5 with deep institutional liquidity.", icon: <Globe size={24} /> },
              { title: "Ultra-Low Latency", desc: "Platform specialists ensuring zero lag during Gold and Oil market news.", icon: <Zap size={24} /> },
              { title: "Leveraged Exposure", desc: "Control large positions of physical assets with a small capital outlay.", icon: <TrendingUp size={24} /> },
              { title: "Inflation Hedge", desc: "Use metals to protect your wealth when fiat currencies devalue.", icon: <Shield size={24} /> },
            ].map((feature, i) => (
              <div key={i} className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-amber-500/50 hover:bg-white/[0.04] transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 mb-5 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-normal text-white mb-2 tracking-tight">{feature.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES & BEST COMMODITIES SECTION WITH IMAGES */}
      <section className="py-20 bg-white/[0.01] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Left Col: Features */}
            <div className="space-y-8">
              <h2 className="text-2xl lg:text-3xl font-normal text-white tracking-tight">Platform Features</h2>
              <div className="text-base text-slate-400 italic">
                Our best commodity trading platform online is equipped with technical tools that simplify the complexity of raw material markets.
              </div>
              
              {/* Feature Image inside column */}
              <div className="rounded-2xl overflow-hidden border border-white/10 my-6 h-48 relative">
                <img 
                  src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=2000&auto=format&fit=crop" 
                  alt="Trading Desk" 
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-amber-900/20 mix-blend-multiply"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-black/60 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full border border-white/20">Advanced Analytics Hub</span>
                </div>
              </div>

              <div className="grid gap-4">
                {[
                  { t: "Real-time Pricing", d: "Live streaming from international commodity markets." },
                  { t: "Advanced Charting", d: "Technical analysis software designed for metal and energy markets." },
                  { t: "One-Click Trading", d: "Instant trade execution during high market volatility news events." },
                  { t: "Risk Management", d: "Guaranteed Stop Loss and Take Profit orders to protect your capital." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-amber-500/20 transition-all group">
                    <div className="shrink-0 w-8 h-8 rounded-full bg-amber-400/10 flex items-center justify-center text-amber-400 border border-amber-400/20">
                      <CheckCircle2 size={16} />
                    </div>
                    <div>
                      <h4 className="font-normal text-white text-base mb-1">{item.t}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right Col: Top Commodities */}
            <div className="space-y-8 lg:sticky lg:top-32">
              <div className="p-8 rounded-3xl bg-[#0B0E2A] border border-white/10 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
                  <img src="https://images.unsplash.com/photo-1496247749665-49cf94b99568?q=80&w=2070&auto=format&fit=crop" alt="Resources" className="w-full h-full object-cover" />
                </div>
                <h2 className="text-xl md:text-2xl font-normal text-white mb-6 relative z-10 tracking-tight">Best Commodities to Trade</h2>
                <p className="text-slate-400 mb-6 text-sm leading-relaxed relative z-10">
                  The current market landscape sees high demand for energy and precious metals. Here are the best commodities to trade:
                </p>
                <div className="space-y-3 relative z-10">
                  {[
                    { n: "Gold (XAU)", d: "The ultimate safe haven during geopolitical uncertainty." },
                    { n: "Crude Oil (WTI)", d: "High-volatility asset driven by global demand." },
                    { n: "Silver (XAG)", d: "A dual-purpose asset (investment and industrial tech)." },
                    { n: "Natural Gas", d: "A key energy source with seasonal price swings." },
                    { n: "Copper", d: "Reflects the health of the global construction industry." }
                  ].map((idx, i) => (
                    <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/[0.08] hover:border-amber-400/40 transition-all cursor-default">
                      <div>
                        <div className="font-normal text-sm text-white tracking-tight">{idx.n}</div>
                        <div className="text-xs text-slate-500 mt-0.5">{idx.d}</div>
                      </div>
                      <TrendingUp size={16} className="text-amber-400" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 relative overflow-hidden group">
                <img 
                    src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=2071&auto=format&fit=crop" 
                    alt="Comparison" 
                    className="absolute inset-0 w-full h-full object-cover opacity-5 group-hover:scale-105 transition-transform duration-1000"
                />
                <h2 className="text-xl font-normal text-white mb-4 tracking-tight relative z-10">Commodities vs Indices</h2>
                <p className="text-slate-400 leading-relaxed text-sm relative z-10">
                  Whereas Crypto is driven by tech sentiment and Indices by corporate health, commodities are driven by supply chains, weather, and geopolitics. Gold tends to trade inversely to the US Dollar, making it a great hedge for forex traders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW TO TRADE SECTION */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-normal text-white mb-4">How to Trade Commodity CFDs</h2>
            <p className="text-slate-400 text-base">Starting your journey into the world of resources is simple:</p>
          </div>
          <div className="grid md:grid-cols-5 gap-5">
            {[
              { n: "01", t: "Register", d: "Sign up for your Live Trading Account." },
              { n: "02", t: "Verify", d: "Complete the secure KYC process." },
              { n: "03", t: "Fund", d: "Deposit using your preferred method." },
              { n: "04", t: "Select", d: "Choose Gold, Oil, or other raw metals." },
              { n: "05", t: "Trade", d: "Analyze charts and execute with a click." },
            ].map((step, i) => (
              <div key={i} className="p-6 rounded-3xl bg-[#0B0E2A] border border-white/5 hover:border-amber-500/40 hover:-translate-y-1 transition-all duration-300 text-center relative overflow-hidden shadow-lg">
                <div className="absolute top-0 right-0 w-20 h-20 bg-amber-500/5 blur-[30px] rounded-full"></div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-600 text-black flex items-center justify-center font-normal text-lg mx-auto mb-4 shadow-[0_0_15px_rgba(245,158,11,0.3)]">
                  {step.n}
                </div>
                <h4 className="text-base font-normal text-white mb-2 tracking-tight">{step.t}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECURITY & TARGET AUDIENCE */}
      <section className="py-20 border-y border-white/5 bg-[#0B0E2A]/20 backdrop-blur-3xl relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="p-8 lg:p-10 rounded-3xl bg-[#0B0E2A] border border-white/10 relative group overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" 
                alt="Security" 
                className="absolute inset-0 w-full h-full object-cover opacity-5 group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-amber-400/10 text-amber-400 border border-amber-400/20">
                    <Shield size={24} />
                  </div>
                  <h2 className="text-xl md:text-2xl font-normal text-white tracking-tight">Security & Reliability</h2>
                </div>
                <p className="text-base text-slate-400 leading-relaxed font-light">
                  At FXCELITE, we ensure that you have a safe commodity trading platform that uses end-to-end encryption. Since you are trading CFDs, you are protected from the dangers of physical theft or storage failures, allowing for complete peace of mind.
                </p>
              </div>
            </div>
            
            <div className="p-8 lg:p-10 rounded-3xl bg-[#0B0E2A] border border-white/10 relative group overflow-hidden shadow-2xl">
               <img 
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1974&auto=format&fit=crop" 
                alt="Who Trades Commodities" 
                className="absolute inset-0 w-full h-full object-cover opacity-5 group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-orange-400/10 text-orange-400 border border-orange-400/20">
                    <Globe size={24} />
                  </div>
                  <h2 className="text-xl md:text-2xl font-normal text-white tracking-tight">Who Should Trade Them?</h2>
                </div>
                <ul className="space-y-4">
                  {[
                    "Hedgers: Protect portfolios against inflation.",
                    "Trend Traders: Follow long-term global energy trends.",
                    "Day Traders: Exploit high daily volatility of Gold and Oil.",
                    "Strategic Diversifiers: Add non-correlated assets."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.5)] mt-2"></div>
                      <span className="text-sm md:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-24 text-center max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight">Why is FXCELITE the Best Choice?</h2>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-10 font-light">
              With our low spread platform, you get more than just access—you get an edge. From elite tools to 24/5 expert support, we empower you to master gold trading, oil trading, and beyond.
            </p>
            <div className="space-y-6">
              <a 
                href="https://trade.FXCELITE.com/register"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 rounded-full bg-white text-black font-normal text-base hover:bg-amber-400 hover:-translate-y-1 transition-all shadow-[0_10px_30px_-10px_rgba(245,158,11,0.2)] text-center"
              >
                Join FXCELITE Today
              </a>
              <div className="flex flex-col items-center gap-3">
                <p className="text-amber-400 font-normal uppercase tracking-widest text-xs">
                  Own the assets that drive the world.
                </p>
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-amber-400 animate-bounce"></div>
                  <div className="w-2 h-2 rounded-full bg-orange-500 animate-bounce delay-100"></div>
                  <div className="w-2 h-2 rounded-full bg-amber-400 animate-bounce delay-200"></div>
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
            <div className="inline-flex p-3 rounded-2xl bg-amber-500/10 text-amber-400 mb-4 border border-amber-500/20">
              <HelpCircle size={32} />
            </div>
            <h2 className="text-2xl md:text-3xl font-normal text-white tracking-tight">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "1. What is commodities trading?", a: "It is the speculation on the price of raw materials such as gold, oil, and agricultural products." },
              { q: "2. Can I trade commodities online?", a: "Yes, with our commodity trading platform, you can trade different resources directly from your browser or mobile." },
              { q: "3. What is gold trading?", a: "It is the speculation on the price of gold, usually against the US Dollar (XAU/USD), and is often used as a safe-haven asset." },
              { q: "4. How does oil trading work on a CFD platform?", a: "You trade the price difference of crude oil without owning the actual barrels. You can profit from both rising and falling oil prices." },
              { q: "5. Is there a minimum deposit for commodities?", a: "FXCELITE provides flexible account options, and you can start commodities trading with a budget that suits you." },
              { q: "6. What are the best commodities to trade for beginners?", a: "Gold and Crude Oil are the most popular commodities for beginners because of their high liquidity and plenty of market news available." },
              { q: "7. Do you offer commodities trading with low spreads?", a: "Yes, we are a leading low spread commodity trading platform, ensuring that your spreads are among the lowest in the market." },
              { q: "8. Can I trade commodities 24/7?", a: "Most commodity markets are open 24/5, following global exchange hours from Monday to Friday." },
              { q: "9. Is a commodities CFD trading platform secure?", a: "Absolutely. FXCELITE employs advanced encryption and segregated accounts to provide a secure commodity trading platform." },
              { q: "10. How do I start metal trading?", a: "Simply sign up at FXCELITE, fund your account, and choose metals such as Gold, Silver, or Copper from the dashboard." },
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
      isOpen ? 'border-amber-500/40 bg-amber-500/5 shadow-[0_0_20px_-10px_rgba(245,158,11,0.2)]' : 'border-white/10 bg-white/[0.02] hover:bg-white/[0.04]'
    }`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left group"
      >
        <span className={`font-normal text-base md:text-lg transition-colors ${isOpen ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
          {question}
        </span>
        <div className={`w-8 h-8 rounded-lg flex shrink-0 items-center justify-center transition-all duration-300 ml-4 ${
          isOpen ? 'bg-amber-400 text-black rotate-180' : 'bg-white/5 text-slate-500 group-hover:bg-white/10'
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