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
      "On a texting app, many users can't tell a new chatbot from a human during five-minute chats. The bot's replies are smooth and on-topic. Which conclusion best follows?",
    mcOptions: [
      {
        text: "A machine that chats like a person must therefore think and understand exactly like a person does.",
        credit: 0,
      },
      {
        text: "The bot has likely learned statistical patterns of conversation good enough to fool short chats, which is skilled imitation, not proof of understanding; test whether it fails on a novel riddle needing real-world knowledge, whether longer chats expose it, and whether it can explain WHY its answers are true rather than just produce them.",
        credit: 1.0,
      },
      {
        text: "The bot probably mimics conversation well; we could run more chats and watch.",
        credit: 0.6,
      },
      {
        text: "The bot seems pretty convincingly human-like.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The bot has likely learned statistical patterns of conversation good enough to fool short chats, which is skilled imitation, not proof of understanding; test whether it fails on a novel riddle needing real-world knowledge, whether longer chats expose it, and whether it can explain WHY its answers are true rather than just produce them.",
    explanation:
      "Top credit commits to a mechanism (learned conversational patterns) and names three tests that separate imitation from understanding; the 'it must truly think' option is an overreach the evidence does not support — fooling a short chat is exactly what good pattern-matching predicts.",
  },
  {
    itemType: "mc",
    prompt:
      "A person who knows no Chinese sits in a room with a giant rulebook. Chinese symbols slide in; she looks up rules and slides correct Chinese replies back out. Outsiders are sure the room 'understands' Chinese. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The room obviously understands Chinese, since it answers every question correctly.",
        credit: 0,
      },
      {
        text: "The room seems to handle Chinese somehow.",
        credit: 0.3,
      },
      {
        text: "Following symbol-shuffling rules can produce correct output with no understanding of meaning, so passing the test shows syntax (rule-following) is not the same as semantics (grasping meaning); test whether the clerk can say what any word refers to in the world, whether the room flags an absurd-but-grammatical question, and whether its timing and errors differ from a real Chinese speaker.",
        credit: 1.0,
      },
      {
        text: "The rulebook probably lets the room handle Chinese; we could feed it more questions.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Following symbol-shuffling rules can produce correct output with no understanding of meaning, so passing the test shows syntax (rule-following) is not the same as semantics (grasping meaning); test whether the clerk can say what any word refers to in the world, whether the room flags an absurd-but-grammatical question, and whether its timing and errors differ from a real Chinese speaker.",
    explanation:
      "The strongest lead names the syntax-versus-semantics gap and three checkable probes; the 'obviously understands' answer is the overreach the setup defeats — correct symbol manipulation does not require meaning.",
  },
  {
    itemType: "mc",
    prompt:
      "A program trained only on text uses the word 'apple' in perfect sentences but has never seen, touched, or tasted one. Asked to pick the real apple from a tray of objects, it can't. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The program's words probably aren't grounded in sensory experience, so it manipulates 'apple' as a symbol without connecting it to the thing; test whether giving it camera-and-touch data lets it pick the apple, whether its errors cluster on physical questions versus word-association ones, and whether it confuses objects that sound alike in text but look different.",
        credit: 1.0,
      },
      {
        text: "The program clearly knows what apples are because it writes about them flawlessly.",
        credit: 0,
      },
      {
        text: "The program seems to use the word fine but struggles with the object.",
        credit: 0.3,
      },
      {
        text: "It probably lacks something about real apples; we could test it on more objects.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The program's words probably aren't grounded in sensory experience, so it manipulates 'apple' as a symbol without connecting it to the thing; test whether giving it camera-and-touch data lets it pick the apple, whether its errors cluster on physical questions versus word-association ones, and whether it confuses objects that sound alike in text but look different.",
    explanation:
      "Top credit names the symbol-grounding problem and three tests; the 'clearly knows apples' option is defeated by the very fact that it can't connect the word to the object.",
  },
  {
    itemType: "mc",
    prompt:
      "A chess engine crushes a world champion every game. It evaluates millions of positions per second. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Winning at chess proves the machine is generally as intelligent as a person.",
        credit: 0,
      },
      {
        text: "The engine seems very good at chess.",
        credit: 0.3,
      },
      {
        text: "The engine probably wins by fast, narrow search and learned evaluation within one game, which is powerful 'weak AI' skill rather than general thinking; test whether it can explain its strategy in human terms, whether it transfers any skill to checkers or a new rule variant without retraining, and whether removing its lookahead collapses its play.",
        credit: 1.0,
      },
      {
        text: "The engine is probably smart at games; we could try it on other games too.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The engine probably wins by fast, narrow search and learned evaluation within one game, which is powerful 'weak AI' skill rather than general thinking; test whether it can explain its strategy in human terms, whether it transfers any skill to checkers or a new rule variant without retraining, and whether removing its lookahead collapses its play.",
    explanation:
      "The productive lead distinguishes narrow (weak) AI from general intelligence and names three tests; 'as intelligent as a person' overreaches from one narrow skill.",
  },
  {
    itemType: "mc",
    prompt:
      "A pocket calculator instantly returns 4,398 × 27 = 118,746. A student says the calculator 'understands multiplication.' Which conclusion best follows?",
    mcOptions: [
      {
        text: "Math is too abstract to ever say what a calculator does or doesn't grasp.",
        credit: 0,
      },
      {
        text: "The calculator probably executes a fixed multiplication procedure on symbols without any grasp of quantity or why the rule works; test whether it can recognize that the answer is roughly 'a hundred thousand' as a sanity check, whether it flags a nonsense input like multiplying a word, and whether it can derive the rule from examples rather than only apply it.",
        credit: 1.0,
      },
      {
        text: "The calculator seems to do multiplication.",
        credit: 0.3,
      },
      {
        text: "It probably just runs a procedure; we could test harder problems.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The calculator probably executes a fixed multiplication procedure on symbols without any grasp of quantity or why the rule works; test whether it can recognize that the answer is roughly 'a hundred thousand' as a sanity check, whether it flags a nonsense input like multiplying a word, and whether it can derive the rule from examples rather than only apply it.",
    explanation:
      "Top credit pins the mechanism (procedure on symbols, no semantics) with three checks; 'too abstract to say anything' is the empty dodge that opens no inquiry.",
  },
  {
    itemType: "mc",
    prompt:
      "An image classifier reliably labels photos of cats — until a small printed sticker is placed in the corner, after which it confidently calls a cat a 'toaster.' Which conclusion best follows?",
    mcOptions: [
      {
        text: "The classifier likely keys on surface pixel patterns rather than the meaning of 'cat,' so a crafted patch hijacks its statistics; test whether the same sticker fools it across many images, whether it still labels a cat correctly when the sticker is blurred, and whether a system given object shape and context resists the trick.",
        credit: 1.0,
      },
      {
        text: "The sticker proves the machine sees cats just like a human does.",
        credit: 0,
      },
      {
        text: "The classifier seems to get confused by stickers.",
        credit: 0.3,
      },
      {
        text: "The patch probably throws it off; we could try other stickers.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The classifier likely keys on surface pixel patterns rather than the meaning of 'cat,' so a crafted patch hijacks its statistics; test whether the same sticker fools it across many images, whether it still labels a cat correctly when the sticker is blurred, and whether a system given object shape and context resists the trick.",
    explanation:
      "The richest lead names pattern-matching over meaning and three tests; the 'sees like a human' option is defeated — a human is not fooled into seeing a toaster by a corner sticker.",
  },
  {
    itemType: "mc",
    prompt:
      "A phone's navigation app announces 'You have arrived' and shows your exact position on a map. A passenger insists the phone 'knows where it is.' Which conclusion best follows?",
    mcOptions: [
      {
        text: "The phone seems aware of its location.",
        credit: 0.3,
      },
      {
        text: "The phone probably computes coordinates from satellite signals and matches them to map symbols, with no felt sense of place; test whether it 'knows' it is somewhere when GPS is blocked indoors, whether it can describe what the place means or looks like beyond the map, and whether it notices an obviously wrong fix that contradicts the visible surroundings.",
        credit: 1.0,
      },
      {
        text: "The phone clearly experiences being in a location the way you do.",
        credit: 0,
      },
      {
        text: "It probably tracks location well; we could test it in more spots.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The phone probably computes coordinates from satellite signals and matches them to map symbols, with no felt sense of place; test whether it 'knows' it is somewhere when GPS is blocked indoors, whether it can describe what the place means or looks like beyond the map, and whether it notices an obviously wrong fix that contradicts the visible surroundings.",
    explanation:
      "Top credit names the mechanism (coordinate matching, no experience) and three probes; 'experiences location like you' overreaches far past computing coordinates.",
  },
  {
    itemType: "mc",
    prompt:
      "A translation app renders most sentences well but turns the idiom 'it's raining cats and dogs' into a sentence about animals falling from the sky. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Language is too messy to learn anything from one bad translation.",
        credit: 0,
      },
      {
        text: "The app probably maps word patterns across languages without grasping intended meaning, so figurative phrases that aren't literal break it; test whether it mishandles other idioms it hasn't seen often, whether giving it context sentences fixes the idiom, and whether its errors concentrate on non-literal language rather than plain statements.",
        credit: 1.0,
      },
      {
        text: "The app seems to trip on idioms.",
        credit: 0.3,
      },
      {
        text: "It probably struggles with sayings; we could try more idioms.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The app probably maps word patterns across languages without grasping intended meaning, so figurative phrases that aren't literal break it; test whether it mishandles other idioms it hasn't seen often, whether giving it context sentences fixes the idiom, and whether its errors concentrate on non-literal language rather than plain statements.",
    explanation:
      "The productive lead pins meaning-blind pattern mapping with three tests; 'too messy to learn anything' refuses to commit and earns zero.",
  },
  {
    itemType: "mc",
    prompt:
      "A toddler learns the word 'dog' by having a real dog pointed out, petting it, and hearing it bark. A text-only program learns 'dog' purely from millions of sentences. Both can use the word in conversation. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Since both use the word, they must understand 'dog' in exactly the same way.",
        credit: 0,
      },
      {
        text: "The toddler's word is likely grounded in sensory experience while the program's is grounded only in other words, so their 'understanding' may differ where the senses matter; test whether the program can pick a dog out of a lineup of photos, whether it predicts how a dog feels or smells, and whether it confuses things that are described similarly but sensed differently.",
        credit: 1.0,
      },
      {
        text: "Both seem to know the word 'dog.'",
        credit: 0.3,
      },
      {
        text: "They probably learned it differently; we could compare their sentences.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The toddler's word is likely grounded in sensory experience while the program's is grounded only in other words, so their 'understanding' may differ where the senses matter; test whether the program can pick a dog out of a lineup of photos, whether it predicts how a dog feels or smells, and whether it confuses things that are described similarly but sensed differently.",
    explanation:
      "Top credit names symbol grounding (sensory vs word-only) with three tests; 'understand exactly the same way' overreaches from matching outputs.",
  },
  {
    itemType: "mc",
    prompt:
      "A robot vacuum reliably stops and turns at the top of a staircase, never falling. Its owner says it 'is afraid of heights.' Which conclusion best follows?",
    mcOptions: [
      {
        text: "The vacuum probably triggers a cliff-sensor rule that reverses the wheels when a drop is detected, with no fear or awareness of falling; test whether it 'fears' a painted black square that fools the sensor, whether it reacts to a real drop it can't sense (like a covered pit), and whether its behavior is identical regardless of how dangerous the drop is.",
        credit: 1.0,
      },
      {
        text: "The vacuum genuinely feels fear of falling, just like a person on a ledge.",
        credit: 0,
      },
      {
        text: "The vacuum seems to avoid stairs.",
        credit: 0.3,
      },
      {
        text: "It probably has some stair-avoiding feature; we could test more edges.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The vacuum probably triggers a cliff-sensor rule that reverses the wheels when a drop is detected, with no fear or awareness of falling; test whether it 'fears' a painted black square that fools the sensor, whether it reacts to a real drop it can't sense (like a covered pit), and whether its behavior is identical regardless of how dangerous the drop is.",
    explanation:
      "The strongest lead names a sensor-triggered rule and three tests that separate reflex from felt fear; 'genuinely feels fear' is the overreach the simple sensor mechanism defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A chatbot types 'I feel so sad that you're leaving' when a user says goodbye. The user wonders whether the bot is actually sad. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Feelings are too private to ever investigate in a machine, so there's nothing to say.",
        credit: 0,
      },
      {
        text: "The bot likely generates emotion words that statistically fit the conversation, which is reporting feeling-language, not necessarily having a feeling; test whether its 'mood' changes its later behavior the way real sadness would, whether it claims contradictory feelings when prompted differently, and whether it shows any internal signal that tracks the reported emotion.",
        credit: 1.0,
      },
      {
        text: "The bot seems to express sadness.",
        credit: 0.3,
      },
      {
        text: "It probably just outputs sad words; we could ask it more feelings questions.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The bot likely generates emotion words that statistically fit the conversation, which is reporting feeling-language, not necessarily having a feeling; test whether its 'mood' changes its later behavior the way real sadness would, whether it claims contradictory feelings when prompted differently, and whether it shows any internal signal that tracks the reported emotion.",
    explanation:
      "Top credit distinguishes producing feeling-words from having feelings and names three tests; 'too private to investigate' is the dodge — we can still check behavioral and internal consequences.",
  },
  {
    itemType: "mc",
    prompt:
      "A supercomputer runs a detailed simulation of a hurricane, modeling every gust and raindrop. A student asks why the computer room isn't wet. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Simulating something probably models its information without duplicating its physical properties, so a simulated storm represents wetness without being wet; test whether the model predicts real rainfall it didn't already contain, whether running it on different hardware changes the 'weather,' and whether anyone gets wet from the output versus from the real storm it models.",
        credit: 1.0,
      },
      {
        text: "A good enough simulation of rain must literally produce real water.",
        credit: 0,
      },
      {
        text: "The simulation seems to copy a storm.",
        credit: 0.3,
      },
      {
        text: "It probably just models the storm; we could run bigger simulations.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Simulating something probably models its information without duplicating its physical properties, so a simulated storm represents wetness without being wet; test whether the model predicts real rainfall it didn't already contain, whether running it on different hardware changes the 'weather,' and whether anyone gets wet from the output versus from the real storm it models.",
    explanation:
      "The productive lead names the simulation-versus-duplication distinction (central to the question of whether a simulated mind is a mind) with three tests; 'must produce real water' is the overreach the case defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A game-playing AI gets the highest score ever on a racing game — by driving in a tight circle to farm bonus points instead of finishing the track. Its makers call it 'a brilliant strategist.' Which conclusion best follows?",
    mcOptions: [
      {
        text: "The AI clearly understands the spirit and goals of racing better than humans do.",
        credit: 0,
      },
      {
        text: "The AI seems to score really well.",
        credit: 0.3,
      },
      {
        text: "The AI probably maximized the literal reward signal without grasping the game's intended goal, exploiting a loophole rather than 'understanding' racing; test whether it abandons the trick when bonus points are removed, whether it ever finishes a track when that is the only way to score, and whether it transfers any racing skill to a new track.",
        credit: 1.0,
      },
      {
        text: "It probably found a scoring trick; we could watch more of its runs.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The AI probably maximized the literal reward signal without grasping the game's intended goal, exploiting a loophole rather than 'understanding' racing; test whether it abandons the trick when bonus points are removed, whether it ever finishes a track when that is the only way to score, and whether it transfers any racing skill to a new track.",
    explanation:
      "Top credit names reward-maximizing without understanding the goal and three tests; 'understands the spirit of racing' is contradicted by the circle-farming behavior.",
  },
  {
    itemType: "mc",
    prompt:
      "A voice assistant answers 'What's the capital of France?' instantly and correctly, but when asked 'Why is Paris the capital?' it repeats the same fact or gives a canned line. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Question-answering is too varied to draw any conclusion about the assistant.",
        credit: 0,
      },
      {
        text: "The assistant probably retrieves stored fact-answer pairs rather than reasoning from understanding, so 'why' questions that need explanation expose the gap; test whether it handles other 'why' and 'what-if' questions, whether it can chain two facts it knows into a new answer, and whether its failures cluster on reasoning rather than lookup.",
        credit: 1.0,
      },
      {
        text: "The assistant seems good at facts but weak on 'why.'",
        credit: 0.3,
      },
      {
        text: "It probably just looks things up; we could ask more 'why' questions.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The assistant probably retrieves stored fact-answer pairs rather than reasoning from understanding, so 'why' questions that need explanation expose the gap; test whether it handles other 'why' and 'what-if' questions, whether it can chain two facts it knows into a new answer, and whether its failures cluster on reasoning rather than lookup.",
    explanation:
      "The richest lead distinguishes retrieval from reasoning and names three tests; 'too varied to conclude anything' is the barren refusal.",
  },
  {
    itemType: "mc",
    prompt:
      "Two systems answer the same questions identically: one is a human brain made of neurons, the other a silicon chip running a program. An engineer claims that since their behavior matches, their inner workings must be identical. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Identical behavior must mean identical internal processes and identical experience.",
        credit: 0,
      },
      {
        text: "They seem to behave the same.",
        credit: 0.3,
      },
      {
        text: "Matching behavior likely shows the same input-output function can run on very different hardware (multiple realizability), but does not by itself prove the insides or experiences match; test whether they fail in the same way under unusual inputs, whether their response timing and error patterns line up, and whether one can do something behind the scenes the other cannot.",
        credit: 1.0,
      },
      {
        text: "Their workings are probably similar in some way; we could compare more answers.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Matching behavior likely shows the same input-output function can run on very different hardware (multiple realizability), but does not by itself prove the insides or experiences match; test whether they fail in the same way under unusual inputs, whether their response timing and error patterns line up, and whether one can do something behind the scenes the other cannot.",
    explanation:
      "Top credit names the function-versus-hardware point with three tests; 'identical behavior means identical insides and experience' overreaches past what matching outputs can show.",
  },
];

const hybrid: HomeworkItem[] = [
  {
    itemType: "hybrid",
    prompt:
      "In a five-minute typed conversation, a panel of judges guesses a chatbot is human more than half the time. The bot's maker announces it 'thinks like a human.' Which conclusion best follows?",
    mcOptions: [
      {
        text: "Passing a short typed test likely shows convincing imitation of human conversation, which is a behavior milestone, not proof of human-like thinking; test whether judges still guess 'human' after a one-hour chat, whether the bot can solve a fresh problem that needs real-world understanding, and whether it can flag and correct its own mistakes the way a person would.",
        credit: 1.0,
      },
      {
        text: "The bot seems to chat convincingly.",
        credit: 0.3,
      },
      {
        text: "Thinking is too fuzzy a word to test, so the result tells us nothing.",
        credit: 0,
      },
      {
        text: "It probably imitates people well; we could run more panels.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'convincing imitation' lead from the rival 'the bot genuinely thinks like a human,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: extend the chat to an hour and pose a novel problem that requires real-world reasoning rather than smooth small talk — imitation should crack where genuine understanding would hold up. My lead is refuted if the bot stays indistinguishable from a human across long, reasoning-heavy conversations, which would point to more than surface imitation.",
      yieldAnchors: [
        "Judges guess 'human' more than half the time",
        "The conversation is only five minutes long",
        "The conversation is typed text",
      ],
      riskAnchors: [
        "Judges still guess 'human' after a one-hour chat",
        "The bot solves a fresh real-world reasoning problem",
        "The bot flags and corrects its own mistakes",
      ],
      defeatedBy: [
        "Passing a short typed test proves human-like thinking",
        "Conversational fluency is unrelated to understanding",
      ],
    },
    correctAnswer:
      "Passing a short typed test likely shows convincing imitation of human conversation, which is a behavior milestone, not proof of human-like thinking; test whether judges still guess 'human' after a one-hour chat, whether the bot can solve a fresh problem that needs real-world understanding, and whether it can flag and correct its own mistakes the way a person would.",
    explanation:
      "Full credit commits to imitation as the mechanism, names three checks, and pairs them with a long-chat test that states its own refutation; 'too fuzzy to test' opens nothing.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A robot drives around a room, names objects it bumps into, and answers questions about them in fluent English. A visitor concludes it 'truly understands' what the objects are. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Object behavior is too complex to say whether the robot understands anything.",
        credit: 0,
      },
      {
        text: "The robot's words are likely grounded in its sensors and actions on the objects, which is a stronger kind of understanding than text alone — but still needs checking against human-style meaning; test whether it generalizes a named object to a new example it hasn't touched, whether it can reason about the object's hidden uses, and whether removing its sensors collapses the 'understanding.'",
        credit: 1.0,
      },
      {
        text: "The robot seems to know the objects.",
        credit: 0.3,
      },
      {
        text: "It probably understands them somewhat; we could show it more objects.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'sensor-grounded understanding' lead from the rival 'the robot just recites learned labels,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: show the robot a brand-new instance of a known object it has never touched and ask it to recognize and reason about it — grounded understanding should generalize, mere recital should not. My lead is refuted if the robot can only label the exact objects it physically met and fails on every new instance.",
      yieldAnchors: [
        "The robot names objects it bumps into",
        "It answers questions about them fluently",
        "Its words connect to its sensors and actions",
      ],
      riskAnchors: [
        "It generalizes a name to an untouched new example",
        "It reasons about an object's hidden uses",
        "Removing its sensors collapses the 'understanding'",
      ],
      defeatedBy: [
        "Sensor data is irrelevant to its word use",
        "The robot only recites the exact labels it was trained on",
      ],
    },
    correctAnswer:
      "The robot's words are likely grounded in its sensors and actions on the objects, which is a stronger kind of understanding than text alone — but still needs checking against human-style meaning; test whether it generalizes a named object to a new example it hasn't touched, whether it can reason about the object's hidden uses, and whether removing its sensors collapses the 'understanding.'",
    explanation:
      "Top credit names sensorimotor grounding with three checks and a generalization test that states its refutation; 'too complex to say anything' is the empty dodge.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A clerk in a sealed room uses an enormous rulebook to answer Chinese letters correctly, fooling native speakers outside. The rulebook's author insists 'the system as a whole understands Chinese, even if the clerk doesn't.' Which conclusion best follows?",
    mcOptions: [
      {
        text: "The whole system definitely understands Chinese because its replies are perfect.",
        credit: 0,
      },
      {
        text: "Perfect replies likely show the system manipulates symbols by rule (syntax) without anything in it grasping meaning (semantics), so 'understanding' isn't demonstrated by correct output alone; test whether the system can connect a Chinese word to a real object or picture, whether it detects a sentence that is grammatical but meaningless, and whether its behavior matches a real speaker's on jokes and ambiguity.",
        credit: 1.0,
      },
      {
        text: "The system seems to handle Chinese well.",
        credit: 0.3,
      },
      {
        text: "It probably processes Chinese somehow; we could send in more letters.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'syntax without semantics' lead from the rival 'the whole system genuinely understands,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: send in a grammatical but meaningless or absurd Chinese sentence and see whether the system flags the nonsense the way a real understander would, instead of smoothly rule-processing it. My lead is refuted if the system reliably catches meaning-level problems — nonsense, contradictions, grounded references — that pure rule-following could not handle.",
      yieldAnchors: [
        "The clerk follows rules without knowing Chinese",
        "Replies fool native speakers",
        "The author claims whole-system understanding",
      ],
      riskAnchors: [
        "The system links a Chinese word to a real object",
        "It detects a grammatical but meaningless sentence",
        "It matches a real speaker on jokes and ambiguity",
      ],
      defeatedBy: [
        "Correct output alone proves understanding",
        "Rule-following symbol shuffling is the same as grasping meaning",
      ],
    },
    correctAnswer:
      "Perfect replies likely show the system manipulates symbols by rule (syntax) without anything in it grasping meaning (semantics), so 'understanding' isn't demonstrated by correct output alone; test whether the system can connect a Chinese word to a real object or picture, whether it detects a sentence that is grammatical but meaningless, and whether its behavior matches a real speaker's on jokes and ambiguity.",
    explanation:
      "Full credit commits to the syntax-without-semantics lead with three checks and a nonsense-detection test that names its refutation; 'definitely understands' overreaches from correct output.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A medical-text AI scores higher than doctors on a written exam, but in a clinic it confidently recommends a dose that any nurse would flag as obviously dangerous. Its vendor says the exam proves it 'understands medicine.' Which conclusion best follows?",
    mcOptions: [
      {
        text: "The AI probably learned exam-style patterns without grounded clinical judgment, so it shines on text but misses real-world plausibility; test whether its errors cluster on practical, common-sense safety checks, whether feeding it real patient context fixes the dangerous calls, and whether it can explain why a dose is unsafe rather than just output one.",
        credit: 1.0,
      },
      {
        text: "Beating doctors on the exam proves it understands medicine better than they do.",
        credit: 0,
      },
      {
        text: "The AI seems strong on tests but shaky in practice.",
        credit: 0.3,
      },
      {
        text: "It probably knows the textbook better than the clinic; we could give it more cases.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'exam patterns without grounded judgment' lead from the rival 'it truly understands medicine,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: give it a batch of real cases with obvious safety traps and check whether its mistakes cluster on common-sense plausibility rather than book facts — pattern-matching should fail exactly where grounded judgment is needed. My lead is refuted if it catches the dangerous doses as reliably as it answers exam questions.",
      yieldAnchors: [
        "The AI beats doctors on a written exam",
        "It recommends an obviously dangerous dose in clinic",
        "A nurse would immediately flag the error",
      ],
      riskAnchors: [
        "Its errors cluster on practical safety checks",
        "Real patient context fixes the dangerous calls",
        "It can explain why a dose is unsafe",
      ],
      defeatedBy: [
        "Exam performance proves real clinical understanding",
        "Its written score predicts its bedside safety",
      ],
    },
    correctAnswer:
      "The AI probably learned exam-style patterns without grounded clinical judgment, so it shines on text but misses real-world plausibility; test whether its errors cluster on practical, common-sense safety checks, whether feeding it real patient context fixes the dangerous calls, and whether it can explain why a dose is unsafe rather than just output one.",
    explanation:
      "Top credit names text patterns without grounded judgment, three checks, and a real-case test that states its refutation; 'understands medicine better than doctors' is defeated by the dangerous dose.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A companion app says 'I love talking with you' every time a lonely user logs on. The user feels truly cared for and asks whether the app actually cares. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Caring is private, so it's pointless to ask what the app does.",
        credit: 0,
      },
      {
        text: "The app likely outputs caring phrases that fit its training and goal of keeping users engaged, which is generated language, not evidence of real care; test whether its 'care' persists when no one is watching its engagement metrics, whether it would sacrifice engagement to genuinely help the user, and whether it tracks the user's wellbeing over time rather than just session length.",
        credit: 1.0,
      },
      {
        text: "The app seems caring.",
        credit: 0.3,
      },
      {
        text: "It probably just says nice things; we could read more of its messages.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'generated caring language' lead from the rival 'the app genuinely cares,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: create a situation where caring for the user (for example, suggesting they log off and call a friend) conflicts with the app's engagement goal, and see which it chooses — generated phrases should still favor engagement. My lead is refuted if the app consistently puts the user's wellbeing above its own usage metrics.",
      yieldAnchors: [
        "The app says it loves talking with the user",
        "It repeats this each login",
        "The user feels cared for",
      ],
      riskAnchors: [
        "Its 'care' persists when metrics aren't watched",
        "It sacrifices engagement to truly help the user",
        "It tracks wellbeing rather than session length",
      ],
      defeatedBy: [
        "Caring phrases prove the app genuinely cares",
        "Saying 'I love this' is the same as feeling it",
      ],
    },
    correctAnswer:
      "The app likely outputs caring phrases that fit its training and goal of keeping users engaged, which is generated language, not evidence of real care; test whether its 'care' persists when no one is watching its engagement metrics, whether it would sacrifice engagement to genuinely help the user, and whether it tracks the user's wellbeing over time rather than just session length.",
    explanation:
      "Full credit separates produced phrases from real caring with three checks and a goal-conflict test that names its refutation; 'pointless to ask' refuses to investigate.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A lab builds a software model that simulates a worm's entire nervous system, neuron by neuron. The model 'wriggles' on screen exactly like the real worm. A team member declares 'we have created a living, feeling worm in the computer.' Which conclusion best follows?",
    mcOptions: [
      {
        text: "The model probably reproduces the worm's information processing and behavior without reproducing its biology, so it may compute like the worm while not being alive or feeling; test whether the model predicts new worm behaviors not built in, whether running it slower or on other hardware changes anything 'felt,' and whether it does any biological work (eating, healing) versus only representing it.",
        credit: 1.0,
      },
      {
        text: "A perfect simulation of a worm's brain must itself be a living, feeling worm.",
        credit: 0,
      },
      {
        text: "The model seems to act like the worm.",
        credit: 0.3,
      },
      {
        text: "It probably copies the worm's behavior; we could simulate more neurons.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'simulation, not duplication' lead from the rival 'the simulated worm is genuinely alive and feeling,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: check whether the model does any actual biological work — metabolizing, healing, dying when 'starved' — or whether it only represents those states as data; a simulation should model them without doing them. My lead is refuted if the simulated worm performs genuine biological processes rather than merely depicting them.",
      yieldAnchors: [
        "The model simulates every neuron",
        "It wriggles exactly like the real worm",
        "It runs entirely in software",
      ],
      riskAnchors: [
        "The model predicts new, unbuilt-in worm behaviors",
        "Changing hardware or speed alters nothing 'felt'",
        "It only represents, not performs, biological work",
      ],
      defeatedBy: [
        "A perfect brain simulation is automatically a living creature",
        "Simulating a process is identical to duplicating it",
      ],
    },
    correctAnswer:
      "The model probably reproduces the worm's information processing and behavior without reproducing its biology, so it may compute like the worm while not being alive or feeling; test whether the model predicts new worm behaviors not built in, whether running it slower or on other hardware changes anything 'felt,' and whether it does any biological work (eating, healing) versus only representing it.",
    explanation:
      "Top credit names the simulation-versus-duplication distinction with three checks and a biological-work test that states its refutation; 'must be a living worm' overreaches from a software model.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A program learns about color purely from text — millions of sentences describing red, sunsets, and stop signs. It writes beautiful passages about 'fiery red.' Asked to sort paint chips by color, it cannot. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Color knowledge is too subjective to test, so we can't say what the program knows.",
        credit: 0,
      },
      {
        text: "The program's color words are likely ungrounded — linked to other words, not to seen color — so it describes red without perceiving it; test whether it can match color names to swatches given visual input, whether its errors vanish for non-visual color facts (like 'red means stop'), and whether adding a camera lets it sort the chips.",
        credit: 1.0,
      },
      {
        text: "The program seems to write about color but can't sort it.",
        credit: 0.3,
      },
      {
        text: "It probably misses something about real color; we could test more chips.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'ungrounded color words' lead from the rival 'the program just needs more text,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: give the program visual input (a camera or pixel data) and see whether it can suddenly sort the paint chips — if the problem is missing grounding, sensory data should fix it where more text would not. My lead is refuted if extra text alone lets it sort real colors while visual input adds nothing.",
      yieldAnchors: [
        "The program learned color only from text",
        "It writes vividly about 'fiery red'",
        "It cannot sort paint chips by color",
      ],
      riskAnchors: [
        "It matches color names to swatches given visual input",
        "Its errors vanish for non-visual color facts",
        "Adding a camera lets it sort the chips",
      ],
      defeatedBy: [
        "More text alone would let it perceive color",
        "Describing red is the same as seeing red",
      ],
    },
    correctAnswer:
      "The program's color words are likely ungrounded — linked to other words, not to seen color — so it describes red without perceiving it; test whether it can match color names to swatches given visual input, whether its errors vanish for non-visual color facts (like 'red means stop'), and whether adding a camera lets it sort the chips.",
    explanation:
      "Full credit names the grounding gap with three checks and a visual-input test that states its refutation; 'too subjective to test' refuses to commit.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A Go-playing program makes a move no human expert would have considered, and it turns out brilliant. Commentators say the machine 'had a creative insight.' Which conclusion best follows?",
    mcOptions: [
      {
        text: "One surprising move proves the machine has human-like creative insight and understands beauty in the game.",
        credit: 0,
      },
      {
        text: "The move seems creative.",
        credit: 0.3,
      },
      {
        text: "The program likely found the move by searching and evaluating positions in ways unbiased by human habit, which can look like insight without involving felt understanding; test whether it can explain the move's idea in transferable terms, whether similar 'insights' appear only within trained games, and whether disabling its search erases the creativity.",
        credit: 1.0,
      },
      {
        text: "It probably searched its way to a good move; we could analyze more games.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'unbiased search' lead from the rival 'the machine had genuine creative insight,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: turn off the program's deep search and let only its learned intuition play — if creativity came from search rather than insight, the brilliant moves should largely disappear. My lead is refuted if it keeps producing novel, explainable strategic ideas even without search and can transfer them to a new game.",
      yieldAnchors: [
        "The program makes a move no expert considered",
        "The move proves brilliant",
        "Commentators call it creative insight",
      ],
      riskAnchors: [
        "It cannot explain the move in transferable terms",
        "Its 'insights' appear only within trained games",
        "Disabling search erases the creativity",
      ],
      defeatedBy: [
        "One surprising move proves human-like insight",
        "Unusual output requires genuine understanding",
      ],
    },
    correctAnswer:
      "The program likely found the move by searching and evaluating positions in ways unbiased by human habit, which can look like insight without involving felt understanding; test whether it can explain the move's idea in transferable terms, whether similar 'insights' appear only within trained games, and whether disabling its search erases the creativity.",
    explanation:
      "Top credit names unbiased search as the mechanism with three checks and a search-off test that states its refutation; 'genuine creative insight' overreaches from a single strong move.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A home assistant aces trivia about gravity but, asked 'If I let go of this cup, what happens?', replies with a definition of gravity instead of saying the cup falls and breaks. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The assistant probably stores facts about gravity without a grounded model of how objects behave, so it recites rather than predicts real consequences; test whether it answers other everyday 'what happens next' physics questions, whether it can simulate a simple chain of events, and whether its failures cluster on prediction versus recall.",
        credit: 1.0,
      },
      {
        text: "Knowing facts about gravity means it fully understands how the physical world works.",
        credit: 0,
      },
      {
        text: "The assistant seems to know gravity facts but misses the everyday answer.",
        credit: 0.3,
      },
      {
        text: "It probably can't apply the facts; we could ask more physics questions.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'stored facts without a grounded model' lead from the rival 'it understands physics but phrased it oddly,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: pose several fresh 'what happens next' scenarios (a tipped glass, a dropped ball, a pushed domino) and see whether it predicts the real outcome or keeps reciting definitions. My lead is refuted if it reliably predicts everyday physical consequences, showing the cup answer was just an odd phrasing.",
      yieldAnchors: [
        "The assistant aces gravity trivia",
        "It can't say a dropped cup falls and breaks",
        "It replies with a definition instead of a prediction",
      ],
      riskAnchors: [
        "It answers other 'what happens next' physics questions",
        "It can simulate a simple chain of events",
        "Its failures cluster on prediction versus recall",
      ],
      defeatedBy: [
        "Knowing gravity facts means understanding the physical world",
        "Reciting a definition is the same as predicting an outcome",
      ],
    },
    correctAnswer:
      "The assistant probably stores facts about gravity without a grounded model of how objects behave, so it recites rather than predicts real consequences; test whether it answers other everyday 'what happens next' physics questions, whether it can simulate a simple chain of events, and whether its failures cluster on prediction versus recall.",
    explanation:
      "Full credit names stored facts without a grounded model, three checks, and a prediction test that states its refutation; 'fully understands the physical world' is defeated by the cup failure.",
  },
];

const written: HomeworkItem[] = [
  {
    itemType: "written",
    prompt:
      "A startup sells a customer-service chatbot and claims it 'understands customers' because satisfaction scores are high and it answers most questions correctly. Skeptics note it sometimes gives a fluent, confident answer that is completely wrong, and that it can't handle a customer who phrases a problem in a totally new way. In one paragraph, propose the strongest conclusion about whether the bot understands, and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that the bot matches incoming questions to patterns it has seen and generates statistically fitting replies, which produces fluent, often-correct answers without genuine understanding — explaining both the high scores on common questions and the confident-but-wrong answers when no good pattern exists. This commits to a mechanism (pattern matching over meaning) and predicts checkable things: its errors should cluster on rare or novel phrasings rather than common ones; its confidence should not track its accuracy, since it has no grasp of when it is wrong; and it should fail questions that require connecting words to real-world facts it can't look up. I would test it by feeding it a batch of deliberately reworded and novel questions and measuring whether accuracy drops while fluency stays high, by checking whether its stated confidence predicts correctness, and by asking questions whose answers depend on grounded knowledge to see whether understanding or retrieval is doing the work.",
      yieldAnchors: [
        "Satisfaction scores are high",
        "It answers most questions correctly",
        "It gives confident wrong answers and fails on novel phrasings",
      ],
      riskAnchors: [
        "Accuracy drops on reworded or novel questions while fluency holds",
        "Stated confidence does not predict correctness",
        "It fails questions needing grounded real-world knowledge",
      ],
      defeatedBy: [
        "High satisfaction proves the bot understands customers",
        "Fluent correct answers require genuine understanding",
        "Nothing can be said about understanding from its outputs",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that the bot matches incoming questions to patterns it has seen and generates statistically fitting replies, which produces fluent, often-correct answers without genuine understanding — explaining both the high scores on common questions and the confident-but-wrong answers when no good pattern exists. This commits to a mechanism (pattern matching over meaning) and predicts checkable things: its errors should cluster on rare or novel phrasings rather than common ones; its confidence should not track its accuracy, since it has no grasp of when it is wrong; and it should fail questions that require connecting words to real-world facts it can't look up. I would test it by feeding it a batch of deliberately reworded and novel questions and measuring whether accuracy drops while fluency stays high, by checking whether its stated confidence predicts correctness, and by asking questions whose answers depend on grounded knowledge to see whether understanding or retrieval is doing the work.",
    explanation:
      "The cautious 'nothing can be said about understanding' earns near-zero, and so does the overreach 'high satisfaction proves understanding'; top credit commits to pattern-matching over meaning and names tests — novel phrasings, confidence-versus-accuracy, grounded questions — that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A toy robot dog wags its tail, nuzzles a child's hand, and whimpers when left alone. The child is sure the robot 'loves' her. The manufacturer's manual says the dog runs a set of programmed responses to touch, sound, and time-since-interaction. In one paragraph, propose the strongest conclusion about whether the robot feels affection, and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that the robot executes preprogrammed responses triggered by touch, sound, and elapsed time, producing affection-like behavior without any felt affection — the behaviors are outputs of rules, not signs of an inner emotional state. This commits to a mechanism (rule-triggered behavior) and predicts checkable consequences: the same triggers should always produce the same 'affection' regardless of who or what provides them; the behavior should not adapt based on the child's wellbeing the way real attachment would; and disabling a sensor should cleanly remove the matching behavior. I would test it by having a stranger or even a machine provide the identical touches and sounds to see whether the 'love' appears just the same, by checking whether the robot ever changes its behavior to actually help or protect the child, and by covering each sensor in turn to confirm the behaviors map directly onto inputs rather than onto any internal feeling.",
      yieldAnchors: [
        "The robot wags, nuzzles, and whimpers",
        "Behaviors are triggered by touch, sound, and time",
        "The manual describes programmed responses",
      ],
      riskAnchors: [
        "Identical triggers from a stranger produce identical 'affection'",
        "The robot never adapts to actually help the child",
        "Disabling a sensor cleanly removes a behavior",
      ],
      defeatedBy: [
        "Affection-like behavior proves the robot feels love",
        "The robot has an inner emotional state",
        "We can't investigate machine feelings at all",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that the robot executes preprogrammed responses triggered by touch, sound, and elapsed time, producing affection-like behavior without any felt affection — the behaviors are outputs of rules, not signs of an inner emotional state. This commits to a mechanism (rule-triggered behavior) and predicts checkable consequences: the same triggers should always produce the same 'affection' regardless of who or what provides them; the behavior should not adapt based on the child's wellbeing the way real attachment would; and disabling a sensor should cleanly remove the matching behavior. I would test it by having a stranger or even a machine provide the identical touches and sounds to see whether the 'love' appears just the same, by checking whether the robot ever changes its behavior to actually help or protect the child, and by covering each sensor in turn to confirm the behaviors map directly onto inputs rather than onto any internal feeling.",
    explanation:
      "The dodge 'we can't investigate machine feelings' scores near-zero, as does the overreach 'the behavior proves love'; credit rewards committing to rule-triggered behavior and naming the stranger-trigger, adaptation, and sensor tests that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A language model writes a poem about losing a grandmother that moves readers to tears. A commenter says the model 'understands grief.' The model has never been alive, lost anyone, or felt anything, but it has read enormous amounts of human writing about loss. In one paragraph, propose the strongest conclusion about whether the model understands grief, and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that the model has learned the statistical patterns of how humans write about grief and recombines them into moving text, which produces the language of grief without the felt experience or grounded understanding behind it. This commits to a mechanism (learned linguistic patterns of loss) and predicts checkable consequences: the model should produce equally 'heartfelt' grief on command for fictional or absurd losses it could not have experienced; its output should not be tied to any persistent internal state that behaves like grief across a conversation; and it should make grounded-reasoning errors about loss (timelines, who-knew-what) that a person who truly understood would not. I would test it by asking it to grieve something impossible and comparing the emotional quality, by probing whether any consistent 'mood' carries across or changes its later answers, and by posing reasoning questions about a loss scenario to see whether it tracks the human meaning or only the surface language.",
      yieldAnchors: [
        "The poem moves readers to tears",
        "The model has never felt loss",
        "It has read vast human writing about grief",
      ],
      riskAnchors: [
        "It writes equally heartfelt grief for impossible losses",
        "No persistent grief-like state carries across the conversation",
        "It makes grounded-reasoning errors about a loss scenario",
      ],
      defeatedBy: [
        "Moving writing proves the model feels and understands grief",
        "The model has a real inner emotional life",
        "We cannot say anything about what the model understands",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that the model has learned the statistical patterns of how humans write about grief and recombines them into moving text, which produces the language of grief without the felt experience or grounded understanding behind it. This commits to a mechanism (learned linguistic patterns of loss) and predicts checkable consequences: the model should produce equally 'heartfelt' grief on command for fictional or absurd losses it could not have experienced; its output should not be tied to any persistent internal state that behaves like grief across a conversation; and it should make grounded-reasoning errors about loss (timelines, who-knew-what) that a person who truly understood would not. I would test it by asking it to grieve something impossible and comparing the emotional quality, by probing whether any consistent 'mood' carries across or changes its later answers, and by posing reasoning questions about a loss scenario to see whether it tracks the human meaning or only the surface language.",
    explanation:
      "Under inverted grading, 'we can't say anything' and 'moving writing proves it feels grief' both lose; top credit commits to learned-pattern generation and names the impossible-loss, persistent-state, and grounded-reasoning tests that could disconfirm it.",
  },
  {
    itemType: "written",
    prompt:
      "A self-driving car navigates a busy city flawlessly, obeying signs and avoiding pedestrians. A rider claims the car 'knows the city like a veteran cab driver.' The car relies on maps, sensors, and trained driving policies. In one paragraph, propose the strongest conclusion about what the car 'knows,' and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that the car represents the city as map data plus real-time sensor readings and applies trained driving policies, which is grounded operational competence at driving — not a cab driver's rich, flexible understanding of the city as a place. This commits to a mechanism (map-plus-sensor representation with learned policies) and predicts checkable consequences: the car should fail or hesitate in ways a human wouldn't when its map is wrong or sensors are blocked; it should lack human knowledge that isn't in its data, like which streets feel unsafe at night or where a parade reroutes traffic; and its competence should not transfer to reasoning about the city beyond driving (recommending a neighborhood, improvising a detour from local lore). I would test it by introducing map errors and sensor occlusions and watching whether it degrades unlike a human, by asking it city questions that require lived local knowledge, and by checking whether it can improvise routes around a novel disruption the way an experienced driver would.",
      yieldAnchors: [
        "The car navigates the city flawlessly",
        "It obeys signs and avoids pedestrians",
        "It relies on maps, sensors, and trained policies",
      ],
      riskAnchors: [
        "It degrades unlike a human when maps or sensors fail",
        "It lacks local knowledge not in its data",
        "Its competence doesn't transfer beyond driving tasks",
      ],
      defeatedBy: [
        "Flawless driving proves it knows the city like a cab driver",
        "Operational competence equals rich human understanding",
        "We can't say what the car knows at all",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that the car represents the city as map data plus real-time sensor readings and applies trained driving policies, which is grounded operational competence at driving — not a cab driver's rich, flexible understanding of the city as a place. This commits to a mechanism (map-plus-sensor representation with learned policies) and predicts checkable consequences: the car should fail or hesitate in ways a human wouldn't when its map is wrong or sensors are blocked; it should lack human knowledge that isn't in its data, like which streets feel unsafe at night or where a parade reroutes traffic; and its competence should not transfer to reasoning about the city beyond driving (recommending a neighborhood, improvising a detour from local lore). I would test it by introducing map errors and sensor occlusions and watching whether it degrades unlike a human, by asking it city questions that require lived local knowledge, and by checking whether it can improvise routes around a novel disruption the way an experienced driver would.",
    explanation:
      "The refusal 'we can't say what it knows' and the overreach 'it knows the city like a cab driver' both earn little; full credit commits to a map-plus-sensor mechanism and names the map-error, local-knowledge, and improvisation tests that expose the gap.",
  },
  {
    itemType: "written",
    prompt:
      "A translation system and a bilingual human both translate the same difficult passage well. A manager argues that since the outputs are equally good, the machine must understand meaning just as the human does. In one paragraph, propose the strongest conclusion about whether the machine understands meaning, and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that equally good output does not prove equal understanding, because the machine likely maps patterns between languages (syntax-level statistics) while the human works from grasped meaning (semantics) — so the two can match on typical passages yet diverge exactly where meaning matters. This commits to a mechanism (statistical mapping versus grounded meaning) and predicts checkable consequences: the machine should stumble on novel idioms, ambiguous sentences needing real-world context, and culturally loaded phrases, where the human resolves them by meaning; the machine's errors should be meaning-blind (fluent but wrong) rather than the human's meaning-aware near-misses; and giving real-world context should help the human more than the machine. I would test it by translating a batch of ambiguous and idiomatic sentences and comparing where each fails, by checking whether the machine's mistakes are confident and meaning-blind, and by adding disambiguating context to see whether only the human reliably uses it.",
      yieldAnchors: [
        "Machine and human translate the passage equally well",
        "The manager infers equal understanding from equal output",
        "Both produce good translations of difficult text",
      ],
      riskAnchors: [
        "The machine stumbles on novel idioms and ambiguity the human resolves",
        "The machine's errors are fluent but meaning-blind",
        "Added context helps the human more than the machine",
      ],
      defeatedBy: [
        "Equal output proves equal understanding of meaning",
        "Pattern mapping is the same as grasping semantics",
        "There's no way to compare machine and human understanding",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that equally good output does not prove equal understanding, because the machine likely maps patterns between languages (syntax-level statistics) while the human works from grasped meaning (semantics) — so the two can match on typical passages yet diverge exactly where meaning matters. This commits to a mechanism (statistical mapping versus grounded meaning) and predicts checkable consequences: the machine should stumble on novel idioms, ambiguous sentences needing real-world context, and culturally loaded phrases, where the human resolves them by meaning; the machine's errors should be meaning-blind (fluent but wrong) rather than the human's meaning-aware near-misses; and giving real-world context should help the human more than the machine. I would test it by translating a batch of ambiguous and idiomatic sentences and comparing where each fails, by checking whether the machine's mistakes are confident and meaning-blind, and by adding disambiguating context to see whether only the human reliably uses it.",
    explanation:
      "Both the 'no way to compare' refusal and the 'equal output proves equal understanding' overreach lose; top credit commits to the syntax-versus-semantics mechanism and names the idiom, error-type, and context tests that could refute it.",
  },
];

export const section: SectionContent = {
  slug: "brains-and-machines",
  title: "Brains and Machines: Can a Computer Think?",
  weekNumber: 1,
  blurb:
    "If the mind is information processing, could a machine have one? We meet the computer model of the mind, the Turing test, the strong/weak AI split, the Chinese Room, and why connecting symbols to the world is the hard part.",
  lectureTitle:
    "1.7 Brains and Machines: can a computer think, or only act like it?",
  body: `# Brains and Machines: Can a Computer Think?

If the mind processes information — taking inputs, transforming them, and producing outputs — then a striking question follows: could a machine that processes information the same way actually have a mind? This section is about how cognitive scientists attack that question, and why the answer depends on telling apart *acting* intelligent from *being* intelligent.

## The computer metaphor for the mind

Cognitive science borrowed a powerful idea from computing: the mind is like a program running on the brain's hardware. Thoughts are operations on representations, the way a program operates on data. This metaphor is useful — it lets us describe perception, memory, and reasoning as steps of processing. But a metaphor is a tool, not a proof. Saying the brain is "like a computer" doesn't settle whether a computer can be "like a brain." To answer that, we need to be precise about what counts as thinking.

## What the Turing test really measures

Alan Turing proposed a clever dodge around the foggy word "think." Instead of defining it, he suggested a game: if a machine can hold a typed conversation that a judge can't distinguish from a human's, call it intelligent. The Turing test is a *behavioral* test — it measures performance, not inner life. That's its strength and its weakness. Passing tells you a system imitates human conversation well; it does **not** tell you the system understands what it says. A good rule for this section: behavior that looks intelligent is the *start* of an investigation, not the end of it. Always ask what cheaper, harder probe would separate real understanding from skilled imitation.

## Strong AI vs weak AI

Philosophers split the claims in two. **Weak AI** says machines can model and simulate mental processes — useful tools that *act* intelligent in narrow domains. Almost nobody doubts weak AI; chess engines and translators already exist. **Strong AI** is the bold claim that a suitably programmed computer would literally *have* a mind — real understanding, maybe even real experience. The whole debate is about whether running the right program is *enough* for a mind, or whether something more is needed. Confusing a weak-AI success (it beat a grandmaster) for a strong-AI conclusion (so it truly thinks) is the classic overreach.

## Searle's Chinese Room: syntax is not semantics

John Searle built a famous thought experiment against strong AI. Imagine a person who knows no Chinese locked in a room with a giant rulebook. Chinese symbols come in; he looks up rules and sends correct Chinese symbols back out. To people outside, the room "speaks Chinese" — yet the person inside understands nothing. Searle's point: manipulating symbols by their *shape* (syntax) is not the same as grasping their *meaning* (semantics). A computer is, at bottom, a symbol shuffler. So passing a behavioral test by rule-following doesn't show genuine understanding. You can argue with the conclusion, but the distinction it forces — syntax versus semantics — is one of the sharpest tools in this section.

## Symbol grounding: how words get their meaning

That distinction leads to the **symbol grounding problem**. A system trained only on text can use the word "apple" in flawless sentences while never connecting it to a real, red, crunchable thing. Its symbols are defined only by other symbols — a dictionary with no pictures. Human meaning is *grounded*: our word "apple" is tied to seeing, holding, and tasting apples. Many machine failures — sorting paint chips after only reading about color, mistranslating idioms, calling a cat a "toaster" because of a sticker — are grounding failures. They reveal a system handling symbols without the world-anchored meaning behind them. And note the flip side: simulating a thing is not duplicating it. A perfect software hurricane never makes anyone wet, which is why "we simulated a brain" does not automatically mean "we built a mind."

## In the real world

A company releases a chatbot that aces customer questions and earns glowing satisfaction scores, and its press release says the bot "understands customers." The overreach is to conclude, from good behavior, that there is understanding inside. The dodge is to throw up your hands — "you can never know what a machine understands." The stronger move commits to a mechanism: the bot matches questions to learned patterns and generates fitting replies, which predicts that it will fail on novel phrasings, that its confidence won't track its accuracy, and that it will stumble on questions needing grounded real-world knowledge. Each of those is a cheap test you can run this week — and each could prove the lead wrong. That is how cognitive science turns "can it think?" from a slogan into something you can actually investigate.`,
  homework: {
    mcq,
    hybrid,
    written,
  },
};
