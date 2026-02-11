import { AlertTriangle, Banknote, CalendarClock, CreditCard, CheckCircle2, Smartphone, Gift } from "lucide-react";

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
    title: "Zgarnij łącznie 900 zł. Minimum formalności, zero wysiłku.",
    subtitle: "Premia to w sumie: 800 zł w gotówce (4 przelewy) + bon 100 zł. Zobacz, kiedy dokładnie pieniądze wpłyną na Twoje konto.",
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
        desc: "To proste: Warunki spełniasz w miesiącu X -> Przelew 200 zł dostajesz do końca miesiąca X+1. Nagroda za kod (100 zł) wpadnie szybciej - do 5 dni po spełnieniu warunków płatności (300 zł)."
      },
    ],
    finalCta: "Zacznij teraz i odbierz pierwszą kasę",
  },
  footer: {
    text: "Pamiętaj: Promocja z kodem kończy się 28.02.2026. Główna promocja trwa do 31.03.2026. Wskazówka: Po odebraniu ostatniej premii możesz bezpłatnie zamknąć konto, jeśli nie będziesz chciał z niego dalej korzystać.",
    disclaimer: "Informacje oparte na regulaminie promocji 'Do 800 zł na start'.",
  }
};
