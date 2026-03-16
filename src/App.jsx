import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Pages/Navbar";
import HomePage from "./Pages/HomePage";
import AboutUs from "./Pages/AboutUs";
import Footer from "./Component/Footer";
import Affiliate from "./Pages/Affiliate";
import FAQ from "./Pages/FAQ";
import Pricing from "./Pages/Pricing";
import GrowthPlan from "./Pages/GrowthPlan";

import TermsAndConditions from "./Pages/TermsAndConditions";
import RefundPolicy from "./Pages/RefundPolicy";
import PrivacyPolicy from "./Pages/Privacy";
import InvestorRelations from "./Pages/InvestorRelations";
import WhiteLabelSolutions from "./Pages/whitelabel-solutions";
import ScrollToTop from "./Component/ScrollToTop";
import Forex from "./Pages/Forex";
import Indices from "./Pages/Indices";
import Crypto from "./Pages/Crypto";
import Commodities from "./Pages/Commodities";
import StandardAccount from "./Pages/StandardAccount";
import MicroAccount from "./Pages/MicroAccount";
import VipAccount from "./Pages/VipAccount";
import LiveAccount from "./Pages/LiveAccount";
import DemoAccount from "./Pages/DemoAccount";
import Topups from "./Pages/Topups";
import AdvancedCharts from "./Pages/AdvancedCharts";
import CopyTrading from "./Pages/CopyTrading";
import MamAccount from "./Pages/MamAccount";
import WebTrading from "./Pages/WebTrading";
import MobileTrading from "./Pages/MobileTrading";
import Mt5 from "./Pages/Mt5";
import TradingViewIntegration from "./Pages/TradingViewIntegration";
import Deposit from "./Pages/Deposit";
import Withdrawal from "./Pages/Withdrawal";
import InternalTransfer from "./Pages/InternalTransfer";
import DepositHistory from "./Pages/DepositHistory";
import WithdrawalHistory from "./Pages/WithdrawalHistory";
import Savings from "./Pages/Savings";
import Bonuses from "./Pages/Bonuses";
import IbDashboard from "./Pages/IbDashboard";
import Referrals from "./Pages/Referrals";
import IbReports from "./Pages/IbReports";
import JoinPartner from "./Pages/JoinPartner";
import Helpdesk from "./Pages/Helpdesk";
import Contact from "./Pages/ContactUs";
import Preloader from "./Component/Preloader";
import AccountDeletion from "./pages/AccountDeletion"

function App() {
  return (
    <Router>
      <Navbar />
      <Preloader />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/affiliate" element={<Affiliate />} />
        <Route path="/faqs" element={<FAQ />} />  
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/growth-plan" element={<GrowthPlan />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/investor-relations" element={<InvestorRelations />} />
        <Route path="/white-label-solutions" element={<WhiteLabelSolutions />} />

        <Route path="/markets/forex" element={<Forex />} />
        <Route path="/markets/indices" element={<Indices />} />
        <Route path="/markets/crypto" element={<Crypto />} />
        <Route path="/markets/commodities" element={<Commodities />} />
        <Route path="/accounts/standard" element={<StandardAccount />} />
        <Route path="/accounts/micro" element={<MicroAccount />} />
        <Route path="/accounts/vip" element={<VipAccount />} />
        <Route path="/accounts/live" element={<LiveAccount />} />
        <Route path="/accounts/demo" element={<DemoAccount />} />
        <Route path="/topups" element={<Topups />} />
        <Route path="/tools/advanced-charts" element={<AdvancedCharts />} />
        <Route path="/tools/copy-trading" element={<CopyTrading />} />
        <Route path="/tools/mam" element={<MamAccount />} />
        <Route path="/tools/web-trading" element={<WebTrading />} />
        <Route path="/platforms/mobile" element={<MobileTrading />} />
        <Route path="/platforms/mt5" element={<Mt5 />} />
        <Route path="/tools/trading-view-integration" element={<TradingViewIntegration />} />
        <Route path="/funds/deposit" element={<Deposit />} />
        <Route path="/funds/withdrawal" element={<Withdrawal />} />
        <Route path="/funds/transfer" element={<InternalTransfer />} />
        <Route path="/funds/deposit-history" element={<DepositHistory />} />
        <Route path="/funds/withdrawal-history" element={<WithdrawalHistory />} />
        <Route path="/benefits/savings" element={<Savings />} />
        <Route path="/benefits/bonuses" element={<Bonuses />} />
        <Route path="/ib-program/dashboard" element={<IbDashboard />} />
        <Route path="/ib-program/referrals" element={<Referrals />} />
        <Route path="/ib-program/ib-reports" element={<IbReports />} />
        <Route path="/join-partner" element={<JoinPartner />} />
        <Route path="/support/helpdesk" element={<Helpdesk />} />
        <Route path="/support/contact" element={<Contact />} />
        <Route path="/account-deletion" element={<AccountDeletion />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
