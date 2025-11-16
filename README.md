# 🤖 Chatbot Offline - Assistant Intelligent

Un chatbot entièrement hors-ligne basé sur un moteur de règles, fonctionnant uniquement dans le navigateur sans serveur ni IA en ligne.

## ✨ Fonctionnalités

- **Moteur de règles** : Fonctionne grâce à un ensemble de règles définies dans un fichier JSON
- **Interface moderne** : Interface de conversation interactive avec bulles de chat élégantes
- **Animations** : Animation de frappe pour simuler une réponse naturelle du bot
- **Réponses dynamiques** : Système aléatoire pour éviter les réponses répétitives
- **Historique local** : Sauvegarde automatique de la conversation dans le stockage local du navigateur
- **Reprise de conversation** : Permet de reprendre la conversation là où vous vous êtes arrêté

## 🚀 Démarrage

1. Clonez ou téléchargez le projet
2. Ouvrez `index.html` dans votre navigateur web (Chrome, Firefox, Edge, etc.)
3. Commencez à discuter avec le chatbot !

> **Note** : Le chatbot fonctionne entièrement hors-ligne. Aucune connexion Internet n'est requise.

## 📁 Structure du projet

```
Chatbot/
├── index.html          # Interface principale
├── styles.css          # Styles CSS
├── chatbot.js          # Moteur du chatbot
├── rules.json          # Règles et intentions du chatbot
└── README.md           # Documentation
```

## 🎯 Comment ça fonctionne ?

### Moteur de règles

Le chatbot utilise un système de correspondance de patterns pour identifier les intentions de l'utilisateur. Les règles sont définies dans `rules.json` avec :

- **Patterns** : Mots-clés ou phrases qui déclenchent une intention
- **Responses** : Liste de réponses possibles (sélectionnées aléatoirement)

### Exemple de règle

```json
{
  "greetings": {
    "patterns": [
      "bonjour",
      "salut",
      "hello"
    ],
    "responses": [
      "Bonjour ! Comment puis-je vous aider ?",
      "Salut ! Que puis-je faire pour vous ?"
    ]
  }
}
```

### Intentions supportées

Le chatbot reconnaît plusieurs intentions :

- **Salutations** : bonjour, salut, hello, etc.
- **Adieux** : au revoir, bye, à bientôt, etc.
- **Aide** : aide, help, fonctionnalités, etc.
- **Heure** : quelle heure, time, etc.
- **Météo** : météo, temps, weather, etc.
- **Remerciements** : merci, thanks, etc.
- **État** : comment allez-vous, ça va, etc.
- **Nom** : quel est ton nom, qui es-tu, etc.

### Personnalisation

Vous pouvez facilement ajouter de nouvelles intentions en modifiant `rules.json` :

1. Ouvrez `rules.json`
2. Ajoutez une nouvelle entrée avec `patterns` et `responses`
3. Rechargez la page pour appliquer les changements

## 💾 Historique

Les conversations sont automatiquement sauvegardées dans le stockage local du navigateur (localStorage). Vous pouvez :

- **Effacer** : Supprime uniquement l'affichage actuel (bouton "Effacer")
- **Réinitialiser** : Supprime définitivement l'historique sauvegardé (bouton "Réinitialiser")

## 🎨 Caractéristiques de l'interface

- Design moderne et responsive
- Bulles de conversation élégantes
- Animation de frappe pour les réponses du bot
- Défilement automatique vers les nouveaux messages
- Interface adaptée aux appareils mobiles

## 🔧 Technologies utilisées

- **HTML5** : Structure de l'interface
- **CSS3** : Styles modernes avec animations
- **JavaScript (ES6+)** : Moteur du chatbot et logique
- **LocalStorage** : Sauvegarde locale de l'historique

## 📝 Licence

Ce projet est libre d'utilisation pour des projets personnels ou éducatifs.

## 🤝 Contribution

N'hésitez pas à améliorer le projet en :
- Ajoutant de nouvelles intentions dans `rules.json`
- Améliorant le système de correspondance de patterns
- Ajoutant de nouvelles fonctionnalités

---

**Amusez-vous bien avec votre chatbot offline ! 🎉**

