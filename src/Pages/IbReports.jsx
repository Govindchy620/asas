import React, { useState } from 'react';
import { 
  BarChart3, 
  FileText, 
  Download, 
  ShieldCheck, 
  Database, 
  Filter, 
  Mail, 
  LineChart, 
  PieChart, 
  Globe, 
  ChevronDown, 
  ArrowRight, 
  Lock, 
  TrendingUp, 
  Users, 
  Activity, 
  History, 
  Code,
  Sparkles,
  Terminal,
  Layers,
  Cpu,
  BadgePercent,
  Search,
  Briefcase
} from 'lucide-react';

export default function IbReports() {
  return (
    <div className="bg-[#0B0E14] text-white font-sans selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* --- HERO: THE DATA MONOLITH --- */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-32 overflow-hidden border-b border-white/10">
        {/* Animated Background Layers */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,#1e3a8a20,transparent_50%)]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 blur-[120px] rounded-full animate-pulse"></div>
          
          {/* Vertical Data Streams */}
          <div className="absolute inset-0 flex justify-around opacity-20 pointer-events-none">
            <div className="w-px h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent"></div>
            <div className="w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
            <div className="w-px h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent"></div>
            <div className="w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-white/20 bg-white/5 backdrop-blur-md rounded-lg mb-4">
            <Terminal size={14} className="text-blue-400" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-blue-400 italic">Advanced Analytics Terminal v9.2</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tight uppercase italic">
            IB <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-100 to-white">Reports</span>
          </h1>
          
          <p className="text-base md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light uppercase tracking-widest border-y border-white/10 py-6">
            Deep Data Insights for Professional Partners
          </p>

          <div className="max-w-3xl mx-auto text-sm md:text-base text-white/90 leading-relaxed font-light mb-12 px-6">
            Running a successful partnership requires more than just gut feeling. Fxcelite IB reports suite is created to give Introducing Brokers (IBs) deep insights of every aspect of their business. Starting from overview summaries up to detailed forex IB reports, our platform offers the transparency and level of detail that can be used in professional auditing, tax filing, and growth strategies.
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="relative group">
              <div className="absolute -inset-1 bg-blue-500 rounded-2xl blur opacity-40 group-hover:opacity-80 transition duration-1000"></div>
              <button className="relative px-10 py-4 bg-white text-black font-bold text-base md:text-lg rounded-xl uppercase tracking-tight hover:bg-blue-600 hover:text-white transition-all active:scale-95 shadow-xl flex items-center gap-2">
                Access Your IB Reports <BarChart3 size={20} className="ml-2" />
              </button>
            </div>
            <p className="text-blue-400 text-sm font-bold uppercase tracking-[0.2em] italic font-mono animate-pulse">
              [ Turn insights into actionable growth today ]
            </p>
          </div>
        </div>
      </section>

      {/* --- SECTION 1: THE DATA STORY --- */}
      <section className="py-24 relative bg-[#0D1017]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
               <div className="space-y-6">
                 <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight leading-tight italic border-l-4 border-blue-600 pl-4">What Information <br/> Is Included?</h2>
                 <div className="space-y-6 text-base text-white/80 leading-relaxed font-light italic">
                   <p>
                     Our introducing broker reports are not just about figures. They depict a story of how your network performed, thus giving you the chance to see which marketing channels brought results and which client segments were the most profitable. No matter if you want to monitor IB earnings online or dissect the trading patterns of your referrals, our reporting system furnishes the data you require in a simple, exportable format.
                   </p>
                   <p className="text-white/90 font-medium not-italic bg-white/5 p-4 rounded-xl border border-white/10">
                     A professional IB Performance Reports Portal should be a place where every question you have about your business is answered. At Fxcelite, we offer a range of reports that can meet all your needs:
                   </p>
                 </div>
               </div>

               <div className="grid gap-4">
                 {[
                   { l: "IB Commission Reports", d: "A line-by-line report detailing every cent earned, broken down by different trades, instruments, and referral IDs.", icon: <BadgePercent className="text-blue-400"/> },
                   { l: "Client Activity Reports", d: "Track the health of your network with information on total deposits, active trading days, and net turnover.", icon: <Activity className="text-blue-400"/> },
                   { l: "Forex Affiliate Reports", d: "Monitor your conversion rates as well as the performance of certain referral links or marketing campaigns.", icon: <Globe className="text-blue-400"/> },
                   { l: "IB Earnings Reports", d: "A historical record of your earnings to assist in projecting what your earnings will be in the future.", icon: <History className="text-blue-400"/> }
                 ].map((item, i) => (
                   <div key={i} className="flex gap-5 group items-start p-6 bg-white/5 border border-white/10 hover:bg-white/10 transition-all rounded-2xl">
                      <div className="shrink-0 w-12 h-12 flex items-center justify-center bg-blue-500/20 border border-blue-500/50 rounded-xl group-hover:scale-110 transition-transform">
                         {item.icon}
                      </div>
                      <div>
                        <span className="text-white text-lg font-bold uppercase tracking-tight italic block mb-1">{item.l}</span>
                        <p className="text-white/70 text-sm font-light leading-relaxed">{item.d}</p>
                      </div>
                   </div>
                 ))}
               </div>
            </div>

            <div className="relative group lg:sticky lg:top-32">
               <div className="absolute inset-0 bg-blue-500/20 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <div className="relative border border-white/20 shadow-2xl bg-[#0B0E2A] p-1 rounded-3xl overflow-hidden">
                 <img 
                    src="https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=1200" 
                    className="w-full h-[400px] object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 rounded-2xl"
                    alt="Institutional Data Center"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14] via-[#0B0E14]/20 to-transparent pointer-events-none"></div>
                 <div className="absolute bottom-6 left-6 right-6 p-6 bg-black/90 border border-white/20 backdrop-blur-xl shadow-xl rounded-xl">
                    <p className="text-white/90 text-sm leading-relaxed font-medium italic border-b border-white/20 pb-4 mb-4">
                      "Knowledge is profit. turn insights into actionable growth today!"
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-blue-500/30 rounded-lg">
                        <Layers size={18} className="text-blue-400" />
                      </div>
                      <span className="text-blue-400 font-mono font-bold uppercase tracking-[0.2em] text-[10px]">Real-Time Pulse Sync: Online</span>
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: WHY DETAILED (THE HUD GRID) --- */}
      <section className="py-24 relative border-y border-white/10 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase italic leading-tight">Why Use Detailed <br/> Forex IB Reports?</h2>
            <p className="text-blue-400 text-sm font-bold uppercase tracking-[0.2em] font-mono">[ Competitive Edge Acquisition ]</p>
            <p className="text-white/80 text-base max-w-2xl mx-auto font-light leading-relaxed italic pt-4">
              In a high-speed market, having access to real-time IB commission reports is a competitive advantage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/20 border border-white/20 rounded-xl overflow-hidden shadow-xl">
            {[
              { title: "Audit Precision", desc: "Analyze your earnings by comparing detailed reports from a forex IB with your clients' trading volumes.", icon: <ShieldCheck /> },
              { title: "Performance Optimization", desc: "Find your \"Power Traders\" via client activity reports and assist them accordingly.", icon: <Activity /> },
              { title: "Easy Tax Filing", desc: "Download the commission reports from IB in CSV or PDF formats to present to your financial advisors.", icon: <FileText /> },
              { title: "Sub-IB Transparency", desc: "Access sub-IB performance reports, providing an overview of the overrides earned through your network.", icon: <Layers /> },
            //   { title: "Real-Time Access", desc: "Have access to your IB earnings online at any time. You will never be in the dark about your business.", icon: <Zap /> },
              { title: "Master Your Data", desc: "Depict a story of how your network performed, turning insights into actionable growth.", icon: <Database /> },
            ].map((item, i) => (
              <div key={i} className="group p-8 bg-[#0B0E14] hover:bg-blue-900/20 transition-all duration-500 flex flex-col items-start relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-125 transition-transform duration-700">
                   {React.cloneElement(item.icon, { size: 100, className: "text-blue-400" })}
                </div>
                <div className="w-12 h-12 bg-blue-500/20 flex items-center justify-center text-blue-400 mb-6 border border-blue-500/50 group-hover:bg-blue-500 group-hover:text-white transition-all rounded-lg">
                   {React.cloneElement(item.icon, { size: 24 })}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-tight italic relative z-10">{item.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed font-medium relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 3: THE ENGINE (DATA BENTO) --- */}
      <section className="py-24 relative bg-[#0B0E14] overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[800px] h-[400px] bg-blue-900/10 blur-[120px] rounded-full -rotate-12 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8 space-y-10">
               <div className="space-y-4">
                 <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase leading-tight italic underline decoration-blue-600 decoration-4 underline-offset-[8px]">Key Features of <br/> the Reporting Engine</h2>
                 <p className="text-base text-white/80 italic leading-relaxed font-light max-w-2xl pt-4">
                   Our IB reports with client activity are built with the same precision as our Advanced Charts.
                 </p>
               </div>

               <div className="grid md:grid-cols-2 gap-5">
                 {[
                   { t: "Dynamic Filtering", d: "Use your IB reports to search by date ranges, client groups, or individual trade IDs.", icon: <Filter /> },
                   { t: "Multi-Format Export", d: "Reports can be instantly exported in CSV, XLSX, or PDF formats for external analysis.", icon: <Download /> },
                   { t: "Automated Scheduling", d: "Configure your Forex Affiliate reports to be emailed to you on a daily, weekly, or monthly basis.", icon: <Mail /> },
                   { t: "Visual Data Analytics", d: "From Tables to Charts to give a visual representation of your IB performance reports.", icon: <PieChart /> },
                   { t: "Global Currency Support", d: "Access your IB earning reports in any local currency that suits you best.", icon: <Globe /> },
                 ].map((feature, i) => (
                   <div key={i} className="group p-6 bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all duration-300 relative shadow-lg rounded-2xl overflow-hidden">
                      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                        {React.cloneElement(feature.icon, { size: 60, className: "text-white" })}
                      </div>
                      <div className="w-10 h-10 bg-blue-500/20 flex items-center justify-center text-blue-400 mb-5 border border-blue-500/40 group-hover:bg-blue-500 group-hover:text-white transition-all rounded-lg relative z-10">
                        {React.cloneElement(feature.icon, { size: 20 })}
                      </div>
                      <h4 className="text-base font-bold text-white mb-2 uppercase tracking-tight italic relative z-10">{feature.t}</h4>
                      <p className="text-white/80 text-sm leading-relaxed font-light relative z-10">{feature.d}</p>
                   </div>
                 ))}
               </div>
            </div>

            <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-6">
               <div className="relative p-8 bg-black border border-white/20 shadow-2xl overflow-hidden group rounded-3xl">
                  <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform duration-1000">
                    <Database size={100} className="text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-6 tracking-tight uppercase border-b border-white/20 pb-4 font-mono">Archive Access</h3>
                  <div className="space-y-6 relative z-10">
                     <p className="text-base text-blue-400 font-bold leading-tight italic uppercase">
                       Data-driven partners grow faster. Login now to explore.
                     </p>
                     <div className="text-sm text-white/80 leading-relaxed font-light italic border-l-2 border-blue-600 pl-4">
                        <p>Access your transparent and permanent business trail from anywhere in the world.</p>
                     </div>
                     <button className="w-full py-4 bg-white text-black font-bold hover:bg-blue-600 hover:text-white transition-all text-sm uppercase tracking-tight italic rounded-xl shadow-lg">
                        Explore Reports
                     </button>
                  </div>
               </div>
               
               <div className="p-4 bg-blue-900/20 border border-blue-500/40 text-center rounded-xl">
                 <p className="text-blue-300 text-xs font-bold uppercase tracking-[0.2em] italic font-mono animate-pulse">System Status: Nominal</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: HOW TO DOWNLOAD (THE COMMAND TERMINAL) --- */}
      <section className="py-24 relative bg-black border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase italic leading-tight">How to Download <br/> IB Commission Reports</h2>
            <p className="text-blue-400 text-sm font-bold uppercase tracking-[0.2em] font-mono">Extraction Sequence</p>
            <p className="text-white/80 text-base font-light italic pt-4">Getting your data out of the system is a quick 3-step process:</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 relative">
            {[
              { n: "01", t: "Select Report", d: "Navigate to the 'Reports' tab and select either IB commission or client activity reports.", icon: <Search /> },
              { n: "02", t: "Apply Filters", d: "Define the time period and particular metrics you want to analyze.", icon: <Filter /> },
              { n: "03", t: "Export", d: "Click the download icon to get your detailed forex IB reports in your preferred format.", icon: <Download /> },
            ].map((step, i) => (
              <div key={i} className="group relative p-8 bg-[#0B0E14] border border-white/10 hover:border-blue-500/50 transition-all duration-500 text-center shadow-xl rounded-3xl mt-6 lg:mt-0">
                 <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-black border-2 border-white/20 flex items-center justify-center font-bold text-white text-sm group-hover:text-blue-400 group-hover:border-blue-500 transition-all rounded-full">
                    {step.n}
                 </div>
                 <div className="w-12 h-12 bg-blue-500/20 text-blue-400 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform rounded-xl mt-2">
                   {React.cloneElement(step.icon, { size: 24 })}
                 </div>
                 <h4 className="text-xl font-bold text-white mb-3 tracking-tight leading-tight uppercase italic">{step.t}</h4>
                 <p className="text-sm text-white/80 leading-relaxed font-medium italic">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 5: SECURITY & AUDIENCE (THE ARCHIVE PANELS) --- */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
             <div className="p-8 md:p-10 bg-[#0B0E14] border border-white/20 relative group overflow-hidden shadow-2xl rounded-3xl">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform duration-1000">
                    <ShieldCheck size={180} className="text-blue-500" />
                </div>
                <div className="relative z-10 space-y-8">
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-600 flex items-center justify-center text-white rounded-xl shadow-lg">
                         <Lock size={24} />
                      </div>
                      <h2 className="text-2xl font-bold text-white tracking-tight uppercase italic underline decoration-blue-500 decoration-4 underline-offset-[8px]">Security & <br/> Confidentiality</h2>
                   </div>
                   <div className="text-base text-white/90 leading-relaxed font-light italic space-y-6">
                      <p>We appreciate the fact that an IB report holds critical business intelligence information. We provide access to our secure platform of IB performance reports, which uses the highest standards of encryption and 2FA security technology.</p>
                      <div className="p-6 bg-white/10 border border-white/20 italic font-medium text-white shadow-xl font-mono rounded-xl">
                        We maintain complete confidentiality with your forex affiliate business reports, accessible only to our company and you as the business enterprise.
                      </div>
                   </div>
                </div>
             </div>

             <div className="space-y-10 lg:p-8">
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight uppercase italic leading-tight">Who Needs Detailed <br/> IB Reports?</h2>
                  <p className="text-blue-400 font-bold uppercase tracking-[0.2em] text-xs font-mono">[ Advanced Intelligence Profiles ]</p>
                </div>
                <div className="grid gap-4">
                   {[
                     { l: "Professional IBs", d: "Need to track earnings online to manage a large-scale corporate entity.", icon: <Briefcase /> },
                     { l: "Digital Marketers", d: "Using reports to compute their Return on Ad Spend (ROAS).", icon: <Globe /> },
                     { l: "Fund Managers", d: "Need to provide reports which include information on client activity.", icon: <PieChart /> },
                     { l: "New Partners", d: "Who want to see real-time reports to check their first referrals.", icon: <Sparkles /> }
                   ].map((item, i) => (
                     <div key={i} className="flex gap-5 group/item items-center p-5 bg-white/5 border-r-4 border-r-transparent hover:border-r-blue-500 transition-all border border-white/10 rounded-2xl">
                       <div className="shrink-0 w-12 h-12 bg-blue-500/20 flex items-center justify-center text-blue-400 border border-blue-500/40 group-hover/item:scale-110 transition-transform rounded-xl">
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

      {/* --- SECTION 6: WHY Fxcelite (IMAGE GRID) --- */}
      <section className="py-24 bg-black text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 space-y-10">
           <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase leading-tight italic">BACK OFFICE <br/> <span className="text-blue-400 underline decoration-white decoration-4">EXCELLENCE</span></h2>
           <p className="text-base md:text-lg text-white/90 leading-relaxed font-light italic max-w-3xl mx-auto">
             Therefore, with our focus on in-depth forex IB reports, as well as the ability to easily download IB commission reports, Fxcelite has the most comprehensive back office available in the industry. We offer the clarity you need to successfully maintain a profitable partnership.
           </p>
           <div className="pt-6 flex flex-col items-center gap-6">
              <div className="relative group">
                <div className="absolute -inset-2 bg-blue-600 rounded-2xl blur opacity-40 group-hover:opacity-80 transition duration-1000"></div>
                <button className="relative px-12 py-4 bg-white text-black font-bold text-lg transition-all shadow-[0_15px_40px_-15px_rgba(30,58,138,0.5)] uppercase tracking-tight italic rounded-xl hover:-translate-y-1">
                  Check Your IB Reports
                </button>
              </div>
              <div className="space-y-4">
                <p className="text-blue-400 font-bold uppercase tracking-[0.2em] text-xs italic font-mono">Master your data. turn insights into actionable growth today!</p>
                <div className="flex justify-center gap-3">
                   <div className="w-8 h-[2px] bg-white/20"></div>
                   <div className="w-16 h-[2px] bg-blue-500 animate-pulse"></div>
                   <div className="w-8 h-[2px] bg-white/20"></div>
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* --- SECTION 7: FAQ (TERMINAL STYLE) --- */}
      <section className="py-24 border-t border-white/10 bg-[#080B11]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight uppercase italic font-mono underline decoration-blue-500 decoration-4 underline-offset-[8px]">[ KNOWLEDGE BASE ]</h2>
            <p className="text-white/80 font-bold uppercase tracking-widest text-sm italic font-mono pt-4">Technical Archive Sigma-12</p>
          </div>
          
          <div className="space-y-px bg-white/10 border border-white/20 rounded-2xl overflow-hidden shadow-xl">
            {[
              { q: "1. What are IB reports?", a: "They are comprehensive financial and activity statements that enable Introducing Brokers to monitor their commissions and performance of their clients." },
              { q: "2. How frequently is the IB commission report updated?", a: "Our real-time IB commission reports update once the trades of your referrals are closed." },
              { q: "3. Can I download my reports for tax purposes?", a: "Yes, you can download IB commission reports in PDF or CSV format, which are great for bookkeeping and your tax filings." },
              { q: "4. Can I see the activity of my sub-IBs?", a: "Yes, the IB performance reports include a section for multi-tier overrides so you can track your sub-partner network." },
              { q: "5. How far back can I track IB earnings online?", a: "We keep your forex IB reports on file for the lifetime of your partnership with Fxcelite." },
              { q: "6. What does the IB client activity report include?", a: "It will include all client deposits, trading volume, and active trades, listing all of your clients that you have referred to." },
              { q: "7. Are the reports secure?", a: "Absolutely. Your IB reports are safe with us, securely encrypted at 256 bits, and only accessible to you via your authenticated login." },
              { q: "8. Can I automate my report delivery?", a: "Yes, it is possible to automate the delivery of your forex affiliate reports to your email at any schedule you desire." },
              { q: "9. Why does a certain commission I made fail to appear on my report?", a: "Commissions are normally credited when a trade closes. If still doubting, look at your detailed forex IB reports filters or contact support." },
              { q: "10. Do I need special software to view the reports?", a: "No, you can view your IB reports either by accessing them from your browser or by utilizing Excel/Adobe reader after downloading." },
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
      isOpen ? 'bg-[#1e293b]' : 'bg-[#0B0E14] hover:bg-white/5'
    }`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left group"
      >
        <span className={`font-bold text-sm md:text-base transition-colors tracking-tight uppercase italic ${isOpen ? 'text-white' : 'text-white/90 group-hover:text-white'}`}>
          {question}
        </span>
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-500 ml-4 ${
          isOpen ? 'bg-blue-600 text-white rotate-180 shadow-[0_0_15px_#2563eb]' : 'bg-white/10 text-white/80 group-hover:bg-white/20'
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