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
      "A devoted new mother is tormented by intrusive images of harming her infant. She adores the baby, checks on him dozens of times a night to be sure he's breathing, and is horrified by the thoughts. The images intensify on the nights she is most exhausted and most trapped at home. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The harm thoughts likely sit at the crossroads of two real feelings — overwhelming love for the baby and an unspeakable resentment of how completely he has taken over her life — so the obsession both registers the buried anger and, through frantic checking, frantically disproves it; test whether the images spike on the most depleted, trapped nights, whether her checking aims at reassuring herself she is good rather than at any real danger, and whether the thoughts ease once she can voice ordinary resentment without horror.",
        credit: 1.0,
      },
      {
        text: "She probably has some mixed feelings about motherhood; we could talk about how she's coping.",
        credit: 0.6,
      },
      {
        text: "She seems to have frightening thoughts about her baby and checks on him a lot.",
        credit: 0.3,
      },
      {
        text: "Intrusive thoughts are just random brain noise with no relation to how she actually feels, so there's nothing beneath them to read.",
        credit: 0,
      },
    ],
    correctAnswer:
      "The harm thoughts likely sit at the crossroads of two real feelings — overwhelming love for the baby and an unspeakable resentment of how completely he has taken over her life — so the obsession both registers the buried anger and, through frantic checking, frantically disproves it; test whether the images spike on the most depleted, trapped nights, whether her checking aims at reassuring herself she is good rather than at any real danger, and whether the thoughts ease once she can voice ordinary resentment without horror.",
    explanation:
      "Full credit names both sides — devotion and buried resentment — and a spike-on-the-trapped-nights test; 'random brain noise, nothing to read' is the dodge the exhaustion-linked timing and reassurance-seeking defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "A devout churchgoer is plagued, only during prayer and worship, by violent blasphemous thoughts he finds disgusting. He prays harder and repeats cleansing phrases to cancel them, and the thoughts are worst at the moments he is supposed to feel most reverent. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He seems to get unwanted thoughts in church and prays to get rid of them.",
        credit: 0.3,
      },
      {
        text: "The blasphemy likely straddles two sides of a single conflict — a genuine faith and a forbidden doubt or anger toward what he worships that he can't allow himself to feel — so the thought erupts exactly where reverence is demanded and the repeated prayers try to undo it; test whether the thoughts come only in worship and not neutral settings, whether they peak at the most sacred moments, and whether they loosen once he can admit ordinary doubt or resentment about his faith without panic.",
        credit: 1.0,
      },
      {
        text: "Blasphemous thoughts in a believer can only mean he is secretly losing his faith and should leave the church.",
        credit: 0,
      },
      {
        text: "It's probably some inner conflict about religion; we could look into his beliefs.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The blasphemy likely straddles two sides of a single conflict — a genuine faith and a forbidden doubt or anger toward what he worships that he can't allow himself to feel — so the thought erupts exactly where reverence is demanded and the repeated prayers try to undo it; test whether the thoughts come only in worship and not neutral settings, whether they peak at the most sacred moments, and whether they loosen once he can admit ordinary doubt or resentment about his faith without panic.",
    explanation:
      "Top credit names both faith and forbidden doubt/anger and a peaks-at-the-most-sacred-moments test; 'he is secretly losing his faith' is the overreach his horror and harder praying defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "A man who privately finds his ailing, demanding father exhausting now checks his father's pill organizer ten times a day, terrified he'll accidentally cause an overdose. The checking began the month he reluctantly took over his father's care. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The checking likely straddles love and its opposite — real devotion alongside a resentment, even a wish to be free of the burden, that he cannot tolerate — so the compulsion guards against the very harm a buried part of him fears it might want, and the timing pins it to taking over care; test whether the fear centers on him causing harm rather than ordinary mistakes, whether it began precisely with the caretaking, and whether it eases once he can voice resentment of his father without guilt.",
        credit: 1.0,
      },
      {
        text: "He's probably stressed about the responsibility; we could check in on how he's managing.",
        credit: 0.6,
      },
      {
        text: "He seems anxious about his father's medication and checks it often.",
        credit: 0.3,
      },
      {
        text: "Caretakers worry about medication all the time, so there's nothing to interpret in his checking.",
        credit: 0,
      },
    ],
    correctAnswer:
      "The checking likely straddles love and its opposite — real devotion alongside a resentment, even a wish to be free of the burden, that he cannot tolerate — so the compulsion guards against the very harm a buried part of him fears it might want, and the timing pins it to taking over care; test whether the fear centers on him causing harm rather than ordinary mistakes, whether it began precisely with the caretaking, and whether it eases once he can voice resentment of his father without guilt.",
    explanation:
      "Full credit names both devotion and resented burden and a began-with-the-caretaking test; 'caretakers just worry' is the dodge the harm-specific fear and exact timing defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "Two weeks before her wedding, a woman is consumed by the doubt 'do I really love him?' She mentally reviews her feelings hundreds of times a day for proof, feels momentary relief when she finds some, then doubts again. She has no specific complaint about her fiancé. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The doubt simply means she shouldn't marry him; her gut is telling her the truth.",
        credit: 0,
      },
      {
        text: "She seems to keep questioning whether she loves him.",
        credit: 0.3,
      },
      {
        text: "The relentless doubt likely expresses an ambivalence she can't hold consciously — a real wish to marry colliding with an equally real fear of commitment or loss of freedom — so the question stands in for both sides at once, and the checking-for-proof can never settle because settling would mean choosing; test whether the doubt attaches to no concrete fault, whether reassurance brings only momentary relief before the loop restarts, and whether it eases once she can own both the wish to marry and the fear of it.",
        credit: 1.0,
      },
      {
        text: "She might be feeling ambivalent about the wedding; we could talk it through.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The relentless doubt likely expresses an ambivalence she can't hold consciously — a real wish to marry colliding with an equally real fear of commitment or loss of freedom — so the question stands in for both sides at once, and the checking-for-proof can never settle because settling would mean choosing; test whether the doubt attaches to no concrete fault, whether reassurance brings only momentary relief before the loop restarts, and whether it eases once she can own both the wish to marry and the fear of it.",
    explanation:
      "Top credit names both the wish to marry and the fear of it and a reassurance-only-briefly-helps test; 'her gut says don't marry him' is the overreach the absence of any real complaint and the endless loop defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "A careful, gentle man compulsively circles back while driving, sure he has hit a pedestrian he didn't notice. The urge is strongest on days he has felt irritated or short-tempered with people, and he has never actually had an accident. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He seems worried about hitting someone and keeps retracing his route.",
        credit: 0.3,
      },
      {
        text: "It's probably linked to his stress levels; we could keep an eye on it.",
        credit: 0.6,
      },
      {
        text: "The checking likely straddles his gentleness and a flash of aggression he won't own — on the days anger stirs, the dread that he has harmed someone gives the forbidden impulse a shape and the retracing magically undoes it; test whether the urge spikes specifically after he's felt irritable, whether the feared 'victim' is always vague and unconfirmed, and whether it eases once he can acknowledge ordinary anger without alarm.",
        credit: 1.0,
      },
      {
        text: "Anyone who drives a lot will sometimes worry they hit someone, so the checking means nothing about him.",
        credit: 0,
      },
    ],
    correctAnswer:
      "The checking likely straddles his gentleness and a flash of aggression he won't own — on the days anger stirs, the dread that he has harmed someone gives the forbidden impulse a shape and the retracing magically undoes it; test whether the urge spikes specifically after he's felt irritable, whether the feared 'victim' is always vague and unconfirmed, and whether it eases once he can acknowledge ordinary anger without alarm.",
    explanation:
      "Full credit names both his gentleness and disowned anger and an after-irritability test; 'anyone worries while driving' is the dodge the anger-linked timing and never-real-accident pattern defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "A woman cannot stop reassuring herself that she 'completely adores' her wildly successful younger sister. She compulsively performs little kindnesses for her and feels intense anxiety if she ever has a critical thought, which she rushes to cancel. The anxiety is worst right after the sister achieves something new. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The compulsive adoration likely straddles two feelings — genuine love and an envy or rivalry she finds unbearable — so the over-the-top kindness and thought-canceling work to disprove a hostility that surges precisely when the sister succeeds; test whether her anxiety peaks right after the sister's wins, whether critical thoughts trigger urgent undoing rather than passing, and whether the compulsions ease once she can admit ordinary envy without panic.",
        credit: 1.0,
      },
      {
        text: "She seems to work hard at being kind to her sister.",
        credit: 0.3,
      },
      {
        text: "Some people are just devoted to their siblings, so there's nothing underneath her kindness to examine.",
        credit: 0,
      },
      {
        text: "She might have some rivalry with her sister; we could explore their relationship.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The compulsive adoration likely straddles two feelings — genuine love and an envy or rivalry she finds unbearable — so the over-the-top kindness and thought-canceling work to disprove a hostility that surges precisely when the sister succeeds; test whether her anxiety peaks right after the sister's wins, whether critical thoughts trigger urgent undoing rather than passing, and whether the compulsions ease once she can admit ordinary envy without panic.",
    explanation:
      "Top credit names both love and unbearable envy and a peaks-after-her-wins test; 'some people are just devoted' is the dodge the success-timed anxiety and frantic undoing defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "A man who proposed three months ago develops a contamination fear focused only on his fiancée's belongings — her toothbrush, her side of the bed, her clothes — which he can't bring himself to touch, though public restrooms and money don't bother him at all. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He probably has some unease about the engagement; we could talk about it.",
        credit: 0.6,
      },
      {
        text: "Contamination fears are biological and attach to things at random, so the focus on her things is meaningless.",
        credit: 0,
      },
      {
        text: "The disgust aimed only at her things likely straddles love and a recoil from merging his life with hers — a closeness he wants and also dreads — so the contamination marks the very intimacy the engagement forces while keeping it literally untouchable; test whether the fear spares neutral 'dirty' things and clings to her belongings specifically, whether it began with the engagement, and whether it eases once he can voice ambivalence about the marriage.",
        credit: 1.0,
      },
      {
        text: "He seems to feel his fiancée's things are dirty.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The disgust aimed only at her things likely straddles love and a recoil from merging his life with hers — a closeness he wants and also dreads — so the contamination marks the very intimacy the engagement forces while keeping it literally untouchable; test whether the fear spares neutral 'dirty' things and clings to her belongings specifically, whether it began with the engagement, and whether it eases once he can voice ambivalence about the marriage.",
    explanation:
      "Full credit names both love and dread of merging and a spares-public-restrooms-but-not-her-things test; 'contamination is random' is the dodge the fiancée-specific focus and engagement timing defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "A woman with a controlling mother she describes as 'my best friend' is tormented by intrusive images of her mother dying in an accident, and calls her many times a day to confirm she's safe. The images surge after any phone call in which her mother has overruled or criticized her. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She seems frightened her mother will die and calls to check on her.",
        credit: 0.3,
      },
      {
        text: "The death images likely straddle love and a buried resentment of her mother's control — a fleeting wish to be rid of her that horrifies the devoted daughter — so the obsession gives the forbidden wish a shape and the constant calling undoes it; test whether the images surge right after her mother dominates or criticizes her, whether the calling is driven by guilt rather than realistic danger, and whether the obsession eases once she can voice anger at her mother's control without panic.",
        credit: 1.0,
      },
      {
        text: "There may be some tension with her mother; we could look at their relationship.",
        credit: 0.6,
      },
      {
        text: "Worrying about an aging parent's death is completely normal, so the images carry no hidden meaning.",
        credit: 0,
      },
    ],
    correctAnswer:
      "The death images likely straddle love and a buried resentment of her mother's control — a fleeting wish to be rid of her that horrifies the devoted daughter — so the obsession gives the forbidden wish a shape and the constant calling undoes it; test whether the images surge right after her mother dominates or criticizes her, whether the calling is driven by guilt rather than realistic danger, and whether the obsession eases once she can voice anger at her mother's control without panic.",
    explanation:
      "Top credit names both devotion and resented control and a surges-after-she's-overruled test; 'worrying about a parent is normal' is the dodge the criticism-linked surges and guilt-driven calling defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "A man who calls his boss 'the best mentor I've ever had' is plagued by intrusive images of stabbing him during meetings, which leave him sweating and ashamed. The images are worst right after the boss takes credit for his work or overlooks him. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Violent images mean he is dangerous and should be removed from the workplace before he acts.",
        credit: 0,
      },
      {
        text: "He probably has some buried frustration at work; we could discuss it.",
        credit: 0.6,
      },
      {
        text: "He seems to get violent thoughts about his boss.",
        credit: 0.3,
      },
      {
        text: "The violent images likely straddle real admiration and a rivalrous rage he can't admit toward the man he idealizes — so the obsession carries the forbidden anger that surges exactly when he's slighted, while his shame and idealizing keep it disowned; test whether the images spike right after the boss takes credit or overlooks him, whether they are ego-dystonic rather than wished-for, and whether they ease once he can acknowledge ordinary resentment of his mentor without horror.",
        credit: 1.0,
      },
    ],
    correctAnswer:
      "The violent images likely straddle real admiration and a rivalrous rage he can't admit toward the man he idealizes — so the obsession carries the forbidden anger that surges exactly when he's slighted, while his shame and idealizing keep it disowned; test whether the images spike right after the boss takes credit or overlooks him, whether they are ego-dystonic rather than wished-for, and whether they ease once he can acknowledge ordinary resentment of his mentor without horror.",
    explanation:
      "Full credit names both admiration and disowned rivalry and a spikes-after-being-slighted test; 'he is dangerous and must be removed' is the overreach his shame and the ego-dystonic, slight-linked timing defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "A woman repeatedly confesses tiny 'betrayals' to her partner — a stranger she found attractive, a half-formed unkind thought — and begs reassurance that she's not a bad person. The confessing spikes whenever she has felt annoyed with him but hasn't said so. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She seems to confess small things and seek reassurance a lot.",
        credit: 0.3,
      },
      {
        text: "She is clearly hiding a real affair and the confessions are her guilt leaking out.",
        credit: 0,
      },
      {
        text: "The confessing likely straddles love and an ordinary resentment she forbids herself — when annoyance she won't voice builds, she converts it into 'sins' and seeks absolution, discharging guilt for a hostility she can't name; test whether the confessions spike after unspoken irritation with him, whether the 'betrayals' are trivial and the relief brief, and whether the urge fades once she can voice everyday annoyance directly.",
        credit: 1.0,
      },
      {
        text: "She might feel guilty about something; we could talk about her relationship.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The confessing likely straddles love and an ordinary resentment she forbids herself — when annoyance she won't voice builds, she converts it into 'sins' and seeks absolution, discharging guilt for a hostility she can't name; test whether the confessions spike after unspoken irritation with him, whether the 'betrayals' are trivial and the relief brief, and whether the urge fades once she can voice everyday annoyance directly.",
    explanation:
      "Top credit names both love and forbidden resentment and an after-unspoken-irritation test; 'she's hiding a real affair' is the overreach the triviality of the 'sins' and the annoyance-linked timing defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "A loving father is tormented by intrusive sexual thoughts about his young children, which fill him with disgust and dread. He has begun avoiding bathing or hugging them, and the thoughts are worst in the most tender, affectionate moments. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He probably has some anxiety around his kids; we could monitor it.",
        credit: 0.6,
      },
      {
        text: "The taboo thoughts almost certainly straddle his deep love and the very revulsion that defines him — the obsession fastens onto what he holds most sacred precisely because any such impulse is unthinkable to him, so tenderness triggers the intrusive opposite and avoidance tries to keep him 'safe'; test whether the thoughts are ego-dystonic and horrifying rather than wished-for, whether they intrude most in affectionate moments, and whether they ease as he learns the thought is not a wish.",
        credit: 1.0,
      },
      {
        text: "He seems to have disturbing thoughts about his children and avoids contact.",
        credit: 0.3,
      },
      {
        text: "Having such thoughts proves he is a danger to his children and must be kept away from them.",
        credit: 0,
      },
    ],
    correctAnswer:
      "The taboo thoughts almost certainly straddle his deep love and the very revulsion that defines him — the obsession fastens onto what he holds most sacred precisely because any such impulse is unthinkable to him, so tenderness triggers the intrusive opposite and avoidance tries to keep him 'safe'; test whether the thoughts are ego-dystonic and horrifying rather than wished-for, whether they intrude most in affectionate moments, and whether they ease as he learns the thought is not a wish.",
    explanation:
      "Full credit reads the taboo thought as fastening onto what he holds sacred and names an ego-dystonic, worst-in-tender-moments test; 'he is a danger and must be kept away' is the overreach his disgust and the affection-linked timing defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "A woman lovingly nursing her terminally ill husband begins compulsively checking the front door is locked dozens of times each night after he falls asleep, fearing an intruder, though their neighborhood is safe and nothing has happened. The checking began as his prognosis worsened. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The lock-checking likely straddles love and an unbearable wish for the ordeal to end — as a buried longing to escape or to 'let him go' stirs, it is recast as an outside threat she can guard against, keeping the conflict out of awareness; test whether the checking intensified as his prognosis worsened, whether the feared danger is realistically absent, and whether it eases once she can voice exhaustion and the wish for relief without guilt.",
        credit: 1.0,
      },
      {
        text: "She seems to check the locks a lot at night.",
        credit: 0.3,
      },
      {
        text: "She's probably under enormous strain; we could support her through it.",
        credit: 0.6,
      },
      {
        text: "Checking locks is sensible caution, so there's nothing about her situation to read into it.",
        credit: 0,
      },
    ],
    correctAnswer:
      "The lock-checking likely straddles love and an unbearable wish for the ordeal to end — as a buried longing to escape or to 'let him go' stirs, it is recast as an outside threat she can guard against, keeping the conflict out of awareness; test whether the checking intensified as his prognosis worsened, whether the feared danger is realistically absent, and whether it eases once she can voice exhaustion and the wish for relief without guilt.",
    explanation:
      "Top credit names both devotion and the forbidden wish for relief and a worsened-with-his-prognosis test; 'checking locks is sensible' is the dodge the safe neighborhood and grief-linked timing defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "A man who openly cannot stand his critical mother finds that whenever a flash of anger at her arises, he must immediately repeat 'I hope she's healthy and happy' exactly four times or he feels something terrible will happen to her. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He's just superstitious, and superstitions don't mean anything.",
        credit: 0,
      },
      {
        text: "He seems to repeat a phrase after getting angry at his mother.",
        credit: 0.3,
      },
      {
        text: "The ritual likely straddles hostility and love — the four protective repetitions undo a hostile, even death-tinged wish toward his mother that his anger throws up, magically cancelling the forbidden impulse so he need not own it; test whether the phrase is triggered specifically by flashes of anger at her, whether skipping it brings dread of harming her, and whether the urge fades once he can hold anger at his mother without feeling it could kill her.",
        credit: 1.0,
      },
      {
        text: "He might have unresolved feelings about his mother; we could explore them.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The ritual likely straddles hostility and love — the four protective repetitions undo a hostile, even death-tinged wish toward his mother that his anger throws up, magically cancelling the forbidden impulse so he need not own it; test whether the phrase is triggered specifically by flashes of anger at her, whether skipping it brings dread of harming her, and whether the urge fades once he can hold anger at his mother without feeling it could kill her.",
    explanation:
      "Full credit names both hostility and love bound by an undoing ritual and a triggered-by-anger test; 'he's just superstitious' is the dodge the anger-specific trigger and harm-dread defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "An engaged man spends hours comparing his fiancée to other women and to past partners, compiling mental pro-and-con lists to decide if she's 'objectively the best choice.' He feels brief calm after each tally, then must redo it. He can name nothing actually wrong. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He may have cold feet; we could talk about the engagement.",
        credit: 0.6,
      },
      {
        text: "He seems to keep comparing his fiancée to other people.",
        credit: 0.3,
      },
      {
        text: "The endless tallying likely expresses an ambivalence he can't sit with — a real commitment colliding with a fear of foreclosing all other possibilities — so the comparison both keeps every option symbolically open and postpones the choice that would end the conflict; test whether the lists attach to no genuine fault, whether each 'verdict' brings only brief calm before restarting, and whether the urge eases once he can own both wanting her and grieving the roads not taken.",
        credit: 1.0,
      },
      {
        text: "If he has to keep comparing her, she's plainly the wrong woman for him.",
        credit: 0,
      },
    ],
    correctAnswer:
      "The endless tallying likely expresses an ambivalence he can't sit with — a real commitment colliding with a fear of foreclosing all other possibilities — so the comparison both keeps every option symbolically open and postpones the choice that would end the conflict; test whether the lists attach to no genuine fault, whether each 'verdict' brings only brief calm before restarting, and whether the urge eases once he can own both wanting her and grieving the roads not taken.",
    explanation:
      "Top credit names both commitment and fear of foreclosing options and a brief-calm-then-restart test; 'she's plainly wrong for him' is the overreach the absence of any real fault and the endless loop defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "A man recently promoted over his close friend and colleague becomes obsessed with the fear that he'll blurt out something cruel to him, and rehearses 'safe' sentences before they speak. The fear is sharpest in moments his friend seems hurt or envious about the promotion. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He seems afraid he'll say something mean to his friend.",
        credit: 0.3,
      },
      {
        text: "Worrying about saying the wrong thing is universal, so there's nothing particular to read in his case.",
        credit: 0,
      },
      {
        text: "The fear likely straddles real friendship and a competitive triumph he can't admit — winning the role over his friend stirs a hostility or gloating the loyal part of him forbids, so the obsession dreads as an accident what a buried part might wish to say, and rehearsing 'safe' lines undoes it; test whether the fear sharpens when the friend seems hurt or envious, whether it began with the promotion, and whether it eases once he can own ordinary rivalry without horror.",
        credit: 1.0,
      },
      {
        text: "There may be some awkwardness about the promotion; we could discuss it.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The fear likely straddles real friendship and a competitive triumph he can't admit — winning the role over his friend stirs a hostility or gloating the loyal part of him forbids, so the obsession dreads as an accident what a buried part might wish to say, and rehearsing 'safe' lines undoes it; test whether the fear sharpens when the friend seems hurt or envious, whether it began with the promotion, and whether it eases once he can own ordinary rivalry without horror.",
    explanation:
      "Full credit names both friendship and disowned triumph and a sharpens-when-the-friend-seems-hurt test; 'worrying is universal' is the dodge the rivalry-linked timing and promotion onset defeat.",
  },
];

const hybrid: HomeworkItem[] = [
  {
    itemType: "hybrid",
    prompt:
      "A woman in her third pregnancy, who very much wanted this child, is gripped by intrusive images of throwing the baby down the stairs once it's born. She is horrified and has started avoiding the staircase. The images are worst when she dwells on how this child will end her last shred of personal freedom. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The images likely straddle love for the wanted child and a resentment of the freedom it will cost her that she cannot allow — the obsession gives the forbidden feeling a shape while her horror and stair-avoidance frantically disprove it; test whether the images spike when she dwells on lost freedom, whether the avoidance aims at reassurance rather than real danger, and whether they ease once she can voice ambivalence about the baby without panic.",
        credit: 1.0,
      },
      {
        text: "She probably has some mixed feelings about the pregnancy; we could check in.",
        credit: 0.6,
      },
      {
        text: "She seems to have frightening images about the baby and avoids the stairs.",
        credit: 0.3,
      },
      {
        text: "Intrusive harm images are meaningless misfires of the brain and say nothing about her feelings.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'the images carry forbidden resentment of the baby' lead from the rival 'these are random, meaningless intrusive thoughts,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: note whether the images reliably surge when she dwells on the freedom the baby will cost her and quiet otherwise — content that tracks that specific resentment points to a disguised conflict rather than random noise. My lead is refuted if the images come at random moments with no link to thoughts of lost freedom and no relief when ambivalence is named.",
      yieldAnchors: [
        "She wanted this child",
        "Intrusive images of harming the baby",
        "Images worst when she dwells on lost freedom",
      ],
      riskAnchors: [
        "Images spike with thoughts of lost freedom",
        "Stair-avoidance seeks reassurance, not safety",
        "They ease once ambivalence is voiced",
      ],
      defeatedBy: [
        "The images occur at random with no trigger",
        "She feels only uncomplicated joy about the pregnancy",
      ],
    },
    correctAnswer:
      "The images likely straddle love for the wanted child and a resentment of the freedom it will cost her that she cannot allow — the obsession gives the forbidden feeling a shape while her horror and stair-avoidance frantically disprove it; test whether the images spike when she dwells on lost freedom, whether the avoidance aims at reassurance rather than real danger, and whether they ease once she can voice ambivalence about the baby without panic.",
    explanation:
      "Full credit names both love and forbidden resentment and is paired with a do-they-track-thoughts-of-lost-freedom test that names its refutation; 'meaningless misfires' is the dodge the freedom-linked timing defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A newlywed woman must arrange the couple's shared shelves until they feel 'exactly right,' redoing them for an hour, but only the shelves that hold both her and her husband's things — her own private drawers don't trigger her. The ritual began after the wedding. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She seems to spend a lot of time arranging the shared shelves.",
        credit: 0.3,
      },
      {
        text: "'Just right' urges are hardwired quirks, so the focus on the shared shelves means nothing.",
        credit: 0,
      },
      {
        text: "The ritual fixed on the shared shelves likely straddles a wish to merge with her husband and a fear of losing herself in him — the not-yet-'right' arrangement enacts an unsettled boundary she can't consciously hold, which is why only the combined possessions, never her private ones, set it off; test whether the urge spares her solo belongings, whether it began with the marriage, and whether it eases once she can voice both the wish for closeness and the fear of being subsumed.",
        credit: 1.0,
      },
      {
        text: "She might be adjusting to married life; we could talk about it.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'the ritual straddles merging and losing herself' lead from the rival 'she is simply a tidy perfectionist,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: compare her reaction to the shared shelves against her own private drawers — a 'just right' urge that fires only on the combined possessions points to a conflict about merging, not general tidiness. My lead is refuted if she needs everything she owns arranged equally, including her solo belongings, which would fit ordinary perfectionism.",
      yieldAnchors: [
        "The ritual targets only shared shelves",
        "Her private drawers don't trigger her",
        "It began after the wedding",
      ],
      riskAnchors: [
        "The urge spares her solo belongings",
        "It began with the marriage",
        "It eases once the merging conflict is voiced",
      ],
      defeatedBy: [
        "She must arrange all her possessions equally",
        "The urge predates the marriage",
      ],
    },
    correctAnswer:
      "The ritual fixed on the shared shelves likely straddles a wish to merge with her husband and a fear of losing herself in him — the not-yet-'right' arrangement enacts an unsettled boundary she can't consciously hold, which is why only the combined possessions, never her private ones, set it off; test whether the urge spares her solo belongings, whether it began with the marriage, and whether it eases once she can voice both the wish for closeness and the fear of being subsumed.",
    explanation:
      "Full credit names both the wish to merge and the fear of losing herself and is paired with a shared-vs-private test that names its refutation; 'hardwired quirk' is the dodge the shared-shelves-only focus defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A man who privately hates his job but can't afford to quit compulsively returns to the office at night to check he locked up and didn't leave anything that could get him fired. The checking is worst after days he fantasized about walking out. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He's probably stressed about work; we could explore his job.",
        credit: 0.6,
      },
      {
        text: "The checking likely straddles a need to keep the job and a wish to be rid of it — on the days the urge to walk out flares, the dread that he's done something fireable both expresses and guards against the forbidden wish to get himself let go; test whether the checking spikes after he's fantasized about quitting, whether the feared lapse never actually occurs, and whether it eases once he can own wanting to leave without acting on it.",
        credit: 1.0,
      },
      {
        text: "He seems to keep going back to check the office.",
        credit: 0.3,
      },
      {
        text: "Plenty of people double-check they locked up, so there's nothing to read into it.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'the checking straddles needing and wanting to lose the job' lead from the rival 'he's just a conscientious employee,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: track whether the night checks spike specifically after days he's fantasized about walking out — checking that follows the quitting urge points to a disguised conflict, not plain conscientiousness. My lead is refuted if the checking is steady regardless of those fantasies and he has actually left things unlocked, which would fit realistic caution.",
      yieldAnchors: [
        "He hates the job but can't quit",
        "He checks he didn't do something fireable",
        "Worst after fantasizing about walking out",
      ],
      riskAnchors: [
        "Checking spikes after quitting fantasies",
        "The feared lapse never actually occurs",
        "It eases once the wish to leave is owned",
      ],
      defeatedBy: [
        "The checking is unrelated to quitting fantasies",
        "He has genuinely left the office unsecured",
      ],
    },
    correctAnswer:
      "The checking likely straddles a need to keep the job and a wish to be rid of it — on the days the urge to walk out flares, the dread that he's done something fireable both expresses and guards against the forbidden wish to get himself let go; test whether the checking spikes after he's fantasized about quitting, whether the feared lapse never actually occurs, and whether it eases once he can own wanting to leave without acting on it.",
    explanation:
      "Full credit names both needing the job and wishing to lose it and is paired with a after-quitting-fantasies test that names its refutation; 'people double-check' is the dodge the fantasy-linked timing defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A new mother repeatedly asks her partner and her own mother, 'Do you think I really love the baby? Am I bonding right?' and scours her feelings for proof. The questioning spikes on days she's felt drained and wished, for a moment, to be child-free again. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She seems to keep asking whether she loves her baby.",
        credit: 0.3,
      },
      {
        text: "The reassurance-seeking likely straddles real love and a forbidden wish to have her old life back — when ordinary maternal resentment surfaces, she can't hold it beside her love, so she converts it into doubt about whether she loves the baby at all and seeks proof; test whether the questioning spikes after she's wished to be child-free, whether reassurance brings only brief relief, and whether it eases once she can own ambivalence without it meaning she's a bad mother.",
        credit: 1.0,
      },
      {
        text: "Her doubt likely means she truly hasn't bonded and the baby is at risk.",
        credit: 0,
      },
      {
        text: "She might be struggling with new motherhood; we could offer support.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'the doubt converts forbidden resentment into a love-question' lead from the rival 'she has genuinely failed to bond with the baby,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: check whether the 'do I love her?' spikes specifically after moments she's wished for her old child-free life and is soothed only briefly by reassurance — doubt that tracks those moments points to disguised ambivalence, not a true failure to bond. My lead is refuted if she shows flat indifference and no warmth toward the baby across the board, which would fit a real bonding problem.",
      yieldAnchors: [
        "She repeatedly seeks reassurance about loving the baby",
        "Spikes after wishing to be child-free",
        "She scours her feelings for proof",
      ],
      riskAnchors: [
        "Questioning spikes after child-free wishes",
        "Reassurance helps only briefly",
        "It eases once ambivalence is owned",
      ],
      defeatedBy: [
        "She is flatly indifferent to the baby",
        "Reassurance permanently resolves the doubt",
      ],
    },
    correctAnswer:
      "The reassurance-seeking likely straddles real love and a forbidden wish to have her old life back — when ordinary maternal resentment surfaces, she can't hold it beside her love, so she converts it into doubt about whether she loves the baby at all and seeks proof; test whether the questioning spikes after she's wished to be child-free, whether reassurance brings only brief relief, and whether it eases once she can own ambivalence without it meaning she's a bad mother.",
    explanation:
      "Full credit names both love and the forbidden wish for her old life and is paired with an after-child-free-wishes test that names its refutation; 'she truly hasn't bonded' is the overreach the brief-relief loop defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "Since his domineering mother died, a man feels compelled to wash thoroughly after handling any object she left him, and avoids her boxed-up belongings entirely, though he says he 'misses her terribly.' The urge is strongest when he recalls a specific way she controlled him. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Grief makes people behave oddly, so there's no particular meaning in his washing.",
        credit: 0,
      },
      {
        text: "He's probably grieving in a complicated way; we could talk about his loss.",
        credit: 0.6,
      },
      {
        text: "The washing likely straddles love and grief on one side and a buried anger at her control on the other — handling her things stirs the resentment he can't square with mourning, and washing 'cleanses' the forbidden feeling while avoidance keeps it at bay; test whether the urge surges when he recalls her controlling him, whether it attaches only to her objects, and whether it eases once he can hold both grief and anger at his mother at once.",
        credit: 1.0,
      },
      {
        text: "He seems to wash after touching his mother's things.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'the washing cleanses anger that collides with his grief' lead from the rival 'this is just ordinary, messy grieving,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: note whether the urge to wash surges specifically when he recalls her controlling him and clings only to her objects — a contamination feeling tied to those memories points to disowned anger braided into grief. My lead is refuted if the washing is generalized, unrelated to memories of her control, and untouched by acknowledging anger at her.",
      yieldAnchors: [
        "He washes after handling her objects",
        "He avoids her belongings yet says he misses her",
        "Urge strongest recalling her control",
      ],
      riskAnchors: [
        "Urge surges with memories of her control",
        "It attaches only to her objects",
        "It eases once grief and anger coexist",
      ],
      defeatedBy: [
        "The washing is generalized and memory-independent",
        "He feels only uncomplicated grief",
      ],
    },
    correctAnswer:
      "The washing likely straddles love and grief on one side and a buried anger at her control on the other — handling her things stirs the resentment he can't square with mourning, and washing 'cleanses' the forbidden feeling while avoidance keeps it at bay; test whether the urge surges when he recalls her controlling him, whether it attaches only to her objects, and whether it eases once he can hold both grief and anger at his mother at once.",
    explanation:
      "Full credit names both grief and disowned anger and is paired with a surges-with-memories-of-control test that names its refutation; 'grief makes people odd' is the dodge the control-memory timing defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A faithful woman is tormented by intrusive thoughts that she'll suddenly cheat on her devoted husband, and compulsively confesses every fleeting attraction to him. The thoughts surge after evenings she's felt smothered by how much he needs her. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She might have some doubts about the relationship; we could explore them.",
        credit: 0.6,
      },
      {
        text: "She seems to fear cheating and keeps confessing attractions.",
        credit: 0.3,
      },
      {
        text: "The intrusive thoughts likely straddle her love and a forbidden wish for distance or freedom — when his neediness feels smothering, the disowned urge to escape is recast as a dreaded impulse to betray him, and confessing both discharges the guilt and reassures her she won't; test whether the thoughts surge after she's felt smothered, whether the attractions are trivial and the relief brief, and whether they ease once she can voice a wish for space without it meaning betrayal.",
        credit: 1.0,
      },
      {
        text: "These thoughts mean she actually wants to cheat and is on the verge of an affair.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'the cheating thoughts recast a forbidden wish for distance' lead from the rival 'she genuinely wants to have an affair,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: check whether the intrusive thoughts surge right after she's felt smothered by his neediness and bring dread rather than desire — thoughts tied to those moments point to a disguised wish for space, not a real intent to cheat. My lead is refuted if she actually seeks out affairs and the thoughts come with wish rather than horror.",
      yieldAnchors: [
        "She fears she'll cheat and confesses attractions",
        "Thoughts surge after feeling smothered",
        "The attractions are fleeting",
      ],
      riskAnchors: [
        "Thoughts surge after she feels smothered",
        "Confession relief is brief",
        "They ease once a wish for space is voiced",
      ],
      defeatedBy: [
        "She actively pursues affairs",
        "The thoughts come with desire, not dread",
      ],
    },
    correctAnswer:
      "The intrusive thoughts likely straddle her love and a forbidden wish for distance or freedom — when his neediness feels smothering, the disowned urge to escape is recast as a dreaded impulse to betray him, and confessing both discharges the guilt and reassures her she won't; test whether the thoughts surge after she's felt smothered, whether the attractions are trivial and the relief brief, and whether they ease once she can voice a wish for space without it meaning betrayal.",
    explanation:
      "Top credit names both love and a forbidden wish for distance and is paired with an after-feeling-smothered test that names its refutation; 'she wants an affair' is the overreach the dread and brief relief defeat.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A man whose younger brother just had a baby — something he longs for and can't have — develops a compulsion to count to a 'safe' number whenever he pictures something happening to the newborn, sure that not counting will cause harm. The urge peaks right after family gatherings celebrating the baby. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He seems to count to keep the baby safe.",
        credit: 0.3,
      },
      {
        text: "Counting rituals are just meaningless tics, so they tell us nothing about him.",
        credit: 0,
      },
      {
        text: "The counting likely straddles love for the baby and an envy he finds monstrous — a flash of ill-will toward the child who has what he can't, which the ritual magically 'undoes' to keep him from being the cause; test whether the urge peaks right after celebrations of the baby, whether skipping the count brings dread of harming the child, and whether it eases once he can own grief and envy about his own childlessness without horror.",
        credit: 1.0,
      },
      {
        text: "He may have feelings about not having a child; we could discuss it.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'the counting undoes envious ill-will toward the baby' lead from the rival 'it's a meaningless counting tic,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: note whether the counting urge peaks right after gatherings that celebrate the baby and whether skipping it brings dread of harming the child — a ritual tied to those moments points to undone envy, not a random tic. My lead is refuted if the counting fires across unrelated situations with no link to the baby or to his own childlessness.",
      yieldAnchors: [
        "He longs for a child he can't have",
        "Counts to keep the brother's baby safe",
        "Urge peaks after celebrations of the baby",
      ],
      riskAnchors: [
        "Urge peaks after the baby is celebrated",
        "Skipping the count brings harm-dread",
        "It eases once envy and grief are owned",
      ],
      defeatedBy: [
        "The counting is unrelated to the baby",
        "He feels only uncomplicated joy about the birth",
      ],
    },
    correctAnswer:
      "The counting likely straddles love for the baby and an envy he finds monstrous — a flash of ill-will toward the child who has what he can't, which the ritual magically 'undoes' to keep him from being the cause; test whether the urge peaks right after celebrations of the baby, whether skipping the count brings dread of harming the child, and whether it eases once he can own grief and envy about his own childlessness without horror.",
    explanation:
      "Full credit names both love and monstrous-feeling envy and is paired with a peaks-after-celebrations test that names its refutation; 'meaningless tic' is the dodge the celebration-linked timing defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "After a car accident left her disabled sister dependent on her, a woman who gave up her own plans to become full-time caregiver now checks obsessively that she hasn't accidentally put something harmful in her sister's food. The checking is worst on days she's felt her whole life has been swallowed by the role. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She's probably overwhelmed by caregiving; we could get her support.",
        credit: 0.6,
      },
      {
        text: "The checking likely straddles devotion and a resentment of the life she's lost that she can't allow — when the sense of being swallowed peaks, a buried wish to be free is recast as a fear that she might harm her sister, and checking both expresses and disproves it; test whether the urge worsens on the days she feels most trapped, whether the feared harm never actually happens, and whether it eases once she can voice resentment of the role without guilt.",
        credit: 1.0,
      },
      {
        text: "She seems to keep checking her sister's food.",
        credit: 0.3,
      },
      {
        text: "Caregivers naturally worry about safety, so the checking has no deeper meaning.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'the checking straddles devotion and resentment of the lost life' lead from the rival 'she is just a careful, anxious caregiver,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: track whether the harm-checking worsens specifically on the days she feels her life has been swallowed by the role — checking that rises with that feeling points to disowned resentment, not ordinary caution. My lead is refuted if the checking is steady regardless of how trapped she feels and there have been real near-misses with her sister's food.",
      yieldAnchors: [
        "She gave up her plans to be caregiver",
        "Checks she hasn't harmed her sister's food",
        "Worst when she feels her life is swallowed",
      ],
      riskAnchors: [
        "Checking worsens on most-trapped days",
        "The feared harm never happens",
        "It eases once resentment is voiced",
      ],
      defeatedBy: [
        "The checking is unrelated to feeling trapped",
        "There have been real near-misses with the food",
      ],
    },
    correctAnswer:
      "The checking likely straddles devotion and a resentment of the life she's lost that she can't allow — when the sense of being swallowed peaks, a buried wish to be free is recast as a fear that she might harm her sister, and checking both expresses and disproves it; test whether the urge worsens on the days she feels most trapped, whether the feared harm never actually happens, and whether it eases once she can voice resentment of the role without guilt.",
    explanation:
      "Full credit names both devotion and resented sacrifice and is paired with a worse-on-trapped-days test that names its refutation; 'caregivers naturally worry' is the dodge the trapped-feeling timing defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A man who is privately unsure about his relationship cannot stop rereading and rewriting a single text to his girlfriend, terrified one wrong word will 'ruin everything.' The compulsion is worst on days he has quietly thought about ending things. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He clearly just wants out and should break up with her already.",
        credit: 0,
      },
      {
        text: "He seems to obsess over wording his texts.",
        credit: 0.3,
      },
      {
        text: "The rewriting likely straddles a wish to keep her and a wish to leave that he can't reconcile — fixing the 'perfect' message lets him avoid both committing fully and ending it, so the doubt about wording stands in for the larger ambivalence he won't face; test whether the rewriting spikes on days he's thought about leaving, whether no version ever feels final, and whether it eases once he can own both staying and wanting out.",
        credit: 1.0,
      },
      {
        text: "He might be anxious about the relationship; we could talk it over.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'the text-rewriting stands in for staying-versus-leaving ambivalence' lead from the rival 'he's simply an anxious communicator,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: check whether the rewriting spikes specifically on days he's privately considered ending the relationship and whether no draft ever feels final — wording-obsession tied to those days points to displaced ambivalence, not general communication anxiety. My lead is refuted if he agonizes over wording with everyone, unrelated to thoughts of leaving her.",
      yieldAnchors: [
        "He is privately unsure about the relationship",
        "He endlessly rewrites one text",
        "Worst on days he's thought about ending it",
      ],
      riskAnchors: [
        "Rewriting spikes after thoughts of leaving",
        "No version ever feels final",
        "It eases once he owns both staying and leaving",
      ],
      defeatedBy: [
        "He obsesses over wording with everyone",
        "The rewriting is unrelated to thoughts of leaving",
      ],
    },
    correctAnswer:
      "The rewriting likely straddles a wish to keep her and a wish to leave that he can't reconcile — fixing the 'perfect' message lets him avoid both committing fully and ending it, so the doubt about wording stands in for the larger ambivalence he won't face; test whether the rewriting spikes on days he's thought about leaving, whether no version ever feels final, and whether it eases once he can own both staying and wanting out.",
    explanation:
      "Full credit names both the wish to stay and the wish to leave and is paired with a spikes-after-thoughts-of-leaving test that names its refutation; 'he just wants out' is the overreach the never-final loop defeats.",
  },
];

const written: HomeworkItem[] = [
  {
    itemType: "written",
    prompt:
      "A woman who tried for years to conceive is, since her son's birth, flooded with intrusive thoughts of smothering him, which leave her panic-stricken. She adores him and has never come close to acting, but the thoughts are worst late at night when she is alone, sleep-deprived, and most desperate for her old life back. In one paragraph, propose the strongest conclusion about what the harm thoughts are straddling and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that the smothering thoughts sit astride two real and colliding feelings — a deep love for the long-awaited child and an exhausted resentment of how completely he has erased her old life — so the obsession gives the forbidden anger a shape while her panic frantically disproves any wish to act on it. This is a strong claim because it predicts checkable consequences: the thoughts should surge precisely in the depleted, trapped late-night hours when resentment is closest to the surface rather than scattering randomly; they should be ego-dystonic and horrifying rather than wished-for; and they should loosen once she can voice ordinary maternal resentment without it meaning she is dangerous or unloving. I would test it by tracking when the images strike against how trapped and depleted she feels, by checking whether they bring dread rather than desire, and by seeing whether naming the buried resentment — separating the thought from a wish — reduces their grip.",
      yieldAnchors: [
        "She longed for and adores the child",
        "Intrusive thoughts of smothering him",
        "Worst when depleted and craving her old life",
      ],
      riskAnchors: [
        "Thoughts surge in trapped, late-night hours",
        "They are ego-dystonic and horrifying",
        "They ease once resentment is voiced as not-a-wish",
      ],
      defeatedBy: [
        "She feels only uncomplicated joy as a mother",
        "The thoughts come with desire rather than dread",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that the smothering thoughts sit astride two real and colliding feelings — a deep love for the long-awaited child and an exhausted resentment of how completely he has erased her old life — so the obsession gives the forbidden anger a shape while her panic frantically disproves any wish to act on it. This is a strong claim because it predicts checkable consequences: the thoughts should surge precisely in the depleted, trapped late-night hours when resentment is closest to the surface rather than scattering randomly; they should be ego-dystonic and horrifying rather than wished-for; and they should loosen once she can voice ordinary maternal resentment without it meaning she is dangerous or unloving. I would test it by tracking when the images strike against how trapped and depleted she feels, by checking whether they bring dread rather than desire, and by seeing whether naming the buried resentment — separating the thought from a wish — reduces their grip.",
    explanation:
      "Under the inverted standard, 'intrusive thoughts are random and meaningless' earns near-zero; top credit names both love and exhausted resentment and a track-when-they-strike test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A man who describes his marriage as 'perfect' must, whenever he feels a flash of irritation at his wife, immediately touch the doorframe and silently wish her well, or he is gripped by certainty that she'll be in a fatal accident. He has never raised his voice to her. In one paragraph, propose the strongest conclusion about what the ritual is straddling and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that the doorframe ritual straddles genuine love and a forbidden hostility toward his wife that his 'perfect marriage' story cannot admit — the flash of irritation throws up an angry, even death-tinged impulse, and the touching-and-blessing magically 'undoes' it so he never has to own the aggression. This is a strong claim because it predicts checkable consequences: the ritual should be triggered specifically by moments of anger at her rather than at random; skipping it should bring dread that his anger could actually harm her; and the urge should fade once he can hold ordinary irritation with his wife without believing it is lethal. I would test it by noting whether the compulsion follows flashes of irritation, by checking what happens when he resists it, and by seeing whether permitting and naming everyday anger at her reduces the ritual.",
      yieldAnchors: [
        "He calls the marriage perfect",
        "Ritual triggered by irritation at his wife",
        "Fears his anger will cause her death",
      ],
      riskAnchors: [
        "Ritual follows flashes of anger at her",
        "Skipping it brings harm-dread",
        "It fades once anger is held safely",
      ],
      defeatedBy: [
        "The ritual is unrelated to anger at his wife",
        "He openly expresses and tolerates anger already",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that the doorframe ritual straddles genuine love and a forbidden hostility toward his wife that his 'perfect marriage' story cannot admit — the flash of irritation throws up an angry, even death-tinged impulse, and the touching-and-blessing magically 'undoes' it so he never has to own the aggression. This is a strong claim because it predicts checkable consequences: the ritual should be triggered specifically by moments of anger at her rather than at random; skipping it should bring dread that his anger could actually harm her; and the urge should fade once he can hold ordinary irritation with his wife without believing it is lethal. I would test it by noting whether the compulsion follows flashes of irritation, by checking what happens when he resists it, and by seeing whether permitting and naming everyday anger at her reduces the ritual.",
    explanation:
      "The cautious 'it's just a superstition, nothing to read' earns near-zero; top credit names both love and forbidden hostility bound by an undoing ritual and a triggered-by-anger test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A daughter who privately dreamed of moving abroad has, since her mother's stroke, become an almost saintly caregiver — refusing all help, monitoring every detail, and insisting she 'wouldn't have it any other way' — while developing a compulsion to check repeatedly that she hasn't left her mother in danger. In one paragraph, propose the strongest conclusion about what the over-devotion and checking are straddling and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that the saintly caregiving and the checking straddle real love and a buried resentment of the dream the stroke cost her — the over-the-top devotion is a reaction against the wish to be free, and the checking guards against a forbidden impulse to let harm come so she could escape. This is a strong claim because it predicts checkable consequences: the insistence that she 'wouldn't have it any other way' should be rigid and brittle, cracking when resentment is gently named; the checking should intensify on the days she most feels her own life slipping away rather than when real danger is higher; and both should ease once she can admit ambivalence about the sacrifice without guilt. I would test it by watching whether her protest of total contentment can bend, by tracking the checking against her sense of being trapped, and by seeing whether voicing resentment of the lost plans reduces the compulsion.",
      yieldAnchors: [
        "She gave up dreams of moving abroad",
        "Saintly, help-refusing caregiving",
        "Checks she hasn't endangered her mother",
      ],
      riskAnchors: [
        "Her 'wouldn't have it any other way' is brittle",
        "Checking tracks feeling trapped, not real danger",
        "Both ease once resentment is admitted",
      ],
      defeatedBy: [
        "She had no thwarted plans and feels freely content",
        "The checking tracks genuine medical risk only",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that the saintly caregiving and the checking straddle real love and a buried resentment of the dream the stroke cost her — the over-the-top devotion is a reaction against the wish to be free, and the checking guards against a forbidden impulse to let harm come so she could escape. This is a strong claim because it predicts checkable consequences: the insistence that she 'wouldn't have it any other way' should be rigid and brittle, cracking when resentment is gently named; the checking should intensify on the days she most feels her own life slipping away rather than when real danger is higher; and both should ease once she can admit ambivalence about the sacrifice without guilt. I would test it by watching whether her protest of total contentment can bend, by tracking the checking against her sense of being trapped, and by seeing whether voicing resentment of the lost plans reduces the compulsion.",
    explanation:
      "The kind-sounding 'she's simply a devoted daughter' earns near-zero; top credit names both love and the resented sacrifice it defends against and a does-her-contentment-crack test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A young man raised in a strict religious community, now privately questioning it, becomes consumed by scrupulous rituals — repeated confessions, fears he has sinned in thought, hours of compulsive prayer — that flare most intensely right after he has had a doubt about the faith or a wish to leave. In one paragraph, propose the strongest conclusion about what the scrupulosity is straddling and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that the scrupulous rituals straddle a real attachment to his faith and community and a forbidden wish to doubt or leave it — when heresy or the urge to walk away surfaces, the guilt is intolerable, so confession and compulsive prayer both punish and undo the forbidden thought, keeping the conflict out of awareness. This is a strong claim because it predicts checkable consequences: the rituals should flare specifically after a doubt or a wish to leave rather than at random; the relief from each confession should be brief before the cycle restarts; and the symptoms should loosen once he can hold both his attachment and his doubt consciously rather than treating doubt as a sin to be erased. I would test it by tracking whether the rituals follow moments of doubt, by noting how quickly relief gives way, and by seeing whether permitting honest ambivalence about the faith reduces the compulsions.",
      yieldAnchors: [
        "He is privately questioning the faith",
        "Scrupulous confession and prayer rituals",
        "Flare after doubts or wishes to leave",
      ],
      riskAnchors: [
        "Rituals flare after doubts",
        "Relief is brief before restarting",
        "They ease once ambivalence is held consciously",
      ],
      defeatedBy: [
        "The rituals are unrelated to his doubts",
        "He feels wholehearted, untroubled faith",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that the scrupulous rituals straddle a real attachment to his faith and community and a forbidden wish to doubt or leave it — when heresy or the urge to walk away surfaces, the guilt is intolerable, so confession and compulsive prayer both punish and undo the forbidden thought, keeping the conflict out of awareness. This is a strong claim because it predicts checkable consequences: the rituals should flare specifically after a doubt or a wish to leave rather than at random; the relief from each confession should be brief before the cycle restarts; and the symptoms should loosen once he can hold both his attachment and his doubt consciously rather than treating doubt as a sin to be erased. I would test it by tracking whether the rituals follow moments of doubt, by noting how quickly relief gives way, and by seeing whether permitting honest ambivalence about the faith reduces the compulsions.",
    explanation:
      "The dodge 'this is just normal devout practice' earns near-zero; top credit names both attachment and forbidden doubt and a do-they-follow-doubts test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A woman in a kind, stable relationship is tormented by the obsessive thought that her partner's slightly crooked teeth are 'a dealbreaker,' which she knows is absurd; she checks her feelings constantly and seeks reassurance from friends. The obsession flared the month he started talking about moving in together. In one paragraph, propose the strongest conclusion about what the fixation is straddling and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that the trivial fixation on his teeth straddles a real wish to commit and an equally real fear of it that she can't consciously hold — as moving in raises the stakes, the unbearable ambivalence is displaced onto a tiny, 'safe' flaw she can obsess over instead of facing the larger question of commitment. This is a strong claim because it predicts checkable consequences: the obsession should have flared with the move-in talk rather than at the relationship's start; the chosen 'dealbreaker' should be trivial and the reassurance only briefly calming; and the fixation should ease once she can own both wanting the relationship and dreading the commitment, rather than litigating his appearance. I would test it by tracing whether the obsession tracks escalations in commitment, by noting how trivial the focus is and how short-lived the relief, and by seeing whether naming the underlying ambivalence dissolves the fixation on his teeth.",
      yieldAnchors: [
        "A kind, stable relationship",
        "Obsessive 'dealbreaker' fixation on a trivial flaw",
        "Flared with talk of moving in together",
      ],
      riskAnchors: [
        "The obsession tracks rising commitment",
        "The focus is trivial and relief brief",
        "It eases once commitment-ambivalence is owned",
      ],
      defeatedBy: [
        "The obsession predates any commitment step",
        "There is a genuine, serious problem with the partner",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that the trivial fixation on his teeth straddles a real wish to commit and an equally real fear of it that she can't consciously hold — as moving in raises the stakes, the unbearable ambivalence is displaced onto a tiny, 'safe' flaw she can obsess over instead of facing the larger question of commitment. This is a strong claim because it predicts checkable consequences: the obsession should have flared with the move-in talk rather than at the relationship's start; the chosen 'dealbreaker' should be trivial and the reassurance only briefly calming; and the fixation should ease once she can own both wanting the relationship and dreading the commitment, rather than litigating his appearance. I would test it by tracing whether the obsession tracks escalations in commitment, by noting how trivial the focus is and how short-lived the relief, and by seeing whether naming the underlying ambivalence dissolves the fixation on his teeth.",
    explanation:
      "Under the inverted standard, 'maybe she's just not attracted to him' earns near-zero; top credit names both the wish to commit and the fear of it displaced onto a trivial flaw, with a does-it-track-commitment test that could refute it.",
  },
];

export const section: SectionContent = {
  slug: "conflict-and-ambivalence",
  title: "Conflict and Ambivalence: The Engine Beneath the Symptom",
  weekNumber: 1,
  blurb:
    "Obsessions and compulsions often sit astride a two-sided conflict — love colliding with anger toward the same person, a forbidden wish met by an exaggerated defense against it, doubt that masks ambivalence. This section trains you to name BOTH sides the symptom is straddling and the cheap test that could prove you wrong.",
  lectureTitle:
    "1.4 Conflict and Ambivalence: the engine beneath the symptom",
  body: `# Conflict and Ambivalence: The Engine Beneath the Symptom

People rarely feel just one way about the things that matter most. You can love your mother and feel suffocated by her in the same breath; want a child desperately and dread the freedom it will cost you; admire a mentor and burn with rivalry toward him. The psychodynamic view of OCD starts from this fact: an obsession or compulsion is often not a single feeling gone wrong but a *compromise* between two feelings that can't both be admitted at once. The symptom is the engine running on that hidden friction — and the work is to figure out which two forces are colliding and what deal the symptom is striking between them.

## Two feelings at once

The starting move is to suspect that a baffling symptom is carrying more than one feeling. A devoted new mother flooded with images of harming her baby is not secretly violent; she is holding overwhelming love alongside an exhausted resentment she can't let herself feel, and the obsession gives the forbidden side a shape while her horror disproves it. The tell is that the symptom intensifies exactly when the unacceptable feeling is closest to the surface — on the most depleted, trapped nights, not at random. When an obsession spikes in step with a feeling the person would never claim, that feeling is part of the meaning.

## Love and hate toward the same person

The sharpest conflicts cluster around the people we most depend on. A man who privately cannot stand his critical mother feels a flash of anger and must instantly repeat a protective phrase or be sure something terrible will happen to her. The anger and the love are both real, and the ritual lets him have the hostility without owning it. The same shape shows up as harm thoughts about a partner, death images about a parent, or violent images toward an idealized boss — always toward someone the person loves or admires, always surging right after a slight or a disappointment. A reading that names *only* the love, or *only* the hate, misses the engine; the strong reading holds both.

## The forbidden wish and the reaction against it

Sometimes the symptom is the *opposite* of the buried feeling, turned up loud. A woman who can't stop performing kindnesses for a sister she "completely adores," panicking at any critical thought, is defending against an envy she finds unbearable — the over-the-top devotion is a reaction against the rivalry. This is why the strongest material is often the most extravagant: saintly caregiving from someone whose own dreams were sacrificed, frantic reassurance of love from someone who feels smothered. When a feeling is too dangerous to feel, the mind can build a showy display of its opposite, and the display gives the secret away by how hard it works.

## Doubt as a sign of ambivalence

OCD's endless doubting — "do I really love him?", "is she the one?", the pro-and-con lists that never settle — is frequently ambivalence wearing a question mark. The doubt can't be answered because *both answers are true at once*: a real wish to commit and a real fear of it. Notice the signature: the doubt attaches to no concrete fault, reassurance brings only a moment's calm before the loop restarts, and "solving" it is impossible because settling would mean giving up one side of the conflict. Reading doubt as ambivalence — rather than as a verdict the gut is delivering — is one of the most useful moves in this section.

## Undoing and displacement: where the conflict hides

The conflict rarely shows itself plainly; it gets disguised. In **undoing**, a ritual magically cancels a forbidden impulse — touch the doorframe, count to a safe number, repeat a blessing — so the wish is expressed and erased in one motion. In **displacement**, the unbearable conflict is shifted onto something small and "safe": a woman who can't face her ambivalence about moving in together obsesses instead over her partner's slightly crooked teeth. The trivial focus and the impossible-to-settle quality are the clues that the real fight is happening somewhere else, and the symptom is its stand-in.

## Reading the meaning — and naming a test

Here is what keeps this honest. It is not enough to spin a two-sided story; a strong interpretation names BOTH sides of the conflict the symptom straddles *and* the cheap observation that could prove it wrong. "Her checking carries devotion and a forbidden wish to be free" is a real claim, because it predicts the checking should worsen on the days she feels most trapped, ease when resentment is voiced, and never line up with actual danger — and you can check all three. The weak move is to stop at "she checks a lot" (which explains nothing) or to retreat into "intrusive thoughts are random brain noise" (which gives up before looking). The worst move is the lurid overreach the evidence defeats — deciding the man with violent images is dangerous, or the woman with cheating thoughts is having an affair — when her horror and the trivial content say otherwise.

## In the real world

Suppose a friend confides that she's tormented by the thought she might shout something cruel at her newborn, and she's terrified it means she's a monster. The dodge is "thoughts are just thoughts, don't read into it" — kind, but it explains nothing and leaves her alone with the fear. The overreach is to take the thought at face value, which is cruel and wrong. A conflict-aware move sits between them: maybe the thought straddles fierce love and an exhausted resentment she's not allowed to feel. Notice what that opens up. It predicts the thoughts spike when she's most drained and trapped; that they horrify rather than tempt her; and that they ease the moment she can say "I love him and I also miss my old life" without it making her a bad mother. Three cheap checks, each able to refute the reading. That is the skill this section trains: when a symptom won't make sense as one feeling, name the two feelings it is holding at once, bind the evidence, and say exactly what would show you are wrong.`,
  homework: {
    mcq,
    hybrid,
    written,
  },
};
