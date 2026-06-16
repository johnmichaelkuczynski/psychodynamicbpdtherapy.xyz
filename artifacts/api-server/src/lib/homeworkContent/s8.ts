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
      "Mid-session, a patient describing how no one in his family ever comforted him says, 'so I never went to my fath—... to you with anything,' correcting 'father' to 'you,' the therapist, then quickly moves on. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The patient may be relating to the therapist as he once related to his father — the slip and the quick move past it suggest an out-of-awareness template is being replayed in the room; test whether he reacts to the therapist's silences the way he describes his father's, whether the same 'no one comforts me' theme appears with other authority figures, and whether gently naming the slip brings relief or a flash of anxiety.",
        credit: 1.0,
      },
      {
        text: "It's probably about his father somehow; we could keep exploring his family history.",
        credit: 0.6,
      },
      {
        text: "He seems a little flustered by the slip.",
        credit: 0.3,
      },
      {
        text: "The slip proves a single repressed trauma is secretly running his whole life and must be dug out before therapy can continue.",
        credit: 0,
      },
    ],
    correctAnswer:
      "The patient may be relating to the therapist as he once related to his father — the slip and the quick move past it suggest an out-of-awareness template is being replayed in the room; test whether he reacts to the therapist's silences the way he describes his father's, whether the same 'no one comforts me' theme appears with other authority figures, and whether gently naming the slip brings relief or a flash of anxiety.",
    explanation:
      "Top credit reads the slip as transference — an old father-template replayed with the therapist — and names checkable observations; the 'one repressed trauma running everything' reading is the lurid overreach a single slip can't support.",
  },
  {
    itemType: "mc",
    prompt:
      "A patient who has been talking freely about her week goes completely silent the moment she begins to mention her sister, looks away, and after a long pause says, 'anyway, it doesn't matter.' Which conclusion best follows?",
    mcOptions: [
      {
        text: "She seems to have lost her train of thought about her sister.",
        credit: 0.3,
      },
      {
        text: "The silence and 'it doesn't matter' arriving exactly at the sister suggest she is avoiding something painful tied to that relationship, not running out of things to say; test whether she reliably goes quiet only on sister-related topics, whether her body tightens as she nears it, and whether gently noting the avoidance opens the topic rather than shutting it down.",
        credit: 1.0,
      },
      {
        text: "What goes on in someone's mind during a silence is unknowable, so the pause tells us nothing.",
        credit: 0,
      },
      {
        text: "It's probably an uncomfortable subject; we could come back to her sister later.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The silence and 'it doesn't matter' arriving exactly at the sister suggest she is avoiding something painful tied to that relationship, not running out of things to say; test whether she reliably goes quiet only on sister-related topics, whether her body tightens as she nears it, and whether gently noting the avoidance opens the topic rather than shutting it down.",
    explanation:
      "Full credit reads the timed silence as avoidance of a specific painful topic and names disconfirming observations; 'a silence is unknowable' is the refusal the precise, sister-triggered timing defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "Just after admitting through tears that he feels like a failure as a father, a patient abruptly brightens and starts talking in detail about last night's football game. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The sudden swerve to football right after a painful admission looks like a defensive move away from unbearable feeling, not a real change of interest; test whether these jumps reliably follow emotional peaks, whether slowing him down brings the feeling back, and whether the topic he flees to is consistently light and impersonal.",
        credit: 1.0,
      },
      {
        text: "He probably got uncomfortable; we could ask him to stay with the feeling.",
        credit: 0.6,
      },
      {
        text: "He seems to have lost interest in the topic.",
        credit: 0.3,
      },
      {
        text: "People's minds wander all the time, so jumping to football means nothing about what he was feeling.",
        credit: 0,
      },
    ],
    correctAnswer:
      "The sudden swerve to football right after a painful admission looks like a defensive move away from unbearable feeling, not a real change of interest; test whether these jumps reliably follow emotional peaks, whether slowing him down brings the feeling back, and whether the topic he flees to is consistently light and impersonal.",
    explanation:
      "Top credit reads the timed swerve as a defense against painful feeling and names checks; 'minds wander all the time' is the dismissal the tight coupling to the emotional peak defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "Whenever the conversation turns to her loneliness, a patient cracks a quick self-deprecating joke and laughs, then watches the therapist to see if they laugh too. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Her constant joking proves she is secretly a deeply broken person hiding catastrophic despair.",
        credit: 0,
      },
      {
        text: "She seems to use humor a lot.",
        credit: 0.3,
      },
      {
        text: "The joke arrives exactly when loneliness comes up and is aimed at getting the therapist to laugh, which suggests humor is a defense that both blunts the feeling and manages how the therapist sees her; test whether the jokes cluster only around painful topics, whether the feeling surfaces when the therapist doesn't laugh along, and whether naming the pattern lets her stay with the loneliness a beat longer.",
        credit: 1.0,
      },
      {
        text: "It's probably a way to cope; we could gently point out the joking.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The joke arrives exactly when loneliness comes up and is aimed at getting the therapist to laugh, which suggests humor is a defense that both blunts the feeling and manages how the therapist sees her; test whether the jokes cluster only around painful topics, whether the feeling surfaces when the therapist doesn't laugh along, and whether naming the pattern lets her stay with the loneliness a beat longer.",
    explanation:
      "Full credit reads the timed joke as a defense with a relational pull and names checks; the 'secretly catastrophic despair' reading is the melodramatic overreach a few well-placed jokes can't support.",
  },
  {
    itemType: "mc",
    prompt:
      "A usually polite patient snaps with surprising heat when the therapist reschedules one session, saying 'you clearly have better things to do than me' — a reaction far bigger than the small change warrants. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He's probably more sensitive to rejection than he lets on; we could explore it.",
        credit: 0.6,
      },
      {
        text: "The size of the reaction outstrips its trigger, which suggests the rescheduling tapped an old template about being unimportant to people he depends on, now aimed at the therapist; test whether the same out-of-proportion hurt appears with partners or bosses over small slights, whether it matches how a caregiver once treated him, and whether it cools when the therapist reliably follows through.",
        credit: 1.0,
      },
      {
        text: "He seems annoyed about the schedule change.",
        credit: 0.3,
      },
      {
        text: "Everyone gets irritated by schedule changes, so there's nothing here worth interpreting.",
        credit: 0,
      },
    ],
    correctAnswer:
      "The size of the reaction outstrips its trigger, which suggests the rescheduling tapped an old template about being unimportant to people he depends on, now aimed at the therapist; test whether the same out-of-proportion hurt appears with partners or bosses over small slights, whether it matches how a caregiver once treated him, and whether it cools when the therapist reliably follows through.",
    explanation:
      "Top credit reads the disproportion as transference of an old 'I don't matter' template and names disconfirming tests; 'everyone gets irritated' is the refusal the size of the reaction defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A patient is punctual for months but starts arriving fifteen minutes late — only for the sessions that follow ones where he opened up about his marriage. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He seems to be having trouble with timing lately.",
        credit: 0.3,
      },
      {
        text: "His lateness proves he wants to quit therapy and secretly hates the therapist.",
        credit: 0,
      },
      {
        text: "The lateness is patterned — it follows exactly the sessions that touched his marriage — which suggests an out-of-awareness pull to retreat from material that got too close, not random scheduling trouble; test whether the lateness tracks marital-topic sessions specifically, whether he feels relief at losing the time, and whether naming the pattern surfaces anxiety about what he revealed.",
        credit: 1.0,
      },
      {
        text: "It's probably avoidance of something; we could ask about the timing.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The lateness is patterned — it follows exactly the sessions that touched his marriage — which suggests an out-of-awareness pull to retreat from material that got too close, not random scheduling trouble; test whether the lateness tracks marital-topic sessions specifically, whether he feels relief at losing the time, and whether naming the pattern surfaces anxiety about what he revealed.",
    explanation:
      "Full credit reads the patterned lateness as resistance to threatening material and names a topic-specificity test; 'he wants to quit and hates the therapist' is the overreach the otherwise faithful attendance defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "Asked how she felt about her mother's harsh criticism, a patient says flatly, 'It's totally fine, I don't care,' while her jaw tightens and her eyes fill. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The mismatch between 'I don't care' and the tightening jaw and welling eyes suggests she does care and is holding the feeling out of awareness, not that the criticism is truly neutral to her; test whether the bodily signs reliably appear on this topic, whether her tone softens when the contradiction is gently named, and whether she can recall other times she insisted she was 'fine' while clearly not.",
        credit: 1.0,
      },
      {
        text: "She probably cares more than she's saying; we could note the mismatch.",
        credit: 0.6,
      },
      {
        text: "She seems a bit tense talking about her mother.",
        credit: 0.3,
      },
      {
        text: "If she says she's fine, then she's fine — we can't claim to know her feelings better than she does.",
        credit: 0,
      },
    ],
    correctAnswer:
      "The mismatch between 'I don't care' and the tightening jaw and welling eyes suggests she does care and is holding the feeling out of awareness, not that the criticism is truly neutral to her; test whether the bodily signs reliably appear on this topic, whether her tone softens when the contradiction is gently named, and whether she can recall other times she insisted she was 'fine' while clearly not.",
    explanation:
      "Top credit reads the body-words contradiction as feeling kept out of awareness and names checks; 'if she says she's fine, she's fine' is the refusal the welling eyes and clenched jaw defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "A few sessions in, a patient tells the therapist, 'You're the only person who has ever truly understood me — you're nothing like everyone else in my life.' Which conclusion best follows?",
    mcOptions: [
      {
        text: "He's probably idealizing the therapist a bit; we could keep an eye on it.",
        credit: 0.6,
      },
      {
        text: "He seems to really appreciate the therapy.",
        credit: 0.3,
      },
      {
        text: "Crowning the therapist as uniquely perfect this early, before being truly known, looks like a template of splitting people into all-good and all-bad being placed onto the therapist; test whether he tends to swing to harsh disappointment when the therapist inevitably falls short, whether his past relationships show the same idealize-then-crash arc, and whether his descriptions of others cluster at the extremes.",
        credit: 1.0,
      },
      {
        text: "His glowing praise proves the therapy is working perfectly and that he is essentially healed.",
        credit: 0,
      },
    ],
    correctAnswer:
      "Crowning the therapist as uniquely perfect this early, before being truly known, looks like a template of splitting people into all-good and all-bad being placed onto the therapist; test whether he tends to swing to harsh disappointment when the therapist inevitably falls short, whether his past relationships show the same idealize-then-crash arc, and whether his descriptions of others cluster at the extremes.",
    explanation:
      "Full credit reads premature idealization as a transference of an all-good/all-bad template and names a predicted crash; 'the praise proves he's healed' is the overreach the early, unearned idealization defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "While describing yet another friendship that ended when he pushed the person away, a patient pauses and says slowly, 'Huh... I think I always do this before they can leave me first.' Which conclusion best follows?",
    mcOptions: [
      {
        text: "He seems to be realizing his friendships keep ending.",
        credit: 0.3,
      },
      {
        text: "He is catching a real pattern in the moment — pushing people away preemptively to avoid being left — which is the kind of emotional insight worth building on, though noticing it once won't change it; test whether the same push-away move shows up across several relationships, whether it appears in how he treats the therapist, and whether catching it in new situations over time begins to loosen it.",
        credit: 1.0,
      },
      {
        text: "He's probably onto something; we could explore that idea.",
        credit: 0.6,
      },
      {
        text: "Now that he has seen the pattern, the problem is solved and the behavior will stop on its own.",
        credit: 0,
      },
    ],
    correctAnswer:
      "He is catching a real pattern in the moment — pushing people away preemptively to avoid being left — which is the kind of emotional insight worth building on, though noticing it once won't change it; test whether the same push-away move shows up across several relationships, whether it appears in how he treats the therapist, and whether catching it in new situations over time begins to loosen it.",
    explanation:
      "Top credit reads a genuine emerging insight while flagging that insight alone won't change behavior, and names tests; 'the problem is solved' is the overreach the principle that insight needs working through defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A patient complains that his new boss 'controls everything and never trusts me' — the exact words he used last month about his father and the month before about a former coach. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Lots of people have controlling bosses, so there's no real pattern to read into here.",
        credit: 0,
      },
      {
        text: "It's probably a recurring theme; we could compare these relationships.",
        credit: 0.6,
      },
      {
        text: "The identical complaint across boss, father, and coach suggests he is carrying a template about controlling authority figures into each new relationship, shaping what he notices and how he reacts; test whether others describe these same people as controlling, whether he behaves in ways that invite control, and whether the theme surfaces toward the therapist as well.",
        credit: 1.0,
      },
      {
        text: "He seems to have problems with people in charge.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The identical complaint across boss, father, and coach suggests he is carrying a template about controlling authority figures into each new relationship, shaping what he notices and how he reacts; test whether others describe these same people as controlling, whether he behaves in ways that invite control, and whether the theme surfaces toward the therapist as well.",
    explanation:
      "Full credit reads the repeated complaint across different figures as a carried template and names disconfirming checks; 'lots of people have controlling bosses' is the dismissal the cross-relationship repetition defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "Asked about his recent divorce, a patient delivers a calm, articulate lecture on 'attachment theory and the statistical realities of modern marriage,' with no visible feeling at all. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He's probably keeping his distance from the feelings; we could gently ask how it felt.",
        credit: 0.6,
      },
      {
        text: "He seems very knowledgeable about relationships.",
        credit: 0.3,
      },
      {
        text: "Some people are just analytical, so his abstract talk tells us nothing about his feelings.",
        credit: 0,
      },
      {
        text: "Retreating into theory and statistics about his own divorce, with the feeling drained out, looks like intellectualizing — using abstraction to keep painful emotion at arm's length; test whether affect breaks through when he's asked for concrete moments rather than concepts, whether the abstraction intensifies exactly on the most painful points, and whether naming it lets a real feeling surface.",
        credit: 1.0,
      },
    ],
    correctAnswer:
      "Retreating into theory and statistics about his own divorce, with the feeling drained out, looks like intellectualizing — using abstraction to keep painful emotion at arm's length; test whether affect breaks through when he's asked for concrete moments rather than concepts, whether the abstraction intensifies exactly on the most painful points, and whether naming it lets a real feeling surface.",
    explanation:
      "Top credit reads the feeling-free abstraction as intellectualization and names a concrete-moment test; 'some people are just analytical' is the dodge the topic-specific draining of affect defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "After an unusually open and moving session, a patient 'completely forgets' the next appointment for the first time ever, then later forgets to pay. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The forgetting clusters right after she let herself be vulnerable, which suggests an out-of-awareness retreat from the closeness the breakthrough created, not simple absentmindedness; test whether such lapses reliably follow emotionally open sessions, whether she feels exposed or embarrassed recalling what she shared, and whether naming the pattern eases the next session rather than offending her.",
        credit: 1.0,
      },
      {
        text: "She's probably reacting to the last session; we could ask what came up.",
        credit: 0.6,
      },
      {
        text: "She seems to have gotten forgetful.",
        credit: 0.3,
      },
      {
        text: "Forgetting the session proves she never cared about therapy and was faking her progress all along.",
        credit: 0,
      },
    ],
    correctAnswer:
      "The forgetting clusters right after she let herself be vulnerable, which suggests an out-of-awareness retreat from the closeness the breakthrough created, not simple absentmindedness; test whether such lapses reliably follow emotionally open sessions, whether she feels exposed or embarrassed recalling what she shared, and whether naming the pattern eases the next session rather than offending her.",
    explanation:
      "Full credit reads the timed lapses as a retreat from closeness and names checks; 'she was faking all along' is the overreach the genuine breakthrough that preceded the lapse defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "When the therapist mentions she'll be away for two weeks, a warm, engaged patient goes flat, says 'fine, whatever,' and spends the rest of the session detached. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He seems put off by the upcoming break.",
        credit: 0.3,
      },
      {
        text: "It's normal to dislike a break in routine, so his reaction means nothing in particular.",
        credit: 0,
      },
      {
        text: "The sudden coldness at news of separation suggests the break activated an old template about being abandoned by people he relies on, defended against by going numb rather than showing hurt; test whether the same shutdown appears in his accounts of past separations, whether the warmth returns when the therapist reliably comes back, and whether gently naming the hurt beneath the flatness lets it surface.",
        credit: 1.0,
      },
      {
        text: "He's probably upset about the break; we could talk about it.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The sudden coldness at news of separation suggests the break activated an old template about being abandoned by people he relies on, defended against by going numb rather than showing hurt; test whether the same shutdown appears in his accounts of past separations, whether the warmth returns when the therapist reliably comes back, and whether gently naming the hurt beneath the flatness lets it surface.",
    explanation:
      "Top credit reads the withdrawal as an abandonment template defended by numbing and names tests; 'it means nothing in particular' is the refusal the sharp shift at the separation cue defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "Without any prompting, a patient says, 'You probably sit there thinking I'm a pathetic, weak mess,' though the therapist has shown only steady attention. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He's probably assuming the therapist judges him; we could check that out.",
        credit: 0.6,
      },
      {
        text: "Attributing harsh contempt to a therapist who has shown none suggests he is projecting his own self-judgment onto her — reading his inner critic as her opinion; test whether the 'you think I'm pathetic' theme tracks moments he feels most ashamed, whether the others supposedly 'judging' him echo his own self-talk, and whether his certainty about her contempt softens when he voices the self-criticism directly.",
        credit: 1.0,
      },
      {
        text: "He seems worried about what the therapist thinks.",
        credit: 0.3,
      },
      {
        text: "We can't ever know what's in his head, so there's no way to interpret what he said.",
        credit: 0,
      },
    ],
    correctAnswer:
      "Attributing harsh contempt to a therapist who has shown none suggests he is projecting his own self-judgment onto her — reading his inner critic as her opinion; test whether the 'you think I'm pathetic' theme tracks moments he feels most ashamed, whether the others supposedly 'judging' him echo his own self-talk, and whether his certainty about her contempt softens when he voices the self-criticism directly.",
    explanation:
      "Full credit reads the unwarranted contempt as projection of his own self-judgment and names checks; 'we can't ever know what's in his head' is the refusal the mismatch between his claim and the therapist's stance defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A patient can explain his anxiety perfectly — its origins, its triggers, the theory behind it — and has done so for a year, yet he still avoids every situation that makes him anxious. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Since he understands his anxiety so well, he must really be cured and is just choosing to avoid things.",
        credit: 0,
      },
      {
        text: "He seems to know a lot about his anxiety.",
        credit: 0.3,
      },
      {
        text: "His understanding probably hasn't changed his behavior; we could try having him face the situations.",
        credit: 0.6,
      },
      {
        text: "His flawless explanation is intellectual insight that hasn't been worked through — understanding alone hasn't reached the situations where it counts, so the avoidance persists; test whether the insight carries any felt anxiety when he describes it, whether he can apply it in a real anxious moment rather than after the fact, and whether repeatedly catching it across new situations slowly shifts the behavior.",
        credit: 1.0,
      },
    ],
    correctAnswer:
      "His flawless explanation is intellectual insight that hasn't been worked through — understanding alone hasn't reached the situations where it counts, so the avoidance persists; test whether the insight carries any felt anxiety when he describes it, whether he can apply it in a real anxious moment rather than after the fact, and whether repeatedly catching it across new situations slowly shifts the behavior.",
    explanation:
      "Top credit distinguishes intellectual insight from worked-through change and names tests; 'he must be cured' is the overreach the year of unchanged avoidance directly defeats.",
  },
];

const hybrid: HomeworkItem[] = [
  {
    itemType: "hybrid",
    prompt:
      "After a long pause following the therapist's question about her marriage, a patient says, 'It's really coming down out there — supposed to storm all week,' and launches into a detailed discussion of the forecast. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The swing to the weather right after a question about her marriage looks like a defensive flight from a loaded topic, not a genuine new interest; test whether these swerves reliably follow marital questions, whether slowing her down returns her to the feeling, and whether the topics she escapes to are consistently safe and impersonal.",
        credit: 1.0,
      },
      {
        text: "She probably didn't want to answer; we could redirect to the marriage.",
        credit: 0.6,
      },
      {
        text: "She seems to have changed the subject to the weather.",
        credit: 0.3,
      },
      {
        text: "People chat about the weather all the time, so this tells us nothing about her marriage.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'defensive flight from the topic' lead from the rival 'she simply finds her marriage boring and would rather chat,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: watch whether the swerves happen specifically right after the hardest marital questions and come with signs of tension like a pause or stiffening — a topic-locked, anxiety-linked escape points to defense, not boredom. My lead is refuted if she drifts off equally on every subject, or if she returns to the marriage easily and calmly when redirected.",
      yieldAnchors: [
        "A long pause follows the marriage question",
        "She switches abruptly to the weather",
        "She elaborates on the safe topic in detail",
      ],
      riskAnchors: [
        "The swerves reliably follow marital questions",
        "Slowing her down returns her to the feeling",
        "The escape topics are consistently impersonal",
      ],
      defeatedBy: [
        "She drifts off topic equally on every subject",
        "She returns to the marriage calmly when redirected",
      ],
    },
    correctAnswer:
      "The swing to the weather right after a question about her marriage looks like a defensive flight from a loaded topic, not a genuine new interest; test whether these swerves reliably follow marital questions, whether slowing her down returns her to the feeling, and whether the topics she escapes to are consistently safe and impersonal.",
    explanation:
      "Full credit reads the timed swerve as defensive avoidance with three checks and a topic-specificity test that names its refutation; 'people chat about weather' is the dismissal the precise timing defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "Describing the day his mother died, a patient smiles and chuckles lightly throughout, as if telling an amusing anecdote. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He seems oddly cheerful about it.",
        credit: 0.3,
      },
      {
        text: "The mismatch between a grief-laden memory and the light laughter suggests the laughter is keeping unbearable feeling at a distance, not that the loss was actually painless to him; test whether the smiling intensifies at the most painful details, whether the feeling breaks through when he slows down and stays with a single moment, and whether he shows the same incongruous lightness around other losses.",
        credit: 1.0,
      },
      {
        text: "Everyone grieves differently, so his laughter is just his style and means nothing.",
        credit: 0,
      },
      {
        text: "He's probably masking sadness; we could point out the laughter.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'laughter is warding off grief' lead from the rival 'he has genuinely made peace with the loss,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: gently slow him at the most painful detail and watch whether the smile falters and feeling leaks through — grief held at bay tends to surface when the defense is paused. My lead is refuted if staying with the moment brings calm warmth rather than strain, suggesting genuine acceptance rather than warded-off pain.",
      yieldAnchors: [
        "He laughs while recounting his mother's death",
        "The lightness pervades a grief-laden story",
        "His manner treats it like an amusing anecdote",
      ],
      riskAnchors: [
        "The smiling intensifies at the most painful details",
        "Feeling breaks through when he slows down",
        "The same incongruous lightness appears around other losses",
      ],
      defeatedBy: [
        "Staying with the moment brings calm acceptance",
        "He shows full grief elsewhere with no laughter",
      ],
    },
    correctAnswer:
      "The mismatch between a grief-laden memory and the light laughter suggests the laughter is keeping unbearable feeling at a distance, not that the loss was actually painless to him; test whether the smiling intensifies at the most painful details, whether the feeling breaks through when he slows down and stays with a single moment, and whether he shows the same incongruous lightness around other losses.",
    explanation:
      "Full credit reads incongruous laughter as a defense against grief with three checks and a slow-down test that names its refutation; 'everyone grieves differently' is the dodge the grief–laughter mismatch defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "The therapist arrives one minute late and apologizes; the patient, normally easygoing, says coldly, 'I knew it — you don't actually care about me,' and stays wounded the whole hour. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He's probably sensitive to feeling neglected; we could explore that.",
        credit: 0.6,
      },
      {
        text: "His reaction proves the therapist did something genuinely unforgivable and has ruined the relationship for good.",
        credit: 0,
      },
      {
        text: "A one-minute lateness producing deep, lasting hurt shows the reaction belongs to an old template about being uncared-for, now transferred onto the therapist, rather than to the trivial event itself; test whether the same outsized hurt appears with others over small slights, whether it echoes how a caregiver once made him feel forgotten, and whether it eases as the therapist proves reliable over time.",
        credit: 1.0,
      },
      {
        text: "He seems upset that the therapist was late.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'old uncared-for template transferred onto the therapist' lead from the rival 'he is simply a stickler for punctuality,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: check whether the hurt is about being unloved rather than about time itself, and whether the same wound shows up over other tiny slights from people he depends on — a relationship theme, not a scheduling one, points to transference. My lead is refuted if his reaction is purely about lost minutes, stays proportional, and never carries the 'you don't care about me' meaning elsewhere.",
      yieldAnchors: [
        "A one-minute lateness triggers deep hurt",
        "He concludes the therapist doesn't care",
        "The wound lasts the whole session",
      ],
      riskAnchors: [
        "The same outsized hurt appears with others over small slights",
        "It echoes a caregiver who made him feel forgotten",
        "It eases as the therapist proves reliable",
      ],
      defeatedBy: [
        "His upset is purely about lost time and stays proportional",
        "The 'you don't care' meaning never appears elsewhere",
      ],
    },
    correctAnswer:
      "A one-minute lateness producing deep, lasting hurt shows the reaction belongs to an old template about being uncared-for, now transferred onto the therapist, rather than to the trivial event itself; test whether the same outsized hurt appears with others over small slights, whether it echoes how a caregiver once made him feel forgotten, and whether it eases as the therapist proves reliable over time.",
    explanation:
      "Full credit reads the disproportion as transference with three checks and a meaning-not-minutes test that names its refutation; 'the therapist ruined it forever' is the overreach the trivial trigger defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "Before sharing almost anything personal, a patient prefaces it with 'this is probably stupid, but...' or 'you'll think this is dumb,' then shares something quite reasonable. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The reflexive self-put-down before speaking looks like a protective move — disarming an expected judgment by beating others to it — rather than a true assessment that her thoughts are stupid; test whether the disclaimers cluster before the most vulnerable disclosures, whether they fade as she feels safer with the therapist, and whether they mirror how a critical figure once responded to her.",
        credit: 1.0,
      },
      {
        text: "She seems to lack confidence in her ideas.",
        credit: 0.3,
      },
      {
        text: "She probably expects to be judged; we could reassure her.",
        credit: 0.6,
      },
      {
        text: "Some people are just modest, so the disclaimers don't mean anything.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'pre-emptive defense against expected judgment' lead from the rival 'she genuinely has a low opinion of her own thinking,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: watch whether the disclaimers spike specifically before the most personal disclosures and ease as trust grows — judgment-anticipating self-protection is topic- and safety-dependent, not a flat trait. My lead is refuted if she disparages her thinking evenly across all topics regardless of vulnerability or rapport, suggesting a stable low self-estimate rather than a defense.",
      yieldAnchors: [
        "She self-deprecates before sharing",
        "What she shares is actually reasonable",
        "The disclaimers precede personal material",
      ],
      riskAnchors: [
        "The disclaimers cluster before vulnerable disclosures",
        "They fade as she feels safer",
        "They mirror a past critical figure",
      ],
      defeatedBy: [
        "She disparages her thinking evenly on every topic",
        "The disclaimers never change with safety or topic",
      ],
    },
    correctAnswer:
      "The reflexive self-put-down before speaking looks like a protective move — disarming an expected judgment by beating others to it — rather than a true assessment that her thoughts are stupid; test whether the disclaimers cluster before the most vulnerable disclosures, whether they fade as she feels safer with the therapist, and whether they mirror how a critical figure once responded to her.",
    explanation:
      "Full credit reads the disclaimer as a defense against anticipated judgment with three checks and a topic-and-safety test that names its refutation; 'some people are just modest' is the dodge the vulnerability-linked timing defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "The morning after a session in which she cried and felt deeply understood for the first time, a patient emails to cancel the next appointment, citing a vague scheduling conflict. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The cancellation proves the breakthrough was fake and she has decided to quit therapy entirely.",
        credit: 0,
      },
      {
        text: "She's probably reacting to the closeness; we could gently raise it.",
        credit: 0.6,
      },
      {
        text: "The cancellation following directly on a moment of rare closeness suggests an out-of-awareness retreat from the vulnerability it stirred, not a real scheduling problem; test whether such pull-backs reliably follow her most open sessions, whether she feels exposed recalling what she shared, and whether the urge to withdraw eases once the fear of being close is named.",
        credit: 1.0,
      },
      {
        text: "She seems to have a scheduling conflict.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'retreat from vulnerability' lead from the rival 'she genuinely had a scheduling conflict,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: notice whether cancellations specifically follow her most open, emotional sessions and whether she sounds exposed or uneasy about what she revealed — a pattern tied to closeness points to defensive retreat. My lead is refuted if cancellations fall randomly with respect to session content and she returns eager and untroubled by the previous disclosure.",
      yieldAnchors: [
        "She cancels right after a breakthrough",
        "The session involved rare closeness and tears",
        "The stated reason is vague",
      ],
      riskAnchors: [
        "Pull-backs reliably follow her most open sessions",
        "She feels exposed recalling what she shared",
        "The urge eases once the fear is named",
      ],
      defeatedBy: [
        "Cancellations fall randomly relative to session content",
        "She returns eager and untroubled by the disclosure",
      ],
    },
    correctAnswer:
      "The cancellation following directly on a moment of rare closeness suggests an out-of-awareness retreat from the vulnerability it stirred, not a real scheduling problem; test whether such pull-backs reliably follow her most open sessions, whether she feels exposed recalling what she shared, and whether the urge to withdraw eases once the fear of being close is named.",
    explanation:
      "Full credit reads the timed cancellation as a retreat from closeness with three checks and a session-content test that names its refutation; 'the breakthrough was fake' is the overreach the genuine closeness that preceded it defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A patient describes intense distrust of a new boss she barely knows, using almost the same words and feelings she once used about an ex who betrayed her. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She seems wary of her new boss.",
        credit: 0.3,
      },
      {
        text: "It's probably connected to her ex; we could compare the two.",
        credit: 0.6,
      },
      {
        text: "Importing the same distrust and language from a betraying ex onto a barely-known boss suggests she is replaying an old relationship template rather than responding to who this boss actually is; test whether coworkers experience the boss as untrustworthy, whether her wariness fits the ex's behavior better than the boss's, and whether it softens as the boss proves reliable over time.",
        credit: 1.0,
      },
      {
        text: "Bosses and exes can both be untrustworthy, so there's nothing here to interpret.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'old betrayal template replayed on the boss' lead from the rival 'the boss really is untrustworthy,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: compare her read of the boss against how coworkers experience him and against the ex's actual behavior — a fit to the past figure rather than the present one points to transference. My lead is refuted if independent observers also find the boss untrustworthy and his conduct, not her ex's, accounts for her wariness.",
      yieldAnchors: [
        "She barely knows the new boss",
        "Her distrust mirrors feelings toward a betraying ex",
        "She uses nearly the same words",
      ],
      riskAnchors: [
        "Coworkers don't experience the boss as untrustworthy",
        "Her wariness fits the ex better than the boss",
        "It softens as the boss proves reliable",
      ],
      defeatedBy: [
        "Independent observers also find the boss untrustworthy",
        "His actual conduct fully explains her wariness",
      ],
    },
    correctAnswer:
      "Importing the same distrust and language from a betraying ex onto a barely-known boss suggests she is replaying an old relationship template rather than responding to who this boss actually is; test whether coworkers experience the boss as untrustworthy, whether her wariness fits the ex's behavior better than the boss's, and whether it softens as the boss proves reliable over time.",
    explanation:
      "Full credit reads the imported distrust as transference with three checks and an observer-comparison test that names its refutation; 'both can be untrustworthy' is the dismissal the barely-known boss and borrowed language defeat.",
  },
  {
    itemType: "hybrid",
    prompt:
      "Describing his close bond with his brother, a patient says, 'I really h— love my brother, we're so close,' catching what was nearly 'hate,' and laughs it off. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He probably has mixed feelings; we could ask more about his brother.",
        credit: 0.6,
      },
      {
        text: "The near-slip and quick cover suggest feelings toward his brother are more mixed than the 'so close' story admits, with some resentment held out of awareness; test whether tension shows up in concrete stories about the brother despite the warm summary, whether the closeness claim is strongest right when conflict is implied, and whether gently allowing for both feelings brings relief rather than denial.",
        credit: 1.0,
      },
      {
        text: "It was just a verbal stumble, so reading anything into it is unwarranted.",
        credit: 0,
      },
      {
        text: "He seems to have misspoken about his brother.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'unacknowledged resentment alongside love' lead from the rival 'it was a meaningless slip of the tongue,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: listen for whether concrete stories about the brother carry friction even as the summary stays glowing — a gap between detailed events and the rosy headline points to split-off resentment. My lead is refuted if his specific anecdotes are consistently warm with no trace of conflict and the slip never connects to any real tension.",
      yieldAnchors: [
        "He nearly says 'hate' about his brother",
        "He corrects it to 'love'",
        "He insists they are very close",
      ],
      riskAnchors: [
        "Concrete stories reveal tension despite the warm summary",
        "The closeness claim peaks when conflict is implied",
        "Allowing both feelings brings relief",
      ],
      defeatedBy: [
        "His specific stories are consistently conflict-free",
        "The slip connects to no real tension at all",
      ],
    },
    correctAnswer:
      "The near-slip and quick cover suggest feelings toward his brother are more mixed than the 'so close' story admits, with some resentment held out of awareness; test whether tension shows up in concrete stories about the brother despite the warm summary, whether the closeness claim is strongest right when conflict is implied, and whether gently allowing for both feelings brings relief rather than denial.",
    explanation:
      "Full credit reads the near-slip as split-off resentment with three checks and a stories-versus-summary test that names its refutation; 'just a stumble' is the dismissal the near-'hate' beneath the glowing summary defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A patient agrees with every interpretation the therapist offers, thanks her warmly each time, and never once pushes back, even when an interpretation clearly doesn't fit. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He seems very agreeable in session.",
        credit: 0.3,
      },
      {
        text: "His agreeableness proves the therapy is going perfectly and he has no further conflicts to address.",
        credit: 0,
      },
      {
        text: "Reflexive agreement even with interpretations that miss suggests a compliance pattern — keeping the relationship safe by never displeasing the therapist — likely a template from relationships where disagreement felt dangerous; test whether he can voice a disagreement when explicitly invited, whether the same please-the-powerful stance appears with bosses and partners, and whether his real reactions emerge once it's safe to differ.",
        credit: 1.0,
      },
      {
        text: "He's probably trying to please the therapist; we could invite disagreement.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'compliance to keep the relationship safe' lead from the rival 'the interpretations simply happen to be accurate,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: offer a deliberately off-target interpretation and see whether he agrees with that too — agreement with something that clearly doesn't fit reveals compliance rather than accuracy. My lead is refuted if he readily corrects the wrong interpretation and disagrees freely, showing his assent is genuine rather than defensive.",
      yieldAnchors: [
        "He agrees with every interpretation",
        "He thanks the therapist each time",
        "He accepts even interpretations that don't fit",
      ],
      riskAnchors: [
        "He can disagree when explicitly invited",
        "The please-the-powerful stance appears elsewhere",
        "Real reactions emerge once it's safe to differ",
      ],
      defeatedBy: [
        "He readily corrects a deliberately wrong interpretation",
        "He disagrees freely and easily",
      ],
    },
    correctAnswer:
      "Reflexive agreement even with interpretations that miss suggests a compliance pattern — keeping the relationship safe by never displeasing the therapist — likely a template from relationships where disagreement felt dangerous; test whether he can voice a disagreement when explicitly invited, whether the same please-the-powerful stance appears with bosses and partners, and whether his real reactions emerge once it's safe to differ.",
    explanation:
      "Full credit reads total agreement as a compliance defense with three checks and a deliberately-wrong-interpretation test that names its refutation; 'therapy is going perfectly' is the overreach the agreement with interpretations that miss defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "For months a patient has eloquently described how his fear of conflict comes from his volatile childhood home, yet he still says yes to everything and never sets a limit with anyone. Which conclusion best follows?",
    mcOptions: [
      {
        text: "His understanding probably hasn't translated to action; we could practice setting limits.",
        credit: 0.6,
      },
      {
        text: "He seems to understand where his fear comes from.",
        credit: 0.3,
      },
      {
        text: "His clear account is intellectual insight that hasn't been worked through into the situations that matter, which is why the yes-to-everything behavior persists; test whether the insight carries real anxiety when he describes it, whether he can hold a limit in an actual charged moment rather than only explain it afterward, and whether repeatedly catching the pattern in fresh situations gradually changes what he does.",
        credit: 1.0,
      },
      {
        text: "Because he understands the root of his fear, the problem is essentially resolved.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'insight not yet worked through' lead from the rival 'he has genuinely changed and just hasn't had the chance to show it,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: look for whether he can actually set one small limit in a real interaction this week, not just explain why he should — worked-through change shows up as new behavior in fresh situations. My lead is refuted if he begins holding limits in real moments and the new behavior generalizes, showing the understanding has become more than intellectual.",
      yieldAnchors: [
        "He explains his fear's origins clearly",
        "He has done so for months",
        "He still never sets a limit",
      ],
      riskAnchors: [
        "The insight carries real anxiety when described",
        "He can hold a limit in a charged moment",
        "Catching the pattern in fresh situations changes behavior",
      ],
      defeatedBy: [
        "He starts setting limits in real interactions",
        "The new behavior generalizes across situations",
      ],
    },
    correctAnswer:
      "His clear account is intellectual insight that hasn't been worked through into the situations that matter, which is why the yes-to-everything behavior persists; test whether the insight carries real anxiety when he describes it, whether he can hold a limit in an actual charged moment rather than only explain it afterward, and whether repeatedly catching the pattern in fresh situations gradually changes what he does.",
    explanation:
      "Full credit distinguishes intellectual from worked-through insight with three checks and a real-limit test that names its refutation; 'the problem is essentially resolved' is the overreach the unchanged yes-to-everything behavior defeats.",
  },
];

const written: HomeworkItem[] = [
  {
    itemType: "written",
    prompt:
      "Over one session, a patient is warm and open until the therapist mentions that, given her progress, they might begin planning for the end of therapy in a few months; from that moment she becomes guarded, gives one-word answers, and says at the door, 'I guess I'm just a case to wrap up.' In one paragraph, propose the strongest conclusion about what is happening dynamically and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that the mention of ending activated an old template about being discarded once she's no longer useful, and her sudden guardedness and 'just a case to wrap up' remark are that abandonment fear showing up as transference toward the therapist rather than a fair read of what was said. This is a strong claim because it predicts checkable consequences: the same fear of being dropped should appear in how past relationships ended for her; the warmth should return once the therapist clarifies that ending is collaborative and gradual, not a dismissal; and similar withdrawal should follow other separation cues like breaks or vacations. I would test it by tracing how earlier relationships ended and whether she felt discarded, by watching whether naming the abandonment fear directly restores her openness, and by checking whether separation cues reliably trigger the same cold pull-back — and if instead she stays warm about ending and the remark was a one-off, the abandonment reading is wrong.",
      yieldAnchors: [
        "She is warm until ending is mentioned",
        "She becomes guarded and terse afterward",
        "She says she's 'just a case to wrap up'",
      ],
      riskAnchors: [
        "The same discard fear appears in how past relationships ended",
        "Warmth returns when ending is framed as collaborative",
        "Other separation cues trigger the same withdrawal",
      ],
      defeatedBy: [
        "She stays warm and untroubled about ending",
        "The remark was a one-off unconnected to any pattern",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that the mention of ending activated an old template about being discarded once she's no longer useful, and her sudden guardedness and 'just a case to wrap up' remark are that abandonment fear showing up as transference toward the therapist rather than a fair read of what was said. This is a strong claim because it predicts checkable consequences: the same fear of being dropped should appear in how past relationships ended for her; the warmth should return once the therapist clarifies that ending is collaborative and gradual, not a dismissal; and similar withdrawal should follow other separation cues like breaks or vacations. I would test it by tracing how earlier relationships ended and whether she felt discarded, by watching whether naming the abandonment fear directly restores her openness, and by checking whether separation cues reliably trigger the same cold pull-back — and if instead she stays warm about ending and the remark was a one-off, the abandonment reading is wrong.",
    explanation:
      "The dodge — 'people dislike change, so her mood means nothing' — ignores the precise trigger; top credit commits to an abandonment template replayed as transference and names a separation-cue test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A patient has described escalating fights with his partner and his boss, and today he snaps at the therapist over a minor scheduling question, then looks surprised at himself. In one paragraph, drawing on everything you've learned, propose the strongest integrated conclusion about what is happening across these relationships and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that a single relationship pattern — reading others as about to control or criticize him and striking first to defend himself — is being replayed across his partner, his boss, and now the therapist, which is why a minor question drew a snap that surprised even him. This is a strong claim because it predicts checkable consequences: the same preemptive hostility should appear specifically when he feels controlled or judged, not at random; the conflicts across these very different people should share that one trigger rather than reflecting three unrelated bad relationships; and the pattern should match how a controlling or critical figure once treated him. I would test it by mapping what immediately preceded each blow-up to see whether the felt-control trigger recurs, by checking whether neutral observers find his partner and boss as hostile as he does, and by watching whether naming the pattern in the room — where it just happened live — helps him catch it next time; if the fights share no common trigger and others confirm genuinely hostile partners and bosses, the single-template reading fails.",
      yieldAnchors: [
        "Escalating fights with partner and boss",
        "He snaps at the therapist over something minor",
        "He looks surprised at his own reaction",
      ],
      riskAnchors: [
        "The hostility appears specifically when he feels controlled or judged",
        "The conflicts share one trigger across different people",
        "The pattern matches a past controlling figure",
      ],
      defeatedBy: [
        "The conflicts share no common trigger",
        "Observers confirm genuinely hostile partners and bosses",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that a single relationship pattern — reading others as about to control or criticize him and striking first to defend himself — is being replayed across his partner, his boss, and now the therapist, which is why a minor question drew a snap that surprised even him. This is a strong claim because it predicts checkable consequences: the same preemptive hostility should appear specifically when he feels controlled or judged, not at random; the conflicts across these very different people should share that one trigger rather than reflecting three unrelated bad relationships; and the pattern should match how a controlling or critical figure once treated him. I would test it by mapping what immediately preceded each blow-up to see whether the felt-control trigger recurs, by checking whether neutral observers find his partner and boss as hostile as he does, and by watching whether naming the pattern in the room — where it just happened live — helps him catch it next time; if the fights share no common trigger and others confirm genuinely hostile partners and bosses, the single-template reading fails.",
    explanation:
      "The dodge — 'he just has several difficult people in his life' — misses the shared trigger now visible in the room; top credit commits to one replayed template and names a same-trigger test, including the live here-and-now check, that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "Three weeks before a planned termination date, a patient who has struggled for a year suddenly announces that everything is completely fixed, all symptoms gone, and there's really no need for the remaining sessions. In one paragraph, propose the strongest conclusion about what is happening and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that the abrupt, total 'cure' arriving just before termination is more likely a defensive flight from the feelings stirred by ending — a way to leave on his own terms before he can be left — than a genuine, sudden resolution of a year-long struggle. This is a strong claim because it predicts checkable consequences: the timing should track the approach of ending rather than any real-world improvement; the gains should be claimed in sweeping all-or-nothing terms rather than shown in concrete handled situations; and the underlying difficulty should resurface if the ending is slowed down or the feelings about separating are named. I would test it by checking whether his daily life actually shows the change or only his declarations do, by asking for specific recent situations where the old problem would have flared and didn't, and by watching whether gently raising the feelings about ending deflates the sudden cure; if his behavior in real situations genuinely confirms durable change, the flight-into-health reading is wrong and the improvement is real.",
      yieldAnchors: [
        "A sudden total cure is announced",
        "It arrives three weeks before termination",
        "A year-long struggle is declared completely fixed",
      ],
      riskAnchors: [
        "The timing tracks the approach of ending",
        "Gains are sweeping rather than shown in concrete situations",
        "The difficulty resurfaces if ending is slowed",
      ],
      defeatedBy: [
        "Real-life behavior confirms durable change",
        "Specific recent situations show the problem genuinely resolved",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that the abrupt, total 'cure' arriving just before termination is more likely a defensive flight from the feelings stirred by ending — a way to leave on his own terms before he can be left — than a genuine, sudden resolution of a year-long struggle. This is a strong claim because it predicts checkable consequences: the timing should track the approach of ending rather than any real-world improvement; the gains should be claimed in sweeping all-or-nothing terms rather than shown in concrete handled situations; and the underlying difficulty should resurface if the ending is slowed down or the feelings about separating are named. I would test it by checking whether his daily life actually shows the change or only his declarations do, by asking for specific recent situations where the old problem would have flared and didn't, and by watching whether gently raising the feelings about ending deflates the sudden cure; if his behavior in real situations genuinely confirms durable change, the flight-into-health reading is wrong and the improvement is real.",
    explanation:
      "The dodge — taking the announcement at face value as proof of cure — ignores the suspicious timing; top credit commits to a defensive flight from the feelings of ending and names a concrete-behavior test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A patient mentions a recurring dream in which he is locked out of his childhood home in the cold while his family eats dinner inside, then immediately says, 'but dreams are just random nonsense, ignore it.' In one paragraph, propose the strongest conclusion about what the dream and his dismissal of it suggest, and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that the recurring image of being shut out in the cold while the family is warm inside likely expresses a felt theme of exclusion and not-belonging in his family, and that his quick 'it's just nonsense' is itself a defensive move to wave off a feeling that touched something real. This is a strong claim because it predicts checkable consequences: the exclusion theme should echo in his waking accounts of family life, not just the dream; the dismissal should be strongest exactly when the material gets closest to that painful feeling; and exploring the dream rather than dropping it should bring associations that converge on belonging rather than scatter randomly. I would test it by asking what the locked-out feeling reminds him of in real family memories, by noticing whether his urge to dismiss spikes as the feeling sharpens, and by following his free associations to see whether they cluster around exclusion; if the dream sparks no related feelings or memories and his associations go nowhere, the exclusion reading is unsupported.",
      yieldAnchors: [
        "A recurring dream of being locked out in the cold",
        "His family eats warmly inside",
        "He immediately dismisses the dream as random",
      ],
      riskAnchors: [
        "The exclusion theme echoes in waking family accounts",
        "The dismissal peaks as the feeling sharpens",
        "Associations converge on belonging rather than scatter",
      ],
      defeatedBy: [
        "The dream sparks no related feelings or memories",
        "His associations lead nowhere in particular",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that the recurring image of being shut out in the cold while the family is warm inside likely expresses a felt theme of exclusion and not-belonging in his family, and that his quick 'it's just nonsense' is itself a defensive move to wave off a feeling that touched something real. This is a strong claim because it predicts checkable consequences: the exclusion theme should echo in his waking accounts of family life, not just the dream; the dismissal should be strongest exactly when the material gets closest to that painful feeling; and exploring the dream rather than dropping it should bring associations that converge on belonging rather than scatter randomly. I would test it by asking what the locked-out feeling reminds him of in real family memories, by noticing whether his urge to dismiss spikes as the feeling sharpens, and by following his free associations to see whether they cluster around exclusion; if the dream sparks no related feelings or memories and his associations go nowhere, the exclusion reading is unsupported.",
    explanation:
      "The dodge — agreeing the dream is meaningless noise — adopts the patient's own defense; top credit commits to a specific exclusion theme plus a defensive dismissal and names an association test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A patient who for a year has met every emotional moment with cool analysis unexpectedly stops mid-sentence one day, his eyes fill, and he says quietly, 'I think I've been talking about this so I don't have to feel it.' In one paragraph, propose the strongest conclusion about what just happened and whether real change is underway, and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that the patient has just moved from intellectual insight to a moment of emotional insight — feeling the very defense he had until now only described — which is the kind of lived recognition that can begin real change, though one moment is not yet change worked through. This is a strong claim because it predicts checkable consequences: if it's genuine, the feeling should start surfacing in other sessions and not just this one; he should begin catching the intellectualizing in the act rather than only naming it after; and the shift should show up as new behavior outside the room, like letting himself feel something with the people in his life. I would test it by watching whether affect recurs across future sessions, whether he interrupts his own analyzing in real time, and whether emotional openness appears in his outside relationships; if he returns next week to pure cool analysis with no carryover, the moment was a flash rather than the start of worked-through change.",
      yieldAnchors: [
        "A year of meeting feeling with cool analysis",
        "He stops mid-sentence and his eyes fill",
        "He says he talks so he doesn't have to feel",
      ],
      riskAnchors: [
        "The feeling surfaces in other sessions too",
        "He catches the intellectualizing in real time",
        "Emotional openness appears outside the room",
      ],
      defeatedBy: [
        "He returns next week to pure analysis with no carryover",
        "The moment leaves no trace in later behavior",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that the patient has just moved from intellectual insight to a moment of emotional insight — feeling the very defense he had until now only described — which is the kind of lived recognition that can begin real change, though one moment is not yet change worked through. This is a strong claim because it predicts checkable consequences: if it's genuine, the feeling should start surfacing in other sessions and not just this one; he should begin catching the intellectualizing in the act rather than only naming it after; and the shift should show up as new behavior outside the room, like letting himself feel something with the people in his life. I would test it by watching whether affect recurs across future sessions, whether he interrupts his own analyzing in real time, and whether emotional openness appears in his outside relationships; if he returns next week to pure cool analysis with no carryover, the moment was a flash rather than the start of worked-through change.",
    explanation:
      "The dodge — calling it a one-off blip that means nothing — dismisses a real shift; top credit commits to a move from intellectual to emotional insight and names a carryover test that could refute whether change is truly underway.",
  },
];

export const section: SectionContent = {
  slug: "session-start-to-finish",
  title: "A Session, Start to Finish",
  weekNumber: 1,
  blurb:
    "A capstone that follows a single therapy session moment by moment, weaving meaning beneath the surface, unconscious patterns, defenses, transference, the therapeutic relationship, and working through into one integrated way of reading the room.",
  lectureTitle:
    "1.8 Putting It Together: a session, start to finish",
  body: `# A Session, Start to Finish

By now you have a toolkit: symptoms and behavior carry meaning, much of the mind runs on out-of-awareness patterns, defenses protect us at a cost, we replay old relationships through transference, the therapeutic relationship is itself the engine of change, and lasting change comes from working through rather than insight alone. This final section puts the whole kit to work in the place it actually matters — inside a single session, moment by moment. A real session doesn't announce its themes. It offers small, easy-to-miss events: a slip, a pause, a joke, a flash of irritation, a sudden "I'm completely fine." The craft is reading those moments as they happen and committing to the strongest interpretation the material warrants — while naming the cheapest observation that could prove you wrong.

## A session is made of moments

Nothing important in therapy arrives labeled. It comes as a hesitation before a name, a topic dropped the instant it gets warm, a laugh in the wrong place. These micro-events are the data. Taken one at a time they look trivial; read in context they point somewhere. The discipline is the same one running through this whole course: treat the observable moment as a clue to a hidden dynamic, then ask what else should be true if your reading is right. A single slip proves little. But a slip, plus a body that tightens on the same topic, plus a pattern that repeats across sessions, builds a case. You commit to the best account of the moment and stay ready to revise it when the next moment arrives.

## Reading the surface for meaning

The first move is the oldest one in the course: assume the surface has meaning. When a patient swerves from his divorce to the weather, the swerve is not noise — its timing tells you it is doing something. When someone insists "I don't care" while her eyes fill, the mismatch is the message. Reading meaning is not mind-reading or wild guessing; it is noticing that an event is patterned and tied to a feeling, and asking what it accomplishes. The strongest interpretation binds several observations at once — the timing, the body, the recurrence — rather than seizing on one detail. And it always carries a test: if this swerve is a flight from pain, it should happen on the painful topics specifically and ease when she is slowed down.

## Defenses in real time

Much of what you see in session is defense at work: the joke that arrives exactly when loneliness comes up, the lecture on attachment theory that drains all feeling from a divorce, the "this is probably stupid, but..." that disarms judgment before it can land. Spotting a defense means reading both halves — the painful feeling being kept at bay and the cost of keeping it there. The check is concrete: a defense should intensify right at the most threatening material and loosen when it is gently named. If the supposed defense shows up evenly everywhere, or vanishes the moment you point to it with no feeling underneath, you have misread it. Naming a defense too hard or too early just invites a new one, so the work is patient.

## Transference in the room

The richest moments are often aimed at the therapist. A one-minute lateness that produces lasting hurt, sudden coldness at news of a vacation, certainty that the therapist secretly finds the patient pathetic — these reactions are too big or too sourceless to belong to the present, which is the signature of transference. An old relationship template is being replayed live, where both people can watch it happen. That makes the room a uniquely good laboratory: you can test whether the same reaction appears with bosses and partners, whether it fits an old caregiver better than the present therapist, and whether it cools as the therapist proves reliable. The point isn't to take the reaction personally or to deny it, but to read it as information about the patterns the patient carries everywhere.

## The relationship as the instrument

None of this works without the relationship. The alliance is not the backdrop to the technique; it is the main instrument. A patient who feels safe will eventually let the defense down, risk a disagreement, show the transference instead of hiding it. Ruptures — the snap, the cold withdrawal, the cancelled session after a breakthrough — are not failures but opportunities, because repairing them is often where the real change happens. When a patient retreats right after a moment of closeness, the relationship itself has become the thing to work on. Tracking the bond, noticing when it frays, and mending it is not separate from the deep work; much of the time, it is the deep work.

## From insight to working through

Finally, beware the seductive moment of understanding. A patient can explain his anxiety flawlessly for a year and still avoid everything that frightens him; a sudden total "cure" three weeks before termination is more likely a flight from ending than a real one. Insight you can recite is cheap. Insight that carries feeling, gets caught in the act, survives stress, and shows up as new behavior in fresh situations is the real thing — and it arrives slowly, through working through. So when a patient who always intellectualizes suddenly tears up and says "I've been talking so I don't have to feel," you don't declare victory; you ask whether the feeling carries over to next week and into his life. Change is tested by what recurs, not by a single good moment.

## In the real world

Picture one session. A patient jokes his way past his loneliness, then snaps when you start two minutes late, then, near the end, says he is "totally fine" with his mother's criticism while his jaw clenches. The dodge is to call all this "just a bad day" that means nothing — true-sounding and useless. The integrated move reads the moments together: a defense (the joke) protecting against a feeling, a transference reaction (the snap) replaying an old template of being uncared-for, and a contradiction (the calm words, the clenched jaw) marking feeling held out of awareness. Each reading commits to a specific dynamic and names a cheap check — does the joke track painful topics, does the snap appear with others over small slights, does the body keep betraying the "I'm fine"? That is the whole course in a single hour: not a shrug at how mysterious people are, but a disciplined, testable reading of the patterns running just beneath the surface.`,
  homework: {
    mcq,
    hybrid,
    written,
  },
};
