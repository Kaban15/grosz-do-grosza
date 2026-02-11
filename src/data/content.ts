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
  },
  consents: {
    title: "⚠️ Ważne: Wymagane Zgody we Wniosku",
    intro: "Aby otrzymać premię, we wniosku o konto musisz zaznaczyć konkretne zgody. Bez tego bank nie wypłaci nagrody!",
    items: [
      "Wyraź zgodę na EKK (Elektroniczny Kanał Kontaktu) - sprawdzisz to w ustawieniach po zalogowaniu.",
      "Wyraź zgodę na kontakt telefoniczny i elektroniczny w celach marketingowych.",
      "Nie zgłaszaj sprzeciwu wobec przetwarzania danych przez bank w celach marketingowych.",
      "Podaj aktualny numer telefonu komórkowego i adres email.",
      "Zaakceptuj pliki cookies (ważne dla poprawnego zapisu wniosku z promocji)."
    ]
  }
};
