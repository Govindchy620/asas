import React, { useState } from 'react';
import { 
  Shield, 
  TrendingUp, 
  Globe, 
  Zap, 
  BarChart3, 
  Smartphone, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  ArrowRight,
  PieChart,
  Activity,
  Layers,
  Search
} from 'lucide-react';

export default function Indices() {
  return (
    <div className="bg-[#050617] text-slate-300">
      
      {/* NEW PREMIUM HERO SECTION */}
      <section className="relative pt-32 pb-40 lg:pt-8 lg:pb-56 overflow-hidden flex items-center min-h-[90vh]">
        {/* Backgrounds */}
        <div className="absolute inset-0 bg-[#050617] z-0"></div>
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] z-0"></div>
        {/* Ambient Glows */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/20 blur-[150px] rounded-full mix-blend-screen pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/20 blur-[150px] rounded-full mix-blend-screen pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-20">
            
            {/* Left Content */}
            <div className="w-full lg:w-1/2 space-y-6 relative z-10 text-center lg:text-left">
              {/* Live Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                <span className="text-xs font-semibold text-cyan-100 tracking-wide uppercase">Live Market Data Active</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.15] tracking-tight">
                Master the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                  Global Indices
                </span> <br />
                Ecosystem.
              </h1>

              {/* Subheadline */}
              <p className="text-base md:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Trade the world's most powerful economies from a single platform. Zero in on the S&P 500, NASDAQ, DAX 40, and more with lightning-fast execution and razor-thin spreads.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <a 
                  href="https://trade.fxcelite.com/register"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold text-base transition-all shadow-[0_0_40px_-10px_rgba(6,182,212,0.6)] hover:shadow-[0_0_60px_-15px_rgba(6,182,212,0.8)] hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  Launch Trading Desk <ArrowRight size={18} />
                </a>
                <a 
                  href="https://trade.fxcelite.com/login"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-transparent border border-white/20 text-white font-bold text-base hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                >
                  View Market Live
                </a>
              </div>
            </div>

            {/* Right Content - Glassmorphism UI Ticker Card */}
            <div className="w-full lg:w-1/2 relative lg:h-[500px] flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

              {/* Main Glass Card */}
              <div className="relative w-full max-w-md bg-[#0a0f25]/80 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-500">
                {/* Card Header */}
                <div className="p-5 border-b border-white/10 bg-white/[0.02] flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <BarChart3 size={20} className="text-cyan-400" />
                    <span className="font-bold text-base text-white tracking-wide">Top Movers</span>
                  </div>
                  <span className="text-xs font-medium bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full animate-pulse">Markets Open</span>
                </div>

                {/* Ticker List */}
                <div className="p-2">
                  {[
                    { name: 'S&P 500', code: 'US500', price: '5,137.08', change: '+1.25%', isUp: true },
                    { name: 'NASDAQ', code: 'USTECH', price: '18,302.91', change: '+2.10%', isUp: true },
                    { name: 'DAX 40', code: 'GER40', price: '17,735.03', change: '-0.45%', isUp: false },
                    { name: 'FTSE 100', code: 'UK100', price: '7,952.62', change: '+0.88%', isUp: true }
                  ].map((idx, i) => (
                    <div key={i} className="flex justify-between items-center p-4 hover:bg-white/5 rounded-2xl transition-colors cursor-pointer group">
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center border ${idx.isUp ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : 'bg-rose-500/10 border-rose-500/20 text-rose-400'}`}>
                          {idx.isUp ? <TrendingUp size={18} /> : <Activity size={18} />}
                        </div>
                        <div>
                          <div className="font-bold text-sm text-white group-hover:text-cyan-400 transition-colors">{idx.name}</div>
                          <div className="text-xs text-slate-500">{idx.code}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-mono font-bold text-sm text-white">{idx.price}</div>
                        <div className={`text-xs font-semibold ${idx.isUp ? 'text-emerald-400' : 'text-rose-400'}`}>{idx.change}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* SVG Line Chart Graphic */}
                <div className="h-24 bg-gradient-to-t from-cyan-900/40 to-transparent border-t border-white/5 relative mt-2">
                  <svg className="absolute bottom-0 w-full h-full preserve-3d" viewBox="0 0 400 100" preserveAspectRatio="none">
                    <path d="M0,100 L0,50 Q50,80 100,40 T200,60 T300,20 T400,30 L400,100 Z" fill="url(#hero-grad)" opacity="0.5"/>
                    <path d="M0,50 Q50,80 100,40 T200,60 T300,20 T400,30" fill="none" stroke="#22d3ee" strokeWidth="2"/>
                    <defs>
                      <linearGradient id="hero-grad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* WHAT ARE INDICES */}
      <section className="py-20 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500 to-blue-500 rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl bg-[#0B0E2A]">
                <img 
                  src="https://images.unsplash.com/photo-1535320903710-d993d3d77d29?q=80&w=2070&auto=format&fit=crop" 
                  alt="Financial Analysis" 
                  className="w-full h-64 object-cover opacity-60"
                />
                <div className="p-6 space-y-3">
                  <div className="flex justify-between items-end">
                    <div className="space-y-1">
                      <span className="text-xs text-slate-500 uppercase tracking-widest font-bold">Benchmark Performance</span>
                      <div className="text-xl font-bold text-white">Global Indices</div>
                    </div>
                    <Layers className="text-cyan-400" size={28} />
                  </div>
                  <div className="grid grid-cols-3 gap-4 mt-2">
                    <div className="h-1 bg-cyan-400 rounded-full"></div>
                    <div className="h-1 bg-blue-500 rounded-full"></div>
                    <div className="h-1 bg-slate-700 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-5">
              <div className="inline-flex p-3 rounded-2xl bg-cyan-500/10 text-cyan-400">
                <Search size={24} />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-white tracking-tight">What Is Indices Trading?</h2>
              <div className="text-base leading-relaxed space-y-5 text-slate-400">
                <p>
                  Fundamentally, index trading is all about speculating on the price action of a basket of stocks that comprise an index. Rather than investing in 500 individual stocks, you are investing in one product that follows all of them. This approach to global indices trading is extremely popular because it minimizes the risk that is inherent in the price fluctuations of individual stocks.
                </p>
                <p>
                  With our indices CFD trading strategy, you are essentially speculating on the difference in the price of the index from the time you enter the trade until the time you exit. This enables you to use more leverage and even "short" the market if you feel that the economic prospects of a particular country are deteriorating.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE SECTION */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full lg:w-1/3 h-full opacity-5 pointer-events-none">
          <img src="https://images.unsplash.com/photo-1454165833767-027ffea9e78b?q=80&w=2070&auto=format&fit=crop" alt="Strategy" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Why Choose FXCElite for Stock Indices Trading?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base leading-relaxed">When searching for an indices trading platform, you require stability and low costs. FXCElite differs from other platforms because it provides a global index CFD trading platform that suits all levels of traders.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: "24/5 Access", desc: "Trade stock indices online with 24/5 access to major global markets.", icon: <Globe size={24} /> },
              { title: "Low Spreads", desc: "Indices trading with low spreads to ensure that your entry and exit costs are kept at a minimum.", icon: <TrendingUp size={24} /> },
              { title: "Transparent Pricing", desc: "No hidden fees: Transparent pricing on all major benchmarks.", icon: <Zap size={24} /> },
              { title: "Flexible Leverage", desc: "Maximize your market exposure with institutional-grade leverage.", icon: <Shield size={24} /> },
            ].map((feature, i) => (
              <div key={i} className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-cyan-500/50 hover:bg-white/[0.04] transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-5 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 tracking-tight">{feature.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 p-6 rounded-xl bg-gradient-to-r from-cyan-500/5 to-transparent border border-cyan-500/10 text-center">
            <p className="text-cyan-400 font-bold italic text-sm tracking-wide">Seamless Integration: Switch between Forex Trading and indices from one single login.</p>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-20 bg-white/[0.01] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-white tracking-tight">Key Features of Our Indices Trading Platform</h2>
              <div className="prose prose-invert max-w-none text-slate-400 text-base leading-relaxed italic">
                Our system is packed with index trading tools that will give you the edge you need in the rapidly changing stock market.
              </div>
              <div className="grid gap-4">
                {[
                  { t: "Real-Time Charting", d: "Analyze the market with our Trading Charts and identify trends in the NASDAQ, Dow Jones, and other indexes." },
                  { t: "Instant Execution", d: "No waiting around—execute a trade based on the price you see on your screen." },
                  { t: "Full News Feed", d: "Get the latest economic news that affects indexes around the world." },
                  { t: "Advanced Order Types", d: "Set up Stop Loss and Take Profit orders to automatically control your risk exposure." },
                  { t: "Technical Analysis Tools", d: "Integrate RSI, MACD, and Bollinger Bands into your index charts." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/20 transition-all group">
                    <div className="shrink-0 w-8 h-8 rounded-full bg-cyan-400/10 flex items-center justify-center text-cyan-400 border border-cyan-400/20">
                      <CheckCircle2 size={16} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base mb-1">{item.t}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-6">
                <div className="p-8 rounded-3xl bg-[#0B0E2A] border border-cyan-500/30 shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none group-hover:scale-125 transition-transform duration-1000">
                    <PieChart size={120} />
                  </div>
                  <p className="text-white text-base font-medium mb-6 leading-relaxed italic relative z-10">Not ready for live markets? Open a Demo Account and practice your indices strategy with zero risk.</p>
                  <a 
                    href="https://trade.fxcelite.com/register"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-3 rounded-full bg-cyan-400 text-black font-bold hover:bg-white transition-colors relative z-10 shadow-lg shadow-cyan-500/20 text-sm text-center"
                  >
                    Open a Demo Account
                  </a>
                </div>
              </div>
            </div>
            
            <div className="space-y-8 lg:sticky lg:top-32">
              <div className="p-8 rounded-3xl bg-[#0B0E2A] border border-white/10 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
                  <img src="https://images.unsplash.com/photo-1591696208162-a97b73c70f08?q=80&w=2070&auto=format&fit=crop" alt="Indices" className="w-full h-full object-cover" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-6 relative z-10 tracking-tight">Best Indices to Trade</h2>
                <p className="text-slate-400 mb-6 text-sm leading-relaxed relative z-10">
                  We give you access to the most liquid and volatile markets in the world. Depending on your strategy, here are some of the best indices to trade:
                </p>
                <div className="space-y-3 relative z-10">
                  {[
                    { n: "S&P 500 (US500)", d: "The benchmark for the US equity market." },
                    { n: "NASDAQ 100 (USTECH)", d: "Focused on the world’s leading technology companies." },
                    { n: "DAX 40 (GER40)", d: "The primary index for the German economy." },
                    { n: "FTSE 100 (UK100)", d: "Representing the top 100 companies on the London Stock Exchange." },
                    { n: "Nikkei 225 (JPN225)", d: "The leading index for the Japanese stock market." }
                  ].map((idx, i) => (
                    <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/[0.08] hover:border-cyan-400/40 transition-all cursor-default">
                      <div>
                        <div className="font-bold text-sm text-white tracking-tight">{idx.n}</div>
                        <div className="text-xs text-slate-500 mt-0.5">{idx.d}</div>
                      </div>
                      <TrendingUp size={16} className="text-cyan-400" />
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                  <p className="text-cyan-400 font-bold flex items-center justify-center gap-2 cursor-pointer hover:text-white transition-colors group text-xs">
                    View our Range of Products <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </p>
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 relative overflow-hidden group">
                <img 
                    src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=2071&auto=format&fit=crop" 
                    alt="Comparison" 
                    className="absolute inset-0 w-full h-full object-cover opacity-5 group-hover:scale-105 transition-transform duration-1000"
                />
                <h2 className="text-xl font-bold text-white mb-4 tracking-tight">Indices vs Forex Trading</h2>
                <p className="text-slate-400 leading-relaxed text-sm">
                  Whereas Forex Trading is centered on the value of one currency relative to another, the trading of indices is centered on the health of the entire stock market. Indices tend to be less volatile than stocks but can provide more predictable trends based on national economic policy. Traders will often hedge their positions by trading the USD while taking a position in the S&P 500.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW TO START SECTION */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">How to Start Trading Indices Online</h2>
            <p className="text-slate-400 text-base">Setting up your account on our indices trading platform is a simple 5-step process:</p>
          </div>
          <div className="grid md:grid-cols-5 gap-5">
            {[
              { n: "01", t: "Register", d: "Create your Live Trading Account in minutes." },
              { n: "02", t: "Verify", d: "Upload your documents for a secure trading environment." },
              { n: "03", t: "Fund", d: "Deposit capital using our secure payment gateways." },
              { n: "04", t: "Analyze", d: "Use our best indices trading platform tools to pick your index." },
              { n: "05", t: "Trade", d: "Open your position and manage it using our real-time Trading Charts." },
            ].map((step, i) => (
              <div key={i} className="relative p-6 rounded-3xl bg-[#0B0E2A] border border-white/5 hover:border-cyan-500/40 hover:-translate-y-1 transition-all duration-300 text-center shadow-xl">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 text-black flex items-center justify-center font-black text-lg mx-auto mb-5 shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                  {step.n}
                </div>
                <h4 className="text-base font-bold text-white mb-2 tracking-tight">{step.t}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECURITY & TARGET AUDIENCE */}
      <section className="py-20 border-y border-white/5 bg-gradient-to-b from-transparent to-[#0B0E2A]/30 relative overflow-hidden">
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
                  <div className="p-3 rounded-xl bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
                    <Shield size={24} />
                  </div>
                  <h2 className="text-xl lg:text-2xl font-bold text-white tracking-tight">Security & Reliability</h2>
                </div>
                <p className="text-base text-slate-400 leading-relaxed">
                  When you trade indices online using FXCElite, you are using a global indices CFD trading platform that focuses on security. All transactions are encrypted, and your money is held in segregated accounts. Our reliability ensures that even in the midst of major market crashes or rallies, your platform will remain stable and responsive.
                </p>
              </div>
            </div>
            
            <div className="p-8 lg:p-10 rounded-3xl bg-[#0B0E2A] border border-white/10 relative group overflow-hidden shadow-2xl">
               <img 
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1974&auto=format&fit=crop" 
                alt="Professional Traders" 
                className="absolute inset-0 w-full h-full object-cover opacity-5 group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-blue-400/10 text-blue-400 border border-blue-400/20">
                    <PieChart size={24} />
                  </div>
                  <h2 className="text-xl lg:text-2xl font-bold text-white tracking-tight">Who Should Trade Indices?</h2>
                </div>
                <p className="text-slate-400 mb-6 font-medium text-base">Indices trading is ideal for those who prefer a "big picture" approach to the markets. It is perfect for:</p>
                <ul className="space-y-4">
                  {[
                    "Beginners who feel overwhelmed by individual stock selection.",
                    "Swing Traders seeking long-term economic trends.",
                    "Professional Traders seeking to hedge their portfolios.",
                    "Diversifiers wanting exposure to multiple sectors at once."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300 group/item">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.5)] mt-2 group-hover/item:scale-150 transition-transform"></div>
                      <span className="text-sm md:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-24 text-center max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight">Why FXCElite is the Best Choice?</h2>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-10">
              With our unique blend of indices trading with low spreads, ultra-fast execution, and an easy-to-use platform, we offer everything you need to succeed.
            </p>
            <div className="space-y-6">
              <a 
                href="https://trade.fxcelite.com/register"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 rounded-full bg-white text-black font-bold text-base hover:bg-cyan-400 hover:-translate-y-1 transition-all shadow-[0_10px_30px_-10px_rgba(255,255,255,0.2)] text-center"
              >
                Join FXCElite Today
              </a>
              <div className="flex flex-col items-center gap-3">
                <p className="text-cyan-400 font-bold uppercase tracking-wider text-xs">
                  Take control of the markets. Start your journey today!
                </p>
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce"></div>
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce delay-100"></div>
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce delay-200"></div>
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
            <div className="inline-flex p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 mb-4">
              <HelpCircle size={32} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Frequently Asked Questions</h2>
            <p className="text-slate-500 mt-3 text-base">Clear answers for your trading journey</p>
          </div>
          <div className="space-y-4">
            {[
              { q: "1. What is indices trading?", a: "Indices trading is the act of trading on the price movement of a stock market index, such as the Dow Jones or DAX, instead of shares." },
              { q: "2. What is indices CFD trading?", a: "An indices CFD is a contract that lets you trade on the price movement of an index. You don't own the stocks, but you profit from the price difference." },
              { q: "3. Do I need a lot of money to trade indices?", a: "Not with our leverage facility on our indices trading platform. This means you can trade with a small amount of money to control a large market position." },
              { q: "4. What are the best indices to trade for beginners?", a: "The S&P 500 and FTSE 100 are popular choices due to their high liquidity and availability of market research." },
              { q: "5. Can I trade indices on my phone?", a: "Yes, our trading platform is fully mobile-friendly, so you can trade stock indices online from anywhere." },
              { q: "6. Are the indices open 24/7?", a: "Though the stock markets are operational for a certain number of hours, most of the global indices are available to trade almost 24/5 on our platform." },
              { q: "7. Is there any difference between an index and a stock?", a: "A stock is a symbol of a single company, while an index is a symbol of a number of companies. Trading in indices is more diversified." },
              { q: "8. Does FXCElite offer indices trading with low spreads?", a: "Yes, we offer highly competitive spreads on all major global indices to keep your trading costs low." },
              { q: "9. How do I manage risk while trading indices?", a: "Always trade with Stop-Loss orders and never trade more than you can afford to lose. Our platform offers you all the risk management tools." },
              { q: "10. How do I start trading on the best indices trading platform?", a: "Just register with FXCElite, deposit money into your account, and choose the index you wish to trade from the dashboard." },
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
      isOpen ? 'border-cyan-500/40 bg-cyan-500/5 shadow-[0_0_20px_-10px_rgba(34,211,238,0.2)]' : 'border-white/10 bg-white/[0.02] hover:bg-white/[0.04]'
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
        <div className="px-6 pb-6 text-slate-400 text-sm md:text-base leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="h-[1px] w-full bg-white/5 mb-4"></div>
          {answer}
        </div>
      )}
    </div>
  );
}