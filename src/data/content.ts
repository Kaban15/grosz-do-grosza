import { AlertTriangle, Banknote, CalendarClock, CreditCard, CheckCircle2, Smartphone } from "lucide-react";

export const content = {
  meta: {
    title: "Odbierz 900 zł od Santander. Instrukcja krok po kroku.",
    description: "Poradnik jak zdobyć 800 zł premii + 100 zł bonu w programie poleceń. Sprawdź warunki i daty.",
  },
  links: {
    affiliateUrl: "https://www.santander.pl/ws-konto-santander-all-2-blog/?cmids=30790093_8075356_391949351_583533631_219081426&gad_campaignid=21145720312&transactionId=458953085&uap=2223&uap2=1234",
  },
  referral: {
    code: "QQ76NB",
    label: "Twój kod do bonusu 100 zł:",
    copyButtonText: "Kopiuj kod",
    copiedText: "Skopiowano!",
    note: "WAŻNE: Kod wpisujesz DOPIERO PO założeniu konta, w bankowości internetowej.",
    deadline: "Kod ważny tylko do 28.02.2026 r."
  },
  hero: {
    badge: "Aktualizacja: Luty 2026",
    title: "Aż 900 zł premii od Santander. Mamy kompletny harmonogram.",
    subtitle: "800 zł gotówki + 100 zł bonu (Biedronka/Zalando/Cinema City). Promocja na kod polecający kończy się szybciej niż myślisz!",
    cta: "Przejdź do wniosku o konto",
  },
  features: {
    title: "Prześwietlamy ofertę - konkrety:",
    items: [
      {
        icon: Banknote,
        title: "900 zł łącznej premii",
        desc: "800 zł w gotówce od banku + 100 zł w bonie za wpisanie kodu polecającego."
      },
      {
        icon: CalendarClock,
        title: "Ważne terminy",
        desc: "Główna promocja do 31.03.2026, ale kod polecający musisz wpisać do 28.02.2026!"
      },
      {
        icon: CreditCard,
        title: "Konto za 0 zł",
        desc: "Darmowe konto i karta, jeśli wydasz min. 300 zł miesięcznie (inaczej 6+9 zł). Dla osób do 26 r.ż. konto bezwarunkowo darmowe."
      }
    ]
  },
  steps: {
    title: "Twoja mapa do 900 zł (Checklista)",
    intro: "Nie odkładaj tego na później. Program poleceń kończy się 28 lutego.",
    list: [
      {
        id: 1,
        title: "Złóż wniosek (do 31.03.2026)",
        desc: "Kliknij w przycisk poniżej i wybierz metodę 'Na selfie' lub przez 'mObywatel'. Nie zamawiaj kuriera, bo stracisz część premii.",
        highlight: true
      },
      {
        id: 2,
        title: "Wyraź zgody (Kluczowe)",
        desc: "Zaznacz zgody na marketing (elektroniczny i telefoniczny) oraz na EKK (Elektroniczny Kanał Kontaktu). Podaj aktualny email i numer telefonu."
      },
      {
        id: 3,
        title: "WPISZ KOD POLECENIA (Do 28.02.2026!)",
        desc: "To najważniejszy krok dla bonusu 100 zł. Po aktywacji konta zaloguj się do aplikacji/serwisu. Wejdź w zakładkę 'Oferta' -> 'Program poleceń' i wpisz kod. Masz na to czas bezwzględnie do końca lutego.",
        isReferralStep: true
      },
      {
        id: 4,
        title: "Aktywność w kolejnych miesiącach",
        desc: "W każdym z 4 kolejnych miesięcy (np. marzec, kwiecień, maj, czerwiec): 1) Zapewnij wpływ min. 1000 zł (np. z Twojego konta w innym banku). 2) Zapłać kartą/BLIKiem min. 300 zł (uwaga: Revolut i bukmacherzy się nie liczą!)."
      },
    ],
    finalCta: "Załóż konto i zdąż przed 28.02",
  },
  footer: {
    text: "Promocja 'Załóż konto z polecenia' trwa do 28.02.2026. Promocja 'Do 800 zł na start' trwa do 31.03.2026.",
    disclaimer: "Pamiętaj o opłatach za konto (0 zł przy aktywności). Treść ma charakter informacyjny.",
  }
};
