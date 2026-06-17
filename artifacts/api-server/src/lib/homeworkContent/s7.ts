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
      "A man finishes a course of exposure work and no longer checks the locks before bed. Within a few weeks, though, he starts silently repeating a reassuring phrase to himself every time he leaves the house — in the same situations that used to trigger checking. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He seems to have picked up a new little ritual.",
        credit: 0.3,
      },
      {
        text: "The lock-checking eased without working through his underlying intolerance of doubt, so the same function has migrated into a quieter mental ritual — the surface behavior changed but its job did not; test whether the phrase appears in the exact situations checking used to, whether it spikes when he feels most uncertain about safety, and whether it fades once the fear of being responsible for a catastrophe is faced rather than soothed.",
        credit: 1.0,
      },
      {
        text: "Rituals come and go on their own for no reason, so a new one means nothing and there's nothing here to understand.",
        credit: 0,
      },
      {
        text: "He's probably just swapped one habit for another; we could keep an eye on it.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The lock-checking eased without working through his underlying intolerance of doubt, so the same function has migrated into a quieter mental ritual — the surface behavior changed but its job did not; test whether the phrase appears in the exact situations checking used to, whether it spikes when he feels most uncertain about safety, and whether it fades once the fear of being responsible for a catastrophe is faced rather than soothed.",
    explanation:
      "Top credit reads the new mental ritual as the old function migrating because relief came without working through, and names a same-situations test; \"rituals come and go for no reason\" is the dodge the exact substitution defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A woman in therapy can explain eloquently that her contamination fears trace to a wish to feel morally clean after her mother's death — yet she still washes for two hours a day and avoids her own kitchen. Which conclusion best follows?",
    mcOptions: [
      {
        text: "If she already understands the cause, the washing should be gone — so her insight must be fake and there is nothing left to do.",
        credit: 0,
      },
      {
        text: "She washes a great deal even though she understands why.",
        credit: 0.3,
      },
      {
        text: "Her insight has outrun her symptom relief — understanding the meaning has not yet changed the behavior, so working through must pair that understanding with actually facing the feared dirt and uncertainty; test whether her washing time drops only when she practices resisting the urge rather than merely discussing it, whether the explanation she recites carries felt emotion or stays purely intellectual, and whether linking the washing to the grief in the moment of the urge reduces it.",
        credit: 1.0,
      },
      {
        text: "She gets it but still washes; we could keep exploring what it means.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Her insight has outrun her symptom relief — understanding the meaning has not yet changed the behavior, so working through must pair that understanding with actually facing the feared dirt and uncertainty; test whether her washing time drops only when she practices resisting the urge rather than merely discussing it, whether the explanation she recites carries felt emotion or stays purely intellectual, and whether linking the washing to the grief in the moment of the urge reduces it.",
    explanation:
      "Full credit reads understanding-without-behavior-change as insight outrunning relief and names a resist-the-urge test; \"if she understands it the washing should be gone, so it's fake\" is the overreach the persistence of a real, meaningful symptom defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "After treatment, a man who used to count to ward off \"bad luck\" attends a funeral, feels the old urge to count, chooses not to, and finds himself feeling plain sadness instead of anxiety. He remarks that the counting \"used to keep the sadness away.\" Which conclusion best follows?",
    mcOptions: [
      {
        text: "He managed not to count at the funeral.",
        credit: 0.3,
      },
      {
        text: "One good moment proves nothing about OCD, which is too unpredictable to read either way.",
        credit: 0,
      },
      {
        text: "Change is consolidating: he can meet the trigger without the ritual and tolerate the very feeling — grief — the counting used to bind, which is the sign symptom relief and insight are joining; test whether he can repeatedly face such triggers without the urge escalating, whether the freed-up sadness stays bearable rather than driving a new compulsion, and whether dropping the ritual now reliably leaves feeling rather than a fresh symptom.",
        credit: 1.0,
      },
      {
        text: "He seems to be doing better; we could check in again later.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Change is consolidating: he can meet the trigger without the ritual and tolerate the very feeling — grief — the counting used to bind, which is the sign symptom relief and insight are joining; test whether he can repeatedly face such triggers without the urge escalating, whether the freed-up sadness stays bearable rather than driving a new compulsion, and whether dropping the ritual now reliably leaves feeling rather than a fresh symptom.",
    explanation:
      "Top credit reads facing-the-trigger-while-feeling-the-bound-emotion as consolidation and names a repeatable-trigger test; \"one good moment proves nothing\" is the dodge the linked relief-plus-tolerated-grief defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A woman symptom-free for a year after exposure work relapses into intense checking the month she starts a high-pressure new job — and the checking fixes entirely on \"did I make a catastrophic mistake at work today?\" Which conclusion best follows?",
    mcOptions: [
      {
        text: "The relapse suggests her fear of being responsible for disaster was relieved but never fully worked through, so a new stressor that loads that exact fear has reactivated the old solution; test whether the relapse content maps onto the job's specific responsibility pressures, whether it eases as she processes the dread of failing rather than only resuming exposures, and whether booster exposure paired with naming that fear settles it faster than exposure alone.",
        credit: 1.0,
      },
      {
        text: "She seems to be checking again since starting the job.",
        credit: 0.3,
      },
      {
        text: "The new job probably set off her OCD again; we could restart treatment.",
        credit: 0.6,
      },
      {
        text: "Relapse means the therapy never really worked, so there's nothing to learn from when it came back.",
        credit: 0,
      },
    ],
    correctAnswer:
      "The relapse suggests her fear of being responsible for disaster was relieved but never fully worked through, so a new stressor that loads that exact fear has reactivated the old solution; test whether the relapse content maps onto the job's specific responsibility pressures, whether it eases as she processes the dread of failing rather than only resuming exposures, and whether booster exposure paired with naming that fear settles it faster than exposure alone.",
    explanation:
      "Full credit reads the job-triggered, responsibility-themed relapse as an unaddressed conflict reactivated and names a content-maps-onto-the-job test; \"relapse means the therapy never worked\" is the dodge the year of remission and specific timing defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "A man completes a brief course of exposure work; his washing drops to almost nothing, but he says he has \"no idea why I ever did it\" and feels strangely uneasy, as though \"something's missing.\" Which conclusion best follows?",
    mcOptions: [
      {
        text: "He seems uneasy even though the washing stopped.",
        credit: 0.3,
      },
      {
        text: "Maybe the treatment left something unfinished; we could talk it over.",
        credit: 0.6,
      },
      {
        text: "Relief without any working-through of what the washing was for can leave the original conflict untouched and the gain brittle, and his unease may mark a feeling the ritual used to manage now lacking an outlet; test whether the uneasy feeling shows up in the same situations washing used to, whether a new symptom emerges to take the washing's place, and whether briefly exploring what the ritual protected him from eases the \"something's missing\" sense.",
        credit: 1.0,
      },
      {
        text: "If the washing is gone, the treatment is a complete success and the uneasy feeling is irrelevant.",
        credit: 0,
      },
    ],
    correctAnswer:
      "Relief without any working-through of what the washing was for can leave the original conflict untouched and the gain brittle, and his unease may mark a feeling the ritual used to manage now lacking an outlet; test whether the uneasy feeling shows up in the same situations washing used to, whether a new symptom emerges to take the washing's place, and whether briefly exploring what the ritual protected him from eases the \"something's missing\" sense.",
    explanation:
      "Top credit reads symptom-gone-but-uneasy as relief without working-through leaving the conflict live, and names a watch-for-a-replacement test; \"the washing's gone so it's a complete success\" is the overreach the lingering unease defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A patient announces she is \"completely over\" her harm obsessions and refuses to discuss them again, changing the subject whenever they arise. Her rituals have stopped — but she still won't go near knives or hold her baby alone. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She says she's over it, so she's cured, and pushing further would only stir up trouble.",
        credit: 0,
      },
      {
        text: "Her rituals are gone but the fear is not worked through — avoidance has simply replaced compulsion, so the relief is partly cosmetic; test whether she still steers around the feared objects and situations, whether her refusal to discuss tightens specifically when harm themes arise, and whether the avoidance shrinks once the harm thought is faced as a thought rather than treated as a danger.",
        credit: 1.0,
      },
      {
        text: "She has stopped her rituals but avoids knives and being alone with the baby.",
        credit: 0.3,
      },
      {
        text: "She might still be afraid underneath; we could gently revisit it.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Her rituals are gone but the fear is not worked through — avoidance has simply replaced compulsion, so the relief is partly cosmetic; test whether she still steers around the feared objects and situations, whether her refusal to discuss tightens specifically when harm themes arise, and whether the avoidance shrinks once the harm thought is faced as a thought rather than treated as a danger.",
    explanation:
      "Full credit reads continued avoidance as the fear surviving the ritual's end and names a does-she-still-steer-around-triggers test; \"she says she's over it so she's cured\" is the overreach her ongoing avoidance defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "After her solo checking rituals stop, a woman begins phoning her husband a dozen times a day to ask whether she locked the door — handing him the checking she used to do herself. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She seems to lean on her husband a lot now; we could look into it.",
        credit: 0.6,
      },
      {
        text: "She calls her husband often to ask about the door.",
        credit: 0.3,
      },
      {
        text: "The compulsion has migrated from solo checking into reassurance-seeking through her husband — same function, new vehicle — so working through requires response prevention for the reassurance too and facing the doubt itself; test whether the calls cluster around the exact triggers checking used to, whether her anxiety simply transfers in full when he can't answer, and whether tolerating the uncertainty without his confirmation reduces both.",
        credit: 1.0,
      },
      {
        text: "Asking a spouse a question is normal married life, so there's nothing here worth reading into.",
        credit: 0,
      },
    ],
    correctAnswer:
      "The compulsion has migrated from solo checking into reassurance-seeking through her husband — same function, new vehicle — so working through requires response prevention for the reassurance too and facing the doubt itself; test whether the calls cluster around the exact triggers checking used to, whether her anxiety simply transfers in full when he can't answer, and whether tolerating the uncertainty without his confirmation reduces both.",
    explanation:
      "Top credit reads the calls as checking outsourced to her husband and names a does-anxiety-transfer-when-he-can't-answer test; \"asking a spouse is normal\" is the dodge the dozen-times-a-day, same-trigger pattern defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A man recites, in a flat and detached tone, a textbook account of how his need for symmetry \"represents a wish for control\" — but he shows no feeling, and the arranging compulsions are exactly as frequent as before. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He plainly understands his OCD deeply, so the therapy has done its job.",
        credit: 0,
      },
      {
        text: "He can explain his compulsions but still does them.",
        credit: 0.3,
      },
      {
        text: "His understanding doesn't seem to have helped yet; we could keep working on it.",
        credit: 0.6,
      },
      {
        text: "The insight is intellectualized — itself a defense that lets him discuss the meaning while keeping the feeling at arm's length, so it changes nothing; working through needs the understanding to connect to live emotion at the moment of the urge; test whether any feeling surfaces when he resists arranging, whether the recited explanation ever shifts his behavior, and whether tying the urge to a felt loss of control rather than a concept finally moves it.",
        credit: 1.0,
      },
    ],
    correctAnswer:
      "The insight is intellectualized — itself a defense that lets him discuss the meaning while keeping the feeling at arm's length, so it changes nothing; working through needs the understanding to connect to live emotion at the moment of the urge; test whether any feeling surfaces when he resists arranging, whether the recited explanation ever shifts his behavior, and whether tying the urge to a felt loss of control rather than a concept finally moves it.",
    explanation:
      "Full credit reads flat, behavior-free understanding as intellectualized defense and names a does-feeling-appear-when-he-resists test; \"he understands it deeply so therapy did its job\" is the overreach the unchanged compulsions defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "Six months after treatment a woman has a hard week and washes \"the old way\" twice — but she catches herself, links it to a sick relative, and returns to her plan without spiraling. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She washed a couple of times this week.",
        credit: 0.3,
      },
      {
        text: "She slipped a little but seems okay; we could watch how it goes.",
        credit: 0.6,
      },
      {
        text: "Any return of washing means the treatment failed and she is back to square one.",
        credit: 0,
      },
      {
        text: "This looks like a lapse rather than a relapse — change is consolidating, because she can recognize the slip, tie it to a trigger, and self-correct with what she learned; test whether such slips stay brief and self-limited, whether she can name the feared feeling each time, and whether her baseline holds across months despite the occasional lapse.",
        credit: 1.0,
      },
    ],
    correctAnswer:
      "This looks like a lapse rather than a relapse — change is consolidating, because she can recognize the slip, tie it to a trigger, and self-correct with what she learned; test whether such slips stay brief and self-limited, whether she can name the feared feeling each time, and whether her baseline holds across months despite the occasional lapse.",
    explanation:
      "Top credit reads recognize-link-self-correct as a consolidating lapse and names a do-slips-stay-self-limited test; \"any washing means total failure\" is the overreach her quick self-correction defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A teenager's counting rituals clear up with exposure work, but within two months he develops daily stomachaches — medical tests all clean — that are worst right before school exams, the very situations counting used to manage. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The performance dread the counting used to bind likely lost its outlet when the ritual stopped and has re-emerged as a bodily symptom, so the underlying conflict was not worked through; test whether the stomachaches occupy the exact trigger situations counting did, whether they ease once the fear of failing is named and faced, and whether they began only after the rituals stopped and not before.",
        credit: 1.0,
      },
      {
        text: "The stomachaches might be linked to his old anxiety; we could keep tracking them.",
        credit: 0.6,
      },
      {
        text: "Stomachaches have countless physical causes, so connecting them to his former OCD is reading too much in.",
        credit: 0,
      },
      {
        text: "He gets stomachaches before exams now.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The performance dread the counting used to bind likely lost its outlet when the ritual stopped and has re-emerged as a bodily symptom, so the underlying conflict was not worked through; test whether the stomachaches occupy the exact trigger situations counting did, whether they ease once the fear of failing is named and faced, and whether they began only after the rituals stopped and not before.",
    explanation:
      "Full credit reads exam-timed stomachaches in the old trigger slot as the bound dread re-emerging and names a did-they-start-only-after-rituals-stopped test; \"stomachaches have countless causes\" is the dodge the clean tests and exact trigger-matching defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "Three weeks in, a patient wants to stop therapy the moment his visible rituals vanish, declaring \"problem solved\" — though he has never once faced his worst feared situation and still arranges his life to avoid it. Which conclusion best follows?",
    mcOptions: [
      {
        text: "His rituals have stopped after three weeks.",
        credit: 0.3,
      },
      {
        text: "His rituals are gone, so he has recovered and continuing would just waste everyone's time.",
        credit: 0,
      },
      {
        text: "Stopping now risks leaving the core fear un-worked-through, since fast surface relief that never confronts the worst trigger tends to relapse; test whether he can face the avoided situation without a ritual before terminating, whether his gains survive a deliberately provoked trigger, and whether a planned booster period prevents the return an abrupt stop would invite.",
        credit: 1.0,
      },
      {
        text: "It might be early to stop; we could suggest a few more sessions.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Stopping now risks leaving the core fear un-worked-through, since fast surface relief that never confronts the worst trigger tends to relapse; test whether he can face the avoided situation without a ritual before terminating, whether his gains survive a deliberately provoked trigger, and whether a planned booster period prevents the return an abrupt stop would invite.",
    explanation:
      "Top credit reads untested-worst-fear-plus-avoidance as incomplete working-through and names a can-he-face-the-avoided-situation test; \"rituals gone so he's recovered\" is the overreach his persisting avoidance defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A woman no longer performs any rituals, but she describes each day as an exhausting battle to \"hold the urges down\" by sheer willpower, dreading every trigger as much as ever. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She's white-knuckling it a bit; we could keep supporting her.",
        credit: 0.6,
      },
      {
        text: "She is suppressing rather than working through — the urge and the fear beneath it are still fully charged and only held back by effort, which is brittle and apt to break under load; test whether her distress at triggers actually falls over time rather than staying maxed out, whether she can approach triggers willingly instead of gritting through them, and whether the effort eases once the feared outcome is faced and disconfirmed.",
        credit: 1.0,
      },
      {
        text: "She doesn't do rituals but finds each day a struggle.",
        credit: 0.3,
      },
      {
        text: "She has stopped all rituals, so she is fully recovered regardless of how it feels.",
        credit: 0,
      },
    ],
    correctAnswer:
      "She is suppressing rather than working through — the urge and the fear beneath it are still fully charged and only held back by effort, which is brittle and apt to break under load; test whether her distress at triggers actually falls over time rather than staying maxed out, whether she can approach triggers willingly instead of gritting through them, and whether the effort eases once the feared outcome is faced and disconfirmed.",
    explanation:
      "Full credit reads constant maximal effort with undiminished dread as suppression, not working-through, and names a does-distress-actually-fall test; \"no rituals means fully recovered\" is the overreach her unrelenting struggle defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "Months after being treated for contamination fears, a man notices he has also become less rigid about lateness and better able to sit with uncertainty at work — changes no one targeted directly. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Unrelated traits can shift for any reason, so linking them to his OCD treatment is pure guesswork.",
        credit: 0,
      },
      {
        text: "He seems more relaxed in a few areas now.",
        credit: 0.3,
      },
      {
        text: "The working-through likely reached a general intolerance of uncertainty sitting under several rigidities, so the gains generalize beyond the treated symptom — a mark of durable, structural change rather than a narrow fix; test whether the spread tracks situations sharing the uncertainty theme, whether it holds at long-term follow-up, and whether it is absent for traits unrelated to that theme.",
        credit: 1.0,
      },
      {
        text: "His treatment may have had broader effects; we could ask about other areas.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The working-through likely reached a general intolerance of uncertainty sitting under several rigidities, so the gains generalize beyond the treated symptom — a mark of durable, structural change rather than a narrow fix; test whether the spread tracks situations sharing the uncertainty theme, whether it holds at long-term follow-up, and whether it is absent for traits unrelated to that theme.",
    explanation:
      "Top credit reads theme-linked spread of gains as generalized structural change and names a does-it-track-the-uncertainty-theme test; \"traits shift for any reason\" is the dodge the coherent, theme-specific spread defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "After two years of meaning-focused talk therapy, a man understands his washing in rich detail — but the behavior has barely budged, and he has never done any structured exposure. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He understands his washing well but still washes.",
        credit: 0.3,
      },
      {
        text: "Talk alone hasn't shifted it; we could consider another approach.",
        credit: 0.6,
      },
      {
        text: "Real change can only come from insight, so adding exposure would just paper over the symptom — there's nothing more worth trying.",
        credit: 0,
      },
      {
        text: "Insight without exposure has left the behavior intact, since understanding alone rarely dislodges an entrenched compulsion, so working through here means adding response prevention to the meaning work; test whether introducing structured exposure finally moves the washing, whether the stubbornness reflects his never having faced the feared dirt, and whether combining understanding with exposure outperforms either alone for him.",
        credit: 1.0,
      },
    ],
    correctAnswer:
      "Insight without exposure has left the behavior intact, since understanding alone rarely dislodges an entrenched compulsion, so working through here means adding response prevention to the meaning work; test whether introducing structured exposure finally moves the washing, whether the stubbornness reflects his never having faced the feared dirt, and whether combining understanding with exposure outperforms either alone for him.",
    explanation:
      "Full credit reads rich-understanding-with-zero-behavior-change as insight needing exposure added and names a does-adding-exposure-move-it test; \"only insight produces real change\" is the anti-evidence dodge the two unmoved years defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "Across three relationships since treatment, a man relapses into scrupulosity rituals each time a romance turns toward serious commitment — and at no other time. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Commitment seems to set off his rituals; we could explore his relationships.",
        credit: 0.6,
      },
      {
        text: "Relationships are complicated and relapses happen, so there's no pattern worth reading in when his rituals return.",
        credit: 0,
      },
      {
        text: "He starts doing rituals again when relationships get serious.",
        credit: 0.3,
      },
      {
        text: "The relapses, timed only to deepening commitment, suggest the rituals still serve a conflict about intimacy and guilt that symptom relief never worked through, reactivated whenever closeness loads it; test whether the relapses cluster precisely as commitment deepens and not otherwise, whether processing the guilt and fear around intimacy settles them better than exposures alone, and whether they fade once that conflict is named.",
        credit: 1.0,
      },
    ],
    correctAnswer:
      "The relapses, timed only to deepening commitment, suggest the rituals still serve a conflict about intimacy and guilt that symptom relief never worked through, reactivated whenever closeness loads it; test whether the relapses cluster precisely as commitment deepens and not otherwise, whether processing the guilt and fear around intimacy settles them better than exposures alone, and whether they fade once that conflict is named.",
    explanation:
      "Top credit reads commitment-only relapses as an unaddressed intimacy conflict reactivated and names a do-they-cluster-only-at-deepening-commitment test; \"relapses just happen\" is the dodge the three-times, commitment-specific timing defeats.",
  },
];

const hybrid: HomeworkItem[] = [
  {
    itemType: "hybrid",
    prompt:
      "A woman's hours of bedtime checking resolve after exposure work. A month later she begins counting her keystrokes in sets of four whenever she sends an important email — a behavior she never had before. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She seems to have a new counting habit at work.",
        credit: 0.3,
      },
      {
        text: "The checking eased without working through her need for certainty before acting, so the same function has reappeared as counting at the moment she most fears a mistake — new form, old job; test whether the counting attaches specifically to high-stakes actions like sending an email, whether her anxiety jumps if she's stopped from counting, and whether facing the dread of an uncorrectable error reduces it rather than the count.",
        credit: 1.0,
      },
      {
        text: "People develop quirks all the time, so a new counting habit tells us nothing about her old OCD.",
        credit: 0,
      },
      {
        text: "She might be channeling the old anxiety somewhere new; we could keep watching.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your \"the counting is the old compulsion in a new form\" lead from the rival \"it's an unrelated new habit,\" and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: check whether the counting fires specifically at high-stakes, mistake-prone moments like sending an important email — function that lands exactly where her checking used to points to the same compulsion in new clothing. My lead is refuted if the counting appears randomly across calm and charged moments alike with no tie to fear of error, which would fit an unrelated habit.",
      yieldAnchors: [
        "Bedtime checking resolved after exposure work",
        "Counting began about a month later",
        "It appears when she sends important emails",
      ],
      riskAnchors: [
        "Counting attaches to high-stakes actions specifically",
        "Anxiety jumps if she is blocked from counting",
        "Facing the fear of an uncorrectable error reduces it",
      ],
      defeatedBy: [
        "The counting occurs randomly with no tie to fear of error",
        "It carries no anxiety when interrupted",
      ],
    },
    correctAnswer:
      "The checking eased without working through her need for certainty before acting, so the same function has reappeared as counting at the moment she most fears a mistake — new form, old job; test whether the counting attaches specifically to high-stakes actions like sending an email, whether her anxiety jumps if she's stopped from counting, and whether facing the dread of an uncorrectable error reduces it rather than the count.",
    explanation:
      "Full credit reads the new counting as the old certainty-seeking migrated and is paired with a does-it-fire-at-high-stakes-moments test that names its refutation; \"people develop quirks\" is the dodge the same-function timing defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A man's contamination washing drops sharply after a short exposure program, but he insists the whole thing was \"just a bad habit, nothing underneath it,\" and refuses to look at what it might have meant. Six weeks later, under a family crisis, the washing roars back. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The relapse proves exposure therapy simply doesn't work for him.",
        credit: 0,
      },
      {
        text: "Maybe the quick fix didn't hold; we could try the exposures again.",
        credit: 0.6,
      },
      {
        text: "Relief that never touched what the washing was managing left the underlying conflict live, so a crisis that reloaded it brought the symptom straight back; test whether the relapse coincides with the family stress rather than appearing at random, whether the washing again tracks the same feared contamination theme, and whether pairing renewed exposure with working through what the ritual protected him from holds better than exposure alone.",
        credit: 1.0,
      },
      {
        text: "His washing came back during the family crisis.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your \"the conflict was never worked through, so stress reactivated it\" lead from the rival \"the exposures simply wore off on their own,\" and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: line up the relapse against the family crisis — washing that returns exactly as the stressor hits, on the same contamination theme, points to a reactivated conflict rather than a fix randomly fading. My lead is refuted if the washing crept back gradually with no tie to any stressor or feared theme, which would fit exposures merely wearing off.",
      yieldAnchors: [
        "Washing dropped after a short program",
        "He denies any meaning beneath it",
        "It returned under a family crisis",
      ],
      riskAnchors: [
        "Relapse coincides with the family stress",
        "Washing tracks the same contamination theme",
        "Exposure plus meaning-work holds better than exposure alone",
      ],
      defeatedBy: [
        "The washing returned gradually with no stressor",
        "The relapse bears no relation to any feared theme",
      ],
    },
    correctAnswer:
      "Relief that never touched what the washing was managing left the underlying conflict live, so a crisis that reloaded it brought the symptom straight back; test whether the relapse coincides with the family stress rather than appearing at random, whether the washing again tracks the same feared contamination theme, and whether pairing renewed exposure with working through what the ritual protected him from holds better than exposure alone.",
    explanation:
      "Full credit reads the stress-timed return as an un-worked-through conflict reactivated and is paired with a line-it-up-against-the-crisis test that names its refutation; \"exposure just doesn't work for him\" is the dodge the clean stress-triggered timing defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A patient whose home rituals have faded now spends much of each session asking the therapist, in slightly different words, the same question — \"You're sure these thoughts don't mean I'm dangerous, right?\" — and looks momentarily relieved each time it's answered. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He seems to want a lot of reassurance now; we could notice that.",
        credit: 0.6,
      },
      {
        text: "The compulsion has moved into the room — reassurance-seeking from the therapist now does the job his rituals used to, briefly relieving the doubt without resolving it, so working through means declining to answer and helping him sit with the uncertainty; test whether the questioning clusters around his core feared theme, whether the relief is brief and quickly needs renewing, and whether withholding reassurance while naming the urge reduces the seeking over time.",
        credit: 1.0,
      },
      {
        text: "He keeps asking the therapist the same reassuring question.",
        credit: 0.3,
      },
      {
        text: "Asking a clinician questions is exactly what therapy is for, so there's nothing to interpret in it.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your \"the questioning is a compulsion enacted with the therapist\" lead from the rival \"he's just an inquisitive, engaged patient,\" and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: watch what happens after an answer — if relief is brief and the same core-fear question returns soon, that cycle marks reassurance-seeking rather than genuine inquiry. My lead is refuted if his questions range widely, build on the answers, and don't circle back to the same feared theme, which would fit ordinary engagement.",
      yieldAnchors: [
        "Home rituals have faded",
        "He repeatedly asks the same reassuring question",
        "He looks briefly relieved each time it's answered",
      ],
      riskAnchors: [
        "The questioning clusters on his core feared theme",
        "Relief is brief and quickly needs renewing",
        "Withholding reassurance reduces the seeking over time",
      ],
      defeatedBy: [
        "His questions range widely and build on answers",
        "He needs no repetition once a question is answered",
      ],
    },
    correctAnswer:
      "The compulsion has moved into the room — reassurance-seeking from the therapist now does the job his rituals used to, briefly relieving the doubt without resolving it, so working through means declining to answer and helping him sit with the uncertainty; test whether the questioning clusters around his core feared theme, whether the relief is brief and quickly needs renewing, and whether withholding reassurance while naming the urge reduces the seeking over time.",
    explanation:
      "Top credit reads the repeated same-question-for-brief-relief as a compulsion enacted with the therapist and is paired with a what-happens-after-an-answer test that names its refutation; \"asking a clinician is what therapy is for\" is the dodge the brief-relief-then-repeat cycle defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A woman delivers a polished psychological account of how her intrusive harm thoughts \"symbolize buried anger at her father,\" speaking calmly and almost proudly — yet she still avoids all knives and her mental reviewing is unchanged. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She can explain her harm thoughts but still avoids knives.",
        credit: 0.3,
      },
      {
        text: "She has clearly achieved deep insight, so the work is essentially finished.",
        credit: 0,
      },
      {
        text: "Her articulate, affect-free account looks like intellectualization — a defense that lets her master the meaning in words while the feeling and the symptom stay untouched, so it moves nothing; working through needs the understanding to meet live emotion as she approaches the feared object; test whether any feeling stirs when she actually nears a knife, whether her tidy explanation ever changes her avoidance, and whether connecting the thought to felt anger in the moment shifts the reviewing.",
        credit: 1.0,
      },
      {
        text: "Her insight doesn't seem to have helped the avoidance; we could keep at it.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your \"her insight is intellectualized and inert\" lead from the rival \"she has genuinely worked it through and just needs time,\" and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: see whether any feeling appears and any behavior shifts when she actually approaches a knife — genuine working-through shows up as changed avoidance and live affect, not a polished explanation alone. My lead is refuted if her understanding is already loosening the avoidance and stirring real emotion, which would mean the insight is doing work rather than defending against feeling.",
      yieldAnchors: [
        "She gives a polished account of her harm thoughts",
        "She speaks calmly and almost proudly",
        "Avoidance and mental reviewing are unchanged",
      ],
      riskAnchors: [
        "Feeling stirs when she nears a knife",
        "The explanation begins to change her avoidance",
        "Connecting thought to felt anger shifts the reviewing",
      ],
      defeatedBy: [
        "Her understanding is already loosening the avoidance",
        "Real emotion accompanies her account",
      ],
    },
    correctAnswer:
      "Her articulate, affect-free account looks like intellectualization — a defense that lets her master the meaning in words while the feeling and the symptom stay untouched, so it moves nothing; working through needs the understanding to meet live emotion as she approaches the feared object; test whether any feeling stirs when she actually nears a knife, whether her tidy explanation ever changes her avoidance, and whether connecting the thought to felt anger in the moment shifts the reviewing.",
    explanation:
      "Full credit reads the calm, behavior-free explanation as intellectualization and is paired with a does-anything-change-as-she-approaches-a-knife test that names its refutation; \"she has deep insight so the work is finished\" is the overreach the unchanged avoidance defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A man eight months out of treatment reports one rough fortnight of heavier checking after a burglary on his street, then says he \"talked himself back down\" using what he learned and is steady again. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Once checking returns at all, the gains are lost and he's effectively back where he started.",
        credit: 0,
      },
      {
        text: "He checked more for a couple of weeks after the burglary.",
        credit: 0.3,
      },
      {
        text: "This reads as a lapse, not a relapse — a real trigger briefly raised the checking, but he could name the trigger and self-correct with his tools, which is what consolidation looks like; test whether the surge stayed time-limited and tied to the burglary, whether his baseline returned without formal treatment, and whether he can articulate the feared outcome that drove the spike.",
        credit: 1.0,
      },
      {
        text: "He had a wobble but seems fine; we could keep an eye on it.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your \"this is a self-corrected lapse\" lead from the rival \"this is the start of a full relapse,\" and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: track whether the checking surge stayed brief, tied to the burglary, and resolved on its own back to baseline — a time-limited, trigger-linked, self-corrected blip is a lapse, not a relapse. My lead is refuted if the checking keeps climbing and spreading beyond the burglary despite his efforts, which would signal a genuine relapse.",
      yieldAnchors: [
        "Heavier checking for one fortnight",
        "It followed a burglary on his street",
        "He talked himself back down with his tools",
      ],
      riskAnchors: [
        "The surge stayed time-limited and trigger-linked",
        "Baseline returned without formal treatment",
        "He can name the feared outcome that drove it",
      ],
      defeatedBy: [
        "The checking keeps climbing despite his efforts",
        "It spreads well beyond the burglary",
      ],
    },
    correctAnswer:
      "This reads as a lapse, not a relapse — a real trigger briefly raised the checking, but he could name the trigger and self-correct with his tools, which is what consolidation looks like; test whether the surge stayed time-limited and tied to the burglary, whether his baseline returned without formal treatment, and whether he can articulate the feared outcome that drove the spike.",
    explanation:
      "Top credit reads brief, trigger-linked, self-corrected checking as a consolidating lapse and is paired with a did-it-stay-time-limited test that names its refutation; \"any checking means total loss\" is the overreach his self-correction defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A man's hand-washing has dropped dramatically, which his family celebrates — but they don't mention that he now simply never touches doorknobs, railings, or shared surfaces, routing his whole day around them. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He might be avoiding instead of washing; we could ask about his daily routine.",
        credit: 0.6,
      },
      {
        text: "He washes less but avoids touching shared surfaces.",
        credit: 0.3,
      },
      {
        text: "His washing is way down, so the OCD is beaten and the rest is just sensible hygiene.",
        credit: 0,
      },
      {
        text: "The washing fell because avoidance has taken over its job — by never contacting the feared surfaces he never triggers the urge, so the contamination fear is untouched and the relief is hollow; test whether his life is now organized around dodging the very things he used to wash off, whether anxiety spikes when contact is unavoidable, and whether deliberately touching surfaces without washing is what actually brings the fear down.",
        credit: 1.0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your \"avoidance has replaced the washing\" lead from the rival \"he has genuinely overcome the contamination fear,\" and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: check whether he can touch a doorknob or railing and leave it unwashed without distress — genuine recovery tolerates contact, whereas avoidance simply prevents the trigger. My lead is refuted if he can readily touch shared surfaces and feel calm, which would mean the fear, not just the washing, is truly gone.",
      yieldAnchors: [
        "Hand-washing dropped dramatically",
        "He now never touches shared surfaces",
        "His day is routed around avoiding them",
      ],
      riskAnchors: [
        "His life is organized around dodging feared surfaces",
        "Anxiety spikes when contact is unavoidable",
        "Touching without washing is what brings fear down",
      ],
      defeatedBy: [
        "He can touch shared surfaces and stay calm",
        "His avoidance is mere ordinary hygiene",
      ],
    },
    correctAnswer:
      "The washing fell because avoidance has taken over its job — by never contacting the feared surfaces he never triggers the urge, so the contamination fear is untouched and the relief is hollow; test whether his life is now organized around dodging the very things he used to wash off, whether anxiety spikes when contact is unavoidable, and whether deliberately touching surfaces without washing is what actually brings the fear down.",
    explanation:
      "Full credit reads the washing's drop as avoidance doing its job and is paired with a can-he-touch-and-not-wash test that names its refutation; \"washing's down so the OCD is beaten\" is the overreach his all-day avoidance defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A woman treated for checking compulsions reports months later that she has also stopped re-reading her texts five times before sending and no longer needs her desk \"perfect\" before she can start work — gains nobody set out to produce. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She seems less fussy about a few things now.",
        credit: 0.3,
      },
      {
        text: "The treatment may have spread to other areas; we could ask what else changed.",
        credit: 0.6,
      },
      {
        text: "The working-through likely loosened a shared driver — an intolerance of doubt and a need to forestall error — beneath several of her rigidities, so improvement generalized past the targeted checking, a sign of durable structural change; test whether the spread covers exactly the behaviors sharing that doubt-and-error theme, whether the broader gains hold at long follow-up, and whether habits unrelated to that theme are unchanged.",
        credit: 1.0,
      },
      {
        text: "Different habits change for all sorts of reasons, so crediting her therapy for any of this is a stretch.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your \"the gains generalized from a shared underlying driver\" lead from the rival \"these other changes are unrelated coincidences,\" and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: check whether the newly eased behaviors are exactly the ones sharing her doubt-and-error theme while unrelated habits stay put — theme-coherent spread points to a generalized driver, not coincidence. My lead is refuted if the changes are scattered across unrelated behaviors with no common thread, which would fit chance.",
      yieldAnchors: [
        "Treated for checking compulsions",
        "Now re-reads texts and arranges her desk far less",
        "No one targeted these changes",
      ],
      riskAnchors: [
        "The spread covers behaviors sharing the doubt-and-error theme",
        "The broader gains hold at long follow-up",
        "Unrelated habits are unchanged",
      ],
      defeatedBy: [
        "The changes are scattered with no common theme",
        "Unrelated habits changed just as much",
      ],
    },
    correctAnswer:
      "The working-through likely loosened a shared driver — an intolerance of doubt and a need to forestall error — beneath several of her rigidities, so improvement generalized past the targeted checking, a sign of durable structural change; test whether the spread covers exactly the behaviors sharing that doubt-and-error theme, whether the broader gains hold at long follow-up, and whether habits unrelated to that theme are unchanged.",
    explanation:
      "Top credit reads theme-coherent spread as generalization from a shared driver and is paired with a does-it-track-the-doubt-theme test that names its refutation; \"habits change for all sorts of reasons\" is the dodge the coherent, theme-specific spread defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "After a teenager's late-night ordering rituals are eliminated, she develops trouble falling asleep that began the same week the rituals stopped and is worst on nights before big social events — the exact occasions the ordering used to precede. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Teenagers have sleep problems constantly, so tying her insomnia to the old rituals is overthinking it.",
        credit: 0,
      },
      {
        text: "The social dread the ordering used to absorb likely lost its outlet when the ritual stopped and now surfaces as insomnia, so the conflict wasn't worked through, only the behavior removed; test whether the sleeplessness occupies the same pre-social-event slot the ordering did, whether it began precisely when the rituals stopped, and whether naming and facing the social fear eases the insomnia.",
        credit: 1.0,
      },
      {
        text: "Her sleep trouble could be related to the old anxiety; we could track when it happens.",
        credit: 0.6,
      },
      {
        text: "She can't sleep well before big social events now.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your \"the insomnia is the old social dread without its ritual outlet\" lead from the rival \"it's ordinary teenage sleep trouble,\" and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: check whether the insomnia clusters on nights before big social events — the very slot the ordering used to fill — and started exactly when the rituals stopped, which points to a redirected dread rather than generic sleep trouble. My lead is refuted if her sleeplessness is spread evenly across all nights with no tie to social events or to when the rituals ended.",
      yieldAnchors: [
        "Ordering rituals were eliminated",
        "Insomnia began the same week",
        "It is worst before big social events",
      ],
      riskAnchors: [
        "Insomnia occupies the pre-social-event slot",
        "It began precisely when rituals stopped",
        "Facing the social fear eases it",
      ],
      defeatedBy: [
        "The insomnia is spread evenly across all nights",
        "It predates the end of the rituals",
      ],
    },
    correctAnswer:
      "The social dread the ordering used to absorb likely lost its outlet when the ritual stopped and now surfaces as insomnia, so the conflict wasn't worked through, only the behavior removed; test whether the sleeplessness occupies the same pre-social-event slot the ordering did, whether it began precisely when the rituals stopped, and whether naming and facing the social fear eases the insomnia.",
    explanation:
      "Full credit reads event-timed insomnia in the old ritual slot as redirected social dread and is paired with a did-it-start-when-rituals-stopped test that names its refutation; \"teens have sleep problems constantly\" is the dodge the exact slot-and-onset matching defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A man no longer performs his mental neutralizing rituals, but he says he gets through each day by \"clamping down hard\" on every intrusive harm thought the instant it appears, and the thoughts terrify him as much as ever. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He's stopped his mental rituals but still battles the thoughts.",
        credit: 0.3,
      },
      {
        text: "He seems to be forcing it; we could keep checking in.",
        credit: 0.6,
      },
      {
        text: "Clamping down is suppression, not working through — the intrusive thoughts and the terror beneath them are still fully charged and merely held off by effort, which tends to rebound; real change comes from letting the thoughts come without fighting them, so test whether his fear of the thoughts actually declines over time rather than staying maxed, whether he can allow a thought to pass without neutralizing or suppressing, and whether accepting the thought as just a thought lowers its charge.",
        credit: 1.0,
      },
      {
        text: "He has stopped the rituals, so he is cured no matter how the thoughts feel to him.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your \"he's suppressing rather than working through\" lead from the rival \"he has genuinely recovered and just describes it dramatically,\" and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: check whether his fear of the thoughts is falling over time or staying maxed out despite the effort — undiminished terror held back by constant clamping is suppression, not recovery. My lead is refuted if he can let an intrusive thought arise and pass without fighting it and his distress is genuinely low, which would mean real working-through.",
      yieldAnchors: [
        "Mental neutralizing rituals have stopped",
        "He clamps down on every intrusive thought",
        "The thoughts terrify him as much as ever",
      ],
      riskAnchors: [
        "Fear of the thoughts declines over time",
        "He can let a thought pass without neutralizing",
        "Accepting the thought as a thought lowers its charge",
      ],
      defeatedBy: [
        "He can let intrusive thoughts come and go calmly",
        "His distress is genuinely low without effort",
      ],
    },
    correctAnswer:
      "Clamping down is suppression, not working through — the intrusive thoughts and the terror beneath them are still fully charged and merely held off by effort, which tends to rebound; real change comes from letting the thoughts come without fighting them, so test whether his fear of the thoughts actually declines over time rather than staying maxed, whether he can allow a thought to pass without neutralizing or suppressing, and whether accepting the thought as just a thought lowers its charge.",
    explanation:
      "Top credit reads constant clamping with undiminished terror as suppression and is paired with a is-his-fear-actually-falling test that names its refutation; \"rituals stopped so he's cured\" is the overreach his unrelenting battle defeats.",
  },
];

const written: HomeworkItem[] = [
  {
    itemType: "written",
    prompt:
      "A man completes exposure work and his compulsive door-checking disappears. Within a month, though, he develops a new routine: before he can leave any room, he must mentally picture the door locked and silently say \"it's fine\" three times. He insists this \"isn't OCD, it's just a calming thing I do.\" In one paragraph, propose the strongest conclusion about what has happened and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that the compulsion was relieved at the surface without working through the intolerance of doubt that drove it, so the same function has migrated from physical checking into a mental ritual — picturing the lock and repeating \"it's fine\" does exactly what checking did, buying brief certainty at the cost of keeping the fear alive. This is a strong claim because it predicts checkable consequences: the new ritual should fire in the very situations checking used to (leaving a room, leaving the house) rather than at random; his anxiety should spike if he is prevented from completing the mental routine; and the urge should fade only when he faces the dread of being responsible for a catastrophe rather than soothing it. I would test it by mapping when the mental ritual appears against his old checking triggers, by having him resist completing it and watching whether anxiety surges, and by checking whether tolerating the uncertainty without the routine — not the routine itself — is what finally settles him.",
      yieldAnchors: [
        "Door-checking disappeared after exposure work",
        "A mental ritual began within a month",
        "It occupies the same leaving-the-room situations",
      ],
      riskAnchors: [
        "The ritual fires in the old checking situations",
        "Anxiety spikes if he can't complete it",
        "Facing the catastrophe fear, not the ritual, settles him",
      ],
      defeatedBy: [
        "The mental routine appears randomly, unrelated to leaving",
        "Blocking it causes no anxiety at all",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that the compulsion was relieved at the surface without working through the intolerance of doubt that drove it, so the same function has migrated from physical checking into a mental ritual — picturing the lock and repeating \"it's fine\" does exactly what checking did, buying brief certainty at the cost of keeping the fear alive. This is a strong claim because it predicts checkable consequences: the new ritual should fire in the very situations checking used to (leaving a room, leaving the house) rather than at random; his anxiety should spike if he is prevented from completing the mental routine; and the urge should fade only when he faces the dread of being responsible for a catastrophe rather than soothing it. I would test it by mapping when the mental ritual appears against his old checking triggers, by having him resist completing it and watching whether anxiety surges, and by checking whether tolerating the uncertainty without the routine — not the routine itself — is what finally settles him.",
    explanation:
      "Under the inverted standard, \"it's just a calming thing, nothing to read into\" earns near-zero; top credit reads the mental routine as the old compulsion migrated and names a does-it-fire-in-the-old-triggers test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A woman has spent two years in talk therapy and can describe, movingly, how her washing rituals grew out of guilt over a sibling's accident she always felt responsible for. Her understanding is rich and genuine — but she still washes for hours and has never done any structured exposure. In one paragraph, propose the strongest conclusion about why the symptom persists and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that insight has outrun symptom relief: understanding the guilt the washing carries is real and valuable, but understanding alone rarely dislodges an entrenched compulsion, because the behavior is maintained by the relief it brings each time she gives in, and she has never practiced facing the feared contamination without washing. This is a strong claim because it predicts checkable consequences: adding structured exposure and response prevention should finally move the washing in a way two years of talk did not; the persistence should trace to her never having tolerated the feared dirt rather than to any gap in understanding; and combining the meaning work with exposure should outperform either alone for her. I would test it by introducing a graded exposure plan and tracking whether washing time drops, by checking whether her resistance is strongest exactly where she has avoided real contact, and by comparing her progress with exposure added against her flat two-year baseline.",
      yieldAnchors: [
        "Two years of rich, genuine insight",
        "Washing rituals are essentially unchanged",
        "She has never done structured exposure",
      ],
      riskAnchors: [
        "Adding exposure finally moves the washing",
        "The persistence traces to never facing the feared dirt",
        "Meaning-work plus exposure beats either alone",
      ],
      defeatedBy: [
        "The washing was already resolving through insight alone",
        "Exposure adds nothing to her flat baseline",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that insight has outrun symptom relief: understanding the guilt the washing carries is real and valuable, but understanding alone rarely dislodges an entrenched compulsion, because the behavior is maintained by the relief it brings each time she gives in, and she has never practiced facing the feared contamination without washing. This is a strong claim because it predicts checkable consequences: adding structured exposure and response prevention should finally move the washing in a way two years of talk did not; the persistence should trace to her never having tolerated the feared dirt rather than to any gap in understanding; and combining the meaning work with exposure should outperform either alone for her. I would test it by introducing a graded exposure plan and tracking whether washing time drops, by checking whether her resistance is strongest exactly where she has avoided real contact, and by comparing her progress with exposure added against her flat two-year baseline.",
    explanation:
      "The inverted standard gives near-zero to \"only insight produces real change, so exposure would be shallow\"; top credit reads insight-without-behavior-change as needing exposure added and names a does-adding-exposure-move-it test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A man was free of his symmetry compulsions for over a year after treatment. They have now returned, intensely, in the weeks since his first child was born — and the new compulsions center on arranging the baby's room \"exactly right\" before he can leave it. In one paragraph, propose the strongest conclusion about what the relapse reveals and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that symptom relief never fully worked through the conflict the compulsions served — likely an intolerance of the helplessness and high-stakes responsibility that uncertainty brings — so the arrival of a baby, which loads exactly that fear, has reactivated the old solution in a new, parenting-shaped form. This is a strong claim because it predicts checkable consequences: the relapse content should map onto the baby's safety and his responsibility for it rather than spreading randomly; it should ease as he processes the dread of being unable to protect his child rather than only redoing exposures; and booster exposure paired with naming that fear should settle it faster than exposure alone. I would test it by checking whether the new compulsions cluster around the baby's care and safety, by exploring whether his anxiety is really about responsibility and helplessness, and by comparing exposure-plus-meaning-work against exposure alone for how durably the relapse resolves.",
      yieldAnchors: [
        "A year free of symmetry compulsions",
        "They returned intensely after his child's birth",
        "They now center on the baby's room",
      ],
      riskAnchors: [
        "Relapse content maps onto the baby's safety and his responsibility",
        "It eases as he processes fear of being unable to protect the child",
        "Exposure plus meaning-work settles it faster than exposure alone",
      ],
      defeatedBy: [
        "The relapse is unrelated to the baby or to responsibility",
        "It returned gradually with no triggering event",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that symptom relief never fully worked through the conflict the compulsions served — likely an intolerance of the helplessness and high-stakes responsibility that uncertainty brings — so the arrival of a baby, which loads exactly that fear, has reactivated the old solution in a new, parenting-shaped form. This is a strong claim because it predicts checkable consequences: the relapse content should map onto the baby's safety and his responsibility for it rather than spreading randomly; it should ease as he processes the dread of being unable to protect his child rather than only redoing exposures; and booster exposure paired with naming that fear should settle it faster than exposure alone. I would test it by checking whether the new compulsions cluster around the baby's care and safety, by exploring whether his anxiety is really about responsibility and helplessness, and by comparing exposure-plus-meaning-work against exposure alone for how durably the relapse resolves.",
    explanation:
      "The cautious \"relapses just happen, there's nothing to read\" earns near-zero; top credit reads the birth-timed, baby-focused relapse as an un-worked-through responsibility conflict reactivated and names a does-it-map-onto-the-baby test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A year after finishing treatment, a woman tells you she had a hard stretch last month — two days of \"sliding back\" into reassurance-seeking after a health scare — but she recognized what was happening, reminded herself it was the old pattern, sat with the uncertainty, and was back to normal within days without calling anyone. In one paragraph, propose the strongest conclusion about the state of her recovery and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that her change is genuinely consolidating rather than fragile: she met a real trigger, briefly slid toward her old compulsion, but could recognize the lapse, link it to the health scare, and self-correct using what she learned — which is exactly what durable, worked-through recovery looks like, a lapse handled rather than a relapse begun. This is a strong claim because it predicts checkable consequences: such slips should stay brief, trigger-linked, and self-limited rather than escalating; she should be able to name the feared feeling each time and tolerate it without ritual; and her baseline should hold across months despite occasional lapses under stress. I would test it by tracking whether future slips stay short and self-corrected, by checking whether she can articulate and sit with the fear each one carries, and by following her baseline over time to confirm it holds rather than eroding.",
      yieldAnchors: [
        "A year out of treatment",
        "Two days of sliding back after a health scare",
        "She recognized it and self-corrected without calling anyone",
      ],
      riskAnchors: [
        "Slips stay brief, trigger-linked, and self-limited",
        "She can name and tolerate the feared feeling",
        "Her baseline holds across months",
      ],
      defeatedBy: [
        "The slips escalate and spread instead of self-correcting",
        "She cannot recognize or sit with the underlying fear",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that her change is genuinely consolidating rather than fragile: she met a real trigger, briefly slid toward her old compulsion, but could recognize the lapse, link it to the health scare, and self-correct using what she learned — which is exactly what durable, worked-through recovery looks like, a lapse handled rather than a relapse begun. This is a strong claim because it predicts checkable consequences: such slips should stay brief, trigger-linked, and self-limited rather than escalating; she should be able to name the feared feeling each time and tolerate it without ritual; and her baseline should hold across months despite occasional lapses under stress. I would test it by tracking whether future slips stay short and self-corrected, by checking whether she can articulate and sit with the fear each one carries, and by following her baseline over time to confirm it holds rather than eroding.",
    explanation:
      "The overreach \"any slip means she's relapsing\" is what her recognition-and-self-correction defeats; top credit reads the brief, trigger-linked, self-corrected slide as consolidation and names a do-future-slips-stay-self-limited test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A man finishes a quick, effective exposure program; his counting compulsions are gone and his therapist is pleased. But he tells a friend that he feels oddly flat and restless, \"like I lost a job I hated but don't know what to do with myself,\" and he has started snapping at people in a way that's new for him. In one paragraph, propose the strongest conclusion about what is going on and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that the counting was removed without working through what it was managing, so the feeling the ritual used to bind — likely a tension or distress it discharged — now has no outlet and is leaking out as flatness, restlessness, and irritability; the symptom relief is real but the underlying conflict is untouched, which makes the gain brittle and risks a new symptom forming. This is a strong claim because it predicts checkable consequences: the new irritability and restlessness should track the same situations that used to trigger counting rather than appearing at random; a fresh ritual or symptom may emerge to take counting's place if nothing else absorbs the feeling; and briefly exploring what the counting protected him from should ease the \"don't know what to do with myself\" sense. I would test it by mapping his irritable moments against his old counting triggers, by watching for a replacement symptom over the coming weeks, and by checking whether naming and facing the feeling the ritual used to manage reduces the restlessness.",
      yieldAnchors: [
        "Counting compulsions are gone after a quick program",
        "He feels flat, restless, and newly irritable",
        "He likens it to losing a hated job",
      ],
      riskAnchors: [
        "Irritability tracks the old counting triggers",
        "A replacement symptom may emerge",
        "Exploring what counting managed eases the restlessness",
      ],
      defeatedBy: [
        "The restlessness is unrelated to his old triggers",
        "No feeling or symptom fills the gap and he feels fine",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that the counting was removed without working through what it was managing, so the feeling the ritual used to bind — likely a tension or distress it discharged — now has no outlet and is leaking out as flatness, restlessness, and irritability; the symptom relief is real but the underlying conflict is untouched, which makes the gain brittle and risks a new symptom forming. This is a strong claim because it predicts checkable consequences: the new irritability and restlessness should track the same situations that used to trigger counting rather than appearing at random; a fresh ritual or symptom may emerge to take counting's place if nothing else absorbs the feeling; and briefly exploring what the counting protected him from should ease the \"don't know what to do with myself\" sense. I would test it by mapping his irritable moments against his old counting triggers, by watching for a replacement symptom over the coming weeks, and by checking whether naming and facing the feeling the ritual used to manage reduces the restlessness.",
    explanation:
      "The inverted standard gives near-zero to \"the counting's gone so it's a complete success\"; top credit reads the new flatness and irritability as the bound feeling without its outlet and names a watch-for-a-replacement-symptom test that could refute it.",
  },
];

export const section: SectionContent = {
  slug: "working-through-insight-relief",
  title: "Working Through: Insight Alongside Symptom Relief",
  weekNumber: 1,
  blurb:
    "Durable recovery from OCD pairs symptom relief with insight into what the ritual was for, so the meaning doesn't just resurface as a new symptom. This section is about reading when change is consolidating, when relief is brittle, and what still needs working through.",
  lectureTitle:
    "1.7 Working Through: insight alongside symptom relief",
  body: `# Working Through: Insight Alongside Symptom Relief

Getting the rituals to stop is not the same as being well. A man can quit checking the locks and feel, for a few weeks, that he has won — only to find a new mental routine has quietly taken the old one's place. \"Working through\" is the name for the slower, deeper part of treatment: not just removing the behavior but settling the conflict the behavior was managing, so the relief holds and the meaning doesn't pop up somewhere else. This section is about reading that process from the evidence — telling the difference between change that is consolidating and change that is only skin-deep, and naming the cheap check that would tell you which you are looking at.

## When relief comes without understanding

Exposure work can drop a compulsion fast, and that is genuinely good. But when the behavior goes and nothing else changes — the person can't say what the ritual was for, and a vague unease or new irritability creeps in — the gain can be brittle. The feeling the ritual used to bind still has to go somewhere. The tell is not that relief is suspect, but that relief with no working-through tends to leave the original conflict live, ready to be reactivated by the next stressor that loads it.

## When understanding comes without relief

The opposite failure is just as common. Someone can describe, beautifully and truly, how their washing grew out of guilt, and still wash for two hours a day. Insight alone rarely dislodges an entrenched compulsion, because the behavior is held in place by the relief it delivers every time the person gives in. Worse, an articulate, feeling-free account can itself become a defense — intellectualizing the symptom keeps the emotion at arm's length while the ritual rolls on. Understanding only changes things when it meets live feeling at the moment of the urge, and when it is paired with actually facing the feared situation.

## Symptom substitution and the migrating compulsion

One of the clearest signs that working-through is unfinished is substitution: checking stops and silent reassurance phrases begin; solo washing stops and the person starts phoning a spouse a dozen times a day; a ritual stops and a bodily symptom appears in the same trigger slot. The surface form changes but the function is identical — buy brief certainty, dodge the feared feeling. The cheap check is to ask whether the new behavior fires in the very situations the old one did. When it does, you are looking at the same compulsion in new clothing, not a fresh and unrelated habit.

## Lapse, relapse, and what consolidation looks like

Recovery is not a straight line, and the difference between a lapse and a relapse is one of the most useful things to read. A consolidating patient can have a hard week — a slip back into the old behavior under a real trigger — and then recognize it, link it to the trigger, sit with the feeling, and self-correct without spiraling. That is a lapse handled, and it is actually a sign of durable change. A relapse, by contrast, keeps climbing and spreading. Reading the slip well means asking whether it stayed brief and trigger-linked, and whether the person could name and tolerate the fear underneath it.

## White-knuckling versus working through

A person can stop all rituals and still not be well, if they are holding the urges down by sheer effort while the dread stays maxed out. Suppression is brittle: it costs enormous energy and tends to rebound under load. Genuine working-through looks different — the distress at triggers actually falls over time, the person can approach feared situations willingly rather than gritting through them, and the feared outcome has been faced and disconfirmed rather than merely resisted. The cheap check is whether fear is dropping or just being contained.

## Reading the change — and naming a test

The habit this course trains applies here too. Don't stop at \"the rituals are gone.\" Commit to the strongest supported reading of where the change really stands — *consolidating*, *brittle relief*, *insight without relief*, *substitution*, or *suppression* — and then say exactly what would tell you you're wrong. Does the new behavior fire in the old triggers? Does distress fall over time or stay pinned? Does a slip self-correct or keep climbing? Do the gains spread to behaviors sharing the same underlying fear, which would signal real structural change? A reading that names its own disconfirming check is worth far more than \"he's better\" or \"it never really worked.\"

## In the real world

Think of someone you know who \"fixed\" a problem and then sprouted a new one in its place — quit smoking and started overeating, ended one anxious habit and grew another. The same logic governs OCD recovery. The point of working through is not to chase every symptom forever, but to settle the conflict underneath so that relief in one place doesn't quietly demand a new symptom somewhere else. When relief and insight finally join — when a person can meet the old trigger, feel the feeling the ritual used to mask, and let it pass — that is what lasting change looks like, and it is worth far more than a quiet that only holds until the next storm.`,
  homework: {
    mcq,
    hybrid,
    written,
  },
};
