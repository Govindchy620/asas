import React, { useState } from 'react';
import { 
  Share2, 
  Users, 
  TrendingUp, 
  Zap, 
  Shield, 
  Globe, 
  Activity, 
  CheckCircle2, 
  ArrowRight, 
  ChevronDown, 
  Smartphone, 
  Lock, 
  RefreshCw, 
  Rocket, 
  Search, 
  Eye, 
  Target, 
  BadgePercent, 
  Play, 
  Gift, 
  DollarSign, 
  Link2,
  Megaphone,
  Network,
  Sun,
  Flame,
  Award,
  Sparkles,
  Layers
} from 'lucide-react';

export default function Referrals() {
  return (
    <div className="bg-[#020617] text-white font-sans selection:bg-orange-500/30 overflow-x-hidden">
      
      {/* --- HERO: THE SOLAR CORE --- */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-32 overflow-hidden">
        {/* Radiating Solar Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[1400px] bg-[radial-gradient(circle_at_50%_50%,#f9731610,transparent_60%)]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-orange-500/10 rounded-full animate-[pulse_6s_ease-in-out_infinite]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px] border border-orange-500/5 rounded-full animate-[pulse_8s_ease-in-out_infinite_1s]"></div>
          
          <img 
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-10"
            alt="Human Connection Network"
          />
          {/* Connection Particles Overlay */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 backdrop-blur-xl mb-8 animate-fade-in">
            <Share2 size={14} className="text-orange-400" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-orange-400 italic">Social Reward Protocol v16.0</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tight mb-6">
            Trading <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-white to-orange-600 italic uppercase">Referrals</span>
          </h1>
          
          <p className="text-base md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light mb-8 uppercase tracking-widest italic">
            Share the Experience and Earn Rewards
          </p>

          <div className="max-w-3xl mx-auto text-sm md:text-base text-white/90 leading-relaxed font-light mb-12 px-6 py-8 border border-white/20 bg-white/[0.05] backdrop-blur-3xl relative shadow-[0_20px_60px_-15px_rgba(249,115,22,0.2)] rounded-3xl group overflow-hidden">
             <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform">
               <Users size={80} className="text-orange-400" />
             </div>
             Our philosophy at Fxcelite centers around the idea that a fantastic trading experience is always more enjoyable when shared. Hence, our trading referrals program has been put together as an expression of thanks to people who introduce their friends and network to the excellent trading environment of Fxcelite. You can be an active trader or a social influencer, either way, our forex referral program is an easy and clear way for you to make some extra money while at the same time helping others get institutional-grade liquidity and advanced technology.
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl blur opacity-40 group-hover:opacity-80 transition duration-1000"></div>
              <button className="relative px-10 py-4 bg-white text-black font-bold text-base md:text-lg rounded-xl transition-all hover:scale-[1.03] active:scale-95 shadow-xl uppercase tracking-tight italic flex items-center gap-2">
                Get Your Referral Link <Sparkles size={20} className="ml-2 text-orange-600" />
              </button>
            </div>
            <p className="text-orange-400 text-sm font-bold uppercase tracking-[0.2em] italic animate-pulse">
              Good things are meant to be shared. Start earning today!
            </p>
          </div>
        </div>
      </section>

      {/* --- SECTION 1: GLOBAL MEMBERSHIP --- */}
      <section className="py-24 relative border-y border-white/10 bg-white/[0.02] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
               <div className="space-y-6">
                 <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight leading-tight italic border-l-4 border-orange-500 pl-4">Network <br/> Synergy</h2>
                 <div className="space-y-6 text-base text-white/80 leading-relaxed font-light italic">
                   <p>
                     Instead of just sharing a link, when you refer and earn trading rewards at Fxcelite, you are basically giving your friends a membership at the global markets. The program is designed for everyone to get some benefit: your referrals obtain a Standard Account with premium features, and you gain referral rewards as trading commissions from their trades.
                   </p>
                   <div className="p-6 rounded-2xl bg-white/10 border-r-2 border-orange-500 backdrop-blur-xl text-white font-bold shadow-lg">
                     <h3 className="text-xl font-black mb-3 uppercase tracking-tight">How the Program Works</h3>
                     <p className="text-sm font-medium text-white/90">
                       Our forex broker referral system is completely automated and embedded in your client portal. We have simplified the process allowing you to concentrate on generating word of mouth and increasing your income.
                     </p>
                   </div>
                   <p>
                     The referral program is basically a simple "track and reward" one. As soon as your friend registers via your unique link and fulfills the first trading criteria, the rewards get automatically put into your account. This method guarantees that your work is always precisely tracked and suitably rewarded.
                   </p>
                 </div>
               </div>
            </div>

            <div className="relative group lg:sticky lg:top-32">
               <div className="absolute inset-0 bg-orange-500/20 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <div className="relative border border-white/20 shadow-2xl bg-[#0F172A] overflow-hidden rounded-3xl p-1">
                 <img 
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200" 
                    className="w-full h-[400px] object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 rounded-2xl"
                    alt="Social Integration"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent pointer-events-none"></div>
                 <div className="absolute bottom-6 left-6 right-6 p-6 bg-black/90 border border-orange-500/50 backdrop-blur-xl rounded-2xl shadow-xl">
                    <div className="w-8 h-1 bg-orange-500 mb-4"></div>
                    <p className="text-white/90 text-sm leading-relaxed font-medium italic">
                      "Help others get institutional-grade liquidity and advanced technology while earning rewards."
                    </p>
                    <div className="mt-4 flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-orange-500/20">
                        <Network size={18} className="text-orange-400 animate-pulse" />
                      </div>
                      <span className="text-orange-400 font-bold uppercase tracking-widest text-[10px] font-mono">Referral Node Active</span>
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: WHY JOIN (THE SOLAR GRID) --- */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase italic leading-tight">Why Join the Best <br/> Forex Referral Program?</h2>
            <p className="text-orange-400 text-sm font-bold uppercase tracking-[0.2em]">Continuous Rewards Platform</p>
            <p className="text-white/80 text-base max-w-2xl mx-auto font-light leading-relaxed italic border-t border-white/10 pt-4 mt-4">
              If you are looking to earn money with forex referrals, Fxcelite provides the most competitive and reliable platform in 2026.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Earn Trading Commissions", desc: "Enjoy continuous rewards based on the trading volume of the persons you refer.", icon: <TrendingUp /> },
              { title: "No Cap on Earnings", desc: "There is no restriction on the number of trading affiliate referrals you can make or earn.", icon: <Zap /> },
              { title: "Transparent Tracking", desc: "Track your referral status and your earning potential for your trading account live.", icon: <Activity /> },
              { title: "Marketing Support", desc: "Utilize the library of prepared banners and graphics to make your referrals effective.", icon: <Megaphone /> },
              { title: "Mutual Benefits", desc: "In most instances, you and the referred friend receive a welcome bonus.", icon: <Gift /> },
              { title: "Word of Mouth", desc: "Automated and embedded in your client portal, concentrating on generating word of mouth.", icon: <RefreshCw /> },
            ].map((item, i) => (
              <div key={i} className="group p-6 bg-white/[0.05] border border-white/10 hover:border-orange-500/50 transition-all duration-500 flex flex-col items-start text-left relative overflow-hidden rounded-2xl shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-b from-orange-500/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center text-orange-400 mb-5 border border-white/20 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-black transition-all">
                   {React.cloneElement(item.icon, { size: 24 })}
                </div>
                <h3 className="text-lg font-bold text-white mb-3 tracking-tight leading-tight uppercase italic">{item.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed font-light italic">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 3: KEY FEATURES (THE BENTO VAULT) --- */}
      <section className="py-24 bg-white/[0.02] border-y border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-600/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8 space-y-10">
               <div className="space-y-4">
                 <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase leading-tight italic underline decoration-orange-500 decoration-4 underline-offset-[8px]">Key Features of <br/> the Referral Program</h2>
                 <p className="text-base text-white/80 italic leading-relaxed font-light max-w-2xl pt-4">
                   Our client referral trading program is packed with features to help you succeed as a partner:
                 </p>
               </div>

               <div className="grid md:grid-cols-2 gap-5">
                 {[
                   { t: "Dedicated Link", d: "Permanent, unique URL that defines every user brought by you into the platform.", icon: <Link2 /> },
                   { t: "Real-time Analytics", d: "Know exactly who signs up and how far they are from the reward milestone.", icon: <Eye /> },
                   { t: "Auto Payments", d: "You do not have to request your referral rewards manually; they are instantly credited.", icon: <Zap /> },
                   { t: "Multi-Channel", d: "Share your link directly to WhatsApp, Telegram, or Facebook with one click.", icon: <Smartphone /> },
                   { t: "All Accounts Support", d: "Referrals have the option to open Micro, Standard, or even VIP accounts.", icon: <Layers /> },
                 ].map((feature, i) => (
                   <div key={i} className="group p-6 rounded-2xl bg-black/60 border border-white/10 hover:border-orange-500/40 transition-all duration-500 relative shadow-xl backdrop-blur-xl">
                      <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-400 mb-4 border border-white/20 group-hover:scale-110 transition-transform">
                        {React.cloneElement(feature.icon, { size: 20 })}
                      </div>
                      <h4 className="text-base font-bold text-white mb-2 uppercase tracking-tight italic leading-tight">{feature.t}</h4>
                      <p className="text-white/80 text-sm leading-relaxed font-light italic">{feature.d}</p>
                   </div>
                 ))}
               </div>
            </div>

            <div className="lg:col-span-4 lg:sticky lg:top-32">
               <div className="relative p-8 rounded-3xl bg-[#1e293b] border border-orange-500/50 shadow-2xl overflow-hidden group">
                  <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform duration-1000">
                    <Award size={100} className="text-orange-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-6 tracking-tight uppercase border-b border-white/20 pb-4 italic">Rewards Hub</h3>
                  <div className="space-y-6 relative z-10">
                     <p className="text-base text-orange-400 font-bold leading-tight italic">
                       Turn your social circle into a source of income. Login to Refer a Friend and see how much you can earn!
                     </p>
                     <div className="text-sm text-white/80 leading-relaxed font-light italic">
                        <p>Our program is built on mutual success. Referrals get premium access, you get commissions.</p>
                     </div>
                     <button className="w-full py-4 rounded-xl bg-white text-black font-bold hover:bg-orange-500 hover:text-white transition-all text-sm shadow-xl shadow-orange-500/20 uppercase tracking-tight italic">
                        Login to Refer
                     </button>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: EXPLAINED (THE PILLAR HUD) --- */}
      <section className="py-24 relative bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase italic leading-tight">Forex Referral <br/> Program Explained</h2>
            <p className="text-orange-400 text-sm font-bold uppercase tracking-[0.2em] font-mono">Transmission Architecture</p>
            <p className="text-white/80 text-base font-light italic pt-2">We believe in keeping things simple. The program explained in three core pillars:</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 relative">
            {[
              { n: "01", t: "The Invite", d: "You share your unique link via social media, email, or direct message.", icon: <Megaphone /> },
              { n: "02", t: "The Qualification", d: "Your friend opens an Account, deposits, and executes minimum trades.", icon: <CheckCircle2 /> },
              { n: "03", t: "Reward", d: "Your referral rewards go directly into your account balance to trade or withdraw.", icon: <DollarSign /> },
            ].map((step, i) => (
              <div key={i} className="group relative p-8 rounded-3xl bg-white/[0.05] border border-white/10 hover:border-orange-500/50 transition-all duration-500 text-center shadow-xl mt-6 lg:mt-0">
                 <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-black border-2 border-orange-500/50 flex items-center justify-center font-bold text-white text-lg group-hover:bg-orange-500 group-hover:text-black transition-all shadow-[0_0_15px_#f97316]">
                    {step.n}
                 </div>
                 <div className="w-12 h-12 bg-orange-500/20 text-orange-400 flex items-center justify-center mx-auto mb-4 border border-white/20 group-hover:scale-110 transition-transform rounded-xl mt-2">
                   {React.cloneElement(step.icon, { size: 24 })}
                 </div>
                 <h4 className="text-xl font-bold text-white mb-3 tracking-tight leading-tight uppercase italic">{step.t}</h4>
                 <p className="text-sm text-white/80 leading-relaxed font-light italic">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 5: HOW TO EARN (STEPS) --- */}
      <section className="py-24 bg-[#020617] border-y border-white/10 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
             <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase leading-tight italic underline decoration-orange-500 decoration-4 underline-offset-[8px]">How to Earn Money</h2>
             <p className="text-white/90 text-sm font-bold uppercase tracking-[0.2em] italic pt-4">With Forex Referrals</p>
             <p className="text-white/80 text-base font-light italic max-w-2xl mx-auto">Getting started with our trading referrals program takes less than a minute:</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
             {[
               { t: "Login", d: "Login to your Fxcelite secure portal.", icon: <Lock /> },
               { t: "Get Link", d: "You will be able to copy your link from the referrals section.", icon: <Link2 /> },
               { t: "Share", d: "Forward this to your friends or post on social media.", icon: <Megaphone /> },
               { t: "Earn", d: "Get rewards for referring others after your friends begin trading.", icon: <DollarSign /> }
             ].map((item, i) => (
               <div key={i} className="flex flex-col items-center text-center space-y-4 group p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-orange-500/50 transition-colors">
                  <div className="w-16 h-16 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 border border-orange-500/50 group-hover:scale-110 transition-transform">
                     {React.cloneElement(item.icon, { size: 28 })}
                  </div>
                  <h4 className="text-lg font-bold text-white uppercase italic">{item.t}</h4>
                  <p className="text-white/80 text-sm font-light leading-relaxed italic">{item.d}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 6: SECURITY & AUDIENCE (ORBITAL PANELS) --- */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
             <div className="p-8 md:p-10 rounded-3xl bg-black border border-white/20 relative group overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform duration-1000">
                    <Shield size={180} className="text-orange-500" />
                </div>
                <div className="relative z-10 space-y-8">
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center text-orange-400 border border-orange-500/50 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
                         <Lock size={24} />
                      </div>
                      <h2 className="text-2xl font-bold text-white tracking-tight uppercase italic">Security & <br/> Fairness</h2>
                   </div>
                   <div className="text-base text-white/90 leading-relaxed font-light italic space-y-6">
                      <p>For the best experience in a forex referral program, we have strict policies against fraud and fair play.</p>
                      <div className="p-6 rounded-2xl bg-white/10 border-l-4 border-orange-500 italic font-medium text-white shadow-xl">
                         Only genuine referrals who have completed the standard KYC verification are rewarded. This ensures that all users continue to have a great experience in our system.
                      </div>
                   </div>
                </div>
             </div>

             <div className="space-y-10 lg:p-8">
                <div className="space-y-4 text-center lg:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight uppercase italic leading-tight">Who is the <br/> Program For?</h2>
                  <p className="text-orange-400 font-bold uppercase tracking-[0.2em] text-xs font-mono">Referral Network Profiles</p>
                </div>
                <div className="grid gap-4">
                   {[
                     { l: "Active Traders", d: "Who wish to offset trading costs by earning rewards.", icon: <Activity /> },
                     { l: "Community Leaders", d: "Educators who promote an excellent broker to students.", icon: <Users /> },
                     { l: "Social Influencers", d: "Harness capabilities to refer and earn on a global scale.", icon: <Megaphone /> },
                     { l: "Casual Users", d: "Share a fantastic experience with their inner circles.", icon: <Sparkles /> }
                   ].map((item, i) => (
                     <div key={i} className="flex gap-5 group/item items-center p-5 rounded-2xl bg-white/[0.05] border border-white/10 hover:bg-white/10 transition-all">
                       <div className="shrink-0 w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center text-orange-400 border border-orange-500/50 group-hover/item:scale-110 transition-transform">
                         {React.cloneElement(item.icon, { size: 20 })}
                       </div>
                       <div>
                         <span className="text-white text-lg font-bold uppercase tracking-tight italic">{item.l}</span>
                         <p className="text-white/80 text-sm font-light leading-relaxed italic mt-1">{item.d}</p>
                       </div>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 7: FINAL CTA (SOLAR GATE) --- */}
      <section className="py-24 bg-[#020617] text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 space-y-10">
           <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight uppercase leading-tight italic underline decoration-orange-500 decoration-4 underline-offset-[8px]">Top Choice</h2>
           <p className="text-base md:text-lg text-white/90 leading-relaxed font-light italic max-w-3xl mx-auto">
             With our concentration on refer and earn trading simplicity and the most transparent tracking in the industry, Fxcelite presents the best forex referral program of 2026.
           </p>
           <div className="pt-6 flex flex-col items-center gap-6">
              <div className="relative group">
                <div className="absolute -inset-2 bg-orange-500 rounded-2xl blur opacity-40 group-hover:opacity-80 transition duration-1000"></div>
                <button className="relative px-12 py-5 bg-white text-black font-bold text-lg rounded-xl transition-all shadow-[0_15px_40px_-15px_rgba(249,115,22,0.5)] uppercase tracking-tight italic hover:-translate-y-1">
                  Generate Referral Link
                </button>
              </div>
              <div className="space-y-4">
                <p className="text-orange-400 font-bold uppercase tracking-[0.3em] text-xs italic font-mono">Join the most rewarding network in forex!</p>
                <div className="flex justify-center gap-3">
                   <div className="w-8 h-[2px] bg-white/20"></div>
                   <div className="w-16 h-[2px] bg-orange-500 animate-pulse"></div>
                   <div className="w-8 h-[2px] bg-white/20"></div>
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* --- SECTION 8: FAQ (SOLAR ARCHITECTURE) --- */}
      <section className="py-24 border-t border-white/10 bg-black">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight uppercase italic underline decoration-orange-500 decoration-4 underline-offset-[8px]">Referral FAQ</h2>
            <p className="text-white/80 font-bold uppercase tracking-widest text-sm italic font-mono pt-4">Knowledge Base Omicron-4</p>
          </div>
          
          <div className="space-y-4">
            {[
              { q: "1. What are trading referrals?", a: "It is a program where you get rewards for inviting new users to sign up and trade in the Fxcelite platform." },
              { q: "2. How much does it cost to join?", a: "Joining our forex broker referral system is absolutely free. All you need is an active account." },
              { q: "3. How much can I earn?", a: "It is issued according to the number of friends or their trading volume. There is usually no upper limit." },
              { q: "4. When will I get my reward?", a: "Rewards normally are credited right after your friend fulfills the minimum deposit and/or trading volume." },
              { q: "5. Can I refer friends who already have an account?", a: "No, our online trading referrals only apply to new users who have never had an account with Fxcelite before." },
              { q: "6. Do I get a bonus too?", a: "Yes! Our program is structured to offer the new trader a welcome bonus too!" },
              { q: "7. Can I track referrals in real-time?", a: "Absolutely. With your dashboard, you will have the entire picture of your trading affiliate referrals." },
              { q: "8. Is there a limit to the number of friends?", a: "No, you can refer and earn rewards on as many people as you can successfully invite to the platform." },
              { q: "9. Can I use the rewards for trading?", a: "Yes, your referral rewards will be added to your balance and available to be withdrawn or traded." },
              { q: "10. What are the unique features?", a: "The unique feature of the best forex referral program is its transparency, simplicity, and reward system." },
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
    <div className={`rounded-2xl transition-all duration-500 overflow-hidden border border-white/10 ${
      isOpen ? 'bg-[#1e293b] shadow-lg border-orange-500/30' : 'bg-[#020617] hover:bg-white/10'
    }`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left group"
      >
        <span className={`font-bold text-sm md:text-base transition-colors tracking-tight uppercase italic ${isOpen ? 'text-white' : 'text-white/90 group-hover:text-white'}`}>
          {question}
        </span>
        <div className={`w-8 h-8 rounded-lg flex shrink-0 items-center justify-center transition-all duration-500 ml-4 ${
          isOpen ? 'bg-orange-500 text-black rotate-180 shadow-[0_0_15px_#f97316]' : 'bg-white/10 text-white/80 group-hover:bg-white/20'
        }`}>
            <ChevronDown size={16} />
        </div>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 text-white/80 text-sm md:text-base leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300 font-light italic">
          <div className="h-[1px] w-full bg-white/20 mb-4"></div>
          {answer}
        </div>
      )}
    </div>
  );
}