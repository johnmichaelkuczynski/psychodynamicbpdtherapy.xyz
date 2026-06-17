import type {
  SectionContent,
  HomeworkItem,
  McOption,
  WrittenRubric,
} from "./types";

const mcq: HomeworkItem[] = [
  {
    itemType: "mc",
    prompt:
      "A devoted new mother is flooded with vivid intrusive images of stabbing her baby whenever she holds a kitchen knife. She is horrified by them, has hidden the knives, and refuses to be alone with the child. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She seems to be having frightening thoughts about her baby.",
        credit: 0.3,
      },
      {
        text: "The content is the clue: harm imagery aimed at the person she loves most, met with horror, points not to a wish but to the crushing weight of total responsibility and the unspeakable mix of love and resentment a newborn stirs — the thought says what she cannot, that she is terrified of her own potential to fail or hurt; test whether the images target precisely her most-loved dependent and not strangers, whether her dread rises with how much harm she could do, and whether they ease once she can voice the ambivalence and fear of inadequacy underneath.",
        credit: 1.0,
      },
      {
        text: "It's probably anxiety about being a mother; we could keep talking about it.",
        credit: 0.6,
      },
      {
        text: "The thoughts reveal a hidden urge to harm the child, so she is right to keep herself away from the baby.",
        credit: 0,
      },
    ],
    correctAnswer:
      "The content is the clue: harm imagery aimed at the person she loves most, met with horror, points not to a wish but to the crushing weight of total responsibility and the unspeakable mix of love and resentment a newborn stirs — the thought says what she cannot, that she is terrified of her own potential to fail or hurt; test whether the images target precisely her most-loved dependent and not strangers, whether her dread rises with how much harm she could do, and whether they ease once she can voice the ambivalence and fear of inadequacy underneath.",
    explanation:
      "Top credit reads the ego-dystonic harm-content aimed at her most-loved as expressing dread of her own inadequacy and names a targets-the-loved-one test; 'a hidden urge to harm' is the lurid overreach her horror and avoidance defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "A devout churchgoer is assaulted by obscene, blasphemous images precisely during prayer and communion — the more sacred the moment, the worse they get. He is mortified and prays harder to drive them out. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Intrusive thoughts are random electrical noise in the brain; their religious content is meaningless and not worth examining.",
        credit: 0,
      },
      {
        text: "The content tracking sacredness is the tell: blasphemy that peaks at the holiest moments likely voices a forbidden doubt or anger toward a faith he is not allowed to question, the symptom carrying the rebellion he cannot say aloud; test whether the intrusions spike specifically at the most sacred moments and not neutral ones, whether they ease when he can openly name any resentment or doubt about his religion, and whether 'praying harder' reliably makes them worse.",
        credit: 1.0,
      },
      {
        text: "He seems to get bad thoughts when he prays.",
        credit: 0.3,
      },
      {
        text: "It might have something to do with his religion; we could explore his faith.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The content tracking sacredness is the tell: blasphemy that peaks at the holiest moments likely voices a forbidden doubt or anger toward a faith he is not allowed to question, the symptom carrying the rebellion he cannot say aloud; test whether the intrusions spike specifically at the most sacred moments and not neutral ones, whether they ease when he can openly name any resentment or doubt about his religion, and whether 'praying harder' reliably makes them worse.",
    explanation:
      "Full credit reads blasphemy that peaks at the holiest moments as a disguised forbidden doubt and names a spikes-at-sacred-moments test; 'random noise, content meaningless' is the dodge the precise sacred-timing defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A man with no prior history suddenly feels 'dirty' and washes his hands raw, the compulsion dating from the week he had a one-time affair. He scrubs hardest before coming home to his wife. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He probably feels guilty about something; we could look into the washing.",
        credit: 0.6,
      },
      {
        text: "He seems to wash his hands a lot lately.",
        credit: 0.3,
      },
      {
        text: "The content literalizes a moral stain: feeling 'dirty' and scrubbing hardest before facing his wife, all dating from the affair, points to a guilt he can't put into words, the body enacting a cleansing his conscience demands; test whether the urge tracks reminders of the betrayal and of his wife specifically, whether it began at no other change but the affair, and whether it eases once the guilt is spoken rather than washed.",
        credit: 1.0,
      },
      {
        text: "Hand-washing has countless causes, so connecting it to the affair is reading far too much into a hygiene habit.",
        credit: 0,
      },
    ],
    correctAnswer:
      "The content literalizes a moral stain: feeling 'dirty' and scrubbing hardest before facing his wife, all dating from the affair, points to a guilt he can't put into words, the body enacting a cleansing his conscience demands; test whether the urge tracks reminders of the betrayal and of his wife specifically, whether it began at no other change but the affair, and whether it eases once the guilt is spoken rather than washed.",
    explanation:
      "Top credit reads 'dirtiness' worst before facing his wife as a literalized moral guilt and names a tracks-reminders-of-the-betrayal test; 'washing has countless causes' is the dodge the exact onset and wife-specific timing defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "After her twin sister died, a woman developed an exact 'evening-up' ritual — every touch on the left must be matched on the right, every action balanced — that intensifies on the anniversary and on her sister's birthday. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The balancing content carries the loss: an 'evening-up' that flares on the very dates tied to her twin likely enacts a need to restore a symmetry death destroyed — perhaps to undo the loss or quiet a survivor's guilt that she remains while her twin does not; test whether the ritual spikes on anniversaries and her sister's birthday specifically, whether it began at no loss but this one, and whether it eases as the grief and any guilt are put into words.",
        credit: 1.0,
      },
      {
        text: "She seems to need things balanced since her sister died.",
        credit: 0.3,
      },
      {
        text: "Some people simply like symmetry and order, so there's nothing about her sister to read into the ritual.",
        credit: 0,
      },
      {
        text: "It's probably grief-related; we could keep an eye on the ritual.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The balancing content carries the loss: an 'evening-up' that flares on the very dates tied to her twin likely enacts a need to restore a symmetry death destroyed — perhaps to undo the loss or quiet a survivor's guilt that she remains while her twin does not; test whether the ritual spikes on anniversaries and her sister's birthday specifically, whether it began at no loss but this one, and whether it eases as the grief and any guilt are put into words.",
    explanation:
      "Full credit reads an evening-up that flares on dates tied to her twin as enacting an undoing of the loss and names a spikes-on-the-anniversary test; 'some people just like symmetry' is the dodge the death-linked onset and timing defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "A man began compulsively retracing his drives, certain he has run someone over without noticing, in the months after his father died of an illness the man believes he 'should have caught sooner.' The fear is always of unseen harm he failed to prevent. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He seems worried about hurting people when he drives.",
        credit: 0.3,
      },
      {
        text: "It might be tied to his father's death; we could discuss his guilt.",
        credit: 0.6,
      },
      {
        text: "Thoughts about car accidents are common and mean nothing in particular, so there's no link to his father worth pursuing.",
        credit: 0,
      },
      {
        text: "The content is specific and revealing: a dread of unseen harm he failed to prevent, arising right after a death he blames himself for not catching, points to a guilt that has migrated onto the road — the checking enacting a vigilance his conscience now demands everywhere; test whether the fear is always of harm-by-negligence rather than other dangers, whether it began with his father's death and no other change, and whether it eases as the guilt about his father is named directly.",
        credit: 1.0,
      },
    ],
    correctAnswer:
      "The content is specific and revealing: a dread of unseen harm he failed to prevent, arising right after a death he blames himself for not catching, points to a guilt that has migrated onto the road — the checking enacting a vigilance his conscience now demands everywhere; test whether the fear is always of harm-by-negligence rather than other dangers, whether it began with his father's death and no other change, and whether it eases as the guilt about his father is named directly.",
    explanation:
      "Top credit reads a fear specifically of negligent, unseen harm beginning at the father's death as displaced guilt and names a harm-by-negligence-specifically test; 'accident thoughts mean nothing' is the dodge the precise content and onset defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "Engaged to a man she calls wonderful, a woman is tormented by the intrusive doubt 'maybe I don't really love him,' and seeks constant reassurance. The doubts reliably strike hardest right after their warmest, most intimate moments. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Doubts like these are just random worries with no pattern, so the timing after closeness is coincidence.",
        credit: 0,
      },
      {
        text: "She might be afraid of commitment; we could talk about the relationship.",
        credit: 0.6,
      },
      {
        text: "The timing decodes the content: doubt that strikes hardest right after intimacy, not after conflict, suggests the 'do I love him?' question is managing a fear of closeness itself — the doubt creating distance exactly when nearness becomes threatening; test whether the doubts reliably follow warm moments rather than distant ones, whether reassurance brings only brief relief, and whether they ease once the fear of being engulfed or trapped is named.",
        credit: 1.0,
      },
      {
        text: "She seems to keep doubting her relationship.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The timing decodes the content: doubt that strikes hardest right after intimacy, not after conflict, suggests the 'do I love him?' question is managing a fear of closeness itself — the doubt creating distance exactly when nearness becomes threatening; test whether the doubts reliably follow warm moments rather than distant ones, whether reassurance brings only brief relief, and whether they ease once the fear of being engulfed or trapped is named.",
    explanation:
      "Full credit reads doubt that peaks after intimacy as managing a fear of closeness and names a follows-warm-moments test; 'random worries, coincidence' is the dodge the closeness-locked timing defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A polite, mild-mannered teenager is gripped by intrusive urges to shout slurs and obscenities — but only in the settings where it is most forbidden: funerals, libraries, the middle of class. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He's probably anxious in quiet places; we could look into it.",
        credit: 0.6,
      },
      {
        text: "The content targets prohibition itself: an urge to blurt the forbidden precisely where decorum is strictest likely voices a strain against constraint — an anger or rebelliousness this 'good' boy isn't allowed to feel, surfacing as the very thing he'd never do; test whether the urges cluster only in the most rule-bound settings and not relaxed ones, whether they ease when he can openly voice resentment at always having to be good, and whether the more he forbids the thought the stronger it gets.",
        credit: 1.0,
      },
      {
        text: "He seems to get these urges in quiet settings.",
        credit: 0.3,
      },
      {
        text: "He secretly wants to humiliate people in public and is barely holding it back.",
        credit: 0,
      },
    ],
    correctAnswer:
      "The content targets prohibition itself: an urge to blurt the forbidden precisely where decorum is strictest likely voices a strain against constraint — an anger or rebelliousness this 'good' boy isn't allowed to feel, surfacing as the very thing he'd never do; test whether the urges cluster only in the most rule-bound settings and not relaxed ones, whether they ease when he can openly voice resentment at always having to be good, and whether the more he forbids the thought the stronger it gets.",
    explanation:
      "Top credit reads urges aimed at the most rule-bound settings as a strain against constraint and names a clusters-only-where-decorum-is-strictest test; 'he secretly wants to humiliate people' is the lurid overreach his mild, distressed character defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "Since his mother died, a man cannot discard a single thing that was hers — not an expired coupon, not a worn dishrag — and is gripped by dread that throwing anything out would be 'erasing her.' He keeps his own clutter in check. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He seems to hold on to his mother's things.",
        credit: 0.3,
      },
      {
        text: "Lots of people are sentimental pack-rats; there's nothing about mourning to read into keeping his mother's belongings.",
        credit: 0,
      },
      {
        text: "The content names a stalled grief: an inability to part with only her things, paired with the dread of 'erasing her,' suggests the keeping substitutes for a mourning he cannot bear to begin — to discard the objects would mean admitting she is gone; test whether the difficulty applies specifically to her possessions and not his own, whether the dread is of loss rather than of needing the items, and whether it eases as he is helped to grieve her directly.",
        credit: 1.0,
      },
      {
        text: "It's probably about losing his mother; we could revisit it.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The content names a stalled grief: an inability to part with only her things, paired with the dread of 'erasing her,' suggests the keeping substitutes for a mourning he cannot bear to begin — to discard the objects would mean admitting she is gone; test whether the difficulty applies specifically to her possessions and not his own, whether the dread is of loss rather than of needing the items, and whether it eases as he is helped to grieve her directly.",
    explanation:
      "Full credit reads keeping only her things plus 'erasing her' dread as a substitute for mourning and names an only-her-possessions test; 'just a sentimental pack-rat' is the dodge the her-things-only selectivity and loss-themed dread defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "A loving new father is horrified by intrusive sexual thoughts about his infant during diaper changes and baths. He is sickened by them, and has started avoiding caregiving so as never to be alone with the baby. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The thoughts expose a hidden predatory desire, and his instinct to avoid the baby is correct.",
        credit: 0,
      },
      {
        text: "The horror is the data: taboo content that disgusts him and drives him to avoid the child points away from desire and toward its opposite — an overwhelmed hyper-vigilance about being a good, safe father, the mind fixating on the worst imaginable violation precisely because it matters most; test whether the thoughts are ego-dystonic and revolting to him rather than arousing, whether they cluster around caregiving he badly wants to do right, and whether they ease as his anxiety about his fitness as a father is addressed.",
        credit: 1.0,
      },
      {
        text: "He's probably anxious about being a new parent; we could talk about it.",
        credit: 0.6,
      },
      {
        text: "He seems disturbed by thoughts during caregiving.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The horror is the data: taboo content that disgusts him and drives him to avoid the child points away from desire and toward its opposite — an overwhelmed hyper-vigilance about being a good, safe father, the mind fixating on the worst imaginable violation precisely because it matters most; test whether the thoughts are ego-dystonic and revolting to him rather than arousing, whether they cluster around caregiving he badly wants to do right, and whether they ease as his anxiety about his fitness as a father is addressed.",
    explanation:
      "Top credit reads revulsion-laden taboo content driving avoidance as anxiety about being a safe father and names an ego-dystonic-not-arousing test; 'hidden predatory desire' is the lurid overreach his disgust and avoidance defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "A woman repeatedly confesses trivial 'sins' and fears she is secretly evil. Examined over weeks, the confession urges reliably follow ordinary moments of irritation at her domineering mother. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She might feel guilty about her mother; we could explore the confessions.",
        credit: 0.6,
      },
      {
        text: "She seems to confess minor things a lot.",
        credit: 0.3,
      },
      {
        text: "The 'evil' content decodes the trigger: a conviction of secret badness that flares right after anger at her mother likely literalizes a forbidden hostility she judges as sinful — the confession discharging a guilt for feelings she isn't permitted to have; test whether the urges follow moments of irritation at her mother specifically, whether the 'sins' she confesses are really ordinary angry feelings, and whether they ease once normal anger is allowed to be just anger.",
        credit: 1.0,
      },
      {
        text: "She is simply a very moral, conscientious person, so her confessing means nothing beyond strong values.",
        credit: 0,
      },
    ],
    correctAnswer:
      "The 'evil' content decodes the trigger: a conviction of secret badness that flares right after anger at her mother likely literalizes a forbidden hostility she judges as sinful — the confession discharging a guilt for feelings she isn't permitted to have; test whether the urges follow moments of irritation at her mother specifically, whether the 'sins' she confesses are really ordinary angry feelings, and whether they ease once normal anger is allowed to be just anger.",
    explanation:
      "Full credit reads secret-evil convictions following anger at her mother as literalized forbidden hostility and names a follows-irritation-at-mother test; 'just very moral' is the dodge the anger-locked timing defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A man rigidly avoids the number 14 — refusing floors, addresses, and times that contain it — a compulsion that began the year his brother died on the 14th. No other number troubles him. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He seems to have a thing about the number 14.",
        credit: 0.3,
      },
      {
        text: "Plenty of people are superstitious about numbers, so there's nothing about his brother to read into avoiding 14.",
        credit: 0,
      },
      {
        text: "It's probably linked to his brother; we could note when it comes up.",
        credit: 0.6,
      },
      {
        text: "The chosen number is the clue: dread fixed to the exact date of his brother's death, sparing all other numbers, likely binds an unbearable loss into a single avoidable symbol — magic that lets him feel he is keeping the catastrophe at bay; test whether only the death-linked number troubles him, whether the avoidance began at no loss but this one, and whether it eases as the grief over his brother is worked through directly.",
        credit: 1.0,
      },
    ],
    correctAnswer:
      "The chosen number is the clue: dread fixed to the exact date of his brother's death, sparing all other numbers, likely binds an unbearable loss into a single avoidable symbol — magic that lets him feel he is keeping the catastrophe at bay; test whether only the death-linked number troubles him, whether the avoidance began at no loss but this one, and whether it eases as the grief over his brother is worked through directly.",
    explanation:
      "Top credit reads dread fixed to the death-date number as bound grief and names an only-that-number test; 'plenty of people are superstitious' is the dodge the exact date-matching specificity defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A woman compulsively rereads her sent emails hunting for a cruel or insulting line she fears she slipped in. The urge reliably spikes on days she felt slighted by a colleague but said nothing. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Everyone worries about their emails sometimes; reading meaning into careful proofreading is overthinking it.",
        credit: 0,
      },
      {
        text: "She seems to check her emails over and over.",
        credit: 0.3,
      },
      {
        text: "The feared content points to disowned anger: a dread of having written something cruel, spiking exactly when she swallowed a slight, suggests the hostility she won't let herself express is being attributed to her own pen — she fears doing what she actually wishes she could do; test whether the rereading follows moments she felt angry but stayed silent, whether the dreaded line is always aggressive rather than merely mistaken, and whether it eases once she can own and voice the anger directly.",
        credit: 1.0,
      },
      {
        text: "She might have some anger she's holding in; we could discuss it.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The feared content points to disowned anger: a dread of having written something cruel, spiking exactly when she swallowed a slight, suggests the hostility she won't let herself express is being attributed to her own pen — she fears doing what she actually wishes she could do; test whether the rereading follows moments she felt angry but stayed silent, whether the dreaded line is always aggressive rather than merely mistaken, and whether it eases once she can own and voice the anger directly.",
    explanation:
      "Full credit reads fear of a cruel line spiking after swallowed slights as disowned anger and names a follows-silent-anger test; 'everyone worries about emails' is the dodge the anger-locked timing defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A gentle, committed animal-rights activist is tormented by vivid intrusive images of stabbing animals and people. The images always run exactly counter to her deepest values, and they revolt her. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She's probably stressed; we could keep talking about the images.",
        credit: 0.6,
      },
      {
        text: "The content's opposition to her identity is the tell: violent images that target precisely what she most cherishes and disgust her point not to a wish but to anxiety about her own ordinary aggression — feelings her gentle self-image forbids, so they return as their most shocking form; test whether the intrusions always contradict her values rather than express them, whether they revolt rather than tempt her, and whether they ease once she can accept that having aggressive feelings is normal and not the same as acting.",
        credit: 1.0,
      },
      {
        text: "Beneath the gentle image she harbors real violent desires she's suppressing.",
        credit: 0,
      },
      {
        text: "She seems to have violent thoughts that upset her.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The content's opposition to her identity is the tell: violent images that target precisely what she most cherishes and disgust her point not to a wish but to anxiety about her own ordinary aggression — feelings her gentle self-image forbids, so they return as their most shocking form; test whether the intrusions always contradict her values rather than express them, whether they revolt rather than tempt her, and whether they ease once she can accept that having aggressive feelings is normal and not the same as acting.",
    explanation:
      "Top credit reads value-opposite, revolting images as anxiety about disowned ordinary aggression and names an always-contradicts-her-values test; 'real violent desires beneath' is the lurid overreach her disgust and value-opposition defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "A man checks the locks dozens of times, fearing an intruder will harm his wife — but only on the nights she is away, and the compulsion began as their marriage soured and he caught himself fantasizing about leaving. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He seems to check the locks when his wife is gone.",
        credit: 0.3,
      },
      {
        text: "Checking locks is just sensible caution, so there's nothing about the marriage to read into it.",
        credit: 0,
      },
      {
        text: "The protective content masks its opposite: harm-fears for his wife that appear only as the marriage sours and he imagines leaving likely bind a guilt over his own hostile wishes — the elaborate protecting undoing the wish to be rid of her; test whether the checking tracks nights linked to conflict rather than real danger, whether it began with the marital strain and his leaving fantasies, and whether it eases once the ambivalence toward his wife is named.",
        credit: 1.0,
      },
      {
        text: "He might have mixed feelings about his marriage; we could explore that.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The protective content masks its opposite: harm-fears for his wife that appear only as the marriage sours and he imagines leaving likely bind a guilt over his own hostile wishes — the elaborate protecting undoing the wish to be rid of her; test whether the checking tracks nights linked to conflict rather than real danger, whether it began with the marital strain and his leaving fantasies, and whether it eases once the ambivalence toward his wife is named.",
    explanation:
      "Full credit reads protective checking that began with leaving-fantasies as undoing hostile wishes and names a tracks-conflict-not-danger test; 'just sensible caution' is the dodge the strain-linked onset and away-nights-only timing defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "A student redoes his homework until it feels 'just right,' sometimes for hours, and the ritual intensifies specifically on the college applications his demanding father picked out for him — never on work he chose himself. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He's just a perfectionist by temperament, so there's nothing about his father to read into it.",
        credit: 0,
      },
      {
        text: "It might be about pressure from his father; we could look at his standards.",
        credit: 0.6,
      },
      {
        text: "He seems to redo his father's chosen work a lot.",
        credit: 0.3,
      },
      {
        text: "The trigger-specific content is the clue: 'just right' rituals that flare only on his father's chosen tasks likely carry a fear of that father's judgment — and perhaps a buried wish to fail or refuse — so the perfection both placates the father and stalls the work; test whether the rituals intensify on father-linked tasks but not self-chosen ones, whether dread rather than pride accompanies finishing them, and whether they ease once the pressure and any resentment toward his father are named.",
        credit: 1.0,
      },
    ],
    correctAnswer:
      "The trigger-specific content is the clue: 'just right' rituals that flare only on his father's chosen tasks likely carry a fear of that father's judgment — and perhaps a buried wish to fail or refuse — so the perfection both placates the father and stalls the work; test whether the rituals intensify on father-linked tasks but not self-chosen ones, whether dread rather than pride accompanies finishing them, and whether they ease once the pressure and any resentment toward his father are named.",
    explanation:
      "Top credit reads perfection flaring only on father-chosen tasks as fear of his judgment and names a father-linked-vs-self-chosen test; 'just a perfectionist by temperament' is the dodge the task-specific pattern defeats.",
  },
];

const hybrid: HomeworkItem[] = [
  {
    itemType: "hybrid",
    prompt:
      "A loving mother is struck by intrusive images of pushing her toddler down the stairs — but only when standing at the top of a staircase with the child. She is horrified and now takes the elevator everywhere. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She seems to have scary thoughts near stairs.",
        credit: 0.3,
      },
      {
        text: "The content's precision is the clue: harm imagery aimed at her own child, triggered exactly by the situation that makes such harm physically possible, and met with horror, points to a hyper-responsibility and the terror of her own power to do damage rather than any wish; test whether the images fire only where she could act and target only her child, whether her dread scales with the danger of the spot, and whether they ease once the fear of being a harmful mother is voiced.",
        credit: 1.0,
      },
      {
        text: "The thoughts reveal a buried wish to be rid of the child, so avoiding stairs is wise.",
        credit: 0,
      },
      {
        text: "It's probably new-parent anxiety; we could keep discussing it.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'the images express terror of her own power to harm' lead from the rival 'they reveal a hidden wish to hurt the child,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: check whether the images horrify and repel her and drive her to protect the child rather than tempting or satisfying her — revulsion and avoidance point to feared responsibility, not desire. My lead is refuted if she finds the images gratifying or seeks out chances to act on them, which would fit a genuine wish rather than dread of her own potential.",
      yieldAnchors: [
        "Images of harming her own toddler",
        "They fire only at the top of stairs",
        "She is horrified and now avoids stairs",
      ],
      riskAnchors: [
        "Images target only her child and only where she could act",
        "Dread scales with the danger of the spot",
        "They ease once fear of being harmful is voiced",
      ],
      defeatedBy: [
        "She finds the images gratifying rather than horrifying",
        "She seeks chances to be alone with the child to act",
      ],
    },
    correctAnswer:
      "The content's precision is the clue: harm imagery aimed at her own child, triggered exactly by the situation that makes such harm physically possible, and met with horror, points to a hyper-responsibility and the terror of her own power to do damage rather than any wish; test whether the images fire only where she could act and target only her child, whether her dread scales with the danger of the spot, and whether they ease once the fear of being a harmful mother is voiced.",
    explanation:
      "Full credit reads precise, horror-laden harm-content as terror of her own power and is paired with a revulsion-vs-gratification test that names its refutation; 'a buried wish to be rid of the child' is the lurid overreach her horror and avoidance defeat.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A man feels his late father's house is 'contaminated' and cannot enter the room where his father died without scrubbing afterward, though he has no germ fears anywhere else. The compulsion began the week of the death. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Contamination fears are a brain glitch with no meaning, so the link to his father's death is illusory.",
        credit: 0,
      },
      {
        text: "The content localizes the grief: a sense of contamination confined to the room his father died in, beginning that very week, likely binds an unbearable loss and dread to a single avoidable place — the scrubbing managing a feeling about death he can't otherwise face; test whether the contamination fear is specific to that room and absent elsewhere, whether it began at the death and no other change, and whether it eases as the grief and any fear of death are named.",
        credit: 1.0,
      },
      {
        text: "He seems to feel his father's house is dirty.",
        credit: 0.3,
      },
      {
        text: "It's probably about his father's death; we could revisit it.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'the contamination localizes grief to the death-room' lead from the rival 'he has a general emerging germ phobia,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: see whether the contamination feeling is confined to the room he associates with the death while every other space feels clean — place-specific dread points to grief, not a spreading phobia. My lead is refuted if he develops contamination fears across many unrelated settings, which would fit a general germ phobia rather than a feeling about his father.",
      yieldAnchors: [
        "Only his father's death-room feels contaminated",
        "No germ fears anywhere else",
        "The compulsion began the week of the death",
      ],
      riskAnchors: [
        "The fear is specific to that room",
        "It began at the death and no other change",
        "It eases as grief is named",
      ],
      defeatedBy: [
        "He develops contamination fears in many unrelated places",
        "The fear predates his father's death",
      ],
    },
    correctAnswer:
      "The content localizes the grief: a sense of contamination confined to the room his father died in, beginning that very week, likely binds an unbearable loss and dread to a single avoidable place — the scrubbing managing a feeling about death he can't otherwise face; test whether the contamination fear is specific to that room and absent elsewhere, whether it began at the death and no other change, and whether it eases as the grief and any fear of death are named.",
    explanation:
      "Full credit reads contamination confined to the death-room as localized grief and is paired with a one-room-vs-everywhere test that names its refutation; 'a brain glitch with no meaning' is the dodge the room-specific, death-timed onset defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A woman who never cared about tidiness now arranges her kitchen with rigid precision and re-does it until it's exact — a ritual that took hold as she discovered her husband's affairs and her home life turned chaotic. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She might be coping with stress at home; we could discuss the ritual.",
        credit: 0.6,
      },
      {
        text: "She seems very particular about her kitchen now.",
        credit: 0.3,
      },
      {
        text: "Some people just become neat freaks; there's nothing about her marriage to read into it.",
        credit: 0,
      },
      {
        text: "The content answers the chaos: a sudden need for rigid order arising exactly as her home became uncontrollable likely enacts a bid to master, in one small domain, the helplessness she feels about a marriage she cannot control — the ritual restoring a control reality has taken; test whether the ordering urge tracks the moments her home life feels most chaotic, whether it began with the affairs and no other change, and whether it eases as the helplessness about her marriage is named.",
        credit: 1.0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'the ordering restores control lost in her marriage' lead from the rival 'she simply became a tidy person,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: check whether the ordering urge surges precisely when her marriage feels most out of control rather than holding steady like a settled habit — intensity that tracks the chaos points to a control function. My lead is refuted if the tidiness is constant and unrelated to events at home, which would fit an ordinary new preference for neatness.",
      yieldAnchors: [
        "She never cared about tidiness before",
        "Rigid ordering began as the affairs surfaced",
        "Her home life turned chaotic",
      ],
      riskAnchors: [
        "The urge tracks the most chaotic moments",
        "It began with the affairs and no other change",
        "It eases as helplessness about the marriage is named",
      ],
      defeatedBy: [
        "The tidiness is constant and event-independent",
        "It began long before the marital chaos",
      ],
    },
    correctAnswer:
      "The content answers the chaos: a sudden need for rigid order arising exactly as her home became uncontrollable likely enacts a bid to master, in one small domain, the helplessness she feels about a marriage she cannot control — the ritual restoring a control reality has taken; test whether the ordering urge tracks the moments her home life feels most chaotic, whether it began with the affairs and no other change, and whether it eases as the helplessness about her marriage is named.",
    explanation:
      "Top credit reads sudden rigid order arising with marital chaos as a bid to restore control and is paired with a tracks-the-chaos test that names its refutation; 'just became a neat freak' is the dodge the chaos-linked onset defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A devout teenager preparing for confirmation is plagued by blasphemous intrusive thoughts that worsen the closer the ceremony approaches and peak during religious instruction. She is ashamed and prays them away. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She seems to get bad thoughts around church.",
        credit: 0.3,
      },
      {
        text: "Intrusive thoughts are meaningless static, so their religious timing tells us nothing.",
        credit: 0,
      },
      {
        text: "It might relate to her faith; we could keep talking about it.",
        credit: 0.6,
      },
      {
        text: "The content rising with the rite is the clue: blasphemy that intensifies as she is pushed toward a public profession of faith likely voices a doubt or reluctance she isn't allowed to feel — the symptom carrying an ambivalence about being confirmed that she can't say aloud; test whether the thoughts track proximity to the ceremony and instruction specifically, whether they ease when she can openly voice any doubt about confirming, and whether fighting them makes them worse.",
        credit: 1.0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'the blasphemy voices reluctance about confirming' lead from the rival 'this is generic anxiety unrelated to her faith,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: see whether the intrusions intensify specifically as the ceremony nears and during religious instruction rather than spreading across unrelated stressors — timing locked to the rite points to ambivalence about confirming. My lead is refuted if the thoughts are just as intense during non-religious stress and indifferent to the ceremony's approach, which would fit generic anxiety.",
      yieldAnchors: [
        "Blasphemous thoughts worsen as confirmation nears",
        "They peak during religious instruction",
        "She is ashamed and prays them away",
      ],
      riskAnchors: [
        "The thoughts track proximity to the ceremony",
        "They ease when doubt about confirming is voiced",
        "Fighting them makes them worse",
      ],
      defeatedBy: [
        "The thoughts ignore the ceremony and follow unrelated stress",
        "They are unchanged by religious context",
      ],
    },
    correctAnswer:
      "The content rising with the rite is the clue: blasphemy that intensifies as she is pushed toward a public profession of faith likely voices a doubt or reluctance she isn't allowed to feel — the symptom carrying an ambivalence about being confirmed that she can't say aloud; test whether the thoughts track proximity to the ceremony and instruction specifically, whether they ease when she can openly voice any doubt about confirming, and whether fighting them makes them worse.",
    explanation:
      "Full credit reads blasphemy rising with the rite as unspeakable reluctance to confirm and is paired with a tracks-the-ceremony test that names its refutation; 'meaningless static' is the dodge the rite-linked timing defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "Shortly after he carelessly let a friend down at a crucial moment, a man began an exhausting compulsion to circle back while driving, sure he has struck a pedestrian and left them hurt. The fear is always of harm he caused and failed to face. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Worries about hitting someone are common and mean nothing, so there's no link to letting his friend down.",
        credit: 0,
      },
      {
        text: "He seems afraid he's hurt someone while driving.",
        credit: 0.3,
      },
      {
        text: "The content mirrors the guilt: a dread specifically of harm he caused and didn't face, arising right after he failed a friend, likely displaces a guilt he can't tolerate onto the road, where checking lets him keep 'making sure' he isn't a person who hurts others and walks away; test whether the fear is always of caused-and-abandoned harm rather than other dangers, whether it began with the letdown and no other change, and whether it eases as the guilt toward his friend is addressed.",
        credit: 1.0,
      },
      {
        text: "It might be connected to guilt; we could explore the driving fear.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'the driving fear displaces guilt about failing his friend' lead from the rival 'he has an ordinary fear of car accidents,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: check whether the dread is always of harm he caused and abandoned rather than of random road dangers, and whether it began right when he let his friend down — content and timing matched to the guilt point to displacement. My lead is refuted if the fear is a general worry about crashes that predates the letdown and shows no caused-and-abandoned theme.",
      yieldAnchors: [
        "The compulsion began after he failed a friend",
        "He is sure he struck someone and left them hurt",
        "The fear is always of harm he caused and abandoned",
      ],
      riskAnchors: [
        "The fear is of caused-and-abandoned harm specifically",
        "It began with the letdown and no other change",
        "It eases as guilt toward his friend is addressed",
      ],
      defeatedBy: [
        "The fear is a general worry about crashes",
        "It predates letting his friend down",
      ],
    },
    correctAnswer:
      "The content mirrors the guilt: a dread specifically of harm he caused and didn't face, arising right after he failed a friend, likely displaces a guilt he can't tolerate onto the road, where checking lets him keep 'making sure' he isn't a person who hurts others and walks away; test whether the fear is always of caused-and-abandoned harm rather than other dangers, whether it began with the letdown and no other change, and whether it eases as the guilt toward his friend is addressed.",
    explanation:
      "Top credit reads a fear of caused-and-abandoned harm arising after he failed a friend as displaced guilt and is paired with a content-and-timing test that names its refutation; 'worries about hitting someone mean nothing' is the dodge the matched content and onset defeat.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A devoted granddaughter who cares daily for her frail, gentle grandmother is tormented by intrusive urges to scream something vicious at her. The urges are worst during the most tender caregiving moments. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She's probably worn out; we could talk about the caregiving.",
        credit: 0.6,
      },
      {
        text: "The content against the tenderness is the tell: vicious urges that peak precisely in the most loving moments likely carry a resentment of the caregiving burden she isn't allowed to feel toward someone so gentle and dependent — the forbidden anger surfacing as its most shocking form; test whether the urges cluster in moments of greatest tenderness and demand, whether they revolt rather than satisfy her, and whether they ease once she can admit that resenting the burden is normal and not the same as hating her grandmother.",
        credit: 1.0,
      },
      {
        text: "Deep down she despises her grandmother and the urges show her true feelings.",
        credit: 0,
      },
      {
        text: "She seems to get mean urges while caregiving.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'the urges carry forbidden resentment of the burden' lead from the rival 'she truly hates her grandmother,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: check whether the urges horrify her and coexist with genuine devoted care rather than matching open hostility or neglect — revulsion alongside tenderness points to disowned resentment of the burden, not hatred. My lead is refuted if she actually treats her grandmother cruelly or feels relief and satisfaction in the urges, which would fit real hatred.",
      yieldAnchors: [
        "She cares daily and devotedly for her grandmother",
        "Vicious urges peak during tender caregiving",
        "The urges torment her",
      ],
      riskAnchors: [
        "Urges cluster in moments of greatest tenderness and demand",
        "They revolt rather than satisfy her",
        "They ease once resentment is allowed as normal",
      ],
      defeatedBy: [
        "She actually treats her grandmother cruelly",
        "She feels satisfaction rather than horror at the urges",
      ],
    },
    correctAnswer:
      "The content against the tenderness is the tell: vicious urges that peak precisely in the most loving moments likely carry a resentment of the caregiving burden she isn't allowed to feel toward someone so gentle and dependent — the forbidden anger surfacing as its most shocking form; test whether the urges cluster in moments of greatest tenderness and demand, whether they revolt rather than satisfy her, and whether they ease once she can admit that resenting the burden is normal and not the same as hating her grandmother.",
    explanation:
      "Full credit reads vicious urges peaking in tender moments as forbidden resentment of the burden and is paired with a revulsion-amid-devotion test that names its refutation; 'deep down she despises her' is the lurid overreach her horror and daily care defeat.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A salesman who recently began pushing a product he privately believes is a scam developed a compulsion to wash his hands after every shift, feeling 'slimy.' He has no contamination fears outside of work. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He seems to wash up after work a lot.",
        credit: 0.3,
      },
      {
        text: "Hand-washing is just hygiene, so tying it to his sales job is overinterpreting.",
        credit: 0,
      },
      {
        text: "He might dislike his job; we could discuss the washing.",
        credit: 0.6,
      },
      {
        text: "The content literalizes the compromise: feeling 'slimy' and washing only after shifts spent deceiving customers points to a moral disgust he can't voice, the body enacting a cleansing his conscience demands of work he finds dirty; test whether the urge appears only after ethically compromising shifts and not on days off, whether it began when he started pushing the product he distrusts, and whether it eases once he can name the guilt about the work directly.",
        credit: 1.0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'the washing literalizes moral disgust at his work' lead from the rival 'he is developing an ordinary contamination phobia,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: see whether the washing urge is confined to days he spent deceiving customers and is absent on days off — an urge bounded by the ethically compromising work points to moral disgust, not germ fear. My lead is refuted if he washes compulsively regardless of work and across unrelated settings, which would fit a general contamination phobia.",
      yieldAnchors: [
        "He pushes a product he believes is a scam",
        "He feels 'slimy' and washes after every shift",
        "No contamination fears outside work",
      ],
      riskAnchors: [
        "The urge appears only after compromising shifts",
        "It began when he started the dishonest sales",
        "It eases once the guilt is named",
      ],
      defeatedBy: [
        "He washes compulsively regardless of work",
        "Contamination fears appear in unrelated settings",
      ],
    },
    correctAnswer:
      "The content literalizes the compromise: feeling 'slimy' and washing only after shifts spent deceiving customers points to a moral disgust he can't voice, the body enacting a cleansing his conscience demands of work he finds dirty; test whether the urge appears only after ethically compromising shifts and not on days off, whether it began when he started pushing the product he distrusts, and whether it eases once he can name the guilt about the work directly.",
    explanation:
      "Top credit reads 'slimy' washing confined to dishonest shifts as literalized moral disgust and is paired with a work-days-vs-days-off test that names its refutation; 'just hygiene' is the dodge the work-bounded timing and onset defeat.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A woman apologizes compulsively — 'sorry, sorry' — and replays conversations for hours certain she offended someone. The urge spikes specifically after interactions where she actually asserted herself or said no. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Polite people apologize a lot; there's nothing to read into being considerate.",
        credit: 0,
      },
      {
        text: "She might struggle with confidence; we could talk it over.",
        credit: 0.6,
      },
      {
        text: "The trigger decodes the content: a conviction she's given offense that flares right after she asserted herself suggests the apology is undoing a self-assertion she experiences as forbidden aggression — saying 'sorry' to take back the 'no'; test whether the apology urge follows acts of self-assertion specifically rather than real rudeness, whether the 'offense' she fears is just her having had a need, and whether it eases once she can own asserting herself as legitimate.",
        credit: 1.0,
      },
      {
        text: "She seems to apologize and replay conversations a lot.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'the apologizing undoes forbidden self-assertion' lead from the rival 'she is just an anxious, polite person,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: check whether the apology urge spikes specifically after she said no or stood her ground rather than after genuine slips — timing tied to self-assertion points to undoing forbidden aggression. My lead is refuted if she apologizes uniformly regardless of whether she asserted herself, which would fit general anxious politeness.",
      yieldAnchors: [
        "She apologizes compulsively and replays conversations",
        "The urge spikes after she asserted herself or said no",
        "She is sure she gave offense",
      ],
      riskAnchors: [
        "The urge follows self-assertion specifically",
        "The feared 'offense' is just having had a need",
        "It eases once self-assertion is owned as legitimate",
      ],
      defeatedBy: [
        "She apologizes uniformly regardless of asserting herself",
        "The urge tracks real rudeness, not assertion",
      ],
    },
    correctAnswer:
      "The trigger decodes the content: a conviction she's given offense that flares right after she asserted herself suggests the apology is undoing a self-assertion she experiences as forbidden aggression — saying 'sorry' to take back the 'no'; test whether the apology urge follows acts of self-assertion specifically rather than real rudeness, whether the 'offense' she fears is just her having had a need, and whether it eases once she can own asserting herself as legitimate.",
    explanation:
      "Full credit reads apology urges spiking after self-assertion as undoing forbidden aggression and is paired with an after-saying-no test that names its refutation; 'just polite' is the dodge the assertion-locked timing defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A man must perform actions in fours — flicking a switch, tapping a doorframe — believing that if he doesn't, his young son will die. The compulsion began the month his son was hospitalized with a frightening illness. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He seems to repeat things to protect his son.",
        credit: 0.3,
      },
      {
        text: "Rituals like counting are meaningless tics, so the link to his son's illness is imagined.",
        credit: 0,
      },
      {
        text: "The content carries the terror: a magic ritual whose sole stated stake is his son's survival, beginning the month the boy nearly died, likely binds an unbearable helplessness about a danger he couldn't control — the ritual buying an illusion of power over life and death; test whether the compulsion's feared outcome is specifically his son's death and not other harms, whether it began with the hospitalization and no other change, and whether it eases as the helplessness and fear of losing his son are named.",
        credit: 1.0,
      },
      {
        text: "It's probably about his son's illness; we could keep noting it.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'the ritual binds helplessness about his son's illness' lead from the rival 'he has a generic counting compulsion,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: check whether the ritual's feared consequence is specifically his son's death and whether it began the month of the hospitalization — a stake and onset fixed to the illness point to bound helplessness. My lead is refuted if the counting has no connection to his son, attaches to varied unrelated fears, and predates the illness, which would fit a generic compulsion.",
      yieldAnchors: [
        "Actions in fours to prevent his son's death",
        "The compulsion began the month of the hospitalization",
        "The stated stake is specifically his son",
      ],
      riskAnchors: [
        "The feared outcome is his son's death specifically",
        "It began with the hospitalization and no other change",
        "It eases as helplessness about the illness is named",
      ],
      defeatedBy: [
        "The ritual is unrelated to his son",
        "It predates the hospitalization",
      ],
    },
    correctAnswer:
      "The content carries the terror: a magic ritual whose sole stated stake is his son's survival, beginning the month the boy nearly died, likely binds an unbearable helplessness about a danger he couldn't control — the ritual buying an illusion of power over life and death; test whether the compulsion's feared outcome is specifically his son's death and not other harms, whether it began with the hospitalization and no other change, and whether it eases as the helplessness and fear of losing his son are named.",
    explanation:
      "Top credit reads a survival-ritual beginning with the hospitalization as bound helplessness and is paired with a feared-outcome-and-onset test that names its refutation; 'meaningless tics' is the dodge the son-specific stake and timing defeat.",
  },
];

const written: HomeworkItem[] = [
  {
    itemType: "written",
    prompt:
      "A new mother confides that she is tormented by intrusive thoughts of drowning her baby during bath time. She is appalled by them, loves her child fiercely, and has begun asking her partner to handle every bath. In one paragraph, propose the strongest conclusion about what the content of these thoughts is expressing and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that the very content — harm aimed at the child she loves most, arriving in the exact caregiving moment, and met with appalled avoidance — is saying the opposite of a wish: it expresses the crushing weight of sole responsibility and a terror of her own capacity to fail or harm, the mind fixating on the worst imaginable act precisely because protecting the baby matters more than anything. This is a strong claim because it predicts checkable consequences: the thoughts should be ego-dystonic and revolting rather than gratifying; they should cluster around the caregiving she most wants to do right and target her own child rather than strangers; and they should ease as her fear of being an inadequate or dangerous mother is named and normalized. I would test it by asking whether the images horrify or tempt her, by checking whether they track the moments of greatest responsibility, and by watching whether naming the fear of her own potential to harm loosens their grip — while staying alert to the refuting signs of genuine intent.",
      yieldAnchors: [
        "Intrusive thoughts of drowning her baby at bath time",
        "She is appalled and loves the child fiercely",
        "She now avoids bathing the baby",
      ],
      riskAnchors: [
        "The thoughts are revolting rather than gratifying",
        "They cluster around caregiving and target her own child",
        "They ease as fear of being a harmful mother is named",
      ],
      defeatedBy: [
        "She finds the thoughts gratifying or arousing",
        "She seeks chances to be alone with the baby to act",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that the very content — harm aimed at the child she loves most, arriving in the exact caregiving moment, and met with appalled avoidance — is saying the opposite of a wish: it expresses the crushing weight of sole responsibility and a terror of her own capacity to fail or harm, the mind fixating on the worst imaginable act precisely because protecting the baby matters more than anything. This is a strong claim because it predicts checkable consequences: the thoughts should be ego-dystonic and revolting rather than gratifying; they should cluster around the caregiving she most wants to do right and target her own child rather than strangers; and they should ease as her fear of being an inadequate or dangerous mother is named and normalized. I would test it by asking whether the images horrify or tempt her, by checking whether they track the moments of greatest responsibility, and by watching whether naming the fear of her own potential to harm loosens their grip — while staying alert to the refuting signs of genuine intent.",
    explanation:
      "Under the inverted standard, 'these thoughts mean she's dangerous and must be kept away' and 'thoughts are random and mean nothing' both miss; top credit reads horror-laden harm-content as terror of her own capacity to fail and names an ego-dystonic-not-gratifying test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A lifelong believer reports obscene, blasphemous images that intrude only during his most heartfelt prayer and worsen the harder he tries to banish them. He is ashamed and tells no one. In one paragraph, propose the strongest conclusion about what the content of these intrusions is expressing and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that blasphemy striking precisely at his most sacred, heartfelt moments is not random but a disguised communication: it likely voices a forbidden doubt, anger, or rebellion toward a faith he is not permitted to question, the symptom carrying aloud what he cannot let himself think. This is a strong claim because it predicts checkable consequences: the intrusions should peak at the holiest moments and stay quiet during neutral activity; they should worsen the harder he fights them, as suppression feeds them; and they should ease when he can openly acknowledge ambivalence or doubt about his religion rather than only piety. I would test it by mapping the intrusions against how sacred each moment is, by noting whether resistance amplifies them, and by checking whether giving his doubts a voice reduces them — refuted if the thoughts ignore sacredness and track ordinary stress instead.",
      yieldAnchors: [
        "Blasphemy intrudes only during heartfelt prayer",
        "It worsens the harder he fights it",
        "He is ashamed and secretive",
      ],
      riskAnchors: [
        "Intrusions peak at the holiest moments",
        "Resistance amplifies them",
        "They ease when doubt is openly named",
      ],
      defeatedBy: [
        "The thoughts ignore sacredness and track ordinary stress",
        "They are unchanged whether he resists or not",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that blasphemy striking precisely at his most sacred, heartfelt moments is not random but a disguised communication: it likely voices a forbidden doubt, anger, or rebellion toward a faith he is not permitted to question, the symptom carrying aloud what he cannot let himself think. This is a strong claim because it predicts checkable consequences: the intrusions should peak at the holiest moments and stay quiet during neutral activity; they should worsen the harder he fights them, as suppression feeds them; and they should ease when he can openly acknowledge ambivalence or doubt about his religion rather than only piety. I would test it by mapping the intrusions against how sacred each moment is, by noting whether resistance amplifies them, and by checking whether giving his doubts a voice reduces them — refuted if the thoughts ignore sacredness and track ordinary stress instead.",
    explanation:
      "The cautious 'thoughts are random, content is meaningless' earns near-zero; top credit reads blasphemy peaking at the holiest moments as disguised forbidden doubt and names a track-the-sacredness test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A man seeks help for a sudden, severe hand-washing compulsion in which he feels permanently 'dirty.' In passing he mentions it started the week he ended a secret affair. In one paragraph, propose the strongest conclusion about what the content of this compulsion is expressing and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that the specific content — feeling indelibly dirty and washing to get clean — literalizes a moral guilt about the affair that he cannot say in words, the body enacting the cleansing his conscience demands. This is a strong claim because it predicts checkable consequences: the compulsion should date precisely from the affair and no other change; the 'dirtiness' and washing should intensify around reminders of the betrayal and of the person he wronged; and it should ease as the guilt is spoken and worked through rather than scrubbed away. I would test it by pinning the onset to the affair, by checking whether the urge spikes near reminders of his partner or the affair, and by watching whether naming the guilt reduces the washing — refuted if the contamination fear predates the affair or spreads into many unrelated germ situations, which would fit an ordinary phobia.",
      yieldAnchors: [
        "Severe washing and a feeling of being 'dirty'",
        "It began the week he ended the affair",
        "The dirtiness feels moral and permanent",
      ],
      riskAnchors: [
        "Onset dates precisely from the affair",
        "The urge spikes near reminders of the betrayal",
        "It eases as guilt is spoken rather than washed",
      ],
      defeatedBy: [
        "The contamination fear predates the affair",
        "It spreads into many unrelated germ situations",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that the specific content — feeling indelibly dirty and washing to get clean — literalizes a moral guilt about the affair that he cannot say in words, the body enacting the cleansing his conscience demands. This is a strong claim because it predicts checkable consequences: the compulsion should date precisely from the affair and no other change; the 'dirtiness' and washing should intensify around reminders of the betrayal and of the person he wronged; and it should ease as the guilt is spoken and worked through rather than scrubbed away. I would test it by pinning the onset to the affair, by checking whether the urge spikes near reminders of his partner or the affair, and by watching whether naming the guilt reduces the washing — refuted if the contamination fear predates the affair or spreads into many unrelated germ situations, which would fit an ordinary phobia.",
    explanation:
      "'Washing has medical and habit causes, so the affair is irrelevant' is the dodge the exact onset defeats; top credit reads 'dirtiness' as literalized moral guilt and names a tracks-reminders-of-the-betrayal test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A woman developed a compulsion to 'cancel out' any bad thought by deliberately thinking a good one and tapping a surface an equal number of times. It began after her infant nephew, whom she had briefly resented, died of sudden illness. In one paragraph, propose the strongest conclusion about what the content of this compulsion is expressing and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that the undoing ritual — canceling a 'bad' thought with a 'good' one — enacts a magical attempt to take back the resentment she felt toward a nephew who then died, binding an unbearable guilt that her hostile feeling somehow caused the loss. This is a strong claim because it predicts checkable consequences: the compulsion should center on neutralizing 'bad' or hostile thoughts specifically rather than general anxiety; it should have begun with the death and no other change; and it should ease as the guilt over her ambivalence toward the child is named and separated from any real causal power. I would test it by checking whether the ritual targets hostile thoughts in particular, by pinning its onset to the death, and by watching whether voicing the guilt reduces it — refuted if the ritual predates the loss or has no connection to undoing 'bad' thoughts.",
      yieldAnchors: [
        "Canceling 'bad' thoughts with 'good' ones and equal taps",
        "It began after the nephew she resented died",
        "The ritual is an undoing of hostile thoughts",
      ],
      riskAnchors: [
        "The ritual targets hostile thoughts specifically",
        "It began with the death and no other change",
        "It eases as guilt over the ambivalence is named",
      ],
      defeatedBy: [
        "The ritual predates the nephew's death",
        "It has nothing to do with undoing 'bad' thoughts",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that the undoing ritual — canceling a 'bad' thought with a 'good' one — enacts a magical attempt to take back the resentment she felt toward a nephew who then died, binding an unbearable guilt that her hostile feeling somehow caused the loss. This is a strong claim because it predicts checkable consequences: the compulsion should center on neutralizing 'bad' or hostile thoughts specifically rather than general anxiety; it should have begun with the death and no other change; and it should ease as the guilt over her ambivalence toward the child is named and separated from any real causal power. I would test it by checking whether the ritual targets hostile thoughts in particular, by pinning its onset to the death, and by watching whether voicing the guilt reduces it — refuted if the ritual predates the loss or has no connection to undoing 'bad' thoughts.",
    explanation:
      "'Rituals are just rituals, the death is coincidence' earns near-zero; top credit reads an undoing-of-hostile-thoughts beginning at the death as bound survivor guilt and names a targets-hostile-thoughts test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A man devoted to his wife is plagued by intrusive doubts — 'what if she's not the one?' — that surge precisely after their happiest, closest evenings and drive him to seek reassurance. In one paragraph, propose the strongest conclusion about what the content and timing of these doubts are expressing and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that doubt arriving right after closeness, rather than after conflict, is doing a job: the 'what if she's not the one' question manages a fear of intimacy itself, manufacturing distance exactly when nearness becomes threatening, so the content is less about her suitability than about his own difficulty tolerating love. This is a strong claim because it predicts checkable consequences: the doubts should reliably follow the warmest moments rather than fights or distance; reassurance should bring only brief relief before the doubt returns; and they should ease as the fear of dependency or engulfment beneath the closeness is named. I would test it by mapping the doubts against the relationship's warm and cool moments, by noting whether reassurance lastingly helps, and by checking whether addressing the fear of intimacy reduces them — refuted if the doubts track genuine problems with his wife or appear randomly rather than after closeness.",
      yieldAnchors: [
        "Intrusive doubts about whether his wife is 'the one'",
        "They surge after their closest evenings",
        "They drive constant reassurance-seeking",
      ],
      riskAnchors: [
        "Doubts follow the warmest moments specifically",
        "Reassurance gives only brief relief",
        "They ease as the fear of intimacy is named",
      ],
      defeatedBy: [
        "The doubts track real problems with his wife",
        "They appear randomly rather than after closeness",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that doubt arriving right after closeness, rather than after conflict, is doing a job: the 'what if she's not the one' question manages a fear of intimacy itself, manufacturing distance exactly when nearness becomes threatening, so the content is less about her suitability than about his own difficulty tolerating love. This is a strong claim because it predicts checkable consequences: the doubts should reliably follow the warmest moments rather than fights or distance; reassurance should bring only brief relief before the doubt returns; and they should ease as the fear of dependency or engulfment beneath the closeness is named. I would test it by mapping the doubts against the relationship's warm and cool moments, by noting whether reassurance lastingly helps, and by checking whether addressing the fear of intimacy reduces them — refuted if the doubts track genuine problems with his wife or appear randomly rather than after closeness.",
    explanation:
      "'Maybe he just shouldn't be with her' and 'doubts are random' both miss; top credit reads doubt peaking after closeness as a defense against intimacy and names a follows-the-warmest-moments test that could refute it.",
  },
];

export const section: SectionContent = {
  slug: "symptom-meaning-psychodynamic-view",
  title: "The Psychodynamic View: What the Symptom Might Be \"Saying\"",
  weekNumber: 1,
  blurb:
    "In a psychodynamic view the specific content of an obsession or compulsion is not random — the particular theme a symptom fixes on (harm, contamination, blasphemy, symmetry, doubt) often points to a feeling, wish, or fear the person can't say directly. This section is about reading that disguised communication from the evidence and naming a cheap test that could prove the reading wrong.",
  lectureTitle:
    "1.2 The Psychodynamic View: what the symptom might be saying",
  body: `# The Psychodynamic View: What the Symptom Might Be "Saying"

Two people can both have OCD and look nothing alike from the inside. One is terrified of stabbing her baby; another can't stop confessing imaginary sins; a third must even up every left with a right. The cycle — intrusion, spike, ritual, relief — is shared, but the *subject* each mind fixes on is wildly specific. The psychodynamic view starts from a simple, testable hunch: that specificity is not noise. The particular theme a symptom keeps returning to often points toward a feeling, wish, or fear the person can't say out loud. The symptom is a kind of disguised communication, and the content is the message.

## The symptom has a subject, not just a shape

It is easy to stop at the shape of a compulsion — "he checks," "she washes," "he counts" — as if the form were the whole story. But OCD almost never picks its targets at random. The new mother's intrusions are about *her own child*, not strangers. The devout man's blasphemy erupts *during prayer*, not while watching television. The grieving son can't discard *his mother's* things while his own clutter goes out fine. When you notice that a symptom has a narrow, insistent subject, you've found the part worth reading. The shape tells you it's OCD; the subject tells you what it might be about.

## Why the content is a clue, not noise

The reason content matters is that the mind tends to fix on what is most charged — what carries the strongest feeling and the least permission to be felt directly. A wish, a fear, or a hostility that can't be acknowledged doesn't disappear; it gets disguised, and the disguise often takes the shape of its opposite or its symbol. A man who feels morally "dirty" after an affair washes his hands. A woman whose world has spun out of control arranges her kitchen to the millimeter. The content is doing translation work: it converts something unspeakable into something the person can at least act on, even if they no longer recognize what it was about.

## Themes that point somewhere

Certain themes recur because certain feelings are hard to own. Harm content — images of hurting the people one loves most — tends to show up where responsibility and love are heaviest, and almost always horrifies the person rather than tempting them. Contamination and washing often literalize a moral stain: guilt about something one did or wishes one hadn't. Blasphemy and "bad thoughts" cluster around exactly the faith or value the person is forbidden to question. Symmetry and undoing rituals tend to appear where something has been broken — a loss, a death, a piece of bad luck — as if balance could be restored by hand. None of these mappings is automatic, but each is a hypothesis you can check.

## Content opposite to a wish often points away from it

The most misread symptoms are the taboo ones — violent or sexual intrusions about a child, a loved one, a sacred figure. The instinct is to treat the thought as a confession of a secret desire. The evidence usually says the reverse. When the content disgusts the person, drives them to avoid the very situation it names, and runs exactly counter to who they are, that revulsion is the data: the mind has seized on the worst imaginable thing *because* it matters most, not because it is wished for. A gentle person's violent image and a doting father's taboo thought point toward anxiety about their own goodness, not toward hidden monstrosity. Reading it the lurid way isn't bold — it's wrong, and the person's horror is what defeats it.

## Timing and trigger decode the content

The cheapest way to read a symptom's meaning is to watch *when* it fires. A doubt that strikes hardest right after a couple's closest evenings is probably about closeness, not about the partner. A confession urge that follows every flash of anger at a controlling parent is probably about that anger. A number dreaded only because it matches the date of a death is carrying the death. Trigger-specificity turns a vague theme into a sharp claim: the symptom should appear in one situation and stay quiet in others, and that "should" is something you can check this week rather than speculate about forever.

## Two ways to get it wrong

There are two opposite failures, and the course penalizes both. The first is the shrug: "intrusive thoughts are just random brain noise; the content means nothing." That gives up before looking, and it's defeated the moment a symptom turns out to track one specific subject. The second is the lurid leap: reading a horrified mother's harm-thought as a murderous wish, or a gentle activist's violent image as suppressed savagery. That overreaches past the evidence, and it's defeated by the person's revulsion and avoidance. The strong reading lives between them — committed to a specific meaning the content actually supports, and no more.

## Reading the meaning — and naming a test

A good interpretation does two things at once: it commits to what the content is saying *and* it names the cheap observation that would prove it wrong. "His washing literalizes guilt about the affair" is a real claim, because it predicts the urge should spike near reminders of the betrayal and ease once the guilt is spoken — and you can watch for that. The weak move stops at "he washes a lot" (which explains nothing) or retreats to "thoughts are random" (which explains away). The worst move is the lurid story the person's own horror defeats. The strongest reading binds the specific content in front of you and spells out the single result that would refute it.

## In the real world

Suppose a friend tells you she keeps getting a horrible image of shoving a stranger onto the train tracks, and she's so shaken she's started avoiding the platform. The dodge is "thoughts are just thoughts, ignore it" — kind, but it reads nothing. The lurid leap is "some part of you must want to" — cruel, and almost certainly false. The content move commits to a meaning: an image of harm she finds revolting, aimed at a defenseless stranger, in the one place she could act, probably expresses a fear of her own capacity to do harm, not a wish to. And it predicts: the thought should disgust rather than tempt her; it should cluster exactly where she could act and feels most responsible; and it should loosen once she can say out loud that having the thought is not the same as wanting it. Three cheap checks, each able to refute the reading. That is what taking the content seriously buys you — not a shrug at how strange minds are, and not a horror story, but a testable account of what the symptom is trying to say.`,
  homework: {
    mcq,
    hybrid,
    written,
  },
};
