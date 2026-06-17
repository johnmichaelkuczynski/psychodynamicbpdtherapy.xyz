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
      "Three sessions in, a patient who had warmly thanked her therapist arrives icy and clipped after he started two minutes late, saying flatly that he 'clearly has more important people to see.' Which conclusion best follows?",
    mcOptions: [
      {
        text: "The strongest reading is that a split object-relations dyad has been activated in the room — a two-minute lateness recast the warm, attentive therapist as a neglectful, withholding figure and the patient as the discarded one — and the move is to name that dyad out loud rather than just apologize; test whether putting words to the shift ('right now I seem to have become someone who can't be bothered with you') softens her iciness within the session, whether the reaction is far larger than two minutes would warrant, and whether the same abandoned-by-a-cold-figure pattern recurs at other small ruptures.",
        credit: 1.0,
      },
      {
        text: "She might be reacting to the lateness more strongly than it deserves; we could gently explore that.",
        credit: 0.6,
      },
      {
        text: "She seems upset that the session started a couple of minutes late.",
        credit: 0.3,
      },
      {
        text: "She's just being manipulative and punishing him for attention, so the sensible thing is to ignore it and move on.",
        credit: 0,
      },
    ],
    correctAnswer:
      "The strongest reading is that a split object-relations dyad has been activated in the room — a two-minute lateness recast the warm, attentive therapist as a neglectful, withholding figure and the patient as the discarded one — and the move is to name that dyad out loud rather than just apologize; test whether putting words to the shift ('right now I seem to have become someone who can't be bothered with you') softens her iciness within the session, whether the reaction is far larger than two minutes would warrant, and whether the same abandoned-by-a-cold-figure pattern recurs at other small ruptures.",
    explanation:
      "Top credit names the activated abandoning-figure dyad and a does-naming-it-shift-it test; 'she's just being manipulative' is the overreach dodge that the wildly disproportionate, patterned reaction defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A patient who often describes a contemptuous, belittling father spends a whole session minutely criticizing her therapist's word choices, tone, and 'amateur' technique, watching coldly for him to flinch. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She may be turning the criticism she's known onto her therapist; we could look into that.",
        credit: 0.6,
      },
      {
        text: "The strongest reading is a role reversal of a contemptuous-critic/worthless-one dyad: the patient has stepped into the belittling-father role she usually suffers under and cast the therapist as the demeaned child, replaying the bond from the powerful end; the move is to name the reversal ('the harsh judge who used to land on you seems to be in the room — only aimed at me now') and predict it shifts the interaction; test whether naming it loosens the cold scrutiny, whether the contempt mirrors how she's described her father, and whether the pattern recurs whenever she feels vulnerable.",
        credit: 1.0,
      },
      {
        text: "She is being very critical of her therapist today.",
        credit: 0.3,
      },
      {
        text: "The therapist just needs thicker skin and better technique; this is ordinary feedback, not anything to interpret.",
        credit: 0,
      },
    ],
    correctAnswer:
      "The strongest reading is a role reversal of a contemptuous-critic/worthless-one dyad: the patient has stepped into the belittling-father role she usually suffers under and cast the therapist as the demeaned child, replaying the bond from the powerful end; the move is to name the reversal ('the harsh judge who used to land on you seems to be in the room — only aimed at me now') and predict it shifts the interaction; test whether naming it loosens the cold scrutiny, whether the contempt mirrors how she's described her father, and whether the pattern recurs whenever she feels vulnerable.",
    explanation:
      "Full credit identifies the role reversal of a critic/worthless-one dyad and names a does-naming-it-shift-it test; 'just toughen up, it's ordinary feedback' is the dodge that ignores the transference and the father-matching contempt.",
  },
  {
    itemType: "mc",
    prompt:
      "A new patient tells her therapist by the second session that he is 'the only person who has ever truly understood her,' unlike every useless clinician before him, and asks to meet far more often. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The strong praise might not last; we could keep an eye on it.",
        credit: 0.6,
      },
      {
        text: "She thinks very highly of her new therapist.",
        credit: 0.3,
      },
      {
        text: "The strongest reading is that an all-good rescuer/rescued-child dyad has been activated and walled off from any disappointment — the idealization is the same splitting that will later flip to devaluation — so the move is to hold the frame, decline the escalation, and name the all-or-nothing quality rather than enjoy the praise; test whether the idealization is brittle (a small letdown flips it to contempt), whether 'everyone before was useless' reflects an all-good/all-bad split rather than a real account, and whether naming the pattern steadies it.",
        credit: 1.0,
      },
      {
        text: "She's right that he's finally the perfect therapist for her, so he should accept the praise and add the extra sessions she wants.",
        credit: 0,
      },
    ],
    correctAnswer:
      "The strongest reading is that an all-good rescuer/rescued-child dyad has been activated and walled off from any disappointment — the idealization is the same splitting that will later flip to devaluation — so the move is to hold the frame, decline the escalation, and name the all-or-nothing quality rather than enjoy the praise; test whether the idealization is brittle (a small letdown flips it to contempt), whether 'everyone before was useless' reflects an all-good/all-bad split rather than a real account, and whether naming the pattern steadies it.",
    explanation:
      "Top credit reads the instant idealization as an activated, brittle all-good dyad and names a does-it-flip-with-a-letdown test; 'he really is the perfect therapist, so accept it' is the overreach the splitting structure defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A patient repeatedly texts her therapist at all hours between sessions, then in session says that a 'real' helper would always be available and that his insistence on set times proves he doesn't care. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She's right that a caring therapist would always be reachable, so he should loosen the frame and answer her texts to prove it.",
        credit: 0,
      },
      {
        text: "Holding the boundary might be stirring something up; we could talk about the texting.",
        credit: 0.6,
      },
      {
        text: "The strongest reading is that the frame itself has activated an abandoning-caregiver/desperate-child dyad — the boundary is experienced as proof of a withholding, uncaring figure — so holding the frame while interpreting it is the treatment, not a lapse of warmth; the move is to keep the agreed structure and name the dyad ('the limit turns me into someone who doesn't care, the way others haven't'); test whether naming it lowers the between-session texting, whether the 'you don't care' reaction tracks the boundary rather than any real coldness, and whether the pattern repeats at every limit.",
        credit: 1.0,
      },
      {
        text: "She wants her therapist to be available outside of sessions.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The strongest reading is that the frame itself has activated an abandoning-caregiver/desperate-child dyad — the boundary is experienced as proof of a withholding, uncaring figure — so holding the frame while interpreting it is the treatment, not a lapse of warmth; the move is to keep the agreed structure and name the dyad ('the limit turns me into someone who doesn't care, the way others haven't'); test whether naming it lowers the between-session texting, whether the 'you don't care' reaction tracks the boundary rather than any real coldness, and whether the pattern repeats at every limit.",
    explanation:
      "Full credit treats the frame as the trigger for an abandoning-caregiver dyad and names a does-naming-it-lower-the-texting test; 'loosen the frame to prove you care' is the dodge that collapses the structure and feeds the dyad.",
  },
  {
    itemType: "mc",
    prompt:
      "A therapist, distracted, twice mixes up key facts of his patient's history and once calls her by another client's name; she becomes angry and says she doesn't feel safe continuing. He wonders whether her anger is 'just transference.' Which conclusion best follows?",
    mcOptions: [
      {
        text: "The strongest reading is that this is a real, warranted rupture, not a transference distortion to be interpreted away: the therapist actually erred, and the evidence-based move is to acknowledge the mistakes and repair before reading any deeper meaning; test whether a genuine acknowledgment and corrected attention restore her sense of safety, whether her anger is proportionate to real lapses rather than to a trivial trigger, and whether it resolves once the errors stop rather than recurring without cause.",
        credit: 1.0,
      },
      {
        text: "Some of her anger might be a fair response to real mistakes; we could acknowledge them.",
        credit: 0.6,
      },
      {
        text: "She is angry after her therapist made some errors.",
        credit: 0.3,
      },
      {
        text: "Her reaction is pure transference replaying an old betrayal, so he should interpret the dyad rather than apologize for the mix-ups.",
        credit: 0,
      },
    ],
    correctAnswer:
      "The strongest reading is that this is a real, warranted rupture, not a transference distortion to be interpreted away: the therapist actually erred, and the evidence-based move is to acknowledge the mistakes and repair before reading any deeper meaning; test whether a genuine acknowledgment and corrected attention restore her sense of safety, whether her anger is proportionate to real lapses rather than to a trivial trigger, and whether it resolves once the errors stop rather than recurring without cause.",
    explanation:
      "Top credit commits to repairing a genuine rupture and names a does-acknowledgment-restore-safety test; 'it's pure transference, interpret the dyad' is the overreach defeated by the fact that the therapist truly erred.",
  },
  {
    itemType: "mc",
    prompt:
      "Mid-session a patient escalates into shouting that her therapist is 'worthless garbage' and throws a pen at the wall, watching to see whether he retaliates or crumbles. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She may be testing how he handles her anger; we could try to stay steady.",
        credit: 0.6,
      },
      {
        text: "She's simply being abusive and manipulative, so the right response is to threaten to end therapy unless she behaves.",
        credit: 0,
      },
      {
        text: "The strongest reading is that a sadistic-attacker/annihilated-victim dyad is live in the room and she is testing whether her aggression destroys the therapist or provokes counterattack; the TFP move is to contain it — stay intact, hold the safety frame, and name the dyad ('something in you needs to know if your rage wrecks me or makes me strike back') rather than retaliate or collapse; test whether calm containment plus naming de-escalates her, whether the attack aims at testing his survival rather than at a real provocation, and whether the pattern recurs when she fears closeness.",
        credit: 1.0,
      },
      {
        text: "She is very angry and aggressive in the session today.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The strongest reading is that a sadistic-attacker/annihilated-victim dyad is live in the room and she is testing whether her aggression destroys the therapist or provokes counterattack; the TFP move is to contain it — stay intact, hold the safety frame, and name the dyad ('something in you needs to know if your rage wrecks me or makes me strike back') rather than retaliate or collapse; test whether calm containment plus naming de-escalates her, whether the attack aims at testing his survival rather than at a real provocation, and whether the pattern recurs when she fears closeness.",
    explanation:
      "Full credit reads an attacker/victim dyad being tested and commits to containment plus naming, with a does-containment-de-escalate test; 'she's just abusive, threaten to quit' is the overreach that misses the dyad and the survival test.",
  },
  {
    itemType: "mc",
    prompt:
      "After many months of TFP, a patient who used to flip between 'you're my savior' and 'you're a fraud' now says, in a calm session, that her therapist is 'helpful but sometimes frustrating, and that's okay.' Which conclusion best follows?",
    mcOptions: [
      {
        text: "She might be seeing her therapist in a more balanced way; we could note the change.",
        credit: 0.6,
      },
      {
        text: "Therapy can't really change someone's core personality, so this is probably just a good mood that means nothing.",
        credit: 0,
      },
      {
        text: "The strongest reading is that this is early identity integration — the all-good and all-bad images of the therapist are starting to fuse into one whole, ambivalently held person, which is the central goal of TFP — and the move is to mark and consolidate it; test whether the integrated view holds under a real disappointment rather than instantly splitting again, whether the same fusing shows up in how she describes people outside therapy, and whether her self-descriptions grow correspondingly more stable and less contradictory.",
        credit: 1.0,
      },
      {
        text: "She has calmer, mixed feelings about her therapist now.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The strongest reading is that this is early identity integration — the all-good and all-bad images of the therapist are starting to fuse into one whole, ambivalently held person, which is the central goal of TFP — and the move is to mark and consolidate it; test whether the integrated view holds under a real disappointment rather than instantly splitting again, whether the same fusing shows up in how she describes people outside therapy, and whether her self-descriptions grow correspondingly more stable and less contradictory.",
    explanation:
      "Top credit reads the whole-object, ambivalent view as early identity integration and names a does-it-hold-under-disappointment test; 'personality can't change, it means nothing' is the nihilistic dodge that refuses to read a measurable shift.",
  },
  {
    itemType: "mc",
    prompt:
      "A patient who grew up under a scrutinizing, never-satisfied mother begins every session convinced her therapist is silently judging and grading her, and performs answers to 'pass.' Which conclusion best follows?",
    mcOptions: [
      {
        text: "She may be expecting judgment that isn't there; we could explore where that comes from.",
        credit: 0.6,
      },
      {
        text: "He just needs to smile more and constantly reassure her she's doing well; it's only a matter of putting her at ease.",
        credit: 0,
      },
      {
        text: "She feels her therapist is judging her.",
        credit: 0.3,
      },
      {
        text: "The strongest reading is a critical-examiner/judged-child dyad imported into the room — the neutral, attentive therapist is experienced as the never-satisfied evaluator, and the patient as the one always failing inspection — so the move is to name the dyad rather than just reassure her; test whether naming it ('you seem certain I'm grading you the way you were always graded') eases the performing, whether the conviction of being judged tracks the old maternal pattern rather than anything he's actually done, and whether it recurs whenever she feels exposed.",
        credit: 1.0,
      },
    ],
    correctAnswer:
      "The strongest reading is a critical-examiner/judged-child dyad imported into the room — the neutral, attentive therapist is experienced as the never-satisfied evaluator, and the patient as the one always failing inspection — so the move is to name the dyad rather than just reassure her; test whether naming it ('you seem certain I'm grading you the way you were always graded') eases the performing, whether the conviction of being judged tracks the old maternal pattern rather than anything he's actually done, and whether it recurs whenever she feels exposed.",
    explanation:
      "Full credit names the examiner/judged-child dyad and a does-naming-it-ease-the-performing test; 'just smile and reassure her' is the only-rapport dodge that bypasses the transference instead of interpreting it.",
  },
  {
    itemType: "mc",
    prompt:
      "A patient who idolized her therapist for months arrives furious after he took a long-planned vacation, declaring he is 'just like all the rest — selfish and useless' and demanding to know why she ever trusted him. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Her sudden anger might be a reaction to his being away; we could look at the timing.",
        credit: 0.6,
      },
      {
        text: "She's right that any therapist who takes a vacation is selfish and unreliable, so the rupture simply proves he's a bad fit.",
        credit: 0,
      },
      {
        text: "The strongest reading is a split flipping in real time: the planned absence introduced disappointment into the all-good image, and rather than hold a therapist who is both caring and separately lived, the split converts him wholesale into the all-bad, abandoning figure; the move is to name the flip and its trigger; test whether the devaluation tracks the let-down (the vacation) rather than any new information about his character, whether the same idealize-then-trash pattern marks her other relationships, and whether naming the split begins to let the two images coexist.",
        credit: 1.0,
      },
      {
        text: "She is angry that her therapist went away on vacation.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The strongest reading is a split flipping in real time: the planned absence introduced disappointment into the all-good image, and rather than hold a therapist who is both caring and separately lived, the split converts him wholesale into the all-bad, abandoning figure; the move is to name the flip and its trigger; test whether the devaluation tracks the let-down (the vacation) rather than any new information about his character, whether the same idealize-then-trash pattern marks her other relationships, and whether naming the split begins to let the two images coexist.",
    explanation:
      "Top credit reads the devaluation as a split flipping on a let-down and names a does-it-track-the-trigger test; 'a therapist who vacations really is selfish' is the overreach the ordinary, planned absence defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A supervisor reviewing a stalled case insists the only problem is that the therapist 'hasn't built enough rapport,' and tells him to be warmer and more agreeable — ignoring that the patient swings between adoring and despising him each week. Which conclusion best follows?",
    mcOptions: [
      {
        text: "More rapport alone might not be the answer; we could consider what the swings mean.",
        credit: 0.6,
      },
      {
        text: "The patient's feelings about the therapist change a lot from week to week.",
        credit: 0.3,
      },
      {
        text: "The supervisor is right that this is purely a rapport problem, so being consistently warmer and more agreeable will fix the swings.",
        credit: 0,
      },
      {
        text: "The strongest reading is that the weekly swings between adoration and contempt are split dyads being activated in the relationship — the very material TFP works with — so 'just be warmer' would feed the idealization and postpone the work, not resolve it; the supported move is to keep a steady frame and interpret the activated dyad; test whether naming the swings reduces them where added warmth has not, whether the flips track disappointments rather than any deficit of niceness, and whether more agreeableness simply intensifies the next devaluation.",
        credit: 1.0,
      },
    ],
    correctAnswer:
      "The strongest reading is that the weekly swings between adoration and contempt are split dyads being activated in the relationship — the very material TFP works with — so 'just be warmer' would feed the idealization and postpone the work, not resolve it; the supported move is to keep a steady frame and interpret the activated dyad; test whether naming the swings reduces them where added warmth has not, whether the flips track disappointments rather than any deficit of niceness, and whether more agreeableness simply intensifies the next devaluation.",
    explanation:
      "Full credit reads the swings as split dyads to interpret and names a does-naming-beat-added-warmth test; 'it's purely a rapport problem' is the only-rapport dodge that ignores the transference driving the flips.",
  },
  {
    itemType: "mc",
    prompt:
      "A patient who describes a fragile, depended-on mother spends sessions 'managing' her therapist — scheduling him, worrying he looks tired, insisting she's fine so she won't burden him. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She might be taking care of her therapist instead of being cared for; we could notice that.",
        credit: 0.6,
      },
      {
        text: "She's simply a considerate person, so there's nothing here to interpret.",
        credit: 0,
      },
      {
        text: "The strongest reading is a role reversal of a fragile-caregiver/parentified-child dyad: the patient has taken the caretaking role and cast the therapist as the depleted one who must be protected, replaying the bond from the caretaker's end so her own needs stay hidden; the move is to name the reversal; test whether naming it ('you've become the one looking after me, so your own needs disappear') lets her neediness surface, whether the caretaking mirrors her described role at home, and whether it recurs whenever she starts to depend on him.",
        credit: 1.0,
      },
      {
        text: "She spends her sessions worrying about her therapist.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The strongest reading is a role reversal of a fragile-caregiver/parentified-child dyad: the patient has taken the caretaking role and cast the therapist as the depleted one who must be protected, replaying the bond from the caretaker's end so her own needs stay hidden; the move is to name the reversal; test whether naming it ('you've become the one looking after me, so your own needs disappear') lets her neediness surface, whether the caretaking mirrors her described role at home, and whether it recurs whenever she starts to depend on him.",
    explanation:
      "Top credit identifies the role reversal of a caregiver/parentified-child dyad and a does-naming-it-surface-her-needs test; 'she's just considerate, nothing to read' is the dodge that the home-matching, need-hiding pattern defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "On an inpatient unit, a patient praises her TFP therapist as the only competent one while branding the nurses cruel and incompetent; the staff begin to argue with one another about her care. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The team disagreement might be linked to how she sees different staff; we could compare notes.",
        credit: 0.6,
      },
      {
        text: "She likes her therapist and dislikes the nurses.",
        credit: 0.3,
      },
      {
        text: "The nurses must simply be doing a worse job, so the solution is to assign her only to the therapist she likes.",
        credit: 0,
      },
      {
        text: "The strongest reading is splitting played out across the team — the all-good and all-bad images are distributed onto different staff, and the team's conflict is her internal split externalized — so the move is to recognize it, keep the team aligned, and interpret the split rather than take sides; test whether the team's friction eases once staff compare notes and refuse the all-good/all-bad casting, whether the praise-and-condemnation tracks who last disappointed her, and whether naming the pattern to her reduces the splitting.",
        credit: 1.0,
      },
    ],
    correctAnswer:
      "The strongest reading is splitting played out across the team — the all-good and all-bad images are distributed onto different staff, and the team's conflict is her internal split externalized — so the move is to recognize it, keep the team aligned, and interpret the split rather than take sides; test whether the team's friction eases once staff compare notes and refuse the all-good/all-bad casting, whether the praise-and-condemnation tracks who last disappointed her, and whether naming the pattern to her reduces the splitting.",
    explanation:
      "Full credit reads staff splitting as the internal split externalized and names a does-the-team-friction-ease-when-aligned test; 'the nurses are just worse' is the overreach the team-wide, disappointment-tracking pattern defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A therapist notices that whenever he reflects a patient's feeling accurately, she immediately accuses him of 'putting words in her mouth' and controlling her, then withdraws. He plans to simply stop reflecting. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Reflecting might be triggering her; we could adjust the approach.",
        credit: 0.6,
      },
      {
        text: "The strongest reading is that an intrusive-controller/invaded-self dyad is activated by closeness — being understood is experienced as being controlled — so abandoning reflection would collude with the dyad rather than resolve it; the move is to name the dyad and predict that naming it changes the interaction; test whether interpreting it ('the moment I get close, I seem to become someone forcing myself into you') reduces the accusing withdrawal, whether the reaction follows accurate empathy specifically rather than clumsy phrasing, and whether the same control-versus-closeness pattern marks her relationships.",
        credit: 1.0,
      },
      {
        text: "She doesn't like it when her therapist reflects her feelings.",
        credit: 0.3,
      },
      {
        text: "He should just stop reflecting and keep things superficial so she stays comfortable.",
        credit: 0,
      },
    ],
    correctAnswer:
      "The strongest reading is that an intrusive-controller/invaded-self dyad is activated by closeness — being understood is experienced as being controlled — so abandoning reflection would collude with the dyad rather than resolve it; the move is to name the dyad and predict that naming it changes the interaction; test whether interpreting it ('the moment I get close, I seem to become someone forcing myself into you') reduces the accusing withdrawal, whether the reaction follows accurate empathy specifically rather than clumsy phrasing, and whether the same control-versus-closeness pattern marks her relationships.",
    explanation:
      "Top credit names the controller/invaded-self dyad triggered by closeness and a does-interpreting-it-reduce-the-withdrawal test; 'just stop reflecting and stay superficial' is the dodge that colludes with the dyad instead of working it.",
  },
  {
    itemType: "mc",
    prompt:
      "A patient in crisis demands her therapist promise to answer late-night calls and says that refusing means he wants her to die; he is tempted to abandon the agreed crisis plan and promise unlimited availability. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Promising unlimited availability might backfire; we could revisit the crisis plan together.",
        credit: 0.6,
      },
      {
        text: "She's right that a caring therapist would always pick up, so he should promise unlimited late-night availability.",
        credit: 0,
      },
      {
        text: "The strongest reading is that the demand activates a life-or-death abandoning-figure dyad, and that collapsing the frame would confirm the dyad (only total availability counts as care) while undermining safety planning rather than improving it; the supported move is to hold the agreed crisis plan, keep her safe through it, and interpret the dyad; test whether naming it ('anything short of being always-on turns me into someone who wants you gone') lowers the all-or-nothing demand, whether the 'you want me to die' reaction tracks the limit rather than real abandonment, and whether the established crisis plan in fact keeps her safe.",
        credit: 1.0,
      },
      {
        text: "She wants her therapist to be available during late-night crises.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The strongest reading is that the demand activates a life-or-death abandoning-figure dyad, and that collapsing the frame would confirm the dyad (only total availability counts as care) while undermining safety planning rather than improving it; the supported move is to hold the agreed crisis plan, keep her safe through it, and interpret the dyad; test whether naming it ('anything short of being always-on turns me into someone who wants you gone') lowers the all-or-nothing demand, whether the 'you want me to die' reaction tracks the limit rather than real abandonment, and whether the established crisis plan in fact keeps her safe.",
    explanation:
      "Full credit holds the frame, keeps safety through the plan, and names a does-naming-the-dyad-lower-the-demand test; 'promise unlimited availability' is the dodge that collapses the frame and confirms the dyad.",
  },
  {
    itemType: "mc",
    prompt:
      "A therapist privately formulates that, in the room, his patient is treating him as a cold critic while she plays the helpless failure — exactly her described bond with her father — and wonders whether to voice it. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Voicing the pattern might help; we could try naming it.",
        credit: 0.6,
      },
      {
        text: "He thinks she's relating to him the way she related to her father.",
        credit: 0.3,
      },
      {
        text: "Interpreting relationships is guesswork — you can never really know what's happening between two people — so he should keep it to himself.",
        credit: 0,
      },
      {
        text: "The strongest reading is that the here-and-now dyad (cold critic / helpless failure) is the disorder live in the session, and the central TFP intervention is to name it and predict that naming it shifts the interaction; the move is to interpret the activated dyad rather than wait it out; test whether voicing it ('right now I seem to be the critic and you the one who can't get it right') changes the felt atmosphere in the session, whether the configuration matches her account of her father, and whether the same dyad recurs and responds to being named over time.",
        credit: 1.0,
      },
    ],
    correctAnswer:
      "The strongest reading is that the here-and-now dyad (cold critic / helpless failure) is the disorder live in the session, and the central TFP intervention is to name it and predict that naming it shifts the interaction; the move is to interpret the activated dyad rather than wait it out; test whether voicing it ('right now I seem to be the critic and you the one who can't get it right') changes the felt atmosphere in the session, whether the configuration matches her account of her father, and whether the same dyad recurs and responds to being named over time.",
    explanation:
      "Top credit commits to interpreting the live dyad and names a does-voicing-it-change-the-atmosphere test; 'you can never know what's between two people' is the nihilistic dodge that refuses to read the dyad at all.",
  },
];

const hybrid: HomeworkItem[] = [
  {
    itemType: "hybrid",
    prompt:
      "A patient who has been collaborative for weeks turns silent and guarded the session after her therapist gently disagreed with her, treating him as though he is now firmly 'against' her. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She seems quieter and more guarded after the disagreement.",
        credit: 0.3,
      },
      {
        text: "The strongest reading is that a single mild disagreement activated an ally-turned-enemy dyad — the collaborative partner is suddenly recast as an opponent and she as the one under attack — so the move is to name the dyad rather than soften the disagreement away; test whether naming it ('one disagreement seems to have turned me into someone against you') loosens the guardedness, whether the shift is far larger than the disagreement warrants, and whether the same with-me-or-against-me flip recurs at other small frictions.",
        credit: 1.0,
      },
      {
        text: "She's just sulking to punish him for not agreeing; he should wait until she gets over it.",
        credit: 0,
      },
      {
        text: "The disagreement might have stirred something; we could gently look at it.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'a mild disagreement flipped me into an enemy dyad' lead from the rival 'she's reasonably annoyed and will pass,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: name the flip ('one disagreement seems to have made me your opponent') and watch whether her guardedness eases within the session and whether the same all-or-nothing shift recurs at other tiny frictions — a quick shift plus a recurring pattern points to an activated dyad. My lead is refuted if the reaction is proportionate, settles on its own without any naming, and never recurs at small disagreements, which would make it ordinary annoyance.",
      yieldAnchors: [
        "Weeks of collaborative work",
        "A single gentle disagreement",
        "She now treats him as 'against' her",
      ],
      riskAnchors: [
        "Naming the flip loosens the guardedness",
        "The reaction far exceeds the disagreement",
        "The with-me-or-against-me flip recurs at small frictions",
      ],
      defeatedBy: [
        "The reaction is proportionate and passes on its own",
        "It never recurs at other minor disagreements",
      ],
    },
    correctAnswer:
      "The strongest reading is that a single mild disagreement activated an ally-turned-enemy dyad — the collaborative partner is suddenly recast as an opponent and she as the one under attack — so the move is to name the dyad rather than soften the disagreement away; test whether naming it ('one disagreement seems to have turned me into someone against you') loosens the guardedness, whether the shift is far larger than the disagreement warrants, and whether the same with-me-or-against-me flip recurs at other small frictions.",
    explanation:
      "Full credit names the ally-turned-enemy dyad and is paired with a does-naming-it-loosen-the-guardedness test; 'she's just sulking to punish him' is the overreach the disproportionate, patterned flip defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A patient who repeatedly describes feeling unlovable begins arriving in revealing clothes and steering each session toward whether her therapist finds her attractive, growing dismissive when he keeps the focus on the work. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The strongest reading is that a desired-object/desiring-other dyad has been activated to test her worth — making the therapist want her would 'prove' she is lovable, and being kept to the work is felt as rejection — so the move is to hold the frame and name the dyad rather than be flattered or recoil; test whether naming it ('it seems that unless I want you, you must be unlovable') eases the seductiveness, whether the bid intensifies precisely when she feels most worthless, and whether the same prove-I'm-wanted pattern marks her other relationships.",
        credit: 1.0,
      },
      {
        text: "She seems to be acting seductively toward her therapist.",
        credit: 0.3,
      },
      {
        text: "She's just trying to manipulate him with sex, so he should warn her to stop or end the therapy.",
        credit: 0,
      },
      {
        text: "Her behavior might be about more than attraction; we could explore it.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'this is a prove-I'm-wanted dyad' lead from the rival 'she's simply attracted to him,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: track whether the seductive bids spike specifically when she feels most worthless and ease once the dyad ('unless I'm wanted I must be unlovable') is named — a worthlessness-linked surge that responds to naming points to the dyad, not simple attraction. My lead is refuted if the behavior bears no relation to her self-worth and continues unchanged after the dyad is accurately named and the frame held.",
      yieldAnchors: [
        "She repeatedly feels unlovable",
        "She steers sessions toward being found attractive",
        "She turns dismissive when kept to the work",
      ],
      riskAnchors: [
        "Naming the dyad eases the seductiveness",
        "Bids intensify when she feels most worthless",
        "A prove-I'm-wanted pattern marks other relationships",
      ],
      defeatedBy: [
        "The bids bear no relation to her self-worth",
        "The behavior is unchanged after the dyad is named",
      ],
    },
    correctAnswer:
      "The strongest reading is that a desired-object/desiring-other dyad has been activated to test her worth — making the therapist want her would 'prove' she is lovable, and being kept to the work is felt as rejection — so the move is to hold the frame and name the dyad rather than be flattered or recoil; test whether naming it ('it seems that unless I want you, you must be unlovable') eases the seductiveness, whether the bid intensifies precisely when she feels most worthless, and whether the same prove-I'm-wanted pattern marks her other relationships.",
    explanation:
      "Full credit reads a prove-I'm-wanted dyad and pairs it with a does-it-track-worthlessness-and-respond-to-naming test; 'she's just manipulating him with sex' is the overreach the worthlessness link defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "After an unusually warm, connected session, a patient opens the next one by coldly informing her therapist that she's been thinking he is 'actually pretty incompetent' and is considering quitting. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She's changed her mind about her therapist's competence.",
        credit: 0.3,
      },
      {
        text: "The strongest reading is that the warmth itself triggered a devaluation: closeness raised the threat of dependence and abandonment, so a contemptuous-judge/incompetent-other dyad is deployed to push the therapist away and regain safety — the cold attack follows the connection, not any failure of his; the move is to name the sequence; test whether the devaluation reliably follows close sessions rather than poor ones, whether naming it ('the closer we got, the more I had to find me useless') softens the urge to quit, and whether the same retreat-after-closeness pattern marks her life.",
        credit: 1.0,
      },
      {
        text: "She's right that he's incompetent — the good session was a fluke and she should probably quit.",
        credit: 0,
      },
      {
        text: "The timing after a good session is striking; we could look at what closeness stirs up.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'closeness triggered a defensive devaluation' lead from the rival 'she has a fair, growing doubt about his competence,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: check whether the devaluation reliably follows the warmest, most connected sessions rather than genuinely poor ones, and whether naming the closeness-then-retreat sequence softens the urge to quit — that timing pattern points to a defense against dependence. My lead is refuted if her competence concerns track real lapses in his work and persist regardless of how close the prior session was.",
      yieldAnchors: [
        "An unusually warm, connected session",
        "She opens the next session with cold contempt",
        "She is suddenly considering quitting",
      ],
      riskAnchors: [
        "Devaluation follows close sessions, not poor ones",
        "Naming the sequence softens the urge to quit",
        "A retreat-after-closeness pattern marks her life",
      ],
      defeatedBy: [
        "Her doubts track real lapses in his work",
        "The contempt is unrelated to how close the prior session was",
      ],
    },
    correctAnswer:
      "The strongest reading is that the warmth itself triggered a devaluation: closeness raised the threat of dependence and abandonment, so a contemptuous-judge/incompetent-other dyad is deployed to push the therapist away and regain safety — the cold attack follows the connection, not any failure of his; the move is to name the sequence; test whether the devaluation reliably follows close sessions rather than poor ones, whether naming it ('the closer we got, the more I had to find me useless') softens the urge to quit, and whether the same retreat-after-closeness pattern marks her life.",
    explanation:
      "Full credit ties the devaluation to a defense against closeness and pairs it with a does-it-follow-the-warm-sessions test; 'he really is incompetent, quit' is the overreach the closeness-linked timing defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A patient spends sessions issuing crisp instructions about how her therapist should 'do his job better,' treating his comments as the bumbling efforts of an underling she must supervise. She has described a contemptuous, demanding boss who runs her ragged. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She might be replaying a work dynamic with her therapist; we could notice that.",
        credit: 0.6,
      },
      {
        text: "The strongest reading is a role reversal of a contemptuous-boss/inadequate-underling dyad: she has taken the demanding-boss position she suffers under and cast the therapist as the bumbling subordinate, living the bond from the powerful end so she isn't the one found wanting; the move is to name the reversal; test whether naming it ('the demanding boss who runs you ragged is in the room — but now I'm the one falling short') changes the supervising tone, whether the role mirrors her described boss, and whether it recurs whenever she feels exposed to judgment.",
        credit: 1.0,
      },
      {
        text: "She's bossing her therapist around in sessions.",
        credit: 0.3,
      },
      {
        text: "She's just being arrogant and controlling, so he should put her in her place.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'role reversal of a boss/underling dyad' lead from the rival 'she's simply a controlling person,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: name the reversal and check whether the supervising tone surfaces specifically when she feels exposed to judgment and whether it mirrors the contemptuous boss she's described — a fear-linked, template-matching pattern points to a role reversal. My lead is refuted if the bossiness is constant across all states, bears no resemblance to her boss, and doesn't shift when the reversal is accurately named.",
      yieldAnchors: [
        "She supervises the therapist like an underling",
        "She treats his comments as bumbling",
        "She describes a contemptuous, demanding boss",
      ],
      riskAnchors: [
        "Naming the reversal changes the supervising tone",
        "The role mirrors her described boss",
        "It recurs when she feels exposed to judgment",
      ],
      defeatedBy: [
        "The bossiness is constant regardless of feeling judged",
        "It bears no resemblance to her described boss",
      ],
    },
    correctAnswer:
      "The strongest reading is a role reversal of a contemptuous-boss/inadequate-underling dyad: she has taken the demanding-boss position she suffers under and cast the therapist as the bumbling subordinate, living the bond from the powerful end so she isn't the one found wanting; the move is to name the reversal; test whether naming it ('the demanding boss who runs you ragged is in the room — but now I'm the one falling short') changes the supervising tone, whether the role mirrors her described boss, and whether it recurs whenever she feels exposed to judgment.",
    explanation:
      "Full credit names the role reversal of a boss/underling dyad and a does-naming-it-change-the-tone test; 'she's just arrogant, put her in her place' is the overreach that the fear-linked, boss-matching pattern defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A therapist arrives flustered and ten minutes late after losing his notes, then double-books and has to cut the session short. The patient, usually steady, is hurt and says she feels like an afterthought; the therapist files it under 'her abandonment transference.' Which conclusion best follows?",
    mcOptions: [
      {
        text: "Some of this hurt is probably a fair reaction to real disorganization; we could acknowledge it.",
        credit: 0.6,
      },
      {
        text: "It's her abandonment dyad firing, so he should interpret it rather than apologize for being late and double-booking.",
        credit: 0,
      },
      {
        text: "She's hurt after a disorganized, shortened session.",
        credit: 0.3,
      },
      {
        text: "The strongest reading is that this is a real, warranted rupture rather than transference to interpret away: the therapist genuinely treated her carelessly, and feeling like an afterthought is an accurate response, so the move is to own the lapses and repair before reading any deeper meaning; test whether a sincere acknowledgment and reliable next sessions restore her trust, whether her hurt is proportionate to real carelessness rather than a trivial trigger, and whether it resolves once his organization does rather than recurring without cause.",
        credit: 1.0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'this is a real rupture to repair' lead from the rival 'this is her abandonment transference to interpret,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: sincerely acknowledge the real lapses and run the next sessions reliably, then watch whether her trust returns — repair working where interpretation would have dismissed her points to a warranted rupture. My lead is refuted if the same feeling of being an afterthought recurs with full force even when he is perfectly organized and attentive, which would point back toward a transference pattern.",
      yieldAnchors: [
        "The therapist was late, lost notes, and double-booked",
        "He cut the session short",
        "She, usually steady, feels like an afterthought",
      ],
      riskAnchors: [
        "Acknowledgment and reliability restore her trust",
        "Her hurt is proportionate to real carelessness",
        "It resolves once his organization does",
      ],
      defeatedBy: [
        "The afterthought feeling recurs even when he's attentive",
        "Her reaction is wildly out of proportion to the lapses",
      ],
    },
    correctAnswer:
      "The strongest reading is that this is a real, warranted rupture rather than transference to interpret away: the therapist genuinely treated her carelessly, and feeling like an afterthought is an accurate response, so the move is to own the lapses and repair before reading any deeper meaning; test whether a sincere acknowledgment and reliable next sessions restore her trust, whether her hurt is proportionate to real carelessness rather than a trivial trigger, and whether it resolves once his organization does rather than recurring without cause.",
    explanation:
      "Full credit commits to repairing a genuine rupture and pairs it with a does-acknowledgment-restore-trust test; 'it's just her abandonment transference, interpret it' is the overreach defeated by the therapist's real carelessness.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A patient who has spoken movingly about wanting closeness begins missing or arriving very late to sessions whenever the work goes well, then apologizes profusely and books extra time. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She's just disorganized about appointments; he should focus on better scheduling.",
        credit: 0,
      },
      {
        text: "The strongest reading is that the lateness is an enactment of an approach-avoidance dyad: as closeness grows, the threat of dependence and abandonment rises, so distancing through absence regulates the fear — and the profuse apology plus extra booking pulls the therapist back in; the move is to name the enactment rather than just tighten scheduling; test whether the missed and late sessions cluster after good ones, whether naming the pattern ('we get close, then you need distance') reduces the no-shows, and whether the same closeness-then-flight pattern marks her relationships.",
        credit: 1.0,
      },
      {
        text: "She keeps missing or coming late to her sessions.",
        credit: 0.3,
      },
      {
        text: "The timing might mean something; we could keep an eye on the no-shows.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'the lateness enacts a closeness-then-flight dyad' lead from the rival 'she's simply disorganized,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: chart whether the missed and very-late sessions cluster right after the warmest, most productive ones and whether naming the closeness-then-distance pattern reduces them — that timing link points to an enactment, not mere disorganization. My lead is refuted if her absences are randomly scattered regardless of how the work is going and are unaffected when the pattern is named.",
      yieldAnchors: [
        "She speaks movingly of wanting closeness",
        "She misses or comes late when work goes well",
        "She over-apologizes and books extra time",
      ],
      riskAnchors: [
        "Absences cluster after good sessions",
        "Naming the pattern reduces the no-shows",
        "A closeness-then-flight pattern marks her relationships",
      ],
      defeatedBy: [
        "Absences are random regardless of how the work is going",
        "Naming the pattern changes nothing",
      ],
    },
    correctAnswer:
      "The strongest reading is that the lateness is an enactment of an approach-avoidance dyad: as closeness grows, the threat of dependence and abandonment rises, so distancing through absence regulates the fear — and the profuse apology plus extra booking pulls the therapist back in; the move is to name the enactment rather than just tighten scheduling; test whether the missed and late sessions cluster after good ones, whether naming the pattern ('we get close, then you need distance') reduces the no-shows, and whether the same closeness-then-flight pattern marks her relationships.",
    explanation:
      "Full credit reads the no-shows as an approach-avoidance enactment and pairs it with a do-absences-cluster-after-good-sessions test; 'she's just disorganized' is the dodge the post-closeness clustering defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A patient praises her TFP therapist endlessly while bitterly trashing her former therapist as 'a cold, useless fraud,' and wants her current therapist to agree how terrible the last one was. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She prefers her current therapist to her previous one.",
        credit: 0.3,
      },
      {
        text: "The strongest reading is splitting across time: the all-good image now resting on the current therapist and the all-bad image dumped on the former one are two halves of the same instability, and being recruited to agree would harden the split rather than resolve it; the move is to decline the casting and name the pattern; test whether the same idealize-then-devalue arc that swallowed the last therapist begins to surface toward the current one, whether the trashing tracks past disappointments rather than fair appraisal, and whether naming the split loosens the all-good/all-bad casting.",
        credit: 1.0,
      },
      {
        text: "The last therapist was clearly a fraud, so the current one should agree and validate her.",
        credit: 0,
      },
      {
        text: "Her view of the old therapist might be one-sided; we could be a bit cautious about agreeing.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'this is splitting across time' lead from the rival 'her current therapist really is better and her account is fair,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: decline to join the all-bad casting and watch whether the same idealize-then-devalue arc that consumed the former therapist starts to appear toward the current one, especially after disappointments — that recurring arc points to splitting. My lead is refuted if her account of the old therapist holds up as a balanced, evidence-based appraisal and she sustains a stable, whole-object view of the current therapist through real letdowns.",
      yieldAnchors: [
        "Endless praise for the current therapist",
        "Bitter trashing of the former one",
        "She wants the current therapist to agree",
      ],
      riskAnchors: [
        "The idealize-then-devalue arc starts toward the current therapist",
        "The trashing tracks past disappointments, not fair appraisal",
        "Naming the split loosens the all-good/all-bad casting",
      ],
      defeatedBy: [
        "Her account of the old therapist is balanced and evidence-based",
        "She holds a stable whole-object view through real letdowns",
      ],
    },
    correctAnswer:
      "The strongest reading is splitting across time: the all-good image now resting on the current therapist and the all-bad image dumped on the former one are two halves of the same instability, and being recruited to agree would harden the split rather than resolve it; the move is to decline the casting and name the pattern; test whether the same idealize-then-devalue arc that swallowed the last therapist begins to surface toward the current one, whether the trashing tracks past disappointments rather than fair appraisal, and whether naming the split loosens the all-good/all-bad casting.",
    explanation:
      "Full credit reads splitting across time and pairs it with a does-the-arc-recur-toward-the-current-therapist test; 'the last one was a fraud, agree with her' is the overreach that joining the split would only harden.",
  },
  {
    itemType: "hybrid",
    prompt:
      "As a session reaches a tender moment about her childhood, a patient suddenly goes flat and far away, says she 'can't feel anything,' and seems not quite present in the room. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She's gone quiet and detached in the session.",
        credit: 0.3,
      },
      {
        text: "She's just bored or shutting down because the therapy isn't working, so he should change the subject.",
        credit: 0,
      },
      {
        text: "The strongest reading is that closeness to painful material triggered a protective withdrawal — a dissociative retreat in which an overwhelmed-self/unreachable-figure dyad takes over to escape unbearable affect — so the move is to slow down, help her stay present, and name what just happened rather than push on or drop it; test whether the flatness reliably appears at the most affect-laden moments, whether gently naming it ('something here felt too much, and you stepped away') brings her back into the room, and whether the same shutdown recurs when feeling runs high.",
        credit: 1.0,
      },
      {
        text: "The timing near painful material is notable; we could ease off a little.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'this is a protective dissociative retreat from overwhelming affect' lead from the rival 'she's simply bored or disengaged,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: note whether the flatness appears precisely at the most affect-laden moments and whether gently naming it brings her back into the room — affect-triggered shutdown that responds to grounding points to a protective retreat, not boredom. My lead is refuted if she goes blank at neutral, low-feeling moments and stays disengaged regardless of how emotionally charged the material is.",
      yieldAnchors: [
        "Detachment hits at a tender childhood moment",
        "She says she can't feel anything",
        "She seems not quite present in the room",
      ],
      riskAnchors: [
        "Flatness appears at the most affect-laden moments",
        "Naming it gently brings her back",
        "The shutdown recurs when feeling runs high",
      ],
      defeatedBy: [
        "She goes blank at neutral, low-feeling moments",
        "She stays disengaged regardless of emotional charge",
      ],
    },
    correctAnswer:
      "The strongest reading is that closeness to painful material triggered a protective withdrawal — a dissociative retreat in which an overwhelmed-self/unreachable-figure dyad takes over to escape unbearable affect — so the move is to slow down, help her stay present, and name what just happened rather than push on or drop it; test whether the flatness reliably appears at the most affect-laden moments, whether gently naming it ('something here felt too much, and you stepped away') brings her back into the room, and whether the same shutdown recurs when feeling runs high.",
    explanation:
      "Full credit reads the shutdown as a protective dissociative retreat from affect and pairs it with a does-it-hit-the-charged-moments test; 'she's just bored, change the subject' is the dodge the affect-linked timing defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "Over a year of TFP, a patient who once experienced her therapist as a cold critic each week now mostly relates to him as a steady collaborator, and the cold-critic dyad surfaces only briefly and softens when he names it. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She seems to be getting along better with her therapist lately.",
        credit: 0.3,
      },
      {
        text: "You can't really measure something as fuzzy as a therapy relationship, so it's impossible to say anything changed.",
        credit: 0,
      },
      {
        text: "The strongest reading is that interpreting the dyad over time is doing its work: the cold-critic configuration now arises less often and yields when named, which is the predicted signature of an integrating internal world and the central mechanism of TFP; the move is to keep interpreting while consolidating the gains; test whether the dyad keeps surfacing less and softening faster when named, whether her self- and other-descriptions outside therapy grow more stable and whole, and whether the integrated stance holds under a real disappointment rather than collapsing back into all-good/all-bad.",
        credit: 1.0,
      },
      {
        text: "Naming the pattern seems to be helping; we could keep doing that.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'interpreting the dyad is driving real integration' lead from the rival 'she's just having a calmer stretch that means little,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: track whether the cold-critic dyad keeps arising less often and softening faster specifically after it's named, and whether her descriptions of others outside therapy grow more whole — naming-linked change plus spillover points to genuine integration. My lead is refuted if the calmer relating bears no relation to whether the dyad is interpreted and instantly collapses back into all-good/all-bad at the first real disappointment.",
      yieldAnchors: [
        "A year of TFP interpreting the cold-critic dyad",
        "The dyad now surfaces only briefly",
        "It softens when the therapist names it",
      ],
      riskAnchors: [
        "The dyad keeps surfacing less and softening faster when named",
        "Self- and other-descriptions outside therapy grow more whole",
        "The integrated stance holds under a real disappointment",
      ],
      defeatedBy: [
        "The calm is unrelated to whether the dyad is interpreted",
        "She collapses into all-good/all-bad at the first letdown",
      ],
    },
    correctAnswer:
      "The strongest reading is that interpreting the dyad over time is doing its work: the cold-critic configuration now arises less often and yields when named, which is the predicted signature of an integrating internal world and the central mechanism of TFP; the move is to keep interpreting while consolidating the gains; test whether the dyad keeps surfacing less and softening faster when named, whether her self- and other-descriptions outside therapy grow more stable and whole, and whether the integrated stance holds under a real disappointment rather than collapsing back into all-good/all-bad.",
    explanation:
      "Full credit reads less-frequent, naming-responsive dyads as the signature of integration and pairs it with a does-it-hold-under-disappointment test; 'you can't measure a relationship' is the nihilistic dodge that refuses to read a clear, trackable change.",
  },
];

const written: HomeworkItem[] = [
  {
    itemType: "written",
    prompt:
      "A patient who has warmly trusted her therapist for two months arrives one day cold and accusatory, certain he 'secretly can't stand her' and is only pretending to care; nothing unusual happened in the prior session, though she had felt unusually close and understood at the end of it. In one paragraph, propose the strongest conclusion about what is happening in the room and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that a split object-relations dyad has been activated by the closeness itself: feeling unusually understood raised the threat of depending on someone who could then abandon her, so the warm, caring therapist is suddenly converted into a secretly hostile, pretending figure — a contemptuous-rejecter/unwanted-child dyad live in the room — and the move is to name the dyad rather than defend his sincerity. This is a strong, falsifiable claim: it predicts the cold accusation followed the most connected session rather than any real coldness, that putting the shift into words ('the closer we got, the more I seem to have become someone who can't stand you') will soften the accusation within the session, and that the same idealize-then-recoil pattern will recur at other moments of closeness. I would test it by checking whether the reversal tracks closeness rather than any provocation, by naming the dyad and watching whether her iciness eases, and by looking for the same closeness-then-attack arc in her outside relationships — and I would revise toward a real rupture if it turned out he had actually slighted her, or if the reaction were proportionate, isolated, and gone on its own.",
      yieldAnchors: [
        "Two months of warm trust",
        "She had felt unusually close and understood",
        "She now insists he secretly can't stand her",
      ],
      riskAnchors: [
        "The reversal followed the most connected session",
        "Naming the dyad softens the accusation",
        "The closeness-then-recoil arc recurs elsewhere",
      ],
      defeatedBy: [
        "He had actually slighted her, making it a real rupture",
        "The reaction was proportionate, isolated, and self-resolving",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that a split object-relations dyad has been activated by the closeness itself: feeling unusually understood raised the threat of depending on someone who could then abandon her, so the warm, caring therapist is suddenly converted into a secretly hostile, pretending figure — a contemptuous-rejecter/unwanted-child dyad live in the room — and the move is to name the dyad rather than defend his sincerity. This is a strong, falsifiable claim: it predicts the cold accusation followed the most connected session rather than any real coldness, that putting the shift into words ('the closer we got, the more I seem to have become someone who can't stand you') will soften the accusation within the session, and that the same idealize-then-recoil pattern will recur at other moments of closeness. I would test it by checking whether the reversal tracks closeness rather than any provocation, by naming the dyad and watching whether her iciness eases, and by looking for the same closeness-then-attack arc in her outside relationships — and I would revise toward a real rupture if it turned out he had actually slighted her, or if the reaction were proportionate, isolated, and gone on its own.",
    explanation:
      "Under the inverted standard, 'you can't really know what's going on inside her' earns near-zero; top credit names the activated dyad triggered by closeness and a does-naming-it-soften-the-accusation test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "In session, a patient who describes a harshly critical mother grows cold and imperious, dissecting every word her therapist says as 'sloppy' and 'beneath a real professional,' and watches for him to shrink. In one paragraph, propose the strongest conclusion about the dyad in the room and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that this is a role reversal of a harsh-critic/worthless-one dyad: the patient has stepped into the position of the critical mother she has long suffered under and cast the therapist as the inadequate child, living the painful bond from the powerful end so that, for once, she is the judge rather than the judged. This is a strong, falsifiable claim: it predicts that the contempt will mirror how she has described her mother, that naming the reversal ('the harsh judge who used to land on you is in the room — only now I'm the one falling short') will loosen the imperious scrutiny, and that the same reversal will recur precisely when she feels most exposed to being judged herself. I would test it by comparing the tone to her account of her mother, by interpreting the reversal and watching whether the cold dissection eases, and by tracking whether it flares when her own vulnerability rises — and I would revise toward a real rupture if her criticisms turned out to be fair responses to genuine lapses in his work rather than a disproportionate, template-matching attack.",
      yieldAnchors: [
        "She describes a harshly critical mother",
        "She coldly dissects his every word as beneath a professional",
        "She watches for him to shrink",
      ],
      riskAnchors: [
        "The contempt mirrors her described mother",
        "Naming the reversal loosens the scrutiny",
        "It recurs when she feels exposed to judgment",
      ],
      defeatedBy: [
        "Her criticisms are fair responses to real lapses",
        "The attack is proportionate rather than template-matching",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that this is a role reversal of a harsh-critic/worthless-one dyad: the patient has stepped into the position of the critical mother she has long suffered under and cast the therapist as the inadequate child, living the painful bond from the powerful end so that, for once, she is the judge rather than the judged. This is a strong, falsifiable claim: it predicts that the contempt will mirror how she has described her mother, that naming the reversal ('the harsh judge who used to land on you is in the room — only now I'm the one falling short') will loosen the imperious scrutiny, and that the same reversal will recur precisely when she feels most exposed to being judged herself. I would test it by comparing the tone to her account of her mother, by interpreting the reversal and watching whether the cold dissection eases, and by tracking whether it flares when her own vulnerability rises — and I would revise toward a real rupture if her criticisms turned out to be fair responses to genuine lapses in his work rather than a disproportionate, template-matching attack.",
    explanation:
      "Near-zero goes to 'she's just an arrogant, difficult person' and to 'you can't psychoanalyze her motives'; top credit names the role reversal of a critic/worthless-one dyad and a does-naming-it-loosen-the-scrutiny test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A patient repeatedly demands that her therapist text her reassurance between sessions and extend appointments on the spot, insisting that any limit proves he is 'just like everyone who abandons me.' He is tempted to drop the agreed frame to prove he cares. In one paragraph, propose the strongest conclusion about what the evidence supports and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that the frame itself is activating an abandoning-caregiver/desperate-child dyad — each limit is experienced as proof of a withholding, uncaring figure — and that holding the frame while interpreting the dyad is the treatment, whereas collapsing it would confirm the dyad (only total availability counts as love) and undermine, not deepen, the work. This is a strong, falsifiable claim: it predicts the 'you abandon me like everyone' reaction will track the boundary rather than any real coldness on his part, that naming the dyad ('the limit turns me into someone who doesn't care, the way others have') will lower the between-session demands, and that the same pattern will repeat at every limit until it is worked through. I would test it by holding the agreed frame and interpreting it, then watching whether the demands and accusations decrease over time, by checking whether the reaction reliably follows limits rather than genuine lapses, and by noting whether the same all-or-nothing pattern marks her other relationships — and I would reconsider if a limit had in fact been needlessly harsh, making the protest a fair response rather than an activated dyad.",
      yieldAnchors: [
        "She demands reassurance texts and on-the-spot extensions",
        "Any limit 'proves' he abandons her like everyone",
        "He is tempted to drop the frame to prove he cares",
      ],
      riskAnchors: [
        "The reaction tracks the boundary, not real coldness",
        "Naming the dyad lowers the between-session demands",
        "The pattern repeats at every limit",
      ],
      defeatedBy: [
        "A limit was in fact needlessly harsh",
        "Her protest is a fair response rather than an activated dyad",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that the frame itself is activating an abandoning-caregiver/desperate-child dyad — each limit is experienced as proof of a withholding, uncaring figure — and that holding the frame while interpreting the dyad is the treatment, whereas collapsing it would confirm the dyad (only total availability counts as love) and undermine, not deepen, the work. This is a strong, falsifiable claim: it predicts the 'you abandon me like everyone' reaction will track the boundary rather than any real coldness on his part, that naming the dyad ('the limit turns me into someone who doesn't care, the way others have') will lower the between-session demands, and that the same pattern will repeat at every limit until it is worked through. I would test it by holding the agreed frame and interpreting it, then watching whether the demands and accusations decrease over time, by checking whether the reaction reliably follows limits rather than genuine lapses, and by noting whether the same all-or-nothing pattern marks her other relationships — and I would reconsider if a limit had in fact been needlessly harsh, making the protest a fair response rather than an activated dyad.",
    explanation:
      "The inverted standard gives near-zero to 'loosen the frame to prove you care'; top credit holds the frame, interprets the abandoning-caregiver dyad, and names a does-naming-it-lower-the-demands test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "An inpatient with BPD insists her TFP therapist is the only good clinician on the unit while condemning the nurses as cruel and incompetent; soon the staff are quarreling, some defending the patient and some resenting her. The team asks the therapist what is going on. In one paragraph, propose the strongest conclusion and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that the patient's internal split is being played out across the whole team: the all-good and all-bad images she cannot hold together inside herself are being distributed onto different staff, and the team's quarreling is that split externalized — so the cure is not to crown the 'good' staff and discipline the 'bad' ones but to keep the team aligned and interpret the splitting. This is a strong, falsifiable claim: it predicts that the staff's friction will ease once they compare notes and refuse the all-good/all-bad casting, that the praise and condemnation will track who most recently gratified or disappointed her rather than real differences in competence, and that naming the split to the patient will reduce it. I would test it by having the team share their experiences and present a united front, by watching whether the 'good' and 'bad' labels migrate as different staff disappoint or please her, and by interpreting the pattern with her and tracking whether the splitting softens — and I would revise if it turned out the nurses were genuinely providing poor care, which would make her complaints accurate rather than a split.",
      yieldAnchors: [
        "She idealizes the therapist and condemns the nurses",
        "The staff are quarreling over her care",
        "The team asks what is going on",
      ],
      riskAnchors: [
        "Friction eases once staff align and refuse the casting",
        "The good/bad labels track recent gratification or disappointment",
        "Naming the split to her reduces it",
      ],
      defeatedBy: [
        "The nurses are genuinely providing poor care",
        "Her complaints prove accurate rather than a split",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that the patient's internal split is being played out across the whole team: the all-good and all-bad images she cannot hold together inside herself are being distributed onto different staff, and the team's quarreling is that split externalized — so the cure is not to crown the 'good' staff and discipline the 'bad' ones but to keep the team aligned and interpret the splitting. This is a strong, falsifiable claim: it predicts that the staff's friction will ease once they compare notes and refuse the all-good/all-bad casting, that the praise and condemnation will track who most recently gratified or disappointed her rather than real differences in competence, and that naming the split to the patient will reduce it. I would test it by having the team share their experiences and present a united front, by watching whether the 'good' and 'bad' labels migrate as different staff disappoint or please her, and by interpreting the pattern with her and tracking whether the splitting softens — and I would revise if it turned out the nurses were genuinely providing poor care, which would make her complaints accurate rather than a split.",
    explanation:
      "Near-zero goes to 'the nurses are just worse, side with her' and to 'people are too complicated to say'; top credit reads staff splitting as the internal split externalized and names a does-aligning-the-team-ease-the-friction test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A therapist, running late and preoccupied, repeatedly checks the clock, forgets a detail his patient shared last week, and seems half-present; she becomes hurt and withdrawn and says she feels unimportant to him. He starts to interpret her reaction as her 'abandonment dyad,' but pauses. In one paragraph, propose the strongest conclusion about what the evidence supports and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that this is most likely a real, warranted rupture rather than a transference distortion to interpret away: the therapist actually was half-present, clock-watching, and forgetful, so feeling unimportant is an accurate read of the situation, and the evidence-based move is to acknowledge his lapse and repair before reaching for any deeper dyad. This is a strong, falsifiable claim: it predicts that her hurt is proportionate to genuine inattention rather than to a trivial trigger, that a sincere acknowledgment plus reliably present sessions will restore her sense of mattering, and that the feeling will resolve once his attentiveness returns rather than recurring without cause. I would test it by owning the lapse and being fully present next time, then watching whether her trust returns, by gauging whether her reaction fits the size of the real inattention, and by checking whether the unimportant feeling recurs even when he is attentive — and I would shift toward interpreting an abandonment dyad only if the same reaction kept firing at full force when he was genuinely warm and attentive, marking it as out of proportion to anything he had actually done.",
      yieldAnchors: [
        "He was late, clock-watching, and forgetful",
        "He seemed half-present",
        "She feels unimportant to him",
      ],
      riskAnchors: [
        "Her hurt is proportionate to genuine inattention",
        "Acknowledgment and presence restore her sense of mattering",
        "It resolves once his attentiveness returns",
      ],
      defeatedBy: [
        "The unimportant feeling recurs even when he is attentive",
        "Her reaction is wildly out of proportion to the lapse",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that this is most likely a real, warranted rupture rather than a transference distortion to interpret away: the therapist actually was half-present, clock-watching, and forgetful, so feeling unimportant is an accurate read of the situation, and the evidence-based move is to acknowledge his lapse and repair before reaching for any deeper dyad. This is a strong, falsifiable claim: it predicts that her hurt is proportionate to genuine inattention rather than to a trivial trigger, that a sincere acknowledgment plus reliably present sessions will restore her sense of mattering, and that the feeling will resolve once his attentiveness returns rather than recurring without cause. I would test it by owning the lapse and being fully present next time, then watching whether her trust returns, by gauging whether her reaction fits the size of the real inattention, and by checking whether the unimportant feeling recurs even when he is attentive — and I would shift toward interpreting an abandonment dyad only if the same reaction kept firing at full force when he was genuinely warm and attentive, marking it as out of proportion to anything he had actually done.",
    explanation:
      "The inverted standard gives near-zero to 'it's purely her abandonment dyad, interpret it away'; top credit commits to repairing a genuine rupture and names a does-acknowledgment-and-presence-restore-trust test that could refute it.",
  },
];

export const section: SectionContent = {
  slug: "transference-focused-psychotherapy-tfp",
  title:
    "Transference-Focused Psychotherapy: Healing Through the Relationship (TFP)",
  weekNumber: 1,
  blurb:
    "Transference-Focused Psychotherapy treats the patient–therapist relationship as the operating table: the split, unstable patterns of borderline personality disorder come alive in the room, where the therapist holds a clear frame, watches for role reversals, contains aggression, and names the object-relations dyad activated between them. This section is about reading which dyad is live in the relationship, predicting that naming it shifts the interaction, and telling that apart from a real, warranted rupture.",
  lectureTitle:
    "1.6 Transference-Focused Psychotherapy: Healing Through the Relationship (TFP)",
  body: `# Transference-Focused Psychotherapy: Healing Through the Relationship (TFP)

It is one thing to understand, from the outside, that a person with borderline personality disorder swings between idealizing and despising the people they love. It is another to watch it happen to you, in real time, in a quiet consulting room — to be the trusted ally one week and the cold betrayer the next, for no reason you can see. Transference-Focused Psychotherapy, developed by Otto Kernberg and his colleagues, takes that uncanny experience and turns it into the treatment. Instead of only talking about the patient's relationships out there, TFP works with the one relationship happening right here, because the disorder shows up live in the room — and what is live in the room can be named, understood, and changed.

## The relationship as the operating table

In TFP the here-and-now bond between patient and therapist is not background to the work; it is the work. Borderline patterns of feeling and relating do not stay politely in the past — they get re-activated with whoever is close, and the therapist is close. So the very reactions that derail the patient's outside life come to the surface in the session, where two people can look at them together as they happen. That is a gift, not a problem: the disorder brings itself into the room for examination.

## Object-relations dyads: the templates that get activated

The building block TFP works with is the object-relations dyad — a paired template of a self and an other, bound by a feeling: abandoning-caregiver and desperate-child, cold-critic and worthless-one, all-good-rescuer and rescued-child. These templates formed in early relationships and now get switched on in the present. When one is activated, the patient experiences the therapist not as he actually is but as the "other" in the template, and herself as the matching "self." A warm, attentive therapist becomes, in an instant, a withholding figure who can't be bothered with her — because a dyad has been switched on. The therapist's first job is to notice which dyad is live.

## Splitting in the room: idealization and devaluation

Because these images stay split — kept apart so that love and disappointment never touch — the patient may idealize the therapist completely one week and condemn him completely the next. The flip usually follows a let-down: a vacation, a limit, a moment of feeling too close. The strongest reading does not take either extreme at face value. It notices that the devaluation tracks a disappointment rather than new information about the therapist's character, and that the same idealize-then-trash arc swallowed the previous therapist too. Splitting can also spread across a treatment team, with the "good" therapist and "bad" nurses standing in for two halves the patient cannot hold together inside herself.

## Role reversals: same bond, opposite ends

A dyad has two ends, and the patient can occupy either. In a role reversal, the patient who usually suffers under a contemptuous critic becomes the contemptuous critic, and casts the therapist as the belittled one; the patient with a fragile, depended-on parent becomes the caretaker and treats the therapist as the depleted one to be protected. Living the bond from the powerful end is a way of escaping the painful end. The clue is that the role mirrors a relationship the patient has described, and it flares when she feels most exposed.

## The frame: why structure is the treatment, not coldness

TFP holds a clear frame — set times, agreed limits, a crisis plan, expectations on both sides. To a patient in an abandoning-caregiver dyad, a limit can feel like proof that the therapist doesn't care, and the temptation is to dissolve the frame to "prove" otherwise. But collapsing the frame confirms the dyad — only total availability counts as love — and undermines the work. The frame is not coldness; it is the steady structure that makes it safe to interpret what the limits stir up.

## Containing aggression without retaliating or collapsing

Sometimes what comes alive is raw aggression — contempt, rage, a need to test whether the patient's fury destroys the therapist or provokes him to strike back. The TFP move is to contain it: to stay intact, hold the line on safety, and put the dyad into words ('something in you needs to know whether your anger wrecks me or makes me attack you') rather than retaliating or crumbling. Surviving the aggression without retaliation or collapse is itself therapeutic; it shows the patient that the bond, and the therapist, can hold.

## Interpreting the dyad — and when it's a real rupture

The central intervention is to name the dyad activated in the room and predict that naming it shifts the interaction. 'Right now I seem to have become the cold critic, and you the one who can't get it right' is a real, testable claim: if it's correct, putting it into words changes the felt atmosphere of the session, and the configuration matches the patient's history. But not every reaction is transference. If the therapist genuinely showed up late, forgot key facts, or was half-present, the patient's hurt is a warranted rupture to be acknowledged and repaired — not interpreted away. The test is proportion and pattern: a reaction that fits a real lapse and resolves when it's fixed is a rupture; one that fires at full force even when the therapist is attentive, and recurs without cause, is a dyad.

## The goal: identity integration

All of this aims at one thing: integration. As the split dyads are named again and again, the all-good and all-bad images begin to fuse into whole people who can be both cared for and disappointing — and, crucially, the patient's own fragmented self-states begin to cohere too. The signature of progress is a patient who can say her therapist is 'helpful but sometimes frustrating, and that's okay,' and hold that view even through a real let-down. When the dyads surface less often and soften faster when named, the internal world is integrating — and that change shows up outside the room as well.

## In the real world

Suppose a close friend who has always adored you suddenly turns icy and accuses you of secretly looking down on her — right after an evening when the two of you felt unusually close. The dodge is to throw up your hands ('you can't really know what's going on inside someone') or to fire back ('she's just being manipulative'). The stronger move reads the dyad and names a test: closeness raised the threat of depending on someone who might abandon her, so a warm friend got converted into a sneering one — which predicts the chill followed the closeness rather than anything you did, that gently naming the shift will soften it, and that the same closeness-then-recoil pattern shows up elsewhere in her life. If it turned out you really had slighted her, you'd revise and simply repair. But you don't start from surrender, and you don't start from contempt. You read which dyad is live — and you name exactly what would tell you you're wrong.`,
  homework: {
    mcq,
    hybrid,
    written,
  },
};
