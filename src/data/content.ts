import { CheckCircle2, DollarSign, MousePointerClick, ShieldCheck, CreditCard, Smartphone, Gift, Calendar, AlertCircle } from "lucide-react";

export const content = {
  meta: {
    title: "Zgarnij 900 zł w bonusach za Konto Santander",
    description: "800 zł premii gotówkowej + 100 zł bonu na zakupy (Biedronka/Zalando/Decathlon) lub bilety do kina. Do tego 5% na lokacie.",
  },
  links: {
    affiliateUrl: "https://www.santander.pl/ws-konto-santander-all-2-blog/?cmids=30790093_8075356_391949351_583533631_219081426&gad_campaignid=21145720312&transactionId=458953085&uap=2223&uap2=1234",
  },
  referral: {
    code: "7L4R2V",
    label: "Twój kod polecający:",
    copyButtonText: "Kopiuj kod",
    copiedText: "Skopiowano!",
    note: "Wpisz ten kod we wniosku, aby zagwarantować sobie premię.",
  },
  hero: {
    badge: "Promocja Bankowa 2026",
    title: "Zgarnij 900 zł w bonusach za Konto Santander",
    subtitle: "800 zł premii gotówkowej + 100 zł bonu na zakupy (Biedronka/Zalando/Decathlon) lub bilety do kina. Do tego 5% na lokacie. Otwórz konto w 15 minut przez aplikację.",
    cta: "Załóż konto i odbierz premię",
  },
  features: {
    title: "Dlaczego warto założyć konto Santander?",
    items: [
      {
        icon: DollarSign,
        title: "800 zł premii gotówkowej",
        desc: "Przelew na Twoje konto po spełnieniu prostych warunków. Środki od razu do dyspozycji."
      },
      {
        icon: Gift,
        title: "100 zł bonu na zakupy",
        desc: "Wybierz Biedronkę, Zalando, Decathlon lub bilety do kina. Bon z ważnością 6 miesięcy."
      },
      {
        icon: CreditCard,
        title: "0 zł za kartę",
        desc: "Jeśli wydasz min. 300 zł kartą/BLIKiem miesięcznie, inaczej tylko 9 zł opłaty."
      },
      {
        icon: ShieldCheck,
        title: "0 zł za prowadzenie konta",
        desc: "Jeśli wydasz min. 300 zł miesięcznie, inaczej tylko 6 zł. Dla młodych (<26 lat) bezwarunkowo 0 zł."
      },
      {
        icon: Smartphone,
        title: "Darmowe bankomaty BLIK",
        desc: "Wypłaty ze wszystkich bankomatów w Polsce bez dodatkowych opłat."
      }
    ]
  },
  steps: {
    title: "Jak odebrać 900 zł premii krok po kroku",
    intro: "Prześwietliliśmy regulamin i przygotowali prostą instrukcję. Wykonaj te 5 kroków, aby odebrać pełną premię.",
    list: [
      {
        id: 1,
        title: "Złóż wniosek online",
        desc: "Wybierz metodę 'na selfie' lub 'przez mObywatel'. Nie zamawiaj kuriera - to kluczowe dla szybkiej weryfikacji. Użyj dedykowanego linku poniżej.",
        highlight: true
      },
      {
        id: 2,
        title: "Wyraź zgody marketingowe",
        desc: "Podaj email i telefon. Zaznacz zgody marketingowe i na EKK (Elektroniczny Kanał Kontaktu). Bez tego bank nie wypłaci premii.",
        isReferralStep: false
      },
      {
        id: 3,
        title: "Wpisz kod polecający",
        desc: "W drugim lub trzecim kroku wniosku znajdziesz pole na kod polecenia. To Twoja przepustka do pełnej puli nagród.",
        isReferralStep: true
      },
      {
        id: 4,
        title: "Zapewnij wpływ i aktywność",
        desc: "W miesiącu po otwarciu zapewnij wpływ min. 1000 zł (nawet przelew z własnego konta) i wykonaj płatności kartą/BLIK na min. 300 zł.",
        isReferralStep: false
      },
      {
        id: 5,
        title: "Odbierz dodatkowe 100 zł",
        desc: "Zarejestruj się w programie poleceń bankowości i wpisz kod polecającego. Nagroda 100 zł zostanie dodana do Twojego konta.",
        isReferralStep: false
      }
    ],
    finalCta: "Załóż konto i odbierz 900 zł premii",
  },
  importantDates: {
    title: "Ważne daty",
    items: [
      {
        icon: Calendar,
        title: "Promocja ważna do",
        desc: "31 marca 2026 (lub do wyczerpania puli nagród)"
      },
      {
        icon: AlertCircle,
        title: "Program poleceń ważny do",
        desc: "28 lutego 2026 - zarejestruj się przed tym terminem"
      }
    ]
  },
  footer: {
    text: "Promocja ograniczona czasowo. Decyduje data złożenia wniosku.",
    disclaimer: "Treści na stronie mają charakter informacyjny i promują usługi partnera. Przed założeniem konta zapoznaj się z pełnym regulaminem promocji.",
  }
};
