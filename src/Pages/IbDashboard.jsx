import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  BarChart4, 
  Network, 
  ShieldCheck, 
  Cpu, 
  Globe2, 
  Layers3, 
  Activity, 
  ArrowRight, 
  ChevronDown, 
  Target, 
  Users2, 
  Lock, 
  FileText, 
  Zap, 
  TrendingUp, 
  Database, 
  MousePointerSquareDashed, 
  Megaphone,
  BellRing,
  PieChart,
  GitBranch,
  SearchCode,
  Briefcase,
  RefreshCw
} from 'lucide-react';

export default function IbDashboard() {
  return (
    <div className="bg-[#020617] text-white font-sans selection:bg-teal-500/30 overflow-x-hidden">
      
      {/* --- HERO: THE QUANTUM COMMAND --- */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-2 pb-3 overflow-hidden">
        {/* Technical Grid Overlay */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#2dd4bf05_1px,transparent_1px),linear-gradient(to_bottom,#2dd4bf05_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>
        
        {/* Data Stream Accents */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-teal-500/5 blur-[160px] rounded-full rotate-45"></div>
        <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-teal-500/20 to-transparent animate-pulse"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm border border-teal-500/30 bg-teal-500/10 backdrop-blur-xl mb-8 animate-fade-in">
              <Cpu size={14} className="text-teal-400" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-teal-400">Node Management v7.2-IB</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tight mb-6 uppercase italic">
              IB Dashboard <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-white to-teal-200">Advanced</span>
            </h1>
            
            <p className="text-base md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light mb-8 uppercase tracking-widest italic font-mono">
              Advanced Client & Commission Management for Partners
            </p>

            <div className="max-w-3xl mx-auto text-sm md:text-base text-white/90 leading-relaxed font-light mb-12 px-6 py-8 border border-white/20 bg-white/[0.05] backdrop-blur-3xl rounded-3xl relative shadow-2xl group overflow-hidden">
               <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform">
                 <GitBranch size={80} className="text-teal-400" />
               </div>
               In the affiliate marketing and partnership business, data is the most essential resource to have at your disposal. The Fxcelite IB dashboard is a sophisticated, highly efficient control panel that enables Introducing Brokers (IBs) to get a granular look at their business down to each detail. Our forex IB dashboard offers the level of transparency necessary for you to easily scale your network by handling only a few hours of daily work and still observing multi-tier earnings along with client activities in real time.
            </div>

            <div className="flex flex-col items-center gap-6">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-emerald-600 rounded-2xl blur opacity-40 group-hover:opacity-80 transition duration-1000"></div>
                <button 
                  onClick={() => window.open('https://trade.fxcelite.com/login', '_blank')}
                  className="relative px-10 py-4 bg-white text-black font-bold text-base md:text-lg rounded-xl transition-all hover:scale-[1.02] active:scale-95 shadow-xl uppercase tracking-tight flex items-center gap-2 italic">
                  Access Your IB Dashboard <LayoutDashboard size={20} className="ml-2" />
                </button>
              </div>
              <p className="text-teal-400 text-sm font-bold uppercase tracking-[0.2em] italic animate-pulse font-mono">
                [ Monitor your earnings in real-time today ]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 1: ALL-IN-ONE ENGINE --- */}
      <section className="py-24 relative border-y border-white/10 bg-white/[0.02] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
               <div className="space-y-6">
                 <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight leading-tight italic border-l-4 border-teal-500 pl-4">What is an IB Client <br/> Management Dashboard?</h2>
                 <div className="space-y-6 text-base text-white/90 leading-relaxed font-light italic">
                   <p>
                     We have designed our IB partner dashboard following an "all-in-one" concept. If you want to be able to handle your leads or calculate your rebates effortlessly, simply use just one tool that does it all. No matter if you are a single partner or operating a huge multi-level network, our IB commission dashboard will spare you the time spent on the work chores thus allowing you to concentrate on your main activities such as building up solid relationships and enlarging your area.
                   </p>
                   <div className="p-6 rounded-2xl bg-teal-500/10 border border-teal-500/30 backdrop-blur-xl relative overflow-hidden shadow-lg">
                      <div className="absolute top-0 right-0 p-4 opacity-10">
                        <Activity size={40} className="text-white" />
                      </div>
                      <p className="text-white font-bold text-lg leading-tight mb-3 uppercase tracking-tight italic">Granular Control</p>
                      <p className="text-white/80 text-sm">
                        In the affiliate marketing and partnership business, data is the most essential resource to have at your disposal. The FXCElite IB dashboard is a sophisticated, highly efficient control panel that enables Introducing Brokers (IBs) to get a granular look at their business down to each detail.
                      </p>
                   </div>
                   <p>
                     Our forex IB dashboard offers the level of transparency necessary for you to easily scale your network by handling only a few hours of daily work and still observing multi-tier earnings along with client activities in real time. We have designed our IB partner dashboard following an "all-in-one" concept.
                   </p>
                 </div>
               </div>
            </div>

            <div className="relative group lg:sticky lg:top-32">
               <div className="absolute inset-0 bg-teal-500/20 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <div className="relative border border-white/20 shadow-2xl bg-[#0a1024] overflow-hidden rounded-3xl p-1">
                 <img 
                    src="https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=1200" 
                    className="w-full h-[400px] object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 rounded-2xl"
                    alt="Data Visualization"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent pointer-events-none"></div>
                 <div className="absolute bottom-6 left-6 right-6 p-6 bg-black/90 border border-teal-500/50 backdrop-blur-xl rounded-xl shadow-xl">
                    <p className="text-white/90 text-sm leading-relaxed font-medium italic font-mono uppercase tracking-widest border-b border-teal-500/30 pb-4 mb-4">
                      System Node: Partner Interface
                    </p>
                    <p className="text-white text-base font-bold italic leading-tight">
                      "Handle your leads or calculate your rebates effortlessly, simply use just one tool that does it all."
                    </p>
                    <div className="mt-4 flex items-center gap-3">
                      <div className="p-2 bg-teal-500/20 rounded-lg">
                        <TrendingUp size={16} className="text-teal-400" />
                      </div>
                      <span className="text-teal-400 font-bold uppercase tracking-widest text-[10px] font-mono">Real-Time Sync Protocol Active</span>
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: WHY DASHBOARD (THE MODULAR RACK) --- */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase italic leading-tight">Why Use a Real-Time <br/> IB Commission Dashboard?</h2>
            <p className="text-teal-400 text-sm font-bold uppercase tracking-[0.2em] font-mono">[ Zero Variance Transparency ]</p>
            <p className="text-white/80 text-base max-w-2xl mx-auto font-light italic mt-4">
              Transparency is the foundation of a successful partnership. A real-time IB commission dashboard ensures that there are never any disputes about your payouts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/20 border border-white/20 shadow-xl rounded-xl overflow-hidden">
            {[
              { title: "Instant Rebate Tracking", desc: "See your IB earnings dashboard refreshed with a new update every time a referred client completes a trade.", icon: <Zap /> },
              { title: "Multi-Tier Visibility", desc: "Have a forex IB dashboard at your disposal with the help of reports that indicate the exact amount of money you make from your own referrals and from your sub-IB network.", icon: <Layers3 /> },
              { title: "Automated Payouts", desc: "We handle multi-level commission payments accurately without delay thanks to our system that instantly calculates complex multi-level commissions.", icon: <RefreshCw /> },
              { title: "Client Activity Monitoring", desc: "You can even use the IB client management dashboard for tracking First-Time Deposits (FTDs) and days with active trading.", icon: <Activity /> },
              { title: "Marketing Efficiency", desc: "Know exactly which referral links are giving you the best quality leads by following them.", icon: <Target /> },
              { title: "Zero Dispute Node", desc: "Foundation of a successful partnership. Never any disputes about your payouts.", icon: <ShieldCheck /> },
            ].map((item, i) => (
              <div key={i} className="group p-8 bg-[#020617] hover:bg-teal-500/10 transition-all duration-300 flex flex-col items-start relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-[0.02] group-hover:scale-125 transition-transform duration-700">
                   {React.cloneElement(item.icon, { size: 100, className: "text-white" })}
                </div>
                <div className="w-12 h-12 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400 mb-5 border border-teal-500/30 group-hover:bg-teal-500 group-hover:text-black transition-all">
                   {React.cloneElement(item.icon, { size: 24 })}
                </div>
                <h3 className="text-lg font-bold text-white mb-3 uppercase tracking-tight italic leading-tight relative z-10">{item.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed font-light italic relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 3: KEY FEATURES (THE DATA BLADES) --- */}
      <section className="py-24 bg-white/[0.02] border-y border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8 space-y-10">
               <div className="space-y-4">
                 <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase leading-tight italic underline decoration-teal-500 decoration-4 underline-offset-[8px]">Key Features of the <br/> Partner Dashboard</h2>
                 <p className="text-base text-white/80 italic leading-relaxed font-light pt-4">
                   Our IB dashboard designed specifically for our forex partners is chock-full of institutional-grade tools to enable you to run your business like a pro:
                 </p>
               </div>

               <div className="grid md:grid-cols-2 gap-5">
                 {[
                   { t: "Commission Breakdown", d: "Detailed reports containing rebates paid on individual instruments.", icon: <PieChart /> },
                   { t: "Multi Level Hierarchy", d: "A graphical tree that permits the administration of clients and sub-IBs.", icon: <GitBranch /> },
                   { t: "Dynamic Analytics", d: "Use interactive charts to view your growth trends, such as your deposits.", icon: <SearchCode /> },
                   { t: "Branded Tools", d: "Access banners, landing pages, and tracking IDs through the dashboard.", icon: <Megaphone /> },
                   { t: "Real-Time Alerts", d: "Get alerted for new client sign ups or high-value funding activity.", icon: <BellRing /> },
                 ].map((feature, i) => (
                   <div key={i} className="group p-6 bg-black border border-white/10 hover:border-teal-500/50 transition-all duration-300 relative shadow-xl rounded-2xl">
                      <div className="w-12 h-12 bg-teal-500/20 flex items-center justify-center text-teal-400 mb-5 border border-teal-500/30 group-hover:scale-110 transition-transform rounded-xl">
                        {React.cloneElement(feature.icon, { size: 24 })}
                      </div>
                      <h4 className="text-base font-bold text-white mb-2 uppercase tracking-tight italic leading-tight">{feature.t}</h4>
                      <p className="text-white/80 text-sm leading-relaxed font-light italic">{feature.d}</p>
                   </div>
                 ))}
               </div>
            </div>

            <div className="lg:col-span-4 lg:sticky lg:top-32">
               <div className="relative p-8 bg-black border border-teal-500/50 shadow-[0_0_50px_-10px_rgba(45,212,191,0.3)] group rounded-3xl overflow-hidden">
                  <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform duration-1000">
                    <Database size={100} className="text-teal-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-6 tracking-tight uppercase border-b border-white/20 pb-4 font-mono">Unlock Access</h3>
                  <div className="space-y-6 relative z-10">
                     <p className="text-base text-teal-400 font-bold leading-tight italic">
                       Empower your network with the best tools. Become an Fxcelite Partner and unlock your dashboard today.
                     </p>
                     <div className="text-sm text-white/80 leading-relaxed font-light italic">
                        <p>Scaling a multi-level network starts here. Take command of your partnership architecture.</p>
                     </div>
                     <button
                        onClick={() => window.open('https://trade.fxcelite.com/login', '_blank')}
                        className="w-full py-4 bg-white text-black font-bold hover:bg-teal-400 transition-all text-sm uppercase tracking-tight italic rounded-xl shadow-lg">
                        Unlock Dashboard
                     </button>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: HOW TO MANAGE (THE PIPELINE) --- */}
      <section className="py-24 bg-black relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase italic leading-tight">How to Manage Clients <br/> Using IB Dashboard</h2>
            <p className="text-teal-400 text-sm font-bold uppercase tracking-[0.2em] font-mono">Management Protocol Sequence</p>
            <p className="text-white/80 text-base font-light italic pt-4 max-w-2xl mx-auto">Running a successful IB business is a simple 3-step process within our portal:</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 relative">
            {[
              { n: "01", t: "Analyze", d: "You can use the IB earnings dashboard to view what your clients are trading the most.", icon: <Activity /> },
              { n: "02", t: "Optimize", d: "Help top performers get the support or resources they need.", icon: <TrendingUp /> },
              { n: "03", t: "Scale", d: "Use Your Forex IB dashboard to recruit sub-IBs, creating a passive income model.", icon: <GitBranch /> },
            ].map((step, i) => (
              <div key={i} className="group relative p-8 bg-[#020617] border border-white/10 hover:border-teal-500/50 transition-all duration-500 text-center shadow-xl rounded-3xl mt-6 lg:mt-0">
                 <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-black border-2 border-teal-500 flex items-center justify-center font-bold text-white text-lg shadow-[0_0_20px_-5px_rgba(45,212,191,0.5)] rounded-full group-hover:bg-teal-500 transition-colors">
                    {step.n}
                 </div>
                 <div className="w-16 h-16 bg-teal-500/20 text-teal-400 flex items-center justify-center mx-auto mb-6 border border-teal-500/30 group-hover:scale-110 transition-transform rounded-2xl mt-2">
                   {React.cloneElement(step.icon, { size: 32 })}
                 </div>
                 <h4 className="text-xl font-bold text-white mb-3 tracking-tight leading-tight uppercase italic">{step.t}</h4>
                 <p className="text-sm text-white/80 leading-relaxed font-light italic">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 5: SECURITY (THE ENCRYPTED VAULT) --- */}
      <section className="py-24 border-y border-white/10 bg-[#020617] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
             <div className="p-8 md:p-10 bg-black border border-white/20 relative group overflow-hidden shadow-2xl rounded-3xl">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform duration-1000">
                    <ShieldCheck size={180} className="text-teal-500" />
                </div>
                <div className="relative z-10 space-y-8">
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-teal-500/20 flex items-center justify-center text-white shadow-[0_0_20px_rgba(45,212,191,0.4)] rounded-xl border border-teal-500/50 group-hover:bg-teal-500 transition-all">
                         <Lock size={24} />
                      </div>
                      <h2 className="text-2xl font-bold text-white tracking-tight uppercase italic">Security & <br/> Transparency</h2>
                   </div>
                   <div className="text-base text-white/90 leading-relaxed font-light italic space-y-6">
                      <p>A secure IB Partner Dashboard is crucial for the safety of your precious business information. At Fxcelite, we achieve this through the use of 256-bit encryption and multi-factor authentication mechanisms.</p>
                      <div className="p-6 bg-white/10 border border-white/20 italic font-medium text-white shadow-lg font-mono rounded-xl">
                        Our IB Commission Dashboard for forex is audited regularly to ensure the IB logic for the computation of your rebate is 100% accurate.
                      </div>
                   </div>
                </div>
             </div>

             <div className="space-y-10 lg:p-8">
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight uppercase italic leading-tight">Who is the <br/> Dashboard For?</h2>
                  <p className="text-teal-400 font-bold uppercase tracking-[0.2em] text-xs font-mono">[ Quantum Target Profiles ]</p>
                </div>
                <div className="grid gap-4">
                   {[
                     { l: "Professional IBs", d: "Manage high-volume networks require real-time commission dashboards.", icon: <Briefcase /> },
                     { l: "Affiliates", d: "Require a dashboard because they must know the traffic and conversion rates.", icon: <Target /> },
                     { l: "Fund Managers", d: "Track investors' account health effectively.", icon: <Activity /> },
                     { l: "Social Influencers", d: "Seeking an easy earnings tracker for promotional campaigns.", icon: <Megaphone /> }
                   ].map((item, i) => (
                     <div key={i} className="flex gap-5 group/item items-center p-5 bg-white/[0.05] border border-white/10 hover:border-teal-500/50 transition-all rounded-2xl">
                       <div className="shrink-0 w-12 h-12 bg-teal-500/20 flex items-center justify-center text-white border border-teal-500/30 group-hover/item:scale-110 transition-transform rounded-xl">
                         {React.cloneElement(item.icon, { size: 24 })}
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

      {/* --- SECTION 6: WHY Fxcelite (IMAGE GRID) --- */}
      <section className="py-24 bg-black text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 space-y-10">
           <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase leading-tight italic underline decoration-teal-500 decoration-4 underline-offset-[8px]">Quantum Partner</h2>
           <p className="text-base md:text-lg text-white/90 leading-relaxed font-light italic max-w-3xl mx-auto">
             With our focus on the provision of a Forex IB dashboard with reports and the most transparent IB commission dashboard in the industry, Fxcelite is the top choice for partners in the year 2026. We do not just give you a link; we give you a business suite.
           </p>
           <div className="pt-6 flex flex-col items-center gap-6">
              <div className="relative group">
                <div className="absolute -inset-2 bg-teal-500 rounded-2xl blur opacity-40 group-hover:opacity-80 transition duration-1000"></div>
                <button 
                  onClick={() => window.open('https://trade.fxcelite.com/register', '_blank')}
                  className="relative px-12 py-5 bg-white text-black font-bold text-lg transition-all shadow-[0_15px_40px_-15px_rgba(45,212,191,0.6)] uppercase tracking-tight italic hover:-translate-y-1 rounded-xl">
                  Sign Up as an IB Now
                </button>
              </div>
              <div className="space-y-4">
                <p className="text-teal-400 font-bold uppercase tracking-[0.2em] text-xs italic font-mono">Your growth is our priority. Experience the best today!</p>
                <div className="flex justify-center gap-3">
                   <div className="w-8 h-[2px] bg-white/30"></div>
                   <div className="w-16 h-[2px] bg-teal-400 animate-pulse"></div>
                   <div className="w-8 h-[2px] bg-white/30"></div>
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* --- SECTION 7: FAQ (CYBERPUNK STYLE) --- */}
      <section className="py-24 border-t border-white/10 bg-[#010208]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight uppercase italic font-mono underline decoration-teal-500 decoration-4 underline-offset-[8px]">[ PARTNER FAQ ]</h2>
            <p className="text-white/80 font-bold uppercase tracking-widest text-sm italic font-mono pt-4">Technical Knowledge Base</p>
          </div>
          
          <div className="space-y-px bg-white/20 border border-white/20 shadow-xl rounded-2xl overflow-hidden">
            {[
              { q: "1. What is an IB dashboard?", a: "It's a dedicated management portal for Introducing Brokers, showing referrals, commissions, and marketing performance." },
              { q: "2. Will I be able to view my commissions in real time?", a: "Yes, our IB commission real-time dashboard updates the very moment your referred clients close their trades." },
              { q: "3. Does the IB partner dashboard support sub-IBs?", a: "Of course. You can have unlimited tiers of sub-IBs and track your override from their activity." },
              { q: "4. Can I withdraw my earnings directly from the dashboard?", a: "Yes, you can transfer your Commissions to your Live Account for trading or request a Withdrawal to your bank." },
              { q: "5. Are there any marketing materials in this dashboard?", a: "Yes, the Forex affiliate's dashboard contains a small library of banners, landing pages, and tracking links you can use." },
              { q: "6. How do I know which link is performing best?", a: "Inside the IB dashboard, you are able to create multiple tracking IDs so you can pinpoint exactly where your leads are coming from." },
              { q: "7. Is the IB client management dashboard secure?", a: "Yes, we use bank-grade encryption and two-factor authentication to make your introducing broker dashboard secure." },
              { q: "8. Can I export my earnings reports?", a: "Yes, you can download detailed reports from your forex IB dashboard with reports in CSV or PDF format." },
              { q: "9. What is the difference between an IB and an affiliate?", a: "An affiliate usually gets a one-time CPA, while an IB receives ongoing rebates depending on the trading volume of their clients." },
              { q: "10. How do I access my IB partner dashboard?", a: "Once you are approved as a partner, you will be able to log in through the main Fxcelite portal and select the 'Partner' tab." },
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
    <div className={`transition-all duration-500 overflow-hidden ${
      isOpen ? 'bg-[#0B152A]' : 'bg-[#020617] hover:bg-white/5'
    }`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left group"
      >
        <span className={`font-bold text-sm md:text-base transition-colors tracking-tight uppercase italic ${isOpen ? 'text-white' : 'text-white/90 group-hover:text-white'}`}>
          {question}
        </span>
        <div className={`w-8 h-8 flex items-center justify-center shrink-0 transition-all duration-500 ml-4 rounded-lg ${
          isOpen ? 'bg-teal-500 text-black rotate-180 shadow-[0_0_15px_#2dd4bf]' : 'bg-white/10 text-white/80 group-hover:bg-white/20'
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