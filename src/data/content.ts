import { CheckCircle2, DollarSign, MousePointerClick, ShieldCheck } from "lucide-react";

export const content = {
  meta: {
    title: "Jak zgarnąć 900 zł od Santander? Prosta instrukcja.",
    description: "Sprawdź, jak w kilku prostych krokach odebrać premię za założenie konta. Poradnik krok po kroku.",
  },
  links: {
    affiliateUrl: "https://www.santander.pl/ws-konto-santander-all-2-blog/?cmids=30790093_8075356_391949351_583533631_219081426&gad_campaignid=21145720312&transactionId=458953085&uap=2223&uap2=1234",
  },
  referral: {
    code: "QQ76NB",
    label: "Twój kod polecający:",
    copyButtonText: "Kopiuj kod",
    copiedText: "Skopiowano!",
    note: "Wpisz ten kod we wniosku, aby zagwarantować sobie premię.",
  },
  hero: {
    badge: "Poradnik Finansowy 2024",
    title: "900 zł premii od Santander. To łatwiejsze, niż myślisz.",
    subtitle: "Banki często komplikują regulaminy. My prześwietliliśmy ten proces. Okazuje się, że wystarczy 15 minut i kilka prostych czynności, by zyskać solidny zastrzyk gotówki.",
    cta: "Przejdź do wniosku",
  },
  features: {
    title: "Dlaczego warto poświęcić te 15 minut?",
    items: [
      {
        icon: DollarSign,
        title: "Aż do 900 zł zwrotu",
        desc: "Jedna z najwyższych premii na rynku w tym roku."
      },
      {
        icon: ShieldCheck,
        title: "Bezpieczny bank",
        desc: "Promocja organizowana bezpośrednio przez Santander Bank Polska."
      },
      {
        icon: MousePointerClick,
        title: "Proces 100% online",
        desc: "Bez wizyt w oddziale, bez kuriera. Wszystko załatwisz na selfie."
      }
    ]
  },
  steps: {
    title: "Twoja mapa do premii (Krok po kroku)",
    intro: "Nie musisz czytać skomplikowanych regulaminów. Oto lista kontrolna, która dzieli Cię od wypłaty.",
    list: [
      {
        id: 1,
        title: "Złóż wniosek z linku promocyjnego",
        desc: "To kluczowy moment. Użyj dedykowanego przycisku poniżej, aby bank wiedział, że bierzesz udział w promocji.",
        highlight: true // Oznacza, że ten krok zawiera przycisk CTA
      },
      {
        id: 2,
        title: "Wpisz Kod Polecający",
        desc: "Na drugiej lub trzeciej stronie wniosku znajdziesz pole na kod. To Twoja przepustka do pełnej puli nagród.",
        isReferralStep: true // Oznacza, że tutaj wyświetlimy box z kodem
      },
      {
        id: 3,
        title: "Zaznacz zgody marketingowe",
        desc: "Bank musi mieć możliwość kontaktu z Tobą w sprawie nagrody. Bez tego premia nie zostanie naliczona. Możesz je wycofać po odebraniu nagrody."
      },
      {
        id: 4,
        title: "Wykonaj proste aktywności",
        desc: "Wystarczy, że zalogujesz się do aplikacji, zapłacisz kilka razy kartą i zapewnisz wpływ na konto (np. przelew z Twojego innego konta). To wszystko!"
      },
    ],
    finalCta: "Załóż konto i odbierz premię",
  },
  footer: {
    text: "Promocja ograniczona czasowo. Decyduje data złożenia wniosku.",
    disclaimer: "Treści na stronie mają charakter informacyjny i promują usługi partnera.",
  }
};
