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
      "A clinic randomly assigns 200 people with long-standing depression either to start psychodynamic therapy now or to a waiting list. After six months, the therapy group has improved markedly on a standard depression questionnaire while the waiting-list group has barely changed. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The therapy likely caused real improvement, since random assignment makes the two groups comparable and only the treated group got better; test whether the waiting-list group improves the same amount once they later receive the therapy, whether the gap holds on a clinician's blind rating as well as self-report, and whether bigger improvement appears in those who attended more sessions.",
        credit: 1.0,
      },
      {
        text: "The therapy probably helped; we could follow the groups for a while longer.",
        credit: 0.6,
      },
      {
        text: "The treated group seems to be doing better.",
        credit: 0.3,
      },
      {
        text: "Feelings are too personal to capture on a questionnaire, so these numbers can't tell us anything about whether therapy works.",
        credit: 0,
      },
    ],
    correctAnswer:
      "The therapy likely caused real improvement, since random assignment makes the two groups comparable and only the treated group got better; test whether the waiting-list group improves the same amount once they later receive the therapy, whether the gap holds on a clinician's blind rating as well as self-report, and whether bigger improvement appears in those who attended more sessions.",
    explanation:
      "Top credit reads the randomized gap as a real treatment effect and names three disconfirming checks; 'feelings are too personal to measure' is the refusal the orderly questionnaire difference defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A study follows patients after they finish psychodynamic therapy. They are better at the end of treatment, but, unusually, they are better still one year later and better again two years out, long after the sessions stopped. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Once therapy ends there is nothing left to study, so later changes don't count.",
        credit: 0,
      },
      {
        text: "The therapy likely set in motion a skill or insight that patients keep applying on their own, so gains compound after treatment ends; test whether patients who report using what they learned improve most, whether the continued growth is absent in an untreated comparison group followed the same way, and whether those who got more therapy show steeper later gains.",
        credit: 1.0,
      },
      {
        text: "Patients seem to keep getting better.",
        credit: 0.3,
      },
      {
        text: "The benefits probably last; we could check in with them again later.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The therapy likely set in motion a skill or insight that patients keep applying on their own, so gains compound after treatment ends; test whether patients who report using what they learned improve most, whether the continued growth is absent in an untreated comparison group followed the same way, and whether those who got more therapy show steeper later gains.",
    explanation:
      "Full credit explains the sleeper effect with a mechanism and three tests; 'later changes don't count' is the dodge the orderly post-treatment growth contradicts.",
  },
  {
    itemType: "mc",
    prompt:
      "Across a large dataset, patients who attended more sessions of psychodynamic therapy show greater improvement, and the relationship is orderly: each block of additional sessions adds a bit more benefit, up to a point where it levels off. Which conclusion best follows?",
    mcOptions: [
      {
        text: "More sessions seem to go with more improvement.",
        credit: 0.3,
      },
      {
        text: "Therapy dose probably matters; we could look at more patients.",
        credit: 0.6,
      },
      {
        text: "The orderly dose-response pattern suggests the therapy itself is doing work, with benefit accumulating per session until it plateaus; test whether randomly assigning patients to longer versus shorter courses reproduces the curve, whether the plateau appears at the same point across different problems, and whether the link survives accounting for how severe each patient was at the start.",
        credit: 1.0,
      },
      {
        text: "Sicker people obviously stay longer, so the whole pattern is meaningless and therapy can't be evaluated this way.",
        credit: 0,
      },
    ],
    correctAnswer:
      "The orderly dose-response pattern suggests the therapy itself is doing work, with benefit accumulating per session until it plateaus; test whether randomly assigning patients to longer versus shorter courses reproduces the curve, whether the plateau appears at the same point across different problems, and whether the link survives accounting for how severe each patient was at the start.",
    explanation:
      "Top credit reads the dose-response curve as the therapy working and names three checks, including a severity adjustment; 'the whole pattern is meaningless' is the give-up the orderly curve defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "In a head-to-head randomized trial, psychodynamic therapy and an established cognitive-behavioral therapy produce about the same amount of improvement for anxiety, with no reliable difference between them at the end. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Both active therapies likely deliver genuine benefit through partly shared ingredients, since two real treatments matching each other is different from neither working; test whether each beats a no-treatment or waitlist arm in the same trial, whether they differ on specific outcomes like insight versus symptom checklists, and whether the tie replicates in an independent sample.",
        credit: 1.0,
      },
      {
        text: "If two therapies come out equal, it just proves neither one actually does anything.",
        credit: 0,
      },
      {
        text: "The two therapies probably work about equally; we could run another comparison.",
        credit: 0.6,
      },
      {
        text: "Neither therapy seems clearly better than the other.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "Both active therapies likely deliver genuine benefit through partly shared ingredients, since two real treatments matching each other is different from neither working; test whether each beats a no-treatment or waitlist arm in the same trial, whether they differ on specific outcomes like insight versus symptom checklists, and whether the tie replicates in an independent sample.",
    explanation:
      "Full credit reads the tie as two working treatments and names a no-treatment-arm test; 'equal means neither works' is the overreach a shared control arm would defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "Several independent research teams, using different patient samples and different statistical methods, each pool dozens of trials and arrive at the same answer: psychodynamic therapy produces a moderate, reliable benefit. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The reviews probably agree that it helps; we could wait for more reviews.",
        credit: 0.6,
      },
      {
        text: "Different teams seem to reach similar results.",
        credit: 0.3,
      },
      {
        text: "Because independent teams with different samples and methods converge on the same moderate benefit, that conclusion is hard to explain away as one group's bias or one odd sample; test whether the effect holds when only the most rigorous trials are kept, whether it survives correction for unpublished negative studies, and whether a fresh meta-analysis by a skeptical team lands in the same range.",
        credit: 1.0,
      },
      {
        text: "Therapy is too individual to summarize with a single number, so pooling studies tells us nothing.",
        credit: 0,
      },
    ],
    correctAnswer:
      "Because independent teams with different samples and methods converge on the same moderate benefit, that conclusion is hard to explain away as one group's bias or one odd sample; test whether the effect holds when only the most rigorous trials are kept, whether it survives correction for unpublished negative studies, and whether a fresh meta-analysis by a skeptical team lands in the same range.",
    explanation:
      "Top credit leans on converging meta-analyses and names three robustness tests; 'too individual to summarize' is the refusal the agreement across teams defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A clinic reports that clients who signed up for psychodynamic therapy ended up much healthier a year later than people in the same city who never sought any treatment. Which conclusion best follows?",
    mcOptions: [
      {
        text: "This shows that seeking psychodynamic therapy directly causes people to recover.",
        credit: 0,
      },
      {
        text: "The people who chose therapy likely differ from those who didn't — more motivated, more resourced, perhaps less severe — so the healthier outcome can't be pinned on the therapy from this design; test by randomly assigning willing patients to immediate versus delayed therapy, by checking whether the groups already differed in severity at the start, and by seeing whether matching on baseline motivation shrinks the gap.",
        credit: 1.0,
      },
      {
        text: "The difference might be due to who chose treatment; we could gather more details about the clients.",
        credit: 0.6,
      },
      {
        text: "The treated clients seem to be doing better than untreated people.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The people who chose therapy likely differ from those who didn't — more motivated, more resourced, perhaps less severe — so the healthier outcome can't be pinned on the therapy from this design; test by randomly assigning willing patients to immediate versus delayed therapy, by checking whether the groups already differed in severity at the start, and by seeing whether matching on baseline motivation shrinks the gap.",
    explanation:
      "Full credit names the selection confound and a randomization fix; 'this proves therapy causes recovery' is the overreach the self-selected comparison defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "Worried that earlier studies just reflected which patients chose therapy, researchers now randomly assign patients to immediate therapy or a delayed-treatment control. The immediate group improves significantly more. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The immediate group seems to do better.",
        credit: 0.3,
      },
      {
        text: "Because randomization makes the groups comparable at the start, the added improvement is now reasonably attributed to the therapy rather than to who chose it; test whether the delayed group catches up once treated, whether the effect holds with blind outcome raters, and whether it replicates across clinics.",
        credit: 1.0,
      },
      {
        text: "Random assignment probably means the therapy helped; we could run it again.",
        credit: 0.6,
      },
      {
        text: "No study can ever rule out every other explanation, so even a randomized trial proves nothing about therapy.",
        credit: 0,
      },
    ],
    correctAnswer:
      "Because randomization makes the groups comparable at the start, the added improvement is now reasonably attributed to the therapy rather than to who chose it; test whether the delayed group catches up once treated, whether the effect holds with blind outcome raters, and whether it replicates across clinics.",
    explanation:
      "Top credit pins the effect on therapy because randomization balances selection and names three tests; 'no study proves anything' is the refusal the randomized design overcomes.",
  },
  {
    itemType: "mc",
    prompt:
      "Someone notices that trials run by enthusiastic believers in psychodynamic therapy report much larger benefits than trials of the very same therapy run by neutral or skeptical teams. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The researchers' allegiance likely inflates reported effects through subtle design and rating choices, so the truest estimate comes from independent or adversarial teams; test whether effects shrink when outcome raters are blind to condition, whether pre-registered trials show smaller gaps, and whether the same shrinkage appears when believers in rival therapies study their own.",
        credit: 1.0,
      },
      {
        text: "Researcher bias might be inflating the results; we could look at who ran each study.",
        credit: 0.6,
      },
      {
        text: "Believers seem to report bigger effects.",
        credit: 0.3,
      },
      {
        text: "Since every researcher is biased, all therapy studies are worthless and the question can't be answered.",
        credit: 0,
      },
    ],
    correctAnswer:
      "The researchers' allegiance likely inflates reported effects through subtle design and rating choices, so the truest estimate comes from independent or adversarial teams; test whether effects shrink when outcome raters are blind to condition, whether pre-registered trials show smaller gaps, and whether the same shrinkage appears when believers in rival therapies study their own.",
    explanation:
      "Full credit names allegiance bias and a blinding test that would refute it; 'all studies are worthless' is the give-up the systematic believer-versus-skeptic gap actually lets us correct.",
  },
  {
    itemType: "mc",
    prompt:
      "A glowing report says that of the patients who completed a full course of psychodynamic therapy, nearly all improved. It does not mention that a third of those who started dropped out before finishing. Which conclusion best follows?",
    mcOptions: [
      {
        text: "If most completers improved, that settles it: the therapy works for everyone who tries it.",
        credit: 0,
      },
      {
        text: "The patients who finished seem to have done well.",
        credit: 0.3,
      },
      {
        text: "Counting only completers likely overstates the benefit, because those who dropped out — perhaps because they weren't improving — are missing from the tally; test by analyzing outcomes for everyone who started regardless of dropout, by comparing baseline severity of completers versus dropouts, and by checking whether the dropouts fared worse when later contacted.",
        credit: 1.0,
      },
      {
        text: "Ignoring the dropouts could bias the result; we could try to track them down.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Counting only completers likely overstates the benefit, because those who dropped out — perhaps because they weren't improving — are missing from the tally; test by analyzing outcomes for everyone who started regardless of dropout, by comparing baseline severity of completers versus dropouts, and by checking whether the dropouts fared worse when later contacted.",
    explanation:
      "Top credit names the attrition confound and an all-who-started analysis as the fix; 'it works for everyone who tries' is the overreach the missing dropouts defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "In one trial, patients rate their own improvement after psychodynamic therapy as large, while independent clinicians who don't know who got which treatment rate the same patients' improvement as smaller but still real. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The two kinds of ratings probably both matter; we could collect more ratings.",
        credit: 0.6,
      },
      {
        text: "Self-reports likely run high from hope or wanting to please, so the blind clinician ratings give the more trustworthy estimate of a real but smaller effect; test whether the gap between self and blind ratings shrinks when patients are assured of anonymity, whether objective measures like return-to-work track the blind ratings, and whether the pattern repeats in other trials.",
        credit: 1.0,
      },
      {
        text: "Because the two ratings disagree, there is no fact of the matter about whether the patient improved.",
        credit: 0,
      },
      {
        text: "Patients rate themselves higher than the clinicians do.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "Self-reports likely run high from hope or wanting to please, so the blind clinician ratings give the more trustworthy estimate of a real but smaller effect; test whether the gap between self and blind ratings shrinks when patients are assured of anonymity, whether objective measures like return-to-work track the blind ratings, and whether the pattern repeats in other trials.",
    explanation:
      "Full credit treats the blind ratings as the more trustworthy estimate and names an objective-measure test; 'no fact of the matter' is the refusal the convergence with objective outcomes defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A trial compares psychodynamic therapy against a 'supportive' control where patients meet a warm listener for the same number of hours but get no interpretive work. Both improve, but the psychodynamic group improves reliably more. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The psychodynamic group seems to do a bit better.",
        credit: 0.3,
      },
      {
        text: "Any attention from a kind person is all that helps, so the extra ingredients in therapy do nothing.",
        credit: 0,
      },
      {
        text: "Because the groups were matched on attention and warmth, the extra improvement likely comes from the specific interpretive work, not just from being listened to; test whether the added benefit appears mainly on outcomes the interpretation targets, whether more interpretation predicts more gain, and whether the gap holds when both therapists are equally warm and experienced.",
        credit: 1.0,
      },
      {
        text: "The specific techniques might add something; we could compare more conditions.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Because the groups were matched on attention and warmth, the extra improvement likely comes from the specific interpretive work, not just from being listened to; test whether the added benefit appears mainly on outcomes the interpretation targets, whether more interpretation predicts more gain, and whether the gap holds when both therapists are equally warm and experienced.",
    explanation:
      "Top credit credits the specific interpretive ingredient because warmth was matched and names targeted tests; 'attention is all that helps' is the overreach the supportive-control gap defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "Patients treated for depression with psychodynamic therapy and patients treated with medication both improve by the end. But after both stop their treatment, the medication group relapses far more often over the next year than the therapy group. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The therapy likely teaches something patients carry forward, giving more durable protection once treatment stops, whereas the drug works only while taken; test whether the therapy group's lasting edge tracks the skills or insight they report using, whether re-starting medication restores the drug group's gains, and whether combining both yields the best long-term outcome.",
        credit: 1.0,
      },
      {
        text: "The therapy group seems to relapse less after stopping.",
        credit: 0.3,
      },
      {
        text: "Therapy might last longer than medication; we could follow them another year.",
        credit: 0.6,
      },
      {
        text: "Comparing therapy to pills is apples and oranges, so nothing can be concluded about either.",
        credit: 0,
      },
    ],
    correctAnswer:
      "The therapy likely teaches something patients carry forward, giving more durable protection once treatment stops, whereas the drug works only while taken; test whether the therapy group's lasting edge tracks the skills or insight they report using, whether re-starting medication restores the drug group's gains, and whether combining both yields the best long-term outcome.",
    explanation:
      "Full credit reads the durability gap as therapy teaching a carried-forward skill and names three tests; 'apples and oranges, nothing concluded' is the dodge the clean relapse difference defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "After psychodynamic therapy, patients show not only fewer symptoms but also steadier relationships and better handling of stress — changes that a symptom checklist alone would miss. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The therapy might change more than symptoms; we could measure a few more outcomes.",
        credit: 0.6,
      },
      {
        text: "Patients seem to be doing better in several areas.",
        credit: 0.3,
      },
      {
        text: "The therapy likely produces broad changes in how patients relate and cope, not just symptom relief, so narrow checklists understate its benefit; test whether the relationship and coping gains appear even when symptoms barely move, whether they hold up at long-term follow-up, and whether an untreated comparison group shows no such broad change.",
        credit: 1.0,
      },
      {
        text: "Anything beyond a symptom score is too vague to measure, so claims about 'deeper' change are empty.",
        credit: 0,
      },
    ],
    correctAnswer:
      "The therapy likely produces broad changes in how patients relate and cope, not just symptom relief, so narrow checklists understate its benefit; test whether the relationship and coping gains appear even when symptoms barely move, whether they hold up at long-term follow-up, and whether an untreated comparison group shows no such broad change.",
    explanation:
      "Top credit commits to broad relational change beyond symptoms and names three checks; 'anything beyond a symptom score is too vague' is the refusal the measured relationship and coping gains defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "A clinic enrolls people at the worst moment of a crisis and reports that after a few weeks of psychodynamic therapy most feel much better. Which conclusion best follows?",
    mcOptions: [
      {
        text: "This proves the therapy rapidly cures crises.",
        credit: 0,
      },
      {
        text: "People recruited at their worst tend to drift back toward their usual level on their own, so some of this improvement may be natural recovery rather than the therapy; test by including a comparison group enrolled at the same crisis point but not yet treated, by checking whether improvement exceeds that natural rebound, and by seeing whether earlier-treated patients improve faster than those whose start is delayed.",
        credit: 1.0,
      },
      {
        text: "The patients seem to feel better after a few weeks.",
        credit: 0.3,
      },
      {
        text: "Some of the change might just be natural recovery; we could watch them longer.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "People recruited at their worst tend to drift back toward their usual level on their own, so some of this improvement may be natural recovery rather than the therapy; test by including a comparison group enrolled at the same crisis point but not yet treated, by checking whether improvement exceeds that natural rebound, and by seeing whether earlier-treated patients improve faster than those whose start is delayed.",
    explanation:
      "Full credit names the regression-to-the-mean confound and a same-crisis comparison group as the fix; 'this proves therapy cures crises' is the overreach the natural rebound defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A psychodynamic therapy that worked well in trials with young adults in one country is now tested, unchanged, with older adults in a very different culture — and produces a similar benefit. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The therapy seems to help this new group too.",
        credit: 0.3,
      },
      {
        text: "It probably travels to other groups; we could test a few more populations.",
        credit: 0.6,
      },
      {
        text: "The therapy's benefit likely rests on broadly human processes rather than one culture's quirks, since it replicates in a very different group; test whether it keeps working across several more cultures and ages, whether outcomes hold when local therapists deliver it, and whether any group where it fails reveals what the active ingredient depends on.",
        credit: 1.0,
      },
      {
        text: "Every culture is unique, so a result from one place can never apply anywhere else.",
        credit: 0,
      },
    ],
    correctAnswer:
      "The therapy's benefit likely rests on broadly human processes rather than one culture's quirks, since it replicates in a very different group; test whether it keeps working across several more cultures and ages, whether outcomes hold when local therapists deliver it, and whether any group where it fails reveals what the active ingredient depends on.",
    explanation:
      "Top credit infers broadly human active ingredients from the replication and names cross-population tests; 'a result can never apply elsewhere' is the refusal the successful replication defeats.",
  },
];

const hybrid: HomeworkItem[] = [
  {
    itemType: "hybrid",
    prompt:
      "A trial finds that patients given psychodynamic therapy improve over three months while a waiting-list group improves much less. A skeptic says people simply get better with time. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Because both groups had the same amount of time pass and only the treated group improved much, the therapy — not the mere passage of time — likely drove the gain; test whether the waiting-list group improves once they later get the therapy, whether the treated group's edge holds on blind ratings, and whether more sessions predict more improvement.",
        credit: 1.0,
      },
      {
        text: "The treated group seems to improve more than the waiting one.",
        credit: 0.3,
      },
      {
        text: "Everyone recovers eventually, so the therapy added nothing.",
        credit: 0,
      },
      {
        text: "Time alone probably isn't the whole story; we could follow both groups longer.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'the therapy drove the gain' lead from the rival 'people simply improve with time,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: compare the two groups over the identical time window — the waiting-list group controls for the passage of time, so a larger improvement in the treated group points to the therapy rather than time. My lead is refuted if the waiting-list group improves just as much over the same months, which would mean time alone explains the change.",
      yieldAnchors: [
        "Both groups experienced the same passage of time",
        "The therapy group improved markedly",
        "The waiting-list group improved much less",
      ],
      riskAnchors: [
        "The waiting-list group improves once it finally gets therapy",
        "The treated group's edge holds on blind ratings",
        "More sessions predict more improvement",
      ],
      defeatedBy: [
        "The waiting-list group improves just as much over the same period",
        "Symptoms vanish on their own regardless of treatment",
      ],
    },
    correctAnswer:
      "Because both groups had the same amount of time pass and only the treated group improved much, the therapy — not the mere passage of time — likely drove the gain; test whether the waiting-list group improves once they later get the therapy, whether the treated group's edge holds on blind ratings, and whether more sessions predict more improvement.",
    explanation:
      "Full credit uses the waitlist control to rule out time and names three tests, with a same-window comparison that states its own refutation; 'everyone recovers eventually' is the overreach the lagging waitlist defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "Two years after finishing psychodynamic therapy, former patients are doing even better than they were at the last session. A colleague suggests they must have picked up other treatment in the meantime. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Once therapy is over, any later change is random noise we can ignore.",
        credit: 0,
      },
      {
        text: "The continued growth likely reflects patients applying what they learned on their own, an effect the therapy seeded rather than later treatment, provided no extra treatment occurred; test whether patients who got no further therapy still show the late gains, whether the growth is largest in those who report using their insights, and whether an untreated comparison group followed the same way shows no such climb.",
        credit: 1.0,
      },
      {
        text: "The therapy's effects might keep growing; we could ask whether they got other help.",
        credit: 0.6,
      },
      {
        text: "The former patients seem to keep improving.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'the therapy seeded continuing growth' lead from the rival 'they got other treatment after it ended,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: ask the follow-up patients whether they received any other treatment after therapy ended, and look only at those who got none — continued gains in that subgroup point to the original therapy seeding self-directed change. My lead is refuted if the late improvement appears only among those who later sought additional treatment.",
      yieldAnchors: [
        "Patients improved during therapy",
        "They improved further two years later",
        "The gains grew after sessions stopped",
      ],
      riskAnchors: [
        "Patients with no further treatment still show late gains",
        "Gains are largest in those using their insights",
        "An untreated comparison group shows no such climb",
      ],
      defeatedBy: [
        "The late gains appear only in those who got other treatment",
        "Symptoms naturally keep improving for everyone over two years",
      ],
    },
    correctAnswer:
      "The continued growth likely reflects patients applying what they learned on their own, an effect the therapy seeded rather than later treatment, provided no extra treatment occurred; test whether patients who got no further therapy still show the late gains, whether the growth is largest in those who report using their insights, and whether an untreated comparison group followed the same way shows no such climb.",
    explanation:
      "Full credit attributes the sleeper effect to seeded self-directed change with three tests and an other-treatment check that names its refutation; 'later change is just noise' is the dodge the orderly growth defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "In clinic records, patients who had more psychodynamic sessions show more improvement, in an orderly step-by-step way. A reviewer warns that sicker patients might stay in treatment longer. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The number of sessions probably matters; we could pull more records.",
        credit: 0.6,
      },
      {
        text: "The orderly more-sessions-more-benefit pattern suggests the therapy accumulates effect per session, but the sicker-stay-longer worry must be ruled out, so the cleanest evidence is a trial that fixes the dose in advance; test whether randomly assigning patients to longer versus shorter courses reproduces the curve, whether the link survives adjusting for baseline severity, and whether the plateau falls at the same point across problems.",
        credit: 1.0,
      },
      {
        text: "More sessions seem to go with more improvement.",
        credit: 0.3,
      },
      {
        text: "Because sicker patients might stay longer, dose can never be studied and the data is useless.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'therapy accumulates benefit per session' lead from the rival 'sicker patients just stay longer, so dose only tracks severity,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: randomly assign willing patients to a fixed short or long course so that dose no longer depends on how sick they are — if the longer course still yields more benefit, the dose itself is doing the work. My lead is refuted if, once severity is held constant, extra sessions add no improvement.",
      yieldAnchors: [
        "More sessions go with more improvement",
        "The relationship is orderly, not random",
        "Benefit climbs then plateaus",
      ],
      riskAnchors: [
        "Randomly fixing a longer dose reproduces the curve",
        "The link survives adjusting for baseline severity",
        "The plateau falls at the same point across problems",
      ],
      defeatedBy: [
        "Once severity is controlled, extra sessions add nothing",
        "Dose only reflects how sick patients were to begin with",
      ],
    },
    correctAnswer:
      "The orderly more-sessions-more-benefit pattern suggests the therapy accumulates effect per session, but the sicker-stay-longer worry must be ruled out, so the cleanest evidence is a trial that fixes the dose in advance; test whether randomly assigning patients to longer versus shorter courses reproduces the curve, whether the link survives adjusting for baseline severity, and whether the plateau falls at the same point across problems.",
    explanation:
      "Full credit reads the dose-response as the therapy working while naming the severity confound and a fixed-dose trial that would refute it; 'dose can never be studied' is the give-up the orderly curve defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A randomized trial finds psychodynamic therapy and an established therapy improve patients equally. A critic argues this just shows both are elaborate placebos. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Two active treatments matching each other is not the same as neither working, so the more likely reading is that both deliver real benefit through partly shared mechanisms; test whether each beats a genuine no-treatment or attention-only control in the same trial, whether they diverge on specific targeted outcomes, and whether the tie replicates in a fresh sample.",
        credit: 1.0,
      },
      {
        text: "If they come out equal, that proves both are just placebos.",
        credit: 0,
      },
      {
        text: "The two therapies seem about equally effective.",
        credit: 0.3,
      },
      {
        text: "Both probably help to a similar degree; we could add another comparison.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'both are real, partly shared mechanisms' lead from the rival 'both are placebos,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: include a no-treatment or attention-only control arm in the same trial — if both therapies beat it, equality means both work, not that both are placebos. My lead is refuted if neither therapy outperforms the inert control.",
      yieldAnchors: [
        "Both therapies improved patients",
        "Their outcomes matched closely",
        "Both were delivered as real treatments",
      ],
      riskAnchors: [
        "Each beats a no-treatment control",
        "They diverge on specific targeted outcomes",
        "The tie replicates in a fresh sample",
      ],
      defeatedBy: [
        "Neither therapy beats an inert control",
        "Improvement appears with no treatment at all",
      ],
    },
    correctAnswer:
      "Two active treatments matching each other is not the same as neither working, so the more likely reading is that both deliver real benefit through partly shared mechanisms; test whether each beats a genuine no-treatment or attention-only control in the same trial, whether they diverge on specific targeted outcomes, and whether the tie replicates in a fresh sample.",
    explanation:
      "Full credit reads the tie as two working treatments and names a no-treatment-arm test that would refute it; 'equal means both placebos' is the overreach that very control arm defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "Effects for a psychodynamic therapy look large in studies by its developers but shrink when an independent lab repeats the trial with the same manual. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The independent lab seems to find smaller effects.",
        credit: 0.3,
      },
      {
        text: "Allegiance might inflate the developers' results; we could compare more labs.",
        credit: 0.6,
      },
      {
        text: "The developers' allegiance likely inflated their estimates, so the independent replication gives the more trustworthy effect size; test whether blinding outcome raters shrinks the developers' effect, whether pre-registered independent trials cluster near the smaller estimate, and whether the same inflation appears when rival-therapy developers study their own method.",
        credit: 1.0,
      },
      {
        text: "Since all researchers are biased, no effect size means anything and the therapy can't be judged.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'allegiance inflated the developers' results' lead from the rival 'the independent lab simply ran it badly,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: have the independent lab use blind outcome raters and a pre-registered protocol, then check whether the developers' own effect also shrinks under blinding — convergence on the smaller number points to allegiance, not sloppy replication. My lead is refuted if the independent lab's small effect grows back to the developers' size once its methods are tightened.",
      yieldAnchors: [
        "Developers report large effects",
        "An independent lab using the same manual reports smaller ones",
        "Only the research team differs",
      ],
      riskAnchors: [
        "Blinding raters shrinks the developers' effect",
        "Pre-registered trials cluster near the smaller estimate",
        "Rival-therapy developers inflate their own method too",
      ],
      defeatedBy: [
        "The independent lab's effect grows once its methods improve",
        "The two labs treated entirely different patients",
      ],
    },
    correctAnswer:
      "The developers' allegiance likely inflated their estimates, so the independent replication gives the more trustworthy effect size; test whether blinding outcome raters shrinks the developers' effect, whether pre-registered independent trials cluster near the smaller estimate, and whether the same inflation appears when rival-therapy developers study their own method.",
    explanation:
      "Full credit names allegiance bias and a blinding test that names its refutation; 'no effect size means anything' is the give-up the systematic developer-versus-independent gap lets us correct.",
  },
  {
    itemType: "hybrid",
    prompt:
      "Listening to therapy recordings, researchers find that patients improve more in sessions containing more accurate interpretive work. A skeptic says it's really just the therapist's warmth. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Interpretation might drive change; we could code more sessions.",
        credit: 0.6,
      },
      {
        text: "What happens inside a session is private and can't be measured, so this shows nothing.",
        credit: 0,
      },
      {
        text: "The link between accurate interpretation and improvement suggests the specific interpretive work contributes beyond warmth, though warmth must be measured and held constant; test whether the interpretation-outcome link survives statistically controlling for rated warmth, whether warm but low-interpretation sessions produce less change, and whether boosting accurate interpretation experimentally increases gains.",
        credit: 1.0,
      },
      {
        text: "More interpretation seems to go with more improvement.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'interpretation adds benefit beyond warmth' lead from the rival 'warmth alone explains it,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: rate each session's warmth separately and check whether the interpretation-improvement link survives once warmth is held constant — a surviving link points to interpretation doing its own work. My lead is refuted if the link vanishes the moment warmth is controlled, leaving warmth as the whole story.",
      yieldAnchors: [
        "Sessions vary in amount of accurate interpretation",
        "More interpretation goes with more improvement",
        "The pattern shows across many recordings",
      ],
      riskAnchors: [
        "The link survives controlling for warmth",
        "Warm low-interpretation sessions yield less change",
        "Experimentally increasing interpretation raises gains",
      ],
      defeatedBy: [
        "The link disappears once warmth is controlled",
        "Warmth alone produces the same improvement",
      ],
    },
    correctAnswer:
      "The link between accurate interpretation and improvement suggests the specific interpretive work contributes beyond warmth, though warmth must be measured and held constant; test whether the interpretation-outcome link survives statistically controlling for rated warmth, whether warm but low-interpretation sessions produce less change, and whether boosting accurate interpretation experimentally increases gains.",
    explanation:
      "Full credit credits interpretation beyond warmth while naming a control-for-warmth test that names its refutation; 'sessions can't be measured' is the refusal the recorded process-outcome link defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "In a study, patients' capacity to reflect on their own feelings rises first, and their symptoms drop afterward. One might wonder whether feeling better simply makes people more reflective instead. Which conclusion best follows?",
    mcOptions: [
      {
        text: "We can never know what causes what in the mind, so the order of changes is meaningless.",
        credit: 0,
      },
      {
        text: "Reflection and symptoms both seem to change.",
        credit: 0.3,
      },
      {
        text: "Because the rise in reflection reliably comes before the symptom drop, it more likely drives the improvement than the reverse, though the timing must be pinned down; test whether early gains in reflection predict later symptom change but not vice versa, whether sessions that boost reflection are followed by steeper symptom drops, and whether an intervention targeting reflection alone improves symptoms.",
        credit: 1.0,
      },
      {
        text: "Reflection might lead to symptom relief; we could track the timing more closely.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'reflection drives symptom relief' lead from the rival 'feeling better makes people more reflective,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: check the time order across patients — if early increases in reflection predict later symptom drops while early symptom drops do not predict later reflection, the causal arrow runs from reflection to relief. My lead is refuted if symptom improvement reliably comes first and reflection only rises afterward.",
      yieldAnchors: [
        "Reflection rises early in treatment",
        "Symptoms drop afterward",
        "The order is consistent across patients",
      ],
      riskAnchors: [
        "Early reflection predicts later symptom change, not the reverse",
        "Reflection-boosting sessions precede steeper drops",
        "Targeting reflection alone improves symptoms",
      ],
      defeatedBy: [
        "Symptom relief reliably comes before any rise in reflection",
        "Reflection only increases after patients already feel better",
      ],
    },
    correctAnswer:
      "Because the rise in reflection reliably comes before the symptom drop, it more likely drives the improvement than the reverse, though the timing must be pinned down; test whether early gains in reflection predict later symptom change but not vice versa, whether sessions that boost reflection are followed by steeper symptom drops, and whether an intervention targeting reflection alone improves symptoms.",
    explanation:
      "Full credit uses the time order to argue reflection mediates relief and names a which-comes-first test that would refute it; 'we can never know what causes what' is the dodge the reliable ordering defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "After a course of psychodynamic therapy, a group of frequent medical-clinic users sharply cut their number of doctor visits and sick days over the next year. A manager asks whether they would have settled down anyway. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The patients seem to use the clinic less afterward.",
        credit: 0.3,
      },
      {
        text: "The therapy may have reduced the distress that drove the excess visits, but the 'they'd settle anyway' worry means a comparison group is essential; test whether a matched untreated group of equally frequent users drops their visits as much, whether the reduction tracks how much each patient improved psychologically, and whether the savings persist into a second year.",
        credit: 1.0,
      },
      {
        text: "Therapy might cut their medical use; we could check their records again later.",
        credit: 0.6,
      },
      {
        text: "Health costs have nothing to do with therapy, so this tells us nothing about whether it works.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'the therapy cut the visits' lead from the rival 'they would have settled on their own,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: follow a matched group of equally frequent users who didn't get therapy over the same year — if only the treated group's visits fall, the therapy, not natural settling, drove the drop. My lead is refuted if the untreated heavy users reduce their visits just as much.",
      yieldAnchors: [
        "Patients were frequent medical-clinic users",
        "Their visits and sick days fell after therapy",
        "The drop followed the treatment",
      ],
      riskAnchors: [
        "A matched untreated group does not drop as much",
        "The reduction tracks psychological improvement",
        "The savings persist into a second year",
      ],
      defeatedBy: [
        "Equally frequent untreated users cut visits just as much",
        "The decline reflects routine year-to-year fluctuation",
      ],
    },
    correctAnswer:
      "The therapy may have reduced the distress that drove the excess visits, but the 'they'd settle anyway' worry means a comparison group is essential; test whether a matched untreated group of equally frequent users drops their visits as much, whether the reduction tracks how much each patient improved psychologically, and whether the savings persist into a second year.",
    explanation:
      "Full credit ties reduced medical use to relieved distress while naming the natural-settling confound and a matched-group test that would refute it; 'costs have nothing to do with therapy' is the refusal the visit drop defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A year after stopping treatment, patients who had psychodynamic therapy have relapsed far less than patients who had medication. A reviewer suspects the medication group may have been more severely ill to begin with. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The therapy likely confers more lasting protection than medication once treatment stops, but the severity worry means baseline illness must be checked, ideally with random assignment; test whether the groups were equally severe at the start, whether the therapy group's durability holds in a randomized trial, and whether restarting medication restores the drug group's gains.",
        credit: 1.0,
      },
      {
        text: "Therapy might last longer; we could compare how sick each group started.",
        credit: 0.6,
      },
      {
        text: "Two different treatments can't be compared at all, so the relapse difference means nothing.",
        credit: 0,
      },
      {
        text: "The therapy group seems to relapse less.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'therapy gives more durable protection' lead from the rival 'the medication group was simply sicker to start,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: compare the two groups' baseline severity, or better, randomly assign patients to therapy or medication so starting illness is balanced — an equal durability advantage under random assignment points to the therapy. My lead is refuted if the medication group was markedly sicker at baseline and the gap disappears once severity is matched.",
      yieldAnchors: [
        "Both groups improved during treatment",
        "The therapy group relapsed less after stopping",
        "The difference emerged after treatment ended",
      ],
      riskAnchors: [
        "The groups were equally severe at baseline",
        "The durability holds under random assignment",
        "Restarting medication restores the drug group's gains",
      ],
      defeatedBy: [
        "The medication group was much sicker at the start",
        "The gap vanishes once baseline severity is matched",
      ],
    },
    correctAnswer:
      "The therapy likely confers more lasting protection than medication once treatment stops, but the severity worry means baseline illness must be checked, ideally with random assignment; test whether the groups were equally severe at the start, whether the therapy group's durability holds in a randomized trial, and whether restarting medication restores the drug group's gains.",
    explanation:
      "Full credit reads the durability gap as lasting protection while naming the baseline-severity confound and a randomized test that would refute it; 'two treatments can't be compared' is the dodge the clean relapse difference defeats.",
  },
];

const written: HomeworkItem[] = [
  {
    itemType: "written",
    prompt:
      "A careful review pools dozens of randomized trials of psychodynamic therapy and finds a moderate average benefit over control conditions — and, in the trials with long follow-ups, the benefit is as large or larger years after treatment ended. In one paragraph, propose the strongest conclusion about whether and how the therapy works, and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that psychodynamic therapy produces a genuine, moderate benefit that not only holds but often grows after treatment, suggesting it equips patients with insight or skills they keep using rather than offering only temporary relief. This is a strong claim because it predicts checkable consequences: the effect should survive when only the most rigorous, pre-registered trials are kept and when corrections are made for unpublished negative studies; the long-term growth should appear only in patients who continue to apply what they learned, not in untreated comparison groups followed the same way; and trials with active control conditions should still show added benefit beyond attention alone. I would test it by re-running the meta-analysis restricted to blinded, pre-registered trials, by checking the follow-up gains against matched untreated samples, and by examining whether the late growth tracks patients' reported use of their insights.",
      yieldAnchors: [
        "Dozens of randomized trials show a moderate benefit",
        "The benefit holds at long follow-up",
        "In some trials it grows after treatment ends",
      ],
      riskAnchors: [
        "The effect survives keeping only rigorous, pre-registered trials",
        "The late growth is absent in untreated comparison groups",
        "Active-control trials still show added benefit",
      ],
      defeatedBy: [
        "The benefit disappears once weak studies are excluded",
        "Untreated people improve just as much over the same years",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that psychodynamic therapy produces a genuine, moderate benefit that not only holds but often grows after treatment, suggesting it equips patients with insight or skills they keep using rather than offering only temporary relief. This is a strong claim because it predicts checkable consequences: the effect should survive when only the most rigorous, pre-registered trials are kept and when corrections are made for unpublished negative studies; the long-term growth should appear only in patients who continue to apply what they learned, not in untreated comparison groups followed the same way; and trials with active control conditions should still show added benefit beyond attention alone. I would test it by re-running the meta-analysis restricted to blinded, pre-registered trials, by checking the follow-up gains against matched untreated samples, and by examining whether the late growth tracks patients' reported use of their insights.",
    explanation:
      "Under the inverted standard the cautious 'therapy is too personal to measure' earns near-zero; top credit goes to the genuine-and-growing-benefit conclusion that commits to a sleeper-effect mechanism and names a rigorous-trial-only re-analysis that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "In a randomized trial, patients meeting a warm clinician for supportive listening improve, but patients getting the same amount of time in psychodynamic therapy — with active interpretive work — improve reliably more, especially on measures of how they handle relationships. In one paragraph, propose the strongest conclusion about what is driving the extra benefit, and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that the specific interpretive work, not just warmth and attention, adds real benefit, since both groups got equal time with a caring clinician yet only the interpretive group gained more, particularly in relational functioning. This is a strong claim because it predicts checkable consequences: the extra benefit should concentrate on the relational outcomes the interpretation targets rather than spreading evenly; sessions with more accurate interpretation should yield more change even within the psychodynamic group; and matching the two conditions still more tightly on therapist warmth and experience should not erase the gap. I would test it by comparing outcome profiles across the two arms, by coding session recordings to relate interpretation to improvement, and by replicating with therapists rated equally warm in both conditions.",
      yieldAnchors: [
        "Both groups had equal time with a warm clinician",
        "The interpretive group improved more",
        "The extra gain showed most in relationship measures",
      ],
      riskAnchors: [
        "The added benefit concentrates on targeted relational outcomes",
        "More accurate interpretation predicts more change",
        "The gap survives matching therapist warmth and experience",
      ],
      defeatedBy: [
        "The two groups improve identically once warmth is matched",
        "Supportive listening alone produces the same relational gains",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that the specific interpretive work, not just warmth and attention, adds real benefit, since both groups got equal time with a caring clinician yet only the interpretive group gained more, particularly in relational functioning. This is a strong claim because it predicts checkable consequences: the extra benefit should concentrate on the relational outcomes the interpretation targets rather than spreading evenly; sessions with more accurate interpretation should yield more change even within the psychodynamic group; and matching the two conditions still more tightly on therapist warmth and experience should not erase the gap. I would test it by comparing outcome profiles across the two arms, by coding session recordings to relate interpretation to improvement, and by replicating with therapists rated equally warm in both conditions.",
    explanation:
      "The inverted standard gives near-zero to 'attention is all that helps'; credit goes to the specific-ingredient conclusion that names the matched-warmth design and a targeted-outcome test as its own refutation.",
  },
  {
    itemType: "written",
    prompt:
      "Across many patients, improvement rises steadily with the number of psychodynamic sessions and then levels off, with most of the gain arriving in the earlier sessions and little added by very long courses. In one paragraph, propose the strongest conclusion about the relationship between dose and benefit, and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that the therapy delivers real, accumulating benefit per session up to a point of diminishing returns, where additional sessions add little — a pattern that points to the treatment itself doing graded work rather than to chance or to who happens to stay. This is a strong claim because it predicts checkable consequences: randomly assigning patients to shorter versus longer courses should reproduce the rising-then-flattening curve; the link should survive adjusting for how severe patients were at the start, ruling out the worry that sicker patients merely stay longer; and the plateau should fall near the same number of sessions across different problems. I would test it by running a randomized dose-comparison trial, by statistically controlling for baseline severity in the observational data, and by checking whether the plateau replicates across disorders.",
      yieldAnchors: [
        "Improvement rises with number of sessions",
        "Most gain arrives early",
        "The curve levels off for very long courses",
      ],
      riskAnchors: [
        "Randomly assigned dose reproduces the curve",
        "The link survives adjusting for baseline severity",
        "The plateau falls near the same point across problems",
      ],
      defeatedBy: [
        "Extra sessions add nothing once severity is controlled",
        "Dose merely reflects how sick patients were",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that the therapy delivers real, accumulating benefit per session up to a point of diminishing returns, where additional sessions add little — a pattern that points to the treatment itself doing graded work rather than to chance or to who happens to stay. This is a strong claim because it predicts checkable consequences: randomly assigning patients to shorter versus longer courses should reproduce the rising-then-flattening curve; the link should survive adjusting for how severe patients were at the start, ruling out the worry that sicker patients merely stay longer; and the plateau should fall near the same number of sessions across different problems. I would test it by running a randomized dose-comparison trial, by statistically controlling for baseline severity in the observational data, and by checking whether the plateau replicates across disorders.",
    explanation:
      "The cautious 'dose can never be untangled from severity' is the dodge the orderly curve strains; top credit goes to the accumulating-benefit conclusion that names a randomized dose trial and a severity adjustment that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "An enthusiastic research group publishes a single, un-blinded study reporting an unusually large benefit from their own brand of psychodynamic therapy, measured mostly by patients' self-reports. In one paragraph, propose the strongest conclusion about how much weight to give this result, and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that this result probably overstates the true effect, because an un-blinded study run by believers and resting on self-report is exactly the design most vulnerable to allegiance and expectation, so the real effect is likely smaller. This is a strong claim because it predicts checkable consequences: an independent team using blind outcome raters should find a smaller effect; pre-registering the analysis should shrink it further; and adding objective outcomes like return-to-work or clinician ratings should pull the estimate down toward a modest benefit. I would test it by commissioning a blinded, pre-registered replication by a neutral lab, by adding objective measures alongside self-report, and by comparing the effect against the average from independent trials of similar therapies.",
      yieldAnchors: [
        "A single study reports an unusually large benefit",
        "It was un-blinded and run by enthusiasts",
        "Outcomes rested mostly on self-report",
      ],
      riskAnchors: [
        "An independent blinded team finds a smaller effect",
        "Pre-registration shrinks the estimate",
        "Objective outcomes pull the effect down",
      ],
      defeatedBy: [
        "The large effect replicates under blind, pre-registered conditions",
        "Objective measures match the enthusiastic self-reports",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that this result probably overstates the true effect, because an un-blinded study run by believers and resting on self-report is exactly the design most vulnerable to allegiance and expectation, so the real effect is likely smaller. This is a strong claim because it predicts checkable consequences: an independent team using blind outcome raters should find a smaller effect; pre-registering the analysis should shrink it further; and adding objective outcomes like return-to-work or clinician ratings should pull the estimate down toward a modest benefit. I would test it by commissioning a blinded, pre-registered replication by a neutral lab, by adding objective measures alongside self-report, and by comparing the effect against the average from independent trials of similar therapies.",
    explanation:
      "The 'this proves the therapy is excellent' overreach is exactly what allegiance and un-blinded self-report defeat; top credit goes to the likely-overstated conclusion that names a blinded independent replication as its own refutation.",
  },
  {
    itemType: "written",
    prompt:
      "Patients who complete psychodynamic therapy show, beyond fewer symptoms, steadier relationships and better stress tolerance, and the pattern repeats when the therapy is tried unchanged with a very different population in another country. In one paragraph, propose the strongest conclusion about the scope of the therapy's effects, and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that the therapy produces broad changes in personality and relating that go beyond symptom relief and rest on widely shared human processes, since the gains extend past checklists and reappear in a very different population. This is a strong claim because it predicts checkable consequences: the relational and coping gains should appear even in patients whose symptom scores barely move; they should hold at long-term follow-up rather than fading; and the therapy should keep working across several more cultures and age groups, especially when delivered by local therapists. I would test it by measuring relational and coping outcomes separately from symptoms, by following patients for years after treatment, and by replicating the trial across additional populations to find any setting where it fails and why.",
      yieldAnchors: [
        "Patients gain steadier relationships and stress tolerance",
        "The gains exceed symptom relief",
        "The pattern repeats in a very different population",
      ],
      riskAnchors: [
        "Relational gains appear even when symptoms barely move",
        "The broad changes hold at long-term follow-up",
        "The therapy replicates across more cultures and ages",
      ],
      defeatedBy: [
        "Only symptom scores change, with no broader effect",
        "The benefit fails to appear in any other population",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that the therapy produces broad changes in personality and relating that go beyond symptom relief and rest on widely shared human processes, since the gains extend past checklists and reappear in a very different population. This is a strong claim because it predicts checkable consequences: the relational and coping gains should appear even in patients whose symptom scores barely move; they should hold at long-term follow-up rather than fading; and the therapy should keep working across several more cultures and age groups, especially when delivered by local therapists. I would test it by measuring relational and coping outcomes separately from symptoms, by following patients for years after treatment, and by replicating the trial across additional populations to find any setting where it fails and why.",
    explanation:
      "The cautious 'anything beyond a symptom score is too vague to count' is the refusal the measured relational gains defeat; top credit goes to the broad-and-general-change conclusion that names a symptoms-barely-move test and cross-population replication that could refute it.",
  },
];

export const section: SectionContent = {
  slug: "does-it-work-evidence",
  title: "Does It Work? The Evidence",
  weekNumber: 1,
  blurb:
    "Does psychodynamic therapy actually help? We learn to read outcome research — effect sizes, randomized trials, the sleeper effect, dose-response, and the confounds that fool the unwary — and to commit to the strongest conclusion the data supports.",
  lectureTitle:
    "1.7 Does It Work? Reading the evidence for psychodynamic therapy",
  body: `# Does It Work? The Evidence

It is one thing to describe what happens in psychodynamic therapy and another to ask whether it works. "Works" is a research question, and like any research question it has to be answered with evidence rather than enthusiasm or suspicion. This section is about reading that evidence well: knowing what a result can and cannot show, committing to the strongest conclusion the data actually supports, and naming the cheap check that would prove you wrong.

## Asking the question fairly

The first temptation is to settle the matter by gut feeling — true believers say it obviously transforms lives, skeptics say it is unmeasurable hand-holding. Both skip the work. A fair test compares people who got the therapy with people who didn't, measures real outcomes, and asks whether the difference is bigger than what would happen anyway. The unhelpful dodge in this whole area is "therapy is too personal and complex to measure, so the data tells us nothing." That sounds humble but it is a refusal: distress, relationships, work, and sick days are all measurable, and a refusal to look is not the same as caution.

## Effect sizes and control groups

To say a treatment "works" you need a yardstick. An **effect size** captures how big the improvement is, not just whether it exists, and it only means something against a **control group** — people who waited, got no treatment, or got a different treatment. If a treated group improves and a waiting-list group doesn't over the same months, the gap is evidence the therapy did something, because both groups had the same time to recover on their own. The strongest conclusion commits to "the therapy caused the gain" and then names a test: the waiting-list group should catch up once it finally gets treated.

## The sleeper effect and durability

A striking finding in this literature is the **sleeper effect**: patients are better at the end of therapy, and better still a year or two later, long after the sessions stop. That pattern fits the idea that the therapy plants insight or skills people keep using on their own. It is a strong claim precisely because it is checkable — the late growth should appear only in patients who keep applying what they learned, and should be absent in an untreated comparison group followed the same way. **Durability** matters too: when therapy and medication both help but the medication group relapses faster after stopping, the natural reading is that therapy teaches something the patient carries forward.

## Dose, comparison, and convergence

Two more tools sharpen the picture. **Dose-response** asks whether more sessions bring more benefit in an orderly way; when they do, that orderliness suggests the therapy itself is doing graded work — though you must rule out that sicker patients simply stay longer. **Comparison** to an established therapy tells you where psychodynamic work stands; importantly, two active treatments coming out equal is *not* the same as neither working, especially if both beat a no-treatment arm. And **converging evidence** — independent teams, different samples, different methods, all landing on the same moderate benefit — is the hardest thing to explain away, because one biased group or one odd sample can't produce agreement across many.

## Spotting confounds

Most bad conclusions in outcome research come from **confounds** — hidden differences that masquerade as treatment effects. People who *choose* therapy may be more motivated or less ill to begin with (selection). Studies run by believers tend to report bigger effects (allegiance). Counting only patients who finished hides those who quit because they weren't improving (attrition). People recruited at their worst tend to drift back toward normal on their own (regression to the mean). The expert move is not to throw up your hands but to name the specific confound and the cheap fix: randomize to balance selection, blind the raters to defeat allegiance, count everyone who started to handle dropout, and add an untreated group enrolled at the same low point to separate therapy from natural rebound.

## Reading a study like a scientist

Put it together and the habit is the same one this course has trained all along. Don't stop at "patients improved." Commit to the strongest supported claim — *the therapy caused a real, lasting benefit through specific work* — and then say exactly which result would overturn it: a waiting-list group that improves just as much, an effect that vanishes once weak studies are dropped, a gap that disappears when raters are blinded. A conclusion that names its own refutation is worth far more than a cautious shrug or a triumphant overreach.

## In the real world

Suppose a friend reads a headline: "New study proves talk therapy beats medication." Before celebrating or scoffing, ask the questions this section drills. Was it randomized, or did patients choose? Who ran it, and were the raters blind? Did they count the dropouts? Was the comparison a real alternative or an empty waitlist? Did the benefit last at follow-up? Each question points to a cheap check, and each could change the verdict. That is what reading evidence buys you — not blind faith that therapy works and not lazy doubt that nothing can be known, but a testable judgment about how strong the case really is and what would change your mind.`,
  homework: {
    mcq,
    hybrid,
    written,
  },
};
