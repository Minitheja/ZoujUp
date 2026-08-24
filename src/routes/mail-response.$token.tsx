import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { CheckCircle2, XCircle } from "lucide-react";

export const Route = createFileRoute("/mail-response/$token")({
  head: () => ({
    meta: [
      { title: "Respond — ZoujUp" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: MailResponsePage,
});

const API_BASE = "https://api.zoujup.com";

type StatusResponse = {
  valid: boolean;
  alreadyResponded: boolean;
  response: "positive" | "negative" | null;
  positiveLabel: string;
  negativeLabel: string;
};

type AnswerResponse = {
  success: boolean;
  message: string;
};

type ViewState =
  | { kind: "loading" }
  | { kind: "fetchError" }
  | { kind: "invalid" }
  | { kind: "alreadyResponded"; status: StatusResponse }
  | { kind: "ready"; status: StatusResponse }
  | { kind: "submitting"; status: StatusResponse }
  | { kind: "done"; message: string };

function MailResponsePage() {
  const { token } = Route.useParams();
  const [view, setView] = useState<ViewState>({ kind: "loading" });

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const res = await fetch(
          `${API_BASE}/api/v1/public/mail-response-api/${token}/status`
        );
        const data: StatusResponse = await res.json();
        if (cancelled) return;

        if (!data.valid) {
          setView({ kind: "invalid" });
        } else if (data.alreadyResponded) {
          setView({ kind: "alreadyResponded", status: data });
        } else {
          setView({ kind: "ready", status: data });
        }
      } catch {
        if (!cancelled) setView({ kind: "fetchError" });
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [token]);

  const handleAnswer = async (
    status: StatusResponse,
    answer: "positive" | "negative"
  ) => {
    setView({ kind: "submitting", status });

    try {
      const res = await fetch(
        `${API_BASE}/api/v1/public/mail-response-api/${token}/answer`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ answer }),
        }
      );
      const data: AnswerResponse = await res.json();
      setView({ kind: "done", message: data.message });
    } catch {
      setView({ kind: "fetchError" });
    }
  };

  return (
    <div className="relative min-h-screen bg-white overflow-x-hidden">
      <div className="relative z-10">
        <Navbar />

        <main className="pt-24 pb-16 sm:pt-32 sm:pb-24">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-xl mx-auto">
              <div className="bg-[#F8F9FA] p-8 sm:p-10 rounded-[24px] border border-[#E5E7EB] text-center">
                {view.kind === "loading" && (
                  <p className="text-[#6B7280] text-base">Loading…</p>
                )}

                {view.kind === "fetchError" && (
                  <>
                    <XCircle className="h-12 w-12 text-[#6B7280] mx-auto mb-4" />
                    <p className="text-[#1A1A1A] font-bold text-lg mb-1">
                      Something went wrong.
                    </p>
                    <p className="text-[#6B7280] text-sm">
                      Please try again later.
                    </p>
                  </>
                )}

                {view.kind === "invalid" && (
                  <>
                    <XCircle className="h-12 w-12 text-[#6B7280] mx-auto mb-4" />
                    <p className="text-[#1A1A1A] font-bold text-lg">
                      This link is invalid or has expired.
                    </p>
                  </>
                )}

                {view.kind === "alreadyResponded" && (
                  <>
                    <CheckCircle2 className="h-12 w-12 text-[#FFC107] mx-auto mb-4" />
                    <p className="text-[#1A1A1A] font-bold text-lg mb-1">
                      We already recorded your response
                    </p>
                    {view.status.response && (
                      <p className="text-[#6B7280] text-sm">
                        {view.status.response === "positive"
                          ? view.status.positiveLabel
                          : view.status.negativeLabel}
                      </p>
                    )}
                  </>
                )}

                {(view.kind === "ready" || view.kind === "submitting") && (
                  <>
                    <p className="text-[#1A1A1A] font-bold text-xl mb-6">
                      Please choose an option below
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <button
                        type="button"
                        disabled={view.kind === "submitting"}
                        onClick={() => handleAnswer(view.status, "positive")}
                        className="flex-1 rounded-[12px] bg-[#1A1A1A] px-6 py-4 text-white font-bold hover:bg-black transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {view.status.positiveLabel}
                      </button>
                      <button
                        type="button"
                        disabled={view.kind === "submitting"}
                        onClick={() => handleAnswer(view.status, "negative")}
                        className="flex-1 rounded-[12px] bg-white border border-[#E5E7EB] px-6 py-4 text-[#1A1A1A] font-bold hover:border-[#1A1A1A] transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {view.status.negativeLabel}
                      </button>
                    </div>
                  </>
                )}

                {view.kind === "done" && (
                  <>
                    <CheckCircle2 className="h-12 w-12 text-[#FFC107] mx-auto mb-4" />
                    <p className="text-[#1A1A1A] font-bold text-lg">
                      {view.message}
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
