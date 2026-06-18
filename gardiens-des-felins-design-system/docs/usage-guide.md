# Guide d'utilisation — Système de design Gardiens des Félins

## Flux de travail recommandé

### Étape 1 — Préparer le brief
Remplissez `src/templates/campaign-brief-template.json`

### Étape 2 — Générer le contenu avec Claude

**Option A — Claude.ai Project**
1. Ouvrez votre Claude Project configuré avec `docs/claude-project-instructions.md`
2. Collez votre brief
3. Claude produit le carousel, la légende, les hashtags, la story, l'alt text et la checklist

**Option B — Claude Design**
1. Copiez `docs/claude-design-prompt.md`
2. Collez votre contexte à la fin
3. Claude génère le visuel + les textes directement

### Étape 3 — Vérification éditoriale
- [ ] Aucun fait inventé
- [ ] Données non sourcées marquées "à vérifier"
- [ ] Avertissement sensible présent si nécessaire
- [ ] CTA correct (`https://linktr.ee/gardiensdesfelins`)

### Étape 4 — Recréer dans Canva
Suivez `docs/canva-workflow.md`

---

## Formats de référence

| Format | Dimensions | Ratio | Usage |
|---|---|---|---|
| Instagram Carousel | 1080 × 1350 px | 4:5 | Post principal |
| Instagram Story | 1080 × 1920 px | 9:16 | Story / Reels |
| Facebook Post | 1200 × 630 px | 1.91:1 | Partage Facebook |
| Carré universel | 1080 × 1080 px | 1:1 | Alternative |

---

## Fichiers clés à joindre dans Claude

| Fichier | Pourquoi |
|---|---|
| `src/tokens/colors.json` | Palette officielle |
| `src/tokens/typography.json` | Règles typographiques |
| `src/tokens/voice.json` | Ton, langage, formules |
| `src/templates/campaign-brief-template.json` | Structure du brief |
| `docs/claude-project-instructions.md` | Instructions principales |
