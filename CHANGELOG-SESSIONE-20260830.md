# Changelog — Sessione 30 Agosto 2026
## Sezione Servizi: Card Terapie con Animazione Morphing

---

### 1. Installazione dipendenza

**File:** `package.json` (modificato via npm)

Aggiunta la libreria **Framer Motion** per le animazioni:
```bash
npm install framer-motion
```

---

### 2. Nuovo componente: `src/components/terapie/TerapieGrid.tsx`

**File creato:** `src/components/terapie/TerapieGrid.tsx`

Componente React che sostituisce la vecchia grid statica delle terapie con card animate.

#### Caratteristiche implementate:

| Feature | Descrizione |
|---|---|
| **Card compatta** | Altezza fissa 132px, immagine dell'area come sfondo con gradiente scuro, titolo in footer, icona `+` in alto a destra |
| **Grid responsive** | 1 colonna mobile → 2 tablet → 3 desktop → 4 XL, gap 12px |
| **Hover effect** | Scale 1.02 + ombra più marcata |
| **Animazione apertura** | La card espande fluidamente dal punto originale verso il centro con spring physics (damping: 26, stiffness: 320) |
| **Backdrop** | Sfondo nero con opacity 35% + backdrop-blur-lg |
| **Chiusura X** | Icona X bianca in alto a destra dell'immagine, stile pulito senza cerchio (come richiesto dall'utente) |
| **Chiusura backdrop** | Click sullo sfondo sfocato chiude la card |
| **Blocco scroll** | `document.body.style.overflow = "hidden"` quando la card è aperta |
| **Link WhatsApp** | Pulsante verde `#25D366` con testo "Chiedi informazioni su WhatsApp", link precompilato con il nome della terapia specifica |
| **Fade-in contenuto** | Descrizione e CTA appaiono con fade-in ritardato (delay 0.12s) |

#### Props del componente:
```ts
type Props = {
  trattamenti: { titolo: string; descrizione: string }[];
  immagineArea: string;
  areaSlug?: string;
};
```

#### Funzione WhatsApp:
```ts
function getWhatsAppHref(terapia: string) {
  const text = encodeURIComponent(
    `Salve, vorrei ricevere maggiori informazioni su: ${terapia}`
  );
  return `https://wa.me/${SITE.whatsapp.replace(/\s/g, "")}?text=${text}`;
}
```

---

### 3. Modifica pagina Servizi

**File modificato:** `src/pages/Servizi.tsx`

#### Aggiunto import:
```tsx
import { TerapieGrid } from "@/components/terapie/TerapieGrid";
```

#### Sostituita la vecchia grid statica (righe ~227-234):

**Prima:**
```tsx
<div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
  {area.trattamenti.map((t) => (
    <div key={t.titolo} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-border">
      <h3 className="font-bold text-blu">{t.titolo}</h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t.descrizione}</p>
    </div>
  ))}
</div>
```

**Dopo:**
```tsx
<TerapieGrid
  trattamenti={area.trattamenti}
  immagineArea={area.immagine}
  areaSlug={area.slug}
/>
```

---

### 4. Fix routing per deploy statico

**File modificato:** `src/main.tsx`

#### Cambiato da `BrowserRouter` a `HashRouter`:

**Prima:**
```tsx
import { BrowserRouter } from 'react-router'
// ...
<BrowserRouter>
  <App />
</BrowserRouter>
```

**Dopo:**
```tsx
import { HashRouter } from 'react-router'
// ...
<HashRouter>
  <App />
</HashRouter>
```

**Motivazione:** `BrowserRouter` richiede configurazione server-side (fallback a index.html per ogni route). Con deploy statico, le pagine diverse dalla home restituivano 404. `HashRouter` usa hash nell'URL (`/#/servizi`) e funziona nativamente con qualsiasi hosting statico.

---

### 5. Build e deploy

Build completata con successo:
```
vite v7.3.0 building client environment for production...
transforming...
✓ 2131 modules transformed.
rendering chunks...
computing gzip size...
dist/index.html                   1.72 kB │ gzip:   0.78 kB
dist/assets/index-DblmZnOF.css   94.67 kB │ gzip:  15.50 kB
dist/assets/index-DhcnZXn7.js   487.09 kB │ gzip: 149.12 kB
✓ built in 5.47s
```

---

### Note tecniche

- **React versione:** 19.2.0
- **Framer Motion versione:** 13.1.1
- **Router:** HashRouter (react-router v7.6.1)
- **Build tool:** Vite 7.3.0
- **Styling:** Tailwind CSS 3.4.19

### Immagini delle terapie

Al momento tutte le card usano la stessa immagine dell'area di appartenenza (`area.immagine`). L'utente ha specificato che successivamente verranno selezionate foto singole per ogni terapia.

### Prossimi step suggeriti

1. Aggiungere immagini specifiche per ogni singola terapia
2. Verificare visivamente le dimensioni delle card su mobile/desktop e aggiustare se necessario
3. Testare l'animazione morphing su diversi browser/dispositivi
