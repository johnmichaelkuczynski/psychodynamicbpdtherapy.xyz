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
      "Several times each session a patient asks her therapist, 'You're sure you don't think I'm a terrible person, right?' Each reassurance brings a few seconds of relief, then a fresh version of the same question. She never asks about anything else this way. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She seems to need a lot of reassurance.",
        credit: 0.3,
      },
      {
        text: "The reassurance-seeking is likely a compulsion that has migrated into the relationship — each answer briefly relieves the doubt and thereby strengthens the urge to ask again, so the therapist's reassurance feeds the very loop it seems to soothe; test whether relief is always short-lived and followed by a new version of the question, whether withholding reassurance spikes anxiety that then subsides on its own, and whether the asking clusters around her feared 'bad person' theme rather than ordinary topics.",
        credit: 1.0,
      },
      {
        text: "She's probably using reassurance like a ritual; we could look at her questions more.",
        credit: 0.6,
      },
      {
        text: "Some people are just anxious and need reassurance, so there's nothing more to read into it.",
        credit: 0,
      },
    ],
    correctAnswer:
      "The reassurance-seeking is likely a compulsion that has migrated into the relationship — each answer briefly relieves the doubt and thereby strengthens the urge to ask again, so the therapist's reassurance feeds the very loop it seems to soothe; test whether relief is always short-lived and followed by a new version of the question, whether withholding reassurance spikes anxiety that then subsides on its own, and whether the asking clusters around her feared 'bad person' theme rather than ordinary topics.",
    explanation:
      "Top credit reads reassurance-seeking as a compulsion the therapist's answers reinforce and names a withhold-and-watch test; 'just anxious, nothing to read into' is the dodge the relief-then-return pattern defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "Throughout each session a patient repeatedly scans the therapist's face, asking 'Did that come out wrong? Are you annoyed?' whenever the therapist so much as shifts in her chair. He is relaxed about every other relationship in his life. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Reading faces is so subjective that nothing can be made of his scanning.",
        credit: 0,
      },
      {
        text: "He's probably checking for disapproval; we could ask what he's watching for.",
        credit: 0.6,
      },
      {
        text: "The face-scanning is likely a checking compulsion enacted in the room — he treats the therapist's neutral expression as ambiguous evidence of harm done and checks it to relieve doubt, which only renews the doubt; test whether the scanning spikes right after he says something he fears was offensive, whether reassurance gives only brief relief before the next check, and whether the same checking is absent in the relationships he calls easy.",
        credit: 1.0,
      },
      {
        text: "He seems to watch the therapist's face a lot.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The face-scanning is likely a checking compulsion enacted in the room — he treats the therapist's neutral expression as ambiguous evidence of harm done and checks it to relieve doubt, which only renews the doubt; test whether the scanning spikes right after he says something he fears was offensive, whether reassurance gives only brief relief before the next check, and whether the same checking is absent in the relationships he calls easy.",
    explanation:
      "Full credit reads the face-scanning as a checking compulsion run on the relationship and names a topic-specificity test; 'too subjective to make anything of' is the refusal the after-feared-statement timing defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "After months of hinting, a patient finally confesses an intrusive image of harming his infant, bracing for the therapist to be horrified and call someone. The therapist stays calm and curious, treats it as a classic intrusive thought, and the patient — stunned — visibly relaxes and begins to talk openly about the obsession for the first time. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The therapist's calm survival of the confession likely gave the patient a corrective experience that contradicts his dread that disclosure brings condemnation, which is why he could finally open up; test whether his openness rose specifically after the non-horrified response, whether any hint of alarm from the therapist would shut him back down, and whether he had withheld precisely the themes he expected to be condemned for.",
        credit: 1.0,
      },
      {
        text: "He admitted the thought and then felt better.",
        credit: 0.3,
      },
      {
        text: "What goes on inside someone is too private to say why he opened up.",
        credit: 0,
      },
      {
        text: "The calm response probably helped; we could see if he keeps sharing.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The therapist's calm survival of the confession likely gave the patient a corrective experience that contradicts his dread that disclosure brings condemnation, which is why he could finally open up; test whether his openness rose specifically after the non-horrified response, whether any hint of alarm from the therapist would shut him back down, and whether he had withheld precisely the themes he expected to be condemned for.",
    explanation:
      "Top credit reads a corrective experience from the survived confession and names a timing test that could refute it; 'too private to say' refuses the inference the stunned-then-opened sequence supports.",
  },
  {
    itemType: "mc",
    prompt:
      "When a patient demands, 'Just tell me one more time the door was locked and we're safe,' the therapist gently declines and instead invites her to sit with the uncertainty. Her anxiety climbs sharply for several minutes and then, without any reassurance, slowly subsides on its own. This repeats over several sessions. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Not reassuring her probably helps; we could keep trying it.",
        credit: 0.6,
      },
      {
        text: "The spike-then-settle pattern likely shows the reassurance had been functioning as a compulsion — withholding it (response prevention) lets the anxiety crest and fall by itself, teaching her the feared catastrophe doesn't arrive, so the relief no longer has to come from the therapist; test whether the settling happens reliably without reassurance, whether each repetition lowers the starting spike, and whether giving in and reassuring instead leaves the urge stronger next time.",
        credit: 1.0,
      },
      {
        text: "Anxiety rises and falls for all sorts of reasons, so the withholding tells us nothing.",
        credit: 0,
      },
      {
        text: "She gets anxious when not reassured and then calms down.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The spike-then-settle pattern likely shows the reassurance had been functioning as a compulsion — withholding it (response prevention) lets the anxiety crest and fall by itself, teaching her the feared catastrophe doesn't arrive, so the relief no longer has to come from the therapist; test whether the settling happens reliably without reassurance, whether each repetition lowers the starting spike, and whether giving in and reassuring instead leaves the urge stronger next time.",
    explanation:
      "Full credit reads withheld reassurance as extinguishing a compulsion and names a lower-spike-each-time test; 'anxiety rises and falls for all sorts of reasons' is the dodge the reliable spike-then-settle defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A patient spends much of each session asking whether this is definitely the right therapy, the right therapist, and the right diagnosis — never satisfied with any answer, researching alternatives nightly, yet never actually leaving. The same all-or-nothing doubting drives his contamination obsessions. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He seems unsure whether the therapy is right for him.",
        credit: 0.3,
      },
      {
        text: "Choosing a therapy is genuinely hard, so his doubts are just reasonable shopping around.",
        credit: 0,
      },
      {
        text: "His doubt about the treatment is likely the same OCD doubting playing out on a new object — an intolerance of uncertainty that demands a guarantee no answer can give, so reassurance about the therapy only feeds the next doubt; test whether his questions about therapy follow the same never-satisfied loop as his contamination doubts, whether settling one doubt simply spawns another, and whether he doubts most the things he is most invested in rather than genuinely shopping to leave.",
        credit: 1.0,
      },
      {
        text: "His doubts about therapy might be part of his OCD; we could explore that.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "His doubt about the treatment is likely the same OCD doubting playing out on a new object — an intolerance of uncertainty that demands a guarantee no answer can give, so reassurance about the therapy only feeds the next doubt; test whether his questions about therapy follow the same never-satisfied loop as his contamination doubts, whether settling one doubt simply spawns another, and whether he doubts most the things he is most invested in rather than genuinely shopping to leave.",
    explanation:
      "Top credit reads treatment-doubt as the same intolerance of uncertainty and names a does-one-answer-spawn-another test; 'reasonable shopping around' is the dodge the never-leaving, same-loop pattern defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A patient cannot begin talking until the chair is angled exactly so, the clock is out of her sightline, and she has restarted her opening sentence until it feels 'right,' sometimes three or four times. Sessions where the therapist gently prevents the re-do leave her anxious at first but able to continue. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Everyone has little preferences about how they like a room, so there's nothing here to interpret.",
        credit: 0,
      },
      {
        text: "The arranging and sentence-restarting are likely 'just right' compulsions enacted in session to discharge an intolerable not-right feeling, and the alliance is becoming the place to practice tolerating it; test whether the rituals appear specifically when she feels the not-right sensation rather than at random, whether blocking the re-do spikes anxiety that then eases, and whether the urge weakens over sessions as she sits with the discomfort instead of fixing it.",
        credit: 1.0,
      },
      {
        text: "She probably has some 'just right' rituals; we could watch when they show up.",
        credit: 0.6,
      },
      {
        text: "She likes things arranged a certain way before she starts.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The arranging and sentence-restarting are likely 'just right' compulsions enacted in session to discharge an intolerable not-right feeling, and the alliance is becoming the place to practice tolerating it; test whether the rituals appear specifically when she feels the not-right sensation rather than at random, whether blocking the re-do spikes anxiety that then eases, and whether the urge weakens over sessions as she sits with the discomfort instead of fixing it.",
    explanation:
      "Full credit reads the in-session arranging as 'just right' compulsions and names a block-and-watch test; 'everyone has room preferences' is the dodge the blocking-spikes-then-eases pattern defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "Reviewing his notes, a therapist finds that the sessions in which he answered the patient's 'am I sure I didn't say something cruel?' questions are reliably followed by sessions with even more such questions, while the few times he declined to answer were followed by fewer. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Answering the questions might be backfiring; we could try answering less.",
        credit: 0.6,
      },
      {
        text: "He seems to ask more after being reassured.",
        credit: 0.3,
      },
      {
        text: "The pattern likely shows the therapist's reassurance is reinforcing the compulsion rather than relieving it — each answer rewards the asking and so breeds more asking, the signature of a compulsion fed from inside the relationship; test whether answered sessions are consistently followed by more questions and withheld ones by fewer, whether the relief after each answer is brief, and whether a planned stretch of not answering steadily reduces the asking.",
        credit: 1.0,
      },
      {
        text: "Question counts go up and down on their own, so the link to reassurance is meaningless.",
        credit: 0,
      },
    ],
    correctAnswer:
      "The pattern likely shows the therapist's reassurance is reinforcing the compulsion rather than relieving it — each answer rewards the asking and so breeds more asking, the signature of a compulsion fed from inside the relationship; test whether answered sessions are consistently followed by more questions and withheld ones by fewer, whether the relief after each answer is brief, and whether a planned stretch of not answering steadily reduces the asking.",
    explanation:
      "Top credit reads the answered-then-more pattern as reinforcement and names a planned-no-answer test; 'counts go up and down on their own' is the refusal the consistent answered-versus-declined contrast defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A patient apologizes constantly in session — for 'wasting your time,' for 'probably being a burden,' for 'maybe having thought something rude about you' — and asks each time whether the therapist forgives her. Relief from each forgiveness lasts moments before the next apology. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She apologizes and asks for forgiveness a lot.",
        credit: 0.3,
      },
      {
        text: "The apologizing-and-seeking-forgiveness is likely a scrupulosity compulsion enacted in the relationship — confessing imagined moral failings to extract an absolution that briefly quiets guilt and then must be renewed; test whether each forgiveness relieves her only briefly before a new confession, whether the apologies cluster on moral 'did I harm or offend you' themes rather than real lapses, and whether declining to absolve, while staying warm, lets the guilt crest and pass.",
        credit: 1.0,
      },
      {
        text: "Some people are just polite to a fault, so the apologizing means nothing in particular.",
        credit: 0,
      },
      {
        text: "Her apologizing could be a kind of ritual; we could pay attention to it.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The apologizing-and-seeking-forgiveness is likely a scrupulosity compulsion enacted in the relationship — confessing imagined moral failings to extract an absolution that briefly quiets guilt and then must be renewed; test whether each forgiveness relieves her only briefly before a new confession, whether the apologies cluster on moral 'did I harm or offend you' themes rather than real lapses, and whether declining to absolve, while staying warm, lets the guilt crest and pass.",
    explanation:
      "Full credit reads serial apology as a scrupulosity compulsion and names a decline-to-absolve test; 'polite to a fault' is the dodge the moments-long relief and imagined-sin theme defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "A patient saves his most distressing intrusive thoughts for the final minute of each session, blurting a confession just as time runs out so there is never a chance to discuss it. The pattern holds week after week. Which conclusion best follows?",
    mcOptions: [
      {
        text: "People often remember important things at the end; the timing is just chance.",
        credit: 0,
      },
      {
        text: "He might be confessing to avoid really facing it; we could notice the timing.",
        credit: 0.6,
      },
      {
        text: "The doorknob confession is likely itself a compulsion — confessing discharges the guilt while the precise timing guarantees he avoids the exposure of actually sitting with the thought, so it relieves without risking change; test whether the disclosures land reliably at the very end and not when there is time to explore, whether he resists when invited to raise them earlier, and whether the urge to confess eases once the thoughts are worked with rather than just unloaded.",
        credit: 1.0,
      },
      {
        text: "He tends to bring up the big things right at the end.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The doorknob confession is likely itself a compulsion — confessing discharges the guilt while the precise timing guarantees he avoids the exposure of actually sitting with the thought, so it relieves without risking change; test whether the disclosures land reliably at the very end and not when there is time to explore, whether he resists when invited to raise them earlier, and whether the urge to confess eases once the thoughts are worked with rather than just unloaded.",
    explanation:
      "Top credit reads the end-of-session confession as a relief-without-exposure compulsion and names an offer-an-earlier-slot test; 'the timing is just chance' is the dodge the week-after-week last-minute pattern defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A patient who is open about checking and washing goes vague and changes the subject every time the conversation nears his sexual intrusive thoughts, later admitting he was sure the therapist would 'see him as a pervert' and end treatment. He is otherwise candid. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He avoids talking about certain thoughts.",
        credit: 0.3,
      },
      {
        text: "Everyone has private topics they'd rather skip, so there's nothing to make of it.",
        credit: 0,
      },
      {
        text: "He is likely transferring onto the therapist the condemning judge he fears, so the very themes he expects to be punished for — the taboo intrusions — are the ones he hides, while neutral symptoms flow freely; test whether the avoidance is specific to the feared-condemnation themes and not his other symptoms, whether his manner tightens just before he swerves, and whether a calm, non-condemning response to a first disclosure opens the rest.",
        credit: 1.0,
      },
      {
        text: "He's probably afraid of being judged; we could gently revisit those thoughts.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "He is likely transferring onto the therapist the condemning judge he fears, so the very themes he expects to be punished for — the taboo intrusions — are the ones he hides, while neutral symptoms flow freely; test whether the avoidance is specific to the feared-condemnation themes and not his other symptoms, whether his manner tightens just before he swerves, and whether a calm, non-condemning response to a first disclosure opens the rest.",
    explanation:
      "Full credit reads a condemning-judge transference from the theme-specific avoidance and names a topic-specificity test; 'everyone has private topics' is the dodge the open-about-everything-else contrast defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A patient who is doing exposure homework spends each session asking the therapist to confirm she did every exercise 'correctly,' re-describing each one in exhaustive detail until the therapist signs off. Without that sign-off she cannot move on, though her actual logs show she did the work fine. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Her need for sign-off might be a ritual; we could look at it.",
        credit: 0.6,
      },
      {
        text: "It's normal to want to know you did an assignment right, so this is just diligence.",
        credit: 0,
      },
      {
        text: "She likes to confirm she did the homework correctly.",
        credit: 0.3,
      },
      {
        text: "The demand for the therapist's sign-off is likely the OCD doubting attaching itself to the treatment — exposure work re-purposed into a checking ritual where the therapist's certainty replaces her own — so the very homework meant to build uncertainty tolerance becomes a new reassurance source; test whether the re-describing seeks certainty rather than help, whether sign-off relieves her only until the next exercise, and whether withholding it lets her tolerate the not-knowing and proceed anyway.",
        credit: 1.0,
      },
    ],
    correctAnswer:
      "The demand for the therapist's sign-off is likely the OCD doubting attaching itself to the treatment — exposure work re-purposed into a checking ritual where the therapist's certainty replaces her own — so the very homework meant to build uncertainty tolerance becomes a new reassurance source; test whether the re-describing seeks certainty rather than help, whether sign-off relieves her only until the next exercise, and whether withholding it lets her tolerate the not-knowing and proceed anyway.",
    explanation:
      "Top credit reads the sign-off demand as the doubt re-purposing exposure into a checking ritual and names a withhold-and-watch test; 'just diligence' is the dodge the cannot-move-on-without-certainty pattern defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "Months into successful treatment, a patient resists any talk of ending, certain that without the therapist available to consult, his contamination doubts will come roaring back. Yet during the therapist's recent two-week absence he managed the doubts himself using what they had practiced. Which conclusion best follows?",
    mcOptions: [
      {
        text: "His dread of ending likely reflects the therapist still serving as an external source of certainty he hasn't fully internalized — yet the survived absence suggests he is closer than he fears, so the work is to transfer the function inward rather than to keep relying on consultation; test whether his doubt-management during breaks improves across successive absences, whether he can evoke the therapist's stance on his own when anxious, and whether brief planned separations lower the dread rather than confirm it.",
        credit: 1.0,
      },
      {
        text: "He doesn't want therapy to end.",
        credit: 0.3,
      },
      {
        text: "He may still be leaning on the therapist; we could talk about ending.",
        credit: 0.6,
      },
      {
        text: "Ending therapy is scary for everyone, so his reluctance means nothing in particular.",
        credit: 0,
      },
    ],
    correctAnswer:
      "His dread of ending likely reflects the therapist still serving as an external source of certainty he hasn't fully internalized — yet the survived absence suggests he is closer than he fears, so the work is to transfer the function inward rather than to keep relying on consultation; test whether his doubt-management during breaks improves across successive absences, whether he can evoke the therapist's stance on his own when anxious, and whether brief planned separations lower the dread rather than confirm it.",
    explanation:
      "Top credit reads the dread as incomplete internalization against the survived-absence evidence and names a shrinking-dips test; 'ending is scary for everyone' is the dodge the managed-the-doubts-himself detail defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A patient refuses to use the chair other patients use, brings her own pen, and asks the therapist to confirm the office was cleaned — but only on weeks her contamination obsessions are flaring; in calm weeks she sits anywhere without a thought. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Plenty of people prefer their own pen and a clean room, so this is just ordinary hygiene.",
        credit: 0,
      },
      {
        text: "The office precautions are likely her contamination compulsions enacted in the treatment setting, since they track her symptom flares rather than any real change in cleanliness; test whether the precautions appear only in high-symptom weeks and vanish in calm ones, whether reassurance about cleaning relieves her only briefly, and whether gently preventing the precautions spikes then settles her anxiety.",
        credit: 1.0,
      },
      {
        text: "Her caution about the office might be part of her OCD; we could watch the pattern.",
        credit: 0.6,
      },
      {
        text: "She takes precautions about the office sometimes.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The office precautions are likely her contamination compulsions enacted in the treatment setting, since they track her symptom flares rather than any real change in cleanliness; test whether the precautions appear only in high-symptom weeks and vanish in calm ones, whether reassurance about cleaning relieves her only briefly, and whether gently preventing the precautions spikes then settles her anxiety.",
    explanation:
      "Full credit reads the office precautions as flare-tracking compulsions and names an only-in-high-symptom-weeks test; 'ordinary hygiene' is the dodge the sits-anywhere-in-calm-weeks contrast defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A patient who had refused every exposure for a year finally agrees to touch a 'contaminated' doorknob — but only once she trusts that the therapist 'won't push her off a cliff' and will stay with her through the panic. She succeeds, and credits being able to do it to that trust. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She did the exposure after she came to trust the therapist.",
        credit: 0.3,
      },
      {
        text: "The trust probably helped her try it; we could see what else she'll attempt.",
        credit: 0.6,
      },
      {
        text: "Whether someone trusts you is too vague to count as the reason she did the exposure.",
        credit: 0,
      },
      {
        text: "The working alliance likely supplied the safety that made the feared exposure tolerable, so the bond functions as the platform the technique stands on rather than as a mere nicety; test whether her willingness to attempt exposures tracks moments she feels the therapist is with her, whether a rupture or a sense of being pushed revives her refusal, and whether the same exposure offered without that trust would still be refused.",
        credit: 1.0,
      },
    ],
    correctAnswer:
      "The working alliance likely supplied the safety that made the feared exposure tolerable, so the bond functions as the platform the technique stands on rather than as a mere nicety; test whether her willingness to attempt exposures tracks moments she feels the therapist is with her, whether a rupture or a sense of being pushed revives her refusal, and whether the same exposure offered without that trust would still be refused.",
    explanation:
      "Top credit names the alliance as the platform exposure stands on and proposes a same-exposure-without-trust test; 'too vague to count' is the refusal her own attribution and the year of refusal defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "After each session a patient spends hours mentally replaying everything she told the therapist, searching for any statement that might have been 'not completely accurate,' then emails long corrections. She does this only about therapy, not other conversations. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Her replaying and correcting might be a mental ritual; we could note it.",
        credit: 0.6,
      },
      {
        text: "Wanting to be accurate with your therapist is reasonable, so the corrections are just conscientiousness.",
        credit: 0,
      },
      {
        text: "The replaying-and-correcting is likely a mental checking ritual aimed at an impossible certainty that she was perfectly honest, with the therapist enlisted as the one who must certify it; test whether the review seeks certainty rather than genuine new information, whether each correction relieves her only until the next doubt, and whether the ritual is specific to therapy — the relationship she most fears 'getting wrong' — rather than to conversations generally.",
        credit: 1.0,
      },
      {
        text: "She goes over what she said and sends corrections.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The replaying-and-correcting is likely a mental checking ritual aimed at an impossible certainty that she was perfectly honest, with the therapist enlisted as the one who must certify it; test whether the review seeks certainty rather than genuine new information, whether each correction relieves her only until the next doubt, and whether the ritual is specific to therapy — the relationship she most fears 'getting wrong' — rather than to conversations generally.",
    explanation:
      "Full credit reads the post-session review as a mental checking ritual and names a certainty-not-information test; 'just conscientiousness' is the dodge the only-about-therapy specificity defeats.",
  },
];

const hybrid: HomeworkItem[] = [
  {
    itemType: "hybrid",
    prompt:
      "A patient texts her therapist between every session asking him to confirm that a remark she made to a coworker 'wasn't actually offensive.' His replies calm her for an hour or two, after which a new version of the worry arrives. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The between-session texting is likely a reassurance compulsion that has spilled into the relationship — the therapist's confirmation briefly relieves the doubt and thereby trains her to seek it again, so answering feeds the loop; test whether each reply relieves her only briefly before a fresh doubt, whether the texts cluster on her feared 'did I cause harm' theme, and whether a planned stretch of not replying lets the anxiety crest and fall on its own.",
        credit: 1.0,
      },
      {
        text: "The texting might be a reassurance ritual; we could look at how she uses his replies.",
        credit: 0.6,
      },
      {
        text: "She texts a lot asking for reassurance.",
        credit: 0.3,
      },
      {
        text: "People text their therapists all the time; there's nothing to read into it.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'reassurance-seeking compulsion' lead from the rival 'she genuinely needs information about social norms,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: check whether his answers settle the worry for good or only for an hour before the same doubt returns in new form — my lead predicts brief relief followed by renewed asking, the signature of a compulsion. It is refuted if a single clear answer durably resolves the worry and she does not return to it, which would fit a genuine, one-time need for information.",
      yieldAnchors: [
        "She texts between every session for confirmation",
        "Relief lasts only an hour or two",
        "A new version of the worry then arrives",
      ],
      riskAnchors: [
        "Each reply relieves her only briefly",
        "The texts cluster on the 'did I cause harm' theme",
        "A stretch of not replying lets anxiety crest and fall",
      ],
      defeatedBy: [
        "One clear answer durably resolves the worry",
        "She never returns to the same doubt",
      ],
    },
    correctAnswer:
      "The between-session texting is likely a reassurance compulsion that has spilled into the relationship — the therapist's confirmation briefly relieves the doubt and thereby trains her to seek it again, so answering feeds the loop; test whether each reply relieves her only briefly before a fresh doubt, whether the texts cluster on her feared 'did I cause harm' theme, and whether a planned stretch of not replying lets the anxiety crest and fall on its own.",
    explanation:
      "Full credit reads the texting as a reassurance compulsion fed by the therapist's replies with three checks and a does-one-answer-end-it test; 'people text their therapists all the time' opens nothing.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A patient with violent intrusive thoughts has hidden the worst of them for fear the therapist will recoil. When he finally shares one and the therapist responds with calm understanding rather than alarm, he is visibly shocked and, over the next weeks, brings out thought after thought he had buried. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He shared a thought and then shared more.",
        credit: 0.3,
      },
      {
        text: "The therapist's calm survival of the disclosure likely gave him a corrective experience contradicting his certainty that the thoughts would bring condemnation, which is why the rest came out; test whether his disclosures followed specifically the non-alarmed response, whether any sign of alarm would shut him down again, and whether he had hidden precisely the themes he most expected to be judged for.",
        credit: 1.0,
      },
      {
        text: "The calm reaction probably helped him open up; we could watch what else he shares.",
        credit: 0.6,
      },
      {
        text: "Why anyone decides to disclose is ultimately unknowable.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'the calm survival opened him up' lead from the rival 'he was simply ready to talk now,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: check whether the flood of disclosures dated to the moment the therapist responded without alarm rather than building gradually before it — my lead predicts an in-session shift tied to the survived confession. It is refuted if he was already disclosing freely before any such moment, which would credit his own readiness rather than the therapist's response.",
      yieldAnchors: [
        "He hid the worst thoughts fearing recoil",
        "The therapist responded calmly, not with alarm",
        "He was shocked and then disclosed much more",
      ],
      riskAnchors: [
        "Disclosures followed the non-alarmed response",
        "Any sign of alarm would shut him down",
        "He hid precisely the most-feared themes",
      ],
      defeatedBy: [
        "He was already disclosing freely beforehand",
        "Nothing in the therapist's response can be linked to it",
      ],
    },
    correctAnswer:
      "The therapist's calm survival of the disclosure likely gave him a corrective experience contradicting his certainty that the thoughts would bring condemnation, which is why the rest came out; test whether his disclosures followed specifically the non-alarmed response, whether any sign of alarm would shut him down again, and whether he had hidden precisely the themes he most expected to be judged for.",
    explanation:
      "Full credit reads a corrective experience with three checks and an in-session timing test that names its refutation; 'ultimately unknowable' opens nothing.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A patient interrupts himself every few minutes to ask, 'You're not judging me, are you? You'd tell me if you were?' He studies the therapist's expression for a beat after each answer before going on. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He keeps checking whether he's being judged; we could ask about it.",
        credit: 0.6,
      },
      {
        text: "He checks a lot whether the therapist is judging him.",
        credit: 0.3,
      },
      {
        text: "The repeated checking of the therapist's reaction is likely a checking compulsion run on the relationship — he treats her expression as ambiguous evidence to be resolved by asking, which relieves doubt only momentarily and renews it; test whether the checking spikes right after he says something he fears was bad, whether each reassurance relieves him only briefly, and whether withholding the reassurance, while staying warm, lets the doubt subside on its own.",
        credit: 1.0,
      },
      {
        text: "It's natural to wonder what your therapist thinks of you, so the checking means nothing.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'checking compulsion' lead from the rival 'he is just socially anxious about being liked,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: watch whether the checking spikes specifically right after statements he fears were 'bad' and is relieved only briefly by each answer — my lead predicts a doubt-relief-doubt loop tied to feared content. It is refuted if his checking is steady regardless of what he just said and is durably settled by a single reassurance, which fits ordinary social anxiety rather than a compulsion.",
      yieldAnchors: [
        "He asks every few minutes if he's being judged",
        "He studies her expression after each answer",
        "Each answer holds him only briefly",
      ],
      riskAnchors: [
        "Checking spikes after feared statements",
        "Each reassurance relieves only briefly",
        "Withholding reassurance lets doubt subside",
      ],
      defeatedBy: [
        "Checking is steady regardless of content",
        "One reassurance durably settles it",
      ],
    },
    correctAnswer:
      "The repeated checking of the therapist's reaction is likely a checking compulsion run on the relationship — he treats her expression as ambiguous evidence to be resolved by asking, which relieves doubt only momentarily and renews it; test whether the checking spikes right after he says something he fears was bad, whether each reassurance relieves him only briefly, and whether withholding the reassurance, while staying warm, lets the doubt subside on its own.",
    explanation:
      "Full credit reads the checking as a relationship-run compulsion with three checks and a withhold-and-watch test that names its refutation; 'it's natural to wonder' is the dodge the after-feared-statement spike defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "Each time a patient pleads, 'Promise me nothing bad will happen if I don't wash,' the therapist warmly declines to promise and instead stays with her through the surge of dread. The dread peaks and then fades without any reassurance, a little faster each week. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Anxiety naturally comes and goes, so the therapist's choice not to reassure is beside the point.",
        credit: 0,
      },
      {
        text: "The reliable spike-then-settle without reassurance likely shows the reassurance had been a compulsion, and withholding it (response prevention inside the alliance) is teaching her the dread passes on its own and the feared catastrophe doesn't come; test whether the dread settles each time without a promise, whether the peak gets lower across weeks, and whether caving and reassuring instead leaves the urge stronger next session.",
        credit: 1.0,
      },
      {
        text: "She gets very anxious when not reassured and then calms down.",
        credit: 0.3,
      },
      {
        text: "Not giving the promise seems to help; we could keep doing it.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'withholding reassurance is extinguishing a compulsion' lead from the rival 'she just happens to calm down over time anyway,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: compare sessions where the therapist withholds the promise with any session where he gives in and reassures — my lead predicts withholding lowers the next session's urge while reassuring keeps it high. It is refuted if her urge declines just as much on sessions she is fully reassured, showing the calming is unrelated to response prevention.",
      yieldAnchors: [
        "She pleads for a promise of safety",
        "The therapist declines and stays with her",
        "Dread peaks then fades without reassurance",
      ],
      riskAnchors: [
        "Dread settles each time without a promise",
        "The peak lowers across weeks",
        "Reassuring instead leaves the urge stronger",
      ],
      defeatedBy: [
        "Her urge drops just as much when reassured",
        "The calming has nothing to do with withholding",
      ],
    },
    correctAnswer:
      "The reliable spike-then-settle without reassurance likely shows the reassurance had been a compulsion, and withholding it (response prevention inside the alliance) is teaching her the dread passes on its own and the feared catastrophe doesn't come; test whether the dread settles each time without a promise, whether the peak gets lower across weeks, and whether caving and reassuring instead leaves the urge stronger next session.",
    explanation:
      "Full credit reads withheld reassurance as response prevention with three checks and a withhold-versus-reassure test that names its refutation; 'anxiety naturally comes and goes' is the dodge the lower-peak-each-week pattern defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A patient devotes whole sessions to asking whether she has 'the exactly right diagnosis' and whether a different therapist might be better, researching credentials for hours nightly — yet she has renewed for another year and the same need for certainty drives her checking rituals at home. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She keeps questioning whether the therapy is right for her.",
        credit: 0.3,
      },
      {
        text: "Her doubts about the therapy might be more OCD; we could explore that.",
        credit: 0.6,
      },
      {
        text: "Her relentless doubt about the treatment is likely the same intolerance of uncertainty that fuels her checking, now aimed at the therapy — a demand for a guarantee no answer can supply, so each reassurance only seeds the next doubt; test whether her therapy-doubts follow the same never-satisfied loop as her checking, whether resolving one doubt simply spawns another, and whether she doubts most where she is most invested rather than truly preparing to leave.",
        credit: 1.0,
      },
      {
        text: "Picking the right therapist is a hard, legitimate decision, so her questioning is just sensible caution.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'OCD doubt aimed at the therapy' lead from the rival 'she is reasonably evaluating her care,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: check whether settling one doubt about the therapy durably satisfies her or simply spawns a fresh doubt in the same never-ending loop as her home checking — my lead predicts the latter. It is refuted if a clear answer about diagnosis or fit actually resolves her concern and she either settles or makes a real decision, which would fit reasonable evaluation.",
      yieldAnchors: [
        "She doubts the diagnosis and the therapist endlessly",
        "She researches for hours yet renews for a year",
        "The same certainty-need drives her checking",
      ],
      riskAnchors: [
        "Therapy-doubts follow the never-satisfied loop",
        "Resolving one doubt spawns another",
        "She doubts most where she is most invested",
      ],
      defeatedBy: [
        "A clear answer durably resolves the concern",
        "She is actually preparing to leave",
      ],
    },
    correctAnswer:
      "Her relentless doubt about the treatment is likely the same intolerance of uncertainty that fuels her checking, now aimed at the therapy — a demand for a guarantee no answer can supply, so each reassurance only seeds the next doubt; test whether her therapy-doubts follow the same never-satisfied loop as her checking, whether resolving one doubt simply spawns another, and whether she doubts most where she is most invested rather than truly preparing to leave.",
    explanation:
      "Full credit reads treatment-doubt as the same intolerance of uncertainty with three checks and a does-one-answer-spawn-another test; 'sensible caution' is the dodge the renewed-for-a-year, same-loop pattern defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "Before she can speak, a patient must square the tissue box, dim one lamp, and restart her first sentence until it 'sounds right,' often several times. When the therapist gently asks her to leave a sentence un-redone, she is anxious but, to her surprise, can keep going. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Those routines might be 'just right' rituals; we could watch when they appear.",
        credit: 0.6,
      },
      {
        text: "The arranging and restarting are likely 'just right' compulsions performed in session to discharge a not-right feeling, and the room is becoming a place to practice tolerating it rather than fixing it; test whether the rituals appear specifically with the not-right sensation and not at random, whether blocking a re-do spikes anxiety that then eases, and whether the urge weakens across sessions as she sits with the discomfort.",
        credit: 1.0,
      },
      {
        text: "She arranges things and restarts sentences before she can talk.",
        credit: 0.3,
      },
      {
        text: "Lots of people have little warm-up habits, so there's nothing here worth interpreting.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'just-right compulsion' lead from the rival 'these are harmless warm-up habits,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: block one re-do and watch whether anxiety spikes and then eases as she continues — my lead predicts a discharge-of-not-right-feeling pattern that can be tolerated. It is refuted if blocking the routine causes her no distress at all, which would fit a harmless habit rather than a compulsion.",
      yieldAnchors: [
        "She must arrange the room and restart sentences",
        "The restarting repeats until it 'sounds right'",
        "Blocking a re-do leaves her anxious but able to continue",
      ],
      riskAnchors: [
        "Rituals appear with the not-right sensation",
        "Blocking a re-do spikes then eases anxiety",
        "The urge weakens as she tolerates discomfort",
      ],
      defeatedBy: [
        "Blocking the routine causes no distress",
        "The habits appear randomly, unlinked to any feeling",
      ],
    },
    correctAnswer:
      "The arranging and restarting are likely 'just right' compulsions performed in session to discharge a not-right feeling, and the room is becoming a place to practice tolerating it rather than fixing it; test whether the rituals appear specifically with the not-right sensation and not at random, whether blocking a re-do spikes anxiety that then eases, and whether the urge weakens across sessions as she sits with the discomfort.",
    explanation:
      "Full credit reads the in-session routines as 'just right' compulsions with three checks and a block-a-re-do test that names its refutation; 'harmless warm-up habits' is the dodge the anxious-when-blocked pattern defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A supervisor reviewing tapes notices that whenever this therapist answers the patient's 'are you sure I'm not dangerous?' questions, the next session contains more of them; on the rare occasions he reflects the question back instead, the next session contains fewer. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The number of questions drifts up and down on its own, so the link to the therapist's answers is illusory.",
        credit: 0,
      },
      {
        text: "He asks more after getting answers and less after not.",
        credit: 0.3,
      },
      {
        text: "The pattern likely shows the therapist's answers are reinforcing the questioning rather than resolving it — each reassurance rewards the asking, so it breeds more, the hallmark of a compulsion fed within the relationship; test whether answered sessions are reliably followed by more questions and reflected ones by fewer, whether the post-answer relief is brief, and whether a planned run of not answering steadily reduces the asking.",
        credit: 1.0,
      },
      {
        text: "Answering might be backfiring; we could try answering less and see.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'answers reinforce the questioning' lead from the rival 'question counts just fluctuate randomly,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: run a deliberate stretch of not answering and see whether the asking steadily falls, then a stretch of answering and see whether it rises — my lead predicts the asking tracks the therapist's response. It is refuted if question counts move the same regardless of whether he answers, which would mean they fluctuate on their own.",
      yieldAnchors: [
        "Answered sessions are followed by more questions",
        "Reflected sessions are followed by fewer",
        "The pattern is consistent on the tapes",
      ],
      riskAnchors: [
        "Answering reliably precedes more questions",
        "Post-answer relief is brief",
        "A run of not answering reduces the asking",
      ],
      defeatedBy: [
        "Question counts move regardless of his response",
        "Answering and not answering yield identical trends",
      ],
    },
    correctAnswer:
      "The pattern likely shows the therapist's answers are reinforcing the questioning rather than resolving it — each reassurance rewards the asking, so it breeds more, the hallmark of a compulsion fed within the relationship; test whether answered sessions are reliably followed by more questions and reflected ones by fewer, whether the post-answer relief is brief, and whether a planned run of not answering steadily reduces the asking.",
    explanation:
      "Full credit reads the answered-then-more pattern as reinforcement with three checks and a planned-no-answer test that names its refutation; 'drifts up and down on its own' is the dodge the answer-versus-reflect contrast defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A patient opens nearly every session by confessing some small 'sin' against the therapist — a stray critical thought, a worry she was rude last week — and cannot settle until she is forgiven, after which the relief lasts only minutes. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She confesses and asks forgiveness at the start of sessions.",
        credit: 0.3,
      },
      {
        text: "She's just an unusually conscientious, polite person, so the confessing means nothing in particular.",
        credit: 0,
      },
      {
        text: "The serial confessing-and-seeking-forgiveness is likely a scrupulosity compulsion enacted in the alliance — unloading imagined moral failings to win an absolution that quiets guilt briefly and then must be renewed; test whether each forgiveness relieves her only momentarily before a new confession, whether the 'sins' are imagined moral ones rather than real lapses, and whether warmly declining to absolve lets the guilt rise and pass on its own.",
        credit: 1.0,
      },
      {
        text: "Her confessing could be a forgiveness ritual; we could pay attention to it.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'scrupulosity compulsion' lead from the rival 'she is simply very conscientious,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: watch whether each granted forgiveness settles her for good or only for minutes before the next confession — my lead predicts a confess-relieve-confess loop over imagined sins. It is refuted if a single acknowledgment durably reassures her and the confessions stop, which would fit ordinary conscientiousness rather than a compulsion.",
      yieldAnchors: [
        "She confesses a 'sin' against the therapist most sessions",
        "She cannot settle until forgiven",
        "Relief lasts only minutes",
      ],
      riskAnchors: [
        "Each forgiveness relieves only briefly",
        "The 'sins' are imagined, not real lapses",
        "Declining to absolve lets guilt rise and pass",
      ],
      defeatedBy: [
        "One acknowledgment durably reassures her",
        "The confessions concern real, not imagined, lapses",
      ],
    },
    correctAnswer:
      "The serial confessing-and-seeking-forgiveness is likely a scrupulosity compulsion enacted in the alliance — unloading imagined moral failings to win an absolution that quiets guilt briefly and then must be renewed; test whether each forgiveness relieves her only momentarily before a new confession, whether the 'sins' are imagined moral ones rather than real lapses, and whether warmly declining to absolve lets the guilt rise and pass on its own.",
    explanation:
      "Full credit reads serial confession as a scrupulosity compulsion with three checks and a decline-to-absolve test that names its refutation; 'unusually conscientious' is the dodge the minutes-long relief over imagined sins defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A patient consistently waits until his hand is on the door to blurt his most disturbing thought of the week, leaving no time to discuss it; invited to raise such thoughts earlier, he says he 'can't' and falls silent. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He might confess late to avoid facing it; we could note the timing.",
        credit: 0.6,
      },
      {
        text: "The doorknob confession is likely a compulsion in its own right — confessing discharges the guilt while the last-second timing guarantees he avoids the exposure of actually sitting with the thought, giving relief without risking change; test whether the disclosures land reliably at the very end and never when there's time to explore, whether he resists when offered an earlier slot, and whether the urge eases once the thoughts are worked through rather than just unloaded.",
        credit: 1.0,
      },
      {
        text: "He brings up the hardest things right at the end.",
        credit: 0.3,
      },
      {
        text: "People often blurt things on the way out; the timing is just how conversations go.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'confession-as-avoidance compulsion' lead from the rival 'he only gets up the nerve at the very end,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: offer to start a session with the disturbing thought and watch whether he can use the time or balks to protect the no-time-to-discuss escape — my lead predicts he avoids real exploration even when given room. It is refuted if, given an earlier slot, he willingly sits with and explores the thought, which would fit simple end-of-session courage rather than avoidance.",
      yieldAnchors: [
        "He confesses only as he reaches the door",
        "There is never time to discuss it",
        "Invited to raise it earlier, he 'can't'",
      ],
      riskAnchors: [
        "Disclosures land reliably at the very end",
        "He resists an earlier slot",
        "The urge eases once thoughts are worked through",
      ],
      defeatedBy: [
        "Given time, he willingly explores the thought",
        "He raises hard thoughts early when offered the chance",
      ],
    },
    correctAnswer:
      "The doorknob confession is likely a compulsion in its own right — confessing discharges the guilt while the last-second timing guarantees he avoids the exposure of actually sitting with the thought, giving relief without risking change; test whether the disclosures land reliably at the very end and never when there's time to explore, whether he resists when offered an earlier slot, and whether the urge eases once the thoughts are worked through rather than just unloaded.",
    explanation:
      "Full credit reads the doorknob confession as a relief-without-exposure compulsion with three checks and an offer-an-earlier-slot test that names its refutation; 'just how conversations go' is the dodge the cannot-raise-it-earlier detail defeats.",
  },
];

const written: HomeworkItem[] = [
  {
    itemType: "written",
    prompt:
      "Between every session, a patient emails her therapist several times asking him to confirm that something she said or did 'didn't hurt anyone.' His confirmations calm her briefly, after which a new worry of the same kind appears, and the emails have steadily increased over the months. In one paragraph, propose the strongest conclusion about what the reassurance-seeking is doing and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that the emailing is a reassurance compulsion that has migrated into the therapy relationship: each confirmation briefly relieves her doubt and, by relieving it, rewards and strengthens the urge to ask again, which is why the emails have multiplied rather than tapered as a genuine need would. This is a strong claim because it predicts checkable consequences: the relief after each reply should be short-lived and followed by a fresh version of the same 'did I cause harm' worry; the requests should cluster on her feared themes rather than spread across ordinary topics; and a planned, supported stretch in which the therapist stops answering should let the anxiety crest and fall and, over time, reduce the asking rather than make it permanently worse. I would test it by logging how long relief lasts after each reply, by checking whether the worries stay locked on the harm theme, and by running a response-prevention trial of withholding reassurance to see whether the urge to email declines.",
      yieldAnchors: [
        "She emails several times between every session",
        "Relief is brief and a new worry follows",
        "The emails have steadily increased over months",
      ],
      riskAnchors: [
        "Relief after each reply is short-lived",
        "Requests cluster on the 'did I cause harm' theme",
        "Withholding reassurance reduces the asking over time",
      ],
      defeatedBy: [
        "A single confirmation durably ends the worry",
        "The asking tapers on its own as a real need would",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that the emailing is a reassurance compulsion that has migrated into the therapy relationship: each confirmation briefly relieves her doubt and, by relieving it, rewards and strengthens the urge to ask again, which is why the emails have multiplied rather than tapered as a genuine need would. This is a strong claim because it predicts checkable consequences: the relief after each reply should be short-lived and followed by a fresh version of the same 'did I cause harm' worry; the requests should cluster on her feared themes rather than spread across ordinary topics; and a planned, supported stretch in which the therapist stops answering should let the anxiety crest and fall and, over time, reduce the asking rather than make it permanently worse. I would test it by logging how long relief lasts after each reply, by checking whether the worries stay locked on the harm theme, and by running a response-prevention trial of withholding reassurance to see whether the urge to email declines.",
    explanation:
      "Under the inverted standard, 'people email their therapists, it means nothing' earns near-zero; top credit goes to the reassurance-compulsion reading that names a withhold-and-watch test as its own refutation.",
  },
  {
    itemType: "written",
    prompt:
      "For months a patient with taboo intrusive thoughts disclosed only his 'acceptable' symptoms, certain that revealing the rest would make the therapist see him as a monster and end treatment. The first time he risks one and the therapist responds with calm, ordinary understanding, he opens up dramatically over the following weeks. In one paragraph, propose the strongest conclusion about what changed and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that the patient had been transferring onto the therapist the condemning judge he most feared, so he hid precisely the themes he expected to be punished for — and the therapist's calm, non-condemning response to his first disclosure was a corrective experience that contradicted the expectation, which is why the rest came out. This is a strong claim because it predicts checkable consequences: the surge of disclosure should date specifically to the non-alarmed response rather than build before it; the material he had withheld should be exactly the most feared-condemnation themes, not random topics; and any genuine sign of alarm or judgment from the therapist should shut him back down. I would test it by dating his openings against that key moment, by checking whether the previously hidden content matches his feared themes, and by watching whether his disclosure retreats if he ever reads judgment in the therapist's reaction.",
      yieldAnchors: [
        "He disclosed only 'acceptable' symptoms for months",
        "He feared being seen as a monster",
        "He opened up after the calm response",
      ],
      riskAnchors: [
        "The opening dates to the non-alarmed response",
        "Hidden content matches the feared-condemnation themes",
        "A sign of judgment would shut him down again",
      ],
      defeatedBy: [
        "He was already disclosing freely before that moment",
        "The therapist's response cannot be linked to the change",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that the patient had been transferring onto the therapist the condemning judge he most feared, so he hid precisely the themes he expected to be punished for — and the therapist's calm, non-condemning response to his first disclosure was a corrective experience that contradicted the expectation, which is why the rest came out. This is a strong claim because it predicts checkable consequences: the surge of disclosure should date specifically to the non-alarmed response rather than build before it; the material he had withheld should be exactly the most feared-condemnation themes, not random topics; and any genuine sign of alarm or judgment from the therapist should shut him back down. I would test it by dating his openings against that key moment, by checking whether the previously hidden content matches his feared themes, and by watching whether his disclosure retreats if he ever reads judgment in the therapist's reaction.",
    explanation:
      "The cautious 'why anyone discloses is unknowable' earns near-zero; credit goes to the transference-and-corrective-experience reading that names a timing test which could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "Reviewing a year of records, a therapist sees that his patient's reassurance-seeking questions are most numerous in the weeks following sessions where he answered them fully, and least numerous after the few sessions where he gently declined. In one paragraph, propose the strongest conclusion about the role the therapist's reassurance is playing and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that the therapist's reassurance is reinforcing the reassurance-seeking rather than resolving it: because each answer briefly relieves the patient's doubt, it rewards the asking and so produces more of it, which is exactly why questions spike after answered sessions and fall after declined ones. This is a strong claim because it predicts checkable consequences: answered sessions should be reliably followed by more questions and declined ones by fewer, even after accounting for how bad the patient's week was; the relief following each answer should be brief; and a deliberately planned stretch of not answering should drive the asking steadily down. I would test it by relating question counts to whether the prior session was answered while controlling for symptom severity, by timing how long relief lasts after each answer, and by running a planned response-prevention period to see whether the questioning declines.",
      yieldAnchors: [
        "Questions spike after answered sessions",
        "Questions fall after declined ones",
        "The pattern holds across a year of records",
      ],
      riskAnchors: [
        "Answered sessions precede more questions after controlling for severity",
        "Relief after each answer is brief",
        "A planned no-answer stretch reduces asking",
      ],
      defeatedBy: [
        "Question counts track only how bad the week was",
        "Answering and declining make no difference to counts",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that the therapist's reassurance is reinforcing the reassurance-seeking rather than resolving it: because each answer briefly relieves the patient's doubt, it rewards the asking and so produces more of it, which is exactly why questions spike after answered sessions and fall after declined ones. This is a strong claim because it predicts checkable consequences: answered sessions should be reliably followed by more questions and declined ones by fewer, even after accounting for how bad the patient's week was; the relief following each answer should be brief; and a deliberately planned stretch of not answering should drive the asking steadily down. I would test it by relating question counts to whether the prior session was answered while controlling for symptom severity, by timing how long relief lasts after each answer, and by running a planned response-prevention period to see whether the questioning declines.",
    explanation:
      "The inverted standard gives near-zero to 'the counts drift on their own'; top credit goes to the reassurance-reinforces-the-compulsion reading that names a response-prevention test as its own refutation.",
  },
  {
    itemType: "written",
    prompt:
      "A patient who spent a year refusing every exposure finally begins attempting them, and says she can only do so because she has come to trust that her therapist 'won't trick her or abandon her mid-panic.' Her willingness to attempt new exposures seems to rise and fall with how connected she feels. In one paragraph, propose the strongest conclusion about the role of the relationship and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that the working alliance is functioning as the platform that makes the feared exposures tolerable — the trust that the therapist will stay with her and not abandon her supplies the safety she needs to face the panic, so the bond is what lets the technique work rather than a mere nicety alongside it. This is a strong claim because it predicts checkable consequences: her willingness to attempt exposures should track moments she feels connected and dip when she feels pushed or let down; a genuine rupture should revive her refusal until it is repaired; and the same exposures offered without that trust — earlier in treatment or by a clinician she doesn't trust — should be refused. I would test it by relating her exposure attempts to her session-by-session sense of connection, by watching whether a rupture brings back avoidance, and by comparing her willingness now with the year she refused identical exposures absent the trust.",
      yieldAnchors: [
        "She refused all exposures for a year",
        "She now attempts them, crediting trust",
        "Willingness rises and falls with connection",
      ],
      riskAnchors: [
        "Exposure attempts track felt connection",
        "A rupture revives refusal until repaired",
        "Identical exposures without trust are refused",
      ],
      defeatedBy: [
        "She attempts exposures just as readily when disconnected",
        "Her willingness ignores ruptures entirely",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that the working alliance is functioning as the platform that makes the feared exposures tolerable — the trust that the therapist will stay with her and not abandon her supplies the safety she needs to face the panic, so the bond is what lets the technique work rather than a mere nicety alongside it. This is a strong claim because it predicts checkable consequences: her willingness to attempt exposures should track moments she feels connected and dip when she feels pushed or let down; a genuine rupture should revive her refusal until it is repaired; and the same exposures offered without that trust — earlier in treatment or by a clinician she doesn't trust — should be refused. I would test it by relating her exposure attempts to her session-by-session sense of connection, by watching whether a rupture brings back avoidance, and by comparing her willingness now with the year she refused identical exposures absent the trust.",
    explanation:
      "The cautious 'trust is too vague to be the reason' earns near-zero; credit goes to the alliance-as-platform reading that names a does-willingness-track-connection test which could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "Late in a successful treatment, a patient dreads ending, convinced his doubts will overwhelm him without the therapist on call to consult — yet during a recent two-week absence he managed those doubts himself using their shared approach, with only a small, brief dip. In one paragraph, propose the strongest conclusion about what is happening and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that the patient has been relying on the therapist as an external source of certainty he has not yet fully taken inside, but the survived absence shows he is closer to internalizing that function than his dread admits — so the remaining work is to transfer the steadying, doubt-tolerating stance inward rather than to keep him dependent on consultation. This is a strong claim because it predicts checkable consequences: his ability to manage doubts during separations should improve across successive breaks rather than stay flat; he should increasingly be able to evoke the therapist's stance on his own when anxious; and brief, planned separations should lower his dread of ending rather than confirm it. I would test it by measuring the size and length of his dips across successive absences, by checking whether he can call the shared approach to mind unprompted when doubt strikes, and by using short planned breaks to see whether the termination dread falls.",
      yieldAnchors: [
        "He dreads ending without the therapist on call",
        "He managed a two-week absence himself",
        "The dip was small and brief",
      ],
      riskAnchors: [
        "Dip size shrinks across successive breaks",
        "He can evoke the therapist's stance unprompted",
        "Planned separations lower the dread of ending",
      ],
      defeatedBy: [
        "His dips stay just as large at every break",
        "He cannot manage doubts at all without consulting",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that the patient has been relying on the therapist as an external source of certainty he has not yet fully taken inside, but the survived absence shows he is closer to internalizing that function than his dread admits — so the remaining work is to transfer the steadying, doubt-tolerating stance inward rather than to keep him dependent on consultation. This is a strong claim because it predicts checkable consequences: his ability to manage doubts during separations should improve across successive breaks rather than stay flat; he should increasingly be able to evoke the therapist's stance on his own when anxious; and brief, planned separations should lower his dread of ending rather than confirm it. I would test it by measuring the size and length of his dips across successive absences, by checking whether he can call the shared approach to mind unprompted when doubt strikes, and by using short planned breaks to see whether the termination dread falls.",
    explanation:
      "The inverted standard gives near-zero to 'ending is scary for everyone, it means nothing'; top credit goes to the internalization reading that names a shrinking-dips-across-breaks test as its own refutation.",
  },
];

export const section: SectionContent = {
  slug: "therapeutic-relationship-ocd",
  title: "The Therapeutic Relationship in OCD Treatment",
  weekNumber: 1,
  blurb:
    "In OCD treatment the therapy relationship is both a tool and a stage: the same doubting, checking, and reassurance-seeking that drive the disorder show up live with the therapist, and the working alliance becomes the place to recognize them and practice tolerating uncertainty.",
  lectureTitle: "1.5 The Therapeutic Relationship in OCD Treatment",
  body: `# The Therapeutic Relationship in OCD Treatment

It is tempting to picture treatment for obsessive-compulsive disorder as a set of techniques handed to a patient from across the room — exposures to do, rituals to resist, worksheets to fill in. But the relationship between patient and therapist is never just the backdrop. With OCD it is doubly important: the bond is the platform that makes frightening work possible, and it is also a stage on which the very symptoms — the doubting, the checking, the reassurance-seeking — quietly re-stage themselves. Learning to see the disorder play out live, in the room, is one of the most useful skills in the work.

## The alliance: tool and stage

A trusting **working alliance** does real work in OCD treatment. A patient terrified of touching a "contaminated" surface will attempt it far sooner with someone she believes won't trick her or abandon her mid-panic. So the bond is a tool — the platform a technique like exposure stands on. But it is also a stage: the same patterns that run her life will, sooner or later, run in the relationship too. The strong move is to treat both at once — to use the bond and to read what shows up on it.

## Reassurance-seeking moves into the room

The most common way OCD enters the relationship is reassurance-seeking. "You're sure I'm not a bad person?" "Promise nothing bad will happen if I don't wash." Each answer brings a few seconds of relief — and that relief is exactly the problem. Because relief rewards the asking, answering trains the patient to ask again, so well-meant reassurance feeds the loop it seems to soothe. The tell is always the same: relief is brief, a new version of the question follows, and the asking clusters on the feared theme rather than on ordinary topics.

## The therapist as the feared judge

Patients often arrive expecting that if they reveal their worst intrusive thoughts — of harm, of taboo, of blasphemy — the listener will be horrified and turn away. That expectation gets laid onto the therapist, who becomes, in the patient's mind, the condemning judge. This is **transference**, and you can read it from what gets hidden: the patient is candid about neutral symptoms but goes vague exactly where condemnation is feared. The strong reading names the transferred judge and tests it — does the avoidance track the feared themes specifically, and does a calm, non-condemning response open the rest?

## When the room becomes the place for response prevention

The same relationship that can supply reassurance can also, deliberately, withhold it. When a therapist warmly declines to promise safety and instead stays with the patient through the surge of dread, something instructive happens: the anxiety peaks and then fades on its own, a little faster each time. That spike-then-settle is **response prevention** running inside the alliance — lived evidence that the feared catastrophe doesn't come and the relief need not be supplied from outside. The clean test is whether the dread settles without the promise and whether caving and reassuring leaves the urge stronger next time.

## Checking, control, and "just right" with the therapist

OCD does not only show up as reassurance-seeking. A patient may scan the therapist's face for signs of disapproval — a checking compulsion run on the relationship. Another must square the tissue box and restart her opening sentence until it "sounds right" — a "just right" compulsion enacted in session. Another saves his most disturbing thought for the final second, so a confession discharges the guilt while the timing guarantees he never has to sit with the thought. Each of these is the disorder using the room. Seeing it lets you work with it directly rather than only hearing about it secondhand.

## Surviving the disclosure

A pivotal moment in OCD treatment often comes when a patient finally risks the confession he was sure would end everything — and the therapist responds with calm, ordinary understanding instead of alarm. That non-horrified response is a **corrective experience**: it contradicts the certainty that disclosure brings condemnation, and it is frequently what unlocks the rest of the obsessions. The strong reading commits to that mechanism and names a test — the opening should date to the calm response, the hidden content should match the feared-condemnation themes, and any real sign of alarm should shut him back down.

## Reading the dynamic — and naming a test

The discipline this course trains applies sharply here: read the pattern playing out between you, commit to the richest account of what it is doing, and name the cheapest observation that would tell you if you are wrong. Is the questioning a compulsion? Then relief should be brief and a planned stretch of not answering should reduce the asking. Is the office caution a contamination ritual? Then it should appear only in flare weeks and vanish in calm ones. Is the dread of ending unfinished internalization? Then the dips around each break should shrink over time. The weak move is to shrug — "people seek reassurance," "ending is scary for everyone" — which explains nothing and tests nothing.

## In the real world

Suppose a friend in OCD treatment tells you, "My therapist won't just tell me it's fine anymore, and somehow I'm getting better." The dismissive read is that the therapist is being withholding for no reason. The trained read treats the relationship as the place the disorder is being worked: by not supplying the reassurance that fed the loop, the therapist is letting your friend learn that the dread passes on its own. If that account is right, her urge to ask should fall over time, her relief should no longer depend on being told it's fine, and the same change should generalize beyond the therapy room. Notice what this buys you — not a vague tribute to "a good relationship," but a testable claim about how the bond is being used to dismantle the very symptoms it once carried.`,
  homework: {
    mcq,
    hybrid,
    written,
  },
};
