import React from "react";

export default function PrivacyPolicy() {
  return (
    <section className="bg-gradient-to-b from-[#050617] via-[#070a2a] to-[#050617] py-24">
      <div className="max-w-5xl mx-auto px-6">

        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-10">
          Privacy Policy
        </h1>

        {/* CONTENT */}
        <div className="space-y-8 text-white/90 text-sm md:text-base leading-relaxed">

          <p>
            Welcome to FXCELITE ("we, " "our, " or "us"). We make sure that your personal data is secure by implementing all the necessary measures and we respect your privacy. Here through this Privacy Policy we give you a full insight on how we collect, utilize, distribute and protect your personal details if you happen to log on to our site [Insert Website URL], trading infrastructure, services, or platform.
          </p>

          <p>
            This privacy notice outlines the way and the reasons behind collecting, sharing, and protecting the personal data of individuals that have chosen to engage with our services and website. Please take a moment to familiarize yourself with this document to ensure a proper understanding of our data processing methods. In case you are not content with the provisions laid down in our privacy policy, you kindly ask that you refrain from visiting our website or availing of our services at all.
          </p>

          {/* 1. INFORMATION WE COLLECT */}
          <h2 className="text-xl font-normal text-white pt-6">
            1. Information We Collect
          </h2>

          <p>
            We may collect information about you in a variety of ways. The information we may collect on the Site includes:
          </p>

          <div className="space-y-6">
            <DisclosureItem
              title="Personal Information:"
              text="Personal identifiable data, like your name, email, phone number, and demographics, which you provide us with voluntarily at the time of registering on the platform or reaching out to us."
            />

            <DisclosureItem
              title="Financial Information:"
              text="Any financial information associated with your trading account, transactions, deposit and withdrawal methods, and trading preferences."
            />

            <DisclosureItem
              title="Derivative Information:"
              text="Data collected automatically by our servers upon your visit to the website, like your IP address, browser information, operating system, access times, and web pages accessed."
            />

            <DisclosureItem
              title="Know Your Customer / Verification Information:"
              text="In order to abide by financial regulations, we may also collect governmental identification and proof of address."
            />
          </div>

          {/* 2. HOW WE USE YOUR INFORMATION */}
          <h2 className="text-xl font-normal text-white pt-6">
            2. How We Use Your Information
          </h2>

          <p>
            The availability of accurate information on you makes it possible for us to ensure that you have a seamless, efficient, and personalized experience. In particular, we can use the information gathered to do the following:
          </p>

          <ul className="list-disc list-inside space-y-2 pl-2">
            <li>Set up and manage your trading account.</li>
            <li>Process financial transactions and payment management.</li>
            <li>Comply with legal, regulatory, and Anti-Money Laundering (AML) requirements.</li>
            <li>Provide you with administrative, product, and promotional information.</li>
            <li>Address customer service and support inquiries.</li>
          </ul>

          {/* 3. DISCLOSURE OF YOUR INFORMATION */}
          <h2 className="text-xl font-normal text-white pt-6">
            3. Disclosure of Your Information
          </h2>

          <p>
            We do not sell, trade or rent your information to other companies. There are some situations where we may share the information we have collected about you:
          </p>

          <div className="space-y-6">
            <DisclosureItem
              title="By Law or to Protect Rights:"
              text="If we think we need to release your information to follow the law or to investigate and fix any problems with our policies we will do so."
            />

            <DisclosureItem
              title="Third-Party Service Providers:"
              text="We work with companies that help us with things, like processing payments, analyzing data, sending emails and hosting our services."
            />

            <DisclosureItem
              title="Regulatory Authorities:"
              text="We may also share your data with regulators, law enforcement or compliance bodies to meet legal requirements."
            />
          </div>

          {/* 4. SECURITY OF YOUR INFORMATION */}
          <h2 className="text-xl font-normal text-white pt-6">
            4. Security of Your Information
          </h2>

          <p>
            We take a lot of steps to protect your information. We use security measures to help keep your information safe. These security measures are to help protect your information. We have security measures in place to protect the information you give to us.. You should know that even with these security measures we cannot guarantee that your personal information is completely safe. No matter what we do there is always a chance that someone could get your information. We cannot guarantee that our methods of sending data are completely safe, from being intercepted or misused. We want to protect your information so we use administrative security measures and technical security measures and physical security measures to help protect your personal information.
          </p>

          {/* 5. COOKIES AND TRACKING TECHNOLOGIES */}
          <h2 className="text-xl font-normal text-white pt-6">
            5. Cookies and Tracking Technologies
          </h2>

          <p>
            We use things like cookies and tracking pixels on the Site. This helps make the site better for you. Most of the time your browser is set to cookies. You can get rid of cookies if you want to. This might make it harder to use the Site. The Site might not work well if you do that. We want the Site to be good, for you so we use cookies and other things to help with that.
          </p>

          {/* 6. YOUR RIGHTS */}
          <h2 className="text-xl font-normal text-white pt-6">
            6. Your Rights
          </h2>

          <p>
            Depending on your country of residence, you have the following rights with regard to your personal information:
          </p>

          <ul className="list-disc list-inside space-y-2 pl-2">
            <li>The right to obtain access to your personal data.</li>
            <li>The right to have your personal data corrected if it is not accurate.</li>
            <li>The right to request that your personal data be deleted.</li>
            <li>The right to object to processing or request restriction of processing.</li>
          </ul>

          {/* ACCOUNT DELETION AND RETENTION */}
          <div className="bg-black/40 border border-white/10 rounded-xl p-6 mt-6">
            <p className="font-semibold text-white mb-3">
              Account Deletion and Retention
            </p>
            <p className="mb-3">
              If you want to close your account and erase all of your personal information, then you can submit a request for deletion at any point in time.
            </p>
            <p className="mb-3">
              <span className="font-semibold">Process of Deletion Request:</span> You can either submit your request for deletion via the settings of your account in the FXCELITE App or through the App Support URL/e-mail.
            </p>
            <p className="mb-3">
              <span className="font-semibold">Data Storage Policy:</span> After receiving your deletion request, we will start deleting your personal information from our live database. However, please keep in mind that as a financial and trading services company, we are mandated to store some transaction history, KYC documents, etc., for a certain time.
            </p>
            <p className="font-semibold text-indigo-400">
              Account Deletion &#123; Link &#125;
            </p>
          </div>

          {/* APP SUPPORT */}
          <div className="bg-indigo-500/10 border border-indigo-400/30 rounded-xl p-6 mt-8">
            <p className="font-semibold text-white mb-3">
              App Support
            </p>
            <p className="mb-3">
              For any assistance, technical issues, account inquiries, or to submit data deletion requests, please visit our official customer support portal:
            </p>
            <p>
              <span className="font-semibold">App Support URL:</span> 
            </p>
            <p>
              <span className="font-semibold">Support Email:</span> 
            </p>
          </div>

          {/* 7. CHANGES TO THIS PRIVACY POLICY */}
          <h2 className="text-xl font-normal text-white pt-6">
            7. Changes to This Privacy Policy
          </h2>

          <p>
            We may revise our Privacy Policy from time to time. We will notify you about any such changes by updating the "Effective Date" at the beginning of this page. Please take some time to read and understand what this policy says. Also, from time to time when you see changes in the Privacy Policy, check the effective date of the policy to know the updates. Besides, please periodically go through this policy to stay informed of the possible changes or updates.
          </p>

          {/* 8. CONTACT US */}
          <h2 className="text-xl font-normal text-white pt-6">
            8. Contact Us
          </h2>

          <p>
            If you have questions or comments about this Privacy Policy, please contact us at:
          </p>
          
          <p>
            FXCELITE Support Team<br />
            Email:<br />
            Website:
          </p>

        </div>
      </div>
    </section>
  );
}

/* =========================
   DISCLOSURE ITEM
========================= */
function DisclosureItem({ title, text }) {
  return (
    <div>
      <p className="font-semibold text-white mb-1">
        {title}
      </p>
      <p className="text-white/85">
        {text}
      </p>
    </div>
  );
}