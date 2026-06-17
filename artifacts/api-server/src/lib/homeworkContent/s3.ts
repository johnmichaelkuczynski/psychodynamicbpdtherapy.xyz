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
      "A man checks that the stove is off seven times before he can leave the house, but only on mornings he is the last one out and feels responsible for the empty home; on days his partner leaves after him, he doesn't check at all. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The checking likely does a job — it discharges an unbearable sense of being the one to blame should the house burn down, so the ritual binds a responsibility-anxiety rather than reflecting real doubt about the stove; test whether the urge appears only when he's the last one out and responsible, whether stopping at one check leaves him flooded with dread, and whether the ritual eases once the fear of being to blame is named.",
        credit: 1.0,
      },
      {
        text: "It's probably some anxiety about the stove; we could look into his checking.",
        credit: 0.6,
      },
      {
        text: "He secretly wants the house to burn down, and the checking is his guilt about that wish.",
        credit: 0,
      },
      {
        text: "He seems to check the stove a lot before leaving.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The checking likely does a job — it discharges an unbearable sense of being the one to blame should the house burn down, so the ritual binds a responsibility-anxiety rather than reflecting real doubt about the stove; test whether the urge appears only when he's the last one out and responsible, whether stopping at one check leaves him flooded with dread, and whether the ritual eases once the fear of being to blame is named.",
    explanation:
      "Top credit reads the checking as binding a responsibility-anxiety and names a last-one-out test; 'he secretly wants the house to burn down' is the overreach the responsibility-tracking timing defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A nurse washes her hands until they crack, but only after touching anything in the room of one particular patient she finds frightening; with every other patient she washes normally. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She seems to wash her hands very thoroughly at work.",
        credit: 0.3,
      },
      {
        text: "The washing likely accomplishes something beyond hygiene — it lets her scrub away a dread attached to this one frightening patient, so the ritual binds a specific fear rather than a general germ worry; test whether the over-washing appears only after contact with this patient, whether being stopped from washing leaves her panicky, and whether the urge fades once she can name what frightens her about him.",
        credit: 1.0,
      },
      {
        text: "It's probably about contamination fears; we could keep an eye on the washing.",
        credit: 0.6,
      },
      {
        text: "Compulsive washing is just how some brains are wired, so there's nothing about this patient to read into.",
        credit: 0,
      },
    ],
    correctAnswer:
      "The washing likely accomplishes something beyond hygiene — it lets her scrub away a dread attached to this one frightening patient, so the ritual binds a specific fear rather than a general germ worry; test whether the over-washing appears only after contact with this patient, whether being stopped from washing leaves her panicky, and whether the urge fades once she can name what frightens her about him.",
    explanation:
      "Full credit reads patient-specific washing as binding a particular dread and names an only-after-this-patient test; 'just how some brains are wired' is the dodge the one-patient specificity defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "Whenever the thought 'what if I stab my daughter' flashes through a father's mind, he taps the table four times and silently says her name; he does this only after that thought, never otherwise, and feels he has 'cancelled' it. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The tapping likely works as an undoing ritual — it magically 'cancels' an intrusive thought he finds horrifying, so the compulsion neutralizes a forbidden idea precisely because he loves her and is appalled by it; test whether the ritual fires only after that specific thought, whether blocking it leaves him convinced something terrible will happen, and whether it loosens once he learns the thought is not a wish.",
        credit: 1.0,
      },
      {
        text: "He seems to tap and say her name a lot.",
        credit: 0.3,
      },
      {
        text: "It's probably his way of coping with a scary thought; we could talk about it.",
        credit: 0.6,
      },
      {
        text: "The ritual proves he genuinely wants to harm his daughter and is fighting the urge.",
        credit: 0,
      },
    ],
    correctAnswer:
      "The tapping likely works as an undoing ritual — it magically 'cancels' an intrusive thought he finds horrifying, so the compulsion neutralizes a forbidden idea precisely because he loves her and is appalled by it; test whether the ritual fires only after that specific thought, whether blocking it leaves him convinced something terrible will happen, and whether it loosens once he learns the thought is not a wish.",
    explanation:
      "Top credit reads the tapping as undoing a horrifying intrusive thought and names a fires-only-after-that-thought test; 'he genuinely wants to harm her' is the overreach his horror and love defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "A college student rearranges the objects on her desk until they feel 'just right,' redoing it for up to an hour — but only the night before an exam she fears she'll fail; on ordinary nights the desk stays messy and she feels no urge. Which conclusion best follows?",
    mcOptions: [
      {
        text: "It's probably exam stress showing up as tidying; we could look into it.",
        credit: 0.6,
      },
      {
        text: "People arrange their desks however they like; there's nothing underneath when someone tidies up.",
        credit: 0,
      },
      {
        text: "The arranging likely restores a feeling of control she can't get over the exam itself — making one small corner 'just right' substitutes for the unbearable uncertainty of whether she'll pass, so the ritual binds exam-dread; test whether the urge appears only before feared evaluations, whether being unable to finish arranging spikes her anxiety, and whether it fades once the fear of failing is faced directly.",
        credit: 1.0,
      },
      {
        text: "She seems to spend a long time arranging her desk.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The arranging likely restores a feeling of control she can't get over the exam itself — making one small corner 'just right' substitutes for the unbearable uncertainty of whether she'll pass, so the ritual binds exam-dread; test whether the urge appears only before feared evaluations, whether being unable to finish arranging spikes her anxiety, and whether it fades once the fear of failing is faced directly.",
    explanation:
      "Full credit reads 'just right' arranging as substituting control for exam-uncertainty and names an only-before-feared-exams test; 'people tidy however they like' is the dodge the exam-only timing defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "Before sending any work email a woman re-reads it eleven times, but only messages to her demanding manager; emails to friends and peers she fires off without a glance. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She seems to proofread her emails carefully.",
        credit: 0.3,
      },
      {
        text: "It's probably anxiety about her boss; we could keep noticing the re-reading.",
        credit: 0.6,
      },
      {
        text: "The re-reading likely does a job — it tries to make impossible the catastrophe she dreads (sending something that exposes her to her manager's judgment), so the checking binds a fear of being found wanting rather than reflecting real doubt about typos; test whether the ritual attaches only to messages that can be judged by him, whether being made to send after one read leaves her anxious for hours, and whether it eases once the fear of his disapproval is named.",
        credit: 1.0,
      },
      {
        text: "She must be incompetent at writing and the re-reading is her covering up genuine errors.",
        credit: 0,
      },
    ],
    correctAnswer:
      "The re-reading likely does a job — it tries to make impossible the catastrophe she dreads (sending something that exposes her to her manager's judgment), so the checking binds a fear of being found wanting rather than reflecting real doubt about typos; test whether the ritual attaches only to messages that can be judged by him, whether being made to send after one read leaves her anxious for hours, and whether it eases once the fear of his disapproval is named.",
    explanation:
      "Top credit reads manager-only re-reading as binding a fear of judgment and names an only-messages-he-can-judge test; 'she must be incompetent' is the overreach her glance-free peer emails defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "A devout man is plagued by blasphemous images during prayer, and each time one appears he must restart the entire prayer from the beginning and recite a fixed apology; the ritual fires only after a blasphemous image, never otherwise. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The restart-and-apologize ritual likely functions to undo a thought he experiences as a sin — neutralizing a forbidden image precisely because his faith matters so much to him, so the compulsion binds the guilt the intrusion triggers; test whether the ritual fires only after blasphemous images and not other distractions, whether forbidding the restart leaves him certain he's damned, and whether it eases once he learns an unwanted thought is not a chosen sin.",
        credit: 1.0,
      },
      {
        text: "It's probably religious anxiety; we could discuss his prayers.",
        credit: 0.6,
      },
      {
        text: "Religious people have their rituals; there's nothing to interpret in how he prays.",
        credit: 0,
      },
      {
        text: "He seems to restart his prayers often.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The restart-and-apologize ritual likely functions to undo a thought he experiences as a sin — neutralizing a forbidden image precisely because his faith matters so much to him, so the compulsion binds the guilt the intrusion triggers; test whether the ritual fires only after blasphemous images and not other distractions, whether forbidding the restart leaves him certain he's damned, and whether it eases once he learns an unwanted thought is not a chosen sin.",
    explanation:
      "Full credit reads the restart ritual as undoing a thought felt as sin and names a fires-only-after-blasphemous-images test; 'religious people have their rituals' is the dodge the image-triggered specificity defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "Each night a man asks his wife four times whether he definitely locked the front door, even though he watched himself lock it; her 'yes, you did' calms him for a few minutes, then the doubt returns and he asks again. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He seems to ask about the door a lot.",
        credit: 0.3,
      },
      {
        text: "Worrying about locks is so common it can't mean anything in particular.",
        credit: 0,
      },
      {
        text: "The asking likely does something his own memory can't — it briefly offloads onto his wife the unbearable responsibility for a break-in, so the reassurance binds a doubt that no amount of checking can satisfy; test whether her answer calms him only momentarily before the doubt rebuilds, whether blocking the question leaves him flooded with dread, and whether the urge eases once the need to be certain (rather than the lock) is addressed.",
        credit: 1.0,
      },
      {
        text: "It's probably some doubt about the door; we could look into the reassurance-seeking.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The asking likely does something his own memory can't — it briefly offloads onto his wife the unbearable responsibility for a break-in, so the reassurance binds a doubt that no amount of checking can satisfy; test whether her answer calms him only momentarily before the doubt rebuilds, whether blocking the question leaves him flooded with dread, and whether the urge eases once the need to be certain (rather than the lock) is addressed.",
    explanation:
      "Top credit reads repeated asking as offloading responsibility for a doubt checking can't settle and names a calms-only-momentarily test; 'worrying about locks is common' is the dodge the never-satisfied loop defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A teenager must avoid stepping on pavement cracks and touch each lamppost on her walk home, convinced that skipping the routine will cause her mother to fall ill; the urge is strongest on days her mother seems unwell. Which conclusion best follows?",
    mcOptions: [
      {
        text: "It's probably worry about her mother; we could keep an eye on the routine.",
        credit: 0.6,
      },
      {
        text: "The routine likely gives her magical control over an intolerable uncertainty — by performing it perfectly she feels she is preventing her mother's illness, so the ritual binds a helplessness she can't otherwise bear; test whether the urge intensifies exactly when her mother seems sick, whether skipping a lamppost leaves her terrified she's caused harm, and whether it eases once the helplessness about her mother is faced directly.",
        credit: 1.0,
      },
      {
        text: "She seems to have a strict walking routine home.",
        credit: 0.3,
      },
      {
        text: "Deep down she wishes her mother ill, and the ritual is her hidden guilt about that wish.",
        credit: 0,
      },
    ],
    correctAnswer:
      "The routine likely gives her magical control over an intolerable uncertainty — by performing it perfectly she feels she is preventing her mother's illness, so the ritual binds a helplessness she can't otherwise bear; test whether the urge intensifies exactly when her mother seems sick, whether skipping a lamppost leaves her terrified she's caused harm, and whether it eases once the helplessness about her mother is faced directly.",
    explanation:
      "Full credit reads the routine as magical control over helplessness about her mother and names an intensifies-when-mother-seems-sick test; 'she wishes her mother ill' is the overreach her protective intent defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A new mother gets up to check that her sleeping baby is breathing twenty times a night, but the urge spikes specifically after intrusive images of the baby dying flash through her mind; on nights without the images she sleeps. Which conclusion best follows?",
    mcOptions: [
      {
        text: "New parents check on babies; there's nothing to read into a worried mother.",
        credit: 0,
      },
      {
        text: "She seems to check on the baby very often at night.",
        credit: 0.3,
      },
      {
        text: "The checking likely binds the terror set off by the intrusive images — each look reassures her the feared catastrophe hasn't happened, so the ritual neutralizes a specific dread rather than reflecting realistic risk; test whether the trips spike right after the death images, whether being kept in bed leaves her panicked, and whether the urge eases once she learns the images are intrusions, not premonitions.",
        credit: 1.0,
      },
      {
        text: "It's probably new-parent anxiety; we could talk about the night-checking.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The checking likely binds the terror set off by the intrusive images — each look reassures her the feared catastrophe hasn't happened, so the ritual neutralizes a specific dread rather than reflecting realistic risk; test whether the trips spike right after the death images, whether being kept in bed leaves her panicked, and whether the urge eases once she learns the images are intrusions, not premonitions.",
    explanation:
      "Top credit reads the night-checks as binding terror from intrusive images and names a spikes-after-the-images test; 'new parents check on babies' is the dodge the image-triggered, twenty-times-a-night pattern defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "After every social gathering a man spends hours mentally replaying his conversations word by word to be sure he didn't say anything offensive; the reviewing fires only after events where he spoke to people he wants to impress. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He seems to think back on his conversations a lot.",
        credit: 0.3,
      },
      {
        text: "The replaying likely works as a mental checking ritual — it tries to rule out the catastrophe of having humiliated himself before people whose regard he craves, so the review binds a fear of judgment rather than any real lapse; test whether it fires only after high-stakes social events, whether stopping the review mid-way leaves him convinced he blundered, and whether it eases once the fear of others' disapproval is named.",
        credit: 1.0,
      },
      {
        text: "It's probably social anxiety; we could look into the replaying.",
        credit: 0.6,
      },
      {
        text: "The reviewing proves he actually did say something offensive each time and knows it.",
        credit: 0,
      },
    ],
    correctAnswer:
      "The replaying likely works as a mental checking ritual — it tries to rule out the catastrophe of having humiliated himself before people whose regard he craves, so the review binds a fear of judgment rather than any real lapse; test whether it fires only after high-stakes social events, whether stopping the review mid-way leaves him convinced he blundered, and whether it eases once the fear of others' disapproval is named.",
    explanation:
      "Full credit reads the mental replay as a checking ritual binding fear of judgment and names an only-after-high-stakes-events test; 'he actually did offend each time' is the overreach the impress-only trigger defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A man flips the bedroom light on and off until it 'feels right,' sometimes thirty times, but only on nights he's lying awake dreading a medical test the next day; on calm nights he flips it once. Which conclusion best follows?",
    mcOptions: [
      {
        text: "It's probably anxiety about the test; we could notice the switching.",
        credit: 0.6,
      },
      {
        text: "He seems to flip the light many times some nights.",
        credit: 0.3,
      },
      {
        text: "Some people have quirky bedtime habits; there's nothing to make of light-switching.",
        credit: 0,
      },
      {
        text: "The switching likely manufactures a feeling of control he can't get over the medical test — repeating until it 'feels right' substitutes a solvable task for an unbearable uncertainty, so the ritual binds his dread; test whether the urge appears only when he faces a feared unknown, whether being stopped before it 'feels right' spikes his anxiety, and whether it fades once the fear about the test is faced directly.",
        credit: 1.0,
      },
    ],
    correctAnswer:
      "The switching likely manufactures a feeling of control he can't get over the medical test — repeating until it 'feels right' substitutes a solvable task for an unbearable uncertainty, so the ritual binds his dread; test whether the urge appears only when he faces a feared unknown, whether being stopped before it 'feels right' spikes his anxiety, and whether it fades once the fear about the test is faced directly.",
    explanation:
      "Top credit reads light-switching as substituting control for medical-test dread and names an only-before-feared-unknowns test; 'quirky bedtime habits' is the dodge the test-night-only timing defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A young woman takes long, scalding showers, but only after an unwanted sexual thought about a relative intrudes; she says she feels 'dirty in her mind' and the shower is the only thing that helps, briefly. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The showering likely works to wash away a mental 'contamination' — it neutralizes the disgust and guilt an intrusive taboo thought stirs, so the ritual undoes a forbidden idea precisely because it horrifies her; test whether the showers follow these specific thoughts and not ordinary dirt, whether being unable to shower leaves her flooded with shame, and whether the urge eases once she learns the thought is an intrusion, not a desire.",
        credit: 1.0,
      },
      {
        text: "She seems to take a lot of long showers.",
        credit: 0.3,
      },
      {
        text: "It's probably about feeling unclean; we could discuss the showering.",
        credit: 0.6,
      },
      {
        text: "The thoughts reveal a real hidden desire toward the relative that the showering expresses.",
        credit: 0,
      },
    ],
    correctAnswer:
      "The showering likely works to wash away a mental 'contamination' — it neutralizes the disgust and guilt an intrusive taboo thought stirs, so the ritual undoes a forbidden idea precisely because it horrifies her; test whether the showers follow these specific thoughts and not ordinary dirt, whether being unable to shower leaves her flooded with shame, and whether the urge eases once she learns the thought is an intrusion, not a desire.",
    explanation:
      "Full credit reads scalding showers as undoing a 'mental contamination' from an intrusive taboo thought and names a follow-the-thoughts-not-dirt test; 'a real hidden desire' is the overreach her disgust and horror defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "A commuter circles back and re-drives stretches of road convinced he may have hit a pedestrian he didn't see; the urge fires only after he feels a bump or passes someone close to the curb, and a clean re-drive calms him for a mile before doubt returns. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Careful drivers double back sometimes; there's nothing to interpret here.",
        credit: 0,
      },
      {
        text: "It's probably driving anxiety; we could look into the doubling back.",
        credit: 0.6,
      },
      {
        text: "The re-driving likely tries to discharge an unbearable doubt about having caused harm — it briefly proves he isn't responsible for a death, so the checking binds a responsibility-guilt that no single look can settle; test whether the urge fires only after cues of possible harm, whether a clean re-drive calms him only briefly before doubt rebuilds, and whether it eases once the need for certainty (not the road) is addressed.",
        credit: 1.0,
      },
      {
        text: "He seems to re-drive parts of his route.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The re-driving likely tries to discharge an unbearable doubt about having caused harm — it briefly proves he isn't responsible for a death, so the checking binds a responsibility-guilt that no single look can settle; test whether the urge fires only after cues of possible harm, whether a clean re-drive calms him only briefly before doubt rebuilds, and whether it eases once the need for certainty (not the road) is addressed.",
    explanation:
      "Top credit reads re-driving as discharging an unsettleable responsibility-doubt and names a calms-only-briefly test; 'careful drivers double back' is the dodge the harm-cue trigger and rebuilding doubt defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "A boy lines his shoes up in a precise order each night and counts to a fixed number, believing that if he gets it wrong his older brother will die in an accident; the ritual grows longer whenever his brother travels. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He seems to have a careful bedtime arranging routine.",
        credit: 0.3,
      },
      {
        text: "It's probably worry about his brother; we could keep an eye on the routine.",
        credit: 0.6,
      },
      {
        text: "He must secretly wish his brother dead, and the ritual is his guilt over the wish.",
        credit: 0,
      },
      {
        text: "The arranging likely gives him magical control over an unbearable possibility — performing it perfectly feels like it keeps his brother safe, so the ritual binds the helplessness he feels when his brother is at risk; test whether it lengthens exactly when his brother travels, whether getting the count wrong leaves him terrified he's caused harm, and whether it eases once the helplessness about his brother is faced directly.",
        credit: 1.0,
      },
    ],
    correctAnswer:
      "The arranging likely gives him magical control over an unbearable possibility — performing it perfectly feels like it keeps his brother safe, so the ritual binds the helplessness he feels when his brother is at risk; test whether it lengthens exactly when his brother travels, whether getting the count wrong leaves him terrified he's caused harm, and whether it eases once the helplessness about his brother is faced directly.",
    explanation:
      "Full credit reads the arranging as magical control over helplessness about his brother and names a lengthens-when-he-travels test; 'he wishes his brother dead' is the overreach his protective fear defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "An accountant must touch each corner of his desk twice whenever the number 6 appears in his work, which he considers 'a bad number'; the ritual fires only at the sight of that number and leaves him briefly calm. Which conclusion best follows?",
    mcOptions: [
      {
        text: "It's probably superstition about numbers; we could discuss the touching.",
        credit: 0.6,
      },
      {
        text: "The touching likely neutralizes the dread a 'bad' number triggers — it undoes a feared catastrophe he can't otherwise control, so the ritual binds a specific anxiety rather than reflecting any real property of the number; test whether the ritual fires only at that number and not others, whether being stopped from touching leaves him convinced something bad will happen, and whether it eases once the dread the number stands for is faced directly.",
        credit: 1.0,
      },
      {
        text: "Lots of people have lucky and unlucky numbers; there's nothing to read into it.",
        credit: 0,
      },
      {
        text: "He seems to touch his desk when he sees a certain number.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The touching likely neutralizes the dread a 'bad' number triggers — it undoes a feared catastrophe he can't otherwise control, so the ritual binds a specific anxiety rather than reflecting any real property of the number; test whether the ritual fires only at that number and not others, whether being stopped from touching leaves him convinced something bad will happen, and whether it eases once the dread the number stands for is faced directly.",
    explanation:
      "Top credit reads the touching as neutralizing dread a 'bad' number triggers and names a fires-only-at-that-number test; 'lots of people have unlucky numbers' is the dodge the number-locked, catastrophe-averting pattern defeats.",
  },
];

const hybrid: HomeworkItem[] = [
  {
    itemType: "hybrid",
    prompt:
      "A woman unplugs every appliance and photographs each outlet before leaving for work, but only on days her elderly father is home alone; when he's at his sister's, she leaves without a single check. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She seems to check the outlets carefully before work.",
        credit: 0.3,
      },
      {
        text: "The unplugging-and-photographing likely does a job — it discharges an unbearable sense of being responsible for a fire that could kill her father, so the ritual binds a responsibility-fear rather than reflecting real doubt about the appliances; test whether the checking appears only when he's home and she feels responsible, whether reviewing the photos calms her only briefly before doubt returns, and whether it eases once the fear of being to blame for harm to him is named.",
        credit: 1.0,
      },
      {
        text: "Unplugging appliances is sensible safety; there's nothing to interpret in a careful person.",
        credit: 0,
      },
      {
        text: "It's probably worry about her father; we could look into the checking.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'the ritual binds responsibility-fear about her father' lead from the rival 'she's simply a cautious, safety-minded person,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: compare her checking on days her father is home against days he's away — a ritual that appears only when he's home and she's responsible points to a responsibility-fear, not general caution. My lead is refuted if she unplugs and photographs just as thoroughly when the house is empty, which would fit an across-the-board safety habit.",
      yieldAnchors: [
        "She unplugs and photographs every outlet",
        "The ritual appears only when her father is home alone",
        "She skips it entirely when he's away",
      ],
      riskAnchors: [
        "The checking tracks days she feels responsible for him",
        "Reviewing the photos calms her only briefly",
        "It eases once the fear of being to blame is named",
      ],
      defeatedBy: [
        "She checks just as much when the house is empty",
        "The ritual is unrelated to whether anyone is at risk",
      ],
    },
    correctAnswer:
      "The unplugging-and-photographing likely does a job — it discharges an unbearable sense of being responsible for a fire that could kill her father, so the ritual binds a responsibility-fear rather than reflecting real doubt about the appliances; test whether the checking appears only when he's home and she feels responsible, whether reviewing the photos calms her only briefly before doubt returns, and whether it eases once the fear of being to blame for harm to him is named.",
    explanation:
      "Full credit reads the photographing as binding a responsibility-fear about her father and is paired with a home-vs-away test that names its refutation; 'sensible safety' is the dodge the father-home-only timing defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A man scrubs his hands raw after handling mail, but the urge fires only since a news story about a chemical scare; he says ordinary dirt doesn't bother him at all, only the thought of the contaminant from the mail. Which conclusion best follows?",
    mcOptions: [
      {
        text: "It's probably a contamination worry; we could keep an eye on the washing.",
        credit: 0.6,
      },
      {
        text: "He seems to wash his hands hard after the mail.",
        credit: 0.3,
      },
      {
        text: "The scrubbing likely works to discharge a specific dread the news story planted — it neutralizes a feared contaminant rather than reflecting any general germ concern, so the washing binds that particular fear; test whether the over-washing attaches only to mail and the chemical it represents, whether being stopped from washing floods him with dread, and whether it eases once the fear behind the contaminant is faced directly.",
        credit: 1.0,
      },
      {
        text: "Germ worries are everywhere these days; there's nothing specific to read in his washing.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'the washing binds a specific dread from the news story' lead from the rival 'he's just a generally germ-averse person,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: check whether the raw scrubbing fires only after handling mail (the feared contaminant) and not after ordinary dirt — washing locked to that one trigger points to a specific planted dread, not general germ-aversion. My lead is refuted if he over-washes after all kinds of contact regardless of the mail, which would fit a broad germ phobia.",
      yieldAnchors: [
        "He scrubs his hands raw after handling mail",
        "The urge began with a chemical-scare news story",
        "Ordinary dirt doesn't bother him",
      ],
      riskAnchors: [
        "The washing attaches only to mail and that contaminant",
        "Being stopped from washing floods him with dread",
        "It eases once the underlying fear is faced",
      ],
      defeatedBy: [
        "He over-washes after every kind of contact",
        "The urge predates the news story",
      ],
    },
    correctAnswer:
      "The scrubbing likely works to discharge a specific dread the news story planted — it neutralizes a feared contaminant rather than reflecting any general germ concern, so the washing binds that particular fear; test whether the over-washing attaches only to mail and the chemical it represents, whether being stopped from washing floods him with dread, and whether it eases once the fear behind the contaminant is faced directly.",
    explanation:
      "Top credit reads the scrubbing as discharging a specific planted dread and is paired with a mail-vs-ordinary-dirt test that names its refutation; 'germ worries are everywhere' is the dodge the only-the-contaminant specificity defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A woman cooking dinner gets a flash of 'what if I stab my husband,' and immediately puts the knife down, taps the counter three times, and replaces it; she does this only after that thought and feels she's 'made it safe.' Which conclusion best follows?",
    mcOptions: [
      {
        text: "The put-down-tap-replace sequence likely functions as undoing — it cancels an intrusive thought she finds horrifying precisely because she loves her husband, so the ritual neutralizes a forbidden idea rather than reflecting any wish; test whether the sequence fires only after that thought, whether being prevented from completing it leaves her sure something terrible will happen, and whether it loosens once she learns the thought is an intrusion, not a desire.",
        credit: 1.0,
      },
      {
        text: "It's probably a way of coping with a scary thought; we could talk it over.",
        credit: 0.6,
      },
      {
        text: "The ritual shows she actually wants to harm her husband and is barely holding back.",
        credit: 0,
      },
      {
        text: "She seems to put the knife down and tap when cooking.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'the sequence undoes a horrifying intrusive thought' lead from the rival 'she has a genuine urge to harm her husband,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: note whether the ritual fires only right after the intrusive thought and is accompanied by horror rather than desire — neutralizing a thought she's appalled by points to undoing, not a real urge. My lead is refuted if she shows genuine hostility toward her husband and the rituals track anger at him rather than the unwanted thought.",
      yieldAnchors: [
        "The ritual fires only after the 'what if I stab him' thought",
        "She loves her husband and is horrified by the thought",
        "She feels she has 'made it safe'",
      ],
      riskAnchors: [
        "The sequence fires only after that specific thought",
        "Being prevented leaves her sure harm will follow",
        "It loosens once she learns the thought is an intrusion",
      ],
      defeatedBy: [
        "She harbors real hostility toward her husband",
        "The rituals track anger at him, not the unwanted thought",
      ],
    },
    correctAnswer:
      "The put-down-tap-replace sequence likely functions as undoing — it cancels an intrusive thought she finds horrifying precisely because she loves her husband, so the ritual neutralizes a forbidden idea rather than reflecting any wish; test whether the sequence fires only after that thought, whether being prevented from completing it leaves her sure something terrible will happen, and whether it loosens once she learns the thought is an intrusion, not a desire.",
    explanation:
      "Full credit reads the knife-down-tap-replace ritual as undoing a horrifying intrusion and is paired with a horror-vs-desire test that names its refutation; 'she actually wants to harm him' is the overreach her horror and love defeat.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A man squares every picture frame and aligns every book spine until it 'feels right,' redoing it for an hour — but only on evenings he's waiting to hear about a job he desperately wants; once he hears, the urge vanishes. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He seems to straighten things for a long time some evenings.",
        credit: 0.3,
      },
      {
        text: "Tidy people straighten their homes; there's nothing underneath a love of order.",
        credit: 0,
      },
      {
        text: "The aligning likely manufactures a control he can't have over the job decision — getting one corner of the world 'just right' substitutes for the intolerable uncertainty of waiting, so the ritual binds that dread; test whether the urge appears only while he's awaiting a feared verdict, whether being stopped before it 'feels right' spikes his anxiety, and whether it disappears the moment the uncertainty resolves.",
        credit: 1.0,
      },
      {
        text: "It's probably stress about the job; we could notice the straightening.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'the aligning substitutes control for job-waiting uncertainty' lead from the rival 'he simply loves a tidy, ordered home,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: track whether the hour-long aligning appears only while he's awaiting an uncertain verdict and vanishes once he hears — a ritual tied to waiting points to control-substitution, not a love of order. My lead is refuted if he straightens just as compulsively on ordinary, low-uncertainty evenings, which would fit a general tidiness trait.",
      yieldAnchors: [
        "He aligns frames and books until it 'feels right'",
        "The urge appears only while awaiting the job decision",
        "It vanishes once he hears",
      ],
      riskAnchors: [
        "The urge tracks periods of feared uncertainty",
        "Being stopped before 'just right' spikes anxiety",
        "It disappears when the uncertainty resolves",
      ],
      defeatedBy: [
        "He aligns just as much on ordinary calm evenings",
        "The straightening is unrelated to any pending decision",
      ],
    },
    correctAnswer:
      "The aligning likely manufactures a control he can't have over the job decision — getting one corner of the world 'just right' substitutes for the intolerable uncertainty of waiting, so the ritual binds that dread; test whether the urge appears only while he's awaiting a feared verdict, whether being stopped before it 'feels right' spikes his anxiety, and whether it disappears the moment the uncertainty resolves.",
    explanation:
      "Top credit reads 'just right' aligning as substituting control for waiting-uncertainty and is paired with a waiting-vs-ordinary-evenings test that names its refutation; 'tidy people straighten' is the dodge the only-while-waiting timing defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "After any disagreement, a woman repeatedly confesses to her partner small things she might have done wrong that day, seeking his 'it's fine'; the urge fires only after conflict and his reassurance calms her for minutes before she confesses again. Which conclusion best follows?",
    mcOptions: [
      {
        text: "It's probably guilt after arguments; we could look into the confessing.",
        credit: 0.6,
      },
      {
        text: "The confessing likely works to discharge an unbearable doubt about being bad or blameworthy — his 'it's fine' briefly offloads the guilt conflict stirs, so the reassurance binds a doubt no single answer can settle; test whether the confessing fires specifically after conflict, whether his reassurance calms her only briefly before the urge rebuilds, and whether it eases once the need to be certain she's not bad is addressed rather than each 'sin.'",
        credit: 1.0,
      },
      {
        text: "She seems to confess little things after arguments.",
        credit: 0.3,
      },
      {
        text: "Couples reassure each other all the time; there's nothing to read in her confessing.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'the confessing offloads an unsettleable guilt-doubt' lead from the rival 'she's just an honest person who likes to clear the air,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: watch whether his reassurance calms her only momentarily before she confesses again, and whether the urge fires specifically after conflict — a never-satisfied loop tied to disagreements points to a guilt-doubt, not ordinary openness. My lead is refuted if a single 'it's fine' settles her lastingly and the confessing happens evenly regardless of conflict.",
      yieldAnchors: [
        "She repeatedly confesses minor possible wrongs",
        "The urge fires only after a disagreement",
        "His reassurance calms her only briefly",
      ],
      riskAnchors: [
        "The confessing follows conflict specifically",
        "Reassurance calms her only momentarily",
        "It eases once the need for certainty is addressed",
      ],
      defeatedBy: [
        "One reassurance settles her for good",
        "The confessing is unrelated to conflict",
      ],
    },
    correctAnswer:
      "The confessing likely works to discharge an unbearable doubt about being bad or blameworthy — his 'it's fine' briefly offloads the guilt conflict stirs, so the reassurance binds a doubt no single answer can settle; test whether the confessing fires specifically after conflict, whether his reassurance calms her only briefly before the urge rebuilds, and whether it eases once the need to be certain she's not bad is addressed rather than each 'sin.'",
    explanation:
      "Full credit reads repeated confessing as offloading an unsettleable guilt-doubt and is paired with a calms-only-momentarily test that names its refutation; 'couples reassure each other' is the dodge the post-conflict, rebuilding loop defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A man checks his pulse and searches his symptoms online for hours, but the urge spikes only after he notices an ordinary bodily sensation he fears signals cancer; a 'normal' reading calms him briefly before the doubt returns. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He seems to check his health a lot online.",
        credit: 0.3,
      },
      {
        text: "It's probably health anxiety; we could keep an eye on the searching.",
        credit: 0.6,
      },
      {
        text: "All the checking proves he really does have a serious undiagnosed illness.",
        credit: 0,
      },
      {
        text: "The checking likely tries to discharge an unbearable uncertainty about his body — each search briefly rules out the feared catastrophe, so the ritual binds a doubt that no reassurance can settle; test whether the searching spikes only after sensations he reads as cancer, whether a normal result calms him only briefly before doubt rebuilds, and whether it eases once the intolerance of uncertainty (not the symptom) is addressed.",
        credit: 1.0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'the checking binds an unsettleable uncertainty about illness' lead from the rival 'he has a real medical problem driving genuine concern,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: see whether a reassuring pulse or normal result calms him only briefly before the doubt rebuilds and the searching resumes — a loop no reassurance settles points to intolerance of uncertainty, not a real illness. My lead is refuted if a normal check lastingly relieves him or if a genuine diagnosis accounts for the sensations.",
      yieldAnchors: [
        "He checks his pulse and searches symptoms for hours",
        "The urge spikes after sensations he fears mean cancer",
        "A normal reading calms him only briefly",
      ],
      riskAnchors: [
        "Searching spikes only after feared sensations",
        "Reassurance calms him only briefly",
        "It eases once intolerance of uncertainty is addressed",
      ],
      defeatedBy: [
        "A normal check relieves him for good",
        "A genuine diagnosis explains the sensations",
      ],
    },
    correctAnswer:
      "The checking likely tries to discharge an unbearable uncertainty about his body — each search briefly rules out the feared catastrophe, so the ritual binds a doubt that no reassurance can settle; test whether the searching spikes only after sensations he reads as cancer, whether a normal result calms him only briefly before doubt rebuilds, and whether it eases once the intolerance of uncertainty (not the symptom) is addressed.",
    explanation:
      "Top credit reads the searching as discharging an unsettleable bodily uncertainty and is paired with a does-reassurance-last test that names its refutation; 'he really is ill' is the overreach the briefly-calmed, rebuilding doubt defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A teenager silently recites a 'protection phrase' exactly five times whenever an immoral image crosses his mind in class; the ritual fires only after such an image and he believes skipping it will make him 'a bad person.' Which conclusion best follows?",
    mcOptions: [
      {
        text: "The recitation likely functions to undo a thought he experiences as proof of badness — neutralizing an intrusive image precisely because being good matters so much to him, so the ritual binds the guilt the intrusion triggers; test whether it fires only after moral-themed images, whether forbidding the phrase leaves him certain he's bad, and whether it eases once he learns an unwanted thought isn't a measure of character.",
        credit: 1.0,
      },
      {
        text: "It's probably guilt about his thoughts; we could discuss the phrase.",
        credit: 0.6,
      },
      {
        text: "He seems to repeat a phrase to himself in class.",
        credit: 0.3,
      },
      {
        text: "Teenagers have all kinds of private habits; there's nothing to interpret in a repeated phrase.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'the phrase undoes a thought felt as proof of badness' lead from the rival 'it's just an idiosyncratic verbal tic,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: check whether the phrase fires specifically after morally charged images and is tied to a fear of being bad — a ritual locked to those intrusions points to undoing guilt, not a random tic. My lead is refuted if he recites it at unrelated, neutral moments with no link to any feared thought.",
      yieldAnchors: [
        "He recites a 'protection phrase' five times",
        "It fires only after an immoral image",
        "He believes skipping it makes him bad",
      ],
      riskAnchors: [
        "The ritual fires only after moral-themed images",
        "Forbidding the phrase leaves him certain he's bad",
        "It eases once he learns thoughts aren't character",
      ],
      defeatedBy: [
        "He recites it at random, neutral moments",
        "The phrase has no link to any feared thought",
      ],
    },
    correctAnswer:
      "The recitation likely functions to undo a thought he experiences as proof of badness — neutralizing an intrusive image precisely because being good matters so much to him, so the ritual binds the guilt the intrusion triggers; test whether it fires only after moral-themed images, whether forbidding the phrase leaves him certain he's bad, and whether it eases once he learns an unwanted thought isn't a measure of character.",
    explanation:
      "Full credit reads the phrase as undoing a thought felt as proof of badness and is paired with a fires-after-moral-images test that names its refutation; 'idiosyncratic verbal tic' is the dodge the image-triggered timing defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A woman takes a forty-minute detour to avoid driving past the lake, ever since intrusive thoughts of swerving in began; she feels calm only by avoiding the route entirely and dreads the thoughts returning if she goes near it. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She seems to avoid driving by the lake.",
        credit: 0.3,
      },
      {
        text: "Her avoidance shows she truly intends to drive into the lake someday.",
        credit: 0,
      },
      {
        text: "It's probably anxiety about the lake road; we could look into the detour.",
        credit: 0.6,
      },
      {
        text: "The detour likely functions to bind the terror her intrusive swerving thoughts provoke — avoiding the lake removes the cue and the unbearable doubt about acting on the thought, so the ritual neutralizes a feared impulse she's horrified by rather than any real intent; test whether the avoidance attaches only to cues that trigger the thoughts, whether being made to drive the route floods her with dread, and whether it eases once she learns the thoughts are intrusions, not plans.",
        credit: 1.0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'the detour binds terror from intrusive swerving thoughts' lead from the rival 'she genuinely intends to harm herself at the lake,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: note whether the avoidance attaches only to cues that trigger the unwanted thoughts and is driven by horror rather than intent — avoidance aimed at removing a dreaded intrusion points to neutralizing a feared impulse, not a real plan. My lead is refuted if she shows genuine intent or desire to harm herself rather than dread of the thought itself.",
      yieldAnchors: [
        "She detours forty minutes to avoid the lake",
        "The avoidance began with intrusive swerving thoughts",
        "She feels calm only by avoiding the route",
      ],
      riskAnchors: [
        "Avoidance attaches only to thought-triggering cues",
        "Being made to drive the route floods her with dread",
        "It eases once she learns the thoughts are intrusions",
      ],
      defeatedBy: [
        "She shows genuine intent to harm herself",
        "The avoidance is unrelated to the intrusive thoughts",
      ],
    },
    correctAnswer:
      "The detour likely functions to bind the terror her intrusive swerving thoughts provoke — avoiding the lake removes the cue and the unbearable doubt about acting on the thought, so the ritual neutralizes a feared impulse she's horrified by rather than any real intent; test whether the avoidance attaches only to cues that trigger the thoughts, whether being made to drive the route floods her with dread, and whether it eases once she learns the thoughts are intrusions, not plans.",
    explanation:
      "Top credit reads the detour as binding terror from intrusive thoughts and is paired with a cue-specific, horror-vs-intent test that names its refutation; 'she truly intends to drive in' is the overreach her dread of the thought defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A man arranges his keys, wallet, and phone in a fixed line and taps each one before leaving, sure that doing it wrong means his wife will be hurt that day; the ritual takes longer on mornings she has a long commute. Which conclusion best follows?",
    mcOptions: [
      {
        text: "It's probably worry about his wife; we could keep an eye on the routine.",
        credit: 0.6,
      },
      {
        text: "He seems to line up his things before leaving.",
        credit: 0.3,
      },
      {
        text: "The lining-up likely gives him magical control over an intolerable possibility — done perfectly, it feels like it keeps his wife safe, so the ritual binds the helplessness he feels about a danger he can't actually prevent; test whether the routine lengthens exactly when she faces more risk, whether doing it wrong leaves him terrified he's caused harm, and whether it eases once the helplessness about her safety is faced directly.",
        credit: 1.0,
      },
      {
        text: "Deep down he wishes his wife harm, and the ritual is his guilt over the wish.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'the routine is magical control over helplessness about his wife' lead from the rival 'he secretly wishes her harm,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: check whether the ritual lengthens precisely when his wife faces more danger (a long commute) and is driven by protective dread — effort that scales with her risk points to magical control over helplessness, not a hidden wish. My lead is refuted if the ritual is unrelated to her risk or if he shows genuine hostility toward her rather than fear for her.",
      yieldAnchors: [
        "He lines up and taps his keys, wallet, and phone",
        "He believes errors will get his wife hurt",
        "The ritual lengthens when she has a long commute",
      ],
      riskAnchors: [
        "The routine lengthens when she faces more risk",
        "Doing it wrong leaves him terrified he caused harm",
        "It eases once the helplessness about her is faced",
      ],
      defeatedBy: [
        "The ritual is unrelated to her level of risk",
        "He shows genuine hostility toward his wife",
      ],
    },
    correctAnswer:
      "The lining-up likely gives him magical control over an intolerable possibility — done perfectly, it feels like it keeps his wife safe, so the ritual binds the helplessness he feels about a danger he can't actually prevent; test whether the routine lengthens exactly when she faces more risk, whether doing it wrong leaves him terrified he's caused harm, and whether it eases once the helplessness about her safety is faced directly.",
    explanation:
      "Full credit reads the lining-up as magical control over helplessness about his wife and is paired with a scales-with-her-risk test that names its refutation; 'he wishes her harm' is the overreach his protective fear defeats.",
  },
];

const written: HomeworkItem[] = [
  {
    itemType: "written",
    prompt:
      "A man rereads and re-saves every important document up to thirty times before closing it, certain that a single missed error will get him fired; the urge fires only on high-stakes files for his most critical client, never on routine ones, and each save calms him for a moment before the doubt returns. In one paragraph, propose the strongest conclusion about what the re-saving is doing and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that the re-saving isn't really about errors but does a job — it tries to discharge an unbearable doubt about being responsible for a catastrophe (getting fired) that no single check can settle, so the ritual binds a fear of blame rather than reflecting genuine uncertainty about the file. This is a strong claim because it predicts checkable consequences: the re-saving should attach only to high-stakes files where he feels responsible and not to routine ones; each save should calm him only briefly before the doubt rebuilds and the cycle repeats; and the urge should ease once the intolerance of being to blame, rather than the document, is addressed. I would test it by comparing his behavior on critical versus routine files, by timing how long a completed save reassures him before the doubt returns, and by checking whether naming the fear of blame loosens the ritual.",
      yieldAnchors: [
        "He re-saves important documents up to thirty times",
        "The urge fires only on high-stakes files",
        "Each save calms him only for a moment",
      ],
      riskAnchors: [
        "The ritual attaches only to files he feels responsible for",
        "Each save reassures him only briefly",
        "It eases once the fear of blame is addressed",
      ],
      defeatedBy: [
        "A single save lastingly relieves him",
        "He re-saves routine files just as much",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that the re-saving isn't really about errors but does a job — it tries to discharge an unbearable doubt about being responsible for a catastrophe (getting fired) that no single check can settle, so the ritual binds a fear of blame rather than reflecting genuine uncertainty about the file. This is a strong claim because it predicts checkable consequences: the re-saving should attach only to high-stakes files where he feels responsible and not to routine ones; each save should calm him only briefly before the doubt rebuilds and the cycle repeats; and the urge should ease once the intolerance of being to blame, rather than the document, is addressed. I would test it by comparing his behavior on critical versus routine files, by timing how long a completed save reassures him before the doubt returns, and by checking whether naming the fear of blame loosens the ritual.",
    explanation:
      "Under the inverted standard, 'compulsive checking is just how some brains work' earns near-zero; top credit reads the re-saving as binding a fear of blame and names a high-stakes-vs-routine test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A young mother, every time an image of dropping her infant down the stairs flashes through her mind, must walk up and down the stairs three times while holding the baby tight; she does this only after the image, is horrified by it, and feels she has 'undone' the danger. In one paragraph, propose the strongest conclusion about what the stair-walking is doing and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that the stair-walking is an undoing ritual — it magically cancels an intrusive image she finds horrifying precisely because she loves the baby, so the compulsion neutralizes a forbidden idea rather than expressing any wish to harm. This is a strong claim because it predicts checkable consequences: the ritual should fire only after that specific image and not at random; being prevented from completing it should leave her convinced something terrible will happen; and the urge should loosen once she learns that an unwanted thought is an intrusion, not a desire or a plan. I would test it by noting whether the walking is tied strictly to the image, by observing her distress when the ritual is blocked, and by checking whether psychoeducation that separates thought from intent reduces the compulsion.",
      yieldAnchors: [
        "She walks the stairs three times after the dropping image",
        "She is horrified by the image and loves the baby",
        "She feels she has 'undone' the danger",
      ],
      riskAnchors: [
        "The ritual fires only after that specific image",
        "Blocking it leaves her sure harm will follow",
        "It loosens once thought is separated from intent",
      ],
      defeatedBy: [
        "She has a genuine wish to harm the baby",
        "The ritual is unrelated to the intrusive image",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that the stair-walking is an undoing ritual — it magically cancels an intrusive image she finds horrifying precisely because she loves the baby, so the compulsion neutralizes a forbidden idea rather than expressing any wish to harm. This is a strong claim because it predicts checkable consequences: the ritual should fire only after that specific image and not at random; being prevented from completing it should leave her convinced something terrible will happen; and the urge should loosen once she learns that an unwanted thought is an intrusion, not a desire or a plan. I would test it by noting whether the walking is tied strictly to the image, by observing her distress when the ritual is blocked, and by checking whether psychoeducation that separates thought from intent reduces the compulsion.",
    explanation:
      "The inverted standard gives near-zero to 'the image means she secretly wants to hurt the baby'; credit goes to reading the stair-walking as undoing a horrifying intrusion and naming a tied-to-the-image test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A woman cannot leave her apartment until everything on her shelves is arranged in a precise, symmetrical order that 'feels right,' sometimes redoing it for two hours; the ritual is worst on mornings she faces something uncertain and uncontrollable — a medical result, a first date — and absent on predictable days. In one paragraph, propose the strongest conclusion about what the arranging is doing and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that the arranging manufactures a feeling of control she cannot get over the real uncertainty she's facing — making one small, solvable corner of the world 'just right' substitutes for the intolerable not-knowing of a medical result or a date, so the ritual binds that dread rather than reflecting a love of order. This is a strong claim because it predicts checkable consequences: the urge should appear specifically before uncontrollable, feared events and be absent on predictable days; being stopped before it 'feels right' should sharply spike her anxiety; and the ritual should fade once the underlying uncertainty is faced or resolved. I would test it by mapping the arranging against her calendar of certain versus uncertain days, by noting her distress when interrupted, and by checking whether addressing the feared uncertainty directly shrinks the ritual.",
      yieldAnchors: [
        "She arranges shelves until they 'feel right'",
        "The ritual is worst before uncertain, uncontrollable events",
        "It is absent on predictable days",
      ],
      riskAnchors: [
        "The urge appears only before feared uncertainty",
        "Being stopped before 'just right' spikes anxiety",
        "It fades once the uncertainty is faced or resolved",
      ],
      defeatedBy: [
        "She arranges just as much on predictable, calm days",
        "The ritual is unrelated to any feared event",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that the arranging manufactures a feeling of control she cannot get over the real uncertainty she's facing — making one small, solvable corner of the world 'just right' substitutes for the intolerable not-knowing of a medical result or a date, so the ritual binds that dread rather than reflecting a love of order. This is a strong claim because it predicts checkable consequences: the urge should appear specifically before uncontrollable, feared events and be absent on predictable days; being stopped before it 'feels right' should sharply spike her anxiety; and the ritual should fade once the underlying uncertainty is faced or resolved. I would test it by mapping the arranging against her calendar of certain versus uncertain days, by noting her distress when interrupted, and by checking whether addressing the feared uncertainty directly shrinks the ritual.",
    explanation:
      "'People just like order' is the surface story the uncertain-day timing defeats; top credit reads the arranging as substituting control for intolerable uncertainty and names a certain-vs-uncertain-days test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A man texts his wife dozens of times a day asking whether she still loves him and whether he said anything wrong that morning; her warm answers calm him for a few minutes, then the doubt rebuilds and he texts again, and the pattern is worst after they've had even a minor disagreement. In one paragraph, propose the strongest conclusion about what the reassurance-seeking is doing and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that the texting is a reassurance ritual that briefly offloads onto his wife an unbearable doubt — about being loved or being bad — that no answer can permanently settle, so the asking binds an inner uncertainty rather than reflecting a real problem in the marriage. This is a strong claim because it predicts checkable consequences: her reassurance should calm him only for minutes before the doubt rebuilds and he asks again; the urge should spike specifically after disagreements that stir the fear of being unloved or wrong; and it should ease once the intolerance of uncertainty itself, rather than each individual worry, is addressed. I would test it by timing how long each reassurance lasts, by tracking whether the texting clusters after conflict, and by checking whether working on tolerating doubt reduces the asking more than any single answer does.",
      yieldAnchors: [
        "He texts dozens of times asking if she loves him",
        "Her answers calm him only for minutes",
        "The pattern is worst after a disagreement",
      ],
      riskAnchors: [
        "Reassurance calms him only briefly before doubt rebuilds",
        "The urge spikes after conflict specifically",
        "It eases once intolerance of uncertainty is addressed",
      ],
      defeatedBy: [
        "A single reassurance settles him lastingly",
        "The texting is unrelated to conflict or doubt",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that the texting is a reassurance ritual that briefly offloads onto his wife an unbearable doubt — about being loved or being bad — that no answer can permanently settle, so the asking binds an inner uncertainty rather than reflecting a real problem in the marriage. This is a strong claim because it predicts checkable consequences: her reassurance should calm him only for minutes before the doubt rebuilds and he asks again; the urge should spike specifically after disagreements that stir the fear of being unloved or wrong; and it should ease once the intolerance of uncertainty itself, rather than each individual worry, is addressed. I would test it by timing how long each reassurance lasts, by tracking whether the texting clusters after conflict, and by checking whether working on tolerating doubt reduces the asking more than any single answer does.",
    explanation:
      "The cautious 'couples just reassure each other' earns near-zero; top credit reads the texting as offloading an unsettleable doubt and names a how-long-does-reassurance-last test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A grandmother performs a fixed sequence of prayers and door-touches in a strict order each night, certain that any deviation will cause one of her grandchildren to be hurt; the sequence grows longer and more elaborate during the weeks her grandchildren are away on a trip. In one paragraph, propose the strongest conclusion about what the sequence is doing and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that the nightly sequence gives her a sense of magical control over an intolerable possibility — performed perfectly, it feels as though it keeps her grandchildren safe, so the ritual binds the helplessness she feels about dangers she cannot actually prevent rather than reflecting ordinary devotion. This is a strong claim because it predicts checkable consequences: the ritual should grow longer and more elaborate exactly when the grandchildren are most at risk, as during their trip; deviating from the order should leave her terrified she has caused harm; and the compulsion should ease once the underlying helplessness about their safety is faced directly. I would test it by tracking the ritual's length against the children's level of risk, by noting her reaction when the sequence is interrupted, and by checking whether addressing her fear of being unable to protect them reduces the ritual.",
      yieldAnchors: [
        "She performs prayers and door-touches in a strict order",
        "She believes any deviation will harm a grandchild",
        "The sequence grows longer when they are away",
      ],
      riskAnchors: [
        "The ritual lengthens when the children are most at risk",
        "Deviating leaves her terrified she caused harm",
        "It eases once helplessness about their safety is faced",
      ],
      defeatedBy: [
        "The ritual's length is unrelated to the children's risk",
        "It is ordinary devotion with no fear of causing harm",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that the nightly sequence gives her a sense of magical control over an intolerable possibility — performed perfectly, it feels as though it keeps her grandchildren safe, so the ritual binds the helplessness she feels about dangers she cannot actually prevent rather than reflecting ordinary devotion. This is a strong claim because it predicts checkable consequences: the ritual should grow longer and more elaborate exactly when the grandchildren are most at risk, as during their trip; deviating from the order should leave her terrified she has caused harm; and the compulsion should ease once the underlying helplessness about their safety is faced directly. I would test it by tracking the ritual's length against the children's level of risk, by noting her reaction when the sequence is interrupted, and by checking whether addressing her fear of being unable to protect them reduces the ritual.",
    explanation:
      "The inverted standard gives near-zero to 'it's just her religious routine'; credit goes to reading the sequence as magical control over helplessness and naming a scales-with-their-risk test that could refute it.",
  },
];

export const section: SectionContent = {
  slug: "function-of-the-ritual",
  title: "The Function of the Ritual: Anxiety, Control, and Defense",
  weekNumber: 1,
  blurb:
    "Compulsions and rituals are not pointless tics — they DO something: binding unbearable anxiety, magically undoing a forbidden thought, or restoring a sense of control over an intolerable uncertainty. The craft is reading what a ritual accomplishes from when it fires and what it costs, and naming the cheapest observation that would prove the reading wrong.",
  lectureTitle:
    "1.3 The Function of the Ritual: anxiety, control, and defense",
  body: `# The Function of the Ritual: Anxiety, Control, and Defense

A compulsion can look senseless from the outside — checking a locked door for the tenth time, washing already-clean hands until they crack, tapping a counter to "cancel" a thought. But in obsessive-compulsive trouble, the ritual is almost never pointless. It is doing a job. The anxiety from an obsession is unbearable, and the compulsion is the maneuver that brings it down — fast, reliably, and at a cost. The clinical skill in this section is to stop asking "why would anyone do that?" and start asking "what does this ritual accomplish?" Once you see the function, the strange behavior becomes readable, and you can name the cheap test that would confirm or refute your reading.

## A ritual is not pointless — it does a job

The first move is to assume the compulsion serves a purpose the person may not be able to state. An obsession spikes a feeling — dread, doubt, disgust, guilt — that feels impossible to sit with, and the ritual is what discharges it. That is why compulsions are so hard to drop: they work. They deliver real relief in the moment. The behavior is the data; the feeling it manages is the explanation we build to account for it. The question that unlocks a case is always the same: when the ritual fires, what does it do for the person right then?

## Binding anxiety

The most common job a ritual does is to bind anxiety — to take a flood of unbearable feeling and tie it down to something small and doable. A woman waiting on a frightening medical result cannot control the result, so she arranges her shelves until they "feel right." The arranging does nothing about the test, but it converts a vast, uncontrollable dread into a small, solvable task, and for a moment the anxiety drops. When you see a ritual that has no logical bearing on the feared event but reliably appears alongside it, suspect that its job is to bind a feeling the person can't otherwise hold.

## Undoing a forbidden thought

Some rituals do a different job: they magically "undo" an intrusive thought the person finds horrifying. A loving father who gets a flash of harming his child taps the table and says her name to "cancel" it; a devout man restarts a whole prayer to erase a blasphemous image. Crucially, the ritual fires precisely because the thought is abhorrent to the person — the horror is the engine, not a hidden wish. The compulsion neutralizes a forbidden idea so it doesn't feel real or owned. Reading this correctly matters enormously, because the lurid misreading ("the thought means he secretly wants to") is exactly what the person's distress defeats.

## Restoring control over the unbearable unknown

A third job rituals do is restore a sense of control over an uncertainty no one can actually master. A child lines up his shoes in a fixed order, sure that doing it perfectly keeps his traveling brother safe. He cannot make the world safe, so the ritual hands him a stand-in for control — a private deal that converts helplessness into something he can perform. Watch for rituals that grow more elaborate exactly when the real danger or uncertainty rises: that scaling is the tell that the ritual is binding helplessness, not responding to anything it literally touches.

## Reading what the ritual accomplishes — when it fires

You read a ritual's function the way you read any hidden process: from its signature in behavior, especially its timing. Does the compulsion fire only after one specific trigger — a particular thought, a particular person, a particular looming uncertainty? Does it bring relief that is real but brief, so the doubt rebuilds and the ritual repeats? Does blocking it flood the person with dread? These three marks — trigger-specificity, brief relief, and distress on prevention — point past the surface behavior to the feeling the ritual is managing. A compulsion that fires everywhere, soothes lastingly, or costs nothing to skip is telling you a different story.

## The relief that strengthens the loop — and its cost

Here is the trap: because the ritual works, it teaches the brain to do it again. Each round of brief relief is a reward that strengthens the loop and grows the compulsion over time, until checking the stove seven times becomes seventeen and a quick wash becomes an hour. The relief is real, which is why the cost is easy to ignore — the lost hours, the cracked skin, the avoided life. Seeing the function isn't about catching anyone out; it's about seeing what the protection costs, so the underlying feeling can eventually be faced more cheaply than the ritual charges.

## Reading the meaning — and naming a test

This stays honest only if every reading commits to a function AND names the cheap observation that would refute it. "The checking binds a fear of being to blame" is a real claim, because it predicts the checking should appear only when he feels responsible and vanish when someone else is — and you can check that. The weak move is to stop at "he checks a lot" (which explains nothing) or to retreat into "compulsions are random / that's just how some brains are wired" (which gives up before looking). The worst move is the lurid overreach the evidence defeats — "the ritual proves a hidden wish to harm." The strongest reading binds the specific timing in front of you and spells out the single result that would prove it wrong.

## In the real world

Suppose a friend admits he can't leave the house until he's checked the locks again and again, and shrugs that he's "just careful." The dodge is to agree, or to throw up your hands at how mysterious habits are — both explain nothing. A sharper move commits to a function: the checking briefly offloads an unbearable doubt about being responsible for a break-in, a doubt no single look can settle. Notice how much that opens up. It predicts the relief is only momentary before the doubt rebuilds; that the urge spikes when he feels most responsible; and that the checking eases once the need for certainty, not the lock, is addressed. Three cheap checks, each able to refute the idea. That is what reading the function of a ritual buys you — not a shrug at how strange compulsions are, but a testable story about what the ritual is doing, and a way to loosen it.`,
  homework: {
    mcq,
    hybrid,
    written,
  },
};
