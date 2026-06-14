// ---------------------------------------------------------------------------
// Original content for the embedded diagnostic reasoning assessments.
//
// Two subject-relevant kinds, each administered at four phases (before the
// course, one-third through, two-thirds through, and after) with freshly
// generated items per attempt:
//   - "subject" (AI Knowledge): scenario questions that check understanding of
//     how AI actually works, across the course's eight topics. No math/coding.
//   - "reasoning" (General Reasoning): scenario questions that measure how a
//     student reasons through a problem (analysis, inference, evaluation,
//     deduction, induction) rather than what they have memorized.
//
// Every item is MCQ or short open-response.
// All items are ORIGINAL. For every MCQ the correct option is written FIRST;
// at seed/generation time options are rotated so the correct answer lands at a
// varied index (see seedDiagnostics.ts / reasoning.ts).
//
// Diagnostics are PRACTICE ONLY — they never affect a student's grade, can be
// retaken any number of times, and never repeat the same questions.
// ---------------------------------------------------------------------------

export type SkillArea =
  | "analysis"
  | "inference"
  | "evaluation"
  | "deduction"
  | "induction";

export type McqItem = {
  prompt: string;
  // Correct option is listed FIRST. Rotated at seed/generation time.
  options: string[];
  // Only "reasoning" items carry a skill area; "subject" items omit it.
  skillArea?: SkillArea;
};

export type OpenItem = {
  prompt: string;
  // The core idea(s) a good 1-2 sentence answer should capture. Used both as
  // the lenient grading key and shown to the student in review.
  keyPoints: string[];
  skillArea?: SkillArea;
};

export type Phase = "before" | "third1" | "third2" | "after";

export type Instrument = "subject" | "reasoning";

export type DiagnosticSeed = {
  instrument: Instrument;
  phase: Phase;
  title: string;
  subtitle: string;
  instructions: string;
  // Seeded template items (the structural blueprint + static fallback). Every
  // attempt generates fresh items of the same kind; the template is only used
  // for the assessment preview and as the generation/fallback blueprint.
  mcqs: McqItem[];
};

const SUBJECT_INSTRUCTIONS =
  "Answer each question by choosing the best option (or, for written questions, typing a short 1-2 sentence answer). These questions check how well you understand the way AI actually works — there's no math or coding. This is practice only: it never affects your grade, and you can retake it any time with fresh questions.";

const REASONING_INSTRUCTIONS =
  "Answer each question by choosing the best option (or, for written questions, typing a short 1-2 sentence answer). These questions measure how you reason through a problem, not what you've memorized. This is practice only: it never affects your grade, and you can retake it any time with fresh questions.";

// The eight course topics, used to spread generated "subject" questions across
// the curriculum.
export const AI_TOPICS: string[] = [
  "what AI is (and isn't)",
  "rule-based systems versus systems that learn",
  "data and training",
  "pattern recognition",
  "neural networks and deep learning",
  "language models (how chatbots predict words)",
  "AI strengths, limits, and hallucination",
  "using AI well, and where it's headed",
];

// ===========================================================================
// AI KNOWLEDGE ("subject") — original scenario MCQs (correct option FIRST)
// ===========================================================================

export const SUBJECT_MCQ_BANK: McqItem[] = [
  {
    prompt:
      "A weather app uses AI to predict whether it will rain tomorrow. Which best describes what the AI is actually doing?",
    options: [
      "Finding patterns in lots of past weather data to estimate what's most likely next.",
      "Looking up tomorrow's weather in a fixed table a person typed in.",
      "Truly understanding the sky the way a human meteorologist senses the weather.",
      "Guessing completely at random with no information.",
    ],
  },
  {
    prompt:
      "A friend says a chatbot's answer 'must be true because it sounds so confident.' What is the best response?",
    options: [
      "Confident wording doesn't mean it's correct — it predicts likely-sounding text, not verified truth.",
      "If it sounds confident, it definitely checked a trusted source first.",
      "Chatbots can't be wrong because they have read the whole internet.",
      "It must be right because computers never make mistakes.",
    ],
  },
  {
    prompt:
      "A spam filter that learns from the emails you mark as spam differs from one with a fixed list of banned words because the learning filter:",
    options: [
      "Improves by finding patterns in examples instead of only following rules a person wrote.",
      "Never makes a single mistake once it is turned on.",
      "Can only catch spam that exactly matches the banned words.",
      "Works without ever needing any examples at all.",
    ],
  },
  {
    prompt:
      "A face-recognition tool works worse on a group of people it rarely saw while being trained. The most likely reason is that:",
    options: [
      "It learned mostly from examples of other groups, so its patterns fit them better.",
      "Cameras physically cannot photograph some groups of people.",
      "The tool dislikes certain groups of people on purpose.",
      "Having more training data always makes a tool perform worse.",
    ],
  },
  {
    prompt:
      "A photo app sorts your pictures into 'cats' and 'dogs' even though no one wrote it rules for what a cat looks like. It most likely works by:",
    options: [
      "Recognizing patterns it picked up from many labeled example photos.",
      "Following a checklist of cat features a programmer typed in by hand.",
      "Asking a human to label every single new photo for it.",
      "Storing one perfect photo of a cat and matching it exactly.",
    ],
  },
  {
    prompt:
      "Saying a neural network has 'layers' mainly means that:",
    options: [
      "Information passes through stages that each build on simpler patterns to detect more complex ones.",
      "The program is stored across several different hard drives.",
      "It literally contains a tiny human brain inside it.",
      "It needs several days to answer any question.",
    ],
  },
  {
    prompt:
      "When a chatbot writes a sentence for you, it is mostly:",
    options: [
      "Predicting the next likely word based on patterns in the text it was trained on.",
      "Looking the whole sentence up in a giant dictionary of ready-made answers.",
      "Recalling a real memory of a conversation it personally had.",
      "Translating your question into a fixed database search.",
    ],
  },
  {
    prompt:
      "A chatbot gives you a confident citation for a study, but the study turns out not to exist. This is best described as:",
    options: [
      "A hallucination — it generated plausible-sounding text that isn't true.",
      "A computer virus that infected the chatbot.",
      "Clear proof that the chatbot was hacked by someone.",
      "A small typo that means the study is actually real.",
    ],
  },
  {
    prompt:
      "For which task should you most carefully double-check an AI's answer before acting on it?",
    options: [
      "A medical dosage question, where a wrong answer could genuinely harm someone.",
      "Suggesting a few fun names for a pet goldfish.",
      "Brainstorming topping ideas for a pizza.",
      "Picking a background color for a poster.",
    ],
  },
  {
    prompt:
      "What is the best way to get a genuinely useful answer from an AI assistant?",
    options: [
      "Give it clear context about what you want, then read and check the result.",
      "Ask as vaguely as possible so it has more freedom.",
      "Accept the very first answer without reading it.",
      "Assume it is always right and never verify anything.",
    ],
  },
  {
    prompt:
      "You used a chatbot to help draft a school essay. The honest way to use it is to:",
    options: [
      "Use it to help, then write and verify the work yourself rather than passing off AI text as entirely your own.",
      "Submit its draft unchanged and call it your own work.",
      "Hide that you used it and skip checking any of the facts.",
      "Let it invent impressive-sounding sources to fill the page.",
    ],
  },
  {
    prompt:
      "Which statement about today's AI is the most accurate overall?",
    options: [
      "It's a powerful tool for finding patterns, but it has no real understanding or judgment of its own.",
      "It thinks and feels in essentially the same way a person does.",
      "It is always correct and so never needs to be checked.",
      "It is useless for any real, practical task.",
    ],
  },
];

export const SUBJECT_OPEN_BANK: OpenItem[] = [
  {
    prompt:
      "A chatbot gives you a confident answer with a source, but you can't find that source anywhere. In one sentence, what is the safest thing to assume and do?",
    keyPoints: [
      "The source may be hallucinated / made up.",
      "Verify it against a trusted source before relying on it.",
    ],
  },
  {
    prompt:
      "In one sentence, explain why an AI trained mostly on photos of one kind of dog might struggle to recognize a breed it rarely saw.",
    keyPoints: [
      "It learns patterns from its training examples.",
      "With few examples of that breed, its learned patterns fit it poorly.",
    ],
  },
  {
    prompt:
      "A friend says 'the AI must be right because it sounds so sure.' In one sentence, what would you tell them?",
    keyPoints: [
      "Confidence is not the same as accuracy.",
      "It predicts likely-sounding text, not verified truth, so it can be confidently wrong.",
    ],
  },
  {
    prompt:
      "In one sentence, describe the difference between a spam filter that follows a fixed list of banned words and one that learns from examples.",
    keyPoints: [
      "The rule-based one only follows rules a person wrote.",
      "The learning one finds patterns in examples and can adapt or improve.",
    ],
  },
  {
    prompt:
      "You want a chatbot to help plan a birthday party. In one sentence, name one thing you can do to get a more useful answer.",
    keyPoints: [
      "Give clear context or details (budget, number of guests, theme, age).",
      "Specific prompts get more useful answers than vague ones.",
    ],
  },
  {
    prompt:
      "In one sentence, explain why you should check an AI's answer about medication more carefully than its answer about pizza toppings.",
    keyPoints: [
      "A wrong medical answer can cause real harm — it's high-stakes.",
      "The more a mistake would matter, the more you should verify it.",
    ],
  },
];

// ===========================================================================
// GENERAL REASONING ("reasoning") — original scenario MCQs (correct first),
// each tagged with the reasoning skill it measures.
// ===========================================================================

export const REASONING_MCQ_BANK: McqItem[] = [
  {
    prompt:
      "Consider: 'All students who studied passed the exam. Maria studied. So Maria passed.' Which unstated assumption does the argument rely on?",
    options: [
      "Maria is among the students the first statement describes.",
      "Studying is the only way to pass the exam.",
      "Maria always studies for her exams.",
      "The exam was unusually difficult.",
    ],
    skillArea: "analysis",
  },
  {
    prompt:
      "'Since the new policy cut accidents by 40%, and fewer accidents mean lower insurance costs, the city should keep the policy. After all, saving money benefits everyone.' What is the main conclusion?",
    options: [
      "The city should keep the policy.",
      "The new policy cut accidents by 40%.",
      "Fewer accidents mean lower insurance costs.",
      "Saving money benefits everyone.",
    ],
    skillArea: "analysis",
  },
  {
    prompt:
      "A survey finds 70% of people who exercise daily report good sleep, versus 30% of those who never exercise. Which conclusion is best supported?",
    options: [
      "People who exercise daily are more likely to report good sleep than those who never exercise.",
      "Exercise guarantees good sleep for everyone.",
      "Poor sleep is what causes people to stop exercising.",
      "Anyone who wants good sleep must exercise daily.",
    ],
    skillArea: "inference",
  },
  {
    prompt:
      "A report notes that ice-cream sales and drowning deaths rise in the same months. A careful reader should infer that:",
    options: [
      "Both may be linked to a third factor, such as hot weather.",
      "Eating ice cream causes drowning.",
      "Drowning incidents cause ice-cream sales.",
      "The data must simply be mistaken.",
    ],
    skillArea: "inference",
  },
  {
    prompt: "Which source would most strengthen the claim 'this medication is safe'?",
    options: [
      "A large, peer-reviewed clinical trial.",
      "A testimonial from one satisfied customer.",
      "An advertisement produced by the manufacturer.",
      "A popular wellness blog post.",
    ],
    skillArea: "evaluation",
  },
  {
    prompt:
      "'My grandfather smoked daily and lived to 95, so smoking isn't really harmful.' The main weakness of this argument is that it:",
    options: [
      "Relies on a single example against strong statistical evidence.",
      "Quotes an unreliable expert.",
      "Contains an internal contradiction.",
      "Appeals purely to emotion.",
    ],
    skillArea: "evaluation",
  },
  {
    prompt:
      "'All mammals are warm-blooded. All whales are mammals. Therefore all whales are warm-blooded.' This argument is:",
    options: [
      "Valid.",
      "Invalid, because whales live in water.",
      "Invalid, because it assumes what it proves.",
      "Invalid, because the premises are uncertain.",
    ],
    skillArea: "deduction",
  },
  {
    prompt:
      "'If it rained, the streets are wet. The streets are not wet.' What necessarily follows?",
    options: [
      "It did not rain.",
      "It rained.",
      "The streets are dry for some other reason.",
      "Nothing at all follows.",
    ],
    skillArea: "deduction",
  },
  {
    prompt:
      "A pollster surveys five of her friends and predicts how the whole country will vote. The strongest objection is that:",
    options: [
      "The sample is far too small and unrepresentative.",
      "Friends never tell the truth.",
      "Polls are always wrong.",
      "Voting is supposed to be private.",
    ],
    skillArea: "induction",
  },
  {
    prompt:
      "Plants given a new fertilizer grew taller than otherwise identical plants without it, all else held equal. The best-supported conclusion is:",
    options: [
      "The fertilizer probably caused the extra growth.",
      "Taller plants attract more fertilizer.",
      "Fertilizer is required for any plant growth at all.",
      "The result was pure coincidence.",
    ],
    skillArea: "induction",
  },
  {
    prompt: "'We should ban the chemical because it's unnatural.' This argument assumes that:",
    options: [
      "Natural things are always safe and unnatural things are harmful.",
      "The chemical is expensive to produce.",
      "Bans are easy to enforce.",
      "Most people dislike the chemical.",
    ],
    skillArea: "analysis",
  },
  {
    prompt:
      "'The bridge must be inspected, because cracks have appeared and ignoring cracks has caused collapses before.' Which is a premise supporting the conclusion?",
    options: [
      "Cracks have appeared on the bridge.",
      "The bridge must be inspected.",
      "The bridge is quite old.",
      "Inspections are expensive.",
    ],
    skillArea: "analysis",
  },
  {
    prompt:
      "A study finds students who eat breakfast score higher on morning tests than those who skip it. Which is best supported?",
    options: [
      "Eating breakfast is associated with higher morning test scores.",
      "Breakfast makes everyone a genius.",
      "Skipping breakfast should be banned.",
      "Tests should always be held in the afternoon.",
    ],
    skillArea: "inference",
  },
  {
    prompt: "'All items on the shelf are on sale. The blue mug is on the shelf.' Therefore:",
    options: [
      "The blue mug is on sale.",
      "The blue mug is expensive.",
      "Only mugs are on sale.",
      "The shelf is completely full.",
    ],
    skillArea: "inference",
  },
  {
    prompt: "To evaluate the claim 'crime is rising,' which is the most relevant evidence?",
    options: [
      "Official crime statistics gathered over several years.",
      "A friend's sense that things seem worse lately.",
      "A dramatic recent news headline.",
      "A popular movie about crime.",
    ],
    skillArea: "evaluation",
  },
  {
    prompt:
      "'You can't trust her argument for the policy — she's not even an economist.' This response is weak because it:",
    options: [
      "Attacks the person rather than the argument.",
      "Relies on too much data.",
      "Is far too detailed.",
      "Simply restates the policy.",
    ],
    skillArea: "evaluation",
  },
  {
    prompt:
      "'If a number is divisible by 4, it is even. Twelve is divisible by 4.' What necessarily follows?",
    options: [
      "Twelve is even.",
      "Twelve is odd.",
      "All even numbers are divisible by 4.",
      "Nothing follows.",
    ],
    skillArea: "deduction",
  },
  {
    prompt:
      "'If she practiced, she improved. She improved. Therefore she practiced.' This reasoning is:",
    options: [
      "Invalid, because she might have improved for another reason.",
      "Valid and certain.",
      "Invalid, because practice never helps.",
      "Valid only on weekends.",
    ],
    skillArea: "deduction",
  },
  {
    prompt:
      "After three rainy Mondays in a row, someone concludes 'it always rains on Mondays.' This generalization is:",
    options: [
      "Hasty — based on far too few cases.",
      "A valid logical deduction.",
      "Certainly true.",
      "Impossible to evaluate at all.",
    ],
    skillArea: "induction",
  },
  {
    prompt:
      "A new drug cured 95% of patients in a large, well-designed trial. The best-supported prediction is:",
    options: [
      "The drug will likely help most future patients with the condition.",
      "The drug will cure every disease.",
      "The drug works only inside trials.",
      "The drug is probably unsafe.",
    ],
    skillArea: "induction",
  },
];

// One short open question per reasoning skill area (graded leniently). Powers
// the "written"/"hybrid" formats and acts as a static fallback.
export const REASONING_OPEN_BANK: OpenItem[] = [
  {
    prompt:
      "In one sentence, name the assumption this argument depends on: 'Everyone who studied passed the test. Sam studied, so Sam passed.'",
    keyPoints: [
      "It assumes Sam is one of the people the first claim covers — i.e. that studying really did guarantee passing for him too.",
    ],
    skillArea: "analysis",
  },
  {
    prompt:
      "A survey finds that people who exercise daily report better sleep than people who never exercise. In one sentence, say what this lets you conclude — and what it does not.",
    keyPoints: [
      "It shows an association/correlation, not that exercise causes better sleep.",
      "Correlation is not causation.",
    ],
    skillArea: "inference",
  },
  {
    prompt:
      "In one sentence, explain why a single happy customer's testimonial is weak evidence that a product is safe for everyone.",
    keyPoints: [
      "One anecdote isn't representative of all users.",
      "A sample of one with no controlled comparison can't establish general safety.",
    ],
    skillArea: "evaluation",
  },
  {
    prompt:
      "'If it rained, the street is wet. The street is not wet.' In one sentence, what follows, and why?",
    keyPoints: [
      "It did not rain.",
      "By the contrapositive (modus tollens): if the consequence is false, the condition must be false.",
    ],
    skillArea: "deduction",
  },
  {
    prompt:
      "Someone sees three rainy Mondays in a row and concludes 'it always rains on Mondays.' In one sentence, what is wrong with that reasoning?",
    keyPoints: [
      "It's a hasty generalization.",
      "Three cases are far too few to support 'always'.",
    ],
    skillArea: "induction",
  },
];

// ===========================================================================
// SEED — two kinds × four phases (8 assessments)
// ===========================================================================

const PHASES: { phase: Phase; label: string }[] = [
  { phase: "before", label: "Before the course" },
  { phase: "third1", label: "One-third through" },
  { phase: "third2", label: "Two-thirds through" },
  { phase: "after", label: "After the course" },
];

export const DIAGNOSTIC_SEED: DiagnosticSeed[] = PHASES.flatMap((p) => [
  {
    instrument: "subject" as const,
    phase: p.phase,
    title: `AI Knowledge Check — ${p.label}`,
    subtitle: p.label,
    instructions: SUBJECT_INSTRUCTIONS,
    mcqs: SUBJECT_MCQ_BANK,
  },
  {
    instrument: "reasoning" as const,
    phase: p.phase,
    title: `General Reasoning Check — ${p.label}`,
    subtitle: p.label,
    instructions: REASONING_INSTRUCTIONS,
    mcqs: REASONING_MCQ_BANK,
  },
]);
