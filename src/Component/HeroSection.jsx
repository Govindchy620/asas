import React, { useState } from 'react';
import { 
  ArrowRight, 
  ChevronDown, 
  Zap, 
  Shield, 
  Globe, 
  Activity, 
  Smartphone, 
  Monitor, 
  Laptop, 
  BarChart3, 
  TrendingUp, 
  Users, 
  Layers, 
  Search, 
  Play, 
  Coins, 
  Wallet, 
  Rocket, 
  UserCheck,
  Target
} from 'lucide-react';

// Image Imports
import Img1 from "../assets/Elite1.png"
import Img2 from "../assets/Elite2.png"
import Img3 from "../assets/Elite3.png"
import Img4 from "../assets/Elite4.png"
import Img7 from "../assets/Elite7.png";
import Img8 from "../assets/Elite8.jpeg";
import Img5 from "../assets/fx6.webp";

export default function Home() {
  const bgMain = "bg-[#050a18]";

  // FAQ Data derived from your content
  const faqData = [
    { q: "What online trading platform is the best for beginners?", a: "FXCE is usually regarded as the top online trading platform thanks to its user-friendly interface, range of informative materials, and offering you start trading on a Demo Account." },
    { q: "Can I trade forex online through FXCElite?", a: "We are a forex trading platform at the forefront of providing trading accounts for forex majors, minors, and exotics at very low spreads." },
    { q: "Is FXCElite a worldwide trading platform?", a: "Certainly. We offer our forex trading services to the whole world and provide 24/5 multilingual support." },
    { q: "What are the advanced trading platforms and tools offered by your company?", a: "We provide MT5, a WebTrader that is high performance, and a feature packed mobile app, all with charting and technical analysis toolsets." },
    { q: "How can I initiate trading online?", a: "All you need to do is click the registration button on our website, confirm your identity and make a deposit for market access." },
    { q: "Is this an all-in-one online trading platform?", a: "Absolutely, you can trade Forex, Metals, Indices, and Crypto all from one FXCElite account." },
    { q: "Can I trade on my phone?", a: "Definitely, you can trade from anywhere through web and mobile trading by installing our app for iOS or Android." },
    { q: "What is a CFD trading platform?", a: "A CFD trading platform enables you to bet on the price changes of various assets like stocks or gold without the necessity of owning the physical asset." },
    { q: "Why choose online forex trading over traditional investing?", a: "Online forex trading provides you with major benefits such as high liquidity, market access 24/5, and the opportunity to make a profit not only in rising but also in falling markets." },
    { q: "Is my data secure on this online trading platform?", a: "For sure, we implement bank-grade SSL encryption and two factor authentication to keep your experience in the global financial markets safe and secure." }
  ];

  return (
    <div className={`${bgMain} text-slate-300 font-sans selection:bg-teal-500/30 overflow-x-hidden`}>
      
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[95vh] flex items-center justify-center pt-20 pb-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal-900/10 via-[#050a18] to-[#050a18]"></div>
          <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          
          <img 
            src={Img1} 
            className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay"
            alt="Elite Trading Hub"
          />
          
          {/* Soft Glows */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 blur-[150px] rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 blur-[150px] rounded-full"></div>
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center space-y-8">
          
          <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tight leading-[1.1]">
            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">FXCElite</span> <br/>
            Your All-in-One Online Trading Platform
          </h1>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Welcome to the future of your financial prosperity. FXCElite is a global premier trading platform that offers both retail and institutional investors direct access to the world's most liquid markets.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button className="px-8 py-4 bg-teal-500 hover:bg-teal-400 text-white font-semibold rounded-full transition-all shadow-lg shadow-teal-500/20 flex items-center gap-2 group">
              Open Live Account <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 font-semibold rounded-full transition-all backdrop-blur-sm">
              Try Demo Account
            </button>
          </div>

          {/* Trust Metric */}
          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/5 mt-12">
             {[
               { label: "Markets", val: "Global" },
               { label: "Execution", val: "0.002s" },
               { label: "Support", val: "24/5" },
               { label: "Environment", val: "Digital 2026" },
             ].map((stat, i) => (
               <div key={i} className="text-center">
                 <p className="text-2xl font-bold text-white">{stat.val}</p>
                 <p className="text-sm text-slate-500">{stat.label}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* --- FEATURE SPLIT: UNIFIED MARKET ACCESS --- */}
      <section className="py-24 relative border-t border-white/5 bg-gradient-to-b from-[#050a18] to-[#080f24]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
               <div>
                  <h2 className="text-sm font-semibold text-teal-500 tracking-wider uppercase mb-2">Unified Access</h2>
                  <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                    Trade Global Financial Markets from <span className="text-teal-400">One Unified Account</span>
                  </h3>
               </div>
               <p className="text-lg text-slate-400 border-l-2 border-teal-500 pl-6">
                 Why manage multiple logins when you can use one single all-in-one online trading platform? FXCElite offers you the opportunity to explore the global financial markets trading platform with ease.
               </p>
               <div className="flex gap-4">
                 <button className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors border border-white/10 font-medium">
                   Explore Markets
                 </button>
                 <button className="px-6 py-3 text-teal-400 font-medium hover:text-teal-300 flex items-center gap-2 group">
                   See Spreads <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                 </button>
               </div>
            </div>

            <div className="relative group perspective-1000">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-teal-500/20 blur-[60px] rounded-full"></div>
              <div className="relative bg-slate-900/50 border border-white/10 rounded-2xl p-2 backdrop-blur-xl shadow-2xl transform transition-transform group-hover:rotate-y-2 duration-700">
                <img 
                  src={Img2} 
                  className="w-full h-auto rounded-xl shadow-lg opacity-90 group-hover:opacity-100 transition-opacity" 
                  alt="Interface" 
                />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="bg-black/40 backdrop-blur-md rounded-full p-4 border border-white/20">
                      <Play size={32} className="fill-white text-white ml-1" />
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- MARKETS GRID --- */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">CFD Trading Platform</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              In a market where every second matters, we deliver the best online trading experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <MarketCard title="Online Forex" desc="70+ currency pairs, starting at 0.0 pip spread." icon={<Globe />} color="blue" />
            <MarketCard title="Commodities" desc="Trade commodities like Oil and Gold." icon={<Layers />} color="teal" />
            <MarketCard title="Indices" desc="Global indices like NAS100, US30." icon={<BarChart3 />} color="purple" />
            <MarketCard title="Crypto" desc="Over 50+ Cryptocurrencies." icon={<Coins />} color="pink" />
          </div>
        </div>
      </section>

      {/* --- ADVANCED TOOLS / UNIFIED SECTION --- */}
      <section className="py-24 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 relative">
                 <img 
                   src={Img3} 
                   className="rounded-2xl shadow-2xl border border-white/10 w-full object-cover h-[500px]"
                   alt="Dashboard"
                 />
                 <div className="absolute -bottom-6 -right-6 bg-slate-900 p-6 rounded-xl border border-white/10 shadow-xl max-w-xs hidden md:block">
                    <p className="text-white font-bold text-lg mb-1">Clear Prices</p>
                    <p className="text-slate-400 text-sm">A safe environment made for the digital economy of 2026.</p>
                 </div>
              </div>

              <div className="order-1 lg:order-2 space-y-8">
                 <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                   Advanced <br/> <span className="text-teal-400">Trading Tools</span>
                 </h2>
                 <p className="text-lg text-slate-400">
                   Leverage sophisticated trading platforms and tools, including integration with TradingView and professional MetaTrader 5 terminals.
                 </p>
                 
                 <div className="grid gap-6">
                    <FeatureRow title="Flexible Leverage" desc="Increase your potential using competitive leverage up to 1:1000." icon={<TrendingUp />} />
                    <FeatureRow title="Deep Liquidity" desc="Combining the fastest order execution times with deep liquidity." icon={<Activity />} />
                    <FeatureRow title="Advanced Platforms" desc="Integration with TradingView and MT5." icon={<Monitor />} />
                 </div>
              </div>
           </div>
        </div>
      </section>

      <div className="h-[500px] w-full relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/40 z-10"></div>
        <img src={Img4} alt="Trading Desk" className="w-full h-full object-cover" />
        <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-4">
           <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">Market opportunities wait for no one.</h2>
        </div>
      </div>

      {/* --- USER LEVELS --- */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">The Best Online Trading Platform</h2>
            <p className="text-slate-400">Scalable environments for Beginners and Professionals.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <PricingCard 
              title="For Beginners" 
              icon={<Target />} 
              features={["Risk-Free Demo Account", "Simplified WebTrader Access", "Helpdesk Tutorials"]}
              cta="Try Demo"
              accent="teal"
            />
            <PricingCard 
              title="For Professionals" 
              icon={<Zap />} 
              features={["MT5 ECN Infrastructure", "Trading Algorithms (EAs)", "Market Depth (DOM)"]}
              cta="Go Pro"
              accent="blue"
              highlight={true}
            />
            <PricingCard 
              title="For Partners" 
              icon={<Users />} 
              features={["Elite IB Dashboard", "Affiliate Programs", "Expand Your Business"]}
              cta="Join Network"
              accent="purple"
            />
          </div>
        </div>
      </section>

      {/* --- CROSS PLATFORM --- */}
      <section className="py-24 relative overflow-hidden bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
           <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2 space-y-8">
                 <h2 className="text-3xl md:text-5xl font-bold text-white">Trade Anywhere</h2>
                 <p className="text-lg text-slate-400">
                   In 2026, your trading desk will be wherever you are. With FXCElite, trade anywhere, anytime, thanks to web and smartphone trading solutions that sync instantly across all of your devices.
                 </p>
                 <div className="grid gap-4">
                    <FeatureRow title="Desktop Power" desc="The complete forex trading platform experience for Windows and Mac computers." icon={<Laptop size={24} />} />
                    <FeatureRow title="Web Convenience" desc="Access without having to download software and trade forex immediately via any browser." icon={<Monitor size={24} />} />
                    <FeatureRow title="Mobile Agility" desc="Manage your portfolio anywhere, view charts, and get push notifications." icon={<Smartphone size={24} />} />
                 </div>
              </div>
              
              <div className="lg:w-1/2 flex justify-center">
                 <div className="relative w-118 h-[500px] bg-slate-950 rounded-[1rem] border-4 border-slate-800 shadow-7xl overflow-hidden ring-1 ring-white/10">
                    <img src={Img7} className="w-full h-full object-cover" alt="Mobile App" />
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* --- WHY CHOOSE GRID --- */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose FXCElite?</h2>
            <p className="text-slate-400">Your Forex Trading Platform of choice.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
             <WhyCard title="Institutional Execution" desc="100% of trades are made within less than a second. Average speed is 0.002s." icon={<Zap />} />
             <WhyCard title="Transparent Pricing" desc="No hidden fees – only Raw Spreads and Trading Pricing." icon={<Search />} />
             <WhyCard title="Elite Funding" desc="Quick and safe options for Deposits and Withdrawals, Crypto and Bank Wire supported." icon={<Wallet />} />
             <WhyCard title="24/5 Expert Support" desc="Our Helpdesk is operational while the markets are open." icon={<Users />} />
             <WhyCard title="Growth Incentives" desc="Make the most of our 10X Quest & Growth Plan to scale your capital." icon={<Rocket />} />
             <WhyCard title="Secure Environment" desc="A safe environment made for the digital economy of 2026." icon={<Shield />} />
          </div>
        </div>
      </section>

      {/* --- FULL WIDTH IMAGE --- */}
      <div className="h-[400px] w-full relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/40 z-10"></div>
        <img src={Img8} alt="Trading Desk" className="w-full h-full object-cover" />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
           <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">Experience the Elite difference.</h2>
        </div>
      </div>

      {/* --- 3 STEPS --- */}
      <section className="py-24 bg-gradient-to-b from-[#050a18] to-slate-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">How to Start Your Trading Journey</h2>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-teal-500/0 via-teal-500/20 to-teal-500/0"></div>
            
            <StepCard number="01" title="Register" desc="Sign up for your Live Account in under 2 minutes." icon={<UserCheck />} />
            <StepCard number="02" title="Deposit" desc="Deposit your funds through our convenient and secure deposit options." icon={<Wallet />} />
            <StepCard number="03" title="Trade" desc="Access the global financial markets and execute your first trade." icon={<Activity />} />
          </div>

          <button className="mt-16 px-10 py-4 bg-teal-500 text-white font-bold rounded-full hover:bg-teal-400 transition-all shadow-lg shadow-teal-500/20">
            Open Live Account
          </button>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-24 border-t border-white/5 bg-[#030610]">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions (FAQs)</h2>
          <div className="space-y-4">
            {faqData.map((item, index) => (
               <FaqItem key={index} question={item.q} answer={item.a} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

/* --- SUB-COMPONENTS --- */

function MarketCard({ title, desc, icon, color }) {
  const colors = {
    blue: "bg-blue-500",
    teal: "bg-teal-500",
    purple: "bg-purple-500",
    pink: "bg-pink-500"
  };
  
  return (
    <div className="group p-6 bg-white/[0.03] border border-white/5 hover:border-white/10 rounded-2xl transition-all hover:-translate-y-1">
      <div className={`w-12 h-12 ${colors[color]}/10 text-${color}-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
        {React.cloneElement(icon, { size: 24 })}
      </div>
      <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
      <p className="text-sm text-slate-500">{desc}</p>
    </div>
  );
}

function FeatureRow({ title, desc, icon }) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/5">
       <div className="shrink-0 text-teal-400 mt-1">{icon}</div>
       <div>
         <h4 className="font-bold text-white">{title}</h4>
         <p className="text-sm text-slate-400">{desc}</p>
       </div>
    </div>
  );
}

function PricingCard({ title, icon, features, cta, accent, highlight }) {
  const borderColor = highlight ? "border-teal-500/50" : "border-white/10";
  const bgColor = highlight ? "bg-white/[0.07]" : "bg-white/[0.03]";
  const accentColor = accent === 'teal' ? 'text-teal-400 bg-teal-500/10' : 
                      accent === 'blue' ? 'text-blue-400 bg-blue-500/10' : 
                      'text-purple-400 bg-purple-500/10';

  return (
    <div className={`p-8 rounded-3xl border ${borderColor} ${bgColor} flex flex-col hover:border-teal-500/30 transition-colors`}>
      <div className={`w-12 h-12 rounded-full ${accentColor} flex items-center justify-center mb-6`}>
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-white mb-6">{title}</h3>
      <ul className="space-y-4 mb-8 flex-1">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
            <div className="w-1.5 h-1.5 rounded-full bg-teal-500"></div>
            {f}
          </li>
        ))}
      </ul>
      <button className="w-full py-3 rounded-lg border border-white/20 text-white font-medium hover:bg-white hover:text-black transition-all">
        {cta}
      </button>
    </div>
  );
}

function WhyCard({ title, desc, icon }) {
  return (
    <div className="p-6 bg-slate-900/50 border border-white/5 rounded-2xl hover:bg-slate-800/50 transition-colors">
      <div className="text-teal-400 mb-4">{icon}</div>
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
    </div>
  );
}

function PlatformBadge({ icon, name }) {
  return (
    <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/5 border border-white/10 hover:border-teal-500/50 transition-colors">
      <div className="text-white mb-2">{icon}</div>
      <span className="text-xs font-medium text-slate-400">{name}</span>
    </div>
  );
}

function StepCard({ number, title, desc, icon }) {
  return (
    <div className="relative z-10 flex flex-col items-center">
      <div className="w-16 h-16 rounded-2xl bg-[#0B1221] border border-white/10 flex items-center justify-center text-teal-400 mb-6 shadow-lg shadow-teal-900/20 group hover:scale-110 transition-transform duration-300">
         {React.cloneElement(icon, { size: 28 })}
      </div>
      <div className="text-sm font-bold text-teal-500 mb-2">Step {number}</div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-slate-400 text-sm">{desc}</p>
    </div>
  );
}

function FaqItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-white/10 rounded-xl bg-white/[0.02] overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-white/[0.02] transition-colors"
      >
        <span className="font-semibold text-white/90">{question}</span>
        <ChevronDown size={20} className={`text-slate-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`px-6 text-slate-400 text-sm leading-relaxed overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
        {answer}
      </div>
    </div>
  );
}