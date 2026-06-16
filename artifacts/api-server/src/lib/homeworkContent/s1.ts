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
      "Researchers show people two drawings of the same 3-D shape, one turned at an angle, and ask whether they match. The more one shape is rotated away from the other, the longer people take to answer — and the time grows steadily with the angle. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The mind likely 'rotates' a mental image step by step until the shapes line up, so bigger angles take more time; test whether response time rises in even steps with each added degree, whether people report imagining the shape turning, and whether practice at one angle speeds only similar angles.",
        credit: 1.0,
      },
      {
        text: "Turning the shape more probably makes the task take longer; we could try a few more angles and see.",
        credit: 0.6,
      },
      {
        text: "Bigger rotations seem to slow people down.",
        credit: 0.3,
      },
      {
        text: "The mind is far too complex to say anything about what happens between seeing the shapes and answering.",
        credit: 0,
      },
    ],
    correctAnswer:
      "The mind likely 'rotates' a mental image step by step until the shapes line up, so bigger angles take more time; test whether response time rises in even steps with each added degree, whether people report imagining the shape turning, and whether practice at one angle speeds only similar angles.",
    explanation:
      "Top credit commits to a concrete hidden process (an analog mental rotation) and names three checkable tests; the 'too complex to say anything' option refuses to infer the process and earns zero under the inverted standard.",
  },
  {
    itemType: "mc",
    prompt:
      "A three-year-old who has always said 'went' suddenly starts saying 'goed' and 'foots,' words she has never heard any adult use. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The child seems to be making more mistakes than before.",
        credit: 0.3,
      },
      {
        text: "Kids just say random things, so there is nothing to learn from these errors.",
        credit: 0,
      },
      {
        text: "The child has likely extracted a general grammar rule ('add -ed,' 'add -s') and is over-applying it rather than memorizing each word; test whether her errors appear only on irregular words, whether she also adds endings to made-up words like 'wug,' and whether the errors fade as she relearns the exceptions.",
        credit: 1.0,
      },
      {
        text: "The child is probably learning a rule and applying it too widely; we could write down more of her sentences.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The child has likely extracted a general grammar rule ('add -ed,' 'add -s') and is over-applying it rather than memorizing each word; test whether her errors appear only on irregular words, whether she also adds endings to made-up words like 'wug,' and whether the errors fade as she relearns the exceptions.",
    explanation:
      "The strongest conclusion names a mechanism (a self-discovered rule) and three tests that could disconfirm it; 'kids say random things' is defeated by the systematic, never-heard errors and opens no inquiry.",
  },
  {
    itemType: "mc",
    prompt:
      "People are asked to name the ink color a word is printed in. They are fast when the word 'BLUE' appears in blue ink, but much slower when the word 'RED' appears in blue ink. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Color and reading are too tangled in the brain to draw any conclusion.",
        credit: 0,
      },
      {
        text: "Reading the word likely happens automatically and interferes with naming the color, so skilled reading is hard to switch off; test whether the slowdown shrinks in people who can't yet read, whether it appears in a second language only once that language is fluent, and whether non-color words like 'TABLE' cause no such delay.",
        credit: 1.0,
      },
      {
        text: "The mismatched word probably slows people down; we could test more color words.",
        credit: 0.6,
      },
      {
        text: "People seem slower when the word and the color disagree.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "Reading the word likely happens automatically and interferes with naming the color, so skilled reading is hard to switch off; test whether the slowdown shrinks in people who can't yet read, whether it appears in a second language only once that language is fluent, and whether non-color words like 'TABLE' cause no such delay.",
    explanation:
      "Full credit pins automatic reading as the cause and lists three checks that could refute it; 'too tangled to draw any conclusion' commits to nothing and earns zero.",
  },
  {
    itemType: "mc",
    prompt:
      "People hear a list of words — bed, rest, awake, tired, dream, night — and a minute later many confidently 'remember' hearing the word 'sleep,' which was never on the list. Which conclusion best follows?",
    mcOptions: [
      {
        text: "People seem to misremember the list sometimes.",
        credit: 0.3,
      },
      {
        text: "They probably remember the gist more than the exact words; we could try other word lists.",
        credit: 0.6,
      },
      {
        text: "Memory is so unreliable that nothing useful can be concluded from it.",
        credit: 0,
      },
      {
        text: "Memory likely stores the overall meaning or theme rather than an exact recording, so a strongly implied word feels remembered; test whether unrelated lists never trigger the false memory, whether warning people in advance reduces it, and whether the false 'sleep' memory is held as confidently as the real list words.",
        credit: 1.0,
      },
    ],
    correctAnswer:
      "Memory likely stores the overall meaning or theme rather than an exact recording, so a strongly implied word feels remembered; test whether unrelated lists never trigger the false memory, whether warning people in advance reduces it, and whether the false 'sleep' memory is held as confidently as the real list words.",
    explanation:
      "The winning conclusion names a mechanism (gist-based storage) with three checkable tests; 'memory is so unreliable nothing can be concluded' is an overreach the orderly, predictable error actually defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "After a small stroke in one part of the brain, a patient can no longer recognize his wife's or his own face, yet he reads fluently, names everyday objects, and knows people instantly by their voices. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Face recognition likely relies on a specialized brain system separate from object naming and reading; test whether other patients with damage to the same spot show the same face-only deficit, whether he can still tell faces apart by a single feature like a scar, and whether brain scans show that area lighting up for faces in healthy people.",
        credit: 1.0,
      },
      {
        text: "Something about faces seems to be affected.",
        credit: 0.3,
      },
      {
        text: "The brain is too interconnected to say any one area does any one job.",
        credit: 0,
      },
      {
        text: "Face recognition is probably handled separately; we could test a few more patients.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Face recognition likely relies on a specialized brain system separate from object naming and reading; test whether other patients with damage to the same spot show the same face-only deficit, whether he can still tell faces apart by a single feature like a scar, and whether brain scans show that area lighting up for faces in healthy people.",
    explanation:
      "Top credit commits to a specialized-system mechanism with three tests; the 'too interconnected to say' option is the barren refusal the selective deficit contradicts.",
  },
  {
    itemType: "mc",
    prompt:
      "People are asked to answer 'true' or 'false' to statements like 'A robin is a bird' and 'A penguin is a bird.' Everyone says 'true' to both, but they are reliably slower for the penguin. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The mind is a black box, so the timing difference can't tell us anything.",
        credit: 0,
      },
      {
        text: "Penguins seem to take a bit longer to judge.",
        credit: 0.3,
      },
      {
        text: "The mind likely organizes categories around typical examples, so a robin matches 'bird' faster than an oddball penguin; test whether the most typical bird people name is judged fastest, whether the slowdown shrinks after practice with penguins, and whether the same pattern appears for fruits and vehicles.",
        credit: 1.0,
      },
      {
        text: "People probably treat some birds as more 'birdlike'; we could test more animals.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The mind likely organizes categories around typical examples, so a robin matches 'bird' faster than an oddball penguin; test whether the most typical bird people name is judged fastest, whether the slowdown shrinks after practice with penguins, and whether the same pattern appears for fruits and vehicles.",
    explanation:
      "The richest conclusion names typicality as the organizing principle and three tests that could refute it; the 'black box' answer is the dodge the reliable timing difference itself defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A behavior experiment, a brain-imaging study, and a computer simulation — done by three separate labs — all independently point to the same conclusion: that people store word meanings and personal memories using two different systems. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The three studies seem to roughly agree.",
        credit: 0.3,
      },
      {
        text: "Because independent methods from different fields converge on the same answer, two separate memory systems is the strongest supported conclusion; test whether a brain injury can knock out one system while sparing the other, whether the simulation fails in the same way patients do, and whether a new method like eye-tracking lands on the same split.",
        credit: 1.0,
      },
      {
        text: "Three studies is still too few to commit to anything.",
        credit: 0,
      },
      {
        text: "The agreement probably means there are two systems; we could wait for more studies.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Because independent methods from different fields converge on the same answer, two separate memory systems is the strongest supported conclusion; test whether a brain injury can knock out one system while sparing the other, whether the simulation fails in the same way patients do, and whether a new method like eye-tracking lands on the same split.",
    explanation:
      "Converging evidence from independent methods is exactly what makes a conclusion strong; the answer names three further tests, while 'too few to commit' refuses the inference the convergence supports.",
  },
  {
    itemType: "mc",
    prompt:
      "As people read, their eyes pause much longer on a sentence's final word when it is surprising ('She spread the warm bread with socks') than when it is expected ('...with butter'). Which conclusion best follows?",
    mcOptions: [
      {
        text: "Reading involves so much that we can't say why a word slows someone down.",
        credit: 0,
      },
      {
        text: "Odd words seem to slow reading.",
        credit: 0.3,
      },
      {
        text: "The surprising word probably takes longer to process; we could test more sentences.",
        credit: 0.6,
      },
      {
        text: "The mind likely predicts the upcoming word from context, so a violation costs extra time to recover; test whether weakly predictable endings fall between the two, whether the slowdown vanishes when the sentence gives no hint about the ending, and whether brain responses spike at exactly the surprising word.",
        credit: 1.0,
      },
    ],
    correctAnswer:
      "The mind likely predicts the upcoming word from context, so a violation costs extra time to recover; test whether weakly predictable endings fall between the two, whether the slowdown vanishes when the sentence gives no hint about the ending, and whether brain responses spike at exactly the surprising word.",
    explanation:
      "Top credit commits to prediction as the hidden process with three graded tests; 'we can't say why a word slows someone down' opens no inquiry and earns zero.",
  },
  {
    itemType: "mc",
    prompt:
      "Fluent bilinguals name pictures quickly, but when they must switch back and forth between their two languages on cue, each switch costs them a fraction of a second. Which conclusion best follows?",
    mcOptions: [
      {
        text: "A mental control process likely has to suppress one language and activate the other, which takes time; test whether the cost grows when switches come faster, whether it shrinks with practice switching, and whether people with stronger general self-control switch with less cost.",
        credit: 1.0,
      },
      {
        text: "Switching languages probably has a cost; we could measure more switches.",
        credit: 0.6,
      },
      {
        text: "Bilingual minds are unique to each person, so no general conclusion is possible.",
        credit: 0,
      },
      {
        text: "Switching seems to slow them a little.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "A mental control process likely has to suppress one language and activate the other, which takes time; test whether the cost grows when switches come faster, whether it shrinks with practice switching, and whether people with stronger general self-control switch with less cost.",
    explanation:
      "The strongest conclusion names a control process and three tests that could disconfirm it; 'unique to each person, no general conclusion' is the refusal the reliable switch cost defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "People instantly spot a single red dot among blue dots, no matter how many blue dots there are. But finding a red vertical line hidden among red horizontal lines and blue vertical lines takes longer the more items are on the screen. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Some searches seem harder than others.",
        credit: 0.3,
      },
      {
        text: "Vision is too complicated to explain why one search is fast and the other slow.",
        credit: 0,
      },
      {
        text: "A single feature like color likely 'pops out' automatically, but combining two features (red AND vertical) requires attention to check items one by one; test whether search time rises in even steps with each added item only in the combined case, whether telling people the exact target speeds the hard search, and whether any unique single feature is always found in constant time.",
        credit: 1.0,
      },
      {
        text: "Combining features probably takes more effort; we could add more items and time it.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "A single feature like color likely 'pops out' automatically, but combining two features (red AND vertical) requires attention to check items one by one; test whether search time rises in even steps with each added item only in the combined case, whether telling people the exact target speeds the hard search, and whether any unique single feature is always found in constant time.",
    explanation:
      "Top credit distinguishes automatic feature detection from attentive combination and names three tests; 'too complicated to explain' is the dodge the two clean search patterns contradict.",
  },
  {
    itemType: "mc",
    prompt:
      "A word is flashed on a screen too briefly for people to consciously see it. Even so, they then recognize a related word faster than an unrelated one, while insisting they saw nothing. Which conclusion best follows?",
    mcOptions: [
      {
        text: "If people say they saw nothing, there is nothing here to study.",
        credit: 0,
      },
      {
        text: "The mind likely processes meaning even without conscious awareness, so an unseen word can still prime a related one; test whether the priming fades as the flash gets shorter, whether unrelated words give no speed-up, and whether forcing people to guess the hidden word stays at chance while the priming persists.",
        credit: 1.0,
      },
      {
        text: "Hidden words seem to have some effect.",
        credit: 0.3,
      },
      {
        text: "The unseen word probably still registers; we could test more word pairs.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The mind likely processes meaning even without conscious awareness, so an unseen word can still prime a related one; test whether the priming fades as the flash gets shorter, whether unrelated words give no speed-up, and whether forcing people to guess the hidden word stays at chance while the priming persists.",
    explanation:
      "The winning conclusion names unconscious meaning-processing with three tests; 'nothing here to study' is the overreach the measurable priming effect directly defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "Five-month-old babies watch a toy roll behind a screen. When the screen drops to reveal that the toy has somehow passed through a solid wall, babies stare much longer than when it stops at the wall as expected. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Babies probably expect solid objects to stop; we could test more babies.",
        credit: 0.6,
      },
      {
        text: "Babies seem surprised by the wall trick.",
        credit: 0.3,
      },
      {
        text: "Babies can't talk, so we can't know anything about what they think.",
        credit: 0,
      },
      {
        text: "Even pre-verbal infants likely hold expectations that solid objects can't pass through one another, revealed by longer looking at impossible events; test whether possible-but-unusual events draw no extra looking, whether the surprise grows with a more blatant violation, and whether younger babies show a weaker reaction.",
        credit: 1.0,
      },
    ],
    correctAnswer:
      "Even pre-verbal infants likely hold expectations that solid objects can't pass through one another, revealed by longer looking at impossible events; test whether possible-but-unusual events draw no extra looking, whether the surprise grows with a more blatant violation, and whether younger babies show a weaker reaction.",
    explanation:
      "Top credit infers infant expectations from looking time and names three tests; 'babies can't talk so we can't know' is the dodge the looking-time method was designed to overcome.",
  },
  {
    itemType: "mc",
    prompt:
      "A team studying how people recognize a friend's voice describes it three ways: as a behavior (you answer faster to familiar voices), as brain activity (certain neurons fire), and as a computation (matching sound patterns to stored templates). Which conclusion best follows?",
    mcOptions: [
      {
        text: "The same mental ability can likely be studied at several levels — behavior, brain, and computation — that should fit together rather than compete; test whether the brain region's activity tracks the behavioral speed-up, whether a template-matching computer model reproduces the human pattern, and whether damaging that region slows familiar-voice recognition specifically.",
        credit: 1.0,
      },
      {
        text: "There seem to be different ways to describe the ability.",
        credit: 0.3,
      },
      {
        text: "Since the three descriptions use different words, only one of them can be the real explanation.",
        credit: 0,
      },
      {
        text: "The levels probably describe one ability; we could compare them more.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The same mental ability can likely be studied at several levels — behavior, brain, and computation — that should fit together rather than compete; test whether the brain region's activity tracks the behavioral speed-up, whether a template-matching computer model reproduces the human pattern, and whether damaging that region slows familiar-voice recognition specifically.",
    explanation:
      "The strongest conclusion treats the levels of analysis as complementary and names three tests that should agree; 'only one can be real' is the overreach the converging descriptions defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "When shown dots for a split second, people instantly and accurately report 'three' or 'four' without counting, but for seven or eight dots their answers slow down and become error-prone. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Number sense varies so much between people that no general claim is safe.",
        credit: 0,
      },
      {
        text: "Small amounts seem easier to judge.",
        credit: 0.3,
      },
      {
        text: "The mind likely has a fast system for grasping small quantities (up to about four) at a glance, separate from slow counting for larger sets; test whether reaction time is flat up to four then jumps, whether distraction hurts large-set judgments more, and whether the same small-number limit appears across cultures.",
        credit: 1.0,
      },
      {
        text: "People are probably better with small numbers; we could test more dot counts.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The mind likely has a fast system for grasping small quantities (up to about four) at a glance, separate from slow counting for larger sets; test whether reaction time is flat up to four then jumps, whether distraction hurts large-set judgments more, and whether the same small-number limit appears across cultures.",
    explanation:
      "Top credit names two separate quantity systems and three tests, including a cross-cultural one; 'varies too much to say anything' is the refusal the sharp, reliable break at four defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "Researchers show photographs of faces to people in many cultures, including a remote group with little contact with the outside world. Across all groups, people match the same faces to 'happy,' 'angry,' and 'afraid.' Which conclusion best follows?",
    mcOptions: [
      {
        text: "Some expressions probably mean the same everywhere; we could test more cultures.",
        credit: 0.6,
      },
      {
        text: "Recognition of a few basic emotional expressions is likely part of shared human nature rather than purely learned from one culture; test whether people blind from birth, who never saw faces, still produce the same expressions, whether infants react to them, and whether any culture reliably reverses two of the meanings.",
        credit: 1.0,
      },
      {
        text: "People in different places seem to agree on some faces.",
        credit: 0.3,
      },
      {
        text: "Emotions are personal, so studying them across cultures can't show anything.",
        credit: 0,
      },
    ],
    correctAnswer:
      "Recognition of a few basic emotional expressions is likely part of shared human nature rather than purely learned from one culture; test whether people blind from birth, who never saw faces, still produce the same expressions, whether infants react to them, and whether any culture reliably reverses two of the meanings.",
    explanation:
      "The richest conclusion commits to a shared human capacity and names three tests that could refute it; 'emotions are personal, nothing can be shown' is the dodge the cross-cultural agreement contradicts.",
  },
];

const hybrid: HomeworkItem[] = [
  {
    itemType: "hybrid",
    prompt:
      "People can walk and chat easily, but when asked to do two demanding mental tasks at once — solving math problems while memorizing a list — performance on both collapses, even though they can do each alone. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The mind likely has a limited central capacity that the two demanding tasks must share, so they interfere only when both need it; test whether pairing a hard task with an easy automatic one causes little interference, whether the drop grows as either task gets harder, and whether heavy practice that makes one task automatic removes the interference.",
        credit: 1.0,
      },
      {
        text: "Doing two hard things at once seems to hurt performance.",
        credit: 0.3,
      },
      {
        text: "Multitasking is too individual to draw any general conclusion.",
        credit: 0,
      },
      {
        text: "The two tasks probably compete for something; we could test more task pairs.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'shared limited capacity' lead from the rival 'people are simply slowed by switching back and forth,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: pair the hard memory task with a truly automatic task like walking instead of another demanding one — my lead predicts little interference because the automatic task barely draws on the shared capacity. It is refuted if even an effortless second task wrecks performance as badly as a demanding one, which would point to switching rather than a shared pool of capacity.",
      yieldAnchors: [
        "Each task can be done well alone",
        "Doing both demanding tasks at once collapses performance",
        "Easy pairs like walking and chatting don't interfere",
      ],
      riskAnchors: [
        "Pairing a hard task with an automatic one causes little interference",
        "The drop grows as either task gets harder",
        "Making one task automatic through practice removes the interference",
      ],
      defeatedBy: [
        "Any second task, however easy, ruins performance equally",
        "People are simply unmotivated when given two tasks",
      ],
    },
    correctAnswer:
      "The mind likely has a limited central capacity that the two demanding tasks must share, so they interfere only when both need it; test whether pairing a hard task with an easy automatic one causes little interference, whether the drop grows as either task gets harder, and whether heavy practice that makes one task automatic removes the interference.",
    explanation:
      "Full credit commits to a shared-capacity mechanism, spawns three checks, and is paired with a cheap easy-vs-hard test that names its own refutation; 'too individual' opens nothing.",
  },
  {
    itemType: "hybrid",
    prompt:
      "People memorize a short set of digits, then see a single digit and answer whether it was in the set. The more digits they were asked to hold, the longer they take to answer — and the time rises by a steady amount for each extra digit, whether the answer is yes or no. Which conclusion best follows?",
    mcOptions: [
      {
        text: "What the mind does in that fraction of a second is unknowable.",
        credit: 0,
      },
      {
        text: "Bigger sets seem to take longer to search.",
        credit: 0.3,
      },
      {
        text: "The mind likely scans the memorized items one at a time, adding a fixed step per item and checking the whole set even after a match; test whether each added digit adds the same amount of time, whether 'yes' and 'no' answers rise at the same rate, and whether a much longer set eventually forces a different strategy.",
        credit: 1.0,
      },
      {
        text: "Holding more digits probably slows the search; we could test more set sizes.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'item-by-item scan' lead from the rival 'people just feel less sure with bigger sets,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: check whether response time rises in equal steps with each added digit and rises the same for 'yes' and 'no' answers — a steady per-item step is the signature of a serial scan. My lead is refuted if time stays flat as the set grows, or if 'yes' answers are much faster than 'no,' which would fit a confidence or all-at-once matching account instead.",
      yieldAnchors: [
        "Response time grows with set size",
        "The growth is a steady amount per extra digit",
        "Yes and no answers slow at the same rate",
      ],
      riskAnchors: [
        "Each added digit adds the same fixed time",
        "Yes and no answers rise at the same rate",
        "A very long set forces a different strategy",
      ],
      defeatedBy: [
        "Set size has no effect on response time",
        "People answer instantly regardless of how many digits they hold",
      ],
    },
    correctAnswer:
      "The mind likely scans the memorized items one at a time, adding a fixed step per item and checking the whole set even after a match; test whether each added digit adds the same amount of time, whether 'yes' and 'no' answers rise at the same rate, and whether a much longer set eventually forces a different strategy.",
    explanation:
      "Top credit reads a hidden serial scan out of the steady timing and names three tests, including a per-item-step check that could refute it; 'unknowable' is the empty refusal.",
  },
  {
    itemType: "hybrid",
    prompt:
      "People are flashed a single letter very briefly and asked whether it was a 'D' or a 'K.' They are reliably more accurate when the letter appeared inside a real word like 'WORD' than when it appeared alone or inside a random string like 'OWRD.' Which conclusion best follows?",
    mcOptions: [
      {
        text: "Words probably help letter recognition; we could test more words.",
        credit: 0.6,
      },
      {
        text: "Reading is too automatic to study by flashing letters.",
        credit: 0,
      },
      {
        text: "Letters in words seem easier to see.",
        credit: 0.3,
      },
      {
        text: "The mind likely uses knowledge of whole words to support its reading of the parts, so a letter is recognized better inside a familiar word than in nonsense; test whether pronounceable non-words like 'MAVE' give a partial boost, whether the advantage disappears for unfamiliar foreign words, and whether the boost grows with the word's frequency.",
        credit: 1.0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'whole-word knowledge helps the parts' lead from the rival 'real words are just more familiar visual shapes,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: compare a never-before-seen but pronounceable non-word ('MAVE') against a random string ('OWRD') — my lead predicts the pronounceable item still boosts letter recognition because the reading system can use spelling rules, not just memorized shapes. It is refuted if only real, familiar words help and pronounceable non-words give no advantage at all.",
      yieldAnchors: [
        "Letters are recognized better inside real words",
        "A single letter alone is harder to identify",
        "Random strings give no advantage",
      ],
      riskAnchors: [
        "Pronounceable non-words give a partial boost",
        "Unfamiliar foreign words lose the advantage",
        "The boost grows with word frequency",
      ],
      defeatedBy: [
        "Letters are always recognized equally regardless of context",
        "Only the brightness of the display matters",
      ],
    },
    correctAnswer:
      "The mind likely uses knowledge of whole words to support its reading of the parts, so a letter is recognized better inside a familiar word than in nonsense; test whether pronounceable non-words like 'MAVE' give a partial boost, whether the advantage disappears for unfamiliar foreign words, and whether the boost grows with the word's frequency.",
    explanation:
      "Full credit names top-down word knowledge as the active ingredient with three checks and a pronounceable-non-word test that states its own refutation; 'too automatic to study' leads nowhere.",
  },
  {
    itemType: "hybrid",
    prompt:
      "After a stroke in the left front of the brain, a patient struggles to produce speech — his sentences come out halting and broken — yet he understands what others say to him almost perfectly. Another patient with damage farther back shows the opposite. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Different brain damage seems to cause different language problems.",
        credit: 0.3,
      },
      {
        text: "Producing speech and understanding it likely depend on at least two separable brain systems, since damage can knock out one while sparing the other; test whether this double pattern holds across many patients, whether scans show distinct regions for production versus comprehension in healthy people, and whether temporarily disrupting each region in volunteers reproduces the matching deficit.",
        credit: 1.0,
      },
      {
        text: "Language is spread all over the brain, so localizing it is hopeless.",
        credit: 0,
      },
      {
        text: "Speaking and understanding are probably handled separately; we could study more patients.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'two separable systems' lead from the rival 'one language system that the second stroke simply damaged more,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: find patients with the opposite pattern — fluent speech but poor comprehension — because a genuine double dissociation, each ability lost while the other survives, can't come from one system merely damaged by degrees. My lead is refuted if no patient ever shows spared production with lost comprehension, which would suggest one graded system rather than two.",
      yieldAnchors: [
        "One patient can understand but not produce speech",
        "Another shows the reverse pattern",
        "The two patients have damage in different regions",
      ],
      riskAnchors: [
        "The double pattern holds across many patients",
        "Scans show distinct regions for production and comprehension",
        "Disrupting each region reproduces the matching deficit",
      ],
      defeatedBy: [
        "Language sits in a single all-or-nothing region",
        "Comprehension and production always fail together",
      ],
    },
    correctAnswer:
      "Producing speech and understanding it likely depend on at least two separable brain systems, since damage can knock out one while sparing the other; test whether this double pattern holds across many patients, whether scans show distinct regions for production versus comprehension in healthy people, and whether temporarily disrupting each region in volunteers reproduces the matching deficit.",
    explanation:
      "Top credit reasons from the double dissociation to separable systems and names tests, including the opposite-pattern search that would refute it; 'localizing is hopeless' is the dodge the two opposite patients defeat.",
  },
  {
    itemType: "hybrid",
    prompt:
      "In a study, people watch a movie and fail to notice that the actor's scarf changes color between shots — even huge changes go unseen unless attention happens to land on them. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Conscious awareness of a scene likely depends on attention rather than on the eyes capturing everything, so unattended changes go unnoticed; test whether cueing people to the changing object makes them spot it easily, whether changes hidden by a brief blank or a blink are missed more, and whether experts notice changes in their area of expertise faster.",
        credit: 1.0,
      },
      {
        text: "People probably miss changes they aren't focused on; we could test more changes.",
        credit: 0.6,
      },
      {
        text: "Perception is too rich to study with simple movie tricks.",
        credit: 0,
      },
      {
        text: "People seem to miss some changes.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'awareness needs attention' lead from the rival 'people see the change but instantly forget it,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: cue people in advance to watch the scarf — my lead predicts they will now catch the change easily because attention is the missing ingredient, whereas a forgetting account predicts they should still lose it. It is refuted if cued, attending viewers miss the change just as often, which would point to memory rather than attention.",
      yieldAnchors: [
        "Large changes between shots go unnoticed",
        "Changes are caught only when attention lands on them",
        "Even obvious color changes are missed",
      ],
      riskAnchors: [
        "Cueing the object makes the change easy to spot",
        "Changes hidden by a blank or blink are missed more",
        "Experts spot changes in their domain faster",
      ],
      defeatedBy: [
        "People always see every change in a scene",
        "The eyes record the whole scene into awareness at once",
      ],
    },
    correctAnswer:
      "Conscious awareness of a scene likely depends on attention rather than on the eyes capturing everything, so unattended changes go unnoticed; test whether cueing people to the changing object makes them spot it easily, whether changes hidden by a brief blank or a blink are missed more, and whether experts notice changes in their area of expertise faster.",
    explanation:
      "Full credit ties awareness to attention with three checks and a cueing test that names its refutation; 'too rich to study' is the empty refusal.",
  },
  {
    itemType: "hybrid",
    prompt:
      "People press a button matching a light that comes on. With two possible lights they respond almost instantly; with four, eight, or sixteen, their reaction time climbs in a regular way as the number of choices grows. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Reaction speed depends on the person, so the pattern means little.",
        credit: 0,
      },
      {
        text: "More choices seem to slow people down.",
        credit: 0.3,
      },
      {
        text: "The mind likely takes time to decide among options, and that time grows with the number of choices in a regular way that suggests narrowing down possibilities; test whether making some lights far more likely shortens the time for those, whether grouping the lights into clusters speeds the choice, and whether the increase flattens once the choices are highly practiced.",
        credit: 1.0,
      },
      {
        text: "More options probably take longer to choose; we could add more lights.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'decision time grows with choices' lead from the rival 'more lights are simply harder to see,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: keep the display equally busy but make only two of the lights ever relevant — my lead predicts fast responses because the decision, not the visual clutter, drives the time. It is refuted if reaction time stays slow whenever many lights are visible regardless of how many are actually choices, which would point to perception rather than decision.",
      yieldAnchors: [
        "Two choices give near-instant responses",
        "Reaction time climbs as choices increase",
        "The climb is regular, not random",
      ],
      riskAnchors: [
        "Making some options more likely speeds those responses",
        "Grouping the lights speeds the choice",
        "Heavy practice flattens the increase",
      ],
      defeatedBy: [
        "Reaction time is the same no matter how many choices",
        "Only the brightness of the lights affects speed",
      ],
    },
    correctAnswer:
      "The mind likely takes time to decide among options, and that time grows with the number of choices in a regular way that suggests narrowing down possibilities; test whether making some lights far more likely shortens the time for those, whether grouping the lights into clusters speeds the choice, and whether the increase flattens once the choices are highly practiced.",
    explanation:
      "Top credit names a decision process and three tests, with a same-display-different-choices test that names its refutation; 'depends on the person' is the dodge the regular pattern defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "People memorize a map of an island with several landmarks, then close their eyes and imagine moving a dot from one landmark to another. The farther apart two landmarks were on the map, the longer they take to 'arrive' in their imagination. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Imagining longer trips seems to take longer.",
        credit: 0.3,
      },
      {
        text: "Imagination is private, so we can't study it scientifically.",
        credit: 0,
      },
      {
        text: "Mental images probably preserve distances; we could test more landmark pairs.",
        credit: 0.6,
      },
      {
        text: "Mental images likely preserve spatial layout, so scanning a longer imagined distance takes proportionally more time, much like scanning a real picture; test whether scan time rises in step with map distance, whether imagined zooming in or out changes the times predictably, and whether people who report vivid imagery show the cleanest distance effect.",
        credit: 1.0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'images preserve spatial layout' lead from the rival 'people just guess that farther should take longer,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: have people scan between pairs without telling them distance matters, and check whether scan time still rises smoothly with the actual map distance — a clean proportional curve they were never told to produce supports a genuine spatial image. My lead is refuted if times only track distance when people know the experiment expects it, or if times are flat across distances.",
      yieldAnchors: [
        "People scan between imagined landmarks",
        "Farther landmarks take longer to reach",
        "Scan time tracks the map distance",
      ],
      riskAnchors: [
        "Scan time rises in step with distance",
        "Imagined zooming changes times predictably",
        "Vivid imagers show the cleanest effect",
      ],
      defeatedBy: [
        "Imagined distance has no effect on scan time",
        "People answer at the same speed for all pairs",
      ],
    },
    correctAnswer:
      "Mental images likely preserve spatial layout, so scanning a longer imagined distance takes proportionally more time, much like scanning a real picture; test whether scan time rises in step with map distance, whether imagined zooming in or out changes the times predictably, and whether people who report vivid imagery show the cleanest distance effect.",
    explanation:
      "Full credit claims images keep spatial structure with three checks and a 'don't tell them distance matters' test that names its refutation; 'imagination is private, can't study it' is the dodge the orderly scan times defeat.",
  },
  {
    itemType: "hybrid",
    prompt:
      "Reading difficulty in some children is studied three ways: psychologists find they struggle to break words into sounds, geneticists find it runs in families, and brain scientists find unusual activity in a sound-processing region. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The three findings probably fit together; we could gather more studies.",
        credit: 0.6,
      },
      {
        text: "Because evidence from psychology, genetics, and brain science converges, the difficulty likely stems from a specific problem handling speech sounds rather than from low overall intelligence; test whether training in sound-segmentation improves reading, whether unaffected relatives share milder versions, and whether the brain region's activity predicts who responds to that training.",
        credit: 1.0,
      },
      {
        text: "Three different fields means three different problems, so no single conclusion is possible.",
        credit: 0,
      },
      {
        text: "The different studies seem related somehow.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'specific sound-processing problem' lead from the rival 'these children are just generally slower learners,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: check whether the same children perform normally on tasks that don't involve speech sounds, like spatial puzzles or math, while failing sound-segmentation — a sharp, sound-specific deficit rules out general slowness. My lead is refuted if they are equally behind on every kind of task, which would point to overall ability rather than a specific sound-processing problem.",
      yieldAnchors: [
        "The children struggle to break words into sounds",
        "The difficulty runs in families",
        "A sound-processing brain region behaves unusually",
      ],
      riskAnchors: [
        "Sound-segmentation training improves reading",
        "Unaffected relatives show milder versions",
        "The brain region predicts who responds to training",
      ],
      defeatedBy: [
        "The children are simply low in overall intelligence",
        "The three findings are unrelated coincidences",
      ],
    },
    correctAnswer:
      "Because evidence from psychology, genetics, and brain science converges, the difficulty likely stems from a specific problem handling speech sounds rather than from low overall intelligence; test whether training in sound-segmentation improves reading, whether unaffected relatives share milder versions, and whether the brain region's activity predicts who responds to that training.",
    explanation:
      "Full credit leans on converging evidence to name a specific cause with three tests and a domain-specificity check that would refute it; 'three fields means three problems' is the dodge the convergence itself defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A wild crow, faced with food in a tube too deep to reach, bends a straight piece of wire into a hook on its first try and fishes the food out. It had never been given wire before. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The crow likely solved a new problem by mentally representing the goal and shaping a tool to fit it, not just by blind trial and error; test whether it makes the right tool before any fumbling, whether it picks the correct tool when several lengths are offered, and whether it transfers the trick to a new container it has never seen.",
        credit: 1.0,
      },
      {
        text: "The crow seems pretty clever with the wire.",
        credit: 0.3,
      },
      {
        text: "Animals can't tell us their thoughts, so claims about crow reasoning are off-limits.",
        credit: 0,
      },
      {
        text: "The crow probably planned the tool; we could test a few more crows.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'mental planning' lead from the rival 'the crow stumbled onto the hook by random bending,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: offer the crow several tools of different shapes and lengths and see whether it selects or makes the correct one before any trial-and-error fishing — choosing the right tool up front signals a represented goal, not luck. My lead is refuted if the crow only succeeds after many random attempts and shows no above-chance first-try tool choice.",
      yieldAnchors: [
        "The crow had never been given wire before",
        "It bent the wire into a working hook on the first try",
        "It used the hook to retrieve out-of-reach food",
      ],
      riskAnchors: [
        "It makes the right tool before any fumbling",
        "It picks the correct tool from several options",
        "It transfers the solution to a new container",
      ],
      defeatedBy: [
        "The crow succeeded only by random trial and error",
        "The hook formed by accident with no role for the crow",
      ],
    },
    correctAnswer:
      "The crow likely solved a new problem by mentally representing the goal and shaping a tool to fit it, not just by blind trial and error; test whether it makes the right tool before any fumbling, whether it picks the correct tool when several lengths are offered, and whether it transfers the trick to a new container it has never seen.",
    explanation:
      "Full credit infers goal-directed planning from the first-try success with three checks and a tool-choice test that names its refutation; 'claims about crow reasoning are off-limits' is the dodge the measurable behavior defeats.",
  },
];

const written: HomeworkItem[] = [
  {
    itemType: "written",
    prompt:
      "A researcher measures how quickly people decide whether two letters are 'the same.' People are fastest for identical letters like 'A' and 'A,' slower for same-name pairs like 'A' and 'a,' and slowest when judging whether two letters are both vowels, like 'A' and 'E.' In one paragraph, propose the strongest conclusion about what the mind is doing between seeing the letters and answering, and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that matching letters runs through successive mental stages — first a quick visual match of shape, then a slower match of letter name, then a still slower match of category such as 'vowel' — so each kind of judgment must wait for a later, more abstract stage to finish. This is a strong claim because it predicts checkable consequences: response time should increase in a fixed order (shape < name < category) across many letter pairs; making the printed shapes harder to see should slow only the shape-based judgments and leave the others roughly unchanged; and people should never be slower on an identical-shape match than on a category match. I would test it by timing all three judgment types on the same letters, by degrading the image quality to see whether only the visual stage slows, and by checking whether the time gaps between stages stay consistent across different people and letter sets.",
      yieldAnchors: [
        "Identical letters are judged fastest",
        "Same-name pairs are judged slower",
        "Vowel-category pairs are judged slowest",
      ],
      riskAnchors: [
        "Response times line up in the order shape < name < category",
        "Degrading the image slows only the visual judgment",
        "Identical-shape matches are never slower than category matches",
      ],
      defeatedBy: [
        "All three judgments take exactly the same time",
        "Nothing can be inferred about hidden stages from reaction times",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that matching letters runs through successive mental stages — first a quick visual match of shape, then a slower match of letter name, then a still slower match of category such as 'vowel' — so each kind of judgment must wait for a later, more abstract stage to finish. This is a strong claim because it predicts checkable consequences: response time should increase in a fixed order (shape < name < category) across many letter pairs; making the printed shapes harder to see should slow only the shape-based judgments and leave the others roughly unchanged; and people should never be slower on an identical-shape match than on a category match. I would test it by timing all three judgment types on the same letters, by degrading the image quality to see whether only the visual stage slows, and by checking whether the time gaps between stages stay consistent across different people and letter sets.",
    explanation:
      "Under the inverted standard, the cautious 'nothing can be inferred from reaction times' earns near-zero; top credit goes to the staged-processing conclusion that commits to a fixed order and names a degrade-the-image test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A patient who lost the ability to form new conscious memories after brain surgery cannot recall meeting his doctor yesterday, yet when he practices a tricky mirror-drawing task day after day he steadily improves — all while insisting he has never tried it before. In one paragraph, propose the strongest conclusion and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that the mind has at least two separate memory systems — one for conscious facts and events, which the surgery damaged, and one for skills and habits, which it spared — because the patient improves at a skill while having no conscious memory of practicing it. This is a strong claim because it predicts checkable consequences: he should learn other motor and perceptual skills normally while still failing every test of conscious recall; brain scans of healthy people should show different regions active for skill learning versus fact memory; and other patients with damage to the skill system should show the reverse pattern, losing skills while keeping conscious memory. I would test it by training him on several new skills and separately quizzing his conscious recall, by imaging healthy volunteers during each kind of learning, and by searching for patients with the opposite dissociation.",
      yieldAnchors: [
        "The patient cannot form new conscious memories",
        "He improves at mirror-drawing with practice",
        "He denies ever having done the task",
      ],
      riskAnchors: [
        "He learns other skills while failing all conscious-recall tests",
        "Different brain regions support skill versus fact learning",
        "Other patients show the opposite dissociation",
      ],
      defeatedBy: [
        "Memory is a single all-or-nothing store",
        "One unusual patient can tell us nothing about normal minds",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that the mind has at least two separate memory systems — one for conscious facts and events, which the surgery damaged, and one for skills and habits, which it spared — because the patient improves at a skill while having no conscious memory of practicing it. This is a strong claim because it predicts checkable consequences: he should learn other motor and perceptual skills normally while still failing every test of conscious recall; brain scans of healthy people should show different regions active for skill learning versus fact memory; and other patients with damage to the skill system should show the reverse pattern, losing skills while keeping conscious memory. I would test it by training him on several new skills and separately quizzing his conscious recall, by imaging healthy volunteers during each kind of learning, and by searching for patients with the opposite dissociation.",
    explanation:
      "The inverted standard gives near-zero to 'one patient tells us nothing'; credit goes to the two-systems conclusion that names a mechanism and proposes a search for the opposite dissociation as its own refutation test.",
  },
  {
    itemType: "written",
    prompt:
      "Master chess players can glance at a real game position for five seconds and then reconstruct it almost perfectly, far better than beginners. But when the pieces are scattered randomly on the board, masters remember no better than beginners do. In one paragraph, propose the strongest conclusion about how expert memory works and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that masters don't have better raw memory but have stored thousands of meaningful patterns, so they recall real positions by recognizing familiar chunks — an advantage that vanishes when random scatter offers no patterns to match. This is a strong claim because it predicts checkable consequences: the master's advantage should appear only for game-like, rule-following positions; masters should reconstruct boards in bursts of related pieces rather than one piece at a time; and the same pattern should hold for experts in other fields, such as nurses recalling realistic but not scrambled patient charts. I would test it by comparing recall for legal versus random positions across skill levels, by tracking the order and timing of piece placement to look for chunked bursts, and by repeating the study in a different domain of expertise.",
      yieldAnchors: [
        "Masters reconstruct real positions almost perfectly",
        "Beginners do far worse on real positions",
        "Masters lose their advantage on random positions",
      ],
      riskAnchors: [
        "The advantage appears only for game-like positions",
        "Masters place pieces in related bursts",
        "The same pattern holds in other expert domains",
      ],
      defeatedBy: [
        "Masters simply have better memory for everything",
        "Random and real positions are recalled equally by masters",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that masters don't have better raw memory but have stored thousands of meaningful patterns, so they recall real positions by recognizing familiar chunks — an advantage that vanishes when random scatter offers no patterns to match. This is a strong claim because it predicts checkable consequences: the master's advantage should appear only for game-like, rule-following positions; masters should reconstruct boards in bursts of related pieces rather than one piece at a time; and the same pattern should hold for experts in other fields, such as nurses recalling realistic but not scrambled patient charts. I would test it by comparing recall for legal versus random positions across skill levels, by tracking the order and timing of piece placement to look for chunked bursts, and by repeating the study in a different domain of expertise.",
    explanation:
      "The cautious 'masters just have better memory for everything' is the overreach the random-board result defeats; top credit goes to the chunking conclusion that names a domain-transfer test and several checkable consequences.",
  },
  {
    itemType: "written",
    prompt:
      "Across the world, children learn whatever language surrounds them on a strikingly similar timetable, babbling around six months and combining words around age two, with no formal lessons. Deaf children exposed to sign language hit the same milestones, and even babble with their hands. In one paragraph, propose the strongest conclusion about the mind and language and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that the human mind comes prepared to acquire language through a specialized capacity that works on any natural language — spoken or signed — rather than through general imitation alone, which is why the timetable and even hand-babbling appear regardless of the specific language. This is a strong claim because it predicts checkable consequences: deaf and hearing children should pass the same milestones in the same order; children should produce grammatical patterns no adult explicitly taught them; and the capacity should show a sensitive period, so those who get no language early struggle to master it later. I would test it by comparing milestone timing across spoken and signed languages, by documenting child-invented grammar in communities of deaf children who create new sign languages, and by studying language outcomes in people first exposed to any language at different ages.",
      yieldAnchors: [
        "Children worldwide learn language on a similar timetable",
        "They learn without formal lessons",
        "Deaf children hit the same milestones and babble with their hands",
      ],
      riskAnchors: [
        "Deaf and hearing children pass milestones in the same order",
        "Children produce untaught grammatical patterns",
        "A sensitive period limits late learners",
      ],
      defeatedBy: [
        "Language is learned purely by imitating adults",
        "Spoken and signed languages develop on totally different schedules",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that the human mind comes prepared to acquire language through a specialized capacity that works on any natural language — spoken or signed — rather than through general imitation alone, which is why the timetable and even hand-babbling appear regardless of the specific language. This is a strong claim because it predicts checkable consequences: deaf and hearing children should pass the same milestones in the same order; children should produce grammatical patterns no adult explicitly taught them; and the capacity should show a sensitive period, so those who get no language early struggle to master it later. I would test it by comparing milestone timing across spoken and signed languages, by documenting child-invented grammar in communities of deaf children who create new sign languages, and by studying language outcomes in people first exposed to any language at different ages.",
    explanation:
      "The inverted standard gives near-zero to a vague 'kids just copy adults' that the hand-babbling already strains; credit goes to the prepared-capacity conclusion that names untaught grammar and a sensitive-period test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A patient who became blind after damage to his visual brain insists he sees nothing in part of his field — yet when asked to 'just guess' where a light flashed there, he points correctly far more often than chance. In one paragraph, propose the strongest conclusion about vision and awareness and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that vision and conscious awareness rely on partly separate pathways, so the patient's brain still processes the light's location through an intact route even though the damaged route that supports conscious seeing is gone. This is a strong claim because it predicts checkable consequences: his 'guesses' should stay above chance for location and movement but fail for fine detail the surviving pathway can't carry; the spared ability should track an alternative visual route in brain scans; and damaging that alternative route should erase the guessing while leaving conscious vision intact in other people. I would test it by measuring which visual features he can guess versus not, by imaging which intact pathways activate when he guesses correctly, and by checking patients with the complementary damage for the opposite profile.",
      yieldAnchors: [
        "The patient reports seeing nothing in part of his field",
        "He points to flashes there far above chance",
        "He believes he is only guessing",
      ],
      riskAnchors: [
        "Guessing stays above chance for location but fails for fine detail",
        "An alternative visual pathway activates during correct guesses",
        "Damaging that pathway erases the guessing ability",
      ],
      defeatedBy: [
        "Vision and awareness are one and the same process",
        "A patient's verbal report is the only valid measure of sight",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that vision and conscious awareness rely on partly separate pathways, so the patient's brain still processes the light's location through an intact route even though the damaged route that supports conscious seeing is gone. This is a strong claim because it predicts checkable consequences: his 'guesses' should stay above chance for location and movement but fail for fine detail the surviving pathway can't carry; the spared ability should track an alternative visual route in brain scans; and damaging that alternative route should erase the guessing while leaving conscious vision intact in other people. I would test it by measuring which visual features he can guess versus not, by imaging which intact pathways activate when he guesses correctly, and by checking patients with the complementary damage for the opposite profile.",
    explanation:
      "'A verbal report is the only valid measure of sight' is the overreach the above-chance guessing defeats; top credit goes to the separate-pathways conclusion that names a which-features test and an imaging test that could refute it.",
  },
];

export const section: SectionContent = {
  slug: "what-is-cogsci",
  title: "What Cognitive Science Is",
  weekNumber: 1,
  blurb:
    "Cognitive science studies the mind as a scientific object, pooling psychology, neuroscience, linguistics, philosophy, AI, and anthropology to infer the hidden processes behind what people say and do.",
  lectureTitle:
    "1.1 What Cognitive Science Is: studying the mind through the traces it leaves in behavior",
  body: `# What Cognitive Science Is

You can't open up a mind and look inside. You can't weigh a thought or photograph a memory in the act of being formed. Yet the mind is real, and it does specific work: it sees, remembers, talks, decides, and learns. Cognitive science is the project of studying that work the way other sciences study their objects — by careful measurement, testable explanations, and predictions you can go out and check. Its core bet is that the mind is not off-limits to science just because it is invisible.

## The mind as an object of study

The trick is that we never observe the mind directly; we observe its **outputs** — what people say, what they remember, how fast they answer, what mistakes they make. From those traces we **infer** the hidden processes in between. When someone takes longer to confirm that a penguin is a bird than that a robin is, the extra fraction of a second is a clue about how the mind stores categories. The behavior is the data; the mental process is the explanation we build to account for it. That move — reasoning from visible behavior to an invisible mechanism — is the heartbeat of the whole field.

## Many fields, one mind

No single discipline owns the mind, so cognitive science is deliberately **interdisciplinary**. Psychology runs experiments on perception, memory, and reasoning. Neuroscience asks which brain systems carry out each job. Linguistics studies the structure of language and how children acquire it. Philosophy sharpens the hard questions — what is a representation, what is consciousness. Computer science and artificial intelligence build working models to see whether a proposed mechanism could actually compute the behavior. Anthropology checks which mental patterns hold across cultures and which are local. These fields don't take turns; they attack the same target with different tools.

## Levels of analysis

Because the mind can be described at several **levels**, a complete explanation usually needs more than one. Take recognizing a friend's voice. At the level of behavior, you respond faster to familiar voices. At the level of the brain, particular regions become active. At the level of computation, the mind is matching incoming sound to stored templates. These are not three rival theories; they are three views of one ability that should fit together. A good cognitive-science explanation says how the computation is carried out by the brain and shows up in behavior — and it gets stronger when the levels line up.

## Reading the mind from behavior

How do you turn a clue into a conclusion? You commit to a specific mechanism and then name the checkable consequences it predicts. "The mind rotates a mental image step by step" is a real claim because it predicts that response time should climb steadily with the rotation angle — and you can measure that. The weak move is to stop at "people are slower on harder trials," which names no mechanism and predicts nothing new. The strongest conclusion is the one that both fits the data in front of you **and** spells out a fresh test that could prove it wrong. A claim that risks nothing teaches nothing.

## Converging evidence

One study is rarely enough, because any single method can mislead. The field's strongest conclusions come from **converging evidence**: when an experiment, a brain scan, and a computer model — often from different labs and different fields — independently point to the same answer, that agreement is hard to explain away. If behavior, biology, and computation all say memory has two separate systems, the conclusion earns real confidence. Convergence is also why "we need more data" is a weak stopping point: the point of picking a mechanism is to know exactly which new evidence would confirm or kill it.

## In the real world

Suppose a friend keeps blanking on a coworker's name even though she sees him daily. The dodge is "memory is just unreliable" — true-sounding, but it predicts nothing and suggests nothing to do. A cognitive-science move commits to a mechanism: maybe names are stored loosely and need a strong cue to retrieve. Notice how much that opens up. It predicts she should recognize the name instantly when she hears its first sound; that giving herself a cue ("his name rhymes with...") should help; and that she forgets *names* far more than *faces*, because faces have richer cues. Three cheap checks, each able to refute the idea. That is what studying the mind scientifically buys you — not a shrug at how mysterious people are, but a testable story about the machinery underneath.`,
  homework: {
    mcq,
    hybrid,
    written,
  },
};
