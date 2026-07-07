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
  ArrowRight 
} from 'lucide-react';

export default function Forex() {
  return (
    <div className="bg-[#050617] text-slate-300">
      
      {/* HERO SECTION */}
      <section className="relative pt-24 pb-32 lg:pt-14 lg:pb-20 overflow-hidden">
        {/* Decorative Ambient Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-emerald-500/20 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Left Column: Text Content */}
            <div className="w-full lg:w-3/5 text-center lg:text-left">
              
              {/* Main Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.15]">
                Your Gateway to <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                  Global Markets
                </span>
              </h1>
              
              {/* Subheadline */}
              <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0">
                Selecting the right trading partner is your first step to success. Get access to a secure platform, lightning-fast execution, and institutional-grade liquidity with Fxcelite.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
                <a 
                  href="https://trade.fxcelite.com/register"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-bold text-lg hover:shadow-[0_0_30px_-5px_rgba(52,211,153,0.4)] hover:scale-105 transition-all flex items-center justify-center gap-2"
                >
                  Open Live Account <ArrowRight size={20} />
                </a>
              
              </div>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-slate-500 font-medium">
                <div className="flex items-center gap-2">
                  <Shield size={18} className="text-emerald-400" />
                  <span>Regulated & Secure</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap size={18} className="text-cyan-400" />
                  <span>&lt;0.1ms Execution</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe size={18} className="text-emerald-400" />
                  <span>24/5 Support</span>
                </div>
              </div>
            </div>

            {/* Right Column: Floating Market Card */}
            <div className="w-full md:w-3/4 lg:w-2/5 hidden sm:block relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-cyan-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-[#0B0E2A]/80 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl">
                
                {/* Card Header */}
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-6 h-6 rounded-full bg-blue-600 border border-white/20"></div>
                      <div className="w-6 h-6 rounded-full bg-red-600 border border-white/20 -ml-3"></div>
                      <p className="text-slate-400 text-sm font-medium ml-1">EUR/USD</p>
                    </div>
                    <p className="text-3xl font-bold text-white tracking-tight">1.094<span className="text-emerald-400">25</span></p>
                  </div>
                  <div className="px-3 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 text-sm font-bold flex items-center gap-1">
                    <TrendingUp size={16} /> +0.42%
                  </div>
                </div>

                {/* CSS Bar Chart Simulation */}
                <div className="h-32 w-full mb-8 relative flex items-end justify-between gap-2">
                  {[40, 70, 45, 90, 65, 85, 110, 95, 130].map((h, i) => (
                    <div 
                      key={i} 
                      className="w-full bg-gradient-to-t from-emerald-500/20 to-emerald-400/80 rounded-t-sm hover:opacity-80 transition-opacity cursor-pointer" 
                      style={{ height: `${h}%` }}
                    ></div>
                  ))}
                </div>

                {/* Data Points */}
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
                  <div>
                    <p className="text-slate-500 text-xs uppercase tracking-wider mb-1 font-semibold">Live Spread</p>
                    <p className="text-white font-bold text-lg">From 0.0 pips</p>
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs uppercase tracking-wider mb-1 font-semibold">Max Leverage</p>
                    <p className="text-white font-bold text-lg">Up to 1:500</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="py-24 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-flex p-3 rounded-2xl bg-emerald-500/10 text-emerald-400">
                <Globe size={32} />
              </div>
              <h2 className="text-3xl font-bold text-white">What Is a Forex Broker?</h2>
              <div className="text-lg leading-relaxed space-y-4">
                <p>
                  With us, you will have more than just a trading platform; you will have a complete forex and CFD trading platform with elite tools. We provide forex trading with low spreads, ensuring that your expenses are low and your potential is infinite. If you have been looking for the best forex trading experience, you are in the right place.
                </p>
                <p>
                  In layman’s terms, a forex broker is a financial institution that offers traders access to a trading platform for the purchase and sale of foreign currencies. Since the forex market is an unregulated market, it is impossible for an individual to trade on the forex market directly; therefore, a global forex broker such as Fxcelite must be used as the middleman.
                </p>
                <p>
                  We offer the infrastructure for access to a currency trading platform, enabling you to trade on the price actions of currency pairs such as EUR/USD or GBP/JPY. Our forex trading platform is intended to be a secure forex trading platform, ensuring your safety as you trade in the $7.5 trillion per day global market.
                </p>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-500 to-cyan-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black bg-[#0B0E2A]">
                <img 
                  src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop" 
                  alt="Stock Market Data" 
                  className="w-full h-64 object-cover opacity-60"
                />
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <TrendingUp size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-xl">Global Leader</h3>
                      <p className="text-slate-500">Regulated Trading Environment</p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full w-[85%] bg-emerald-400 rounded-full"></div>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full w-[92%] bg-cyan-400 rounded-full"></div>
                    </div>
                  </div>
                  <div className="mt-10 grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                      <div className="text-2xl font-bold text-white">$7.5T</div>
                      <div className="text-xs text-slate-500 uppercase">Daily Volume</div>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                      <div className="text-2xl font-bold text-white">24/5</div>
                      <div className="text-xs text-slate-500 uppercase">Market Access</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE SECTION */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Fxcelite for Online Forex Trading?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">When looking for the best forex trading platform, reliability and cost are key. We pride ourselves on being a forex broker that puts the trader first.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Trade forex online", desc: "With 24/5 market access.", icon: <Globe /> },
              { title: "Low Spreads", desc: "Forex trading with low spreads to maximize your profit margins.", icon: <TrendingUp /> },
              { title: "High Liquidity", desc: "Instant execution even during high-volatility news events.", icon: <Zap /> },
              { title: "Secure Environment", desc: "Your funds are protected by industry-leading security protocols.", icon: <Shield /> },
            ].map((feature, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-emerald-500/50 transition-colors group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400">{feature.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 text-center">
            <p className="text-emerald-400 font-semibold italic">MAM Accounts: Ideal for professional money managers and investors.</p>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-24 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Key Features of Our Forex Trading Platform</h2>
              <div className="prose prose-invert max-w-none text-slate-400 mb-10">
                Our forex and CFD trading platform is chock-full of features that will give you the edge you need to succeed. We give you the best forex trading tools right in your browser or desktop.
              </div>
              <div className="space-y-4">
                {[
                  { t: "Real-Time Quotes", d: "Stay on top of the action with real-time, tick-by-tick quotes." },
                  { t: "Advanced Charting", d: "Powerful tools for in-depth analysis." },
                  { t: "Leverage Options", d: "Manage a bigger position with a smaller initial deposit." },
                  { t: "Risk Management", d: "Stop-Loss and Take-Profit functionality to safeguard your investment." },
                  { t: "Multiple Assets", d: "Go beyond currency with our forex CFD trading on indices and commodities." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/[0.08] transition-colors border border-transparent hover:border-white/10">
                    <CheckCircle2 className="text-emerald-400 shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-bold text-white">{item.t}</h4>
                      <p className="text-sm text-slate-400">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10 flex flex-col items-start gap-4">
                <p className="text-emerald-400 font-medium mb-2">Experience the difference. Try Our Demo Account and test our low spreads risk-free.</p>
                <a 
                  href="https://trade.fxcelite.com/register"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 rounded-full border border-emerald-400 text-emerald-400 font-bold hover:bg-emerald-400 hover:text-black transition-all text-center"
                >
                  Open Demo Account
                </a>
              </div>
            </div>
            
            <div className="space-y-12">
              <div className="p-10 rounded-3xl bg-gradient-to-br from-indigo-500/10 to-transparent border border-white/10 relative overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=2070&auto=format&fit=crop" 
                  alt="Market" 
                  className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:scale-110 transition-transform duration-700 pointer-events-none"
                />
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold text-white mb-6">Markets You Can Trade</h2>
                  <p className="text-slate-400 mb-8 leading-relaxed">
                    Being one of the best currency trading platforms, we provide an enormous number of symbols. When you partner with Fxcelite as your forex broker, you will have access to:
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Major Pairs: Major currency pairs such as EUR/USD, USD/JPY, and AUD/USD.",
                      "Minor & Exotics: Add variety to your forex trading with less popular currency pairs.",
                      "Forex CFD Trading: Trade on the price action of assets without actually possessing them.",
                      "Metals & Energies: Hedge your forex trades with Gold, Silver, and Oil."
                    ].map((text, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2.5"></div>
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-8 text-cyan-400 font-bold">Check out our MAM Accounts for specialized investment solutions.</p>
                </div>
              </div>

              <div className="p-10 rounded-3xl bg-white/5 border border-white/10 relative overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1535320903710-d993d3d77d29?q=80&w=2070&auto=format&fit=crop" 
                  alt="Web Trading" 
                  className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:scale-110 transition-transform duration-700 pointer-events-none"
                />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <Smartphone className="text-emerald-400" size={32} />
                    <h2 className="text-2xl font-bold text-white">WebTrader vs Desktop</h2>
                  </div>
                  <p className="text-slate-400 leading-relaxed">
                    Although many people prefer our desktop software for automated bots, our best forex trading platform for flexibility is the WebTrader. This forex trading platform enables you to trade forex online without installing any software. Whether you are using a Mac, Windows, or a shared computer, you can access your forex broker account instantly, ensuring that you never miss a trading opportunity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STEPS SECTION */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-16 text-center">How to Start Trading with Fxcelite</h2>
          <div className="grid md:grid-cols-5 gap-8">
            {[
              { n: "01", t: "Register", d: "Sign up for a Live Trading Account." },
              { n: "02", t: "Verify", d: "Complete your KYC for a secure forex trading platform experience." },
              { n: "03", t: "Deposit", d: "Fund your account using our various secure payment methods." },
              { n: "04", t: "Select Pair", d: "Choose your preferred currency pair on our forex trading platform." },
              { n: "05", t: "Execute", d: "Place your first trade and monitor your progress in real-time." },
            ].map((step, i) => (
              <div key={i} className="relative group text-center md:text-left">
                <div className="text-5xl font-black text-white/5 group-hover:text-emerald-500/10 transition-colors mb-4">{step.n}</div>
                <h4 className="text-lg font-bold text-white mb-2">{step.t}</h4>
                <p className="text-sm text-slate-500">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECURITY & TARGET SECTION */}
      <section className="py-24 bg-gradient-to-b from-[#0B0E2A] to-[#050617] relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" 
            alt="Security Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="p-10 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Shield className="text-emerald-400" /> Security & Reliability
              </h2>
              <p className="text-slate-400 leading-relaxed mb-8">
                At our global forex trading platform, security is our bedrock. We employ state-of-the-art encryption to protect every transaction on our secure forex trading platform. Our goal is to provide a transparent and best forex trading environment where your information and funds are always secure.
              </p>
            </div>
            <div className="p-10 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-6">Who Should Trade with Us?</h2>
              <p className="text-slate-400 leading-relaxed">
                Our services are designed for everyone. Whether you are a beginner in forex trading and are looking for educational materials or a professional firm searching for MAM Accounts and fast execution, we are the forex broker designed for every level of expertise.
              </p>
            </div>
          </div>

          <div className="mt-20 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Fxcelite is the Best Forex Trading Choice?</h2>
            <p className="text-xl text-slate-400 leading-relaxed mb-10">
              We don’t just provide a platform; we provide a partnership. With our forex trading with low spreads, 24/7 support, and our powerful forex and CFD trading platform, we empower you to succeed in the international markets.
            </p>
            <a 
              href="https://trade.fxcelite.com/register"
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-12 py-4 rounded-full bg-white text-black font-bold text-xl hover:bg-emerald-400 transition-colors shadow-2xl shadow-white/10 text-center"
            >
              Join Fxcelite Now
            </a>
            <p className="mt-6 text-emerald-400 font-bold">
              Take the first step. Join Fxcelite Now and trade with the world's most reliable forex broker!
            </p>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <HelpCircle className="text-emerald-400" size={32} />
            <h2 className="text-3xl font-bold text-white">Frequently Asked Questions (FAQs)</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "1. What is the role of a forex broker?", a: "A forex broker is an intermediary that allows traders to access the foreign exchange market and trade currencies." },
              { q: "2. Is forex trading risky?", a: "Yes, forex trading carries risks, particularly if you use leverage. It is important to employ risk management strategies." },
              { q: "3. What are the best forex trading pairs?", a: "Traders usually begin with \"Majors\" such as EUR/USD because they are the most liquid and have the lowest spreads." },
              { q: "4. Can I trade forex online for free?", a: "You can practice using a demo account, but you will have to make a deposit to realize actual profits." },
              { q: "5. How does a global forex broker process payments?", a: "We provide several secure payment options, including wire transfers, credit cards, and e-wallets." },
              { q: "6. What is a currency trading platform?", a: "It is the software interface (such as WebTrader or MT4) that enables you to view charts and execute trades." },
              { q: "7. Do you offer forex trading with low spreads?", a: "Yes, Fxcelite is renowned for offering some of the lowest spreads available in the market." },
              { q: "8. What is forex CFD trading?", a: "It is a method of trading the movement of currencies without actually holding the physical money." },
              { q: "9. Is your platform a secure forex trading platform?", a: "Yes, we employ high-level encryption and adhere to all regulatory guidelines to ensure the security of our users." },
              { q: "10. How do I choose the best forex trading platform?", a: "You should look for a broker who provides low latency, low spreads, 24/5 support, and an easy-to-use interface such as Fxcelite." },
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
    <div className="rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
      >
        <span className="font-bold text-white">{question}</span>
        {isOpen ? <ChevronUp className="text-emerald-400" /> : <ChevronDown className="text-slate-500" />}
      </button>
      {isOpen && (
        <div className="px-6 pb-6 text-slate-400 leading-relaxed animate-in fade-in slide-in-from-top-1 duration-200">
          {answer}
        </div>
      )}
    </div>
  );
}