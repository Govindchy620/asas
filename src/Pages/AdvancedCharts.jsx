import React, { useState } from 'react';
import { 
  BarChart3, 
  LineChart, 
  CandlestickChart, 
  Activity, 
  Search, 
  Zap, 
  Shield, 
  Clock, 
  MousePointer2, 
  Layout, 
  ChevronDown, 
  ArrowRight,
  Monitor,
  Maximize2,
  RefreshCw,
  Target,
  Layers,
  Sparkles,
  HelpCircle,
  Eye,
  Bot,
  Terminal,
  Grid3X3,
  Database
} from 'lucide-react';

export default function AdvancedCharts() {
  return (
    <div className="bg-[#010208] text-slate-300 font-sans selection:bg-indigo-500/30 overflow-x-hidden">
      
      {/* --- HERO: ANALYTICAL COMMAND CENTER --- */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-2 pb-3 overflow-hidden">
        {/* Futuristic Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#6366f108,transparent_70%)]"></div>
          <img 
            src="https://images.unsplash.com/photo-1612152605347-f93296cb657d?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-[0.05] mix-blend-screen grayscale"
            alt="Advanced Trading Charts Background"
          />
          {/* Animated Scanning Line */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent animate-[scan_6s_linear_infinite]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/5 border border-indigo-500/20 backdrop-blur-md mb-8">
              <Activity size={14} className="text-indigo-400" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-400">Analytical Precision v4.1</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tight mb-6">
              Advanced Trading <br/> <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-indigo-200 to-indigo-500/50">Charts</span>
            </h1>
            
            <p className="text-base md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light mb-8 uppercase tracking-tight">
              Master Technical Analysis at Fxcelite
            </p>

            <div className="max-w-3xl mx-auto text-sm md:text-base text-slate-500 leading-relaxed font-light mb-12 px-4 border-x border-white/5 py-4">
              In the trading profession, your judgments are dependent on the accuracy of the data you use. Sophisticated trading charts are the essence of a good strategy as they present the most lucid visuals which allow the trader to instantly spot high-probability setups.
            </div>

            <div className="flex flex-col items-center gap-6">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-fuchsia-500 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                <button 
                  onClick={() => window.open('https://trade.fxcelite.com/login', '_blank')}
                  className="relative px-10 py-4 rounded-xl bg-white text-black font-bold text-base transition-all active:scale-95 flex items-center gap-3">
                  Launch Advanced Charts <Monitor size={20} />
                </button>
              </div>
              <p className="text-indigo-400 text-sm font-bold uppercase tracking-[0.2em]">
                Visualize your success. Start analyzing today!
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

      {/* --- WHAT ARE CHARTS: TECHNICAL PANEL --- */}
      <section className="py-24 relative border-y border-white/5 bg-[#050617]/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="p-1 border-l-4 border-indigo-500 pl-6">
                 <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">What are Advanced Trading Charts?</h2>
                 <div className="space-y-6 text-base text-slate-400 leading-relaxed font-light">
                   <p>
                     In the trading profession, your judgments are dependent on the accuracy of the data you use. Sophisticated trading charts are the essence of a good strategy as they present the most lucid visuals which allow the trader to instantly spot high-probability setups.
                   </p>
                   <p>
                     Fxcelite provides you with real-time trading charts that combine institutional-level data and a user-friendly interface. Whether you are trading short-term 1-minute charts or thinking about long-term weekly trends, our professional trading charts will keep you informed of the most important price action signals.
                   </p>
                   <p>
                     We have developed our forex charting platform for the new generation: speedy, highly responsive, and filled with more than 100 technical indicators. You can also get access to advanced forex charts for currency pairs, and detailed CFD trading charts for indices and commodities.
                   </p>
                 </div>
              </div>
            </div>

            <div className="relative group lg:sticky lg:top-32">
               <div className="absolute inset-0 bg-indigo-500/10 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#0B0E2A]">
                 <img 
                    src="https://images.unsplash.com/photo-1611974717482-982c7a005b36?q=80&w=2070&auto=format&fit=crop" 
                    className="w-full h-[500px] object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-1000"
                    alt="Terminal Interface"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#010208] via-transparent to-transparent"></div>
                 <div className="absolute top-6 left-6 flex gap-3">
                    <div className="px-3 py-1.5 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-indigo-400 uppercase tracking-widest">Active Feed</div>
                    <div className="px-3 py-1.5 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-emerald-400 uppercase tracking-widest">Real Time</div>
                 </div>
                 <div className="absolute bottom-6 left-6 right-6 p-6 rounded-xl bg-black/80 backdrop-blur-2xl border border-white/10">
                    <div className="flex items-center gap-3 mb-4">
                      <Grid3X3 size={20} className="text-indigo-500" />
                      <span className="text-white text-lg font-bold tracking-tight uppercase">Multi-Asset Precision</span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed font-medium">
                      Developed for the new generation: speedy, highly responsive, and filled with more than 100 technical indicators.
                    </p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHY USE: ANALYTIC GRID --- */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight uppercase leading-tight">Why Use Professional <br/> Trading Charts?</h2>
              <p className="text-indigo-400 text-sm font-bold uppercase tracking-[0.2em]">The "Why" behind the "What"</p>
            </div>
            <div className="flex items-center gap-3 text-slate-500 font-mono text-xs uppercase tracking-widest bg-white/5 p-3 rounded-lg border border-white/5">
                <Eye size={16} /> Momentum Analysis
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Timing Intra-day", desc: "Real-time trading charts with absolutely no lag, so your entries are well-timed.", icon: <Clock /> },
              { title: "Customization", desc: "Customize advanced forex charts with custom timeframes, colors, and layouts.", icon: <Layers /> },
              { title: "Multi-Chart", desc: "View up to 8 various instruments all on one screen seamlessly.", icon: <Grid3X3 /> },
              { title: "Overlay Data", desc: "Marry price action with volume, sentiment, and fundamental data points.", icon: <RefreshCw /> },
              { title: "Deep History", desc: "Access years of historical data to backtest strategies with precision.", icon: <Database /> },
            ].map((item, i) => (
              <div key={i} className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-indigo-500/40 transition-all duration-500 flex flex-col items-start relative overflow-hidden">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6 border border-white/5 group-hover:bg-indigo-400 group-hover:text-black transition-all">
                   {React.cloneElement(item.icon, { size: 24 })}
                </div>
                <h3 className="text-lg font-bold text-white mb-3 tracking-tight uppercase">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 p-8 rounded-2xl bg-indigo-500/5 border border-indigo-500/20 text-center max-w-3xl mx-auto">
            <p className="text-slate-300 text-base font-light leading-relaxed">
              Professional trading charts provide the "why" behind the "what," allowing you to understand market momentum before you commit capital.
            </p>
          </div>
        </div>
      </section>

      {/* --- BEST TOOLS: WORKSTATION DESIGN --- */}
      <section className="py-24 bg-white/[0.01] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-10">
               <div className="space-y-4">
                 <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight uppercase leading-tight">Best Advanced Charting <br/> Tools for Traders</h2>
                 <p className="text-base text-slate-500 leading-relaxed font-light">
                   To be the best, you need the best advanced charting tools. At FXCElite, we provide a suite of features that go beyond the industry standard.
                 </p>
               </div>

               <div className="grid md:grid-cols-2 gap-5">
                 {[
                   { t: "Chart Types", d: "Change between Candlestick, Bar, Heiken Ashi, and Renko.", icon: <CandlestickChart /> },
                   { t: "Indicator Library", d: "Use 100+ pre-built indicators like MACD, RSI, and Ichimoku.", icon: <Zap /> },
                   { t: "Drawing Tools", d: "Use professional trendlines, Pitchforks, and Fibonacci tools.", icon: <MousePointer2 /> },
                   { t: "Bar Replay", d: "Rewind the market to practice your strategy without risk.", icon: <RefreshCw /> },
                   { t: "Alert Integration", d: "Place visual or sound alerts directly on your charts.", icon: <Activity /> },
                 ].map((tool, i) => (
                   <div key={i} className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-300">
                      <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-4 border border-indigo-500/10 group-hover:scale-110 transition-transform">
                        {React.cloneElement(tool.icon, { size: 20 })}
                      </div>
                      <h4 className="text-base font-bold text-white mb-2 uppercase tracking-tight">{tool.t}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed font-light">{tool.d}</p>
                   </div>
                 ))}
               </div>
            </div>

            <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-8">
               <div className="relative p-8 rounded-3xl bg-[#0B0E2A] border border-white/10 shadow-2xl overflow-hidden group">
                  <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:scale-110 transition-transform">
                    <Monitor size={120} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-6 tracking-tight uppercase">2026 Tech</h3>
                  <div className="space-y-6">
                     <p className="text-base text-indigo-400 font-medium leading-relaxed">
                       Experience the power of 2026 technology. Open a Live Account to unlock full charting capabilities.
                     </p>
                     <div className="text-sm text-slate-500 leading-relaxed font-light">
                        <p>Our interactive technical analysis charts for Forex and CFDs are designed to enable you to recognize repeatable patterns.</p>
                     </div>
                     <button 
                        onClick={() => window.open('https://trade.fxcelite.com/register', '_blank')}
                        className="w-full py-4 rounded-xl bg-white text-black font-bold hover:bg-indigo-400 transition-all text-base shadow-lg">
                        Open Live Account
                     </button>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- TECHNICAL ANALYSIS: DUAL COLUMN --- */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative group">
                <div className="absolute inset-0 bg-indigo-500/10 blur-[80px] rounded-full opacity-50"></div>
                <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1535320903710-d993d3d77d29?q=80&w=2070&auto=format&fit=crop" 
                      className="w-full h-[400px] object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                      alt="Market Pattern"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#010208] via-transparent to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6 p-6 rounded-xl bg-black/60 backdrop-blur-xl border border-white/10">
                        <p className="text-indigo-400 text-sm font-medium">Combine these charts with a healthy top-up strategy to capitalize on the trends you spot.</p>
                    </div>
                </div>
            </div>

            <div className="order-1 lg:order-2 space-y-8">
               <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight uppercase leading-tight">Technical Analysis <br/> Charts for <br/> Forex and CFDs</h2>
               <div className="space-y-6 text-base text-slate-400 leading-relaxed font-light">
                 <p>The whole theory of technical analysis is based on the fact that history always repeats itself. Our interactive technical analysis charts are designed to enable you to recognize repeatable patterns.</p>
                 <p>On our charting platform, you could spot "ascending staircases" in a bull market or "head and shoulders" reversals. Our platform helps you trace out the correlation between indices or parabolic trends in commodities.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- HOW TO MASTER: STEPPER GRID --- */}
      <section className="py-24 bg-black relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight uppercase">How to Master <br/>Advanced Charts</h2>
            <p className="text-indigo-400 text-sm font-bold uppercase tracking-[0.2em]">A journey of 5 simple steps</p>
          </div>

          <div className="grid lg:grid-cols-5 gap-6">
            {[
              { n: "01", t: "Select Asset", d: "Open your favorite pair, e.g., EUR/USD or Gold.", icon: <Search /> },
              { n: "02", t: "Timeframe", d: "Switch from 1 Minute to Daily for Trend ID.", icon: <Clock /> },
              { n: "03", t: "Indicators", d: "Add an oscillator like RSI to detect levels.", icon: <Zap /> },
              { n: "04", t: "Structures", d: "Draw tools to mark support and resistance.", icon: <MousePointer2 /> },
              { n: "05", t: "Execute", d: "Take the trade in just one click.", icon: <Activity /> },
            ].map((step, i) => (
              <div key={i} className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-indigo-500/40 transition-all duration-500 text-center mt-6 lg:mt-0">
                 <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-xl bg-black border border-indigo-500/20 flex items-center justify-center font-bold text-indigo-400 text-sm group-hover:bg-indigo-400 group-hover:text-black transition-all">
                    {step.n}
                 </div>
                 <div className="w-14 h-14 rounded-full bg-indigo-500/5 text-indigo-400 flex items-center justify-center mx-auto mb-6 border border-indigo-500/10 group-hover:scale-110 transition-transform mt-2">
                   {React.cloneElement(step.icon, { size: 24 })}
                 </div>
                 <h4 className="text-base font-bold text-white mb-2 tracking-tight uppercase">{step.t}</h4>
                 <p className="text-sm text-slate-500 leading-relaxed font-medium">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PERFORMANCE & WHO: DUAL PANEL --- */}
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
                      <h2 className="text-2xl font-bold text-white tracking-tight uppercase">Security & Performance</h2>
                   </div>
                   <div className="text-base text-slate-400 leading-relaxed font-light space-y-4">
                      <p>Speed is a form of security. Our web-based online trading platform with advanced charts is located on high-speed servers with ultra-low latency.</p>
                      <p className="text-white font-medium">This means real-time trading charts are in full sync with the interbank market. We make sure your analytical environment is as stable and secure as your capital.</p>
                   </div>
                </div>
             </div>

             <div className="space-y-8 lg:p-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight uppercase">Who Needs Advanced <br/> Trading Charts?</h2>
                <div className="grid gap-4">
                   {[
                     { l: "Day Traders", d: "Utilize up-to-the-second charts for fast entry.", icon: <Activity /> },
                     { l: "Swing Traders", d: "Make technical analysis pointing to multi-day trends.", icon: <Maximize2 /> },
                     { l: "Algo Traders", d: "Feed data from our charting API to custom bots.", icon: <Bot /> },
                     { l: "First Timers", d: "A valuable primer for learning to read charts.", icon: <Eye /> }
                   ].map((item, i) => (
                     <div key={i} className="flex gap-4 group/item items-center p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-all">
                       <div className="shrink-0 w-12 h-12 rounded-lg bg-indigo-500/5 flex items-center justify-center text-indigo-400 border border-indigo-500/10 group-hover/item:scale-110 transition-transform">
                         {React.cloneElement(item.icon, { size: 20 })}
                       </div>
                       <div>
                         <span className="text-white text-base font-bold uppercase tracking-tight">{item.l}</span>
                         <p className="text-slate-500 text-sm font-light mt-1">{item.d}</p>
                       </div>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA: OBSIDIAN POWER --- */}
      <section className="py-24 bg-[#010208] text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 space-y-10">
           <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight uppercase leading-tight">Why FXCElite is the Best <br/> Choice for Charting?</h2>
           <p className="text-base md:text-lg text-slate-400 leading-relaxed font-light">
             With our best advanced charts designed for traders and a platform developed for 2026 conditions, we offer the edge required to be successful. We are not just giving the price; we are giving the vision to forecast the price movement.
           </p>
           <div className="pt-6 flex flex-col items-center gap-6">
              <div className="relative group">
                <div className="absolute -inset-1 bg-indigo-500 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <button 
                  onClick={() => window.open('https://trade.fxcelite.com/register', '_blank')}
                  className="relative px-12 py-5 rounded-xl bg-white text-black font-bold text-lg transition-all shadow-[0_15px_40px_-15px_rgba(99,102,241,0.4)] hover:-translate-y-1">
                  Register Now & Gain Access
                </button>
              </div>
              <p className="text-indigo-400 font-bold uppercase tracking-[0.2em] text-xs">See the market clearly. Build your vision today.</p>
           </div>
        </div>
      </section>

      {/* --- FAQ: TERMINAL STYLE --- */}
      <section className="py-24 border-t border-white/5 bg-[#000000]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight uppercase">Technical FAQ</h2>
            <p className="text-slate-500 font-medium uppercase tracking-widest text-sm">Advanced Charting Knowledge Base</p>
          </div>
          
          <div className="space-y-4">
            {[
              { q: "1. Are the charts in Real-Time?", a: "Yes, we provide trading charts in real time, which are updated tick-by-tick through the interbank liquidity pool." },
              { q: "2. Can I use TradingView on your platform?", a: "Our forex charting platform is fully integrated with professional charting engines, and the experience is similar or superior to TradingView." },
              { q: "3. Is advanced trading charting free?", a: "Indeed, all registered users of Fxcelite can use our professional charts on a complimentary basis." },
              { q: "4. Can I save my chart templates?", a: "Absolutely. It is possible to customize your advanced forex charts and save a number of templates." },
              { q: "5. Do you have charts available for crypto and stocks?", a: "Yes, our charts cover everything from Bitcoin to Tesla and the S&P500." },
              { q: "6. What are the best charting tools for a beginner?", a: "We recommend learning about Candlestick Charts, Support/Resistance, and a Moving Average Indicator." },
              { q: "7. Can I trade directly from the charts?", a: "Yes, our platform allows \"One-Click Trading\" directly from the charting interface." },
              { q: "8. Are these charts mobile-friendly?", a: "Yes, these online trading charts are completely mobile-friendly." },
              { q: "9. How many indicators can I add?", a: "As many as you need, though we recommend keeping charts uncluttered." },
              { q: "10. Do you provide education on how to read these charts?", a: "Yes, we provide webinars and guides on how to read advanced technical analysis charts." },
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
        <span className={`font-bold text-sm md:text-base transition-colors uppercase tracking-tight ${isOpen ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
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