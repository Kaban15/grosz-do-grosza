import { content } from '@/data/content';
import { StepList } from '@/components/StepList';
import Checklist from '@/components/Checklist';
import TrackedLink from '@/components/TrackedLink';
import { ArrowRight, UserCheck, AlertTriangle } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans text-gray-900 selection:bg-red-100">
      
      {/* Navbar (Minimal) */}
      <nav className="border-b border-gray-100 py-4">
        <div className="container max-w-3xl mx-auto px-6">
          <span className="font-bold text-xl tracking-tight">grosz-do-grosza<span className="text-red-600">.vercel.app</span></span>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="py-16 md:py-24">
        <div className="container max-w-3xl mx-auto px-6">
          <span className="inline-block px-3 py-1 bg-red-50 text-red-700 text-sm font-semibold rounded-full mb-6">
            {content.hero.badge}
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight">
            {content.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 leading-relaxed mb-10">
            {content.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <TrackedLink 
              href={content.links.affiliateUrl}
              eventName="hero_cta_click"
              className="inline-flex justify-center items-center px-8 py-4 bg-red-600 text-white font-bold rounded-xl text-lg hover:bg-red-700 transition-colors shadow-lg shadow-red-200"
            >
              {content.hero.cta} <ArrowRight className="ml-2" />
            </TrackedLink>
          </div>
        </div>
      </header>

      {/* Why Section */}
      <section className="bg-gray-50 py-16">
        <div className="container max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-10">{content.features.title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {content.features.items.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <item.icon className="w-8 h-8 text-red-600 mb-4" />
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20">
        <div className="container max-w-3xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4">{content.steps.title}</h2>
            <p className="text-xl text-gray-600">{content.steps.intro}</p>
          </div>
          
          <StepList />

          {/* Bottom CTA */}
          <div className="mt-20 p-8 bg-gray-900 text-white rounded-2xl text-center">
            <h3 className="text-2xl font-bold mb-6">Gotowy odebrać swoje 900 zł?</h3>
            <TrackedLink 
              href={content.links.affiliateUrl}
              eventName="footer_cta_click"
              className="inline-block px-8 py-4 bg-red-600 hover:bg-red-500 text-white font-bold rounded-xl text-lg transition-all transform hover:scale-105"
            >
              {content.steps.finalCta}
            </TrackedLink>
            <p className="mt-4 text-sm text-gray-400">{content.footer.disclaimer}</p>
          </div>
        </div>
      </section>

      {/* Checklist Section */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-4xl mx-auto px-6">
          <Checklist />
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="bg-blue-50 py-16">
        <div className="container max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-10 text-center">{content.eligibility.title}</h2>
          <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-8">
            <ul className="space-y-4">
              {content.eligibility.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <UserCheck className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Consents Section */}
      <section className="bg-yellow-50 py-16">
        <div className="container max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-sm border border-yellow-200 p-8">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0" />
              <h2 className="text-2xl font-bold text-gray-900">{content.consents.title}</h2>
            </div>
            <p className="text-lg text-gray-700 mb-6">{content.consents.intro}</p>
            <ul className="space-y-4">
              {content.consents.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-yellow-100 text-yellow-800 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="text-gray-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-100 text-center text-gray-400 text-sm">
        <p>{content.footer.text}</p>
      </footer>
    </main>
  );
}
