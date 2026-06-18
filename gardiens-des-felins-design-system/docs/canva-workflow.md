# Workflow Canva — Gardiens des Félins

## Configuration initiale de Canva

### Couleurs de marque

| Nom | Code HEX |
|---|---|
| Background | `#11110D` |
| Panel | `#181A1A` |
| Panel Alt | `#202326` |
| Cream Text | `#F2EFE6` |
| Muted Text | `#B8B1A5` |
| Accent Orange | `#B65A2B` |
| Warning Gold | `#D19A3A` |
| Line | `#34383B` |

### Polices de marque
- Titre : **Playfair Display Bold**
- Corps : **Inter Regular**
- Accent : **Inter Semi Bold**

### Logo
- https://i.imgur.com/JPdiSHg.jpeg

---

## Workflow de production

### Étape 1 — Générer avec Claude
1. Préparez votre brief (`src/templates/campaign-brief-template.json`)
2. Collez-le dans Claude (Project ou Claude Design)
3. Récupérez les textes slide par slide

### Étape 2 — Ouvrir le template Canva
1. Format carousel : **1080 × 1350 px**
2. Format story : **1080 × 1920 px**
3. Appliquez le fond `#11110D`

### Étape 3 — Structure de chaque slide

```
┌─────────────────────────────────┐
│  [Numéro de slide]              │  ← Inter 12px, #B8B1A5
│                                 │
│  [EYEBROW / CATÉGORIE]          │  ← Inter SemiBold 14px, #B65A2B
│                                 │
│  TITRE PRINCIPAL                │  ← Playfair Display Bold 36-48px
│  EN MAJUSCULES                  │     #F2EFE6
│                                 │
│  Texte de corps court           │  ← Inter Regular 18-22px, #B8B1A5
│                                 │
│  [Logo / Nom]         [CTA]     │  ← Footer Inter 12px
└─────────────────────────────────┘
```

### Étape 4 — Slide CTA finale
- Fond : `#11110D` centré
- Titre : "AGISSEZ MAINTENANT" en `#B65A2B`
- Actions : "Signez / Rejoignez / Partagez" en `#F2EFE6`
- URL : `linktr.ee/gardiensdesfelins` en `#D19A3A`

### Étape 5 — Export
- Carousel statique : **PNG** haute résolution
- Story animée : **MP4**
- Nommage : `AAAA-MM-JJ_sujet_format.png`

---

## Styles de texte Canva à sauvegarder

- **Headline** : Playfair Display Bold 44px `#F2EFE6` uppercase
- **Eyebrow** : Inter SemiBold 13px `#B65A2B` uppercase
- **Body** : Inter Regular 20px `#B8B1A5`
- **Warning** : Inter SemiBold 14px `#11110D`
- **CTA** : Inter Bold 22px `#F2EFE6` uppercase
- **URL** : Inter Regular 16px `#D19A3A`
- **Footer** : Inter Regular 11px `#B8B1A5`
