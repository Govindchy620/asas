import React, { useState } from 'react';
import Hero from "../assets/hero-bg.png";
import Innovation from "../assets/innovation.png";
import Trade from "../assets/trade.png";

export default function DepositBonusLandingPage() {
  // State for the interactive FAQ accordion
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#050617] text-slate-300 font-sans antialiased overflow-hidden relative">
      
      {/* --- GLOBAL AMBIENT BACKGROUND GLOWS --- */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute top-[40%] right-[-10%] w-[40%] h-[50%] bg-emerald-700/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] left-[20%] w-[60%] h-[40%] bg-cyan-600/5 blur-[100px] rounded-full pointer-events-none z-0"></div>

      {/* ============================================ */}
      {/* SECTION 1: HERO (REDESIGNED) */}
      {/* ============================================ */}
      <header 
        className="relative min-h-[90vh] flex items-center border-b border-white/10 z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${Hero})` }}
      >
        {/* Sweeping gradient overlay: dark on left for text readability, clear on right for image visibility */}
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-[#050617] via-[#050617]/90 to-[#050617]/20 z-0"></div>

        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 py-20 relative z-10 grid md:grid-cols-12 gap-8 items-center">
          
          <div className="md:col-span-9 lg:col-span-8 space-y-6 sm:space-y-8 text-center md:text-left pt-10 md:pt-0">
            
            {/* Main Headline */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] tracking-tight">
              IC Markets Deposit Bonus <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 drop-shadow-[0_0_30px_rgba(52,211,153,0.3)]">
                Boost Your Trading Power
              </span>
              <br />With Extra Free Funds
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto md:mx-0 font-light drop-shadow-md leading-relaxed">
              Get a Bonus on <strong className="text-white font-semibold">Every Deposit You Make.</strong>
            </p>
            
            {/* CTA Button Area */}
            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              
              {/* Sign Up Button */}
              <button 
                onClick={() => window.open("https://trade.fxcelite.com/register", "_blank")}
                className="group relative w-full sm:w-auto px-8 py-4 font-bold text-base sm:text-lg rounded-full text-[#050617] bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-300 hover:to-emerald-400 transition-all duration-300 shadow-[0_0_30px_rgba(52,211,153,0.4)] hover:shadow-[0_0_50px_rgba(52,211,153,0.6)] hover:-translate-y-1 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Sign Up
                  <svg className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
                {/* Shimmer Effect */}
                <div className="absolute top-0 -left-[100%] w-1/2 h-full block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:left-[200%] transition-all duration-1000 ease-in-out z-0"></div>
              </button>

              {/* Sign In Button */}
              <button 
                onClick={() => window.open("https://trade.fxcelite.com/login", "_blank")}
                className="w-full sm:w-auto px-8 py-4 font-bold text-base sm:text-lg rounded-full text-white bg-transparent border-2 border-emerald-400/30 hover:border-emerald-400 hover:bg-emerald-400/10 transition-all duration-300 hover:-translate-y-1"
              >
                Sign In
              </button>
              
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <p className="text-xs sm:text-sm text-slate-400 italic">
                *Terms and conditions apply.
              </p>
            </div>
          </div>

        </div>
      </header>

      {/* ============================================ */}
      {/* SECTION 2: STATS BAR */}
      {/* ============================================ */}
      <section className="relative z-20 -mt-6 sm:-mt-8 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#0A0A0E]/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl py-4 sm:py-6 grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6 text-center items-center">
          <div className="border-r border-white/10 last:border-0 md:border-r">
            <p className="text-[9px] sm:text-[10px] font-semibold tracking-widest uppercase text-slate-400">Spreads From</p>
            <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mt-1 drop-shadow-lg">0.0</p>
          </div>
          <div className="border-r border-white/10 last:border-0 md:border-r">
            <p className="text-[9px] sm:text-[10px] font-semibold tracking-widest uppercase text-slate-400">Leverage Up To</p>
            <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mt-1 drop-shadow-lg">1:1000</p>
          </div>
          <div className="border-r-0 md:border-r border-white/10 col-span-2 md:col-span-1">
            <p className="text-[9px] sm:text-[10px] font-semibold tracking-widest uppercase text-slate-400">Micro Lot Trading</p>
            <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mt-1 drop-shadow-lg">0.01</p>
          </div>
          <div className="border-r border-white/10 last:border-0 md:border-r">
            <p className="text-[9px] sm:text-[10px] font-semibold tracking-widest uppercase text-slate-400">Instruments</p>
            <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-emerald-400 mt-1 drop-shadow-[0_0_10px_rgba(52,211,153,0.3)]">2250+</p>
          </div>
          <div>
            <p className="text-[9px] sm:text-[10px] font-semibold tracking-widest uppercase text-slate-400">Premium Support</p>
            <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mt-1 drop-shadow-lg">24/7</p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 2: INTRO & WHAT IS IT (With Image) */}
      {/* ============================================ */}
      <section className="py-12 sm:py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          
          {/* Top Intro Paragraphs */}
          <div className="bg-[#070A23]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-10 shadow-lg space-y-4 max-w-5xl mx-auto">
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
              Are you looking for a way to trade bigger without putting more of your own money at risk? Would you like to maximise your profit potential and avoid augmenting stress? IC Markets offers you the best of opportunities, the Deposit Bonus Offer.
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
              It is no hoax. It’s not a loan. It is an easy and clear bonus that provides you with additional trading funds whenever you deposit money into your account. This offer is available to a beginner who wants to learn without much fear or an experienced trader who wants to realise maximum returns.
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
              It is time to sink deep into the nature of this bonus, its functionality, and the reason why you need to take it immediately.
            </p>
          </div>

          {/* "What is it" Grid with Image */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Image Side */}
            <div className="md:col-span-5 flex justify-center order-2 md:order-1">
              <div className="relative w-full max-w-sm md:max-w-full rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-white/10 group">
                <div className="absolute inset-0 bg-emerald-500/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                <img 
                  src={Trade}
                  alt="What is a Deposit Bonus" 
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
            </div>

            {/* Text Side */}
            <div className="md:col-span-7 space-y-6 order-1 md:order-2 bg-[#070A23]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 shadow-lg border-l-4 border-l-emerald-500">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">What Exactly is a Deposit Bonus?</h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                In simple words: You deposit real money into your IC Markets trading account. IC Markets contributes a fixed percentage of such amounts as bonus funds. Those bonus funds can be used to open bigger trades. Any profit you get on such trades is yours to take away and withdraw at any time.
              </p>
              
              <div className="bg-[#050617]/60 rounded-xl p-5 sm:p-6 border border-white/5">
                <h3 className="text-emerald-400 font-bold mb-3 text-sm sm:text-base">Case in point to make it crystal clear:</h3>
                <ul className="space-y-2 text-sm sm:text-base text-slate-300 font-light list-disc pl-5">
                  <li>You deposit $1,000.</li>
                  <li>The bonus package is 20%.</li>
                  <li>You get a $200 bonus.</li>
                  <li>Your current balance is now trading at = 1,200.</li>
                  <li>You are trading with 1,200, but you are still only at a risk of 1,000 (bonus funds are typically lost first in case of a loss).</li>
                  <li>You make a 10% profit on $1,200 = $120 profit. That one hundred and twenty dollars is all yours.</li>
                </ul>
              </div>
              
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light italic">
                See the beauty? You made a profit on the additional money, which was not yours. That is the strength of the deposit bonus.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 3: KEY FEATURES (Grid of 6) */}
      {/* ============================================ */}
      <section className="py-12 sm:py-16 md:py-20 relative z-10 border-t border-white/5 bg-[#070A23]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-8 sm:space-y-12">
          <div className="space-y-3 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">Key Features of IC Markets Deposit Bonus</h2>
            <p className="text-sm sm:text-base text-slate-400 font-light">IC Markets is a highly reputable Forex and CFD broker in the world. Their deposit bonus deal is easy, simple, and is meant to make traders prosper. The following is what is special about it:</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 text-left">
            {[
              { icon: '👥', title: 'Available for New and Existing Clients', desc: 'You have only opened your account the day before yesterday or have been trading with IC Markets all your life - you can join and receive the bonus on each deposit.' },
              { icon: '🔄', title: 'Bonus on every Deposit', desc: 'There is no restriction on the number of occasions you can receive the bonus. Make one deposit, receive a bonus. Deposit once more the following week, and receive a bonus once more. Simple.' },
              { icon: '💸', title: 'No Extra Fees', desc: 'The bonus is completely free. There is no fee, commission or interest to receive it.' },
              { icon: '🏦', title: 'Withdraw Your Profits Anytime', desc: 'This is important. The amount of bonus itself is not withdrawable. Still, all the profit earned under the bonus could be deposited into the bank account or payment method of your choice without any inquiries at all.' },
              { icon: '📈', title: 'Works on All Trading Instruments', desc: 'Trade Forex pairs, Gold, Silver, Crude Oil, Indices, Shares, Cryptocurrencies or almost everything that IC Markets has to offer with the bonus.' },
              { icon: '🤖', title: 'Compatible with EAs and Robots', desc: 'Do you have automated strategies in trading? Bonus funds are well-suited to Expert Advisors (EAs).' },
            ].map((feature, i) => (
              <div 
                key={i} 
                className="group relative bg-[#050617] border border-white/5 rounded-xl p-5 sm:p-6 shadow-lg overflow-hidden transition-all duration-300 hover:border-emerald-500/30 hover:shadow-[0_4px_20px_rgba(52,211,153,0.1)] hover:-translate-y-1"
              >
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-[#070A23] to-[#050617] border border-white/10 flex items-center justify-center text-lg md:text-xl shadow-[inset_0_2px_10px_rgba(255,255,255,0.05)] mb-4 group-hover:scale-110 group-hover:border-emerald-500/30 transition-all duration-300">
                  <span className="drop-shadow-md">{feature.icon}</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">{feature.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 4: WHY CHOOSE (With Image layout) */}
      {/* ============================================ */}
      <section className="py-12 sm:py-16 md:py-20 relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8 sm:space-y-12">
          
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">Why Choose IC Markets' Deposit Bonus Over Others?</h2>
            <p className="text-sm sm:text-base text-slate-400 font-light">Bonuses are provided by a number of brokers. However, most of them have their own tricks and traps, like massive requirements of trading volume, withdrawal limitations, or unfavourable conditions. IC Markets are different.</p>
          </div>

          <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Image Side (Sticky on Desktop) */}
            <div className="md:col-span-5 flex justify-center sticky top-24">
              <div className="relative w-full max-w-sm md:max-w-full rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-white/10">
                <img 
                  src={Innovation} 
                  alt="Why Choose Us" 
                  className="w-full h-auto object-cover" 
                />
              </div>
            </div>

            {/* Features Side */}
            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {[
                { num: '1', title: 'Transparent and Fair Terms', desc: 'IC Markets is licensed and reputable all over the world. The terms of their bonuses are evident. You may read them, comprehend them, and then make decisions. No tricks of fine print.' },
                { num: '2', title: 'Lower Risk for You', desc: 'Since bonus funds tend to be withdrawn initially to settle any losses, your actual capital remains intact over a longer period. This would be a massive risk management benefit.' },
                { num: '3', title: 'Perfect for Beginners', desc: 'You are likely to be scared of losing money if you are new to trading. The bonus provides you with additional practice money at no expense to you. You are able to test, learn the market behavior and get confidence quicker.' },
                { num: '4', title: 'Great for Experienced Traders', desc: 'In case you already have a lucrative plan, additional funds will translate into additional revenue. Suppose you earn a profit of 5% on your own capital every month. Your trading capital is 20% greater with a 20% bonus. And you have the potential to grow your profit by almost 20%, without any additional effort.' },
                { num: '5', title: 'Fast and Automatic', desc: 'Waiting, no waiting, no manual requests. Once you decide to do so, we will automatically credit your account with every deposit with the bonus within a few minutes.' },
              ].map((item, i) => (
                <div 
                  key={i} 
                  className={`group relative bg-[#070A23] border border-white/5 rounded-xl p-5 sm:p-6 shadow-lg overflow-hidden transition-all duration-300 hover:border-emerald-500/30 hover:shadow-[0_4px_20px_rgba(52,211,153,0.1)] hover:-translate-y-1 ${i === 4 ? 'sm:col-span-2' : ''}`}
                >
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold shrink-0">
                      {item.num}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-400 transition-colors leading-tight">{item.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">{item.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 5: HOW TO GET (Process) */}
      {/* ============================================ */}
      <section className="py-12 sm:py-16 md:py-20 border-t border-white/5 bg-[#070A23] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-8 sm:space-y-12">
          <div className="space-y-3 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">How to Get the IC Markets Deposit Bonus (Step-by-Step)</h2>
            <p className="text-sm sm:text-base text-slate-400 font-light">It takes only a few steps to trade with more money today:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left relative max-w-5xl mx-auto">
            {[
              { num: 'Step 1', title: 'Open a Live Trading Account', text: 'In case you do not have an account with IC Markets yet, visit their site and choose the Open Account button. Enter your personal information. It is fast (less than 5 minutes) and free.' },
              { num: 'Step 2', title: 'Verify Your Identity', text: 'Attach your ID (Passport, driver\'s license or national id) and address (utility bill or bank statement). It is a single KYC process that is mandatory for all regulated brokers.' },
              { num: 'Step 3', title: 'Opt in to the Deposit Bonus Offer', text: 'Access your IC Markets Client Area. Find the deposit bonus section. Select Opt In or Participate. This is the only time you have to do this.' },
              { num: 'Step 4', title: 'Make your First Deposit (Minimum Deposit)', text: 'Confirm the existing minimum deposit required to obtain the bonus (typically, 200 or so). Make a deposit in the way that suits you best, such as a Bank Transfer, Credit Card, Skrill, Neteller, Bitcoin, or others.' },
              { num: 'Step 5', title: 'Receive Your Bonus Automatically', text: 'The bonus percentage will be credited to your trading account balance within a couple of minutes. You will have two balances, one your real balance and the other your bonus balance.' },
              { num: 'Step 6', title: 'Start Trading', text: 'Launch your MetaTrader 4, MetaTrader 5, or cTrader platform. The composite balance will be seen. Begin trading and increasing profits.' }
            ].map((step, i) => (
              <div key={i} className="flex gap-4 group">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#050617] border border-emerald-500/50 text-emerald-400 font-bold shadow-[0_0_15px_rgba(52,211,153,0.2)] shrink-0 group-hover:scale-110 transition-transform">
                    {i+1}
                  </div>
                  {/* Vertical connector line for visual flow */}
                  {i !== 5 && <div className="w-px h-full bg-white/10 mt-2"></div>}
                </div>
                <div className="pb-8">
                  <h4 className="text-white font-bold text-sm sm:text-base mb-1">{step.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 6: IMPORTANT TERMS */}
      {/* ============================================ */}
      <section className="py-12 sm:py-16 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-br from-[#070A23] to-[#050617] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[80px] rounded-full pointer-events-none"></div>
            
            <h2 className="text-xl sm:text-2xl font-extrabold text-white mb-4">Important Terms You Should Know (But Don’t Worry – They Are Fair)</h2>
            <p className="text-sm sm:text-base text-slate-300 font-light mb-6">
              There are certain basic rules in every bonus offer. IC Markets makes them straightforward. The following are the main arguments:
            </p>
            
            <ul className="space-y-4 text-sm sm:text-base text-slate-300 font-light mb-6 list-disc pl-5 relative z-10">
              <li><strong className="text-white font-semibold">Minimum Deposit:</strong> Typically 200 or its equivalent (see current on-site).</li>
              <li><strong className="text-white font-semibold">Maximum Bonus:</strong> Sometimes it is capped (e.g. to a maximum amount of bonus, say 5,000). Test the existing offer.</li>
              <li><strong className="text-white font-semibold">Trading Volume Requirement:</strong> You may have to trade a particular number of lots in order to earn the full bonus and take home all profits. To take an example, to earn a bonus of 1, you may have to sell 0.01 lots. This is normative and highly attainable.</li>
              <li><strong className="text-white font-semibold">Time Limit:</strong> The bonus can be lost after 30 or 60 days or if the volume requirement is not met. But you have the profits at the time of expiry.</li>
              <li><strong className="text-white font-semibold">Bonus Withdrawal:</strong> You may not withdraw the amount of the bonus. Profits made by it alone.</li>
            </ul>

            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 sm:p-5 relative z-10">
              <p className="text-sm sm:text-base text-emerald-100 font-light">
                <strong className="text-emerald-400 font-bold">Pro Tip:</strong> You got a free week or a month to trade with additional money, even when you have not fulfilled the volume requirement. Any gain you have already drawn out is pure gain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 7: COMPARISON TABLE */}
      {/* ============================================ */}
      <section className="py-12 sm:py-16 md:py-20 relative border-t border-white/5 bg-[#070A23] backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-8 sm:space-y-12 relative z-10">
          <div className="space-y-3 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">Deposit Bonus vs. No Bonus – A Quick Comparison</h2>
          </div>

          <div className="bg-[#050617] rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.3)] overflow-x-auto max-w-4xl mx-auto relative">
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            <table className="w-full text-left min-w-[600px] relative z-10">
              <thead className="bg-black/40 border-b border-white/5">
                <tr>
                  <th className="px-4 sm:px-6 py-4 text-[10px] sm:text-xs font-bold tracking-widest uppercase text-slate-400">Feature</th>
                  <th className="px-4 sm:px-6 py-4 text-[10px] sm:text-xs font-bold tracking-widest uppercase text-slate-400">Without Bonus</th>
                  <th className="px-4 sm:px-6 py-4 text-[10px] sm:text-xs font-bold tracking-widest uppercase text-emerald-400 bg-emerald-900/10">With IC Markets Deposit Bonus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-4 sm:px-6 py-4 text-sm sm:text-base font-medium text-slate-300">Your deposit</td>
                  <td className="px-4 sm:px-6 py-4 text-sm sm:text-base font-bold text-white">$1,000</td>
                  <td className="px-4 sm:px-6 py-4 text-sm sm:text-base font-bold text-white bg-emerald-900/5">$1,000</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-4 sm:px-6 py-4 text-sm sm:text-base font-medium text-slate-300">Bonus received</td>
                  <td className="px-4 sm:px-6 py-4 text-sm sm:text-base font-bold text-white">$0</td>
                  <td className="px-4 sm:px-6 py-4 text-sm sm:text-base font-bold text-emerald-400 bg-emerald-900/5">$200 (example 20%)</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-4 sm:px-6 py-4 text-sm sm:text-base font-medium text-slate-300">Total trading balance</td>
                  <td className="px-4 sm:px-6 py-4 text-sm sm:text-base font-bold text-white">$1,000</td>
                  <td className="px-4 sm:px-6 py-4 text-sm sm:text-base font-bold text-white bg-emerald-900/5">$1,200</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-4 sm:px-6 py-4 text-sm sm:text-base font-medium text-slate-300">Profit on 10% gain</td>
                  <td className="px-4 sm:px-6 py-4 text-sm sm:text-base font-bold text-white">$100</td>
                  <td className="px-4 sm:px-6 py-4 text-sm sm:text-base font-bold text-emerald-400 drop-shadow-sm bg-emerald-900/5">$120</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-4 sm:px-6 py-4 text-sm sm:text-base font-medium text-slate-300">Risk to your capital</td>
                  <td className="px-4 sm:px-6 py-4 text-sm sm:text-base font-bold text-red-400">Full $1,000</td>
                  <td className="px-4 sm:px-6 py-4 text-sm sm:text-base font-bold text-emerald-400 bg-emerald-900/5">Still $1,000 <span className="text-[10px] font-normal text-slate-400 block">(bonus takes first loss)</span></td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-4 sm:px-6 py-4 text-sm sm:text-base font-medium text-slate-300">Can withdraw profit?</td>
                  <td className="px-4 sm:px-6 py-4 text-sm sm:text-base font-bold text-white">Yes</td>
                  <td className="px-4 sm:px-6 py-4 text-sm sm:text-base font-bold text-white bg-emerald-900/5">Yes</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm sm:text-base text-slate-400 font-light italic">
            The bonus obviously provides an advantage.
          </p>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 8: TIPS */}
      {/* ============================================ */}
      <section className="py-12 sm:py-16 md:py-20 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-12 gap-10 md:gap-16 items-center">
          
          <div className="md:col-span-6 space-y-4 sm:space-y-6 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Tips to Make the Most of Your Deposit Bonus
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
              It is easy to get the bonus. It is clever to use it sparingly. The following are some of the practical tips:
            </p>
            <div className="space-y-4 text-sm sm:text-base text-slate-400 font-light text-left">
              <p><strong className="text-white font-semibold">1. Don’t Overtrade Just Because You Have More Money:</strong> Additional capital leaves you complacent. Resume your usual positioning and risk control guidelines. The bonus is an insurance, not a permission to roll the dice.</p>
              <p><strong className="text-white font-semibold">2. Use the Bonus to Test New Strategies:</strong> Also, always wanted to give gold trading or a new indicator a go? Experiment with the bonus funds. You lose bonus money first, in case you lose. In case you win, you get the profit.</p>
              <p><strong className="text-white font-semibold">3. Focus on High-Probability Trades:</strong> Since the bonus increases your capital, you are able to be more discriminating. Wait for the most favourable formations rather than coercing trades.</p>
              <p><strong className="text-white font-semibold">4. Withdraw Profits Regularly:</strong> Don’t have all your profit in the book. Take away some of it each week or month. This traps your profits and minimises emotional trading.</p>
              <p><strong className="text-white font-semibold">5. Read the Exact Terms for Your Region:</strong> The conditions and percentage of bonuses may be different in countries. Always have a look at the recent deal in your IC Markets client account.</p>
            </div>
          </div>

          <div className="md:col-span-6 flex justify-center">
            <img 
              src={Trade} 
              alt="Trading Instruments" 
              className="w-full max-w-sm md:max-w-md rounded-xl drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] object-cover" 
            />
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 9: RIGHT FOR YOU */}
      {/* ============================================ */}
      <section className="py-12 sm:py-16 md:py-20 relative z-10 bg-[#070A23] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-12 gap-10 md:gap-16 items-center">
          
          <div className="md:col-span-6 flex justify-center md:justify-start order-2 md:order-1">
            <img 
              src={Innovation} 
              alt="Innovation Precision Results" 
              className="w-full max-w-sm md:max-w-md rounded-xl drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] object-cover" 
            />
          </div>

          <div className="md:col-span-6 space-y-4 sm:space-y-6 text-center md:text-left order-1 md:order-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Is This Bonus Right for You? (Honest Advice)
            </h2>
            <div className="text-sm sm:text-base text-slate-300 font-light leading-relaxed text-left space-y-4">
              <p>The deposit bonus is wonderful in:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>New traders who desire additional practice capital, but not additional risk.</li>
                <li>Part-time traders who wish to earn maximum returns with minimum deposits.</li>
                <li>Swing and position traders with days or weeks in their trades - the bonus is very well suited to longer periods.</li>
                <li>Scalpers and day traders - the additional money is used to make more per-trade profit as long as the risk is managed properly.</li>
                <li>Traders utilising EAs - since you are able to execute your robot using greater effective capital.</li>
              </ul>
              
              <p className="mt-4">This bonus may not be suitable for:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Traders who deposit and withdraw instantly (bonus is on trading, not on arbitrage).</li>
                <li>Traders are loathed of any conditions (although conditions are just, some people want no strings attached at all).</li>
              </ul>

              <p className="font-bold text-white pt-2">This is a definite win for 95% of the retail traders.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 10: FINAL WORDS & CTA */}
      {/* ============================================ */}
      <section className="py-16 sm:py-20 relative z-10 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">Final Words – Don’t Miss This Opportunity</h2>
          <p className="text-sm sm:text-base text-slate-300 font-light">
            It is hard enough to trade in the first place. Why not have an added advantage for yourself? IC Markets is giving you free trading capital as a mere deposit. It is something like a store giving you the extra money to spend, but you get to pocket the profits here.
          </p>
          <div className="bg-[#070A23] border border-white/10 rounded-xl p-5 sm:p-6 text-left inline-block mt-4 text-slate-300 font-light text-sm sm:text-base shadow-lg">
            <p className="font-semibold text-white mb-2">It is quite easy:</p>
            <ul className="list-none space-y-1">
              <li>✓ Create an account (you do not have one).</li>
              <li>✓ Opt in to the bonus.</li>
              <li>✓ Deposit your funds.</li>
              <li>✓ Receive a bonus.</li>
              <li>✓ Trade smart.</li>
              <li>✓ Withdraw profits.</li>
            </ul>
            <p className="mt-2 font-semibold">That’s it.</p>
          </div>
          
          <p className="text-sm sm:text-base text-slate-400 font-light italic pt-4">
            Markets change every second. Opportunity passes away. The appropriate moment to begin is now. Ready to Take your Bonus? Don’t wait. Each day that you live is a day that you would have been trading with additional money. Click below to join and add your first deposit. Your reward will be waiting.
          </p>
          
          <div className="pt-6">
            <button 
              onClick={() => window.open("https://trade.fxcelite.com/register", "_blank")}
              className="px-6 sm:px-10 py-3 sm:py-4 font-bold text-sm sm:text-lg rounded-full text-[#050617] bg-emerald-400 hover:bg-emerald-300 transition-all shadow-[0_0_20px_rgba(52,211,153,0.3)] hover:shadow-[0_0_30px_rgba(52,211,153,0.5)] hover:-translate-y-0.5"
            >
              Sign Up
            </button>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 11: INTERACTIVE FAQ ACCORDION */}
      {/* ============================================ */}
      <section className="py-12 sm:py-16 md:py-20 border-t border-white/5 bg-[#070A23] relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8 sm:space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">Frequently Asked Questions (FAQs)</h2>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {[
              { q: "Q1: Is it possible to withdraw the amount of the bonus?", a: "No. The trading bonus is based on trading. The bonus itself can not be withdrawn. Any profit you make using the bonus, however, is fully withdrawable." },
              { q: "Q2: Is the bonus actual cash? Can I lose it?", a: "Yes, it is real trading funds. When you take a losing trade, you will lose the bonus money first. That is in fact, good since your personal deposit is secured at a longer period." },
              { q: "Q3: Am I obliged to pay tax on the bonus?", a: "The tax regulations are country-specific. Mostly, you are taxed on the trading gains rather than the bonus itself. Ask your local tax advisor." },
              { q: "Q4: Do I qualify to get the bonus several times?", a: "Yes. When you make deposits within the promotion period, the percentage of bonus on the deposits will be awarded on the deposits." },
              { q: "Q5: What is the case of going negative with a bonus?", a: "IC Markets provides negative balance cover to retail customers. You have nothing to lose except your deposit. The bonus does not become an additional liability." },
              { q: "Q6: Does the bonus apply to every type of account?", a: "Usually, it works on Standard and Raw Spread accounts. See the details of the particular offer for any exceptions." },
              { q: "Q7: Is it possible to use the bonus with an EA or copy trading?", a: "Absolutely. IC Markets permits Expert Advisor, copy trading, and algorithmic trading on bonus funds." },
            ].map((faq, i) => (
              <div 
                key={i} 
                className={`bg-[#050617] border transition-all duration-300 rounded-xl overflow-hidden shadow-md cursor-pointer ${openFaq === i ? 'border-emerald-500/50' : 'border-white/10 hover:border-white/20'}`}
                onClick={() => toggleFaq(i)}
              >
                <div className="p-4 sm:p-6 flex justify-between items-center select-none">
                  <h3 className="text-sm sm:text-base font-bold text-white pr-4">{faq.q}</h3>
                  <div className={`transform transition-transform duration-300 text-emerald-400 shrink-0 ${openFaq === i ? 'rotate-180' : 'rotate-0'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className={`px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === i ? 'max-h-[500px] pb-6 opacity-100' : 'max-h-0 pb-0 opacity-0'}`}>
                  <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed border-t border-white/5 pt-4">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FOOTER */}
      {/* ============================================ */}
      <footer className="bg-[#050617] border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10 text-center space-y-3 sm:space-y-4">
          <p className="text-[10px] sm:text-xs text-slate-400">&copy; {new Date().getFullYear()} FXCELITE. All rights reserved.</p>
          <p className="text-[10px] sm:text-xs text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Disclosure: Forex trading and CFDs are very risky investments that can make one lose money easily. This bonus package does not alter the riskiness of trading. Trade responsibly, and only trade with the money that you can afford to part with. Bonus conditions are negotiable. The latest details of the offers may be found on Visit IC Markets' official website.
          </p>
        </div>
      </footer>

    </div>
  );
}