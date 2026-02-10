# Debug Report - Tailwind CSS Problem

## 1. Struktura plików

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
├── package.json
├── postcss.config.js
├── tsconfig.json
└── README.md
```

**UWAGA:** Folder `app` jest wewnątrz folderu `src`, co jest POPRAWNE dla Next.js App Router.

## 2. Zawartość kluczowych plików

### tailwind.config.ts
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

### src/app/globals.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### src/app/layout.tsx
```typescript
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";  // <--- TO JEST NAJWAŻNIEJSZA LINIA. BEZ NIEJ STYLE NIE DZIAŁAJĄ.

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
```

### package.json
```json
{
  "name": "grosz-do-grosza",
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@tailwindcss/postcss": "^4.1.18",
    "@types/react": "^19.2.13",
    "@types/react-dom": "^19.2.3",
    "autoprefixer": "^10.4.24",
    "lucide-react": "^0.563.0",
    "next": "^16.1.6",
    "postcss": "^8.5.6",
    "react": "^19.2.4",
    "react-dom": "^19.2.4",
    "tailwindcss": "^4.1.18",
    "typescript": "^5.9.3"
  },
  "devDependencies": {
    "@types/node": "^25.2.3"
  }
}
```

## 3. Obserwacje

✅ **Poprawne elementy:**
- Struktura folderów jest poprawna (src/app/...)
- Import globals.css w layout.tsx jest na samej górze
- tailwind.config.ts ma poprawną ścieżkę "./src/**/*.{js,ts,jsx,tsx,mdx}"
- globals.css zawiera tylko dyrektywy @tailwind

⚠️ **Potencjalne problemy:**
- Używany Tailwind CSS v4.1.18 (nowa wersja) - może mieć problemy z Next.js 16
- Zainstalowany @tailwindcss/postcss - może być problem z konfiguracją
- W package.json brakuje standardowego tailwindcss (tylko @tailwindcss/postcss)

## 4. Rekomendacje

1. **Sprawdzić wersję Tailwind CSS** - może być potrzebna starsza wersja
2. **Sprawdzić konfigurację PostCSS** - może być problem z @tailwindcss/postcss
3. **Sprawdzić build logi** - aby znaleźć dokładny błąd
