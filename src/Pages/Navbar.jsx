import React, { useState, useRef, useEffect } from "react";
import {
  ChevronDown,
  ExternalLink,
  Menu,
  X,
  FileText,
  BarChart3,
  Users,
  Wallet,
  Gift,
  Headphones,
  Zap,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/Logo.png";
import LandingPage from "./LandingPage";
/* =========================
   NAV DATA
========================= */

const NAV_DATA = [
  {
    title: "Markets",
    icon: <BarChart3 size={16} />,
    groups: [
      {
        items: [
          { label: "Forex", path: "/markets/forex" },
          { label: "Indices", path: "/markets/indices" },
          { label: "Cryptocurrency", path: "/markets/crypto" },
          { label: "Commodities", path: "/markets/commodities" },
        ],
      },
    ],
  },
  {
    title: "Accounts",
    icon: <Users size={16} />,
    groups: [
      {
        groupName: "Account Types",
        items: [
          { label: "Standard account", path: "/accounts/standard" },
          { label: "Micro account", path: "/accounts/micro" },
          { label: "Vip account", path: "/accounts/vip" },
          { label: "Live account", path: "/accounts/live" },
          { label: "Demo account", path: "/accounts/demo" },
          { label: "Topups", path: "/topups" },
        ],
      },
    ],
  },
  {
    title: "Trading",
    icon: <Zap size={16} />,
    groups: [
      {
        groupName: "Platforms",
        items: [
          { label: "Web trading", path: "/tools/web-trading" },
          { label: "Mobile app trading", path: "/platforms/mobile" },
          { label: "Metatrader 5", path: "/platforms/mt5" },
          { label: "Trading view", path: "/tools/trading-view-integration" },
        ],
      },
      {
        groupName: "Trading Tools",
        items: [
          { label: "Advanced charts", path: "/tools/advanced-charts" },
          { label: "Copy trading", path: "/tools/copy-trading" },
          { label: "Mam", path: "/tools/mam" },
          { label: "Pamm", path: "/tools/pamm" },
        ],
      },
    ],
  },
  {
    title: "Finance",
    icon: <Wallet size={16} />,
    groups: [
      {
        groupName: "Funds Management",
        items: [
          { label: "Deposit", path: "/funds/deposit" },
          { label: "Withdrawal", path: "/funds/withdrawal" },
          { label: "Internal transfer", path: "/funds/transfer" },
          { label: "Deposit history", path: "/funds/deposit-history" },
          { label: "Withdrawal history", path: "/funds/withdrawal-history" },
        ],
      },
    ],
  },
  {
    title: "Partners",
    icon: <Gift size={16} />,
    groups: [
      {
        groupName: "IB Program",
        items: [
          { label: "Ib dashboard", path: "/ib-program/dashboard" },
          { label: "Referrals", path: "/ib-program/referrals" },
          { label: "Ib reports", path: "/ib-program/ib-reports" },
          { label: "Become a partner", path: "/join-partner" },
        ],
      },
      {
        groupName: "Benefits",
        items: [
          { label: "Savings", path: "/benefits/savings" },
          { label: "Bonuses", path: "/benefits/bonuses" },
        ],
      },
    ],
  },
  {
    title: "Support",
    icon: <Headphones size={16} />,
    groups: [
      {
        groupName: "Help & Learn",
        items: [
          { label: "Helpdesk", path: "/support/helpdesk" },
          { label: "Contact us", path: "/support/contact" },
        ],
      },
    ],
  },
];

/* =========================
   NAVBAR COMPONENT
========================= */

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  /* Close menus on outside click */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveDropdown(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* Close on route change */
  useEffect(() => {
    setActiveDropdown(null);
    setMobileOpen(false);
  }, [location.pathname]);

  const navTo = (path) => navigate(path);

  return (
    <>
      {/* Spacer */}
      <div className="h-16 sm:h-20" />

      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 bg-[#050617]/95 backdrop-blur-xl border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">

            {/* LOGO */}
            <div
  onClick={() => navTo("/")}
  className="flex items-center gap-2 cursor-pointer"
>
  {/* Logo Image */}
  <img
    src={logo}
    alt="FXCELITE Logo"
    className="w-36 h-36 object-contain"
  />
</div>


            {/* DESKTOP NAV */}
            <div className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-300">
              {NAV_DATA.map((cat) => (
                <div key={cat.title} className="relative">
                  <button
                    onMouseEnter={() => setActiveDropdown(cat.title)}
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === cat.title ? null : cat.title
                      )
                    }
                    className="flex items-center gap-1 hover:text-white"
                  >
                    {cat.title}
                    <ChevronDown
                      size={14}
                      className={`transition ${
                        activeDropdown === cat.title ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Dropdown */}
                  {activeDropdown === cat.title && (
                    <div
                      onMouseLeave={() => setActiveDropdown(null)}
                      className="absolute top-10 left-0 w-64 bg-[#0B0E2A] border border-white/10 rounded-xl shadow-xl p-3"
                    >
                      {cat.groups.map((group, i) => (
                        <div key={i} className="space-y-1">
                          {group.groupName && (
                            <p className="text-xs text-emerald-400 font-semibold px-2 py-1">
                              {group.groupName}
                            </p>
                          )}

                          {group.items.map((item) => (
                            <button
                              key={item.label}
                              onClick={() => navTo(item.path)}
                              className="flex items-center gap-2 w-full px-3 py-2 rounded-lg text-slate-300 hover:bg-white/5 hover:text-white text-left"
                            >
                              <FileText size={14} />
                              {item.label}
                            </button>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-3">

              {/* LOGIN */}
              <button
                onClick={() => navTo("https://trade.fxcelite.com/login")}
                className="hidden sm:flex text-sm text-slate-300 hover:text-white items-center gap-1"
              >
                Log in <ExternalLink size={14} />
              </button>

              {/* CTA */}
              <button
        onClick={() => navigate("/landing-page")} // 3. Use the relative path
        className="hidden sm:inline-flex px-4 py-2 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-semibold text-sm"
      >
        Get Started
      </button>

              {/* BURGER */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden text-white"
              >
                {mobileOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`lg:hidden transition-all duration-300 ${
            mobileOpen 
              ? "max-h-[85vh] overflow-y-auto border-t border-white/10" 
              : "max-h-0 overflow-hidden"
          }`}
        >
          {/* Added pb-8 for better bottom spacing when scrolling */}
          <div className="px-4 py-4 pb-8 space-y-4 bg-[#050617]">

            {NAV_DATA.map((cat) => (
              <div key={cat.title}>
                <p className="text-emerald-400 font-semibold mb-2">
                  {cat.title}
                </p>

                {cat.groups.map((group, i) => (
                  <div key={i} className="space-y-1 mb-3">
                    {group.items.map((item) => (
                      <button
                        key={item.label}
                        onClick={() => navTo(item.path)}
                        className="block w-full text-left px-3 py-2 rounded-lg text-slate-300 hover:bg-white/5 hover:text-white"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                ))}
              </div>
            ))}

            {/* Mobile CTA */}
            <div className="pt-4 space-y-3">
              <button
                onClick={() => navTo("https://trade.fxcelite.com/login")}
                className="w-full py-3 border border-white/10 rounded-lg text-white"
              >
                Log in
              </button>

              <button
                onClick={() => navigate("/landing-page")}
                className="w-full py-3 rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-semibold"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}