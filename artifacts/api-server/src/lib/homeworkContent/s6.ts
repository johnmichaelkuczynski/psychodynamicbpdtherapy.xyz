import type { SectionContent, HomeworkItem, McOption, WrittenRubric } from "./types";

const mcq: HomeworkItem[] = [
  {
    itemType: "mc",
    prompt:
      "Two groups estimate how many countries are in Africa. One group is first asked whether the number is more or less than 10; the other, more or less than 65. The first group then guesses far lower numbers than the second, even though those starting figures were arbitrary. Which conclusion best follows?",
    mcOptions: [
      {
        text: "People likely treat the arbitrary starting number as a mental anchor and adjust too little from it, so the first figure drags the final estimate; test whether even a number from a spun wheel shifts estimates, whether warning people about anchoring shrinks the effect, and whether the gap narrows when the starting number is made obviously irrelevant.",
        credit: 1.0,
      },
      {
        text: "The starting number probably pulls the estimate; we could try more starting values.",
        credit: 0.6,
      },
      {
        text: "People seem swayed by the first number they hear.",
        credit: 0.3,
      },
      {
        text: "Estimating quantities is so personal that the numbers tell us nothing about how minds work.",
        credit: 0,
      },
    ],
    correctAnswer:
      "People likely treat the arbitrary starting number as a mental anchor and adjust too little from it, so the first figure drags the final estimate; test whether even a number from a spun wheel shifts estimates, whether warning people about anchoring shrinks the effect, and whether the gap narrows when the starting number is made obviously irrelevant.",
    explanation:
      "Top credit names a specific mechanism (anchoring and insufficient adjustment) and three checkable tests; the 'too personal to say anything' option refuses to infer the process and earns zero under the inverted standard.",
  },
  {
    itemType: "mc",
    prompt:
      "After a week of heavy news coverage of shark attacks, beachgoers rate shark attacks as far more likely than drowning, even though drowning kills vastly more swimmers every year. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Risk judgments are too irrational to study scientifically.",
        credit: 0,
      },
      {
        text: "People seem more scared of sharks after watching the news.",
        credit: 0.3,
      },
      {
        text: "Vivid coverage probably inflates the fear; we could survey people after other news events.",
        credit: 0.6,
      },
      {
        text: "People likely judge how likely an event is by how easily examples come to mind, so heavily reported, dramatic events feel more common; test whether estimates rise right after vivid coverage and fade weeks later, whether hard-to-picture risks are underrated, and whether people who can recall more examples give higher likelihood estimates.",
        credit: 1.0,
      },
    ],
    correctAnswer:
      "People likely judge how likely an event is by how easily examples come to mind, so heavily reported, dramatic events feel more common; test whether estimates rise right after vivid coverage and fade weeks later, whether hard-to-picture risks are underrated, and whether people who can recall more examples give higher likelihood estimates.",
    explanation:
      "Full credit names the availability heuristic and three tests that could refute it; 'too irrational to study' commits to nothing and earns zero.",
  },
  {
    itemType: "mc",
    prompt:
      "Told that the sequence 2-4-6 follows a hidden rule, people propose new triples to test it. Almost everyone tries only triples that fit their guess ('increasing evens' → 8-10-12) and rarely one that could break it, so they confidently announce the wrong rule. Which conclusion best follows?",
    mcOptions: [
      {
        text: "People likely test an idea by seeking cases that confirm it rather than ones that could disprove it, so they miss disconfirming evidence; test whether prompting people to try to break their rule improves accuracy, whether they mostly request fitting triples, and whether the same confirmation-seeking appears when people test social beliefs.",
        credit: 1.0,
      },
      {
        text: "People seem to pick triples that match their first guess.",
        credit: 0.3,
      },
      {
        text: "Reasoning is too messy to draw any general lesson from a puzzle.",
        credit: 0,
      },
      {
        text: "People probably look for confirming evidence; we could test more puzzles.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "People likely test an idea by seeking cases that confirm it rather than ones that could disprove it, so they miss disconfirming evidence; test whether prompting people to try to break their rule improves accuracy, whether they mostly request fitting triples, and whether the same confirmation-seeking appears when people test social beliefs.",
    explanation:
      "The strongest conclusion names confirmation-seeking as the mechanism and three tests; 'too messy to draw any lesson' is the barren refusal the orderly, repeatable error defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "People read a description of Linda as outspoken and concerned with social justice, then rate it 'more probable' that she is a bank teller AND a feminist than that she is simply a bank teller — even though a combination can never be more likely than one of its parts. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The detailed story probably sways the rating; we could test other descriptions.",
        credit: 0.6,
      },
      {
        text: "Probability is too hard for ordinary people, so nothing general can be said.",
        credit: 0,
      },
      {
        text: "People likely judge probability by how well a case matches a stereotype rather than by the rules of probability, so a richer, matching story feels more likely; test whether the error shrinks when the question is asked in frequencies ('how many of 100'), whether descriptions that fit no stereotype remove the effect, and whether the same reversal appears with other added details.",
        credit: 1.0,
      },
      {
        text: "People seem to prefer the more detailed option.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "People likely judge probability by how well a case matches a stereotype rather than by the rules of probability, so a richer, matching story feels more likely; test whether the error shrinks when the question is asked in frequencies ('how many of 100'), whether descriptions that fit no stereotype remove the effect, and whether the same reversal appears with other added details.",
    explanation:
      "Top credit names the representativeness heuristic and three tests, including a frequency reframing that could refute it; 'probability is too hard, nothing can be said' opens no inquiry.",
  },
  {
    itemType: "mc",
    prompt:
      "Asked 'A bat and a ball cost $1.10 together; the bat costs $1.00 more than the ball; how much is the ball?', most people quickly answer '10 cents' — which is wrong (it is 5 cents) — and catch the error only if they stop and check. Which conclusion best follows?",
    mcOptions: [
      {
        text: "People are simply bad at math, so there is nothing deeper to learn here.",
        credit: 0,
      },
      {
        text: "The mind likely has a fast, automatic mode that throws up an intuitive answer and a slower, effortful mode that must override it, so errors come from trusting the quick answer; test whether forcing a delay or a hard-to-read font improves accuracy, whether the wrong answer comes faster than the right one, and whether people who score higher on reflection tasks make fewer such errors.",
        credit: 1.0,
      },
      {
        text: "People seem to rush the answer.",
        credit: 0.3,
      },
      {
        text: "People probably answer too fast; we could give them more time and see.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The mind likely has a fast, automatic mode that throws up an intuitive answer and a slower, effortful mode that must override it, so errors come from trusting the quick answer; test whether forcing a delay or a hard-to-read font improves accuracy, whether the wrong answer comes faster than the right one, and whether people who score higher on reflection tasks make fewer such errors.",
    explanation:
      "Full credit commits to a two-system (fast/slow) mechanism with three tests; 'people are just bad at math' is the overreach defeated by the fact that they can solve it once they reflect.",
  },
  {
    itemType: "mc",
    prompt:
      "Doctors choose a treatment more often when told it has a '90% survival rate' than when told it has a '10% mortality rate,' even though those describe exactly the same outcome. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Wording seems to matter to doctors.",
        credit: 0.3,
      },
      {
        text: "Choices likely depend on whether an option is framed as a gain or a loss, not just on the facts, because losses loom larger than equivalent gains; test whether the preference reverses when the framing is flipped, whether it shrinks when people compute the numbers themselves, and whether the same framing swing appears in money decisions.",
        credit: 1.0,
      },
      {
        text: "Decision-making is too subjective to study scientifically.",
        credit: 0,
      },
      {
        text: "The framing probably influences the choice; we could test more wordings.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Choices likely depend on whether an option is framed as a gain or a loss, not just on the facts, because losses loom larger than equivalent gains; test whether the preference reverses when the framing is flipped, whether it shrinks when people compute the numbers themselves, and whether the same framing swing appears in money decisions.",
    explanation:
      "The richest conclusion names framing and loss aversion as the mechanism and three tests; 'too subjective to study' is the dodge the reliable, repeatable framing swing contradicts.",
  },
  {
    itemType: "mc",
    prompt:
      "Told a disease affects 1 in 1,000 people and a test is 95% accurate, most people say someone who tests positive almost certainly has the disease — when in fact most positives are false alarms because the disease is so rare. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Statistics are beyond ordinary people, so nothing can be concluded from the mistake.",
        credit: 0,
      },
      {
        text: "People probably ignore how rare the disease is; we could test other numbers.",
        credit: 0.6,
      },
      {
        text: "People seem to overrate a positive test.",
        credit: 0.3,
      },
      {
        text: "People likely focus on the test's accuracy and neglect the base rate of how rare the disease is, so they overweight the individual evidence; test whether presenting the problem as natural frequencies ('1 of 1,000...') fixes most answers, whether higher base rates reduce the error, and whether the same neglect appears in courtroom or hiring judgments.",
        credit: 1.0,
      },
    ],
    correctAnswer:
      "People likely focus on the test's accuracy and neglect the base rate of how rare the disease is, so they overweight the individual evidence; test whether presenting the problem as natural frequencies ('1 of 1,000...') fixes most answers, whether higher base rates reduce the error, and whether the same neglect appears in courtroom or hiring judgments.",
    explanation:
      "Top credit names base-rate neglect and three tests, including a frequency reframing that could refute it; 'statistics are beyond ordinary people' is the refusal the predictable, fixable error defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "Before an election, people give mixed predictions. Afterward, the same people 'remember' having been far more sure of the actual winner than their earlier written answers show. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Once an outcome is known, the mind likely reshapes the memory of its earlier belief to fit, making the result feel as if it was obvious all along; test whether recording predictions in advance and showing them back reduces the distortion, whether the effect grows with the time since predicting, and whether it appears for sports results and exam answers too.",
        credit: 1.0,
      },
      {
        text: "People seem to misremember their own predictions.",
        credit: 0.3,
      },
      {
        text: "Memory of past predictions is too unreliable to study.",
        credit: 0,
      },
      {
        text: "People probably overstate their foresight; we could track more predictions.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Once an outcome is known, the mind likely reshapes the memory of its earlier belief to fit, making the result feel as if it was obvious all along; test whether recording predictions in advance and showing them back reduces the distortion, whether the effect grows with the time since predicting, and whether it appears for sports results and exam answers too.",
    explanation:
      "The winning conclusion names hindsight bias as a memory-updating mechanism with three tests; 'too unreliable to study' is the dodge the systematic distortion itself defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "Students randomly given a coffee mug demand about $7 to sell it, while students without one will pay only about $3 to buy the same mug. The only difference is who happens to own it. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Owning something probably raises its value to people; we could test other objects.",
        credit: 0.6,
      },
      {
        text: "Value is purely personal, so prices tell us nothing about the mind.",
        credit: 0,
      },
      {
        text: "Owners seem to want more money for the mug.",
        credit: 0.3,
      },
      {
        text: "People likely feel the pain of giving something up more strongly than the pleasure of gaining it, so ownership inflates an item's perceived value; test whether the gap appears the moment ownership is assigned, whether it vanishes for items treated as pure currency like tokens, and whether the same loss-averse gap shows up when people sell stocks.",
        credit: 1.0,
      },
    ],
    correctAnswer:
      "People likely feel the pain of giving something up more strongly than the pleasure of gaining it, so ownership inflates an item's perceived value; test whether the gap appears the moment ownership is assigned, whether it vanishes for items treated as pure currency like tokens, and whether the same loss-averse gap shows up when people sell stocks.",
    explanation:
      "Full credit names loss aversion and the endowment effect with three tests; 'value is purely personal, prices tell us nothing' is the refusal the systematic buy/sell gap contradicts.",
  },
  {
    itemType: "mc",
    prompt:
      "At a roulette table, after the ball lands on red eight times in a row, players pile their bets on black, certain it is 'due' — though each spin is independent and equally likely either way. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Gambling is irrational, so there is nothing here to explain.",
        credit: 0,
      },
      {
        text: "People likely expect short random streaks to 'even out,' wrongly treating independent events as if they correct themselves, because a long run of red feels unrepresentative of chance; test whether the betting swing grows with longer streaks, whether explaining independence reduces it, and whether the same 'it's due' reasoning appears with coin flips and lottery numbers.",
        credit: 1.0,
      },
      {
        text: "People seem to bet against the streak.",
        credit: 0.3,
      },
      {
        text: "People probably think black is due; we could watch more tables.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "People likely expect short random streaks to 'even out,' wrongly treating independent events as if they correct themselves, because a long run of red feels unrepresentative of chance; test whether the betting swing grows with longer streaks, whether explaining independence reduces it, and whether the same 'it's due' reasoning appears with coin flips and lottery numbers.",
    explanation:
      "Top credit names the gambler's fallacy (misreading randomness) with three tests; 'gambling is irrational, nothing to explain' is the dodge the orderly, streak-dependent betting defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "Asked tricky general-knowledge questions and to mark how sure they are, people who say they are '90% certain' turn out to be right only about 70% of the time, across many questions. Which conclusion best follows?",
    mcOptions: [
      {
        text: "People seem a bit too sure of themselves.",
        credit: 0.3,
      },
      {
        text: "People probably overrate their certainty; we could ask more questions.",
        credit: 0.6,
      },
      {
        text: "Confidence is just a feeling, so it cannot be measured against the truth.",
        credit: 0,
      },
      {
        text: "People likely overestimate how much they know, so stated confidence runs systematically higher than actual accuracy; test whether the gap is largest for the hardest questions, whether asking people to list reasons they might be wrong narrows it, and whether experts show the same overconfidence within their own fields.",
        credit: 1.0,
      },
    ],
    correctAnswer:
      "People likely overestimate how much they know, so stated confidence runs systematically higher than actual accuracy; test whether the gap is largest for the hardest questions, whether asking people to list reasons they might be wrong narrows it, and whether experts show the same overconfidence within their own fields.",
    explanation:
      "The strongest conclusion names overconfidence as a measurable, systematic gap with three tests; 'confidence can't be measured against truth' is the dodge the reliable calibration gap defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "People are asked which hospital records more days when over 60% of babies born are boys: a large hospital (about 45 births a day) or a small one (about 15 a day). Most say 'about the same,' though the small hospital must have more such extreme days. Which conclusion best follows?",
    mcOptions: [
      {
        text: "People likely ignore sample size and expect any sample to mirror the overall average, so they miss that small samples swing more; test whether the error shrinks when the size difference is made vivid, whether people predict more extremes for very tiny samples once prompted, and whether the same neglect appears in judging streaks of business or sports results.",
        credit: 1.0,
      },
      {
        text: "Probability puzzles are too tricky to reveal anything about thinking.",
        credit: 0,
      },
      {
        text: "People seem to overlook how big each hospital is.",
        credit: 0.3,
      },
      {
        text: "People probably forget that size matters; we could test other hospital sizes.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "People likely ignore sample size and expect any sample to mirror the overall average, so they miss that small samples swing more; test whether the error shrinks when the size difference is made vivid, whether people predict more extremes for very tiny samples once prompted, and whether the same neglect appears in judging streaks of business or sports results.",
    explanation:
      "Top credit names sample-size neglect (expecting small samples to mirror the population) with three tests; 'too tricky to reveal anything' is the refusal the orderly error defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "Mock jurors read identical case files but rate the more attractive defendant as less likely to be guilty and recommend lighter sentences. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Looks probably sway the verdict; we could test more juror groups.",
        credit: 0.6,
      },
      {
        text: "Appearance seems to matter to jurors.",
        credit: 0.3,
      },
      {
        text: "One positive impression like attractiveness likely spills over into unrelated judgments such as guilt, so a single good trait colors the whole assessment; test whether other positive traits like a warm voice produce the same leniency, whether reminding jurors to judge only the evidence removes it, and whether the spillover also lifts ratings of unrelated qualities like competence.",
        credit: 1.0,
      },
      {
        text: "Juror decisions are too personal to study.",
        credit: 0,
      },
    ],
    correctAnswer:
      "One positive impression like attractiveness likely spills over into unrelated judgments such as guilt, so a single good trait colors the whole assessment; test whether other positive traits like a warm voice produce the same leniency, whether reminding jurors to judge only the evidence removes it, and whether the spillover also lifts ratings of unrelated qualities like competence.",
    explanation:
      "Full credit names the halo effect (spillover from one trait to unrelated judgments) with three tests; 'too personal to study' is the dodge the reliable attractiveness bias contradicts.",
  },
  {
    itemType: "mc",
    prompt:
      "A company has spent two years and millions on a project that now looks doomed, yet executives keep funding it, saying 'we've already invested too much to quit.' A fresh project with better odds gets passed over. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Business choices are too complex to draw any general lesson from.",
        credit: 0,
      },
      {
        text: "The executives seem reluctant to quit.",
        credit: 0.3,
      },
      {
        text: "Past spending probably traps them; we could survey more companies.",
        credit: 0.6,
      },
      {
        text: "People likely let unrecoverable past costs drive decisions that should depend only on future prospects, because abandoning the project feels like accepting a loss; test whether people told to ignore prior spending choose the better option, whether the trap grows with the size of the sunk cost, and whether the same reluctance appears when individuals keep using a ticket they already paid for.",
        credit: 1.0,
      },
    ],
    correctAnswer:
      "People likely let unrecoverable past costs drive decisions that should depend only on future prospects, because abandoning the project feels like accepting a loss; test whether people told to ignore prior spending choose the better option, whether the trap grows with the size of the sunk cost, and whether the same reluctance appears when individuals keep using a ticket they already paid for.",
    explanation:
      "Top credit names the sunk-cost effect (honoring spent costs) with three tests, including one that could refute it; 'too complex to draw any lesson' opens no inquiry.",
  },
  {
    itemType: "mc",
    prompt:
      "Given the same well-designed study, people who already favor a policy call it convincing, while those who oppose the policy call the identical study flawed, scrutinizing only the parts they dislike. Which conclusion best follows?",
    mcOptions: [
      {
        text: "People seem to judge a study by their own views.",
        credit: 0.3,
      },
      {
        text: "Opinions are private, so we cannot study how people weigh evidence.",
        credit: 0,
      },
      {
        text: "Prior beliefs probably bias the judgment; we could test more topics.",
        credit: 0.6,
      },
      {
        text: "People likely apply harsher scrutiny to evidence that threatens their existing beliefs while accepting agreeable evidence easily, so identical methods get opposite reviews; test whether the gap shrinks when people are paid for accuracy, whether it disappears on neutral topics they have no stake in, and whether asking 'what would change your mind' reduces the one-sided scrutiny.",
        credit: 1.0,
      },
    ],
    correctAnswer:
      "People likely apply harsher scrutiny to evidence that threatens their existing beliefs while accepting agreeable evidence easily, so identical methods get opposite reviews; test whether the gap shrinks when people are paid for accuracy, whether it disappears on neutral topics they have no stake in, and whether asking 'what would change your mind' reduces the one-sided scrutiny.",
    explanation:
      "The richest conclusion names motivated, asymmetric scrutiny as the mechanism with three tests; 'opinions are private, we can't study them' is the dodge the reliable belief-driven gap defeats.",
  },
];

const hybrid: HomeworkItem[] = [
  {
    itemType: "hybrid",
    prompt:
      "Countries where organ donation is the default (you must opt out) have donor rates above 90%, while otherwise-similar countries where you must opt in sit near 15%. People rarely change the box that is already checked. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Donation rates differ for so many reasons that the default setting tells us nothing.",
        credit: 0,
      },
      {
        text: "The pre-set default likely becomes the choice because changing it takes effort and people read the default as a recommendation; test whether making both options equally effortful erases the gap, whether the effect shrinks for highly motivated people, and whether the same default pull appears in retirement-savings enrollment.",
        credit: 1.0,
      },
      {
        text: "Defaults seem to affect donation rates.",
        credit: 0.3,
      },
      {
        text: "The default probably nudges people; we could compare more countries.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'default-as-effort-and-recommendation' lead from the rival 'opt-out countries simply care more about donation,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: within one country, randomly assign new sign-ups to an opt-in or an opt-out form and compare donor rates — same culture, only the default differs, so a large gap isolates the default itself. My lead is refuted if both forms yield the same rate, which would mean underlying attitudes, not the default, drive the numbers.",
      yieldAnchors: [
        "Opt-out countries have donor rates above 90%",
        "Opt-in countries sit near 15%",
        "People rarely switch away from the pre-set option",
      ],
      riskAnchors: [
        "Randomly assigning the default flips individual choices",
        "Equalizing the effort of both options shrinks the gap",
        "The same default pull appears in retirement-savings sign-ups",
      ],
      defeatedBy: [
        "The default has no effect once culture is held constant",
        "People always choose deliberately regardless of the default",
      ],
    },
    correctAnswer:
      "The pre-set default likely becomes the choice because changing it takes effort and people read the default as a recommendation; test whether making both options equally effortful erases the gap, whether the effect shrinks for highly motivated people, and whether the same default pull appears in retirement-savings enrollment.",
    explanation:
      "The huge default gap seeds an effort-plus-recommendation model the top MC commits to; the follow-up earns full credit by naming a within-country randomized test and the result that would refute it. 'The default tells us nothing' is the zero-credit dodge.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A magazine offers web-only for $59 and print-plus-web for $125; few choose print. When a useless print-only option at $125 is added, most people suddenly choose print-plus-web. The new option that no one picks changes everyone's choice. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The extra option probably steers buyers; we could test more price sets.",
        credit: 0.6,
      },
      {
        text: "Adding an option seems to change choices.",
        credit: 0.3,
      },
      {
        text: "People likely judge options by comparison rather than absolute value, so a clearly worse 'decoy' makes a similar option look like a bargain; test whether removing the decoy reverses the choice, whether a decoy placed near the cheap option boosts that one instead, and whether the same shift appears with restaurant wines or apartment listings.",
        credit: 1.0,
      },
      {
        text: "Buying decisions are too personal to generalize about.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'choice by comparison' lead from the rival 'the print-only price just made print feel normal,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: run the same offer with and without the decoy, and also try a decoy placed next to the cheap web-only option instead — comparison theory predicts each decoy pulls choices toward whichever option it makes look good. My lead is refuted if adding or moving the decoy leaves choices unchanged, which would mean the prices alone, not the comparisons, drive the decision.",
      yieldAnchors: [
        "Few choose print-plus-web without the decoy",
        "Most choose print-plus-web once a useless option is added",
        "The added option itself is picked by almost no one",
      ],
      riskAnchors: [
        "Removing the decoy reverses the majority choice",
        "A decoy near the cheap option boosts that option instead",
        "The same shift appears with wines or apartments",
      ],
      defeatedBy: [
        "The decoy changes nothing about people's choices",
        "People always pick the objectively cheapest option",
      ],
    },
    correctAnswer:
      "People likely judge options by comparison rather than absolute value, so a clearly worse 'decoy' makes a similar option look like a bargain; test whether removing the decoy reverses the choice, whether a decoy placed near the cheap option boosts that one instead, and whether the same shift appears with restaurant wines or apartment listings.",
    explanation:
      "The choice flip seeds a comparison-based (decoy effect) model the top MC commits to; the follow-up earns full credit by naming an add/move-the-decoy test and its refutation. 'Too personal to generalize' is the zero-credit dodge.",
  },
  {
    itemType: "hybrid",
    prompt:
      "Students asked when they will finish a thesis give an average estimate of 34 days; they actually take 56. Even their 'worst-case' guesses fall short of reality. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Predicting the future is impossible, so the misses mean nothing.",
        credit: 0,
      },
      {
        text: "People seem to underestimate how long things take.",
        credit: 0.3,
      },
      {
        text: "People probably plan too optimistically; we could survey more students.",
        credit: 0.6,
      },
      {
        text: "People likely build estimates from a best-case story of the specific task and ignore how similar past tasks have actually gone, so they underestimate; test whether prompting people to recall how long past similar projects took raises estimates toward reality, whether the bias shrinks for tasks done many times, and whether outside observers estimate more accurately.",
        credit: 1.0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'ignoring the track record of similar tasks' lead from the rival 'people are simply lazy and stall,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: have one group estimate normally and another first list how long their last few comparable projects took, then compare both to actual completion — my lead predicts the track-record group lands much closer to reality. It is refuted if recalling past projects fails to improve estimates, which would point to motivation or stalling rather than a flawed prediction method.",
      yieldAnchors: [
        "The average estimate is 34 days",
        "Actual completion averages 56 days",
        "Even worst-case guesses underestimate",
      ],
      riskAnchors: [
        "Recalling past similar projects raises estimates toward reality",
        "The bias shrinks for well-practiced tasks",
        "Outside observers estimate more accurately",
      ],
      defeatedBy: [
        "People predict their finish times accurately",
        "Past projects say nothing about future ones",
      ],
    },
    correctAnswer:
      "People likely build estimates from a best-case story of the specific task and ignore how similar past tasks have actually gone, so they underestimate; test whether prompting people to recall how long past similar projects took raises estimates toward reality, whether the bias shrinks for tasks done many times, and whether outside observers estimate more accurately.",
    explanation:
      "The systematic underestimate seeds a planning-fallacy model the top MC commits to; the follow-up earns full credit by naming a track-record-recall test and its refutation. 'Prediction is impossible, the misses mean nothing' is the zero-credit dodge.",
  },
  {
    itemType: "hybrid",
    prompt:
      "Patients undergo two procedures. One is shorter but ends at peak pain; the other is longer with the same peak but a gentle, less painful final few minutes. Patients remember the longer procedure as less unpleasant and are more willing to repeat it. Which conclusion best follows?",
    mcOptions: [
      {
        text: "How a procedure ends seems to matter to patients.",
        credit: 0.3,
      },
      {
        text: "Memory of an experience likely weighs its most intense moment and its ending rather than summing total pain or duration, so a gentler finish improves the remembered experience; test whether adding a mild tail to any painful episode improves its rating, whether total duration barely affects the memory, and whether the same peak-end pattern appears for pleasant experiences like vacations.",
        credit: 1.0,
      },
      {
        text: "Pain is subjective, so remembered pain cannot be studied.",
        credit: 0,
      },
      {
        text: "The ending probably shapes the memory; we could test more procedures.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'memory weights peak and end' lead from the rival 'patients just prefer less total pain,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: deliberately add a few extra minutes of milder discomfort to the end of an otherwise identical episode and ask which version patients would repeat — peak-end predicts they prefer the longer version with the gentler finish, even though it contains more total pain. My lead is refuted if patients reliably choose the shorter, higher-total-pain version, which would mean total pain, not the ending, drives memory.",
      yieldAnchors: [
        "Both procedures share the same peak pain",
        "The longer one ends more gently",
        "Patients remember the longer one as less unpleasant",
      ],
      riskAnchors: [
        "Adding a mild tail improves any episode's rating",
        "Total duration barely changes the memory",
        "The peak-end pattern also appears for pleasant events",
      ],
      defeatedBy: [
        "Remembered pain equals total pain endured",
        "Longer painful experiences are always remembered as worse",
      ],
    },
    correctAnswer:
      "Memory of an experience likely weighs its most intense moment and its ending rather than summing total pain or duration, so a gentler finish improves the remembered experience; test whether adding a mild tail to any painful episode improves its rating, whether total duration barely affects the memory, and whether the same peak-end pattern appears for pleasant experiences like vacations.",
    explanation:
      "The paradoxical preference seeds a peak-end (memory-versus-experience) model the top MC commits to; the follow-up earns full credit by naming an add-a-mild-tail test and its refutation. 'Remembered pain can't be studied' is the zero-credit dodge.",
  },
  {
    itemType: "hybrid",
    prompt:
      "Before estimating what percent of UN countries are African, people spin a wheel rigged to stop on 10 or 65. Those who saw 65 give much higher estimates than those who saw 10, even though the wheel is obviously random. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Even a number people know is random likely anchors their estimate, because the mind starts from the given value and adjusts too little; test whether the gap persists when people are convinced the number is meaningless, whether estimates land between the two anchors when no number is shown, and whether the same pull appears for prices and sentencing decisions.",
        credit: 1.0,
      },
      {
        text: "The wheel number probably nudges estimates; we could spin more values.",
        credit: 0.6,
      },
      {
        text: "Guessing percentages is too random to reveal anything about thinking.",
        credit: 0,
      },
      {
        text: "People seem influenced by whatever the wheel lands on.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'irrelevant numbers still anchor' lead from the rival 'people treat the wheel as a hint,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: tell people clearly and convincingly that the wheel is random and unrelated, then compare the high-number and low-number groups — anchoring predicts a gap remains even when no one believes the number is informative. My lead is refuted if the gap disappears once people are assured the number is meaningless, which would mean they had been treating it as a hint.",
      yieldAnchors: [
        "A rigged wheel shows either 10 or 65",
        "The 65 group gives much higher estimates",
        "The wheel is plainly random",
      ],
      riskAnchors: [
        "The gap persists when people are told the number is meaningless",
        "No-number estimates fall between the two anchors",
        "The same pull appears for prices and sentences",
      ],
      defeatedBy: [
        "Random numbers never affect estimates",
        "People only use numbers they believe are informative",
      ],
    },
    correctAnswer:
      "Even a number people know is random likely anchors their estimate, because the mind starts from the given value and adjusts too little; test whether the gap persists when people are convinced the number is meaningless, whether estimates land between the two anchors when no number is shown, and whether the same pull appears for prices and sentencing decisions.",
    explanation:
      "The random-number effect seeds an anchoring model the top MC commits to; the follow-up earns full credit by naming a 'tell them it's random' test and its refutation. 'Too random to reveal anything' is the zero-credit dodge.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A flight instructor notices that pilots praised after an unusually good landing tend to do worse next time, while those scolded after a bad landing tend to improve. He concludes that praise hurts and criticism helps. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Pilot performance is too variable to learn anything from.",
        credit: 0,
      },
      {
        text: "Praise and criticism seem to have opposite effects.",
        credit: 0.3,
      },
      {
        text: "The instructor probably misreads the pattern; we could track more landings.",
        credit: 0.6,
      },
      {
        text: "Extreme performances likely tend to be followed by more average ones simply by chance (regression to the mean), so the mind wrongly credits the praise or scolding that happened in between; test whether performance bounces back toward average even when no feedback is given, whether the 'effect' appears for random scores with no coaching at all, and whether tracking many landings shows the pattern with and without feedback.",
        credit: 1.0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'regression to the mean' lead from the rival 'criticism really does improve landings,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: give no feedback at all after extreme landings and see whether performance still drifts back toward average — regression predicts the bounce-back happens with or without any praise or scolding. My lead is refuted if landings improve only when criticism is given and stay poor when feedback is withheld, which would show real coaching effects rather than chance.",
      yieldAnchors: [
        "Pilots praised after great landings do worse next time",
        "Pilots scolded after bad landings improve next time",
        "The instructor concludes criticism helps and praise hurts",
      ],
      riskAnchors: [
        "Performance regresses toward average even with no feedback",
        "The pattern appears in random scores with no coaching",
        "Tracking many landings shows it with and without feedback",
      ],
      defeatedBy: [
        "Criticism reliably improves performance beyond chance",
        "Extreme results tend to repeat rather than regress",
      ],
    },
    correctAnswer:
      "Extreme performances likely tend to be followed by more average ones simply by chance (regression to the mean), so the mind wrongly credits the praise or scolding that happened in between; test whether performance bounces back toward average even when no feedback is given, whether the 'effect' appears for random scores with no coaching at all, and whether tracking many landings shows the pattern with and without feedback.",
    explanation:
      "The false praise/criticism rule seeds a regression-to-the-mean model the top MC commits to; the follow-up earns full credit by naming a no-feedback control and its refutation. 'Too variable to learn anything' is the zero-credit dodge.",
  },
  {
    itemType: "hybrid",
    prompt:
      "People rate made-up statements as more likely true simply because they have seen them a few times before, even when they were told earlier that the statements were unverified. Repetition alone raises believed truth. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Repetition probably boosts believability; we could test more statements.",
        credit: 0.6,
      },
      {
        text: "Belief is too personal to study with made-up statements.",
        credit: 0,
      },
      {
        text: "The mind likely treats easy, familiar processing as a cue for truth, so repeated statements feel truer regardless of evidence; test whether harder-to-read fonts that reduce fluency weaken the effect, whether brand-new statements are rated lower than repeated ones, and whether the boost appears even for claims people can check as false.",
        credit: 1.0,
      },
      {
        text: "Familiar statements seem more believable.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'familiarity feels like truth' lead from the rival 'people just remember being told these are true,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: repeat statements that were explicitly labeled false earlier and check whether they still gain believed truth from mere repetition — a fluency account predicts a boost even for known-false items. My lead is refuted if repetition raises belief only for statements people recall as endorsed, which would point to memory of endorsement rather than fluency.",
      yieldAnchors: [
        "Repeated statements are rated more true",
        "The boost occurs even for unverified claims",
        "Mere exposure drives the rating",
      ],
      riskAnchors: [
        "Harder-to-read fonts weaken the effect",
        "New statements are rated lower than repeated ones",
        "The boost appears even for checkably false claims",
      ],
      defeatedBy: [
        "Repetition never changes believed truth",
        "Only evidence, not familiarity, affects belief",
      ],
    },
    correctAnswer:
      "The mind likely treats easy, familiar processing as a cue for truth, so repeated statements feel truer regardless of evidence; test whether harder-to-read fonts that reduce fluency weaken the effect, whether brand-new statements are rated lower than repeated ones, and whether the boost appears even for claims people can check as false.",
    explanation:
      "The repetition boost seeds an illusory-truth (fluency-as-truth) model the top MC commits to; the follow-up earns full credit by naming a known-false repetition test and its refutation. 'Too personal to study' is the zero-credit dodge.",
  },
  {
    itemType: "hybrid",
    prompt:
      "An interviewer who forms a quick first impression then asks the candidate questions that mostly let a 'good' candidate shine and a 'bad' one stumble, gathering evidence that fits the snap judgment. Which conclusion best follows?",
    mcOptions: [
      {
        text: "First impressions seem to shape the interview.",
        credit: 0.3,
      },
      {
        text: "Hiring is too subjective to study scientifically.",
        credit: 0,
      },
      {
        text: "The first impression probably biases the questions; we could watch more interviews.",
        credit: 0.6,
      },
      {
        text: "The interviewer likely seeks evidence that confirms the initial impression rather than tests it, so the questions are skewed to verify the snap judgment; test whether forcing a fixed, identical question set removes the bias, whether interviewers ask more confirming questions after a strong first impression, and whether blind structured interviews predict job performance better than free ones.",
        credit: 1.0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'confirming-question search' lead from the rival 'good candidates simply answer better,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: have interviewers rate candidates after a free interview versus a fixed identical question set, and check whether the first-impression bias shrinks under the fixed set — my lead predicts standardizing the questions reduces the skew. It is refuted if the same candidates are rated identically whether questions are free or fixed, which would mean answer quality, not question selection, drove the judgment.",
      yieldAnchors: [
        "The interviewer forms a quick first impression",
        "Questions are tailored to fit that impression",
        "The evidence gathered confirms the snap judgment",
      ],
      riskAnchors: [
        "A fixed identical question set removes the bias",
        "More confirming questions follow a strong first impression",
        "Structured blind interviews predict performance better",
      ],
      defeatedBy: [
        "Question choice has no effect on the outcome",
        "First impressions never bias later questioning",
      ],
    },
    correctAnswer:
      "The interviewer likely seeks evidence that confirms the initial impression rather than tests it, so the questions are skewed to verify the snap judgment; test whether forcing a fixed, identical question set removes the bias, whether interviewers ask more confirming questions after a strong first impression, and whether blind structured interviews predict job performance better than free ones.",
    explanation:
      "The tailored questioning seeds a confirmation-bias model the top MC commits to; the follow-up earns full credit by naming a free-versus-fixed question test and its refutation. 'Hiring is too subjective to study' is the zero-credit dodge.",
  },
  {
    itemType: "hybrid",
    prompt:
      "People solving logic problems make more snap, intuitive errors when they are rushed or distracted, and fewer when they are calm and given time to check their work. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Thinking is too variable to draw conclusions from error rates.",
        credit: 0,
      },
      {
        text: "A fast intuitive mode likely produces quick answers that a slower, effortful mode can correct only when it has the resources, so load increases reliance on intuition; test whether adding a memory load while solving raises intuitive errors, whether the wrong answers are the ones that 'feel right' fast, and whether training people to pause before answering reduces them.",
        credit: 1.0,
      },
      {
        text: "Being rushed probably causes more errors; we could test more time limits.",
        credit: 0.6,
      },
      {
        text: "People seem to make more mistakes when hurried.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'load blocks the corrective second mode' lead from the rival 'rushed people simply care less,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: keep motivation high but add a concurrent memory load (holding a string of digits) while people solve, and see whether intuitive errors still rise — my lead predicts they do, because the corrective effortful process is occupied. It is refuted if errors climb only when people are told the task does not matter and not when they are merely loaded, which would point to motivation rather than limited resources.",
      yieldAnchors: [
        "Rushed or distracted people make more snap errors",
        "Calm, unhurried people make fewer",
        "Extra time lets people catch their mistakes",
      ],
      riskAnchors: [
        "A concurrent memory load raises intuitive errors",
        "The errors are the fast 'feels right' answers",
        "Training a pause before answering reduces them",
      ],
      defeatedBy: [
        "Time pressure has no effect on error rates",
        "Intuitive and reflective answers are equally fast",
      ],
    },
    correctAnswer:
      "A fast intuitive mode likely produces quick answers that a slower, effortful mode can correct only when it has the resources, so load increases reliance on intuition; test whether adding a memory load while solving raises intuitive errors, whether the wrong answers are the ones that 'feel right' fast, and whether training people to pause before answering reduces them.",
    explanation:
      "The load-dependent errors seed a two-system (fast/slow) model the top MC commits to; the follow-up earns full credit by naming a memory-load test that holds motivation fixed plus its refutation. 'Too variable to conclude anything' is the zero-credit dodge.",
  },
];

const written: HomeworkItem[] = [
  {
    itemType: "written",
    prompt:
      "People are shown four cards reading A, K, 4, and 7 and told 'if a card has a vowel on one side, it has an even number on the other.' Asked which cards to turn over to check the rule, most pick A and 4 — but turning the 4 can never break the rule, while the 7 they ignore can. In one paragraph, propose the strongest conclusion about how the mind tests rules and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that people test a rule by looking for cases that could confirm it rather than cases that could break it, so they flip the matching items (A and 4) and neglect the one card (the 7) that could expose a violation. This is a strong claim because it predicts checkable consequences: performance should jump when the same logical task is dressed in a familiar social rule like 'if you drink alcohol you must be over 18,' where checking the rule-breaker is natural; explicitly instructing people to 'find a card that could break the rule' should raise correct choices; and people should reliably pick the confirming card across many different abstract rules. I would test it by comparing the abstract version against a matched social-contract version, by adding disconfirmation instructions to half the participants, and by tracking which cards are chosen across many different rule contents.",
      yieldAnchors: [
        "Most people pick A and 4",
        "Turning the 4 cannot break the rule",
        "People ignore the 7, which could break it",
      ],
      riskAnchors: [
        "A familiar social-rule version sharply raises correct choices",
        "Telling people to seek a rule-breaking card improves accuracy",
        "The confirming card is chosen across many abstract rules",
      ],
      defeatedBy: [
        "People naturally seek disconfirming evidence",
        "The card content never changes how people choose",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that people test a rule by looking for cases that could confirm it rather than cases that could break it, so they flip the matching items (A and 4) and neglect the one card (the 7) that could expose a violation. This is a strong claim because it predicts checkable consequences: performance should jump when the same logical task is dressed in a familiar social rule like 'if you drink alcohol you must be over 18,' where checking the rule-breaker is natural; explicitly instructing people to 'find a card that could break the rule' should raise correct choices; and people should reliably pick the confirming card across many different abstract rules. I would test it by comparing the abstract version against a matched social-contract version, by adding disconfirmation instructions to half the participants, and by tracking which cards are chosen across many different rule contents.",
    explanation:
      "Under the inverted standard, 'people naturally seek disconfirming evidence' is the overreach the card choices defeat; top credit goes to the confirmation-seeking conclusion that commits to a mechanism and names a social-rule test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "Experienced real-estate agents tour the same house and read the same packet, except the printed asking price is set high for half of them and low for the other half. The agents' own appraisals come out far higher in the high-price group — yet they all deny the listing price influenced their expert judgment. In one paragraph, propose the strongest conclusion and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that even experts anchor their estimates on a first number and adjust too little, so the arbitrary asking price pulls their independent appraisals while they stay unaware of the pull. This is a strong claim because it predicts checkable consequences: the appraisal gap should grow as the planted asking prices are spread further apart; warning agents about anchoring beforehand should shrink but not erase the gap; and novices given the same packets should show an even larger anchor effect than experts. I would test it by varying the planted prices across several levels, by adding an anchoring warning to half the agents, and by comparing the effect in experts versus beginners.",
      yieldAnchors: [
        "Agents see identical houses and packets",
        "Only the printed asking price differs",
        "High-price agents appraise far higher",
      ],
      riskAnchors: [
        "Wider planted-price gaps widen the appraisal gap",
        "A prior warning shrinks but does not erase the effect",
        "Novices show an even larger anchor effect",
      ],
      defeatedBy: [
        "Expert judgment is immune to arbitrary numbers",
        "The agents' denial proves the price had no effect",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that even experts anchor their estimates on a first number and adjust too little, so the arbitrary asking price pulls their independent appraisals while they stay unaware of the pull. This is a strong claim because it predicts checkable consequences: the appraisal gap should grow as the planted asking prices are spread further apart; warning agents about anchoring beforehand should shrink but not erase the gap; and novices given the same packets should show an even larger anchor effect than experts. I would test it by varying the planted prices across several levels, by adding an anchoring warning to half the agents, and by comparing the effect in experts versus beginners.",
    explanation:
      "The inverted standard gives near-zero to 'the agents' denial proves the price had no effect'; credit goes to the anchoring conclusion that names a mechanism and proposes a spread-the-anchors test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A witness says a cab in a hit-and-run was blue. In that city 85% of cabs are green and 15% are blue, and the witness is right about color 80% of the time. Most people conclude the cab was almost certainly blue, even though the math makes green more likely. In one paragraph, propose the strongest conclusion about how people use evidence and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that people seize on the vivid individual evidence — the witness's report — and neglect the background base rate of how common each cab color is, so they overestimate the chance the cab was blue. This is a strong claim because it predicts checkable consequences: rephrasing the problem as natural frequencies ('of 100 cabs...') should fix most answers; making the base rate feel causally relevant rather than a bare statistic should improve accuracy; and the same neglect should show up in medical, legal, and hiring judgments built the same way. I would test it by comparing a probability-worded version against a frequency-worded one, by manipulating how causally relevant the base rate seems, and by checking whether the error transfers to other base-rate problems.",
      yieldAnchors: [
        "Only 15% of cabs are blue",
        "The witness is right about color 80% of the time",
        "Most people say the cab was almost certainly blue",
      ],
      riskAnchors: [
        "A natural-frequency version fixes most answers",
        "Making the base rate causal improves accuracy",
        "The same neglect appears in medical and legal versions",
      ],
      defeatedBy: [
        "People naturally combine base rates with the evidence",
        "Witness reliability alone determines the probability",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that people seize on the vivid individual evidence — the witness's report — and neglect the background base rate of how common each cab color is, so they overestimate the chance the cab was blue. This is a strong claim because it predicts checkable consequences: rephrasing the problem as natural frequencies ('of 100 cabs...') should fix most answers; making the base rate feel causally relevant rather than a bare statistic should improve accuracy; and the same neglect should show up in medical, legal, and hiring judgments built the same way. I would test it by comparing a probability-worded version against a frequency-worded one, by manipulating how causally relevant the base rate seems, and by checking whether the error transfers to other base-rate problems.",
    explanation:
      "The cautious 'people naturally combine base rates with the evidence' is the overreach the cab answers defeat; top credit goes to the base-rate-neglect conclusion that names a natural-frequency test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "Told about a disease expected to kill 600 people, most people choose a 'sure save 200' program over a gamble when outcomes are framed as lives saved — but the same people choose the gamble when the identical outcomes are framed as '400 will die.' In one paragraph, propose the strongest conclusion about how the mind makes risky choices and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that choices depend on whether outcomes are framed as gains or losses, because people are risk-averse for gains but risk-seeking to avoid losses, so the same facts flip the decision when relabeled. This is a strong claim because it predicts checkable consequences: simply switching the wording between 'saved' and 'die' should reverse the majority choice with the numbers held constant; asking people to translate both frames into the same underlying outcome before choosing should reduce the reversal; and the same gain/loss asymmetry should appear in monetary gambles. I would test it by presenting both frames to matched groups, by adding a step that forces people to compute the identical outcome, and by replicating the pattern with money instead of lives.",
      yieldAnchors: [
        "The two frames describe identical outcomes",
        "People choose the sure option under the 'saved' frame",
        "The same people choose the gamble under the 'die' frame",
      ],
      riskAnchors: [
        "Switching the wording reverses the majority choice",
        "Forcing people to compute the identical outcome reduces the reversal",
        "The asymmetry reappears with monetary gambles",
      ],
      defeatedBy: [
        "Choices depend only on the outcomes, not the wording",
        "People are equally risk-averse for gains and losses",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that choices depend on whether outcomes are framed as gains or losses, because people are risk-averse for gains but risk-seeking to avoid losses, so the same facts flip the decision when relabeled. This is a strong claim because it predicts checkable consequences: simply switching the wording between 'saved' and 'die' should reverse the majority choice with the numbers held constant; asking people to translate both frames into the same underlying outcome before choosing should reduce the reversal; and the same gain/loss asymmetry should appear in monetary gambles. I would test it by presenting both frames to matched groups, by adding a step that forces people to compute the identical outcome, and by replicating the pattern with money instead of lives.",
    explanation:
      "The inverted standard gives near-zero to 'choices depend only on the outcomes, not the wording,' which the reversal directly defeats; credit goes to the framing/loss-aversion conclusion that names a flip-the-wording test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "Asked which kills more Americans — tornadoes or asthma — most people say tornadoes, though asthma kills far more. People also overrate deaths from dramatic, well-publicized causes and underrate quiet, common ones. In one paragraph, propose the strongest conclusion about how people judge frequency and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that people estimate how common something is by how easily examples come to mind, so dramatic, heavily reported causes feel frequent while quiet ones are underestimated, regardless of the true numbers. This is a strong claim because it predicts checkable consequences: causes that get more news coverage should be overestimated relative to their real rates; making rare causes easy to recall by showing recent examples should temporarily inflate their estimates; and people who can list more instances of a cause should give higher frequency estimates. I would test it by correlating media coverage with estimation errors, by experimentally priming vivid examples before asking for estimates, and by measuring how many examples each person can recall against their frequency judgments.",
      yieldAnchors: [
        "People say tornadoes kill more than asthma",
        "Asthma actually kills far more",
        "Dramatic causes are overrated and quiet ones underrated",
      ],
      riskAnchors: [
        "More-covered causes are overestimated relative to real rates",
        "Priming vivid examples inflates a cause's estimate",
        "People who recall more instances give higher estimates",
      ],
      defeatedBy: [
        "People judge frequency from accurate statistics",
        "Media coverage has no effect on frequency estimates",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that people estimate how common something is by how easily examples come to mind, so dramatic, heavily reported causes feel frequent while quiet ones are underestimated, regardless of the true numbers. This is a strong claim because it predicts checkable consequences: causes that get more news coverage should be overestimated relative to their real rates; making rare causes easy to recall by showing recent examples should temporarily inflate their estimates; and people who can list more instances of a cause should give higher frequency estimates. I would test it by correlating media coverage with estimation errors, by experimentally priming vivid examples before asking for estimates, and by measuring how many examples each person can recall against their frequency judgments.",
    explanation:
      "'People judge frequency from accurate statistics' is the overreach the tornado/asthma error defeats; top credit goes to the availability-heuristic conclusion that names a prime-vivid-examples test that could refute it.",
  },
];

export const section: SectionContent = {
  slug: "reasoning-and-bias",
  title: "Reasoning and Bias: Why Smart Minds Make Predictable Mistakes",
  weekNumber: 1,
  blurb:
    "Human reasoning runs on fast mental shortcuts that usually work but fail in regular, predictable ways — anchoring, availability, confirmation bias, and more — revealing how the mind really judges, decides, and weighs evidence.",
  lectureTitle:
    "1.6 Reasoning and Bias: why smart minds make predictable mistakes",
  body: `# Reasoning and Bias

Smart, careful people make the same mistakes over and over — and that is the surprising part. If our errors were random, there would be nothing to study; we would just be noisy. Instead, when you give thousands of people the same puzzle, they tend to go wrong in the *same direction*. That regularity is a gift to cognitive science. A systematic error is a fingerprint: it tells you something specific about the machinery doing the thinking. This section is about reading those fingerprints.

## Two ways of thinking

A useful starting picture is that the mind has two modes of thought. One is fast, automatic, and effortless — it reads a word, recognizes a face, or blurts "10 cents" to the bat-and-ball puzzle without any sense of work. The other is slow, deliberate, and effortful — it checks the math, weighs options, and overrides the quick answer when something seems off. Most of the time the fast mode is right, which is why we trust it. Errors creep in when the fast mode hands up an answer that *feels* right and the slow mode, busy or rushed, fails to catch it. Distraction and time pressure make more of these slips, which is exactly what you would expect if a limited, effortful checker is being crowded out.

## Heuristics: shortcuts that usually work

The fast mode leans on **heuristics** — rules of thumb that trade perfect accuracy for speed. Asked how common something is, you don't run a survey; you check how easily examples come to mind. That **availability** shortcut works well, because common things usually are easy to recall — but it misfires when something is merely *memorable*. After dramatic news coverage, people overrate shark attacks and plane crashes and underrate quiet killers like asthma. Another shortcut, **representativeness**, judges probability by how well a case matches a stereotype, which is why a detailed story about "Linda" can feel more likely than a plainer one, even when logic says it can't be.

## Anchors and frames

The mind is also pulled around by how a problem is presented. Drop a number into someone's view — even a clearly random one from a spun wheel — and their estimates drift toward it. This **anchoring** happens because we start from whatever value is handy and adjust too little. Closely related is **framing**: the very same facts produce different choices depending on whether they are described as a gain or a loss. People will take a sure "200 saved" but gamble to avoid "400 will die," because losses loom larger than equal-sized gains. These are not signs of stupidity; they are signs that the mind evaluates options *relative to a reference point* rather than in absolute terms.

## Seeing what we expect

Perhaps the most stubborn bias is **confirmation bias**: we test our ideas by looking for cases that fit them rather than cases that could break them. Given the sequence 2-4-6 and asked to find the hidden rule, people try only triples that match their guess and rarely the one that could prove them wrong. The same one-sided search shows up when an interviewer asks questions that flatter a first impression, or when people accept agreeable evidence and pick apart anything that threatens a cherished belief. Because the search itself is skewed, the world keeps seeming to confirm what we already think.

## Why systematic beats random

Here is the key scientific move. Because these errors are *predictable*, you can name the mechanism behind one and then test it — and a real explanation always points to a way it could be proven wrong. If anchoring is real, telling people the number is random and meaningless should *not* fully erase its pull. If availability drives risk estimates, priming vivid examples should inflate them and then let them fade. The strongest conclusion is never "people are just irrational" — that explains nothing and predicts nothing. It is a specific claim about *how* the mind shortcuts, paired with an experiment that could disconfirm it.

## In the real world

Suppose a friend insists a new restaurant must be great because three friends raved about it, and refuses to look up the dozens of mediocre reviews online. The dodge is "people are irrational about food" — true-sounding, useless. A cognitive-science move commits to mechanisms. Availability: the three vivid rave reviews come to mind far more easily than faceless strangers' ratings. Confirmation bias: your friend, already excited, seeks praise and skips complaints. Each idea opens a cheap test. Availability predicts your friend would weigh the online reviews more if they came from named, memorable people; confirmation bias predicts that asking "what would change your mind?" makes them seek the bad reviews. Notice what you gained — not a shrug at human folly, but a couple of testable stories about the shortcuts running underneath, each able to be proven wrong.`,
  homework: {
    mcq,
    hybrid,
    written,
  },
};
