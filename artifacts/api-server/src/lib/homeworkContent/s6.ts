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
      "A patient eloquently explains, in session after session, that his fear of commitment grew out of his parents' bitter divorce. He can trace it perfectly. Yet he keeps ending each relationship the moment it turns serious, exactly as before. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He has worked out the root cause, so the problem is essentially solved.",
        credit: 0,
      },
      {
        text: "He seems to understand himself pretty well.",
        credit: 0.3,
      },
      {
        text: "This looks like intellectual insight without change — he can narrate the pattern but it has not touched how he acts, so real change would require working the understanding through in lived situations; test whether his behavior shifts in the next serious relationship, whether the explanation ever arrives with feeling rather than as a recital, and whether naming it in the moment ever interrupts the impulse to bolt.",
        credit: 1.0,
      },
      {
        text: "He probably needs to keep talking about his parents; we could explore the divorce more.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "This looks like intellectual insight without change — he can narrate the pattern but it has not touched how he acts, so real change would require working the understanding through in lived situations; test whether his behavior shifts in the next serious relationship, whether the explanation ever arrives with feeling rather than as a recital, and whether naming it in the moment ever interrupts the impulse to bolt.",
    explanation:
      "Top credit commits to intellectual-insight-only and names three disconfirming checks; 'the root cause is found, so it's solved' is the overreach the unchanged behavior directly defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A woman who for years exploded at any hint of criticism now, over several months, notices the urge to lash out at her boss, then catches the same urge with her sister, then with her partner — and each time she pauses and responds differently. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She seems to be getting along with people better lately.",
        credit: 0.3,
      },
      {
        text: "She is probably improving; we could keep an eye on it.",
        credit: 0.6,
      },
      {
        text: "The same shift appearing across boss, sister, and partner suggests genuine working through — she is recognizing one pattern in many separate situations and acting on it, not just understanding it; test whether the new response holds with a brand-new person she hasn't discussed, whether it survives a genuinely stinging criticism, and whether she reports actually feeling the urge and choosing against it rather than merely suppressing it.",
        credit: 1.0,
      },
      {
        text: "People's moods come and go, so there is nothing here we can really conclude.",
        credit: 0,
      },
    ],
    correctAnswer:
      "The same shift appearing across boss, sister, and partner suggests genuine working through — she is recognizing one pattern in many separate situations and acting on it, not just understanding it; test whether the new response holds with a brand-new person she hasn't discussed, whether it survives a genuinely stinging criticism, and whether she reports actually feeling the urge and choosing against it rather than merely suppressing it.",
    explanation:
      "Full credit reads working-through from the cross-context repetition and names three tests; 'moods come and go, nothing to conclude' is the refusal the consistent multi-context shift defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A man states flatly, in a bored monotone as if reading a grocery list, 'I know I push people away.' He has said it a dozen times. His friendships keep dissolving in exactly the same way. Which conclusion best follows?",
    mcOptions: [
      {
        text: "His understanding carries no feeling and changes nothing — this is intellectual insight that may even shield him from the emotion that would drive change; test whether any session ever brings real affect to the topic, whether he can connect the words to a specific painful moment, and whether the flat recital ever gives way to actually catching himself pushing someone away.",
        credit: 1.0,
      },
      {
        text: "He clearly already knows the problem, so therapy has done its job here.",
        credit: 0,
      },
      {
        text: "He seems aware that he pushes people away.",
        credit: 0.3,
      },
      {
        text: "He probably has more to say about it; we could ask him to elaborate.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "His understanding carries no feeling and changes nothing — this is intellectual insight that may even shield him from the emotion that would drive change; test whether any session ever brings real affect to the topic, whether he can connect the words to a specific painful moment, and whether the flat recital ever gives way to actually catching himself pushing someone away.",
    explanation:
      "Top credit names affectless, change-free intellectual insight and three checks; 'he knows it, so therapy's done' is the overreach the unchanged friendships defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "After months of circling it, a patient suddenly connects, with tears, her lifelong people-pleasing to the way she used to calm her anxious mother as a small child. In the following weeks she starts, for the first time, declining unreasonable requests at work and at home. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Some realizations are too personal to judge from the outside, so we can't really say if this matters.",
        credit: 0,
      },
      {
        text: "She probably had a meaningful session; we could see how she feels next week.",
        credit: 0.6,
      },
      {
        text: "This looks like emotional insight that is beginning to generalize — the understanding arrived with feeling and is already changing behavior across more than one setting; test whether the new limit-setting keeps appearing in fresh situations, whether it survives a guilt-inducing pushback, and whether she can stay with the feeling rather than retreating into old pleasing when stressed.",
        credit: 1.0,
      },
      {
        text: "She seems to have had an emotional moment.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "This looks like emotional insight that is beginning to generalize — the understanding arrived with feeling and is already changing behavior across more than one setting; test whether the new limit-setting keeps appearing in fresh situations, whether it survives a guilt-inducing pushback, and whether she can stay with the feeling rather than retreating into old pleasing when stressed.",
    explanation:
      "Full credit ties felt insight to early behavioral change and names three tests; 'too personal to judge' is the dodge the observable new behavior defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "In one session a student 'gets' why he procrastinates — a fear of being judged — and leaves feeling lighter and relieved. The very next week he has procrastinated on everything exactly as before. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He seems to have figured out why he procrastinates.",
        credit: 0.3,
      },
      {
        text: "One relieving insight is not the same as change — a single realization rarely rewires a habit, and the relief may have discharged the urgency to act; test whether the insight returns and gains traction over repeated weeks, whether it ever shows up at the moment he's about to avoid a task, and whether any actual change in his work behavior follows.",
        credit: 1.0,
      },
      {
        text: "Now that he understands the fear, the procrastination should take care of itself.",
        credit: 0,
      },
      {
        text: "He probably needs another session or two; we could revisit it.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "One relieving insight is not the same as change — a single realization rarely rewires a habit, and the relief may have discharged the urgency to act; test whether the insight returns and gains traction over repeated weeks, whether it ever shows up at the moment he's about to avoid a task, and whether any actual change in his work behavior follows.",
    explanation:
      "Top credit distinguishes a one-time insight from durable change and names three checks; 'understanding the fear fixes it' is the overreach the unchanged next week defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A patient who understood her jealousy months ago handles it calmly whenever life is relaxed. But the moment she is exhausted and under pressure, the old accusatory phone calls and snooping come roaring straight back. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Her good and bad spells seem to alternate.",
        credit: 0.3,
      },
      {
        text: "The change is real but not yet consolidated — the new response holds under easy conditions but collapses under stress, which is the signature of insight that hasn't been fully worked through; test whether the calm response gradually starts to survive stressful periods, whether she can catch the urge specifically when tired, and whether the relapses grow shorter and less intense over time.",
        credit: 1.0,
      },
      {
        text: "She understands her jealousy, so any remaining outbursts must be someone else's fault.",
        credit: 0,
      },
      {
        text: "She is probably still working on it; we could check back in a while.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The change is real but not yet consolidated — the new response holds under easy conditions but collapses under stress, which is the signature of insight that hasn't been fully worked through; test whether the calm response gradually starts to survive stressful periods, whether she can catch the urge specifically when tired, and whether the relapses grow shorter and less intense over time.",
    explanation:
      "Full credit reads partial, not-yet-consolidated change from the stress-dependent relapse and names three tests; blaming others is the overreach her own pattern defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A man recounts the same insight — 'my anger is really fear' — session after session, almost proudly, polishing the phrase. He never once applies it, and the repetition has the feel of a rehearsed performance. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The mind is too layered to know why someone repeats a phrase, so we can't say much.",
        credit: 0,
      },
      {
        text: "He probably finds the insight comforting; we could encourage him to use it.",
        credit: 0.6,
      },
      {
        text: "He seems to repeat the same point a lot.",
        credit: 0.3,
      },
      {
        text: "The insight has become a defense — reciting the understanding lets him feel he is working while sparing him the change it implies; test whether he ever sits with the underlying fear instead of producing the slogan, whether any of his behavior outside session shifts, and whether interrupting the recital provokes discomfort rather than more polished phrasing.",
        credit: 1.0,
      },
    ],
    correctAnswer:
      "The insight has become a defense — reciting the understanding lets him feel he is working while sparing him the change it implies; test whether he ever sits with the underlying fear instead of producing the slogan, whether any of his behavior outside session shifts, and whether interrupting the recital provokes discomfort rather than more polished phrasing.",
    explanation:
      "Top credit names insight-as-defense and three disconfirming checks; 'too layered to know' is the refusal the proud, change-free repetition defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A woman first recognizes, in therapy, that she keeps choosing emotionally unavailable partners. Over the following months she catches the pull toward a distant new date, then notices it in a flirtation at work, then in a one-sided friendship — each time spotting it earlier than before. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She seems to be noticing her type more.",
        credit: 0.3,
      },
      {
        text: "Catching the same pattern across dating, work, and friendship — and earlier each time — is exactly what working through looks like: one recognition being applied and sharpened across many situations; test whether she eventually acts differently and not just notices, whether the earlier-catching trend continues with new people, and whether the recognition holds when she's strongly drawn to someone unavailable.",
        credit: 1.0,
      },
      {
        text: "Now that she sees her type, she is bound to be fine from here on.",
        credit: 0,
      },
      {
        text: "She is probably making progress; we could keep tracking it.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Catching the same pattern across dating, work, and friendship — and earlier each time — is exactly what working through looks like: one recognition being applied and sharpened across many situations; test whether she eventually acts differently and not just notices, whether the earlier-catching trend continues with new people, and whether the recognition holds when she's strongly drawn to someone unavailable.",
    explanation:
      "Full credit reads working through from the cross-context, earlier-each-time recognition and names three tests; 'she's bound to be fine' is the overreach noticing-without-acting doesn't yet support.",
  },
  {
    itemType: "mc",
    prompt:
      "A patient has a dramatic, cathartic session, sobbing for an hour about his cold father, and leaves saying he feels completely transformed. A month later, nothing in his daily life — his relationships, his temper, his habits — has shifted at all. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He had a big emotional release, so he must be better now.",
        credit: 0,
      },
      {
        text: "He seems to have cried a lot about his father.",
        credit: 0.3,
      },
      {
        text: "An intense emotional discharge is not the same as change — catharsis can feel transformative yet leave the underlying pattern untouched unless it is worked through over time; test whether any concrete behavior shifts in the weeks after, whether the feeling reconnects to present-day situations rather than just the past, and whether the sense of transformation survives a return to ordinary stress.",
        credit: 1.0,
      },
      {
        text: "It was probably an important session; we could see where it leads.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "An intense emotional discharge is not the same as change — catharsis can feel transformative yet leave the underlying pattern untouched unless it is worked through over time; test whether any concrete behavior shifts in the weeks after, whether the feeling reconnects to present-day situations rather than just the past, and whether the sense of transformation survives a return to ordinary stress.",
    explanation:
      "Top credit separates catharsis from durable change and names three checks; 'a big release means he's better' is the overreach the unchanged month defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A long-avoidant man, who used to flee any tension, now manages a hard conversation with his mother that he'd have dodged before — and within the same period also handles a confrontation with his landlord and speaks up in a tense meeting. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Avoidance is too ingrained to ever really shift, so this probably means little.",
        credit: 0,
      },
      {
        text: "He probably had a few good days; we could wait and see.",
        credit: 0.6,
      },
      {
        text: "The new tolerance for tension showing up with his mother, landlord, and colleagues at once points to genuine change generalizing across contexts, not a one-off fluke; test whether it appears in further unrehearsed situations, whether it holds when the stakes are high, and whether he reports actually feeling the old pull to flee and overriding it.",
        credit: 1.0,
      },
      {
        text: "He seems to be handling conflict a bit better.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The new tolerance for tension showing up with his mother, landlord, and colleagues at once points to genuine change generalizing across contexts, not a one-off fluke; test whether it appears in further unrehearsed situations, whether it holds when the stakes are high, and whether he reports actually feeling the old pull to flee and overriding it.",
    explanation:
      "Full credit reads generalizing change from the multi-context shift and names three tests; 'avoidance can never shift' is the refusal the three independent successes defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "A woman can describe her habit of deflecting every painful topic with a joke in flawless, almost textbook terms, and she even announces 'there I go, using humor again' as she does it. She still deflects every single time. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She is clearly very self-aware, so the deflecting will resolve on its own.",
        credit: 0,
      },
      {
        text: "She seems to know she uses humor to deflect.",
        credit: 0.3,
      },
      {
        text: "Naming the defense has not loosened it — accurate labeling is intellectual insight, and here the labeling may itself be one more way to skate past the feeling; test whether she can ever stay with a painful topic instead of joking, whether the feeling she's deflecting can surface in session, and whether the running commentary ever gives way to actually changing the behavior.",
        credit: 1.0,
      },
      {
        text: "She probably needs to practice catching it; we could remind her.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Naming the defense has not loosened it — accurate labeling is intellectual insight, and here the labeling may itself be one more way to skate past the feeling; test whether she can ever stay with a painful topic instead of joking, whether the feeling she's deflecting can surface in session, and whether the running commentary ever gives way to actually changing the behavior.",
    explanation:
      "Top credit notes that naming-without-changing is still intellectual insight and names three checks; 'she's self-aware, so it resolves itself' is the overreach the unbroken deflecting defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "After understanding that her perfectionism shields her from feeling worthless, a patient gradually lets a colleague see a rough draft, then submits a project on time despite small flaws, then shrugs off a minor mistake that once would have wrecked her week. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She seems a little more relaxed about her work.",
        credit: 0.3,
      },
      {
        text: "She is probably easing up; we could keep watching.",
        credit: 0.6,
      },
      {
        text: "The understanding is being worked through into behavior — tolerating imperfection across drafts, deadlines, and mistakes shows the insight changing how she acts in several real situations; test whether the new tolerance extends to higher-stakes work, whether it holds during a stressful stretch, and whether she reports the old worthless feeling arising and being borne rather than avoided.",
        credit: 1.0,
      },
      {
        text: "Perfectionism is part of who someone is, so there's nothing here to read into.",
        credit: 0,
      },
    ],
    correctAnswer:
      "The understanding is being worked through into behavior — tolerating imperfection across drafts, deadlines, and mistakes shows the insight changing how she acts in several real situations; test whether the new tolerance extends to higher-stakes work, whether it holds during a stressful stretch, and whether she reports the old worthless feeling arising and being borne rather than avoided.",
    explanation:
      "Full credit reads worked-through change from the spreading behavioral shift and names three tests; 'it's just who she is, nothing to read' is the dodge the concrete changes defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "A man insists therapy 'worked' because he now deeply understands himself. His wife, asked separately, reports that he treats her in exactly the same dismissive way he always has. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He says he understands himself, so we should take it that he has changed.",
        credit: 0,
      },
      {
        text: "He seems to feel he has gotten something out of therapy.",
        credit: 0.3,
      },
      {
        text: "His self-reported insight is not matched by any observable change in how he treats his wife — a gap that suggests intellectual insight rather than worked-through change; test whether a neutral third party notices any difference, whether his behavior shifts in concrete daily interactions, and whether the understanding ever shows up when he's actually being dismissive.",
        credit: 1.0,
      },
      {
        text: "He probably has changed in some ways; we could ask him for examples.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "His self-reported insight is not matched by any observable change in how he treats his wife — a gap that suggests intellectual insight rather than worked-through change; test whether a neutral third party notices any difference, whether his behavior shifts in concrete daily interactions, and whether the understanding ever shows up when he's actually being dismissive.",
    explanation:
      "Top credit weighs observable behavior over self-report and names three checks; 'he says he understands, so he's changed' is the overreach the wife's account defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A patient grasped a pattern intellectually a year ago and nothing happened. Only now, after re-encountering that same realization many times — with real feeling, in session and in his life — is his behavior finally shifting. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Change is so mysterious that we can't say what made the difference here.",
        credit: 0,
      },
      {
        text: "Something seems to have clicked for him eventually.",
        credit: 0.3,
      },
      {
        text: "Change came from repeated emotional re-encounter, not the original idea — this is working through, where the same insight has to be felt and applied over and over before it takes; test whether the change tracks the repetitions rather than the year-old realization, whether it now appears in new situations, and whether it survives stress that a fresh, untested insight would not.",
        credit: 1.0,
      },
      {
        text: "The first insight probably caused it on a delay; we could trace the timeline.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Change came from repeated emotional re-encounter, not the original idea — this is working through, where the same insight has to be felt and applied over and over before it takes; test whether the change tracks the repetitions rather than the year-old realization, whether it now appears in new situations, and whether it survives stress that a fresh, untested insight would not.",
    explanation:
      "Full credit names working through as the engine and names three tests including the timeline check; 'change is mysterious' is the refusal the clear repetition-then-change sequence defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A patient describes feeling the old, familiar urge to abandon a project the instant it got difficult — but for the first time he stayed with it. That same week, instead of ghosting a friend after a tense exchange, he stayed in that too. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He seems to be sticking with things more.",
        credit: 0.3,
      },
      {
        text: "Feeling the old pull and overriding it in two different fresh situations in one week points to real change taking hold — change felt as a struggle, not just understood — rather than a lucky coincidence; test whether the new staying-power keeps showing up in unrehearsed situations, whether it holds when the difficulty is greater, and whether he keeps reporting the urge-then-choice rather than a frictionless calm.",
        credit: 1.0,
      },
      {
        text: "He probably had a productive week; we could see if it continues.",
        credit: 0.6,
      },
      {
        text: "People have good weeks and bad weeks, so there's nothing to conclude.",
        credit: 0,
      },
    ],
    correctAnswer:
      "Feeling the old pull and overriding it in two different fresh situations in one week points to real change taking hold — change felt as a struggle, not just understood — rather than a lucky coincidence; test whether the new staying-power keeps showing up in unrehearsed situations, whether it holds when the difficulty is greater, and whether he keeps reporting the urge-then-choice rather than a frictionless calm.",
    explanation:
      "Full credit reads genuine, effortful change from the felt urge-then-override across contexts and names three tests; 'good weeks and bad weeks, nothing to conclude' is the dodge the two concrete overrides defeat.",
  },
];

const hybrid: HomeworkItem[] = [
  {
    itemType: "hybrid",
    prompt:
      "A patient who learned that his harsh self-criticism echoes his father's voice now reports catching that critical voice when he flubs something at work, again when he burns dinner, and again when he loses patience with his kids — and he says the criticism has gotten noticeably quieter. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Catching and softening the same critical voice across work, cooking, and parenting is what working through looks like — the insight is being applied and is changing the experience across several unrelated settings; test whether the quieter voice holds after a real failure, whether it shows up in a brand-new situation he hasn't discussed, and whether he reports actually feeling the criticism start and choosing against it.",
        credit: 1.0,
      },
      {
        text: "He seems to be criticizing himself a bit less.",
        credit: 0.3,
      },
      {
        text: "He probably just has had a calm stretch; we could keep watching.",
        credit: 0.6,
      },
      {
        text: "Self-criticism is too deep-rooted to really change, so this likely means nothing.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'working through' lead from the rival 'he's just having a low-stress few weeks,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: wait for a genuine failure or stressful stretch and see whether he still catches and softens the critical voice — working through predicts the new response survives stress, while a mere calm spell predicts the old criticism returns full force the moment life gets hard. My lead is refuted if the softer voice vanishes under any real pressure and only reappears once things are easy again.",
      yieldAnchors: [
        "He catches the critical voice at work, cooking, and parenting",
        "The same pattern appears in several unrelated settings",
        "He reports the criticism has grown quieter",
      ],
      riskAnchors: [
        "The quieter voice holds after a real failure",
        "It appears in a brand-new, undiscussed situation",
        "He feels the criticism start and chooses against it",
      ],
      defeatedBy: [
        "The softer voice disappears the moment he is stressed",
        "Nothing actually changes in how he treats himself",
      ],
    },
    correctAnswer:
      "Catching and softening the same critical voice across work, cooking, and parenting is what working through looks like — the insight is being applied and is changing the experience across several unrelated settings; test whether the quieter voice holds after a real failure, whether it shows up in a brand-new situation he hasn't discussed, and whether he reports actually feeling the criticism start and choosing against it.",
    explanation:
      "Full credit reads working through from the cross-context change and names a stress test that states its own refutation; 'too deep-rooted to change' is the refusal the multi-setting shift defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A woman gives a polished, complete account of why she fears intimacy, but she delivers it without a flicker of emotion, and after a year of these accounts her dating life is exactly as it was. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She probably needs to understand the fear more deeply; we could dig further.",
        credit: 0.6,
      },
      {
        text: "She clearly understands her fear, so the work here is basically finished.",
        credit: 0,
      },
      {
        text: "This is intellectual insight functioning as a defense — a complete, affectless explanation that substitutes understanding for the feeling and change it should lead to; test whether any session ever brings real emotion to the topic, whether a single concrete dating behavior changes, and whether stating the insight ever interrupts the pattern in a live situation.",
        credit: 1.0,
      },
      {
        text: "She seems to have thought a lot about her fear of intimacy.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'insight-as-defense' lead from the rival 'she simply needs more time before change shows,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: notice whether her explanation ever arrives with any feeling, or whether it stays a flat recital no matter how close the topic gets — insight serving as a defense predicts the affect is reliably kept out, where genuine slow progress predicts feeling gradually breaking through. My lead is refuted if emotion does surface over time and even one dating behavior begins to shift, which would fit a slow but real process rather than a defense.",
      yieldAnchors: [
        "Her account of the fear is polished and complete",
        "She delivers it with no emotion",
        "A year on, her dating life is unchanged",
      ],
      riskAnchors: [
        "Real emotion eventually surfaces around the topic",
        "A concrete dating behavior changes",
        "Stating the insight interrupts the pattern in the moment",
      ],
      defeatedBy: [
        "Feeling breaks through and behavior begins to shift over time",
        "The understanding is wrong about the source of the fear",
      ],
    },
    correctAnswer:
      "This is intellectual insight functioning as a defense — a complete, affectless explanation that substitutes understanding for the feeling and change it should lead to; test whether any session ever brings real emotion to the topic, whether a single concrete dating behavior changes, and whether stating the insight ever interrupts the pattern in a live situation.",
    explanation:
      "Top credit names insight-as-defense and pairs it with an affect-watch test that names its refutation; 'she understands, so the work is finished' is the overreach the unchanged year defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A man has a powerful, tearful realization about his absent mother and declares afterward that he is 'a completely different person now.' Two months later, friends and family who see him daily report no change at all in how he acts. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He felt transformed, so he must genuinely be different now.",
        credit: 0,
      },
      {
        text: "He seems to have had a strong emotional experience.",
        credit: 0.3,
      },
      {
        text: "A vivid emotional release is being mistaken for change — catharsis can feel like transformation while leaving the actual pattern untouched until it is worked through; test whether anyone who sees him daily notices a concrete difference, whether his behavior shifts in fresh real situations, and whether the felt transformation outlasts a return to ordinary stress.",
        credit: 1.0,
      },
      {
        text: "He probably did change somewhat; we could give it more time.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'catharsis, not change' lead from the rival 'real change is happening but is still invisible,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: ask the people who interact with him every day whether anything concrete in his behavior is different — change too real to see should still leave traces others can point to. My lead is refuted if close observers independently report specific behavioral differences, which would mean the transformation is real and just hadn't reached his own account yet.",
      yieldAnchors: [
        "He had a tearful realization about his mother",
        "He declares himself a different person",
        "Daily observers report no change two months on",
      ],
      riskAnchors: [
        "People who see him daily notice a concrete difference",
        "His behavior shifts in fresh real situations",
        "The sense of change outlasts ordinary stress",
      ],
      defeatedBy: [
        "Close observers independently report specific behavioral changes",
        "His daily relationships clearly operate differently now",
      ],
    },
    correctAnswer:
      "A vivid emotional release is being mistaken for change — catharsis can feel like transformation while leaving the actual pattern untouched until it is worked through; test whether anyone who sees him daily notices a concrete difference, whether his behavior shifts in fresh real situations, and whether the felt transformation outlasts a return to ordinary stress.",
    explanation:
      "Full credit separates catharsis from change and names a third-party test that states its refutation; 'he felt transformed, so he is' is the overreach the unchanged two months defeat.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A patient who understood her conflict-avoidance manages one hard conversation — but only after her therapist explicitly encourages her, and only that one. Everywhere else, with everyone else, she keeps avoiding exactly as before. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She had one hard conversation, so she has clearly overcome her avoidance.",
        credit: 0,
      },
      {
        text: "She seems to manage conflict when she's prompted.",
        credit: 0.3,
      },
      {
        text: "The change is still tied to the therapy frame — it appears only with the therapist's prompting and hasn't generalized, which is insight not yet worked through into independent behavior; test whether she initiates a hard conversation without being encouraged, whether the new behavior shows up in a relationship outside therapy, and whether it holds when the other person reacts badly.",
        credit: 1.0,
      },
      {
        text: "She is probably starting to change; we could keep encouraging her.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'change still tied to the therapy frame' lead from the rival 'real, generalizing change has begun,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: see whether she ever handles a conflict on her own, with no prompting and outside the therapy relationship — context-bound change predicts she only manages it when the therapist supplies the push. My lead is refuted if she spontaneously initiates and sustains hard conversations in everyday relationships without any encouragement, which would show the change has generalized.",
      yieldAnchors: [
        "She managed one hard conversation",
        "It happened only after explicit therapist encouragement",
        "She keeps avoiding conflict everywhere else",
      ],
      riskAnchors: [
        "She initiates a hard conversation without being prompted",
        "The new behavior appears outside therapy",
        "It holds when the other person reacts badly",
      ],
      defeatedBy: [
        "She handles conflicts on her own across many relationships",
        "The new behavior persists without any prompting",
      ],
    },
    correctAnswer:
      "The change is still tied to the therapy frame — it appears only with the therapist's prompting and hasn't generalized, which is insight not yet worked through into independent behavior; test whether she initiates a hard conversation without being encouraged, whether the new behavior shows up in a relationship outside therapy, and whether it holds when the other person reacts badly.",
    explanation:
      "Top credit reads context-bound, not-yet-generalized change and names an unprompted test that states its refutation; 'one conversation means she's overcome it' is the overreach her continued avoidance defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A long-term patient keeps noticing the same self-sabotage — quitting just before he might be rejected — first quitting a job, then breaking off a relationship, then dropping a class, but catching himself earlier each time, and once actually stopping before he quit. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He seems to quit things a lot.",
        credit: 0.3,
      },
      {
        text: "The same pattern recognized across job, relationship, and class — caught earlier each time and once interrupted — is working through in action, the slow conversion of one insight into changed behavior; test whether the earlier-catching trend continues with new situations, whether he interrupts the quitting more than once, and whether the gains survive an actual rejection.",
        credit: 1.0,
      },
      {
        text: "Self-sabotage is just part of his character, so there's nothing to be drawn from this.",
        credit: 0,
      },
      {
        text: "He is probably getting a little better at it; we could keep notes.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'working through' lead from the rival 'the single interruption was just luck,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: keep tracking whether he catches the quitting urge earlier and interrupts it again in new situations — working through predicts a continuing trend of earlier catches and repeated interruptions, not a one-off. My lead is refuted if he never stops himself again and the catches don't keep getting earlier, which would make the single success look like chance.",
      yieldAnchors: [
        "He repeats the quitting pattern across job, relationship, and class",
        "He catches it earlier each time",
        "He once stopped himself before quitting",
      ],
      riskAnchors: [
        "The earlier-catching trend continues with new situations",
        "He interrupts the quitting more than once",
        "The gains survive an actual rejection",
      ],
      defeatedBy: [
        "He never interrupts the quitting again",
        "The catches stop getting earlier",
      ],
    },
    correctAnswer:
      "The same pattern recognized across job, relationship, and class — caught earlier each time and once interrupted — is working through in action, the slow conversion of one insight into changed behavior; test whether the earlier-catching trend continues with new situations, whether he interrupts the quitting more than once, and whether the gains survive an actual rejection.",
    explanation:
      "Full credit reads working through from the cross-context, earlier-each-time trend and names a continuing-trend test that states its refutation; 'it's just his character' is the dodge the repeated catches defeat.",
  },
  {
    itemType: "hybrid",
    prompt:
      "Every few weeks a patient arrives with an exciting new insight about himself, presents it with real enthusiasm, and then never builds on it. Each insight is dropped for the next one, and across a year nothing in his life has changed. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He is obviously a deep thinker, so the changes are surely coming.",
        credit: 0,
      },
      {
        text: "He seems to come up with a lot of insights.",
        credit: 0.3,
      },
      {
        text: "Producing insights has become a substitute for change — the steady supply of fresh realizations lets him feel he's working while sidestepping the harder work of applying any one of them; test whether any single insight is ever carried into action, whether he can stay with one uncomfortable theme instead of generating a new theory, and whether interrupting the flow of insights produces frustration rather than progress.",
        credit: 1.0,
      },
      {
        text: "He probably needs help focusing on one insight; we could pick one to pursue.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'insights as a substitute for change' lead from the rival 'he is a deep thinker who will change in time,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: pick one insight and see whether he can actually stay with it and act on it, or whether he slides off into a shinier new realization — insight as a substitute predicts he won't tolerate staying with one. My lead is refuted if he can hold a single theme, work it through, and let it change a concrete behavior, which would show the insights are real raw material rather than a dodge.",
      yieldAnchors: [
        "He arrives with a new insight every few weeks",
        "He never builds on the previous one",
        "Across a year nothing in his life changes",
      ],
      riskAnchors: [
        "A single insight is ever carried into action",
        "He can stay with one uncomfortable theme",
        "Interrupting the flow produces frustration rather than progress",
      ],
      defeatedBy: [
        "He holds one insight, works it through, and changes a behavior",
        "His enthusiasm reliably translates into real-world action",
      ],
    },
    correctAnswer:
      "Producing insights has become a substitute for change — the steady supply of fresh realizations lets him feel he's working while sidestepping the harder work of applying any one of them; test whether any single insight is ever carried into action, whether he can stay with one uncomfortable theme instead of generating a new theory, and whether interrupting the flow of insights produces frustration rather than progress.",
    explanation:
      "Top credit names insight-collecting as a defense and pairs it with a stay-with-one test that states its refutation; 'he's a deep thinker, change is coming' is the overreach the unchanged year defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A woman who understood her habit of dissolving into her partners — dropping her own plans and friends — now, in a new relationship, feels that familiar pull but keeps a couple of her own commitments, and over the following months keeps more and more of them. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She seems to be holding on to her own life more.",
        credit: 0.3,
      },
      {
        text: "She is probably doing better in this relationship; we could check in later.",
        credit: 0.6,
      },
      {
        text: "This looks like gradual working through — she feels the old pull yet keeps an increasing share of her own life, so the insight is being converted into changed behavior incrementally in a live relationship; test whether she holds her ground with a more demanding partner, whether she reports the internal struggle rather than a frictionless ease, and whether the gains persist through a stressful patch.",
        credit: 1.0,
      },
      {
        text: "Her new partner is probably just easier, so this tells us little about her.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'gradual working through' lead from the rival 'this partner just happens to be undemanding,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: notice whether she reports feeling the old pull to dissolve and actively resisting it, rather than simply not feeling it — working through predicts an internal struggle she's winning, while an easy partner predicts no pull at all. My lead is refuted if she keeps her plans only because nothing in the relationship draws her in, and the pull returns full force the moment a partner asks more of her.",
      yieldAnchors: [
        "She feels the familiar pull to dissolve into the partner",
        "She keeps a couple of her own commitments anyway",
        "She keeps more of her own life over the months",
      ],
      riskAnchors: [
        "She holds her ground with a more demanding partner",
        "She reports an internal struggle, not frictionless ease",
        "The gains persist through a stressful patch",
      ],
      defeatedBy: [
        "She keeps her plans only because the partner asks nothing of her",
        "The pull returns in full the moment more is demanded",
      ],
    },
    correctAnswer:
      "This looks like gradual working through — she feels the old pull yet keeps an increasing share of her own life, so the insight is being converted into changed behavior incrementally in a live relationship; test whether she holds her ground with a more demanding partner, whether she reports the internal struggle rather than a frictionless ease, and whether the gains persist through a stressful patch.",
    explanation:
      "Full credit reads incremental working through from the felt-pull-yet-holding pattern and names a demanding-partner test that states its refutation; 'the partner is just easier' is the overreach the reported struggle defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A man can label his own intellectualizing in real time — 'I'm doing the thing again, turning this into an analysis' — but he uses that very labeling to keep any feeling at a safe distance, and nothing about how he relates to others shifts. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He is developing great self-awareness, which means he is bound to improve.",
        credit: 0,
      },
      {
        text: "He seems to know when he's intellectualizing.",
        credit: 0.3,
      },
      {
        text: "The act of naming the defense has itself become a defense — the running commentary is one more layer of analysis that keeps feeling away, so the labeling is intellectual insight, not change; test whether the labeling ever gives way to actually feeling something, whether any emotionally charged topic breaks through, and whether his way of relating to others changes at all.",
        credit: 1.0,
      },
      {
        text: "He probably needs to act on the labeling; we could encourage that.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'naming has become the defense' lead from the rival 'his self-awareness is a real step toward change,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: watch what happens right after he labels the intellectualizing — does feeling come in, or does the labeling simply seal it off and let him keep analyzing? My lead is refuted if naming the defense reliably opens the door to real emotion and his relating begins to change, which would make the self-awareness a genuine first step rather than a fresh hiding place.",
      yieldAnchors: [
        "He labels his intellectualizing in real time",
        "The labeling keeps feeling at a distance",
        "Nothing in how he relates to others shifts",
      ],
      riskAnchors: [
        "The labeling ever gives way to actual feeling",
        "An emotionally charged topic breaks through",
        "His way of relating to others changes",
      ],
      defeatedBy: [
        "Naming the defense reliably opens the door to real emotion",
        "His relationships begin to change after he labels it",
      ],
    },
    correctAnswer:
      "The act of naming the defense has itself become a defense — the running commentary is one more layer of analysis that keeps feeling away, so the labeling is intellectual insight, not change; test whether the labeling ever gives way to actually feeling something, whether any emotionally charged topic breaks through, and whether his way of relating to others changes at all.",
    explanation:
      "Top credit notes the naming has become a defense and pairs it with a what-happens-after test that states its refutation; 'great self-awareness means he'll improve' is the overreach the unchanged relating defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A patient who 'understood' the roots of her anxiety a year ago saw no change then. Only now, after re-living that same understanding with real feeling many times — in sessions and in difficult moments at home — is she finally acting differently. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She understood it a year ago, so that original insight is what finally fixed her.",
        credit: 0,
      },
      {
        text: "She seems to have changed at last.",
        credit: 0.3,
      },
      {
        text: "Change followed the repeated emotional re-encounter, not the year-old idea — this is working through, where an insight has to be felt and re-applied many times before behavior shifts; test whether the timing of the change tracks the repetitions rather than the original realization, whether the new behavior now appears in fresh situations, and whether it survives stress that a fresh, untested insight would not.",
        credit: 1.0,
      },
      {
        text: "The first insight probably worked slowly; we could map out the timeline.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'change came from working through' lead from the rival 'the original insight just acted on a long delay,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: line up when the behavior actually changed against the year of repeated emotional re-encounters versus the single year-old insight — working through predicts the change tracks the recent repetitions, not the distant first realization. My lead is refuted if the behavior shifted right after the original insight with no role for the intervening repetitions, which would support a delayed effect of that one insight.",
      yieldAnchors: [
        "The year-old understanding produced no change at the time",
        "She re-lived it with feeling many times since",
        "Behavior is changing only now",
      ],
      riskAnchors: [
        "The change tracks the repetitions, not the original insight",
        "The new behavior appears in fresh situations",
        "It survives stress a fresh insight would not",
      ],
      defeatedBy: [
        "The behavior changed right after the original insight",
        "The intervening repetitions played no role in the timing",
      ],
    },
    correctAnswer:
      "Change followed the repeated emotional re-encounter, not the year-old idea — this is working through, where an insight has to be felt and re-applied many times before behavior shifts; test whether the timing of the change tracks the repetitions rather than the original realization, whether the new behavior now appears in fresh situations, and whether it survives stress that a fresh, untested insight would not.",
    explanation:
      "Full credit names working through as the cause and pairs it with a timeline test that states its refutation; 'the original insight fixed her' is the overreach the year of no change defeats.",
  },
];

const written: HomeworkItem[] = [
  {
    itemType: "written",
    prompt:
      "A patient can explain, with precision and even a sense of relief, that his fear of success comes from never wanting to outshine a struggling sibling. He returns to this account often. Yet he keeps quietly sabotaging promotions and opportunities, just as he always has. In one paragraph, propose the strongest conclusion about whether real change is occurring and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that this is intellectual insight without change: he understands the pattern and even finds explaining it soothing, but the understanding has not been worked through into how he acts, and the relief may actually drain off the pressure that would force change. This is a strong claim because it predicts checkable consequences: his self-sabotage should continue unchanged in the next real opportunity despite his clear understanding; the explanation should keep arriving as a tidy recital rather than with the fear it describes; and naming the pattern in the moment he's about to sabotage should fail to interrupt it. I would test it by tracking his behavior at the next promotion rather than his ability to narrate the cause, by watching whether the account ever carries genuine feeling, and by seeing whether the insight ever shows up as a changed choice rather than a repeated story.",
      yieldAnchors: [
        "He explains his fear of success precisely",
        "He returns to the account often and feels relief",
        "He keeps sabotaging promotions as before",
      ],
      riskAnchors: [
        "The self-sabotage continues at the next real opportunity",
        "The explanation stays a recital, not a felt fear",
        "Naming it in the moment fails to interrupt it",
      ],
      defeatedBy: [
        "His behavior changes at the next opportunity",
        "Understanding the cause is the same as being changed by it",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that this is intellectual insight without change: he understands the pattern and even finds explaining it soothing, but the understanding has not been worked through into how he acts, and the relief may actually drain off the pressure that would force change. This is a strong claim because it predicts checkable consequences: his self-sabotage should continue unchanged in the next real opportunity despite his clear understanding; the explanation should keep arriving as a tidy recital rather than with the fear it describes; and naming the pattern in the moment he's about to sabotage should fail to interrupt it. I would test it by tracking his behavior at the next promotion rather than his ability to narrate the cause, by watching whether the account ever carries genuine feeling, and by seeing whether the insight ever shows up as a changed choice rather than a repeated story.",
    explanation:
      "Under the inverted standard, 'understanding the cause means he's changed' earns near-zero; top credit commits to intellectual-insight-only and names a next-opportunity test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "Over many months, a woman has repeatedly caught her lifelong habit of caretaking everyone at her own expense — first with her mother, then her boss, then her friends — and now she sets reasonable limits with all of them, holding firm even during a stressful week when she was exhausted. In one paragraph, propose the strongest conclusion about whether genuine change has taken hold and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that this is genuine working through: the same caretaking pattern has been recognized and acted on across several independent relationships, and because the new limit-setting held even under exhaustion, the change has begun to consolidate rather than depending on easy conditions. This is a strong claim because it predicts checkable consequences: the new behavior should keep appearing with brand-new people she hasn't discussed in therapy; it should survive future high-pressure stretches and guilt-inducing pushback; and she should report feeling the old urge to caretake and choosing against it rather than simply not feeling it. I would test it by watching for the limit-setting in unrehearsed relationships, by checking whether it endures the next genuinely stressful period, and by asking whether the change feels like an effortful choice she can describe rather than a mood that happened to lift.",
      yieldAnchors: [
        "She caught the caretaking pattern across mother, boss, and friends",
        "She now sets limits with all of them",
        "The limits held during an exhausting, stressful week",
      ],
      riskAnchors: [
        "The behavior appears with brand-new, undiscussed people",
        "It survives future high-pressure stretches and guilt",
        "She feels the old urge and chooses against it",
      ],
      defeatedBy: [
        "The limits collapse the moment she is stressed",
        "Cross-context, stress-proof change tells us nothing real",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that this is genuine working through: the same caretaking pattern has been recognized and acted on across several independent relationships, and because the new limit-setting held even under exhaustion, the change has begun to consolidate rather than depending on easy conditions. This is a strong claim because it predicts checkable consequences: the new behavior should keep appearing with brand-new people she hasn't discussed in therapy; it should survive future high-pressure stretches and guilt-inducing pushback; and she should report feeling the old urge to caretake and choosing against it rather than simply not feeling it. I would test it by watching for the limit-setting in unrehearsed relationships, by checking whether it endures the next genuinely stressful period, and by asking whether the change feels like an effortful choice she can describe rather than a mood that happened to lift.",
    explanation:
      "The inverted standard gives near-zero to 'cross-context, stress-proof change tells us nothing'; credit goes to the working-through conclusion that commits to consolidated change and names a stress-and-novelty test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A man has a single explosive session in which he rages and weeps about his childhood for the first time, and he leaves convinced he is 'finally healed.' Over the next several weeks his temper, his relationships, and his old habits carry on exactly as before. In one paragraph, propose the strongest conclusion about what happened and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that he experienced catharsis rather than change: a powerful emotional release can feel like transformation, but without the slow work of recognizing and re-handling the pattern across situations, the underlying habits stay intact. This is a strong claim because it predicts checkable consequences: people who see him regularly should notice no concrete difference in the weeks that follow; his temper and relationship patterns should recur in fresh situations unchanged; and the feeling of being healed should fade as ordinary stress returns rather than translating into new behavior. I would test it by gathering observations from people in his daily life, by tracking whether any specific behavior actually shifts over the following weeks, and by checking whether the sense of transformation outlasts the first real provocation or only lived in the heat of that one session.",
      yieldAnchors: [
        "He had one explosive, tearful session",
        "He left convinced he was healed",
        "His temper, relationships, and habits continue unchanged",
      ],
      riskAnchors: [
        "Daily observers notice no concrete difference",
        "His old patterns recur in fresh situations",
        "The 'healed' feeling fades as stress returns",
      ],
      defeatedBy: [
        "Close observers report specific, lasting behavior change",
        "A single emotional release equals being cured",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that he experienced catharsis rather than change: a powerful emotional release can feel like transformation, but without the slow work of recognizing and re-handling the pattern across situations, the underlying habits stay intact. This is a strong claim because it predicts checkable consequences: people who see him regularly should notice no concrete difference in the weeks that follow; his temper and relationship patterns should recur in fresh situations unchanged; and the feeling of being healed should fade as ordinary stress returns rather than translating into new behavior. I would test it by gathering observations from people in his daily life, by tracking whether any specific behavior actually shifts over the following weeks, and by checking whether the sense of transformation outlasts the first real provocation or only lived in the heat of that one session.",
    explanation:
      "The inverted standard gives near-zero to 'one release equals a cure'; credit goes to the catharsis-not-change conclusion that names a third-party and durability test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A patient acts noticeably more open and assertive inside the therapy room and whenever his therapist is present or has just coached him, but the moment he is on his own — at work, at home, with friends — he reverts entirely to his old passive, closed-off self. In one paragraph, propose the strongest conclusion about whether real change is occurring and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that the change is so far context-bound to the therapy relationship: the new openness depends on the therapist's presence or prompting and has not yet generalized, which is the mark of an insight that hasn't been worked through into independent behavior. This is a strong claim because it predicts checkable consequences: the assertiveness should fail to appear in situations where the therapist plays no role; it should not survive when no one has primed him beforehand; and it should be absent precisely in the relationships that matter most to him outside the room. I would test it by looking for any unprompted assertive behavior in everyday settings, by asking the people in his life whether they see the openness he shows in session, and by checking whether the change can hold during a stretch with no recent coaching at all.",
      yieldAnchors: [
        "He is open and assertive inside the therapy room",
        "It appears only when the therapist is present or has coached him",
        "He reverts to passivity once on his own",
      ],
      riskAnchors: [
        "Unprompted assertiveness appears in everyday settings",
        "People in his life see the openness he shows in session",
        "The change holds with no recent coaching",
      ],
      defeatedBy: [
        "He is reliably assertive when entirely on his own",
        "Change confined to the therapy room is full recovery",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that the change is so far context-bound to the therapy relationship: the new openness depends on the therapist's presence or prompting and has not yet generalized, which is the mark of an insight that hasn't been worked through into independent behavior. This is a strong claim because it predicts checkable consequences: the assertiveness should fail to appear in situations where the therapist plays no role; it should not survive when no one has primed him beforehand; and it should be absent precisely in the relationships that matter most to him outside the room. I would test it by looking for any unprompted assertive behavior in everyday settings, by asking the people in his life whether they see the openness he shows in session, and by checking whether the change can hold during a stretch with no recent coaching at all.",
    explanation:
      "The inverted standard gives near-zero to treating room-only change as recovery; credit goes to the context-bound conclusion that names an unprompted, real-world test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A patient who grasped the source of her social anxiety handles it well whenever she is calm and rested — she speaks up, stays in conversations, lets herself be seen. But under real pressure, after a bad night or a stressful day, the old avoidance and silence come straight back. In one paragraph, propose the strongest conclusion about the durability of her change and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that her change is real but not yet consolidated: the new behavior holds under easy conditions and collapses under stress, which is exactly what insight looks like before it has been worked through enough to become automatic. This is a strong claim because it predicts checkable consequences: as working through continues, the new behavior should begin to survive stressful periods rather than only calm ones; she should become able to catch the avoidance specifically when she's depleted; and her relapses should grow shorter and shallower over time even if they don't vanish at once. I would test it by tracking how she does during genuinely stressful stretches over the coming months, by checking whether she can recognize and resist the avoidance when tired, and by watching whether the gap between her calm-day and bad-day behavior narrows as the work goes on.",
      yieldAnchors: [
        "She handles the anxiety well when calm and rested",
        "She speaks up and stays present under easy conditions",
        "The old avoidance returns under stress and fatigue",
      ],
      riskAnchors: [
        "The new behavior begins to survive stressful periods",
        "She catches the avoidance when depleted",
        "Relapses grow shorter and shallower over time",
      ],
      defeatedBy: [
        "The change never survives any stress no matter how long the work continues",
        "Stress-dependent behavior tells us nothing about consolidation",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that her change is real but not yet consolidated: the new behavior holds under easy conditions and collapses under stress, which is exactly what insight looks like before it has been worked through enough to become automatic. This is a strong claim because it predicts checkable consequences: as working through continues, the new behavior should begin to survive stressful periods rather than only calm ones; she should become able to catch the avoidance specifically when she's depleted; and her relapses should grow shorter and shallower over time even if they don't vanish at once. I would test it by tracking how she does during genuinely stressful stretches over the coming months, by checking whether she can recognize and resist the avoidance when tired, and by watching whether the gap between her calm-day and bad-day behavior narrows as the work goes on.",
    explanation:
      "The inverted standard gives near-zero to 'stress-dependent behavior tells us nothing'; credit goes to the real-but-not-consolidated conclusion that names a narrowing-gap-under-stress test that could refute it.",
  },
];

export const section: SectionContent = {
  slug: "insight-and-working-through",
  title: "Insight and Working Through",
  weekNumber: 1,
  blurb:
    "Understanding why you do something rarely changes it on its own; real change comes from working through — catching the same pattern again and again, with feeling, across many situations until it finally shifts.",
  lectureTitle:
    "1.6 Insight and Working Through: how change actually occurs",
  body: `# Insight and Working Through

One of the most surprising lessons in therapy is that knowing why you do something is not the same as being able to stop. People often arrive expecting that the moment they finally understand the root of a problem, the problem will dissolve. It almost never works that way. A patient can explain his fear of commitment flawlessly and keep fleeing every relationship; a woman can name her perfectionism precisely and keep unraveling over a typo. Understanding is a beginning, not an ending. This section is about the difference between the flash of insight and the slow labor — called **working through** — that actually changes how a person lives.

## Insight is not change

It is tempting to treat a good explanation as a finished job. But an explanation is a map, and having a map is not the same as walking the road. The clearest sign of this gap is the patient who can narrate his pattern in detail while behaving exactly as before. The understanding is genuine, yet it floats above his life without touching it. The strongest reading of such a case is not "he's cured because he knows the cause" — the unchanged behavior defeats that — and not "the mind is unknowable, so who can say." It is the specific claim that this is **insight without change**, and the way to confirm it is to watch behavior, not narration: does anything actually shift in the next real situation?

## Intellectual versus emotional insight

There are two very different ways to "understand" something. **Intellectual insight** is knowing the explanation the way you know a fact — flat, tidy, often recited with a faint pride. **Emotional insight** is feeling the truth of it in the moment it matters, with the original feeling alive in the room. The two look similar on paper but behave completely differently. A man who says "I know I push people away" in a bored monotone, year after year, is showing intellectual insight; a woman who connects her people-pleasing to soothing her anxious mother *with tears* and then starts saying no is showing emotional insight. A simple test separates them: does the understanding arrive with feeling, and does it ever interrupt the pattern as it happens?

## Working through: the same lesson, many rooms

Real change usually comes not from one realization but from meeting the same pattern over and over, in situation after situation, until recognizing it becomes second nature. This is **working through**. A woman who sees that she chooses unavailable partners will catch the pull with a new date, then in a flirtation at work, then in a one-sided friendship — each time a little earlier, until one day she acts differently. The signature of working through is a pattern recognized across many separate contexts, caught sooner each time, and eventually interrupted. That is why the strongest conclusion about a promising change asks whether it shows up in **fresh, unrehearsed situations**, not just the ones already discussed.

## Why change is slow

If insight alone could rewire a habit, therapy would take an afternoon. It doesn't, because patterns are overlearned — practiced thousands of times, automatic, tied to old feelings of safety. Undoing that takes repetition of a new kind: feeling the old pull and choosing against it, again and again, until the new response becomes the automatic one. Catharsis — a dramatic emotional release — can feel like transformation, but a single sobbing session about a cold father changes nothing by itself if daily life rolls on unchanged. Change that is real tends to be **gradual, effortful, and reported as a struggle**, not a sudden, frictionless rebirth.

## When insight becomes a defense

Strangely, understanding can itself become a way to avoid changing. A patient who arrives every few weeks with an exciting new insight, never building on the last, may be using the *production* of insights to feel like he's working while sidestepping the harder task of applying one. A man who labels his own intellectualizing in real time can use that very labeling to keep feeling at bay. When insight substitutes for change rather than leading to it, the tell is simple: lots of understanding, no movement. The strong move is to notice the defense and test it — can he ever stay with one uncomfortable theme instead of generating a fresh theory?

## Reading whether real change is happening

So how do you tell genuine change from its convincing imitations? You commit to a specific reading and name the cheap observations that could prove you wrong. If you think change is real and consolidating, it should appear in new situations, carry feeling, and **survive stress** — and you can watch for relapse on a bad day. If you think it's only intellectual, behavior should stay flat no matter how good the explanation. If you suspect it's context-bound, it should vanish the moment the therapist isn't prompting it. The weak answers are always the same: "he understands it, so he's fixed" (an overreach the behavior defeats) and "people are too complex to say" (a refusal that ignores the evidence in front of you).

## In the real world

Suppose a friend has been in therapy for a year and tells you he "totally gets" why he's so defensive — yet he's just as prickly as ever at dinner. The dodge is to nod along ("at least he understands himself now") or to shrug ("people don't really change"). A better move commits to a reading and a test. Maybe this is intellectual insight that hasn't been worked through: then his defensiveness should keep showing up unchanged, the explanation should stay a recital without feeling, and naming it mid-argument shouldn't soften him. Or maybe change is genuinely starting: then you'd see him catch himself across different situations, feel the old prickle and choose otherwise, and hold the new response even on a hard day. Either way, you've traded a vague verdict for a testable one — and you know exactly which cheap observation would tell you you're wrong.`,
  homework: {
    mcq,
    hybrid,
    written,
  },
};
