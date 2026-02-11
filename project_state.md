# Project State - Save Game

## Status Techniczny

- **Framework:** Next.js 16.1.6 (App Router)
- **Styling:** Tailwind CSS v3.4.17 (downgrade z v4 w celu naprawy stylów)
- **Fixes wykonane:**
  - Naprawione importy w `layout.tsx` (globals.css na samej górze)
  - Konfiguracja `tailwind.config.ts` - poprawna ścieżka "./src/**/*.{js,ts,jsx,tsx,mdx}"
  - Konfiguracja `postcss.config.js` - przełączona na standardowy tailwindcss: {}
- **Deployment:** Vercel - https://grosz-do-grosza.vercel.app
- **Repozytorium:** GitHub - https://github.com/Kaban15/grosz-do-grosza

## Status Merytoryczny (Santander)

- **Oferta:** 900 zł (800 zł gotówka + 100 zł bon) - Łączna kwota
- **Kod polecający:** `QQ76NB` (Ważny do 28.02.2026)
- **Miejsce wpisania kodu:** W bankowości po zalogowaniu (zakładka "Program poleceń"), NIE we wniosku
- **Harmonogram wypłat:**
  - 4 transze po 200 zł (miesiąc po spełnieniu warunków)
  - Bon 100 zł (do 5 dni po spełnieniu warunków płatności 300 zł)
- **Warunki aktywności:** 1000 zł wpływ + 300 zł płatności kartą/BLIK miesięcznie
- **Wykluczenia:** Revolut, bukmacherzy (quasi-cash)
- **Nazwa w nawigacji:** `grosz-do-grosza.vercel.app`
- **Nowe sekcje:** 'Dla kogo promocja' (Eligibility) oraz 'Lista Zadań do druku' (Checklist)

## Kluczowe Daty

- **Kod polecający:** 28.02.2026 (pilne!)
- **Główna promocja:** 31.03.2026
- **Wniosek:** Metoda "na selfie" lub "przez mObywatel" (kurier wyklucza)

## Zrzut Kluczowego Kodu

### `src/data/content.ts`
```typescript
import { AlertTriangle, Banknote, CalendarClock, CreditCard, CheckCircle2, Smartphone, Gift, UserCheck, Printer, CheckSquare, Coins } from "lucide-react";

export const content = {
  meta: {
    title: "Harmonogram 900 zł od Santander. Kiedy przelewy?",
    description: "Sprawdź dokładnie za co i kiedy otrzymasz poszczególne premie. Instrukcja krok po kroku.",
  },
  links: {
    affiliateUrl: "https://www.santander.pl/ws-konto-santander-all-2-blog/?cmids=30790093_8075356_391949351_583533631_219081426&gad_campaignid=21145720312&transactionId=458953085&uap=2223&uap2=1234",
  },
  referral: {
    code: "QQ76NB",
    label: "Twój kod na start (100 zł):",
    copyButtonText: "Kopiuj kod",
    copiedText: "Skopiowano!",
    note: "Kod wpisujesz PO założeniu konta w bankowości (zakładka 'Program poleceń'). Masz na to czas do 28.02.2026.",
    deadline: "Ważne: Kod działa tylko do 28.02.2026!"
  },
  hero: {
    badge: "Edycja: Luty 2026",
    title: "Zgarnij łącznie 900 zł za Konto Santander. Minimum formalności.",
    subtitle: "Promocja Konta Santander to w sumie: 800 zł w gotówce (4 przelewy) + bon 100 zł. Zobacz, kiedy dokładnie pieniądze wpłyną na Twoje konto.",
    cta: "Przejdź do wniosku o konto",
  },
  features: {
    title: "Rozbijamy bank - co dokładnie dostajesz?",
    items: [
      {
        icon: Banknote,
        title: "4x 200 zł (Gotówka)",
        desc: "Za aktywność na Koncie Santander w 4 kolejnych miesiącach po otwarciu konta. Wypłata co miesiąc na konto."
      },
      {
        icon: Gift,
        title: "100 zł (Bon)",
        desc: "Nagroda za wpisanie kodu polecającego. Do wyboru: Biedronka, Decathlon, Zalando, RTV Euro AGD lub Cinema City."
      },
      {
        icon: CalendarClock,
        title: "Wypłaty co miesiąc",
        desc: "Pieniądze spływają sukcesywnie na Twoje konto do końca miesiąca następującego po spełnieniu prostych warunków."
      }
    ]
  },
  steps: {
    title: "Instrukcja i Terminarz Wypłat",
    intro: "Trzymaj się tego planu, a nie ominie Cię żadna transza.",
    list: [
      {
        id: 1,
        title: "Luty: Złóż wniosek o Konto Santander",
        desc: "Pamiętaj o wyrażeniu zgód marketingowych i EKK. Wybierz metodę na selfie lub mObywatel (kurier wyklucza z promocji!).",
        highlight: true
      },
      {
        id: 2,
        title: "Luty (do 28.02): Wpisz Kod Polecenia",
        desc: "Zaloguj się do bankowości, wejdź w 'Program poleceń' i wpisz kod QQ76NB. To warunek odbioru bonu 100 zł.",
        isReferralStep: true
      },
      {
        id: 3,
        title: "Marzec, Kwiecień, Maj, Czerwiec (Twoja praca)",
        desc: "W każdym z tych 4 miesięcy musisz: 1) Zapewnić wpływ min. 1000 zł (np. z własnego konta w innym banku). 2) Zapłacić kartą/BLIK min. 300 zł (sklepy, stacje paliw - uwaga: bez hazardu/Revoluta)."
      },
      {
        id: 4,
        title: "Kwiecień, Maj, Czerwiec, Lipiec (Wypłaty)",
        desc: "To proste: Warunki spełniasz w miesiącu X -> Przelew 200 zł dostajesz do końca miesiąca X+1. Nagroda za kod (100 zł) wpadnie szybciej - do 5 dni po spełnieniu warunków płatności (300 zł)."
      },
    ],
    finalCta: "Zacznij teraz i odbierz pierwszą kasę",
  },
  footer: {
    text: "Pamiętaj: Promocja z kodem kończy się 28.02.2026. Główna promocja trwa do 31.03.2026. Wskazówka: Po odebraniu ostatniej premii możesz bezpłatnie zamknąć konto, jeśli nie będziesz chciał z niego dalej korzystać.",
    disclaimer: "Informacje oparte na regulaminie promocji 'Do 800 zł na start'.",
  },
  eligibility: {
    title: "Dla kogo promocja?",
    items: [
      "Masz polskie obywatelstwo i polski dowód osobisty.",
      "Mieszkasz w Polsce.",
      "Nie masz konta w Santanderze (osobistego w PLN) co najmniej od 01.02.2024 r. (dotyczy też współwłaścicieli)."
    ]
  },
  checklist: {
    header: "LISTA ZADAŃ: PROMOCJA SANTANDER (900 ZŁ)",
    subheader: "Edycja: Luty / Marzec 2026",
    rewards: "800 zł premii pieniężnej (4x 200 zł) + 100 zł bon (Program Poleceń)",
    steps: [
      {
        title: "START (Wniosek do 31.03.2026)",
        items: [
          "Złóż wniosek (wyraź zgody)",
          "Podpisz umowę (selfie/mObywatel)"
        ]
      },
      {
        title: "PROGRAM POLECEŃ (Kod do 28.02.2026)",
        items: [
          "Zarejestruj się w programie poleceń",
          "Wpisz kod: QQ76NB",
          "Wykonaj płatności min. 300 zł"
        ]
      },
      {
        title: "ZADANIA MIESIĘCZNE",
        tableRows: [
          { month: "Miesiąc 1", deposit: 1000, payments: 300 },
          { month: "Miesiąc 2", deposit: 1000, payments: 300 },
          { month: "Miesiąc 3", deposit: 1000, payments: 300 },
          { month: "Miesiąc 4", deposit: 1000, payments: 300 }
        ]
      }
    ],
    footer: "Wypłata nagród: do końca kolejnego miesiąca po spełnieniu warunków. Bon 100 zł w ciągu 5 dni od spełnienia warunków płatności."
  }
};
```

### `src/app/page.tsx`
```typescript
import { content } from '@/data/content';
import { StepList } from '@/components/StepList';
import Checklist from '@/components/Checklist';
import TrackedLink from '@/components/TrackedLink';
import { ArrowRight, UserCheck } from 'lucide-react';

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

      {/* Footer */}
      <footer className="py-8 border-t border-gray-100 text-center text-gray-400 text-sm">
        <p>{content.footer.text}</p>
      </footer>
    </main>
  );
}
```

### `src/app/layout.tsx`
```typescript
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";  

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Santander Promocja - Poradnik",
  description: "Odbierz 900 zł premii w prostych krokach.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

### `src/components/Checklist.tsx`
```typescript
'use client';
import { Download } from 'lucide-react';

export default function Checklist() {
  const handleDownload = () => {
    // Create download link for the image
    const link = document.createElement('a');
    link.href = '/images/checklist.png'; 
    link.download = 'lista-zadan-santander-900zl.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Lista Zadań do Pobrania</h2>
        <p className="text-xl text-gray-600">Pobierz gotową checklistę promocji w formie obrazka</p>
      </div>
      
      <div className="bg-white border-2 border-gray-300 rounded-lg shadow-lg p-8">
        {/* Image Display */}
        <div className="mb-6">
          <img 
            src="/images/checklist.png" 
            alt="Lista zadań promocja Santander 900 zł"
            className="w-full h-auto rounded-lg border border-gray-200"
          />
        </div>
        
        {/* Download Button */}
        <div className="text-center">
          <button
            onClick={handleDownload}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
          >
            <Download className="w-5 h-5" />
            Pobierz Listę Zadań (PNG)
          </button>
          <p className="mt-3 text-sm text-gray-500">
            Kliknij, aby pobrać checklistę w wysokiej jakości
          </p>
        </div>
      </div>
    </div>
  );
}
```

### `src/components/TrackedLink.tsx`
```typescript
'use client';
import { track } from '@vercel/analytics';
import React from 'react';

interface TrackedLinkProps {
  href: string;
  children: React.ReactNode;
  eventName: string;
  className?: string;
  target?: string;
  rel?: string;
}

export default function TrackedLink({ 
  href, 
  children, 
  eventName, 
  className = '', 
  target = '_blank',
  rel = 'noopener noreferrer'
}: TrackedLinkProps) {
  const handleClick = () => {
    // Track the event before navigation
    track(eventName, { link: href });
    
    // Navigate to the link
    window.open(href, target, rel);
  };

  return (
    <button 
      onClick={handleClick}
      className={className}
    >
      {children}
    </button>
  );
}
```

### `tailwind.config.ts`
```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;
```

## Struktura Projektu

```
grosz do grosza/
├── public/
│   └── images/
│       └── checklist.png
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── Checklist.tsx
│   │   ├── ReferralBox.tsx
│   │   ├── StepList.tsx
│   │   └── TrackedLink.tsx
│   └── data/
│       └── content.ts
├── tailwind.config.ts
├── postcss.config.js
├── package.json
├── tsconfig.json
├── debug_report.md
└── project_state.md
```

## Komendy

- `npm run dev` - serwer deweloperski
- `npm run build` - build produkcyjny
- `git add . && git commit -m "message" && git push` - deploy

## Analityka i Śledzenie

- **Vercel Analytics:** Automatycznie śledzi page views
- **Custom Events:** 
  - `hero_cta_click` - kliknięcie w główny CTA
  - `footer_cta_click` - kliknięcie w dolny CTA
- **Dane dostępne:** Dashboard Vercel Analytics

---

*Ostatnia aktualizacja: 11.02.2026*
