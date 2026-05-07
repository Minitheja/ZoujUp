import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — ZoujUp" },
      {
        name: "description",
        content: "ZoujUp Privacy Policy. Learn how we handle your data.",
      },
    ],
  }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <div className="relative min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <main className="pt-24 sm:pt-32 pb-16 sm:pb-24">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1A1A1A] mb-2 font-display">PRIVACY POLICY</h1>
          <p className="text-sm text-[#6B7280] mb-10 italic">Last updated: May 2026</p>

          <div className="space-y-10 text-[#1A1A1A]">
            <section className="space-y-3">
              <h2 className="text-xl font-bold uppercase tracking-wide text-[#FFC107]">1. WHO WE ARE</h2>
              <p className="leading-relaxed">
                ZoujUp is a mobile language practice app currently in development.
                <br />
                Contact: <a href="mailto:contact@zoujup.com" className="text-[#FFC107] hover:underline">contact@zoujup.com</a>
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold uppercase tracking-wide text-[#FFC107]">2. WHAT DATA WE COLLECT</h2>
              <div className="leading-relaxed space-y-1">
                <p>When you join our waitlist, we collect:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Your email address</li>
                  <li>Your native language</li>
                  <li>The language you want to practice</li>
                </ul>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold uppercase tracking-wide text-[#FFC107]">3. WHY WE COLLECT IT</h2>
              <div className="leading-relaxed space-y-1">
                <p>We use this information to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Notify you when ZoujUp launches and send you information about early access</li>
                  <li>Understand the language needs of our early community to ensure high-quality matches from day one</li>
                </ul>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold uppercase tracking-wide text-[#FFC107]">4. HOW WE STORE IT</h2>
              <p className="leading-relaxed">
                Your email is stored securely via our email platform (Mailchimp or equivalent). We do not store any other personal information.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold uppercase tracking-wide text-[#FFC107]">5. HOW LONG WE KEEP IT</h2>
              <p className="leading-relaxed">
                We keep your email until the app launches. You can request deletion at any time.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold uppercase tracking-wide text-[#FFC107]">6. YOUR RIGHTS</h2>
              <p className="leading-relaxed">
                You have the right to access, correct, or delete your data at any time. To do so, email us at <a href="mailto:contact@zoujup.com" className="text-[#FFC107] hover:underline">contact@zoujup.com</a>
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold uppercase tracking-wide text-[#FFC107]">7. WE NEVER SELL YOUR DATA</h2>
              <p className="leading-relaxed">
                We will never share or sell your email address to any third party.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold uppercase tracking-wide text-[#FFC107]">8. COOKIES</h2>
              <p className="leading-relaxed">
                This website uses no tracking cookies at this stage.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
