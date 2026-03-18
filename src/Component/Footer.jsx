import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Logo from "../assets/Logo.png";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#050617] to-[#070A23] pt-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* ================= TOP CTA ================= */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white max-w-2xl">
            Unlock Your Potential and <br /> Join Our Trading Team!
          </h2>

      
        </div>

        {/* DIVIDER */}
        <div className="h-px bg-white/10 mb-16" />

        {/* ================= MAIN FOOTER LINKS ================= */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 mb-16">
          
          {/* MARKETS */}
          <FooterColumn title="Markets">
            <FooterLink to="/markets/forex">Forex</FooterLink>
            <FooterLink to="/markets/indices">Indices</FooterLink>
            <FooterLink to="/markets/crypto">Cryptocurrency</FooterLink>
            <FooterLink to="/markets/commodities">Commodities</FooterLink>
          </FooterColumn>

          {/* ACCOUNTS */}
          <FooterColumn title="Accounts">
            <FooterLink to="/accounts/standard">Standard Account</FooterLink>
            <FooterLink to="/accounts/micro">Micro Account</FooterLink>
            <FooterLink to="/accounts/vip">VIP Account</FooterLink>
            <FooterLink to="/accounts/live">Live Account</FooterLink>
            <FooterLink to="/accounts/demo">Demo Account</FooterLink>
            <FooterLink to="/topups">Topups</FooterLink>
          </FooterColumn>

          {/* TRADING */}
          <FooterColumn title="Trading">
            <FooterLink to="/tools/web-trading">Web Trading</FooterLink>
            <FooterLink to="/platforms/mobile">Mobile App</FooterLink>
            <FooterLink to="/platforms/mt5">MetaTrader 5</FooterLink>
            <FooterLink to="/tools/copy-trading">Copy Trading</FooterLink>
            <FooterLink to="/tools/mam">MAM</FooterLink>
            <FooterLink to="/tools/pamm">PAMM</FooterLink>
          </FooterColumn>

          {/* FINANCE */}
          <FooterColumn title="Finance">
            <FooterLink to="/funds/deposit">Deposit</FooterLink>
            <FooterLink to="/funds/withdrawal">Withdrawal</FooterLink>
            <FooterLink to="/funds/transfer">Internal Transfer</FooterLink>
            <FooterLink to="/funds/deposit-history">Deposit History</FooterLink>
            <FooterLink to="/funds/withdrawal-history">Withdrawal History</FooterLink>
          </FooterColumn>

          {/* PARTNERS */}
          <FooterColumn title="Partners">
            <FooterLink to="/ib-program/dashboard">IB Dashboard</FooterLink>
            <FooterLink to="/ib-program/referrals">Referrals</FooterLink>
            <FooterLink to="/join-partner">Become a Partner</FooterLink>
            <FooterLink to="/benefits/bonuses">Bonuses</FooterLink>
            <FooterLink to="/affiliate">Affiliate Program</FooterLink>
          </FooterColumn>

          {/* SUPPORT & LEGAL */}
          <FooterColumn title="Support">
            <FooterLink to="/support/helpdesk">Helpdesk</FooterLink>
            <FooterLink to="/support/contact">Contact Us</FooterLink>
            <FooterLink to="/faqs">FAQs</FooterLink>
            <div className="pt-4">
              <h4 className="text-white font-semibold mb-3">Legal</h4>
              <FooterLink to="/terms-and-conditions">Terms & Conditions</FooterLink>
              <FooterLink to="/privacy-policy">Privacy Policy</FooterLink>
              <FooterLink to="/refund-policy">Refund Policy</FooterLink>
            </div>
          </FooterColumn>
        </div>

        {/* ================= BRAND & SOCIALS ================= */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-white/10 py-10 gap-8">
          <div className="flex items-center gap-4">
            <img
              src={Logo}
              alt="FXCELITE Logo"
              className="w-46 h-46 object-contain"
            />
            {/* <div className="text-left">
              <h3 className="text-white font-bold text-xl tracking-tight">FXCELITE</h3>
              <p className="text-slate-500 text-xs uppercase tracking-widest font-semibold">Institutional Trading</p>
            </div> */}
          </div>

          <div className="flex gap-4">
            <SocialLink href="https://www.facebook.com/profile.php?id=61586456620414" icon={<Facebook size={18} />} />
            <SocialLink href="https://www.instagram.com/fxcelite/" icon={<Instagram size={18} />} />
            <SocialLink href="https://x.com/Fxcelite" icon={<Twitter size={18} />} />
          </div>
        </div>

        {/* DISCLAIMER */}
        <div className="bg-white/5 rounded-2xl p-6 mb-10 border border-white/5">
            <p className="text-slate-400 text-[11px] leading-relaxed text-center">
              <strong>Risk Warning:</strong> We provide virtual demo accounts that simulate live market conditions.
              Any reference to “Funded” on our website refers only to virtual
              funding. Our services are not investment services or recommendations. Trading financial instruments involves significant risk and can result in the loss of your capital.
            </p>
        </div>
        

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row items-center justify-between text-slate-500 text-[12px] pb-12 gap-4 border-t border-white/5 pt-8">
          <p>© 2026 FXCELITE · All rights reserved</p>
          {/* <p>FYFX Capital LTD · Hong Kong Registered: 75280952-000</p> */}
        </div>
      </div>
    </footer>
  );
  
}

/* ================= HELPERS ================= */

function FooterColumn({ title, children }) {
  return (
    <div className="flex flex-col">
      <h4 className="text-white font-bold text-sm mb-5 uppercase tracking-wider">{title}</h4>
      <ul className="space-y-3 text-slate-400 text-sm font-medium">{children}</ul>
    </div>
  );
}

function FooterLink({ to, children }) {
  return (
    <li>
      <Link to={to} className="hover:text-emerald-400 transition-colors duration-200">
        {children}
      </Link>
    </li>
  );
}

function SocialLink({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-emerald-400 hover:text-black hover:border-emerald-400 transition-all duration-300"
    >
      {icon}
    </a>
  );
}