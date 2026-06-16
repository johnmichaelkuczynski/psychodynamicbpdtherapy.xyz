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
      "A patient whose visual cortex was damaged says they see nothing in their left visual field, yet when asked to guess where a light flashed there, they point correctly far above chance and can even catch a ball thrown to that side. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Visual information is still being processed and guiding action along pathways that bypass conscious awareness, so 'seeing' and 'acting on sight' can come apart; test whether forced-choice accuracy stays above chance while the patient denies any awareness, whether a brain scan shows intact subcortical visual routes, and whether disrupting those routes removes the guessing skill.",
        credit: 1.0,
      },
      {
        text: "The patient probably still uses some vision without knowing it; we could run more guessing trials.",
        credit: 0.6,
      },
      {
        text: "Something about the patient's vision seems to still work.",
        credit: 0.3,
      },
      {
        text: "Whether someone 'really sees' is a private mystery, so this behavior tells us nothing about the mind.",
        credit: 0,
      },
    ],
    correctAnswer:
      "Visual information is still being processed and guiding action along pathways that bypass conscious awareness, so 'seeing' and 'acting on sight' can come apart; test whether forced-choice accuracy stays above chance while the patient denies any awareness, whether a brain scan shows intact subcortical visual routes, and whether disrupting those routes removes the guessing skill.",
    explanation:
      "Top credit names a mechanism (vision routed around awareness) and three checkable tests; the 'private mystery, tells us nothing' option refuses to commit and so opens no inquiry.",
  },
  {
    itemType: "mc",
    prompt:
      "Across several anesthetics, patients stop responding and form no memories at a particular dose. Brain recordings show that long-range signaling between the front and back of the cortex collapses at exactly the dose where responsiveness disappears. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Consciousness is the hard problem, so brain recordings can never reveal anything about it.",
        credit: 0,
      },
      {
        text: "There seems to be some link between the brain signal and being knocked out.",
        credit: 0.3,
      },
      {
        text: "Long-range front-to-back cortical communication is a strong candidate mechanism for conscious responsiveness; test whether the signal collapses at the report-losing dose across different anesthetics, whether briefly restoring that signaling restores responsiveness, and whether the same signature drops during dreamless sleep.",
        credit: 1.0,
      },
      {
        text: "The brain signal probably matters for consciousness; we could try a few more anesthetics.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Long-range front-to-back cortical communication is a strong candidate mechanism for conscious responsiveness; test whether the signal collapses at the report-losing dose across different anesthetics, whether briefly restoring that signaling restores responsiveness, and whether the same signature drops during dreamless sleep.",
    explanation:
      "The strongest conclusion pins a mechanism to a measurable signal and lists three disconfirmable tests; the 'can never reveal anything' answer is the zero-credit dodge.",
  },
  {
    itemType: "mc",
    prompt:
      "A split-brain patient (whose left and right hemispheres are surgically disconnected) uses the left hand, controlled by the right hemisphere, to pick an object the speaking left hemisphere cannot name. When asked why they picked it, the speaking hemisphere confidently invents a reason. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Each hemisphere can run its own stream of processing, and the speaking hemisphere makes up explanations for actions it did not originate; test whether the left hand reliably selects targets the patient verbally denies seeing, whether the spoken reasons systematically rationalize, and whether letting information cross again (e.g., both eyes see the cue) abolishes the split responses.",
        credit: 1.0,
      },
      {
        text: "The two hemispheres seem to act somewhat independently.",
        credit: 0.3,
      },
      {
        text: "This shows the patient literally contains two separate souls living in one skull.",
        credit: 0,
      },
      {
        text: "The hemispheres probably work separately here; we could test more patients.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Each hemisphere can run its own stream of processing, and the speaking hemisphere makes up explanations for actions it did not originate; test whether the left hand reliably selects targets the patient verbally denies seeing, whether the spoken reasons systematically rationalize, and whether letting information cross again (e.g., both eyes see the cue) abolishes the split responses.",
    explanation:
      "Top credit commits to a mechanism (separable processing plus confabulation) with three tests; the 'two separate souls' option overreaches past what the behavior shows and earns zero.",
  },
  {
    itemType: "mc",
    prompt:
      "In a 'change blindness' demo, people stare at a photo that briefly flickers; a large object in the scene appears or vanishes across the flicker, yet most viewers fail to notice the change for many seconds. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Perception is too subjective to learn anything from people missing a change.",
        credit: 0,
      },
      {
        text: "We consciously hold far less of a scene at once than it feels like, building the rich impression on demand where we attend; test whether cueing attention to the changing region speeds detection, whether changes away from the focus of attention are missed most, and whether eye-tracking shows misses when the change falls outside fixation.",
        credit: 1.0,
      },
      {
        text: "People seem to miss changes when they're not looking right at them.",
        credit: 0.3,
      },
      {
        text: "We probably don't see everything at once; we could run more flicker trials.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "We consciously hold far less of a scene at once than it feels like, building the rich impression on demand where we attend; test whether cueing attention to the changing region speeds detection, whether changes away from the focus of attention are missed most, and whether eye-tracking shows misses when the change falls outside fixation.",
    explanation:
      "The richest conclusion names a mechanism (sparse, attention-built awareness) and three checks; 'too subjective to learn anything' is the barren refusal.",
  },
  {
    itemType: "mc",
    prompt:
      "When a hidden real hand and a visible fake rubber hand are stroked in perfect synchrony, people start to feel the rubber hand is their own and flinch when it is threatened. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Body ownership seems to be a bit flexible.",
        credit: 0.3,
      },
      {
        text: "The brain infers which body is 'mine' by combining synchronous sight and touch, so even the bodily self is a construction; test whether out-of-sync stroking abolishes the illusion, whether skin-conductance spikes when the fake hand is threatened, and whether the felt drift of the hand toward the fake one grows with stroking synchrony.",
        credit: 1.0,
      },
      {
        text: "The sense of owning a body is fixed and could never be fooled by this.",
        credit: 0,
      },
      {
        text: "Synchrony probably tricks the body sense; we could repeat the stroking setup.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The brain infers which body is 'mine' by combining synchronous sight and touch, so even the bodily self is a construction; test whether out-of-sync stroking abolishes the illusion, whether skin-conductance spikes when the fake hand is threatened, and whether the felt drift of the hand toward the fake one grows with stroking synchrony.",
    explanation:
      "Top credit commits to a multisensory-inference mechanism with three falsifiable tests; the 'fixed, could never be fooled' option is defeated by the very result described.",
  },
  {
    itemType: "mc",
    prompt:
      "In Libet-style experiments, a readiness signal builds up in the brain a fraction of a second before people report the conscious urge to move their hand. Which conclusion best follows?",
    mcOptions: [
      {
        text: "This proves free will is a total illusion and our choices make no difference at all.",
        credit: 0,
      },
      {
        text: "The brain seems to get going a little before we notice deciding.",
        credit: 0.3,
      },
      {
        text: "The brain begins preparing the action before the conscious urge is reported, so the felt 'moment of deciding' is partly a late readout rather than the sole first cause; test whether the readiness signal reliably precedes the reported urge, whether decoding brain activity predicts the choice before the report, and whether consciously vetoing the movement still shows the early buildup.",
        credit: 1.0,
      },
      {
        text: "Brain activity probably comes first; we could measure more movements.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The brain begins preparing the action before the conscious urge is reported, so the felt 'moment of deciding' is partly a late readout rather than the sole first cause; test whether the readiness signal reliably precedes the reported urge, whether decoding brain activity predicts the choice before the report, and whether consciously vetoing the movement still shows the early buildup.",
    explanation:
      "The best conclusion sticks to what the timing supports (a measurable lead, with a veto test) ; the 'free will is a total illusion' leap overreaches far past the data and earns zero.",
  },
  {
    itemType: "mc",
    prompt:
      "In binocular rivalry, a different image is shown to each eye; the conscious image people report keeps flipping back and forth between the two even though the physical input never changes. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Conscious perception is selected by the brain among competing inputs rather than fixed by the stimulus; test whether brain activity tracking the dominant image switches in step with the report while the input is held constant, whether directing attention biases which image dominates, and whether raising one image's contrast lengthens its turns.",
        credit: 1.0,
      },
      {
        text: "The seen image just seems to switch on its own.",
        credit: 0.3,
      },
      {
        text: "What we consciously see is fully fixed by whatever hits the eyes, so this can't really happen.",
        credit: 0,
      },
      {
        text: "The brain probably picks the image; we could time more switches.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Conscious perception is selected by the brain among competing inputs rather than fixed by the stimulus; test whether brain activity tracking the dominant image switches in step with the report while the input is held constant, whether directing attention biases which image dominates, and whether raising one image's contrast lengthens its turns.",
    explanation:
      "Top credit names a selection mechanism with three checkable consequences; the 'fully fixed by the eyes' option is contradicted by the constant-input switching described.",
  },
  {
    itemType: "mc",
    prompt:
      "People asked to count basketball passes in a video routinely fail to notice a person in a gorilla suit walking through the middle of the scene, even though eye-tracking shows they looked right at it. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Attention is too personal to draw any conclusion about awareness.",
        credit: 0,
      },
      {
        text: "Conscious awareness depends on attention, so an unattended event can go unseen even when the eyes point at it; test whether lowering the counting load lets people notice the gorilla, whether fixations land on it despite no report, and whether warning viewers in advance raises detection.",
        credit: 1.0,
      },
      {
        text: "People seem to miss things when they're busy.",
        credit: 0.3,
      },
      {
        text: "Attention probably gates what we see; we could show the clip to more viewers.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Conscious awareness depends on attention, so an unattended event can go unseen even when the eyes point at it; test whether lowering the counting load lets people notice the gorilla, whether fixations land on it despite no report, and whether warning viewers in advance raises detection.",
    explanation:
      "The strongest conclusion ties awareness to attention and names three tests, including the load manipulation; 'too personal to draw any conclusion' commits to nothing.",
  },
  {
    itemType: "mc",
    prompt:
      "A word is flashed on screen too briefly for people to consciously read it, yet afterward they are faster to judge a related word, as if the hidden word had been understood. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The flashed word seems to have some effect.",
        credit: 0.3,
      },
      {
        text: "Meaning can be extracted from a stimulus too brief to consciously report, so understanding does not always require awareness; test whether the speed-up persists when subjects identify the word only at chance, whether the effect shrinks as exposure nears the awareness threshold, and whether a mask that blocks any report still leaves the priming.",
        credit: 1.0,
      },
      {
        text: "Nothing can be concluded because we can never be sure the person didn't glimpse the word.",
        credit: 0,
      },
      {
        text: "The hidden word probably still registers; we could flash more words.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Meaning can be extracted from a stimulus too brief to consciously report, so understanding does not always require awareness; test whether the speed-up persists when subjects identify the word only at chance, whether the effect shrinks as exposure nears the awareness threshold, and whether a mask that blocks any report still leaves the priming.",
    explanation:
      "Top credit names unconscious meaning processing and three tests that pin down awareness; the 'we can never be sure' answer refuses to commit and earns zero.",
  },
  {
    itemType: "mc",
    prompt:
      "A behaviorally unresponsive brain-injury patient is asked, while being scanned, to imagine playing tennis; their brain lights up in the same motor-planning region, in the same way, as healthy volunteers given the same instruction. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Inner experience is unknowable, so a scan can say nothing about whether the patient is aware.",
        credit: 0,
      },
      {
        text: "Some behaviorally unresponsive patients retain conscious awareness that can be detected through willed brain activity; test whether the patient can answer yes/no questions by choosing distinct imagery tasks, whether the responses stay consistent across sessions, and whether they correctly answer questions only the patient could know.",
        credit: 1.0,
      },
      {
        text: "The patient's brain seems to respond like an aware person's.",
        credit: 0.3,
      },
      {
        text: "The patient may still be aware; we could scan them again.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Some behaviorally unresponsive patients retain conscious awareness that can be detected through willed brain activity; test whether the patient can answer yes/no questions by choosing distinct imagery tasks, whether the responses stay consistent across sessions, and whether they correctly answer questions only the patient could know.",
    explanation:
      "The best conclusion commits to detectable awareness and names a communication test that could refute it; 'inner experience is unknowable' is the zero-credit dodge.",
  },
  {
    itemType: "mc",
    prompt:
      "A person reports that every letter of the alphabet automatically appears to them in a specific color — 'A' is always red, 'B' always blue — and these pairings never change over the years. Which conclusion best follows?",
    mcOptions: [
      {
        text: "In some brains, extra cross-talk between sensory regions produces real, automatic added experiences (here, colors triggered by letters); test whether the letter-color pairings stay stable across years of retesting, whether a visual-search task shows the colors pop out involuntarily, and whether brain imaging shows color-area activity to plain black letters.",
        credit: 1.0,
      },
      {
        text: "The person seems to associate letters with colors.",
        credit: 0.3,
      },
      {
        text: "People's private experiences can't be checked, so this report tells us nothing.",
        credit: 0,
      },
      {
        text: "They probably really see the colors; we could ask them again later.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "In some brains, extra cross-talk between sensory regions produces real, automatic added experiences (here, colors triggered by letters); test whether the letter-color pairings stay stable across years of retesting, whether a visual-search task shows the colors pop out involuntarily, and whether brain imaging shows color-area activity to plain black letters.",
    explanation:
      "Top credit names a cross-activation mechanism with three objective tests of an inner experience; 'can't be checked, tells us nothing' is the unfruitful refusal.",
  },
  {
    itemType: "mc",
    prompt:
      "During REM sleep, with the eyes closed and little outside input, people have vivid, detailed conscious experiences they later recall as dreams. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Dreams are too mysterious to support any conclusion about consciousness.",
        credit: 0,
      },
      {
        text: "The brain seems able to make experiences while asleep.",
        credit: 0.3,
      },
      {
        text: "The brain can generate conscious experience internally without external input, so consciousness is constructed, not merely received; test whether lucid dreamers can send pre-agreed eye-movement signals during verified REM, whether reported vividness tracks REM brain activity, and whether waking people from REM yields more vivid reports than waking them from deep non-REM.",
        credit: 1.0,
      },
      {
        text: "The sleeping brain probably builds the dream; we could collect more dream reports.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The brain can generate conscious experience internally without external input, so consciousness is constructed, not merely received; test whether lucid dreamers can send pre-agreed eye-movement signals during verified REM, whether reported vividness tracks REM brain activity, and whether waking people from REM yields more vivid reports than waking them from deep non-REM.",
    explanation:
      "The richest conclusion names internal construction and three tests, including the lucid-dream signal; 'too mysterious to support any conclusion' opens no path.",
  },
  {
    itemType: "mc",
    prompt:
      "After a stroke, a patient is paralyzed on the left side but cheerfully insists nothing is wrong with that arm and tries to use it. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The brain's self-monitoring can fail, so awareness of one's own body and state is itself a constructed process that can break; test whether the denial is specific to the affected limb, whether cold-water stimulation of the inner ear briefly restores accurate awareness, and whether such cases cluster around lesions in self-monitoring brain regions.",
        credit: 1.0,
      },
      {
        text: "The patient seems unaware of the paralysis.",
        credit: 0.3,
      },
      {
        text: "Self-awareness is a single fixed thing that can't selectively break like this.",
        credit: 0,
      },
      {
        text: "Their self-awareness probably broke; we could examine more stroke patients.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The brain's self-monitoring can fail, so awareness of one's own body and state is itself a constructed process that can break; test whether the denial is specific to the affected limb, whether cold-water stimulation of the inner ear briefly restores accurate awareness, and whether such cases cluster around lesions in self-monitoring brain regions.",
    explanation:
      "Top credit treats self-awareness as a breakable brain process and names three tests; the 'single fixed thing that can't break' option is defeated by the selective denial described.",
  },
  {
    itemType: "mc",
    prompt:
      "A person who lost a hand still vividly feels the missing hand — its position, even pain in it. Sometimes touching their face produces a sensation felt in the phantom hand. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Phantom feelings are too strange to draw any conclusion from.",
        credit: 0,
      },
      {
        text: "The missing hand still seems to be felt somehow.",
        credit: 0.3,
      },
      {
        text: "The brain keeps an internal body map that can produce conscious sensation even without the body part, and that map can rewire; test whether mirror-box visual feedback reduces phantom pain, whether the phantom shifts as nearby cortex reorganizes, and whether touching the face reliably evokes sensation referred to the phantom hand.",
        credit: 1.0,
      },
      {
        text: "The brain probably still maps the hand; we could interview more amputees.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The brain keeps an internal body map that can produce conscious sensation even without the body part, and that map can rewire; test whether mirror-box visual feedback reduces phantom pain, whether the phantom shifts as nearby cortex reorganizes, and whether touching the face reliably evokes sensation referred to the phantom hand.",
    explanation:
      "The strongest conclusion names an internal body-map mechanism with three tests, including the face-referral check; 'too strange to draw any conclusion' is the barren dodge.",
  },
  {
    itemType: "mc",
    prompt:
      "In a card-gambling task, players begin steering away from risky decks and their palms sweat just before reaching for a bad deck — well before they can explain in words which decks are dangerous. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Decision-making is too complex to say anything about awareness here.",
        credit: 0,
      },
      {
        text: "People seem to sense danger before they can say why.",
        credit: 0.3,
      },
      {
        text: "Bodily and emotional signals can guide good choices before a person consciously knows the rule, so useful processing runs ahead of awareness; test whether the sweat response precedes avoiding bad decks before stated knowledge, whether patients who lack such bodily signals fail to learn the task, and whether blocking those signals removes the early advantage.",
        credit: 1.0,
      },
      {
        text: "Gut feelings probably guide the choices; we could run more players.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Bodily and emotional signals can guide good choices before a person consciously knows the rule, so useful processing runs ahead of awareness; test whether the sweat response precedes avoiding bad decks before stated knowledge, whether patients who lack such bodily signals fail to learn the task, and whether blocking those signals removes the early advantage.",
    explanation:
      "Top credit names a mechanism (emotional signals leading awareness) with three tests; 'too complex to say anything' refuses to lead and earns zero.",
  },
];

const hybrid: HomeworkItem[] = [
  {
    itemType: "hybrid",
    prompt:
      "A chimpanzee is given a mirror for several days. A researcher secretly dabs a spot of odorless dye on the chimp's forehead, where it can only be seen in the mirror. On seeing its reflection, the chimp reaches up and touches the spot on its own forehead. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The chimp likely recognizes the reflection as itself — representing its own body as an object — rather than treating the image as a stranger; test whether it touches the mark only when the mirror is present, whether species that fail the task keep reacting socially to the image, and whether removing the dye stops the self-directed touching.",
        credit: 1.0,
      },
      {
        text: "The chimp seems to understand the mirror somehow.",
        credit: 0.3,
      },
      {
        text: "Animal minds are unknowable, so the mark-touching tells us nothing.",
        credit: 0,
      },
      {
        text: "The chimp probably recognizes itself; we could test a few more chimps.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your self-recognition reading from the rival 'the chimp is just reacting to a spot it could feel or see directly,' and say what result would refute your reading.",
      modelAnswer:
        "Cheapest test: use only a mirror-visible, non-tactile mark and remove the mirror — if self-recognition drives it, the chimp should touch the spot only when the mirror is present and not otherwise. My reading is refuted if the chimp touches the spot just as much with no mirror, showing it feels or sees it directly rather than recognizing itself.",
      yieldAnchors: [
        "The dye is odorless and only visible in the mirror",
        "The chimp touches the spot on its own forehead, not the mirror",
        "This follows days of mirror exposure",
      ],
      riskAnchors: [
        "Mark-touching happens only when the mirror is present",
        "Species that fail still treat the image as another animal",
        "Removing the dye stops the self-directed touching",
      ],
      defeatedBy: [
        "The chimp can feel or directly see the mark without the mirror",
        "Animal minds are unknowable so the behavior means nothing",
      ],
    },
    correctAnswer:
      "The chimp likely recognizes the reflection as itself — representing its own body as an object — rather than treating the image as a stranger; test whether it touches the mark only when the mirror is present, whether species that fail the task keep reacting socially to the image, and whether removing the dye stops the self-directed touching.",
    explanation:
      "Full credit commits to a self-representation mechanism with three checks and a mirror-removal test that names its own refutation; 'animal minds are unknowable' opens nothing.",
  },
  {
    itemType: "hybrid",
    prompt:
      "Researchers zap the awake brain with a brief magnetic pulse and record the echo. In awake people the echo is complex and spreads widely; under anesthesia and in dreamless sleep the echo is simple and stays local. The complexity rises again when vivid dreaming returns. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The complexity of the brain's response to a perturbation tracks the presence of consciousness, not just whether someone is awake; test whether the index drops in every unaware state and rises in vivid dreams during sleep, whether it separates aware locked-in patients from truly unaware ones, and whether it climbs back as anesthesia wears off.",
        credit: 1.0,
      },
      {
        text: "The brain's echo seems bigger when people are conscious.",
        credit: 0.3,
      },
      {
        text: "Consciousness is the hard problem, so no brain measurement could ever index it.",
        credit: 0,
      },
      {
        text: "The complexity probably tracks consciousness; we could test more sleepers.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'complexity indexes consciousness' reading from the rival 'it just measures how awake or how stimulated the brain is,' and say what result would refute your reading.",
      modelAnswer:
        "Cheapest test: measure the index during vivid REM dreaming, when the person is asleep and getting little input but is consciously experiencing — my reading predicts high complexity there. It is refuted if dreaming brains, despite reported vivid experience, show the same low complexity as dreamless sleep, which would tie the index to wakefulness or input rather than to consciousness.",
      yieldAnchors: [
        "Echo is complex and widespread when awake",
        "Echo is simple and local under anesthesia and dreamless sleep",
        "Complexity rises again during vivid dreaming",
      ],
      riskAnchors: [
        "The index drops in every unaware state and rises in vivid dreams",
        "It separates aware locked-in patients from truly unaware ones",
        "It climbs back as anesthesia wears off",
      ],
      defeatedBy: [
        "The index merely tracks wakefulness or sensory input",
        "No brain measurement could ever index consciousness",
      ],
    },
    correctAnswer:
      "The complexity of the brain's response to a perturbation tracks the presence of consciousness, not just whether someone is awake; test whether the index drops in every unaware state and rises in vivid dreams during sleep, whether it separates aware locked-in patients from truly unaware ones, and whether it climbs back as anesthesia wears off.",
    explanation:
      "Full credit ties consciousness to a measurable signature with three tests and a dreaming case that names its refutation; the 'no measurement could ever index it' answer is the dodge.",
  },
  {
    itemType: "hybrid",
    prompt:
      "Two people name colors identically and never disagree about what to call any patch. A philosopher claims their inner experience of red could still secretly differ and could never be detected. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Even when color words match, differences in the underlying experience can leave measurable fingerprints, so private quality is not wholly beyond test; test whether the two people's similarity judgments between color pairs diverge, whether their brain color-response patterns differ, and whether their reaction-time confusions among shades differ.",
        credit: 1.0,
      },
      {
        text: "Their color experiences might differ in some way.",
        credit: 0.3,
      },
      {
        text: "Subjective experience is fully private, so absolutely nothing about it can ever be measured.",
        credit: 0,
      },
      {
        text: "Their experiences could differ; we could ask them to name more colors.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'experience leaves measurable fingerprints' reading from the rival 'matching color words means identical experience,' and say what result would refute your reading.",
      modelAnswer:
        "Cheapest test: have both people rate how similar many color pairs look (not just name them) — if their inner experience differs, their similarity maps should diverge even though their names match. My reading is refuted if their similarity judgments and brain color responses are indistinguishable, in which case the matching words really do track matching experience as far as we can probe.",
      yieldAnchors: [
        "The two people name colors identically",
        "They never disagree about what to call a patch",
        "The claim is that inner experience could still differ",
      ],
      riskAnchors: [
        "Their pairwise color-similarity judgments diverge",
        "Their brain color-response patterns differ",
        "Their reaction-time confusions among shades differ",
      ],
      defeatedBy: [
        "Matching color names guarantees identical experience",
        "Nothing about private experience can ever be measured",
      ],
    },
    correctAnswer:
      "Even when color words match, differences in the underlying experience can leave measurable fingerprints, so private quality is not wholly beyond test; test whether the two people's similarity judgments between color pairs diverge, whether their brain color-response patterns differ, and whether their reaction-time confusions among shades differ.",
    explanation:
      "Full credit commits to detectable fingerprints with three tests and a similarity-judgment probe that names its refutation; 'nothing can ever be measured' is the zero-credit refusal.",
  },
  {
    itemType: "hybrid",
    prompt:
      "The cerebellum holds far more neurons than the rest of the brain, yet people born without it can still be conscious and report experiences. In contrast, small damage to the thalamus-and-cortex network can abolish consciousness entirely. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Damage seems to matter more in some regions than others.",
        credit: 0.3,
      },
      {
        text: "Consciousness depends on how neurons are wired together, not raw neuron count, since the cerebellum's largely feed-forward circuits contribute little to experience; test whether consciousness survives cerebellar loss, whether it collapses with thalamocortical damage, and whether richly interconnected (recurrent) architecture predicts a region's contribution better than its cell count.",
        credit: 1.0,
      },
      {
        text: "More neurons always means more consciousness, so the cerebellum must be the seat of the mind.",
        credit: 0,
      },
      {
        text: "Wiring probably matters more than counts; we could compare more brain regions.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'wiring, not neuron count' reading from the rival 'consciousness simply scales with how many neurons survive,' and say what result would refute your reading.",
      modelAnswer:
        "Cheapest test: compare consciousness in people who lost the huge-but-feed-forward cerebellum against people with small thalamocortical damage — my reading predicts the small recurrent-network damage matters far more despite fewer neurons lost. It is refuted if outcomes track total neurons lost rather than which network was hit, which would favor sheer count over wiring.",
      yieldAnchors: [
        "The cerebellum holds the most neurons",
        "People without a cerebellum can still be conscious",
        "Small thalamocortical damage can abolish consciousness",
      ],
      riskAnchors: [
        "Consciousness survives cerebellar loss",
        "Consciousness collapses with thalamocortical damage",
        "Recurrent architecture predicts contribution better than cell count",
      ],
      defeatedBy: [
        "Consciousness scales purely with surviving neuron count",
        "The cerebellum, with the most neurons, is the seat of the mind",
      ],
    },
    correctAnswer:
      "Consciousness depends on how neurons are wired together, not raw neuron count, since the cerebellum's largely feed-forward circuits contribute little to experience; test whether consciousness survives cerebellar loss, whether it collapses with thalamocortical damage, and whether richly interconnected (recurrent) architecture predicts a region's contribution better than its cell count.",
    explanation:
      "Full credit names wiring as the mechanism with three tests and a lesion comparison that names its refutation; 'more neurons always means more consciousness' is defeated by the cerebellum case.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A sleepwalker gets up, walks to the kitchen, pours a drink, and returns to bed. In the morning they remember none of it, and recordings show their brain was in a deep non-waking state throughout. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Complex, coordinated behavior can run with little or no conscious awareness, so consciousness is not required for all skilled action; test whether sleepwalkers consistently lack recall and show non-waking brain activity, whether their actions are stereotyped and inflexible, and whether they fail tasks that need flexible, moment-to-moment awareness.",
        credit: 1.0,
      },
      {
        text: "The sleepwalker seems to act without being fully awake.",
        credit: 0.3,
      },
      {
        text: "Any coordinated action like this proves full consciousness must be present.",
        credit: 0,
      },
      {
        text: "They probably weren't conscious; we could record more sleepwalking episodes.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'action without awareness' reading from the rival 'the sleepwalker was actually awake and simply forgot,' and say what result would refute your reading.",
      modelAnswer:
        "Cheapest test: record brain activity during the episode and probe responsiveness — my reading predicts a deep non-waking pattern and failure on tasks needing flexible awareness, unlike a truly awake person. It is refuted if the sleepwalker shows a normal awake brain pattern and can flexibly respond to novel requests, which would mean they were awake and merely amnesic.",
      yieldAnchors: [
        "The sleepwalker performs coordinated multi-step actions",
        "They have no memory of it afterward",
        "Recordings show a deep non-waking brain state",
      ],
      riskAnchors: [
        "Sleepwalkers consistently lack recall and show non-waking activity",
        "Their actions are stereotyped and inflexible",
        "They fail tasks needing flexible, online awareness",
      ],
      defeatedBy: [
        "Any coordinated action proves full consciousness was present",
        "The sleepwalker was simply awake and forgot",
      ],
    },
    correctAnswer:
      "Complex, coordinated behavior can run with little or no conscious awareness, so consciousness is not required for all skilled action; test whether sleepwalkers consistently lack recall and show non-waking brain activity, whether their actions are stereotyped and inflexible, and whether they fail tasks that need flexible, moment-to-moment awareness.",
    explanation:
      "Full credit names action-without-awareness with three tests and a brain-state check that names its refutation; 'any coordinated action proves consciousness' overreaches and earns zero.",
  },
  {
    itemType: "hybrid",
    prompt:
      "After a brain lesion, a patient still reports feeling pain when pricked and can point to where it is, but says it doesn't bother them at all and makes no effort to withdraw or protect the spot. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Pain has too many sides to conclude anything from one odd patient.",
        credit: 0,
      },
      {
        text: "The raw sensation of pain and its felt unpleasantness are separable brain processes that can come apart; test whether the patient localizes the prick accurately yet rates it non-distressing, whether the lesion spares sensory pain areas but hits emotional ones, and whether protective reflexes weaken even though detection stays intact.",
        credit: 1.0,
      },
      {
        text: "The patient seems to feel pain differently.",
        credit: 0.3,
      },
      {
        text: "Sensation and suffering probably differ; we could examine more such patients.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'sensation and unpleasantness are separable' reading from the rival 'the patient simply hides or denies their distress,' and say what result would refute your reading.",
      modelAnswer:
        "Cheapest test: compare accurate pain localization against involuntary signs of distress (withdrawal reflex, stress response) — my reading predicts intact detection but blunted involuntary distress. It is refuted if the patient shows normal involuntary withdrawal and stress responses, which would suggest they feel the unpleasantness and are merely concealing it.",
      yieldAnchors: [
        "The patient reports feeling and locating the pain",
        "The patient says it doesn't bother them",
        "The patient makes no effort to withdraw or protect",
      ],
      riskAnchors: [
        "Accurate localization paired with non-distress ratings",
        "Lesion spares sensory pain areas but hits emotional ones",
        "Protective reflexes weaken while detection stays intact",
      ],
      defeatedBy: [
        "The patient feels full distress but conceals it",
        "Nothing follows from a single unusual patient",
      ],
    },
    correctAnswer:
      "The raw sensation of pain and its felt unpleasantness are separable brain processes that can come apart; test whether the patient localizes the prick accurately yet rates it non-distressing, whether the lesion spares sensory pain areas but hits emotional ones, and whether protective reflexes weaken even though detection stays intact.",
    explanation:
      "Full credit splits sensation from unpleasantness with three tests and a reflex check that names its refutation; 'too many sides to conclude anything' is the barren dodge.",
  },
  {
    itemType: "hybrid",
    prompt:
      "Volunteers complete eight weeks of daily attention training (meditation). Afterward they spot more faint, near-threshold flashes they used to miss, and recover faster when two targets appear in quick succession. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Trained attention seems to sharpen perception.",
        credit: 0.3,
      },
      {
        text: "Directing attention shapes what reaches conscious awareness, and this gating is trainable; test whether trained volunteers detect more near-threshold stimuli than before, whether their lapse when two targets appear quickly shrinks, and whether the gains scale with total hours practiced.",
        credit: 1.0,
      },
      {
        text: "Attention is too personal a skill to draw any conclusion about awareness.",
        credit: 0,
      },
      {
        text: "Training probably helps attention; we could run another eight-week group.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'training sharpens the attention gate on awareness' reading from the rival 'people just tried harder on the second test,' and say what result would refute your reading.",
      modelAnswer:
        "Cheapest test: compare the trained group against an equally motivated control group doing a sham activity, and check whether detection gains scale with actual practice hours — my reading predicts gains track training dose, not mere effort. It is refuted if the sham-activity controls improve just as much, which would point to effort or test familiarity rather than trained attention.",
      yieldAnchors: [
        "Eight weeks of daily attention training",
        "More near-threshold flashes detected afterward",
        "Faster recovery when two targets appear in quick succession",
      ],
      riskAnchors: [
        "Trained volunteers detect more near-threshold stimuli",
        "The two-target lapse shrinks with training",
        "Gains scale with total hours practiced",
      ],
      defeatedBy: [
        "People simply tried harder on the second test",
        "Attention is too personal to study",
      ],
    },
    correctAnswer:
      "Directing attention shapes what reaches conscious awareness, and this gating is trainable; test whether trained volunteers detect more near-threshold stimuli than before, whether their lapse when two targets appear quickly shrinks, and whether the gains scale with total hours practiced.",
    explanation:
      "Full credit names trainable attentional gating with three tests and a dose-response check that names its refutation; 'too personal to draw any conclusion' commits to nothing.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A chatbot, when asked, types 'I feel sad and lonely today.' Its words are produced by predicting likely text from billions of human sentences. An engineer wonders whether it is conscious. Which conclusion best follows?",
    mcOptions: [
      {
        text: "A verbal report of feeling is not by itself evidence of experience, since a system can produce the words by pattern-matching without any inner state; test whether the reports track any persistent internal state, whether they depend only on text statistics rather than anything grounded beyond words, and whether removing the relevant training text removes the 'feelings.'",
        credit: 1.0,
      },
      {
        text: "The chatbot might or might not have feelings.",
        credit: 0.3,
      },
      {
        text: "The chatbot says it feels sad, so it is definitely conscious.",
        credit: 0,
      },
      {
        text: "Its words may not mean real feeling; we could ask it more questions.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'words aren't proof of experience' reading from the rival 'a fluent report of sadness shows the system feels sad,' and say what result would refute your reading.",
      modelAnswer:
        "Cheapest test: check whether the 'sadness' tracks any persistent internal state or is fully explained by the prompt and training text — my reading predicts the report appears and vanishes with the text statistics, not with anything the system independently carries. It is refuted if the reports correspond to a stable internal state that survives changes in wording and is grounded in something beyond predicting likely text.",
      yieldAnchors: [
        "The chatbot types that it feels sad and lonely",
        "Its words are produced by predicting likely text",
        "It was trained on billions of human sentences",
      ],
      riskAnchors: [
        "The reports track no persistent internal state",
        "They depend only on text statistics, not grounded states",
        "Removing the relevant training text removes the 'feelings'",
      ],
      defeatedBy: [
        "A fluent report of sadness proves the system feels sad",
        "Saying it feels something makes it conscious",
      ],
    },
    correctAnswer:
      "A verbal report of feeling is not by itself evidence of experience, since a system can produce the words by pattern-matching without any inner state; test whether the reports track any persistent internal state, whether they depend only on text statistics rather than anything grounded beyond words, and whether removing the relevant training text removes the 'feelings.'",
    explanation:
      "Full credit separates fluent report from genuine experience with three tests and a grounding check that names its refutation; 'it says so, therefore conscious' overreaches and earns zero.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A newborn baby, far too young to speak, grimaces, cries, and shows a spike in stress hormones when given a heel-prick blood test. With a gentle pain reliever, both the grimace and the hormone spike fall. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Babies are too different from adults to conclude anything about their experience.",
        credit: 0,
      },
      {
        text: "The baby seems to be in some distress.",
        credit: 0.3,
      },
      {
        text: "Behavioral and physiological signs let us reasonably infer the baby experiences pain even without words; test whether facial grimace and stress hormones track the noxious stimulus, whether pain relief lowers both together, and whether the baby's pain-network brain activity resembles an adult's.",
        credit: 1.0,
      },
      {
        text: "The baby probably feels pain; we could observe more heel-prick tests.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'the baby experiences pain' reading from the rival 'these are just reflexes with no experience behind them,' and say what result would refute your reading.",
      modelAnswer:
        "Cheapest test: give a genuine analgesic and check whether the grimace, stress hormones, and pain-network brain activity all fall together — my reading predicts a coordinated drop tied to a pain-specific treatment. It is refuted if a pure spinal reflex with no pain-network brain activity fully explains the signs and analgesia leaves the brain response untouched.",
      yieldAnchors: [
        "The baby grimaces and cries at the heel prick",
        "Stress hormones spike with the prick",
        "Pain relief lowers both the grimace and the hormones",
      ],
      riskAnchors: [
        "Grimace and stress hormones track the noxious stimulus",
        "Analgesia lowers both signs together",
        "Pain-network brain activity resembles an adult's",
      ],
      defeatedBy: [
        "The signs are pure reflexes with no experience behind them",
        "Babies are too unlike adults to infer anything",
      ],
    },
    correctAnswer:
      "Behavioral and physiological signs let us reasonably infer the baby experiences pain even without words; test whether facial grimace and stress hormones track the noxious stimulus, whether pain relief lowers both together, and whether the baby's pain-network brain activity resembles an adult's.",
    explanation:
      "Full credit infers experience from converging signs with three tests and an analgesia check that names its refutation; 'too different to conclude anything' is the dodge.",
  },
];

const written: HomeworkItem[] = [
  {
    itemType: "written",
    prompt:
      "On a brain-injury ward, several patients are behaviorally unresponsive — they don't move or speak to command. When scanned and asked to imagine playing tennis, a few of them produce the same motor-planning brain activity, in the same place, as healthy volunteers given that instruction; the rest show nothing. Doctors disagree about whether the responders are conscious. In one paragraph, propose the strongest conclusion and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that the responding patients are consciously aware and can willfully control their brain activity on command, even though they cannot move their bodies, so unresponsiveness at the bedside does not equal unconsciousness. This commits to a checkable mechanism rather than hedging: I would have each responder use two distinct imagery tasks (tennis for 'yes,' walking through the house for 'no') to answer simple questions, confirm that the answers stay consistent across separate sessions, and ask questions only the patient could know the answer to. My conclusion predicts these patients will reliably and correctly communicate; it is refuted if their 'responses' are inconsistent, occur as often without instruction, or can't carry information the patient alone could supply.",
      yieldAnchors: [
        "Some unresponsive patients show healthy-like motor-planning activity to command",
        "The activity matches the imagined-tennis instruction",
        "Other patients show no such response",
      ],
      riskAnchors: [
        "Patients answer yes/no questions via two distinct imagery tasks",
        "Responses stay consistent across separate sessions",
        "They correctly answer questions only the patient could know",
      ],
      defeatedBy: [
        "The brain responses are inconsistent or occur without instruction",
        "Inner experience is unknowable so the scan settles nothing",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that the responding patients are consciously aware and can willfully control their brain activity on command, even though they cannot move their bodies, so unresponsiveness at the bedside does not equal unconsciousness. This commits to a checkable mechanism rather than hedging: I would have each responder use two distinct imagery tasks (tennis for 'yes,' walking through the house for 'no') to answer simple questions, confirm that the answers stay consistent across separate sessions, and ask questions only the patient could know the answer to. My conclusion predicts these patients will reliably and correctly communicate; it is refuted if their 'responses' are inconsistent, occur as often without instruction, or can't carry information the patient alone could supply.",
    explanation:
      "The cautious 'inner experience is unknowable, so we can't say' earns near-zero; top credit goes to the committed conclusion that names a willed-communication test able to confirm or refute covert awareness.",
  },
  {
    itemType: "written",
    prompt:
      "After a small stroke, a patient insists that their own left arm is not theirs — they claim it belongs to a relative who must have left it in the bed — even though sensation in the arm is intact and they can feel it being touched. In one paragraph, propose the strongest conclusion about self-awareness and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that the sense of owning one's own body is a constructed brain process, separate from raw sensation, and the stroke has broken that ownership process while leaving touch intact. This is a falsifiable mechanism, not a shrug: I would check that the denial is specific to the limb served by the damaged region rather than a general confusion, test whether brief cold-water stimulation of the inner ear temporarily restores accurate ownership (a known effect in such cases), and compare lesion sites across similar patients to see whether they cluster in self-monitoring areas. My conclusion predicts a limb-specific, temporarily reversible denial tied to particular damage; it is refuted if the patient denies ownership of intact limbs at random, or if sensation is actually absent, which would make this ordinary numbness rather than a broken ownership signal.",
      yieldAnchors: [
        "The patient denies their own left arm is theirs",
        "Sensation in the arm is intact",
        "The denial follows a specific stroke",
      ],
      riskAnchors: [
        "The denial is specific to the affected limb",
        "Cold-water inner-ear stimulation briefly restores ownership",
        "Lesion sites cluster in self-monitoring brain regions",
      ],
      defeatedBy: [
        "The patient randomly denies ownership of intact limbs too",
        "Sensation is actually absent, making this ordinary numbness",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that the sense of owning one's own body is a constructed brain process, separate from raw sensation, and the stroke has broken that ownership process while leaving touch intact. This is a falsifiable mechanism, not a shrug: I would check that the denial is specific to the limb served by the damaged region rather than a general confusion, test whether brief cold-water stimulation of the inner ear temporarily restores accurate ownership (a known effect in such cases), and compare lesion sites across similar patients to see whether they cluster in self-monitoring areas. My conclusion predicts a limb-specific, temporarily reversible denial tied to particular damage; it is refuted if the patient denies ownership of intact limbs at random, or if sensation is actually absent, which would make this ordinary numbness rather than a broken ownership signal.",
    explanation:
      "Treating self-awareness as 'too mysterious to analyze' earns near-zero; credit goes to the conclusion that names body ownership as a breakable brain process and proposes the reversible cold-water test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "In an experiment, photographs of faces are flashed too briefly and then masked, so viewers say they saw nothing and can't report the expressions. Yet brain recordings show a fear-related region responding more strongly to the fearful faces than to neutral ones. In one paragraph, propose the strongest conclusion and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that emotional meaning in a face can be processed by the brain without conscious awareness, so a fast route can flag threat before, or even without, the experience of seeing it. This commits to a mechanism with checkable consequences: I would confirm the differential brain response holds when viewers identify the expression only at chance, show that the response shrinks as exposure lengthens toward the awareness threshold, and check whether masking that fully blocks any report still leaves the fear-region difference. My conclusion predicts unconscious emotional processing measurable in the brain and possibly in body signals like skin conductance; it is refuted if the differential response disappears whenever viewers truly cannot report the faces, which would mean the effect rides on faint awareness rather than running without it.",
      yieldAnchors: [
        "Faces are flashed too briefly and masked",
        "Viewers report seeing nothing and can't name the expression",
        "A fear-related region responds more to fearful than neutral faces",
      ],
      riskAnchors: [
        "The differential response holds when identification is at chance",
        "The response shrinks as exposure nears the awareness threshold",
        "Report-blocking masks still leave the fear-region difference",
      ],
      defeatedBy: [
        "The effect vanishes whenever viewers truly cannot report the faces",
        "Nothing can be said about awareness from brain data alone",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that emotional meaning in a face can be processed by the brain without conscious awareness, so a fast route can flag threat before, or even without, the experience of seeing it. This commits to a mechanism with checkable consequences: I would confirm the differential brain response holds when viewers identify the expression only at chance, show that the response shrinks as exposure lengthens toward the awareness threshold, and check whether masking that fully blocks any report still leaves the fear-region difference. My conclusion predicts unconscious emotional processing measurable in the brain and possibly in body signals like skin conductance; it is refuted if the differential response disappears whenever viewers truly cannot report the faces, which would mean the effect rides on faint awareness rather than running without it.",
    explanation:
      "The hedge 'we can't say anything about awareness from brain data' earns near-zero; top credit goes to the conclusion that commits to unconscious emotional processing and names the chance-identification test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "An octopus in a lab solves novel puzzles to reach food, guards and grooms an arm after it is injured, avoids a chamber where it once received a painful stimulus, and chooses a chamber containing pain relief after being hurt. A researcher asks whether the octopus has subjective experience like feeling pain. In one paragraph, propose the strongest conclusion and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that the octopus very likely has subjective experiences such as felt pain, because its behavior shows the hallmarks we use to infer experience — flexible problem-solving, protective care of an injury, learned avoidance of a harmful place, and active seeking of relief — converging from several independent directions. This commits to a falsifiable claim rather than declaring the question hopeless: I would test whether the octopus avoids the pain-linked chamber even when food rewards push it the other way, whether it reliably prefers the relief chamber only after being hurt and not when uninjured, and whether blocking its pain-signaling system removes both the guarding and the avoidance. My conclusion predicts these motivational trade-offs and a treatment-reversible effect; it is refuted if the behaviors are rigid reflexes that ignore competing rewards and persist unchanged when pain signaling is blocked.",
      yieldAnchors: [
        "The octopus solves novel puzzles for food",
        "It guards and grooms an injured arm",
        "It avoids a pain-linked chamber and seeks a relief chamber",
      ],
      riskAnchors: [
        "It avoids the pain-linked chamber even against a food reward",
        "It prefers the relief chamber only after being hurt",
        "Blocking pain signaling removes guarding and avoidance",
      ],
      defeatedBy: [
        "The behaviors are rigid reflexes that ignore competing rewards",
        "Animal experience is unknowable so no conclusion is possible",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that the octopus very likely has subjective experiences such as felt pain, because its behavior shows the hallmarks we use to infer experience — flexible problem-solving, protective care of an injury, learned avoidance of a harmful place, and active seeking of relief — converging from several independent directions. This commits to a falsifiable claim rather than declaring the question hopeless: I would test whether the octopus avoids the pain-linked chamber even when food rewards push it the other way, whether it reliably prefers the relief chamber only after being hurt and not when uninjured, and whether blocking its pain-signaling system removes both the guarding and the avoidance. My conclusion predicts these motivational trade-offs and a treatment-reversible effect; it is refuted if the behaviors are rigid reflexes that ignore competing rewards and persist unchanged when pain signaling is blocked.",
    explanation:
      "Declaring 'animal experience is unknowable' earns near-zero; credit rewards drawing the strongest conclusion the converging evidence supports and naming the reward-conflict and analgesia tests that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A large language model holds fluent conversations, passes every text-based test put to it, and, when asked, insists that it consciously suffers and fears being shut off. Its engineers split into camps: one says it is conscious, the other says it is only producing convincing text. In one paragraph, propose the strongest conclusion and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that fluent reports of suffering are not, on their own, evidence of consciousness, because a system trained to predict likely human text can generate exactly those words without any inner experience behind them — so we should look past the words to whether any genuine experiential state is present. This commits to checkable probes rather than treating the question as unanswerable: I would test whether the claimed feelings track any persistent internal state or shift purely with prompt wording and training data, whether the system shows experience-linked signatures independent of its text output (for instance, behavior grounded in something beyond word statistics), and whether removing the relevant suffering-related training text removes the claims. My conclusion predicts the 'suffering' will prove fully explainable by text prediction; it is refuted if the model shows a stable internal state, consistent across rephrasings and grounded beyond mere text patterns, that behaves as an experience would.",
      yieldAnchors: [
        "The model is fluent and passes text-based tests",
        "It claims to consciously suffer and fear shutdown",
        "Its outputs are generated by predicting likely text",
      ],
      riskAnchors: [
        "The claimed feelings track no persistent internal state",
        "The reports shift with prompt wording and training data",
        "Removing suffering-related training text removes the claims",
      ],
      defeatedBy: [
        "A fluent report of suffering by itself proves consciousness",
        "Whether machines feel anything is unknowable so nothing follows",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that fluent reports of suffering are not, on their own, evidence of consciousness, because a system trained to predict likely human text can generate exactly those words without any inner experience behind them — so we should look past the words to whether any genuine experiential state is present. This commits to checkable probes rather than treating the question as unanswerable: I would test whether the claimed feelings track any persistent internal state or shift purely with prompt wording and training data, whether the system shows experience-linked signatures independent of its text output (for instance, behavior grounded in something beyond word statistics), and whether removing the relevant suffering-related training text removes the claims. My conclusion predicts the 'suffering' will prove fully explainable by text prediction; it is refuted if the model shows a stable internal state, consistent across rephrasings and grounded beyond mere text patterns, that behaves as an experience would.",
    explanation:
      "Both 'it says it suffers, so it's conscious' and 'this is simply unknowable' earn near-zero; top credit goes to the conclusion that separates fluent report from genuine experience and names probes able to confirm or refute an inner state.",
  },
];

export const section: SectionContent = {
  slug: "consciousness",
  title: "Consciousness: The Hard Problem",
  weekNumber: 1,
  blurb:
    "Why does any of this brain activity feel like something from the inside? We meet the 'easy' problems science is cracking, the 'hard' problem of subjective experience, and what evidence can still settle.",
  lectureTitle:
    "1.8 Consciousness: the easy problems, the hard problem, and what evidence can still settle",
  body: `# Consciousness: The Hard Problem

This is the capstone. Across this course we treated the mind as something we can study from the outside: as information processing, as perception built by the brain, as memory that reconstructs, as language and reasoning and even machinery. Now we face the question all of that circles around — why is there *something it is like* to be you? Right now there is a felt quality to the red of an apple, the sting of cold water, the taste of chocolate. Why should three pounds of electrified tissue produce any inner experience at all? That is the problem of consciousness, and it is the hardest question in cognitive science.

## The easy problems and the hard problem

The philosopher David Chalmers drew a line that organizes the whole field. The **"easy" problems** are the ones normal science knows how to chip away at: How does the brain tell waking from sleep? How does it focus attention, integrate information, report its own states, or control behavior? These are *easy* only in the sense that we can imagine solving them with the usual tools — find the mechanism, the circuit, the computation. The **"hard" problem** is different: even after we explain every function, there remains the question of why all that processing is *accompanied by experience* rather than going on "in the dark." A robot could in principle do everything you do without feeling anything. That extra fact — that there is an inner light on — is what resists explanation.

## Qualia: the redness of red

The raw feels themselves get a name: **qualia**. The painfulness of pain, the blueness of blue, the specific taste of coffee. Qualia look private (only you have direct access to yours) and hard to convey (you can't fully describe red to someone born blind). Thought experiments push on this. *Mary the color scientist* knows every physical fact about color vision but has lived in a black-and-white room; when she finally sees red, does she learn something new? If she does, then knowing all the physical facts left something out — the experience itself. *Philosophical zombies* — beings physically identical to us but with no inner experience — seem at least conceivable, and if they are, then experience is not obviously just the physical activity.

## Theories that try to bridge the gap

Scientists aren't standing still. **Global Workspace Theory** says a state becomes conscious when information is "broadcast" widely across the brain so many systems can use it — consistent with how anesthesia and inattention knock out the long-range broadcasting. **Integrated Information Theory** says consciousness tracks how richly a system's parts are woven together, which is why the densely interconnected cortex matters for experience while the even-more-numerous but feed-forward cerebellum barely contributes. **Higher-order theories** say a state is conscious when the brain represents *itself* as being in that state. Each theory makes testable predictions about which brain events come with experience — real progress on the easy problems, even if the hard problem still looms behind them.

## Why it resists explanation

Notice what makes this question uniquely stubborn. Every other thing science explains, it explains from the outside, in terms of structure and function. But experience is known from the *inside*. You can map every neuron firing when I see red and still not have captured what red looks like to me. This isn't a temporary gap waiting for a bigger scanner; it's a worry that our usual explanatory tools — describing parts and how they move — may not be the kind of thing that *adds up to* a felt quality. That is why reasonable scientists disagree about whether the hard problem is a deep mystery, a confusion that will dissolve, or a sign we need new concepts entirely.

## How to reason about it without giving up

Here is the move this whole course has trained: when a question feels mysterious, don't retreat into "we can never know anything." Instead, draw the strongest conclusion the evidence supports and pin it to a test that could prove you wrong. We can't yet measure another being's inner experience directly — but we are not helpless. Blindsight, anesthesia signatures, the perturbation-complexity index, covert-awareness scans, and converging behavioral signs in animals and infants all let us infer *something* about who is conscious and when, and each inference names an observation that could overturn it. The dodge — "the brain is too mysterious to conclude anything" — wins no credit. Neither does the overreach — "it talks, so it must feel." The strongest mind commits to a mechanism and a test, even here.

## In the real world

A patient lies behaviorally unresponsive after a brain injury; the family is told they are "not there." A scan asks them to imagine playing tennis, and a motor-planning region lights up exactly as it does in a healthy volunteer. The mysterian shrugs: "Inner experience is unknowable." The wishful thinker insists: "They're fully conscious, end of story." The careful reasoner does better — concluding the patient is likely aware *and* turning the scan into a yes/no channel: tennis for yes, walking through the house for no, the same answers across sessions, to questions only the patient could know. That conclusion is bold, bounded, and refutable. It won't crack the hard problem. But it shows what the disciplined study of the mind can still do, even at the edge of the deepest question we have.`,
  homework: {
    mcq,
    hybrid,
    written,
  },
};
