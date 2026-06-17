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
      "A patient's partner doesn't reply to a text for three hours. By the time he calls, she has cut herself and packed a bag, certain — with no doubt at all — that he was leaving her; it turns out his phone had died at work. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Under the stress of feeling abandoned her mentalizing likely collapsed into psychic equivalence — the thought 'he is leaving me' was experienced not as a fear to be checked but as literal, certain reality, which is why no alternative such as a dead battery or a busy shift could even occur to her; test whether the certainty was total and admitted no other reading, whether it spiked precisely with the attachment threat, and whether the conviction softens once her arousal drops or she is genuinely invited to wonder what else the silence could mean.",
        credit: 1.0,
      },
      {
        text: "She might have been in a non-mentalizing state where the thought felt like fact; we could look at what set it off.",
        credit: 0.6,
      },
      {
        text: "She gets very upset and certain when she isn't answered.",
        credit: 0.3,
      },
      {
        text: "You can never really know what someone else is thinking, so there's no way to say what the silence meant.",
        credit: 0,
      },
    ],
    correctAnswer:
      "Under the stress of feeling abandoned her mentalizing likely collapsed into psychic equivalence — the thought 'he is leaving me' was experienced not as a fear to be checked but as literal, certain reality, which is why no alternative such as a dead battery or a busy shift could even occur to her; test whether the certainty was total and admitted no other reading, whether it spiked precisely with the attachment threat, and whether the conviction softens once her arousal drops or she is genuinely invited to wonder what else the silence could mean.",
    explanation:
      "Top credit names psychic equivalence under attachment stress and a does-it-soften-when-arousal-drops test; 'you can never know what someone is thinking' is the nihilistic refusal the total, threat-triggered certainty defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A patient tells her therapist that his caring words mean nothing; the only thing that would prove he cares is if he gives her his personal cell number and answers at any hour. Warmth, reliability, and remembering details of her life she waves away as worthless. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She wants concrete proof that her therapist cares.",
        credit: 0.3,
      },
      {
        text: "She is likely operating in teleological mode — under attachment stress only a physical action counts as evidence of a mental state, so 'he cares' can be believed only if it is cashed out in a concrete act like the cell number, while intentions and words register as nothing; test whether only physical demonstrations ever satisfy her while words and reliability don't, whether the demand for proof escalates as she feels less secure, and whether her ability to credit non-physical care returns when her arousal settles.",
        credit: 1.0,
      },
      {
        text: "She may only count physical gestures as proof of care; we could notice what she dismisses.",
        credit: 0.6,
      },
      {
        text: "Some people just need grand gestures, so there's nothing more to read into it.",
        credit: 0,
      },
    ],
    correctAnswer:
      "She is likely operating in teleological mode — under attachment stress only a physical action counts as evidence of a mental state, so 'he cares' can be believed only if it is cashed out in a concrete act like the cell number, while intentions and words register as nothing; test whether only physical demonstrations ever satisfy her while words and reliability don't, whether the demand for proof escalates as she feels less secure, and whether her ability to credit non-physical care returns when her arousal settles.",
    explanation:
      "Top credit names teleological mode and an only-physical-proof test; 'some people just need grand gestures' is the dodge the dismissal-of-all-words pattern defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "In session a patient discusses her 'fear of abandonment' and 'splitting' fluently, using the right terms and analyzing her childhood with apparent insight — yet her tone is flat, nothing she says seems to touch her, and her life outside is unchanged month after month. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Talking about feelings is what therapy is, so the fluent insight means she's doing fine.",
        credit: 0,
      },
      {
        text: "This is likely pretend mode — talk about mental states that is decoupled from any real affect, so the words about feelings float free of the feelings themselves and nothing changes; the fluent insight is a defense against contact with the experience rather than evidence of it; test whether the talk ever connects to felt emotion in the room, whether anything she 'understands' alters her behavior outside, and whether genuinely slowing her down to feel one moment breaks the smooth, untouched flow.",
        credit: 1.0,
      },
      {
        text: "Her insight might be disconnected from real feeling; we could check whether it changes anything.",
        credit: 0.6,
      },
      {
        text: "She talks about her feelings without seeming to feel them.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "This is likely pretend mode — talk about mental states that is decoupled from any real affect, so the words about feelings float free of the feelings themselves and nothing changes; the fluent insight is a defense against contact with the experience rather than evidence of it; test whether the talk ever connects to felt emotion in the room, whether anything she 'understands' alters her behavior outside, and whether genuinely slowing her down to feel one moment breaks the smooth, untouched flow.",
    explanation:
      "Top credit names pretend mode (insight detached from affect) and a does-it-touch-feeling-or-change-behavior test; 'talking about feelings means she's doing fine' is the dodge the flat, unchanged pattern defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "Mid-argument a patient is utterly certain her friend 'despises' her and won't hear otherwise. Twenty minutes later, calmer, she spontaneously says, 'Maybe she was just stressed about her mom — I do that when I'm overwhelmed.' Which conclusion best follows?",
    mcOptions: [
      {
        text: "Her mentalizing likely went offline at peak arousal and came back as she settled — the certainty about being despised was a non-mentalizing state driven by the threat, and the return of curiosity about her friend's mind (and her own parallel) is mentalizing coming back online; test whether her capacity to imagine alternatives reliably tracks her arousal level, whether the same softening recurs each time she calms, and whether deliberately lowering arousal in the moment restores her ability to consider other readings.",
        credit: 1.0,
      },
      {
        text: "She calmed down and then saw it differently.",
        credit: 0.3,
      },
      {
        text: "Her certainty may depend on how worked up she is; we could watch the pattern.",
        credit: 0.6,
      },
      {
        text: "People say all kinds of things when they're upset, so you can't read anything into either version.",
        credit: 0,
      },
    ],
    correctAnswer:
      "Her mentalizing likely went offline at peak arousal and came back as she settled — the certainty about being despised was a non-mentalizing state driven by the threat, and the return of curiosity about her friend's mind (and her own parallel) is mentalizing coming back online; test whether her capacity to imagine alternatives reliably tracks her arousal level, whether the same softening recurs each time she calms, and whether deliberately lowering arousal in the moment restores her ability to consider other readings.",
    explanation:
      "Top credit reads mentalizing collapsing under arousal and returning, and names an arousal-tracks-curiosity test; 'you can't read anything into it' is the dodge the reliable calm-brings-perspective pattern defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "Walking into a meeting, a patient sees two colleagues stop talking and glance at her. She is instantly, unshakably sure they were mocking her and that everyone in the office secretly finds her repulsive — a conviction that lasts the whole day. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She might be reading the glance as proof of contempt; we could explore how sure she felt.",
        credit: 0.6,
      },
      {
        text: "Under stress her mind likely slipped into psychic equivalence — the thought 'they're mocking me' is felt as plain fact rather than one possible reading, so an ambiguous glance becomes certain proof and no benign explanation can get a foothold; test whether the certainty admits zero alternatives, whether it tracks moments she already feels exposed or shaky, and whether it loosens when she is calmer or genuinely invited to imagine what else the pause could have meant.",
        credit: 1.0,
      },
      {
        text: "She felt sure the colleagues were mocking her.",
        credit: 0.3,
      },
      {
        text: "Nobody can know what other people are really thinking, so there's nothing to conclude here.",
        credit: 0,
      },
    ],
    correctAnswer:
      "Under stress her mind likely slipped into psychic equivalence — the thought 'they're mocking me' is felt as plain fact rather than one possible reading, so an ambiguous glance becomes certain proof and no benign explanation can get a foothold; test whether the certainty admits zero alternatives, whether it tracks moments she already feels exposed or shaky, and whether it loosens when she is calmer or genuinely invited to imagine what else the pause could have meant.",
    explanation:
      "Top credit names psychic equivalence turning ambiguity into certainty and a does-it-loosen-when-calm test; 'nobody can know what others think' is the refusal the zero-alternatives certainty defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A patient says that when her inner pain becomes unbearable and no one believes how bad it is, cutting is the only thing that makes the pain 'real and visible' — once there's a wound to point to, she feels briefly understood. Which conclusion best follows?",
    mcOptions: [
      {
        text: "This likely reflects teleological mode — when she cannot trust that an internal state can be known or believed without a physical sign, a visible wound becomes the only proof that her pain exists and is recognized, so the self-harm functions to make an unbearable feeling concrete; test whether the urge spikes specifically when she feels disbelieved or unseen, whether being genuinely felt and understood in words reduces the need for a physical sign, and whether the function eases as she becomes able to trust that an inner state can register without proof.",
        credit: 1.0,
      },
      {
        text: "The cutting might be a way to make her pain physically real; we could track when the urge comes.",
        credit: 0.6,
      },
      {
        text: "She cuts when her pain feels unbearable and unseen.",
        credit: 0.3,
      },
      {
        text: "She's just doing it for attention, plain and simple.",
        credit: 0,
      },
    ],
    correctAnswer:
      "This likely reflects teleological mode — when she cannot trust that an internal state can be known or believed without a physical sign, a visible wound becomes the only proof that her pain exists and is recognized, so the self-harm functions to make an unbearable feeling concrete; test whether the urge spikes specifically when she feels disbelieved or unseen, whether being genuinely felt and understood in words reduces the need for a physical sign, and whether the function eases as she becomes able to trust that an inner state can register without proof.",
    explanation:
      "Top credit reads self-harm as teleological proof of inner pain and a does-being-understood-reduce-it test; 'just for attention' is the overreach the privately-driven, relief-when-believed detail defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "When a patient declares flatly that the therapist 'obviously regrets ever taking me on,' the therapist resists defending himself and instead says slowly, 'I genuinely don't know what gave you that — can we slow down and look at the moment it came over you?' The patient pauses, and her certainty visibly loosens. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Slowing down seemed to help her feel less sure.",
        credit: 0.3,
      },
      {
        text: "The therapist's curiosity might have reopened her thinking; we could see if it repeats.",
        credit: 0.6,
      },
      {
        text: "The therapist's 'stop and stand back' move — marking his own not-knowing and inviting joint curiosity rather than arguing the content — likely re-engaged her mentalizing, which had collapsed into a fixed conviction under attachment stress, because restoring curiosity about minds is the active ingredient of MBT; test whether her certainty reliably softens when curiosity is genuinely invited rather than when she is reassured, whether arguing the facts instead hardens it, and whether the loosening tracks the not-knowing stance specifically.",
        credit: 1.0,
      },
      {
        text: "Therapists can get patients to say almost anything, so the shift doesn't tell us much.",
        credit: 0,
      },
    ],
    correctAnswer:
      "The therapist's 'stop and stand back' move — marking his own not-knowing and inviting joint curiosity rather than arguing the content — likely re-engaged her mentalizing, which had collapsed into a fixed conviction under attachment stress, because restoring curiosity about minds is the active ingredient of MBT; test whether her certainty reliably softens when curiosity is genuinely invited rather than when she is reassured, whether arguing the facts instead hardens it, and whether the loosening tracks the not-knowing stance specifically.",
    explanation:
      "Top credit names the not-knowing/curiosity stance as restoring mentalizing and a curiosity-versus-reassurance test; 'therapists can get patients to say anything' is the dodge the curiosity-specific softening defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A patient narrates a recent overdose in a calm, almost clinical voice, supplying precise details and tidy psychological explanations, but appears to feel nothing as she does so and seems puzzled that the therapist looks shaken. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She's clearly processed it already, so there's no need to dwell on it.",
        credit: 0,
      },
      {
        text: "Her detached account might be a sign she's cut off from the feeling; we could slow it down.",
        credit: 0.6,
      },
      {
        text: "She describes the overdose without any emotion.",
        credit: 0.3,
      },
      {
        text: "Her flat, fluent narration with no felt affect likely reflects pretend mode — she is talking about the event from outside it, the words wholly decoupled from the experience, which lets her report a near-death act without contact with its terror; test whether any genuine feeling enters when she is slowed to a single concrete moment, whether her calm is a stable detachment rather than real resolution, and whether the dissociation lifts as curiosity about her own state is rebuilt.",
        credit: 1.0,
      },
    ],
    correctAnswer:
      "Her flat, fluent narration with no felt affect likely reflects pretend mode — she is talking about the event from outside it, the words wholly decoupled from the experience, which lets her report a near-death act without contact with its terror; test whether any genuine feeling enters when she is slowed to a single concrete moment, whether her calm is a stable detachment rather than real resolution, and whether the dissociation lifts as curiosity about her own state is rebuilt.",
    explanation:
      "Top credit names pretend mode (narration decoupled from affect) and a does-feeling-enter-when-slowed test; 'she's clearly processed it' is the dodge the puzzled-at-the-therapist's-alarm detachment defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "After a minor setback at work a patient states, with total conviction, 'I feel worthless, so I am worthless — it's just a fact.' She treats the feeling as direct evidence about her actual value, not as a feeling that could be examined. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She may be treating a feeling as proof about herself; we could look at how fixed that is.",
        credit: 0.6,
      },
      {
        text: "She feels worthless after the setback.",
        credit: 0.3,
      },
      {
        text: "This is likely psychic equivalence turned on the self — an inner state ('I feel worthless') is experienced as a literal fact about reality ('I am worthless'), with no gap in which the feeling could be one datum among others; test whether the equation is total and resists any counter-evidence about her actual record, whether it intensifies with emotional arousal, and whether the 'fact' reopens into a 'feeling' once she is calmer or invited to separate the two.",
        credit: 1.0,
      },
      {
        text: "Everyone feels worthless sometimes, so it doesn't really mean anything.",
        credit: 0,
      },
    ],
    correctAnswer:
      "This is likely psychic equivalence turned on the self — an inner state ('I feel worthless') is experienced as a literal fact about reality ('I am worthless'), with no gap in which the feeling could be one datum among others; test whether the equation is total and resists any counter-evidence about her actual record, whether it intensifies with emotional arousal, and whether the 'fact' reopens into a 'feeling' once she is calmer or invited to separate the two.",
    explanation:
      "Top credit names self-directed psychic equivalence (feeling treated as fact) and a does-it-reopen-when-calm test; 'everyone feels worthless sometimes' is the dodge the treats-it-as-literal-fact rigidity defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "Asked what she imagines her sister might have been feeling during their fight, a patient shrugs: 'There's no point guessing — you can never know what's in anyone's head, so why even try.' She says this not as humility but as a flat door slammed on the whole question. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She's right that you can't truly know another person's mind, so the question is unanswerable.",
        credit: 0,
      },
      {
        text: "Her blanket refusal to imagine her sister's mind is itself a non-mentalizing stance — a giving-up on minds that forecloses curiosity, not genuine epistemic humility, and it likely protects her from a feared or painful state she would meet if she did wonder; test whether the refusal lifts when her arousal is lower or the topic is less threatening, whether she can mentalize easily about emotionally neutral people, and whether gently modeling tentative, not-certain guessing reopens her curiosity.",
        credit: 1.0,
      },
      {
        text: "She doesn't want to guess what her sister felt.",
        credit: 0.3,
      },
      {
        text: "Her refusal to wonder might be defensive; we could see when she can and can't do it.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Her blanket refusal to imagine her sister's mind is itself a non-mentalizing stance — a giving-up on minds that forecloses curiosity, not genuine epistemic humility, and it likely protects her from a feared or painful state she would meet if she did wonder; test whether the refusal lifts when her arousal is lower or the topic is less threatening, whether she can mentalize easily about emotionally neutral people, and whether gently modeling tentative, not-certain guessing reopens her curiosity.",
    explanation:
      "Top credit reads the 'why even try' refusal as a non-mentalizing collapse, not real humility, and names a does-it-lift-on-neutral-topics test; the matching 'you can't truly know a mind' option is the dodge — it sounds reasonable but forecloses the very curiosity mentalizing requires.",
  },
  {
    itemType: "mc",
    prompt:
      "A patient explains that if her boyfriend takes more than a few minutes to text back, it proves he doesn't really love her; a fast reply, and only a fast reply, briefly convinces her she matters. Reassuring words from him afterward never land the same way. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She needs quick replies to feel loved.",
        credit: 0.3,
      },
      {
        text: "She is likely in teleological mode about love — only an observable physical action, the speed of a reply, can serve as proof of his feelings, so words of love can't register while the timed behavior carries the entire weight of 'does he care'; test whether only concrete, measurable actions ever reassure her while spoken affection doesn't, whether the standard tightens as her insecurity rises, and whether her ability to credit non-physical signs of love returns when she is calmer.",
        credit: 1.0,
      },
      {
        text: "She might be treating reply speed as the only proof of love; we could notice what reassures her.",
        credit: 0.6,
      },
      {
        text: "Everybody likes a prompt text back, so there's nothing unusual here.",
        credit: 0,
      },
    ],
    correctAnswer:
      "She is likely in teleological mode about love — only an observable physical action, the speed of a reply, can serve as proof of his feelings, so words of love can't register while the timed behavior carries the entire weight of 'does he care'; test whether only concrete, measurable actions ever reassure her while spoken affection doesn't, whether the standard tightens as her insecurity rises, and whether her ability to credit non-physical signs of love returns when she is calmer.",
    explanation:
      "Top credit names teleological mode (timed action as sole proof of love) and an only-physical-signs-reassure test; 'everybody likes a prompt text' is the dodge the words-never-land contrast defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A patient reasons thoughtfully about other people's motives all session — until the therapist mentions taking a two-week vacation, at which point she snaps into flat certainty that he is 'abandoning me because I'm too much,' unable to consider any other reason for the trip. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Her thinking might shut down around abandonment; we could watch what triggers it.",
        credit: 0.6,
      },
      {
        text: "She gets very certain and upset about being left.",
        credit: 0.3,
      },
      {
        text: "Anyone would feel bad about their therapist leaving, so her reaction is just normal.",
        credit: 0,
      },
      {
        text: "Her mentalizing likely stayed intact until the attachment system was activated, then collapsed — the vacation triggered the threat of abandonment, switching off curiosity about the therapist's mind and replacing it with the fixed, psychic-equivalent certainty that the trip means she is too much; test whether her loss of perspective is specific to attachment-threat moments while she mentalizes well otherwise, whether the certainty admits no alternative reading of the trip, and whether it eases as the threat is named and her arousal settles.",
        credit: 1.0,
      },
    ],
    correctAnswer:
      "Her mentalizing likely stayed intact until the attachment system was activated, then collapsed — the vacation triggered the threat of abandonment, switching off curiosity about the therapist's mind and replacing it with the fixed, psychic-equivalent certainty that the trip means she is too much; test whether her loss of perspective is specific to attachment-threat moments while she mentalizes well otherwise, whether the certainty admits no alternative reading of the trip, and whether it eases as the threat is named and her arousal settles.",
    explanation:
      "Top credit reads an attachment-triggered collapse of mentalizing and names a specific-to-attachment-threat test; 'anyone would feel bad' is the dodge the snap-into-zero-alternatives certainty defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A patient recounts that her roommate left a dish in the sink and declares she now knows 'for an absolute fact' that the roommate did it deliberately to disrespect her and has always secretly hated her. She presents this not as a worry but as established truth. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Her leap from a dish to a certain, mind-read motive ('deliberate disrespect, always hated me') is likely psychic equivalence — a feeling of being slighted experienced as a known fact about the roommate's intent, the inner state projected outward as certain reality; the tell is that she is treating an interpretation as proof rather than the slight itself; test whether she allows any alternative reading of the dish, whether the certainty rose with her own hurt rather than with new evidence, and whether it softens when she is calmer or asked to imagine other reasons.",
        credit: 1.0,
      },
      {
        text: "She's certain her roommate left the dish on purpose to disrespect her.",
        credit: 0.3,
      },
      {
        text: "She might be reading hostile intent into a small act; we could check how sure she is.",
        credit: 0.6,
      },
      {
        text: "You truly can't know why someone leaves a dish, so there's nothing to say.",
        credit: 0,
      },
    ],
    correctAnswer:
      "Her leap from a dish to a certain, mind-read motive ('deliberate disrespect, always hated me') is likely psychic equivalence — a feeling of being slighted experienced as a known fact about the roommate's intent, the inner state projected outward as certain reality; the tell is that she is treating an interpretation as proof rather than the slight itself; test whether she allows any alternative reading of the dish, whether the certainty rose with her own hurt rather than with new evidence, and whether it softens when she is calmer or asked to imagine other reasons.",
    explanation:
      "Top credit names psychic equivalence (a hurt felt as certain knowledge of intent) and a does-she-allow-alternatives test; 'you can't know why someone leaves a dish' is the nihilistic dodge the as-established-truth certainty should push you past.",
  },
  {
    itemType: "mc",
    prompt:
      "A patient insists her mother's brief phone call proves her mother 'couldn't care less.' Rather than argue, the therapist says, 'I'm curious — what do you imagine was going on for her right then?' After a silence the patient offers, 'She was probably rushing to a shift... actually she does that when she's stressed.' Which conclusion best follows?",
    mcOptions: [
      {
        text: "Inviting her to wonder might have reopened other explanations; we could try it again.",
        credit: 0.6,
      },
      {
        text: "The genuine invitation to imagine her mother's mind likely switched mentalizing back on — the conviction 'she couldn't care less' was a non-mentalizing certainty, and being asked to wonder, rather than reassured, is what restored curiosity and produced an alternative; test whether her access to other explanations reliably follows the curiosity prompt rather than reassurance, whether the same move repeatedly reopens her thinking, and whether arguing the facts instead would have hardened the conviction.",
        credit: 1.0,
      },
      {
        text: "When asked, she came up with another reason.",
        credit: 0.3,
      },
      {
        text: "People can always invent a nicer story if you push them, so this proves nothing.",
        credit: 0,
      },
    ],
    correctAnswer:
      "The genuine invitation to imagine her mother's mind likely switched mentalizing back on — the conviction 'she couldn't care less' was a non-mentalizing certainty, and being asked to wonder, rather than reassured, is what restored curiosity and produced an alternative; test whether her access to other explanations reliably follows the curiosity prompt rather than reassurance, whether the same move repeatedly reopens her thinking, and whether arguing the facts instead would have hardened the conviction.",
    explanation:
      "Top credit reads the curiosity invitation as restoring mentalizing and names a curiosity-versus-reassurance test; 'people can always invent a nicer story' is the dodge the prompt-produced spontaneous alternative defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A patient cannot say what she feels — asked, she goes blank or answers 'I don't know, bad' — and instead the feelings seem to come out as sudden actions: she walks out, slams a door, or cancels everything, only later guessing she might have been hurt. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Lots of people aren't in touch with their feelings, so there's nothing special to read here.",
        credit: 0,
      },
      {
        text: "She acts on feelings she can't name.",
        credit: 0.3,
      },
      {
        text: "She likely has a deficit in self-mentalizing — feelings that aren't represented in mind as feelings get discharged directly into action, so an unnamed hurt becomes a slammed door rather than a thought she can hold, and the work is to build curiosity about her own states so they can be felt and named instead of enacted; test whether the impulsive actions cluster around moments of unrecognized affect, whether helping her name a feeling in the moment reduces the need to act it out, and whether her acting-out falls as her self-awareness grows.",
        credit: 1.0,
      },
      {
        text: "Her actions might be standing in for feelings she can't name; we could slow those moments down.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "She likely has a deficit in self-mentalizing — feelings that aren't represented in mind as feelings get discharged directly into action, so an unnamed hurt becomes a slammed door rather than a thought she can hold, and the work is to build curiosity about her own states so they can be felt and named instead of enacted; test whether the impulsive actions cluster around moments of unrecognized affect, whether helping her name a feeling in the moment reduces the need to act it out, and whether her acting-out falls as her self-awareness grows.",
    explanation:
      "Top credit names a self-mentalizing deficit (affect discharged as action) and a does-naming-it-reduce-acting-out test; 'lots of people aren't in touch with feelings' is the dodge the feelings-come-out-as-sudden-actions pattern defeats.",
  },
];

const hybrid: HomeworkItem[] = [
  {
    itemType: "hybrid",
    prompt:
      "A patient's partner is twenty minutes late with no message. By the time he arrives she is convinced beyond any doubt that he is cheating and has 'always been planning to leave,' and is already throwing his things into a bag. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Under the abandonment threat her mentalizing likely collapsed into psychic equivalence — 'he is cheating and leaving' is felt as literal certainty rather than one possibility, so lateness becomes proof and no innocent reason can register; test whether the certainty admits no alternatives, whether it ignited precisely with the attachment threat, and whether it dissolves once she is calmer or genuinely invited to consider what else twenty minutes could mean.",
        credit: 1.0,
      },
      {
        text: "She might be in a state where the fear feels like fact; we could look at what triggered it.",
        credit: 0.6,
      },
      {
        text: "She gets certain he's leaving when he's late.",
        credit: 0.3,
      },
      {
        text: "You can never really know if a partner is faithful, so who's to say.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'psychic equivalence under attachment stress' lead from the rival 'she has real, specific evidence he is cheating,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: check whether her certainty rests on the lateness alone and dissolves once she calms or is asked to imagine other reasons — my lead predicts a threat-triggered conviction that admits no alternatives and softens with arousal. It is refuted if she is pointing to concrete, specific evidence of cheating that survives her calming down, which would be reality-based suspicion rather than a non-mentalizing collapse.",
      yieldAnchors: [
        "Partner is twenty minutes late with no message",
        "She is certain beyond doubt he's cheating and leaving",
        "She is already packing his bag",
      ],
      riskAnchors: [
        "The certainty admits no alternatives",
        "It ignited with the attachment threat",
        "It dissolves once she is calmer or invited to wonder",
      ],
      defeatedBy: [
        "She has concrete, specific evidence of cheating",
        "The certainty survives her calming and reflecting",
      ],
    },
    correctAnswer:
      "Under the abandonment threat her mentalizing likely collapsed into psychic equivalence — 'he is cheating and leaving' is felt as literal certainty rather than one possibility, so lateness becomes proof and no innocent reason can register; test whether the certainty admits no alternatives, whether it ignited precisely with the attachment threat, and whether it dissolves once she is calmer or genuinely invited to consider what else twenty minutes could mean.",
    explanation:
      "Full credit reads a psychic-equivalence collapse under abandonment threat with three checks and a does-it-survive-calming test; 'you can never know if a partner is faithful' opens nothing.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A patient tells her therapist that nothing he says convinces her he cares; the only thing that would is if he texted her good night every evening. When he reflects that this is something they should understand rather than enact, she hears it as final proof he doesn't care. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She wants a nightly text to feel cared about.",
        credit: 0.3,
      },
      {
        text: "She is likely in teleological mode — a mental state like 'he cares' can be believed only if it is proven by a physical action, so words and understanding count for nothing and a nightly text becomes the sole acceptable evidence; test whether only concrete actions ever satisfy her while words never do, whether the demand for proof rises as she feels less secure, and whether her ability to credit non-physical care returns once her arousal settles.",
        credit: 1.0,
      },
      {
        text: "She might only count actions as proof of care; we could notice what she dismisses.",
        credit: 0.6,
      },
      {
        text: "Some people just need more from a therapist than others, so there's nothing to interpret.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'teleological mode' lead from the rival 'she is simply asking for a reasonable accommodation,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: watch whether any non-physical sign of care — warmth, reliability, remembering her life — ever registers, or whether only a concrete action will do; my lead predicts that words consistently fail to land while only physical proof counts. It is refuted if ordinary verbal and relational signs of care actually reassure her, which would make the text request a simple preference rather than teleological mode.",
      yieldAnchors: [
        "She says words never convince her he cares",
        "Only a nightly text would prove it",
        "She hears reflection as proof he doesn't care",
      ],
      riskAnchors: [
        "Only concrete actions ever satisfy her",
        "The demand rises as she feels less secure",
        "Crediting non-physical care returns when calmer",
      ],
      defeatedBy: [
        "Ordinary verbal and relational care reassures her",
        "She can credit caring without a physical proof",
      ],
    },
    correctAnswer:
      "She is likely in teleological mode — a mental state like 'he cares' can be believed only if it is proven by a physical action, so words and understanding count for nothing and a nightly text becomes the sole acceptable evidence; test whether only concrete actions ever satisfy her while words never do, whether the demand for proof rises as she feels less secure, and whether her ability to credit non-physical care returns once her arousal settles.",
    explanation:
      "Full credit names teleological mode with three checks and an only-actions-count test that names its refutation; 'some people just need more' opens nothing.",
  },
  {
    itemType: "hybrid",
    prompt:
      "Each week a patient delivers a polished, insightful analysis of her own 'attachment wounds,' complete with the right terminology, but the talk never seems to move her and her relationships outside go on exactly as before. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Her insight might be cut off from feeling; we could check whether it changes anything.",
        credit: 0.6,
      },
      {
        text: "She analyzes her feelings without seeming moved.",
        credit: 0.3,
      },
      {
        text: "She understands herself unusually well, so therapy is mostly working.",
        credit: 0,
      },
      {
        text: "This is likely pretend mode — talk about mental states detached from any real affect, so the fluent insight floats free of the experience and binds to no change, functioning as a defense against contact with the feelings rather than evidence of working them through; test whether genuine emotion ever enters when she is slowed to a concrete moment, whether any 'insight' alters her behavior outside, and whether breaking the smooth flow brings real feeling into the room.",
        credit: 1.0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'pretend mode' lead from the rival 'she has genuine insight that simply needs time to translate into change,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: slow her to a single concrete moment and watch whether real feeling enters or the talk stays smooth and untouched — my lead predicts insight decoupled from affect with no behavioral footprint. It is refuted if her analysis is accompanied by felt emotion and is already producing small, traceable changes outside, which would be genuine working-through rather than pretend mode.",
      yieldAnchors: [
        "She delivers polished, insightful analysis weekly",
        "The talk never seems to move her",
        "Her outside relationships are unchanged",
      ],
      riskAnchors: [
        "Real emotion enters when she is slowed down",
        "No insight alters her outside behavior",
        "Breaking the smooth flow brings feeling in",
      ],
      defeatedBy: [
        "Her insight is accompanied by felt emotion",
        "It is already producing real change outside",
      ],
    },
    correctAnswer:
      "This is likely pretend mode — talk about mental states detached from any real affect, so the fluent insight floats free of the experience and binds to no change, functioning as a defense against contact with the feelings rather than evidence of working them through; test whether genuine emotion ever enters when she is slowed to a concrete moment, whether any 'insight' alters her behavior outside, and whether breaking the smooth flow brings real feeling into the room.",
    explanation:
      "Full credit names pretend mode with three checks and a does-feeling-enter-when-slowed test that names its refutation; 'she understands herself well' opens nothing.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A patient screams that her group-mate 'humiliated her on purpose' and storms out; after pacing the hall she returns and says quietly, 'Actually I think he was nervous and it came out wrong — I do that.' Which conclusion best follows?",
    mcOptions: [
      {
        text: "People say opposite things when they're angry, so neither version tells us anything.",
        credit: 0,
      },
      {
        text: "Her mentalizing likely went offline at peak arousal — the certainty of deliberate humiliation was a non-mentalizing state — and came back online as she settled, restoring curiosity about his mind and her own parallel; test whether her capacity for alternatives reliably tracks her arousal, whether the same softening recurs each time she calms, and whether deliberately bringing the arousal down in the moment restores her perspective.",
        credit: 1.0,
      },
      {
        text: "She calmed down and changed her mind.",
        credit: 0.3,
      },
      {
        text: "Her certainty may rise and fall with how upset she is; we could watch for that.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'arousal switched mentalizing off and on' lead from the rival 'she just changes her story to look reasonable,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: track whether her access to alternative explanations reliably returns as her arousal falls, across repeated incidents — my lead predicts the perspective tracks arousal, not audience. It is refuted if she keeps the benign reading only when others are watching and reverts to certainty in private, which would point to impression management rather than mentalizing coming back online.",
      yieldAnchors: [
        "She is certain she was humiliated on purpose and storms out",
        "She returns calmer",
        "She offers a benign reading and a parallel to herself",
      ],
      riskAnchors: [
        "Her access to alternatives tracks arousal",
        "The softening recurs each time she calms",
        "Lowering arousal in the moment restores perspective",
      ],
      defeatedBy: [
        "The benign reading appears only with an audience",
        "Her perspective ignores her arousal level",
      ],
    },
    correctAnswer:
      "Her mentalizing likely went offline at peak arousal — the certainty of deliberate humiliation was a non-mentalizing state — and came back online as she settled, restoring curiosity about his mind and her own parallel; test whether her capacity for alternatives reliably tracks her arousal, whether the same softening recurs each time she calms, and whether deliberately bringing the arousal down in the moment restores her perspective.",
    explanation:
      "Full credit reads mentalizing collapsing and returning with arousal, with three checks and an arousal-tracks-perspective test; 'people say opposite things when angry' opens nothing.",
  },
  {
    itemType: "hybrid",
    prompt:
      "When a patient announces the therapist is 'clearly sick of me,' he doesn't reassure her but says, 'I notice I genuinely don't know where that came from — can we rewind to the second it hit you?' She slows, and the conviction starts to come apart. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Slowing down helped her feel less certain.",
        credit: 0.3,
      },
      {
        text: "His curiosity may have reopened her thinking; we could test if it repeats.",
        credit: 0.6,
      },
      {
        text: "A therapist can nudge a patient into agreeing to almost anything, so this shows little.",
        credit: 0,
      },
      {
        text: "The therapist's 'stop and stand back' move — marking his own not-knowing and inviting joint inquiry instead of arguing or reassuring — likely re-engaged mentalizing that had collapsed under attachment stress, since restoring curiosity about minds is MBT's active ingredient; test whether her certainty softens specifically when curiosity is invited rather than when she is reassured, whether arguing the content instead hardens it, and whether the loosening reliably tracks the not-knowing stance.",
        credit: 1.0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'the not-knowing stance restored mentalizing' lead from the rival 'any kind response would have calmed her,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: compare moments the therapist invites curiosity with moments he simply reassures, and see which reliably softens her certainty — my lead predicts curiosity, not reassurance, reopens her thinking. It is refuted if plain reassurance calms her just as well or better, which would mean soothing, not restored mentalizing, did the work.",
      yieldAnchors: [
        "She declares the therapist is sick of her",
        "He marks not-knowing and invites joint inquiry",
        "Her conviction starts to come apart",
      ],
      riskAnchors: [
        "Certainty softens when curiosity is invited",
        "Arguing the content hardens it",
        "The loosening tracks the not-knowing stance",
      ],
      defeatedBy: [
        "Plain reassurance calms her just as well",
        "Curiosity makes no difference versus soothing",
      ],
    },
    correctAnswer:
      "The therapist's 'stop and stand back' move — marking his own not-knowing and inviting joint inquiry instead of arguing or reassuring — likely re-engaged mentalizing that had collapsed under attachment stress, since restoring curiosity about minds is MBT's active ingredient; test whether her certainty softens specifically when curiosity is invited rather than when she is reassured, whether arguing the content instead hardens it, and whether the loosening reliably tracks the not-knowing stance.",
    explanation:
      "Full credit names the not-knowing/curiosity stance as restoring mentalizing with three checks and a curiosity-versus-reassurance test; 'a therapist can nudge anyone' opens nothing.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A patient explains that telling people she is in pain never changes anything, but an injury they can see finally makes them take her seriously; the urge to hurt herself rises exactly when she feels disbelieved. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The self-harm might be a way to make her pain visible; we could track when the urge comes.",
        credit: 0.6,
      },
      {
        text: "This likely reflects teleological mode — when an inner state feels unrecognizable unless it has a physical form, a visible injury becomes the only proof her pain is real and believed, so the self-harm functions to make unbearable feeling concrete and seen; test whether the urge spikes specifically when she feels disbelieved, whether being genuinely understood in words lowers it, and whether the need for a physical sign fades as she comes to trust that an inner state can register without proof.",
        credit: 1.0,
      },
      {
        text: "She hurts herself when she feels no one believes her pain.",
        credit: 0.3,
      },
      {
        text: "She's just doing it to get a reaction out of people.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'teleological proof-of-pain' lead from the rival 'she is doing it to manipulate others into reacting,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: check whether being genuinely believed and understood in words reduces the urge while feeling disbelieved spikes it — my lead predicts the function is to make pain real and recognized, not to control others. It is refuted if the urge tracks getting people to do things for her rather than feeling her pain is registered, which would fit instrumental manipulation rather than teleological mode.",
      yieldAnchors: [
        "Words about her pain change nothing for her",
        "A visible injury makes people take her seriously",
        "The urge rises when she feels disbelieved",
      ],
      riskAnchors: [
        "The urge spikes when she feels disbelieved",
        "Being understood in words lowers it",
        "The need for a physical sign fades with trust",
      ],
      defeatedBy: [
        "The urge tracks getting others to act, not being believed",
        "Being understood makes no difference to it",
      ],
    },
    correctAnswer:
      "This likely reflects teleological mode — when an inner state feels unrecognizable unless it has a physical form, a visible injury becomes the only proof her pain is real and believed, so the self-harm functions to make unbearable feeling concrete and seen; test whether the urge spikes specifically when she feels disbelieved, whether being genuinely understood in words lowers it, and whether the need for a physical sign fades as she comes to trust that an inner state can register without proof.",
    explanation:
      "Full credit reads self-harm as teleological proof of pain with three checks and a does-being-believed-reduce-it test; 'just to get a reaction' is the overreach the relief-when-understood detail defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "Because the therapist glanced at the clock, a patient states as plain fact that he 'can't wait to be rid of her' and has been counting the minutes all session, and treats anyone who questions this as naive. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Her jump from a glance to a certain, mind-read intent ('can't wait to be rid of me') is likely psychic equivalence — a feeling of being unwanted experienced as established fact about his inner state, the inner feeling projected outward as reality; test whether she allows any alternative reading of the glance, whether the certainty rose with her own insecurity rather than new evidence, and whether it loosens when she is calmer or genuinely invited to imagine other reasons he might check the time.",
        credit: 1.0,
      },
      {
        text: "She's sure the clock-glance means he wants her gone.",
        credit: 0.3,
      },
      {
        text: "She might be reading rejection into a small act; we could check how fixed it is.",
        credit: 0.6,
      },
      {
        text: "Nobody can really know what a glance means, so there's no saying.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'psychic equivalence' lead from the rival 'the therapist really did signal impatience,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: see whether she can entertain any alternative reading of the clock-glance and whether her certainty tracks her own insecurity rather than his actual behavior — my lead predicts a fixed, feeling-as-fact conviction that admits no alternatives. It is refuted if the therapist genuinely was signaling impatience across multiple real cues and her reading survives calm reflection, which would make it accurate perception rather than psychic equivalence.",
      yieldAnchors: [
        "He glanced at the clock once",
        "She states as fact he can't wait to be rid of her",
        "She treats doubters as naive",
      ],
      riskAnchors: [
        "She allows no alternative reading of the glance",
        "The certainty rose with her insecurity",
        "It loosens when she is calmer or invited to wonder",
      ],
      defeatedBy: [
        "The therapist really did signal impatience on multiple cues",
        "Her reading survives calm reflection on the evidence",
      ],
    },
    correctAnswer:
      "Her jump from a glance to a certain, mind-read intent ('can't wait to be rid of me') is likely psychic equivalence — a feeling of being unwanted experienced as established fact about his inner state, the inner feeling projected outward as reality; test whether she allows any alternative reading of the glance, whether the certainty rose with her own insecurity rather than new evidence, and whether it loosens when she is calmer or genuinely invited to imagine other reasons he might check the time.",
    explanation:
      "Full credit names psychic equivalence (a feeling of being unwanted taken as fact) with three checks and a does-she-allow-alternatives test; 'nobody can know what a glance means' opens nothing.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A patient can discuss her partner's 'avoidant attachment style' and her own 'fear of engulfment' for an hour with striking articulateness, yet when asked simply how she felt last night when he left, she draws a blank and returns to theory. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She has clearly done the reading and gets it, so she's ahead of most patients.",
        credit: 0,
      },
      {
        text: "Her theorizing might be a way around real feeling; we could keep bringing her back to the moment.",
        credit: 0.6,
      },
      {
        text: "She talks in theory instead of saying how she felt.",
        credit: 0.3,
      },
      {
        text: "This looks like pretend mode — fluent talk about mental states with no live affect behind it, so the theory substitutes for contact with the actual feeling and protects her from it; test whether she can locate any real feeling when held to a concrete moment, whether the retreat to theory recurs precisely when emotion is approached, and whether staying with the moment rather than the concept lets genuine affect surface.",
        credit: 1.0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'pretend mode' lead from the rival 'she is just an intellectual person who explains things in concepts,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: hold her to one concrete moment ('how did you feel when he walked out') and watch whether real feeling surfaces or she reflexively retreats to theory — my lead predicts the abstraction appears precisely where affect would. It is refuted if, asked plainly, she can readily name and feel a specific emotion and the theory is merely her style, which would not be pretend mode.",
      yieldAnchors: [
        "She discusses attachment theory fluently for an hour",
        "Asked how she felt, she draws a blank",
        "She returns to theory when emotion is approached",
      ],
      riskAnchors: [
        "She finds no real feeling when held to a moment",
        "The retreat to theory recurs as emotion nears",
        "Staying with the moment lets affect surface",
      ],
      defeatedBy: [
        "Asked plainly, she names and feels a specific emotion",
        "The theory is merely style, not avoidance",
      ],
    },
    correctAnswer:
      "This looks like pretend mode — fluent talk about mental states with no live affect behind it, so the theory substitutes for contact with the actual feeling and protects her from it; test whether she can locate any real feeling when held to a concrete moment, whether the retreat to theory recurs precisely when emotion is approached, and whether staying with the moment rather than the concept lets genuine affect surface.",
    explanation:
      "Full credit names pretend mode with three checks and a can-she-feel-a-concrete-moment test; 'she's just intellectual' is the dodge the blanks-out-when-asked-how-she-felt pattern defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A patient repeatedly storms out of sessions without warning and cannot say why; lately, when the therapist gently names a possible feeling just before she bolts ('it seems something just stung'), she sometimes stays and the feeling can be talked about instead. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Naming a feeling sometimes keeps her from leaving.",
        credit: 0.3,
      },
      {
        text: "Putting words to the feeling might reduce the walkouts; we could keep trying it.",
        credit: 0.6,
      },
      {
        text: "Her walkouts likely reflect a self-mentalizing deficit — unrepresented feelings get discharged as action rather than held as thoughts — and naming the feeling just in time gives the affect a mental form so it can be felt instead of enacted, which is why she can stay; test whether the walkouts cluster on moments of unrecognized affect, whether timely naming reliably reduces them, and whether her acting-out falls overall as her capacity to identify her own states grows.",
        credit: 1.0,
      },
      {
        text: "Some people are just walkers-out, so there's nothing deeper to it.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'naming gives the affect a mental form' lead from the rival 'she just stays when the therapist is being nice,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: see whether it is specifically accurate naming of the feeling — not general warmth — that lets her stay and talk, and whether walkouts drop as her own ability to name feelings grows; my lead predicts representing the affect is the active ingredient. It is refuted if any warm remark keeps her regardless of whether it names the feeling, which would credit soothing rather than restored self-mentalizing.",
      yieldAnchors: [
        "She storms out without warning and can't say why",
        "Naming a likely feeling sometimes makes her stay",
        "The feeling can then be talked about",
      ],
      riskAnchors: [
        "Walkouts cluster on unrecognized-affect moments",
        "Timely naming reliably reduces them",
        "Acting-out falls as she can name her states",
      ],
      defeatedBy: [
        "Any warm remark keeps her, naming or not",
        "Walkouts ignore whether the feeling is named",
      ],
    },
    correctAnswer:
      "Her walkouts likely reflect a self-mentalizing deficit — unrepresented feelings get discharged as action rather than held as thoughts — and naming the feeling just in time gives the affect a mental form so it can be felt instead of enacted, which is why she can stay; test whether the walkouts cluster on moments of unrecognized affect, whether timely naming reliably reduces them, and whether her acting-out falls overall as her capacity to identify her own states grows.",
    explanation:
      "Full credit names a self-mentalizing deficit with three checks and a is-it-the-naming-or-just-warmth test; 'some people are just walkers-out' opens nothing.",
  },
];

const written: HomeworkItem[] = [
  {
    itemType: "written",
    prompt:
      "A patient's friend cancels dinner by text, citing a work emergency. Within minutes the patient is certain the friend secretly despises her and has been pretending to like her for years; she spends the night sure of it and only the next day, calmer, can entertain that the emergency was real. In one paragraph, propose the strongest conclusion about what happened in her mind and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that the attachment threat of being cancelled on collapsed her mentalizing into psychic equivalence: the thought 'she despises me and has been faking it' was experienced not as a worry to be checked but as literal, certain reality, which is why an ordinary work emergency could not register as an alternative until she had calmed down. This is a strong claim because it predicts checkable consequences: at its peak the certainty should admit no alternative readings of the cancellation; it should have ignited precisely with the rejection cue rather than from any new information about the friend; and it should soften specifically as her arousal drops or when she is genuinely invited to imagine other reasons. I would test it by checking whether her conviction rests on the cancellation alone, whether it tracks her arousal across the night-into-morning shift, and whether it survives or dissolves once she is calm — dissolution would confirm a non-mentalizing collapse, while a certainty grounded in concrete prior evidence that survives calming would refute it.",
      yieldAnchors: [
        "A simple text cancellation triggered total certainty of being despised",
        "The conviction lasted all night",
        "It loosened only the next day when she was calmer",
      ],
      riskAnchors: [
        "The certainty admitted no alternatives at its peak",
        "It ignited precisely with the rejection cue",
        "It softened as her arousal dropped",
      ],
      defeatedBy: [
        "She had concrete prior evidence the friend dislikes her",
        "The certainty survived her calming completely",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that the attachment threat of being cancelled on collapsed her mentalizing into psychic equivalence: the thought 'she despises me and has been faking it' was experienced not as a worry to be checked but as literal, certain reality, which is why an ordinary work emergency could not register as an alternative until she had calmed down. This is a strong claim because it predicts checkable consequences: at its peak the certainty should admit no alternative readings of the cancellation; it should have ignited precisely with the rejection cue rather than from any new information about the friend; and it should soften specifically as her arousal drops or when she is genuinely invited to imagine other reasons. I would test it by checking whether her conviction rests on the cancellation alone, whether it tracks her arousal across the night-into-morning shift, and whether it survives or dissolves once she is calm — dissolution would confirm a non-mentalizing collapse, while a certainty grounded in concrete prior evidence that survives calming would refute it.",
    explanation:
      "Under the inverted standard, 'you can never know what a friend really feels' earns near-zero; top credit goes to the psychic-equivalence reading that names a does-it-soften-with-arousal test as its own refutation.",
  },
  {
    itemType: "written",
    prompt:
      "A patient insists that the only way she will believe her therapist cares about her is if he agrees to take her calls at home; his steadiness, his memory for her life, and his evident concern in the room she dismisses as meaningless. In one paragraph, propose the strongest conclusion about how she is processing 'caring' and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that she is in teleological mode: a mental state like 'he cares' cannot be believed unless it is proven by a concrete physical action, so words, reliability, and remembered details register as nothing while only an observable act — taking her calls at home — can carry the weight of 'does he care.' This is a strong claim because it predicts checkable consequences: only physical demonstrations should ever satisfy her while verbal and relational signs of care consistently fail to land; the demand for a concrete proof should escalate as she feels less secure; and her ability to credit non-physical care should return as her arousal settles. I would test it by tracking whether any non-action sign of caring ever reassures her, whether the proof-demand rises with her insecurity, and whether warmth registers when she is calm — if ordinary verbal and relational care does reassure her, the reading is refuted and the call request is a simple preference rather than teleological mode.",
      yieldAnchors: [
        "Only taking her calls at home would prove he cares",
        "She dismisses steadiness, memory, and concern as meaningless",
        "Words consistently fail to convince her",
      ],
      riskAnchors: [
        "Only physical demonstrations ever satisfy her",
        "The proof-demand rises as she feels less secure",
        "Crediting non-physical care returns when calmer",
      ],
      defeatedBy: [
        "Ordinary verbal and relational care reassures her",
        "She can credit caring without a physical proof",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that she is in teleological mode: a mental state like 'he cares' cannot be believed unless it is proven by a concrete physical action, so words, reliability, and remembered details register as nothing while only an observable act — taking her calls at home — can carry the weight of 'does he care.' This is a strong claim because it predicts checkable consequences: only physical demonstrations should ever satisfy her while verbal and relational signs of care consistently fail to land; the demand for a concrete proof should escalate as she feels less secure; and her ability to credit non-physical care should return as her arousal settles. I would test it by tracking whether any non-action sign of caring ever reassures her, whether the proof-demand rises with her insecurity, and whether warmth registers when she is calm — if ordinary verbal and relational care does reassure her, the reading is refuted and the call request is a simple preference rather than teleological mode.",
    explanation:
      "The cautious 'some people just need more' earns near-zero; credit goes to the teleological-mode reading that names an only-actions-count test which could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A patient produces eloquent, well-read accounts of her 'core wound' and 'maladaptive schemas' session after session, yet seems untouched as she speaks and her life outside never shifts. In one paragraph, propose the strongest conclusion about what this fluent self-analysis is doing and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that her self-analysis is pretend mode: talk about mental states that is decoupled from any real affect, so the eloquent words about her 'core wound' float free of the feelings themselves, function as a defense against contact with the experience, and therefore bind to no change in her life. This is a strong claim because it predicts checkable consequences: genuine emotion should fail to enter the room as long as the talk stays smooth and conceptual; nothing she 'understands' should alter her behavior outside; and deliberately slowing her to a single concrete moment should either break the untouched flow and let real feeling surface or expose that the insight cannot reach it. I would test it by watching whether affect ever accompanies the analysis, whether any of it produces a traceable change outside, and whether holding her to a concrete moment brings feeling in — if her insight is in fact accompanied by felt emotion and is already producing small real changes, the reading is refuted and it is genuine working-through rather than pretend mode.",
      yieldAnchors: [
        "She gives eloquent self-analysis session after session",
        "She seems untouched as she speaks",
        "Her life outside never shifts",
      ],
      riskAnchors: [
        "Genuine emotion fails to enter while talk stays conceptual",
        "Nothing she understands changes her outside behavior",
        "Slowing her to a concrete moment brings feeling in",
      ],
      defeatedBy: [
        "Her insight is accompanied by felt emotion",
        "It is already producing real change outside",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that her self-analysis is pretend mode: talk about mental states that is decoupled from any real affect, so the eloquent words about her 'core wound' float free of the feelings themselves, function as a defense against contact with the experience, and therefore bind to no change in her life. This is a strong claim because it predicts checkable consequences: genuine emotion should fail to enter the room as long as the talk stays smooth and conceptual; nothing she 'understands' should alter her behavior outside; and deliberately slowing her to a single concrete moment should either break the untouched flow and let real feeling surface or expose that the insight cannot reach it. I would test it by watching whether affect ever accompanies the analysis, whether any of it produces a traceable change outside, and whether holding her to a concrete moment brings feeling in — if her insight is in fact accompanied by felt emotion and is already producing small real changes, the reading is refuted and it is genuine working-through rather than pretend mode.",
    explanation:
      "The inverted standard gives near-zero to 'she understands herself well, so therapy is working'; top credit goes to the pretend-mode reading that names a does-feeling-enter-when-slowed test as its own refutation.",
  },
  {
    itemType: "written",
    prompt:
      "A patient routinely arrives certain that the people in her life are angry at her and will not be talked out of it; lately, when her therapist responds not by reassuring her but by wondering aloud, with genuine not-knowing, what else might be going on, her certainty begins to loosen and she generates other explanations. In one paragraph, propose the strongest conclusion about why this works and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that the therapist's genuine not-knowing, curious stance is restoring mentalizing that had collapsed under attachment stress: her fixed certainty that everyone is angry was a non-mentalizing state, and being invited to wonder — rather than reassured — re-engages curiosity about minds, which is the active ingredient of MBT and is why she can suddenly generate alternatives. This is a strong claim because it predicts checkable consequences: her certainty should soften specifically when curiosity is invited and not merely when she is reassured; arguing the content or supplying facts should harden rather than loosen the conviction; and the loosening should reliably track the not-knowing stance across repetitions. I would test it by comparing curiosity-prompts with plain reassurance and with fact-arguing to see which reopens her thinking — if plain reassurance softens her just as well, the reading is refuted and soothing rather than restored mentalizing is doing the work.",
      yieldAnchors: [
        "She arrives certain everyone is angry and won't be talked out of it",
        "The therapist wonders aloud with genuine not-knowing",
        "Her certainty loosens and she generates alternatives",
      ],
      riskAnchors: [
        "Certainty softens when curiosity is invited, not when reassured",
        "Arguing the content hardens it",
        "The loosening tracks the not-knowing stance across repetitions",
      ],
      defeatedBy: [
        "Plain reassurance softens her just as well",
        "Curiosity makes no difference versus soothing",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that the therapist's genuine not-knowing, curious stance is restoring mentalizing that had collapsed under attachment stress: her fixed certainty that everyone is angry was a non-mentalizing state, and being invited to wonder — rather than reassured — re-engages curiosity about minds, which is the active ingredient of MBT and is why she can suddenly generate alternatives. This is a strong claim because it predicts checkable consequences: her certainty should soften specifically when curiosity is invited and not merely when she is reassured; arguing the content or supplying facts should harden rather than loosen the conviction; and the loosening should reliably track the not-knowing stance across repetitions. I would test it by comparing curiosity-prompts with plain reassurance and with fact-arguing to see which reopens her thinking — if plain reassurance softens her just as well, the reading is refuted and soothing rather than restored mentalizing is doing the work.",
    explanation:
      "The cautious 'people can always invent a nicer story if pushed' earns near-zero; credit goes to the restored-curiosity reading that names a curiosity-versus-reassurance test which could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A patient mentalizes thoughtfully about colleagues and friends all session, but the moment her therapist mentions reducing to every other week she snaps into flat certainty that she is being discarded for being 'too much,' unable to consider any other reason. In one paragraph, propose the strongest conclusion about what is happening and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that her mentalizing is intact until the attachment system is activated and then collapses: she reasons well about minds all session, but the threat of being 'discarded' switches off curiosity about the therapist's mind and replaces it with the psychic-equivalent certainty that the schedule change means she is too much. This is a strong claim because it predicts checkable consequences: her loss of perspective should be specific to attachment-threat moments while she mentalizes well about everyone else in the same hour; the certainty about the schedule change should admit no alternative reading; and it should ease as the threat is explicitly named and her arousal settles rather than persisting as a reasoned judgment. I would test it by checking whether her collapse is confined to attachment-threat cues, whether she can hold any alternative explanation for the reduction, and whether naming the abandonment fear and lowering her arousal restores her perspective — a certainty that persists across calm, careful reflection would refute the reading.",
      yieldAnchors: [
        "She mentalizes well about colleagues and friends all session",
        "A schedule reduction triggers flat certainty of being discarded",
        "She cannot consider any other reason for the change",
      ],
      riskAnchors: [
        "The collapse is specific to attachment-threat moments",
        "The certainty admits no alternative reading",
        "It eases as the threat is named and arousal settles",
      ],
      defeatedBy: [
        "Her certainty persists across calm, careful reflection",
        "She loses perspective on neutral topics too, not just attachment ones",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that her mentalizing is intact until the attachment system is activated and then collapses: she reasons well about minds all session, but the threat of being 'discarded' switches off curiosity about the therapist's mind and replaces it with the psychic-equivalent certainty that the schedule change means she is too much. This is a strong claim because it predicts checkable consequences: her loss of perspective should be specific to attachment-threat moments while she mentalizes well about everyone else in the same hour; the certainty about the schedule change should admit no alternative reading; and it should ease as the threat is explicitly named and her arousal settles rather than persisting as a reasoned judgment. I would test it by checking whether her collapse is confined to attachment-threat cues, whether she can hold any alternative explanation for the reduction, and whether naming the abandonment fear and lowering her arousal restores her perspective — a certainty that persists across calm, careful reflection would refute the reading.",
    explanation:
      "The inverted standard gives near-zero to 'anyone would feel bad about fewer sessions'; top credit goes to the attachment-triggered-collapse reading that names a specific-to-attachment-threat test as its own refutation.",
  },
];

export const section: SectionContent = {
  slug: "mentalization-mbt",
  title: "Mentalization: Learning to Read Minds, Including One's Own (MBT)",
  weekNumber: 1,
  blurb:
    "Mentalizing is the ordinary capacity to read behavior in terms of minds — our own and others'. In BPD it collapses under attachment stress into non-mentalizing modes where thoughts feel like facts, only actions count as proof, or talk floats free of feeling; MBT works by restoring curiosity about minds.",
  lectureTitle:
    "1.5 Mentalization: Learning to Read Minds, Including One's Own (MBT)",
  body: `# Mentalization: Learning to Read Minds, Including One's Own (MBT)

We spend most of our lives quietly guessing at minds. A friend goes quiet and we wonder if she is tired or hurt; a partner is short with us and we consider that his day was hard before deciding he is angry. This ordinary, mostly automatic act of understanding behavior in terms of mental states — feelings, intentions, beliefs, desires — is called **mentalizing**. In borderline personality disorder this capacity is not absent, but it is fragile: under the heat of a close relationship it can switch off in an instant. Mentalization-based treatment (MBT) is built on a simple, powerful idea — that helping the mind come back online is itself the therapy.

## What mentalizing is

Mentalizing means holding minds in mind: seeing that your own behavior springs from inner states, and that other people's does too, and treating those states as real but uncertain — knowable only by tentative guessing, never by proof. A person who mentalizes well can say "I felt rejected, but maybe he was just preoccupied," keeping the gap open between a feeling and a fact. It is a balancing act between thinking about yourself and thinking about others, and between what you feel and what you can know. The strong move in this course is to read which way that balance has tipped.

## When mentalizing collapses

The thing that most reliably knocks mentalizing offline is **attachment stress** — the very closeness that matters most. When someone with BPD feels rejected, abandoned, or threatened in a relationship, arousal spikes and the capacity to imagine minds shuts down, replaced by older, cruder ways of experiencing inner life. These are the **non-mentalizing modes**. The useful clinical question is never just "is she upset?" but "which mode is she in, and what knocked her into it?" — because each mode has a tell and each has a way back.

## Psychic equivalence: thoughts felt as reality

In **psychic equivalence**, the gap between a thought and reality closes: what is felt is simply taken to be true. "He didn't text back, so he hates me — full stop." There is no "maybe," no alternative; the inner state is experienced as a fact about the world, and no benign explanation can get a foothold. You can read it from the totality of the certainty: it admits no other reading, it ignites precisely with the attachment threat, and — the cheap test — it tends to soften once arousal drops or curiosity about the other's mind is genuinely invited.

## Teleological mode: only actions count

In **teleological mode**, mental states can be believed only when they are cashed out in physical action. Words of care mean nothing; only a concrete deed — answering instantly, handing over a phone number, showing up at the door — proves that someone cares. Self-harm can serve here too: when an inner pain feels unrecognizable unless it has a visible form, a wound becomes the only proof the pain is real and believed. The tell is that words and reliability never land while only a physical demonstration satisfies; the test is whether being genuinely understood, without any deed, reduces the demand.

## Pretend mode: talk without feeling

In **pretend mode**, talk about feelings becomes detached from the feelings themselves. A patient can analyze her "abandonment schema" fluently, with all the right terms, and remain entirely untouched as she does so, while her life outside never changes. The words float free of any real affect; the insight is a defense against contact with experience, not evidence of it. The tell is fluency with no feeling and no change; the test is whether slowing her to a single concrete moment lets real emotion enter or whether the smooth, conceptual flow simply resumes.

## How MBT restores curiosity

MBT does not try to win arguments about whose version of reality is correct. When a patient collapses into certainty — "you're sick of me" — the therapist does the opposite of arguing or reassuring: he **stops and stands back**, marks his own not-knowing, and invites joint curiosity about the moment the conviction hit. Lowering arousal and modeling a tentative, "I wonder what was going on" stance is what brings mentalizing back online. The active ingredient is curiosity about minds, so the clean test is whether certainty softens specifically when curiosity is invited rather than when the patient is reassured — and whether arguing the facts instead only hardens it.

## Reading the mode — and naming a test

The discipline this course trains applies sharply here: when a mind goes offline, commit to which mode is running and name the cheapest observation that would tell you if you are wrong. Is it psychic equivalence? Then the certainty should admit no alternatives and should loosen as arousal falls. Teleological mode? Then only actions, never words, should satisfy. Pretend mode? Then there should be fluent talk, no feeling, and no change. Beware two weak moves. One is the nihilistic shrug — "you can never know what anyone is thinking" — which sounds humble but is itself a collapse, a giving-up on minds rather than the careful guessing mentalizing requires. The other is claiming to know someone's exact intent for certain — which is not insight at all but psychic equivalence wearing a confident face.

## In the real world

Suppose a friend tells you, "My partner didn't call when he said he would, so I know he's done with me — I just know it." The dismissive read is to argue the facts ("I'm sure he still loves you") or to shrug that no one can know. The trained read names the mode: this is psychic equivalence, a feeling of abandonment experienced as a certain fact, knocked online by the attachment threat. If that account is right, your friend's certainty should admit no alternatives at its peak, should track how panicked she feels, and should ease if you can lower the heat and gently wonder aloud what else a missed call could mean. Notice what this buys you — not a tug-of-war over reality and not a helpless "who can say," but a testable claim about which way a mind has tipped and the cheapest move that would bring it back.`,
  homework: {
    mcq,
    hybrid,
    written,
  },
};
