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
      "People press a button the instant a light comes on. When a second light is added and they must press only for the green one, their response is reliably slower by a roughly constant amount. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The extra time likely reflects an added internal stage — deciding which light appeared before responding — inserted between seeing and acting; test whether adding a third choice adds a similar fixed increment, whether the extra time vanishes when only one light is ever possible, and whether telling people the likely light in advance shrinks it.",
        credit: 1.0,
      },
      {
        text: "Choosing between lights probably adds some processing time; we could test more light counts.",
        credit: 0.6,
      },
      {
        text: "Two lights seem to slow people down a bit.",
        credit: 0.3,
      },
      {
        text: "What happens inside the head between the light and the button is hidden, so the timing tells us nothing.",
        credit: 0,
      },
    ],
    correctAnswer:
      "The extra time likely reflects an added internal stage — deciding which light appeared before responding — inserted between seeing and acting; test whether adding a third choice adds a similar fixed increment, whether the extra time vanishes when only one light is ever possible, and whether telling people the likely light in advance shrinks it.",
    explanation:
      "Top credit reads the constant extra time as a separable decision stage and names three checks that could refute it; 'the timing tells us nothing' refuses the very inference the steady increment supports and earns zero.",
  },
  {
    itemType: "mc",
    prompt:
      "Rats wander an unrewarded maze for days, seeming to learn nothing. The first day food is placed at the goal, they run straight to it — faster than rats that were rewarded from the start. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The unrewarded rats seem to catch on quickly once food appears.",
        credit: 0.3,
      },
      {
        text: "The rats likely built an internal map of the maze while exploring, storing information that showed in behavior only once reward made it worth using; test whether blocking a familiar path makes them pick the next-shortest route, whether they take a novel shortcut when one opens, and whether more unrewarded exploration yields faster first rewarded runs.",
        credit: 1.0,
      },
      {
        text: "Animals can't report their thoughts, so claims about what rats 'know' are off-limits.",
        credit: 0,
      },
      {
        text: "The exploring rats probably learned the layout beforehand; we could run more maze trials.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The rats likely built an internal map of the maze while exploring, storing information that showed in behavior only once reward made it worth using; test whether blocking a familiar path makes them pick the next-shortest route, whether they take a novel shortcut when one opens, and whether more unrewarded exploration yields faster first rewarded runs.",
    explanation:
      "Full credit infers a stored internal representation (a cognitive map) learned without reward and names three tests; 'claims about what rats know are off-limits' is the dodge the immediate straight run defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "Told to press a key whenever a sentence means roughly 'the dog chased the cat,' people respond just as fast to 'the cat was chased by the dog' as to the original, even though the two sentences share few exact words. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Reading is too rich to study by timing key presses.",
        credit: 0,
      },
      {
        text: "People seem to treat similar sentences alike.",
        credit: 0.3,
      },
      {
        text: "The two sentences probably mean the same to readers; we could test more paraphrases.",
        credit: 0.6,
      },
      {
        text: "The mind likely responds to an internal representation of the sentence's meaning rather than to its exact words, so different wordings of one idea act alike; test whether unrelated sentences that share many words are kept apart, whether a meaning-changing word swap slows responses, and whether the equivalence survives translation into another language.",
        credit: 1.0,
      },
    ],
    correctAnswer:
      "The mind likely responds to an internal representation of the sentence's meaning rather than to its exact words, so different wordings of one idea act alike; test whether unrelated sentences that share many words are kept apart, whether a meaning-changing word swap slows responses, and whether the equivalence survives translation into another language.",
    explanation:
      "The strongest conclusion names a meaning-based representation behind the behavior and lists three tests; 'too rich to study by timing key presses' opens no inquiry and earns zero under the inverted standard.",
  },
  {
    itemType: "mc",
    prompt:
      "People judge which of two numbers is larger. They are fast for far-apart pairs like 2 and 9 but reliably slower for close pairs like 5 and 6. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The mind likely represents numbers along an internal 'number line' and compares positions on it, so nearby numbers are harder to tell apart; test whether the slowdown grows smoothly as the gap shrinks, whether very large numbers are compared more slowly even at equal gaps, and whether the same distance effect appears when quantities are shown as dot clusters.",
        credit: 1.0,
      },
      {
        text: "Closer numbers probably take longer to compare; we could test more number pairs.",
        credit: 0.6,
      },
      {
        text: "People seem slower with numbers that are near each other.",
        credit: 0.3,
      },
      {
        text: "Numbers are abstract, so we can't say anything about how the mind handles them.",
        credit: 0,
      },
    ],
    correctAnswer:
      "The mind likely represents numbers along an internal 'number line' and compares positions on it, so nearby numbers are harder to tell apart; test whether the slowdown grows smoothly as the gap shrinks, whether very large numbers are compared more slowly even at equal gaps, and whether the same distance effect appears when quantities are shown as dot clusters.",
    explanation:
      "Top credit posits an internal magnitude representation and names three tests, including a dots version that could refute it; 'numbers are abstract, we can't say anything' is the refusal the orderly distance effect defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "People can repeat back about seven random digits but no more. Yet when the digits 1-4-9-2-1-7-7-6 are recognized as two famous years, the same person repeats far longer strings effortlessly. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Grouping the digits seems to help memory.",
        credit: 0.3,
      },
      {
        text: "Memory limits differ so much between people that no general claim is possible.",
        credit: 0,
      },
      {
        text: "The mind's short-term capacity is likely measured in meaningful 'chunks' rather than raw items, so recoding digits into known units packs more information into the same limited slots; test whether any familiar grouping (a phone-number rhythm, words) raises the span, whether nonsense groupings give no boost, and whether experts chunk material from their own field far better than strangers' material.",
        credit: 1.0,
      },
      {
        text: "Familiar groupings probably let people remember more; we could test other digit strings.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The mind's short-term capacity is likely measured in meaningful 'chunks' rather than raw items, so recoding digits into known units packs more information into the same limited slots; test whether any familiar grouping (a phone-number rhythm, words) raises the span, whether nonsense groupings give no boost, and whether experts chunk material from their own field far better than strangers' material.",
    explanation:
      "The richest conclusion names chunking as the capacity unit and offers three tests; 'limits differ too much to say anything' is the dodge the reliable jump in span with meaning defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A speaker means to say 'a cup of coffee' but says 'a cuff of cuppee,' swapping sounds between two words she had not yet spoken. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The speaker probably planned both words before speaking; we could collect more slips.",
        credit: 0.6,
      },
      {
        text: "Speech is likely planned in a buffer that holds several upcoming words at once before they are spoken, since a sound jumped into a word not yet uttered; test whether such exchanges stay within a phrase rather than crossing far apart, whether swapped sounds keep their position (a starting sound trades with another starting sound), and whether faster speech produces more such anticipations.",
        credit: 1.0,
      },
      {
        text: "Slips of the tongue are random accidents with nothing to teach us.",
        credit: 0,
      },
      {
        text: "People sometimes mix up their sounds when talking.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "Speech is likely planned in a buffer that holds several upcoming words at once before they are spoken, since a sound jumped into a word not yet uttered; test whether such exchanges stay within a phrase rather than crossing far apart, whether swapped sounds keep their position (a starting sound trades with another starting sound), and whether faster speech produces more such anticipations.",
    explanation:
      "Top credit infers an advance planning buffer from the misplaced sound and names three structured tests; 'random accidents with nothing to teach us' is the overreach the orderly, rule-respecting slips defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "Unable to recall a word, people often still know its first letter, how many syllables it has, and roughly what it sounds like — while the word itself stays out of reach. Which conclusion best follows?",
    mcOptions: [
      {
        text: "If you can't recall the word, there is nothing measurable going on.",
        credit: 0,
      },
      {
        text: "People seem to half-remember words sometimes.",
        credit: 0.3,
      },
      {
        text: "Word memory probably comes in pieces; we could collect more such cases.",
        credit: 0.6,
      },
      {
        text: "A word's meaning and its sound are likely stored and retrieved as separable pieces of information, so meaning can be available while the sound form is only partly accessed; test whether priming the missing sound triggers full recall, whether the wrong words people offer share the sound or the meaning of the target, and whether the state resolves faster for shorter or more common words.",
        credit: 1.0,
      },
    ],
    correctAnswer:
      "A word's meaning and its sound are likely stored and retrieved as separable pieces of information, so meaning can be available while the sound form is only partly accessed; test whether priming the missing sound triggers full recall, whether the wrong words people offer share the sound or the meaning of the target, and whether the state resolves faster for shorter or more common words.",
    explanation:
      "The winning conclusion splits meaning from sound form and names three tests; 'nothing measurable is going on' is the dodge the reliable partial knowledge directly defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "Skilled readers name common irregular words like 'yacht' quickly, but when reading made-up strings like 'blorp' they slow down and sound them out letter by letter. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Reading likely runs through two routes — a fast lookup for familiar whole words and a slower letter-to-sound assembly for new ones; test whether brand-new but pronounceable strings are always slower than matched real words, whether very rare real words drift toward the slow route, and whether a reader who loses one route keeps the other.",
        credit: 1.0,
      },
      {
        text: "Made-up words seem harder to read aloud.",
        credit: 0.3,
      },
      {
        text: "Reading is automatic, so its inner steps can't be examined.",
        credit: 0,
      },
      {
        text: "Familiar and unfamiliar words probably use different processes; we could test more strings.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Reading likely runs through two routes — a fast lookup for familiar whole words and a slower letter-to-sound assembly for new ones; test whether brand-new but pronounceable strings are always slower than matched real words, whether very rare real words drift toward the slow route, and whether a reader who loses one route keeps the other.",
    explanation:
      "Top credit names two processing routes with three checks, including a brain-injury dissociation that could refute it; 'too automatic to examine' is the empty refusal the clean speed gap defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "In a naming task, making the picture blurry adds a fixed amount of time, and making the name rare adds another fixed amount — and when a picture is both blurry AND rare, the two delays simply add together. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The two difficulties probably each add their own time; we could test more combinations.",
        credit: 0.6,
      },
      {
        text: "Harder pictures take longer in two ways.",
        credit: 0.3,
      },
      {
        text: "Because the two delays add independently, the mind likely handles image clarity and word retrieval in separate sequential stages, each unaffected by the other's load; test whether a third factor that touches one stage leaves the other's delay unchanged, whether the delays still add at higher difficulty levels, and whether brain measures show the two effects at different moments.",
        credit: 1.0,
      },
      {
        text: "Naming a picture involves too much at once to separate any steps.",
        credit: 0,
      },
    ],
    correctAnswer:
      "Because the two delays add independently, the mind likely handles image clarity and word retrieval in separate sequential stages, each unaffected by the other's load; test whether a third factor that touches one stage leaves the other's delay unchanged, whether the delays still add at higher difficulty levels, and whether brain measures show the two effects at different moments.",
    explanation:
      "The strongest conclusion reads independent additivity as evidence for separate stages and names three tests; 'too much at once to separate any steps' refuses the inference the clean addition supports.",
  },
  {
    itemType: "mc",
    prompt:
      "A person pouring water into a glass keeps glancing at the rising level, slows the pour as it nears the top, and stops exactly at the line. Which conclusion best follows?",
    mcOptions: [
      {
        text: "People seem to watch the glass while pouring.",
        credit: 0.3,
      },
      {
        text: "Everyday actions are too automatic to reveal how they're controlled.",
        credit: 0,
      },
      {
        text: "The pourer probably uses the water level to guide the pour; we could film more pours.",
        credit: 0.6,
      },
      {
        text: "The action is likely guided by a feedback loop that compares the current level against a goal level and adjusts the pour to close the gap; test whether hiding the glass makes pours overshoot, whether a falsely raised view makes people stop early, and whether the slowing near the top scales with how precise the target line is.",
        credit: 1.0,
      },
    ],
    correctAnswer:
      "The action is likely guided by a feedback loop that compares the current level against a goal level and adjusts the pour to close the gap; test whether hiding the glass makes pours overshoot, whether a falsely raised view makes people stop early, and whether the slowing near the top scales with how precise the target line is.",
    explanation:
      "Top credit names a goal-comparison feedback loop and three tests that could break it; 'too automatic to reveal how it's controlled' is the dodge the goal-directed slowing contradicts.",
  },
  {
    itemType: "mc",
    prompt:
      "Asked to sort novel cartoon creatures into 'friendly' or 'dangerous,' people get faster and more accurate over trials, and afterward can state rules like 'a spiky tail and red eyes means dangerous.' Which conclusion best follows?",
    mcOptions: [
      {
        text: "People probably learn which features matter; we could run more sorting trials.",
        credit: 0.6,
      },
      {
        text: "The mind likely learns a category by weighing specific input features and building a rule that maps them to an output label; test whether a creature with conflicting features is classified by its strongest cues, whether removing the key feature drops accuracy, and whether a creature that obeys the rule but was never seen is still sorted correctly.",
        credit: 1.0,
      },
      {
        text: "People seem to get better at sorting the creatures.",
        credit: 0.3,
      },
      {
        text: "Made-up creatures aren't real, so sorting them shows nothing about the mind.",
        credit: 0,
      },
    ],
    correctAnswer:
      "The mind likely learns a category by weighing specific input features and building a rule that maps them to an output label; test whether a creature with conflicting features is classified by its strongest cues, whether removing the key feature drops accuracy, and whether a creature that obeys the rule but was never seen is still sorted correctly.",
    explanation:
      "The richest conclusion treats categorizing as a feature-to-label computation and names three tests; 'made-up creatures show nothing' is the refusal the learnable, stateable rule defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "Beginners reading sheet music check each note slowly, but after months of practice skilled players sight-read fluently and say they barely notice individual notes. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Skill is too personal to draw any general conclusion.",
        credit: 0,
      },
      {
        text: "Practice seems to make reading music easier.",
        credit: 0.3,
      },
      {
        text: "With practice, a slow step-by-step process likely becomes automatic — fast, effortless, and hard to interrupt — by recoding notes into larger learned patterns; test whether skilled players struggle to read deliberately note-by-note on demand, whether scrambled patternless scores erase their speed advantage, and whether the automatic reading intrudes when they try to ignore the notes.",
        credit: 1.0,
      },
      {
        text: "Practice probably changes how reading music works; we could test players at different levels.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "With practice, a slow step-by-step process likely becomes automatic — fast, effortless, and hard to interrupt — by recoding notes into larger learned patterns; test whether skilled players struggle to read deliberately note-by-note on demand, whether scrambled patternless scores erase their speed advantage, and whether the automatic reading intrudes when they try to ignore the notes.",
    explanation:
      "Top credit names automatization through pattern chunking and three tests, including a scrambled-score check; 'too personal to conclude anything' is the dodge the reliable beginner-to-expert shift defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "Searching a string for the letter 'Q,' people say 'no, it's absent' faster when the string is short, and the time to answer 'no' grows steadily with the number of letters. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Longer strings seem to take longer to search.",
        credit: 0.3,
      },
      {
        text: "More letters probably take longer to scan; we could test more string lengths.",
        credit: 0.6,
      },
      {
        text: "Reading happens too fast to study what the eyes and mind are doing.",
        credit: 0,
      },
      {
        text: "The mind likely checks letters one at a time and, to be sure a target is absent, must scan the whole string, so 'no' answers grow steadily with length; test whether 'no' times rise faster than 'yes' times, whether a highly distinctive target like a digit among letters breaks the pattern by popping out, and whether each added letter adds a roughly equal step.",
        credit: 1.0,
      },
    ],
    correctAnswer:
      "The mind likely checks letters one at a time and, to be sure a target is absent, must scan the whole string, so 'no' answers grow steadily with length; test whether 'no' times rise faster than 'yes' times, whether a highly distinctive target like a digit among letters breaks the pattern by popping out, and whether each added letter adds a roughly equal step.",
    explanation:
      "The strongest conclusion infers a serial self-terminating scan from the steady growth and names three tests; 'too fast to study' opens no inquiry and earns zero.",
  },
  {
    itemType: "mc",
    prompt:
      "Shown a grid of twelve letters for a flash, people recall only about four — but if a tone right after the flash tells them which row to report, they get almost any cued row nearly perfect. Which conclusion best follows?",
    mcOptions: [
      {
        text: "A brief, rich visual representation of the whole grid likely lingers for a fraction of a second after the display, but fades before all of it can be read out; test whether delaying the tone steadily lowers how much of the cued row is reported, whether a bright flash right after the grid wipes out the advantage, and whether the four-item limit reflects readout time rather than what was first stored.",
        credit: 1.0,
      },
      {
        text: "People probably hold a brief image they can't fully report; we could test more cue delays.",
        credit: 0.6,
      },
      {
        text: "Memory for a flash is too fleeting to measure anything.",
        credit: 0,
      },
      {
        text: "A cue seems to help people report a flashed grid.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "A brief, rich visual representation of the whole grid likely lingers for a fraction of a second after the display, but fades before all of it can be read out; test whether delaying the tone steadily lowers how much of the cued row is reported, whether a bright flash right after the grid wipes out the advantage, and whether the four-item limit reflects readout time rather than what was first stored.",
    explanation:
      "Top credit posits a brief high-capacity store emptied by a slow readout and names three tests, including a delayed-cue decay check; 'too fleeting to measure' is the dodge the near-perfect cued report defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A man understands spoken words and reads perfectly, and his mouth and tongue move normally for eating, yet he cannot turn his clear thoughts into spoken sentences. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Something about his speaking is affected.",
        credit: 0.3,
      },
      {
        text: "Turning thoughts into speech likely depends on a distinct processing stage between intact comprehension (input) and intact muscle control (output), and that stage alone is damaged; test whether he can produce the same words in writing, whether he can repeat words he just heard, and whether other patients show the reverse — fluent speech but poor comprehension.",
        credit: 1.0,
      },
      {
        text: "The brain is too interconnected to assign speaking to any one stage.",
        credit: 0,
      },
      {
        text: "His speech output is probably the problem; we could examine more such patients.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Turning thoughts into speech likely depends on a distinct processing stage between intact comprehension (input) and intact muscle control (output), and that stage alone is damaged; test whether he can produce the same words in writing, whether he can repeat words he just heard, and whether other patients show the reverse — fluent speech but poor comprehension.",
    explanation:
      "The richest conclusion isolates a middle processing stage from intact input and output and names three tests; 'too interconnected to assign to any stage' is the refusal the selective deficit contradicts.",
  },
];

const hybrid: HomeworkItem[] = [
  {
    itemType: "hybrid",
    prompt:
      "An arrow flashes pointing left or right; a target then appears. People detect it faster when it appears where the arrow pointed and slower when it appears on the opposite side, even though the arrow gives no guarantee. Which conclusion best follows?",
    mcOptions: [
      {
        text: "An internal 'spotlight' of attention is likely shifted toward the cued location before the target arrives, speeding processing there and costing time when it must be redirected; test whether very short cue-to-target gaps give no benefit, whether the benefit peaks then fades over time, and whether an invalid cue's cost grows with how far attention must travel back.",
        credit: 1.0,
      },
      {
        text: "The arrow probably draws attention to one side; we could test more cue directions.",
        credit: 0.6,
      },
      {
        text: "People seem faster on the side the arrow points to.",
        credit: 0.3,
      },
      {
        text: "Attention is invisible, so we can't say what the arrow does inside the head.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'attention shifted in advance' lead from the rival 'people simply guess the cued side and respond before checking,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: use catch trials where no target appears and require people to confirm a target was really there — my lead predicts they stay accurate (not just fast) on valid trials and rarely false-alarm, because attention improves processing rather than triggering blind guesses. It is refuted if the 'speed-up' is really just premature button-presses, showing up as many false alarms on empty trials instead of better detection.",
      yieldAnchors: [
        "Targets at the cued side are detected faster",
        "Targets on the opposite side are detected slower",
        "The arrow gives no guarantee yet still shifts performance",
      ],
      riskAnchors: [
        "Very short cue-to-target gaps give no benefit",
        "The benefit peaks then fades over time",
        "The invalid-cue cost grows with the distance attention must travel back",
      ],
      defeatedBy: [
        "People false-alarm on empty trials just as fast",
        "The cued side speeds responses even with eyes closed",
      ],
    },
    correctAnswer:
      "An internal 'spotlight' of attention is likely shifted toward the cued location before the target arrives, speeding processing there and costing time when it must be redirected; test whether very short cue-to-target gaps give no benefit, whether the benefit peaks then fades over time, and whether an invalid cue's cost grows with how far attention must travel back.",
    explanation:
      "Full credit names a pre-target attention shift with three checks and a false-alarm test that states its own refutation; 'attention is invisible, we can't say' is the empty refusal.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A researcher times three tasks: just respond to any light; respond only if it is green; and press left for green, right for red. Each added requirement adds its own slice of time. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Harder versions of the task take longer.",
        credit: 0.3,
      },
      {
        text: "What the mind does between light and button is hidden, so the timing means nothing.",
        credit: 0,
      },
      {
        text: "The total response time can likely be broken into separable stages — detecting, deciding which light, and choosing which hand — because each added demand inserts its own measurable slice; test whether removing the decision step subtracts roughly that slice, whether the stage times stay stable across people, and whether a manipulation aimed at one stage leaves the others' times unchanged.",
        credit: 1.0,
      },
      {
        text: "Each added step probably adds time; we could time more task versions.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'separable additive stages' lead from the rival 'the whole task just gets uniformly harder,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: introduce a manipulation that should touch only the deciding-which-light stage (say, making the two colors hard to tell apart) and check that it lengthens only that slice while leaving the detect and respond slices unchanged — clean, stage-specific effects are the signature of separable stages. My lead is refuted if every manipulation smears across all the slices at once, which would fit one uniformly harder process rather than discrete stages.",
      yieldAnchors: [
        "Simple detection is fastest",
        "Adding a decision adds a slice of time",
        "Adding a choice of hand adds another slice",
      ],
      riskAnchors: [
        "Removing the decision step subtracts roughly its slice",
        "Stage times stay stable across people",
        "A manipulation aimed at one stage leaves the others unchanged",
      ],
      defeatedBy: [
        "Every manipulation slows all parts of the task equally",
        "Nothing about hidden stages can be read from timing",
      ],
    },
    correctAnswer:
      "The total response time can likely be broken into separable stages — detecting, deciding which light, and choosing which hand — because each added demand inserts its own measurable slice; test whether removing the decision step subtracts roughly that slice, whether the stage times stay stable across people, and whether a manipulation aimed at one stage leaves the others' times unchanged.",
    explanation:
      "Top credit reads additive slices as separable stages with three checks and a stage-specific test that names its refutation; 'the timing means nothing' is the dodge the orderly additive slices defeat.",
  },
  {
    itemType: "hybrid",
    prompt:
      "After reading 'doctor,' people recognize 'nurse' faster than 'butter,' and recognize 'hospital' somewhat faster too, with the boost shrinking for more distantly related words. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Related words probably help each other; we could test more word pairs.",
        credit: 0.6,
      },
      {
        text: "Word associations are too personal to support any general claim.",
        credit: 0,
      },
      {
        text: "People seem quicker on related words.",
        credit: 0.3,
      },
      {
        text: "Concepts are likely stored in a network where activating one spreads activation to its neighbors, pre-readying related words by an amount that falls with conceptual distance; test whether the boost decreases smoothly with how related the words are rated, whether an unrelated word in between weakens the link, and whether a longer gap before the second word lets the activation fade.",
        credit: 1.0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'spreading activation in a network' lead from the rival 'people consciously predict and prepare for the next word,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: shorten the gap between the two words to a fraction of a second, too fast for any conscious prediction — my lead predicts the related-word boost still appears because spreading activation is automatic and quick. It is refuted if the boost only shows up at long, leisurely gaps where people have time to deliberately guess, which would point to conscious strategy rather than an automatic network.",
      yieldAnchors: [
        "'Nurse' is recognized faster after 'doctor' than 'butter'",
        "Related but distant words get a smaller boost",
        "The boost shrinks with conceptual distance",
      ],
      riskAnchors: [
        "The boost falls smoothly with rated relatedness",
        "An unrelated word in between weakens the link",
        "A longer gap lets the activation fade",
      ],
      defeatedBy: [
        "Only words people consciously expect get any boost",
        "Relatedness has no effect on recognition speed",
      ],
    },
    correctAnswer:
      "Concepts are likely stored in a network where activating one spreads activation to its neighbors, pre-readying related words by an amount that falls with conceptual distance; test whether the boost decreases smoothly with how related the words are rated, whether an unrelated word in between weakens the link, and whether a longer gap before the second word lets the activation fade.",
    explanation:
      "Full credit names a spreading-activation network with three checks and a too-fast-to-guess test that states its refutation; 'too personal to support any claim' is the dodge the graded, reliable priming defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "Asked to respond to digits by whether they are odd or even, people are slow at first, but after hundreds of trials they respond almost as fast as for simple detection and report not 'thinking' about it. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Practice seems to speed up the parity task.",
        credit: 0.3,
      },
      {
        text: "Heavy practice likely compresses a multi-step computation — read digit, judge odd/even, choose a response — into a fast automatic lookup, shrinking the decision stage toward zero; test whether a never-practiced digit-to-response mapping is slow again, whether a sudden rule reversal restores the slow times, and whether the automatic response intrudes when people are told to withhold it.",
        credit: 1.0,
      },
      {
        text: "Skill differences are too individual to conclude anything.",
        credit: 0,
      },
      {
        text: "Practice probably makes the judgment easier; we could test more practice amounts.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'computation compressed into an automatic lookup' lead from the rival 'people just generally get faster at everything,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: after training, suddenly swap the rule (now press the other key for odd) and check whether response time jumps back to slow — if a learned mapping was driving the speed, breaking it should cost dearly, which a general speed-up would not. My lead is refuted if reversing the rule barely slows people, showing the gain was just overall quickening rather than a stored stimulus-response shortcut.",
      yieldAnchors: [
        "The parity task is slow at first",
        "After much practice it is nearly as fast as simple detection",
        "People report not consciously thinking about it",
      ],
      riskAnchors: [
        "A never-practiced mapping is slow again",
        "A sudden rule reversal restores the slow times",
        "The automatic response intrudes when people must withhold it",
      ],
      defeatedBy: [
        "Reversing the learned rule costs no extra time",
        "People speed up equally on every unrelated task",
      ],
    },
    correctAnswer:
      "Heavy practice likely compresses a multi-step computation — read digit, judge odd/even, choose a response — into a fast automatic lookup, shrinking the decision stage toward zero; test whether a never-practiced digit-to-response mapping is slow again, whether a sudden rule reversal restores the slow times, and whether the automatic response intrudes when people are told to withhold it.",
    explanation:
      "Top credit names a multi-step computation compressed into automatic lookup with three checks and a rule-reversal test that names its refutation; 'too individual to conclude anything' is the empty refusal.",
  },
  {
    itemType: "hybrid",
    prompt:
      "Asked which is bigger in real life, a pair like 'a horse vs a cat,' people answer faster the larger the real size difference — even though the words themselves give no size cue. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Size is subjective, so these judgments can't reveal anything.",
        credit: 0,
      },
      {
        text: "Bigger differences probably make the choice easier; we could test more animal pairs.",
        credit: 0.6,
      },
      {
        text: "People likely convert the words into an internal magnitude representation and compare those magnitudes, so a larger real-size gap is easier to resolve; test whether the effect tracks actual physical sizes rather than word length or familiarity, whether it appears for other dimensions like loudness or price, and whether very close real sizes produce errors and slow responses.",
        credit: 1.0,
      },
      {
        text: "People seem faster when sizes are very different.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'words converted into internal magnitudes' lead from the rival 'people just instantly know the answer for very different pairs,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: hold familiarity and word length constant and vary only the real-size gap in small steps — my lead predicts a smooth, continuous speed-up as the gap widens, the signature of comparing positions on an internal scale, not a sudden 'obvious vs not' split. It is refuted if response time is flat across all gaps or jumps in one step, which would fit instant lookup rather than graded magnitude comparison.",
      yieldAnchors: [
        "People judge real-world size from words alone",
        "Bigger real-size gaps give faster answers",
        "The words give no direct size cue",
      ],
      riskAnchors: [
        "The effect tracks actual physical size, not word length or familiarity",
        "It appears for other dimensions like loudness or price",
        "Very close real sizes produce errors and slow responses",
      ],
      defeatedBy: [
        "Response time is flat no matter the size gap",
        "Word length, not real size, drives the speed",
      ],
    },
    correctAnswer:
      "People likely convert the words into an internal magnitude representation and compare those magnitudes, so a larger real-size gap is easier to resolve; test whether the effect tracks actual physical sizes rather than word length or familiarity, whether it appears for other dimensions like loudness or price, and whether very close real sizes produce errors and slow responses.",
    explanation:
      "Full credit posits a word-to-magnitude conversion with three checks and a graded-gap test that names its refutation; 'size is subjective, can't reveal anything' is the dodge the orderly distance effect defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "People recall short lists of words worse when the words sound alike (man, mad, cap, cat) than when they look or mean alike, and recalling long words is harder than short ones. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Short-term verbal memory likely holds items in a sound-based form refreshed by inner speech, so similar sounds blur together and longer words crowd the rehearsal loop; test whether silently mouthing an irrelevant word like 'the, the, the' wipes out both effects, whether the word-length cost tracks how long words take to say rather than letter count, and whether meaning-based similarity barely hurts immediate recall.",
        credit: 1.0,
      },
      {
        text: "Sound-alike words probably get confused; we could test more word lists.",
        credit: 0.6,
      },
      {
        text: "Memory is too variable to say what form words are stored in.",
        credit: 0,
      },
      {
        text: "Similar-sounding words seem harder to remember.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'sound-based rehearsal loop' lead from the rival 'similar words are just generally confusing,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: have people repeat an irrelevant sound aloud ('the, the, the') while studying the list, which blocks inner speech — my lead predicts the sound-similarity and word-length effects should both vanish because the rehearsal loop is occupied. It is refuted if blocking inner speech leaves those effects intact, which would mean the confusion is not tied to a sound-based rehearsal system at all.",
      yieldAnchors: [
        "Sound-alike lists are recalled worse than look- or meaning-alike lists",
        "Long words are recalled worse than short words",
        "Meaning similarity barely hurts immediate recall",
      ],
      riskAnchors: [
        "Mouthing an irrelevant word wipes out both effects",
        "The word-length cost tracks speaking time, not letter count",
        "Meaning-based similarity barely hurts immediate recall",
      ],
      defeatedBy: [
        "Blocking inner speech leaves the effects unchanged",
        "Meaning-alike lists are just as hard as sound-alike lists",
      ],
    },
    correctAnswer:
      "Short-term verbal memory likely holds items in a sound-based form refreshed by inner speech, so similar sounds blur together and longer words crowd the rehearsal loop; test whether silently mouthing an irrelevant word like 'the, the, the' wipes out both effects, whether the word-length cost tracks how long words take to say rather than letter count, and whether meaning-based similarity barely hurts immediate recall.",
    explanation:
      "Top credit names a sound-based rehearsal loop with three checks and an inner-speech-blocking test that names its refutation; 'too variable to say what form' is the dodge the specific sound-similarity pattern defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "Fast typists who hit a wrong key often strike the intended key's neighbor and immediately slow the next stroke, while their eyes are already several letters ahead in the text. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Typists seem to read ahead and sometimes mis-hit.",
        credit: 0.3,
      },
      {
        text: "Typing is too fast and skilled to analyze its steps.",
        credit: 0,
      },
      {
        text: "Typists probably plan ahead; we could record more keystrokes.",
        credit: 0.6,
      },
      {
        text: "Typing likely separates a planning stage that reads and queues upcoming letters from a motor stage that executes them, with an internal monitor that catches errors and slows the next move; test whether covering already-typed text barely hurts speed while blocking the preview ahead does, whether forced fast typing produces more neighbor-key slips, and whether the post-error slowing appears even when typists don't consciously notice the mistake.",
        credit: 1.0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'separate plan-ahead and execute stages with a monitor' lead from the rival 'typists just react letter-by-letter to what they currently see,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: cover the upcoming text so only the current letter is visible — my lead predicts speed should collapse because the planning stage relies on a queue read several letters ahead, whereas a pure react-to-current-letter account predicts little change. It is refuted if hiding the preview leaves fast typing untouched, which would mean no advance planning stage is feeding the fingers.",
      yieldAnchors: [
        "Errors are usually the intended key's neighbor",
        "The stroke right after an error slows down",
        "The eyes are already several letters ahead",
      ],
      riskAnchors: [
        "Covering already-typed text barely hurts speed",
        "Blocking the preview ahead sharply slows typing",
        "Post-error slowing appears even without conscious awareness of the slip",
      ],
      defeatedBy: [
        "Hiding the upcoming text leaves fast typing unaffected",
        "Typists only ever process the single current letter",
      ],
    },
    correctAnswer:
      "Typing likely separates a planning stage that reads and queues upcoming letters from a motor stage that executes them, with an internal monitor that catches errors and slows the next move; test whether covering already-typed text barely hurts speed while blocking the preview ahead does, whether forced fast typing produces more neighbor-key slips, and whether the post-error slowing appears even when typists don't consciously notice the mistake.",
    explanation:
      "Full credit splits planning from execution plus a monitor, with three checks and a hide-the-preview test that names its refutation; 'too fast and skilled to analyze' is the empty refusal.",
  },
  {
    itemType: "hybrid",
    prompt:
      "When two signals come close together and each needs its own quick response, the response to the second is delayed — and the delay grows the closer the two signals are. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Two quick tasks probably interfere; we could vary the gap more.",
        credit: 0.6,
      },
      {
        text: "A central decision stage likely handles one response at a time, so the second must wait for the first to clear the bottleneck — explaining why a shorter gap means a longer wait; test whether the second response's delay equals the leftover processing time of the first, whether making only the first task harder lengthens the second's delay, and whether two pure reflexes that skip the decision stage show no queuing.",
        credit: 1.0,
      },
      {
        text: "Doing two things at once seems to slow the second one.",
        credit: 0.3,
      },
      {
        text: "Multitasking depends on the person, so no general rule can be drawn.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'single central bottleneck that queues responses' lead from the rival 'people are just distracted by the second signal,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: make only the first task's decision harder and check whether the second response is delayed by exactly that added time — a bottleneck predicts the second waits in line behind the lengthened first, so its delay should grow by the same amount. My lead is refuted if making the first task harder leaves the second response's timing unchanged, which would mean the two aren't queued through one shared stage.",
      yieldAnchors: [
        "The second response is delayed when signals are close",
        "The delay grows as the gap shrinks",
        "Each task alone is quick",
      ],
      riskAnchors: [
        "The second's delay equals the first's leftover processing time",
        "Making only the first task harder lengthens the second's delay",
        "Two reflexes that skip the decision stage show no queuing",
      ],
      defeatedBy: [
        "Lengthening the first task does not delay the second",
        "The second response is just as fast at any gap",
      ],
    },
    correctAnswer:
      "A central decision stage likely handles one response at a time, so the second must wait for the first to clear the bottleneck — explaining why a shorter gap means a longer wait; test whether the second response's delay equals the leftover processing time of the first, whether making only the first task harder lengthens the second's delay, and whether two pure reflexes that skip the decision stage show no queuing.",
    explanation:
      "Top credit names a single-channel bottleneck that queues responses with three checks and a lengthen-the-first test that names its refutation; 'depends on the person' is the dodge the orderly gap-dependent delay defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "Given a candle, a box of tacks, and matches, people struggle to mount the candle on the wall — until they suddenly see the empty tack box as a shelf, then solve it at once. Showing the box empty beforehand makes them solve it far faster. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Problem solving is too mysterious to study with such puzzles.",
        credit: 0,
      },
      {
        text: "People seem to get stuck on how they see the box.",
        credit: 0.3,
      },
      {
        text: "Solving likely requires re-representing an object's function — seeing the box as a platform, not just a container — so a fixed mental representation blocks the answer until it is revised; test whether presenting the box and tacks separately speeds solving, whether first stressing the box's 'container' use slows it further, and whether the same fixation appears for other tools labeled by a usual function.",
        credit: 1.0,
      },
      {
        text: "How the box is shown probably affects solving; we could test more setups.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'stuck mental representation of function' lead from the rival 'people simply haven't had enough time to try all the options,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: hold solving time constant but present the tacks already dumped out of the box, so its 'container' role is broken — my lead predicts much faster solutions even with no extra time, because the block is how the box is represented, not how long people work. It is refuted if emptying the box first makes no difference and only extra minutes help, which would point to slow search rather than a fixed representation.",
      yieldAnchors: [
        "People fail while the box is seen as a container",
        "They solve at once after re-seeing it as a shelf",
        "Showing the box empty beforehand speeds solving",
      ],
      riskAnchors: [
        "Presenting box and tacks separately speeds solving",
        "Stressing the box's container use slows it further",
        "The same fixation appears for other function-labeled tools",
      ],
      defeatedBy: [
        "Emptying the box first makes no difference",
        "Only more time, not how the box is shown, helps",
      ],
    },
    correctAnswer:
      "Solving likely requires re-representing an object's function — seeing the box as a platform, not just a container — so a fixed mental representation blocks the answer until it is revised; test whether presenting the box and tacks separately speeds solving, whether first stressing the box's 'container' use slows it further, and whether the same fixation appears for other tools labeled by a usual function.",
    explanation:
      "Full credit names a fixed functional representation that must be revised, with three checks and an empty-the-box test that names its refutation; 'too mysterious to study' is the dodge the reliable framing effect defeats.",
  },
];

const written: HomeworkItem[] = [
  {
    itemType: "written",
    prompt:
      "When people read, their eyes don't glide smoothly; they jump and pause, lingering on rare or surprising words, jumping back to reread a confusing phrase, and skipping short predictable words like 'the.' In one paragraph, propose the strongest conclusion about how the mind processes language as it reads, and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that reading is an active, moment-by-moment information-processing cycle in which the mind allocates processing time to each word according to its difficulty and uses ongoing comprehension to decide where and how long to look — so the eyes are a live readout of mental load, not a fixed scanning rhythm. This is a strong claim because it predicts checkable consequences: fixation time should rise as a word gets rarer and fall when prior context makes it predictable; a breakdown in comprehension should trigger backward jumps that land on the exact problem word rather than random spots; and changing only the upcoming word's predictability should change how often it is skipped. I would test it by timing fixations against word frequency and contextual predictability, by planting garden-path sentences and tracking where regressions land, and by manipulating context to shift skipping rates while holding the words themselves constant.",
      yieldAnchors: [
        "Eyes pause longer on rare or surprising words",
        "Eyes skip short, predictable words",
        "Eyes jump back to reread confusing phrases",
      ],
      riskAnchors: [
        "Fixation time rises with rarity and falls with predictability",
        "Regressions land on the specific problem word",
        "Changing context predictability changes skipping rates",
      ],
      defeatedBy: [
        "Eyes move at a fixed rhythm regardless of content",
        "Nothing about processing can be read from eye movements",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that reading is an active, moment-by-moment information-processing cycle in which the mind allocates processing time to each word according to its difficulty and uses ongoing comprehension to decide where and how long to look — so the eyes are a live readout of mental load, not a fixed scanning rhythm. This is a strong claim because it predicts checkable consequences: fixation time should rise as a word gets rarer and fall when prior context makes it predictable; a breakdown in comprehension should trigger backward jumps that land on the exact problem word rather than random spots; and changing only the upcoming word's predictability should change how often it is skipped. I would test it by timing fixations against word frequency and contextual predictability, by planting garden-path sentences and tracking where regressions land, and by manipulating context to shift skipping rates while holding the words themselves constant.",
    explanation:
      "Under the inverted standard, 'nothing can be read from eye movements' earns near-zero; top credit goes to the load-allocation conclusion that commits to specific links and names a regression-landing test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A four-year-old who has never heard a particular sentence still produces and understands brand-new ones instantly and correctly, like 'The purple dog is dancing on my sandwich.' In one paragraph, propose the strongest conclusion about the mind as an information processor and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that the mind does not store and replay learned stimulus-response pairs but applies internal rules — a grammar — to combine stored representations (words) into endless new sentences, a productivity that simple association between heard inputs and outputs cannot explain. This is a strong claim because it predicts checkable consequences: the child should correctly interpret novel sentences that obey the rules yet reject ones that violate them; her mistakes should be systematic overgeneralizations ('goed,' 'foots') rather than random noise; and she should handle made-up words slotted into known structures, treating 'the wug is glorping' grammatically. I would test it by presenting never-heard grammatical and ungrammatical sentences and checking comprehension, by cataloging whether her errors follow rules, and by inserting nonsense words into familiar frames to see if she applies the grammar.",
      yieldAnchors: [
        "The child produces sentences she has never heard",
        "She understands brand-new sentences instantly",
        "She does so correctly, not by chance",
      ],
      riskAnchors: [
        "She accepts rule-following novel sentences and rejects rule-violating ones",
        "Her errors are systematic overgeneralizations",
        "She applies the grammar to made-up words in known structures",
      ],
      defeatedBy: [
        "Language is just memorized stimulus-response pairs",
        "Children only repeat sentences they have already heard",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that the mind does not store and replay learned stimulus-response pairs but applies internal rules — a grammar — to combine stored representations (words) into endless new sentences, a productivity that simple association between heard inputs and outputs cannot explain. This is a strong claim because it predicts checkable consequences: the child should correctly interpret novel sentences that obey the rules yet reject ones that violate them; her mistakes should be systematic overgeneralizations ('goed,' 'foots') rather than random noise; and she should handle made-up words slotted into known structures, treating 'the wug is glorping' grammatically. I would test it by presenting never-heard grammatical and ungrammatical sentences and checking comprehension, by cataloging whether her errors follow rules, and by inserting nonsense words into familiar frames to see if she applies the grammar.",
    explanation:
      "The cautious 'children only repeat what they've heard' is the overreach the never-heard sentences defeat; top credit goes to the rule-based, representational conclusion that names a made-up-word test which could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A researcher wants to know whether 'recognizing a face' and 'naming that person' are one step or two. She finds people can say 'I know this face' faster than they can produce the name, and sometimes get stuck knowing the face but not the name. In one paragraph, propose the strongest conclusion about the stages of this process and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that recognizing a person runs through separable sequential stages — first matching the face as familiar and accessing identity information, then retrieving the name as a later, distinct step that can fail on its own — because the name lags the sense of familiarity and can be blocked while recognition succeeds. This is a strong claim because it predicts checkable consequences: people should access a person's occupation or where they know them before the name, never the name first; name retrieval should fail more often than familiarity or biographical recall; and priming the name's sound should unblock it without changing how the face is recognized. I would test it by timing familiarity, biographical, and name judgments on the same faces, by logging exactly which information is available during 'blocked' states, and by giving sound cues to see whether names resolve while recognition stays constant.",
      yieldAnchors: [
        "'I know this face' comes faster than the name",
        "People get stuck knowing the face but not the name",
        "Recognition and naming don't fail together",
      ],
      riskAnchors: [
        "Biographical information is accessed before the name",
        "Name retrieval fails more often than familiarity",
        "Priming the name's sound unblocks it without changing recognition",
      ],
      defeatedBy: [
        "Recognizing and naming are a single inseparable act",
        "Knowing a face always means instantly knowing the name",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that recognizing a person runs through separable sequential stages — first matching the face as familiar and accessing identity information, then retrieving the name as a later, distinct step that can fail on its own — because the name lags the sense of familiarity and can be blocked while recognition succeeds. This is a strong claim because it predicts checkable consequences: people should access a person's occupation or where they know them before the name, never the name first; name retrieval should fail more often than familiarity or biographical recall; and priming the name's sound should unblock it without changing how the face is recognized. I would test it by timing familiarity, biographical, and name judgments on the same faces, by logging exactly which information is available during 'blocked' states, and by giving sound cues to see whether names resolve while recognition stays constant.",
    explanation:
      "'Recognizing and naming are one inseparable act' is the overreach the name-blocked states defeat; top credit goes to the staged conclusion that commits to an order and names a sound-cue test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "Wearing headphones, people repeat aloud a message in one ear and ignore the other. They notice almost nothing of the ignored message's content — yet they reliably notice if their own name is spoken in it. In one paragraph, propose the strongest conclusion about how the mind filters incoming information and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that the mind has a limited-capacity processing channel and uses an early filter to select one input stream by simple physical features like which ear or which voice, but the filter is leaky — highly important or well-learned signals such as one's own name break through, which means the ignored stream is processed for meaning at least partly before selection. This is a strong claim because it predicts checkable consequences: people should report physical features of the ignored ear (its pitch or whether the speaker is male or female) but not its words; the more meaningful or expected an intruding word is, the more likely it breaks through; and making the attended task harder should reduce how often anything from the ignored ear gets noticed. I would test it by quizzing listeners on physical versus semantic features of the ignored channel, by planting words of varying importance there, and by varying the attended task's difficulty while measuring breakthroughs.",
      yieldAnchors: [
        "People accurately repeat the attended message",
        "They miss the ignored message's content",
        "They still catch their own name in the ignored ear",
      ],
      riskAnchors: [
        "Physical features of the ignored ear are noticed but not its words",
        "More meaningful intrusions break through more often",
        "A harder attended task reduces breakthroughs",
      ],
      defeatedBy: [
        "The ignored ear is completely unprocessed",
        "Attention is unlimited and processes every stream equally",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that the mind has a limited-capacity processing channel and uses an early filter to select one input stream by simple physical features like which ear or which voice, but the filter is leaky — highly important or well-learned signals such as one's own name break through, which means the ignored stream is processed for meaning at least partly before selection. This is a strong claim because it predicts checkable consequences: people should report physical features of the ignored ear (its pitch or whether the speaker is male or female) but not its words; the more meaningful or expected an intruding word is, the more likely it breaks through; and making the attended task harder should reduce how often anything from the ignored ear gets noticed. I would test it by quizzing listeners on physical versus semantic features of the ignored channel, by planting words of varying importance there, and by varying the attended task's difficulty while measuring breakthroughs.",
    explanation:
      "'The ignored ear is completely unprocessed' is the overreach the name-breakthrough defeats; top credit goes to the limited-channel, leaky-filter conclusion that names a task-difficulty test which could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "Researchers build a computer program that mimics how people solve a logic puzzle. The program makes the same kinds of mistakes people do, slows down on exactly the steps people find hard, and improves with 'practice' the way people do. In one paragraph, propose the strongest conclusion about the mind as an information processor and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that the puzzle-solving mind can be described as carrying out a specific sequence of information-processing steps — the very procedure the program runs — because matching not just the answers but the timing, the errors, and the learning curve is strong evidence the program captures the actual process, not merely the outcome. This is a strong claim because it predicts checkable consequences: the program should forecast, in advance, which new puzzles people will find hard and which specific errors they'll make; a hint that helps the program should help people in the same way; and any step the program lacks should correspond to a step people don't perform. I would test it by having the program predict difficulty and error patterns on fresh puzzles before collecting human data, by giving people and the program the same hints and comparing the gains, and by removing a step from the program to see whether people show the matching gap.",
      yieldAnchors: [
        "The program makes the same kinds of errors as people",
        "It slows on the same hard steps",
        "It improves with practice the way people do",
      ],
      riskAnchors: [
        "The program predicts which new puzzles people find hard",
        "A shared hint helps both the same way",
        "A missing step in the program matches a missing step in people",
      ],
      defeatedBy: [
        "Matching the answers alone proves the mind works like the program",
        "A computer model can tell us nothing about real minds",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that the puzzle-solving mind can be described as carrying out a specific sequence of information-processing steps — the very procedure the program runs — because matching not just the answers but the timing, the errors, and the learning curve is strong evidence the program captures the actual process, not merely the outcome. This is a strong claim because it predicts checkable consequences: the program should forecast, in advance, which new puzzles people will find hard and which specific errors they'll make; a hint that helps the program should help people in the same way; and any step the program lacks should correspond to a step people don't perform. I would test it by having the program predict difficulty and error patterns on fresh puzzles before collecting human data, by giving people and the program the same hints and comparing the gains, and by removing a step from the program to see whether people show the matching gap.",
    explanation:
      "'A computer model tells us nothing about real minds' is the dodge the matched timing, errors, and learning defeat; top credit goes to the process-level conclusion that commits to advance predictions and names a remove-a-step test that could refute it.",
  },
];

export const section: SectionContent = {
  slug: "mind-as-information",
  title: "The Big Idea: Mind as Information Processing",
  weekNumber: 1,
  blurb:
    "The core idea of cognitive science: the mind takes in information, transforms it through hidden internal stages working on mental representations, and produces behavior — a process we can clock, model, and test.",
  lectureTitle:
    "1.2 The Big Idea: Mind as Information Processing — input, representation, and the hidden stages between",
  body: `# The Big Idea: Mind as Information Processing

For decades, scientists who wanted to be rigorous about the mind decided to study only what they could see: a stimulus going in, a behavior coming out. Anything in between — thoughts, plans, images, beliefs — was dismissed as unscientific guesswork. This view, **behaviorism**, treated the mind as a black box best left unopened. Then, in the middle of the twentieth century, a new idea swept in and changed everything: maybe the inside of the box isn't off-limits. Maybe the mind is an **information processor**, and we can figure out, step by step, what it does to information on the way from input to output.

## From the black box to the stages inside

The shift is called the **cognitive revolution**, and its central bet is simple but powerful: between a stimulus and a response, the mind performs real, describable operations. A behaviorist watching someone read 'the cat was chased by the dog' and 'the dog chased the cat' the same way would only note two stimuli and two equal responses. A cognitive scientist asks the deeper question — *why* are they treated alike? — and answers that the mind builds an internal representation of **meaning** that both sentences share. The behavior is the clue; the processing inside is the explanation.

## Input, processing, output

The information-processing view borrows its skeleton from how a computer works. Information comes **in** through the senses, gets **processed** through a series of internal operations, and a behavior comes **out**. The power of this framing is that it forces specific questions: What form does the information take at each step? How many steps are there? Which step is the bottleneck? When a man can understand speech perfectly and move his mouth normally yet cannot turn thoughts into spoken words, the input and output are fine — so the damage must sit in a **processing stage** between them. Splitting the mind into input, processing, and output lets us locate exactly where something happens.

## The mind runs on representations

The most important idea in this whole picture is the **representation**: an internal stand-in for something in the world. A mental map of a maze, the meaning of a sentence, a number's size on an inner 'number line,' the sound of a word you're rehearsing — all are representations the mind builds, stores, and operates on. Representations explain why a rat that explored a maze without reward later runs straight to food (it built a map), and why people judge '5 versus 6' more slowly than '2 versus 9' (closer positions on the inner number line are harder to tell apart). The mind doesn't store the world; it stores **information about** the world, and then computes with it.

## Reading the hidden stages from the clock

If processing takes real steps, each step takes real **time** — and time is something we can measure to the millisecond. This is the trick of **mental chronometry**. Add a decision to a task ('press only for the green light') and the response slows by a steady, measurable slice — that slice is the decision stage made visible. When two difficulties (a blurry picture and a rare name) add their delays together independently, that additivity is a fingerprint of **separate sequential stages**. The clock turns invisible mental operations into numbers, letting us count stages, measure them, and test whether a proposed step really exists.

## Why the computer is such a useful model

Calling the mind an information processor isn't just a metaphor; it's a research tool. If you think the mind runs a particular procedure, you can write that procedure as a **computer program** and check whether it behaves like a person — not just getting the same answers, but making the same errors, slowing on the same hard steps, and improving with practice the same way. When a model matches people on all of that, it's strong evidence the model captures the actual process. The computer doesn't prove the mind *is* a computer; it gives us a precise, testable way to spell out exactly what the mind might be doing.

## In the real world

Think about forgetting a stranger's name two seconds after being introduced. The dodge is 'I just have a bad memory' — true-sounding, but it predicts nothing. The information-processing move commits to a mechanism: the name was held briefly in a fragile, sound-based store and never got transferred into longer-term memory because attention was elsewhere during the handshake. Look how much that opens up. It predicts you'll do better if you repeat the name aloud (refreshing the sound store), that a distracting noise right after the introduction will wipe it out, and that you'll forget *names* far more than *faces*, which have richer cues. Three cheap, refutable tests — that is what treating the mind as an information processor buys you: not a shrug, but a testable account of the machinery between input and output.`,
  homework: {
    mcq,
    hybrid,
    written,
  },
};
