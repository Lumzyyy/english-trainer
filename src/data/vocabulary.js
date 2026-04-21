// 30 mots de liaison / linking words essentiels
export const vocabulary = [
  // ── ADDITION ──────────────────────────────────────────────────────────────
  {
    id: 'as-well',
    word: 'as well',
    fr: 'aussi / en plus',
    category: 'addition',
    pronunciation: 'az WEL',
    note: 'Se place en fin de phrase. Moins formel que "in addition".',
    exampleDaily: {
      en: 'I like coffee, and I enjoy tea as well.',
      fr: 'J\'aime le café, et j\'apprécie aussi le thé.',
    },
    exampleData: {
      en: 'The model handles images well, and it processes text as well.',
      fr: 'Le modèle traite bien les images, et il traite aussi le texte.',
    },
  },
  {
    id: 'in-addition',
    word: 'in addition',
    fr: 'de plus / en outre',
    category: 'addition',
    pronunciation: 'in uh-DI-cheun',
    note: 'Se place en début de phrase (+ virgule). Légèrement formel.',
    exampleDaily: {
      en: 'The hotel has a pool. In addition, it offers free breakfast.',
      fr: 'L\'hôtel a une piscine. De plus, il propose le petit-déjeuner gratuit.',
    },
    exampleData: {
      en: 'The model achieves high accuracy. In addition, it runs in real time.',
      fr: 'Le modèle atteint une haute précision. De plus, il fonctionne en temps réel.',
    },
  },
  {
    id: 'moreover',
    word: 'moreover',
    fr: 'de plus / qui plus est',
    category: 'addition',
    pronunciation: 'mor-OH-ver',
    note: 'Introduit un argument supplémentaire et plus fort que le précédent. Registre soutenu.',
    exampleDaily: {
      en: 'She\'s highly qualified. Moreover, she has ten years of experience.',
      fr: 'Elle est très qualifiée. Qui plus est, elle a dix ans d\'expérience.',
    },
    exampleData: {
      en: 'The pipeline is efficient. Moreover, it scales to billions of records.',
      fr: 'Le pipeline est efficace. De plus, il passe à l\'échelle pour des milliards d\'enregistrements.',
    },
  },
  {
    id: 'furthermore',
    word: 'furthermore',
    fr: 'par ailleurs / en outre',
    category: 'addition',
    pronunciation: 'FER-ther-mor',
    note: 'Encore plus formel que "moreover". Typique des écrits académiques et rapports.',
    exampleDaily: {
      en: 'The project is over budget. Furthermore, it\'s behind schedule.',
      fr: 'Le projet dépasse le budget. Par ailleurs, il est en retard.',
    },
    exampleData: {
      en: 'The model overfits on small datasets. Furthermore, it requires expensive hardware.',
      fr: 'Le modèle surentraîne sur les petits datasets. De plus, il nécessite du matériel coûteux.',
    },
  },

  // ── CONTRAST ──────────────────────────────────────────────────────────────
  {
    id: 'on-the-other-hand',
    word: 'on the other hand',
    fr: 'd\'un autre côté / en revanche',
    category: 'contrast',
    pronunciation: 'on the UH-ther HAND',
    note: 'Présente le côté opposé d\'un argument. Toujours précédé d\'un premier point.',
    exampleDaily: {
      en: 'Living in the city is exciting. On the other hand, it\'s very expensive.',
      fr: 'Vivre en ville est excitant. En revanche, c\'est très cher.',
    },
    exampleData: {
      en: 'Neural networks are very powerful. On the other hand, they\'re hard to interpret.',
      fr: 'Les réseaux de neurones sont très puissants. En revanche, ils sont difficiles à interpréter.',
    },
  },
  {
    id: 'whereas',
    word: 'whereas',
    fr: 'alors que / tandis que',
    category: 'contrast',
    pronunciation: 'wair-AZ',
    note: 'Compare deux éléments dans la même phrase. Insiste sur une différence structurelle.',
    exampleDaily: {
      en: 'I prefer tea, whereas my partner drinks coffee.',
      fr: 'Je préfère le thé, alors que mon partenaire boit du café.',
    },
    exampleData: {
      en: 'Random forests are fast to train, whereas deep learning models take hours.',
      fr: 'Les forêts aléatoires s\'entraînent rapidement, alors que les modèles de deep learning prennent des heures.',
    },
  },
  {
    id: 'while',
    word: 'while',
    fr: 'alors que / tandis que',
    category: 'contrast',
    pronunciation: 'wail',
    note: 'Similaire à "whereas" mais aussi utilisé pour les actions simultanées. Le contexte indique s\'il s\'agit d\'un contraste ou d\'une simultanéité.',
    exampleDaily: {
      en: 'She loves traveling, while I prefer staying home.',
      fr: 'Elle adore voyager, alors que je préfère rester à la maison.',
    },
    exampleData: {
      en: 'Precision is high, while recall remains stubbornly low.',
      fr: 'La précision est élevée, alors que le rappel reste obstinément faible.',
    },
  },
  {
    id: 'even-though',
    word: 'even though',
    fr: 'même si / bien que',
    category: 'contrast',
    pronunciation: 'EE-ven THO',
    note: 'Plus fort que "although". Insiste sur le fait que le résultat est surprenant malgré la condition. Suivi d\'un verbe conjugué.',
    exampleDaily: {
      en: 'He went to work even though he was sick.',
      fr: 'Il est allé au travail même s\'il était malade.',
    },
    exampleData: {
      en: 'Even though the model is tiny, it outperforms much larger ones.',
      fr: 'Même si le modèle est minuscule, il surpasse des modèles bien plus grands.',
    },
  },
  {
    id: 'although',
    word: 'although',
    fr: 'bien que / quoique',
    category: 'contrast',
    pronunciation: 'ol-THO',
    note: 'Introduit une concession. Légèrement moins insistant que "even though". Suivi d\'un verbe conjugué.',
    exampleDaily: {
      en: 'Although it was raining, we went for a walk.',
      fr: 'Bien qu\'il pleuvait, nous sommes quand même allés nous promener.',
    },
    exampleData: {
      en: 'Although the accuracy is 95%, the recall on rare classes is very poor.',
      fr: 'Bien que la précision soit de 95%, le rappel sur les classes rares est très mauvais.',
    },
  },
  {
    id: 'despite',
    word: 'despite / in spite of',
    fr: 'malgré',
    category: 'contrast',
    pronunciation: 'di-SPITE / in SPITE of',
    note: 'Suivi d\'un nom ou d\'un gérondif (-ing), jamais d\'une proposition avec un verbe conjugué. Ex: "despite the rain" ou "despite being tired".',
    exampleDaily: {
      en: 'Despite the rain, we had a great time at the festival.',
      fr: 'Malgré la pluie, on a passé un excellent moment au festival.',
    },
    exampleData: {
      en: 'In spite of the limited data, the model generalizes surprisingly well.',
      fr: 'Malgré les données limitées, le modèle généralise étonnamment bien.',
    },
  },

  // ── CAUSE ─────────────────────────────────────────────────────────────────
  {
    id: 'thanks-to',
    word: 'thanks to',
    fr: 'grâce à',
    category: 'cause',
    pronunciation: 'THANKSS too',
    note: 'Cause positive. Suivi d\'un nom ou pronom. Implique que le résultat est bénéfique.',
    exampleDaily: {
      en: 'Thanks to her advice, I got the job.',
      fr: 'Grâce à ses conseils, j\'ai obtenu le poste.',
    },
    exampleData: {
      en: 'Thanks to transfer learning, we achieved good results with very little data.',
      fr: 'Grâce au transfer learning, on a obtenu de bons résultats avec très peu de données.',
    },
  },
  {
    id: 'due-to',
    word: 'due to',
    fr: 'en raison de / à cause de',
    category: 'cause',
    pronunciation: 'DYOU too',
    note: 'Cause neutre ou négative. Suivi d\'un nom. Équivalent de "because of" dans un registre plus formel.',
    exampleDaily: {
      en: 'The flight was delayed due to bad weather.',
      fr: 'Le vol a été retardé en raison du mauvais temps.',
    },
    exampleData: {
      en: 'The pipeline crashed due to a memory overflow.',
      fr: 'Le pipeline a planté en raison d\'un dépassement mémoire.',
    },
  },
  {
    id: 'according-to',
    word: 'according to',
    fr: 'selon / d\'après',
    category: 'cause',
    pronunciation: 'uh-KOR-ding too',
    note: 'Indique la source d\'une information. Ne pas utiliser avec "me" ou "I" ("according to me" est incorrect en anglais soutenu).',
    exampleDaily: {
      en: 'According to the weather forecast, it will rain tomorrow.',
      fr: 'Selon les prévisions météo, il va pleuvoir demain.',
    },
    exampleData: {
      en: 'According to the benchmark, our model outperforms the baseline by 12%.',
      fr: 'Selon le benchmark, notre modèle surpasse la baseline de 12%.',
    },
  },

  // ── CONSEQUENCE ───────────────────────────────────────────────────────────
  {
    id: 'therefore',
    word: 'therefore',
    fr: 'donc / par conséquent',
    category: 'consequence',
    pronunciation: 'THAIR-for',
    note: 'Conséquence logique. Registre formel à semi-formel. Peut se placer en début de phrase ou entre deux virgules.',
    exampleDaily: {
      en: 'I missed my alarm. Therefore, I was late for work.',
      fr: 'J\'ai raté mon réveil. Par conséquent, j\'étais en retard au travail.',
    },
    exampleData: {
      en: 'The dataset is highly imbalanced. Therefore, we applied oversampling.',
      fr: 'Le dataset est très déséquilibré. Par conséquent, on a appliqué le suréchantillonnage.',
    },
  },
  {
    id: 'which-is-why',
    word: 'which is why',
    fr: 'c\'est pourquoi',
    category: 'consequence',
    pronunciation: 'witch iz WAI',
    note: 'Relie directement cause et conséquence dans la même phrase. Plus naturel et conversationnel que "therefore".',
    exampleDaily: {
      en: 'I missed my bus, which is why I\'m late.',
      fr: 'J\'ai raté mon bus, c\'est pourquoi je suis en retard.',
    },
    exampleData: {
      en: 'The features aren\'t normalized, which is why the model converges slowly.',
      fr: 'Les features ne sont pas normalisées, c\'est pourquoi le modèle converge lentement.',
    },
  },
  {
    id: 'accordingly',
    word: 'accordingly',
    fr: 'en conséquence / par conséquent',
    category: 'consequence',
    pronunciation: 'uh-KOR-ding-lee',
    note: 'Registre formel. Implique qu\'on ajuste son comportement en réponse à une situation.',
    exampleDaily: {
      en: 'The budget was cut. Accordingly, we revised our plans.',
      fr: 'Le budget a été réduit. En conséquence, nous avons révisé nos plans.',
    },
    exampleData: {
      en: 'The model was underperforming. Accordingly, we increased the training data.',
      fr: 'Le modèle sous-performait. En conséquence, nous avons augmenté les données d\'entraînement.',
    },
  },
  {
    id: 'overall',
    word: 'overall',
    fr: 'dans l\'ensemble / globalement',
    category: 'consequence',
    pronunciation: 'OH-ver-ol',
    note: 'Résume une situation globale. Peut introduire une conclusion ou qualifier un jugement général.',
    exampleDaily: {
      en: 'Overall, it was a great trip despite the weather.',
      fr: 'Dans l\'ensemble, c\'était un super voyage malgré la météo.',
    },
    exampleData: {
      en: 'Overall, the new architecture shows a 15% improvement over the baseline.',
      fr: 'Globalement, la nouvelle architecture montre une amélioration de 15% par rapport à la baseline.',
    },
  },

  // ── CONDITION ─────────────────────────────────────────────────────────────
  {
    id: 'unless',
    word: 'unless',
    fr: 'à moins que / sauf si',
    category: 'condition',
    pronunciation: 'un-LESS',
    note: '"Unless" = "if... not". Introduit une condition négative. Ne pas utiliser avec une négation : "unless you don\'t" est une double négation incorrecte.',
    exampleDaily: {
      en: 'I won\'t go unless you come with me.',
      fr: 'Je n\'irai pas à moins que tu viennes avec moi.',
    },
    exampleData: {
      en: 'The pipeline won\'t run unless the data has been validated first.',
      fr: 'Le pipeline ne se lancera pas à moins que les données aient été validées d\'abord.',
    },
  },
  {
    id: 'as-long-as',
    word: 'as long as',
    fr: 'tant que / à condition que',
    category: 'condition',
    pronunciation: 'az LONG az',
    note: 'Exprime une condition continue. La principale reste vraie pendant toute la durée de la condition.',
    exampleDaily: {
      en: 'You can borrow my car as long as you drive carefully.',
      fr: 'Tu peux emprunter ma voiture à condition que tu conduises prudemment.',
    },
    exampleData: {
      en: 'The model performs well as long as the input data is clean.',
      fr: 'Le modèle performe bien tant que les données d\'entrée sont propres.',
    },
  },
  {
    id: 'in-order-to',
    word: 'in order to',
    fr: 'afin de / pour',
    category: 'condition',
    pronunciation: 'in OR-der too',
    note: 'Exprime un but. Suivi d\'un infinitif. "In order to" est plus formel que "to" seul, mais insiste davantage sur l\'intention.',
    exampleDaily: {
      en: 'I wake up early in order to avoid the rush-hour traffic.',
      fr: 'Je me lève tôt afin d\'éviter les embouteillages aux heures de pointe.',
    },
    exampleData: {
      en: 'We used regularization in order to prevent the model from overfitting.',
      fr: 'Nous avons utilisé la régularisation afin d\'éviter que le modèle ne surentraîne.',
    },
  },
  {
    id: 'otherwise',
    word: 'otherwise',
    fr: 'sinon / autrement',
    category: 'condition',
    pronunciation: 'UH-ther-waiz',
    note: 'Introduit la conséquence négative si la condition n\'est pas remplie. Souvent en début de phrase après un impératif.',
    exampleDaily: {
      en: 'Set an alarm, otherwise you\'ll be late.',
      fr: 'Mets un réveil, sinon tu seras en retard.',
    },
    exampleData: {
      en: 'Cache the results, otherwise the pipeline will restart from scratch every time.',
      fr: 'Mets les résultats en cache, sinon le pipeline repartira de zéro à chaque fois.',
    },
  },

  // ── REFORMULATION ─────────────────────────────────────────────────────────
  {
    id: 'the-same-as',
    word: 'the same as',
    fr: 'pareil à / identique à / comme',
    category: 'reformulation',
    pronunciation: 'the SAME az',
    note: 'Compare deux éléments en soulignant leur similitude. Peut introduire une comparaison positive ou neutre.',
    exampleDaily: {
      en: 'This year\'s conference was the same as last year — very inspiring.',
      fr: 'La conférence de cette année était pareille à l\'an dernier — très inspirante.',
    },
    exampleData: {
      en: 'The new model\'s performance is roughly the same as the previous version.',
      fr: 'Les performances du nouveau modèle sont à peu près les mêmes que celles de la version précédente.',
    },
  },
  {
    id: 'such-as',
    word: 'such as',
    fr: 'comme / tel que / par exemple',
    category: 'reformulation',
    pronunciation: 'SUTCH az',
    note: 'Donne des exemples concrets. Ne pas confondre avec "like" qui peut être ambigu. "Such as" est plus précis et formel.',
    exampleDaily: {
      en: 'I enjoy outdoor activities, such as hiking, cycling, and rock climbing.',
      fr: 'J\'aime les activités en plein air, comme la randonnée, le vélo et l\'escalade.',
    },
    exampleData: {
      en: 'We evaluated several metrics, such as F1-score, precision, and recall.',
      fr: 'Nous avons évalué plusieurs métriques, telles que le F1-score, la précision et le rappel.',
    },
  },
  {
    id: 'in-other-words',
    word: 'in other words',
    fr: 'en d\'autres termes / autrement dit',
    category: 'reformulation',
    pronunciation: 'in UH-ther WERDZ',
    note: 'Reformule ce qui vient d\'être dit de manière plus claire ou plus simple. Très utile à l\'oral pour vérifier la compréhension.',
    exampleDaily: {
      en: 'She was exhausted — in other words, she really needed a break.',
      fr: 'Elle était épuisée — autrement dit, elle avait vraiment besoin d\'une pause.',
    },
    exampleData: {
      en: 'The model overfit. In other words, it memorized the training data instead of learning patterns.',
      fr: 'Le modèle a surentraîné. Autrement dit, il a mémorisé les données d\'entraînement au lieu d\'apprendre des patterns.',
    },
  },
  {
    id: 'to-put-it-differently',
    word: 'to put it differently',
    fr: 'autrement dit / pour le dire autrement',
    category: 'reformulation',
    pronunciation: 'too POOT it DIF-rent-lee',
    note: 'Plus conversationnel que "in other words". Signale qu\'on va reformuler avec une approche différente, parfois plus imagée.',
    exampleDaily: {
      en: 'He\'s not very sociable. To put it differently, he prefers his own company.',
      fr: 'Il n\'est pas très sociable. Pour le dire autrement, il préfère sa propre compagnie.',
    },
    exampleData: {
      en: 'The algorithm is O(n²). To put it differently, it simply won\'t scale to large datasets.',
      fr: 'L\'algorithme est en O(n²). Autrement dit, il ne passera tout simplement pas à l\'échelle pour de grands datasets.',
    },
  },

  // ── EMPHASIS ──────────────────────────────────────────────────────────────
  {
    id: 'indeed',
    word: 'indeed',
    fr: 'en effet / effectivement',
    category: 'emphasis',
    pronunciation: 'in-DEED',
    note: 'Renforce ou confirme une affirmation précédente. Plus formel que "yes" ou "actually". Souvent utilisé pour valider ce que l\'autre vient de dire.',
    exampleDaily: {
      en: 'The exam was hard. Indeed, half the class failed.',
      fr: 'L\'examen était difficile. En effet, la moitié de la classe a échoué.',
    },
    exampleData: {
      en: 'The latency improved significantly. Indeed, response time dropped from 500ms to 120ms.',
      fr: 'La latence s\'est significativement améliorée. En effet, le temps de réponse est passé de 500ms à 120ms.',
    },
  },
  {
    id: 'in-fact',
    word: 'in fact',
    fr: 'en fait / en réalité',
    category: 'emphasis',
    pronunciation: 'in FAKT',
    note: 'Introduit une vérité souvent surprenante ou contredisant une idée reçue. Plus formel qu\'"actually".',
    exampleDaily: {
      en: 'I thought the restaurant would be expensive, but in fact it was very affordable.',
      fr: 'Je pensais que le restaurant serait cher, mais en fait il était très abordable.',
    },
    exampleData: {
      en: 'GPT seems to understand language, but in fact it\'s predicting tokens based on statistics.',
      fr: 'GPT semble comprendre le langage, mais en fait il prédit des tokens sur la base de statistiques.',
    },
  },
  {
    id: 'actually',
    word: 'actually',
    fr: 'en fait / à vrai dire',
    category: 'emphasis',
    pronunciation: 'AK-choo-uh-lee',
    note: '⚠️ Faux ami ! "Actually" ≠ "actuellement" (= "currently" en anglais). "Actually" signifie "en fait / à vrai dire". Très fréquent à l\'oral pour corriger ou nuancer.',
    exampleDaily: {
      en: 'I don\'t like sushi — actually, I\'ve never tried it.',
      fr: 'Je n\'aime pas les sushis — en fait, je n\'en ai jamais mangé.',
    },
    exampleData: {
      en: 'This looks like a small fine-tuned model, but it\'s actually a 70-billion-parameter LLM.',
      fr: 'Ça ressemble à un petit modèle fine-tuné, mais c\'est en fait un LLM de 70 milliards de paramètres.',
    },
  },
  {
    id: 'above-all',
    word: 'above all',
    fr: 'surtout / avant tout',
    category: 'emphasis',
    pronunciation: 'uh-BUV OL',
    note: 'Met en évidence l\'élément le plus important d\'une liste ou d\'un argument. Placement variable mais souvent en fin de liste.',
    exampleDaily: {
      en: 'You need patience, dedication, and, above all, a sense of humor.',
      fr: 'Tu as besoin de patience, de détermination, et surtout d\'un sens de l\'humour.',
    },
    exampleData: {
      en: 'A good data scientist must be curious, rigorous, and, above all, able to communicate results clearly.',
      fr: 'Un bon data scientist doit être curieux, rigoureux, et surtout capable de communiquer clairement les résultats.',
    },
  },
  {
    id: 'as-for',
    word: 'as for',
    fr: 'quant à / pour ce qui est de',
    category: 'emphasis',
    pronunciation: 'az FOR',
    note: 'Introduit un nouveau sujet ou une transition vers quelque chose de spécifique. Souvent utilisé pour contraster ou ajouter un point secondaire.',
    exampleDaily: {
      en: 'John is coming to the party. As for Sarah, she\'s not sure yet.',
      fr: 'John vient à la fête. Quant à Sarah, elle n\'est pas encore sûre.',
    },
    exampleData: {
      en: 'The training set is ready. As for the test set, we\'re still in the labeling phase.',
      fr: 'Le set d\'entraînement est prêt. Quant au set de test, on est encore dans la phase d\'annotation.',
    },
  },
]

export const vocabCategories = [
  { id: 'all',           label: 'Tous',          color: '#6366f1' },
  { id: 'addition',      label: 'Addition',      color: '#0ea5e9' },
  { id: 'contrast',      label: 'Contraste',     color: '#8b5cf6' },
  { id: 'cause',         label: 'Cause',         color: '#f59e0b' },
  { id: 'consequence',   label: 'Conséquence',   color: '#10b981' },
  { id: 'condition',     label: 'Condition',     color: '#ef4444' },
  { id: 'reformulation', label: 'Reformulation', color: '#ec4899' },
  { id: 'emphasis',      label: 'Emphase',       color: '#14b8a6' },
]
