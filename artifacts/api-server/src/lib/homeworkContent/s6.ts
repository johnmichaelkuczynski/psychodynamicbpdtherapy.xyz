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
      "A man with severe contamination fears washes his hands until they crack and avoids every public doorknob. He tells his new therapist he wants to 'get to the deep root' through talking and refuses to try exposure, calling it 'just managing the surface.' Which conclusion best follows?",
    mcOptions: [
      {
        text: "The best-supported move is to start with exposure and response prevention — the first-line, strongly evidenced treatment for contamination OCD — while folding in a meaning-focused understanding where it aids engagement, since insight-only talk has the weakest record here; test whether his washing and avoidance actually drop once he resists rituals during graded exposures, whether his refusal softens when ERP is framed as facing the fear rather than suppressing it, and whether any added meaning work improves his follow-through rather than replacing the exposures.",
        credit: 1.0,
      },
      {
        text: "Exposure is probably the way to go; we could suggest he give it a try at some point.",
        credit: 0.6,
      },
      {
        text: "He seems to have bad contamination OCD and wants talk therapy.",
        credit: 0.3,
      },
      {
        text: "He's right that exposure only suppresses symptoms — real OCD lifts only once the buried childhood conflict is uncovered, so insight-only talk is the deeper cure.",
        credit: 0,
      },
    ],
    correctAnswer:
      "The best-supported move is to start with exposure and response prevention — the first-line, strongly evidenced treatment for contamination OCD — while folding in a meaning-focused understanding where it aids engagement, since insight-only talk has the weakest record here; test whether his washing and avoidance actually drop once he resists rituals during graded exposures, whether his refusal softens when ERP is framed as facing the fear rather than suppressing it, and whether any added meaning work improves his follow-through rather than replacing the exposures.",
    explanation:
      "Top credit commits to the best-supported plan (ERP first-line, meaning work as a complement) and names a does-it-drop-with-response-prevention test; 'exposure only suppresses, insight is the real cure' is the anti-evidence dodge the strong ERP record defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A clinician treating a woman who checks her locks dozens of times nightly says she 'doesn't believe in behavioral techniques' and will use only open-ended exploration, expecting the checking to fade as hidden conflicts surface. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She seems to prefer one kind of therapy over another.",
        credit: 0.3,
      },
      {
        text: "The strongest reading is that this plan is poorly matched to the evidence: checking OCD responds best to ERP (and often an SSRI), so meaning-focused work should complement rather than substitute for the exposure that actually reduces checking; test whether the checking falls when response prevention is added, whether months of insight-only talk leave the rituals essentially unchanged, and whether her openness to ERP grows once its track record is laid out.",
        credit: 1.0,
      },
      {
        text: "There's no real evidence any one approach beats another for OCD, so her exploration-only plan is as good as anything.",
        credit: 0,
      },
      {
        text: "Exploration alone might not be enough; we could think about adding some behavioral work later.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The strongest reading is that this plan is poorly matched to the evidence: checking OCD responds best to ERP (and often an SSRI), so meaning-focused work should complement rather than substitute for the exposure that actually reduces checking; test whether the checking falls when response prevention is added, whether months of insight-only talk leave the rituals essentially unchanged, and whether her openness to ERP grows once its track record is laid out.",
    explanation:
      "Full credit commits to ERP (plus SSRI) as best-supported with meaning work as complement and names a does-checking-fall-with-response-prevention test; 'no approach beats another' is the anti-evidence dodge the ERP evidence defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "After a full course of ERP, a man's washing rituals have dropped by about eighty percent, but a nagging sense of being 'morally dirty' and unworthy persists — and it predates the OCD. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The strongest plan keeps the gains from ERP — which clearly worked on the rituals — and adds meaning-focused work on the older sense of unworthiness the exposures didn't touch, treating the two as complementary rather than rival; test whether the residual 'moral dirtiness' theme has its own history independent of the washing, whether it stays put while the rituals stay reduced, and whether exploring it brings relief without the compulsions returning.",
        credit: 1.0,
      },
      {
        text: "There might be something deeper still going on; we could keep talking about it.",
        credit: 0.6,
      },
      {
        text: "The lingering feeling proves ERP failed and only suppressed the surface — he needs to drop the behavioral work and uncover the root instead.",
        credit: 0,
      },
      {
        text: "He's better at washing but still feels bad about himself.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The strongest plan keeps the gains from ERP — which clearly worked on the rituals — and adds meaning-focused work on the older sense of unworthiness the exposures didn't touch, treating the two as complementary rather than rival; test whether the residual 'moral dirtiness' theme has its own history independent of the washing, whether it stays put while the rituals stay reduced, and whether exploring it brings relief without the compulsions returning.",
    explanation:
      "Top credit reads the durable 80% ERP gain plus a separate older theme as a case for integration and names a does-the-theme-have-its-own-history test; 'ERP failed, drop it' is the dodge the large, holding symptom reduction defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A teenager with severe 'just right' ordering rituals is offered ERP. Her parents hesitate, asking whether deliberately triggering her anxiety is 'cruel' and whether gentle talking wouldn't be kinder. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The parents are right that provoking anxiety is harmful; talk-only therapy is the humane and equally effective choice.",
        credit: 0,
      },
      {
        text: "They seem worried about the exposure part of treatment.",
        credit: 0.3,
      },
      {
        text: "The best-supported answer is that graded, collaborative ERP is the most effective treatment for these rituals and that its brief, planned distress is the mechanism of lasting relief rather than harm — while a kind, well-explained rationale improves uptake; test whether her ordering eases as she tolerates 'not-just-right' on purpose, whether her distress during exposures falls across sessions rather than mounting, and whether framing it collaboratively lowers the family's resistance.",
        credit: 1.0,
      },
      {
        text: "ERP is probably worth doing even if it's uncomfortable; we could reassure them.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The best-supported answer is that graded, collaborative ERP is the most effective treatment for these rituals and that its brief, planned distress is the mechanism of lasting relief rather than harm — while a kind, well-explained rationale improves uptake; test whether her ordering eases as she tolerates 'not-just-right' on purpose, whether her distress during exposures falls across sessions rather than mounting, and whether framing it collaboratively lowers the family's resistance.",
    explanation:
      "Full credit commits to graded ERP as most effective and names a does-distress-fall-across-sessions test; 'provoking anxiety is harmful, talk-only is equal' is the dodge the strong ERP evidence and habituation pattern defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "A new mother is tormented by intrusive images of harming her baby and has never acted on them; she is horrified by the thoughts. Her therapist avoids any exposure, fearing it could 'plant ideas,' and offers only repeated reassurance that she's a good person. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The strongest, evidence-based reading is that these are classic ego-dystonic harm obsessions, that repeated reassurance is itself a compulsion feeding the cycle, and that imaginal exposure plus response prevention is the supported treatment — with meaning-focused work optional alongside; test whether the reassurance brings only brief relief before the thoughts return, whether the intrusions ease as she faces them without seeking reassurance, and whether her horror at the thoughts (not any wish to act) confirms the obsessional rather than dangerous nature.",
        credit: 1.0,
      },
      {
        text: "She seems to have scary thoughts and her therapist is reassuring her.",
        credit: 0.3,
      },
      {
        text: "Reassurance might not be the best approach; we could consider exposure.",
        credit: 0.6,
      },
      {
        text: "Exposing her to those images is far too risky and could push her to act, so endless reassurance is the only safe path.",
        credit: 0,
      },
    ],
    correctAnswer:
      "The strongest, evidence-based reading is that these are classic ego-dystonic harm obsessions, that repeated reassurance is itself a compulsion feeding the cycle, and that imaginal exposure plus response prevention is the supported treatment — with meaning-focused work optional alongside; test whether the reassurance brings only brief relief before the thoughts return, whether the intrusions ease as she faces them without seeking reassurance, and whether her horror at the thoughts (not any wish to act) confirms the obsessional rather than dangerous nature.",
    explanation:
      "Top credit identifies ego-dystonic harm obsessions, flags reassurance as a compulsion, commits to imaginal ERP, and names a does-reassurance-only-briefly-relieve test; 'exposure could push her to act' is the dodge the evidence on harm obsessions defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "In session, a man with health-anxiety-tinged OCD asks his therapist the same question — 'But you're sure it's not cancer, right?' — a dozen times, calmer for a moment after each answer, then asking again. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He's probably looking for reassurance; we could try giving him less of it.",
        credit: 0.6,
      },
      {
        text: "He clearly just needs more thorough reassurance; once he's fully convinced, the questioning will stop for good.",
        credit: 0,
      },
      {
        text: "The best-supported reading is that the reassurance-seeking is a compulsion — relief is brief and the question returns, so answering feeds the loop — and the evidence-based move is response prevention: declining to supply certainty while supporting him to tolerate doubt; test whether each answer calms him only briefly before the next ask, whether the urge to ask falls when reassurance is withheld kindly, and whether his anxiety drops over time rather than spiking forever.",
        credit: 1.0,
      },
      {
        text: "He keeps asking whether he's sick.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The best-supported reading is that the reassurance-seeking is a compulsion — relief is brief and the question returns, so answering feeds the loop — and the evidence-based move is response prevention: declining to supply certainty while supporting him to tolerate doubt; test whether each answer calms him only briefly before the next ask, whether the urge to ask falls when reassurance is withheld kindly, and whether his anxiety drops over time rather than spiking forever.",
    explanation:
      "Full credit names reassurance-seeking as a compulsion, commits to response prevention, and names a brief-relief-then-return test; 'just give more reassurance' is the dodge the relief-then-return pattern defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A woman with long-standing, disabling OCD has gained partial relief from a high-dose SSRI but still spends two hours a day on rituals. She asks whether adding anything could help. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She seems partly better on medication but still has rituals.",
        credit: 0.3,
      },
      {
        text: "The best-supported plan is to add ERP to the SSRI, since the combination outperforms either alone for residual OCD, while keeping the medication that already helped; test whether her daily ritual time falls further once structured exposures begin, whether gains hold as ERP skills are practiced between sessions, and whether dropping either component lets symptoms creep back.",
        credit: 1.0,
      },
      {
        text: "Maybe therapy could be added to the medication; we could look into options.",
        credit: 0.6,
      },
      {
        text: "Medication is a crutch that masks the real issue, so she should stop the SSRI and rely on uncovering the deeper cause alone.",
        credit: 0,
      },
    ],
    correctAnswer:
      "The best-supported plan is to add ERP to the SSRI, since the combination outperforms either alone for residual OCD, while keeping the medication that already helped; test whether her daily ritual time falls further once structured exposures begin, whether gains hold as ERP skills are practiced between sessions, and whether dropping either component lets symptoms creep back.",
    explanation:
      "Top credit commits to adding ERP to an effective SSRI (the best-supported combination) and names a does-ritual-time-fall test; 'medication is a crutch, stop it' is the anti-evidence dodge the partial SSRI benefit defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A man finishes ERP with his checking nearly gone and his life reclaimed, but says he feels uneasy that he 'still doesn't understand why I ever got OCD in the first place.' Which conclusion best follows?",
    mcOptions: [
      {
        text: "Since he doesn't understand the cause, the ERP gains are hollow and bound to collapse; only uncovering the origin counts as real treatment.",
        credit: 0,
      },
      {
        text: "He might benefit from understanding it more; we could explore the why.",
        credit: 0.6,
      },
      {
        text: "He's better but still curious about the cause.",
        credit: 0.3,
      },
      {
        text: "The strongest reading is that symptom relief and insight are separable goods: the ERP gains are real and worth protecting, and optional meaning-focused exploration can address his wish to understand and any lingering vulnerability without implying the behavioral work was incomplete; test whether his gains hold regardless of whether the 'why' is ever answered, whether exploring origins adds meaning without reviving rituals, and whether his unease is about understanding rather than returning symptoms.",
        credit: 1.0,
      },
    ],
    correctAnswer:
      "The strongest reading is that symptom relief and insight are separable goods: the ERP gains are real and worth protecting, and optional meaning-focused exploration can address his wish to understand and any lingering vulnerability without implying the behavioral work was incomplete; test whether his gains hold regardless of whether the 'why' is ever answered, whether exploring origins adds meaning without reviving rituals, and whether his unease is about understanding rather than returning symptoms.",
    explanation:
      "Full credit treats relief and insight as separable, protects the real ERP gains, offers optional meaning work, and names a do-gains-hold-without-the-why test; 'gains are hollow without the cause' is the dodge his reclaimed functioning defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "For three years a man has had insight-oriented therapy exploring the childhood roots of his symmetry compulsions. He can explain their origins eloquently, yet still spends hours arranging objects and is no better. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The strongest, evidence-guided conclusion is that insight alone has not reduced the compulsions and the plan should change to include ERP, the treatment with the best record for exactly this presentation — keeping any genuinely useful understanding but no longer relying on it to do the work; test whether his ritual time finally falls once response prevention starts, whether three more months of insight-only talk leave the arranging unchanged, and whether his eloquent 'why' has translated into any behavioral shift.",
        credit: 1.0,
      },
      {
        text: "Maybe the current therapy isn't working; we could think about trying something else.",
        credit: 0.6,
      },
      {
        text: "Three years isn't long for deep work — he just needs to keep exploring until the true root finally surfaces.",
        credit: 0,
      },
      {
        text: "He understands his rituals but still does them.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The strongest, evidence-guided conclusion is that insight alone has not reduced the compulsions and the plan should change to include ERP, the treatment with the best record for exactly this presentation — keeping any genuinely useful understanding but no longer relying on it to do the work; test whether his ritual time finally falls once response prevention starts, whether three more months of insight-only talk leave the arranging unchanged, and whether his eloquent 'why' has translated into any behavioral shift.",
    explanation:
      "Top credit reads three unchanged years as a case to switch to ERP and names a does-ritual-time-fall-once-response-prevention-starts test; 'just keep exploring' is the anti-evidence dodge the long, change-free course defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A woman started ERP for contamination OCD but quit after two sessions, saying the exposures felt 'mechanical and pointless' and that the therapist never seemed to grasp how terrifying it was. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She seems to have dropped out of exposure therapy.",
        credit: 0.3,
      },
      {
        text: "Her dropout proves ERP doesn't work for her; she should abandon exposure and seek a purely supportive approach instead.",
        credit: 0,
      },
      {
        text: "The best-supported reading is that ERP remains the indicated treatment but its delivery failed on engagement — a stronger alliance and a shared rationale (where meaning-focused understanding earns its keep) would likely improve follow-through; test whether she stays in treatment when exposures are built collaboratively and her fear is taken seriously, whether her dropout traces to the relationship rather than to ERP itself, and whether re-engaged exposures then reduce her washing.",
        credit: 1.0,
      },
      {
        text: "Maybe she needs a better connection with her therapist; we could try again.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The best-supported reading is that ERP remains the indicated treatment but its delivery failed on engagement — a stronger alliance and a shared rationale (where meaning-focused understanding earns its keep) would likely improve follow-through; test whether she stays in treatment when exposures are built collaboratively and her fear is taken seriously, whether her dropout traces to the relationship rather than to ERP itself, and whether re-engaged exposures then reduce her washing.",
    explanation:
      "Full credit keeps ERP as indicated but locates the failure in engagement and names a does-she-stay-with-a-better-alliance test; 'ERP doesn't work for her, abandon it' is the dodge a two-session delivery failure can't support.",
  },
  {
    itemType: "mc",
    prompt:
      "A devout man is plagued by blasphemous intrusive thoughts during prayer and performs elaborate mental 'undoing' rituals to cancel them, leaving him exhausted and doubting his faith. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He's probably struggling with religious OCD; we could look into treatment.",
        credit: 0.6,
      },
      {
        text: "The best-supported plan is ERP adapted for scrupulosity — exposure to the feared thoughts with prevention of the mental undoing, ideally with input that respects his faith — while a meaning-focused view of why this content torments him can complement it; test whether the intrusions lose their grip as he stops neutralizing them, whether the mental rituals function as compulsions (brief relief, quick return), and whether his distress eases without his actually abandoning his religion.",
        credit: 1.0,
      },
      {
        text: "The thoughts are a genuine spiritual failing, so more prayer and stricter ritual — not exposure — are what he needs.",
        credit: 0,
      },
      {
        text: "He has upsetting religious thoughts and does mental rituals.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The best-supported plan is ERP adapted for scrupulosity — exposure to the feared thoughts with prevention of the mental undoing, ideally with input that respects his faith — while a meaning-focused view of why this content torments him can complement it; test whether the intrusions lose their grip as he stops neutralizing them, whether the mental rituals function as compulsions (brief relief, quick return), and whether his distress eases without his actually abandoning his religion.",
    explanation:
      "Top credit commits to scrupulosity-adapted ERP with mental-ritual prevention plus optional meaning work and names a do-intrusions-fade-when-neutralizing-stops test; 'it's a spiritual failing needing more ritual' is the dodge the compulsive structure defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A man agrees that ERP is the right treatment for his contamination OCD but freezes at the first exposure, saying he 'can't possibly' touch the trash can and wants to skip ahead to easier wins. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He seems too scared to start the exposures.",
        credit: 0.3,
      },
      {
        text: "If the first exposure is that frightening, ERP is simply too much for him and should be dropped entirely.",
        credit: 0,
      },
      {
        text: "The best-supported move is to keep ERP but build a gentler graded hierarchy so he starts with a tolerable step, since titrating difficulty preserves the treatment that works while meeting his fear; test whether he can complete a lower-rung exposure he rates as manageable, whether his distress on that step falls within the session, and whether success there raises his willingness to climb the hierarchy.",
        credit: 1.0,
      },
      {
        text: "Maybe the exposures are too hard right now; we could ease into it.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The best-supported move is to keep ERP but build a gentler graded hierarchy so he starts with a tolerable step, since titrating difficulty preserves the treatment that works while meeting his fear; test whether he can complete a lower-rung exposure he rates as manageable, whether his distress on that step falls within the session, and whether success there raises his willingness to climb the hierarchy.",
    explanation:
      "Full credit keeps ERP but regrades the hierarchy and names a can-he-complete-a-lower-rung test; 'ERP is too much, drop it' is the dodge that titration directly answers.",
  },
  {
    itemType: "mc",
    prompt:
      "A woman with checking OCD says she's read that 'OCD is a lifelong brain disease nothing can really fix,' so she sees no point starting treatment. She has never tried ERP or medication. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She's essentially right — OCD is largely untreatable, so trying ERP or medication is unlikely to be worth the effort.",
        credit: 0,
      },
      {
        text: "The strongest, evidence-based correction is that OCD is among the more treatable conditions — ERP and SSRIs have strong records and most patients improve substantially — so her pessimism is a reason to start, not to abstain; test whether a course of ERP measurably reduces her checking, whether her belief that 'nothing works' eases as she sees early gains, and whether her never having tried treatment, rather than treatment having failed, explains her despair.",
        credit: 1.0,
      },
      {
        text: "Treatment might help more than she thinks; we could encourage her to try.",
        credit: 0.6,
      },
      {
        text: "She thinks OCD can't be treated and hasn't tried anything.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The strongest, evidence-based correction is that OCD is among the more treatable conditions — ERP and SSRIs have strong records and most patients improve substantially — so her pessimism is a reason to start, not to abstain; test whether a course of ERP measurably reduces her checking, whether her belief that 'nothing works' eases as she sees early gains, and whether her never having tried treatment, rather than treatment having failed, explains her despair.",
    explanation:
      "Top credit corrects with the strong ERP/SSRI evidence and names a does-a-course-reduce-checking test; 'OCD is largely untreatable' is the anti-evidence dodge her never having tried it exposes.",
  },
  {
    itemType: "mc",
    prompt:
      "A college student with moderate OCD wants 'just a pill, no therapy,' citing his busy schedule. His clinician notes his rituals are circumscribed and that he's willing to do homework. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Therapy might help alongside medication; we could mention it.",
        credit: 0.6,
      },
      {
        text: "He wants medication and not therapy.",
        credit: 0.3,
      },
      {
        text: "Medication is the complete answer for OCD, so therapy would add nothing and he's right to skip it.",
        credit: 0,
      },
      {
        text: "The best-supported guidance is that ERP is at least as effective as medication for OCD and the two combined often work best, so — given he'll do homework — offering ERP (with or without an SSRI) is better grounded than medication alone; test whether his ritual time falls more with added ERP than with the pill alone, whether his willingness to do exposures predicts a good response, and whether relapse is lower when he has learned ERP skills rather than relying on medication only.",
        credit: 1.0,
      },
    ],
    correctAnswer:
      "The best-supported guidance is that ERP is at least as effective as medication for OCD and the two combined often work best, so — given he'll do homework — offering ERP (with or without an SSRI) is better grounded than medication alone; test whether his ritual time falls more with added ERP than with the pill alone, whether his willingness to do exposures predicts a good response, and whether relapse is lower when he has learned ERP skills rather than relying on medication only.",
    explanation:
      "Full credit commits to ERP (alone or combined) over medication-only given his willingness and names a does-ERP-add-benefit test; 'medication is the complete answer' is the dodge the comparative evidence defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A therapist asserts that a single dramatic session uncovering a patient's repressed anger 'cured' his decade of severe washing OCD, and plans no exposure or follow-up. The patient still washes for an hour each morning. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The therapist thinks one session fixed the OCD, but the patient still washes.",
        credit: 0.3,
      },
      {
        text: "The breakthrough clearly worked, so the remaining washing will simply fade on its own without any further treatment.",
        credit: 0,
      },
      {
        text: "One session probably didn't cure it; we could keep working.",
        credit: 0.6,
      },
      {
        text: "The strongest, evidence-aware reading is that an hour of daily washing means the OCD is not cured, that single-session catharsis has no track record for OCD, and that the supported plan is ERP (with meaning-focused insight as a possible complement, not a substitute); test whether the washing actually stops in the days after the 'breakthrough,' whether structured exposure is what finally reduces it, and whether the dramatic insight, however real, changed the behavior at all.",
        credit: 1.0,
      },
    ],
    correctAnswer:
      "The strongest, evidence-aware reading is that an hour of daily washing means the OCD is not cured, that single-session catharsis has no track record for OCD, and that the supported plan is ERP (with meaning-focused insight as a possible complement, not a substitute); test whether the washing actually stops in the days after the 'breakthrough,' whether structured exposure is what finally reduces it, and whether the dramatic insight, however real, changed the behavior at all.",
    explanation:
      "Top credit reads persistent daily washing as proof the OCD isn't cured and commits to ERP, naming a did-the-washing-actually-stop test; 'the breakthrough worked, it'll fade' is the overreach the continued hour of washing defeats.",
  },
];

const hybrid: HomeworkItem[] = [
  {
    itemType: "hybrid",
    prompt:
      "A woman with contamination OCD has spent a year in insight-only therapy understanding her fears but still showers six times a day. She asks whether ERP would be 'giving up on the deeper work.' Which conclusion best follows?",
    mcOptions: [
      {
        text: "She seems unsure whether to add exposure therapy.",
        credit: 0.3,
      },
      {
        text: "The best-supported reading is that a year of insight without symptom change argues for adding ERP — the first-line treatment for contamination OCD — while keeping any genuinely useful understanding, so the two complement rather than compete; test whether her showering finally drops once response prevention begins, whether the insight-only year left the rituals essentially unchanged, and whether combining the approaches beats continuing insight alone.",
        credit: 1.0,
      },
      {
        text: "She's right that ERP would abandon the real work; only continued insight can resolve OCD at its root.",
        credit: 0,
      },
      {
        text: "Adding exposure might help; we could consider it.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'add ERP because insight alone hasn't reduced the rituals' lead from the rival 'the insight work just needs more time,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: introduce response prevention and watch whether her daily showering drops over a few weeks — a fall once ERP starts points to ERP being the missing active ingredient. My lead is refuted if her rituals were already steadily declining on insight alone before any ERP, which would suggest the talking just needed more time.",
      yieldAnchors: [
        "A year of insight-only therapy",
        "She still showers six times a day",
        "She fears ERP means abandoning deep work",
      ],
      riskAnchors: [
        "Showering drops once response prevention begins",
        "The insight year left rituals unchanged",
        "The combined approach beats insight alone",
      ],
      defeatedBy: [
        "Her rituals were already falling on insight alone",
        "ERP makes no difference to her washing",
      ],
    },
    correctAnswer:
      "The best-supported reading is that a year of insight without symptom change argues for adding ERP — the first-line treatment for contamination OCD — while keeping any genuinely useful understanding, so the two complement rather than compete; test whether her showering finally drops once response prevention begins, whether the insight-only year left the rituals essentially unchanged, and whether combining the approaches beats continuing insight alone.",
    explanation:
      "Full credit reads an unchanged year as a case to add first-line ERP and is paired with a does-showering-drop test that names its refutation; 'ERP abandons the real work' is the anti-evidence dodge the change-free year defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A man with severe checking OCD has done ERP with good results but relapses hard during high-stress months at work. He asks whether anything could make the gains sturdier. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Something might help him hold his gains; we could explore add-ons.",
        credit: 0.6,
      },
      {
        text: "Relapse under stress means ERP failed, so he should abandon it and look only for the hidden emotional cause.",
        credit: 0,
      },
      {
        text: "The best-supported plan is to shore up the ERP gains — booster sessions and continued practice, and considering an SSRI, both of which have evidence for reducing relapse — while a meaning-focused look at what the stress stirs up can complement it; test whether stress-period relapses shrink with boosters or medication, whether his checking returns specifically under work pressure rather than randomly, and whether the relapses ease as he keeps practicing response prevention.",
        credit: 1.0,
      },
      {
        text: "He does well with ERP but relapses when stressed.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'stress-linked relapse needs booster ERP and relapse-prevention support' lead from the rival 'the ERP never really worked,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: check whether his checking is well-controlled during low-stress stretches and spikes only under work pressure — good baseline control with stress-linked flares points to relapse-prevention needs, not treatment failure. My lead is refuted if his checking is severe even during calm periods, which would mean ERP never achieved real control in the first place.",
      yieldAnchors: [
        "ERP produced good results",
        "He relapses hard during stressful months",
        "He wants sturdier gains",
      ],
      riskAnchors: [
        "Relapses shrink with boosters or medication",
        "Checking returns under work pressure specifically",
        "Continued response prevention eases relapse",
      ],
      defeatedBy: [
        "His checking is severe even in calm periods",
        "ERP never reduced his checking at all",
      ],
    },
    correctAnswer:
      "The best-supported plan is to shore up the ERP gains — booster sessions and continued practice, and considering an SSRI, both of which have evidence for reducing relapse — while a meaning-focused look at what the stress stirs up can complement it; test whether stress-period relapses shrink with boosters or medication, whether his checking returns specifically under work pressure rather than randomly, and whether the relapses ease as he keeps practicing response prevention.",
    explanation:
      "Full credit treats stress-linked relapse as a relapse-prevention problem (boosters, SSRI, optional meaning work) and is paired with a controlled-when-calm test; 'ERP failed, abandon it' is the dodge his good baseline results defeat.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A man has intrusive thoughts of stabbing loved ones and has hidden every knife in the house; he's never been violent and is sickened by the thoughts. A counselor refuses imaginal exposure as 'too dangerous.' Which conclusion best follows?",
    mcOptions: [
      {
        text: "The counselor is right; exposing him to those images could trigger violence, so avoidance is the responsible plan.",
        credit: 0,
      },
      {
        text: "The best-supported reading is that these are ego-dystonic harm obsessions with no link to actual violence, that the knife-hiding and avoidance are compulsions feeding the cycle, and that imaginal ERP is the indicated, safe treatment; test whether his horror (not urge) at the thoughts marks them as obsessional, whether the intrusions intensify the more he avoids, and whether facing the images without neutralizing reduces their grip.",
        credit: 1.0,
      },
      {
        text: "He has violent thoughts and his counselor won't do exposure.",
        credit: 0.3,
      },
      {
        text: "Exposure might actually be appropriate here; we could reconsider.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'these are ego-dystonic obsessions treatable with imaginal ERP' lead from the rival 'these signal genuine danger requiring avoidance,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: assess his reaction to the thoughts — revulsion, fear, and active resistance mark ego-dystonic obsessions, not intent. My lead is refuted if he reports any wish, plan, or pleasure connected to the thoughts, which would shift the picture from OCD toward genuine risk needing a different response.",
      yieldAnchors: [
        "Intrusive harm thoughts about loved ones",
        "He has hidden every knife",
        "He is sickened by the thoughts and never violent",
      ],
      riskAnchors: [
        "Horror not urge marks them obsessional",
        "Intrusions worsen with avoidance",
        "Facing images without neutralizing reduces them",
      ],
      defeatedBy: [
        "He reports a wish or plan to act",
        "He feels pleasure rather than dread at the thoughts",
      ],
    },
    correctAnswer:
      "The best-supported reading is that these are ego-dystonic harm obsessions with no link to actual violence, that the knife-hiding and avoidance are compulsions feeding the cycle, and that imaginal ERP is the indicated, safe treatment; test whether his horror (not urge) at the thoughts marks them as obsessional, whether the intrusions intensify the more he avoids, and whether facing the images without neutralizing reduces their grip.",
    explanation:
      "Full credit identifies ego-dystonic harm obsessions, names the avoidance as compulsive, commits to imaginal ERP, and is paired with an assess-his-reaction test; 'exposure could trigger violence' is the dodge the harm-obsession evidence defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A woman with OCD calls her husband twenty times a day to ask whether she 'said something offensive'; he patiently reassures her each time, and her anxiety briefly settles before she calls again. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She keeps calling her husband for reassurance.",
        credit: 0.3,
      },
      {
        text: "Maybe the reassurance isn't helping; we could look at that.",
        credit: 0.6,
      },
      {
        text: "The best-supported reading is that the husband's reassurance is an accommodation that maintains the compulsion — brief relief, quick return — and the evidence-based move is to coach the family to reduce reassurance while she practices tolerating doubt; test whether each reassurance calms her only briefly, whether the call frequency drops when reassurance is gently withheld, and whether her anxiety falls over time rather than escalating without it.",
        credit: 1.0,
      },
      {
        text: "Her husband should simply reassure her more completely and more often until she finally feels certain and stops calling.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'reassurance is an accommodation maintaining the compulsion' lead from the rival 'she just needs enough reassurance to feel settled,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: have the husband briefly reduce reassurance and watch whether her calling urge falls over days rather than climbing forever — a decline points to reassurance having fed the loop. My lead is refuted if reducing reassurance makes her distress rise without limit and never settle, while abundant reassurance reliably ends the calls for good.",
      yieldAnchors: [
        "Twenty reassurance calls a day",
        "Each answer settles her only briefly",
        "She calls again right after",
      ],
      riskAnchors: [
        "Each reassurance calms only briefly",
        "Call frequency drops when reassurance is reduced",
        "Anxiety falls over time without reassurance",
      ],
      defeatedBy: [
        "Full reassurance permanently ends the calls",
        "Reducing reassurance helps her settle faster",
      ],
    },
    correctAnswer:
      "The best-supported reading is that the husband's reassurance is an accommodation that maintains the compulsion — brief relief, quick return — and the evidence-based move is to coach the family to reduce reassurance while she practices tolerating doubt; test whether each reassurance calms her only briefly, whether the call frequency drops when reassurance is gently withheld, and whether her anxiety falls over time rather than escalating without it.",
    explanation:
      "Full credit names family reassurance as accommodation and commits to reducing it, paired with a does-the-urge-fall-when-withheld test; 'just reassure her more' is the dodge the brief-relief-then-return pattern defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A man's contamination rituals resolved with ERP, but he then notices he picks fights with anyone who gets close — a pattern that long predates the OCD and that the exposures didn't touch. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The returning relationship trouble proves the ERP only suppressed his OCD, which has now resurfaced as conflict; he should drop ERP and uncover the root.",
        credit: 0,
      },
      {
        text: "There might be a separate issue worth exploring; we could keep talking.",
        credit: 0.6,
      },
      {
        text: "The best-supported reading is that the ERP genuinely cleared the contamination OCD and what remains is a distinct, older relational pattern better served by meaning-focused work — complement, not replacement; test whether the contamination rituals stay gone while the conflict pattern persists, whether the fighting has its own history independent of the OCD, and whether exploring it helps without the washing returning.",
        credit: 1.0,
      },
      {
        text: "His OCD is better but he fights with people close to him.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'the conflict is a separate older pattern for meaning-focused work' lead from the rival 'the OCD has resurfaced in disguise,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: check whether the contamination rituals stay absent while the fighting continues, and whether the conflict pattern existed before the OCD ever began — independence on both points marks it as a separate issue. My lead is refuted if the washing returns in lockstep with the conflicts or the fighting only started as the OCD lifted, which would suggest one underlying problem shifting form.",
      yieldAnchors: [
        "ERP resolved the contamination rituals",
        "He picks fights with anyone close",
        "The conflict pattern predates the OCD",
      ],
      riskAnchors: [
        "Rituals stay gone while conflict persists",
        "The fighting has its own independent history",
        "Exploring it helps without rituals returning",
      ],
      defeatedBy: [
        "Washing returns in step with the conflicts",
        "The fighting began only as the OCD lifted",
      ],
    },
    correctAnswer:
      "The best-supported reading is that the ERP genuinely cleared the contamination OCD and what remains is a distinct, older relational pattern better served by meaning-focused work — complement, not replacement; test whether the contamination rituals stay gone while the conflict pattern persists, whether the fighting has its own history independent of the OCD, and whether exploring it helps without the washing returning.",
    explanation:
      "Full credit reads a cleared OCD plus a separate older pattern as a case for complementary meaning work and is paired with a do-rituals-stay-gone test; 'the OCD resurfaced in disguise' is the dodge the independent history defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A therapist tells a parent that ERP for her son's counting rituals is 'shallow symptom-management' and that only years of depth work can truly help, despite the rituals consuming most of the boy's day. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The therapist's plan might be too slow; we could get another opinion.",
        credit: 0.6,
      },
      {
        text: "The therapist is right that ERP only manages symptoms, so the family should commit to years of depth work instead.",
        credit: 0,
      },
      {
        text: "The best-supported reading is that this advice is poorly aligned with the evidence — ERP is first-line and effective for counting rituals, and depth work, where useful, should complement rather than delay it; test whether the rituals fall once ERP begins, whether the proposed depth-only plan would leave the boy impaired for years first, and whether combining approaches serves him better than waiting on insight alone.",
        credit: 1.0,
      },
      {
        text: "The therapist prefers depth work over ERP.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'ERP should lead and depth work can complement' lead from the rival 'depth work alone is the genuine cure,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: start ERP and track whether his daily ritual time falls within weeks — a clear drop shows ERP is doing real work, not just 'managing.' My lead is refuted if ERP produces no change while a course of depth-only work measurably reduces his counting, which would support the therapist's claim.",
      yieldAnchors: [
        "ERP dismissed as shallow management",
        "Rituals consume most of the boy's day",
        "Only years of depth work offered",
      ],
      riskAnchors: [
        "Rituals fall once ERP begins",
        "The depth-only plan leaves him impaired for years",
        "The combined approach beats insight alone",
      ],
      defeatedBy: [
        "ERP produces no change in his rituals",
        "Depth-only work alone clearly reduces the counting",
      ],
    },
    correctAnswer:
      "The best-supported reading is that this advice is poorly aligned with the evidence — ERP is first-line and effective for counting rituals, and depth work, where useful, should complement rather than delay it; test whether the rituals fall once ERP begins, whether the proposed depth-only plan would leave the boy impaired for years first, and whether combining approaches serves him better than waiting on insight alone.",
    explanation:
      "Full credit reads the advice as misaligned with the ERP evidence and commits to ERP-led care with optional depth work, paired with a do-rituals-fall test; 'ERP only manages symptoms' is the anti-evidence dodge.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A woman has cycled through three SSRIs over five years with only modest OCD relief and has never been offered psychotherapy. She wonders if she's simply 'treatment-resistant.' Which conclusion best follows?",
    mcOptions: [
      {
        text: "She's tried several medications without much benefit.",
        credit: 0.3,
      },
      {
        text: "The best-supported reading is that 'treatment-resistant' is premature when she's never had ERP — the most effective psychotherapy for OCD and a standard next step for partial medication response; test whether adding ERP reduces her symptoms beyond what medication achieved, whether her 'resistance' reflects an untried treatment rather than a true ceiling, and whether the gains hold as she practices response prevention.",
        credit: 1.0,
      },
      {
        text: "Maybe therapy is worth trying before calling it resistant; we could suggest it.",
        credit: 0.6,
      },
      {
        text: "Three failed medications confirm she's treatment-resistant, so further treatment is unlikely to help.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'she's not truly resistant because ERP is untried' lead from the rival 'she has genuinely treatment-resistant OCD,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: add a proper course of ERP and measure whether her symptoms drop beyond the modest medication response — improvement shows the earlier 'resistance' was just an untried treatment. My lead is refuted if well-delivered ERP, fully practiced, produces no meaningful change on top of medication, which would support genuine treatment resistance.",
      yieldAnchors: [
        "Three SSRIs over five years",
        "Only modest relief",
        "Never offered psychotherapy",
      ],
      riskAnchors: [
        "ERP reduces symptoms beyond medication",
        "Resistance reflects an untried treatment",
        "Gains hold with response prevention",
      ],
      defeatedBy: [
        "Well-delivered ERP produces no change",
        "She has fully tried ERP already",
      ],
    },
    correctAnswer:
      "The best-supported reading is that 'treatment-resistant' is premature when she's never had ERP — the most effective psychotherapy for OCD and a standard next step for partial medication response; test whether adding ERP reduces her symptoms beyond what medication achieved, whether her 'resistance' reflects an untried treatment rather than a true ceiling, and whether the gains hold as she practices response prevention.",
    explanation:
      "Full credit reframes 'resistance' as an untried first-line treatment and commits to ERP, paired with a does-ERP-add-benefit test; 'three failed meds confirm resistance' is the dodge the never-tried-ERP fact defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A man following a strict manualized ERP protocol completes every exposure but reports feeling like a 'compliance robot,' and his gains are flat. His therapist suspects the rote delivery isn't engaging the real fear. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Maybe the exposures need adjusting; we could rework them.",
        credit: 0.6,
      },
      {
        text: "Flat gains prove ERP doesn't suit him, so he should switch to insight-only therapy with no exposures.",
        credit: 0,
      },
      {
        text: "He's doing the exposures but not improving much.",
        credit: 0.3,
      },
      {
        text: "The best-supported reading is that ERP remains the right treatment but must target his actual feared outcome with real emotional engagement — exposures that don't activate the fear don't extinguish it — and a meaning-focused understanding of what he most dreads can sharpen them; test whether gains improve once exposures provoke genuine anxiety tied to his core fear, whether his flat response traces to under-activated exposures, and whether tailored exposures outperform the rote protocol.",
        credit: 1.0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'rote exposures aren't engaging his real fear' lead from the rival 'ERP simply doesn't work for him,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: redesign exposures to hit his actual feared outcome and check whether he reports real anxiety during them and better gains afterward — activation plus improvement shows the problem was engagement, not ERP. My lead is refuted if exposures that clearly provoke his core fear still yield no improvement, which would point away from a delivery problem.",
      yieldAnchors: [
        "He completes every exposure",
        "He feels like a compliance robot",
        "His gains are flat",
      ],
      riskAnchors: [
        "Gains improve with fear-activating exposures",
        "Flat response traces to under-activation",
        "Tailored exposures beat the rote protocol",
      ],
      defeatedBy: [
        "Fear-activating exposures still yield nothing",
        "He was never actually completing the exposures",
      ],
    },
    correctAnswer:
      "The best-supported reading is that ERP remains the right treatment but must target his actual feared outcome with real emotional engagement — exposures that don't activate the fear don't extinguish it — and a meaning-focused understanding of what he most dreads can sharpen them; test whether gains improve once exposures provoke genuine anxiety tied to his core fear, whether his flat response traces to under-activated exposures, and whether tailored exposures outperform the rote protocol.",
    explanation:
      "Full credit keeps ERP but demands fear-activating, meaning-informed exposures and is paired with a does-activation-improve-gains test; 'ERP doesn't suit him, switch to insight-only' is the dodge that under-activated exposures explain.",
  },
  {
    itemType: "hybrid",
    prompt:
      "Two clinicians debate a case of moderate OCD: one insists on ERP alone, the other on psychodynamic therapy alone. The patient is capable, motivated, and asks what gives her the best odds. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Since the experts disagree, no approach is better than another, so she may as well pick whichever she likes.",
        credit: 0,
      },
      {
        text: "The best-supported answer is that ERP (with or without an SSRI) has the strongest evidence and should anchor the plan, while psychodynamic, meaning-focused work can complement it for engagement or residual themes — not replace it; test whether ERP reduces her rituals as expected, whether adding meaning work improves adherence or addresses leftover issues, and whether an insight-only plan would leave the core symptoms largely untouched.",
        credit: 1.0,
      },
      {
        text: "ERP is probably the safer bet; we could lean that way.",
        credit: 0.6,
      },
      {
        text: "The clinicians disagree about which therapy to use.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'ERP should anchor with meaning work as complement' lead from the rival 'psychodynamic therapy alone is just as likely to work,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: begin with ERP and track whether her ritual time falls as the evidence predicts — a clear reduction confirms ERP as the right anchor. My lead is refuted if, in her case, insight-only therapy reduces the rituals just as much and as quickly as ERP, which would undercut anchoring on ERP.",
      yieldAnchors: [
        "Moderate OCD",
        "She is capable and motivated",
        "She asks for the best odds",
      ],
      riskAnchors: [
        "ERP reduces rituals as expected",
        "Meaning work improves adherence or residual themes",
        "Insight-only leaves core symptoms untouched",
      ],
      defeatedBy: [
        "Insight-only reduces rituals as fast as ERP",
        "ERP fails to change her rituals at all",
      ],
    },
    correctAnswer:
      "The best-supported answer is that ERP (with or without an SSRI) has the strongest evidence and should anchor the plan, while psychodynamic, meaning-focused work can complement it for engagement or residual themes — not replace it; test whether ERP reduces her rituals as expected, whether adding meaning work improves adherence or addresses leftover issues, and whether an insight-only plan would leave the core symptoms largely untouched.",
    explanation:
      "Full credit anchors on the best-supported ERP plan with complementary meaning work and is paired with a does-ERP-reduce-rituals test; 'experts disagree so anything goes' is the dodge the comparative evidence defeats.",
  },
];

const written: HomeworkItem[] = [
  {
    itemType: "written",
    prompt:
      "A woman with disabling contamination OCD has spent two years in insight-oriented therapy. She can describe the childhood roots of her fears in vivid detail, yet she still washes until her skin bleeds and avoids leaving home. She wonders whether she should 'stay the course' or try something else. In one paragraph, propose the strongest conclusion about what the evidence supports for her care and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that two years of insight without symptom change is good reason to change the plan toward exposure and response prevention — the first-line, best-supported treatment for contamination OCD — while keeping whatever understanding has genuinely helped, since meaning-focused work and ERP are complements rather than rivals. This is a strong, falsifiable claim: it predicts her washing and avoidance should fall once structured response prevention begins, that the prior insight-only years left the rituals essentially unchanged, and that combining the approaches should beat continuing insight alone. I would test it by introducing a graded ERP course and tracking her daily washing time and housebound hours, by reviewing whether her symptoms moved at all during the insight-only period, and by watching whether gains appear specifically once exposures start rather than from more talking — and I would revise toward the insight-only plan only if her rituals were already steadily declining without ERP.",
      yieldAnchors: [
        "Two years of insight-oriented therapy",
        "She washes until her skin bleeds",
        "She can describe the roots but hasn't changed",
      ],
      riskAnchors: [
        "Washing falls once response prevention begins",
        "The insight-only years left rituals unchanged",
        "The combined approach beats insight alone",
      ],
      defeatedBy: [
        "Her rituals were already declining on insight alone",
        "ERP produces no change in her washing",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that two years of insight without symptom change is good reason to change the plan toward exposure and response prevention — the first-line, best-supported treatment for contamination OCD — while keeping whatever understanding has genuinely helped, since meaning-focused work and ERP are complements rather than rivals. This is a strong, falsifiable claim: it predicts her washing and avoidance should fall once structured response prevention begins, that the prior insight-only years left the rituals essentially unchanged, and that combining the approaches should beat continuing insight alone. I would test it by introducing a graded ERP course and tracking her daily washing time and housebound hours, by reviewing whether her symptoms moved at all during the insight-only period, and by watching whether gains appear specifically once exposures start rather than from more talking — and I would revise toward the insight-only plan only if her rituals were already steadily declining without ERP.",
    explanation:
      "Under the inverted standard, 'stay the course, the deep work just needs more time' earns near-zero; top credit commits to evidence-based ERP and names a does-washing-fall-once-response-prevention-starts test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A father is tortured by intrusive thoughts of harming his children, has never been violent, and is so frightened by the thoughts that he refuses to be alone with them and has quit his job to avoid 'risk.' A previous therapist treated him only with reassurance and avoidance. In one paragraph, propose the strongest conclusion about what the evidence supports and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that these are classic ego-dystonic harm obsessions — marked by horror rather than any wish to act — that the reassurance and avoidance are compulsions feeding the cycle, and that the evidence-based treatment is exposure and response prevention, including imaginal exposure to the feared thoughts, with meaning-focused work optional alongside. This is a strong, falsifiable claim: it predicts the intrusions have grown worse the more he avoids, that his reaction is revulsion and fear rather than urge or plan, and that facing the thoughts without neutralizing will loosen their grip. I would test it by assessing his relationship to the thoughts (resistance and distress, not intent), by tracking whether avoidance has amplified the obsessions, and by beginning graded imaginal exposure with response prevention and watching the intrusions fade — and I would shift to a risk-focused plan only if he ever reported a genuine wish, plan, or pleasure connected to harming them.",
      yieldAnchors: [
        "Intrusive harm thoughts about his children",
        "He has never been violent and is horrified",
        "He quit his job to avoid risk",
      ],
      riskAnchors: [
        "Intrusions worsened with avoidance",
        "His reaction is revulsion, not urge",
        "Facing thoughts without neutralizing loosens them",
      ],
      defeatedBy: [
        "He reports a real wish or plan to harm them",
        "He feels pleasure rather than dread at the thoughts",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that these are classic ego-dystonic harm obsessions — marked by horror rather than any wish to act — that the reassurance and avoidance are compulsions feeding the cycle, and that the evidence-based treatment is exposure and response prevention, including imaginal exposure to the feared thoughts, with meaning-focused work optional alongside. This is a strong, falsifiable claim: it predicts the intrusions have grown worse the more he avoids, that his reaction is revulsion and fear rather than urge or plan, and that facing the thoughts without neutralizing will loosen their grip. I would test it by assessing his relationship to the thoughts (resistance and distress, not intent), by tracking whether avoidance has amplified the obsessions, and by beginning graded imaginal exposure with response prevention and watching the intrusions fade — and I would shift to a risk-focused plan only if he ever reported a genuine wish, plan, or pleasure connected to harming them.",
    explanation:
      "The inverted standard gives near-zero to 'exposure is too dangerous, keep reassuring and avoiding'; top credit commits to imaginal ERP for ego-dystonic obsessions and names an assess-his-relationship-to-the-thoughts test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A man with severe OCD has gained partial relief from a maximized SSRI but still spends three hours a day checking. His doctor suggests simply switching to yet another medication; the patient asks whether there's a better-supported path. In one paragraph, propose the strongest conclusion about what the evidence supports and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that, with a partial response to a maximized SSRI, the best-supported next step is to add exposure and response prevention — the combination outperforms medication alone for residual OCD — rather than reflexively cycling to another pill, while keeping the medication that already helped. This is a strong, falsifiable claim: it predicts his three hours of daily checking should fall further once structured ERP begins, that the added benefit should track the exposure practice rather than any new drug, and that gains should hold as he keeps using response prevention. I would test it by adding ERP while holding his current SSRI steady and tracking daily checking time, by checking whether improvement follows the exposures rather than a medication change, and by watching whether dropping the ERP practice lets the checking creep back — and I would favor a medication switch only if a proper ERP trial added nothing.",
      yieldAnchors: [
        "Partial relief from a maximized SSRI",
        "Three hours a day checking",
        "Doctor proposes another medication",
      ],
      riskAnchors: [
        "Checking falls further once ERP begins",
        "Benefit tracks exposure, not a new drug",
        "Gains hold with continued response prevention",
      ],
      defeatedBy: [
        "A proper ERP trial adds nothing",
        "His checking is already near zero on medication",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that, with a partial response to a maximized SSRI, the best-supported next step is to add exposure and response prevention — the combination outperforms medication alone for residual OCD — rather than reflexively cycling to another pill, while keeping the medication that already helped. This is a strong, falsifiable claim: it predicts his three hours of daily checking should fall further once structured ERP begins, that the added benefit should track the exposure practice rather than any new drug, and that gains should hold as he keeps using response prevention. I would test it by adding ERP while holding his current SSRI steady and tracking daily checking time, by checking whether improvement follows the exposures rather than a medication change, and by watching whether dropping the ERP practice lets the checking creep back — and I would favor a medication switch only if a proper ERP trial added nothing.",
    explanation:
      "Near-zero goes to 'just keep switching medications' and to 'pills are a crutch, stop them'; top credit commits to adding ERP to an effective SSRI and names a does-checking-fall-with-ERP test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A young woman with checking and counting rituals has decided treatment is pointless after reading that 'OCD is incurable.' She has never tried ERP or medication and is ready to give up on getting better. In one paragraph, propose the strongest conclusion about what the evidence actually supports and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that her pessimism is unwarranted: OCD is among the more treatable conditions, with ERP and SSRIs both well-supported and most patients improving substantially, so the fact that she has never tried either treatment — not any failure of treatment — best explains her despair. This is a strong, falsifiable claim: it predicts that a proper course of ERP should measurably reduce her checking and counting, that her belief 'nothing works' should soften as she sees early gains, and that her hopelessness traces to inexperience rather than a true ceiling. I would test it by starting a graded ERP course (with or without an SSRI) and tracking her ritual time over weeks, by noting whether her outlook shifts as symptoms drop, and by distinguishing never-tried from genuinely-tried-and-failed — and I would take her 'incurable' claim seriously only if well-delivered, fully-practiced treatment produced no change at all.",
      yieldAnchors: [
        "She believes OCD is incurable",
        "She has never tried ERP or medication",
        "She is ready to give up",
      ],
      riskAnchors: [
        "A course of ERP reduces her rituals",
        "Her pessimism softens with early gains",
        "Despair traces to inexperience, not a ceiling",
      ],
      defeatedBy: [
        "Well-delivered treatment produces no change",
        "She has already fully tried ERP and medication",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that her pessimism is unwarranted: OCD is among the more treatable conditions, with ERP and SSRIs both well-supported and most patients improving substantially, so the fact that she has never tried either treatment — not any failure of treatment — best explains her despair. This is a strong, falsifiable claim: it predicts that a proper course of ERP should measurably reduce her checking and counting, that her belief 'nothing works' should soften as she sees early gains, and that her hopelessness traces to inexperience rather than a true ceiling. I would test it by starting a graded ERP course (with or without an SSRI) and tracking her ritual time over weeks, by noting whether her outlook shifts as symptoms drop, and by distinguishing never-tried from genuinely-tried-and-failed — and I would take her 'incurable' claim seriously only if well-delivered, fully-practiced treatment produced no change at all.",
    explanation:
      "The inverted standard gives near-zero to 'she's right, OCD can't be treated'; top credit corrects with the strong ERP/SSRI evidence and names a does-a-course-reduce-her-rituals test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A man completes ERP with his washing rituals nearly gone, but a year later he develops new symmetry compulsions, and he notices both flared during periods of unspoken anger at his domineering father. He asks whether ERP 'didn't really work' or whether something deeper is at play. In one paragraph, propose the strongest conclusion about what the evidence supports for his ongoing care and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that the ERP genuinely worked on the washing — that gain is real and worth protecting — while the new symmetry compulsions are best met with more ERP plus, this time, meaning-focused work on the conflict the symptoms seem to track, since both flares cluster around unspoken anger at his father; ERP and psychodynamic understanding here are complements, not rivals. This is a strong, falsifiable claim: it predicts the washing should stay reduced even as new symptoms appear, that the symmetry rituals should fall with fresh ERP, and that both should ease as the warded-off anger at his father is named and worked through. I would test it by tracking the washing and the new compulsions separately, by checking whether the flares really coincide with periods of conflict with his father rather than occurring at random, and by adding meaning-focused work to ERP and watching whether symptom-shifting slows — and I would drop the conflict hypothesis if the flares bear no relation to his father and respond fully to ERP alone.",
      yieldAnchors: [
        "Washing rituals nearly gone after ERP",
        "New symmetry compulsions a year later",
        "Both flared during unspoken anger at his father",
      ],
      riskAnchors: [
        "Washing stays reduced as new symptoms appear",
        "Symmetry rituals fall with fresh ERP",
        "Both ease as the anger is named and worked through",
      ],
      defeatedBy: [
        "The flares bear no relation to his father",
        "The original washing returned, showing ERP failed",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that the ERP genuinely worked on the washing — that gain is real and worth protecting — while the new symmetry compulsions are best met with more ERP plus, this time, meaning-focused work on the conflict the symptoms seem to track, since both flares cluster around unspoken anger at his father; ERP and psychodynamic understanding here are complements, not rivals. This is a strong, falsifiable claim: it predicts the washing should stay reduced even as new symptoms appear, that the symmetry rituals should fall with fresh ERP, and that both should ease as the warded-off anger at his father is named and worked through. I would test it by tracking the washing and the new compulsions separately, by checking whether the flares really coincide with periods of conflict with his father rather than occurring at random, and by adding meaning-focused work to ERP and watching whether symptom-shifting slows — and I would drop the conflict hypothesis if the flares bear no relation to his father and respond fully to ERP alone.",
    explanation:
      "Near-zero goes to 'ERP failed' and to 'symptoms are random, nothing connects them'; top credit protects the real ERP gain, adds ERP plus meaning work for the conflict-linked new symptoms, and names a do-the-flares-track-the-father test that could refute it.",
  },
];

export const section: SectionContent = {
  slug: "psychodynamic-meets-evidence",
  title: "Where Psychodynamic Meets the Evidence: ERP, CBT, and Integration",
  weekNumber: 1,
  blurb:
    "OCD has genuinely effective, well-tested treatments — exposure and response prevention (ERP), cognitive behavioral therapy, and medication — and a meaning-focused, psychodynamic understanding works best when it complements those proven tools rather than replacing them. This section is about reading what the evidence actually supports for a given case, and naming the cheapest observation that would change the plan.",
  lectureTitle:
    "1.6 Where Psychodynamic Meets the Evidence: ERP, CBT, and integration",
  body: `# Where Psychodynamic Meets the Evidence: ERP, CBT, and Integration

It is one thing to understand what an obsession might mean; it is another to know what actually helps a person stop washing until their skin bleeds. OCD is, happily, one of the more treatable conditions in mental health — and that is not a matter of opinion but of decades of careful study. This section is about taking the evidence seriously: knowing which treatments have the strongest track record, knowing where a meaning-focused understanding fits, and resisting two opposite temptations — the purist who dismisses proven methods as "shallow," and the defeatist who shrugs that "nothing really works." The strongest reasoning here commits to the best-supported plan for the case in front of you and names the cheap observation that would tell you to change course.

## What the evidence actually says about OCD

For OCD specifically, the research points in a clear direction. Exposure and response prevention — gradually facing the feared thing while resisting the ritual — has the strongest record of any treatment, and certain medications (SSRIs, often at higher doses than for depression) also help many people. Most patients who get a proper course of these treatments improve substantially. That is the backdrop against which every individual decision should be read: when someone has never tried the well-supported options, "nothing works for me" usually means "I haven't yet had what works."

## ERP: facing the fear, dropping the ritual

ERP can sound harsh — why deliberately make an anxious person more anxious? But the brief, planned distress is the mechanism, not a side effect. When a person touches the doorknob and does not wash, the feared catastrophe does not come, and the anxiety, given time, falls on its own. Do that again and again, up a graded ladder of difficulty, and the whole loop weakens. The distress during a good exposure should fall across sessions; if it only ever mounts, something about the delivery — too steep a step, too little engagement — needs fixing, not abandoning.

## CBT and medication

Cognitive and behavioral work helps people see the faulty rules driving the rituals ("a thought about harm means I am dangerous") and test them against reality. Medication can take enough edge off the anxiety that the harder work of exposure becomes possible. For many people the combination of ERP and an SSRI outperforms either alone, especially when symptoms are severe or only partly relieved by one approach. Knowing this keeps us from two errors: treating medication as a "crutch" to be refused, and treating it as a complete answer that makes therapy unnecessary.

## Where a meaning-focused view fits

So what becomes of the psychodynamic, meaning-focused understanding this course has been building? It complements the evidence-based core; it does not compete with it. Understanding why a particular person dreads a particular thing can make exposures sharper and more personal, can strengthen the alliance so a frightened patient stays in treatment, and can address the older themes — shame, unworthiness, buried conflict — that the exposures themselves do not touch. The integration is the point: ERP to break the loop, meaning to address what the loop was carrying.

## When insight should complement, not replace

The clearest sign that meaning work belongs is a residue that the symptom relief leaves behind: a man whose washing is gone but who still feels "morally dirty," a woman whose rituals lifted but who keeps choosing partners who belittle her. These older patterns have their own history, independent of the OCD, and respond to being understood and worked through. The trap is letting insight stand in for the proven treatment — three years of eloquent self-explanation while the rituals consume the day is not "deep work in progress"; it is a plan that needs ERP added to it.

## The two dodges: purism and despair

There are two ways to go wrong here, and they look like opposites. The first is anti-evidence purism: dismissing ERP as "just symptom-suppression," insisting that only uncovering the root can truly cure, calling exposure "cruel." The second is therapeutic defeatism: "OCD is incurable," "nothing really works," "no approach beats any other." Both ignore what the evidence plainly shows, and both leave a treatable person untreated. Under this course's inverted grading, both earn near-zero — they refuse to commit where the evidence supports commitment.

## Reading the evidence — and naming a test

The honest move is the same as everywhere else in this course: commit to the best-supported reading and name the cheap observation that could prove you wrong. "Add ERP to her partially-effective medication" is a real claim, because it predicts her ritual time should fall once exposures begin — and you can measure that. "Keep the ERP gains and add meaning work for the leftover shame" is a real claim, because it predicts the rituals stay gone while the older theme persists on its own history — and you can check that too. The weak move is to stop at "she has OCD and should get help" (which decides nothing), and the worst move is either dodge. The strongest plan is the one that both fits the evidence and spells out the single result that would make you revise it.

## In the real world

Suppose a friend with disabling checking tells you she's read that OCD is a lifelong disease nothing can fix, so she won't bother trying. The dodge is to agree sympathetically — it sounds kind, but it abandons her to a treatable illness. The evidence-based move commits to a reading and a test: OCD responds well to ERP and to medication, most people improve, and she has simply never tried either — so the prediction is that a proper course should measurably reduce her checking and that her despair should ease as she sees the first gains. If well-delivered, fully-practiced treatment truly changed nothing, you'd revise. But you don't start from surrender, and you don't start from purism. You start from what the evidence supports — and you name exactly what would tell you you're wrong.`,
  homework: {
    mcq,
    hybrid,
    written,
  },
};
