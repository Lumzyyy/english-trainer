// 46 exercices sur les 4 conditionals
// Types : choose | fill | correct | translate
// Niveaux : easy | medium | hard
// Contextes : daily | data
// Tense : c0 | c1 | c2 | c3 | cmix

export const exercisesCond = [

  // ══════════════════════════════════════════════════════════
  // ZERO CONDITIONAL (c0)
  // ══════════════════════════════════════════════════════════
  {
    id: 'c0-1', type: 'choose', level: 'easy', context: 'daily', tense: 'c0',
    question: 'If you heat water to 100°C, it ___.',
    options: ['boils', 'would boil', 'will boil', 'boiled'],
    answer: 'boils',
    explain: 'Zero Conditional : If + présent simple → présent simple. C\'est une vérité scientifique immuable, pas une prédiction future. On utilise le présent simple dans les deux propositions, pas "will" ni "would".',
  },
  {
    id: 'c0-2', type: 'fill', level: 'easy', context: 'daily', tense: 'c0',
    question: 'Every time I\'m stressed, I ___ (go) for a walk.',
    answer: 'go',
    explain: 'Zero Conditional avec "every time" (chaque fois que). L\'action est automatique et habituelle → présent simple dans les deux propositions. "Every time" peut remplacer "if/when" pour exprimer une habitude régulière.',
  },
  {
    id: 'c0-3', type: 'choose', level: 'easy', context: 'data', tense: 'c0',
    question: 'When training loss stops decreasing, the model ___.',
    options: ['has converged', 'would converge', 'will converge', 'converged'],
    answer: 'has converged',
    explain: 'Zero Conditional exprimant une vérité technique : quand la loss s\'arrête de diminuer, c\'est la définition même de la convergence. Le présent perfect "has converged" est idiomatique ici car l\'état résultant (être convergé) est ce qu\'on constate dans le présent.',
  },
  {
    id: 'c0-4', type: 'fill', level: 'medium', context: 'data', tense: 'c0',
    question: 'If you ___ (not/version) your datasets, you can\'t reproduce your experiments.',
    answer: 'don\'t version',
    explain: 'Zero Conditional négatif : If + don\'t/doesn\'t + BV → présent simple. C\'est une règle générale du ML. La conséquence (can\'t reproduce) est une vérité systématique, pas une prédiction future → pas de "won\'t" mais "can\'t".',
  },
  {
    id: 'c0-5', type: 'translate', level: 'easy', context: 'daily', tense: 'c0',
    question: 'Traduis : "Si tu ne dors pas assez, tu es fatigué(e) le lendemain."',
    answer: 'If you don\'t sleep enough, you are / feel tired the next day.',
    explain: 'Zero Conditional : vérité universelle sur le corps humain. Les deux verbes sont au présent simple. En anglais, "you feel tired" est souvent plus naturel que "you are tired" dans ce contexte, mais les deux sont corrects.',
  },
  {
    id: 'c0-6', type: 'correct', level: 'medium', context: 'data', tense: 'c0',
    question: 'Corrige : "If you use too many features, the model would overfit."',
    answer: 'If you use too many features, the model overfits.',
    explain: 'Avec le Zero Conditional, on n\'utilise pas "would" — c\'est réservé aux 2nd et 3rd conditionals. Ici, c\'est une loi du ML : trop de features = surapprentissage systématique. Les deux propositions doivent être au présent simple.',
  },
  {
    id: 'c0-7', type: 'choose', level: 'medium', context: 'data', tense: 'c0',
    question: 'Whenever the data ___ imbalanced, the model ___ the majority class.',
    options: ['is / tends to predict', 'is / will predict', 'would be / predicts', 'was / predicts'],
    answer: 'is / tends to predict',
    explain: 'Zero Conditional avec "whenever" (chaque fois que). Les deux propositions sont au présent simple. "Tends to predict" est idiomatique car il exprime une tendance systématique, pas une action ponctuelle.',
  },
  {
    id: 'c0-8', type: 'translate', level: 'easy', context: 'data', tense: 'c0',
    question: 'Traduis : "Si tu ne normalises pas les features, le modèle converge lentement."',
    answer: 'If you don\'t normalize the features, the model converges slowly.',
    explain: 'Zero Conditional : règle technique universelle du Machine Learning. Présent simple dans les deux propositions. Pas de "will converge" car ce n\'est pas une prédiction future mais une vérité générale.',
  },

  // ══════════════════════════════════════════════════════════
  // FIRST CONDITIONAL (c1)
  // ══════════════════════════════════════════════════════════
  {
    id: 'c1-1', type: 'choose', level: 'easy', context: 'daily', tense: 'c1',
    question: 'If it rains tomorrow, I ___ take the car.',
    options: ['will', 'would', 'am going to', 'should'],
    answer: 'will',
    explain: '1st Conditional : If + présent simple → will + BV. "Tomorrow" confirme qu\'on parle d\'une situation future réelle et probable. "Will" exprime le résultat certain si la condition se réalise. "Would" est réservé au 2nd conditional (hypothèses irréelles).',
  },
  {
    id: 'c1-2', type: 'fill', level: 'easy', context: 'daily', tense: 'c1',
    question: 'Unless you ___ (hurry), we\'ll miss the train.',
    answer: 'hurry',
    explain: '"Unless" = "If... not" : la subordonnée est au présent simple, jamais avec "will". "Unless you hurry" = "If you don\'t hurry". La structure 1st Conditional s\'applique : subordonnée au présent, principale avec "will".',
  },
  {
    id: 'c1-3', type: 'correct', level: 'easy', context: 'daily', tense: 'c1',
    question: 'Corrige : "If she will study hard, she\'ll pass the exam."',
    answer: 'If she studies hard, she\'ll pass the exam.',
    explain: 'Erreur très fréquente : JAMAIS de "will" dans la subordonnée de condition (If/unless/as soon as/when). Même si on parle du futur, la subordonnée reste au présent simple. Seule la principale peut avoir "will".',
  },
  {
    id: 'c1-4', type: 'translate', level: 'easy', context: 'daily', tense: 'c1',
    question: 'Traduis : "S\'il fait beau ce week-end, on ira à la plage."',
    answer: 'If the weather is nice this weekend, we\'ll go to the beach.',
    explain: '1st Conditional pour une situation future réelle. "If + présent simple (is)" → "will + BV (go)". "This weekend" confirme qu\'il s\'agit d\'une possibilité réelle et prochaine, pas d\'une hypothèse imaginaire.',
  },
  {
    id: 'c1-5', type: 'fill', level: 'medium', context: 'data', tense: 'c1',
    question: 'I\'ll deploy the model as soon as the tests ___.',
    answer: 'pass',
    explain: 'Règle importante : après "as soon as", "when", "once", "until" dans une proposition subordonnée de temps qui réfère au futur → présent simple, jamais "will pass". "As soon as the tests pass" (pas "will pass"). C\'est la même règle que pour "if".',
  },
  {
    id: 'c1-6', type: 'choose', level: 'easy', context: 'daily', tense: 'c1',
    question: 'Tom will be at the party tonight. If I see him, I ___ say hello.',
    options: ['will', 'would', 'should', 'might'],
    answer: 'will',
    explain: 'La situation est réelle : Tom sera à la fête. C\'est une vraie possibilité → 1st Conditional. "If I see him" (présent simple) + "I will say" (will + BV). On dit "will" car c\'est une intention certaine dans un scénario probable.',
  },
  {
    id: 'c1-7', type: 'correct', level: 'medium', context: 'daily', tense: 'c1',
    question: 'Corrige : "I\'ll call you when I\'ll arrive."',
    answer: 'I\'ll call you when I arrive.',
    explain: '"When" introduit une subordonnée temporelle futur → présent simple, jamais "will". "When I arrive" (pas "will arrive"). Cette règle s\'applique aussi à : as soon as, once, until, after, before dans les propositions temporelles futures.',
  },
  {
    id: 'c1-8', type: 'fill', level: 'medium', context: 'data', tense: 'c1',
    question: 'Unless we ___ (add) more training data, the accuracy won\'t improve.',
    answer: 'add',
    explain: '"Unless" + présent simple dans la subordonnée. "Unless we add" = "If we don\'t add". La principale contient "won\'t improve" (will + not + BV). La structure reste celle du 1st Conditional : la situation (ajouter de la data) est possible mais non encore réalisée.',
  },
  {
    id: 'c1-9', type: 'choose', level: 'medium', context: 'data', tense: 'c1',
    question: 'In case the API goes down, we ___ have a fallback mechanism.',
    options: ['should', 'would', 'had', 'will have to'],
    answer: 'should',
    explain: '"In case" + présent simple exprime une précaution pour une situation possible. La principale peut utiliser "should" (conseil/obligation) à la place de "will". "We should have a fallback" = c\'est une bonne pratique recommandée si le cas se présente.',
  },
  {
    id: 'c1-10', type: 'translate', level: 'medium', context: 'data', tense: 'c1',
    question: 'Traduis : "Si le modèle ne converge pas, nous devrons ajuster le taux d\'apprentissage."',
    answer: 'If the model doesn\'t converge, we\'ll need to adjust the learning rate.',
    explain: '1st Conditional négatif : "If + doesn\'t + BV → will + BV". "Nous devrons" = "we\'ll need to" (will + need to). La situation (non-convergence) est une vraie possibilité technique, pas une hypothèse irréelle → 1st conditional.',
  },
  {
    id: 'c1-11', type: 'correct', level: 'medium', context: 'data', tense: 'c1',
    question: 'Corrige : "I\'ll merge the PR as soon as the CI will pass."',
    answer: 'I\'ll merge the PR as soon as the CI passes.',
    explain: 'Même règle : après "as soon as" (dès que), la subordonnée temporelle est au présent simple même si on parle du futur. "As soon as the CI passes" (présent simple), pas "will pass". La principale "I\'ll merge" garde "will".',
  },

  // ══════════════════════════════════════════════════════════
  // SECOND CONDITIONAL (c2)
  // ══════════════════════════════════════════════════════════
  {
    id: 'c2-1', type: 'choose', level: 'easy', context: 'daily', tense: 'c2',
    question: 'If I ___ her address, I would visit her.',
    options: ['knew', 'know', 'would know', 'had known'],
    answer: 'knew',
    explain: '2nd Conditional : If + past simple → would + BV. "Knew" est le past simple de "know". Je ne connais pas son adresse en ce moment — c\'est une hypothèse irréelle présente. "Would know" après IF est l\'erreur classique à éviter. "Had known" serait du 3rd conditional (passé).',
  },
  {
    id: 'c2-2', type: 'fill', level: 'easy', context: 'daily', tense: 'c2',
    question: 'If people stopped using cars, there ___ (be) much less pollution.',
    answer: 'would be',
    explain: '2nd Conditional : "stopped" (past simple) dans la condition → "would + BV" dans la principale. L\'arrêt de l\'utilisation des voitures est une hypothèse irréelle/peu probable → 2nd conditional. "Would be" = résultat certain dans ce monde hypothétique.',
  },
  {
    id: 'c2-3', type: 'choose', level: 'easy', context: 'daily', tense: 'c2',
    question: 'What would you do if you ___ a million dollars?',
    options: ['won', 'win', 'would win', 'had won'],
    answer: 'won',
    explain: '"Won" est le past simple de "win". La question porte sur une hypothèse imaginaire (gagner un million d\'euros est peu probable) → 2nd Conditional. "Win" (présent simple) serait du 1st conditional (plus réaliste). "Would win" après IF est interdit.',
  },
  {
    id: 'c2-4', type: 'translate', level: 'easy', context: 'daily', tense: 'c2',
    question: 'Traduis : "Si je parlais anglais couramment, je n\'aurais pas besoin de cours."',
    answer: 'If I spoke English fluently, I wouldn\'t need lessons.',
    explain: '2nd Conditional : je ne parle pas encore anglais couramment (irréel présent) → "If I spoke" (past simple). "Je n\'aurais pas besoin" → "I wouldn\'t need" (would not + BV). C\'est le conditionnel de l\'objectif non encore atteint.',
  },
  {
    id: 'c2-5', type: 'correct', level: 'easy', context: 'daily', tense: 'c2',
    question: 'Corrige : "If I would know the answer, I would tell you."',
    answer: 'If I knew the answer, I would tell you.',
    explain: 'L\'erreur la plus fréquente du 2nd Conditional : "would" ne peut jamais apparaître dans la subordonnée IF. "If I would know" est incorrect. La forme correcte est le past simple : "If I knew". "Would" va uniquement dans la proposition principale.',
  },
  {
    id: 'c2-6', type: 'choose', level: 'medium', context: 'daily', tense: 'c2',
    question: 'If it ___ so much in England, you wouldn\'t see so many umbrellas.',
    options: ['didn\'t rain', 'doesn\'t rain', 'wouldn\'t rain', 'hadn\'t rained'],
    answer: 'didn\'t rain',
    explain: '2nd Conditional négatif : If + didn\'t + BV (past simple négatif). La pluie fréquente en Angleterre est une réalité → l\'hypothèse "s\'il ne pleuvait pas autant" est irréelle → 2nd conditional. "Wouldn\'t rain" après IF est interdit, "hasn\'t rained" serait du 3rd.',
  },
  {
    id: 'c2-7', type: 'fill', level: 'medium', context: 'daily', tense: 'c2',
    question: 'If I ___ (be) you, I would accept that offer immediately.',
    answer: 'were',
    explain: '"If I were you" est l\'expression figée pour donner un conseil. En anglais soutenu, on utilise "were" pour toutes les personnes dans le 2nd Conditional (pas "was"). Cette forme est appelée "subjunctive". À l\'oral très informel, "was" s\'entend aussi, mais "were" reste la forme correcte.',
  },
  {
    id: 'c2-8', type: 'choose', level: 'medium', context: 'data', tense: 'c2',
    question: 'If we had a bigger GPU cluster, we ___ train the model much faster.',
    options: ['could', 'will', 'would have', 'can'],
    answer: 'could',
    explain: 'On n\'a pas de gros cluster GPU (situation irréelle présente) → 2nd Conditional. "Could + BV" exprime une capacité conditionnelle : si on avait le GPU, on POURRAIT s\'en servir pour accélérer. "Could" est souvent préféré à "would" quand on parle d\'une capacité qui deviendrait possible.',
  },
  {
    id: 'c2-9', type: 'translate', level: 'medium', context: 'data', tense: 'c2',
    question: 'Traduis : "Si on avait plus de budget, on pourrait recruter un ingénieur data."',
    answer: 'If we had more budget, we could hire a data engineer.',
    explain: '2nd Conditional : "si on avait" → "If we had" (past simple). "On pourrait" → "we could" (could + BV). On n\'a pas le budget maintenant, c\'est une hypothèse irréelle. "Could" traduit parfaitement "pourrait" dans ce contexte conditionnel.',
  },
  {
    id: 'c2-10', type: 'correct', level: 'medium', context: 'data', tense: 'c2',
    question: 'Corrige : "If the model would be faster, we would deploy it on mobile."',
    answer: 'If the model were faster, we would deploy it on mobile.',
    explain: 'Double erreur : "would be" après IF est incorrect. La forme correcte est "were" (ou "was" à l\'oral informel). Le modèle n\'est pas encore assez rapide → irréel présent → 2nd Conditional. "If the model were faster" + "we would deploy".',
  },
  {
    id: 'c2-11', type: 'fill', level: 'hard', context: 'data', tense: 'c2',
    question: 'If it ___ (not/take) so long to preprocess, I would run the pipeline every day.',
    answer: 'didn\'t take',
    explain: '2nd Conditional négatif : If + past simple négatif (didn\'t + BV). Le preprocessing prend trop longtemps → c\'est la réalité actuelle. L\'hypothèse (si ça ne prenait pas si longtemps) est irréelle → "didn\'t take" (pas "won\'t take" qui serait du 1st).',
  },
  {
    id: 'c2-12', type: 'correct', level: 'hard', context: 'daily', tense: 'c2',
    question: 'Corrige : "If I had more free time, I would learned a new language."',
    answer: 'If I had more free time, I would learn a new language.',
    explain: 'Erreur sur la principale : "would + past participle" est incorrect. La structure du 2nd Conditional dans la principale est "would + base verb" (infinitif). "Would learn" (pas "would learned"). "Would have learned" serait du 3rd Conditional.',
  },
  {
    id: 'c2-13', type: 'translate', level: 'hard', context: 'data', tense: 'c2',
    question: 'Traduis : "Si j\'avais accès à plus de puissance de calcul, j\'entraînerais un modèle bien plus grand."',
    answer: 'If I had access to more compute, I would train a much larger model.',
    explain: '2nd Conditional : "si j\'avais accès" → "If I had access" (past simple). "J\'entraînerais" → "I would train" (would + BV). Le manque de compute est la réalité actuelle → hypothèse irréelle → 2nd conditional. "Compute" (sans article) est le terme technique standard en anglais.',
  },

  // ══════════════════════════════════════════════════════════
  // THIRD CONDITIONAL (c3)
  // ══════════════════════════════════════════════════════════
  {
    id: 'c3-1', type: 'choose', level: 'easy', context: 'daily', tense: 'c3',
    question: 'If she had studied more, she ___ the exam.',
    options: ['would have passed', 'would pass', 'had passed', 'will have passed'],
    answer: 'would have passed',
    explain: '3rd Conditional : If + past perfect (had + PP) → would have + PP. Elle n\'a pas assez étudié (fait passé réel) → l\'hypothèse est dans le passé et impossible à changer. "Would have passed" = le résultat hypothétique passé. "Would pass" serait du 2nd conditional (présent).',
  },
  {
    id: 'c3-2', type: 'fill', level: 'easy', context: 'data', tense: 'c3',
    question: 'If I ___ (know), I would have helped you fix the issue.',
    answer: 'had known',
    explain: '"Had known" est le past perfect de "know". Dans le 3rd Conditional, la subordonnée IF utilise toujours le past perfect (had + PP). Je ne savais pas → c\'est un fait passé réel → l\'hypothèse inverse est impossible → 3rd Conditional.',
  },
  {
    id: 'c3-3', type: 'translate', level: 'easy', context: 'daily', tense: 'c3',
    question: 'Traduis : "S\'ils étaient partis plus tôt, ils n\'auraient pas raté leur vol."',
    answer: 'If they had left earlier, they wouldn\'t have missed their flight.',
    explain: '3rd Conditional : "s\'ils étaient partis" → "If they had left" (past perfect). "Ils n\'auraient pas raté" → "they wouldn\'t have missed" (would not have + PP). Ils sont partis tard (réalité passée), donc l\'hypothèse du départ anticipé est impossible.',
  },
  {
    id: 'c3-4', type: 'correct', level: 'medium', context: 'daily', tense: 'c3',
    question: 'Corrige : "If we had known about the traffic, we would have took the metro."',
    answer: 'If we had known about the traffic, we would have taken the metro.',
    explain: '"Would have + past participle" : "took" est le past simple, pas le past participle. Le PP de "take" est "taken". Toujours vérifier la 3ème colonne des verbes irréguliers pour les 3rd Conditional et les Present Perfect.',
  },
  {
    id: 'c3-5', type: 'fill', level: 'medium', context: 'data', tense: 'c3',
    question: 'If we ___ (test) the model before deploying, we wouldn\'t have shipped the bug.',
    answer: 'had tested',
    explain: '3rd Conditional : "had tested" = past perfect du verbe régulier "test". On n\'a pas testé avant le déploiement (réalité passée) → le bug a été livré → regret → 3rd Conditional. La principale négative "wouldn\'t have shipped" confirme la structure.',
  },
  {
    id: 'c3-6', type: 'choose', level: 'medium', context: 'data', tense: 'c3',
    question: 'If the data ___ cleaned properly, the model ___ much better.',
    options: ['had been / would have performed', 'was / would perform', 'had been / would perform', 'has been / will perform'],
    answer: 'had been / would have performed',
    explain: '3rd Conditional passif : "had been cleaned" = past perfect passif (had been + PP). Dans la principale : "would have performed" (would have + PP). Les données n\'ont pas été bien nettoyées dans le passé → on analyse les conséquences passées hypothétiques.',
  },
  {
    id: 'c3-7', type: 'translate', level: 'medium', context: 'data', tense: 'c3',
    question: 'Traduis : "Si on avait utilisé la validation croisée, on aurait détecté le surapprentissage."',
    answer: 'If we had used cross-validation, we would have detected the overfitting.',
    explain: '3rd Conditional : "si on avait utilisé" → "If we had used" (past perfect). "On aurait détecté" → "we would have detected" (would have + PP). On n\'a pas utilisé la cross-validation → surapprentissage non détecté → analyse rétrospective typique du post-mortem.',
  },
  {
    id: 'c3-8', type: 'correct', level: 'hard', context: 'data', tense: 'c3',
    question: 'Corrige : "If I had logged the hyperparameters, I could have reproduce the results."',
    answer: 'If I had logged the hyperparameters, I could have reproduced the results.',
    explain: '"Could have + past participle" : "reproduce" est la base verbale, mais après "could have" on doit utiliser le past participle "reproduced". Structure 3rd Conditional avec "could have" (possibilité manquée) à la place de "would have" (résultat certain).',
  },
  {
    id: 'c3-9', type: 'fill', level: 'hard', context: 'daily', tense: 'c3',
    question: 'If I ___ (take) that job offer, I ___ (not/be) where I am today.',
    answer: 'had taken / wouldn\'t have been',
    explain: '3rd Conditional complet : "had taken" (past perfect dans IF) + "wouldn\'t have been" (would not have + PP dans la principale). On analyse une décision passée et ses conséquences hypothétiques. "Where I am today" ancre le résultat dans le présent réel.',
  },

  // ══════════════════════════════════════════════════════════
  // MIXED / COMPARAISON (cmix)
  // ══════════════════════════════════════════════════════════
  {
    id: 'cmix-1', type: 'choose', level: 'easy', context: 'daily', tense: 'cmix',
    question: 'If I have time tomorrow, I ___ help you move.',
    options: ['will', 'would', 'would have', 'had'],
    answer: 'will',
    explain: '1st Conditional : "If I have time" (présent simple) → demain je pourrais avoir du temps, c\'est une vraie possibilité. "Will help" = résultat probable si la condition se réalise. Comparer avec 2nd : "If I had time, I would help" = je n\'ai pas le temps maintenant (irréel).',
  },
  {
    id: 'cmix-2', type: 'choose', level: 'easy', context: 'daily', tense: 'cmix',
    question: 'Quelle phrase exprime une hypothèse IRRÉELLE au présent ?',
    options: [
      'If I had more energy, I would exercise every day.',
      'If I have more energy after lunch, I\'ll go for a run.',
      'If the weather is nice, we\'ll have lunch outside.',
      'If you press this button, the machine starts.',
    ],
    answer: 'If I had more energy, I would exercise every day.',
    explain: '"If I had more energy, I would exercise" = 2nd Conditional : je n\'ai pas assez d\'énergie en ce moment, c\'est une hypothèse irréelle. Les autres phrases utilisent le présent simple → 1st Conditional (possibilité réelle) ou Zero Conditional (vérité générale).',
  },
  {
    id: 'cmix-3', type: 'translate', level: 'medium', context: 'daily', tense: 'cmix',
    question: 'Traduis : "Tom sera à la fête ce soir. Si je le vois, je lui dirai bonjour."',
    answer: 'Tom will be at the party tonight. If I see him, I\'ll say hello.',
    explain: '1st Conditional : Tom SERA à la fête (réalité future probable). Voir Tom est donc possible → 1st Conditional "If I see him" (présent simple), pas "If I saw him" (2nd = hypothèse irréelle). "Je lui dirai" → "I\'ll say" (will + BV).',
  },
  {
    id: 'cmix-4', type: 'correct', level: 'medium', context: 'daily', tense: 'cmix',
    question: 'Corrige : "If global warming continues, temperatures would rise even higher."',
    answer: 'If global warming continues, temperatures will rise even higher.',
    explain: 'Le réchauffement climatique continue réellement → la menace de hausse des températures est une conséquence réelle et probable → 1st Conditional. "Will rise" (pas "would rise"). "Would" signalerait que c\'est une hypothèse irréelle, ce qui minimiserait la gravité du problème.',
  },
  {
    id: 'cmix-5', type: 'choose', level: 'medium', context: 'data', tense: 'cmix',
    question: 'If we had started the project earlier, we ___ done by now. (Mixed conditional)',
    options: ['would be', 'would have been', 'will be', 'were'],
    answer: 'would be',
    explain: 'Mixed Conditional : If + past perfect (passé irréel) → would + BV (résultat PRÉSENT). On n\'a pas commencé tôt (passé réel) → résultat présent hypothétique : "we would be done now". "Would have been" serait du 3rd pur (résultat passé). Ici, "now" nous ancre dans le présent.',
  },
  {
    id: 'cmix-6', type: 'choose', level: 'hard', context: 'data', tense: 'cmix',
    question: 'Quelle est la différence de sens ? A: "If we deploy today, we\'ll meet the deadline." B: "If we deployed today, we might meet the deadline."',
    options: [
      'A = plan concret (1st) ; B = scénario moins probable (2nd)',
      'A = hypothèse passée ; B = certitude future',
      'A et B signifient exactement la même chose',
      'A = 2nd conditional ; B = 1st conditional',
    ],
    answer: 'A = plan concret (1st) ; B = scénario moins probable (2nd)',
    explain: 'A (1st Conditional) : déployer aujourd\'hui est une option réaliste → "we\'ll meet". B (2nd Conditional avec "might") : déployer aujourd\'hui paraît moins probable ou plus hypothétique → "we might meet". La même situation peut être présentée différemment selon la confiance du locuteur.',
  },
  {
    id: 'cmix-7', type: 'fill', level: 'hard', context: 'data', tense: 'cmix',
    question: 'If the model ___ (generalize) better from the start, we ___ (not/need) to collect more data now. (Mixed)',
    answer: 'had generalized / wouldn\'t need',
    explain: 'Mixed Conditional : If + past perfect "had generalized" (action passée irréelle) → would + BV "wouldn\'t need" (conséquence dans le PRÉSENT). Le modèle n\'a pas bien généralisé (passé réel) → on a besoin de plus de données maintenant (présent réel).',
  },
  {
    id: 'cmix-8', type: 'correct', level: 'hard', context: 'daily', tense: 'cmix',
    question: 'Corrige : "If I would have more time, I would study harder."',
    answer: 'If I had more time, I would study harder.',
    explain: 'Double erreur fréquente. "Would have" dans la subordonnée IF est incorrecte sous deux formes : (1) "would" + base verbale après IF est interdit, (2) "would have" ressemble à du 3rd conditional mais "more time" indique le présent. La correction : "If I had" (past simple = irréel présent, 2nd Conditional).',
  },

  // ══════════════════════════════════════════════════════════
  // EXERCICES EC50–EC120
  // ══════════════════════════════════════════════════════════

  // ── ZERO CONDITIONAL (c0) ──────────────────────────────
  {
    id: 'ec50', type: 'choose', level: 'easy', context: 'data', tense: 'c0',
    question: 'If the batch size ___ too large, memory usage ___.',
    options: ['is / increases', 'is / will increase', 'was / increases', 'is / would increase'],
    answer: 'is / increases',
    explain: 'Zero Conditional : deux vérités techniques liées de façon systématique. Présent simple dans les deux propositions. "Will increase" serait du 1st conditional (prédiction), mais ici c\'est une loi générale de la mémoire GPU.',
  },
  {
    id: 'ec51', type: 'fill', level: 'easy', context: 'daily', tense: 'c0',
    question: 'Water ___ (freeze) if the temperature drops below 0°C.',
    answer: 'freezes',
    explain: 'Zero Conditional : loi physique universelle. Présent simple dans les deux propositions. "Drops" et "freezes" sont tous les deux au présent simple. Pas de "will" car ce n\'est pas une prédiction future mais une vérité constante.',
  },
  {
    id: 'ec52', type: 'choose', level: 'medium', context: 'data', tense: 'c0',
    question: 'Provided that the labels ___ correct, the supervised model ___ well.',
    options: ['are / generalizes', 'are / will generalize', 'were / generalizes', 'are / would generalize'],
    answer: 'are / generalizes',
    explain: '"Provided that" (à condition que) peut introduire un Zero Conditional. Ici, c\'est une vérité ML générale : des labels corrects → bonne généralisation. Présent simple dans les deux propositions.',
  },
  {
    id: 'ec53', type: 'fill', level: 'medium', context: 'data', tense: 'c0',
    question: 'As long as the training and test sets ___ (come) from the same distribution, your metrics are reliable.',
    answer: 'come',
    explain: '"As long as" (tant que) avec Zero Conditional : vérité statistique fondamentale en ML. Les deux propositions sont au présent simple. Si la distribution varie, le concept de "data drift" s\'applique et les métriques perdent leur sens.',
  },
  {
    id: 'ec54', type: 'correct', level: 'medium', context: 'daily', tense: 'c0',
    question: 'Corrige si nécessaire : "If you mix red and blue paint, you will get purple."',
    answer: 'If you mix red and blue paint, you get purple.',
    explain: 'Zero Conditional : mélanger des couleurs est une vérité physique générale. On doit utiliser le présent simple dans les deux propositions, pas "will get". "Will get" signalerait une prédiction future (1st conditional), ce qui est inexact ici.',
  },
  {
    id: 'ec55', type: 'choose', level: 'hard', context: 'data', tense: 'c0',
    question: 'Even if you ___ the learning rate, gradient descent ___ diverge if it\'s set too high.',
    options: ['tune / can still', 'tuned / can still', 'tune / will still', 'tune / would still'],
    answer: 'tune / can still',
    explain: '"Even if" avec Zero Conditional : vérité technique générale. Présent simple dans les deux propositions. "Can still" exprime la possibilité permanente de divergence, sans ancrage futur → plus approprié que "will still" qui impliquerait une prédiction ponctuelle.',
  },
  {
    id: 'ec56', type: 'translate', level: 'hard', context: 'data', tense: 'c0',
    question: 'Traduis : "Tant que le pipeline n\'est pas testé en intégration, les bugs de bout en bout restent invisibles."',
    answer: 'As long as the pipeline is not tested end-to-end, integration bugs remain invisible.',
    explain: 'Zero Conditional avec "as long as" : vérité générale d\'ingénierie logicielle. Présent simple dans les deux propositions. "End-to-end" est l\'expression technique standard. Pas de "will remain" car c\'est une règle générale, pas une prédiction.',
  },
  {
    id: 'ec57', type: 'fill', level: 'hard', context: 'data', tense: 'c0',
    question: 'Unless the features ___ (scale) to the same range, distance-based algorithms perform poorly.',
    answer: 'are scaled',
    explain: '"Unless" + présent simple passif : "are scaled" (présent simple passif de "scale"). Règle générale des algorithmes k-NN, SVM, etc. "Unless the features are scaled" = "If the features are not scaled". Zero Conditional : vérité algorithmique permanente.',
  },

  // ── FIRST CONDITIONAL (c1) ─────────────────────────────
  {
    id: 'ec58', type: 'choose', level: 'easy', context: 'data', tense: 'c1',
    question: 'Should the API response time exceed 200ms, the gateway ___ a timeout error.',
    options: ['will return', 'would return', 'returns', 'returned'],
    answer: 'will return',
    explain: '"Should + sujet + BV" est une inversion conditionnelle formelle équivalente à "If the API response time exceeds". C\'est du 1st Conditional : situation technique réelle et probable. La principale utilise "will + BV".',
  },
  {
    id: 'ec59', type: 'fill', level: 'easy', context: 'daily', tense: 'c1',
    question: 'I ___ (call) you as soon as I land at the airport.',
    answer: 'will call',
    explain: '1st Conditional : intention future réelle. La principale utilise "will + BV". La subordonnée temporelle "as soon as I land" est au présent simple (pas "will land"). On s\'attend vraiment à atterrir → situation probable et réelle.',
  },
  {
    id: 'ec60', type: 'choose', level: 'easy', context: 'daily', tense: 'c1',
    question: 'Provided that the weather ___ good, we\'ll have the meeting outside.',
    options: ['is', 'will be', 'was', 'would be'],
    answer: 'is',
    explain: '"Provided that" (à condition que) se comporte comme "if" : subordonnée au présent simple même si on parle du futur. "Provided that the weather is good" → situation future réelle et probable → 1st Conditional.',
  },
  {
    id: 'ec61', type: 'fill', level: 'medium', context: 'data', tense: 'c1',
    question: 'Even if the first model ___ (fail), we\'ll have learned something valuable from the attempt.',
    answer: 'fails',
    explain: '"Even if" + présent simple dans une subordonnée de condition → 1st Conditional. "Even if" (même si) n\'empêche pas la règle : pas de "will" dans la subordonnée. La principale contient "we\'ll have learned" (futur antérieur, forme avancée du 1st conditional).',
  },
  {
    id: 'ec62', type: 'choose', level: 'medium', context: 'data', tense: 'c1',
    question: 'Should you ___ any issues during deployment, contact the on-call engineer immediately.',
    options: ['encounter', 'encountered', 'have encountered', 'encountering'],
    answer: 'encounter',
    explain: '"Should you encounter" = inversion conditionnelle formelle de "If you encounter". Dans l\'inversion, on utilise la base verbale après "Should". C\'est une formulation courante dans les runbooks et la documentation technique.',
  },
  {
    id: 'ec63', type: 'correct', level: 'medium', context: 'data', tense: 'c1',
    question: 'Corrige : "Unless the data won\'t be labelled, we can\'t train a supervised model."',
    answer: 'Unless the data is labelled, we can\'t train a supervised model.',
    explain: '"Unless" signifie déjà "if... not", donc "Unless... won\'t" est une double négation incorrecte. La subordonnée après "unless" est au présent simple affirmatif. "Unless the data is labelled" = "If the data is not labelled".',
  },
  {
    id: 'ec64', type: 'fill', level: 'medium', context: 'daily', tense: 'c1',
    question: 'As long as you ___ (keep) practising, your English will improve.',
    answer: 'keep',
    explain: '"As long as" + présent simple dans la subordonnée : règle du 1st Conditional. "Keep" est au présent simple. La pratique est une condition réelle et possible → 1st Conditional. "Keep + -ing" = continuer à faire quelque chose.',
  },
  {
    id: 'ec65', type: 'translate', level: 'medium', context: 'data', tense: 'c1',
    question: 'Traduis : "Au cas où le serveur tomberait, nous basculerons automatiquement sur le backup."',
    answer: 'In case the server goes down, we will automatically switch to the backup.',
    explain: '"In case" + présent simple : précaution pour une situation possible mais indésirable → 1st Conditional. "Au cas où" + conditionnel en français → "in case" + présent simple en anglais. "Goes down" (tombe en panne), "switch to" (basculer vers).',
  },
  {
    id: 'ec66', type: 'choose', level: 'hard', context: 'data', tense: 'c1',
    question: 'Should the A/B test ___ statistical significance, we ___ roll out the new algorithm.',
    options: ['reach / will', 'reach / would', 'have reached / will', 'reaches / will'],
    answer: 'reach / will',
    explain: '"Should + sujet + BV" (inversion formelle) : après "Should", on utilise la base verbale sans "s". La principale : "will + BV". C\'est du 1st Conditional car atteindre la significativité statistique est un objectif réel en cours d\'A/B test.',
  },
  {
    id: 'ec67', type: 'correct', level: 'hard', context: 'daily', tense: 'c1',
    question: 'Corrige si nécessaire : "If you will leave now, you\'ll catch the last metro."',
    answer: 'If you leave now, you\'ll catch the last metro.',
    explain: 'Erreur classique : jamais de "will" dans la subordonnée IF même si on parle du futur. "If you leave" (présent simple), pas "If you will leave". La principale "you\'ll catch" garde "will".',
  },
  {
    id: 'ec68', type: 'fill', level: 'hard', context: 'data', tense: 'c1',
    question: 'Provided that the model ___ (pass) all unit tests, the CI pipeline ___ (trigger) the staging deployment automatically.',
    answer: 'passes / will trigger',
    explain: '"Provided that" + présent simple dans la subordonnée (passes, avec -s car 3e personne singulier). Principale : "will + BV" (will trigger). 1st Conditional : le déploiement automatique est un processus réel et probable dans un pipeline CI/CD.',
  },

  // ── SECOND CONDITIONAL (c2) ────────────────────────────
  {
    id: 'ec69', type: 'choose', level: 'easy', context: 'data', tense: 'c2',
    question: 'If I ___ a data scientist at a big tech company, I ___ work on large-scale NLP problems.',
    options: ['were / would', 'was / will', 'am / would', 'were / will'],
    answer: 'were / would',
    explain: '2nd Conditional : hypothèse irréelle présente. "Were" (subjonctif, préféré à "was" dans le registre soutenu) dans la subordonnée IF. "Would + BV" dans la principale. Travailler sur des problèmes NLP à grande échelle est une situation imaginaire actuelle.',
  },
  {
    id: 'ec70', type: 'fill', level: 'easy', context: 'daily', tense: 'c2',
    question: 'If he ___ (not/work) so late every night, he would feel less stressed.',
    answer: 'didn\'t work',
    explain: '2nd Conditional négatif : If + didn\'t + BV (past simple négatif). Il travaille tard le soir → c\'est la réalité. L\'hypothèse "s\'il ne travaillait pas si tard" est irréelle → 2nd Conditional. "Didn\'t work" (pas "wouldn\'t work" dans la subordonnée IF).',
  },
  {
    id: 'ec71', type: 'choose', level: 'easy', context: 'daily', tense: 'c2',
    question: 'Were I ___ the project manager, I would restructure the whole workflow.',
    options: ['to be', 'being', 'been', 'be'],
    answer: 'to be',
    explain: '"Were I to be" est une inversion conditionnelle formelle du 2nd Conditional, équivalente à "If I were the project manager". La structure est "Were + sujet + to + BV". C\'est une formulation soutenue, fréquente à l\'écrit professionnel.',
  },
  {
    id: 'ec72', type: 'fill', level: 'medium', context: 'data', tense: 'c2',
    question: 'If our team ___ (have) access to proprietary datasets, we could build much stronger benchmarks.',
    answer: 'had',
    explain: '2nd Conditional : "had" est le past simple de "have". On n\'a pas accès à ces datasets (réalité) → hypothèse irréelle → "If we had". La principale utilise "could + BV" pour exprimer la capacité conditionnelle hypothétique.',
  },
  {
    id: 'ec73', type: 'translate', level: 'medium', context: 'data', tense: 'c2',
    question: 'Traduis : "Si le modèle était plus léger, on pourrait le déployer directement sur des appareils mobiles."',
    answer: 'If the model were lighter, we could deploy it directly on mobile devices.',
    explain: '2nd Conditional : le modèle n\'est pas assez léger (réalité) → "If the model were lighter" (past simple / subjonctif). "On pourrait" → "we could" (could + BV). "Mobile devices" est l\'expression standard pour les appareils mobiles.',
  },
  {
    id: 'ec74', type: 'choose', level: 'medium', context: 'data', tense: 'c2',
    question: 'Were the team ___ to adopt MLflow, experiment tracking ___ much easier.',
    options: ['to adopt / would become', 'adopt / would become', 'to adopt / will become', 'adopting / would become'],
    answer: 'to adopt / would become',
    explain: '"Were + sujet + to + BV" est l\'inversion conditionnelle du 2nd Conditional. "Were the team to adopt" = "If the team adopted". Principale : "would + BV" (would become). L\'adoption de MLflow est présentée comme hypothétique.',
  },
  {
    id: 'ec75', type: 'correct', level: 'medium', context: 'daily', tense: 'c2',
    question: 'Corrige : "If I was rich, I would travelled the world."',
    answer: 'If I were rich, I would travel the world.',
    explain: 'Deux erreurs : (1) "was" → préférer "were" (subjonctif du 2nd Conditional). (2) "would travelled" → la principale doit être "would + BV (infinitif)", pas "would + past simple". "Would travel" est la forme correcte.',
  },
  {
    id: 'ec76', type: 'fill', level: 'hard', context: 'data', tense: 'c2',
    question: 'Even if we ___ (retrain) the model weekly, it ___ (might/not/be) accurate enough for real-time fraud detection.',
    answer: 'retrained / might not be',
    explain: '2nd Conditional avec "even if" et modal "might". "Retrained" = past simple. Principale : "might not be" (possibilité conditionnelle négative). "Even if" + 2nd Conditional = même dans cette hypothèse irréelle, le résultat reste incertain. "Might" exprime une incertitude plus forte que "wouldn\'t".',
  },
  {
    id: 'ec77', type: 'correct', level: 'hard', context: 'data', tense: 'c2',
    question: 'Corrige si nécessaire : "If I were you, I would consider fine-tuning a pre-trained model instead."',
    answer: 'If I were you, I would consider fine-tuning a pre-trained model instead.',
    explain: 'Cette phrase est correcte. "If I were you" (subjonctif 2nd Conditional) + "would + BV" (would consider). "Fine-tuning" est le gérondif ici, objet de "consider". "Pre-trained" s\'écrit avec un trait d\'union dans le registre technique.',
  },
  {
    id: 'ec78', type: 'translate', level: 'hard', context: 'data', tense: 'c2',
    question: 'Traduis : "À ma place, est-ce que tu choisirais PyTorch ou TensorFlow pour ce projet ?"',
    answer: 'If you were me, would you choose PyTorch or TensorFlow for this project?',
    explain: '2nd Conditional interrogatif : "If you were me" (inversion de "If I were you"). La question se forme avec "Would you + BV". Cette formulation sollicite l\'opinion de l\'interlocuteur sur une hypothèse irréelle (être à ta place).',
  },
  {
    id: 'ec79', type: 'choose', level: 'hard', context: 'daily', tense: 'c2',
    question: 'If I ___ the budget, I ___ hire three more engineers right away.',
    options: ['controlled / would', 'controlled / will', 'control / would', 'had controlled / would have'],
    answer: 'controlled / would',
    explain: '2nd Conditional : je ne contrôle pas le budget (réalité) → hypothèse irréelle → "controlled" (past simple). Principale : "would + BV". "Had controlled / would have" serait du 3rd Conditional (passé). "Control / would" mélange incorrectement présent simple et would.',
  },

  // ── THIRD CONDITIONAL (c3) ─────────────────────────────
  {
    id: 'ec80', type: 'choose', level: 'easy', context: 'daily', tense: 'c3',
    question: 'Had they ___ the contract earlier, the project ___ started on time.',
    options: ['signed / would have', 'signed / would', 'sign / would have', 'signed / had'],
    answer: 'signed / would have',
    explain: '"Had they signed" est l\'inversion conditionnelle du 3rd Conditional, équivalente à "If they had signed". Principale : "would have + PP" (would have started). Ils n\'ont pas signé à temps → fait passé réel → regret → 3rd Conditional.',
  },
  {
    id: 'ec81', type: 'fill', level: 'easy', context: 'data', tense: 'c3',
    question: 'If the team ___ (monitor) the model\'s drift, they would have caught the issue much sooner.',
    answer: 'had monitored',
    explain: '3rd Conditional : "had monitored" = past perfect de "monitor" (verbe régulier). L\'équipe n\'a pas surveillé le drift → problème détecté tardivement. "Would have caught" dans la principale confirme la structure 3rd Conditional.',
  },
  {
    id: 'ec82', type: 'choose', level: 'easy', context: 'daily', tense: 'c3',
    question: 'If I ___ more carefully, I ___ that typo in the report.',
    options: ['had proofread / would have caught', 'have proofread / would catch', 'had proofread / would catch', 'proofread / would have caught'],
    answer: 'had proofread / would have caught',
    explain: '3rd Conditional complet : "had proofread" (past perfect) + "would have caught" (would have + PP). Je n\'ai pas relu attentivement (passé réel) → la faute de frappe n\'a pas été repérée → regret.',
  },
  {
    id: 'ec83', type: 'fill', level: 'medium', context: 'data', tense: 'c3',
    question: 'Had we ___ (set up) proper logging from day one, debugging this production issue ___ (take) hours, not days.',
    answer: 'set up / would have taken',
    explain: '"Had we set up" = inversion du 3rd Conditional (If we had set up). Principale : "would have taken" (would have + PP). Pas de logging dès le départ (réalité passée) → débogage très long (conséquence passée réelle) → analyse rétrospective.',
  },
  {
    id: 'ec84', type: 'translate', level: 'medium', context: 'daily', tense: 'c3',
    question: 'Traduis : "Si tu m\'avais dit que tu étais disponible, je t\'aurais invité à la réunion."',
    answer: 'If you had told me you were available, I would have invited you to the meeting.',
    explain: '3rd Conditional : "si tu m\'avais dit" → "If you had told me" (past perfect). "Je t\'aurais invité" → "I would have invited you" (would have + PP). La disponibilité n\'a pas été communiquée (passé réel) → invitation manquée → regret.',
  },
  {
    id: 'ec85', type: 'choose', level: 'medium', context: 'data', tense: 'c3',
    question: 'If the feature engineering step ___ optimized, the model ___ a higher F1 score.',
    options: ['had been / could have achieved', 'was / could achieve', 'had been / could achieve', 'has been / could have achieved'],
    answer: 'had been / could have achieved',
    explain: '3rd Conditional passif : "had been optimized" (past perfect passif). Principale avec modal : "could have achieved" (could have + PP = possibilité manquée dans le passé). Le feature engineering n\'a pas été optimisé → F1 score insuffisant → analyse rétrospective.',
  },
  {
    id: 'ec86', type: 'correct', level: 'medium', context: 'data', tense: 'c3',
    question: 'Corrige : "If we had validated the schema, we would avoided the pipeline crash."',
    answer: 'If we had validated the schema, we would have avoided the pipeline crash.',
    explain: 'Erreur dans la principale : "would + past participle" (would avoided) est incorrect. La structure du 3rd Conditional exige "would have + past participle" (would have avoided). "Have" ne doit pas être omis.',
  },
  {
    id: 'ec87', type: 'fill', level: 'hard', context: 'data', tense: 'c3',
    question: 'Had the data engineers ___ (document) the transformation logic, the analysts ___ (not/spend) three days reverse-engineering it.',
    answer: 'documented / wouldn\'t have spent',
    explain: '"Had they documented" = inversion 3rd Conditional. Principale négative : "wouldn\'t have spent" (would not have + PP). La logique n\'a pas été documentée (passé réel) → les analystes ont perdu du temps → regret collectif commun en data engineering.',
  },
  {
    id: 'ec88', type: 'choose', level: 'hard', context: 'daily', tense: 'c3',
    question: 'Had I ___ that the deadline was moved forward, I ___ stayed late on Friday.',
    options: ['known / would have', 'known / would', 'know / would have', 'known / should have'],
    answer: 'known / would have',
    explain: '"Had I known" = inversion 3rd Conditional (If I had known). Principale : "would have stayed" (would have + PP). Je ne savais pas que la deadline avait avancé (passé réel) → je ne suis pas resté tard (conséquence passée réelle). "Should have" exprimerait une obligation morale, pas une conséquence logique.',
  },
  {
    id: 'ec89', type: 'translate', level: 'hard', context: 'data', tense: 'c3',
    question: 'Traduis : "Si l\'équipe avait suivi les meilleures pratiques MLOps, le modèle n\'aurait pas dégradé en production."',
    answer: 'If the team had followed MLOps best practices, the model wouldn\'t have degraded in production.',
    explain: '3rd Conditional : "si l\'équipe avait suivi" → "If the team had followed" (past perfect). "N\'aurait pas dégradé" → "wouldn\'t have degraded" (would not have + PP). "Degraded in production" est l\'expression technique pour une dégradation des performances en prod.',
  },
  {
    id: 'ec90', type: 'correct', level: 'hard', context: 'data', tense: 'c3',
    question: 'Corrige si nécessaire : "Had the annotations been reviewed, we might have caught the label noise earlier."',
    answer: 'Had the annotations been reviewed, we might have caught the label noise earlier.',
    explain: 'Cette phrase est correcte. "Had the annotations been reviewed" = inversion du 3rd Conditional passif (If the annotations had been reviewed). "Might have caught" = possibilité manquée dans le passé. "Label noise" est le terme technique pour les erreurs d\'étiquetage.',
  },
  {
    id: 'ec91', type: 'fill', level: 'hard', context: 'daily', tense: 'c3',
    question: 'She ___ (might/not/make) that mistake if she ___ (re-read) the instructions carefully.',
    answer: 'might not have made / had re-read',
    explain: '3rd Conditional avec "might" : "might not have made" (possibilité manquée) + "had re-read" (past perfect). L\'ordre est inversé ici (principale avant subordonnée). Elle n\'a pas relu les instructions → elle a fait l\'erreur. "Might not have made" = c\'était peut-être évitable.',
  },

  // ── MIXED CONDITIONAL (cmix) ───────────────────────────
  {
    id: 'ec92', type: 'choose', level: 'medium', context: 'data', tense: 'cmix',
    question: 'If we had chosen a transformer architecture from the start, we ___ so much time on feature engineering now.',
    options: ['wouldn\'t spend', 'wouldn\'t have spent', 'won\'t spend', 'didn\'t spend'],
    answer: 'wouldn\'t spend',
    explain: 'Mixed Conditional (c3→c2) : If + past perfect (passé irréel) → would + BV (conséquence dans le PRÉSENT). On a choisi une autre architecture (passé réel) → on passe du temps sur le feature engineering maintenant (présent réel). "Wouldn\'t have spent" serait du 3rd pur (conséquence passée).',
  },
  {
    id: 'ec93', type: 'fill', level: 'medium', context: 'daily', tense: 'cmix',
    question: 'If I ___ (be) more disciplined in my twenties, I ___ (be) in much better shape today.',
    answer: 'had been / would be',
    explain: 'Mixed Conditional (c3→c2) : "had been" (past perfect = passé irréel) → "would be" (would + BV = conséquence présente). Je n\'étais pas discipliné dans mes vingt ans (passé réel) → ma forme physique actuelle est le résultat de ce passé.',
  },
  {
    id: 'ec94', type: 'choose', level: 'medium', context: 'data', tense: 'cmix',
    question: 'If our data lake ___ properly governed today, we ___ spent weeks cleaning duplicates last quarter.',
    options: ['were / wouldn\'t have', 'is / won\'t have', 'were / wouldn\'t', 'had been / wouldn\'t'],
    answer: 'were / wouldn\'t have',
    explain: 'Mixed Conditional (c2→c3) : If + past simple (présent irréel) → would have + PP (conséquence PASSÉE). Le data lake n\'est pas bien gouverné maintenant (présent réel) → on a passé des semaines à nettoyer au dernier trimestre (passé réel). L\'inverse de c3→c2.',
  },
  {
    id: 'ec95', type: 'translate', level: 'medium', context: 'data', tense: 'cmix',
    question: 'Traduis : "Si on avait investi dans une meilleure infrastructure dès le début, notre pipeline serait beaucoup plus rapide aujourd\'hui."',
    answer: 'If we had invested in better infrastructure from the start, our pipeline would be much faster today.',
    explain: 'Mixed Conditional (c3→c2) : "si on avait investi" → "If we had invested" (past perfect). "Notre pipeline serait" → "our pipeline would be" (would + BV au présent). "Today" ancre la conséquence dans le présent. Investissement non fait dans le passé → infrastructure actuelle limitée.',
  },
  {
    id: 'ec96', type: 'correct', level: 'medium', context: 'daily', tense: 'cmix',
    question: 'Corrige : "If I had taken that online course, I would know machine learning by now."',
    answer: 'If I had taken that online course, I would know machine learning by now.',
    explain: 'Cette phrase est correcte. C\'est un Mixed Conditional (c3→c2) : "If I had taken" (past perfect = passé irréel) → "I would know" (would + BV = conséquence présente). "By now" confirme que le résultat hypothétique est dans le présent. Pas de correction nécessaire.',
  },
  {
    id: 'ec97', type: 'choose', level: 'hard', context: 'data', tense: 'cmix',
    question: 'Had the company ___ in AutoML tools two years ago, the data science team ___ twice as large today.',
    options: ['invested / wouldn\'t need to be', 'invested / wouldn\'t have needed to be', 'invest / wouldn\'t need to be', 'invested / won\'t need to be'],
    answer: 'invested / wouldn\'t need to be',
    explain: 'Mixed Conditional (c3→c2) via inversion : "Had the company invested" (past perfect inversé) → "wouldn\'t need to be" (would not + BV = résultat PRÉSENT). L\'investissement passé non réalisé a une conséquence sur la taille actuelle de l\'équipe. "Wouldn\'t have needed" serait du 3rd pur.',
  },
  {
    id: 'ec98', type: 'fill', level: 'hard', context: 'data', tense: 'cmix',
    question: 'If the original researchers ___ (release) the full dataset, the community ___ (build) on their work much more effectively by now.',
    answer: 'had released / would be building',
    explain: 'Mixed Conditional étendu (c3→c2 progressif) : "had released" (past perfect) → "would be building" (would + be + -ing = action en cours maintenant dans l\'hypothèse). Le dataset n\'a pas été publié (passé réel) → la communauté ne peut pas capitaliser dessus (présent réel).',
  },
  {
    id: 'ec99', type: 'translate', level: 'hard', context: 'daily', tense: 'cmix',
    question: 'Traduis : "Si j\'étais une personne plus organisée, je n\'aurais pas oublié cette réunion hier."',
    answer: 'If I were a more organized person, I wouldn\'t have forgotten that meeting yesterday.',
    explain: 'Mixed Conditional (c2→c3) : "si j\'étais" → "If I were" (past simple = trait de caractère irréel présent) → "I wouldn\'t have forgotten" (would not have + PP = conséquence PASSÉE). Ma désorganisation actuelle a causé l\'oubli d\'hier.',
  },
  {
    id: 'ec100', type: 'choose', level: 'hard', context: 'data', tense: 'cmix',
    question: 'If the model ___ production-ready right now, we ___ all that time optimizing the inference pipeline last sprint.',
    options: ['were / wouldn\'t have wasted', 'had been / wouldn\'t waste', 'were / won\'t waste', 'is / wouldn\'t have wasted'],
    answer: 'were / wouldn\'t have wasted',
    explain: 'Mixed Conditional (c2→c3) : "If the model were production-ready" (past simple = irréel présent) → "we wouldn\'t have wasted" (would not have + PP = conséquence passée). Le modèle n\'est pas encore prêt maintenant → et c\'est pourquoi on a perdu du temps au sprint précédent.',
  },
  {
    id: 'ec101', type: 'correct', level: 'hard', context: 'data', tense: 'cmix',
    question: 'Corrige : "If we would have used version control for notebooks, we wouldn\'t be rewriting everything now."',
    answer: 'If we had used version control for notebooks, we wouldn\'t be rewriting everything now.',
    explain: 'Deux erreurs : "would have used" dans la subordonnée IF est incorrect. La forme correcte est "had used" (past perfect = Mixed Conditional c3→c2). La principale "we wouldn\'t be rewriting" (would not + be + -ing) est correcte car "now" ancre le résultat dans le présent.',
  },
  {
    id: 'ec102', type: 'fill', level: 'hard', context: 'daily', tense: 'cmix',
    question: 'If she ___ (not/procrastinate) so much, she ___ (already/finish) the project by now.',
    answer: 'weren\'t procrastinating / would have already finished',
    explain: 'Mixed Conditional (c2→c3) progressif : "weren\'t procrastinating" (past continuous = habitude présente irréelle) → "would have already finished" (would have + PP = conséquence dans un passé récent / maintenant). Sa procrastination actuelle explique le projet non terminé.',
  },

  // ── EXERCICES SUPPLÉMENTAIRES VARIÉS ──────────────────
  {
    id: 'ec103', type: 'choose', level: 'medium', context: 'data', tense: 'c1',
    question: 'Unless the stakeholders ___ on the KPIs, the data team won\'t be able to build the right dashboard.',
    options: ['agree', 'will agree', 'agreed', 'would agree'],
    answer: 'agree',
    explain: '"Unless" + présent simple (jamais "will" dans la subordonnée). "Unless the stakeholders agree" = "If the stakeholders don\'t agree". 1st Conditional : situation professionnelle réelle et probable. La principale "won\'t be able to" contient "will".',
  },
  {
    id: 'ec104', type: 'fill', level: 'easy', context: 'data', tense: 'c3',
    question: 'If the team ___ (use) Docker from the beginning, the "works on my machine" problem ___ (never/appear).',
    answer: 'had used / would never have appeared',
    explain: '3rd Conditional : "had used" (past perfect) + "would never have appeared" (would + never + have + PP). L\'équipe n\'a pas utilisé Docker dès le début (passé réel) → le problème de reproductibilité a existé. "Would never have" exprime l\'absence totale hypothétique d\'un problème.',
  },
  {
    id: 'ec105', type: 'translate', level: 'easy', context: 'daily', tense: 'c1',
    question: 'Traduis : "Tant que tu révises régulièrement, tu n\'auras pas de mal à l\'examen."',
    answer: 'As long as you study / revise regularly, you won\'t have any trouble in the exam.',
    explain: '"As long as" + présent simple : condition durable → 1st Conditional. "Tu n\'auras pas de mal" → "you won\'t have any trouble". "Regularly" (régulièrement). "As long as" insiste sur le maintien continu de la condition pour que le résultat se produise.',
  },
  {
    id: 'ec106', type: 'choose', level: 'medium', context: 'data', tense: 'c2',
    question: 'Were I ___ more budget, I would invest in better annotation tools and a larger labelling team.',
    options: ['given', 'give', 'to give', 'giving'],
    answer: 'given',
    explain: '"Were I given more budget" = inversion conditionnelle passive du 2nd Conditional (If I were given more budget). "Given" est le past participle passif. C\'est une formulation soutenue pour exprimer un souhait professionnel. Principale : "I would invest" (would + BV).',
  },
  {
    id: 'ec107', type: 'correct', level: 'easy', context: 'daily', tense: 'c3',
    question: 'Corrige : "If I had knew you were coming, I would have bought more food."',
    answer: 'If I had known you were coming, I would have bought more food.',
    explain: '"Knew" est le past simple de "know", mais dans le past perfect (had + PP), il faut le participe passé : "known". "Had known" = past perfect correct. Erreur très fréquente avec les verbes irréguliers.',
  },
  {
    id: 'ec108', type: 'fill', level: 'medium', context: 'data', tense: 'c1',
    question: 'Should the inference time ___ (exceed) 500ms on average, we will need to quantize the model.',
    answer: 'exceed',
    explain: '"Should + sujet + BV" : après "Should" dans l\'inversion conditionnelle, on utilise toujours la base verbale sans "s" ni autre inflexion. "Should the inference time exceed" = "If the inference time exceeds". 1st Conditional : scénario technique possible.',
  },
  {
    id: 'ec109', type: 'choose', level: 'hard', context: 'data', tense: 'cmix',
    question: 'If the company ___ a data governance policy years ago, we ___ with compliance issues today.',
    options: ['had established / wouldn\'t be struggling', 'had established / wouldn\'t have struggled', 'established / wouldn\'t be struggling', 'had established / won\'t be struggling'],
    answer: 'had established / wouldn\'t be struggling',
    explain: 'Mixed Conditional (c3→c2) : "had established" (past perfect = passé irréel) → "wouldn\'t be struggling" (would not + be + -ing = situation présente hypothétique). La politique de gouvernance non établie dans le passé cause les problèmes de conformité actuels.',
  },
  {
    id: 'ec110', type: 'translate', level: 'medium', context: 'data', tense: 'c2',
    question: 'Traduis : "S\'il existait un outil pour automatiser le nettoyage de données, les data scientists gagneraient des heures chaque semaine."',
    answer: 'If there were a tool to automate data cleaning, data scientists would save hours every week.',
    explain: '2nd Conditional : l\'outil n\'existe pas (réalité) → "If there were" (subjonctif de "there is"). "Data scientists would save" (would + BV). "Automate" (automatiser), "data cleaning" (nettoyage de données). Hypothèse irréelle sur un outil souhaité.',
  },
  {
    id: 'ec111', type: 'correct', level: 'hard', context: 'data', tense: 'c3',
    question: 'Corrige : "Had the ML engineer reviewed the feature store config, the model wouldn\'t have serve stale data."',
    answer: 'Had the ML engineer reviewed the feature store config, the model wouldn\'t have served stale data.',
    explain: '"Wouldn\'t have served" : après "would have", on doit utiliser le past participle. "Serve" est la base verbale ; le PP est "served". "Stale data" (données périmées) est l\'expression technique courante en feature store engineering.',
  },
  {
    id: 'ec112', type: 'fill', level: 'easy', context: 'daily', tense: 'c2',
    question: 'If I ___ (win) the lottery, I would travel around the world for a year.',
    answer: 'won',
    explain: '2nd Conditional : "won" est le past simple de "win". Gagner la loterie est une hypothèse irréelle (très improbable) → 2nd Conditional. Principale : "would + BV" (would travel). Comparer avec le 1st conditional (If I win... = si je gagne = plus réaliste).',
  },
  {
    id: 'ec113', type: 'choose', level: 'medium', context: 'data', tense: 'c0',
    question: 'When you ___ gradient boosting on noisy data without regularization, the model ___ overfit.',
    options: ['run / tends to', 'run / will tend to', 'ran / tends to', 'run / would tend to'],
    answer: 'run / tends to',
    explain: 'Zero Conditional avec "when" : vérité ML générale sur le gradient boosting. Présent simple dans les deux propositions. "Tends to overfit" est plus précis que "overfits" car il exprime une tendance systématique sans être absolu.',
  },
  {
    id: 'ec114', type: 'translate', level: 'hard', context: 'data', tense: 'c3',
    question: 'Traduis : "Si on avait eu un SLA clair depuis le début, on n\'aurait pas passé des semaines à négocier les attentes."',
    answer: 'If we had had a clear SLA from the start, we wouldn\'t have spent weeks negotiating expectations.',
    explain: '3rd Conditional : "si on avait eu" → "If we had had" (past perfect de "have" = had + had). "On n\'aurait pas passé" → "we wouldn\'t have spent" (would not have + PP). "SLA" = Service Level Agreement, terme courant en data engineering et MLOps.',
  },
  {
    id: 'ec115', type: 'fill', level: 'medium', context: 'daily', tense: 'c1',
    question: 'In case you ___ (not/understand) the feedback, ask for a one-to-one with your manager.',
    answer: 'don\'t understand',
    explain: '"In case" + présent simple : précaution pour une situation possible. "Don\'t understand" (présent simple négatif). 1st Conditional : ne pas comprendre le feedback est une situation réelle et possible. La principale est un impératif (conseil/instruction).',
  },
  {
    id: 'ec116', type: 'choose', level: 'hard', context: 'data', tense: 'c2',
    question: 'Even if the company ___ a dedicated MLOps team, the deployment bottleneck ___ disappear overnight.',
    options: ['had / wouldn\'t', 'have / won\'t', 'had / won\'t', 'had / would'],
    answer: 'had / wouldn\'t',
    explain: '"Even if" + 2nd Conditional : même dans l\'hypothèse d\'une équipe MLOps (irréel présent), le goulot d\'étranglement ne disparaîtrait pas du jour au lendemain. "Had" (past simple) + "wouldn\'t" (would not). "Wouldn\'t disappear" = résultat négatif même dans la meilleure hypothèse.',
  },
  {
    id: 'ec117', type: 'correct', level: 'medium', context: 'data', tense: 'c1',
    question: 'Corrige si nécessaire : "As long as we track experiments properly, we will always be able to reproduce our results."',
    answer: 'As long as we track experiments properly, we will always be able to reproduce our results.',
    explain: 'Cette phrase est correcte. "As long as" + présent simple (track) → 1st Conditional. "We will always be able to" (will + BV). La condition de tracking est réelle et maintenue dans le temps. Pas de correction nécessaire.',
  },
  {
    id: 'ec118', type: 'fill', level: 'hard', context: 'data', tense: 'cmix',
    question: 'If we ___ (not/accumulate) so much technical debt over the years, refactoring the codebase ___ (not/take) six months right now.',
    answer: 'hadn\'t accumulated / wouldn\'t be taking',
    explain: 'Mixed Conditional (c3→c2 progressif) : "hadn\'t accumulated" (past perfect négatif = passé irréel) → "wouldn\'t be taking" (would not + be + -ing = action longue en cours maintenant dans l\'hypothèse). La dette technique accumulée dans le passé explique le refactoring actuel qui dure.',
  },
  {
    id: 'ec119', type: 'choose', level: 'hard', context: 'data', tense: 'c3',
    question: 'Had the training pipeline ___ earlier, the team ___ the new model in time for the product launch.',
    options: ['finished / could have deployed', 'finished / could deploy', 'finish / could have deployed', 'finished / could have been deployed'],
    answer: 'finished / could have deployed',
    explain: '"Had the pipeline finished" = inversion 3rd Conditional. Principale : "could have deployed" (possibilité manquée dans le passé). Le pipeline n\'a pas terminé à temps (passé réel) → le modèle n\'a pas pu être déployé pour le lancement. "Could have been deployed" serait passif (forme correcte aussi mais moins directe).',
  },
  {
    id: 'ec120', type: 'translate', level: 'hard', context: 'data', tense: 'cmix',
    question: 'Traduis : "Si l\'équipe comprenait mieux les statistiques bayésiennes, elle n\'aurait pas choisi la mauvaise approche la semaine dernière."',
    answer: 'If the team understood Bayesian statistics better, they wouldn\'t have chosen the wrong approach last week.',
    explain: 'Mixed Conditional (c2→c3) : "si l\'équipe comprenait" → "If the team understood" (past simple = lacune présente irréelle) → "they wouldn\'t have chosen" (would not have + PP = conséquence passée). La lacune actuelle en statistiques bayésiennes explique le mauvais choix de la semaine passée.',
  },
]
