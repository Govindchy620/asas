import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    AlertTriangle,
    Trash2,
    ShieldAlert,
    Wallet,
    Activity,
    CheckCircle2,
    Info,
    Mail
} from "lucide-react";

const AnimatedSection = ({ children, className = "", delay = 0 }) => (
    <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut", delay }}
        className={className}
    >
        {children}
    </motion.section>
);

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function AccountDeletion() {
    const [email, setEmail] = useState("");
    const [accountId, setAccountId] = useState("");
    const [confirmation, setConfirmation] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (confirmation !== "DELETE") return;

        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-background text-foreground pt-24 pb-24 font-sans overflow-hidden">

            {/* Background Textures */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-trade-sell/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-[20%] right-[-5%] w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full" />
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* 1. HEADER SECTION */}
                <AnimatedSection className="text-center mb-12 mt-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-trade-sell/10 border border-trade-sell/20 mb-6 shadow-sm">
                        <Trash2 className="w-8 h-8 text-trade-sell" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-foreground">
                        Account Deletion Request
                    </h1>
                    <p className="text-muted text-lg font-medium max-w-2xl mx-auto">
                        We are sorry to see you go. Please review the prerequisites and regulatory information before submitting your request to close your Fxcelite account.
                    </p>
                </AnimatedSection>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

                    {/* LEFT COLUMN: INFO & PREREQUISITES */}
                    <div className="lg:col-span-7 space-y-8">

                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            animate="visible"
                            className="space-y-6"
                        >
                            <motion.h3 variants={fadeInUp} className="text-2xl font-bold text-foreground tracking-tight">
                                Before you proceed
                            </motion.h3>

                            <motion.div variants={fadeInUp} className="glass-panel p-6 bg-card border border-border-light shadow-sm rounded-2xl flex gap-4 items-start">
                                <div className="bg-surface p-3 rounded-xl border border-border-light flex-shrink-0">
                                    <Activity className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-foreground mb-1">1. Close All Active Trades</h4>
                                    <p className="text-sm text-muted leading-relaxed">Ensure all open positions across your live trading accounts are closed. The system cannot delete an account with floating P&L.</p>
                                </div>
                            </motion.div>

                            <motion.div variants={fadeInUp} className="glass-panel p-6 bg-card border border-border-light shadow-sm rounded-2xl flex gap-4 items-start">
                                <div className="bg-surface p-3 rounded-xl border border-border-light flex-shrink-0">
                                    <Wallet className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-foreground mb-1">2. Withdraw Your Funds</h4>
                                    <p className="text-sm text-muted leading-relaxed">Please submit a withdrawal request for all remaining equity in your wallets. Accounts with a positive balance cannot be immediately deleted.</p>
                                </div>
                            </motion.div>
                        </motion.div>

                        <AnimatedSection delay={0.3} className="bg-blue-50 border border-blue-200 p-6 rounded-2xl flex gap-4 shadow-sm">
                            <Info className="w-8 h-8 text-primary flex-shrink-0 mt-0.5" />
                            <div>
                                <h4 className="text-base font-bold mb-2 text-primary">Data Retention Policy (AML/KYC)</h4>
                                <p className="text-sm leading-relaxed text-slate-600">
                                    As a regulated financial institution, Fxcelite is required by international Anti-Money Laundering (AML) laws to retain certain personal data, KYC documents, and transaction histories for a period of up to <strong>7 years</strong> after account closure.
                                    <br /><br />
                                    Your account will be permanently deactivated and you will no longer receive marketing communications, but your core financial records will be securely archived to comply with regulatory mandates.
                                </p>
                            </div>
                        </AnimatedSection>
                    </div>

                    {/* RIGHT COLUMN: DELETION FORM */}
                    <div className="lg:col-span-5">
                        <AnimatedSection delay={0.4} className="glass-panel p-8 bg-surface border border-border-light shadow-xl rounded-3xl sticky top-28">

                            <AnimatePresence mode="wait">
                                {!isSubmitted ? (
                                    <motion.form
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        onSubmit={handleSubmit}
                                        className="space-y-6"
                                    >
                                        <div className="flex items-center gap-3 mb-6 border-b border-border-light pb-4">
                                            <ShieldAlert className="w-6 h-6 text-trade-sell" />
                                            <h3 className="text-xl font-bold text-foreground">Submit Request</h3>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-foreground">Registered Email Address</label>
                                            <div className="relative">
                                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
                                                <input
                                                    type="email"
                                                    required
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    className="w-full bg-background border border-border-light rounded-xl py-3 pl-11 pr-4 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                                    placeholder="you@example.com"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-foreground">Account ID (Optional)</label>
                                            <input
                                                type="text"
                                                value={accountId}
                                                onChange={(e) => setAccountId(e.target.value)}
                                                className="w-full bg-background border border-border-light rounded-xl py-3 px-4 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                                placeholder="e.g. WOC-123456"
                                            />
                                        </div>

                                        <div className="space-y-2 pt-4">
                                            <label className="text-sm font-bold text-trade-sell">Type "DELETE" to confirm</label>
                                            <input
                                                type="text"
                                                required
                                                value={confirmation}
                                                onChange={(e) => setConfirmation(e.target.value)}
                                                className="w-full bg-red-50/50 border border-red-200 rounded-xl py-3 px-4 text-foreground focus:outline-none focus:border-trade-sell focus:ring-1 focus:ring-trade-sell transition-all placeholder:text-red-300"
                                                placeholder="DELETE"
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={confirmation !== "DELETE" || isSubmitting}
                                            className={`w-full py-4 rounded-xl font-bold text-white transition-all shadow-md flex items-center justify-center gap-2 ${confirmation === "DELETE" && !isSubmitting ? 'bg-trade-sell hover:bg-red-600 hover:shadow-lg' : 'bg-red-300 cursor-not-allowed'}`}
                                        >
                                            {isSubmitting ? (
                                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                            ) : (
                                                <>Request Deletion <AlertTriangle className="w-4 h-4" /></>
                                            )}
                                        </button>
                                        <p className="text-xs text-center text-muted mt-4">
                                            This action is irreversible. You will lose access to your client portal immediately upon processing.
                                        </p>
                                    </motion.form>
                                ) : (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-8 space-y-6"
                                    >
                                        <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto border border-green-200 shadow-sm">
                                            <CheckCircle2 className="w-10 h-10 text-green-500" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-foreground mb-2">Request Received</h3>
                                            <p className="text-muted text-sm leading-relaxed">
                                                Your account deletion request has been successfully submitted to our compliance team.
                                            </p>
                                        </div>
                                        <div className="bg-surface border border-border-light p-4 rounded-xl text-left">
                                            <p className="text-xs text-muted font-medium mb-1">Status</p>
                                            <p className="text-sm font-bold text-orange-500 flex items-center gap-2">
                                                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" /> Pending Review
                                            </p>
                                        </div>
                                        <p className="text-xs text-muted leading-relaxed">
                                            We will send a confirmation email to <strong className="text-foreground">{email}</strong> once your account has been fully deactivated and data archived according to our retention policy.
                                        </p>
                                        <button
                                            onClick={() => window.location.href = '/'}
                                            className="w-full py-3 bg-surface border border-border-light hover:border-primary text-foreground font-bold rounded-xl transition-all text-sm mt-4"
                                        >
                                            Return to Homepage
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                        </AnimatedSection>
                    </div>

                </div>
            </div>
        </div>
    );
}