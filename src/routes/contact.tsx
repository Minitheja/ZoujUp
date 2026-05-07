import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Mail, MessageSquare, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — ZoujUp" },
      {
        name: "description",
        content: "Get in touch with the ZoujUp team. We're here to help you with your language practice journey.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="relative min-h-screen bg-white overflow-x-hidden">
      <div className="relative z-10">
        <Navbar />
        
        <main className="pt-24 pb-16 sm:pt-32 sm:pb-24">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6">
                Get in <span className="text-[#FFC107]">Touch</span>
              </h1>
              <p className="text-[#6B7280] text-lg sm:text-xl leading-relaxed">
                Have questions or feedback? We'd love to hear from you. 
                Our team is here to support your language learning journey.
              </p>
            </div>

            <div className="max-w-xl mx-auto">
              {/* Contact Card */}
              <div className="bg-[#F8F9FA] p-8 sm:p-10 rounded-[24px] border border-[#E5E7EB] hover:border-[#FFC107] transition-all duration-300 text-center">
                <div className="h-12 w-12 bg-white rounded-[12px] flex items-center justify-center border border-[#E5E7EB] mb-6 shadow-sm mx-auto">
                  <Mail className="h-6 w-6 text-[#FFC107]" />
                </div>
                <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">Email Us</h2>
                <p className="text-[#6B7280] mb-6 leading-relaxed">
                  For general inquiries, support, or partnership opportunities, reach out to us at:
                </p>
                <a 
                  href="mailto:zoujup@gmail.com"
                  className="text-xl sm:text-2xl font-bold text-[#1A1A1A] hover:text-[#FFC107] transition-colors"
                >
                  zoujup@gmail.com
                </a>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
