import { Instagram, Linkedin } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useLang } from "@/lib/LanguageContext";

export function Footer() {
  const { t } = useLang();
  const f = t.footer;

  const columns = [
    { title: f.company, links: f.companyLinks },
    { title: f.support, links: f.supportLinks },
  ];

  return (
    <footer className="bg-[#111111] text-[#FFFFFF] pt-14 sm:pt-20 pb-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-12">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img
                src="/logo.png"
                alt="ZoujUp"
                width={40}
                height={40}
                className="h-9 w-9 sm:h-10 sm:w-10 rounded-[10px] object-cover"
              />
              <span className="text-xl sm:text-2xl font-bold font-display text-[#FFFFFF]">
                ZoujUp
              </span>
            </Link>
            <p className="text-sm opacity-70 leading-relaxed max-w-[280px]">{f.tagline}</p>
            <div className="flex gap-3 mt-5 sm:mt-6">
              <a
                href="https://www.instagram.com/zoujup_officiel/"
                target="_blank"
                rel="noreferrer"
                className="group flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-[#FFC107] transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4 text-[#FFFFFF] group-hover:text-[#111111]" />
              </a>
              <a
                href="https://www.linkedin.com/company/zoujup/"
                target="_blank"
                rel="noreferrer"
                className="group flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-[#FFC107] transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4 text-[#FFFFFF] group-hover:text-[#111111]" />
              </a>
              <a
                href="https://www.tiktok.com/@zoujup"
                target="_blank"
                rel="noreferrer"
                className="group flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-[#FFC107] transition-colors duration-200"
                aria-label="TikTok"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4 text-[#FFFFFF] group-hover:text-[#111111]"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">{col.title}</h4>
              <ul className="space-y-2 text-sm opacity-70">
                {col.links.map((l: string) => {
                  let to = "/";
                  let hash: string | undefined = undefined;
                  let isExternal = false;

                  const label = l.toLowerCase();

                  if (label.includes("home") || label.includes("accueil") || label.includes("inicio")) {
                    hash = "cta";
                  } else if (label.includes("faq")) {
                    hash = "faq";
                  } else if (label.includes("contact") || label.includes("contacto")) {
                    hash = "contact";
                  } else if (label.includes("about") || label.includes("propos") || label.includes("acerca")) {
                    hash = "home";
                  } else if (label.includes("feature") || label.includes("fonctionnal") || label.includes("caracter")) {
                    hash = "difference";
                  } else if (label.includes("work") || label.includes("fonctionne") || label.includes("funciona")) {
                    hash = "how-it-works";
                  } else if (label.includes("privacy") || label.includes("confidential") || label.includes("privacidad")) {
                    to = "/privacy-policy";
                    isExternal = true;
                  } else {
                    to = "#";
                  }

                  return (
                    <li key={l}>
                      <Link
                        to={to}
                        hash={hash}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noopener noreferrer" : undefined}
                        onClick={(e) => {
                          if (to === "#") {
                            e.preventDefault();
                            alert("This page will be available soon!");
                            return;
                          }
                          
                          // If it's a hash link on the same page, scroll manually to be safe
                          if (hash && (window.location.pathname === to || to === "/")) {
                            e.preventDefault();
                            window.history.pushState(null, "", `${to}#${hash}`);
                            setTimeout(() => {
                              const el = document.getElementById(hash);
                              if (el) {
                                el.scrollIntoView({ behavior: "smooth", block: "start" });
                              }
                            }, 10);
                          }
                        }}
                        className="hover:opacity-100 hover:text-[#FFC107] transition-colors duration-200"
                      >
                        {l}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-xs sm:text-sm opacity-60">
          © {new Date().getFullYear()} ZoujUp.
        </div>
      </div>
    </footer>
  );
}
