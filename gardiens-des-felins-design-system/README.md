# Gardiens des Félins — Activist Social Media Design System

![Logo Gardiens des Félins](https://i.imgur.com/JPdiSHg.jpeg)

> Système de design militant pour les campagnes de sensibilisation sur la protection animale.  
> Design system for urgent, factual, non-graphic animal protection campaigns in French.

---

## Qu'est-ce que ce design system ?

Ce dépôt contient le système de design officiel de l'Association **Gardiens des Félins**.  
Il est conçu pour produire des visuels de réseaux sociaux militants, sérieux, lisibles et prêts à être recréés dans **Canva** ou **Claude Design**.

Ce système couvre :
- Les **tokens de design** (couleurs, typographie, espacements, formats)
- Les **règles de marque** (ton, voix, langage, CTA)
- Les **règles rédactionnelles** (vérification des faits, contenu sensible, légalité)
- Les **structures de carousel** et de story Instagram
- Des **composants HTML/React** réutilisables
- Des **templates** prêts à remplir
- Des **exemples complets** de posts

---

## Comment utiliser ce dépôt avec Claude.ai

1. Créez un **Claude Project** sur [claude.ai](https://claude.ai)
2. Copiez le contenu de `docs/claude-project-instructions.md` dans les instructions du projet
3. Joignez ou copiez les fichiers clés dans le contexte :
   - `src/tokens/colors.json`
   - `src/tokens/typography.json`
   - `src/tokens/voice.json`
   - `src/templates/campaign-brief-template.json`
4. Pour chaque nouvelle campagne, remplissez le **campaign brief** et collez-le dans Claude

---

## Comment utiliser ce dépôt avec Claude Design

1. Ouvrez **Claude Design** (claude.ai/design ou l'outil intégré)
2. Copiez le contenu de `docs/claude-design-prompt.md` comme prompt de base
3. Joignez les fichiers de tokens et de templates
4. Collez votre contexte de campagne à la fin du prompt
5. Claude produira un carousel prêt à recréer dans Canva

---

## Comment utiliser ce dépôt avec Canva

Voir le guide complet : [`docs/canva-workflow.md`](docs/canva-workflow.md)

En résumé :
1. Utilisez Claude pour générer le contenu (textes, structure, CTA)
2. Ouvrez Canva et choisissez un format 1080 × 1350 (carousel) ou 1080 × 1920 (story)
3. Appliquez les couleurs et polices du design system (`src/styles/variables.css`)
4. Reproduisez la structure slide par slide
5. Exportez en PNG ou MP4

---

## Style visuel par défaut

| Élément | Valeur |
|---|---|
| Fond principal | `#11110D` (presque noir, très sombre) |
| Panel | `#181A1A` |
| Texte principal | `#F2EFE6` (crème blanc) |
| Accent | `#B65A2B` (orange militant) |
| Or / alerte | `#D19A3A` |
| Texte atténué | `#B8B1A5` |
| Titre | Serif fort (Georgia, Playfair Display) |
| Corps | Sans-serif propre (Inter, Arial) |
| Ton | Urgent, sérieux, factuel, compassionnel |
| Langue | Français |

---

## Règles de sécurité et de vérification des faits

- **Ne jamais inventer** de statistiques, lois, noms, dates, accusations, sources
- **Marquer** toute donnée non vérifiée avec : `"à vérifier avant publication"`
- **Ajouter** un avertissement sensible si le sujet implique violence, torture ou abus
- **Ne pas accuser** nommément sans source publique fiable
- **Utiliser un langage neutre** pour les mineurs, suspects et enquêtes en cours

Voir le guide complet : [`docs/safety-and-fact-checking.md`](docs/safety-and-fact-checking.md)

---

## CTA par défaut

Tous les posts doivent se terminer avec :

```
Signez la pétition
Rejoignez-nous
Partagez ce post
https://linktr.ee/gardiensdesfelins
```

---

## Structure des fichiers

```
gardiens-des-felins-design-system/
├── README.md
├── package.json
├── .gitignore
├── LICENSE
├── docs/
│   ├── claude-project-instructions.md
│   ├── claude-design-prompt.md
│   ├── usage-guide.md
│   ├── safety-and-fact-checking.md
│   └── canva-workflow.md
├── src/
│   ├── tokens/
│   │   ├── colors.json
│   │   ├── typography.json
│   │   ├── spacing.json
│   │   ├── formats.json
│   │   └── voice.json
│   ├── styles/
│   │   ├── variables.css
│   │   ├── base.css
│   │   ├── carousel.css
│   │   └── story.css
│   ├── components/
│   │   ├── CarouselSlide.html
│   │   ├── CarouselSlide.jsx
│   │   ├── CTASection.html
│   │   ├── SensitiveWarning.html
│   │   └── Checklist.html
│   ├── templates/
│   │   ├── instagram-carousel.json
│   │   ├── instagram-story.json
│   │   ├── campaign-brief-template.json
│   │   └── carousel-copy-template.md
│   └── examples/
│       ├── sample-carousel-online-cruelty.md
│       ├── sample-caption.md
│       ├── sample-story.md
│       └── sample-alt-text.md
└── assets/
    ├── logos/README.md
    ├── fonts/README.md
    └── references/README.md
```

---

## Association Gardiens des Félins

Association de protection animale. Sensibilisation, mobilisation, plaidoyer contre la cruauté envers les animaux.

🔗 [linktr.ee/gardiensdesfelins](https://linktr.ee/gardiensdesfelins)
