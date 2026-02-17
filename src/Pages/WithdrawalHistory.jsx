import React, { useState } from 'react';
import { 
  History, 
  Shield, 
  Zap, 
  Globe, 
  Activity, 
  Lock, 
  FileText, 
  Database, 
  CheckCircle2, 
  ArrowRight, 
  ChevronDown, 
  Search, 
  Download, 
  Clock, 
  Coins, 
  Briefcase, 
  Scale, 
  UserCheck, 
  FileSearch,
  Wallet,
  Calendar,
  TrendingUp,
  FileCheck,
  CreditCard,
  ExternalLink,
  Sparkles,
  Layers,
  ArrowUpRight,
  Eye
} from 'lucide-react';

export default function WithdrawalHistory() {
  return (
    <div className="bg-[#040715] text-white font-sans selection:bg-cyan-500/30 overflow-x-hidden">
      
      {/* --- HERO: THE ARCTIC LEDGER --- */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-32 overflow-hidden">
        {/* Shifting Aurora Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#22d3ee10,transparent_70%)]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-gradient-to-r from-cyan-500/10 via-purple-500/5 to-transparent blur-[120px] rounded-full rotate-12 animate-pulse"></div>
          <img 
            src="https://images.unsplash.com/photo-1454165833767-027ffea9e78b?auto=format&fit=crop&q=80&w=2070" 
            className="w-full h-full object-cover opacity-10"
            alt="Wealth Access"
          />
          {/* Crystalline Decor */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm border border-cyan-400/30 bg-cyan-400/10 backdrop-blur-xl mb-8 animate-fade-in">
            <History size={14} className="text-cyan-400" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400 italic">Profit Access Audit v13.0</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tight mb-6">
            Withdrawal <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-purple-400 italic uppercase">History</span>
          </h1>
          
          <p className="text-base md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light mb-8 uppercase tracking-widest italic">
            Track Your Trading Account Profit Access
          </p>

          <div className="max-w-3xl mx-auto text-sm md:text-base text-white/90 leading-relaxed font-light mb-12 px-6 py-8 border border-white/20 bg-white/[0.05] backdrop-blur-3xl shadow-2xl relative rounded-3xl group overflow-hidden">
             <div className="absolute top-0 left-0 p-6 opacity-10 group-hover:scale-110 transition-transform">
               <ArrowUpRight size={80} className="text-cyan-400" />
             </div>
             When you trade, the most important thing is to get your profits, and keeping an exact record of those profits is very important for your finances in the long run. Your withdrawal from your trading account history discloses a clear and open record of the times you have taken your funds out of the account.
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-3xl blur opacity-40 group-hover:opacity-80 transition duration-1000"></div>
              <button className="relative px-10 py-4 bg-white text-black font-bold text-base transition-all hover:bg-cyan-500 hover:text-white active:scale-95 shadow-xl uppercase tracking-tight italic flex items-center gap-3 rounded-2xl">
                View Your Withdrawal History <ArrowRight size={20} />
              </button>
            </div>
            <p className="text-cyan-400 text-sm font-bold uppercase tracking-[0.2em] italic animate-pulse">
              Review your success. Track your payouts now!
            </p>
          </div>
        </div>
      </section>

      {/* --- INTRO: THE TRANSPARENT PORTAL --- */}
      <section className="py-24 relative border-y border-white/10 bg-white/[0.02] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
               <div className="space-y-6">
                 <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight leading-tight italic border-l-4 border-cyan-500 pl-4">Accessible <br/> Transparency</h2>
                 <div className="space-y-6 text-base text-white/90 leading-relaxed font-light italic">
                   <p>
                     We at FXCElite are always committed to your peace of mind, so we have provided a 24/7 accessible, accurate, and safe forex withdrawal history portal.
                   </p>
                   <p className="text-white font-medium italic bg-white/10 p-5 border-r-2 border-purple-500 rounded-lg shadow-lg">
                     If you are checking the results of your monthly trading performance or need to get online trading withdrawal records for your financial reports, our safe client section is always there to help you with the information you want.
                   </p>
                   <p>
                     Each withdrawal transaction history, whether from a little profit take or a large capital transfer, is recorded with the highest level of accuracy.
                   </p>
                 </div>
               </div>
            </div>

            <div className="relative group lg:sticky lg:top-32">
               <div className="absolute inset-0 bg-cyan-500/20 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <div className="relative border border-white/20 shadow-2xl bg-[#0B0E2A] overflow-hidden rounded-2xl">
                 <img 
                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200" 
                    className="w-full h-[400px] object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    alt="Financial Terminal"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#040715] via-transparent to-transparent pointer-events-none"></div>
                 <div className="absolute bottom-6 left-6 right-6 p-6 bg-black/90 border border-white/20 backdrop-blur-xl rounded-xl">
                    <p className="text-white/90 text-sm leading-relaxed font-medium italic">
                      "Review your success. View Your Withdrawal History to track your payouts and manage your trading rewards!"
                    </p>
                    <div className="mt-4 grid grid-cols-2 gap-4">
                       <div className="p-3 border border-white/10 bg-white/5 rounded-lg">
                          <span className="block text-[10px] text-cyan-400 uppercase tracking-widest mb-1 font-bold">Audit Sync</span>
                          <span className="text-white font-mono text-xs italic">Live Pulse Active</span>
                       </div>
                       <div className="p-3 border border-white/10 bg-white/5 text-right rounded-lg">
                          <span className="block text-[10px] text-purple-400 uppercase tracking-widest mb-1 font-bold">Encryption</span>
                          <span className="text-emerald-500 font-mono text-xs italic">AES-256 Verified</span>
                       </div>
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- INFO LIST: METADATA HUD --- */}
      <section className="py-24 relative bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase italic leading-tight">What Information is <br/> in Your Records?</h2>
            <p className="text-cyan-400 text-sm font-bold uppercase tracking-[0.2em]">Comprehensive Profit Traceability</p>
            <p className="text-white/80 text-base max-w-2xl mx-auto font-light leading-relaxed italic">
              Your withdrawal records page is intended to provide you with a complete "paper trail" of your earnings.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-px bg-white/20 border border-white/20 shadow-xl rounded-xl overflow-hidden">
            {[
              { title: "Request Date & Time", desc: "When you entered your request to withdraw your account.", icon: <Calendar /> },
              { title: "Withdrawal Method", desc: "The channel through which users can withdraw their funds.", icon: <Wallet /> },
              { title: "Transaction ID", desc: "A unique ID for every entry in the withdrawal records.", icon: <FileCheck /> },
              { title: "Amount & Currency", desc: "The exact amount released from your trading balance.", icon: <Coins /> },
              { title: "Status", desc: "Real-time updates like “Processing,” “Approved,” etc.", icon: <Activity /> },
            ].map((item, i) => (
              <div key={i} className="group p-6 bg-[#040715] hover:bg-white/5 transition-all duration-300 flex flex-col items-center text-center relative overflow-hidden">
                <div className="w-12 h-12 bg-white/10 flex items-center justify-center text-white/80 mb-5 border border-white/20 group-hover:bg-cyan-400 group-hover:text-black group-hover:scale-110 transition-all rounded-lg">
                   {React.cloneElement(item.icon, { size: 24 })}
                </div>
                <h3 className="text-base font-bold text-white mb-2 tracking-tight leading-tight uppercase italic">{item.title}</h3>
                <p className="text-white/80 text-xs leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
             <p className="text-white/60 font-mono text-[10px] uppercase tracking-widest italic">
                [ As you access the details of your withdrawal transaction, these are the details you will get ]
             </p>
          </div>
        </div>
      </section>

      {/* --- WHY MONITOR: PROFIT BENTO --- */}
      <section className="py-24 bg-white/[0.02] border-y border-white/10 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase italic leading-tight underline decoration-purple-500 decoration-4 underline-offset-[8px]">Why Monitor <br/> Your History?</h2>
                <p className="text-base text-white/80 italic leading-relaxed font-light">
                  Keeping a record of your online trading withdrawal records is the hallmark of a professional trader.
                </p>
              </div>
              <div className="p-6 bg-cyan-500/10 border border-cyan-500/30 italic text-base leading-relaxed text-cyan-100 backdrop-blur-xl rounded-xl shadow-lg">
                "Our account gives you online access to withdraw history in case you need to prove income or funds."
              </div>
           </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
             {[
               { t: "Financial Accountability", d: "Easily view your withdrawal history to reconcile your bank or e-wallet statements.", icon: <Scale /> },
               { t: "Tax Compliance", d: "Take advantage of a tax compliance service that allows you to utilize your withdrawal history.", icon: <FileText /> },
               { t: "Performance Analysis", d: "To measure your overall profitability, compare your payout frequency with deposits.", icon: <TrendingUp /> },
               { t: "Security Verification", d: "Confirm that all activities have been authorized by you, adding protection.", icon: <Shield /> },
               { t: "Instant Access", d: "Online access to withdrawal records for income verification and financial planning.", icon: <Zap /> },
             ].map((item, i) => (
               <div key={i} className="group p-6 bg-black border-l-2 border-l-transparent border border-white/10 hover:border-l-cyan-400 hover:bg-white/10 transition-all duration-300 shadow-xl rounded-r-xl">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-125 transition-transform">
                    {React.cloneElement(item.icon, { size: 60, className: "text-white" })}
                  </div>
                  <div className="w-10 h-10 bg-cyan-400/20 flex items-center justify-center text-cyan-400 mb-4 border border-cyan-400/30 group-hover:scale-110 transition-transform rounded-lg">
                    {React.cloneElement(item.icon, { size: 20 })}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 uppercase tracking-tight italic relative z-10">{item.t}</h4>
                  <p className="text-white/80 text-sm font-light leading-relaxed italic relative z-10">{item.d}</p>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* --- KEY FEATURES: PERFORMANCE LEDGER --- */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8 space-y-10">
               <div className="space-y-4">
                 <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase leading-tight italic underline decoration-purple-500 decoration-4 underline-offset-[8px]">Portal Key <br/> Features</h2>
                 <p className="text-base text-white/80 italic leading-relaxed font-light">
                   Our trading account withdrawal history in simple terms: it is a high-performance ledger designed to be transparent.
                 </p>
               </div>

               <div className="grid md:grid-cols-2 gap-5">
                 {[
                   { t: "Smart Search & Filters", d: "Quickly look for specific information of the withdrawal transaction details.", icon: <Search /> },
                   { t: "Downloadable Statements", d: "Export the forex withdrawal records in CSV or PDF format.", icon: <Download /> },
                   { t: "Status Transparency", d: "You will be aware of where your money is at all points during the transaction.", icon: <Eye /> },
                   { t: "Secure Environment", d: "We provide a secure environment with guaranteed security of the withdrawal history.", icon: <Lock /> },
                   { t: "Direct Navigation", d: "Use this to quickly move between your history and the Withdrawal page.", icon: <ArrowUpRight /> },
                 ].map((feature, i) => (
                   <div key={i} className="group p-6 bg-white/[0.05] border border-white/20 hover:border-purple-500/50 transition-all duration-500 relative shadow-xl rounded-2xl">
                      <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform">
                        {React.cloneElement(feature.icon, { size: 60, className: "text-white" })}
                      </div>
                      <h4 className="text-base font-bold text-white mb-2 uppercase tracking-tight italic leading-tight relative z-10">{feature.t}</h4>
                      <p className="text-white/80 text-sm leading-relaxed font-light italic relative z-10">{feature.d}</p>
                   </div>
                 ))}
               </div>
            </div>

            <div className="lg:col-span-4 lg:sticky lg:top-32">
               <div className="relative p-8 bg-[#040715] border border-white/20 shadow-[0_0_50px_-10px_rgba(34,211,238,0.2)] overflow-hidden group rounded-3xl">
                  <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform duration-1000">
                    <History size={100} className="text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-6 tracking-tight uppercase border-b border-white/20 pb-4 italic">Audit Node</h3>
                  <div className="space-y-6 relative z-10">
                     <p className="text-base text-cyan-400 font-bold leading-tight italic">
                       Professionalism is built on transparency. Login to Your Account to see your complete payout history.
                     </p>
                     <p className="text-white/80 text-sm font-light italic">
                        Access every single entry of your online forex withdrawal history securely from anywhere in the world.
                     </p>
                     <button className="w-full py-4 bg-white text-black font-bold hover:bg-cyan-400 transition-all text-sm uppercase tracking-tight italic rounded-xl shadow-lg">
                        Login to Portal
                     </button>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- HOW TO VIEW: CHRONO STEPPER --- */}
      <section className="py-24 relative bg-[#040715] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase italic leading-tight">How to View <br/> History Online</h2>
            <p className="text-cyan-400 text-sm font-bold uppercase tracking-[0.2em]">Simple 3-step archival access</p>
          </div>

          <div className="max-w-3xl mx-auto relative">
             {/* Timeline Line */}
             <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent hidden md:block"></div>

             <div className="space-y-16">
                {[
                  { n: "01", t: "Login", d: "Access your secure FXCElite client area.", icon: <Lock />, align: "left" },
                  { n: "02", t: "Navigate to Funds", d: "Click on 'History' and select withdrawal history.", icon: <Database />, align: "right" },
                  { n: "03", t: "Review & Filter", d: "You can look for particular deposit transaction information using search tools.", icon: <Search />, align: "left" },
                ].map((step, i) => (
                  <div key={i} className={`flex flex-col ${step.align === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 relative`}>
                     <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-3 h-3 bg-black border-2 border-cyan-500 rounded-full z-20 hidden md:block shadow-[0_0_10px_#22d3ee]"></div>
                     <div className="md:w-1/2 w-full text-center md:text-left">
                        <div className={`inline-flex items-center justify-center w-12 h-12 bg-white/10 border border-white/20 text-lg font-bold italic text-cyan-400 mb-4 rounded-xl shadow-lg`}>
                           {step.n}
                        </div>
                        <h3 className="text-2xl font-bold text-white uppercase italic tracking-tight mb-2">{step.t}</h3>
                        <p className="text-sm text-white/80 font-light leading-relaxed italic md:max-w-sm">{step.d}</p>
                     </div>
                     <div className="md:w-1/2 w-full flex justify-center">
                        <div className="w-24 h-24 bg-white/5 border border-white/10 flex items-center justify-center text-white hover:text-cyan-400 transition-colors group rounded-2xl shadow-xl">
                           {React.cloneElement(step.icon, { size: 48, className: "group-hover:scale-110 transition-transform duration-500" })}
                        </div>
                     </div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* --- FAQ: ARCTIC STYLE --- */}
      <section className="py-24 border-t border-white/10 bg-black">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight uppercase italic font-mono">[ PAYOUT FAQ ]</h2>
            <p className="text-white/80 font-bold uppercase tracking-widest text-sm italic font-mono">Knowledge Base Alpha-7</p>
          </div>
          
          <div className="space-y-px bg-white/20 border border-white/20 rounded-2xl overflow-hidden">
            {[
              { q: "1. Where can I find the history of my withdrawal transactions?", a: "Located in our client zone under the 'History' or 'Funds' section." },
              { q: "2. Can I view reasons for rejection of a withdrawal request?", a: "Yes, if your request is not approved, you can view reasons in the transaction history." },
              { q: "3. Can I download my forex withdrawal records?", a: "Yes. You are allowed to download your online trading withdrawal records at any given time." },
              { q: "4. How far back does your history of account withdrawal go?", a: "We have a record that goes back to the day that your account was opened." },
              { q: "5. What does “Processing” status imply?", a: "It means that your withdrawal transaction details are being reviewed for processing by our finance team." },
              { q: "6. Can I hide particular entries in my history?", a: "No, for security and regulatory considerations, your trading account withdrawal history is a permanent record." },
              { q: "7. How do I prove my trading income for a bank?", a: "You can download and print a certified withdrawal history for forex and CFD trading report." },
              { q: "8. Can I see the fees charged in my history?", a: "Yes, you can. The withdrawal transaction history shows the amount requested and the amount sent." },
              { q: "9. Is online access to withdrawal history secure?", a: "Yes. The secure online trading account withdrawal history is protected by 256-bit encryption." },
              { q: "10. Why has the withdrawal not arrived in my bank account?", a: "Our system may indicate \"Completed,\" but additional days might be required for the deposit to be processed by your bank." },
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
      isOpen ? 'bg-[#0B0E2A]' : 'bg-[#040715] hover:bg-white/5'
    }`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left group"
      >
        <span className={`font-bold text-sm md:text-base transition-colors tracking-tight uppercase italic ${isOpen ? 'text-white' : 'text-white/90 group-hover:text-white'}`}>
          {question}
        </span>
        <div className={`w-8 h-8 flex items-center justify-center shrink-0 transition-all duration-500 ml-4 rounded-lg ${
          isOpen ? 'bg-cyan-400 text-black rotate-180 shadow-[0_0_15px_#22d3ee]' : 'bg-white/10 text-white/80 group-hover:bg-white/20'
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