import React, { useState } from 'react';
import { 
  Archive, 
  Shield, 
  Zap, 
  Globe, 
  Activity, 
  Lock, 
  FileText, 
  Database, 
  History, 
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
  TrendingUp
} from 'lucide-react';

export default function DepositHistory() {
  return (
    <div className="bg-[#02040a] text-white font-sans selection:bg-amber-500/30 overflow-x-hidden">
      
      {/* --- HERO: THE ARCHIVE ENTRANCE --- */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-2 pb-3 overflow-hidden">
        {/* Monolithic Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:60px_60px]"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#f59e0b05,transparent_70%)]"></div>
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-10"
            alt="Secure Vault"
          />
          {/* Obsidian Pillars Decor */}
          <div className="absolute top-0 left-10 w-[1px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
          <div className="absolute top-0 right-10 w-[1px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm border border-amber-500/30 bg-amber-500/10 backdrop-blur-xl mb-8 animate-fade-in">
            <Archive size={14} className="text-amber-400" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-amber-400 italic">Financial Records Core v12.0</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tight mb-6">
            Deposit <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-white to-amber-600 italic">History</span>
          </h1>
          
          <p className="text-base md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light mb-8 uppercase tracking-widest italic">
            Track Your Trading Account Funding Activity
          </p>

          <div className="max-w-3xl mx-auto text-sm md:text-base text-white/90 leading-relaxed font-light mb-12 px-6 py-8 border-l-2 border-r-2 border-white/20 bg-white/[0.05] backdrop-blur-sm relative">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-[2px] bg-amber-500/80"></div>
             In the world of professional trading, keeping an accurate record of all your financial transactions is fundamental. Your deposit history trading account page details the entirety of your account funding transactions. Fxcelite is all about openness and honesty, which is why we provide a transparent trading account deposit history accessible at any time, allowing you to keep track of your capital inflows and reconcile your trading records.
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="relative group">
              <div className="absolute -inset-1 bg-amber-500 rounded-none blur opacity-40 group-hover:opacity-80 transition duration-1000"></div>
              <button 
                onClick={() => window.open('https://trade.fxcelite.com/login', '_blank')}
                className="relative px-10 py-4 bg-white text-black font-bold text-base md:text-lg transition-all hover:bg-amber-400 active:scale-95 shadow-xl uppercase tracking-tight flex items-center gap-2">
                View Your Deposit History <Database size={20} className="ml-2" />
              </button>
            </div>
            <p className="text-amber-400 text-sm font-bold uppercase tracking-[0.2em] italic animate-pulse">
              Stay organized and informed. Track every dollar now!
            </p>
          </div>
        </div>
      </section>

      {/* --- EXPLAINED: THE RECONCILIATION BLOCK --- */}
      <section className="py-24 relative border-y border-white/10 bg-white/[0.02] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
               <div className="space-y-6">
                 <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight leading-tight italic border-l-4 border-amber-500 pl-4">Records <br/> Reconciliation</h2>
                 <div className="space-y-6 text-base text-white/90 leading-relaxed font-light italic">
                   <p>
                     It doesn't matter if you want to check your deposit history for tax related purposes or you're just getting online trading deposit records to verify an entry that was made recently, through our safe portal, you can have an up to minute update of all your funding actions. As soon as you make your first Deposit and even your most recent. Each and every detail is recorded and kept safe.
                   </p>
                   <p className="text-white font-medium italic bg-white/10 p-5 border-l-2 border-amber-500 shadow-lg">
                     Your trading account funding history is more than just a list of numbers. It is a comprehensive record of your journey to financial success with us.
                   </p>
                 </div>
               </div>
            </div>

            <div className="relative group lg:sticky lg:top-32">
               <div className="absolute inset-0 bg-amber-500/20 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <div className="relative border border-white/20 shadow-2xl bg-[#0B0E2A] overflow-hidden rounded-2xl">
                 <img 
                    src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200" 
                    className="w-full h-[400px] object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    alt="Financial Document Review"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#02040a] via-transparent to-transparent pointer-events-none"></div>
                 <div className="absolute bottom-6 left-6 right-6 p-6 bg-black/90 border border-white/20 backdrop-blur-xl rounded-xl">
                    <p className="text-white/90 text-sm leading-relaxed font-medium italic">
                      "When you check forex deposit history online, you will notice that specific details are mentioned for each transaction."
                    </p>
                    <div className="mt-4 grid grid-cols-2 gap-4">
                       <div className="p-3 border border-white/10 bg-white/5 rounded-lg">
                          <span className="block text-[10px] text-amber-400 uppercase tracking-widest mb-1 font-bold">Archive Access</span>
                          <span className="text-white font-mono text-xs italic">Live Sync Active</span>
                       </div>
                       <div className="p-3 border border-white/10 bg-white/5 text-right rounded-lg">
                          <span className="block text-[10px] text-amber-400 uppercase tracking-widest mb-1 font-bold">Status</span>
                          <span className="text-emerald-400 font-mono text-xs italic">256-Bit Encrypted</span>
                       </div>
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- INFO LIST: ARCHIVAL HEADERS --- */}
      <section className="py-24 relative bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase italic leading-tight">What Information is <br/> in Your History?</h2>
            <p className="text-amber-400 text-sm font-bold uppercase tracking-[0.2em]">Comprehensive Metadata Tracking</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-px bg-white/20 border border-white/20 shadow-xl rounded-xl overflow-hidden">
            {[
              { title: "Date & Time", desc: "The exact time when your account deposit transactions were recorded.", icon: <Clock /> },
              { title: "Payment Method", desc: "This field will indicate the payment method the client decided to use among the options.", icon: <Wallet /> },
              { title: "Transaction ID", desc: "A unique identification number assigned to each deposit transaction history entry.", icon: <FileText /> },
              { title: "Amount & Currency", desc: "The particular amount you deposited, as well as the currency involved.", icon: <Coins /> },
              { title: "Status", desc: "Real-time updates that tell if the deposit is 'Pending,' 'Completed,' or 'Failed.'", icon: <Activity /> },
            ].map((item, i) => (
              <div key={i} className="group p-6 bg-[#02040a] hover:bg-white/5 transition-all duration-300 flex flex-col items-center text-center relative overflow-hidden">
                <div className="w-12 h-12 bg-white/10 flex items-center justify-center text-white/80 mb-5 border border-white/20 group-hover:bg-amber-500 group-hover:text-black group-hover:scale-110 transition-all rounded-lg">
                   {React.cloneElement(item.icon, { size: 24 })}
                </div>
                <h3 className="text-base font-bold text-white mb-2 tracking-tight leading-tight uppercase italic">{item.title}</h3>
                <p className="text-white/80 text-xs leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHY MONITOR: AUDIT BENTO --- */}
      <section className="py-24 bg-white/[0.02] border-y border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase italic leading-tight underline decoration-amber-500 decoration-4 underline-offset-[8px]">Why Monitor <br/> Your History?</h2>
                <p className="text-base text-white/80 italic leading-relaxed font-light">It is important to keep a close watch on your online trading deposit records.</p>
              </div>
              <div className="p-6 bg-amber-500/10 border border-amber-500/30 italic text-base leading-relaxed text-amber-100 rounded-xl shadow-lg">
                "Our history of secure deposits with our trading account guarantees the security of your information, which is only accessible to you."
              </div>
           </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
             {[
               { t: "Audit Readiness", d: "View forex deposit history online to assist with personal accounting and/or tax filings.", icon: <Scale /> },
               { t: "Security Monitoring", d: "Verify that the account deposit transaction is consistent with your personal financial records.", icon: <Shield /> },
               { t: "Performance Tracking", d: "To determine your net ROI, compare your trading account funding history with your Withdrawal History.", icon: <TrendingUp /> },
               { t: "Instant Verification", d: "Get the details for the deposit transaction to confirm if the trade is an automated or bank wire transfer.", icon: <Search /> },
               { t: "Secure Records", d: "Your history is permanently archived and protected by bank-grade encryption.", icon: <Lock /> },
             ].map((item, i) => (
               <div key={i} className="group p-6 bg-[#02040a] border-l-2 border-l-transparent border border-white/10 hover:border-l-amber-500 hover:bg-white/10 transition-all duration-300 shadow-xl rounded-r-xl">
                  <div className="w-10 h-10 bg-amber-500/20 flex items-center justify-center text-amber-400 mb-4 border border-amber-500/30 group-hover:scale-110 transition-transform rounded-lg">
                    {React.cloneElement(item.icon, { size: 20 })}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 uppercase tracking-tight italic">{item.t}</h4>
                  <p className="text-white/80 text-sm leading-relaxed font-light italic">{item.d}</p>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* --- KEY FEATURES: PORTAL HUD --- */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8 space-y-10">
               <div className="space-y-4">
                 <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase leading-tight italic">Key Features of the <br/> Deposit History Portal</h2>
                 <p className="text-base text-white/80 italic leading-relaxed font-light">
                   Designed for organized traders who demand professional record keeping.
                 </p>
               </div>

               <div className="grid md:grid-cols-2 gap-5">
                 {[
                   { t: "Audit Readiness", d: "View forex deposit history online to assist with personal accounting and/or tax filings.", icon: <FileSearch /> },
                   { t: "Security Monitoring", d: "Verify that the account deposit transaction is consistent with your personal financial records.", icon: <Activity /> },
                   { t: "Performance Tracking", d: "To determine your net ROI, compare your trading account funding history with your Withdrawal History.", icon: <Activity /> },
                   { t: "Instant Verification", d: "Get the details for the deposit transaction to confirm if the trade is an automated or bank wire transfer.", icon: <UserCheck /> },
                   { t: "Secure Records", d: "Our history of secure deposits with our trading account guarantees the security of your information.", icon: <Lock /> },
                 ].map((feature, i) => (
                   <div key={i} className="group p-6 bg-white/[0.05] border border-white/20 hover:border-amber-500/50 transition-all duration-500 relative shadow-xl rounded-2xl">
                      <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform">
                        {React.cloneElement(feature.icon, { size: 60, className: "text-white" })}
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2 uppercase tracking-tight italic relative z-10">{feature.t}</h4>
                      <p className="text-white/80 text-sm leading-relaxed font-light italic relative z-10">{feature.d}</p>
                   </div>
                 ))}
               </div>
            </div>

            <div className="lg:col-span-4 lg:sticky lg:top-32">
               <div className="relative p-8 bg-[#02040a] border border-amber-500/50 shadow-2xl overflow-hidden group rounded-3xl">
                  <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-1000">
                    <History size={120} className="text-amber-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-6 tracking-tight uppercase border-b border-white/20 pb-4">Archive Access</h3>
                  <div className="space-y-6 relative z-10">
                     <p className="text-base text-amber-400 font-bold leading-tight italic">
                       Professionalism starts with good records. Login to Your Portal to access your complete funding history.
                     </p>
                     <p className="text-white/80 text-sm font-light italic">
                        Access your transparent and permanent financial trail from anywhere in the world.
                     </p>
                     <button 
                        onClick={() => window.open('https://trade.fxcelite.com/login', '_blank')}
                        className="w-full py-4 bg-white text-black font-bold hover:bg-amber-400 transition-all text-sm uppercase tracking-tight italic rounded-xl shadow-lg">
                        Login to Portal
                     </button>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- HOW TO VIEW: CHRONO STEPPER --- */}
      <section className="py-24 relative bg-[#02040a] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase italic leading-tight">How to View <br/> Forex Deposit History</h2>
            <p className="text-amber-400 text-sm font-bold uppercase tracking-[0.2em]">Simple 3-step archival access</p>
          </div>

          <div className="max-w-3xl mx-auto relative">
             {/* Timeline Line */}
             <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-amber-500/50 to-transparent hidden md:block"></div>

             <div className="space-y-16">
                {[
                  { n: "01", t: "Login", d: "Access your secure Fxcelite client area.", icon: <Lock />, align: "left" },
                  { n: "02", t: "Navigate to Funds", d: "Click on 'History' and select deposit history trading account.", icon: <Database />, align: "right" },
                  { n: "03", t: "Review & Filter", d: "You can look for the particular deposit transaction information relating to forex trading using the search tools provided.", icon: <Search />, align: "left" },
                ].map((step, i) => (
                  <div key={i} className={`flex flex-col ${step.align === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 relative`}>
                     <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-4 h-4 bg-black border-2 border-amber-500 rounded-full z-20 hidden md:block shadow-[0_0_10px_#f59e0b]"></div>
                     <div className="md:w-1/2 w-full text-center md:text-left">
                        <div className={`inline-flex items-center justify-center w-12 h-12 bg-white/10 border border-white/20 text-lg font-bold italic text-amber-400 mb-4 rounded-xl shadow-lg`}>
                           {step.n}
                        </div>
                        <h3 className="text-2xl font-bold text-white uppercase italic tracking-tight mb-3">{step.t}</h3>
                        <p className="text-sm text-white/80 font-light leading-relaxed italic md:max-w-sm">{step.d}</p>
                     </div>
                     <div className="md:w-1/2 w-full flex justify-center">
                        <div className="w-24 h-24 bg-white/5 border border-white/10 flex items-center justify-center text-white hover:text-amber-400 transition-colors group rounded-2xl shadow-xl">
                           {React.cloneElement(step.icon, { size: 40, className: "group-hover:scale-110 transition-transform duration-500" })}
                        </div>
                     </div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* --- SECURITY & TARGET: OBSIDIAN PANELS --- */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
             <div className="p-8 md:p-10 bg-[#02040a] border-l-4 border-amber-500 relative group overflow-hidden shadow-2xl rounded-2xl">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform duration-1000">
                    <Shield size={180} className="text-white" />
                </div>
                <div className="relative z-10 space-y-8">
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-amber-500 flex items-center justify-center text-black rounded-xl">
                         <Lock size={24} />
                      </div>
                      <h2 className="text-2xl font-bold text-white tracking-tight uppercase italic">Security & <br/> Transparency</h2>
                   </div>
                   <div className="text-base text-white/90 leading-relaxed font-light italic space-y-6">
                      <p>We realize that your online access to trading deposit history is a very sensitive activity. This is why our secure deposit history trading account is built on the same bank-grade encryption that our trading terminals use.</p>
                      <div className="p-6 border border-white/20 bg-white/5 italic font-medium text-white shadow-lg rounded-xl">
                         We keep our online trading deposit history with the utmost integrity, providing a transparent and permanent financial trail that is only accessible to authorized account holders.
                      </div>
                   </div>
                </div>
             </div>

             <div className="space-y-10 lg:p-8">
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight uppercase italic leading-tight">Who is This <br/> For?</h2>
                  <p className="text-amber-400 font-bold uppercase tracking-[0.2em] text-xs">Professional Archival Profiles</p>
                </div>
                <div className="grid gap-4">
                   {[
                     { l: "Disciplined Traders", d: "Those who trace literally every cent of their deposit activity.", icon: <Activity /> },
                     { l: "Corporate Accounts", d: "Firms requiring a formal history of funding for internal audits.", icon: <Briefcase /> },
                     { l: "New Traders", d: "Traders who want to ensure their first deposit was successful.", icon: <UserCheck /> },
                     { l: "Tax Professionals", d: "Requiring details of the deposit transactions for financial reporting.", icon: <Calendar /> }
                   ].map((item, i) => (
                     <div key={i} className="flex gap-5 group/item items-center border-b border-white/10 pb-5">
                       <div className="shrink-0 w-12 h-12 bg-white/10 flex items-center justify-center text-white/80 group-hover/item:text-black group-hover/item:bg-amber-500 transition-all rounded-xl">
                         {React.cloneElement(item.icon, { size: 24 })}
                       </div>
                       <div>
                         <span className="text-white text-lg font-bold uppercase tracking-tight italic">{item.l}</span>
                         <p className="text-white/80 text-sm font-light italic leading-relaxed">{item.d}</p>
                       </div>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA: THE RECORD GATE --- */}
      <section className="py-24 bg-[#02040a] text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 space-y-10">
           <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight uppercase leading-tight italic">Why Fxcelite for Transparent <br/> Record Keeping?</h2>
           <p className="text-base md:text-lg text-white/90 leading-relaxed font-light italic max-w-3xl mx-auto">
             Given our commitment to helping you have a secure deposit history trading account, as well as view your deposit history in a user-friendly fashion, Fxcelite remains the best trading platform for organized traders. We offer you the tools you need to not only successfully navigate your trading endeavors, but your financial life as a whole.
           </p>
           <div className="pt-6 flex flex-col items-center gap-6">
              <div className="relative group">
                <div className="absolute -inset-2 bg-amber-500 rounded-2xl blur opacity-40 group-hover:opacity-80 transition duration-1000"></div>
                <button 
                  onClick={() => window.open('https://trade.fxcelite.com/login', '_blank')}
                  className="relative px-12 py-5 bg-white text-black font-bold text-lg transition-all shadow-[0_20px_60px_-15px_rgba(245,158,11,0.4)] uppercase tracking-tight italic hover:-translate-y-1 rounded-xl">
                  Check Your Deposit History
                </button>
              </div>
              <div className="space-y-4">
                <p className="text-amber-400 font-bold uppercase tracking-[0.2em] text-xs italic">Total transparency, one click away.</p>
                <div className="flex justify-center gap-2">
                   <div className="w-8 h-[2px] bg-white/30"></div>
                   <div className="w-16 h-[2px] bg-amber-400 animate-pulse"></div>
                   <div className="w-8 h-[2px] bg-white/30"></div>
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* --- FAQ: MONOLITHIC STYLE --- */}
      <section className="py-24 border-t border-white/10 bg-black">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight uppercase italic underline decoration-amber-500 decoration-4 underline-offset-[8px]">Archive FAQ</h2>
            <p className="text-white/80 font-bold uppercase tracking-widest text-sm italic font-mono pt-4">[ Records Knowledge Base ]</p>
          </div>
          
          <div className="space-y-px bg-white/20 border border-white/20 rounded-2xl overflow-hidden">
            {[
              { q: "1. Can I view my deposit history anywhere?", a: "It can be viewed in your client portal with Fxcelite, in the 'Fund' tab or 'History' tab." },
              { q: "2. Can I delete my deposit history?", a: "No, for security and regulatory compliance reasons, our records store your trading account deposit history permanently." },
              { q: "3. How far back does deposit history go?", a: "We store your online trading deposit history since the first day you opened your account with us." },
              { q: "4. Can I download my transaction history?", a: "Yes, you can export your history as a PDF or CSV file for your personal records." },
              { q: "5. Why is my deposit \"Pending\"?", a: "This is usually because of bank wire or e-wallet deposits that need further verification. Once verified, they're marked \"Completed.\"" },
              { q: "6. What if a deposit is not showing?", a: "Please make sure that you are looking at the right time frame. You may then contact our support team with your details." },
              { q: "7. Is the access to the history secure?", a: "Yes, absolutely. Your secure deposit history trading account is accessed through 256-bit encryption and two-factor authentication." },
              { q: "8. Can I see which currency I used?", a: "Yes, the deposit history shows you the currency deposited and the amount credited to your account." },
              { q: "9. Can I filter my history by payment method?", a: "Yes, our portal offers the option to filter your history using a credit card, wire transfers, e-wallets, or crypto payments." },
              { q: "10. How can I calculate my total deposits?", a: "It is possible to filter by a date range, for example, Year-to-Date, and the system will display a summary of the activity." },
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
      isOpen ? 'bg-[#0B0E2A]' : 'bg-[#02040a] hover:bg-white/5'
    }`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left group"
      >
        <span className={`font-bold text-sm md:text-base transition-colors tracking-tight uppercase italic ${isOpen ? 'text-white' : 'text-white/90 group-hover:text-white'}`}>
          {question}
        </span>
        <div className={`w-8 h-8 flex items-center justify-center shrink-0 transition-all duration-500 ml-4 rounded-lg ${
          isOpen ? 'bg-amber-500 text-black rotate-180 shadow-[0_0_15px_#f59e0b]' : 'bg-white/10 text-white/80 group-hover:bg-white/20'
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