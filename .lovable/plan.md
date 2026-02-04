
# Correction des bugs d'affichage et de build

## Probleme identifie

Deux problemes distincts causent les bugs :

1. **Erreur de build Edge Function** : L'import `npm:resend@2.0.0` n'est pas compatible avec l'environnement Deno de Supabase Edge Functions
2. **Couleur bleue parasite** : Les variables CSS dans `index.css` definissent `--primary` comme une couleur bleue (`222.2 84% 4.9%`), ce qui entre en conflit avec la couleur marron definie dans `tailwind.config.ts`

## Corrections a apporter

### 1. Corriger l'import Resend dans la fonction Edge
Fichier : `supabase/functions/send-contact-email/index.ts`

Remplacer :
```typescript
import { Resend } from "npm:resend@2.0.0";
```

Par :
```typescript
import { Resend } from "https://esm.sh/resend@2.0.0";
```

### 2. Harmoniser les couleurs CSS
Fichier : `src/index.css`

Mettre a jour les variables CSS pour correspondre aux couleurs de la marque Localizz (marron et vert) :

```css
:root {
  --primary: 20 60% 22%;           /* Marron #5a2a16 */
  --primary-foreground: 0 0% 100%; /* Blanc */
  --secondary: 73 77% 34%;         /* Vert #849c14 */
  --secondary-foreground: 0 0% 100%;
  --accent: 30 20% 97%;            /* Beige clair #f8f6f3 */
  --accent-foreground: 20 60% 22%;
}
```

## Resultat attendu

- Le site affichera les couleurs correctes (marron/vert de la charte Localizz)
- La fonction Edge se deployera sans erreur
- Plus de bleu parasite sur les pages

## Section technique

Les couleurs HSL dans `index.css` (`222.2 84% 4.9%`) correspondent a un bleu tres fonce. Certains composants UI (notamment les boutons) utilisent `hsl(var(--primary))` au lieu de la classe Tailwind `bg-primary`, ce qui explique l'apparition du bleu.

La correction harmonise toutes les sources de couleur pour utiliser la meme palette.
