import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Menu, X, Shield, TrendingUp, DollarSign, Zap, CheckCircle, Users, Star, ArrowRight, PlayCircle } from 'lucide-react';
import { motion } from "framer-motion";
import marketsImg from "../assets/trade.png";

// Image Imports from ../img/
import ImgAsset1 from "../img/Terms.png";
import ImgAsset2 from "../img/Asset2.png";
import ImgAsset11 from "../img/Asset11.png";
import dashboardImg from "../assets/Elite1.png";
import ImgDeposit from "../img/deposit.png";
import ImgFAQ from "../img/Faq.png";

const faqs = [
  {
    q: 'Q1. Why is FXCELITE considered as a reliable Global Trading Platform for retail traders?',
    a: 'FXCELITE provides users with a secure Global Trading Platform environment to access multi-asset markets. It offers competitive spreads, ultra-fast execution speed, advanced analytical tools and complete compatibility with industry standard platforms such as MetaTrader 5 and TradingView.',
  },
  {
    q: 'Q2. Is it possible to use the deposit bonus on any of the CFD Trading Platform instruments?',
    a: 'Yes. The funds provided for the promotion are applied to all the available assets positioned by the broker both major and minor currency pairs, assets of precious metals, energies, global indices, equity CFDs, and digital currencies.',
  },
  {
    q: 'Q3. Can you enjoy a deposit bonus on a MetaTrader 5 Broker account?',
    a: 'Absolutely. The promotional balance seamlessly blends into your MetaTrader 5 Broker. This is shown on your terminal, increasing the margin you can use to execute a trade manually or automatically.',
  },
  {
    q: 'Q4. What are the advantages of trading using a TradingView Broker integration?',
    a: 'When linked to a TradingView Broker setup, you can place trades directly from highly sophisticated trading charts. The better technology analysis tools are available for you to use when trading with the more capital you have thanks to your deposit bonus.',
  },
  {
    q: 'Q5. Does the promotional money need to be invested in the company\'s stocks?',
    a: "No, the promotion credit is not meant to be used as a margin of operation for trading. But if you make money for any trades carried out with these combined funds, it's all yours, and it's only a matter of when it can be removed.",
  },
  {
    q: 'Q6. Is there anything extra you have to pay for when you choose to use the deposit bonus program?',
    a: 'When you sign up, there are no hidden charges, interest rates or extra fees applied. The promotion is offered 100% free to increase your trade size.',
  },
  {
    q: 'Q7. When will I see the promotional credit in my account once I fund my account?',
    a: 'For most people, crediting will happen automatically within a number of minutes from the time your transfer is confirmed. Once your deposit is confirmed the additional equity is added to your account balance and available for trading on the market.',
  },
];

const steps = [
  { num: '01', title: 'Open Your Account', desc: "In case you don't have a trading account, please go to the official portal and Open Trading Account. The registration process only takes less than 5 minutes to complete." },
  { num: '02', title: 'Complete Verification', desc: 'Include proof of residence (Utility Bill or Bank Statement) with identification (Passport, Driver\'s License or National ID). This is a standard verification process to ensure that they meet with international financial regulatory frameworks.' },
  { num: '03', title: 'Opt In to the Offer', desc: 'Access your client dashboard and visit the promotions section and choose Opt-In for the active deposit offer.' },
  { num: '04', title: 'Complete Your Initial Transfer', desc: 'Check the minimum amount of money required to enable the offer (usually $200 or something similar). Select the payment option of your choice (Bank Wire, Credit/Debit Card, Skrill, Neteller, Cryptocurrency) and make the payment.' },
  { num: '05', title: 'Receive Instant Equity Allocation', desc: "You will see your promotion credit in your account interface minutes later. You'll see your individual capital, plus your additional trading credit, on your portal dashboard." },
  { num: '06', title: 'Start Market Operations', desc: 'Sign in to the MetaTrader 5 Broker terminal or Connect to your favorite MT5 Trading Platform interface. Your overall equity will be displayed, and you can then start implementing your market strategies.' },
];

const keyFeatures = [
  { icon: <Users size={20} />, title: 'Accessible to All Registered Users', desc: 'It is open to all registered users, including new and long-time users of the platform, who can join and earn additional money from the appropriate transfers.' },
  { icon: <TrendingUp size={20} />, title: 'Benefits on every qualified funding event', desc: 'There is no restriction on the number of transactions for participation. The more you add to your account when you\'re eligible, the more equity you will receive in your profile.' },
  { icon: <Shield size={20} />, title: 'No hidden charges', desc: 'There are no platform management fees, processing fees or interest charges on the allocated promotional credit.' },
  { icon: <DollarSign size={20} />, title: 'Unrestricted Profit Withdrawals', desc: 'Although promotional balance is meant for market execution and not for cash-out, all the realised net profits can be transferred to your bank or preferred payment method without any hassles.' },
  { icon: <Star size={20} />, title: 'Broad Instrument Compatibility', desc: 'Enhanced equity across currency pairs, precious metals, energy commodities, global indices, equities and digital assets.' },
  { icon: <Zap size={20} />, title: 'Completely compatible with Automated Systems', desc: 'If you use automated systems or algorithmic tools through a MetaTrader 5 Broker, then these additional funds work well with your Expert Advisor (EA).' },
];

const whyReasons = [
  { num: '1', title: 'Transparency and Fairness Conditions', desc: 'Details of the promotional program are clearly defined. You can look at the structure completely before joining, and they\'re fully aligned with your trading plan.' },
  { num: '2', title: 'Enhanced Equity Management', desc: 'A buffer of operational margin offers cushioning for the short-term market pullbacks, allowing you to maintain your investment base over the long term.' },
  { num: '3', title: 'Ideal for Developing Traders', desc: "If you're slimming down or stepping up, there's a practical buffer in the form of extra equity. It provides you with the real market experience, allows you to check how the asset behaves, and allows you to develop execution discipline with less of a risk towards your personal money." },
  { num: '4', title: 'Strategic Advantage for Experienced Investors', desc: "Systematic traders who have a method can have greater capacity because of expanded margin. If you're on a broader operational platform and have a consistent yield coming in each month, then your overall performance on the portfolio will be very different. If you're trading Forex Online, then the overall performance of the portfolio will be significantly different if you have a regular yield on a larger operational base." },
  { num: '5', title: 'Automated Crediting', desc: 'Manual requests are not needed for a long time. Your promotional balance will automatically update in minutes after you opt in via your client portal and complete a qualifying transfer.' },
];

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item border-b border-white/10">
      <button
        className="w-full flex items-start justify-between gap-4 py-5 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="text-sm md:text-base font-semibold text-white leading-relaxed">{q}</span>
        <span className="shrink-0 mt-0.5 text-[#00d4aa]">
          {open ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </span>
      </button>
      {open && (
        <div className="pb-5 text-sm md:text-base text-slate-300 leading-relaxed">
          {a}
        </div>
      )}
    </div>
  );
}

export default function BonusPage() {
  return (
    <div className="min-h-screen text-slate-300 font-sans" style={{ background: '#050a14' }}>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#050617] pt-24 md:pt-28 pb-16">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={dashboardImg}
            alt="FXCELITE global trading dashboard"
            className="w-full h-full object-cover object-center md:object-right opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050617]/60 via-[#050617]/30 to-[#050617] md:bg-gradient-to-r md:from-[#050617] md:via-[#050617]/90 md:to-[#050617]/30" />
          <div className="absolute inset-0 hidden md:block bg-gradient-to-t from-[#050617] via-[#050617]/10 to-[#050617]/60" />
        </div>

        {/* Ambient glows */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        
        {/* Dark vignette behind text on mobile for perfect readability */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[150%] sm:w-[120%] h-[450px] bg-[#050617] rounded-[100%] blur-[70px] lg:hidden pointer-events-none opacity-85" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full mt-0 lg:-mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* LEFT: COPY */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex flex-col items-center text-center lg:items-start lg:text-left w-full"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 bg-emerald-500/10 border border-emerald-500/20">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400 text-[10px] sm:text-xs font-semibold tracking-widest uppercase">
                  Trusted Since 2021 &middot; 220K+ Traders
                </span>
              </div>

              <h1 className="text-4xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold text-white leading-[1.05] mb-6 drop-shadow-xl">
                Trade Global Markets
                <br />
                with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-indigo-400">
                  Absolute Confidence
                </span>
              </h1>

              <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-xl mb-8">
                FXCELITE gives you lightning-fast execution, tight spreads and
                full access to Forex, Indices, Crypto and Commodities &mdash; all
                on a secure, regulated platform built for serious traders.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10 w-full sm:w-auto justify-center lg:justify-start">
                <a
                  href="https://trade.FXCELITE.com/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-500 hover:to-emerald-600 text-[#050617] font-bold py-3.5 px-6 rounded-xl text-sm shadow-lg shadow-emerald-500/20 transition-all w-full sm:w-auto"
                >
                  Open Live Account
                  <ArrowRight size={16} />
                </a>
                <a
                  href="/accounts/demo"
                  className="inline-flex items-center justify-center gap-2 border border-white/15 hover:bg-white/5 text-white font-semibold py-3.5 px-6 rounded-xl text-sm transition-all w-full sm:w-auto"
                >
                  <PlayCircle size={16} />
                  Try Free Demo
                </a>
              </div>

              {/* MOBILE ONLY: Nice Info Cards (similar to landing page's 4 cards) */}
              <div className="grid grid-cols-2 gap-3 w-full lg:hidden mb-4 max-w-sm mx-auto">
                <div className="bg-[#0B1028]/70 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex flex-col items-center justify-center shadow-xl">
                  <div className="flex items-center gap-1 mb-1.5">
                    <span className="text-slate-300 text-[10px] font-medium tracking-wider">EUR/USD</span>
                  </div>
                  <p className="text-white font-black text-[17px] tracking-tight mb-1">1.0842</p>
                  <span className="flex items-center gap-0.5 text-emerald-400 text-[10px] font-bold bg-emerald-400/10 px-2 py-0.5 rounded-full">
                    <TrendingUp size={12} /> +0.42%
                  </span>
                </div>
                <div className="bg-[#0B1028]/70 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex flex-col items-center justify-center shadow-xl">
                  <div className="flex items-center gap-1 mb-1.5">
                     <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                     <span className="text-emerald-400 text-[10px] font-bold tracking-wider">LIVE</span>
                  </div>
                  <p className="text-white font-black text-[15px] tracking-tight text-center leading-tight">100+ Assets</p>
                  <span className="text-slate-400 text-[9px] mt-1">Multi-Asset</span>
                </div>
              </div>

            </motion.div>

            {/* RIGHT: floating cards over background */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
              className="relative hidden lg:block h-[420px]"
            >
              {/* Floating card: live price */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute top-4 left-0 bg-gradient-to-br from-[#0B1028] via-[#0E1433] to-[#0B1028] border border-white/10 rounded-2xl px-5 py-4 shadow-xl w-48"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-slate-400 text-[10px] font-medium">EUR/USD</span>
                  <span className="flex items-center gap-1 text-emerald-400 text-[10px] font-semibold">
                    <TrendingUp size={12} /> +0.42%
                  </span>
                </div>
                <p className="text-white font-bold text-base">1.0842</p>
              </motion.div>

              {/* Floating card: markets grid */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.75 }}
                className="absolute bottom-4 right-0 bg-gradient-to-br from-[#0B1028] via-[#0E1433] to-[#0B1028] border border-white/10 rounded-2xl p-3 shadow-xl w-40"
              >
                <img
                  src={marketsImg}
                  alt="100+ tradable instruments"
                  className="w-full h-24 object-cover rounded-xl mb-2"
                />
                <p className="text-white text-[10px] font-semibold text-center">
                  100+ Instruments
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-teal-500/20 to-transparent" />

      {/* WHAT IS A DEPOSIT BONUS */}
      <section className="py-16 md:py-24" style={{ background: 'linear-gradient(180deg, #050a14 0%, #070d1a 100%)' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16">
            <div className="flex-1">
              <img src={ImgAsset1} alt="Deposit Bonus" className="w-full rounded-2xl object-cover shadow-2xl" style={{ maxHeight: '420px', objectPosition: 'center' }} />
            </div>
            <div className="flex-1">
              <div className="inline-block bg-teal-500/10 border border-teal-500/20 px-3 py-1 rounded-full mb-4">
                <span className="text-[#00d4aa] text-xs font-semibold uppercase tracking-widest">FXCELITE Deposit Bonus</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
                Boost Your Market Reach<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">with Additional Funds</span>
              </h2>
              <div className="space-y-4 text-slate-300 text-sm md:text-base leading-relaxed">
                <p>Looking for a quick way to do more positions without putting any more capital? Do you want to trade stress free and improve your trading livelihood? The Deposit Bonus Initiative is an excellent bonus that FXCELITE offers.</p>
                <p>This is a totally clear program that will assist you in your operational strategy with a leading Online Trading Platform. It's a simple promotional scheme that provides additional trading capital each time you top-up your account.</p>
                <p>This can be useful for someone who is new to trading and wants to get experience with added equity, or for an experienced trader looking for an optimized strategy on a high-performance Forex Trading Platform, it can be very useful.</p>
                <p>Let's delve into the mechanics of this deposit incentive, understand how it works, and uncover its significant benefits for integrating into your portfolio.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-teal-500/20 to-transparent" />

      {/* WHAT IS + PRACTICAL EXAMPLE */}
      <section className="py-16 md:py-24" style={{ background: '#070d1a' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
              What Is a <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Deposit Bonus?</span>
            </h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
              In other words: If you transfer your equity to your FXCELITE profile, the broker will add a certain percentage of that sum as a trading credit for you as a promotion. The additional money allows you to start bigger jobs on a strong CFD Trading Platform. The gains that are realized in these transactions are 100% yours and are available for withdrawal as per the usual procedures.
            </p>
          </div>

          {/* Practical Example Box */}
          <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden border border-teal-500/30 bg-gradient-to-br from-teal-500/[0.06] to-blue-500/[0.04]">
            <div className="px-6 py-4 bg-teal-500/10 border-b border-teal-500/20">
              <h3 className="text-[#00d4aa] font-bold text-lg">Practical Example:</h3>
            </div>
            <div className="p-6 space-y-3">
              {[
                'You make a $1,000 transfer.',
                'Active Promotional Incentive rate is 20%.',
                'You get an additional $200 in equity.',
                'Your effective trading balance is now a total of $1,200.',
                'Your capital with which you trade is invested with $1,200 USD and your personal exposure with $1,000 USD (initial disadvantages are usually covered by promotional equity, depending on the region).',
                'Of the $1,200, a 10 percent return would bring you a $120 profit, all of which is yours to keep.',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-[#050a14] bg-[#00d4aa]">{i + 1}</span>
                  <span className="text-slate-200 text-sm md:text-base leading-relaxed">{item}</span>
                </div>
              ))}
              <div className="mt-4 pt-4 border-t border-teal-500/20">
                <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                  With the help of additional allocation, you can position yourself optimally in the market without going overboard with your own funds in Online Forex Trading.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-teal-500/20 to-transparent" />

      {/* KEY FEATURES */}
      <section id="features" className="py-16 md:py-24" style={{ background: 'linear-gradient(180deg, #070d1a 0%, #050a14 100%)' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-teal-500/10 border border-teal-500/20 px-3 py-1 rounded-full mb-4">
              <span className="text-[#00d4aa] text-xs font-semibold uppercase tracking-widest">Key Features</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
              Key Features of the<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">FXCELITE Deposit Incentive</span>
            </h2>
            <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto">
              At FXCELITE, being a well-established broker, they offer a well-structured promotion plan tailored to the traders' needs.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {keyFeatures.map((f, i) => (
              <div key={i} className="bg-white/[0.03] border border-white/5 rounded-2xl p-6 flex flex-col gap-3 transition-all duration-300 hover:translate-y-[-2px] hover:border-teal-500/30">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-[#00d4aa] bg-teal-500/10 border border-teal-500/20">
                  {f.icon}
                </div>
                <h3 className="text-white font-bold text-base leading-snug">{f.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-teal-500/20 to-transparent" />

      {/* WHY CHOOSE */}
      <section className="py-16 md:py-24" style={{ background: '#050a14' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
            <div className="lg:w-2/5 lg:sticky lg:top-24">
              <div className="inline-block bg-teal-500/10 border border-teal-500/20 px-3 py-1 rounded-full mb-4">
                <span className="text-[#00d4aa] text-xs font-semibold uppercase tracking-widest">Why Choose Us</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
                Why Choose the<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">FXCELITE Promotional Offer?</span>
              </h2>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
                A lot of brokerage companies offer promotional credit deals, but they will have some intricate requirements and conditions attached, some rigid turnaround policies or unrealistic expectations for the investor. On its Global Trading Platform, FXCELITE focuses on being clear, transparent and reliable to operate.
              </p>
              <img src={ImgAsset2} alt="Global Trading" className="w-full rounded-2xl object-cover opacity-80 shadow-lg" style={{ maxHeight: '280px', objectPosition: 'center right' }} />
            </div>
            <div className="lg:w-3/5 space-y-5">
              {whyReasons.map((r, i) => (
                <div key={i} className="bg-white/[0.03] border border-white/5 rounded-2xl p-6 flex gap-5 transition-all duration-300 hover:translate-y-[-2px] hover:border-teal-500/30">
                  <div className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm text-[#050a14] bg-gradient-to-br from-teal-400 to-blue-500">
                    {r.num}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base mb-2">{r.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-teal-500/20 to-transparent" />

      {/* HOW TO GET - STEPS */}
      <section id="how" className="py-16 md:py-24" style={{ background: 'linear-gradient(180deg, #050a14 0%, #070d1a 100%)' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-teal-500/10 border border-teal-500/20 px-3 py-1 rounded-full mb-4">
              <span className="text-[#00d4aa] text-xs font-semibold uppercase tracking-widest">Step-by-Step</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
              How to Get the<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">FXCELITE Deposit Bonus</span>
            </h2>
            <p className="text-slate-300 text-sm md:text-base max-w-xl mx-auto">
              There are only a few easy steps to get started with enhanced capital.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <div key={i} className="bg-white/[0.03] border border-white/5 rounded-2xl p-6 relative transition-all duration-300 hover:translate-y-[-2px] hover:border-teal-500/30">
                <div className="text-5xl font-black mb-4 text-[#00d4aa] opacity-30 leading-none">{s.num}</div>
                <h3 className="text-white font-bold text-base mb-3">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
                {i < steps.length - 1 && (
                  <div className="absolute top-6 right-6 text-[#00d4aa] opacity-30 hidden lg:block">
                    <ArrowRight size={20} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-teal-500/20 to-transparent" />

      {/* ESSENTIAL TERMS */}
      <section className="py-16 md:py-24" style={{ background: '#070d1a' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
              Essential Terms <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">You Should Know</span>
            </h2>
            <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto">
              Each promotional structure has explicit defined parameters. Here are the rules of FXCELITE, which are fair and straightforward.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {[
              { label: 'Payment', val: 'Usually $200 or the equivalent of my currency, see exact amounts in my dashboard (cash).' },
              { label: 'Maximum Credit Allocation', val: 'The amount of promotional funds spent could be restricted to a maximum (usually ceiling amount such as $5,000 per region).' },
              { label: 'Execution Volume Expectations', val: 'Accounts might require standard position activity to make the most of the offer. These parameters have been designed to be realistic and attainable for active traders with TradingView Broker configuration.' },
              { label: 'Validity Period', val: 'Promotional equity is allocated for a period of time (such as 30 to 60 days). But 100% of the profits you have already made are yours.' },
              { label: 'Non-Transferable Base Credit', val: 'Only the operational equity trading margin (i.e. the net gains from the trading in the markets) can be extracted from the Promotional equity.' },
            ].map((t, i) => (
              <div key={i} className="bg-white/[0.03] border border-white/5 rounded-2xl p-5 hover:border-teal-500/30 transition-colors">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-[#00d4aa]" />
                  <span className="text-[#00d4aa] font-bold text-sm">{t.label}</span>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">{t.val}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-teal-500/20 to-transparent" />

      {/* PRACTICAL STRATEGIES */}
      <section className="py-16 md:py-24" style={{ background: '#050a14' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <div className="lg:w-1/2">
              <img src={ImgDeposit} alt="Trading Strategies" className="w-full rounded-2xl object-cover shadow-2xl" style={{ maxHeight: '400px' }} />
            </div>
            <div className="lg:w-1/2">
              <div className="inline-block bg-teal-500/10 border border-teal-500/20 px-3 py-1 rounded-full mb-4">
                <span className="text-[#00d4aa] text-xs font-semibold uppercase tracking-widest">Strategies</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
                Practical Strategies to<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Maximize Your Promotional Equity</span>
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Getting more shares is easy; getting them to do their job effectively is more challenging. These are some of the operating guidelines, you should keep in mind:
              </p>
              <div className="space-y-4">
                {[
                  { title: 'Consistent Risk Controls', desc: "Don't increase lot sizes just because your overall risk is higher. Follow your risk management guidelines and consider the extra money as leverage." },
                  { title: 'Assess Alternatives to Asset Classes', desc: 'Speculate the new markets using the extra margin. Extra equity offers you the opportunity to expand your exposure without over-leveraging your own funds, whether you\'re looking to analyze global indices, test crypto pairs, or Trade Forex Online.' },
                  { title: 'Focus on High-Probability Setup Alignments', desc: 'Expand equity and wait for the right time, as opposed to trading at an inferior time.' },
                  { title: 'Set up Systematic Profit Takeouts', desc: 'Set up a weekly or monthly withdrawal from profits to avoid getting too attached to it.' },
                  { title: 'Consult Regional Guidelines', desc: 'Promotional parameters may differ slightly from area to area, depending on local regulatory requirements. Please review the detailed conditions displayed in your regional portal.' },
                ].map((s, i) => (
                  <div key={i} className="flex gap-3">
                    <CheckCircle size={18} className="shrink-0 mt-0.5 text-[#00d4aa]" />
                    <div>
                      <span className="text-white font-semibold text-sm">{s.title}: </span>
                      <span className="text-slate-400 text-sm leading-relaxed">{s.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-teal-500/20 to-transparent" />

      {/* IS THIS RIGHT FOR YOU */}
      <section className="py-16 md:py-24" style={{ background: 'linear-gradient(180deg, #050a14 0%, #070d1a 100%)' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
              Is This Promotional Structure<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Right for You?</span>
            </h2>
            <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto">
              This model is a viable and well-returned approach for most active market participants to create a disciplined growth model.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Suitable for */}
            <div className="rounded-2xl p-6 border border-teal-500/30 bg-gradient-to-br from-teal-500/[0.06] to-blue-500/[0.03]">
              <h3 className="text-[#00d4aa] font-bold text-lg mb-5 flex items-center gap-2">
                <CheckCircle size={20} /> This program is suitable for:
              </h3>
              <div className="space-y-3">
                {[
                  { title: 'Market Entrants', desc: 'People who want to join the market to get experience in the real market but do not want to invest a large amount of capital.' },
                  { title: 'Part-Time Investors', desc: 'Individual traders looking at making the most of small amounts of capital.' },
                  { title: 'Swing & Position Traders', desc: 'Traders that trade for extended periods of time (days, months and beyond) who can take advantage of the larger margin cushions.' },
                  { title: 'Day Traders & Scalpers', desc: 'Active participants who make use of improved equity to profit from brief term price changes throughout an Online Forex Trading atmosphere.' },
                  { title: 'Algorithmic Traders', desc: 'Users who are implementing algorithmic EAs on a powerful Forex Trading Platform.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="shrink-0 w-1.5 h-1.5 rounded-full mt-2 bg-[#00d4aa]" />
                    <div>
                      <span className="text-white font-semibold text-sm">{item.title}: </span>
                      <span className="text-slate-400 text-sm">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* May not suit */}
            <div className="rounded-2xl p-6 border border-red-500/20 bg-gradient-to-br from-red-500/[0.04] to-red-500/[0.01]">
              <h3 className="text-red-400 font-bold text-lg mb-5 flex items-center gap-2">
                <X size={20} /> This program may not suit:
              </h3>
              <div className="space-y-3">
                {[
                  'People who want to cash out their investments right away without being involved in the market.',
                  'Traders who favor trading with no promotional conditions.',
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="shrink-0 w-1.5 h-1.5 rounded-full mt-2 bg-red-400" />
                    <span className="text-slate-400 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-teal-500/20 to-transparent" />

      {/* FINAL CTA */}
      <section className="py-16 md:py-24" style={{ background: '#070d1a' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
              Final Words –{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Capitalize on Enhanced Market Power</span>
            </h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto mb-10">
              Successful international investing involves strategy, patience and the right tools. Having a top-tier Online Trading Platform with supplementary equity to your account is a great advantage in terms of operation.
            </p>
          </div>
          {/* Checklist */}
          <div className="max-w-2xl mx-auto rounded-2xl p-6 md:p-8 mb-10 border border-teal-500/30 bg-gradient-to-br from-teal-500/[0.06] to-blue-500/[0.04]">
            <h3 className="text-[#00d4aa] font-bold text-base mb-5">Quick Execution Checklist:</h3>
            <div className="space-y-3">
              {[
                'Open Trading Account and Register.',
                'Fill in verification on your CFD Trading Platform.',
                'Opt in to the promotional program.',
                'Top up your balance with your preferred payment company.',
                'Automatically receive supplementary equity balance.',
                'Open the MT5 Trading Platform or link to integration on TradingView Broker and start trading your strategy.',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle size={16} className="shrink-0 mt-0.5 text-[#00d4aa]" />
                  <span className="text-slate-200 text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto text-center mb-8">
            Every second of every minute matters in the financial markets. Give your account power-up today and play with more confidence in the market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://trade.FXCELITE.com/register"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#00d4aa] hover:bg-[#00be99] text-[#050a14] font-bold py-4 px-8 rounded-xl text-base flex items-center justify-center gap-2 transition-all shadow-lg shadow-teal-500/20 text-center"
            >
              Claim Your 50% Bonus Now
              <ArrowRight size={18} />
            </a>
            <a
              href="https://trade.FXCELITE.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#00d4aa]/30 hover:bg-[#00d4aa]/10 text-[#00d4aa] font-semibold py-4 px-8 rounded-xl text-base transition-all text-center block"
            >
              Sign In
            </a>
          </div>
        </div>
      </section>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-teal-500/20 to-transparent" />

      {/* FAQ */}
      <section id="faq" className="py-16 md:py-24" style={{ background: '#050a14' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-start gap-12">
            <div className="lg:w-2/5 lg:sticky lg:top-24">
              <div className="inline-block bg-teal-500/10 border border-teal-500/20 px-3 py-1 rounded-full mb-4">
                <span className="text-[#00d4aa] text-xs font-semibold uppercase tracking-widest">FAQ</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
                Frequently Asked<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Questions</span>
              </h2>
              <img src={ImgFAQ} alt="FAQ" className="w-full rounded-2xl object-cover mt-6 opacity-90 shadow-lg" style={{ maxHeight: '320px' }} />
            </div>
            <div className="lg:w-3/5 w-full">
              {faqs.map((f, i) => (
                <FaqItem key={i} q={f.q} a={f.a} />
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}