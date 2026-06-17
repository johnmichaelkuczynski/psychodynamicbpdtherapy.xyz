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
      "A clinic runs a trial for borderline personality disorder (BPD): patients are randomly assigned either to a year of mentalization-based therapy (MBT) or to the usual care the clinic already offered. Eighteen months later, the MBT group has far fewer self-harm episodes and hospital admissions than the usual-care group. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The MBT patients did better than the usual-care patients.",
        credit: 0.3,
      },
      {
        text: "Because patients were randomly assigned, the two groups should have started out comparable, so the larger drop in self-harm and admissions in the MBT arm is good evidence that MBT itself caused the improvement rather than chance or who-chose-what; test whether the gap holds when independent raters blind to group count the episodes, whether it survives at longer follow-up, and whether it shrinks once any baseline difference in severity between the arms is adjusted for.",
        credit: 1.0,
      },
      {
        text: "MBT probably helped these patients; we could look into using it more.",
        credit: 0.6,
      },
      {
        text: "Therapy outcomes can't really be measured and all therapies work about the same anyway, so the difference tells us nothing.",
        credit: 0,
      },
    ],
    correctAnswer:
      "Because patients were randomly assigned, the two groups should have started out comparable, so the larger drop in self-harm and admissions in the MBT arm is good evidence that MBT itself caused the improvement rather than chance or who-chose-what; test whether the gap holds when independent raters blind to group count the episodes, whether it survives at longer follow-up, and whether it shrinks once any baseline difference in severity between the arms is adjusted for.",
    explanation:
      "Top credit reads random-assignment-plus-a-group-difference as causal evidence for MBT and names a blind-rater/baseline-adjustment test; \"therapy can't be measured and all treatments are equal\" is the dodge the randomized design and clear gap defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "A therapist reports that 20 of her BPD patients all \"felt much better\" after a year of her own brand of psychodynamic therapy — but there was no comparison group, and the patients were the ones who chose to stay in treatment with her. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Twenty patients all improving proves her therapy works and is clearly the best treatment for BPD.",
        credit: 0,
      },
      {
        text: "Her patients said they felt better after a year.",
        credit: 0.3,
      },
      {
        text: "The improvement may be real, but with no comparison group and only patients who chose to stay, we can't tell whether the therapy caused it rather than time, hope, or the fact that the ones who quit aren't counted; the cheapest fix is to add a control group who get usual care and randomly assign patients to each — if her therapy still beats the control, the claim stands, and if the gap vanishes, it was never the therapy.",
        credit: 1.0,
      },
      {
        text: "It sounds like her therapy may help; we might study it further.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The improvement may be real, but with no comparison group and only patients who chose to stay, we can't tell whether the therapy caused it rather than time, hope, or the fact that the ones who quit aren't counted; the cheapest fix is to add a control group who get usual care and randomly assign patients to each — if her therapy still beats the control, the claim stands, and if the gap vanishes, it was never the therapy.",
    explanation:
      "Full credit reads the uncontrolled, self-selected report as too weak to attribute the improvement and names an add-a-randomized-control test; \"twenty improved so it's proven and best\" is the overreach the missing comparison group defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A head-to-head trial randomly assigns BPD patients to either DBT or MBT. After two years both groups show large, similar drops in self-harm and emergency-room visits, with no meaningful difference between them. A reviewer writes: \"This proves only DBT works for BPD.\" Which conclusion best follows?",
    mcOptions: [
      {
        text: "The reviewer is right — DBT is the only thing that works for BPD.",
        credit: 0,
      },
      {
        text: "Since both arms improved by similar large amounts from a randomized start, the evidence supports that MBT and DBT are both effective for BPD, not that one is uniquely so; test whether the equivalence holds at longer follow-up, whether it repeats in another sample, and whether it survives when blind raters score the outcomes — if MBT keeps matching DBT, \"only DBT works\" is refuted.",
        credit: 1.0,
      },
      {
        text: "Both groups got better by about the same amount.",
        credit: 0.3,
      },
      {
        text: "It looks like both therapies might help; we could consider either.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Since both arms improved by similar large amounts from a randomized start, the evidence supports that MBT and DBT are both effective for BPD, not that one is uniquely so; test whether the equivalence holds at longer follow-up, whether it repeats in another sample, and whether it survives when blind raters score the outcomes — if MBT keeps matching DBT, \"only DBT works\" is refuted.",
    explanation:
      "Top credit reads two-arms-improving-equally as evidence both treatments work and names a does-the-equivalence-replicate test; \"only DBT works\" is the overreach the matched MBT results defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "In a trial comparing transference-focused psychotherapy (TFP) with a supportive therapy, both groups felt less distressed — but only the TFP group showed measured gains in \"reflective functioning\" (the ability to think about minds) and a more integrated sense of identity on a standardized interview. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The TFP group improved on the mind-reading measure and the supportive group didn't.",
        credit: 0.3,
      },
      {
        text: "TFP may produce some deeper changes; we could look at that more.",
        credit: 0.6,
      },
      {
        text: "Because both arms eased distress but only TFP moved reflective functioning and identity integration, the evidence supports that TFP produces a specific structural change supportive therapy does not, not merely general relief; test whether that reflective-functioning gain predicts who stays well later, whether it shows up again in a new sample, and whether it disappears when an independent interviewer scores the recordings blind.",
        credit: 1.0,
      },
      {
        text: "All therapies are really the same underneath, so a difference on one measure means nothing.",
        credit: 0,
      },
    ],
    correctAnswer:
      "Because both arms eased distress but only TFP moved reflective functioning and identity integration, the evidence supports that TFP produces a specific structural change supportive therapy does not, not merely general relief; test whether that reflective-functioning gain predicts who stays well later, whether it shows up again in a new sample, and whether it disappears when an independent interviewer scores the recordings blind.",
    explanation:
      "Full credit reads the TFP-only gain in reflective functioning/identity as a specific structural effect and names a does-it-predict-staying-well test; \"all therapies are the same\" is the dodge the measured, TFP-specific difference defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "Eight years after a course of MBT ended, former patients are interviewed: most are working or studying, few have been rehospitalized, and self-harm is rare — and these gains are larger than in a comparison group who had received only standard care in the same era. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Gains this far past the end of treatment, and larger than the comparison group's, are good evidence that MBT produced durable, structural change rather than a temporary lift while in therapy; test whether the difference holds when employment and hospital records are checked against documents rather than self-report, whether it survives matching the groups on baseline severity, and whether it fades if the comparison group turns out to have been sicker to begin with.",
        credit: 1.0,
      },
      {
        text: "The gains seem to have lasted; we could keep following them.",
        credit: 0.6,
      },
      {
        text: "The former MBT patients are mostly doing well eight years on.",
        credit: 0.3,
      },
      {
        text: "People with BPD just get better on their own with age, so the therapy gets no credit and nothing can really be concluded.",
        credit: 0,
      },
    ],
    correctAnswer:
      "Gains this far past the end of treatment, and larger than the comparison group's, are good evidence that MBT produced durable, structural change rather than a temporary lift while in therapy; test whether the difference holds when employment and hospital records are checked against documents rather than self-report, whether it survives matching the groups on baseline severity, and whether it fades if the comparison group turns out to have been sicker to begin with.",
    explanation:
      "Top credit reads durable, comparison-beating gains as evidence of structural change and names a check-records-and-match-severity test; \"they'd recover anyway, so nothing can be concluded\" is the dodge the comparison group's worse outcome defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A clinician insists \"nothing actually works for borderline personality disorder — it's untreatable.\" You show him a randomized trial in which the psychodynamic-therapy arm had half the self-harm rate of the control arm at follow-up. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He has a point — BPD is basically untreatable, so the trial can't mean much.",
        credit: 0,
      },
      {
        text: "The therapy arm had less self-harm than the control arm.",
        credit: 0.3,
      },
      {
        text: "The randomized halving of self-harm relative to a control directly contradicts \"nothing works\" — it is evidence the therapy reduced self-harm for these patients; test whether the effect repeats in other trials, whether it holds when raters are blind to group, and whether it shrinks once you account for any difference in baseline severity between the arms.",
        credit: 1.0,
      },
      {
        text: "It seems BPD may be treatable after all; we could read more trials.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The randomized halving of self-harm relative to a control directly contradicts \"nothing works\" — it is evidence the therapy reduced self-harm for these patients; test whether the effect repeats in other trials, whether it holds when raters are blind to group, and whether it shrinks once you account for any difference in baseline severity between the arms.",
    explanation:
      "Full credit reads the randomized halving of self-harm as direct evidence the treatment works and names a does-it-replicate test; \"BPD is untreatable\" is the dodge the controlled result defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A trial finds that BPD patients in TFP had markedly fewer suicide attempts than controls over a year. A newspaper headline declares: \"Psychodynamic therapy CURES borderline personality disorder.\" Which conclusion best follows?",
    mcOptions: [
      {
        text: "The therapy seemed to help with suicide attempts; the headline may be a bit strong.",
        credit: 0.6,
      },
      {
        text: "The data support a specific, bounded claim — TFP reduced suicide attempts versus controls — but \"cures BPD\" goes far beyond what was measured, since the trial tracked one outcome over one year, not the disappearance of the whole disorder; test the real claim by seeing whether the suicide-attempt gap replicates and holds at longer follow-up, and judge \"cure\" only against measures of identity, relationships, and remission the study never reported.",
        credit: 1.0,
      },
      {
        text: "Patients in TFP had fewer suicide attempts than controls.",
        credit: 0.3,
      },
      {
        text: "The headline is right: the therapy cures BPD.",
        credit: 0,
      },
    ],
    correctAnswer:
      "The data support a specific, bounded claim — TFP reduced suicide attempts versus controls — but \"cures BPD\" goes far beyond what was measured, since the trial tracked one outcome over one year, not the disappearance of the whole disorder; test the real claim by seeing whether the suicide-attempt gap replicates and holds at longer follow-up, and judge \"cure\" only against measures of identity, relationships, and remission the study never reported.",
    explanation:
      "Top credit commits to the bounded finding (fewer suicide attempts) while rejecting \"cure\" as beyond the measured outcome, and names a replication test; \"it cures BPD\" is the overreach the single one-year outcome defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "Two BPD programs are compared in a randomized trial: a structured psychodynamic program and usual care. A year in, far fewer patients dropped out of the structured program, and dropping out is known to predict worse outcomes for BPD. Which conclusion best follows?",
    mcOptions: [
      {
        text: "More patients stayed in the structured program than in usual care.",
        credit: 0.3,
      },
      {
        text: "Dropping out is just personal choice and can't be pinned on a program, so this number means nothing.",
        credit: 0,
      },
      {
        text: "Because patients were randomized, the lower dropout in the structured program is evidence the program itself holds patients better — a real advantage, since staying in treatment predicts better outcomes; test whether the retention gap repeats in another sample, whether the retained patients actually end up better off, and whether it disappears if the structured arm happened to enroll less severe patients despite randomization.",
        credit: 1.0,
      },
      {
        text: "The structured program may keep people engaged; we could explore why.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Because patients were randomized, the lower dropout in the structured program is evidence the program itself holds patients better — a real advantage, since staying in treatment predicts better outcomes; test whether the retention gap repeats in another sample, whether the retained patients actually end up better off, and whether it disappears if the structured arm happened to enroll less severe patients despite randomization.",
    explanation:
      "Full credit reads randomized lower dropout as evidence the program retains patients better and names a do-the-retained-patients-do-better test; \"dropping out is just personal choice\" is the dodge the randomized design defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "An RCT of MBT for BPD shows a clear drop in self-harm versus the control group, but no difference between groups in whether patients were employed at the end. Which conclusion best follows?",
    mcOptions: [
      {
        text: "MBT helped with some things but maybe not others; we could look closer.",
        credit: 0.6,
      },
      {
        text: "Self-harm went down but employment didn't change.",
        credit: 0.3,
      },
      {
        text: "The evidence supports a specific claim — MBT reduced self-harm but did not, in this trial and time frame, improve employment — so the honest read commits to the symptom benefit while not claiming a work benefit the data don't show; test this by checking whether employment differs at longer follow-up (work may lag symptom change), whether the self-harm effect replicates, and whether a larger sample would reveal a small employment effect this one missed.",
        credit: 1.0,
      },
      {
        text: "Since it didn't fix everything, MBT clearly doesn't work for BPD at all.",
        credit: 0,
      },
    ],
    correctAnswer:
      "The evidence supports a specific claim — MBT reduced self-harm but did not, in this trial and time frame, improve employment — so the honest read commits to the symptom benefit while not claiming a work benefit the data don't show; test this by checking whether employment differs at longer follow-up (work may lag symptom change), whether the self-harm effect replicates, and whether a larger sample would reveal a small employment effect this one missed.",
    explanation:
      "Top credit commits to the domain-specific finding (self-harm down, employment unchanged) and names a check-employment-at-longer-follow-up test; \"it didn't fix everything so it doesn't work\" is the overreach the clear self-harm benefit defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "In an MBT trial, the patients whose mentalizing capacity improved the most over treatment were also the ones whose self-harm dropped the most, while patients whose mentalizing didn't change improved little. Which conclusion best follows?",
    mcOptions: [
      {
        text: "You can't really connect an inner thing like mentalizing to behavior, so this pattern is meaningless.",
        credit: 0,
      },
      {
        text: "The tight link between gains in mentalizing and drops in self-harm is evidence that improving mentalizing is part of how MBT works — the mechanism the therapy targets is tracking the outcome it aims at, not just two unrelated numbers; test whether the mentalizing gain comes before the self-harm drop in time, whether boosting mentalizing experimentally moves self-harm, and whether the link vanishes once you control for general distress dropping in everyone.",
        credit: 1.0,
      },
      {
        text: "Patients who mentalized better also self-harmed less.",
        credit: 0.3,
      },
      {
        text: "Mentalizing might be involved in the improvement; we could study it.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The tight link between gains in mentalizing and drops in self-harm is evidence that improving mentalizing is part of how MBT works — the mechanism the therapy targets is tracking the outcome it aims at, not just two unrelated numbers; test whether the mentalizing gain comes before the self-harm drop in time, whether boosting mentalizing experimentally moves self-harm, and whether the link vanishes once you control for general distress dropping in everyone.",
    explanation:
      "Full credit reads the mentalizing–self-harm coupling as evidence for the proposed mechanism and names a does-mentalizing-change-come-first test; \"you can't connect an inner thing to behavior\" is the dodge the matched pattern defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "Two reports land on your desk. Report A: BPD patients in a psychodynamic therapy improved a lot over a year, with no comparison group. Report B: BPD patients randomly assigned to the same therapy improved more than a randomly assigned control group. A colleague says both equally prove the therapy works. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Both reports show patients getting better.",
        credit: 0.3,
      },
      {
        text: "Report B is probably a bit stronger; we could weigh them.",
        credit: 0.6,
      },
      {
        text: "Evidence is evidence, so the two reports count exactly the same.",
        credit: 0,
      },
      {
        text: "Report B is far stronger because its random control group rules out time, hope, and self-selection as explanations, while Report A's improvement could be any of those — so only B supports the claim that the therapy caused the gain; test by checking whether B's effect replicates and survives blind rating, and treat A as a lead worth confirming rather than as proof.",
        credit: 1.0,
      },
    ],
    correctAnswer:
      "Report B is far stronger because its random control group rules out time, hope, and self-selection as explanations, while Report A's improvement could be any of those — so only B supports the claim that the therapy caused the gain; test by checking whether B's effect replicates and survives blind rating, and treat A as a lead worth confirming rather than as proof.",
    explanation:
      "Top credit ranks the randomized-controlled Report B above the uncontrolled Report A and names a replication/blind-rating test; \"the two count the same\" is the dodge the missing control in A defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A health system compares BPD patients randomly given a year of MBT against those given usual care. Over the next three years the MBT group spent far fewer days in hospital — a difference visible in the system's own admission records, not just patient reports. Which conclusion best follows?",
    mcOptions: [
      {
        text: "MBT may cut hospital use; we could look at the numbers more.",
        credit: 0.6,
      },
      {
        text: "A randomized difference in actual recorded hospital days over three years is strong evidence MBT reduced hospitalization, since the records sidestep memory and wishful reporting and randomization balances the groups; test whether the gap holds after matching for baseline admissions, whether it persists in a second health system, and whether it shrinks if the usual-care group happened to have less access to beds.",
        credit: 1.0,
      },
      {
        text: "Hospital admissions depend on so many things that you can never attribute them to a therapy.",
        credit: 0,
      },
      {
        text: "The MBT group spent fewer days in hospital than the usual-care group.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "A randomized difference in actual recorded hospital days over three years is strong evidence MBT reduced hospitalization, since the records sidestep memory and wishful reporting and randomization balances the groups; test whether the gap holds after matching for baseline admissions, whether it persists in a second health system, and whether it shrinks if the usual-care group happened to have less access to beds.",
    explanation:
      "Full credit reads randomized, records-based fewer hospital days as strong evidence MBT cut hospitalization and names a match-baseline/second-system test; \"admissions depend on too much to attribute\" is the dodge the randomized record-based gap defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A psychodynamic BPD program beat a waitlist (people waiting with no treatment) on self-harm. The authors conclude it is \"better than other active treatments for BPD.\" Which conclusion best follows?",
    mcOptions: [
      {
        text: "Beating a waitlist proves it's the best active treatment for BPD.",
        credit: 0,
      },
      {
        text: "The program did better than the waitlist group.",
        credit: 0.3,
      },
      {
        text: "Beating a waitlist shows the program helps more than no treatment, but says nothing about how it compares to other real treatments, since a waitlist controls only for time, not for the attention and structure any therapy provides — so \"better than other active treatments\" is unsupported; test the bigger claim by running it head-to-head against an established treatment like DBT, where only a win would justify the authors' words.",
        credit: 1.0,
      },
      {
        text: "It beat the waitlist, so it probably works, though the comparison may be limited.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Beating a waitlist shows the program helps more than no treatment, but says nothing about how it compares to other real treatments, since a waitlist controls only for time, not for the attention and structure any therapy provides — so \"better than other active treatments\" is unsupported; test the bigger claim by running it head-to-head against an established treatment like DBT, where only a win would justify the authors' words.",
    explanation:
      "Top credit commits to the supported claim (beats no treatment) while rejecting \"best active treatment\" as needing a head-to-head test; \"beating a waitlist proves it's best\" is the overreach the weak comparison defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A psychodynamic BPD treatment showed a big benefit in one small trial. Three later, larger trials by independent teams found the same benefit. A skeptic says \"one study is never enough to believe anything.\" Which conclusion best follows?",
    mcOptions: [
      {
        text: "Several studies found the same benefit.",
        credit: 0.3,
      },
      {
        text: "While the skeptic is right that a lone small trial is weak, the benefit here has now repeated across several larger, independent trials, which is exactly what turns a tentative finding into a dependable one — so the evidence supports that the treatment works; test it further by checking whether a pooled analysis keeps the effect, whether blind raters reproduce it, and whether any failed trials are sitting unpublished.",
        credit: 1.0,
      },
      {
        text: "Since one study is never enough, we still can't conclude anything about this treatment.",
        credit: 0,
      },
      {
        text: "The repeated results are encouraging; we could keep watching the literature.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "While the skeptic is right that a lone small trial is weak, the benefit here has now repeated across several larger, independent trials, which is exactly what turns a tentative finding into a dependable one — so the evidence supports that the treatment works; test it further by checking whether a pooled analysis keeps the effect, whether blind raters reproduce it, and whether any failed trials are sitting unpublished.",
    explanation:
      "Full credit reads independent replication as turning a weak finding into a dependable one and names a check-for-unpublished-failures test; \"one study is never enough, so we know nothing\" is the dodge the multiple replications defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "A trial reports that its TFP group ended with less self-harm than its control group. Reading the methods, you notice the TFP group also started with much milder symptoms than the control group. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The starting difference might matter; we could take the result with caution.",
        credit: 0.6,
      },
      {
        text: "Trials are always biased, so no result from any of them can tell us anything.",
        credit: 0,
      },
      {
        text: "Because the TFP group began milder, its better ending could reflect that head start rather than the therapy, so this particular result is a weak basis for crediting TFP — the cheap fix is to compare each group's change from its own baseline or statistically adjust for starting severity; if TFP's advantage survives that adjustment it stands, and if it vanishes the gap was just the head start.",
        credit: 1.0,
      },
      {
        text: "The TFP group started milder and ended with less self-harm.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "Because the TFP group began milder, its better ending could reflect that head start rather than the therapy, so this particular result is a weak basis for crediting TFP — the cheap fix is to compare each group's change from its own baseline or statistically adjust for starting severity; if TFP's advantage survives that adjustment it stands, and if it vanishes the gap was just the head start.",
    explanation:
      "Top credit reads the baseline imbalance as a rival explanation and names an adjust-for-starting-severity test; \"all trials are biased so nothing tells us anything\" is the dodge that throws out a fixable, checkable problem.",
  },
];

const hybrid: HomeworkItem[] = [
  {
    itemType: "hybrid",
    prompt:
      "A randomized trial assigns BPD patients to MBT or to usual care. Eighteen months later, independent assessors who don't know which group each patient was in count far fewer self-harm episodes in the MBT group. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The MBT group had fewer self-harm episodes.",
        credit: 0.3,
      },
      {
        text: "Random assignment plus blind assessors makes this strong evidence MBT itself reduced self-harm — the groups should have started comparable and the people counting couldn't be swayed by knowing who got what; test whether the effect holds at longer follow-up, whether it repeats in another clinic, and whether it shrinks if a baseline imbalance in severity is found and adjusted for.",
        credit: 1.0,
      },
      {
        text: "MBT may have reduced the self-harm; we could investigate further.",
        credit: 0.6,
      },
      {
        text: "Self-harm is too personal and variable to measure, so the comparison means nothing.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your \"MBT caused the drop in self-harm\" lead from the rival \"the groups differed for some other reason,\" and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: check whether the two groups were actually balanced at baseline on symptom severity and past self-harm — randomization plus a balanced start means the later gap is most plausibly the therapy. My lead is refuted if the MBT group started markedly less severe, or if the self-harm gap disappears once baseline severity is adjusted for.",
      yieldAnchors: [
        "Patients randomly assigned to MBT or usual care",
        "Blind assessors counted the episodes",
        "MBT group had far fewer self-harm episodes",
      ],
      riskAnchors: [
        "The effect holds at longer follow-up",
        "It repeats in another clinic",
        "It survives adjusting for baseline severity",
      ],
      defeatedBy: [
        "The MBT group started much less severe",
        "The gap vanishes after adjusting for baseline",
      ],
    },
    correctAnswer:
      "Random assignment plus blind assessors makes this strong evidence MBT itself reduced self-harm — the groups should have started comparable and the people counting couldn't be swayed by knowing who got what; test whether the effect holds at longer follow-up, whether it repeats in another clinic, and whether it shrinks if a baseline imbalance in severity is found and adjusted for.",
    explanation:
      "Full credit reads randomization-plus-blind-rating as causal evidence for MBT and is paired with a check-baseline-balance test that names its refutation; \"self-harm is too personal to measure\" is the dodge the controlled, blind-rated design defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A workshop leader presents glowing testimonials from BPD clients who improved during her psychodynamic program, but there is no comparison group and clients who left early were not surveyed. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The testimonials prove her program is highly effective for BPD.",
        credit: 0,
      },
      {
        text: "Her clients say they improved.",
        credit: 0.3,
      },
      {
        text: "It sounds promising; we could look at it more carefully.",
        credit: 0.6,
      },
      {
        text: "Without a comparison group and with early leavers excluded, the testimonials can't separate a real treatment effect from time, hope, and counting only the successes, so they support only a hypothesis worth testing, not a claim that the program works; the cheap fix is a randomized comparison against usual care that counts everyone who started, including dropouts.",
        credit: 1.0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your \"this is weak, uncontrolled evidence\" lead from the rival \"this really shows the program works,\" and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: ask whether there was any comparison group and whether everyone who started — including those who dropped out — was counted; testimonials from only the stayers, with nothing to compare against, can't show the program caused anything. My lead is refuted if it turns out there was a randomized control group and all enrolled patients were tracked, with the program still coming out ahead.",
      yieldAnchors: [
        "Glowing testimonials from clients",
        "No comparison group",
        "Early leavers were not surveyed",
      ],
      riskAnchors: [
        "A randomized control changes the picture",
        "Counting dropouts shrinks the apparent benefit",
        "Improvement matches what time alone would give",
      ],
      defeatedBy: [
        "There was a randomized control group all along",
        "All enrolled patients, including dropouts, improved",
      ],
    },
    correctAnswer:
      "Without a comparison group and with early leavers excluded, the testimonials can't separate a real treatment effect from time, hope, and counting only the successes, so they support only a hypothesis worth testing, not a claim that the program works; the cheap fix is a randomized comparison against usual care that counts everyone who started, including dropouts.",
    explanation:
      "Full credit reads the uncontrolled, completer-only testimonials as a hypothesis needing a randomized control and is paired with a count-the-dropouts test that names its refutation; \"the testimonials prove it's highly effective\" is the overreach the missing comparison group defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A trial randomly assigns BPD patients to MBT or DBT. After two years both show similar large reductions in self-harm and hospital visits, with no meaningful gap. An administrator wants to cut MBT because \"DBT is obviously the only real treatment.\" Which conclusion best follows?",
    mcOptions: [
      {
        text: "Both seemed to work; maybe keep both for now.",
        credit: 0.6,
      },
      {
        text: "The administrator is right that DBT is the only real treatment for BPD.",
        credit: 0,
      },
      {
        text: "Two arms improving by similar large amounts from a randomized start is evidence both MBT and DBT work for BPD, so cutting MBT as \"not real\" isn't supported by these data; test whether the equivalence repeats in another trial and holds at longer follow-up, and whether subgroups exist who do better on one than the other — but absent such evidence, both earn their place.",
        credit: 1.0,
      },
      {
        text: "Both groups improved by about the same amount.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your \"both treatments work\" lead from the rival \"only DBT really works,\" and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: compare the two arms' outcomes directly — near-identical large gains from a randomized start mean both worked, not just one. My lead is refuted if a fair head-to-head actually shows DBT consistently beating MBT on the key outcomes.",
      yieldAnchors: [
        "Patients randomized to MBT or DBT",
        "Both showed large drops in self-harm and hospital visits",
        "No meaningful gap between them",
      ],
      riskAnchors: [
        "The equivalence repeats in another trial",
        "It holds at longer follow-up",
        "No subgroup does clearly better on one",
      ],
      defeatedBy: [
        "A fair head-to-head shows DBT consistently beating MBT",
        "MBT's gains disappear at follow-up while DBT's hold",
      ],
    },
    correctAnswer:
      "Two arms improving by similar large amounts from a randomized start is evidence both MBT and DBT work for BPD, so cutting MBT as \"not real\" isn't supported by these data; test whether the equivalence repeats in another trial and holds at longer follow-up, and whether subgroups exist who do better on one than the other — but absent such evidence, both earn their place.",
    explanation:
      "Top credit reads matched gains from a randomized start as evidence both treatments work and is paired with a does-the-equivalence-replicate test that names its refutation; \"only DBT is real\" is the overreach the matched MBT results defeat.",
  },
  {
    itemType: "hybrid",
    prompt:
      "In a trial of TFP versus supportive therapy for BPD, both groups felt less anxious, but only the TFP group showed measured gains in reflective functioning and a more coherent narrative of their own life on a standardized interview. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The TFP group improved on the mind-reading and life-story measures.",
        credit: 0.3,
      },
      {
        text: "Inner changes like these can't be measured, so the difference is meaningless.",
        credit: 0,
      },
      {
        text: "Because both eased anxiety but only TFP moved reflective functioning and life-narrative coherence, the data support that TFP produces a specific structural change beyond general relief — the kind of identity-level change the therapy aims at; test whether that structural gain predicts who stays well, whether it replicates, and whether it survives blind scoring of the interviews.",
        credit: 1.0,
      },
      {
        text: "TFP might do something deeper; we could examine that.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your \"TFP produced a specific structural change\" lead from the rival \"it's just general improvement like the other group's,\" and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: check whether the reflective-functioning and narrative gains appear ONLY in the TFP arm while both arms ease anxiety equally — a change specific to TFP points to a specific mechanism, not general relief. My lead is refuted if the supportive group shows the same structural gains, or if TFP's edge vanishes when an independent rater scores the interviews blind.",
      yieldAnchors: [
        "Both groups felt less anxious",
        "Only TFP gained in reflective functioning",
        "Only TFP gained a more coherent life narrative",
      ],
      riskAnchors: [
        "The structural gain predicts staying well",
        "It replicates in a new sample",
        "It survives blind scoring",
      ],
      defeatedBy: [
        "The supportive group showed the same structural gains",
        "TFP's edge vanishes under blind rating",
      ],
    },
    correctAnswer:
      "Because both eased anxiety but only TFP moved reflective functioning and life-narrative coherence, the data support that TFP produces a specific structural change beyond general relief — the kind of identity-level change the therapy aims at; test whether that structural gain predicts who stays well, whether it replicates, and whether it survives blind scoring of the interviews.",
    explanation:
      "Full credit reads the TFP-only structural gain as a specific mechanism and is paired with a does-it-appear-only-in-TFP test that names its refutation; \"inner changes can't be measured\" is the dodge the standardized, TFP-specific difference defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "Five years after MBT ended, a follow-up finds former patients mostly employed, rarely rehospitalized, and seldom self-harming — and doing clearly better than a comparison group who got standard care back then. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The gains seem to have lasted; we could keep tracking them.",
        credit: 0.6,
      },
      {
        text: "Gains five years past the end of treatment that also beat a comparison group are good evidence MBT produced durable, structural change rather than a temporary in-therapy lift; test whether the employment and hospital figures match official records, whether the groups were similar in baseline severity, and whether the advantage holds once any such difference is adjusted for.",
        credit: 1.0,
      },
      {
        text: "People with BPD just settle down with age, so the therapy can't be credited and nothing's really knowable.",
        credit: 0,
      },
      {
        text: "The former MBT patients are doing better than the comparison group.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your \"MBT produced durable change\" lead from the rival \"they'd have settled down with age anyway,\" and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: compare the MBT group against the standard-care comparison group at the same follow-up age — if aging alone explained it, the comparison group (same age) would have caught up, but they didn't. My lead is refuted if the comparison group ends up just as well, or if the MBT group started much milder and the gap disappears after adjusting for that.",
      yieldAnchors: [
        "Five years after MBT ended",
        "Former patients mostly employed and rarely hospitalized",
        "They beat a standard-care comparison group",
      ],
      riskAnchors: [
        "The figures match official records",
        "The groups were similar at baseline",
        "The advantage survives adjustment",
      ],
      defeatedBy: [
        "The comparison group did just as well",
        "The MBT group started much milder",
      ],
    },
    correctAnswer:
      "Gains five years past the end of treatment that also beat a comparison group are good evidence MBT produced durable, structural change rather than a temporary in-therapy lift; test whether the employment and hospital figures match official records, whether the groups were similar in baseline severity, and whether the advantage holds once any such difference is adjusted for.",
    explanation:
      "Full credit reads durable, comparison-beating gains as structural change and is paired with a same-age-comparison test that names its refutation; \"they'd settle down with age, so nothing's knowable\" is the dodge the comparison group's worse outcome defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A trainee believes BPD is hopeless. You hand her a randomized trial in which patients given a psychodynamic therapy had half as many suicide attempts over the year as patients given usual care. Which conclusion best follows?",
    mcOptions: [
      {
        text: "BPD is basically hopeless, so even this trial can't really show anything.",
        credit: 0,
      },
      {
        text: "A randomized halving of suicide attempts against a control directly refutes \"nothing works\" — it is evidence the therapy reduced attempts for these patients; test whether the result repeats in independent trials, whether it survives blind counting of attempts, and whether any baseline severity gap between the arms could explain part of it.",
        credit: 1.0,
      },
      {
        text: "The therapy group had fewer suicide attempts than usual care.",
        credit: 0.3,
      },
      {
        text: "Maybe BPD isn't hopeless after all; we could read more.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your \"the therapy reduced suicide attempts\" lead from the rival \"the two groups just differed by chance or at the start,\" and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: check that the groups were balanced at baseline and that the halving is too large to be a fluke given the sample size — a randomized, sizable gap points to the therapy. My lead is refuted if the arms differed in severity at the start, or if the difference is within what chance could produce in so few patients.",
      yieldAnchors: [
        "Patients randomized to therapy or usual care",
        "Therapy group had half the suicide attempts",
        "Outcome measured over a year",
      ],
      riskAnchors: [
        "The result repeats in independent trials",
        "It survives blind counting",
        "It holds after checking baseline balance",
      ],
      defeatedBy: [
        "The arms differed in severity at baseline",
        "The gap is within chance for the sample size",
      ],
    },
    correctAnswer:
      "A randomized halving of suicide attempts against a control directly refutes \"nothing works\" — it is evidence the therapy reduced attempts for these patients; test whether the result repeats in independent trials, whether it survives blind counting of attempts, and whether any baseline severity gap between the arms could explain part of it.",
    explanation:
      "Top credit reads the randomized halving of attempts as direct evidence against \"nothing works\" and is paired with a check-baseline-and-chance test that names its refutation; \"BPD is hopeless\" is the dodge the controlled result defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A trial shows TFP patients had far fewer hospital admissions than controls over a year. A brochure now advertises TFP as \"the cure for borderline personality disorder.\" Which conclusion best follows?",
    mcOptions: [
      {
        text: "TFP patients had fewer admissions than controls.",
        credit: 0.3,
      },
      {
        text: "TFP helped with admissions; the word \"cure\" may be too much.",
        credit: 0.6,
      },
      {
        text: "The brochure is right — TFP cures BPD.",
        credit: 0,
      },
      {
        text: "The data support a bounded claim — TFP cut hospital admissions versus controls over a year — but \"cure\" overreaches what was measured, since one outcome over one year is not the disappearance of the disorder; test the real claim by checking whether the admissions effect replicates and lasts, and reserve \"cure\" for evidence on remission, identity, and relationships the trial never reported.",
        credit: 1.0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your \"the data show reduced admissions, not cure\" lead from the rival \"the brochure's cure claim is fair,\" and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: read exactly which outcomes the trial measured — if it tracked only hospital admissions over a year, it cannot support \"cure,\" which would require remission and identity measures it never collected. My lead is refuted if the trial actually showed full, lasting remission across the disorder's core features, not just fewer admissions.",
      yieldAnchors: [
        "TFP patients had fewer hospital admissions",
        "Outcome measured over one year",
        "Brochure claims a \"cure\"",
      ],
      riskAnchors: [
        "The admissions effect replicates",
        "It lasts beyond a year",
        "Remission measures would be needed to claim cure",
      ],
      defeatedBy: [
        "The trial actually showed full lasting remission",
        "Core BPD features disappeared, not just admissions",
      ],
    },
    correctAnswer:
      "The data support a bounded claim — TFP cut hospital admissions versus controls over a year — but \"cure\" overreaches what was measured, since one outcome over one year is not the disappearance of the disorder; test the real claim by checking whether the admissions effect replicates and lasts, and reserve \"cure\" for evidence on remission, identity, and relationships the trial never reported.",
    explanation:
      "Full credit commits to the bounded admissions finding while rejecting \"cure\" and is paired with a which-outcomes-were-measured test that names its refutation; \"TFP cures BPD\" is the overreach the single one-year outcome defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "Clinic A says its BPD patients improved over a year of psychodynamic therapy (no comparison group). Clinic B randomly assigned its BPD patients to the same therapy or to usual care and found the therapy group improved more. Both clinics claim equal proof. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Clinic B's evidence looks a bit better; we could weigh them.",
        credit: 0.6,
      },
      {
        text: "Both clinics report patients improving.",
        credit: 0.3,
      },
      {
        text: "Clinic B's randomized comparison is far stronger because it rules out time, hope, and self-selection, while Clinic A's improvement could be any of those — so only B supports a causal claim, and A is a lead to confirm, not proof; test by seeing whether B's effect replicates and survives blind rating, and whether A's result would even survive adding a control group.",
        credit: 1.0,
      },
      {
        text: "Evidence is evidence, so the two clinics' claims are equally good.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your \"Clinic B's evidence is stronger\" lead from the rival \"the two are equally convincing,\" and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: ask which clinic had a comparison group — B's randomized control rules out time and self-selection that A cannot, so B's causal claim is the defensible one. My lead is refuted if Clinic A turns out to have had a randomized control too, making the two designs equivalent.",
      yieldAnchors: [
        "Clinic A had no comparison group",
        "Clinic B randomized therapy versus usual care",
        "Both claim equal proof",
      ],
      riskAnchors: [
        "B's effect replicates",
        "B's effect survives blind rating",
        "A's result would shrink with a control added",
      ],
      defeatedBy: [
        "Clinic A also used a randomized control",
        "B's advantage disappears under blind rating",
      ],
    },
    correctAnswer:
      "Clinic B's randomized comparison is far stronger because it rules out time, hope, and self-selection, while Clinic A's improvement could be any of those — so only B supports a causal claim, and A is a lead to confirm, not proof; test by seeing whether B's effect replicates and survives blind rating, and whether A's result would even survive adding a control group.",
    explanation:
      "Top credit ranks the randomized Clinic B above the uncontrolled Clinic A and is paired with a which-clinic-had-a-control test that names its refutation; \"evidence is evidence, so they're equal\" is the dodge the missing control in A defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "Re-analyzing a randomized MBT trial, researchers find the self-harm benefit over controls was largest in the most severely ill patients and small in the mildest. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Picking apart subgroups is just fishing, so this tells us nothing at all.",
        credit: 0,
      },
      {
        text: "The sickest patients benefited the most.",
        credit: 0.3,
      },
      {
        text: "The pattern suggests MBT's advantage is concentrated where the illness is worst, which would make it especially worth offering to severe BPD — a usable, falsifiable claim; test whether the severity-by-benefit pattern was predicted in advance rather than dredged after the fact, whether it repeats in a new sample, and whether it holds when the subgroups are defined the same way again.",
        credit: 1.0,
      },
      {
        text: "It may help the severe patients more; we could look into that.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your \"MBT helps the severe most\" lead from the rival \"this is just a chance subgroup result,\" and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: check whether this severity-by-benefit pattern was a pre-registered prediction or found by slicing the data afterward — a planned, replicated pattern is trustworthy, a post-hoc one often isn't. My lead is refuted if the pattern was dredged after the fact and fails to reappear when a fresh sample is split the same way.",
      yieldAnchors: [
        "Randomized MBT trial re-analyzed",
        "Benefit largest in the most severe patients",
        "Benefit small in the mildest",
      ],
      riskAnchors: [
        "The pattern was predicted in advance",
        "It repeats in a new sample",
        "It holds with the same subgroup definitions",
      ],
      defeatedBy: [
        "The pattern was dredged post-hoc",
        "It fails to reappear in a fresh sample",
      ],
    },
    correctAnswer:
      "The pattern suggests MBT's advantage is concentrated where the illness is worst, which would make it especially worth offering to severe BPD — a usable, falsifiable claim; test whether the severity-by-benefit pattern was predicted in advance rather than dredged after the fact, whether it repeats in a new sample, and whether it holds when the subgroups are defined the same way again.",
    explanation:
      "Top credit reads the severity-by-benefit pattern as a usable claim and is paired with a was-it-pre-registered test that names its refutation; \"subgroups are just fishing, so it tells us nothing\" is the dodge that discards a checkable, replicable pattern.",
  },
];

const written: HomeworkItem[] = [
  {
    itemType: "written",
    prompt:
      "A health service runs a randomized trial for borderline personality disorder: patients are assigned by chance either to a year of mentalization-based therapy (MBT) or to the standard care the service already offered. Eighteen months later, independent assessors blind to group find the MBT patients had markedly fewer self-harm episodes and hospital admissions. In one paragraph, propose the strongest conclusion the evidence supports and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that MBT itself caused the reduction in self-harm and admissions, not chance, time, or who-chose-what: because patients were randomly assigned, the two groups should have started comparable, and because the assessors were blind, the lower counts in the MBT arm can't be wishful scoring — so this is good causal evidence that MBT helps. This is a strong, falsifiable claim because it predicts checkable consequences: the gap should survive a check that the groups were balanced at baseline on severity and past self-harm; it should hold at longer follow-up rather than fading the moment therapy ends; and it should reappear if another service runs the same trial. I would test it by examining the baseline tables for imbalance and adjusting for any, by following both groups for several more years, and by looking for independent replications — and I would count the claim refuted if the MBT group started much milder, or if the advantage vanishes once baseline severity is adjusted for.",
      yieldAnchors: [
        "Patients randomly assigned to MBT or standard care",
        "Blind assessors counted the outcomes",
        "MBT group had fewer self-harm episodes and admissions",
      ],
      riskAnchors: [
        "The groups were balanced at baseline",
        "The gap holds at longer follow-up",
        "It replicates in another service",
      ],
      defeatedBy: [
        "The MBT group started much less severe",
        "The advantage disappears after adjusting for baseline",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that MBT itself caused the reduction in self-harm and admissions, not chance, time, or who-chose-what: because patients were randomly assigned, the two groups should have started comparable, and because the assessors were blind, the lower counts in the MBT arm can't be wishful scoring — so this is good causal evidence that MBT helps. This is a strong, falsifiable claim because it predicts checkable consequences: the gap should survive a check that the groups were balanced at baseline on severity and past self-harm; it should hold at longer follow-up rather than fading the moment therapy ends; and it should reappear if another service runs the same trial. I would test it by examining the baseline tables for imbalance and adjusting for any, by following both groups for several more years, and by looking for independent replications — and I would count the claim refuted if the MBT group started much milder, or if the advantage vanishes once baseline severity is adjusted for.",
    explanation:
      "Under the inverted standard, \"therapy can't be measured and all treatments are equal\" earns near-zero; top credit reads randomization-plus-blind-rating as causal evidence for MBT and names a check-baseline-balance test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A respected therapist publishes a glowing report: every one of the BPD patients who completed her year-long psychodynamic program rated themselves much improved. There was no comparison group, and the patients who dropped out partway were left out of the tally. In one paragraph, propose the strongest conclusion about what this evidence can and cannot show, and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that the report is too weak to show the program caused the improvement, even though the improvement may be real: with no comparison group, ordinary time, hope, and the natural ebb of crises could account for the gains, and counting only the completers while dropping the early leavers stacks the deck toward a rosy result. This is a strong, falsifiable claim because it predicts that a better-designed study would shrink or change the finding: a randomized control group getting usual care would reveal how much of the improvement is just time and attention, and counting everyone who started — dropouts included — would lower the apparent success rate. I would test it by pushing for a randomized comparison that tracks all enrolled patients from the start, and I would count my skepticism refuted if the program still beat a real control group even when the dropouts are counted in.",
      yieldAnchors: [
        "Completers rated themselves much improved",
        "There was no comparison group",
        "Dropouts were excluded from the tally",
      ],
      riskAnchors: [
        "A randomized control shrinks the apparent benefit",
        "Counting dropouts lowers the success rate",
        "The gain matches what time alone would give",
      ],
      defeatedBy: [
        "The program beats a randomized control even counting dropouts",
        "Improvement far exceeds any plausible time effect",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that the report is too weak to show the program caused the improvement, even though the improvement may be real: with no comparison group, ordinary time, hope, and the natural ebb of crises could account for the gains, and counting only the completers while dropping the early leavers stacks the deck toward a rosy result. This is a strong, falsifiable claim because it predicts that a better-designed study would shrink or change the finding: a randomized control group getting usual care would reveal how much of the improvement is just time and attention, and counting everyone who started — dropouts included — would lower the apparent success rate. I would test it by pushing for a randomized comparison that tracks all enrolled patients from the start, and I would count my skepticism refuted if the program still beat a real control group even when the dropouts are counted in.",
    explanation:
      "The inverted standard gives near-zero to \"everyone improved, so the program is proven and best\"; top credit reads the uncontrolled, completer-only report as a hypothesis needing a randomized control and names a count-the-dropouts test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A two-year randomized trial compares MBT and DBT for borderline personality disorder. Both groups show large, closely matched reductions in self-harm and emergency visits, with no meaningful difference between them. A manager argues the service should drop MBT because \"DBT is the only treatment with real evidence.\" In one paragraph, propose the strongest conclusion the data support and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that both MBT and DBT work for BPD, since two randomized arms improved by similar large amounts from a comparable start — so the manager's claim that only DBT has real evidence is contradicted by this very trial, in which MBT matched it. This is a strong, falsifiable claim because it predicts checkable consequences: the equivalence should repeat in another sample rather than being a one-off; it should hold at longer follow-up rather than one therapy's gains collapsing; and no large subgroup should turn out to do clearly better on one than the other. I would test it by looking for replication of the head-to-head result, by following both arms further in time, and by checking for subgroup differences — and I would count \"only DBT works\" supported only if a fair, repeated comparison showed DBT consistently beating MBT, which these data do not.",
      yieldAnchors: [
        "Randomized comparison of MBT and DBT",
        "Both showed large matched reductions",
        "No meaningful difference between arms",
      ],
      riskAnchors: [
        "The equivalence repeats in another sample",
        "It holds at longer follow-up",
        "No subgroup clearly favors one therapy",
      ],
      defeatedBy: [
        "A repeated head-to-head shows DBT consistently beating MBT",
        "MBT's gains collapse at follow-up while DBT's hold",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that both MBT and DBT work for BPD, since two randomized arms improved by similar large amounts from a comparable start — so the manager's claim that only DBT has real evidence is contradicted by this very trial, in which MBT matched it. This is a strong, falsifiable claim because it predicts checkable consequences: the equivalence should repeat in another sample rather than being a one-off; it should hold at longer follow-up rather than one therapy's gains collapsing; and no large subgroup should turn out to do clearly better on one than the other. I would test it by looking for replication of the head-to-head result, by following both arms further in time, and by checking for subgroup differences — and I would count \"only DBT works\" supported only if a fair, repeated comparison showed DBT consistently beating MBT, which these data do not.",
    explanation:
      "The overreach \"only DBT has real evidence\" is what the matched MBT results defeat; top credit commits to \"both work\" and names a does-the-equivalence-replicate test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "In a randomized trial of TFP versus a supportive therapy for BPD, both groups end up less distressed — but only the TFP group shows measured improvement in reflective functioning (the capacity to understand minds) and in the coherence of their sense of self on a standardized interview. In one paragraph, propose the strongest conclusion the evidence supports and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that TFP produces a specific structural change — improved reflective functioning and a more integrated identity — that goes beyond the general relief both therapies provided, which is exactly the deeper, identity-level change TFP is designed to target. This is a strong, falsifiable claim because it predicts checkable consequences: the structural gain should appear only in the TFP arm even though both arms ease distress; it should predict who stays well later, since structural change ought to outlast symptom relief; and it should survive an independent rater scoring the interviews blind to group. I would test it by confirming the reflective-functioning gain is TFP-specific, by following whether that gain predicts durable outcome, and by re-scoring the interviews blind — and I would count the claim refuted if the supportive group showed the same structural gains, or if TFP's edge disappeared under blind scoring.",
      yieldAnchors: [
        "Both groups ended less distressed",
        "Only TFP improved reflective functioning",
        "Only TFP gained a more coherent sense of self",
      ],
      riskAnchors: [
        "The structural gain is TFP-specific",
        "It predicts who stays well",
        "It survives blind scoring",
      ],
      defeatedBy: [
        "The supportive group showed the same structural gains",
        "TFP's edge vanishes under blind rating",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that TFP produces a specific structural change — improved reflective functioning and a more integrated identity — that goes beyond the general relief both therapies provided, which is exactly the deeper, identity-level change TFP is designed to target. This is a strong, falsifiable claim because it predicts checkable consequences: the structural gain should appear only in the TFP arm even though both arms ease distress; it should predict who stays well later, since structural change ought to outlast symptom relief; and it should survive an independent rater scoring the interviews blind to group. I would test it by confirming the reflective-functioning gain is TFP-specific, by following whether that gain predicts durable outcome, and by re-scoring the interviews blind — and I would count the claim refuted if the supportive group showed the same structural gains, or if TFP's edge disappeared under blind scoring.",
    explanation:
      "The dodge \"inner changes can't be measured, so the difference means nothing\" earns near-zero; top credit reads the TFP-only structural gain as a specific mechanism and names a blind-rescore test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "Eight years after finishing MBT, former BPD patients are mostly working or studying, are rarely hospitalized, and seldom self-harm — and they are doing clearly better than a comparison group of similar patients who received only standard care in the same era. A colleague shrugs that \"people with BPD just calm down with age, so the therapy deserves no credit.\" In one paragraph, propose the strongest conclusion the evidence supports and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that MBT produced durable, structural change rather than a passing in-therapy lift, because the gains persist eight years after treatment ended AND exceed those of a same-era comparison group of similar patients — if age alone explained recovery, that comparison group, now equally older, would have caught up, and they did not. This is a strong, falsifiable claim because it predicts checkable consequences: the employment and hospital figures should match official records rather than rosy self-report; the two groups should have been similar in baseline severity; and the advantage should survive adjusting for any baseline difference. I would test it by verifying the outcomes against documented records, by comparing baseline severity across the groups, and by adjusting for any imbalance — and I would count the claim refuted if the comparison group did just as well, or if the MBT group had started much milder and the gap dissolved after adjustment.",
      yieldAnchors: [
        "Gains persist eight years after MBT ended",
        "They exceed a same-era standard-care comparison group",
        "Most are working and rarely hospitalized",
      ],
      riskAnchors: [
        "Outcomes match official records",
        "The groups were similar at baseline",
        "The advantage survives adjustment",
      ],
      defeatedBy: [
        "The comparison group did just as well",
        "The MBT group had started much milder",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that MBT produced durable, structural change rather than a passing in-therapy lift, because the gains persist eight years after treatment ended AND exceed those of a same-era comparison group of similar patients — if age alone explained recovery, that comparison group, now equally older, would have caught up, and they did not. This is a strong, falsifiable claim because it predicts checkable consequences: the employment and hospital figures should match official records rather than rosy self-report; the two groups should have been similar in baseline severity; and the advantage should survive adjusting for any baseline difference. I would test it by verifying the outcomes against documented records, by comparing baseline severity across the groups, and by adjusting for any imbalance — and I would count the claim refuted if the comparison group did just as well, or if the MBT group had started much milder and the gap dissolved after adjustment.",
    explanation:
      "The dodge \"they'd calm down with age, so no credit and nothing's knowable\" is defeated by the comparison group's worse outcome; top credit reads durable, comparison-beating gains as structural change and names a check-against-records test that could refute it.",
  },
];

export const section: SectionContent = {
  slug: "evidence-where-psychodynamic-shines",
  title: "The Evidence: Where Psychodynamic Treatment Genuinely Shines",
  weekNumber: 1,
  blurb:
    "Borderline personality disorder is one of the few conditions where psychodynamic treatments (MBT, TFP) have randomized-trial evidence, alongside strongly-evidenced DBT — reducing self-harm and hospitalization and producing real structural change. This section is about reading that evidence: committing to the conclusion the data genuinely support and naming the cheapest observation that would disconfirm it.",
  lectureTitle:
    "1.7 The Evidence: where psychodynamic treatment genuinely shines",
  body: `# The Evidence: Where Psychodynamic Treatment Genuinely Shines

For most of the twentieth century, borderline personality disorder (BPD) was treated as a near-hopeless diagnosis — talked about with dread, often considered untreatable. That picture has changed, and the reason is evidence. BPD is now one of the few conditions where depth-oriented, psychodynamic treatments — mentalization-based therapy (MBT) and transference-focused psychotherapy (TFP) — have been put through randomized controlled trials and have held up, sitting alongside the strongly-evidenced behavioral treatment, dialectical behavior therapy (DBT). This section is not about a new clinical idea; it is about reading the evidence well — committing to exactly what a study supports and naming the cheapest observation that would tell you you're wrong.

## A rare bright spot: BPD and the randomized trial

Many psychotherapy claims rest on testimonials and clinician impressions. BPD is unusual: here the depth-oriented therapies were actually randomized against control conditions and measured on hard outcomes — self-harm episodes, suicide attempts, hospital days, employment, and standardized ratings of identity and the capacity to read minds. That makes BPD a place where you can do something the rest of this course keeps asking for: draw a committed, falsifiable conclusion because there is real discriminating evidence to draw it from. The job in this section is to use that evidence, not to hide behind \"we can't really know.\"

## What a controlled study buys you (versus \"patients felt better\")

The single most important distinction here is between a controlled finding and an uncontrolled impression. \"All my patients felt better after a year\" sounds persuasive, but with no comparison group it cannot separate the therapy from time, hope, the natural ebb of crises, or the quiet trick of counting only the people who stayed. A randomized control group fixes this: assign patients by chance to the therapy or to usual care, and the two groups start comparable, so a later difference points to the treatment. Blind assessors and official records add more: they keep wishful thinking out of the scoring. When you read a result, the first question is always — compared to what?

## What the trials actually show

Across the strongest trials, the depth-oriented treatments reduce self-harm and suicide attempts, cut hospital admissions, lower dropout, and — for TFP especially — move measures of reflective functioning and identity integration that lighter, supportive therapies leave untouched. Head-to-head, MBT and DBT tend to produce similar large gains, which means the honest read is \"both work,\" not \"only one is real.\" Some gains persist for years after treatment ends and exceed those of comparison groups, which is the signature of durable, structural change rather than a temporary lift while someone is in the room each week.

## Commit to what the evidence supports — and no more

The inverted standard of this course fits the evidence beautifully, in both directions. The boldest defensible reading commits to the specific conclusion the data earn — \"this therapy reduced self-harm versus a control\" — and names the cheap test that would overturn it. But commitment cuts both ways: a trial that measured fewer hospital admissions over one year does not show a \"cure,\" and beating a do-nothing waitlist does not make a therapy \"the best.\" The strong answer says exactly what was shown, refuses the inflation, and stays inside the measured outcome.

## Reading a finding — and naming the cheap disconfirming test

The habit to build is to read a study and immediately name the observation that would refute your reading. Were the groups balanced at the start, or did one begin milder? Does the effect survive when raters are blind and when outcomes come from records instead of memory? Does it replicate in another sample? Does the proposed mechanism — say, improved mentalizing — actually track the outcome and come before it in time? A conclusion that names its own cheapest disconfirming check is worth far more than \"it seems to help\" or \"who can say.\"

## Two ways to go wrong: the dodge and the overreach

There are two cheap failures, and the evidence defeats both. The dodge says \"therapy can't really be measured,\" \"all therapies work the same,\" or \"nothing works for BPD\" — refusals the randomized trials flatly contradict. The overreach runs the other way: \"psychodynamic therapy cures BPD,\" \"only DBT works,\" or \"beating a waitlist makes it the best\" — claims that sail past what was actually measured. The strongest reading threads between them, committing hard to the real finding while refusing both the shrug and the inflation.

## In the real world

You meet this every day outside the clinic — a supplement that \"works\" because the people who took it felt better, a teaching method praised on the strength of its success stories, a drug ad that turns one modest result into a miracle. The same questions rescue you each time: compared to what, measured how, and what would have shown the opposite? BPD's treatment evidence is a clean place to practice, because here the controlled comparisons exist and the honest move is to use them — to say plainly what the data support, no less and no more, and to keep in view the one cheap observation that would change your mind.`,
  homework: {
    mcq,
    hybrid,
    written,
  },
};
