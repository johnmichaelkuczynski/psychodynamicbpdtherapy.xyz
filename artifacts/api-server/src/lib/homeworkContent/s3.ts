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
      "Two lines on a page are exactly the same length, but one has arrowheads pointing outward at its ends and the other has them pointing inward. Nearly everyone sees the inward-arrow line as longer, even after measuring both with a ruler. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The brain doesn't read raw line length but infers size from depth cues the arrows mimic (like room corners), so it stretches the 'farther' line; test whether the illusion shrinks for people raised in environments without straight-edged buildings, whether it weakens when the arrows are replaced by plain dots, and whether the perceived gap tracks how strongly the figure suggests depth.",
        credit: 1.0,
      },
      {
        text: "The arrows seem to make one line look longer somehow.",
        credit: 0.3,
      },
      {
        text: "Since both lines measure the same, the difference is just careless looking and means nothing about the mind.",
        credit: 0,
      },
      {
        text: "The arrowheads probably trick the eye; we could show the figure to more people and confirm.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The brain doesn't read raw line length but infers size from depth cues the arrows mimic (like room corners), so it stretches the 'farther' line; test whether the illusion shrinks for people raised in environments without straight-edged buildings, whether it weakens when the arrows are replaced by plain dots, and whether the perceived gap tracks how strongly the figure suggests depth.",
    explanation:
      "Top credit names a mechanism (depth inference) and three checkable tests, one that could refute it across cultures; the 'just careless looking' option refuses the real finding that the illusion survives measurement.",
  },
  {
    itemType: "mc",
    prompt:
      "A simple line drawing can be seen as either a duck or a rabbit. People flip between the two but never see both at once, and once told 'rabbit' they tend to see the rabbit first. Which conclusion best follows?",
    mcOptions: [
      {
        text: "An ambiguous figure shows it could be anything; the mind has no rules here.",
        credit: 0,
      },
      {
        text: "Perception isn't a passive copy of the lines but an active guess the brain commits to one interpretation at a time, and prior suggestion biases the guess; test whether a verbal cue ('look for a beak') speeds duck-first sightings, whether flip rate slows when one reading is primed, and whether eye movements jump to the 'beak' versus 'ears' region depending on the current percept.",
        credit: 1.0,
      },
      {
        text: "People probably interpret the drawing differently; we could survey viewers.",
        credit: 0.6,
      },
      {
        text: "The drawing seems to look like two animals.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "Perception isn't a passive copy of the lines but an active guess the brain commits to one interpretation at a time, and prior suggestion biases the guess; test whether a verbal cue ('look for a beak') speeds duck-first sightings, whether flip rate slows when one reading is primed, and whether eye movements jump to the 'beak' versus 'ears' region depending on the current percept.",
    explanation:
      "The richest conclusion names active interpretation plus prior bias and three tests, including eye-tracking; 'it could be anything, no rules' is the empty dodge.",
  },
  {
    itemType: "mc",
    prompt:
      "A photo of a striped dress looks white-and-gold to some viewers and blue-and-black to others, and the same person can flip after being told the lighting. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Color is just personal opinion, so there's nothing to study here.",
        credit: 0,
      },
      {
        text: "Viewers disagree about the dress for some reason.",
        credit: 0.3,
      },
      {
        text: "The brain discounts the assumed light source to recover an object's true color, and viewers who silently assume different lighting subtract different tints; test whether forcing an assumption ('it's in shadow' vs 'in bright sun') flips the report, whether people who wake early (more daylight exposure) skew toward one reading, and whether adding clear background lighting cues collapses the disagreement.",
        credit: 1.0,
      },
      {
        text: "The lighting probably matters; we could ask people what light they imagined.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The brain discounts the assumed light source to recover an object's true color, and viewers who silently assume different lighting subtract different tints; test whether forcing an assumption ('it's in shadow' vs 'in bright sun') flips the report, whether people who wake early (more daylight exposure) skew toward one reading, and whether adding clear background lighting cues collapses the disagreement.",
    explanation:
      "Top credit names color constancy (discounting the illuminant) with three tests that could disconfirm it; 'color is just opinion' commits to no mechanism.",
  },
  {
    itemType: "mc",
    prompt:
      "On a screen, two dots blink on and off in alternation a short distance apart. Instead of two separate blinks, viewers see one dot smoothly sliding back and forth. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The brain assumes objects persist and move continuously, so it invents motion between two flashes rather than accept two unrelated dots; test whether the motion illusion breaks when the gap or timing is made too large, whether inserting a barrier between the dots makes viewers see the dot 'go around' it, and whether the perceived path bends toward an implied obstacle.",
        credit: 1.0,
      },
      {
        text: "The dots seem to turn into movement.",
        credit: 0.3,
      },
      {
        text: "Screens flicker, so the motion is probably just an eye blur with no lesson about the mind.",
        credit: 0,
      },
      {
        text: "The blinking likely creates an illusion of motion; we could try other timings.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The brain assumes objects persist and move continuously, so it invents motion between two flashes rather than accept two unrelated dots; test whether the motion illusion breaks when the gap or timing is made too large, whether inserting a barrier between the dots makes viewers see the dot 'go around' it, and whether the perceived path bends toward an implied obstacle.",
    explanation:
      "The strongest conclusion names a continuity assumption and three tests, including the striking 'goes around a barrier' prediction; 'just eye blur' dismisses the finding.",
  },
  {
    itemType: "mc",
    prompt:
      "People can fluently read a sentence where the middle letters of each word are scrambled ('Aoccdrnig to a rscheearch') as long as the first and last letters stay put. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Reading is too automatic to learn anything from a typo trick.",
        credit: 0,
      },
      {
        text: "Skilled reading isn't letter-by-letter decoding but top-down prediction of whole words from shape, context, and expectation; test whether the effect collapses for unpredictable word lists with no sentence context, whether rare or long words slow readers far more than common ones, and whether scrambling the high-information first/last letters destroys fluency.",
        credit: 1.0,
      },
      {
        text: "Scrambled words are still readable, it seems.",
        credit: 0.3,
      },
      {
        text: "Readers probably guess the words; we could test more sentences.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Skilled reading isn't letter-by-letter decoding but top-down prediction of whole words from shape, context, and expectation; test whether the effect collapses for unpredictable word lists with no sentence context, whether rare or long words slow readers far more than common ones, and whether scrambling the high-information first/last letters destroys fluency.",
    explanation:
      "Top credit names top-down word prediction and three tests, one that could break the effect by removing context; 'too automatic to learn anything' refuses the inquiry.",
  },
  {
    itemType: "mc",
    prompt:
      "When a video shows lips mouthing 'ga' but the soundtrack plays 'ba', most viewers hear 'da' — a sound that is in neither the lips nor the audio. Closing your eyes restores the true 'ba'. Which conclusion best follows?",
    mcOptions: [
      {
        text: "People probably get confused by mismatched video.",
        credit: 0.3,
      },
      {
        text: "Hearing is not purely auditory; the brain fuses sight and sound into a single best-guess percept, and with a conflict it compromises; test whether the illusion vanishes when the video is blurred or delayed, whether it weakens in people with poor lip-reading skill, and whether mismatching only slightly (lips 'ba', audio 'pa') still shifts what is heard.",
        credit: 1.0,
      },
      {
        text: "Watching the lips probably changes what's heard; we could test more clips.",
        credit: 0.6,
      },
      {
        text: "Hearing is a separate sense, so the eyes can't really affect it; the report must be a mistake.",
        credit: 0,
      },
    ],
    correctAnswer:
      "Hearing is not purely auditory; the brain fuses sight and sound into a single best-guess percept, and with a conflict it compromises; test whether the illusion vanishes when the video is blurred or delayed, whether it weakens in people with poor lip-reading skill, and whether mismatching only slightly (lips 'ba', audio 'pa') still shifts what is heard.",
    explanation:
      "The strongest conclusion names multisensory fusion and three disconfirming tests; the 'hearing is separate, must be a mistake' option is defeated by the eyes-closed reversal.",
  },
  {
    itemType: "mc",
    prompt:
      "Two people in a photo are the same printed size, but one stands at the far end of a long hallway. Viewers insist the 'far' person is much larger. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Photos distort things, so the judgment tells us nothing about perception.",
        credit: 0,
      },
      {
        text: "The hallway seems to make one person look bigger.",
        credit: 0.3,
      },
      {
        text: "The far one looks bigger because of the hallway; we could ask more viewers.",
        credit: 0.6,
      },
      {
        text: "The brain applies size constancy: it scales up things it judges to be far away, so equal retinal sizes read as different real sizes; test whether removing the converging hallway lines erases the effect, whether the size boost grows as the depth cues get stronger, and whether the illusion fails for viewers shown the figure upside down (weakening the scene reading).",
        credit: 1.0,
      },
    ],
    correctAnswer:
      "The brain applies size constancy: it scales up things it judges to be far away, so equal retinal sizes read as different real sizes; test whether removing the converging hallway lines erases the effect, whether the size boost grows as the depth cues get stronger, and whether the illusion fails for viewers shown the figure upside down (weakening the scene reading).",
    explanation:
      "Top credit names size constancy with three tests that manipulate depth cues; 'photos distort, tells us nothing' is the barren refusal.",
  },
  {
    itemType: "mc",
    prompt:
      "Two gray squares on a checkerboard are physically identical in shade, yet the one sitting 'in shadow' looks clearly lighter than the one in 'light'. Connecting them with a strip of the same gray makes the difference vanish. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The brain doesn't report raw brightness but estimates a surface's true color by correcting for assumed shadow, so it lightens what it thinks is shaded; test whether removing the shadow-casting cylinder kills the effect, whether the illusion tracks how convincing the shadow looks, and whether a visible connecting strip (defeating the shadow story) restores equality every time.",
        credit: 1.0,
      },
      {
        text: "The squares seem different but aren't.",
        credit: 0.3,
      },
      {
        text: "Identical squares can't truly look different, so viewers are simply guessing wrong.",
        credit: 0,
      },
      {
        text: "The shadow probably explains it; we could measure with more checkerboards.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The brain doesn't report raw brightness but estimates a surface's true color by correcting for assumed shadow, so it lightens what it thinks is shaded; test whether removing the shadow-casting cylinder kills the effect, whether the illusion tracks how convincing the shadow looks, and whether a visible connecting strip (defeating the shadow story) restores equality every time.",
    explanation:
      "The strongest conclusion names lightness constancy (shadow correction) with three tests; 'viewers are simply guessing wrong' denies the robust, measurable effect.",
  },
  {
    itemType: "mc",
    prompt:
      "People reliably 'see' faces in clouds, electrical outlets, and the front of cars, and they spot them faster than they spot non-face shapes. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Seeing faces everywhere is just imagination and not worth studying.",
        credit: 0,
      },
      {
        text: "People often notice face-like patterns.",
        credit: 0.3,
      },
      {
        text: "The brain runs a fast, eager face-detector that errs toward false alarms because missing a real face is costlier than a false one; test whether two-dots-over-a-line triggers face responses faster than scrambled controls, whether the effect is strongest for upright (not inverted) arrangements, and whether the same brain region that responds to real faces lights up for these patterns.",
        credit: 1.0,
      },
      {
        text: "People probably have a knack for faces; we could collect more examples.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The brain runs a fast, eager face-detector that errs toward false alarms because missing a real face is costlier than a false one; test whether two-dots-over-a-line triggers face responses faster than scrambled controls, whether the effect is strongest for upright (not inverted) arrangements, and whether the same brain region that responds to real faces lights up for these patterns.",
    explanation:
      "Top credit names a biased face-detection mechanism with three tests, including inversion and brain-region checks; 'just imagination' opens no inquiry.",
  },
  {
    itemType: "mc",
    prompt:
      "Each eye has a blind spot where the optic nerve exits and no light is detected, yet people never notice a hole in their vision. Cover one eye and a small dot can disappear into the gap. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The eye is just very good, so there's nothing to explain.",
        credit: 0,
      },
      {
        text: "The brain doesn't passively display the retina's image; it actively fills the blind spot with the surrounding pattern as its best guess; test whether a dot vanishes there but a continuous line is seen unbroken, whether the fill-in copies background texture and color, and whether two eyes together cover each other's gaps so the effect needs one eye closed.",
        credit: 1.0,
      },
      {
        text: "The blind spot seems to get covered up somehow.",
        credit: 0.3,
      },
      {
        text: "The brain probably hides the gap; we could test the dot trick on more people.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The brain doesn't passively display the retina's image; it actively fills the blind spot with the surrounding pattern as its best guess; test whether a dot vanishes there but a continuous line is seen unbroken, whether the fill-in copies background texture and color, and whether two eyes together cover each other's gaps so the effect needs one eye closed.",
    explanation:
      "The richest conclusion names active filling-in with three tests; 'the eye is just very good' refuses the real puzzle of the missing hole.",
  },
  {
    itemType: "mc",
    prompt:
      "When the identical mid-range wine is poured from a bottle with an expensive label versus a cheap one, tasters rate the expensive-labeled pour as smoother and report genuinely enjoying it more, not just saying so. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Taste is too subjective to study, so the label result means nothing.",
        credit: 0,
      },
      {
        text: "Expectation set by the label feeds top-down into perception, so the brain's prediction of 'fine wine' actually shapes the experienced flavor; test whether brain reward areas respond more strongly to the expensive label, whether blind tasting with no labels erases the gap, and whether the boost scales with the stated price.",
        credit: 1.0,
      },
      {
        text: "The label seems to change the ratings.",
        credit: 0.3,
      },
      {
        text: "The fancy label probably helps; we could test more tasters.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Expectation set by the label feeds top-down into perception, so the brain's prediction of 'fine wine' actually shapes the experienced flavor; test whether brain reward areas respond more strongly to the expensive label, whether blind tasting with no labels erases the gap, and whether the boost scales with the stated price.",
    explanation:
      "Top credit names top-down expectation altering experience with three tests, including a blind-tasting control; 'taste is too subjective' is the dodge.",
  },
  {
    itemType: "mc",
    prompt:
      "Viewers told to count basketball passes in a video routinely fail to notice a person in a gorilla suit who walks through the middle of the scene. Once told, they see the gorilla instantly on replay. Which conclusion best follows?",
    mcOptions: [
      {
        text: "People just weren't paying attention; nothing deep is going on.",
        credit: 0,
      },
      {
        text: "Counting tasks seem to make people miss things.",
        credit: 0.3,
      },
      {
        text: "Attention probably narrows vision; we could run the video on more groups.",
        credit: 0.6,
      },
      {
        text: "Perception is selective: we consciously see what attention is allocated to, not everything on the retina, so an unattended event can be invisible; test whether a harder counting task raises miss rates, whether a gorilla matching the attended team's color is noticed more, and whether eye-tracking shows misses even when the eyes land on the gorilla.",
        credit: 1.0,
      },
    ],
    correctAnswer:
      "Perception is selective: we consciously see what attention is allocated to, not everything on the retina, so an unattended event can be invisible; test whether a harder counting task raises miss rates, whether a gorilla matching the attended team's color is noticed more, and whether eye-tracking shows misses even when the eyes land on the gorilla.",
    explanation:
      "The strongest conclusion names attentional selection with three tests, the eye-tracking one being decisive; 'just weren't paying attention' restates the result without a mechanism or test.",
  },
  {
    itemType: "mc",
    prompt:
      "When a hidden rubber hand is stroked in sync with a person's real hidden hand, many people start to feel the rubber hand is theirs and flinch when it's threatened. Out-of-sync stroking breaks the feeling. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Body sense is fixed and built-in, so a fake hand can't really feel like yours; the reports must be made up.",
        credit: 0,
      },
      {
        text: "The fake hand seems to feel real sometimes.",
        credit: 0.3,
      },
      {
        text: "The brain builds the sense of body ownership by combining vision and touch when they match in time, and it will adopt a fake limb when the cues line up; test whether synced stroking produces the effect but delayed stroking abolishes it, whether the real hand's temperature actually drops as it's 'disowned', and whether a block-shaped object instead of a hand fails to be adopted.",
        credit: 1.0,
      },
      {
        text: "The stroking probably tricks the brain; we could try more participants.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The brain builds the sense of body ownership by combining vision and touch when they match in time, and it will adopt a fake limb when the cues line up; test whether synced stroking produces the effect but delayed stroking abolishes it, whether the real hand's temperature actually drops as it's 'disowned', and whether a block-shaped object instead of a hand fails to be adopted.",
    explanation:
      "Top credit names multisensory body-ownership construction with three tests, including a measurable temperature change; 'body sense is fixed, reports are made up' is defeated by the synchrony manipulation.",
  },
  {
    itemType: "mc",
    prompt:
      "A recording of a sentence has one speech sound replaced by a cough, yet listeners clearly 'hear' the missing sound and can't tell which one was covered. The restored sound always fits the sentence's meaning. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Hearing is just decoding the sound wave, so a cough should leave an obvious gap; listeners are imagining things.",
        credit: 0,
      },
      {
        text: "The cough seems to get smoothed over.",
        credit: 0.3,
      },
      {
        text: "Listeners probably fill in the sound; we could test more sentences.",
        credit: 0.6,
      },
      {
        text: "The brain uses top-down knowledge of words and context to predict and insert the missing sound, hearing the expected speech rather than the raw input; test whether the restored sound changes when the sentence's later words change its likely meaning, whether the effect fails for nonsense strings with no predictable word, and whether listeners place the cough in the wrong position because the speech is reconstructed.",
        credit: 1.0,
      },
    ],
    correctAnswer:
      "The brain uses top-down knowledge of words and context to predict and insert the missing sound, hearing the expected speech rather than the raw input; test whether the restored sound changes when the sentence's later words change its likely meaning, whether the effect fails for nonsense strings with no predictable word, and whether listeners place the cough in the wrong position because the speech is reconstructed.",
    explanation:
      "The richest conclusion names phonemic restoration via top-down prediction with three tests, including a context manipulation that could refute it; 'listeners are imagining things' dismisses the robust effect.",
  },
  {
    itemType: "mc",
    prompt:
      "In a brief flash, people identify a hard-to-read word much faster when it follows a related word ('bread' before 'butter') than an unrelated one. They even sometimes report seeing the expected word when a slightly different one was shown. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Faster reading after a hint is obvious and tells us nothing about perception.",
        credit: 0,
      },
      {
        text: "Perception is predictive: the brain pre-activates likely interpretations from context so expected input is recognized faster and even mis-seen toward the prediction; test whether the speed-up vanishes for unrelated primes, whether the error rate rises specifically toward the expected word, and whether a misleading prime ('doctor' before 'bread') slows recognition.",
        credit: 1.0,
      },
      {
        text: "The first word seems to help read the second.",
        credit: 0.3,
      },
      {
        text: "The related word probably speeds things up; we could run more word pairs.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Perception is predictive: the brain pre-activates likely interpretations from context so expected input is recognized faster and even mis-seen toward the prediction; test whether the speed-up vanishes for unrelated primes, whether the error rate rises specifically toward the expected word, and whether a misleading prime ('doctor' before 'bread') slows recognition.",
    explanation:
      "Top credit names predictive pre-activation with three tests, including a misleading-prime check that could disconfirm it; 'obvious, tells us nothing' is the barren refusal.",
  },
];

const hybrid: HomeworkItem[] = [
  {
    itemType: "hybrid",
    prompt:
      "The inside of a hollow face mask, lit from the front, looks like a normal face bulging outward — viewers cannot make themselves see the true concave shape, even knowing it's hollow. The illusion is weaker in dim, flat lighting. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The brain's strong prior that faces are convex overrides the depth cues and forces a 'sticking-out' reading; test whether upside-down or non-face concave objects resist the illusion, whether removing realistic lighting and texture weakens it, and whether the hollow face still looks convex when viewed with both eyes giving strong contrary depth cues.",
        credit: 1.0,
      },
      {
        text: "The mask seems to pop out even though it's hollow.",
        credit: 0.3,
      },
      {
        text: "A hollow mask is too unusual to teach us anything general about seeing.",
        credit: 0,
      },
      {
        text: "The face shape probably fools the brain; we could show it to more viewers.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'strong face prior' lead from the rival 'any concave object looks convex,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: present matched hollow shapes — a face versus a non-face object like a hollow bowl or random blob — under identical lighting and ask which appears to bulge out; my lead predicts the face resists far more strongly because of a face-specific prior. It is refuted if the bowl and blob look just as convex as the face, showing it is concavity in general, not a face prior, driving the illusion.",
      yieldAnchors: [
        "The hollow mask looks like it bulges outward",
        "Viewers can't override it even knowing it's hollow",
        "The illusion is weaker in dim, flat lighting",
      ],
      riskAnchors: [
        "Upside-down or non-face concave objects resist the illusion",
        "Removing realistic lighting and texture weakens it",
        "Strong binocular depth cues fail to restore the true concave shape",
      ],
      defeatedBy: [
        "Any concave object looks convex, with no role for faces",
        "The hollow mask shape is unrelated to what is perceived",
      ],
    },
    correctAnswer:
      "The brain's strong prior that faces are convex overrides the depth cues and forces a 'sticking-out' reading; test whether upside-down or non-face concave objects resist the illusion, whether removing realistic lighting and texture weakens it, and whether the hollow face still looks convex when viewed with both eyes giving strong contrary depth cues.",
    explanation:
      "Full credit names a face-specific prior overriding sensory cues, lists three checks, and pairs them with a face-vs-nonface test that names its own refutation; 'too unusual to teach us anything' opens nothing.",
  },
  {
    itemType: "hybrid",
    prompt:
      "After staring at a waterfall for a minute and then looking at the still rocks beside it, the rocks appear to drift upward even though they aren't moving. The aftereffect fades after a few seconds. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Moving water tires the eyes; the drift is meaningless eye fatigue.",
        credit: 0,
      },
      {
        text: "The brain encodes motion with opposing detectors, and adapting the 'downward' detector leaves the 'upward' one temporarily dominant, so still rocks read as moving up; test whether the aftereffect direction is always opposite the adapting motion, whether adapting one eye transfers the effect to the other, and whether it fades faster with longer rest after adaptation.",
        credit: 1.0,
      },
      {
        text: "The rocks seem to move after watching the water.",
        credit: 0.3,
      },
      {
        text: "Staring probably causes the drift; we could time it on more people.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'opposing motion detectors' lead from the rival 'it's just eyeball fatigue from staring,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: adapt only one eye to the moving water (the other patched), then test the aftereffect with the unadapted eye open; my lead predicts the illusion transfers between eyes because it lives in motion-processing neurons in the brain, not the eyeball. It is refuted if the aftereffect appears only in the eye that watched the water, which would point to eye-level fatigue rather than central motion detectors.",
      yieldAnchors: [
        "Still rocks appear to drift upward after watching the waterfall",
        "The drift is opposite the water's downward motion",
        "The aftereffect fades after a few seconds",
      ],
      riskAnchors: [
        "The aftereffect direction is always opposite the adapting motion",
        "Adapting one eye transfers the effect to the other",
        "It fades faster with more rest after adaptation",
      ],
      defeatedBy: [
        "The drift is mere eyeball fatigue with no role for motion detectors",
        "The aftereffect direction is random and unrelated to the water's motion",
      ],
    },
    correctAnswer:
      "The brain encodes motion with opposing detectors, and adapting the 'downward' detector leaves the 'upward' one temporarily dominant, so still rocks read as moving up; test whether the aftereffect direction is always opposite the adapting motion, whether adapting one eye transfers the effect to the other, and whether it fades faster with longer rest after adaptation.",
    explanation:
      "Top credit names opponent motion detectors, adds three checks, and pairs them with an interocular-transfer test that names its refutation; 'meaningless eye fatigue' is the dodge.",
  },
  {
    itemType: "hybrid",
    prompt:
      "The exact same ambiguous middle squiggle is read as 'H' in 'THE' and as 'A' in 'CAT', and readers don't even notice it's identical. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Handwriting is sloppy, so people just guess; nothing about perception here.",
        credit: 0,
      },
      {
        text: "The squiggle seems to be read two ways.",
        credit: 0.3,
      },
      {
        text: "Context probably guides reading; we could test more word pairs.",
        credit: 0.6,
      },
      {
        text: "Letter perception is top-down: the brain uses the whole word and which letters make a real word to resolve an ambiguous shape, not bottom-up shape alone; test whether the same squiggle stays ambiguous in a nonword frame ('TXE'), whether reading time for the ambiguous letter is no slower than a clear one, and whether priming a different word flips which letter is seen.",
        credit: 1.0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'word context resolves the letter' lead from the rival 'people only see the surrounding clear letters and ignore the squiggle,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: embed the identical squiggle in a nonword frame like 'TXE' or 'CXT' where no real word constrains it, and ask what letter is seen; my lead predicts it stays genuinely ambiguous because there's no word to resolve it, while in 'THE'/'CAT' it snaps to H or A. It is refuted if readers still confidently report a specific letter for the squiggle even with no real word around it, meaning context isn't doing the work.",
      yieldAnchors: [
        "The same shape reads as H in THE and A in CAT",
        "Readers don't notice the two shapes are identical",
        "The resolved letter always completes a real word",
      ],
      riskAnchors: [
        "The squiggle stays ambiguous in a nonword frame",
        "Reading the ambiguous letter is no slower than a clear one",
        "Priming a different word flips which letter is seen",
      ],
      defeatedBy: [
        "Readers ignore the squiggle and only see the clear letters",
        "The shape's reading is unrelated to the surrounding word",
      ],
    },
    correctAnswer:
      "Letter perception is top-down: the brain uses the whole word and which letters make a real word to resolve an ambiguous shape, not bottom-up shape alone; test whether the same squiggle stays ambiguous in a nonword frame ('TXE'), whether reading time for the ambiguous letter is no slower than a clear one, and whether priming a different word flips which letter is seen.",
    explanation:
      "Full credit names top-down word context with three checks and a nonword-frame test that names its refutation; 'sloppy handwriting, just guessing' refuses the mechanism.",
  },
  {
    itemType: "hybrid",
    prompt:
      "When a single flash of light is paired with two quick beeps, viewers reliably report seeing two flashes. A single beep with the single flash is seen correctly as one. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The brain integrates sound and vision and, when sound is more reliable for fast timing, lets the beeps override the eyes so it 'sees' a second flash; test whether the illusion disappears when the beeps are spaced too far from the flash in time, whether it weakens for people with strong visual but poor auditory timing, and whether three beeps can push the count to three flashes.",
        credit: 1.0,
      },
      {
        text: "The beeps seem to add an extra flash.",
        credit: 0.3,
      },
      {
        text: "Sound can't change what you see, so the extra flash report is just a counting mistake.",
        credit: 0,
      },
      {
        text: "The beeps probably affect the flash count; we could test more timings.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'sound dominates fast timing' lead from the rival 'people just miscount when distracted by beeps,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: vary the gap between the two beeps and see whether the extra-flash illusion appears only when the beeps fall within the brief window where vision and sound get bound together; my lead predicts the illusion is tightly tied to that timing window, not to general distraction. It is refuted if the false second flash shows up regardless of beep timing, which would point to distraction or guessing rather than genuine audiovisual integration.",
      yieldAnchors: [
        "One flash with two beeps is seen as two flashes",
        "One flash with one beep is seen correctly as one",
        "The added percept follows the number of beeps",
      ],
      riskAnchors: [
        "The illusion disappears when beeps are far from the flash in time",
        "It weakens for people with poor auditory timing",
        "Three beeps can push the count to three flashes",
      ],
      defeatedBy: [
        "Sound cannot influence vision and the report is a counting error",
        "The flash count is unrelated to the number of beeps",
      ],
    },
    correctAnswer:
      "The brain integrates sound and vision and, when sound is more reliable for fast timing, lets the beeps override the eyes so it 'sees' a second flash; test whether the illusion disappears when the beeps are spaced too far from the flash in time, whether it weakens for people with strong visual but poor auditory timing, and whether three beeps can push the count to three flashes.",
    explanation:
      "Top credit names reliability-weighted audiovisual integration with three checks and a timing-window test that names its refutation; 'sound can't change vision, just a mistake' is defeated by the lawful beep-count effect.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A blurry, hard-to-identify photo looks like meaningless blobs — until someone says 'it's a dog by a tree,' after which viewers suddenly see the dog clearly and can't go back to seeing blobs. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Blurry pictures are just guesses, so this doesn't reveal anything real about seeing.",
        credit: 0,
      },
      {
        text: "The hint seems to make the image clearer.",
        credit: 0.3,
      },
      {
        text: "Telling people what it is probably helps; we could try more blurry images.",
        credit: 0.6,
      },
      {
        text: "A high-level concept reshapes how the raw image is parsed (top-down), and once the brain commits to an interpretation it organizes the blobs around it permanently; test whether a wrong label ('it's a car') fails to produce clarity, whether the 'aha' is faster when the label matches likely scene content, and whether viewers given the label first identify the same image at higher blur levels than unprompted viewers.",
        credit: 1.0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'top-down concept reshapes parsing' lead from the rival 'any spoken hint makes people try harder and squint,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: give one group the correct label ('a dog by a tree') and another an incorrect but equally specific label ('a boat on water') for the same blurry image, then ask what they see; my lead predicts only the correct concept produces a stable, clear percept while the wrong one does not. It is refuted if the wrong label produces just as strong a sense of suddenly 'seeing it,' meaning effort or suggestion, not the matching concept, drives the clarity.",
      yieldAnchors: [
        "The blurry image first looks like meaningless blobs",
        "A correct verbal label produces sudden clarity",
        "Viewers can't return to seeing it as blobs afterward",
      ],
      riskAnchors: [
        "A wrong label fails to produce clarity",
        "The 'aha' is faster when the label fits likely scene content",
        "Labeled viewers identify the image at higher blur than unprompted ones",
      ],
      defeatedBy: [
        "Any spoken hint works equally well regardless of accuracy",
        "The label is unrelated to whether the image becomes clear",
      ],
    },
    correctAnswer:
      "A high-level concept reshapes how the raw image is parsed (top-down), and once the brain commits to an interpretation it organizes the blobs around it permanently; test whether a wrong label ('it's a car') fails to produce clarity, whether the 'aha' is faster when the label matches likely scene content, and whether viewers given the label first identify the same image at higher blur levels than unprompted viewers.",
    explanation:
      "Full credit names top-down conceptual reorganization with three checks and a wrong-label control that names its refutation; 'blurry pictures are just guesses' opens no inquiry.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A grid of identical round bumps in a photo looks like bumps poking out when shaded dark-on-bottom, but the very same image flipped looks like dents poking in. People switch instantly when the photo is rotated 180 degrees. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The brain assumes light comes from above, so it reads dark-bottom shading as a bump and dark-top shading as a dent; test whether the effect reverses exactly when the image is flipped, whether tilting a real overhead lamp to the side changes which reading people get, and whether the bias is weaker in viewers given strong cues that light is coming from below.",
        credit: 1.0,
      },
      {
        text: "Shading seems to make bumps or dents.",
        credit: 0.3,
      },
      {
        text: "The shading probably controls the shape; we could test more grids.",
        credit: 0.6,
      },
      {
        text: "Bumps and dents are a matter of opinion, so there's no rule worth finding.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'light-from-above assumption' lead from the rival 'people just prefer to see bumps over dents,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: keep the image fixed but change the actual room lighting so a real lamp clearly shines from below, and ask whether the dark-bottom circles now flip from bumps to dents; my lead predicts the percept tracks the assumed light direction, so contradicting it with real low lighting should reverse the reading. It is refuted if people keep seeing the same shapes no matter where the real light comes from, which would point to a fixed bump-preference rather than a light-direction assumption.",
      yieldAnchors: [
        "Dark-bottom shading reads as bumps poking out",
        "The same image flipped reads as dents",
        "People switch instantly when the photo is rotated",
      ],
      riskAnchors: [
        "The percept reverses exactly when the image is flipped",
        "Moving a real overhead lamp to the side changes the reading",
        "Cues that light comes from below weaken the bias",
      ],
      defeatedBy: [
        "People simply prefer bumps regardless of shading direction",
        "The shading direction is unrelated to seeing bumps versus dents",
      ],
    },
    correctAnswer:
      "The brain assumes light comes from above, so it reads dark-bottom shading as a bump and dark-top shading as a dent; test whether the effect reverses exactly when the image is flipped, whether tilting a real overhead lamp to the side changes which reading people get, and whether the bias is weaker in viewers given strong cues that light is coming from below.",
    explanation:
      "Top credit names the light-from-above prior with three checks and a real-lighting test that names its refutation; 'a matter of opinion' commits to no rule.",
  },
  {
    itemType: "hybrid",
    prompt:
      "Patients given an inert cream described as a strong painkiller report genuinely less pain from a hot probe, and brain scans show reduced activity in pain-processing areas. Telling them the cream was removed brings the pain back. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Pain is fully physical, so a fake cream can't really change it; patients are just being polite.",
        credit: 0,
      },
      {
        text: "The cream seems to ease the pain.",
        credit: 0.3,
      },
      {
        text: "The expectation probably reduces pain; we could test more patients.",
        credit: 0.6,
      },
      {
        text: "Pain perception is constructed from expectation as well as the signal, so a predicted relief actually dampens how the brain builds the pain experience; test whether blocking the body's own opioid system erases the relief, whether stronger-sounding instructions produce larger drops, and whether secretly applying the same cream without telling the patient produces less relief than openly applying it.",
        credit: 1.0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'expectation shapes constructed pain' lead from the rival 'patients just say what the experimenter wants to hear,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: compare openly applying the cream (patient told) with secretly applying the identical cream (patient not told) and measure pain; my lead predicts open application relieves more because the relief comes from expectation, even though the cream is the same. It is refuted if open and hidden application relieve pain equally, or if the 'relief' vanishes whenever no one is watching the report, which would point to social compliance rather than constructed perception.",
      yieldAnchors: [
        "An inert cream described as a painkiller reduces reported pain",
        "Brain pain areas show reduced activity",
        "Telling patients the cream is gone brings the pain back",
      ],
      riskAnchors: [
        "Blocking the body's opioid system erases the relief",
        "Stronger-sounding instructions produce larger drops",
        "Open application relieves more than hidden application",
      ],
      defeatedBy: [
        "The fake cream has no real effect and patients only say what's expected",
        "Expectation is unrelated to how much pain is felt",
      ],
    },
    correctAnswer:
      "Pain perception is constructed from expectation as well as the signal, so a predicted relief actually dampens how the brain builds the pain experience; test whether blocking the body's own opioid system erases the relief, whether stronger-sounding instructions produce larger drops, and whether secretly applying the same cream without telling the patient produces less relief than openly applying it.",
    explanation:
      "Full credit names expectation-driven construction of pain with three checks and an open-vs-hidden test that names its refutation; 'patients are just being polite' is defeated by the brain-scan and opioid-block evidence.",
  },
  {
    itemType: "hybrid",
    prompt:
      "When a cat walks behind a picket fence, we see one whole cat moving, not a series of disconnected cat-slices between the slats. Babies a few months old already react as if the slices are one object. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The brain completes partly hidden objects, treating visible fragments that share motion and edges as one continuous thing behind the occluder; test whether fragments moving together are seen as one but fragments moving independently are seen as separate, whether babies look longer (surprised) when the fence is removed to reveal two half-cats, and whether mismatched fragment edges block the completion.",
        credit: 1.0,
      },
      {
        text: "We seem to see the whole cat anyway.",
        credit: 0.3,
      },
      {
        text: "Fences are too specific a case to reveal a general rule of perception.",
        credit: 0,
      },
      {
        text: "The brain probably joins the pieces; we could test more occluders.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'shared motion and edges drive completion' lead from the rival 'people just know cats are whole animals,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: use an unfamiliar abstract shape (not an animal) split by the fence, with the fragments either moving together or moving independently, and ask whether viewers see one object or two; my lead predicts shared motion and aligned edges produce 'one object' even for a meaningless shape. It is refuted if completion happens only for known things like cats and never for novel shapes with matched motion, which would point to object knowledge rather than low-level grouping cues.",
      yieldAnchors: [
        "A cat behind a fence is seen as one moving whole",
        "We don't perceive disconnected cat-slices",
        "Young babies already treat the slices as one object",
      ],
      riskAnchors: [
        "Fragments moving together are seen as one; independent motion splits them",
        "Babies look longer when the fence is removed to reveal two half-cats",
        "Mismatched fragment edges block the completion",
      ],
      defeatedBy: [
        "Completion happens only for familiar objects, never novel shapes",
        "The fragments' shared motion is unrelated to seeing one object",
      ],
    },
    correctAnswer:
      "The brain completes partly hidden objects, treating visible fragments that share motion and edges as one continuous thing behind the occluder; test whether fragments moving together are seen as one but fragments moving independently are seen as separate, whether babies look longer (surprised) when the fence is removed to reveal two half-cats, and whether mismatched fragment edges block the completion.",
    explanation:
      "Top credit names amodal completion via shared motion and edges with three checks and a novel-shape test that names its refutation; 'fences are too specific' refuses the general lesson.",
  },
  {
    itemType: "hybrid",
    prompt:
      "At a loud party you hear mostly a blur of voices, but the instant someone across the room says your name you notice it clearly, even though you weren't listening to that conversation. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Loud rooms are too chaotic to study attention in.",
        credit: 0,
      },
      {
        text: "You seem to catch your name in the noise.",
        credit: 0.3,
      },
      {
        text: "Attention probably picks out your name; we could test more partygoers.",
        credit: 0.6,
      },
      {
        text: "The brain monitors unattended channels at a shallow level and lets highly relevant signals like your own name break through and capture attention; test whether emotionally important words (not just any word) are detected in the ignored stream, whether people who notice their name lose track of the conversation they were attending, and whether the breakthrough rate rises for personally significant words over neutral ones.",
        credit: 1.0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'relevant signals break through a monitored channel' lead from the rival 'people secretly listen to every conversation equally,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: in the ignored stream, plant the person's own name versus an equally loud but neutral word and see which gets noticed; my lead predicts the personally relevant name breaks through far more often than the neutral word. It is refuted if neutral and personally relevant words are noticed equally often, which would mean people are fully processing everything rather than selectively letting relevant signals through.",
      yieldAnchors: [
        "Party voices are mostly a blur",
        "Your own name is noticed even when unattended",
        "You weren't deliberately listening to that conversation",
      ],
      riskAnchors: [
        "Emotionally important words are detected in the ignored stream",
        "Noticing your name disrupts the attended conversation",
        "Personally significant words break through more than neutral ones",
      ],
      defeatedBy: [
        "People fully process every conversation equally",
        "Your name is no more likely to be noticed than any other word",
      ],
    },
    correctAnswer:
      "The brain monitors unattended channels at a shallow level and lets highly relevant signals like your own name break through and capture attention; test whether emotionally important words (not just any word) are detected in the ignored stream, whether people who notice their name lose track of the conversation they were attending, and whether the breakthrough rate rises for personally significant words over neutral ones.",
    explanation:
      "Full credit names shallow monitoring with relevance-based breakthrough, three checks, and a name-vs-neutral test that names its refutation; 'too chaotic to study' opens no path.",
  },
];

const written: HomeworkItem[] = [
  {
    itemType: "written",
    prompt:
      "Two patches in a famous image — one labeled A in apparent light, one labeled B in apparent shadow cast by a green cylinder — are printed with exactly the same gray ink, yet B looks obviously lighter than A. Covering everything except the two patches makes them look identical. In one paragraph, propose the strongest conclusion about how perception works here and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that vision doesn't report the raw light hitting the eye; it estimates each surface's true shade by correcting for the lighting it infers, so a patch judged to be in shadow gets mentally lightened to recover the 'real' color of the surface. This is a powerful lead because it predicts checkable consequences: removing the cylinder (and thus the shadow story) should make A and B look equal again; the size of the illusion should track how convincing the shadow looks, growing with a darker, more believable cast shadow and shrinking with a faint one; and any manipulation that breaks the shadow interpretation, like a visible same-gray bridge connecting the patches, should collapse the difference. I would test it by removing or weakening the shadow cue and re-measuring perceived lightness, by varying shadow strength and checking whether the illusion scales with it, and by laying a continuous strip of the identical gray across both patches to see whether the perceived difference vanishes as the shadow account is defeated.",
      yieldAnchors: [
        "A and B are printed with identical gray ink",
        "B (in apparent shadow) looks lighter than A",
        "Isolating the two patches makes them look identical",
      ],
      riskAnchors: [
        "Removing the shadow-casting cylinder makes A and B look equal",
        "The illusion grows and shrinks with how convincing the shadow looks",
        "A visible same-gray connecting strip collapses the difference",
      ],
      defeatedBy: [
        "The two patches are actually different shades of ink",
        "Viewers are simply guessing because identical patches can't look different",
        "Nothing can be concluded without testing far more images",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that vision doesn't report the raw light hitting the eye; it estimates each surface's true shade by correcting for the lighting it infers, so a patch judged to be in shadow gets mentally lightened to recover the 'real' color of the surface. This is a powerful lead because it predicts checkable consequences: removing the cylinder (and thus the shadow story) should make A and B look equal again; the size of the illusion should track how convincing the shadow looks, growing with a darker, more believable cast shadow and shrinking with a faint one; and any manipulation that breaks the shadow interpretation, like a visible same-gray bridge connecting the patches, should collapse the difference. I would test it by removing or weakening the shadow cue and re-measuring perceived lightness, by varying shadow strength and checking whether the illusion scales with it, and by laying a continuous strip of the identical gray across both patches to see whether the perceived difference vanishes as the shadow account is defeated.",
    explanation:
      "The cautious 'identical patches can't look different, viewers are guessing' earns near-zero because it denies a robust, measurable effect; top credit goes to the lightness-constancy lead that names a mechanism and several tests that could disconfirm it.",
  },
  {
    itemType: "written",
    prompt:
      "A radiologist who has just been told 'this scan is probably a lung tumor' spots a faint shadow she would otherwise miss, while a colleague told 'this scan is probably clear' looks at the same image and sees nothing. Both are highly trained and looking at identical pixels. In one paragraph, propose the strongest conclusion about perception and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that expert perception is top-down as well as bottom-up: a prior expectation pre-tunes the visual system toward what it anticipates, lowering the threshold to detect an expected faint feature and raising the chance of missing or dismissing an unexpected one. This lead is fruitful because it predicts checkable consequences: giving readers the 'tumor' prompt should raise both true detections of real faint lesions and false alarms on lesion-free scans, while the 'clear' prompt should raise misses; the effect should be largest for low-contrast, ambiguous shadows and negligible for obvious ones; and eye-tracking should show primed readers fixating and dwelling on the suspect region sooner. I would test it by randomly assigning the two prompts across a matched set of scans and scoring hits and false alarms, by comparing the prompt effect on subtle versus blatant findings, and by tracking where and how long each reader's gaze lands to see whether the prompt steers attention before any 'finding' is reported.",
      yieldAnchors: [
        "The 'tumor' prompt leads to spotting a faint shadow",
        "The 'clear' prompt leads to seeing nothing on the same image",
        "Both readers view identical pixels and are equally trained",
      ],
      riskAnchors: [
        "The 'tumor' prompt raises both true detections and false alarms",
        "The effect is largest for low-contrast ambiguous findings",
        "Eye-tracking shows primed readers dwelling on the region sooner",
      ],
      defeatedBy: [
        "The two readers actually saw different images",
        "Expert perception is purely bottom-up and immune to expectation",
        "Nothing can be said without testing thousands of scans first",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that expert perception is top-down as well as bottom-up: a prior expectation pre-tunes the visual system toward what it anticipates, lowering the threshold to detect an expected faint feature and raising the chance of missing or dismissing an unexpected one. This lead is fruitful because it predicts checkable consequences: giving readers the 'tumor' prompt should raise both true detections of real faint lesions and false alarms on lesion-free scans, while the 'clear' prompt should raise misses; the effect should be largest for low-contrast, ambiguous shadows and negligible for obvious ones; and eye-tracking should show primed readers fixating and dwelling on the suspect region sooner. I would test it by randomly assigning the two prompts across a matched set of scans and scoring hits and false alarms, by comparing the prompt effect on subtle versus blatant findings, and by tracking where and how long each reader's gaze lands to see whether the prompt steers attention before any 'finding' is reported.",
    explanation:
      "'Expert perception is purely bottom-up and immune to expectation' is defeated by the scenario, and a vague answer with no test scores low; top credit goes to the expectation-tuning lead that commits to a mechanism and names tests including a revealing false-alarm prediction.",
  },
  {
    itemType: "written",
    prompt:
      "Looking at a Necker cube (a simple wire-frame drawing), a viewer sees its front face pop forward, then after a few seconds it spontaneously flips so a different face is in front, then flips back — and this keeps happening even when she tries to hold one view still. In one paragraph, propose the strongest conclusion about how perception works and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that perception is an active interpretation, not a passive readout: faced with a flat drawing that two 3-D interpretations fit equally well, the brain commits to one at a time and, because no evidence favors either, periodically switches as the current interpretation adapts and the rival takes over. This lead is fruitful because it predicts checkable consequences: the flip rate should speed up the longer one views (as the active interpretation fatigues) and slow down with rest; deliberately favoring one face — by attention, by adding faint depth shading, or by a prior cue — should bias which view appears first and lengthen its turns; and at the moment of a flip nothing changes in the image, so any neural or pupil signal that shifts must reflect the internal switch, not the input. I would test it by measuring how flip rate changes with continuous viewing versus breaks, by adding small disambiguating cues and checking whether they bias the dominant view, and by recording reports against a constant stimulus to confirm that the changes are internally generated.",
      yieldAnchors: [
        "The cube's front face spontaneously flips between two readings",
        "The flipping continues even when she tries to hold one view",
        "The drawing itself never changes",
      ],
      riskAnchors: [
        "Flip rate speeds up with continuous viewing and slows with rest",
        "Attention or faint depth cues bias which view dominates",
        "Neural or pupil signals shift at flips despite a constant image",
      ],
      defeatedBy: [
        "The drawing is physically changing between the two views",
        "The cube simply has one correct appearance the viewer keeps missing",
        "Nothing can be concluded from a single ambiguous drawing",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that perception is an active interpretation, not a passive readout: faced with a flat drawing that two 3-D interpretations fit equally well, the brain commits to one at a time and, because no evidence favors either, periodically switches as the current interpretation adapts and the rival takes over. This lead is fruitful because it predicts checkable consequences: the flip rate should speed up the longer one views (as the active interpretation fatigues) and slow down with rest; deliberately favoring one face — by attention, by adding faint depth shading, or by a prior cue — should bias which view appears first and lengthen its turns; and at the moment of a flip nothing changes in the image, so any neural or pupil signal that shifts must reflect the internal switch, not the input. I would test it by measuring how flip rate changes with continuous viewing versus breaks, by adding small disambiguating cues and checking whether they bias the dominant view, and by recording reports against a constant stimulus to confirm that the changes are internally generated.",
    explanation:
      "'The cube simply has one correct appearance she keeps missing' is defeated by the lawful flipping, and a florid answer with no test scores low; top credit goes to the active-interpretation lead that names a mechanism and tests tied to a constant stimulus.",
  },
  {
    itemType: "written",
    prompt:
      "A single photo of a dress splits viewers sharply: some are certain it is white-and-gold, others certain it is blue-and-black, and a few can make themselves flip by imagining different lighting. The actual fabric is blue-and-black. In one paragraph, propose the strongest conclusion about why the same image produces such different perceptions and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that the brain perceives an object's color by silently estimating the light shining on it and subtracting that illuminant, and the photo is so ambiguous about its lighting that different viewers assume different light sources and therefore subtract different tints — those assuming cool daylight 'remove' blue and see white-and-gold, those assuming warm shadow 'remove' yellow and see blue-and-black. This lead is fruitful because it predicts checkable consequences: explicitly telling viewers the lighting ('it's in bright shade' versus 'in warm indoor light') should flip or stabilize their report; adding unambiguous background lighting cues should sharply reduce the split; and individual differences such as how much daylight versus artificial light a person is typically exposed to should bias which assumption, and thus which color, they default to. I would test it by manipulating the assumed illuminant with instructions and seeing whether reports flip, by editing in clear lighting context and checking whether disagreement collapses, and by relating people's reported reading to their habitual light exposure or chronotype.",
      yieldAnchors: [
        "The same photo is seen as white-gold or blue-black",
        "Some viewers can flip by imagining different lighting",
        "The image is ambiguous about its actual light source",
      ],
      riskAnchors: [
        "Stating the lighting flips or stabilizes the reported color",
        "Adding clear background lighting cues collapses the disagreement",
        "Habitual light exposure biases which reading a person defaults to",
      ],
      defeatedBy: [
        "Color perception is pure personal opinion with no structure",
        "Viewers' eyes are physically different colors of receptor",
        "Nothing can be said because people just disagree",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that the brain perceives an object's color by silently estimating the light shining on it and subtracting that illuminant, and the photo is so ambiguous about its lighting that different viewers assume different light sources and therefore subtract different tints — those assuming cool daylight 'remove' blue and see white-and-gold, those assuming warm shadow 'remove' yellow and see blue-and-black. This lead is fruitful because it predicts checkable consequences: explicitly telling viewers the lighting ('it's in bright shade' versus 'in warm indoor light') should flip or stabilize their report; adding unambiguous background lighting cues should sharply reduce the split; and individual differences such as how much daylight versus artificial light a person is typically exposed to should bias which assumption, and thus which color, they default to. I would test it by manipulating the assumed illuminant with instructions and seeing whether reports flip, by editing in clear lighting context and checking whether disagreement collapses, and by relating people's reported reading to their habitual light exposure or chronotype.",
    explanation:
      "'Color is pure opinion with no structure' earns near-zero because it abandons any testable mechanism; top credit goes to the discount-the-illuminant lead that commits to a process and names manipulations that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "In a noisy cafeteria a student swears a friend said 'I love this band,' but a recording shows the friend actually said 'I love this sand' while pointing at a beach poster. Replaying the audio alone, the student hears 'sand' clearly; with the poster in view she hears 'band' again. In one paragraph, propose the strongest conclusion about how perception works here and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that perception integrates multiple sources — degraded sound plus visual context and expectation — into a single best guess, so when the audio is ambiguous the brain leans on context (a band poster? a beach poster?) to decide what was heard, and changing the context changes the percept itself, not just the interpretation. This lead is fruitful because it predicts checkable consequences: pairing the same ambiguous audio with a band image versus a beach image should flip what listeners report hearing; the effect should be strongest when the audio is noisiest and weakest when it is crisp and unambiguous; and a misleading context should make listeners confidently mishear, with confidence as high as for correct hearing. I would test it by presenting one fixed ambiguous audio clip with different paired images and recording what word people hear, by varying the audio's clarity to see whether context's pull grows as sound degrades, and by measuring listeners' confidence to confirm they experience the context-driven word as genuinely heard rather than merely inferred.",
      yieldAnchors: [
        "The friend actually said 'sand' but the student heard 'band'",
        "Audio alone is heard correctly as 'sand'",
        "With the relevant poster in view, 'band' returns",
      ],
      riskAnchors: [
        "Swapping the paired image flips the reported word",
        "The context effect is strongest when the audio is noisiest",
        "Listeners report the context-driven word with high confidence",
      ],
      defeatedBy: [
        "Hearing is purely acoustic and context can't change it",
        "The student simply wasn't listening carefully",
        "Nothing general can be drawn from one mishearing",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that perception integrates multiple sources — degraded sound plus visual context and expectation — into a single best guess, so when the audio is ambiguous the brain leans on context (a band poster? a beach poster?) to decide what was heard, and changing the context changes the percept itself, not just the interpretation. This lead is fruitful because it predicts checkable consequences: pairing the same ambiguous audio with a band image versus a beach image should flip what listeners report hearing; the effect should be strongest when the audio is noisiest and weakest when it is crisp and unambiguous; and a misleading context should make listeners confidently mishear, with confidence as high as for correct hearing. I would test it by presenting one fixed ambiguous audio clip with different paired images and recording what word people hear, by varying the audio's clarity to see whether context's pull grows as sound degrades, and by measuring listeners' confidence to confirm they experience the context-driven word as genuinely heard rather than merely inferred.",
    explanation:
      "'Hearing is purely acoustic and context can't change it' is defeated by the poster-driven flip, and a vague answer scores low; top credit goes to the multisensory best-guess lead that names a mechanism and tests including a noise-level prediction that could disconfirm it.",
  },
];

export const section: SectionContent = {
  slug: "perception",
  title: "Perception: Why Your Brain Builds the World You See",
  weekNumber: 1,
  blurb:
    "Perception isn't a camera faithfully recording reality — it's the brain's best guess, built from incoming signals plus expectations, context, and assumptions. Illusions are where that construction shows.",
  lectureTitle:
    "1.3 Perception: why your brain builds, rather than records, the world you see",
  body: `# Perception: Why Your Brain Builds the World You See

It feels like seeing is simple: open your eyes, and the world pours in. But your eyes are not cameras feeding a screen in your head. The image on your retina is upside down, full of holes, smeared by constant eye movements, and wildly ambiguous about size, distance, and color. Yet you experience a stable, vivid, three-dimensional world. That gap is the central clue of this section: **perception is something your brain actively builds, not something it passively receives.**

## The data underdetermine the world

A single pattern of light on your retina could have been produced by countless different scenes — a small object up close or a huge one far away, a gray surface in bright light or a white surface in shadow. The raw signal simply does not contain enough information to pin down one answer. So the brain does what any good detective does with incomplete evidence: it makes its **best guess**, using assumptions about how the world usually works. Perception is that guess, presented to you as if it were plain fact.

## Bottom-up meets top-down

Two streams of information meet in every percept. **Bottom-up** information flows from the senses: edges, colors, motion, sound waves. **Top-down** information flows the other way — from your knowledge, expectations, and context down onto the incoming signal. When you read a sentence with a scrambled word and barely notice, top-down prediction is filling the gap. When a wine's fancy label makes it taste smoother, expectation is reshaping experience. Perception is the meeting point of what's out there and what your brain expects to be out there.

## Illusions are the seams showing

Illusions aren't failures of perception; they're perception working normally but caught making a guess we can prove wrong. Two identical gray squares look different because the brain corrects for an assumed shadow. Two equal lines look unequal because arrowheads mimic depth and the brain rescales them. A hollow mask looks like it bulges out because the brain's lifelong assumption that faces stick out overrides the true depth cues. In each case the brain is applying a sensible rule — and the illusion is the rule misfiring in an unusual setup. That's why illusions are so useful: they expose the hidden assumptions perception normally runs silently.

## Perception is predictive

Increasingly, scientists describe the brain as a **prediction machine**: it constantly forecasts the incoming signal and pays most attention to the difference between prediction and reality. This is why a related word lets you read the next one faster, why you can hear a word that a cough covered up, and why a radiologist told to expect a tumor sees a faint shadow a colleague misses. The expectation isn't added after you see — it shapes what you see in the first place. Perception runs ahead of the input, then corrects.

## Attention decides what makes it through

Even your best guess only covers a slice of what's there. We consciously perceive what we attend to, not everything that lands on the senses. That's why people counting basketball passes can miss a person in a gorilla suit walking through the scene, and why your own name can cut through a noisy party. Attention is the gatekeeper that decides which signals get built into the world you experience and which quietly drop out.

## In the real world

Think about eyewitness testimony in a courtroom. We treat "I saw it with my own eyes" as the gold standard of evidence — but everything in this section warns us to be careful. A witness's memory of a face is a reconstruction shaped by expectation, the lighting they assumed, the attention they happened to pay, and suggestions made afterward ("Was the robber the tall one?"). The strongest, most testable conclusion isn't "eyewitnesses lie" or "we can never trust perception"; it's that perception is a constructive best guess, which means it can be confidently wrong — and that we can test how wrong by manipulating context, expectation, and attention and watching the report change. That is exactly what perception research does, and why understanding how the brain builds the world matters far beyond optical illusions.`,
  homework: {
    mcq,
    hybrid,
    written,
  },
};
