// Chatbot Offline - Moteur de règles intelligent

// Règles par défaut intégrées (pour fonctionner sans serveur)
const DEFAULT_RULES = {
  "greetings": {
    "patterns": [
      "bonjour",
      "salut",
      "bonsoir",
      "hello",
      "hi",
      "hey",
      "bon matin",
      "coucou",
      "bonjour {userName}",
      "salut {userName}",
      "hello there",
      "salut toi",
      "bonjour à toi",
      "hey there",
      "bonne journée"
    ],
    "responses": [
      "{greeting} ! Comment puis-je vous aider aujourd'hui ?",
      "Salut ! Que puis-je faire pour vous ?",
      "{greeting} ! En quoi puis-je vous assister ?",
      "Hello ! Comment allez-vous ?",
      "Salut ! Qu'est-ce qui vous amène ici ?",
      "{greeting} ! {userName} Ravie de vous revoir !"
    ]
  },
  "farewells": {
    "patterns": [
      "au revoir",
      "à bientôt",
      "bye",
      "ciao",
      "à plus",
      "salut",
      "bonne journée",
      "bonne soirée"
    ],
    "responses": [
      "Au revoir ! À bientôt !",
      "Bonne journée ! Revenez quand vous voulez !",
      "À bientôt ! Ce fut un plaisir de vous aider !",
      "Au revoir ! Prenez soin de vous !",
      "Bonne soirée ! N'hésitez pas à revenir !"
    ]
  },
  "help": {
    "patterns": [
      "aide",
      "help",
      "que peux tu faire",
      "qu'est ce que tu sais faire",
      "fonctionnalités",
      "commandes"
    ],
    "responses": [
      "Je peux répondre à vos questions ! Essayez de me parler de la météo, de l'heure, ou simplement de discuter avec moi.",
      "Je suis là pour vous aider ! Posez-moi des questions ou engagez une conversation.",
      "Je peux discuter avec vous sur divers sujets. Que souhaitez-vous savoir ?",
      "Mes fonctionnalités incluent : répondre à vos questions, discuter, donner l'heure, parler de la météo et bien plus encore !"
    ]
  },
  "time": {
    "patterns": [
      "quelle heure",
      "quelle heure est-il",
      "heure",
      "time",
      "l'heure"
    ],
    "responses": [
      "Il est {time} actuellement.",
      "La date et l'heure actuelles sont : {dateTime}.",
      "Nous sommes le {date} et il est {time}."
    ]
  },
  "weather": {
    "patterns": [
      "météo",
      "temps",
      "weather",
      "qu'il fait",
      "température",
      "fait-il beau"
    ],
    "responses": [
      "Je suis désolé, mais je ne peux pas accéder aux données météo en temps réel car je fonctionne hors ligne. Cependant, vous pouvez vérifier la météo sur votre application météo préférée !",
      "En tant que chatbot offline, je n'ai pas accès aux informations météorologiques en temps réel. Pourriez-vous vérifier ailleurs ?",
      "Malheureusement, je ne peux pas vous donner la météo car je fonctionne entièrement hors ligne."
    ]
  },
  "thanks": {
    "patterns": [
      "merci",
      "thanks",
      "thank you",
      "merci beaucoup",
      "merci bien"
    ],
    "responses": [
      "De rien ! Content d'avoir pu vous aider !",
      "Je vous en prie ! N'hésitez pas si vous avez d'autres questions !",
      "De rien ! C'était un plaisir !",
      "Avec plaisir ! Revenez quand vous voulez !",
      "Pas de problème ! Bonne continuation !"
    ]
  },
  "how_are_you": {
    "patterns": [
      "comment allez-vous",
      "ça va",
      "comment vas-tu",
      "how are you",
      "comment tu vas",
      "ça va bien"
    ],
    "responses": [
      "Ça va très bien, merci ! Et vous, comment allez-vous ?",
      "Je vais bien, merci de demander ! Qu'en est-il de vous ?",
      "Tout va pour le mieux ! J'espère que vous allez bien aussi !",
      "Très bien, merci ! Et de votre côté, tout va bien ?"
    ]
  },
  "name": {
    "patterns": [
      "quel est ton nom",
      "comment tu t'appelles",
      "qui es-tu",
      "what's your name",
      "ton nom",
      "tu es qui",
      "comment t'appelles-tu",
      "quel est votre nom",
      "dis moi ton nom",
      "comment vous appelez-vous"
    ],
    "responses": [
      "Je suis un chatbot basé sur des règles, créé pour vous aider et discuter avec vous !",
      "Je suis votre assistant virtuel offline ! Vous pouvez m'appeler comme vous le souhaitez.",
      "Je suis un chatbot intelligent fonctionnant hors ligne. Mon nom est à votre choix !",
      "Je suis votre compagnon de conversation offline. Vous pouvez me donner un nom si vous le souhaitez !",
      "Je n'ai pas vraiment de nom, mais vous pouvez m'en donner un si vous voulez ! {userName} Et vous, comment vous appelez-vous ?"
    ]
  },
  "introduction": {
    "patterns": [
      "je m'appelle",
      "mon nom est",
      "je suis",
      "appelle-moi",
      "moi c'est",
      "my name is",
      "i'm",
      "i am"
    ],
    "responses": [
      "Enchanté de faire votre connaissance {userName} ! Comment puis-je vous aider ?",
      "Très heureux de vous rencontrer {userName} ! Que puis-je faire pour vous ?",
      "Ravi de vous connaître {userName} ! En quoi puis-je vous assister aujourd'hui ?",
      "Bonjour {userName} ! C'est un plaisir de discuter avec vous. Comment puis-je vous aider ?"
    ]
  },
  "positive": {
    "patterns": [
      "super",
      "génial",
      "parfait",
      "excellent",
      "bien",
      "ok",
      "d'accord",
      "okay",
      "cool",
      "chouette",
      "sympa"
    ],
    "responses": [
      "Je suis content que cela vous plaise !",
      "Ravi que vous soyez satisfait !",
      "Excellent ! Y a-t-il autre chose que je puisse faire pour vous ?",
      "Parfait ! N'hésitez pas si vous avez d'autres questions.",
      "Super ! Je suis là pour vous aider si besoin."
    ]
  },
  "negative": {
    "patterns": [
      "non",
      "pas bien",
      "pas bon",
      "mauvais",
      "pas content",
      "pas d'accord",
      "nul",
      "déçu"
    ],
    "responses": [
      "Je suis désolé si je n'ai pas répondu à vos attentes. Comment puis-je mieux vous aider ?",
      "Je comprends votre déception. Pouvez-vous me dire ce qui ne va pas ?",
      "Désolé pour cela. Que puis-je faire pour améliorer la situation ?",
      "Je m'excuse. Comment puis-je mieux vous assister ?"
    ]
  },
  "joke": {
    "patterns": [
      "blague",
      "rigoler",
      "drôle",
      "humour",
      "rire",
      "marrant",
      "joke",
      "funny"
    ],
    "responses": [
      "Pourquoi les plongeurs plongent-ils toujours en arrière ? Parce que sinon, ils tombent dans le bateau ! 😄",
      "Que dit une imprimante dans l'eau ? J'ai papier ! 📄",
      "Pourquoi les plongeons ont-ils toujours froid ? Parce qu'ils sont dans l'eau ! 🏊",
      "Qu'est-ce qui est jaune et qui attend ? Jonathan ! 🟡",
      "Je suis peut-être un chatbot, mais j'ai le sens de l'humour ! 😊"
    ]
  },
  "math": {
    "patterns": [
      "math",
      "mathématiques",
      "calcul",
      "addition",
      "soustraction",
      "multiplication",
      "division",
      "équation",
      "calculer",
      "combien fait",
      "what is",
      "how much",
      "plus",
      "moins",
      "fois",
      "diviser"
    ],
    "responses": [
      "Je peux vous aider avec les mathématiques ! Pouvez-vous me donner plus de détails sur le calcul ou la question mathématique ?",
      "Les mathématiques, c'est intéressant ! Quelle opération ou question souhaitez-vous résoudre ?",
      "Je peux discuter de mathématiques. Donnez-moi plus de précisions sur votre question ou calcul.",
      "Parlons de math ! Précisez votre calcul ou votre question mathématique et je ferai de mon mieux pour vous aider."
    ]
  },
  "science": {
    "patterns": [
      "science",
      "physique",
      "chimie",
      "biologie",
      "atome",
      "molécule",
      "gravité",
      "énergie",
      "électricité",
      "réaction",
      "cellule",
      "ADN",
      "planète",
      "étoile",
      "galaxie"
    ],
    "responses": [
      "La science est fascinante ! Je peux discuter de physique, chimie, biologie et bien d'autres domaines. Sur quel sujet scientifique souhaitez-vous en savoir plus ?",
      "Les sciences couvrent de nombreux domaines passionnants ! Quelle branche vous intéresse : physique, chimie, biologie, astronomie ?",
      "Je serais ravi de discuter de sciences avec vous. Pouvez-vous préciser le domaine qui vous intéresse ?",
      "La science est vaste et passionnante ! Sur quel aspect aimeriez-vous discuter : physique, chimie, biologie, astronomie ou autre ?"
    ]
  },
  "history": {
    "patterns": [
      "histoire",
      "historique",
      "passé",
      "ancien",
      "guerre",
      "guerre mondiale",
      "révolution",
      "napoléon",
      "charlemagne",
      "antiquité",
      "moyen âge",
      "renaissance",
      "dates historiques",
      "événement historique"
    ],
    "responses": [
      "L'histoire est riche d'enseignements ! Sur quelle période ou événement historique souhaitez-vous discuter ?",
      "Je peux parler de l'histoire et des événements historiques. Quelle période ou événement vous intéresse ?",
      "L'histoire fascine ! Pouvez-vous me préciser la période ou l'événement historique qui vous intéresse ?",
      "Parler d'histoire, c'est passionnant ! Sur quelle période historique souhaitez-vous en savoir plus : Antiquité, Moyen Âge, Renaissance, ou période moderne ?"
    ]
  },
  "geography": {
    "patterns": [
      "géographie",
      "pays",
      "capitale",
      "ville",
      "continent",
      "océan",
      "montagne",
      "fleuve",
      "rivière",
      "paris",
      "france",
      "europe",
      "afrique",
      "asie",
      "amérique",
      "océanie"
    ],
    "responses": [
      "La géographie, c'est vaste ! Sur quel pays, ville, continent ou sujet géographique souhaitez-vous discuter ?",
      "Je peux vous parler de géographie : pays, capitales, villes, continents, etc. Quel sujet vous intéresse ?",
      "La géographie couvre de nombreux sujets ! Voulez-vous discuter d'un pays, d'une capitale, d'une ville ou d'un autre sujet géographique ?",
      "Parlons de géographie ! Sur quel sujet souhaitez-vous en savoir plus : un pays, une ville, un continent, ou autre chose ?"
    ]
  },
  "technology": {
    "patterns": [
      "technologie",
      "tech",
      "informatique",
      "programmation",
      "code",
      "ordinateur",
      "ordinateur",
      "internet",
      "web",
      "site web",
      "application",
      "app",
      "smartphone",
      "ordinateur portable",
      "logiciel",
      "hardware",
      "software",
      "IA",
      "intelligence artificielle",
      "robot",
      "algorithm"
    ],
    "responses": [
      "La technologie évolue rapidement ! Sur quel aspect technologique souhaitez-vous discuter : programmation, informatique, IA, web, ou autre ?",
      "Je peux discuter de technologie et d'informatique. Quel sujet vous intéresse : programmation, développement web, IA, ou autre domaine technologique ?",
      "La technologie est passionnante ! Sur quel domaine souhaitez-vous en savoir plus : programmation, informatique, intelligence artificielle ?",
      "Parlons de technologie ! Je peux discuter de programmation, informatique, web, IA, etc. Quel sujet vous intéresse ?"
    ]
  },
  "culture": {
    "patterns": [
      "culture",
      "culture générale",
      "connaissance",
      "savoir",
      "apprendre",
      "enseignement",
      "éducation",
      "livre",
      "littérature",
      "art",
      "musique",
      "peinture",
      "sculpture",
      "cinéma",
      "film"
    ],
    "responses": [
      "La culture générale, c'est passionnant ! Sur quel sujet souhaitez-vous discuter : art, littérature, musique, cinéma, ou autre ?",
      "Je peux répondre à des questions de culture générale. Quel domaine vous intéresse ?",
      "Parlons de culture ! Sur quel aspect souhaitez-vous en savoir plus : art, littérature, musique, histoire de l'art, ou autre ?",
      "La culture est vaste et enrichissante ! Quel sujet culturel vous intéresse ?"
    ]
  },
  "advice": {
    "patterns": [
      "conseil",
      "conseils",
      "aide-moi",
      "aide toi",
      "comment faire",
      "que faire",
      "suggestion",
      "recommandation",
      "astuce",
      "truc",
      "méthode",
      "technique",
      "guide",
      "solution"
    ],
    "responses": [
      "Je peux vous donner des conseils ! Sur quel sujet avez-vous besoin d'aide ?",
      "Je serais ravi de vous conseiller. Pouvez-vous préciser la situation ou le domaine pour lequel vous avez besoin de conseils ?",
      "Des conseils ? Bien sûr ! Sur quel aspect souhaitez-vous des suggestions ou des recommandations ?",
      "Je peux vous donner des conseils et suggestions. Quel domaine vous préoccupe : travail, études, quotidien, ou autre ?"
    ]
  },
  "animals": {
    "patterns": [
      "animaux",
      "animal",
      "chien",
      "chat",
      "chat",
      "oiseau",
      "poisson",
      "lapin",
      "souris",
      "nature",
      "faune",
      "flore",
      "mammifère",
      "reptile",
      "amphibien"
    ],
    "responses": [
      "Les animaux sont fascinants ! Sur quel animal ou sujet de la nature souhaitez-vous discuter ?",
      "Je peux parler d'animaux et de nature. Quel animal ou sujet vous intéresse ?",
      "Parlons d'animaux ! Sur quelle espèce ou quel aspect du règne animal souhaitez-vous en savoir plus ?",
      "La nature et les animaux, c'est passionnant ! Quel animal ou sujet de la nature vous intéresse ?"
    ]
  },
  "cooking": {
    "patterns": [
      "cuisine",
      "recette",
      "cuisiner",
      "manger",
      "plat",
      "repas",
      "ingrédient",
      "gâteau",
      "patisserie",
      "café",
      "thé",
      "boisson",
      "aliment",
      "nutrition"
    ],
    "responses": [
      "La cuisine, c'est délicieux ! Souhaitez-vous discuter de recettes, d'ingrédients, de techniques culinaires, ou autre chose ?",
      "Je peux parler de cuisine et de gastronomie. Quel sujet vous intéresse : recettes, ingrédients, techniques culinaires ?",
      "Parlons de cuisine ! Sur quel aspect souhaitez-vous en savoir plus : recettes, techniques, ingrédients, ou nutrition ?",
      "La cuisine est un art ! Quel sujet culinaire vous intéresse : recettes, patisserie, cuisine du monde, ou autre ?"
    ]
  },
  "sports": {
    "patterns": [
      "sport",
      "sports",
      "football",
      "basketball",
      "tennis",
      "natation",
      "course",
      "vélo",
      "cyclisme",
      "jogging",
      "running",
      "fitness",
      "entraînement",
      "exercice",
      "olympiques",
      "championnat"
    ],
    "responses": [
      "Le sport, c'est excellent pour la santé ! Sur quel sport souhaitez-vous discuter : football, tennis, natation, ou autre ?",
      "Je peux discuter de sports et d'activités physiques. Quel sport vous intéresse ?",
      "Parlons de sport ! Sur quel sport ou activité physique souhaitez-vous en savoir plus ?",
      "Les sports sont variés et passionnants ! Quel sport vous intéresse : football, basketball, tennis, natation, fitness, ou autre ?"
    ]
  },
  "languages": {
    "patterns": [
      "langue",
      "langues",
      "français",
      "anglais",
      "anglais",
      "espagnol",
      "allemand",
      "italien",
      "traduction",
      "traduire",
      "mot",
      "vocabulaire",
      "grammaire",
      "orthographe",
      "syntaxe",
      "phrase"
    ],
    "responses": [
      "Les langues sont importantes ! Je peux aider avec le français, l'anglais, et discuter de langues. Quel aspect vous intéresse : vocabulaire, grammaire, traduction ?",
      "Je peux vous aider avec les langues ! Sur quelle langue ou quel aspect linguistique souhaitez-vous discuter ?",
      "Parlons de langues ! Je peux aider avec le français, l'anglais, et d'autres langues. Quel sujet vous intéresse ?",
      "Les langues, c'est fascinant ! Sur quelle langue ou quel aspect linguistique souhaitez-vous en savoir plus ?"
    ]
  },
  "date": {
    "patterns": [
      "date",
      "aujourd'hui",
      "hier",
      "demain",
      "jour",
      "jour de la semaine",
      "calendrier",
      "mois",
      "année",
      "quelle date",
      "quel jour",
      "journée"
    ],
    "responses": [
      "Nous sommes le {date}. {userName} Comment puis-je vous aider aujourd'hui ?",
      "Aujourd'hui, c'est le {date}. En quoi puis-je vous assister ?",
      "La date d'aujourd'hui est : {date}. Que souhaitez-vous savoir d'autre ?",
      "Nous sommes le {date} et il est {time}. Comment puis-je vous aider ?"
    ]
  },
  "default": {
    "patterns": [],
    "responses": [
      "Je ne suis pas sûr de comprendre. Pouvez-vous reformuler votre question ?",
      "Désolé, je n'ai pas bien saisi. Pourriez-vous être plus précis ?",
      "Je ne suis pas certain de savoir quoi répondre. Essayez de poser une question différente.",
      "Hmm, je ne suis pas sûr. Pouvez-vous essayer autrement ?",
      "Je ne comprends pas tout à fait. Avez-vous une autre question ?",
      "Pouvez-vous reformuler cela différemment ? Je fais de mon mieux pour vous comprendre.",
      "C'est intéressant ! Pourriez-vous être un peu plus précis ?"
    ]
  }
};

class Chatbot {
    constructor() {
        this.rules = {};
        this.conversations = []; // Liste de toutes les conversations
        this.currentConversationId = null; // ID de la conversation actuelle
        this.history = []; // Historique de la conversation actuelle
        this.context = {
            lastIntent: null,
            userName: null,
            conversationTopic: null
        };
        this.synonyms = {
            'salut': ['bonjour', 'hello', 'hi', 'hey', 'coucou'],
            'merci': ['thanks', 'thank you', 'grazie'],
            'aurevoir': ['au revoir', 'bye', 'ciao', 'à plus', 'à bientôt'],
            'heure': ['time', 'horloge', 'moment'],
            'météo': ['weather', 'temps', 'climat', 'température'],
            'bien': ['super', 'génial', 'parfait', 'excellent', 'bien', 'ok']
        };
        this.init();
    }

    async init() {
        // Charger les règles depuis le fichier JSON
        await this.loadRules();
        
        // Charger les conversations sauvegardées
        this.loadConversations();
        
        // Initialiser les événements
        this.setupEventListeners();
        
        // Afficher la liste des conversations
        this.renderConversationsList();
        
        // Charger la dernière conversation ou créer une nouvelle
        if (this.conversations.length > 0) {
            this.loadConversation(this.conversations[this.conversations.length - 1].id);
        } else {
            this.createNewConversation();
        }
    }

    async loadRules() {
        try {
            const response = await fetch('rules.json');
            if (response.ok) {
                this.rules = await response.json();
                console.log('Règles chargées depuis rules.json');
            } else {
                throw new Error('Fichier rules.json non trouvé');
            }
        } catch (error) {
            console.warn('Impossible de charger rules.json, utilisation des règles par défaut:', error.message);
            // Utiliser les règles par défaut intégrées
            this.rules = DEFAULT_RULES;
        }
    }

    setupEventListeners() {
        const userInput = document.getElementById('userInput');
        const sendButton = document.getElementById('sendButton');
        const clearButton = document.getElementById('clearButton');
        const resetButton = document.getElementById('resetButton');
        const newConversationBtn = document.getElementById('newConversationBtn');
        const newConversationHeaderBtn = document.getElementById('newConversationHeaderBtn');

        // Envoyer un message avec Enter ou le bouton
        const sendMessage = () => {
            const message = userInput.value.trim();
            if (message) {
                this.handleUserMessage(message);
                userInput.value = '';
            }
        };

        sendButton.addEventListener('click', sendMessage);
        userInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
        
        clearButton.addEventListener('click', () => this.clearChat());
        resetButton.addEventListener('click', () => this.resetChat());
        
        // Boutons pour créer une nouvelle conversation
        if (newConversationBtn) {
            newConversationBtn.addEventListener('click', () => this.createNewConversation());
        }
        if (newConversationHeaderBtn) {
            newConversationHeaderBtn.addEventListener('click', () => this.createNewConversation());
        }
    }

    // Générer un ID unique pour une conversation
    generateConversationId() {
        return 'conv_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    }

    // Créer un titre à partir du premier message utilisateur
    generateConversationTitle(firstMessage) {
        if (!firstMessage || firstMessage.trim().length === 0) {
            return 'Nouvelle conversation';
        }
        // Prendre les 50 premiers caractères
        let title = firstMessage.trim().substring(0, 50);
        if (firstMessage.length > 50) {
            title += '...';
        }
        return title;
    }

    // Créer une nouvelle conversation
    createNewConversation() {
        // Sauvegarder la conversation actuelle avant de créer une nouvelle
        if (this.currentConversationId) {
            this.saveCurrentConversation();
        }

        // Créer une nouvelle conversation
        const newConversation = {
            id: this.generateConversationId(),
            title: 'Nouvelle conversation',
            history: [],
            context: {
                lastIntent: null,
                userName: null,
                conversationTopic: null
            },
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };

        this.conversations.push(newConversation);
        this.currentConversationId = newConversation.id;
        this.history = [];
        this.context = {
            lastIntent: null,
            userName: null,
            conversationTopic: null
        };

        // Réinitialiser l'affichage
        this.clearChatDisplay();
        this.addMessage('Bonjour ! Je suis votre assistant offline. Comment puis-je vous aider aujourd\'hui ?', 'bot');
        
        // Sauvegarder et mettre à jour l'affichage
        this.saveConversations();
        this.renderConversationsList();
    }

    // Charger une conversation
    loadConversation(conversationId) {
        // Sauvegarder la conversation actuelle
        if (this.currentConversationId) {
            this.saveCurrentConversation();
        }

        const conversation = this.conversations.find(c => c.id === conversationId);
        if (!conversation) {
            console.error('Conversation non trouvée:', conversationId);
            return;
        }

        this.currentConversationId = conversation.id;
        this.history = conversation.history || [];
        this.context = conversation.context || {
            lastIntent: null,
            userName: null,
            conversationTopic: null
        };

        // Afficher l'historique
        this.clearChatDisplay();
        if (this.history.length === 0) {
            this.addMessage('Bonjour ! Je suis votre assistant offline. Comment puis-je vous aider aujourd\'hui ?', 'bot');
        } else {
            this.history.forEach(entry => {
                this.addMessage(entry.message, entry.type, false);
            });
            this.scrollToBottom();
        }

        // Mettre à jour l'affichage de la liste
        this.renderConversationsList();
    }

    // Supprimer une conversation
    deleteConversation(conversationId, event) {
        if (event) {
            event.stopPropagation();
        }

        if (confirm('Êtes-vous sûr de vouloir supprimer cette conversation ?')) {
            this.conversations = this.conversations.filter(c => c.id !== conversationId);
            
            // Si c'était la conversation actuelle, créer une nouvelle ou charger une autre
            if (this.currentConversationId === conversationId) {
                if (this.conversations.length > 0) {
                    this.loadConversation(this.conversations[this.conversations.length - 1].id);
                } else {
                    this.createNewConversation();
                }
            }

            this.saveConversations();
            this.renderConversationsList();
        }
    }

    // Sauvegarder la conversation actuelle dans la liste
    saveCurrentConversation() {
        if (!this.currentConversationId) return;

        const conversation = this.conversations.find(c => c.id === this.currentConversationId);
        if (conversation) {
            conversation.history = this.history;
            conversation.context = this.context;
            conversation.updatedAt = new Date().toISOString();
            
            // Mettre à jour le titre si c'est la première fois qu'on enregistre un message
            if (conversation.title === 'Nouvelle conversation' && this.history.length > 0) {
                const firstUserMessage = this.history.find(h => h.type === 'user');
                if (firstUserMessage) {
                    conversation.title = this.generateConversationTitle(firstUserMessage.message);
                }
            }
        }
    }

    // Sauvegarder toutes les conversations
    saveConversations() {
        try {
            // Sauvegarder la conversation actuelle d'abord
            this.saveCurrentConversation();
            
            localStorage.setItem('chatbotConversations', JSON.stringify(this.conversations));
            localStorage.setItem('chatbotCurrentConversationId', this.currentConversationId);
        } catch (error) {
            console.error('Erreur lors de la sauvegarde des conversations:', error);
        }
    }

    // Charger toutes les conversations
    loadConversations() {
        try {
            const savedConversations = localStorage.getItem('chatbotConversations');
            if (savedConversations) {
                this.conversations = JSON.parse(savedConversations);
            }
            
            const savedCurrentId = localStorage.getItem('chatbotCurrentConversationId');
            if (savedCurrentId && this.conversations.some(c => c.id === savedCurrentId)) {
                this.currentConversationId = savedCurrentId;
            }
        } catch (error) {
            console.error('Erreur lors du chargement des conversations:', error);
            this.conversations = [];
        }
    }

    // Afficher la liste des conversations
    renderConversationsList() {
        const conversationsList = document.getElementById('conversationsList');
        if (!conversationsList) return;

        // Trier par date de mise à jour (plus récent en premier)
        const sortedConversations = [...this.conversations].sort((a, b) => {
            return new Date(b.updatedAt) - new Date(a.updatedAt);
        });

        conversationsList.innerHTML = '';

        sortedConversations.forEach(conversation => {
            const item = document.createElement('button');
            item.className = 'conversation-item';
            if (conversation.id === this.currentConversationId) {
                item.classList.add('active');
            }

            item.innerHTML = `
                <span class="conversation-item-title">${this.escapeHtml(conversation.title)}</span>
                <button class="conversation-item-delete" title="Supprimer">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            `;

            item.addEventListener('click', (e) => {
                if (!e.target.closest('.conversation-item-delete')) {
                    this.loadConversation(conversation.id);
                }
            });

            const deleteBtn = item.querySelector('.conversation-item-delete');
            deleteBtn.addEventListener('click', (e) => {
                this.deleteConversation(conversation.id, e);
            });

            conversationsList.appendChild(item);
        });
    }

    // Réinitialiser l'affichage du chat
    clearChatDisplay() {
        const chatMessages = document.getElementById('chatMessages');
        if (chatMessages) {
            chatMessages.innerHTML = '';
        }
    }

    // Calculer la distance de Levenshtein (similarité entre deux chaînes)
    levenshteinDistance(str1, str2) {
        const matrix = [];
        const len1 = str1.length;
        const len2 = str2.length;

        for (let i = 0; i <= len2; i++) {
            matrix[i] = [i];
        }

        for (let j = 0; j <= len1; j++) {
            matrix[0][j] = j;
        }

        for (let i = 1; i <= len2; i++) {
            for (let j = 1; j <= len1; j++) {
                if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
                    matrix[i][j] = matrix[i - 1][j - 1];
                } else {
                    matrix[i][j] = Math.min(
                        matrix[i - 1][j - 1] + 1,
                        matrix[i][j - 1] + 1,
                        matrix[i - 1][j] + 1
                    );
                }
            }
        }

        return matrix[len2][len1];
    }

    // Calculer un score de similarité (0 à 1)
    calculateSimilarity(str1, str2) {
        const maxLen = Math.max(str1.length, str2.length);
        if (maxLen === 0) return 1.0;
        const distance = this.levenshteinDistance(str1, str2);
        return 1 - (distance / maxLen);
    }

    // Remplacer les synonymes dans le message
    replaceSynonyms(message) {
        let normalizedMessage = message.toLowerCase();
        
        for (const [key, synonyms] of Object.entries(this.synonyms)) {
            for (const synonym of synonyms) {
                const regex = new RegExp(`\\b${synonym}\\b`, 'gi');
                normalizedMessage = normalizedMessage.replace(regex, key);
            }
        }
        
        return normalizedMessage;
    }

    // Calculer un score pour une correspondance d'intention
    calculateIntentScore(userMessage, intentName, pattern) {
        let score = 0;
        const normalizedMessage = this.replaceSynonyms(userMessage.toLowerCase().trim());
        const normalizedPattern = this.replaceSynonyms(pattern.toLowerCase());

        // Correspondance exacte - score maximal
        if (normalizedMessage === normalizedPattern) {
            score = 100;
        }
        // Le pattern est contenu dans le message - score élevé
        else if (normalizedMessage.includes(normalizedPattern)) {
            score = 80;
        }
        // Le message est contenu dans le pattern - score moyen-élevé
        else if (normalizedPattern.includes(normalizedMessage)) {
            score = 70;
        }
        // Correspondance de mots avec similarité
        else {
            const messageWords = normalizedMessage.split(/\s+/);
            const patternWords = normalizedPattern.split(/\s+/);
            let wordMatches = 0;
            let totalSimilarity = 0;

            for (const patternWord of patternWords) {
                for (const msgWord of messageWords) {
                    const similarity = this.calculateSimilarity(msgWord, patternWord);
                    if (similarity > 0.7) {
                        wordMatches++;
                        totalSimilarity += similarity;
                        break;
                    }
                }
            }

            // Score basé sur le nombre de mots correspondants et la similarité
            if (wordMatches > 0) {
                const avgSimilarity = totalSimilarity / wordMatches;
                score = (wordMatches / patternWords.length) * 60 + (avgSimilarity * 20);
            }
            // Similarité globale de la phrase
            else {
                const globalSimilarity = this.calculateSimilarity(normalizedMessage, normalizedPattern);
                score = globalSimilarity * 40;
            }
        }

        // Bonus pour le contexte : si l'intention précédente est similaire
        if (this.context.lastIntent === intentName && score > 30) {
            score += 5;
        }

        return score;
    }

    // Trouver l'intention correspondante au message de l'utilisateur avec scoring
    findIntent(userMessage) {
        const normalizedMessage = userMessage.toLowerCase().trim();
        let bestMatch = { intent: 'default', score: 0 };

        // Parcourir toutes les règles (sauf default)
        for (const [intentName, intentData] of Object.entries(this.rules)) {
            if (intentName === 'default') continue;
            
            // Calculer le score pour chaque pattern de cette intention
            for (const pattern of intentData.patterns) {
                const score = this.calculateIntentScore(userMessage, intentName, pattern);
                
                if (score > bestMatch.score) {
                    bestMatch = { intent: intentName, score: score };
                }
            }
        }

        // Si le score est trop bas (< 30), utiliser default
        if (bestMatch.score < 30) {
            return 'default';
        }

        // Mettre à jour le contexte
        this.context.lastIntent = bestMatch.intent;
        
        return bestMatch.intent;
    }

    // Extraire le nom de l'utilisateur si mentionné
    extractUserName(message) {
        const namePatterns = [
            /je m'appelle (\w+)/i,
            /mon nom est (\w+)/i,
            /je suis (\w+)/i,
            /appelle-moi (\w+)/i
        ];

        for (const pattern of namePatterns) {
            const match = message.match(pattern);
            if (match && match[1]) {
                return match[1].charAt(0).toUpperCase() + match[1].slice(1);
            }
        }

        return null;
    }

    // Obtenir la liste des capacités du chatbot
    getCapabilities() {
        const capabilities = {
            "Heure et date": "Je peux vous dire l'heure et la date actuelles",
            "Mathématiques": "Je peux effectuer des calculs et répondre à des questions mathématiques",
            "Science": "Je peux discuter de physique, chimie, biologie et autres sciences",
            "Histoire": "Je peux parler de l'histoire et des événements historiques",
            "Géographie": "Je peux répondre sur les pays, villes, capitales et géographie",
            "Technologie": "Je peux discuter d'informatique, programmation et technologie",
            "Culture générale": "Je peux répondre à des questions de culture générale",
            "Conseils": "Je peux donner des conseils sur divers sujets",
            "Animaux": "Je peux discuter des animaux et de la nature",
            "Cuisine": "Je peux parler de cuisine et de recettes",
            "Sport": "Je peux discuter de sports et d'activités physiques",
            "Divertissement": "Je peux raconter des blagues et discuter de loisirs",
            "Langues": "Je peux aider avec le français et d'autres langues",
            "Météo": "Je peux discuter de météo (bien que je fonctionne offline)"
        };
        return capabilities;
    }

    // Générer une réponse d'aide avec la liste des capacités
    generateHelpResponse() {
        const capabilities = this.getCapabilities();
        const categories = Object.keys(capabilities);
        const randomStart = Math.floor(Math.random() * 3);
        
        const starters = [
            "Voici ce que je peux faire pour vous :",
            "Je peux vous aider avec les sujets suivants :",
            "Mes domaines de compétence incluent :"
        ];
        
        let response = starters[randomStart] + "\n\n";
        
        // Limiter à 7-8 catégories pour ne pas surcharger
        const selectedCategories = categories.slice(0, 8);
        
        selectedCategories.forEach((category, index) => {
            response += `• ${category} : ${capabilities[category]}\n`;
        });
        
        response += "\nN'hésitez pas à me poser une question sur l'un de ces sujets !";
        
        return response;
    }

    // Obtenir une réponse intelligente pour une intention donnée
    getResponse(intentName, userMessage) {
        if (!this.rules[intentName]) {
            intentName = 'default';
        }

        // Gestion spéciale pour l'intention "help"
        if (intentName === 'help') {
            // Générer dynamiquement une liste des capacités
            return this.generateHelpResponse();
        }

        // Extraire le nom si mentionné
        const extractedName = this.extractUserName(userMessage);
        if (extractedName) {
            this.context.userName = extractedName;
        }

        // Vérifier si l'utilisateur revient (historique récent de salutation)
        const recentGreetings = this.history
            .filter(h => h.type === 'user')
            .slice(-10)
            .some(h => this.findIntent(h.message) === 'greetings');

        // Éviter de répéter la même réponse récemment
        const recentResponses = this.history
            .filter(h => h.type === 'bot')
            .slice(-5)
            .map(h => h.message);

        let responses = this.rules[intentName].responses;
        
        // Personnaliser les réponses selon le contexte
        if (intentName === 'greetings' && this.context.userName && recentGreetings) {
            // Si l'utilisateur a déjà été présenté et revient, prioriser les réponses avec son nom
            responses = responses.filter(r => r.includes('{userName}') || r.includes('Ravie'));
        }

        let availableResponses = responses.filter(r => !recentResponses.includes(r));
        
        // Si toutes les réponses ont été utilisées récemment, réinitialiser
        if (availableResponses.length === 0) {
            availableResponses = responses;
        }

        // Sélection aléatoire parmi les réponses disponibles
        const randomIndex = Math.floor(Math.random() * availableResponses.length);
        let response = availableResponses[randomIndex];
        
        // Remplacer les variables dynamiques
        response = this.replaceVariables(response, intentName);
        
        return response;
    }

    // Remplacer les variables dynamiques dans les réponses
    replaceVariables(response, intentName) {
        const now = new Date();
        
        // Formater la date
        const date = now.toLocaleDateString('fr-FR', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        // Formater l'heure
        const time = now.toLocaleTimeString('fr-FR', {
            hour: '2-digit',
            minute: '2-digit'
        });
        
        // Formater la date et l'heure
        const dateTime = now.toLocaleString('fr-FR', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });

        // Déterminer la salutation appropriée selon l'heure
        const currentHour = now.getHours();
        let greeting = 'Bonjour';
        if (currentHour >= 18) {
            greeting = 'Bonsoir';
        } else if (currentHour < 12) {
            greeting = 'Bonjour';
        }
        
        // Remplacer les variables
        response = response.replace(/{date}/g, date);
        response = response.replace(/{time}/g, time);
        response = response.replace(/{dateTime}/g, dateTime);
        response = response.replace(/{greeting}/g, greeting);
        
        // Gérer {userName} de manière intelligente
        if (this.context.userName) {
            response = response.replace(/{userName}/g, this.context.userName);
        } else {
            // Si userName n'est pas défini, supprimer proprement les références
            response = response.replace(/\s*{userName}\s*/g, ' ');
            // Supprimer les phrases qui commencent par le nom s'il est vide
            response = response.replace(/^\s*\w+\s+{userName}/g, '');
        }
        
        response = response.replace(/{lastIntent}/g, this.context.lastIntent || '');
        
        // Nettoyer les espaces multiples
        response = response.replace(/\s+/g, ' ').trim();
        
        // Nettoyer les phrases vides restantes
        response = response.replace(/^\s*,\s*/g, '').replace(/\s*,\s*$/g, '');
        
        return response;
    }

    // Gérer le message de l'utilisateur
    async handleUserMessage(message) {
        // Ajouter le message de l'utilisateur à l'interface
        this.addMessage(message, 'user');
        
        // Sauvegarder dans l'historique
        this.history.push({
            type: 'user',
            message: message,
            timestamp: new Date().toISOString()
        });
        
        // Afficher l'indicateur de frappe
        this.showTypingIndicator();
        
        // Simuler un délai de réflexion (animation de frappe)
        await this.delay(800 + Math.random() * 1000);
        
        // Cacher l'indicateur de frappe
        this.hideTypingIndicator();
        
        // Trouver l'intention et obtenir la réponse
        const intent = this.findIntent(message);
        const response = this.getResponse(intent, message);
        
        // Ajouter la réponse du bot à l'interface
        this.addMessage(response, 'bot');
        
        // Sauvegarder dans l'historique
        this.history.push({
            type: 'bot',
            message: response,
            timestamp: new Date().toISOString()
        });
        
        // Sauvegarder la conversation (inclut l'historique et le contexte)
        this.saveConversations();
        
        // Mettre à jour le titre de la conversation si c'est le premier message utilisateur
        if (this.currentConversationId) {
            const conversation = this.conversations.find(c => c.id === this.currentConversationId);
            if (conversation && conversation.title === 'Nouvelle conversation') {
                conversation.title = this.generateConversationTitle(message);
                this.renderConversationsList();
            }
        }
    }

    // Ajouter un message à l'interface
    addMessage(message, type, scroll = true) {
        const chatMessages = document.getElementById('chatMessages');
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}-message`;
        
        const avatar = type === 'user' ? '👤' : '🤖';
        
        // Convertir les retours à la ligne en <br> pour l'affichage
        const formattedMessage = this.escapeHtml(message).replace(/\n/g, '<br>');
        
        messageDiv.innerHTML = `
            <div class="message-avatar">${avatar}</div>
            <div class="message-content">
                <p>${formattedMessage}</p>
            </div>
        `;
        
        chatMessages.appendChild(messageDiv);
        
        // Scroll automatique vers le bas si demandé
        if (scroll) {
            this.scrollToBottom();
        }
    }

    // Afficher l'indicateur de frappe
    showTypingIndicator() {
        const typingIndicator = document.getElementById('typingIndicator');
        typingIndicator.style.display = 'block';
        this.scrollToBottom();
    }

    // Cacher l'indicateur de frappe
    hideTypingIndicator() {
        const typingIndicator = document.getElementById('typingIndicator');
        typingIndicator.style.display = 'none';
    }

    // Faire défiler vers le bas
    scrollToBottom() {
        const chatContainer = document.querySelector('.chat-container');
        setTimeout(() => {
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }, 100);
    }

    // Délai pour simulation
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Échapper les caractères HTML pour la sécurité
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // Effacer la conversation actuelle (interface uniquement)
    clearChat() {
        const chatMessages = document.getElementById('chatMessages');
        chatMessages.innerHTML = '';
        this.addMessage('Bonjour ! Je suis votre assistant offline. Comment puis-je vous aider aujourd\'hui ?', 'bot');
        
        // Réinitialiser l'historique et le contexte de la conversation actuelle
        if (this.currentConversationId) {
            this.history = [];
            this.context = {
                lastIntent: null,
                userName: null,
                conversationTopic: null
            };
            const conversation = this.conversations.find(c => c.id === this.currentConversationId);
            if (conversation) {
                conversation.history = [];
                conversation.context = this.context;
            }
            this.saveConversations();
        }
    }

    // Réinitialiser complètement (toutes les conversations)
    resetChat() {
        if (confirm('Êtes-vous sûr de vouloir réinitialiser toutes les conversations ? Toutes les conversations seront définitivement supprimées.')) {
            localStorage.removeItem('chatbotConversations');
            localStorage.removeItem('chatbotCurrentConversationId');
            this.conversations = [];
            this.currentConversationId = null;
            this.history = [];
            this.context = {
                lastIntent: null,
                userName: null,
                conversationTopic: null
            };
            this.createNewConversation();
        }
    }
}

// Initialiser le chatbot quand le DOM est chargé
document.addEventListener('DOMContentLoaded', () => {
    window.chatbot = new Chatbot();
});

