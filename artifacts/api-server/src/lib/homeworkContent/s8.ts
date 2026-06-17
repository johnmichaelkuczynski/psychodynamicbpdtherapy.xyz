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
      "At intake, a new patient describes relationships that swing from adoration to hatred within days, panic and frantic calling whenever a partner is slow to reply, and cutting herself 'to take the edge off.' The clinician feels tempted to start teaching coping skills in the first session. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Before any skills work, the strongest first move is a shared formulation — mapping the exact interpersonal triggers, the unbearable affect they ignite (panic at being left), the impulsive acts, and what they accomplish — because aiming the work at the wrong link wastes it; test whether the cutting tracks moments of perceived rejection specifically, whether each impulsive act brings brief relief that then reinforces the pattern, and whether she can name the feeling the act is meant to discharge.",
        credit: 1.0,
      },
      {
        text: "It's probably BPD; we could start some coping skills soon.",
        credit: 0.6,
      },
      {
        text: "She seems to have a lot of relationship drama.",
        credit: 0.3,
      },
      {
        text: "Since the diagnosis is obvious, a formulation is a waste of time and skills should begin the first hour no matter what the details turn out to be.",
        credit: 0,
      },
    ],
    correctAnswer:
      "Before any skills work, the strongest first move is a shared formulation — mapping the exact interpersonal triggers, the unbearable affect they ignite (panic at being left), the impulsive acts, and what they accomplish — because aiming the work at the wrong link wastes it; test whether the cutting tracks moments of perceived rejection specifically, whether each impulsive act brings brief relief that then reinforces the pattern, and whether she can name the feeling the act is meant to discharge.",
    explanation:
      "Top credit reads the case as sitting at the assessment-and-formulation step and names checkable mapping tasks; 'skip formulation, the diagnosis is obvious' is the overreach the specific abandonment-affect link and hidden behaviors defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "A patient with a long history of unstable relationships says in the first session, 'Every therapist I've had eventually gives up on me and dumps me — are you going to do that too?' and watches the clinician carefully. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He seems nervous about starting therapy.",
        credit: 0.3,
      },
      {
        text: "His past dropouts prove he is untreatable and that no working relationship can be built with BPD.",
        credit: 0,
      },
      {
        text: "His question marks the case as sitting at the alliance-and-frame stage — deeper work will fail without a clear, reliable frame and a relationship he helps shape and can trust; test whether his engagement rises when the frame and his role are made explicit, whether naming the feared abandonment lowers his guard, and whether he stays once limits are set warmly rather than punitively.",
        credit: 1.0,
      },
      {
        text: "He's probably worried we'll abandon him; we could reassure him it'll be fine.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "His question marks the case as sitting at the alliance-and-frame stage — deeper work will fail without a clear, reliable frame and a relationship he helps shape and can trust; test whether his engagement rises when the frame and his role are made explicit, whether naming the feared abandonment lowers his guard, and whether he stays once limits are set warmly rather than punitively.",
    explanation:
      "Full credit reads the case as needing alliance-and-frame work before deeper work and names tests of engagement; 'he is untreatable' is the overreach his very willingness to ask and stay defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "Eager to get to the root of it, a patient in frequent crisis insists on diving straight into her most painful childhood trauma in the first weeks, before any work on safety or managing overwhelming feelings. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She probably wants to dig in fast; we could suggest slowing down.",
        credit: 0.6,
      },
      {
        text: "Her wish to plunge into the deepest trauma before any stabilization marks the early-safety phase: deep exploratory work is intolerable and destabilizing until affect regulation and a safe frame are in place, so the strong move is to build stabilization with her first; test whether she can stay regulated in a lower-intensity session without a crisis, whether a too-deep start triggers self-harm or flight, and whether steady graded work holds her better than one overwhelming plunge.",
        credit: 1.0,
      },
      {
        text: "She seems very eager to get started.",
        credit: 0.3,
      },
      {
        text: "Since she's motivated, go straight into the deepest trauma — stabilization is coddling and motivated patients don't need it.",
        credit: 0,
      },
    ],
    correctAnswer:
      "Her wish to plunge into the deepest trauma before any stabilization marks the early-safety phase: deep exploratory work is intolerable and destabilizing until affect regulation and a safe frame are in place, so the strong move is to build stabilization with her first; test whether she can stay regulated in a lower-intensity session without a crisis, whether a too-deep start triggers self-harm or flight, and whether steady graded work holds her better than one overwhelming plunge.",
    explanation:
      "Top credit reads the case as needing safety and stabilization first and names tests of tolerable work; 'skip stabilization, motivation is enough' is the overreach the risk of crisis and flight defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "Months into treatment, a woman's self-harm has nearly stopped — but a brand-new pattern of binge drinking and reckless spending has appeared and is now consuming her, flaring in the same moments the cutting used to. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The new impulsive behavior arriving just as the cutting stopped suggests the work curbed one outlet without addressing the affect it was regulating, so the same unbearable feeling has found a new discharge; test whether the new behavior flares in the same rejection-and-abandonment moments the cutting did, whether it delivers the same brief relief, and whether pairing skills with attention to the underlying affect stops the behavior from simply migrating again.",
        credit: 1.0,
      },
      {
        text: "It's probably related to the old self-harm; we could keep doing skills.",
        credit: 0.6,
      },
      {
        text: "She seems to have a new problem behavior now.",
        credit: 0.3,
      },
      {
        text: "The new drinking proves she was just an addict all along and the self-harm was never the real issue.",
        credit: 0,
      },
    ],
    correctAnswer:
      "The new impulsive behavior arriving just as the cutting stopped suggests the work curbed one outlet without addressing the affect it was regulating, so the same unbearable feeling has found a new discharge; test whether the new behavior flares in the same rejection-and-abandonment moments the cutting did, whether it delivers the same brief relief, and whether pairing skills with attention to the underlying affect stops the behavior from simply migrating again.",
    explanation:
      "Top credit reads behavior substitution as a sign the affect needs addressing alongside skills and names a same-trigger test; 'she's just an addict' is the overreach that ignores the shared affect-regulating function.",
  },
  {
    itemType: "mc",
    prompt:
      "A patient who had been improving keeps texting the clinician between sessions — 'Are you angry at me? Are you still going to be my therapist?' — and her progress has stalled exactly as the texts increased. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She seems to text a lot between sessions.",
        credit: 0.3,
      },
      {
        text: "The reassurance texts have become a between-session safety behavior that discharges abandonment panic — relief from the clinician's reply does the same affect-regulating work the old self-harm did, so the plateau makes sense; test whether her gains resume when between-session reassurance is gently held to the frame, whether the urge to text spikes after sessions that touched on closeness or ending, and whether she can tolerate the uncertainty when the clinician reflects the feeling back instead of simply reassuring.",
        credit: 1.0,
      },
      {
        text: "She's probably seeking reassurance; we could talk about the texting.",
        credit: 0.6,
      },
      {
        text: "Answering every text instantly and warmly is the only caring thing to do, and holding any limit would just be cold and abandon her.",
        credit: 0,
      },
    ],
    correctAnswer:
      "The reassurance texts have become a between-session safety behavior that discharges abandonment panic — relief from the clinician's reply does the same affect-regulating work the old self-harm did, so the plateau makes sense; test whether her gains resume when between-session reassurance is gently held to the frame, whether the urge to text spikes after sessions that touched on closeness or ending, and whether she can tolerate the uncertainty when the clinician reflects the feeling back instead of simply reassuring.",
    explanation:
      "Full credit reads the reassurance texts as a between-session safety behavior stalling progress and names a hold-the-frame test; 'always answer instantly or you're cold' is the dodge that mistakes accommodation for care.",
  },
  {
    itemType: "mc",
    prompt:
      "A patient's crises barely improve despite good in-session work; it emerges that her partner organizes their whole life around never upsetting her — he never disagrees, cancels his own plans, and smooths over every conflict so she 'doesn't spiral.' Which conclusion best follows?",
    mcOptions: [
      {
        text: "She's lucky to have such a devoted partner, so there's nothing in the home setup worth changing.",
        credit: 0,
      },
      {
        text: "It's probably about the home situation; we could mention it to her partner.",
        credit: 0.6,
      },
      {
        text: "The partner's walking-on-eggshells is accommodation that absorbs every trigger for her, so the dysregulation loop never gets faced outside session no matter what happens inside it — the arc now needs the accommodation addressed; test whether her distress tolerance has any room to grow while he removes all friction, whether her flares ease as he gradually holds ordinary limits, and whether the couple can tolerate the affect that surfaces when he stops.",
        credit: 1.0,
      },
      {
        text: "She seems to get a lot of support at home.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The partner's walking-on-eggshells is accommodation that absorbs every trigger for her, so the dysregulation loop never gets faced outside session no matter what happens inside it — the arc now needs the accommodation addressed; test whether her distress tolerance has any room to grow while he removes all friction, whether her flares ease as he gradually holds ordinary limits, and whether the couple can tolerate the affect that surfaces when he stops.",
    explanation:
      "Top credit reads stalled progress as driven by accommodation and names a hold-limits test; 'she's just lucky, nothing to change' is the dodge the loop-maintaining help defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "After her self-harm fades and her affect steadies, a previously numb woman becomes aware of a deep grief and anger toward her mother she says she 'never knew was there,' and it surfaces in the same moments the cutting used to. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She seems to be feeling some anger lately.",
        credit: 0.3,
      },
      {
        text: "With the self-harm no longer discharging it, a feeling the cutting had been managing — grief and anger at her mother — is now reaching awareness, which marks a shift from crisis stabilization into working through the conflict beneath it; test whether the feeling arises in the very situations that used to trigger self-harm, whether staying with it rather than acting on it keeps the symptom from returning, and whether naming the conflict deepens relief rather than worsening it.",
        credit: 1.0,
      },
      {
        text: "It's probably connected to the old self-harm; we could explore her family.",
        credit: 0.6,
      },
      {
        text: "The anger means the treatment backfired and made her worse, so the stabilization work should be undone.",
        credit: 0,
      },
    ],
    correctAnswer:
      "With the self-harm no longer discharging it, a feeling the cutting had been managing — grief and anger at her mother — is now reaching awareness, which marks a shift from crisis stabilization into working through the conflict beneath it; test whether the feeling arises in the very situations that used to trigger self-harm, whether staying with it rather than acting on it keeps the symptom from returning, and whether naming the conflict deepens relief rather than worsening it.",
    explanation:
      "Full credit reads the emerging feeling as the working-through phase opening and names a same-trigger test; 'the treatment backfired' is the overreach the genuine symptom relief and surfacing meaning defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "After a year of work, a patient now rides out abandonment scares on her own, recovers quickly from a friendship rupture, and recently handled a breakup without self-harm by stopping to read the other person's mind and her own. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She should stay in twice-weekly therapy indefinitely, because stopping at any point guarantees full collapse.",
        credit: 0,
      },
      {
        text: "She's probably doing well; we could think about wrapping up sometime.",
        credit: 0.6,
      },
      {
        text: "Her independent handling of a real rupture without self-harm marks the case as approaching termination readiness — she has internalized mentalizing and affect regulation rather than leaning on the clinician — so the strong move is to taper while building relapse-prevention; test whether she keeps recovering from interpersonal slips without help as sessions space out, whether she can re-regulate unprompted, and whether her gains hold across a deliberate gap between sessions.",
        credit: 1.0,
      },
      {
        text: "She seems to be handling things on her own.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "Her independent handling of a real rupture without self-harm marks the case as approaching termination readiness — she has internalized mentalizing and affect regulation rather than leaning on the clinician — so the strong move is to taper while building relapse-prevention; test whether she keeps recovering from interpersonal slips without help as sessions space out, whether she can re-regulate unprompted, and whether her gains hold across a deliberate gap between sessions.",
    explanation:
      "Top credit reads independent rupture-handling as termination readiness and names a session-spacing test; 'stay in therapy forever or collapse' is the overreach her demonstrated independence defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A few sessions before the planned work on her feelings about the relationship ending, a patient who has struggled all year suddenly announces she's 'completely better,' feels nothing painful at all, and sees no reason to keep going. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She's probably feeling better; we could check whether she's really ready to stop.",
        credit: 0.6,
      },
      {
        text: "A total 'cure' appearing right as the feared work on closeness and ending nears looks more like a flight into health — a way to escape the dread of separation — than a genuine, sudden resolution of a year-long struggle; test whether the timing tracks the looming ending rather than real-world gains, whether she can actually stay with the avoided feeling now without numbing, and whether the 'cure' survives a concrete situation that would normally dysregulate her.",
        credit: 1.0,
      },
      {
        text: "She seems to feel a lot better suddenly.",
        credit: 0.3,
      },
      {
        text: "She says she's cured, so she is — taking her word for it is the only respectful option.",
        credit: 0,
      },
    ],
    correctAnswer:
      "A total 'cure' appearing right as the feared work on closeness and ending nears looks more like a flight into health — a way to escape the dread of separation — than a genuine, sudden resolution of a year-long struggle; test whether the timing tracks the looming ending rather than real-world gains, whether she can actually stay with the avoided feeling now without numbing, and whether the 'cure' survives a concrete situation that would normally dysregulate her.",
    explanation:
      "Full credit reads the timed 'cure' as a flight into health and names a stay-with-the-feeling test; 'just take her word' is the dodge the suspicious timing defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "Six months after a successful course of treatment ends, a patient calls in a panic: a sudden breakup has set off a flare of his old emptiness and urges to self-harm, and he says, 'It's all back, I've failed, the whole treatment was useless.' Which conclusion best follows?",
    mcOptions: [
      {
        text: "He seems upset that some symptoms came back.",
        credit: 0.3,
      },
      {
        text: "A stress-triggered uptick after months of stability reads as a lapse, not a collapse — exactly the situation relapse-prevention prepared him for — so the strong move is to treat it as a signal to re-deploy his skills rather than proof of failure; test whether the flare tracks the acute loss and eases as he re-engages his tools, whether he can still re-regulate from a single urge, and whether his baseline returns once the stressor passes.",
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
      "A stress-triggered uptick after months of stability reads as a lapse, not a collapse — exactly the situation relapse-prevention prepared him for — so the strong move is to treat it as a signal to re-deploy his skills rather than proof of failure; test whether the flare tracks the acute loss and eases as he re-engages his tools, whether he can still re-regulate from a single urge, and whether his baseline returns once the stressor passes.",
    explanation:
      "Top credit reads the flare as a manageable lapse and names a stressor-tracking test; 'back to square one, treatment never worked' is the overreach his months of stability and intact skills defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "At assessment, a patient reports that she feels 'completely empty, like nobody's home,' takes on the personality and opinions of whoever she's with, and panics when she's alone with no one to mirror. She is ashamed and frightened by how little of 'her' there seems to be. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The picture is identity diffusion: the chronic emptiness and the chameleon-like reshaping around whoever she's with are one pattern — borrowing a self to fill an inner void — so the plan must target building a stable, integrated sense of self, not just the surface mood; test whether her self-descriptions reorganize around the present company, whether the emptiness spikes when she's alone with no one to mirror, and whether the shifts are driven by fear of the void rather than genuine growth.",
        credit: 1.0,
      },
      {
        text: "She's probably still figuring herself out; we could explore her interests.",
        credit: 0.6,
      },
      {
        text: "She seems to change a lot around different people.",
        credit: 0.3,
      },
      {
        text: "The constant shifting shows she's just fake and manipulative and there's no real self to treat.",
        credit: 0,
      },
    ],
    correctAnswer:
      "The picture is identity diffusion: the chronic emptiness and the chameleon-like reshaping around whoever she's with are one pattern — borrowing a self to fill an inner void — so the plan must target building a stable, integrated sense of self, not just the surface mood; test whether her self-descriptions reorganize around the present company, whether the emptiness spikes when she's alone with no one to mirror, and whether the shifts are driven by fear of the void rather than genuine growth.",
    explanation:
      "Full credit formulates identity diffusion driving the emptiness and chameleon shifts and names an audience-tracking test; 'she's just fake and manipulative' is the overreach the sincere, distress-laden emptiness defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A clinician must decide whether a man's mood swings are BPD: he has been low and irritable since a real bereavement, the mood tracks reminders of his loss and eases with support, and his relationships and sense of self have always been stable. Which conclusion best follows?",
    mcOptions: [
      {
        text: "All mood swings are basically the same, so it doesn't matter whether we call it BPD or not.",
        credit: 0,
      },
      {
        text: "It's probably just normal grief; we could keep watching it.",
        credit: 0.6,
      },
      {
        text: "The picture fits ordinary grief rather than BPD: it lacks the pervasive cross-relationship instability, the abandonment-triggered impulsivity, and the chronic identity disturbance that define the disorder, and it tracks a real loss and responds to support, so the formulation should not force a BPD frame; test whether the instability predates and spans his relationships rather than this loss, whether his sense of self is stable, and whether support settles the mood rather than failing to touch it.",
        credit: 1.0,
      },
      {
        text: "He seems sad since his loss.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The picture fits ordinary grief rather than BPD: it lacks the pervasive cross-relationship instability, the abandonment-triggered impulsivity, and the chronic identity disturbance that define the disorder, and it tracks a real loss and responds to support, so the formulation should not force a BPD frame; test whether the instability predates and spans his relationships rather than this loss, whether his sense of self is stable, and whether support settles the mood rather than failing to touch it.",
    explanation:
      "Top credit uses the absence of pervasive instability and the loss-tracking, support-responsive mood to rule BPD out at the formulation step; 'all mood swings are the same' is the dodge the clean diagnostic contrast defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "Mid-treatment, a patient repeatedly asks the clinician, 'Be honest — are you secretly sick of me?' and seems to scan her face for reassurance each time before she can settle into the session's work. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She's probably insecure; we could reassure her we aren't sick of her.",
        credit: 0.6,
      },
      {
        text: "The repeated 'are you sick of me?' question is the abandonment theme playing out live in the relationship — a dyad of the about-to-be-discarded child and the rejecting other activated with the clinician — so it both feeds the disorder and shows it in the room; test whether the urge to ask spikes after moments of closeness or before breaks, whether her settling depends on the clinician's answer rather than on tolerating the uncertainty, and whether naming the activated pattern instead of just reassuring loosens its grip.",
        credit: 1.0,
      },
      {
        text: "She seems to want the clinician's approval.",
        credit: 0.3,
      },
      {
        text: "Her question proves the clinician really has grown cold and has damaged the patient irreparably.",
        credit: 0,
      },
    ],
    correctAnswer:
      "The repeated 'are you sick of me?' question is the abandonment theme playing out live in the relationship — a dyad of the about-to-be-discarded child and the rejecting other activated with the clinician — so it both feeds the disorder and shows it in the room; test whether the urge to ask spikes after moments of closeness or before breaks, whether her settling depends on the clinician's answer rather than on tolerating the uncertainty, and whether naming the activated pattern instead of just reassuring loosens its grip.",
    explanation:
      "Full credit reads the in-session 'are you sick of me?' question as the abandonment pattern playing out live and names a spike-after-closeness test; 'the clinician really grew cold' is the overreach her steady stance defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A patient can explain splitting, mentalizing, and her whole BPD pattern flawlessly — and has lectured the clinician on it for months — yet still flips from idealizing to hating her partner over small letdowns exactly as before. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Because she understands her pattern so thoroughly, she is essentially recovered and just needs to decide to stop.",
        credit: 0,
      },
      {
        text: "She seems to understand her BPD really well.",
        credit: 0.3,
      },
      {
        text: "Her flawless account is intellectual insight that hasn't been worked through into the charged moments — knowing about splitting on paper hasn't reached the fight at 11 p.m., so the flips persist; test whether her understanding carries any real feeling when a rupture is live, whether she can hold the mixed picture in the actual heated moment rather than only explain it later, and whether repeated practice in real ruptures slowly changes the behavior.",
        credit: 1.0,
      },
      {
        text: "Her insight probably hasn't changed her behavior yet; we could practice in real moments.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Her flawless account is intellectual insight that hasn't been worked through into the charged moments — knowing about splitting on paper hasn't reached the fight at 11 p.m., so the flips persist; test whether her understanding carries any real feeling when a rupture is live, whether she can hold the mixed picture in the actual heated moment rather than only explain it later, and whether repeated practice in real ruptures slowly changes the behavior.",
    explanation:
      "Top credit distinguishes intellectual insight from worked-through change and names a real-rupture test; 'she's essentially recovered' is the overreach the unchanged flips defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "In one consultation, a clinician hears that a patient idealized then abruptly devalued three friends this month, panics at any sign of being left, and read 'she canceled lunch' as flat proof she is worthless and unlovable. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She seems to have a lot of friendship trouble.",
        credit: 0.3,
      },
      {
        text: "Read together, the pieces form one BPD picture sitting at the formulation stage: the idealize-then-devalue flips are splitting, the panic at being left is abandonment sensitivity, and 'she canceled, so I'm worthless' is a thought felt as literal fact — so the plan must target the affect regulation and the splitting and identity, not each friendship in isolation; test whether the devaluations follow a disappointment rather than new information, whether the abandonment reading tracks ambiguous cues, and whether helping her hold mixed views softens the flips.",
        credit: 1.0,
      },
      {
        text: "It's probably BPD; we could look at her friendships together.",
        credit: 0.6,
      },
      {
        text: "Her friends keep leaving, so she is simply a toxic person others are right to abandon.",
        credit: 0,
      },
    ],
    correctAnswer:
      "Read together, the pieces form one BPD picture sitting at the formulation stage: the idealize-then-devalue flips are splitting, the panic at being left is abandonment sensitivity, and 'she canceled, so I'm worthless' is a thought felt as literal fact — so the plan must target the affect regulation and the splitting and identity, not each friendship in isolation; test whether the devaluations follow a disappointment rather than new information, whether the abandonment reading tracks ambiguous cues, and whether helping her hold mixed views softens the flips.",
    explanation:
      "Full credit integrates the pieces into a BPD formulation and names a flips-follow-disappointment test; 'she's simply toxic and others are right to leave' is the overreach the abandonment-sensitivity and splitting defeat.",
  },
];

const hybrid: HomeworkItem[] = [
  {
    itemType: "hybrid",
    prompt:
      "At intake a young woman reports that whenever a friend takes a few hours to reply she becomes convinced she's being abandoned, floods with panic, and either sends dozens of texts or cuts the person off entirely; she says she 'just can't stand' the not-knowing. The clinician is deciding what the case needs first. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The first task is a shared formulation of this loop — the interpersonal trigger (a delayed reply read as abandonment), the fast-rising panic, the flooding-or-cutoff, and the brief relief — so later work targets the real driver rather than a guess; test whether the reaction tracks the specific abandonment fear, whether the impulsive act briefly relieves then reinforces, and whether the urge centers on intolerable uncertainty about the bond rather than genuine evidence she is being left.",
        credit: 1.0,
      },
      {
        text: "It's probably BPD; we could start some skills soon.",
        credit: 0.6,
      },
      {
        text: "She seems to overreact to texts.",
        credit: 0.3,
      },
      {
        text: "She just needs better communication habits, so the fix is a texting rule and there's nothing to formulate.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'abandonment-panic loop driven by intolerable uncertainty' lead from the rival 'her friends really are flaky and she just needs communication tips,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: watch whether the panic floods on ambiguous, minor delays regardless of how reliable the friend actually is, and whether each impulsive act (mass-texting or cutoff) briefly relieves then deepens the instability — a reaction that tracks her fear rather than the friend's behavior points to a BPD loop, not a communication gap. My lead is refuted if her friends are genuinely unreliable and a simple plan settles her with no recurring panic.",
      yieldAnchors: [
        "A delayed reply convinces her she's abandoned",
        "She floods with texts or cuts the person off",
        "She says she can't stand the not-knowing",
      ],
      riskAnchors: [
        "The reaction tracks the specific abandonment fear",
        "The impulsive act relieves briefly then reinforces",
        "The urge centers on uncertainty, not real evidence of leaving",
      ],
      defeatedBy: [
        "Her friends really are flaky and unreliable",
        "A simple communication plan ends the panic for good",
      ],
    },
    correctAnswer:
      "The first task is a shared formulation of this loop — the interpersonal trigger (a delayed reply read as abandonment), the fast-rising panic, the flooding-or-cutoff, and the brief relief — so later work targets the real driver rather than a guess; test whether the reaction tracks the specific abandonment fear, whether the impulsive act briefly relieves then reinforces, and whether the urge centers on intolerable uncertainty about the bond rather than genuine evidence she is being left.",
    explanation:
      "Full credit places the case at formulation and names a tracks-the-fear test that states its refutation; 'just needs a texting rule' is the dodge the abandonment-driven loop defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A new patient is visibly braced in the first session, says 'I've never told anyone how much I hate myself or how often I want to hurt myself — you'll just panic and lock me up,' and waits to see how the clinician reacts. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He seems anxious about opening up.",
        credit: 0.3,
      },
      {
        text: "This moment is the alliance forming or failing: the case needs a calm, nonjudgmental response that takes the self-harm seriously without panic before any deeper work, because his willingness to engage hinges on not being abandoned or controlled for telling the truth; test whether his disclosure deepens once the urges are met steadily, whether his guard drops as safety is planned collaboratively rather than imposed, and whether he returns and engages after the first session.",
        credit: 1.0,
      },
      {
        text: "He's probably scared of being judged; we could reassure him.",
        credit: 0.6,
      },
      {
        text: "His secrecy proves he's just seeking attention, so the priority is to call his bluff rather than build rapport.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'alliance-defining disclosure of genuine self-harm urges' lead from the rival 'he's exaggerating for attention,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: notice whether the urges are described with shame and dread and whether meeting them calmly without panic or control lets him open up further — relief at being taken seriously without being abandoned points to a real alliance forming. My lead is refuted if the 'urges' evaporate the moment they get no dramatic reaction and disclosure makes him more guarded rather than more engaged.",
      yieldAnchors: [
        "He is braced and secretive in session one",
        "He fears being 'locked up' for the truth",
        "He watches the clinician's reaction",
      ],
      riskAnchors: [
        "Disclosure deepens once met steadily",
        "His guard drops as safety is planned collaboratively",
        "He returns and engages after session one",
      ],
      defeatedBy: [
        "The urges evaporate once they get no dramatic reaction",
        "Calm acceptance makes him more guarded, not less",
      ],
    },
    correctAnswer:
      "This moment is the alliance forming or failing: the case needs a calm, nonjudgmental response that takes the self-harm seriously without panic before any deeper work, because his willingness to engage hinges on not being abandoned or controlled for telling the truth; test whether his disclosure deepens once the urges are met steadily, whether his guard drops as safety is planned collaboratively rather than imposed, and whether he returns and engages after the first session.",
    explanation:
      "Full credit reads the disclosure as an alliance-defining moment and names a met-steadily test that states its refutation; 'his secrecy proves attention-seeking' is the overreach the shame and dread defeat.",
  },
  {
    itemType: "hybrid",
    prompt:
      "Partway through treatment, a patient who is doing well reveals that she still cuts lightly 'a couple times a week,' which she'd never mentioned because 'it's not a big deal, it just makes the noise in my head stop.' Which conclusion best follows?",
    mcOptions: [
      {
        text: "She probably has another behavior; we could add it to the plan.",
        credit: 0.6,
      },
      {
        text: "The hidden cutting reveals the formulation was incomplete — this is self-harm doing affect regulation ('makes the noise stop') rather than a minor habit, so the work must target tolerating that unbearable affect without discharging it; test whether the cutting tracks the moments the inner 'noise' peaks, whether the relief is immediate and brief, and whether her overall gains improve once this hidden behavior is brought into the plan.",
        credit: 1.0,
      },
      {
        text: "She seems to have a small habit she didn't mention.",
        credit: 0.3,
      },
      {
        text: "If it's only a couple times a week and she says it's no big deal, it's a harmless coping habit to leave alone.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'self-harm functioning as affect regulation' lead from the rival 'it's a minor harmless habit,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: have her track what precedes an episode and watch whether unbearable affect peaks just before and drops right after the cut — a discharge that reliably 'makes the noise stop' marks affect-regulating self-harm, not a trivial habit. My lead is refuted if the cutting bears no relation to her affect and stopping it causes no pull or distress.",
      yieldAnchors: [
        "She cuts lightly a couple times a week",
        "She never mentioned it",
        "She says it 'makes the noise stop'",
      ],
      riskAnchors: [
        "The cutting tracks peaks of inner 'noise'",
        "Relief is immediate and brief",
        "Including it improves overall gains",
      ],
      defeatedBy: [
        "The cutting bears no relation to her affect",
        "Stopping it causes no pull or distress",
      ],
    },
    correctAnswer:
      "The hidden cutting reveals the formulation was incomplete — this is self-harm doing affect regulation ('makes the noise stop') rather than a minor habit, so the work must target tolerating that unbearable affect without discharging it; test whether the cutting tracks the moments the inner 'noise' peaks, whether the relief is immediate and brief, and whether her overall gains improve once this hidden behavior is brought into the plan.",
    explanation:
      "Full credit recognizes affect-regulating self-harm missed in the formulation and names a precedes-and-relieves test that states its refutation; 'it's a harmless habit' is the dodge the discharge function defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A patient whose self-harm and rage outbursts have dropped sharply now seems oddly low and empty, and mentions that without the crises filling her life she feels 'empty, like I don't know who I am without the chaos.' Which conclusion best follows?",
    mcOptions: [
      {
        text: "She seems a bit down since the crises stopped.",
        credit: 0.3,
      },
      {
        text: "As the crises stop consuming her life, a feeling they had been crowding out — the chronic emptiness and the question of who she is — is surfacing, which signals the case is moving from crisis stabilization into working through identity; test whether the empty feeling arises in the space the chaos used to fill, whether staying with it rather than reigniting a crisis prevents relapse, and whether naming what the chaos was warding off brings relief rather than a return of symptoms.",
        credit: 1.0,
      },
      {
        text: "It's probably about the change; we could ask how she's adjusting.",
        credit: 0.6,
      },
      {
        text: "The low mood proves the treatment harmed her and the structure should be loosened so the old intensity can return.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'warded-off emptiness surfacing as the crises recede' lead from the rival 'the treatment itself caused a depression that means it should stop,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: see whether the empty feeling shows up precisely in the space the chaos used to fill and softens when she names and stays with it rather than reigniting a crisis — emptiness tied to the vacated chaos points to working-through, not iatrogenic harm. My lead is refuted if the low mood is global and unrelated to the freed-up space and only a return of chaos relieves it.",
      yieldAnchors: [
        "Self-harm and rage have dropped sharply",
        "She now feels empty and low",
        "She senses she doesn't know herself without the chaos",
      ],
      riskAnchors: [
        "The feeling arises in the space the chaos used to fill",
        "Staying with it rather than reigniting crisis prevents relapse",
        "Naming what it warded off brings relief",
      ],
      defeatedBy: [
        "The low mood is global and unrelated to the freed-up space",
        "Only a return of chaos relieves it",
      ],
    },
    correctAnswer:
      "As the crises stop consuming her life, a feeling they had been crowding out — the chronic emptiness and the question of who she is — is surfacing, which signals the case is moving from crisis stabilization into working through identity; test whether the empty feeling arises in the space the chaos used to fill, whether staying with it rather than reigniting a crisis prevents relapse, and whether naming what the chaos was warding off brings relief rather than a return of symptoms.",
    explanation:
      "Full credit reads the surfacing emptiness as the working-through phase and names a freed-up-space test that states its refutation; 'the treatment harmed her, loosen the structure' is the overreach the genuine symptom relief defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "Near the end of treatment, a recovered patient grows quiet and says, 'If I stop coming, what if I fall apart and there's no one?' and asks whether she can keep weekly sessions 'just in case' indefinitely. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The request to keep coming 'just in case' looks like the abandonment dynamic reappearing around termination — seeking the clinician as a permanent safety figure against the dread of being alone — so the strong move is to treat the wish as material and build her confidence in her own capacities rather than simply granting endless sessions; test whether the urge to keep coming spikes as the end nears, whether she can in fact ride out a rough patch during a planned gap, and whether her anxiety eases once a relapse-prevention plan replaces the clinician as the safety net.",
        credit: 1.0,
      },
      {
        text: "She's probably nervous about stopping; we could space sessions out gradually.",
        credit: 0.6,
      },
      {
        text: "She seems worried about ending therapy.",
        credit: 0.3,
      },
      {
        text: "She clearly still needs full weekly treatment forever, so the safest course is to keep her in indefinite therapy.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'abandonment dread resurfacing as a safety-figure wish at termination' lead from the rival 'she objectively still needs full ongoing treatment,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: try a planned gap between sessions and watch whether she can ride out a rough patch on her own using what she's learned — coping well through the gap shows the wish is abandonment-driven reassurance, not genuine ongoing need. My lead is refuted if she genuinely deteriorates and cannot self-regulate during the gap despite a solid relapse-prevention plan.",
      yieldAnchors: [
        "She has recovered substantially",
        "She fears falling apart with 'no one' if she stops",
        "She asks for indefinite weekly sessions",
      ],
      riskAnchors: [
        "The urge to keep coming spikes as the end nears",
        "She can ride out a rough patch during a planned gap",
        "Anxiety eases once a relapse plan replaces the clinician",
      ],
      defeatedBy: [
        "She genuinely deteriorates during the gap",
        "She cannot self-regulate despite a solid plan",
      ],
    },
    correctAnswer:
      "The request to keep coming 'just in case' looks like the abandonment dynamic reappearing around termination — seeking the clinician as a permanent safety figure against the dread of being alone — so the strong move is to treat the wish as material and build her confidence in her own capacities rather than simply granting endless sessions; test whether the urge to keep coming spikes as the end nears, whether she can in fact ride out a rough patch during a planned gap, and whether her anxiety eases once a relapse-prevention plan replaces the clinician as the safety net.",
    explanation:
      "Full credit reads the 'just in case' wish as abandonment-driven reassurance around termination and names a planned-gap test that states its refutation; 'she needs therapy forever' is the overreach her recovery defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A patient mid-treatment says her self-harm has shrunk, but she now throws herself into intense new romances that flame out in days — each one 'the love of my life' and then, after a small letdown, 'a monster.' Which conclusion best follows?",
    mcOptions: [
      {
        text: "She seems to date a lot.",
        credit: 0.3,
      },
      {
        text: "She's probably found a new pattern; we could look at the dating.",
        credit: 0.6,
      },
      {
        text: "The pattern has shifted form rather than resolved — the whirlwind idealize-then-devalue romances now do the same affect-regulating, emptiness-filling job the self-harm did, so the case needs this folded into the same plan; test whether each new romance briefly relieves the emptiness then collapses into devaluation, whether the flips follow a disappointment rather than new information, and whether addressing the underlying affect slows the cycle.",
        credit: 1.0,
      },
      {
        text: "Dating around is just normal at her age, so there's nothing here connected to her BPD.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'the pattern has migrated into whirlwind relationships' lead from the rival 'she's just dating normally,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: watch whether each romance gives brief relief from emptiness that quickly collapses into all-bad devaluation after a small letdown — a relief-then-devalue loop tied to the same affect marks a migrated pattern, not ordinary dating. My lead is refuted if the relationships are stable, end for real reasons, and don't track her inner emptiness.",
      yieldAnchors: [
        "Self-harm has shrunk",
        "She now has whirlwind romances",
        "Each is 'the love of my life' then 'a monster'",
      ],
      riskAnchors: [
        "Each romance relieves emptiness then collapses into devaluation",
        "The flips follow a disappointment, not new information",
        "Addressing the affect slows the cycle",
      ],
      defeatedBy: [
        "The relationships are stable and end for real reasons",
        "They don't track her inner emptiness",
      ],
    },
    correctAnswer:
      "The pattern has shifted form rather than resolved — the whirlwind idealize-then-devalue romances now do the same affect-regulating, emptiness-filling job the self-harm did, so the case needs this folded into the same plan; test whether each new romance briefly relieves the emptiness then collapses into devaluation, whether the flips follow a disappointment rather than new information, and whether addressing the underlying affect slows the cycle.",
    explanation:
      "Full credit reads the whirlwind romances as a migrated pattern and names a relief-then-devalue test that states its refutation; 'it's just normal dating' is the dodge the same-affect loop defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A patient has done well, but as termination approaches she reveals that her mother still rescues her from every consequence — pays off impulsive debts, calls in sick for her, smooths over every blowup — and neither of them realized this was 'part of it.' Which conclusion best follows?",
    mcOptions: [
      {
        text: "She's lucky her mother is so devoted, so there's nothing to address before ending.",
        credit: 0,
      },
      {
        text: "It's probably worth mentioning to her mother before we finish.",
        credit: 0.6,
      },
      {
        text: "The mother's constant rescuing is leftover accommodation that shields her from the consequences that would otherwise build distress tolerance, so ending now would leave an active maintenance loop in place and invite relapse — the arc isn't complete until the rescuing is addressed; test whether her impulsive acts and crises resurface when her mother stops absorbing them, whether she can tolerate the consequences and affect herself, and whether removing the rescue is required for her gains to hold after termination.",
        credit: 1.0,
      },
      {
        text: "She seems to get a lot of help from her mother.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'residual rescuing that will undermine termination' lead from the rival 'her mother's support is irrelevant to recovery,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: have her mother step back from absorbing one round of consequences and watch whether crises and impulsivity flare — a return of symptoms when the rescuing stops shows the accommodation was still maintaining the loop. My lead is refuted if she manages the consequences herself with no surge in impulsivity or distress once her mother steps back.",
      yieldAnchors: [
        "She has done well in treatment",
        "Her mother absorbs every consequence",
        "Neither saw it as part of the disorder",
      ],
      riskAnchors: [
        "Crises resurface when her mother stops rescuing",
        "She can tolerate the consequences herself",
        "Removing the rescue is needed for gains to hold",
      ],
      defeatedBy: [
        "She manages consequences herself with no flare",
        "No surge in impulsivity once her mother steps back",
      ],
    },
    correctAnswer:
      "The mother's constant rescuing is leftover accommodation that shields her from the consequences that would otherwise build distress tolerance, so ending now would leave an active maintenance loop in place and invite relapse — the arc isn't complete until the rescuing is addressed; test whether her impulsive acts and crises resurface when her mother stops absorbing them, whether she can tolerate the consequences and affect herself, and whether removing the rescue is required for her gains to hold after termination.",
    explanation:
      "Full credit reads the hidden rescuing as an unfinished part of the arc and names a step-back test that states its refutation; 'she's just lucky' is the dodge the loop-maintaining help defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A patient has stopped her dramatic rage outbursts, but the clinician notices she now goes silent and subtly cold for the rest of a session whenever she feels slighted, 'checking out' instead of exploding. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She seems quiet sometimes.",
        credit: 0.3,
      },
      {
        text: "The silent withdrawal is a covert version of the old outburst — the dramatic rage dropped while the same devalue-and-cut-off response continues underground as icy withdrawal, so the visible symptom fell but the pattern persists; test whether the withdrawals cluster right after she feels slighted or let down, whether naming the shift in the room thaws it, and whether her progress was overstated because the rage merely went quiet.",
        credit: 1.0,
      },
      {
        text: "She's probably still upset sometimes; we could ask about the quiet spells.",
        credit: 0.6,
      },
      {
        text: "Since the outbursts have stopped, the BPD is essentially resolved and the quiet spells are nothing.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'covert withdrawal replacing the outbursts' lead from the rival 'she is simply a calm, reserved person now,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: notice whether the cold spells concentrate right after a perceived slight and whether naming the shift in the room brings her back — a withdraw-and-devalue response tied to feeling let down marks a covert continuation, not genuine calm. My lead is refuted if the quiet is evenly spread, unrelated to slights, and naming it finds no hurt underneath.",
      yieldAnchors: [
        "The rage outbursts have stopped",
        "She goes silent and cold when slighted",
        "The withdrawal follows perceived letdowns",
      ],
      riskAnchors: [
        "The withdrawals cluster after feeling slighted",
        "Naming the shift in the room thaws it",
        "Progress was overstated as the rage went covert",
      ],
      defeatedBy: [
        "The quiet is evenly spread and unrelated to slights",
        "Naming it finds no hurt underneath",
      ],
    },
    correctAnswer:
      "The silent withdrawal is a covert version of the old outburst — the dramatic rage dropped while the same devalue-and-cut-off response continues underground as icy withdrawal, so the visible symptom fell but the pattern persists; test whether the withdrawals cluster right after she feels slighted or let down, whether naming the shift in the room thaws it, and whether her progress was overstated because the rage merely went quiet.",
    explanation:
      "Full credit reads the cold spell as a covert continuation of the outburst and names a follows-a-slight test that states its refutation; 'the BPD is essentially resolved' is the overreach the hidden devaluation defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "Late in treatment, a patient who has been collaborative suddenly snaps, 'You only see me for the money — you don't actually give a damn whether I live or die,' after the clinician mentions an upcoming holiday break. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She's probably feeling abandoned by the break; we could reassure her we care.",
        credit: 0.6,
      },
      {
        text: "Her outsized 'you don't give a damn' reaction to a routine break looks like an old abandoning-caregiver/discarded-child dyad activated in the alliance — the break read as proof of abandonment — surfacing as a rupture to work through, not evidence the clinician is callous; test whether the same discarded-and-uncared-for feeling appears with other people who set limits, whether naming the activated pattern and the break's meaning repairs the rift, and whether the reaction eases as she sees the care is real and the frame isn't abandonment.",
        credit: 1.0,
      },
      {
        text: "She seems upset about the holiday break.",
        credit: 0.3,
      },
      {
        text: "Her anger proves the clinician is only in it for the money and the whole treatment was a sham.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'abandonment dyad activated as a workable rupture' lead from the rival 'the break really was a callous, unilateral abandonment,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: check whether the 'you don't care, you're discarding me' feeling shows up with other people who set normal limits and whether naming the pattern and the break's meaning repairs the alliance — a relationship theme that travels and mends points to a transference rupture, not real callousness. My lead is refuted if the break truly was handled carelessly or unilaterally and her protest resolves simply by correcting that.",
      yieldAnchors: [
        "She had been collaborative",
        "She snaps that the clinician only cares about money",
        "It's over a routine holiday break",
      ],
      riskAnchors: [
        "The discarded-and-uncared-for feeling appears with others who set limits",
        "Naming the pattern and the break's meaning repairs the rift",
        "It eases as she sees the care is real",
      ],
      defeatedBy: [
        "The break truly was handled carelessly or unilaterally",
        "Correcting that fully resolves her protest",
      ],
    },
    correctAnswer:
      "Her outsized 'you don't give a damn' reaction to a routine break looks like an old abandoning-caregiver/discarded-child dyad activated in the alliance — the break read as proof of abandonment — surfacing as a rupture to work through, not evidence the clinician is callous; test whether the same discarded-and-uncared-for feeling appears with other people who set limits, whether naming the activated pattern and the break's meaning repairs the rift, and whether the reaction eases as she sees the care is real and the frame isn't abandonment.",
    explanation:
      "Full credit reads the disproportionate snap as a transference rupture to repair and names a travels-and-mends test that states its refutation; 'the clinician is only in it for the money' is the overreach the previously collaborative work defeats.",
  },
];

const written: HomeworkItem[] = [
  {
    itemType: "written",
    prompt:
      "A 28-year-old arrives for an initial consultation: she describes relationships that swing from adoration to hatred within days, panic and frantic calling whenever a partner is slow to respond, cutting 'to take the edge off,' a chronic sense of emptiness, and a partner who now cancels his own plans and never disagrees so she 'doesn't spiral.' In one paragraph, propose the strongest formulation of where this case sits and what the first phase of treatment should target, and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest formulation is a BPD pattern — interpersonal triggers (a partner's delay read as abandonment) spike unbearable affect, and idealize-devalue flips, frantic calling, and cutting bring brief relief that reinforces the cycle — with the partner's cancel-everything, never-disagree stance now functioning as accommodation that keeps the loop alive, so the case sits at the assessment-and-formulation phase and the first targets are a shared map of the loop plus early safety and a plan to wind down both the self-harm and the accommodation. This is a strong claim because it predicts checkable consequences: the flips and cutting should track perceived abandonment rather than the partner's actual behavior; each impulsive act should bring brief relief that then deepens the instability; and her affect should have no room to settle while the partner removes every trigger for her. I would test it by mapping whether the crises cluster around abandonment cues, by watching whether self-harm reliably discharges affect and then reinforces it, and by seeing whether her distress shifts as the partner gradually holds ordinary limits — and if the swings actually track his genuine unreliability, the relief isn't tied to affect, and his stepping back is irrelevant to her, the BPD-loop formulation is wrong.",
      yieldAnchors: [
        "Idealize-to-hate swings within days",
        "Panic and cutting when a partner is slow to respond",
        "The partner cancels plans and never disagrees",
      ],
      riskAnchors: [
        "The flips and cutting track perceived abandonment",
        "Each impulsive act relieves briefly then reinforces",
        "Affect can't settle while the partner removes every trigger",
      ],
      defeatedBy: [
        "The swings track the partner's genuine unreliability",
        "His stepping back is irrelevant to her affect",
      ],
    },
    correctAnswer:
      "The strongest formulation is a BPD pattern — interpersonal triggers (a partner's delay read as abandonment) spike unbearable affect, and idealize-devalue flips, frantic calling, and cutting bring brief relief that reinforces the cycle — with the partner's cancel-everything, never-disagree stance now functioning as accommodation that keeps the loop alive, so the case sits at the assessment-and-formulation phase and the first targets are a shared map of the loop plus early safety and a plan to wind down both the self-harm and the accommodation. This is a strong claim because it predicts checkable consequences: the flips and cutting should track perceived abandonment rather than the partner's actual behavior; each impulsive act should bring brief relief that then deepens the instability; and her affect should have no room to settle while the partner removes every trigger for her. I would test it by mapping whether the crises cluster around abandonment cues, by watching whether self-harm reliably discharges affect and then reinforces it, and by seeing whether her distress shifts as the partner gradually holds ordinary limits — and if the swings actually track his genuine unreliability, the relief isn't tied to affect, and his stepping back is irrelevant to her, the BPD-loop formulation is wrong.",
    explanation:
      "The dodge — 'she's just emotional and overreacts, nothing to formulate' — ignores the loop and the accommodation; top credit commits to a BPD-loop formulation with an accommodation component and names tests that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A woman has done a year of treatment with real success: her self-harm has stopped and her relationships are far steadier. But she now reports feeling strangely adrift and has begun picking fights with her partner, saying she 'doesn't know who she is without the crises.' In one paragraph, propose the strongest integrated conclusion about where this case now sits and what it needs next, and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that the case has moved past crisis stabilization into working through identity: with the crises no longer organizing her life and discharging her affect, feelings and questions the chaos had kept at bay — about who she is, emptiness, and her relationships — are surfacing, which is why she feels adrift and is fighting with her partner rather than relapsing. This is a strong claim because it predicts checkable consequences: the unsettledness should appear in the space the crises used to fill; staying with the new feelings rather than reigniting a crisis should preserve her gains; and naming what the chaos was doing for her should bring relief rather than a return of symptoms. I would test it by tracing whether the adrift feeling and conflicts cluster in the vacated space, by checking whether her stability holds as she engages the feelings instead of acting on them, and by watching whether exploring 'who I am without the crises' deepens her sense of self — and if instead the distress is global and unrelated to the freed-up space and only a return of chaos relieves it, the working-through reading is wrong.",
      yieldAnchors: [
        "Self-harm has stopped and relationships are steadier",
        "She feels adrift and picks fights",
        "She says she doesn't know herself without the crises",
      ],
      riskAnchors: [
        "The unsettledness appears in the vacated space",
        "Staying with the feelings preserves her gains",
        "Naming what the chaos did brings relief",
      ],
      defeatedBy: [
        "The distress is global and unrelated to freed-up space",
        "Only a return of chaos relieves it",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that the case has moved past crisis stabilization into working through identity: with the crises no longer organizing her life and discharging her affect, feelings and questions the chaos had kept at bay — about who she is, emptiness, and her relationships — are surfacing, which is why she feels adrift and is fighting with her partner rather than relapsing. This is a strong claim because it predicts checkable consequences: the unsettledness should appear in the space the crises used to fill; staying with the new feelings rather than reigniting a crisis should preserve her gains; and naming what the chaos was doing for her should bring relief rather than a return of symptoms. I would test it by tracing whether the adrift feeling and conflicts cluster in the vacated space, by checking whether her stability holds as she engages the feelings instead of acting on them, and by watching whether exploring 'who I am without the crises' deepens her sense of self — and if instead the distress is global and unrelated to the freed-up space and only a return of chaos relieves it, the working-through reading is wrong.",
    explanation:
      "The dodge — calling the unrest proof the treatment backfired and should be loosened — ignores the genuine relief; top credit commits to a working-through phase and names a vacated-space test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "Two weeks before a planned termination, a patient who spent a year working on abandonment fears and self-harm declares she is 'completely better,' wants to cancel the remaining sessions, and in particular wants to skip the planned work on her feelings about the relationship ending. In one paragraph, propose the strongest conclusion about what is happening and what the arc still needs, and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that a sudden, total 'cure' arriving exactly as the feared work on ending and loss looms is more likely a flight into health — a way to declare victory and escape the dread of separation — than a genuine resolution of a year-long struggle, which means the arc still needs that work on the ending and a careful read of whether her confidence is real or defensive. This is a strong claim because it predicts checkable consequences: the timing should track the looming termination rather than any new real-world gain; the old abandonment affect should still surface if the ending is engaged concretely; and the 'cure' should wobble when separation is made vivid. I would test it by checking whether her improvement shows up in real relationships or only in her declarations, by inviting her to stay with feelings about the ending and watching whether she can without numbing or bolting, and by seeing whether her certainty holds when loss is made concrete — and if she can genuinely face the ending calmly and her gains are evident in daily life, the flight-into-health reading is wrong and she may genuinely be ready to finish.",
      yieldAnchors: [
        "She declares herself 'completely better'",
        "It arrives two weeks before termination",
        "She wants to skip the work on the ending",
      ],
      riskAnchors: [
        "The timing tracks the looming termination",
        "The abandonment affect still surfaces if engaged",
        "The 'cure' wobbles when separation is made vivid",
      ],
      defeatedBy: [
        "She faces the ending calmly without numbing",
        "Her gains are evident across daily life",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that a sudden, total 'cure' arriving exactly as the feared work on ending and loss looms is more likely a flight into health — a way to declare victory and escape the dread of separation — than a genuine resolution of a year-long struggle, which means the arc still needs that work on the ending and a careful read of whether her confidence is real or defensive. This is a strong claim because it predicts checkable consequences: the timing should track the looming termination rather than any new real-world gain; the old abandonment affect should still surface if the ending is engaged concretely; and the 'cure' should wobble when separation is made vivid. I would test it by checking whether her improvement shows up in real relationships or only in her declarations, by inviting her to stay with feelings about the ending and watching whether she can without numbing or bolting, and by seeing whether her certainty holds when loss is made concrete — and if she can genuinely face the ending calmly and her gains are evident in daily life, the flight-into-health reading is wrong and she may genuinely be ready to finish.",
    explanation:
      "The dodge — taking the 'completely better' at face value and ending early — ignores the suspicious timing tied to the dreaded work on separation; top credit commits to a flight into health and names a stay-with-the-ending test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "Eight months after finishing treatment, a woman returns shaken: a breakup and a job loss have brought back some urges to self-harm and her old sense of emptiness, and she says, 'I'm right back where I started, the therapy clearly didn't take.' Her records show she was stable and functioning well for those eight months. In one paragraph, propose the strongest conclusion about what is happening and what it calls for, and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that this is a stress-triggered lapse, not a relapse to baseline: eight months of stable functioning show the treatment did take, and major stressors like a breakup and a job loss have temporarily reactivated familiar urges and emptiness, so what it calls for is re-deploying her existing skills and relapse-prevention plan rather than starting over or concluding the therapy failed. This is a strong claim because it predicts checkable consequences: the uptick should track the acute losses and stay far short of her original severity; she should still be able to re-regulate or resist individual urges using what she learned; and her symptoms should recede toward her recovered baseline as the stressors resolve. I would test it by comparing the current intensity against both her pre-treatment level and her recovered baseline, by checking whether she can still apply her skills to a single urge, and by watching whether the flare eases as the breakup and job loss settle and she re-engages her plan — and if instead she has truly returned to full pre-treatment severity and her skills no longer help at all, the simple-lapse reading would need revising toward a fuller relapse.",
      yieldAnchors: [
        "Self-harm urges and emptiness returned under stress",
        "She says the therapy 'didn't take'",
        "She was stable for eight months",
      ],
      riskAnchors: [
        "The uptick tracks the acute losses",
        "She can still re-regulate from individual urges",
        "Symptoms recede toward baseline as stressors resolve",
      ],
      defeatedBy: [
        "She has returned to full pre-treatment severity",
        "Her skills no longer help at all",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that this is a stress-triggered lapse, not a relapse to baseline: eight months of stable functioning show the treatment did take, and major stressors like a breakup and a job loss have temporarily reactivated familiar urges and emptiness, so what it calls for is re-deploying her existing skills and relapse-prevention plan rather than starting over or concluding the therapy failed. This is a strong claim because it predicts checkable consequences: the uptick should track the acute losses and stay far short of her original severity; she should still be able to re-regulate or resist individual urges using what she learned; and her symptoms should recede toward her recovered baseline as the stressors resolve. I would test it by comparing the current intensity against both her pre-treatment level and her recovered baseline, by checking whether she can still apply her skills to a single urge, and by watching whether the flare eases as the breakup and job loss settle and she re-engages her plan — and if instead she has truly returned to full pre-treatment severity and her skills no longer help at all, the simple-lapse reading would need revising toward a fuller relapse.",
    explanation:
      "The dodge — agreeing the therapy 'didn't take' and starting from scratch — ignores eight months of recovery; top credit commits to a stress-triggered lapse and names a severity-comparison test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A clinician is forming an overall plan for a woman with severe BPD who is in frequent crisis and is also curious about 'where it all comes from' in her childhood. She asks whether they should do safety-and-stabilization work or 'figure out where it comes from' first. In one paragraph, propose the strongest conclusion about how to sequence and combine the work across her treatment arc, and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that the arc should lead with the well-supported priorities for severe, crisis-prone BPD — establishing the frame, safety, and affect regulation through an evidence-based approach such as MBT, TFP, or DBT — while treating her interest in 'where it comes from' not as an alternative but as a complement that becomes most useful for working through once the crises settle, so insight and stabilization are integrated rather than pitted against each other. This is a strong claim because it predicts checkable consequences: crises and self-harm should drop fastest when the structured work is actually doing its job, not when they only discuss origins; the childhood meaning should become more accessible and useful as the chaos stops crowding it out; and addressing that meaning during working-through should reduce the risk of the pattern simply migrating to a new form. I would test it by tracking whether her crises fall as the structured work proceeds, by watching whether the origin themes can be engaged more productively after stabilization, and by checking whether weaving in that meaning lowers relapse compared with stabilization alone — and if pure origin-talk with no stabilization actually resolved a severe, crisis-prone BPD presentation, this evidence-led sequencing would be wrong.",
      yieldAnchors: [
        "Severe, crisis-prone BPD",
        "She links it to her childhood",
        "She asks whether to stabilize or explore origins first",
      ],
      riskAnchors: [
        "Crises drop fastest when structured work does the job",
        "Origin meaning grows accessible as chaos eases",
        "Addressing meaning reduces pattern migration",
      ],
      defeatedBy: [
        "Origin-talk alone resolves the severe crises",
        "Structured stabilization produces no symptom reduction",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that the arc should lead with the well-supported priorities for severe, crisis-prone BPD — establishing the frame, safety, and affect regulation through an evidence-based approach such as MBT, TFP, or DBT — while treating her interest in 'where it comes from' not as an alternative but as a complement that becomes most useful for working through once the crises settle, so insight and stabilization are integrated rather than pitted against each other. This is a strong claim because it predicts checkable consequences: crises and self-harm should drop fastest when the structured work is actually doing its job, not when they only discuss origins; the childhood meaning should become more accessible and useful as the chaos stops crowding it out; and addressing that meaning during working-through should reduce the risk of the pattern simply migrating to a new form. I would test it by tracking whether her crises fall as the structured work proceeds, by watching whether the origin themes can be engaged more productively after stabilization, and by checking whether weaving in that meaning lowers relapse compared with stabilization alone — and if pure origin-talk with no stabilization actually resolved a severe, crisis-prone BPD presentation, this evidence-led sequencing would be wrong.",
    explanation:
      "The dodge — choosing meaning-only exploration over the evidence-based stabilization for severe BPD — is anti-evidence purism; top credit commits to a stabilization-led, meaning-integrated arc and names a crises-fall-with-structure test that could refute it.",
  },
];

export const section: SectionContent = {
  slug: "treatment-arc-start-to-finish",
  title: "A Treatment Arc, Start to Finish",
  weekNumber: 1,
  blurb:
    "A capstone that follows a single course of BPD treatment from assessment and formulation through establishing the frame and alliance, early safety and stabilization, working with splitting, identity, and the transference, working through, and termination — into one integrated way of reading where a case sits and what it needs next.",
  lectureTitle:
    "1.8 A Treatment Arc, Start to Finish",
  body: `# A Treatment Arc, Start to Finish

By now you have a toolkit: BPD runs as a cycle in which an interpersonal trigger — usually a whiff of rejection or abandonment — sets off fast-rising, unbearable affect, which an impulsive act (self-harm, rage, frantic clinging, an abrupt cutoff) briefly relieves, and that relief quietly reinforces the pattern; splitting keeps people all-good or all-bad; identity can feel diffuse and empty; early bonds become templates replayed in present relationships; mentalizing collapses under attachment stress; the therapy relationship is both a tool and a place the disorder shows itself; and well-supported treatments such as MBT, TFP, and DBT genuinely help. This final section puts the whole kit to work across one course of treatment, start to finish. A real case doesn't arrive labeled by phase. It offers signals — a hidden cutting habit, a stalled plateau, a sudden "cure" — and the craft is reading where in the arc a case sits and committing to the strongest next move the evidence warrants, while naming the cheapest observation that could prove you wrong.

## Assessment and formulation

The arc begins before any deeper work, with understanding. A good formulation maps the specific interpersonal triggers, the unbearable affect they ignite, the impulsive acts (self-harm, idealize-devalue flips, cutoffs), the chronic emptiness, and what the whole loop accomplishes — usually regulating affect or warding off abandonment. Skipping this to "just start skills" risks aiming at the wrong link, or forcing a BPD frame onto what is actually ordinary grief or moodiness that tracks a real loss and responds to support. The discipline runs through the whole course: treat the observable behavior as a clue to a loop, then ask what else should be true if your map is right. A strong formulation binds the trigger, the act, and the relief into one picture and carries a test: the self-harm should track perceived abandonment, and each impulsive act should bring relief that then deepens the instability.

## Building the alliance and the frame

Nothing in BPD treatment works without a working relationship and a clear, reliable frame, and deeper work especially can't begin on a foundation of mistrust. Many patients arrive braced — ashamed of self-harm, or convinced that every helper eventually abandons or controls them. The early phase is about safety and collaboration: taking self-harm seriously without panic, normalizing the disclosure, and setting a frame the patient helps shape and can trust. The check is concrete: engagement should rise when the patient is given a real say and the frame is made explicit, and guard should drop when shame and dread are met with steadiness rather than alarm or punishment. Force the hard work before the alliance holds and the patient flees; build it first and the hardest work becomes possible.

## Early safety and stabilization

With severe BPD, safety comes first. When self-harm and suicidality are doing affect regulation, the early work is stabilization — building the capacity to tolerate unbearable feeling without discharging it. Plunging into the deepest trauma before that capacity exists is destabilizing and can trigger crises; a graded approach makes the work tolerable enough to actually complete. The integrated stance is not stabilization versus depth but stabilization leading, with meaning-focused understanding as a complement that matters most for what comes next. The test is whether crises actually fall as the structured work proceeds, and whether the patient can stay regulated in a lower-intensity session without a crisis.

## Working with splitting, identity, and the transference

As safety holds, the core work turns to the disorder's structure: the splitting that keeps people all-good or all-bad, the diffuse and empty sense of self, and the old templates replayed in present relationships — including the one with the clinician. Much of this surfaces live in the room: a warm clinician suddenly experienced as cold, an abandonment dyad activated by a break, an idealize-then-devalue flip after a small letdown. Naming the activated pattern as it happens is how splitting and identity slowly get integrated. The check is whether the flips track a disappointment rather than new information, and whether naming the dyad in the room actually shifts it.

## Working through

As crises stop consuming time and discharging affect, something often surfaces: a feeling, a grief, an emptiness the chaos had been crowding out. This marks the shift from stabilization into working through — the slow, repeated process by which understanding reaches the charged moments and becomes new behavior rather than a recited explanation. A patient who can flawlessly describe splitting yet still flips from idealizing to hating her partner has intellectual insight that hasn't been worked through; the pattern persists precisely because the knowing hasn't reached the fight at 11 p.m. The check is whether insight carries real feeling, whether it can be applied in the heated moment rather than after, and whether repeated practice in real ruptures slowly changes what the person does.

## Termination and relapse prevention

A course of treatment aims at its own ending. Readiness shows when a patient handles ruptures independently — recovering from an interpersonal scare without self-harm, re-regulating on her own — at which point the strong move is to taper while consolidating a relapse-prevention plan. Watch for the abandonment dynamic reappearing around the ending itself: a wish to keep coming "just in case" can be the dread of being alone seeking the clinician as a permanent safety figure. And after treatment, expect lapses, not perfection: a stress-triggered flare months into stability is a signal to re-deploy skills, not proof the work failed. The check is whether the flare tracks the stressor and stays far short of baseline, and whether the patient can still re-regulate from individual urges on her own.

## In the real world

Picture one case from first call to last. A woman arrives in constant crisis — self-harming to quiet unbearable feeling, sure every partner will abandon her; you formulate the loop and meet the shame with steadiness, build a frame she trusts, stabilize safety so the crises drop, then work with the splitting and the abandonment dyads as they ignite in the room, and as the chaos recedes a long-avoided emptiness and grief surface to be worked through — until, steadier, she rides out a breakup without self-harm and you taper toward an ending she can own. The dodge at every step is the shrug: "people either get better or they don't — you can't really say where this case is or what it needs." The integrated move reads each phase for what it is and commits to the strongest next step with a test attached — does the self-harm track abandonment, does engagement rise with collaboration, do crises fall with structure, does the flare track the stressor. That is the whole course in a single arc: not a shrug at how stubborn BPD is, nor a promise of certain cure or certain collapse, but a disciplined, testable reading of where a case stands and what will move it forward.`,
  homework: {
    mcq,
    hybrid,
    written,
  },
};
