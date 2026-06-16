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
      "A man keeps calling his new girlfriend by his ex's name — but only with her, never with coworkers or friends, and almost always during tender or tense moments. He is mortified each time and has no idea why it happens. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He is probably still hung up on his ex; we could talk through that breakup more.",
        credit: 0.6,
      },
      {
        text: "The slip likely reveals a buried, all-consuming secret passion for his ex that he is hiding from everyone, including himself.",
        credit: 0,
      },
      {
        text: "Without noticing, he is likely running an old relationship template — responding to closeness and conflict through a learned pattern from the past relationship; test whether the slips cluster specifically around moments that echo the old relationship, whether they fade as the new relationship builds its own history, and whether he repeats other carried-over habits only with her.",
        credit: 1.0,
      },
      {
        text: "He seems to mix up names sometimes.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "Without noticing, he is likely running an old relationship template — responding to closeness and conflict through a learned pattern from the past relationship; test whether the slips cluster specifically around moments that echo the old relationship, whether they fade as the new relationship builds its own history, and whether he repeats other carried-over habits only with her.",
    explanation:
      "Top credit names an automatic out-of-awareness template and three checks that could refute it; the 'buried all-consuming passion' option is the lurid overreach the situation-specific, mortifying slips actively defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "A woman has dated four people in a row who were charming at first but emotionally unavailable, and each time she didn't notice the pattern until the relationship was failing. Warm, steady people, she says, simply 'feel boring' to her. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Love is too mysterious to analyze, so there is nothing to be learned from who she dates.",
        credit: 0,
      },
      {
        text: "She likely carries an out-of-awareness template that codes distance as exciting and steadiness as boring, so she is automatically drawn to the same kind of partner; test whether 'boring' people stop feeling boring once she knows them, whether the pull toward distance matches a pattern from an important early relationship, and whether naming the template in advance changes who she notices.",
        credit: 1.0,
      },
      {
        text: "She has bad luck with partners and keeps meeting the wrong people by chance.",
        credit: 0.3,
      },
      {
        text: "She probably has a type that isn't good for her; we could list her exes and compare.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "She likely carries an out-of-awareness template that codes distance as exciting and steadiness as boring, so she is automatically drawn to the same kind of partner; test whether 'boring' people stop feeling boring once she knows them, whether the pull toward distance matches a pattern from an important early relationship, and whether naming the template in advance changes who she notices.",
    explanation:
      "The strongest conclusion names a learned template driving repeated choices and three disconfirming tests; 'love is too mysterious to analyze' is the refusal the clear four-time pattern defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "An employee stays calm through layoffs and a missed promotion, but when his manager gives him a small, friendly correction on a report he flushes, his voice shakes, and he stews for days. He can't explain why something so minor hit so hard. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He seems sensitive to criticism.",
        credit: 0.3,
      },
      {
        text: "The mild correction probably touched a nerve; we could ask what bothered him about it.",
        credit: 0.6,
      },
      {
        text: "The reaction far bigger than its trigger likely means the correction matched an out-of-awareness template — a learned link between gentle correction from an authority and a much older sense of being found wanting; test whether the same outsized reaction appears with other mild-correction-from-authority moments, whether bigger threats like layoffs reliably produce less reaction, and whether the response eases once he can connect the feeling to its earlier source.",
        credit: 1.0,
      },
      {
        text: "His overreaction must mean a hidden traumatic abuse he has completely repressed and that this manager somehow reawakened.",
        credit: 0,
      },
    ],
    correctAnswer:
      "The reaction far bigger than its trigger likely means the correction matched an out-of-awareness template — a learned link between gentle correction from an authority and a much older sense of being found wanting; test whether the same outsized reaction appears with other mild-correction-from-authority moments, whether bigger threats like layoffs reliably produce less reaction, and whether the response eases once he can connect the feeling to its earlier source.",
    explanation:
      "Full credit reads the disproportion as a matched template and names three checks; the 'hidden repressed abuse' leap is the melodramatic overreach the ordinary trigger does not support.",
  },
  {
    itemType: "mc",
    prompt:
      "At every meeting, dinner, or class, a woman automatically takes the seat nearest the door, gets uneasy if she can't, and has never once thought about why. She insists it's just a habit with no meaning. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The mind's habits are unknowable, so her seat choice can't tell us anything.",
        credit: 0,
      },
      {
        text: "The consistent, automatic seat choice plus the unease when blocked likely reflects an out-of-awareness pattern that keeps an exit available — a learned 'stay ready to leave' template running below notice; test whether the unease spikes specifically when escape is hard, whether it eases in settings she controls, and whether the pattern traces to situations where leaving once mattered.",
        credit: 1.0,
      },
      {
        text: "She probably just likes sitting near the door; we could ask if she's always done it.",
        credit: 0.6,
      },
      {
        text: "She seems to prefer certain seats.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The consistent, automatic seat choice plus the unease when blocked likely reflects an out-of-awareness pattern that keeps an exit available — a learned 'stay ready to leave' template running below notice; test whether the unease spikes specifically when escape is hard, whether it eases in settings she controls, and whether the pattern traces to situations where leaving once mattered.",
    explanation:
      "Top credit reads a 'pointless' habit as a patterned template and names three tests; 'habits are unknowable' is the dodge the reliable choice and matched unease defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "Saying goodbye to a close friend moving abroad, a man means to say 'I'll miss you' but instead says 'I'm so relieved you're going.' He is horrified — he loves this friend — and the friendship had recently felt strangely heavy and obligating. Which conclusion best follows?",
    mcOptions: [
      {
        text: "It was just a verbal slip-up that means nothing at all.",
        credit: 0.3,
      },
      {
        text: "The slip plus the recent 'heaviness' likely points to a real but unacknowledged strand of feeling — some relief at being freed from an obligation he didn't let himself notice, alongside genuine love; test whether the heaviness tracked specific obligating demands, whether he feels lighter once the friend leaves, and whether other slips appear around duties he resents but won't voice.",
        credit: 1.0,
      },
      {
        text: "The slip proves he secretly hates this friend and the whole friendship was a lie he told himself.",
        credit: 0,
      },
      {
        text: "He probably has mixed feelings about the friend leaving; we could ask how he really feels.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The slip plus the recent 'heaviness' likely points to a real but unacknowledged strand of feeling — some relief at being freed from an obligation he didn't let himself notice, alongside genuine love; test whether the heaviness tracked specific obligating demands, whether he feels lighter once the friend leaves, and whether other slips appear around duties he resents but won't voice.",
    explanation:
      "The richest conclusion ties the slip to a specific out-of-awareness feeling and names three checks; 'he secretly hates the friend, it was all a lie' is the overreach his genuine love and the narrow 'heaviness' defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "A talented worker has quit three jobs in five years. Each time, things were going well and a boss had just praised her or offered a raise — and within weeks she picked a fight or found a reason to leave. She frames each exit as a separate, sensible decision. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She probably gets restless at jobs; we could look at what each role lacked.",
        credit: 0.6,
      },
      {
        text: "The repeating trigger — leaving right after success and praise — likely reveals an out-of-awareness template in which approval feels unsafe, prompting her to undo it; test whether the urge to leave reliably follows praise rather than setbacks, whether the same flight-after-success shows up in non-work relationships, and whether the pattern eases once she can anticipate it.",
        credit: 1.0,
      },
      {
        text: "Each job clearly had real problems, so there is no pattern worth explaining here.",
        credit: 0,
      },
      {
        text: "She seems to change jobs a lot.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The repeating trigger — leaving right after success and praise — likely reveals an out-of-awareness template in which approval feels unsafe, prompting her to undo it; test whether the urge to leave reliably follows praise rather than setbacks, whether the same flight-after-success shows up in non-work relationships, and whether the pattern eases once she can anticipate it.",
    explanation:
      "Top credit names a specific success-triggered template and three disconfirming tests; 'each job just had real problems, no pattern' is the dismissal the precise praise-then-flight repetition defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "Whenever one particular friend texts her, a woman feels a flash of dread before she even opens the message, then a wave of guilt — yet she describes the friendship as 'totally fine' and can't say what's wrong. The pattern happens with no one else. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Feelings are too private and complex to ever be figured out.",
        credit: 0,
      },
      {
        text: "The automatic dread-then-guilt that fires only for this friend likely signals an out-of-awareness pattern — her body has learned this relationship as a source of demand or judgment that her conscious story denies; test whether the dread tracks specific kinds of messages from this friend, whether it is absent for everyone else, and whether it lines up with a recurring imbalance she hasn't let herself name.",
        credit: 1.0,
      },
      {
        text: "She probably has some unspoken issue with this friend; we could ask what's going on between them.",
        credit: 0.6,
      },
      {
        text: "She seems a little stressed by that friend.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The automatic dread-then-guilt that fires only for this friend likely signals an out-of-awareness pattern — her body has learned this relationship as a source of demand or judgment that her conscious story denies; test whether the dread tracks specific kinds of messages from this friend, whether it is absent for everyone else, and whether it lines up with a recurring imbalance she hasn't let herself name.",
    explanation:
      "Full credit reads the friend-specific automatic reaction as a learned pattern and names three checks; 'feelings are too private to figure out' is the refusal the clean single-friend signal defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A man insists he feels 'nothing in particular' about his father's recent death — they were never close. Yet since the funeral he has reorganized his garage exactly as his father kept his, started using his father's phrases, and can't sleep. He sees no connection. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He says he feels nothing, so we should take him at his word and look no further.",
        credit: 0,
      },
      {
        text: "The behavior changes — copying his father's habits and phrases while sleepless — likely reflect grief and identification operating outside his awareness, doing the work his conscious mind disowns; test whether the imitation began only after the death, whether the sleeplessness tracks reminders of his father, and whether naming the loss aloud shifts the behaviors.",
        credit: 1.0,
      },
      {
        text: "He's probably affected by his dad's death more than he admits; we could ask about the funeral.",
        credit: 0.6,
      },
      {
        text: "He seems a bit off since the funeral.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The behavior changes — copying his father's habits and phrases while sleepless — likely reflect grief and identification operating outside his awareness, doing the work his conscious mind disowns; test whether the imitation began only after the death, whether the sleeplessness tracks reminders of his father, and whether naming the loss aloud shifts the behaviors.",
    explanation:
      "The strongest conclusion reads out-of-awareness grief from the timed behavior changes and names three tests; 'take him at his word, look no further' ignores the visible evidence his words contradict.",
  },
  {
    itemType: "mc",
    prompt:
      "A new hire is friendly with peers but becomes guarded and faintly hostile the moment any senior manager is warm to him — he reads kindness from 'people in charge' as a setup. He thinks he's just 'a good judge of character.' Which conclusion best follows?",
    mcOptions: [
      {
        text: "He probably distrusts bosses; we could ask about his past managers.",
        credit: 0.6,
      },
      {
        text: "The pattern that fires specifically for warm authority figures likely reflects an out-of-awareness template — kindness from someone powerful has been learned as a danger sign — rather than accurate reading of each person; test whether the guardedness appears with every warm authority regardless of who they are, whether it's absent with equally warm peers, and whether it matches how an early authority figure once treated him.",
        credit: 1.0,
      },
      {
        text: "His suspicion proves these managers really are plotting against him in some hidden way.",
        credit: 0,
      },
      {
        text: "He seems wary around managers.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The pattern that fires specifically for warm authority figures likely reflects an out-of-awareness template — kindness from someone powerful has been learned as a danger sign — rather than accurate reading of each person; test whether the guardedness appears with every warm authority regardless of who they are, whether it's absent with equally warm peers, and whether it matches how an early authority figure once treated him.",
    explanation:
      "Top credit names an authority-specific template and three checks, including the peer comparison; 'the managers really are plotting' is the overreach the indiscriminate, person-independent reaction defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A reliable, organized woman 'forgets' her dental appointments again and again — and only dental appointments. She never misses work meetings or doctor visits, books the dentist sincerely each time, then space out and skips. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Memory is unreliable, so people forget things; there's nothing more to it.",
        credit: 0.3,
      },
      {
        text: "The forgetting that targets only the dentist, in someone otherwise organized, likely reflects an out-of-awareness avoidance — the 'forgetting' quietly serves to dodge something specific about that setting; test whether the lapses cluster around the dentist alone, whether anxiety or a bad past dental experience lines up with it, and whether removing the dreaded part (sedation, a trusted dentist) ends the 'forgetting.'",
        credit: 1.0,
      },
      {
        text: "The repeated lapse must mean a deeply repressed mouth trauma that her mind is violently blocking from all awareness.",
        credit: 0,
      },
      {
        text: "She probably doesn't like the dentist; we could ask if she's anxious about it.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The forgetting that targets only the dentist, in someone otherwise organized, likely reflects an out-of-awareness avoidance — the 'forgetting' quietly serves to dodge something specific about that setting; test whether the lapses cluster around the dentist alone, whether anxiety or a bad past dental experience lines up with it, and whether removing the dreaded part (sedation, a trusted dentist) ends the 'forgetting.'",
    explanation:
      "Full credit reads the selective forgetting as functional avoidance and names three tests; the 'deeply repressed mouth trauma' leap is the melodrama the ordinary, fixable dental dread does not warrant.",
  },
  {
    itemType: "mc",
    prompt:
      "A man notices that in every romance he ends up having the identical argument — that his partner is 'controlling' him — even with partners who are easygoing and even when they barely made a request. The script feels new each time, but the words are nearly the same. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Relationships are too complicated to find any real pattern in them.",
        credit: 0,
      },
      {
        text: "The identical argument across very different partners likely reflects an out-of-awareness template — a learned sensitivity to being controlled that he projects onto small requests — rather than the partners actually being controlling; test whether the 'controlling' charge appears regardless of how easygoing the partner is, whether neutral observers see the requests as ordinary, and whether the template matches an earlier relationship where control was real.",
        credit: 1.0,
      },
      {
        text: "He probably keeps picking controlling partners; we could look at who he dates.",
        credit: 0.6,
      },
      {
        text: "He seems to argue about control a lot.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The identical argument across very different partners likely reflects an out-of-awareness template — a learned sensitivity to being controlled that he projects onto small requests — rather than the partners actually being controlling; test whether the 'controlling' charge appears regardless of how easygoing the partner is, whether neutral observers see the requests as ordinary, and whether the template matches an earlier relationship where control was real.",
    explanation:
      "Top credit locates a portable template inside him, not the partners, and names three checks; 'too complicated to find any pattern' is the dodge the near-identical repeating script defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "When a particular friend cancels plans, a grown woman goes silent, sulks for hours, and feels a hot, childlike sting of rejection — far more than the small letdown warrants, and far more than when anyone else cancels. She's embarrassed by how 'young' it feels. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She seems disappointed when plans fall through.",
        credit: 0.3,
      },
      {
        text: "The childlike intensity, specific to this friend, likely means the cancellation matched an out-of-awareness template — an old, early experience of being dropped that this relationship reactivates; test whether the outsized sting appears mainly with this friend, whether it scales with how much the cancellation resembles old abandonments rather than the actual inconvenience, and whether the feeling eases once she connects it to its earlier source.",
        credit: 1.0,
      },
      {
        text: "The reaction proves she was savagely abandoned as a baby in a way she has totally erased from memory.",
        credit: 0,
      },
      {
        text: "She probably has some sensitivity about being let down; we could explore that.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The childlike intensity, specific to this friend, likely means the cancellation matched an out-of-awareness template — an old, early experience of being dropped that this relationship reactivates; test whether the outsized sting appears mainly with this friend, whether it scales with how much the cancellation resembles old abandonments rather than the actual inconvenience, and whether the feeling eases once she connects it to its earlier source.",
    explanation:
      "Full credit reads the 'too young' disproportion as a reactivated template and names three tests; the 'savagely abandoned as a baby and erased it' claim is the lurid overreach the ordinary cancellation does not support.",
  },
  {
    itemType: "mc",
    prompt:
      "Planning a party, a man writes out invitations and 'accidentally' leaves one warm, generous friend off the list — twice now, for two events. He genuinely likes this friend and is baffled. Lately that friend's success has been a frequent topic among the group. Which conclusion best follows?",
    mcOptions: [
      {
        text: "People forget to invite others sometimes; it doesn't mean anything.",
        credit: 0.3,
      },
      {
        text: "The repeated, selective 'forgetting' of one successful friend likely reflects an out-of-awareness sting of envy he won't consciously own, quietly steering the omission; test whether the lapse targets this friend specifically rather than being random, whether it tracks moments when the friend's success is salient, and whether owning a flicker of envy makes the 'forgetting' stop.",
        credit: 1.0,
      },
      {
        text: "He probably has some unspoken feeling about this friend; we could ask how he sees them.",
        credit: 0.6,
      },
      {
        text: "The omission proves he secretly despises this friend and has been faking the whole friendship for years.",
        credit: 0,
      },
    ],
    correctAnswer:
      "The repeated, selective 'forgetting' of one successful friend likely reflects an out-of-awareness sting of envy he won't consciously own, quietly steering the omission; test whether the lapse targets this friend specifically rather than being random, whether it tracks moments when the friend's success is salient, and whether owning a flicker of envy makes the 'forgetting' stop.",
    explanation:
      "Top credit reads the selective lapse as out-of-awareness envy and names three checks; 'he secretly despises the friend and faked it for years' is the overreach his genuine liking and narrow omission defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "A woman is happiest in the early, uncertain phase of dating, but the moment a partner becomes devoted and steady she feels a creeping flatness and starts looking for flaws — a sequence she's lived through five times without ever predicting it. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The unconscious is unknowable, so there's no way to understand why she feels this.",
        credit: 0,
      },
      {
        text: "The reliable shift from delight to flatness exactly when security arrives likely reflects an out-of-awareness template in which steady love feels unfamiliar or unsafe, so she retreats just as closeness deepens; test whether the flatness reliably onsets at the point of commitment rather than at random, whether it eases when she stays through it rather than leaving, and whether the pattern matches an early bond where closeness was unreliable.",
        credit: 1.0,
      },
      {
        text: "She probably gets bored once the chase is over; we could look at her past relationships.",
        credit: 0.6,
      },
      {
        text: "She seems to lose interest after a while.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The reliable shift from delight to flatness exactly when security arrives likely reflects an out-of-awareness template in which steady love feels unfamiliar or unsafe, so she retreats just as closeness deepens; test whether the flatness reliably onsets at the point of commitment rather than at random, whether it eases when she stays through it rather than leaving, and whether the pattern matches an early bond where closeness was unreliable.",
    explanation:
      "Full credit names a closeness-triggered template and three disconfirming tests; 'the unconscious is unknowable' is the refusal the precise five-time onset pattern defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "Typing a thank-you email to a demanding senior colleague, a man signs off with his mother's first name instead of his own, then deletes it in shock. He notices he'd been feeling, all morning, oddly small and eager to please around this colleague. Which conclusion best follows?",
    mcOptions: [
      {
        text: "It was a random typo with no meaning whatsoever.",
        credit: 0.3,
      },
      {
        text: "The slip plus the 'small and eager to please' feeling likely shows an out-of-awareness template activating — the demanding colleague is being responded to through an old parent-shaped pattern, blurring the roles; test whether the deferential feeling appears specifically with parent-like authority figures, whether other slips or postures from that early relationship surface around this colleague, and whether the pull fades when he consciously separates the colleague from the old figure.",
        credit: 1.0,
      },
      {
        text: "He probably has some feeling about this colleague; we could ask what came to mind.",
        credit: 0.6,
      },
      {
        text: "The slip proves his mother secretly runs his entire mind and he has no real self of his own.",
        credit: 0,
      },
    ],
    correctAnswer:
      "The slip plus the 'small and eager to please' feeling likely shows an out-of-awareness template activating — the demanding colleague is being responded to through an old parent-shaped pattern, blurring the roles; test whether the deferential feeling appears specifically with parent-like authority figures, whether other slips or postures from that early relationship surface around this colleague, and whether the pull fades when he consciously separates the colleague from the old figure.",
    explanation:
      "Top credit reads the name-slip as a parent-shaped template intruding and names three checks; 'his mother secretly runs his entire mind' is the melodramatic overreach the situation-specific feeling does not support.",
  },
];

const hybrid: HomeworkItem[] = [
  {
    itemType: "hybrid",
    prompt:
      "A man complains he 'can never find a good partner,' yet a friend points out that for years he has chosen people who are warm at first and then withdraw — and he passes over anyone who is openly available. He's surprised; he thought each choice was unrelated. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He likely carries an out-of-awareness template that steers him toward partners who eventually withdraw, so the 'unrelated' choices share a hidden rule; test whether available, steady people consistently fail to attract him, whether the partners he picks all share the warm-then-distant arc, and whether the pattern matches an early relationship that ran the same way.",
        credit: 1.0,
      },
      {
        text: "He probably has a type; we could write down his exes and see.",
        credit: 0.6,
      },
      {
        text: "The pattern proves a hidden self-hatred so total that he is deliberately destroying his own life.",
        credit: 0,
      },
      {
        text: "He seems to have trouble finding the right person.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'out-of-awareness template steers his choices' lead from the rival 'he just has bad luck and keeps meeting withdrawers by chance,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: introduce him to several clearly available, steady people and watch whether he reliably feels no spark and drifts toward the one most likely to withdraw — a consistent pull away from availability points to an internal template, not luck. My lead is refuted if he readily connects with available partners when they're around, which would mean the past pattern was just who happened to cross his path.",
      yieldAnchors: [
        "He repeatedly chooses partners who warm up then withdraw",
        "He passes over openly available people",
        "He experienced the choices as unrelated",
      ],
      riskAnchors: [
        "Available, steady people consistently fail to attract him",
        "His partners share the same warm-then-distant arc",
        "The pattern matches an early relationship",
      ],
      defeatedBy: [
        "He connects easily with available partners when they appear",
        "His exes share no common pattern at all",
      ],
    },
    correctAnswer:
      "He likely carries an out-of-awareness template that steers him toward partners who eventually withdraw, so the 'unrelated' choices share a hidden rule; test whether available, steady people consistently fail to attract him, whether the partners he picks all share the warm-then-distant arc, and whether the pattern matches an early relationship that ran the same way.",
    explanation:
      "Full credit names a choice-steering template with three checks and a cheap available-partner test that states its own refutation; 'total hidden self-hatred destroying his life' is the lurid overreach the ordinary repeated pattern defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A calm, courteous accountant becomes shaking-furious at a parking attendant who waves him into the wrong lane — screaming, then trembling with shame for an hour. He is gentle everywhere else, and the attendant had been merely brisk and a little bossy. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He seems to have a temper about parking.",
        credit: 0.3,
      },
      {
        text: "The rage wildly out of scale with a brisk attendant likely means the moment matched an out-of-awareness template — being bossed around by a petty authority touched off a much older, stored anger; test whether similar 'bossed by a small authority' moments reliably trigger the rage, whether genuinely bigger provocations produce less, and whether the intensity eases once he links the feeling to its earlier source.",
        credit: 1.0,
      },
      {
        text: "He probably had a bad day; we could ask what set him off.",
        credit: 0.6,
      },
      {
        text: "The explosion proves he is a secretly violent man wearing a polite mask that finally slipped.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'old template was triggered' lead from the rival 'he was simply stressed and the attendant was the last straw,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: track whether the disproportionate rage shows up specifically when a minor authority orders him around, even on relaxed, low-stress days — a tie to that particular trigger rather than to general stress points to a matched template. My lead is refuted if the explosions appear only on objectively stressful days and any minor annoyance, authority or not, sets them off equally.",
      yieldAnchors: [
        "He is gentle in nearly every other setting",
        "The trigger was a brisk, bossy minor authority",
        "The rage was far larger than the provocation",
      ],
      riskAnchors: [
        "Similar 'bossed by a petty authority' moments trigger the rage",
        "Genuinely bigger provocations produce less reaction",
        "The intensity eases once linked to an earlier source",
      ],
      defeatedBy: [
        "Any minor annoyance triggers equal rage regardless of authority",
        "The outbursts occur only on objectively stressful days",
      ],
    },
    correctAnswer:
      "The rage wildly out of scale with a brisk attendant likely means the moment matched an out-of-awareness template — being bossed around by a petty authority touched off a much older, stored anger; test whether similar 'bossed by a small authority' moments reliably trigger the rage, whether genuinely bigger provocations produce less, and whether the intensity eases once he links the feeling to its earlier source.",
    explanation:
      "Top credit reads the disproportion as a triggered template with three checks and a stress-versus-trigger test that names its refutation; 'a secretly violent man behind a mask' is the overreach his pervasive gentleness defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A graduate student handles harsh criticism with poise but freezes, stammers, and goes blank whenever a professor praises her work in front of others. She can dissect a critique calmly, yet praise leaves her flustered for the rest of the day. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She seems uncomfortable with praise.",
        credit: 0.3,
      },
      {
        text: "Feelings are too complex to ever explain why praise rattles someone.",
        credit: 0,
      },
      {
        text: "That praise — not criticism — reliably undoes her likely reflects an out-of-awareness template in which being singled out for approval feels exposing or unsafe; test whether the freeze appears specifically with public praise rather than criticism, whether private praise rattles her less, and whether the pattern matches an early setting where standing out drew trouble.",
        credit: 1.0,
      },
      {
        text: "She probably isn't used to compliments; we could ask how she feels when praised.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'praise matches an unsafe-approval template' lead from the rival 'she just has low self-esteem and any attention overwhelms her,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: compare her reaction to equally public criticism versus public praise — if criticism leaves her composed while only praise undoes her, the problem is specific to approval, not attention in general. My lead is refuted if she falls apart equally under public criticism and public praise, which would fit general attention-overwhelm rather than a praise-specific template.",
      yieldAnchors: [
        "She handles harsh criticism with poise",
        "Public praise makes her freeze and go blank",
        "The disruption lasts the rest of the day",
      ],
      riskAnchors: [
        "The freeze is specific to public praise, not criticism",
        "Private praise rattles her less",
        "The pattern matches an early standing-out experience",
      ],
      defeatedBy: [
        "She falls apart equally under public criticism",
        "All attention, good or bad, overwhelms her the same",
      ],
    },
    correctAnswer:
      "That praise — not criticism — reliably undoes her likely reflects an out-of-awareness template in which being singled out for approval feels exposing or unsafe; test whether the freeze appears specifically with public praise rather than criticism, whether private praise rattles her less, and whether the pattern matches an early setting where standing out drew trouble.",
    explanation:
      "Full credit names a praise-specific template with three checks and a praise-versus-criticism test that names its refutation; 'feelings are too complex to explain' is the empty refusal the clean praise-only pattern defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A punctual woman is reliably 20 minutes late — but only when meeting one particular old friend, never for work, dates, or other friends. She always intends to be on time, leaves late 'by accident,' and feels obscurely reluctant on the way. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She probably has some resistance to seeing this friend; we could ask how she feels about her.",
        credit: 0.6,
      },
      {
        text: "Lateness happens to everyone; there's no meaning in it.",
        credit: 0.3,
      },
      {
        text: "The lateness confined to one friend, in someone otherwise punctual, plus the reluctance, likely reflects an out-of-awareness reluctance that the 'accidental' lateness enacts — a quiet drag on a relationship she won't consciously question; test whether the lateness occurs only with this friend, whether it tracks a specific recurring strain in the friendship, and whether naming the reluctance makes the lateness stop.",
        credit: 1.0,
      },
      {
        text: "The chronic lateness proves she has a deep buried hatred for this friend that her mind is hiding to protect her sanity.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'out-of-awareness reluctance enacted as lateness' lead from the rival 'this friend's gatherings just happen to be hard to get to on time,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: check whether the lateness follows the friend rather than the venue — if she's late even when they meet somewhere convenient and on-time everywhere else, the drag is about the relationship, not the logistics. My lead is refuted if she's punctual whenever the meeting place is easy to reach, which would make it a scheduling problem rather than a feeling.",
      yieldAnchors: [
        "She is otherwise reliably punctual",
        "The lateness happens only with this one friend",
        "She feels an obscure reluctance on the way",
      ],
      riskAnchors: [
        "The lateness occurs only with this friend",
        "It tracks a specific recurring strain in the friendship",
        "Naming the reluctance stops the lateness",
      ],
      defeatedBy: [
        "She is on time whenever the venue is convenient",
        "She is equally late for many different people",
      ],
    },
    correctAnswer:
      "The lateness confined to one friend, in someone otherwise punctual, plus the reluctance, likely reflects an out-of-awareness reluctance that the 'accidental' lateness enacts — a quiet drag on a relationship she won't consciously question; test whether the lateness occurs only with this friend, whether it tracks a specific recurring strain in the friendship, and whether naming the reluctance makes the lateness stop.",
    explanation:
      "Top credit reads the selective lateness as enacted reluctance with three checks and a venue-versus-friend test that names its refutation; 'deep buried hatred to protect her sanity' is the melodrama the ordinary mild reluctance defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A man jokes constantly, and friends notice his 'jokes' nearly always land on the same theme — being abandoned or replaced ('I'll be forgotten in a week,' 'you'll all get a better friend'). He laughs them off and says he means nothing by them. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He's just a joker; the topics don't mean anything.",
        credit: 0.3,
      },
      {
        text: "The jokes that keep circling one theme likely voice an out-of-awareness worry about being abandoned that humor lets him air without owning it; test whether the abandonment theme dominates his jokes specifically over other topics, whether the jokes spike when a relationship feels uncertain, and whether the worry, once named directly, eases the joking.",
        credit: 1.0,
      },
      {
        text: "He probably has some insecurity; we could ask what's behind the jokes.",
        credit: 0.6,
      },
      {
        text: "The jokes prove he has already decided everyone will betray him and is plotting to leave first.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'jokes voice an out-of-awareness abandonment worry' lead from the rival 'he just has a dark sense of humor about everything,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: tally his jokes by theme and check whether abandonment dominates while other dark topics are rare — a lopsided concentration on being left points to a specific worry, not generic dark humor. My lead is refuted if his jokes range evenly across many dark themes with no special pull toward abandonment.",
      yieldAnchors: [
        "His jokes repeatedly target abandonment and replacement",
        "He insists he means nothing by them",
        "The theme recurs across many occasions",
      ],
      riskAnchors: [
        "The abandonment theme dominates over other joke topics",
        "The jokes spike when a relationship feels uncertain",
        "Naming the worry directly eases the joking",
      ],
      defeatedBy: [
        "His jokes range evenly across many dark themes",
        "The joking is unrelated to relationship uncertainty",
      ],
    },
    correctAnswer:
      "The jokes that keep circling one theme likely voice an out-of-awareness worry about being abandoned that humor lets him air without owning it; test whether the abandonment theme dominates his jokes specifically over other topics, whether the jokes spike when a relationship feels uncertain, and whether the worry, once named directly, eases the joking.",
    explanation:
      "Full credit reads the recurring joke theme as an aired-but-disowned worry with three checks and a theme-tally test that names its refutation; 'plotting to leave first' is the overreach the playful, themed joking does not support.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A capable woman has had three bosses she ended up working for, and each turned out to be controlling and quick to anger. Coworkers found the same managers reasonable. She insists she 'just keeps landing under tyrants' by chance. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She probably has bad luck with bosses; we could review her job history.",
        credit: 0.6,
      },
      {
        text: "The pattern is unknowable, so we can't say why she keeps ending up there.",
        credit: 0,
      },
      {
        text: "That she repeatedly ends up under (and experiences as tyrannical) bosses others find reasonable likely reflects an out-of-awareness template that both draws her toward such figures and primes her to read them as controlling; test whether she gravitates to that boss type when she has choices, whether neutral observers rate the same managers as ordinary, and whether the template matches an early controlling authority in her life.",
        credit: 1.0,
      },
      {
        text: "She seems to clash with her managers.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'template draws her in and shapes her reading' lead from the rival 'she has simply, by chance, had three genuinely controlling bosses,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: have neutral coworkers independently rate the same managers — if others reliably find them reasonable while she alone experiences tyranny, the controlling quality is partly in her template, not just the bosses. My lead is refuted if independent raters confirm the managers really are controlling, which would make her experience accurate rather than templated.",
      yieldAnchors: [
        "Three successive bosses ended up controlling for her",
        "Coworkers found the same managers reasonable",
        "She frames it as pure chance",
      ],
      riskAnchors: [
        "She gravitates to that boss type given a choice",
        "Neutral observers rate the managers as ordinary",
        "The template matches an early controlling authority",
      ],
      defeatedBy: [
        "Independent raters confirm the bosses are genuinely controlling",
        "She avoids controlling figures whenever she can choose",
      ],
    },
    correctAnswer:
      "That she repeatedly ends up under (and experiences as tyrannical) bosses others find reasonable likely reflects an out-of-awareness template that both draws her toward such figures and primes her to read them as controlling; test whether she gravitates to that boss type when she has choices, whether neutral observers rate the same managers as ordinary, and whether the template matches an early controlling authority in her life.",
    explanation:
      "Top credit names a template shaping both choice and perception with three checks and a neutral-rater test that names its refutation; 'unknowable' is the dodge the others-find-them-reasonable evidence defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "Comforting his partner after a hard day, a man means to say 'I've got you' but says 'Mom's got you,' then feels a jolt of confusion. He's noticed he often slips into a soothing, parental tone with her specifically when she's distressed. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Slips of the tongue are random noise and mean nothing.",
        credit: 0.3,
      },
      {
        text: "The 'Mom' slip plus the parental tone when she's upset likely shows an out-of-awareness template — distress in a loved one cues a learned caretaker role from his family — shaping how he relates; test whether the parental shift appears specifically when she's distressed, whether the same caretaker stance shows up with others in distress, and whether it matches a role he held early in his own family.",
        credit: 1.0,
      },
      {
        text: "He probably falls into a caretaker mode; we could ask about his family role.",
        credit: 0.6,
      },
      {
        text: "The slip proves he is romantically attracted to his own mother and his whole relationship is a disguise for that.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'a learned caretaker template is cued by distress' lead from the rival 'it was a meaningless one-off verbal slip,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: watch whether the parental tone and caretaker stance reliably switch on whenever someone close is distressed and switch off otherwise — a consistent distress-cued shift points to an activated role, not a fluke. My lead is refuted if the soothing-parental mode never recurs and shows no link to others' distress.",
      yieldAnchors: [
        "He slips into saying 'Mom' while comforting her",
        "He adopts a parental tone when she's distressed",
        "The pattern is specific to moments of distress",
      ],
      riskAnchors: [
        "The parental shift appears specifically with distress",
        "The caretaker stance shows up with others in distress",
        "It matches an early role in his own family",
      ],
      defeatedBy: [
        "The caretaker mode never recurs",
        "His tone is unrelated to whether others are distressed",
      ],
    },
    correctAnswer:
      "The 'Mom' slip plus the parental tone when she's upset likely shows an out-of-awareness template — distress in a loved one cues a learned caretaker role from his family — shaping how he relates; test whether the parental shift appears specifically when she's distressed, whether the same caretaker stance shows up with others in distress, and whether it matches a role he held early in his own family.",
    explanation:
      "Full credit reads the slip as a distress-cued caretaker template with three checks and a distress-on/off test that names its refutation; 'attracted to his mother and disguising it' is the lurid overreach the caretaking pattern defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "On his daily walk a man always detours around one quiet, perfectly ordinary street, adding minutes for no reason he can state. Pressed, he just feels 'off' approaching it. He used to live near there years ago during a painful stretch he rarely thinks about. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The unconscious can't be known, so his detour can't be explained.",
        credit: 0,
      },
      {
        text: "The consistent automatic detour plus the 'off' feeling near a street tied to a painful past period likely reflects an out-of-awareness avoidance — the place cues stored distress, and the detour quietly manages it; test whether the unease is specific to that street and its vicinity, whether it tracks reminders of the painful period, and whether deliberately walking it, with the link in mind, lessens the pull over time.",
        credit: 1.0,
      },
      {
        text: "He probably associates that street with a bad time; we could ask what happened there.",
        credit: 0.6,
      },
      {
        text: "He seems to dislike that street.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'out-of-awareness avoidance cued by the painful past' lead from the rival 'he just prefers his usual route out of habit,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: check whether the 'off' feeling and detour are specific to this particular street's area versus any equally convenient alternate route — distress tied to that location rather than to route habit points to cued avoidance. My lead is refuted if he detours around many interchangeable streets with no special unease, which would make it ordinary route preference.",
      yieldAnchors: [
        "He detours around one specific ordinary street",
        "He feels 'off' approaching it",
        "He once lived there during a painful period",
      ],
      riskAnchors: [
        "The unease is specific to that street's vicinity",
        "It tracks reminders of the painful period",
        "Deliberately walking it, with the link in mind, lessens the pull",
      ],
      defeatedBy: [
        "He detours around many streets with no special unease",
        "The feeling is unrelated to the past period",
      ],
    },
    correctAnswer:
      "The consistent automatic detour plus the 'off' feeling near a street tied to a painful past period likely reflects an out-of-awareness avoidance — the place cues stored distress, and the detour quietly manages it; test whether the unease is specific to that street and its vicinity, whether it tracks reminders of the painful period, and whether deliberately walking it, with the link in mind, lessens the pull over time.",
    explanation:
      "Top credit reads the detour as cued avoidance with three checks and a location-specificity test that names its refutation; 'the unconscious can't be known' is the refusal the place-specific unease defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A woman reacts to her partner's small kindnesses — flowers, a packed lunch — with instant suspicion ('what does he want?'), then guilt. He has never been manipulative. She grew up where gifts always came with strings attached. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She probably has trust issues; we could talk about her past.",
        credit: 0.6,
      },
      {
        text: "Her suspicion proves the partner really is secretly manipulating her in ways no one has caught yet.",
        credit: 0,
      },
      {
        text: "The automatic suspicion-then-guilt toward genuine kindness, in someone whose early gifts came with strings, likely reflects an out-of-awareness template that codes generosity as a setup; test whether the suspicion fires for kindness regardless of the giver's actual intent, whether it's strongest when the gesture resembles the old strings-attached pattern, and whether it eases as repeated no-strings kindness builds new evidence.",
        credit: 1.0,
      },
      {
        text: "She seems wary of gifts.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'kindness-as-setup template' lead from the rival 'her partner is actually subtly manipulative,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: see whether the suspicion fires for clearly no-strings kindness from many different, trustworthy people, not just her partner — a reaction triggered by generosity itself rather than by any real demand points to her template. My lead is refuted if neutral observers find her partner's gestures really do carry hidden conditions, which would make her suspicion accurate.",
      yieldAnchors: [
        "Small genuine kindnesses trigger instant suspicion",
        "Guilt follows the suspicion",
        "Her early gifts came with strings attached",
      ],
      riskAnchors: [
        "The suspicion fires regardless of the giver's intent",
        "It's strongest when the gesture echoes the old pattern",
        "Repeated no-strings kindness eases it over time",
      ],
      defeatedBy: [
        "Observers confirm the partner's gestures carry hidden conditions",
        "She trusts kindness easily from everyone else",
      ],
    },
    correctAnswer:
      "The automatic suspicion-then-guilt toward genuine kindness, in someone whose early gifts came with strings, likely reflects an out-of-awareness template that codes generosity as a setup; test whether the suspicion fires for kindness regardless of the giver's actual intent, whether it's strongest when the gesture resembles the old strings-attached pattern, and whether it eases as repeated no-strings kindness builds new evidence.",
    explanation:
      "Full credit names a kindness-as-setup template with three checks and a many-givers test that names its refutation; 'the partner really is secretly manipulating her' is the overreach his consistent no-strings behavior defeats.",
  },
];

const written: HomeworkItem[] = [
  {
    itemType: "written",
    prompt:
      "A woman has had four jobs and describes every boss in nearly identical words — 'cold, withholding, always disappointed in me' — even though her coworkers experienced those same managers very differently. She is sure she simply keeps getting unlucky. In one paragraph, propose the strongest conclusion about the out-of-awareness pattern at work and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that she carries an out-of-awareness template — a stored expectation, likely learned from an early withholding figure — that automatically casts each new boss as cold and disappointed in her, so the sameness lives in her, not in four coincidentally similar managers. This is a strong claim because it predicts checkable consequences: neutral coworkers should rate the same bosses as ordinary or warm; her sense of being 'disappointed in' should appear early, before a boss has done much; and the pattern should surface with other authority figures, and should match how an important early caregiver treated her. I would test it by collecting independent ratings of those managers, by tracking how quickly the 'cold and disappointed' feeling forms with a brand-new boss, and by checking whether the same reading appears with teachers, landlords, or in-laws — and whether naming the template softens it. A genuine refutation would be independent confirmation that the bosses really were uniformly cold, which would make her experience accurate rather than templated.",
      yieldAnchors: [
        "She describes four different bosses in nearly identical terms",
        "Coworkers experienced those managers very differently",
        "She attributes it entirely to bad luck",
      ],
      riskAnchors: [
        "Neutral coworkers rate the same bosses as ordinary or warm",
        "The 'disappointed in me' feeling forms early with new bosses",
        "The same reading appears with other authority figures",
      ],
      defeatedBy: [
        "Independent raters confirm the bosses were uniformly cold",
        "One unusual workplace tells us nothing about her patterns",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that she carries an out-of-awareness template — a stored expectation, likely learned from an early withholding figure — that automatically casts each new boss as cold and disappointed in her, so the sameness lives in her, not in four coincidentally similar managers. This is a strong claim because it predicts checkable consequences: neutral coworkers should rate the same bosses as ordinary or warm; her sense of being 'disappointed in' should appear early, before a boss has done much; and the pattern should surface with other authority figures, and should match how an important early caregiver treated her. I would test it by collecting independent ratings of those managers, by tracking how quickly the 'cold and disappointed' feeling forms with a brand-new boss, and by checking whether the same reading appears with teachers, landlords, or in-laws — and whether naming the template softens it. A genuine refutation would be independent confirmation that the bosses really were uniformly cold, which would make her experience accurate rather than templated.",
    explanation:
      "Under the inverted standard, 'she just keeps getting unlucky' earns near-zero; top credit goes to the template conclusion that binds the identical descriptions and others' differing views and names a neutral-rater test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A man reports that every relationship 'mysteriously falls apart' just as it gets serious. Looking closer, the breakups always follow a moment of real closeness — a trip planned, an 'I love you' — after which he becomes critical and picks fights until the partner leaves. He sees only that he 'keeps choosing the wrong people.' In one paragraph, propose the strongest conclusion about the out-of-awareness pattern and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that an out-of-awareness template makes deepening closeness feel dangerous, so without intending to he sabotages relationships precisely at the point of intimacy — the breakups are produced by him, not by repeatedly bad partners. This is a strong claim because it predicts checkable consequences: the fault-finding and fights should reliably onset right after closeness milestones rather than at random; the same withdrawal-at-intimacy pattern should appear across very different partners; and it should trace to an early bond where closeness was unsafe or punished. I would test it by mapping each relationship's timeline to see whether conflict spikes just after intimacy, by checking whether the pattern holds regardless of how kind or compatible the partner is, and by asking whether staying through the urge to fight — rather than acting on it — lets a relationship survive. The lead is refuted if his conflicts are scattered with no link to closeness, or if his partners were genuinely and independently incompatible each time.",
      yieldAnchors: [
        "Breakups always follow a moment of real closeness",
        "He becomes critical and picks fights until partners leave",
        "He sees only that he 'chooses the wrong people'",
      ],
      riskAnchors: [
        "Fault-finding reliably onsets right after intimacy milestones",
        "The withdrawal-at-closeness pattern holds across different partners",
        "It traces to an early bond where closeness was unsafe",
      ],
      defeatedBy: [
        "His conflicts are scattered with no link to closeness",
        "Each partner was independently and genuinely incompatible",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that an out-of-awareness template makes deepening closeness feel dangerous, so without intending to he sabotages relationships precisely at the point of intimacy — the breakups are produced by him, not by repeatedly bad partners. This is a strong claim because it predicts checkable consequences: the fault-finding and fights should reliably onset right after closeness milestones rather than at random; the same withdrawal-at-intimacy pattern should appear across very different partners; and it should trace to an early bond where closeness was unsafe or punished. I would test it by mapping each relationship's timeline to see whether conflict spikes just after intimacy, by checking whether the pattern holds regardless of how kind or compatible the partner is, and by asking whether staying through the urge to fight — rather than acting on it — lets a relationship survive. The lead is refuted if his conflicts are scattered with no link to closeness, or if his partners were genuinely and independently incompatible each time.",
    explanation:
      "The inverted standard gives near-zero to 'he keeps choosing the wrong people'; credit goes to the intimacy-sabotage template that binds the timing of the breakups and proposes a timeline test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "An otherwise meticulous man takes every medication and supplement on schedule except one — the blood-pressure pill his late father also took, for the condition that killed him. He sincerely sets reminders, then 'doesn't notice' them, only for that pill. In one paragraph, propose the strongest conclusion about the out-of-awareness pattern and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that an out-of-awareness avoidance is at work: the one pill that links him to his father's fatal illness carries a charged meaning he won't consciously face, and the selective 'forgetting' quietly keeps that meaning at bay. This is a strong claim because it predicts checkable consequences: the lapses should target this single father-linked pill while his adherence to everything else stays excellent; the forgetting should intensify around reminders of his father, such as the death's anniversary; and surfacing the meaning — naming the fear of sharing his father's fate — should improve adherence where ordinary reminder tricks failed. I would test it by comparing his adherence rates pill by pill, by tracking whether misses cluster near father-related dates, and by checking whether a conversation that connects the pill to the loss changes his behavior more than another alarm does. The lead is refuted if he misses many medications at random, or if a simple logistical fix restores perfect adherence with no emotional link.",
      yieldAnchors: [
        "He is meticulous with every medication but one",
        "The missed pill is the one tied to his father's fatal illness",
        "He sets reminders sincerely yet 'doesn't notice' them",
      ],
      riskAnchors: [
        "The lapses target the father-linked pill specifically",
        "Misses intensify around reminders of his father",
        "Naming the underlying fear improves adherence",
      ],
      defeatedBy: [
        "He misses many medications at random",
        "A simple logistical fix restores perfect adherence",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that an out-of-awareness avoidance is at work: the one pill that links him to his father's fatal illness carries a charged meaning he won't consciously face, and the selective 'forgetting' quietly keeps that meaning at bay. This is a strong claim because it predicts checkable consequences: the lapses should target this single father-linked pill while his adherence to everything else stays excellent; the forgetting should intensify around reminders of his father, such as the death's anniversary; and surfacing the meaning — naming the fear of sharing his father's fate — should improve adherence where ordinary reminder tricks failed. I would test it by comparing his adherence rates pill by pill, by tracking whether misses cluster near father-related dates, and by checking whether a conversation that connects the pill to the loss changes his behavior more than another alarm does. The lead is refuted if he misses many medications at random, or if a simple logistical fix restores perfect adherence with no emotional link.",
    explanation:
      "The cautious 'people just forget pills sometimes' is the dismissal the pinpoint selectivity defeats; top credit goes to the avoidance conclusion that binds the father link and names a pill-by-pill and anniversary test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "Every Sunday evening a woman is gripped by a heavy dread she can't explain — her weekends are pleasant and her job is fine. The feeling started in adulthood and is specific to Sunday nights. As a child, Sunday evenings were when her parents' weekly fights reliably erupted. In one paragraph, propose the strongest conclusion about the out-of-awareness pattern and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that an out-of-awareness template tied to time and context is firing: Sunday evening is a learned cue that once reliably preceded frightening conflict, so her body produces the old dread now even though the present Sunday is safe. This is a strong claim because it predicts checkable consequences: the dread should be specific to Sunday evenings rather than spread across the week; it should track the cue itself — appearing even on objectively relaxing Sundays — rather than scaling with real Monday stress; and it should ease as she connects the feeling to its childhood source and builds new, calm Sunday-evening associations. I would test it by logging her mood by day and hour to confirm the Sunday-night spike, by checking whether the dread persists on low-stress weeks and holidays that fall on a Sunday, and by seeing whether naming the link and deliberately creating soothing Sunday rituals reduces it. The lead is refuted if the dread is really general weekday-eve anxiety about work, or if it scatters across days with no tie to the childhood pattern.",
      yieldAnchors: [
        "The dread is specific to Sunday evenings",
        "Her current weekends and job are fine",
        "Childhood Sunday evenings reliably brought parental fights",
      ],
      riskAnchors: [
        "The dread is confined to Sunday evenings, not the whole week",
        "It appears even on relaxing Sundays, tracking the cue not real stress",
        "Linking it to the childhood source and new rituals eases it",
      ],
      defeatedBy: [
        "The feeling is general anxiety about the workweek ahead",
        "The dread scatters across days with no Sunday specificity",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that an out-of-awareness template tied to time and context is firing: Sunday evening is a learned cue that once reliably preceded frightening conflict, so her body produces the old dread now even though the present Sunday is safe. This is a strong claim because it predicts checkable consequences: the dread should be specific to Sunday evenings rather than spread across the week; it should track the cue itself — appearing even on objectively relaxing Sundays — rather than scaling with real Monday stress; and it should ease as she connects the feeling to its childhood source and builds new, calm Sunday-evening associations. I would test it by logging her mood by day and hour to confirm the Sunday-night spike, by checking whether the dread persists on low-stress weeks and holidays that fall on a Sunday, and by seeing whether naming the link and deliberately creating soothing Sunday rituals reduces it. The lead is refuted if the dread is really general weekday-eve anxiety about work, or if it scatters across days with no tie to the childhood pattern.",
    explanation:
      "The inverted standard gives near-zero to 'feelings just come and go'; credit goes to the learned-cue conclusion that binds the Sunday specificity and the childhood fights and names a cue-versus-stress test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A generous man keeps befriending people who borrow money and never repay it. He says he's just 'a soft touch with bad luck,' but a friend notes he actively seeks out people in crisis, feels closest to them while rescuing them, and cools once they're back on their feet. In one paragraph, propose the strongest conclusion about the out-of-awareness pattern and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that an out-of-awareness template draws him to the rescuer role: being needed is how he has learned to feel close and secure, so he seeks out people in crisis and the unpaid loans are a byproduct of a pattern he's running, not random bad luck. This is a strong claim because it predicts checkable consequences: he should gravitate toward struggling people and feel his strongest bond while actively rescuing; his interest should fade once a friend becomes self-sufficient and no longer needs him; and the pattern should trace to an early relationship where his worth or closeness depended on being the helper. I would test it by tracking whether his closeness ratings peak during rescue and drop at recovery, by checking whether he's drawn to people in need over stable equals when given the choice, and by seeing whether the loans stop once he can get closeness without rescuing. The lead is refuted if he bonds just as strongly with self-sufficient friends and the unpaid loans are scattered, one-off accidents rather than a recurring rescue pattern.",
      yieldAnchors: [
        "He repeatedly befriends people who borrow and don't repay",
        "He actively seeks out people in crisis",
        "He feels closest while rescuing and cools once they recover",
      ],
      riskAnchors: [
        "His closeness peaks during rescue and drops at recovery",
        "He's drawn to people in need over stable equals",
        "The pattern traces to an early helper role",
      ],
      defeatedBy: [
        "He bonds just as strongly with self-sufficient friends",
        "The unpaid loans are scattered one-off accidents",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that an out-of-awareness template draws him to the rescuer role: being needed is how he has learned to feel close and secure, so he seeks out people in crisis and the unpaid loans are a byproduct of a pattern he's running, not random bad luck. This is a strong claim because it predicts checkable consequences: he should gravitate toward struggling people and feel his strongest bond while actively rescuing; his interest should fade once a friend becomes self-sufficient and no longer needs him; and the pattern should trace to an early relationship where his worth or closeness depended on being the helper. I would test it by tracking whether his closeness ratings peak during rescue and drop at recovery, by checking whether he's drawn to people in need over stable equals when given the choice, and by seeing whether the loans stop once he can get closeness without rescuing. The lead is refuted if he bonds just as strongly with self-sufficient friends and the unpaid loans are scattered, one-off accidents rather than a recurring rescue pattern.",
    explanation:
      "The cautious 'just a soft touch with bad luck' is the dismissal the seek-crisis-and-cool-at-recovery sequence defeats; top credit goes to the rescuer-template conclusion that binds the evidence and names a closeness-over-time test that could refute it.",
  },
];

export const section: SectionContent = {
  slug: "the-unconscious-reconsidered",
  title: "The Unconscious, Reconsidered",
  weekNumber: 1,
  blurb:
    "The modern unconscious isn't a basement of seething demons — it's the set of automatic, out-of-awareness patterns and templates we learned early and now run without noticing, readable from slips, repetitions, and reactions out of scale with their triggers.",
  lectureTitle:
    "1.2 The Unconscious, Reconsidered: hidden patterns, not hidden demons",
  body: `# The Unconscious, Reconsidered

When people hear "the unconscious," they often picture a dark basement full of buried traumas and seething demonic urges, waiting to erupt. That picture is dramatic, but it gets the science backwards. The modern unconscious is far more ordinary and far more useful: it is the vast set of **automatic patterns** — templates, expectations, habits, and rules — that your mind learned, mostly early in life, and now runs without your noticing. The work of this section is to trade the demon picture for the pattern picture, and to learn to read those patterns from the traces they leave.

## From hidden demons to hidden patterns

Most of what your mind does happens outside awareness, not because it is being hidden from you but because automatic is efficient. You don't consciously decide how to interpret a tone of voice, whom to trust, or what closeness should feel like — templates built from experience do that for you in an instant. These templates are usually helpful. They become a problem only when an old pattern, learned in one setting, keeps firing in new settings where it no longer fits. The point is not that something monstrous lurks below; it's that something **learned** runs below, and sometimes runs the wrong program.

## Patterns are learned early and run automatically

The reason these patterns feel invisible is that they were laid down before you had words for them, and they run faster than conscious thought. A child who learned that affection came with strings, or that standing out drew punishment, builds a template — and decades later that template still shapes how a gift or a compliment feels, without ever announcing itself. The unconscious here is not a separate willful agent; it is **procedural learning** about people and feelings, the same kind of automatic competence that lets you ride a bike without thinking. That is why insight alone often isn't enough: knowing a pattern intellectually doesn't instantly rewrite something this automatic.

## Reading the traces

You can't see a template directly, so you read it from its traces — exactly the move from the last section, now aimed at hidden patterns instead of hidden mechanisms. Four kinds of evidence are especially telling. **Slips** — saying your ex's partner's name, signing a parent's name — show a pattern leaking past the conscious script. **Doing the same thing without knowing why** — always sitting near the exit, always detouring around one street — reveals an automatic rule at work. **Repetition of choice** — picking the same kind of partner, boss, or conflict again and again across very different people — points to a template carried inside you, not to bad luck. And a **reaction far bigger than its trigger** — rage at a brisk parking attendant, a childlike sting when one friend cancels — signals that the small present event matched a large stored one.

## Disproportion is a clue, not a verdict

When a reaction is wildly out of scale with what set it off, that gap is the single richest clue that an old template just fired. But a clue is not yet a conclusion. The strong move is to name the specific pattern the disproportion suggests **and** to predict where it should and shouldn't appear: it should fire for the cue that matches the old template and stay quiet for objectively bigger threats that don't. The weak move stops at "he seems sensitive." The reckless move jumps straight to "he must have a buried trauma he's repressed" — a melodramatic leap the ordinary trigger doesn't support.

## Patterns, not demons: avoiding the lurid leap

This section's signature error is the lurid overreach: reading a name-slip as a secret all-consuming passion, a forgotten invitation as proof of hidden hatred, a missed pill as deeply repressed trauma. These readings are exciting and almost always wrong, because the evidence is usually narrow and situation-specific — a small, patterned signal, not a demon. The discipline is to fit the conclusion to the actual trace: commit to the most specific pattern the evidence warrants, and no more. A claim that the material itself defeats is not insight; it's a story.

## Commit to a pattern, name a disconfirming test

The whole craft comes down to the same habit as before, retargeted. Don't shrug ("the unconscious is unknowable") and don't melodramatize ("hidden demons"). Instead, **commit to the most specific out-of-awareness pattern the evidence supports, then name the cheapest observation that would prove you wrong.** If you think someone is drawn to unavailable partners by a template, predict that available, steady people will reliably leave them cold — and watch. If you think a slip reveals an old parent-shaped pattern, predict it appears only with parent-like authority — and check. A pattern you can disconfirm is real knowledge; a demon you can only assert is not.

## In the real world

Suppose a friend says, "I have the worst luck — every roommate I've ever had turns cold and resentful." The dodge is "people are just hard to live with"; the melodrama is "your roommates were secretly cruel." The pattern move commits to a template: maybe she reads ordinary distance as rejection and then withdraws first, producing the coldness she fears. Notice what that buys you — predictions. Neutral observers should find the roommates fairly normal; the "they've gone cold" feeling should appear early, before much has happened; and the same arc should show up with friends and partners, tracing to an early bond where closeness felt unsafe. Three cheap checks, each able to refute the idea. That is what the reconsidered unconscious offers: not a basement of demons to fear, but a set of learned patterns you can name, test, and eventually change.`,
  homework: {
    mcq,
    hybrid,
    written,
  },
};
