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
]
