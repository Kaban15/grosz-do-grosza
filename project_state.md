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

- **Oferta:** 900 zł (800 zł gotówka + 100 zł bon)
- **Kod polecający:** `QQ76NB` (Ważny do 28.02.2026)
- **Miejsce wpisania kodu:** W bankowości po zalogowaniu (zakładka "Program poleceń"), NIE we wniosku
- **Harmonogram wypłat:**
  - 4 transze po 200 zł (miesiąc po spełnieniu warunków)
  - Bon 100 zł (do 5 dni po spełnieniu warunków płatności 300 zł)
- **Warunki aktywności:** 1000 zł wpływ + 300 zł płatności kartą/BLIK miesięcznie
- **Wykluczenia:** Revolut, bukmacherzy (quasi-cash)
- **Nazwa w nawigacji:** `grosz-do-grosza.vercel.app`

## Kluczowe Daty

- **Kod polecający:** 28.02.2026 (pilne!)
- **Główna promocja:** 31.03.2026
- **Wniosek:** Metoda "na selfie" lub "przez mObywatel" (kurier wyklucza)

## Zrzut Kluczowego Kodu

### `src/data/content.ts`
```typescript
import { AlertTriangle, Banknote, CalendarClock, CreditCard, CheckCircle2, Smartphone, Gift } from "lucide-react";

export const content = {
  meta: {
    title: "Harmonogram 900 zł od Santander. Kiedy przelewy?",
    description: "Sprawdź dokładnie za co i kiedy otrzymasz poszczególne transze premii. Instrukcja krok po kroku.",
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
    title: "Jak odebrać 900 zł w transzach? Dokładny harmonogram.",
    subtitle: "Premia jest podzielona: 4 przelewy po 200 zł (gotówka) + 1 bon 100 zł (Biedronka/Zalando/Kino). Zobacz, kiedy dokładnie wpłyną na Twoje konto.",
    cta: "Przejdź do wniosku o konto",
  },
  features: {
    title: "Rozbijamy bank - co dokładnie dostajesz?",
    items: [
      {
        icon: Banknote,
        title: "4x 200 zł (Gotówka)",
        desc: "Za aktywność w 4 kolejnych miesiącach po otwarciu konta. Wypłata co miesiąc na konto."
      },
      {
        icon: Gift,
        title: "100 zł (Bon)",
        desc: "Nagroda za wpisanie kodu polecającego. Do wyboru: Biedronka, Decathlon, Zalando, RTV Euro AGD lub Cinema City."
      },
      {
        icon: CalendarClock,
        title: "Wypłaty co miesiąc",
        desc: "Nie czekasz pół roku na całość. Premie spływają sukcesywnie do końca miesiąca następującego po spełnieniu warunków."
      }
    ]
  },
  steps: {
    title: "Instrukcja i Terminarz Wypłat",
    intro: "Trzymaj się tego planu, a nie ominie Cię żadna transza.",
    list: [
      {
        id: 1,
        title: "Luty: Złóż wniosek i otwórz konto",
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
        desc: "Zasada jest prosta: Warunki spełniasz w miesiącu X -> Przelew 200 zł dostajesz do końca miesiąca X+1. Nagroda za kod (100 zł) wpadnie szybciej - do 5 dni po spełnieniu warunków płatności (300 zł)."
      },
    ],
    finalCta: "Zacznij teraz i odbierz pierwszą kasę",
  },
  footer: {
    text: "Pamiętaj: Promocja z kodem kończy się 28.02.2026. Główna promocja trwa do 31.03.2026.",
    disclaimer: "Informacje oparte na regulaminie promocji 'Do 800 zł na start'.",
  }
};
```

### `src/app/page.tsx`
```typescript
import { content } from '@/data/content';
import { StepList } from '@/components/StepList';
import { ArrowRight } from 'lucide-react';

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
            <a 
              href={content.links.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center px-8 py-4 bg-red-600 text-white font-bold rounded-xl text-lg hover:bg-red-700 transition-colors shadow-lg shadow-red-200"
            >
              {content.hero.cta} <ArrowRight className="ml-2" />
            </a>
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
            <a 
              href={content.links.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-red-600 hover:bg-red-500 text-white font-bold rounded-xl text-lg transition-all transform hover:scale-105"
            >
              {content.steps.finalCta}
            </a>
            <p className="mt-4 text-sm text-gray-400">{content.footer.disclaimer}</p>
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
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── ReferralBox.tsx
│   │   └── StepList.tsx
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

---

*Ostatnia aktualizacja: 10.02.2026*
