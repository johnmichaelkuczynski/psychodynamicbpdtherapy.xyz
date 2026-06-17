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
      "A man's manager gives him a single piece of mild, routine feedback, and he instantly feels worthless and braces to be fired; he reacts this way to any boss, however gentle, and grew up with a father nothing could satisfy. Which conclusion best follows?",
    mcOptions: [
      {
        text: "His reaction is likely being lived through an old template rather than the present feedback — the manager has been slotted into the role of the never-satisfied father, with himself as the worthless child, so he meets a routine note as if it were a verdict; test whether the dread fires with any authority figure regardless of how mild the feedback is, whether the intensity fits the old relationship better than the actual words, and whether it eases once the template, not the manager, is named.",
        credit: 1.0,
      },
      {
        text: "It's probably some sensitivity to criticism from his past; we could look into how he hears feedback.",
        credit: 0.6,
      },
      {
        text: "You can't psychoanalyze a grown man over a strict father; the past is the past and has nothing to do with how he hears his boss.",
        credit: 0,
      },
      {
        text: "He seems to take feedback from bosses very hard.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "His reaction is likely being lived through an old template rather than the present feedback — the manager has been slotted into the role of the never-satisfied father, with himself as the worthless child, so he meets a routine note as if it were a verdict; test whether the dread fires with any authority figure regardless of how mild the feedback is, whether the intensity fits the old relationship better than the actual words, and whether it eases once the template, not the manager, is named.",
    explanation:
      "Top credit reads the reaction as the critic/worthless-child template replayed onto the manager and names an any-authority-figure test; 'the past is the past' is the dodge the with-any-boss, intensity-mismatch pattern defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A woman makes warm new friends easily, but the first time a friend is too busy to meet for a week, she becomes certain she's being discarded and coldly pulls away first; this happens with every friend, and her mother used to withdraw from her without warning. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She seems to give up on friendships quickly.",
        credit: 0.3,
      },
      {
        text: "Her pulling away is likely a replay of an old template rather than a read on this friend — a busy week has been slotted into the abandoning-caregiver script, so she abandons first to control a rejection she's sure is coming; test whether the certainty fires with every friend regardless of their actual reliability, whether it tracks the old pattern more than anything this friend did, and whether it loosens once she sees she's reacting to the template, not the person.",
        credit: 1.0,
      },
      {
        text: "It's probably an old fear of being left; we could look into why she pulls back.",
        credit: 0.6,
      },
      {
        text: "This proves her mother permanently damaged her ability to trust, so the friendships were doomed from the start.",
        credit: 0,
      },
    ],
    correctAnswer:
      "Her pulling away is likely a replay of an old template rather than a read on this friend — a busy week has been slotted into the abandoning-caregiver script, so she abandons first to control a rejection she's sure is coming; test whether the certainty fires with every friend regardless of their actual reliability, whether it tracks the old pattern more than anything this friend did, and whether it loosens once she sees she's reacting to the template, not the person.",
    explanation:
      "Full credit reads the cutoff as the abandoning-caregiver template replayed and names a with-every-friend test; 'her mother permanently damaged her' is the overreach the thin, deterministic evidence doesn't support.",
  },
  {
    itemType: "mc",
    prompt:
      "A new employee treats her consistently kind, supportive manager with cold suspicion, reading every word of praise as the setup before an attack; she grew up with a parent who was warm one moment and suddenly cruel the next, and the manager has shown no sign of cruelty. Which conclusion best follows?",
    mcOptions: [
      {
        text: "It's probably mistrust carried over from her childhood; we could look into her wariness.",
        credit: 0.6,
      },
      {
        text: "Her suspicion is likely the present manager being met through an old template — the warm-then-cruel parent — so kindness itself reads as the dangerous calm before harm; test whether the wariness tracks the old pattern rather than anything the manager has actually done, whether it fires with every kind authority figure, and whether it softens once she can separate this manager's real behavior from the template.",
        credit: 1.0,
      },
      {
        text: "She seems not to trust her manager's compliments.",
        credit: 0.3,
      },
      {
        text: "You really can't say someone's childhood is behind this; people are too complex to link a boss to a parent.",
        credit: 0,
      },
    ],
    correctAnswer:
      "Her suspicion is likely the present manager being met through an old template — the warm-then-cruel parent — so kindness itself reads as the dangerous calm before harm; test whether the wariness tracks the old pattern rather than anything the manager has actually done, whether it fires with every kind authority figure, and whether it softens once she can separate this manager's real behavior from the template.",
    explanation:
      "Top credit reads the suspicion as the warm-then-cruel template overlaid on a kind manager and names a tracks-the-old-pattern test; 'people are too complex to link a boss to a parent' is the dodge the no-sign-of-cruelty mismatch defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A man with a steady, devoted partner keeps picking fights and threatening to leave, and the provocations escalate exactly when the relationship is going well; his first caregiver abandoned him, and he says he's 'waiting for her to leave like everyone does.' Which conclusion best follows?",
    mcOptions: [
      {
        text: "He seems to start arguments when things are calm.",
        credit: 0.3,
      },
      {
        text: "He's just manipulative and likes drama; there's nothing deeper to read in a man who picks fights.",
        credit: 0,
      },
      {
        text: "It's probably an old fear of abandonment acting up; we could look into the fights.",
        credit: 0.6,
      },
      {
        text: "The provocations are likely an old template being enacted, not feelings about this partner — he's unconsciously staging the abandonment he expects so he controls when it comes, turning her into the leaving caregiver; test whether the fights spike precisely when things are good (when the feared loss feels closest), whether they track the old script rather than any real problem between them, and whether they ease once the repetition is named instead of acted out.",
        credit: 1.0,
      },
    ],
    correctAnswer:
      "The provocations are likely an old template being enacted, not feelings about this partner — he's unconsciously staging the abandonment he expects so he controls when it comes, turning her into the leaving caregiver; test whether the fights spike precisely when things are good (when the feared loss feels closest), whether they track the old script rather than any real problem between them, and whether they ease once the repetition is named instead of acted out.",
    explanation:
      "Full credit reads the provocations as the abandonment template enacted to provoke the feared ending and names an escalates-when-things-are-good test; 'just manipulative' is the overreach the waiting-to-be-left, going-well timing defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A woman feels bored and faintly contemptuous toward kind, available men and only feels 'in love' when chasing someone distant who withholds affection, the way her father did; the pattern repeats across every relationship. Which conclusion best follows?",
    mcOptions: [
      {
        text: "It's probably a type she's drawn to from her past; we could look into her choices.",
        credit: 0.6,
      },
      {
        text: "She seems to prefer men who are hard to get.",
        credit: 0.3,
      },
      {
        text: "Her attraction is likely organized by an old template rather than by these particular men — only the withholding-father dyad feels like love, so availability reads as boredom and distance reads as desire; test whether the pull tracks unavailability itself rather than the actual qualities of the man, whether it repeats across every relationship, and whether it shifts once she recognizes she's chasing the template, not the person.",
        credit: 1.0,
      },
      {
        text: "Some people just like a challenge; you can't tie who someone dates to their dad.",
        credit: 0,
      },
    ],
    correctAnswer:
      "Her attraction is likely organized by an old template rather than by these particular men — only the withholding-father dyad feels like love, so availability reads as boredom and distance reads as desire; test whether the pull tracks unavailability itself rather than the actual qualities of the man, whether it repeats across every relationship, and whether it shifts once she recognizes she's chasing the template, not the person.",
    explanation:
      "Top credit reads the attraction as the withholding-father template organizing her choices and names a tracks-unavailability test; 'people just like a challenge' is the dodge the repeats-across-every-relationship pattern defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A graduate student, when a busy professor is slow to answer an email, becomes convinced the professor secretly holds him in contempt; he had a withering older sibling who mocked him, and he reads ordinary delay as disdain from every mentor. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He seems to assume professors look down on him.",
        credit: 0.3,
      },
      {
        text: "His certainty is likely the professor being filtered through an old template — the mocking sibling — so a neutral delay is read as the contempt he learned to expect; test whether the reading fires with every mentor regardless of how they actually treat him, whether it fits the old relationship better than anything the professor did, and whether it eases once the delay is weighed on its own facts rather than the template.",
        credit: 1.0,
      },
      {
        text: "This shows his sibling ruined his self-worth for life, so no professor will ever reach him.",
        credit: 0,
      },
      {
        text: "It's probably old hurt from his sibling coloring things; we could look into how he reads delays.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "His certainty is likely the professor being filtered through an old template — the mocking sibling — so a neutral delay is read as the contempt he learned to expect; test whether the reading fires with every mentor regardless of how they actually treat him, whether it fits the old relationship better than anything the professor did, and whether it eases once the delay is weighed on its own facts rather than the template.",
    explanation:
      "Full credit reads the contempt-reading as the mocking-sibling template filtering a neutral delay and names a fires-with-every-mentor test; 'his sibling ruined his self-worth for life' is the overreach the thin evidence doesn't support.",
  },
  {
    itemType: "mc",
    prompt:
      "A man's girlfriend cancels a date because she's been hospitalized with appendicitis, and he erupts with the same rage and certainty of betrayal he felt when his mother walked out years ago, insisting she's abandoning him on purpose. Which conclusion best follows?",
    mcOptions: [
      {
        text: "It's probably his abandonment history flaring up; we could look into his reaction.",
        credit: 0.6,
      },
      {
        text: "He seems to overreact when plans change.",
        credit: 0.3,
      },
      {
        text: "His rage is likely the abandonment template firing rather than a response to the actual event — a hospitalization is benign, yet it's been slotted into the mother-who-left script, so he feels purposely abandoned; test whether the intensity fits the old loss far better than the present facts, whether the same fury appears at any cancellation regardless of reason, and whether it subsides once he sees he's reacting to the template, not to her.",
        credit: 1.0,
      },
      {
        text: "You can't pin a grown man's temper on his mother leaving; the past is over and done.",
        credit: 0,
      },
    ],
    correctAnswer:
      "His rage is likely the abandonment template firing rather than a response to the actual event — a hospitalization is benign, yet it's been slotted into the mother-who-left script, so he feels purposely abandoned; test whether the intensity fits the old loss far better than the present facts, whether the same fury appears at any cancellation regardless of reason, and whether it subsides once he sees he's reacting to the template, not to her.",
    explanation:
      "Top credit reads the rage as the abandonment template overlaid on a benign event and names an intensity-mismatch test; 'the past is over and done' is the dodge the fury-at-a-hospitalization mismatch defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A woman's new boss actually does criticize her harshly in front of colleagues and take credit for her work, and she becomes angry and distrustful; a friend insists this must be her 'daddy issues' resurfacing, though the boss's behavior plainly warrants the reaction. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Here the present facts, not an old template, best explain her reaction — the boss genuinely mistreated her, so reading this as a childhood pattern would be the error; the disciplined move is to invoke the template only if her reaction outran the real provocation, and to test whether her distrust fits what the boss actually did rather than an old script — which here it does.",
        credit: 1.0,
      },
      {
        text: "It's probably a fair reaction, though old patterns could be involved; we could look into it.",
        credit: 0.6,
      },
      {
        text: "She seems upset with her boss.",
        credit: 0.3,
      },
      {
        text: "This is clearly her unresolved father issues; a harsh boss always means a daughter is replaying her dad.",
        credit: 0,
      },
    ],
    correctAnswer:
      "Here the present facts, not an old template, best explain her reaction — the boss genuinely mistreated her, so reading this as a childhood pattern would be the error; the disciplined move is to invoke the template only if her reaction outran the real provocation, and to test whether her distrust fits what the boss actually did rather than an old script — which here it does.",
    explanation:
      "Top credit refuses the template when the boss's real mistreatment explains the reaction and names the fits-the-actual-provocation test; 'clearly her father issues' is the overreach the warranted, fact-based reaction defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A man who grew up with a relentlessly critical mother now finds himself harshly criticizing his own partner over tiny imperfections, hearing his mother's exact phrases come out of his mouth, and feeling briefly powerful when he does. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He seems critical of his partner.",
        credit: 0.3,
      },
      {
        text: "It's probably his mother's voice he absorbed; we could look into his criticism.",
        credit: 0.6,
      },
      {
        text: "He is likely replaying an old template from the other side — having lived the critic/worthless-child dyad as the child, he now occupies the critic's role with his partner cast as the worthless one, which converts old helplessness into momentary power; test whether the criticism echoes his mother's specific style rather than his partner's actual flaws, whether it flares when he feels small elsewhere, and whether it eases once he recognizes whose voice he's borrowing.",
        credit: 1.0,
      },
      {
        text: "Plenty of people are just picky about their partners; you can't blame his mother for how he acts.",
        credit: 0,
      },
    ],
    correctAnswer:
      "He is likely replaying an old template from the other side — having lived the critic/worthless-child dyad as the child, he now occupies the critic's role with his partner cast as the worthless one, which converts old helplessness into momentary power; test whether the criticism echoes his mother's specific style rather than his partner's actual flaws, whether it flares when he feels small elsewhere, and whether it eases once he recognizes whose voice he's borrowing.",
    explanation:
      "Full credit reads the criticism as the critic/worthless-child template enacted from the other role and names an echoes-his-mother's-style test; 'people are just picky' is the dodge the hearing-her-exact-phrases, momentary-power pattern defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A woman quickly idealizes a new mentor as the warm, rescuing parent she never had, then is devastated and enraged when the mentor simply sets a normal boundary, experiencing it as a profound betrayal. Which conclusion best follows?",
    mcOptions: [
      {
        text: "It's probably an old longing for a good parent; we could look into her reaction to the boundary.",
        credit: 0.6,
      },
      {
        text: "She seems to get very attached to mentors fast.",
        credit: 0.3,
      },
      {
        text: "Her swing is likely an old template being projected, not a read on the mentor — she's cast him as the rescuing parent she never had, so an ordinary limit collapses the fantasy and triggers the betrayal she knew with the real caregiver; test whether the idealization formed before she knew much about him, whether the devastation fits the longed-for template rather than the small boundary, and whether it settles once she sees the mentor as an ordinary person, not the rescuer.",
        credit: 1.0,
      },
      {
        text: "You can't really know what's going on inside someone who gets attached quickly; people are too complicated.",
        credit: 0,
      },
    ],
    correctAnswer:
      "Her swing is likely an old template being projected, not a read on the mentor — she's cast him as the rescuing parent she never had, so an ordinary limit collapses the fantasy and triggers the betrayal she knew with the real caregiver; test whether the idealization formed before she knew much about him, whether the devastation fits the longed-for template rather than the small boundary, and whether it settles once she sees the mentor as an ordinary person, not the rescuer.",
    explanation:
      "Top credit reads the swing as the rescuing-parent template projected onto the mentor and names an idealized-before-she-knew-him test; 'people are too complicated' is the dodge the formed-before-she-knew-him, devastation-over-a-small-limit pattern defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "Sure that her new coworkers will freeze her out the way her family did, a woman acts guarded and prickly from day one, rebuffs invitations, and within weeks the team has indeed stopped including her. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She seems to end up left out at work.",
        credit: 0.3,
      },
      {
        text: "Some workplaces are just cliquey; there's nothing about her to read into being excluded.",
        credit: 0,
      },
      {
        text: "She is likely unconsciously provoking the very exclusion she expects, enacting an old template — cast the coworkers as the rejecting family and behave so as to confirm it — so the prophecy fulfills itself; test whether her guardedness preceded any actual coldness from them, whether she rebuffs genuine overtures that don't fit the script, and whether the pattern shifts once she sees she's recreating the template rather than reading the team.",
        credit: 1.0,
      },
      {
        text: "It's probably an old expectation of rejection at play; we could look into how she started out.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "She is likely unconsciously provoking the very exclusion she expects, enacting an old template — cast the coworkers as the rejecting family and behave so as to confirm it — so the prophecy fulfills itself; test whether her guardedness preceded any actual coldness from them, whether she rebuffs genuine overtures that don't fit the script, and whether the pattern shifts once she sees she's recreating the template rather than reading the team.",
    explanation:
      "Full credit reads the exclusion as a self-fulfilling repetition of the rejecting-family template and names a guarded-before-any-coldness test; 'workplaces are cliquey' is the dodge the prickly-from-day-one, rebuffs-overtures pattern defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "Whenever his easygoing wife makes a small request — 'could you call the plumber?' — a man bristles as though being controlled and dominated, the way he felt under a tyrannical father; he reacts this way to the gentlest ask. Which conclusion best follows?",
    mcOptions: [
      {
        text: "It's probably old feelings about being controlled; we could look into his reactions to requests.",
        credit: 0.6,
      },
      {
        text: "His bristling is likely his wife being met through an old template — the tyrannical father — so a mild request is heard as domination it never was; test whether the reaction fires at even the gentlest ask regardless of tone, whether it fits the old control struggle better than anything his wife actually said, and whether it eases once he can hear the request on its own terms rather than the template's.",
        credit: 1.0,
      },
      {
        text: "This proves his father turned him into someone who can never be in a relationship.",
        credit: 0,
      },
      {
        text: "He seems to get defensive when his wife asks for things.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "His bristling is likely his wife being met through an old template — the tyrannical father — so a mild request is heard as domination it never was; test whether the reaction fires at even the gentlest ask regardless of tone, whether it fits the old control struggle better than anything his wife actually said, and whether it eases once he can hear the request on its own terms rather than the template's.",
    explanation:
      "Top credit reads the bristling as the tyrannical-father template overlaid on a mild request and names a fires-at-the-gentlest-ask test; 'he can never be in a relationship' is the overreach the thin evidence doesn't support.",
  },
  {
    itemType: "mc",
    prompt:
      "A woman who as a child had to manage her unstable mother's moods now organizes every romantic relationship around rescuing a troubled partner, feeling worthless the moment a partner is stable and needs no rescuing. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She seems to date people who need a lot of help.",
        credit: 0.3,
      },
      {
        text: "Her pattern likely replays an old template, not a free choice of partners — the caretaker/needy-other dyad she lived with her mother, where being needed is the only way she feels worth keeping — so a stable partner leaves her feeling useless; test whether her interest tracks how much rescuing a partner needs rather than who he is, whether it repeats across relationships, and whether it shifts once she sees she's recreating the template rather than loving the person.",
        credit: 1.0,
      },
      {
        text: "It's probably a caretaking habit from her childhood; we could look into her relationships.",
        credit: 0.6,
      },
      {
        text: "Lots of people are nurturing; you can't trace who she dates back to her mother.",
        credit: 0,
      },
    ],
    correctAnswer:
      "Her pattern likely replays an old template, not a free choice of partners — the caretaker/needy-other dyad she lived with her mother, where being needed is the only way she feels worth keeping — so a stable partner leaves her feeling useless; test whether her interest tracks how much rescuing a partner needs rather than who he is, whether it repeats across relationships, and whether it shifts once she sees she's recreating the template rather than loving the person.",
    explanation:
      "Full credit reads the caretaking as the caretaker/needy-other template replayed and names a tracks-how-much-rescuing test; 'lots of people are nurturing' is the dodge the worthless-when-he's-stable pattern defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A talented man quits each job abruptly the moment a supervisor seems even slightly displeased, certain he's about to be fired as he felt he always disappointed an impossible-to-please father; he has resigned from five good jobs this way. Which conclusion best follows?",
    mcOptions: [
      {
        text: "It's probably an old fear of disappointing authority; we could look into the resignations.",
        credit: 0.6,
      },
      {
        text: "He just can't hold down a job and makes excuses; there's nothing to read into a quitter.",
        credit: 0,
      },
      {
        text: "He seems to leave jobs whenever a boss is unhappy.",
        credit: 0.3,
      },
      {
        text: "His quitting likely enacts an old template rather than reading the real situation — the disappointing-child/impossible-father dyad — so he abandons the job first to control the firing he's sure is coming; test whether he bolts at the faintest sign of displeasure regardless of his actual standing, whether the dread fits the old relationship more than the supervisor's real reaction, and whether it eases once the template, not the boss, is named.",
        credit: 1.0,
      },
    ],
    correctAnswer:
      "His quitting likely enacts an old template rather than reading the real situation — the disappointing-child/impossible-father dyad — so he abandons the job first to control the firing he's sure is coming; test whether he bolts at the faintest sign of displeasure regardless of his actual standing, whether the dread fits the old relationship more than the supervisor's real reaction, and whether it eases once the template, not the boss, is named.",
    explanation:
      "Top credit reads the quitting as the disappointing-child template enacted to control the feared firing and names a bolts-at-the-faintest-sign test; 'he just can't hold down a job' is the overreach the talented, five-good-jobs detail defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A woman keeps a warm, respectful older friend at arm's length, certain that letting her get close will mean being smothered and controlled, the way her intrusive mother once engulfed her; the friend has always respected her space. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She seems to keep her friend at a distance.",
        credit: 0.3,
      },
      {
        text: "It's probably an old fear of being smothered; we could look into her distance-keeping.",
        credit: 0.6,
      },
      {
        text: "Her distance is likely the friend being met through an old template — the engulfing mother — so ordinary closeness is felt as the loss of self it once was; test whether the fear fires regardless of how much space the friend actually respects, whether it fits the old relationship rather than anything the friend has done, and whether it eases once she can see this friend as separate from the template.",
        credit: 1.0,
      },
      {
        text: "You can't psychoanalyze why someone keeps friends at a distance; the past has nothing to do with it.",
        credit: 0,
      },
    ],
    correctAnswer:
      "Her distance is likely the friend being met through an old template — the engulfing mother — so ordinary closeness is felt as the loss of self it once was; test whether the fear fires regardless of how much space the friend actually respects, whether it fits the old relationship rather than anything the friend has done, and whether it eases once she can see this friend as separate from the template.",
    explanation:
      "Full credit reads the distance as the engulfing-mother template overlaid on a respectful friend and names a fires-regardless-of-space test; 'the past has nothing to do with it' is the dodge the friend-always-respects-her-space mismatch defeats.",
  },
];

const hybrid: HomeworkItem[] = [
  {
    itemType: "hybrid",
    prompt:
      "A man cannot accept help from a generous senior colleague without feeling a hot urge to outdo and defeat him, treating every kind offer as a contest; he grew up fiercely competing with a favored older brother for a scarce parent's attention. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He seems competitive with his senior colleague.",
        credit: 0.3,
      },
      {
        text: "His rivalry is likely an old template being replayed, not a response to this colleague — the brother-rival dyad over scarce love — so a generous offer registers as a threat to be beaten rather than help; test whether the competitive urge fires with any generous senior figure regardless of their actual stance, whether it fits the old sibling struggle better than anything the colleague did, and whether it eases once he recognizes the template he's casting the colleague into.",
        credit: 1.0,
      },
      {
        text: "It's probably old sibling rivalry surfacing; we could look into his competitiveness.",
        credit: 0.6,
      },
      {
        text: "Ambitious men are just competitive; you can't blame his brother for how he treats colleagues.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'he's replaying the brother-rival template' lead from the rival 'this colleague is genuinely competing with him,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: check whether the urge to outdo fires even when the colleague is plainly only offering help, with no contest in sight — rivalry triggered by generosity itself points to the old template, not the present person. My lead is refuted if the colleague is in fact competing with him for the same position, which would make his wariness a fair read of the actual situation.",
      yieldAnchors: [
        "He can't accept help without wanting to defeat the colleague",
        "Every kind offer registers as a contest",
        "He competed with a favored brother for scarce attention",
      ],
      riskAnchors: [
        "The urge fires with any generous senior figure",
        "It fits the old sibling struggle better than the colleague's behavior",
        "It eases once the template is named",
      ],
      defeatedBy: [
        "The colleague really is competing with him for the same role",
        "His reaction tracks real rivalry, not generosity",
      ],
    },
    correctAnswer:
      "His rivalry is likely an old template being replayed, not a response to this colleague — the brother-rival dyad over scarce love — so a generous offer registers as a threat to be beaten rather than help; test whether the competitive urge fires with any generous senior figure regardless of their actual stance, whether it fits the old sibling struggle better than anything the colleague did, and whether it eases once he recognizes the template he's casting the colleague into.",
    explanation:
      "Full credit reads the rivalry as the brother-rival template replayed onto a generous colleague and is paired with a fires-even-when-only-helping test that names its refutation; 'ambitious men are just competitive' is the dodge the triggered-by-generosity pattern defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A woman is happy and close with a partner until the relationship turns serious, at which point she manufactures reasons to end it; each time, she says she 'felt it slipping away' before anything went wrong, and her parents divorced bitterly when she was small. Which conclusion best follows?",
    mcOptions: [
      {
        text: "It's probably an old fear from her parents' divorce; we could look into the breakups.",
        credit: 0.6,
      },
      {
        text: "She seems to end relationships when they get serious.",
        credit: 0.3,
      },
      {
        text: "This shows her parents' divorce destroyed her ability to ever commit.",
        credit: 0,
      },
      {
        text: "Her sabotage is likely an old template being enacted, not a verdict on the partner — anticipating the bitter loss she witnessed, she ends it first to control the abandonment she's sure is coming, casting the partner as the leaving parent; test whether the urge to end it spikes precisely as closeness deepens (when the feared loss feels nearest), whether 'it's slipping away' tracks the old script rather than anything real, and whether it eases once the repetition is named instead of acted out.",
        credit: 1.0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'she's enacting an old abandonment template' lead from the rival 'these relationships genuinely had problems,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: check whether the urge to break up tracks the depth of commitment rather than any real trouble, spiking exactly when things are going well — sabotage timed to closeness points to the template, not the partner. My lead is refuted if each relationship had concrete, independent problems that explain the endings.",
      yieldAnchors: [
        "She ends relationships once they turn serious",
        "She 'felt it slipping' before anything went wrong",
        "Her parents divorced bitterly in her childhood",
      ],
      riskAnchors: [
        "The urge to end it spikes as closeness deepens",
        "The 'slipping' feeling precedes any real problem",
        "It eases once the repetition is named",
      ],
      defeatedBy: [
        "Each relationship had concrete problems of its own",
        "The breakups track real trouble, not closeness",
      ],
    },
    correctAnswer:
      "Her sabotage is likely an old template being enacted, not a verdict on the partner — anticipating the bitter loss she witnessed, she ends it first to control the abandonment she's sure is coming, casting the partner as the leaving parent; test whether the urge to end it spikes precisely as closeness deepens (when the feared loss feels nearest), whether 'it's slipping away' tracks the old script rather than anything real, and whether it eases once the repetition is named instead of acted out.",
    explanation:
      "Full credit reads the sabotage as the abandonment template enacted to control the feared loss and is paired with a spikes-as-closeness-deepens test that names its refutation; 'her parents' divorce destroyed her ability to commit' is the overreach the thin evidence doesn't support.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A man who was raised by a cold, withholding father volunteers to mentor younger workers, then treats them with the same icy unavailability he hated, and feels a strange satisfaction when they look hurt. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He seems distant with the people he mentors.",
        credit: 0.3,
      },
      {
        text: "It's probably his father's coldness he picked up; we could look into how he mentors.",
        credit: 0.6,
      },
      {
        text: "He is likely replaying the old template from the opposite role — having been the hurt child of a withholding father, he now occupies the withholding role with mentees cast as the hurt child, mastering old pain by inflicting it; test whether his coldness mirrors his father's specific style rather than anything the mentees did, whether the satisfaction tracks their visible hurt, and whether it eases once he recognizes whose role he's stepped into.",
        credit: 1.0,
      },
      {
        text: "Some mentors are just aloof; you can't connect his coldness to his father.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'he's enacting the withholding template from the other side' lead from the rival 'he's simply a reserved person,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: check whether his coldness is aimed specifically at moments the mentees show need or hurt, and whether it mirrors his father's particular style — withholding keyed to their distress points to a role reversal, not general reserve. My lead is refuted if he's evenly reserved with everyone and shows no satisfaction at their hurt.",
      yieldAnchors: [
        "He treats mentees with his father's icy unavailability",
        "He feels satisfaction when they look hurt",
        "He was raised by a cold, withholding father",
      ],
      riskAnchors: [
        "His coldness mirrors his father's specific style",
        "The satisfaction tracks the mentees' visible hurt",
        "It eases once he sees whose role he's taken",
      ],
      defeatedBy: [
        "He's evenly reserved with everyone",
        "He takes no satisfaction in others' hurt",
      ],
    },
    correctAnswer:
      "He is likely replaying the old template from the opposite role — having been the hurt child of a withholding father, he now occupies the withholding role with mentees cast as the hurt child, mastering old pain by inflicting it; test whether his coldness mirrors his father's specific style rather than anything the mentees did, whether the satisfaction tracks their visible hurt, and whether it eases once he recognizes whose role he's stepped into.",
    explanation:
      "Full credit reads the coldness as the withholding template enacted from the other role and is paired with a keyed-to-their-distress test that names its refutation; 'some mentors are just aloof' is the dodge the satisfaction-at-their-hurt pattern defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "When his partner spends an evening with her own friends, a man feels the floor drop out and is certain she's leaving him, though she's warm and committed; his mother would disappear for days without explanation when he was a boy. Which conclusion best follows?",
    mcOptions: [
      {
        text: "It's probably his old fear of being left; we could look into his reaction to her nights out.",
        credit: 0.6,
      },
      {
        text: "Wanting your partner around all the time is just clingy; there's nothing underneath it to read.",
        credit: 0,
      },
      {
        text: "He seems anxious when his partner goes out.",
        credit: 0.3,
      },
      {
        text: "His panic is likely his partner being met through an old template — the disappearing mother — so an ordinary night out is felt as the start of abandonment; test whether the dread fires at any sign of her separateness regardless of her actual commitment, whether it fits the old disappearances better than anything she's doing, and whether it eases once he can see her autonomy as separate from the template.",
        credit: 1.0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'he's meeting her through the disappearing-mother template' lead from the rival 'his partner really is pulling away,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: check whether the panic fires at any small sign of her separateness even when she's warm and reliable — dread triggered by ordinary autonomy points to the old template, not her behavior. My lead is refuted if she is in fact withdrawing, cancelling, or growing distant, which would make his worry a fair read of the present.",
      yieldAnchors: [
        "He feels she's leaving when she sees her own friends",
        "She is warm and committed",
        "His mother vanished for days in his childhood",
      ],
      riskAnchors: [
        "The dread fires at any sign of her separateness",
        "It fits the old disappearances more than her behavior",
        "It eases once her autonomy is seen apart from the template",
      ],
      defeatedBy: [
        "She really is withdrawing and growing distant",
        "His worry tracks real changes in her behavior",
      ],
    },
    correctAnswer:
      "His panic is likely his partner being met through an old template — the disappearing mother — so an ordinary night out is felt as the start of abandonment; test whether the dread fires at any sign of her separateness regardless of her actual commitment, whether it fits the old disappearances better than anything she's doing, and whether it eases once he can see her autonomy as separate from the template.",
    explanation:
      "Full credit reads the panic as the disappearing-mother template overlaid on an ordinary night out and is paired with a fires-at-any-separateness test that names its refutation; 'just clingy' is the dodge the warm-and-committed mismatch defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A woman tells her therapist she fears her husband is pulling away; on inquiry, he has in fact stopped calling, cancelled their last three plans, and started staying late with a new colleague, yet she keeps apologizing as if her 'old abandonment issues' are the whole story. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Here the present facts, not an old template, best explain her fear — the husband's concrete withdrawal warrants concern, so writing it off as her 'abandonment issues' would be the error; the disciplined move is to credit the real evidence and invoke the template only if her reaction outran it, testing whether her fear fits what he's actually doing — which here it does.",
        credit: 1.0,
      },
      {
        text: "It's probably partly real and partly old patterns; we could look into both.",
        credit: 0.6,
      },
      {
        text: "She seems worried about her husband.",
        credit: 0.3,
      },
      {
        text: "This is just her abandonment issues again; a woman who fears being left is always replaying her past.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'the present facts justify her fear' lead from the rival 'this is her old template misfiring,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: weigh whether there is real, current evidence of withdrawal — cancelled plans, stopped calls, new distance — that a neutral observer would also find concerning; concrete changes in his behavior point to a fact-based fear, not a template. My lead is refuted if his behavior is actually unchanged and only her perception has shifted, which would point back to the old pattern.",
      yieldAnchors: [
        "The husband stopped calling and cancelled three plans",
        "He started staying late with a new colleague",
        "A neutral observer would also find this concerning",
      ],
      riskAnchors: [
        "Her fear fits his actual, current behavior",
        "Real evidence of withdrawal is present",
        "The concern would stand for any observer",
      ],
      defeatedBy: [
        "His behavior is actually unchanged",
        "Only her perception, not his conduct, has shifted",
      ],
    },
    correctAnswer:
      "Here the present facts, not an old template, best explain her fear — the husband's concrete withdrawal warrants concern, so writing it off as her 'abandonment issues' would be the error; the disciplined move is to credit the real evidence and invoke the template only if her reaction outran it, testing whether her fear fits what he's actually doing — which here it does.",
    explanation:
      "Full credit credits the present facts when the husband's real withdrawal warrants the fear and is paired with a neutral-observer test that names its refutation; 'just her abandonment issues again' is the overreach the documented withdrawal defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A woman who grew up amid constant household uproar finds calm relationships unbearable and, without quite meaning to, stirs up crises and confrontations that restore the familiar chaos; she says peace makes her feel 'something is wrong.' Which conclusion best follows?",
    mcOptions: [
      {
        text: "She seems to create drama in calm times.",
        credit: 0.3,
      },
      {
        text: "She is likely recreating an old template, not reacting to anything present — the chaotic household is the only relational world that feels like home, so she unconsciously manufactures the uproar to restore the familiar; test whether the crisis-stirring fires specifically when things are calm (when the unfamiliar peace rises), whether it tracks the old chaos rather than any real problem, and whether it eases once the pull to recreate the template is named.",
        credit: 1.0,
      },
      {
        text: "It's probably the chaos she grew up with pulling at her; we could look into the crises.",
        credit: 0.6,
      },
      {
        text: "Some people are just drama-prone; you can't tie that to her childhood home.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'she's recreating the familiar-chaos template' lead from the rival 'these crises are genuinely arising on their own,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: check whether the crises reliably erupt during stretches of calm rather than in response to real external problems — drama timed to peace points to recreating the template, not to events. My lead is refuted if the crises track genuine, independent stressors that would unsettle anyone.",
      yieldAnchors: [
        "She finds calm relationships unbearable",
        "She stirs up crises that restore chaos",
        "Peace makes her feel something is wrong",
      ],
      riskAnchors: [
        "The crisis-stirring fires specifically during calm",
        "It tracks the old chaos, not real problems",
        "It eases once the pull to recreate it is named",
      ],
      defeatedBy: [
        "The crises track genuine external stressors",
        "The uproar arises independently of her",
      ],
    },
    correctAnswer:
      "She is likely recreating an old template, not reacting to anything present — the chaotic household is the only relational world that feels like home, so she unconsciously manufactures the uproar to restore the familiar; test whether the crisis-stirring fires specifically when things are calm (when the unfamiliar peace rises), whether it tracks the old chaos rather than any real problem, and whether it eases once the pull to recreate the template is named.",
    explanation:
      "Full credit reads the drama as a recreation of the familiar-chaos template and is paired with an erupts-during-calm test that names its refutation; 'some people are just drama-prone' is the dodge the peace-feels-wrong pattern defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A man in therapy hears his neutral therapist's clarifying question as harsh judgment and feels suddenly small and scolded; he had a mother who turned every conversation into an interrogation, and the therapist's tone was plainly mild. Which conclusion best follows?",
    mcOptions: [
      {
        text: "It's probably his mother's interrogations coloring the room; we could look into his reaction.",
        credit: 0.6,
      },
      {
        text: "He seems to feel judged by his therapist.",
        credit: 0.3,
      },
      {
        text: "You can't read a man's mother into how he hears a therapist; that's overreaching about the past.",
        credit: 0,
      },
      {
        text: "His feeling scolded is likely the therapist being met through an old template — the interrogating mother — so a neutral question lands as the judgment he learned to expect; test whether the sense of being scolded fits the old relationship rather than the therapist's actual mild tone, whether it fires at any clarifying question regardless of phrasing, and whether it shifts once the template is named in the room.",
        credit: 1.0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'he's meeting the therapist through the interrogating-mother template' lead from the rival 'the therapist actually was sharp with him,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: check whether a plainly mild, neutral question still lands as scolding — judgment felt where none was delivered points to the template, not the therapist. My lead is refuted if the therapist's tone was in fact pointed or critical, which would make his reaction a fair read of what happened.",
      yieldAnchors: [
        "He hears a neutral question as harsh judgment",
        "He feels small and scolded",
        "His mother turned talks into interrogations",
      ],
      riskAnchors: [
        "The feeling fits the old relationship, not the mild tone",
        "It fires at any clarifying question",
        "It shifts once the template is named in the room",
      ],
      defeatedBy: [
        "The therapist's tone was actually sharp",
        "His reaction tracks real criticism, not the template",
      ],
    },
    correctAnswer:
      "His feeling scolded is likely the therapist being met through an old template — the interrogating mother — so a neutral question lands as the judgment he learned to expect; test whether the sense of being scolded fits the old relationship rather than the therapist's actual mild tone, whether it fires at any clarifying question regardless of phrasing, and whether it shifts once the template is named in the room.",
    explanation:
      "Full credit reads the scolded feeling as the interrogating-mother template met in the room and is paired with a judgment-felt-where-none-given test that names its refutation; 'that's overreaching about the past' is the dodge the mild-tone mismatch defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A man feels anxious and worthless in any relationship where he isn't fixing the other person's problems, and gravitates toward troubled partners he can rescue; as a boy he kept his depressed father afloat and was praised only for it. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He seems drawn to partners he can help.",
        credit: 0.3,
      },
      {
        text: "It's probably the caretaker role he learned as a boy; we could look into his relationships.",
        credit: 0.6,
      },
      {
        text: "His pattern likely replays an old template, not a free preference — the rescuer/needy-other dyad in which being needed was the only route to worth — so a partner who doesn't need rescuing leaves him feeling worthless; test whether his comfort tracks how much fixing a partner requires rather than who they are, whether it repeats across relationships, and whether it shifts once he sees he's recreating the template rather than choosing freely.",
        credit: 1.0,
      },
      {
        text: "Helpful people just like to be useful; you can't trace that to his father.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'he's replaying the rescuer template' lead from the rival 'he's simply a caring, helpful partner,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: check whether his anxiety and sense of worthlessness rise specifically when a partner is stable and needs no rescuing — distress at not being needed points to the template, not ordinary kindness. My lead is refuted if he's equally comfortable and secure with a self-sufficient partner.",
      yieldAnchors: [
        "He feels worthless when not fixing a partner",
        "He gravitates to troubled partners to rescue",
        "He kept his depressed father afloat as a boy",
      ],
      riskAnchors: [
        "His comfort tracks how much rescuing is needed",
        "The pattern repeats across relationships",
        "It shifts once he sees he's recreating the template",
      ],
      defeatedBy: [
        "He's secure with a self-sufficient partner",
        "His ease is unrelated to being needed",
      ],
    },
    correctAnswer:
      "His pattern likely replays an old template, not a free preference — the rescuer/needy-other dyad in which being needed was the only route to worth — so a partner who doesn't need rescuing leaves him feeling worthless; test whether his comfort tracks how much fixing a partner requires rather than who they are, whether it repeats across relationships, and whether it shifts once he sees he's recreating the template rather than choosing freely.",
    explanation:
      "Full credit reads the rescuing as the rescuer/needy-other template replayed and is paired with a worthless-when-not-needed test that names its refutation; 'helpful people just like to be useful' is the dodge the anxious-when-a-partner-is-stable pattern defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A man tests every close friend with escalating demands and accusations of disloyalty until, exhausted, they pull back — at which point he says, 'See, everyone leaves'; his childhood friendships ended the same way, and his earliest caregiver was unreliable. Which conclusion best follows?",
    mcOptions: [
      {
        text: "It's probably an old expectation of being let down; we could look into the friendships.",
        credit: 0.6,
      },
      {
        text: "He's just exhausting and toxic; there's nothing to read in a man whose friends leave.",
        credit: 0,
      },
      {
        text: "He seems to drive his friends away.",
        credit: 0.3,
      },
      {
        text: "He is likely unconsciously provoking the abandonment he expects, replaying an old template — casting friends as the unreliable caregiver and testing them until they confirm it — so the feared ending fulfills itself; test whether the demands escalate as a friendship grows closer (when the feared loss looms), whether he rejects reassurance that doesn't fit the script, and whether the pattern shifts once the repetition is named instead of enacted.",
        credit: 1.0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'he's provoking the feared abandonment to replay an old template' lead from the rival 'his friends are simply unreliable people,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: check whether his testing and accusations escalate precisely as a friendship deepens, and whether he brushes off genuine loyalty that doesn't fit the script — provocation timed to closeness points to a self-fulfilling template, not bad luck with friends. My lead is refuted if his friends were independently unreliable and pulled away without being provoked.",
      yieldAnchors: [
        "He tests friends with demands and disloyalty accusations",
        "Friends pull back exhausted and he says 'everyone leaves'",
        "His earliest caregiver was unreliable",
      ],
      riskAnchors: [
        "The demands escalate as closeness grows",
        "He rejects reassurance that doesn't fit the script",
        "It shifts once the repetition is named",
      ],
      defeatedBy: [
        "His friends were independently unreliable",
        "They pulled away without being provoked",
      ],
    },
    correctAnswer:
      "He is likely unconsciously provoking the abandonment he expects, replaying an old template — casting friends as the unreliable caregiver and testing them until they confirm it — so the feared ending fulfills itself; test whether the demands escalate as a friendship grows closer (when the feared loss looms), whether he rejects reassurance that doesn't fit the script, and whether the pattern shifts once the repetition is named instead of enacted.",
    explanation:
      "Full credit reads the testing as a self-fulfilling repetition of the unreliable-caregiver template and is paired with an escalates-as-closeness-grows test that names its refutation; 'just exhausting and toxic' is the overreach the testing-then-confirming pattern defeats.",
  },
];

const written: HomeworkItem[] = [
  {
    itemType: "written",
    prompt:
      "A man has left or been pushed out of every job after coming to believe each boss secretly despises him and is plotting his removal; the conviction forms early, with little evidence, and his father was a contemptuous man who openly favored his siblings. In one paragraph, propose the strongest conclusion about what is driving the pattern and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that he is meeting each boss through an old template rather than reading the actual person — the contemptuous-father/unwanted-child dyad — so a neutral or even supportive supervisor is cast as the despising authority plotting his removal, and the conviction forms before the evidence does. This is a strong claim because it predicts checkable consequences: the belief should arise early with every boss regardless of how they actually treat him; its intensity should fit the old relationship with his father far better than anything the supervisor has done; and it should loosen once the template, rather than the boss, is named and examined. I would test it by tracking how quickly and on what evidence the conviction forms across different bosses, by comparing his certainty against neutral accounts of each supervisor's behavior, and by checking whether naming the father-template reduces the suspicion where reassurance about the actual boss does not.",
      yieldAnchors: [
        "He believes every boss despises him",
        "The conviction forms early with little evidence",
        "His father was contemptuous and favored siblings",
      ],
      riskAnchors: [
        "The belief arises with every boss regardless of treatment",
        "Its intensity fits the father relationship more than the boss's behavior",
        "It loosens once the template is named",
      ],
      defeatedBy: [
        "A particular boss genuinely did mistreat him",
        "The suspicion tracks real evidence, not the template",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that he is meeting each boss through an old template rather than reading the actual person — the contemptuous-father/unwanted-child dyad — so a neutral or even supportive supervisor is cast as the despising authority plotting his removal, and the conviction forms before the evidence does. This is a strong claim because it predicts checkable consequences: the belief should arise early with every boss regardless of how they actually treat him; its intensity should fit the old relationship with his father far better than anything the supervisor has done; and it should loosen once the template, rather than the boss, is named and examined. I would test it by tracking how quickly and on what evidence the conviction forms across different bosses, by comparing his certainty against neutral accounts of each supervisor's behavior, and by checking whether naming the father-template reduces the suspicion where reassurance about the actual boss does not.",
    explanation:
      "Under the inverted standard, 'you can't psychoanalyze why bosses don't work out' earns near-zero; top credit reads the pattern as the contemptuous-father template replayed and names an early-with-every-boss test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A woman has had four relationships with volatile, unpredictable partners and finds steady, kind men 'boring'; she grew up walking on eggshells around a volatile parent whose love felt like something she had to win. In one paragraph, propose the strongest conclusion about what is organizing her choices and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that her attractions are organized by an old template rather than by the particular men — the volatile-parent dyad in which love had to be anxiously won — so unpredictability registers as the feeling of love while steadiness registers as boredom or even wrongness. This is a strong claim because it predicts checkable consequences: her pull should track a partner's volatility itself rather than his actual qualities; the pattern should repeat across relationships; and her interest in a kind, steady man should rise only as her sense of what 'love' feels like is separated from the template. I would test it by mapping her level of attraction against how unpredictable each partner is, by noting whether steadiness reliably reads as boredom across cases, and by checking whether recognizing the template shifts what she finds compelling.",
      yieldAnchors: [
        "She has had four volatile partners",
        "She finds steady, kind men boring",
        "Her parent's love had to be anxiously won",
      ],
      riskAnchors: [
        "Her pull tracks volatility rather than the man's qualities",
        "The pattern repeats across relationships",
        "Her interest shifts once the template is separated out",
      ],
      defeatedBy: [
        "She is equally drawn to a steady, kind partner",
        "Her choices are unrelated to a partner's volatility",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that her attractions are organized by an old template rather than by the particular men — the volatile-parent dyad in which love had to be anxiously won — so unpredictability registers as the feeling of love while steadiness registers as boredom or even wrongness. This is a strong claim because it predicts checkable consequences: her pull should track a partner's volatility itself rather than his actual qualities; the pattern should repeat across relationships; and her interest in a kind, steady man should rise only as her sense of what 'love' feels like is separated from the template. I would test it by mapping her level of attraction against how unpredictable each partner is, by noting whether steadiness reliably reads as boredom across cases, and by checking whether recognizing the template shifts what she finds compelling.",
    explanation:
      "The cautious 'people just have types' earns near-zero; top credit reads her choices as the volatile-parent template organizing attraction and names a tracks-volatility test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A woman tells you her new landlord 'has it in for her like her stepfather did,' and on inquiry the landlord has in fact entered her flat without notice, raised her rent illegally, and ignored repairs; a friend keeps urging her to see it as her 'old stepfather wound.' In one paragraph, propose the strongest conclusion about what is happening and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that the present facts, not an old template, best explain her reaction — the landlord's documented misconduct genuinely warrants her anger and distrust, so recasting it as a 'stepfather wound' would misread a real situation. This is a strong claim because it commits to the evidence and exposes itself to a clean test: a neutral observer given the same facts (illegal entry, an unlawful rent hike, ignored repairs) should reach the same concern, and the disciplined move is to invoke the template only if her reaction outruns what the facts support. I would test it by checking her reaction against the documented behavior, by asking whether her response is proportionate to what the landlord actually did, and by reserving the template reading for the part, if any, where her fear exceeds the real provocation — which here it does not.",
      yieldAnchors: [
        "The landlord entered illegally and raised rent unlawfully",
        "He ignored needed repairs",
        "A neutral observer would share the concern",
      ],
      riskAnchors: [
        "Her reaction is proportionate to documented behavior",
        "The same facts would concern any observer",
        "The template is invoked only where the fear exceeds the facts",
      ],
      defeatedBy: [
        "The landlord behaved properly and her account is distorted",
        "Her reaction far outruns what actually happened",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that the present facts, not an old template, best explain her reaction — the landlord's documented misconduct genuinely warrants her anger and distrust, so recasting it as a 'stepfather wound' would misread a real situation. This is a strong claim because it commits to the evidence and exposes itself to a clean test: a neutral observer given the same facts (illegal entry, an unlawful rent hike, ignored repairs) should reach the same concern, and the disciplined move is to invoke the template only if her reaction outruns what the facts support. I would test it by checking her reaction against the documented behavior, by asking whether her response is proportionate to what the landlord actually did, and by reserving the template reading for the part, if any, where her fear exceeds the real provocation — which here it does not.",
    explanation:
      "The inverted standard gives near-zero to 'it's clearly her old stepfather wound'; credit goes to committing to the present facts when the landlord's real misconduct explains the reaction and naming a neutral-observer test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A man repeatedly enters groups certain he'll be overlooked, stays silent and resentful, then quietly seethes when no one draws him out — exactly as he felt with parents too busy to notice him; this has cost him friendships and a promotion. In one paragraph, propose the strongest conclusion about what is driving the pattern and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that he is unconsciously enacting an old template rather than reading each group accurately — the overlooked-child/too-busy-parent dyad — so he behaves in ways (silence, withdrawal, waiting to be drawn out) that reliably produce the very neglect he expects, confirming the script. This is a strong claim because it predicts checkable consequences: his expectation of being overlooked should precede any actual coldness from the group; he should withdraw even where people are willing to engage, and discount overtures that don't fit the script; and the pattern should shift once he sees he is recreating the template rather than reporting on the room. I would test it by noting whether his withdrawal comes before any real neglect, by watching how he responds when someone does reach out, and by checking whether naming the repetition lets him engage differently.",
      yieldAnchors: [
        "He enters groups expecting to be overlooked",
        "He stays silent and seethes when not drawn out",
        "His parents were too busy to notice him",
      ],
      riskAnchors: [
        "His expectation precedes any real coldness",
        "He withdraws even where people would engage",
        "The pattern shifts once the repetition is named",
      ],
      defeatedBy: [
        "The groups were genuinely cold and excluding first",
        "He engages readily when anyone reaches out",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that he is unconsciously enacting an old template rather than reading each group accurately — the overlooked-child/too-busy-parent dyad — so he behaves in ways (silence, withdrawal, waiting to be drawn out) that reliably produce the very neglect he expects, confirming the script. This is a strong claim because it predicts checkable consequences: his expectation of being overlooked should precede any actual coldness from the group; he should withdraw even where people are willing to engage, and discount overtures that don't fit the script; and the pattern should shift once he sees he is recreating the template rather than reporting on the room. I would test it by noting whether his withdrawal comes before any real neglect, by watching how he responds when someone does reach out, and by checking whether naming the repetition lets him engage differently.",
    explanation:
      "'Some people are just shy and overlooked' is the surface story the withdraws-first pattern defeats; top credit reads it as a self-fulfilling repetition of the overlooked-child template and names a withdrawal-precedes-neglect test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A woman forms intense bonds with mentors and therapists, then becomes convinced each one will betray her and begins testing them with demands and accusations until the relationship breaks; her first caregiver was loving but ultimately abandoned her. In one paragraph, propose the strongest conclusion about what is driving the pattern and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that she is replaying an old template rather than reacting to these particular people — the loving-then-abandoning caregiver dyad — so each mentor is cast as the eventual betrayer, and she tests them until the feared abandonment is provoked into happening. This is a strong claim because it predicts checkable consequences: the conviction of coming betrayal should arise regardless of how reliably the mentor actually behaves; the testing should escalate as the bond deepens and the feared loss looms closest; and she should discount steadfastness that doesn't fit the script, while the pattern eases once the repetition is named rather than enacted. I would test it by tracking whether the betrayal-certainty appears independent of the mentor's conduct, by noting whether her testing intensifies with closeness, and by checking whether genuine reliability registers with her or is brushed aside.",
      yieldAnchors: [
        "She bonds intensely then expects betrayal",
        "She tests mentors until the relationship breaks",
        "Her first caregiver was loving but abandoned her",
      ],
      riskAnchors: [
        "The betrayal-certainty arises regardless of conduct",
        "The testing escalates as the bond deepens",
        "She discounts reliability that doesn't fit the script",
      ],
      defeatedBy: [
        "A mentor genuinely did betray her trust",
        "Her testing is unrelated to the closeness of the bond",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that she is replaying an old template rather than reacting to these particular people — the loving-then-abandoning caregiver dyad — so each mentor is cast as the eventual betrayer, and she tests them until the feared abandonment is provoked into happening. This is a strong claim because it predicts checkable consequences: the conviction of coming betrayal should arise regardless of how reliably the mentor actually behaves; the testing should escalate as the bond deepens and the feared loss looms closest; and she should discount steadfastness that doesn't fit the script, while the pattern eases once the repetition is named rather than enacted. I would test it by tracking whether the betrayal-certainty appears independent of the mentor's conduct, by noting whether her testing intensifies with closeness, and by checking whether genuine reliability registers with her or is brushed aside.",
    explanation:
      "The inverted standard gives near-zero to 'her mentors just kept letting her down'; credit goes to reading it as a self-fulfilling repetition of the loving-then-abandoning template and naming an escalates-with-closeness test that could refute it.",
  },
];

export const section: SectionContent = {
  slug: "object-relations-inner-templates",
  title: "Object Relations: How Early Bonds Become Inner Templates",
  weekNumber: 1,
  blurb:
    "The relationships we lived earliest leave behind inner templates — a self, an other, and the charged feeling between them — that we replay in the present without knowing it. The craft is reading which old template a person is living a present relationship through, especially where the reaction fits the past better than the present facts, and naming the cheapest observation that would prove the reading wrong.",
  lectureTitle:
    "1.3 Object Relations: How Early Bonds Become Inner Templates",
  body: `# Object Relations: How Early Bonds Become Inner Templates

Why does a kind boss make one person brace as if for a beating? Why does a devoted partner's ordinary night out leave someone certain they are about to be abandoned? In borderline trouble these reactions can look baffling, until you see that the person is not really responding to the present — they are responding to an old relationship pattern carried inside them. In the psychodynamic view, our earliest bonds leave behind inner templates of how a self and an other relate, and those templates get replayed onto present people. The skill in this section is to read which old template is active, especially when the reaction fits the past far better than the present facts, and to name the cheap test that would confirm or refute the reading.

## We carry templates, not just memories

The first move is to assume that early relationships leave more than memories — they leave working models, ready-made templates for what closeness is like and what others will do. A child whose caregiver was warm then suddenly cruel learns a template: kindness is the calm before harm. A child who had to win an unstable parent's love learns another: love is anxiously chased, never simply given. These templates are not chosen and usually cannot be stated; they operate as expectations that shape how a new person is met before that person has done anything. When a reaction seems too big or too sure for the present situation, suspect that a template, not the present, is doing the work.

## The dyad: a self, an other, and a feeling between them

Object relations describes these templates as dyads — pairings of a self-image and an other-image with a charged feeling between them. Abandoning-caregiver and helpless-child. Harsh-critic and worthless-one. Rescuer and needy-other. Each dyad carries its own emotion: dread, contempt, longing, rage. The "object" is simply the inner image of the other person, built early and carried forward. Reading a case means naming the dyad that has come alive: who is the person being, who has the other been cast as, and what feeling is running between them. Once you can name the dyad, the strange reaction becomes a readable scene.

## Transference: meeting the present through the past

Transference is the everyday name for replay: a present person is met through an old template, so they are seen and treated as if they were the original figure. A man hears a mild request from an easygoing wife as domination, because she has been cast in the role of a tyrannical father. A woman reads a busy week from a reliable friend as discard, because the friend has been slotted into an abandoning-caregiver script. The tell of transference is mismatch — the reaction fits the old relationship better than anything the present person actually did. The work is not to deny the feeling but to ask whose face the person is really seeing.

## Repetition: unconsciously provoking the feared ending

The strangest part of templates is that people often recreate the very endings they dread. Expecting abandonment, a man picks fights and threatens to leave whenever things go well, staging the loss so he controls when it comes. Sure she will be frozen out, a woman acts prickly from day one until the team does pull away. This is repetition: the old script is not just expected but provoked into happening, which then "proves" it true. The signature is timing — the sabotage or testing escalates as closeness deepens and the feared loss looms closest. When someone keeps producing the outcome they most fear, suspect a template being enacted, not bad luck.

## Reading which template is active — from the mismatch

You read a template the way you read any hidden process: from its signature, especially the gap between reaction and reality. Does the feeling fit the present person, or does it fit an old figure far better? Does the same reaction fire with every boss, every friend, every mentor, regardless of how each actually behaves? Does the reaction arrive early, before the present person has supplied any evidence? These marks — poor fit to the present, repetition across people, and conviction ahead of evidence — point past the present scene to the old template running underneath. A reaction that fits the present facts and varies with who the person actually is, by contrast, is telling you something real about the present.

## The template versus the present person

The discipline that keeps this honest is refusing to force a template where the present explains the reaction. Sometimes the boss really is contemptuous, the partner really is withdrawing, the landlord really is out of line — and then crediting the real evidence, not an old wound, is the strong move. Deterministic parent-blaming on thin evidence ("a harsh boss always means she's replaying her dad") is itself a misread, and the present facts defeat it. The question is always comparative: does the reaction fit the old template or the actual current person better? Only when the reaction clearly outruns the real provocation does the template earn the explanation.

## Reading the meaning — and naming a test

A reading stays honest only if it commits to a template AND names the cheap observation that would refute it. "He's meeting his manager through the never-satisfied-father template" is a real claim, because it predicts the dread should fire with any authority figure and should fit the old relationship better than the actual words — and you can check that. The weak move is to stop at "he takes feedback hard" (which explains nothing) or to retreat into "you can't psychoanalyze people / the past is the past" (which gives up before looking). The worst move is the deterministic overreach the evidence defeats. The strongest reading names the specific dyad in front of you and spells out the single result that would prove it wrong.

## In the real world

Suppose a friend tells you he just quit another good job because he was sure his boss despised him, and shrugs that "bosses always have it in for me." The dodge is to agree, or to throw up your hands at how unknowable people are — both explain nothing. A sharper move commits to a template: he is meeting each boss through an old dyad with a contemptuous father, casting a neutral supervisor as the despising authority, and bolting first to control the firing he expects. Notice how much that opens up. It predicts the conviction should form early with every boss; that its intensity should fit his father far better than anything the supervisor did; and that it should loosen once the template, not the boss, is named. Three cheap checks, each able to refute the idea — and the honesty to drop it the moment a boss really did mistreat him. That is what reading object relations buys you: not a shrug at why relationships keep going wrong, but a testable story about which old template is being lived through the present, and a way to stop replaying it.`,
  homework: {
    mcq,
    hybrid,
    written,
  },
};
