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
      "At intake, a new patient describes two hours of daily hand-washing set off by touching doorknobs, plus a fear of contaminating his baby daughter. The clinician feels tempted to start exposures in the first session. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Before any exposure, the strongest first move is a shared formulation — mapping the exact triggers, the feared catastrophe (harming his daughter), the rituals, and what they accomplish — because aiming exposures at the wrong link wastes the work; test whether the washing tracks the daughter-contamination fear specifically, whether avoidance has quietly spread beyond washing, and whether he can name the feared outcome the ritual is meant to prevent.",
        credit: 1.0,
      },
      {
        text: "It's probably contamination OCD; we could start some exposures soon.",
        credit: 0.6,
      },
      {
        text: "He seems to wash his hands a lot.",
        credit: 0.3,
      },
      {
        text: "Since the symptom is obvious, a formulation is a waste of time and exposures should begin the first hour no matter what the details turn out to be.",
        credit: 0,
      },
    ],
    correctAnswer:
      "Before any exposure, the strongest first move is a shared formulation — mapping the exact triggers, the feared catastrophe (harming his daughter), the rituals, and what they accomplish — because aiming exposures at the wrong link wastes the work; test whether the washing tracks the daughter-contamination fear specifically, whether avoidance has quietly spread beyond washing, and whether he can name the feared outcome the ritual is meant to prevent.",
    explanation:
      "Top credit reads the case as sitting at the assessment-and-formulation step and names checkable mapping tasks; 'skip formulation, the symptom is obvious' is the overreach the specific harm-fear and hidden avoidance defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "A patient with checking compulsions says in the first session, 'I've done therapy before and they just shoved me into the scariest stuff and I quit — are you going to do that?' and watches the clinician carefully. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He seems nervous about starting therapy.",
        credit: 0.3,
      },
      {
        text: "His prior dropout proves he is untreatable and that no working relationship can be built with checking OCD.",
        credit: 0,
      },
      {
        text: "His question marks the case as sitting at the alliance-building stage — early exposure work will fail without a collaborative, graded plan he helps design and can trust; test whether his engagement rises when he's given a say in the pace, whether naming the past rupture lowers his guard, and whether he stays in the room once exposures are introduced gradually rather than forced.",
        credit: 1.0,
      },
      {
        text: "He's probably worried about the approach; we could reassure him it'll be fine.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "His question marks the case as sitting at the alliance-building stage — early exposure work will fail without a collaborative, graded plan he helps design and can trust; test whether his engagement rises when he's given a say in the pace, whether naming the past rupture lowers his guard, and whether he stays in the room once exposures are introduced gradually rather than forced.",
    explanation:
      "Full credit reads the case as needing alliance-building before exposure and names tests of engagement; 'he is untreatable' is the overreach his very willingness to ask and stay defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "Eager to get better fast, a contamination patient insists on starting with the single hardest task on her list — sitting on a public restroom floor — before any easier steps. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She probably wants to rush; we could suggest slowing down.",
        credit: 0.6,
      },
      {
        text: "Her wish to leap to the top of the ladder marks a planning step: a graded hierarchy is what makes exposure tolerable enough to actually complete without ritualizing, so the strong move is to build that ladder with her rather than honor the leap; test whether she can stay in an easier exposure without washing first, whether a too-hard start drives covert rituals or escape, and whether steady graded steps hold her engagement better than one overwhelming plunge.",
        credit: 1.0,
      },
      {
        text: "She seems very motivated to start.",
        credit: 0.3,
      },
      {
        text: "Since she's motivated, throw her straight into the worst exposure — hierarchies are coddling and motivated patients don't need them.",
        credit: 0,
      },
    ],
    correctAnswer:
      "Her wish to leap to the top of the ladder marks a planning step: a graded hierarchy is what makes exposure tolerable enough to actually complete without ritualizing, so the strong move is to build that ladder with her rather than honor the leap; test whether she can stay in an easier exposure without washing first, whether a too-hard start drives covert rituals or escape, and whether steady graded steps hold her engagement better than one overwhelming plunge.",
    explanation:
      "Top credit reads the case as needing a graded hierarchy and names tests of tolerable exposure; 'skip the ladder, motivation is enough' is the overreach the risk of escape and covert ritualizing defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "Months into successful ERP, a man's stove-checking has nearly stopped — but a brand-new obsession, an intrusive fear of stabbing his wife, has appeared and is now consuming him. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The fresh harm-obsession arriving just as checking faded suggests the work has relieved the surface ritual without touching the conflict the symptom was carrying, so the same anxiety has found a new outlet; test whether the new obsession shares the old one's emotional theme of fearing he'll damage what he loves, whether it flares in the same situations the checking used to, and whether pairing continued ERP with attention to that underlying fear stops the symptom from simply migrating again.",
        credit: 1.0,
      },
      {
        text: "It's probably related to the old symptom; we could keep doing exposures.",
        credit: 0.6,
      },
      {
        text: "He seems to have a new worry now.",
        credit: 0.3,
      },
      {
        text: "The new violent thought proves he is secretly dangerous and the real risk to his wife was there all along.",
        credit: 0,
      },
    ],
    correctAnswer:
      "The fresh harm-obsession arriving just as checking faded suggests the work has relieved the surface ritual without touching the conflict the symptom was carrying, so the same anxiety has found a new outlet; test whether the new obsession shares the old one's emotional theme of fearing he'll damage what he loves, whether it flares in the same situations the checking used to, and whether pairing continued ERP with attention to that underlying fear stops the symptom from simply migrating again.",
    explanation:
      "Top credit reads symptom substitution as a sign the meaning needs working alongside ERP and names a shared-theme test; 'he's secretly dangerous' is the overreach that confuses an ego-dystonic OCD fear with real intent.",
  },
  {
    itemType: "mc",
    prompt:
      "An ERP patient who had been improving keeps texting the clinician between sessions — 'Did I do the exposure right? Are you sure I'm not contaminated?' — and her progress has stalled exactly as the texts increased. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She seems to text a lot between sessions.",
        credit: 0.3,
      },
      {
        text: "The reassurance texts have become a new compulsion that quietly cancels the exposures — relief from the clinician's answer does the same anxiety-lowering work the old ritual did, so the plateau makes sense; test whether her gains resume when between-session reassurance is gently withheld, whether the urge to text spikes right after harder exposures, and whether she can tolerate the uncertainty when the clinician reflects the question back instead of answering it.",
        credit: 1.0,
      },
      {
        text: "She's probably seeking reassurance; we could talk about the texting.",
        credit: 0.6,
      },
      {
        text: "Answering every question fully and instantly is the caring thing to do, and refusing would just be cold and damage the relationship.",
        credit: 0,
      },
    ],
    correctAnswer:
      "The reassurance texts have become a new compulsion that quietly cancels the exposures — relief from the clinician's answer does the same anxiety-lowering work the old ritual did, so the plateau makes sense; test whether her gains resume when between-session reassurance is gently withheld, whether the urge to text spikes right after harder exposures, and whether she can tolerate the uncertainty when the clinician reflects the question back instead of answering it.",
    explanation:
      "Full credit reads reassurance-seeking as a ritual stalling ERP and names a withhold-and-watch test; 'always answer fully or you're cold' is the dodge that mistakes accommodation for care.",
  },
  {
    itemType: "mc",
    prompt:
      "A patient's contamination rituals barely improve despite good in-session work; it emerges that his wife wipes down every surface, opens all doors, and handles the mail for him so he 'doesn't have to.' Which conclusion best follows?",
    mcOptions: [
      {
        text: "He's lucky to have a supportive wife, so there's nothing in the home setup worth changing.",
        credit: 0,
      },
      {
        text: "It's probably about the home situation; we could mention it to his wife.",
        credit: 0.6,
      },
      {
        text: "The wife's helping is family accommodation that performs the avoidance for him, so the loop keeps running outside session no matter what happens inside it — the arc now needs the accommodation addressed; test whether his out-of-session anxiety has any room to extinguish given she removes every trigger, whether his symptoms ease as she gradually steps back from the rituals, and whether the couple can tolerate the distress that surfaces when she stops.",
        credit: 1.0,
      },
      {
        text: "He seems to get a lot of help at home.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The wife's helping is family accommodation that performs the avoidance for him, so the loop keeps running outside session no matter what happens inside it — the arc now needs the accommodation addressed; test whether his out-of-session anxiety has any room to extinguish given she removes every trigger, whether his symptoms ease as she gradually steps back from the rituals, and whether the couple can tolerate the distress that surfaces when she stops.",
    explanation:
      "Top credit reads stalled progress as driven by family accommodation and names a step-back test; 'he's just lucky, nothing to change' is the dodge the symptom-maintaining help defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "After his symmetry-and-counting rituals fade with ERP, a previously placid man becomes aware of a simmering anger at his father he says he 'never knew was there,' and it surfaces in the same moments the counting used to. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He seems to be feeling some anger lately.",
        credit: 0.3,
      },
      {
        text: "With the ritual no longer absorbing it, a feeling the counting had been managing — anger at his father — is now reaching awareness, which marks a shift from symptom relief into working through the conflict beneath it; test whether the anger arises in the very situations that used to trigger counting, whether staying with the feeling rather than re-ritualizing keeps the symptom from returning, and whether naming the conflict deepens relief rather than worsening it.",
        credit: 1.0,
      },
      {
        text: "It's probably connected to the old ritual; we could explore his family.",
        credit: 0.6,
      },
      {
        text: "The anger means the ERP backfired and made him worse, so the symptom work should be undone.",
        credit: 0,
      },
    ],
    correctAnswer:
      "With the ritual no longer absorbing it, a feeling the counting had been managing — anger at his father — is now reaching awareness, which marks a shift from symptom relief into working through the conflict beneath it; test whether the anger arises in the very situations that used to trigger counting, whether staying with the feeling rather than re-ritualizing keeps the symptom from returning, and whether naming the conflict deepens relief rather than worsening it.",
    explanation:
      "Full credit reads the emerging feeling as the working-through phase opening and names a same-trigger test; 'the ERP backfired' is the overreach the symptom relief and surfacing meaning defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "After a year of work, a checking patient now resists most urges on his own, recovers quickly from the occasional slip, and recently handled a new contamination worry by building his own exposure without calling the clinician. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He should stay in weekly therapy indefinitely, because stopping at any point guarantees full relapse.",
        credit: 0,
      },
      {
        text: "He's probably doing well; we could think about wrapping up sometime.",
        credit: 0.6,
      },
      {
        text: "His independent use of the skills on a brand-new trigger marks the case as approaching termination readiness — he has internalized the method rather than leaning on the clinician — so the strong move is to taper while building relapse-prevention; test whether he keeps recovering from slips without help as sessions space out, whether he can plan and run an exposure unprompted, and whether his gains hold over a deliberate gap between sessions.",
        credit: 1.0,
      },
      {
        text: "He seems to be handling things on his own.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "His independent use of the skills on a brand-new trigger marks the case as approaching termination readiness — he has internalized the method rather than leaning on the clinician — so the strong move is to taper while building relapse-prevention; test whether he keeps recovering from slips without help as sessions space out, whether he can plan and run an exposure unprompted, and whether his gains hold over a deliberate gap between sessions.",
    explanation:
      "Top credit reads independent skill use as termination readiness and names a session-spacing test; 'stay weekly forever or relapse' is the overreach his demonstrated independence defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "Three sessions before the planned final exposure to his worst fear, a patient who has struggled all year suddenly announces he's 'completely cured,' feels no anxiety at all, and sees no reason to keep going. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He's probably feeling better; we could check whether he's really ready to stop.",
        credit: 0.6,
      },
      {
        text: "A total 'cure' appearing right before the hardest exposure looks more like a flight into health to avoid that feared step than a genuine, sudden resolution of a year-long struggle; test whether the timing tracks the looming exposure rather than real-world gains, whether he can actually face the avoided trigger now without ritual, and whether the 'cure' survives a concrete situation that would normally set off the obsession.",
        credit: 1.0,
      },
      {
        text: "He seems to feel a lot better suddenly.",
        credit: 0.3,
      },
      {
        text: "He says he's cured, so he is — taking his word for it is the only respectful option.",
        credit: 0,
      },
    ],
    correctAnswer:
      "A total 'cure' appearing right before the hardest exposure looks more like a flight into health to avoid that feared step than a genuine, sudden resolution of a year-long struggle; test whether the timing tracks the looming exposure rather than real-world gains, whether he can actually face the avoided trigger now without ritual, and whether the 'cure' survives a concrete situation that would normally set off the obsession.",
    explanation:
      "Full credit reads the timed 'cure' as avoidance of the feared exposure and names a face-the-trigger test; 'just take his word' is the dodge the suspicious timing defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "Six months after a successful course of treatment ends, a patient calls in a panic: a stressful job loss has set off a flare of his old checking, and he says, 'It's all back, I've failed, the whole treatment was useless.' Which conclusion best follows?",
    mcOptions: [
      {
        text: "He seems upset that some symptoms came back.",
        credit: 0.3,
      },
      {
        text: "A stress-triggered uptick after months of stability reads as a lapse, not a collapse — exactly the situation relapse-prevention prepared him for — so the strong move is to treat it as a signal to re-deploy his skills rather than proof of failure; test whether the flare tracks the acute stressor and eases as he resumes exposures, whether he can still recover from individual urges, and whether his baseline returns once the stressor passes.",
        credit: 1.0,
      },
      {
        text: "It's probably just stress; we could remind him of his tools.",
        credit: 0.6,
      },
      {
        text: "The return of symptoms proves the treatment never worked and he is back to square one with nothing gained.",
        credit: 0,
      },
    ],
    correctAnswer:
      "A stress-triggered uptick after months of stability reads as a lapse, not a collapse — exactly the situation relapse-prevention prepared him for — so the strong move is to treat it as a signal to re-deploy his skills rather than proof of failure; test whether the flare tracks the acute stressor and eases as he resumes exposures, whether he can still recover from individual urges, and whether his baseline returns once the stressor passes.",
    explanation:
      "Top credit reads the flare as a manageable lapse and names a stressor-tracking test; 'back to square one, treatment never worked' is the overreach his months of stability and intact skills defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "At assessment, a devout patient reports intrusive blasphemous images during prayer, which he neutralizes by silently repeating a 'clean' prayer a set number of times until it 'feels right.' He is ashamed and convinced the images reveal his true wickedness. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The case is scrupulosity OCD with a mental ritual: the unwanted images are ego-dystonic obsessions and the repeated 'clean' prayer is a covert compulsion, so formulation and exposure must target the mental ritual, not the faith; test whether the images horrify rather than please him, whether the repeating is done to undo them and 'feel right,' and whether his distress eases as he learns to allow the images without neutralizing.",
        credit: 1.0,
      },
      {
        text: "He's probably struggling with religious thoughts; we could explore his beliefs.",
        credit: 0.6,
      },
      {
        text: "He seems to feel guilty about his thoughts.",
        credit: 0.3,
      },
      {
        text: "The blasphemous images show his faith is the real problem and treatment should aim to talk him out of his religion.",
        credit: 0,
      },
    ],
    correctAnswer:
      "The case is scrupulosity OCD with a mental ritual: the unwanted images are ego-dystonic obsessions and the repeated 'clean' prayer is a covert compulsion, so formulation and exposure must target the mental ritual, not the faith; test whether the images horrify rather than please him, whether the repeating is done to undo them and 'feel right,' and whether his distress eases as he learns to allow the images without neutralizing.",
    explanation:
      "Full credit formulates scrupulosity with a covert ritual and names an ego-dystonia test; 'his religion is the problem' is the overreach that confuses the symptom's content with its cause.",
  },
  {
    itemType: "mc",
    prompt:
      "A clinician must decide whether a man's worry is OCD: he frets daily about a real upcoming layoff at his company, but the worry shifts topic with the news, has no rituals, and eases when he gets accurate information. Which conclusion best follows?",
    mcOptions: [
      {
        text: "All worry is basically the same, so it doesn't matter whether we call it OCD or not.",
        credit: 0,
      },
      {
        text: "It's probably just normal stress; we could keep watching it.",
        credit: 0.6,
      },
      {
        text: "The picture fits realistic, information-responsive worry rather than OCD: it lacks the trigger-specific intrusions, the ritualized neutralizing, and the immunity to reassurance that define the disorder, so formulation should not force an OCD frame; test whether any compulsion is actually present, whether accurate information genuinely settles the worry rather than feeding it, and whether the concern stays proportionate to the real-world odds.",
        credit: 1.0,
      },
      {
        text: "He seems worried about losing his job.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The picture fits realistic, information-responsive worry rather than OCD: it lacks the trigger-specific intrusions, the ritualized neutralizing, and the immunity to reassurance that define the disorder, so formulation should not force an OCD frame; test whether any compulsion is actually present, whether accurate information genuinely settles the worry rather than feeding it, and whether the concern stays proportionate to the real-world odds.",
    explanation:
      "Top credit uses the absence of rituals and reassurance-immunity to rule OCD out at the formulation step; 'all worry is the same' is the dodge the clean diagnostic contrast defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "Mid-treatment, a contamination patient repeatedly asks the clinician, 'Be honest — are you secretly disgusted by me?' and seems to scan her face for reassurance each time before she can settle into the session's exposure. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She's probably insecure; we could reassure her we aren't disgusted.",
        credit: 0.6,
      },
      {
        text: "The repeated 'are you disgusted by me?' question is the contamination theme migrating into the relationship as a reassurance ritual aimed at the clinician, so it both feeds the OCD and shows the dynamic live in the room; test whether the urge to ask spikes right before harder exposures, whether her settling depends on the clinician's answer rather than on tolerating doubt, and whether reflecting the question back instead of answering loosens its grip.",
        credit: 1.0,
      },
      {
        text: "She seems to want the clinician's approval.",
        credit: 0.3,
      },
      {
        text: "Her question proves the clinician really has shown disgust and has damaged the patient irreparably.",
        credit: 0,
      },
    ],
    correctAnswer:
      "The repeated 'are you disgusted by me?' question is the contamination theme migrating into the relationship as a reassurance ritual aimed at the clinician, so it both feeds the OCD and shows the dynamic live in the room; test whether the urge to ask spikes right before harder exposures, whether her settling depends on the clinician's answer rather than on tolerating doubt, and whether reflecting the question back instead of answering loosens its grip.",
    explanation:
      "Full credit reads the in-session reassurance question as the symptom playing out in the relationship and names a spike-before-exposure test; 'the clinician really disgusted her' is the overreach her steady stance defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A patient can explain the OCD cycle flawlessly — obsession, anxiety spike, ritual, brief relief, reinforcement — and has lectured the clinician on it for months, yet still washes for an hour each morning exactly as before. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Because he understands the cycle so thoroughly, he is essentially recovered and just needs to decide to stop.",
        credit: 0,
      },
      {
        text: "He seems to understand his OCD really well.",
        credit: 0.3,
      },
      {
        text: "His perfect account is intellectual insight that hasn't been worked through into the moments that matter — knowing the cycle on paper hasn't reached the bathroom at 7 a.m., so the washing persists; test whether his understanding carries any real anxiety when an exposure is set up, whether he can interrupt a ritual in the actual charged moment rather than only explain it later, and whether repeated practice in real triggers slowly changes the behavior.",
        credit: 1.0,
      },
      {
        text: "His insight probably hasn't changed his behavior yet; we could try some exposures.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "His perfect account is intellectual insight that hasn't been worked through into the moments that matter — knowing the cycle on paper hasn't reached the bathroom at 7 a.m., so the washing persists; test whether his understanding carries any real anxiety when an exposure is set up, whether he can interrupt a ritual in the actual charged moment rather than only explain it later, and whether repeated practice in real triggers slowly changes the behavior.",
    explanation:
      "Top credit distinguishes intellectual insight from worked-through change and names a real-trigger test; 'he's essentially recovered' is the overreach the unchanged morning washing defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "In one consultation, a clinician hears that a patient avoids knives entirely, asks his wife hourly whether he 'seems dangerous,' and treats the very fact that he has violent images as proof he must be a monster. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He seems frightened of his own thoughts.",
        credit: 0.3,
      },
      {
        text: "Read together, the pieces form one harm-OCD picture sitting at the formulation stage: knife-avoidance is the avoidance arm, hourly 'am I dangerous?' questions are a reassurance compulsion, and 'having the thought proves I'm a monster' is the thought-action fusion driving it — so the plan must target the rituals and the belief, not the imagined danger; test whether the images repel rather than tempt him, whether the avoidance and questioning track the harm fear specifically, and whether challenging the 'thought equals deed' belief lowers his distress.",
        credit: 1.0,
      },
      {
        text: "It's probably harm OCD; we could look at his violent thoughts together.",
        credit: 0.6,
      },
      {
        text: "Because he has violent images and avoids knives, he is genuinely dangerous and the priority is to protect others from him.",
        credit: 0,
      },
    ],
    correctAnswer:
      "Read together, the pieces form one harm-OCD picture sitting at the formulation stage: knife-avoidance is the avoidance arm, hourly 'am I dangerous?' questions are a reassurance compulsion, and 'having the thought proves I'm a monster' is the thought-action fusion driving it — so the plan must target the rituals and the belief, not the imagined danger; test whether the images repel rather than tempt him, whether the avoidance and questioning track the harm fear specifically, and whether challenging the 'thought equals deed' belief lowers his distress.",
    explanation:
      "Full credit integrates the pieces into a harm-OCD formulation and names an ego-dystonia test; 'he is genuinely dangerous' is the overreach that mistakes a tormenting OCD fear for real intent.",
  },
];

const hybrid: HomeworkItem[] = [
  {
    itemType: "hybrid",
    prompt:
      "At intake a young woman reports that every time she leaves home she returns three or four times to check the lock, the stove, and the taps, often making her late, and she says she 'just can't trust' that she did it. The clinician is deciding what the case needs first. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The first task is a shared formulation of this checking loop — the doubt-trigger, the feared catastrophe, the repeated checking, and the brief relief — so exposure later targets the real driver rather than a guess; test whether the checking tracks the specific can't-trust-myself doubt, whether more checks actually lower her confidence rather than raise it, and whether the urge centers on intolerable uncertainty rather than genuine forgetfulness.",
        credit: 1.0,
      },
      {
        text: "It's probably checking OCD; we could start exposures soon.",
        credit: 0.6,
      },
      {
        text: "She seems to check her locks a lot.",
        credit: 0.3,
      },
      {
        text: "She just needs better memory habits, so the fix is a checklist and there's nothing to formulate.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'checking loop driven by intolerable doubt' lead from the rival 'she genuinely keeps forgetting and just needs reminders,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: watch whether each extra check leaves her more uncertain rather than reassured and whether the urge centers on a feeling of not-knowing despite clear evidence she locked up — a doubt that grows with checking points to OCD, not forgetfulness. My lead is refuted if a single check or a simple reminder genuinely settles her and the doubt doesn't return.",
      yieldAnchors: [
        "She returns three or four times to check",
        "She says she 'can't trust' she did it",
        "The checking makes her late",
      ],
      riskAnchors: [
        "The checking tracks the can't-trust-myself doubt",
        "More checks lower rather than raise her confidence",
        "The urge centers on uncertainty, not real forgetting",
      ],
      defeatedBy: [
        "A single check genuinely settles her",
        "A simple reminder ends the doubt for good",
      ],
    },
    correctAnswer:
      "The first task is a shared formulation of this checking loop — the doubt-trigger, the feared catastrophe, the repeated checking, and the brief relief — so exposure later targets the real driver rather than a guess; test whether the checking tracks the specific can't-trust-myself doubt, whether more checks actually lower her confidence rather than raise it, and whether the urge centers on intolerable uncertainty rather than genuine forgetfulness.",
    explanation:
      "Full credit places the case at formulation and names a checking-erodes-confidence test that states its refutation; 'just needs a checklist' is the dodge the doubt-driven loop defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A new patient with intrusive harm thoughts is visibly braced in the first session, says 'I've never told anyone this because they'll think I'm a psycho,' and waits to see how the clinician reacts. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He seems anxious about opening up.",
        credit: 0.3,
      },
      {
        text: "This moment is the alliance forming or failing: the case needs a safe, nonjudgmental response that normalizes intrusive thoughts before any exposure, because his willingness to engage hinges on not being seen as the monster he fears; test whether his disclosure deepens once the thoughts are met without alarm, whether his guard drops as the cycle is explained without judgment, and whether he returns and engages after the first session.",
        credit: 1.0,
      },
      {
        text: "He's probably scared of being judged; we could reassure him.",
        credit: 0.6,
      },
      {
        text: "His secrecy proves he's hiding genuine dangerousness, so the priority is to assess him as a threat rather than build rapport.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'alliance-building moment with ego-dystonic thoughts' lead from the rival 'his secrecy signals real danger to be assessed,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: notice whether the thoughts horrify him and whether meeting them calmly without judgment lets him open up further — relief at being understood and revulsion at the thoughts point to OCD and an alliance taking hold. My lead is refuted if he describes the thoughts with intent or pleasure and disclosure makes him more guarded rather than more engaged.",
      yieldAnchors: [
        "He is braced and secretive in session one",
        "He fears being seen as a 'psycho'",
        "He watches the clinician's reaction",
      ],
      riskAnchors: [
        "Disclosure deepens once met without alarm",
        "His guard drops as the cycle is normalized",
        "He returns and engages after session one",
      ],
      defeatedBy: [
        "He describes the thoughts with intent or pleasure",
        "Calm acceptance makes him more guarded, not less",
      ],
    },
    correctAnswer:
      "This moment is the alliance forming or failing: the case needs a safe, nonjudgmental response that normalizes intrusive thoughts before any exposure, because his willingness to engage hinges on not being seen as the monster he fears; test whether his disclosure deepens once the thoughts are met without alarm, whether his guard drops as the cycle is explained without judgment, and whether he returns and engages after the first session.",
    explanation:
      "Full credit reads the disclosure as an alliance-defining moment and names a met-without-alarm test that states its refutation; 'his secrecy proves danger' is the overreach the ego-dystonic horror defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "Partway through treatment, a 'just right' patient is doing exposures well in session but reports she still spends an hour each night re-aligning objects on her desk until they 'feel correct,' which she'd never mentioned because 'it's not really a fear of anything.' Which conclusion best follows?",
    mcOptions: [
      {
        text: "She probably has another ritual; we could add it to the plan.",
        credit: 0.6,
      },
      {
        text: "The hidden 'just right' ritual reveals the formulation was incomplete — this compulsion is driven by an intolerable not-right sensation rather than a feared catastrophe, so exposure must target tolerating the 'wrong' feeling without fixing it; test whether the urge tracks that incompleteness sensation specifically, whether leaving objects 'wrong' triggers mounting discomfort that then eases on its own, and whether her overall gains improve once this previously hidden ritual is included.",
        credit: 1.0,
      },
      {
        text: "She seems to like her desk arranged neatly.",
        credit: 0.3,
      },
      {
        text: "Without a feared catastrophe it can't be OCD, so this nightly habit is just a harmless preference to leave alone.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your '\"just right\" compulsion driven by an incompleteness feeling' lead from the rival 'it's a harmless tidiness preference,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: have her deliberately leave a few objects 'wrong' and watch whether distress mounts and pulls her to fix them, then eases if she resists — a felt not-right pressure that demands correcting points to a compulsion, not a preference. My lead is refuted if leaving things 'wrong' causes no real distress and she can walk away unbothered.",
      yieldAnchors: [
        "An hour nightly re-aligning objects",
        "She fixes them until they 'feel correct'",
        "She says it isn't a fear of anything",
      ],
      riskAnchors: [
        "The urge tracks the incompleteness sensation",
        "Leaving things 'wrong' triggers discomfort that then eases",
        "Including the ritual improves overall gains",
      ],
      defeatedBy: [
        "Leaving objects 'wrong' causes no real distress",
        "She can walk away from it unbothered",
      ],
    },
    correctAnswer:
      "The hidden 'just right' ritual reveals the formulation was incomplete — this compulsion is driven by an intolerable not-right sensation rather than a feared catastrophe, so exposure must target tolerating the 'wrong' feeling without fixing it; test whether the urge tracks that incompleteness sensation specifically, whether leaving objects 'wrong' triggers mounting discomfort that then eases on its own, and whether her overall gains improve once this previously hidden ritual is included.",
    explanation:
      "Full credit recognizes a 'just right' compulsion missed in the formulation and names a leave-it-wrong test that states its refutation; 'no catastrophe means not OCD' is the dodge the incompleteness-driven ritual defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A patient whose washing has dropped sharply with ERP now seems oddly low and irritable, and mentions that without the rituals filling his evenings he feels 'empty, like I don't know what I was so busy avoiding.' Which conclusion best follows?",
    mcOptions: [
      {
        text: "He seems a bit down since the rituals stopped.",
        credit: 0.3,
      },
      {
        text: "As the rituals stop consuming his evenings, a feeling they had been crowding out is surfacing, which signals the case is moving from symptom relief into working through what the washing was keeping him too busy to feel; test whether the low feeling arises in the time the rituals used to fill, whether staying with it rather than resuming washing prevents relapse, and whether naming what he was avoiding brings relief rather than a return of symptoms.",
        credit: 1.0,
      },
      {
        text: "It's probably about the change; we could ask how he's adjusting.",
        credit: 0.6,
      },
      {
        text: "The low mood proves the ERP harmed him and the rituals should be reinstated for his own good.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'a warded-off feeling surfacing as the ritual recedes' lead from the rival 'the ERP itself caused a depression that means it should stop,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: see whether the empty feeling shows up precisely in the freed-up ritual time and softens when he names and stays with it rather than washing — a feeling tied to the vacated ritual space points to working-through, not iatrogenic harm. My lead is refuted if the low mood is global and unrelated to ritual time and only resuming washing relieves it.",
      yieldAnchors: [
        "Washing dropped sharply with ERP",
        "He now feels empty and irritable",
        "He senses he was 'avoiding' something",
      ],
      riskAnchors: [
        "The feeling arises in the freed-up ritual time",
        "Staying with it rather than washing prevents relapse",
        "Naming what he avoided brings relief",
      ],
      defeatedBy: [
        "The low mood is global and unrelated to ritual time",
        "Only resuming washing relieves it",
      ],
    },
    correctAnswer:
      "As the rituals stop consuming his evenings, a feeling they had been crowding out is surfacing, which signals the case is moving from symptom relief into working through what the washing was keeping him too busy to feel; test whether the low feeling arises in the time the rituals used to fill, whether staying with it rather than resuming washing prevents relapse, and whether naming what he was avoiding brings relief rather than a return of symptoms.",
    explanation:
      "Full credit reads the surfacing feeling as the working-through phase and names a freed-up-time test that states its refutation; 'the ERP harmed him, reinstate rituals' is the overreach the symptom relief defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "Near the end of treatment, a recovered checking patient grows quiet and says, 'If I stop coming, what if it all comes back and I have no one?' and asks whether he can keep weekly sessions 'just in case' indefinitely. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The request to keep coming 'just in case' looks like the doubt-and-reassurance dynamic of his OCD reappearing around termination — seeking the clinician as a safety crutch against uncertainty — so the strong move is to treat the wish as material and build confidence in his own skills rather than simply granting endless sessions; test whether the urge to keep coming spikes as the end nears, whether he can in fact handle a slip during a planned gap, and whether his anxiety eases once a relapse-prevention plan replaces the clinician as the safety net.",
        credit: 1.0,
      },
      {
        text: "He's probably nervous about stopping; we could space sessions out gradually.",
        credit: 0.6,
      },
      {
        text: "He seems worried about ending therapy.",
        credit: 0.3,
      },
      {
        text: "He clearly still needs full weekly treatment forever, so the safest course is to keep him in indefinite therapy.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'OCD doubt resurfacing as a safety-crutch wish around termination' lead from the rival 'he objectively still needs full ongoing treatment,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: try a planned gap between sessions and watch whether he can ride out a slip on his own using his skills — coping well through the gap shows the wish is reassurance-seeking, not genuine ongoing need. My lead is refuted if he genuinely deteriorates and cannot manage urges during the gap despite a solid relapse-prevention plan.",
      yieldAnchors: [
        "He has recovered from checking",
        "He fears it will 'all come back' if he stops",
        "He asks for indefinite weekly sessions",
      ],
      riskAnchors: [
        "The urge to keep coming spikes as the end nears",
        "He can handle a slip during a planned gap",
        "Anxiety eases once a relapse plan replaces the clinician",
      ],
      defeatedBy: [
        "He genuinely deteriorates during the gap",
        "He cannot manage urges despite a solid plan",
      ],
    },
    correctAnswer:
      "The request to keep coming 'just in case' looks like the doubt-and-reassurance dynamic of his OCD reappearing around termination — seeking the clinician as a safety crutch against uncertainty — so the strong move is to treat the wish as material and build confidence in his own skills rather than simply granting endless sessions; test whether the urge to keep coming spikes as the end nears, whether he can in fact handle a slip during a planned gap, and whether his anxiety eases once a relapse-prevention plan replaces the clinician as the safety net.",
    explanation:
      "Full credit reads the 'just in case' wish as reassurance-seeking around termination and names a planned-gap test that states its refutation; 'he needs therapy forever' is the overreach his recovery defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A patient mid-treatment says her contamination fears have shrunk, but she now spends the saved time researching diseases online for hours and asking forums whether her symptoms are 'normal.' Which conclusion best follows?",
    mcOptions: [
      {
        text: "She seems to spend a lot of time online.",
        credit: 0.3,
      },
      {
        text: "She's probably found a new worry; we could look at the internet use.",
        credit: 0.6,
      },
      {
        text: "The compulsion has shifted form rather than resolved — online checking and forum reassurance now do the same anxiety-relieving job the washing did, so the case needs the new ritual folded into the same response-prevention plan; test whether the searching tracks the same contamination fear, whether each search briefly relieves but then reignites doubt, and whether blocking the reassurance-seeking lets the underlying anxiety finally extinguish.",
        credit: 1.0,
      },
      {
        text: "Researching health online is just being responsible, so there's nothing here connected to her OCD.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'the compulsion has changed form into online reassurance' lead from the rival 'she is just doing responsible health research,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: watch whether each search gives brief relief that quickly collapses back into doubt and more searching — a relief-then-reignite loop tied to the same fear marks a migrated compulsion, not genuine research. My lead is refuted if a reasonable amount of reading actually settles her, the searching ends, and the doubt doesn't return.",
      yieldAnchors: [
        "Washing has shrunk",
        "She now researches diseases for hours",
        "She seeks reassurance on forums",
      ],
      riskAnchors: [
        "The searching tracks the same contamination fear",
        "Each search relieves briefly then reignites doubt",
        "Blocking it lets the anxiety extinguish",
      ],
      defeatedBy: [
        "A reasonable amount of reading settles her for good",
        "The searching ends and the doubt doesn't return",
      ],
    },
    correctAnswer:
      "The compulsion has shifted form rather than resolved — online checking and forum reassurance now do the same anxiety-relieving job the washing did, so the case needs the new ritual folded into the same response-prevention plan; test whether the searching tracks the same contamination fear, whether each search briefly relieves but then reignites doubt, and whether blocking the reassurance-seeking lets the underlying anxiety finally extinguish.",
    explanation:
      "Full credit reads online checking as a migrated compulsion and names a relief-then-reignite test that states its refutation; 'it's just responsible research' is the dodge the same-fear loop defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A man treated for symmetry OCD has done well, but as termination approaches he reveals that his wife still silently re-evens things he leaves crooked, and neither of them realized this was 'part of it.' Which conclusion best follows?",
    mcOptions: [
      {
        text: "He's lucky his wife is so considerate, so there's nothing to address before ending.",
        credit: 0,
      },
      {
        text: "It's probably worth mentioning to his wife before we finish.",
        credit: 0.6,
      },
      {
        text: "The wife's silent re-evening is leftover family accommodation propping up the symmetry need, so ending now would leave an active maintenance loop in the home and invite relapse — the arc isn't complete until the accommodation is dismantled; test whether his urges resurface when she stops fixing things, whether he can tolerate visibly 'crooked' surfaces himself, and whether removing her help is required for his gains to hold after termination.",
        credit: 1.0,
      },
      {
        text: "He seems to get help from his wife with the symmetry.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'residual accommodation that will undermine termination' lead from the rival 'his wife's tidiness is irrelevant to his recovery,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: have his wife stop re-evening things for a week and watch whether his urges and distress flare — a return of symptoms when her help stops shows the accommodation was still maintaining the loop. My lead is refuted if he stays comfortable with crooked surfaces and shows no urge or distress once she stops.",
      yieldAnchors: [
        "He has done well with symmetry OCD",
        "His wife silently re-evens crooked things",
        "Neither saw it as part of the OCD",
      ],
      riskAnchors: [
        "His urges resurface when she stops fixing things",
        "He can tolerate 'crooked' surfaces himself",
        "Removing her help is needed for gains to hold",
      ],
      defeatedBy: [
        "He stays comfortable with crooked surfaces",
        "No urge or distress appears once she stops",
      ],
    },
    correctAnswer:
      "The wife's silent re-evening is leftover family accommodation propping up the symmetry need, so ending now would leave an active maintenance loop in the home and invite relapse — the arc isn't complete until the accommodation is dismantled; test whether his urges resurface when she stops fixing things, whether he can tolerate visibly 'crooked' surfaces himself, and whether removing her help is required for his gains to hold after termination.",
    explanation:
      "Full credit reads the hidden accommodation as an unfinished part of the arc and names a stop-the-help test that states its refutation; 'he's just lucky' is the dodge the symptom-maintaining loop defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A scrupulosity patient has stopped his out-loud confessing rituals, but the clinician notices he now pauses and silently 'checks his conscience' for several seconds before answering questions in session. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He seems thoughtful before he speaks.",
        credit: 0.3,
      },
      {
        text: "The silent conscience-check is a covert mental ritual that has quietly replaced the out-loud confessing, so the visible symptom dropped while the same neutralizing continues underground — the plan must target the hidden ritual too; test whether the pauses cluster before morally charged statements, whether resisting the check raises then settles his anxiety, and whether his progress was overstated because the ritual merely went covert.",
        credit: 1.0,
      },
      {
        text: "He's probably still doing something mentally; we could ask about the pauses.",
        credit: 0.6,
      },
      {
        text: "Since the visible confessing has stopped, the OCD is essentially resolved and the pauses are nothing.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'covert mental ritual replacing the confessing' lead from the rival 'he is simply a careful, deliberate speaker,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: notice whether the pauses concentrate before morally loaded statements and whether stopping the silent check spikes his anxiety before it settles — a neutralizing routine tied to moral content marks a covert ritual, not ordinary care. My lead is refuted if the pauses are evenly spread across all topics and dropping them causes no anxiety.",
      yieldAnchors: [
        "Out-loud confessing has stopped",
        "He silently 'checks his conscience' before answering",
        "The pause precedes his replies",
      ],
      riskAnchors: [
        "The pauses cluster before morally charged statements",
        "Resisting the check raises then settles anxiety",
        "Progress was overstated as the ritual went covert",
      ],
      defeatedBy: [
        "The pauses are evenly spread across all topics",
        "Dropping the check causes no anxiety",
      ],
    },
    correctAnswer:
      "The silent conscience-check is a covert mental ritual that has quietly replaced the out-loud confessing, so the visible symptom dropped while the same neutralizing continues underground — the plan must target the hidden ritual too; test whether the pauses cluster before morally charged statements, whether resisting the check raises then settles his anxiety, and whether his progress was overstated because the ritual merely went covert.",
    explanation:
      "Full credit reads the pause as a covert ritual that replaced the overt one and names a moral-content test that states its refutation; 'the OCD is essentially resolved' is the overreach the hidden neutralizing defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "Late in treatment, a patient who has handled exposures well suddenly snaps at the clinician, 'You keep pushing me into this stuff — you don't actually care if it's too much for me,' over a routine exposure plan he'd previously agreed to. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He's probably feeling pushed; we could ease up on the exposures.",
        credit: 0.6,
      },
      {
        text: "His outsized 'you don't care' reaction to a plan he agreed to looks like an old template about being coerced by people who claim to help, now surfacing in the alliance as a rupture worth working through — not evidence the exposure was wrong; test whether the same coerced-and-uncared-for feeling appears with other authority figures, whether repairing the rupture by inviting his control restores the collaboration, and whether the reaction eases as he sees the plan really is shared rather than imposed.",
        credit: 1.0,
      },
      {
        text: "He seems annoyed about the exposure plan.",
        credit: 0.3,
      },
      {
        text: "His anger proves the clinician has been abusive and the whole treatment was coercive and harmful.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'old coercion template surfacing as a workable rupture' lead from the rival 'the exposure plan really was being forced on him,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: check whether the 'you don't care, you're forcing me' feeling shows up with other helpers and whether repairing it by handing him control of the pace restores collaboration — a relationship theme that travels and mends points to a transference rupture, not genuine coercion. My lead is refuted if the plan really exceeded what he agreed to and his protest resolves simply by correcting an objectively pushed pace.",
      yieldAnchors: [
        "He has handled exposures well before",
        "He snaps that the clinician doesn't care",
        "It's over a plan he had agreed to",
      ],
      riskAnchors: [
        "The coerced-and-uncared-for feeling appears with other authorities",
        "Repairing the rupture by inviting control restores collaboration",
        "It eases as he sees the plan is shared",
      ],
      defeatedBy: [
        "The plan really exceeded what he agreed to",
        "Correcting an objectively pushed pace fully resolves it",
      ],
    },
    correctAnswer:
      "His outsized 'you don't care' reaction to a plan he agreed to looks like an old template about being coerced by people who claim to help, now surfacing in the alliance as a rupture worth working through — not evidence the exposure was wrong; test whether the same coerced-and-uncared-for feeling appears with other authority figures, whether repairing the rupture by inviting his control restores the collaboration, and whether the reaction eases as he sees the plan really is shared rather than imposed.",
    explanation:
      "Full credit reads the disproportionate snap as a transference rupture to repair and names a travels-and-mends test that states its refutation; 'the clinician was abusive' is the overreach the previously shared, agreed plan defeats.",
  },
];

const written: HomeworkItem[] = [
  {
    itemType: "written",
    prompt:
      "A 28-year-old arrives for an initial consultation: she describes intrusive images of her apartment burning down, checks the stove and outlets up to twenty times before leaving, is now late to work daily, has started avoiding cooking entirely, and her roommate has begun doing the 'final check' so she can leave. In one paragraph, propose the strongest formulation of where this case sits and what the first phase of treatment should target, and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest formulation is that this is a checking-type OCD loop — intrusive fire images spike anxiety, repeated stove-and-outlet checking and cooking-avoidance bring brief relief, and that relief reinforces the cycle — with the roommate's 'final check' now functioning as family accommodation that keeps the loop alive, so the case sits at the assessment-and-formulation phase and the first targets are a shared map of the loop plus a plan to wind down both the checking and the accommodation. This is a strong claim because it predicts checkable consequences: the checking should track the specific fire-catastrophe fear rather than general forgetfulness; each extra check should leave her less certain rather than reassured; and her anxiety should have no chance to extinguish as long as the roommate removes the trigger for her. I would test it by mapping whether the rituals cluster around the fire fear, by watching whether more checking erodes rather than builds her confidence, and by seeing whether her distress and avoidance shift once the roommate gradually stops doing the final check — and if the checking is actually settled by a single look, the doubt doesn't return, and the roommate's help is irrelevant to her anxiety, the OCD-loop formulation is wrong.",
      yieldAnchors: [
        "Intrusive fire images and up to twenty checks",
        "She avoids cooking and is late daily",
        "The roommate does the 'final check' for her",
      ],
      riskAnchors: [
        "The checking tracks the specific fire fear",
        "Each extra check lowers rather than raises certainty",
        "Anxiety can't extinguish while the roommate removes the trigger",
      ],
      defeatedBy: [
        "A single check genuinely settles her for good",
        "The roommate's help is irrelevant to her anxiety",
      ],
    },
    correctAnswer:
      "The strongest formulation is that this is a checking-type OCD loop — intrusive fire images spike anxiety, repeated stove-and-outlet checking and cooking-avoidance bring brief relief, and that relief reinforces the cycle — with the roommate's 'final check' now functioning as family accommodation that keeps the loop alive, so the case sits at the assessment-and-formulation phase and the first targets are a shared map of the loop plus a plan to wind down both the checking and the accommodation. This is a strong claim because it predicts checkable consequences: the checking should track the specific fire-catastrophe fear rather than general forgetfulness; each extra check should leave her less certain rather than reassured; and her anxiety should have no chance to extinguish as long as the roommate removes the trigger for her. I would test it by mapping whether the rituals cluster around the fire fear, by watching whether more checking erodes rather than builds her confidence, and by seeing whether her distress and avoidance shift once the roommate gradually stops doing the final check — and if the checking is actually settled by a single look, the doubt doesn't return, and the roommate's help is irrelevant to her anxiety, the OCD-loop formulation is wrong.",
    explanation:
      "The dodge — 'she's just forgetful and overcautious, nothing to formulate' — ignores the loop and the accommodation; top credit commits to a checking-OCD formulation with an accommodation component and names tests that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A man has done six months of ERP for contamination fears with real success: his washing is down from three hours to fifteen minutes a day and he can use public restrooms. But he now reports feeling strangely adrift and has begun picking fights with his wife, saying he 'doesn't know who he is without the routines.' In one paragraph, propose the strongest integrated conclusion about where this case now sits and what it needs next, and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that the case has moved past the symptom-relief phase into working through: with the rituals no longer organizing his days and binding his anxiety, feelings and questions the washing had kept at bay — about identity, control, and his marriage — are surfacing, which is why he feels adrift and is fighting with his wife rather than relapsing. This is a strong claim because it predicts checkable consequences: the unsettledness should appear in the time and mental space the rituals used to fill; staying with the new feelings rather than resuming washing should preserve his gains; and naming what the routines were doing for him should bring relief rather than a return of symptoms. I would test it by tracing whether the adrift feeling and conflicts cluster in the vacated ritual space, by checking whether his washing stays low as he engages the feelings instead of avoiding them, and by watching whether exploring what 'who I am without the routines' means deepens his stability — and if instead the distress is global and unrelated to the freed-up time and only resuming rituals relieves it, the working-through reading is wrong.",
      yieldAnchors: [
        "Washing dropped from three hours to fifteen minutes",
        "He feels adrift and fights with his wife",
        "He says he doesn't know who he is without the routines",
      ],
      riskAnchors: [
        "The unsettledness appears in the vacated ritual space",
        "Staying with the feelings preserves his gains",
        "Naming what the routines did brings relief",
      ],
      defeatedBy: [
        "The distress is global and unrelated to freed-up time",
        "Only resuming rituals relieves it",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that the case has moved past the symptom-relief phase into working through: with the rituals no longer organizing his days and binding his anxiety, feelings and questions the washing had kept at bay — about identity, control, and his marriage — are surfacing, which is why he feels adrift and is fighting with his wife rather than relapsing. This is a strong claim because it predicts checkable consequences: the unsettledness should appear in the time and mental space the rituals used to fill; staying with the new feelings rather than resuming washing should preserve his gains; and naming what the routines were doing for him should bring relief rather than a return of symptoms. I would test it by tracing whether the adrift feeling and conflicts cluster in the vacated ritual space, by checking whether his washing stays low as he engages the feelings instead of avoiding them, and by watching whether exploring what 'who I am without the routines' means deepens his stability — and if instead the distress is global and unrelated to the freed-up time and only resuming rituals relieves it, the working-through reading is wrong.",
    explanation:
      "The dodge — calling the unrest proof the ERP backfired and should be reversed — ignores the genuine relief; top credit commits to a working-through phase and names a vacated-space test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "Two weeks before a planned termination, a patient who spent a year battling harm obsessions declares he is 'one hundred percent better,' wants to cancel the remaining sessions, and in particular wants to skip the final agreed exposure of holding a kitchen knife near his partner. In one paragraph, propose the strongest conclusion about what is happening and what the arc still needs, and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that the sudden, total 'cure' arriving exactly as the most feared exposure looms is more likely a flight into health — a way to declare victory and escape the terrifying knife exposure — than a genuine resolution, which means the arc still needs that last exposure and a careful read of whether his confidence is real or defensive. This is a strong claim because it predicts checkable consequences: the timing should track the dreaded exposure rather than any new real-world gain; he should still flinch from or avoid the specific feared situation if asked to face it now; and the 'cure' should wobble when the avoided trigger is brought concretely into the room. I would test it by checking whether his improvement shows up in real situations or only in his declarations, by inviting him to attempt the very exposure he wants to skip and watching whether he can do it without ritual or escape, and by seeing whether his certainty holds when the feared scenario is made vivid — and if he can actually face the knife exposure calmly and his gains are evident in daily life, the flight-into-health reading is wrong and he may genuinely be ready to finish.",
      yieldAnchors: [
        "He declares himself '100% better'",
        "It arrives two weeks before termination",
        "He wants to skip the final feared exposure",
      ],
      riskAnchors: [
        "The timing tracks the dreaded exposure",
        "He still avoids the specific feared situation",
        "The 'cure' wobbles when the trigger is made vivid",
      ],
      defeatedBy: [
        "He faces the knife exposure calmly without ritual",
        "His gains are evident across daily life",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that the sudden, total 'cure' arriving exactly as the most feared exposure looms is more likely a flight into health — a way to declare victory and escape the terrifying knife exposure — than a genuine resolution, which means the arc still needs that last exposure and a careful read of whether his confidence is real or defensive. This is a strong claim because it predicts checkable consequences: the timing should track the dreaded exposure rather than any new real-world gain; he should still flinch from or avoid the specific feared situation if asked to face it now; and the 'cure' should wobble when the avoided trigger is brought concretely into the room. I would test it by checking whether his improvement shows up in real situations or only in his declarations, by inviting him to attempt the very exposure he wants to skip and watching whether he can do it without ritual or escape, and by seeing whether his certainty holds when the feared scenario is made vivid — and if he can actually face the knife exposure calmly and his gains are evident in daily life, the flight-into-health reading is wrong and he may genuinely be ready to finish.",
    explanation:
      "The dodge — taking the '100% better' at face value and ending early — ignores the suspicious timing tied to the dreaded step; top credit commits to a flight into health and names a face-the-exposure test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "Eight months after finishing treatment for symmetry-and-ordering OCD, a woman returns shaken: a difficult pregnancy and move have brought back some ordering urges, and she says, 'I'm right back where I started, the therapy clearly didn't take.' Her records show she was symptom-free and functioning well for those eight months. In one paragraph, propose the strongest conclusion about what is happening and what it calls for, and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that this is a stress-triggered lapse, not a relapse to baseline: eight months of symptom-free functioning show the treatment did take, and a major stressor like a hard pregnancy and a move has temporarily reactivated familiar urges, so what it calls for is re-deploying her existing skills and relapse-prevention plan rather than starting over or concluding the therapy failed. This is a strong claim because it predicts checkable consequences: the uptick should track the acute stressors and stay far short of her original severity; she should still be able to resist or recover from individual urges using what she learned; and her symptoms should recede toward her recovered baseline as the stressors resolve and she resumes exposures. I would test it by comparing the current intensity against both her pre-treatment level and her recovered baseline, by checking whether she can still apply response-prevention to a single urge, and by watching whether the flare eases as the pregnancy and move settle and she re-engages her plan — and if instead she has truly returned to full pre-treatment severity and her skills no longer help at all, the simple-lapse reading would need revising toward a fuller relapse.",
      yieldAnchors: [
        "Ordering urges returned under stress",
        "She says the therapy 'didn't take'",
        "She was symptom-free for eight months",
      ],
      riskAnchors: [
        "The uptick tracks the acute stressors",
        "She can still recover from individual urges",
        "Symptoms recede toward baseline as stressors resolve",
      ],
      defeatedBy: [
        "She has returned to full pre-treatment severity",
        "Her skills no longer help at all",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that this is a stress-triggered lapse, not a relapse to baseline: eight months of symptom-free functioning show the treatment did take, and a major stressor like a hard pregnancy and a move has temporarily reactivated familiar urges, so what it calls for is re-deploying her existing skills and relapse-prevention plan rather than starting over or concluding the therapy failed. This is a strong claim because it predicts checkable consequences: the uptick should track the acute stressors and stay far short of her original severity; she should still be able to resist or recover from individual urges using what she learned; and her symptoms should recede toward her recovered baseline as the stressors resolve and she resumes exposures. I would test it by comparing the current intensity against both her pre-treatment level and her recovered baseline, by checking whether she can still apply response-prevention to a single urge, and by watching whether the flare eases as the pregnancy and move settle and she re-engages her plan — and if instead she has truly returned to full pre-treatment severity and her skills no longer help at all, the simple-lapse reading would need revising toward a fuller relapse.",
    explanation:
      "The dodge — agreeing the therapy 'didn't take' and starting from scratch — ignores eight months of recovery; top credit commits to a stress-triggered lapse and names a severity-comparison test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A clinician is forming an overall plan for a man with severe contamination OCD who is also curious about 'the deeper meaning' of his fear of being 'dirty,' which he links to a shaming childhood. He asks whether they should do exposure work or 'figure out where it comes from' first. In one paragraph, propose the strongest conclusion about how to sequence and combine the work across his treatment arc, and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that the arc should lead with the well-supported, first-line approach for severe OCD — ERP to break the contamination loop — while treating his interest in the 'deeper meaning' not as an alternative but as a complement that becomes most useful for working through once the symptoms loosen, so insight and exposure are integrated rather than pitted against each other. This is a strong claim because it predicts checkable consequences: symptom severity should drop fastest when ERP is actually doing the work, not when they only discuss origins; the childhood-shame meaning should become more accessible and more useful as the rituals stop crowding it out; and addressing that meaning during working-through should reduce the risk of the symptom simply migrating to a new form. I would test it by tracking whether his contamination symptoms fall as exposures proceed, by watching whether the shame theme can be engaged more productively after the rituals ease, and by checking whether weaving in that meaning lowers relapse and symptom-substitution compared with exposure alone — and if pure origin-talk with no exposure actually resolved a severe contamination loop, this evidence-led sequencing would be wrong.",
      yieldAnchors: [
        "Severe contamination OCD",
        "He links 'dirty' to a shaming childhood",
        "He asks whether to do exposure or origins first",
      ],
      riskAnchors: [
        "Severity drops fastest when ERP does the work",
        "The shame meaning grows accessible as rituals ease",
        "Addressing meaning reduces symptom migration",
      ],
      defeatedBy: [
        "Origin-talk alone resolves the severe loop",
        "Exposure produces no symptom reduction",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that the arc should lead with the well-supported, first-line approach for severe OCD — ERP to break the contamination loop — while treating his interest in the 'deeper meaning' not as an alternative but as a complement that becomes most useful for working through once the symptoms loosen, so insight and exposure are integrated rather than pitted against each other. This is a strong claim because it predicts checkable consequences: symptom severity should drop fastest when ERP is actually doing the work, not when they only discuss origins; the childhood-shame meaning should become more accessible and more useful as the rituals stop crowding it out; and addressing that meaning during working-through should reduce the risk of the symptom simply migrating to a new form. I would test it by tracking whether his contamination symptoms fall as exposures proceed, by watching whether the shame theme can be engaged more productively after the rituals ease, and by checking whether weaving in that meaning lowers relapse and symptom-substitution compared with exposure alone — and if pure origin-talk with no exposure actually resolved a severe contamination loop, this evidence-led sequencing would be wrong.",
    explanation:
      "The dodge — choosing meaning-only exploration over the evidence-based exposure for severe OCD — is anti-evidence purism; top credit commits to an ERP-led, meaning-integrated arc and names a symptoms-fall-with-exposure test that could refute it.",
  },
];

export const section: SectionContent = {
  slug: "treatment-arc-start-to-finish",
  title: "A Treatment Arc, Start to Finish",
  weekNumber: 1,
  blurb:
    "A capstone that follows a single course of OCD treatment from assessment and formulation through building the alliance, combining ERP with meaning-focused work, working through, and termination — into one integrated way of reading where a case sits and what it needs next.",
  lectureTitle:
    "1.8 A Treatment Arc, Start to Finish",
  body: `# A Treatment Arc, Start to Finish

By now you have a toolkit: OCD runs as a cycle of obsession, anxiety, ritual, and brief relief that quietly reinforces itself; the content of a symptom can carry meaning; rituals serve a function as defenses; conflict and ambivalence often sit beneath them; the therapy relationship is both a tool and a place the symptom shows itself; exposure and response prevention is the well-supported core; and lasting change pairs symptom relief with working through. This final section puts the whole kit to work across one course of treatment, start to finish. A real case doesn't arrive labeled by phase. It offers signals — a hidden ritual, a stalled plateau, a sudden "cure" — and the craft is reading where in the arc a case sits and committing to the strongest next move the evidence warrants, while naming the cheapest observation that could prove you wrong.

## Assessment and formulation

The arc begins before any exposure, with understanding. A good formulation maps the specific triggers, the feared catastrophe, the rituals (overt and covert), the avoidance, and what the whole loop accomplishes. Skipping this to "just start exposures" risks aiming at the wrong link — chasing the washing while missing the reassurance-seeking that really drives it, or forcing an OCD frame onto worry that is actually realistic and information-responsive. The discipline is the same one running through the course: treat the observable symptom as a clue to a loop, then ask what else should be true if your map is right. A strong formulation binds the trigger, the ritual, and the relief into one picture and carries a test: the ritual should track the specific fear, and more checking should erode confidence rather than build it.

## Building the alliance

Nothing in OCD treatment works without a working relationship, and exposure work especially can't begin on a foundation of mistrust. Many patients arrive ashamed — of intrusive harm or taboo thoughts they fear make them monsters, or burned by past treatment that pushed too hard too fast. The early phase is about safety and collaboration: normalizing intrusive thoughts, explaining the cycle without judgment, and designing a graded plan the patient helps build and can trust. The check is concrete: engagement should rise when the patient is given a real say in the pace, and guard should drop when shame is met with calm rather than alarm. Force exposure before the alliance holds and the patient quits; build it first and the hardest work becomes possible.

## ERP combined with meaning-focused work

The core engine of change for OCD is exposure and response prevention: facing the trigger while not performing the ritual, so the anxiety can finally extinguish and the loop weakens. A graded hierarchy makes this tolerable; leaping to the worst step invites escape or covert ritualizing. But exposure alone sometimes leaves the conflict the symptom carried untouched, and the anxiety migrates — checking fades and a harm obsession appears, or washing shrinks and online reassurance-seeking swells. The integrated stance is not exposure versus insight but exposure leading, with meaning-focused understanding as a complement that matters most for what comes next. The test is whether symptoms actually fall as exposures proceed, and whether attending to the underlying fear keeps the symptom from simply changing costume.

## Working through

As rituals stop consuming time and binding anxiety, something often surfaces: a feeling, a conflict, an emptiness the symptom had been crowding out. This marks the shift from symptom relief into working through — the slow, repeated process by which understanding reaches the moments that matter and becomes new behavior rather than a recited explanation. A patient who can flawlessly describe his cycle yet still washes for an hour each morning has intellectual insight that hasn't been worked through; the avoidance persists precisely because the knowing hasn't reached the bathroom at 7 a.m. The check is whether insight carries real feeling, whether it can be applied in the charged moment rather than after, and whether repeated practice in fresh triggers slowly changes what the person does.

## Termination and relapse prevention

A course of treatment aims at its own ending. Readiness shows when a patient uses the skills independently — recovering from slips without help, building an exposure on his own for a brand-new trigger — at which point the strong move is to taper while consolidating a relapse-prevention plan. Watch for the OCD reappearing around the ending itself: a wish to keep coming "just in case" can be the doubt-and-reassurance dynamic seeking the clinician as a safety crutch. And after treatment, expect lapses, not perfection: a stress-triggered flare months into stability is a signal to re-deploy skills, not proof the work failed. The check is whether the flare tracks the stressor and stays far short of baseline, and whether the patient can still recover from individual urges on his own.

## In the real world

Picture one case from first call to last. A man arrives washing three hours a day, sure his intrusive harm thoughts make him dangerous; you formulate the loop and meet the shame with calm, build a graded plan he trusts, run exposures that drop the washing while watching for the fear to migrate, and as the rituals recede a long-avoided feeling about his father surfaces to be worked through — until, recovered, he handles a new trigger himself and you taper toward an ending he can own. The dodge at every step is the shrug: "OCD is just mysterious, you can't really say where this case is or what it needs." The integrated move reads each phase for what it is and commits to the strongest next step with a test attached — does the ritual track the fear, does engagement rise with collaboration, do symptoms fall with exposure, does the flare track the stressor. That is the whole course in a single arc: not a shrug at how stubborn OCD is, but a disciplined, testable reading of where a case stands and what will move it forward.`,
  homework: {
    mcq,
    hybrid,
    written,
  },
};
