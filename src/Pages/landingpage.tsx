import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Menu, MessageCircle, Send, ShieldCheck, Sparkles, TrendingUp, Users, X } from "lucide-react";
import Logo from "../assets/Logo.png";

const LINKS = {
  telegram: "https://t.me/fxcelite",
  whatsapp: "https://wa.me/447418351019",
  register: "https://trade.FXCELITE.com/register",
};

const reveal = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55 } } };

function ExternalLink({ href, children, className = "" }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className={className}>{children}</a>;
}

function MarketChart() {
  return (
    <div className="relative mx-auto aspect-[1.08] w-full max-w-[560px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a1726] p-5 shadow-2xl shadow-cyan-950/40 sm:p-8" aria-label="Decorative market chart">
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "linear-gradient(rgba(139,211,255,.18) 1px, transparent 1px), linear-gradient(90deg, rgba(139,211,255,.18) 1px, transparent 1px)", backgroundSize: "25% 25%" }} />
      <div className="relative flex items-center justify-between border-b border-white/10 pb-4">
        <div><p className="text-xs uppercase tracking-[0.25em] text-cyan-300">FX / USD</p><p className="mt-1 text-2xl font-semibold text-white">1.0842 <span className="text-sm text-cyan-300">+1.24%</span></p></div>
        <BarChart3 className="text-cyan-300" aria-hidden="true" />
      </div>
      <svg viewBox="0 0 500 270" className="relative mt-6 h-[70%] w-full" role="img" aria-label="Rising market line">
        <defs><linearGradient id="line" x1="0" x2="1"><stop stopColor="#76e4ff" /><stop offset="1" stopColor="#3575ff" /></linearGradient><linearGradient id="area" x1="0" x2="0" y1="0" y2="1"><stop stopColor="#55d9ff" stopOpacity=".28" /><stop offset="1" stopColor="#55d9ff" stopOpacity="0" /></linearGradient></defs>
        <path d="M0 222 C35 215 38 180 76 191 S120 136 153 157 S192 113 225 140 S262 99 296 112 S325 76 350 99 S389 38 420 64 S462 32 500 11 V270 H0Z" fill="url(#area)" />
        <path d="M0 222 C35 215 38 180 76 191 S120 136 153 157 S192 113 225 140 S262 99 296 112 S325 76 350 99 S389 38 420 64 S462 32 500 11" fill="none" stroke="url(#line)" strokeWidth="4" strokeLinecap="round" />
        <circle cx="500" cy="11" r="6" fill="#76e4ff" />
      </svg>
      <div className="relative flex justify-between text-[11px] text-slate-500"><span>09:00</span><span>12:00</span><span>15:00</span><span>18:00</span></div>
      <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-2 text-xs text-cyan-100 sm:bottom-8 sm:left-8"><span className="size-2 rounded-full bg-cyan-300" /> Live market view</div>
    </div>
  );
}

function LandingPage() {
  const [open, setOpen] = useState(false);
  const nav = [{ label: "Why FXcelite", href: "#why" }, { label: "Markets", href: "#markets" }, { label: "How it works", href: "#steps" }];
  const close = () => setOpen(false);
  return (
    <main className="min-h-screen overflow-hidden bg-[#06111d] text-white selection:bg-cyan-300 selection:text-[#06111d]">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#06111d]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#top" className="flex items-center gap-3" onClick={close}><img src={Logo} alt="FXcelite" className="h-9 w-auto" /><span className="hidden border-l border-white/20 pl-3 text-xs uppercase tracking-[0.22em] text-slate-400 sm:block">Trade with clarity</span></a>
          <div className="hidden items-center gap-8 md:flex">{nav.map((item) => <a key={item.href} href={item.href} className="text-sm text-slate-300 transition hover:text-cyan-200">{item.label}</a>)}<ExternalLink href={LINKS.register} className="rounded-full bg-cyan-300 px-5 py-3 text-sm font-bold text-[#06111d] transition hover:bg-white">Start Trading <ArrowRight className="ml-2 inline size-4" /></ExternalLink></div>
          <button className="rounded-lg p-2 text-slate-200 md:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>{open ? <X /> : <Menu />}</button>
        </div>
        {open && <div className="border-t border-white/10 bg-[#06111d] px-5 py-5 md:hidden"><div className="flex flex-col gap-5">{nav.map((item) => <a key={item.href} href={item.href} onClick={close} className="text-slate-200">{item.label}</a>)}<ExternalLink href={LINKS.register} className="rounded-full bg-cyan-300 px-5 py-3 text-center font-bold text-[#06111d]">Start Trading</ExternalLink></div></div>}
      </nav>

      <section id="top" className="relative mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-16 pt-32 sm:px-8 lg:pt-28"><div className="absolute -right-40 top-20 size-[28rem] rounded-full bg-cyan-400/10 blur-3xl" /><div className="grid w-full items-center gap-14 lg:grid-cols-[1fr_.95fr] lg:gap-8"><motion.div initial="hidden" animate="visible" variants={reveal} className="relative z-10 max-w-2xl"><div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-2 text-xs font-medium uppercase tracking-[0.2em] text-cyan-200"><Sparkles className="size-3.5" /> A sharper way to trade</div><h1 className="text-balance text-5xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-7xl">Make your next move with <span className="text-cyan-300">conviction.</span></h1><p className="mt-7 max-w-xl text-pretty text-lg leading-8 text-slate-300">FXcelite brings clear market access, practical tools, and a community that keeps you close to what matters.</p><div className="mt-9 flex flex-col gap-3 sm:flex-row"><ExternalLink href={LINKS.register} className="rounded-full bg-cyan-300 px-6 py-4 text-center font-bold text-[#06111d] transition hover:bg-white">Start Trading <ArrowRight className="ml-2 inline size-4" /></ExternalLink><ExternalLink href={LINKS.telegram} className="rounded-full border border-white/20 px-6 py-4 text-center font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-200"><Send className="mr-2 inline size-4" /> Join Free Telegram</ExternalLink></div><div className="mt-8 flex flex-wrap gap-5 text-sm text-slate-400"><span><ShieldCheck className="mr-2 inline size-4 text-cyan-300" />Secure by design</span><span><TrendingUp className="mr-2 inline size-4 text-cyan-300" />Built for momentum</span></div></motion.div><motion.div initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1, transition: { duration: .7, delay: .15 } }}><MarketChart /></motion.div></div></section>

      <motion.section id="why" className="border-y border-white/10 bg-[#091827] py-24" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={reveal}><div className="mx-auto max-w-7xl px-5 sm:px-8"><div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-end"><div><p className="text-sm uppercase tracking-[0.25em] text-cyan-300">The FXcelite difference</p><h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Less noise.<br /><span className="text-slate-400">More focus.</span></h2></div><div className="grid gap-8 sm:grid-cols-3"><div><Users className="mb-5 text-cyan-300" /><h3 className="font-semibold">A real community</h3><p className="mt-2 text-sm leading-6 text-slate-400">Learn alongside people who take the craft seriously.</p></div><div><TrendingUp className="mb-5 text-cyan-300" /><h3 className="font-semibold">Market perspective</h3><p className="mt-2 text-sm leading-6 text-slate-400">Find context before you find your entry.</p></div><div><ShieldCheck className="mb-5 text-cyan-300" /><h3 className="font-semibold">Clear conditions</h3><p className="mt-2 text-sm leading-6 text-slate-400">Know your platform, tools, and next step.</p></div></div></div></div></motion.section>

      <section id="markets" className="mx-auto max-w-7xl px-5 py-24 sm:px-8"><div className="grid items-center gap-12 lg:grid-cols-2"><div><p className="text-sm uppercase tracking-[0.25em] text-cyan-300">One platform, many possibilities</p><h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Stay close to the markets that move you.</h2><p className="mt-6 max-w-lg text-lg leading-8 text-slate-400">Explore forex, indices, commodities, and crypto from one considered trading experience. Your watchlist stays focused, your tools stay within reach.</p><div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">{["Forex", "Indices", "Commodities", "Crypto"].map((name) => <div key={name} className="rounded-2xl border border-white/10 bg-white/[.03] p-4 text-sm text-slate-200"><div className="mb-4 h-8 w-12 rounded bg-cyan-300/10" /><span>{name}</span></div>)}</div></div><div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#102d42] to-[#08121e] p-8"><p className="text-sm text-slate-400">Market watch</p><div className="mt-8 flex items-end gap-2">{[30, 44, 37, 58, 51, 73, 66, 92, 82, 100].map((height, i) => <div key={i} className="flex-1 rounded-t bg-cyan-300/70" style={{ height: `${height * 1.7}px` }} />)}</div><div className="mt-5 flex justify-between border-t border-white/10 pt-4 text-xs text-slate-500"><span>Watch. Understand. Act.</span><span className="text-cyan-200">Real-time view</span></div></div></div></section>

      <section className="bg-[#091827] py-24"><div className="mx-auto max-w-7xl px-5 sm:px-8"><div className="mb-12 max-w-2xl"><p className="text-sm uppercase tracking-[0.25em] text-cyan-300">Choose your starting point</p><h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Your next move starts here.</h2></div><div className="grid gap-4 md:grid-cols-3"><ExternalLink href={LINKS.register} className="group rounded-3xl border border-cyan-300/50 bg-cyan-300 p-7 text-[#06111d] transition hover:-translate-y-1"><p className="text-sm font-bold uppercase tracking-widest">For traders</p><h3 className="mt-14 text-2xl font-semibold">Open your account</h3><p className="mt-3 text-sm opacity-75">Get set up and step into the markets.</p><ArrowRight className="mt-8 transition group-hover:translate-x-1" /></ExternalLink><ExternalLink href={LINKS.telegram} className="group rounded-3xl border border-white/10 bg-[#0c2133] p-7 transition hover:-translate-y-1 hover:border-cyan-300/40"><p className="text-sm font-bold uppercase tracking-widest text-cyan-300">For learners</p><h3 className="mt-14 text-2xl font-semibold">Join Telegram</h3><p className="mt-3 text-sm text-slate-400">Stay in the conversation as markets develop.</p><ArrowRight className="mt-8 text-cyan-300 transition group-hover:translate-x-1" /></ExternalLink><ExternalLink href={LINKS.whatsapp} className="group rounded-3xl border border-white/10 bg-[#0c2133] p-7 transition hover:-translate-y-1 hover:border-cyan-300/40"><p className="text-sm font-bold uppercase tracking-widest text-cyan-300">For direct access</p><h3 className="mt-14 text-2xl font-semibold">Connect on WhatsApp</h3><p className="mt-3 text-sm text-slate-400">Ask a question and find your next step.</p><ArrowRight className="mt-8 text-cyan-300 transition group-hover:translate-x-1" /></ExternalLink></div></div></section>

      <section id="steps" className="mx-auto max-w-7xl px-5 py-24 sm:px-8"><div className="mx-auto max-w-3xl text-center"><p className="text-sm uppercase tracking-[0.25em] text-cyan-300">How it works</p><h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Simple by design.</h2></div><div className="mt-14 grid gap-10 md:grid-cols-3">{[{n:"01", title:"Get connected", body:"Join the community or open an account — begin wherever feels right."},{n:"02", title:"Find your rhythm", body:"Use the platform and market view to build a process that is yours."},{n:"03", title:"Trade with intent", body:"Make considered decisions with the tools and perspective to support them."}].map((step) => <div key={step.n} className="border-t border-white/20 pt-5"><span className="text-sm text-cyan-300">{step.n}</span><h3 className="mt-10 text-2xl font-semibold">{step.title}</h3><p className="mt-3 leading-7 text-slate-400">{step.body}</p></div>)}</div></section>

      <section className="mx-5 mb-8 overflow-hidden rounded-[2rem] bg-cyan-300 px-6 py-16 text-center text-[#06111d] sm:mx-8 sm:px-10"><h2 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">The market is moving. Are you?</h2><p className="mx-auto mt-5 max-w-xl text-lg opacity-75">Make your next move with a platform built to keep you focused.</p><div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><ExternalLink href={LINKS.register} className="rounded-full bg-[#06111d] px-6 py-4 font-bold text-white transition hover:bg-white hover:text-[#06111d]">Start Trading <ArrowRight className="ml-2 inline size-4" /></ExternalLink><ExternalLink href={LINKS.whatsapp} className="rounded-full border border-[#06111d]/20 px-6 py-4 font-semibold transition hover:bg-white/40"><MessageCircle className="mr-2 inline size-4" /> Join on WhatsApp</ExternalLink></div></section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8"><a href="#top" className="flex items-center gap-3"><img src={Logo} alt="FXcelite" className="h-7 w-auto" /><span>Trade with clarity.</span></a><p>Trading involves risk. Terms and conditions apply.</p></footer>
    </main>
  );
}

export default LandingPage;
