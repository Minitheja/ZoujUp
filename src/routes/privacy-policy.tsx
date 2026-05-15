import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { useLang } from "@/lib/LanguageContext";

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
  const { lang } = useLang();

  if (lang === "es") {
    return (
      <div className="relative min-h-screen bg-white overflow-x-hidden">
        <Navbar />
        <main className="pt-24 sm:pt-32 pb-16 sm:pb-24">
          <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#1A1A1A] mb-2 font-display">POLÍTICA DE PRIVACIDAD</h1>
            <p className="text-sm text-[#6B7280] mb-10 italic">Última actualización: mayo de 2026</p>

            <div className="space-y-10 text-[#1A1A1A]">
              <section className="space-y-3">
                <h2 className="text-xl font-bold uppercase tracking-wide text-[#FFC107]">1. QUIÉNES SOMOS</h2>
                <p className="leading-relaxed">
                  ZoujUp es una aplicación móvil de práctica de idiomas actualmente en desarrollo.
                  <br />
                  Contacto: <a href="mailto:contact@zoujup.com" className="text-[#FFC107] hover:underline">contact@zoujup.com</a>
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold uppercase tracking-wide text-[#FFC107]">2. QUÉ DATOS RECOPILAMOS</h2>
                <div className="leading-relaxed space-y-1">
                  <p>Cuando te unes a nuestra lista de espera, recopilamos:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Tu dirección de correo electrónico</li>
                    <li>Tu idioma nativo</li>
                    <li>El idioma que quieres practicar</li>
                  </ul>
                </div>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold uppercase tracking-wide text-[#FFC107]">3. POR QUÉ LOS RECOPILAMOS</h2>
                <div className="leading-relaxed space-y-1">
                  <p>Usamos esta información para:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Notificarte cuando ZoujUp se lance y enviarte información sobre el acceso anticipado</li>
                    <li>Entender las necesidades lingüísticas de nuestra comunidad para garantizar coincidencias de alta calidad desde el primer día</li>
                  </ul>
                </div>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold uppercase tracking-wide text-[#FFC107]">4. CÓMO LOS ALMACENAMOS</h2>
                <p className="leading-relaxed">
                  Tu correo electrónico se almacena de forma segura a través de nuestra plataforma de correo (Mailchimp o equivalente). No almacenamos ninguna otra información personal.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold uppercase tracking-wide text-[#FFC107]">5. CUÁNTO TIEMPO LOS CONSERVAMOS</h2>
                <p className="leading-relaxed">
                  Conservamos tu correo electrónico hasta el lanzamiento de la aplicación. Puedes solicitar su eliminación en cualquier momento.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold uppercase tracking-wide text-[#FFC107]">6. TUS DERECHOS</h2>
                <p className="leading-relaxed">
                  Tienes derecho a acceder, corregir o eliminar tus datos en cualquier momento. Para hacerlo, escríbenos a <a href="mailto:contact@zoujup.com" className="text-[#FFC107] hover:underline">contact@zoujup.com</a>
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold uppercase tracking-wide text-[#FFC107]">7. NUNCA VENDEMOS TUS DATOS</h2>
                <p className="leading-relaxed">
                  Nunca compartiremos ni venderemos tu correo electrónico a ningún tercero.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold uppercase tracking-wide text-[#FFC107]">8. COOKIES</h2>
                <p className="leading-relaxed">
                  Este sitio web no utiliza cookies de seguimiento en esta etapa.
                </p>
              </section>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (lang === "da") {
    return (
      <div className="relative min-h-screen bg-white overflow-x-hidden" dir="rtl">
        <Navbar />
        <main className="pt-24 sm:pt-32 pb-16 sm:pb-24">
          <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#1A1A1A] mb-2 font-display">سياسة الخصوصية</h1>
            <p className="text-sm text-[#6B7280] mb-10 italic">آخر تحديث: ماي 2026</p>

            <div className="space-y-10 text-[#1A1A1A]">
              <section className="space-y-3">
                <h2 className="text-xl font-bold uppercase tracking-wide text-[#FFC107]">1. شكون حنا</h2>
                <p className="leading-relaxed">
                  ZoujUp هي تطبيق موبايل لتمرين اللغات، حاليًا في طور التطوير.
                  <br />
                  للتواصل: <a href="mailto:contact@zoujup.com" className="text-[#FFC107] hover:underline">contact@zoujup.com</a>
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold uppercase tracking-wide text-[#FFC107]">2. أنهي معطيات كنجمعو</h2>
                <div className="leading-relaxed space-y-1">
                  <p>ملي كتنضم للقائمة ديالنا، كنجمعو:</p>
                  <ul className="list-disc pr-6 space-y-1">
                    <li>عنوان الإيميل ديالك</li>
                    <li>اللغة الأم ديالك</li>
                    <li>اللغة اللي بغيت تتمرن عليها</li>
                  </ul>
                </div>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold uppercase tracking-wide text-[#FFC107]">3. علاش كنجمعوها</h2>
                <div className="leading-relaxed space-y-1">
                  <p>كنستعملو هاد المعلومات باش:</p>
                  <ul className="list-disc pr-6 space-y-1">
                    <li>نعلموك ملي يتلاوح ZoujUp ونبعثوليك معلومات على الوصول المبكر</li>
                    <li>نفهمو احتياجات اللغات ديال مجتمعنا باش نضمنو مطابقات ذات جودة عالية من اليوم الأول</li>
                  </ul>
                </div>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold uppercase tracking-wide text-[#FFC107]">4. كيفاش كنحفظوها</h2>
                <p className="leading-relaxed">
                  الإيميل ديالك كيتحفظ بأمان عبر منصة الإيميل ديالنا (Mailchimp أو ما يشابهها). ما كنحفظوش أي معلومة شخصية أخرى.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold uppercase tracking-wide text-[#FFC107]">5. قداش غادي نحتفظو بيها</h2>
                <p className="leading-relaxed">
                  كنحتفظو بالإيميل ديالك حتى يتلاوح التطبيق. يمكنك تطلب حذفو في أي وقت.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold uppercase tracking-wide text-[#FFC107]">6. حقوقك</h2>
                <p className="leading-relaxed">
                  عندك الحق توصل، تصحح، أو تحذف المعطيات ديالك في أي وقت. باش تدير هادشي، راسلنا على <a href="mailto:contact@zoujup.com" className="text-[#FFC107] hover:underline">contact@zoujup.com</a>
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold uppercase tracking-wide text-[#FFC107]">7. ما غادي نبيعوش المعطيات ديالك أبداً</h2>
                <p className="leading-relaxed">
                  ما غادي نشاركوش ولا نبيعوش الإيميل ديالك لأي طرف ثالث.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold uppercase tracking-wide text-[#FFC107]">8. الكوكيز</h2>
                <p className="leading-relaxed">
                  هاد الموقع ما كيستعملش أي كوكيز للتتبع في هاد المرحلة.
                </p>
              </section>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (lang === "fr") {
    return (
      <div className="relative min-h-screen bg-white overflow-x-hidden">
        <Navbar />
        <main className="pt-24 sm:pt-32 pb-16 sm:pb-24">
          <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#1A1A1A] mb-2 font-display">POLITIQUE DE CONFIDENTIALITÉ</h1>
            <p className="text-sm text-[#6B7280] mb-10 italic">Dernière mise à jour : mai 2026</p>

            <div className="space-y-10 text-[#1A1A1A]">
              <section className="space-y-3">
                <h2 className="text-xl font-bold uppercase tracking-wide text-[#FFC107]">1. QUI SOMMES-NOUS</h2>
                <p className="leading-relaxed">
                  ZoujUp est une application mobile de pratique des langues actuellement en développement.
                  <br />
                  Contact : <a href="mailto:contact@zoujup.com" className="text-[#FFC107] hover:underline">contact@zoujup.com</a>
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold uppercase tracking-wide text-[#FFC107]">2. QUELLES DONNÉES NOUS COLLECTONS</h2>
                <div className="leading-relaxed space-y-1">
                  <p>Lorsque vous rejoignez notre liste d'attente, nous collectons :</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Votre adresse e-mail</li>
                    <li>Votre langue maternelle</li>
                    <li>La langue que vous souhaitez pratiquer</li>
                  </ul>
                </div>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold uppercase tracking-wide text-[#FFC107]">3. POURQUOI NOUS LES COLLECTONS</h2>
                <div className="leading-relaxed space-y-1">
                  <p>Nous utilisons ces informations pour :</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Vous notifier au lancement de ZoujUp et vous envoyer des informations sur l'accès anticipé</li>
                    <li>Comprendre les besoins linguistiques de notre communauté pour garantir des mises en relation de qualité dès le premier jour</li>
                  </ul>
                </div>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold uppercase tracking-wide text-[#FFC107]">4. COMMENT NOUS LES STOCKONS</h2>
                <p className="leading-relaxed">
                  Votre e-mail est stocké de manière sécurisée via notre plateforme d'e-mailing (Mailchimp ou équivalent). Nous ne stockons aucune autre information personnelle.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold uppercase tracking-wide text-[#FFC107]">5. COMBIEN DE TEMPS NOUS LES CONSERVONS</h2>
                <p className="leading-relaxed">
                  Nous conservons votre e-mail jusqu'au lancement de l'application. Vous pouvez demander sa suppression à tout moment.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold uppercase tracking-wide text-[#FFC107]">6. VOS DROITS</h2>
                <p className="leading-relaxed">
                  Vous avez le droit d'accéder, de corriger ou de supprimer vos données à tout moment. Pour ce faire, envoyez-nous un e-mail à <a href="mailto:contact@zoujup.com" className="text-[#FFC107] hover:underline">contact@zoujup.com</a>
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold uppercase tracking-wide text-[#FFC107]">7. NOUS NE VENDONS JAMAIS VOS DONNÉES</h2>
                <p className="leading-relaxed">
                  Nous ne partagerons ni ne vendrons jamais votre adresse e-mail à un tiers.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold uppercase tracking-wide text-[#FFC107]">8. COOKIES</h2>
                <p className="leading-relaxed">
                  Ce site web n'utilise aucun cookie de suivi à ce stade.
                </p>
              </section>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

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
