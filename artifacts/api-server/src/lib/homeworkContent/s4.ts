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
      "A patient is calm and friendly until the therapist arrives two minutes late; then she becomes cold and accuses him of not caring whether she lives or dies. She mentions, in passing, that her mother often forgot to pick her up from school as a child. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The patient seems upset that the therapist was late.",
        credit: 0.3,
      },
      {
        text: "Her reaction is probably about her past somehow; we could ask more about her childhood.",
        credit: 0.6,
      },
      {
        text: "A two-minute delay can't really matter, so she must be inventing a grievance to manipulate the therapist into apologizing.",
        credit: 0,
      },
      {
        text: "The tiny lateness likely triggered an old template of being abandoned by an unreliable caregiver, so a trivial delay reads as proof of not being cared about; test whether the same outsized reaction appears with other people who keep her waiting, whether it traces to the school-pickup history, and whether it softens once she sees the therapist reliably returns and explains.",
        credit: 1.0,
      },
    ],
    correctAnswer:
      "The tiny lateness likely triggered an old template of being abandoned by an unreliable caregiver, so a trivial delay reads as proof of not being cared about; test whether the same outsized reaction appears with other people who keep her waiting, whether it traces to the school-pickup history, and whether it softens once she sees the therapist reliably returns and explains.",
    explanation:
      "Top credit binds the size of the reaction to an old abandonment template and names three checks, including whether it fades with a reliable present figure; the 'inventing a grievance to manipulate' option is the cynical overreach the genuine childhood pattern defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A man has dated five different women over ten years. Each one started out warm but, he says, 'turned distant and unreachable.' He describes his mother the same way — physically present but emotionally far off. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He keeps picking distant women; we could look at his dating history more closely.",
        credit: 0.6,
      },
      {
        text: "He has just had bad luck with cold partners five times in a row.",
        credit: 0,
      },
      {
        text: "He likely carries a template from an emotionally distant mother and is drawn to partners who fit it — or draws distance out of them — so the same ending repeats; test whether he overlooks available warm women, whether he withdraws first and reads their response as coldness, and whether the pattern matches how he describes his mother.",
        credit: 1.0,
      },
      {
        text: "His relationships seem to keep ending the same way.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "He likely carries a template from an emotionally distant mother and is drawn to partners who fit it — or draws distance out of them — so the same ending repeats; test whether he overlooks available warm women, whether he withdraws first and reads their response as coldness, and whether the pattern matches how he describes his mother.",
    explanation:
      "Full credit reads a repeated relational template behind the identical endings and names three tests; 'just bad luck five times' is the dodge the systematic repetition defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A new client meets a therapist who is plainly warm and encouraging, yet within minutes she is braced and guarded, certain he is 'building me up so he can tear me down later.' Her father praised her in public and ridiculed her in private. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The mind is too private to know why a stranger would distrust kindness, so no conclusion is safe.",
        credit: 0,
      },
      {
        text: "She seems suspicious of the therapist's warmth.",
        credit: 0.3,
      },
      {
        text: "She is likely replaying a template in which warmth is the setup for humiliation, learned from a father who praised then ridiculed her, so present kindness reads as a coming attack; test whether she shows the same suspicion toward other warm people, whether the dread tracks her father's two-faced pattern, and whether it eases as the therapist stays consistently kind over time.",
        credit: 1.0,
      },
      {
        text: "Her distrust probably comes from her past; we could explore her father more.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "She is likely replaying a template in which warmth is the setup for humiliation, learned from a father who praised then ridiculed her, so present kindness reads as a coming attack; test whether she shows the same suspicion toward other warm people, whether the dread tracks her father's two-faced pattern, and whether it eases as the therapist stays consistently kind over time.",
    explanation:
      "Top credit names the specific warmth-equals-trap template and three checks including consistency over time; 'too private to know' is the refusal the clear father history and present reaction defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "A woman has been fired or has quit four jobs after explosive fights with her supervisor. In each case the trigger was the boss 'telling me what to do.' She grew up with a father who controlled every detail of her life. Which conclusion best follows?",
    mcOptions: [
      {
        text: "All four of her bosses happened to be genuinely controlling tyrants.",
        credit: 0,
      },
      {
        text: "She likely brings a template from a controlling father into every authority relationship, so ordinary direction feels like domination and provokes a fight; test whether the clashes erupt even with mild, reasonable supervisors, whether the intensity matches her history with her father, and whether she reacts far less to instructions from peers than from anyone in charge.",
        credit: 1.0,
      },
      {
        text: "She keeps clashing with bosses; we could review what happened at each job.",
        credit: 0.6,
      },
      {
        text: "She seems to have trouble with authority.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "She likely brings a template from a controlling father into every authority relationship, so ordinary direction feels like domination and provokes a fight; test whether the clashes erupt even with mild, reasonable supervisors, whether the intensity matches her history with her father, and whether she reacts far less to instructions from peers than from anyone in charge.",
    explanation:
      "Full credit ties the repeating authority conflict to a controlling-father template and names three tests, including the peer-versus-boss contrast; 'all four were genuine tyrants' is the overreach the cross-situational repetition defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "Whenever a patient talks about a success, he suddenly becomes charming and faintly flirtatious with his therapist, as if performing for her approval. He recalls that his father only paid attention to him when he won awards. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He probably wants approval; we could note when the charm shows up.",
        credit: 0.6,
      },
      {
        text: "He seems to get a bit flirtatious during sessions.",
        credit: 0.3,
      },
      {
        text: "He likely replays a template in which love must be earned by performing, learned from a father who only noticed his wins, so reporting a success automatically switches him into approval-seeking display; test whether the charm appears specifically after achievements rather than at random, whether it tracks his account of his father, and whether it fades when the therapist values him for ordinary disclosures too.",
        credit: 1.0,
      },
      {
        text: "His charm clearly means he is romantically attracted to the therapist and is trying to start a relationship with her.",
        credit: 0,
      },
    ],
    correctAnswer:
      "He likely replays a template in which love must be earned by performing, learned from a father who only noticed his wins, so reporting a success automatically switches him into approval-seeking display; test whether the charm appears specifically after achievements rather than at random, whether it tracks his account of his father, and whether it fades when the therapist values him for ordinary disclosures too.",
    explanation:
      "Top credit reads a love-must-be-earned template behind the achievement-triggered display and names three checks; the literal 'he's romantically attracted and trying to date her' is the overreach the achievement-specific timing defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A patient grows tense whenever the therapist quietly writes a note, convinced she is 'marking down everything wrong with me.' His mother kept a running mental ledger of his faults and recited them during arguments. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Note-taking is genuinely hostile, so he is right that the therapist is collecting evidence against him.",
        credit: 0,
      },
      {
        text: "He seems uneasy when the therapist takes notes.",
        credit: 0.3,
      },
      {
        text: "The neutral note-taking likely activates a template of a fault-cataloguing parent, so an ordinary clinical act reads as evidence-gathering against him; test whether he reacts the same way to other people who write near him, whether the unease matches his account of his mother's ledger, and whether it eases when the therapist shows him the notes are mundane and routine.",
        credit: 1.0,
      },
      {
        text: "His unease about the notes probably ties to his past; we could ask about his mother.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The neutral note-taking likely activates a template of a fault-cataloguing parent, so an ordinary clinical act reads as evidence-gathering against him; test whether he reacts the same way to other people who write near him, whether the unease matches his account of his mother's ledger, and whether it eases when the therapist shows him the notes are mundane and routine.",
    explanation:
      "Full credit binds the disproportionate reaction to a fault-ledger template and names three disconfirming checks; 'the note-taking is genuinely hostile' is the overreach a neutral clinical act defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "After eight steady months, the therapist takes a planned two-week vacation. On her return the patient is icy and says, 'I knew you'd leave like everyone does.' His father walked out when he was seven and never came back. Which conclusion best follows?",
    mcOptions: [
      {
        text: "People come and go, so there is nothing to interpret about his coldness.",
        credit: 0,
      },
      {
        text: "A brief, announced absence likely reactivated a template of permanent abandonment laid down when his father left, so a two-week break feels like being walked out on again; test whether other ordinary separations trigger the same dread, whether the reaction matches his father's disappearance, and whether his trust rebuilds once the therapist predictably returns.",
        credit: 1.0,
      },
      {
        text: "The break probably stirred up old feelings; we could talk about his father leaving.",
        credit: 0.6,
      },
      {
        text: "He seems hurt that the therapist went away.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "A brief, announced absence likely reactivated a template of permanent abandonment laid down when his father left, so a two-week break feels like being walked out on again; test whether other ordinary separations trigger the same dread, whether the reaction matches his father's disappearance, and whether his trust rebuilds once the therapist predictably returns.",
    explanation:
      "Top credit links the icy reaction to a permanent-abandonment template and names three checks, including whether trust rebuilds with a reliable return; 'people come and go, nothing to interpret' is the refusal the matching father history defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A woman is sure every partner will cheat on her, checking phones and reading suspicion into innocent texts, though none has ever been unfaithful. Her first serious boyfriend, years ago, betrayed her badly. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She seems worried about being cheated on.",
        credit: 0.3,
      },
      {
        text: "Her suspicion probably comes from being cheated on before; we could discuss that relationship.",
        credit: 0.6,
      },
      {
        text: "She likely carries a betrayal template from the early infidelity and applies it to faithful partners, so neutral signals get read as proof of cheating; test whether the suspicion fires even with partners who are demonstrably reliable, whether its intensity matches the original betrayal, and whether it eases as a partner stays consistently faithful over time.",
        credit: 1.0,
      },
      {
        text: "Her current partner is probably hiding an affair, since her instincts were right the first time.",
        credit: 0,
      },
    ],
    correctAnswer:
      "She likely carries a betrayal template from the early infidelity and applies it to faithful partners, so neutral signals get read as proof of cheating; test whether the suspicion fires even with partners who are demonstrably reliable, whether its intensity matches the original betrayal, and whether it eases as a partner stays consistently faithful over time.",
    explanation:
      "Full credit names a betrayal template imported onto faithful partners and three tests; 'her current partner must be cheating' is the overreach the absence of any present evidence defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "In session a usually articulate man goes quiet and deferential, waiting to be told what to discuss and apologizing for 'doing it wrong.' He describes a father who mocked any opinion he offered. Which conclusion best follows?",
    mcOptions: [
      {
        text: "It is impossible to know why anyone falls silent, so we should not speculate.",
        credit: 0,
      },
      {
        text: "He seems to clam up in session.",
        credit: 0.3,
      },
      {
        text: "His silence probably relates to his father; we could ask more about that.",
        credit: 0.6,
      },
      {
        text: "He likely replays a template from a mocking father in which voicing an opinion invites ridicule, so he defers and waits to be directed rather than risk being wrong; test whether the same submissiveness appears with other authority figures, whether it matches how he describes his father, and whether it loosens as the therapist consistently welcomes his views without mockery.",
        credit: 1.0,
      },
    ],
    correctAnswer:
      "He likely replays a template from a mocking father in which voicing an opinion invites ridicule, so he defers and waits to be directed rather than risk being wrong; test whether the same submissiveness appears with other authority figures, whether it matches how he describes his father, and whether it loosens as the therapist consistently welcomes his views without mockery.",
    explanation:
      "Top credit reads a ridicule-avoidance template behind the deference and names three checks; 'impossible to know, don't speculate' is the dodge the clear father history and in-session pattern defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "Near the end of nearly every session, a patient abruptly starts an argument or storms out a minute early. She grew up with a mother who would coldly end conversations the moment she was done, leaving the patient mid-sentence. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She probably dislikes endings; we could watch how sessions wrap up.",
        credit: 0.6,
      },
      {
        text: "She just gets argumentative sometimes; people have moods, so it means nothing.",
        credit: 0,
      },
      {
        text: "She seems to act out when sessions are ending.",
        credit: 0.3,
      },
      {
        text: "She likely replays a template of being abruptly dismissed by a cold mother, and by leaving first she controls the ending instead of being left mid-sentence again; test whether the pre-ending flare-ups track the clock rather than the topic, whether the pattern matches her mother's abrupt cutoffs, and whether it eases when endings are made gradual and predictable.",
        credit: 1.0,
      },
    ],
    correctAnswer:
      "She likely replays a template of being abruptly dismissed by a cold mother, and by leaving first she controls the ending instead of being left mid-sentence again; test whether the pre-ending flare-ups track the clock rather than the topic, whether the pattern matches her mother's abrupt cutoffs, and whether it eases when endings are made gradual and predictable.",
    explanation:
      "Full credit explains the leaving-first behavior as a controlled re-enactment of being dismissed and names three checks, including timing-versus-topic; 'people have moods, it means nothing' is the refusal the clock-locked pattern defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A patient is relaxed with his female therapist but, when he meets a male colleague of hers, reads the man's neutral, even-toned questions as cold and threatening. His mother was gentle; his father was harsh and intimidating. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The male colleague is probably actually intimidating, which is why the patient feels threatened.",
        credit: 0,
      },
      {
        text: "He seems more comfortable with women than men.",
        credit: 0.3,
      },
      {
        text: "His reaction to men likely comes from his father; we could explore that relationship.",
        credit: 0.6,
      },
      {
        text: "He likely brings a harsh-father template to men specifically, so the same neutral manner feels safe from a woman but menacing from a man; test whether other neutral men trigger the same threat reading, whether the reaction matches his account of his father, and whether identical questions feel benign when posed by a woman.",
        credit: 1.0,
      },
    ],
    correctAnswer:
      "He likely brings a harsh-father template to men specifically, so the same neutral manner feels safe from a woman but menacing from a man; test whether other neutral men trigger the same threat reading, whether the reaction matches his account of his father, and whether identical questions feel benign when posed by a woman.",
    explanation:
      "Top credit reads a gender-specific harsh-father template from the split reaction and names three checks, including the same-question-different-sex contrast; 'the colleague is genuinely intimidating' is the overreach the neutral, even tone defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "Whenever the therapist falls silent to let the patient think, the patient concludes she is 'bored and disappointed in me' and rushes to fill the gap. His mother had severe depression and would go silent and withdrawn for days, which he learned to read as his fault. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Silence is genuinely a sign of disapproval, so he correctly senses the therapist is disappointed.",
        credit: 0,
      },
      {
        text: "His reading of silence probably ties to his mother; we could talk about her depression.",
        credit: 0.6,
      },
      {
        text: "He seems anxious during pauses.",
        credit: 0.3,
      },
      {
        text: "He likely replays a template from a withdrawn, depressed mother in which silence meant he had caused her unhappiness, so an ordinary pause reads as disappointment in him; test whether he reads other people's silences the same way, whether the reaction matches his mother's withdrawals, and whether it eases once the therapist names the silence as neutral thinking time.",
        credit: 1.0,
      },
    ],
    correctAnswer:
      "He likely replays a template from a withdrawn, depressed mother in which silence meant he had caused her unhappiness, so an ordinary pause reads as disappointment in him; test whether he reads other people's silences the same way, whether the reaction matches his mother's withdrawals, and whether it eases once the therapist names the silence as neutral thinking time.",
    explanation:
      "Full credit ties the misread silence to a depressed-mother template and names three checks; 'silence genuinely signals disapproval' is the overreach a neutral thinking pause defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "When the therapist asks a simple clarifying question — 'What did you mean by that?' — the patient bristles and snaps, 'Why are you interrogating me?' He grew up with a suspicious parent who cross-examined his every move as if he were guilty. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He seems defensive when asked questions.",
        credit: 0.3,
      },
      {
        text: "His defensiveness probably comes from his past; we could ask about his upbringing.",
        credit: 0.6,
      },
      {
        text: "Questions are inherently accusatory, so he is right to feel interrogated.",
        credit: 0,
      },
      {
        text: "He likely replays a template from an accusing parent in which any question presumed guilt, so a neutral clarifying question reads as interrogation; test whether he reacts the same way to innocent questions from others, whether the reaction matches his account of the suspicious parent, and whether it eases as the therapist's questions reliably turn out to be non-accusatory.",
        credit: 1.0,
      },
    ],
    correctAnswer:
      "He likely replays a template from an accusing parent in which any question presumed guilt, so a neutral clarifying question reads as interrogation; test whether he reacts the same way to innocent questions from others, whether the reaction matches his account of the suspicious parent, and whether it eases as the therapist's questions reliably turn out to be non-accusatory.",
    explanation:
      "Top credit reads an interrogation template behind the disproportionate snap and names three checks; 'questions are inherently accusatory' is the overreach a neutral clarifying question defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A patient who, as a child, cared for a chronically ill mother spends sessions worrying aloud about whether the therapist is tired, overworked, or upset, and tries to keep things easy for her. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He is just a thoughtful, considerate person, so there is nothing to understand here.",
        credit: 0,
      },
      {
        text: "He seems concerned about the therapist's wellbeing.",
        credit: 0.3,
      },
      {
        text: "His caretaking probably relates to nursing his mother; we could explore that role.",
        credit: 0.6,
      },
      {
        text: "He likely replays the caretaker role he held with an ill mother, casting the therapist as the fragile one he must protect rather than letting himself be cared for; test whether he takes the same caretaking role in his other relationships, whether it matches his history with his mother, and whether it eases when the therapist makes clear she is well and it is his hour.",
        credit: 1.0,
      },
    ],
    correctAnswer:
      "He likely replays the caretaker role he held with an ill mother, casting the therapist as the fragile one he must protect rather than letting himself be cared for; test whether he takes the same caretaking role in his other relationships, whether it matches his history with his mother, and whether it eases when the therapist makes clear she is well and it is his hour.",
    explanation:
      "Full credit reads a caretaker-role template reversing who tends whom and names three checks; 'just a considerate person, nothing to understand' is the dodge the role-reversal pattern defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A patient idolizes her therapist for months, calling her 'the only person who has ever understood me,' then turns scornful the first time the therapist mishears a detail. She describes doing exactly this with a favorite teacher and a former best friend. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She probably swings between idealizing and devaluing; we could track those shifts.",
        credit: 0.6,
      },
      {
        text: "The therapist clearly failed her, which is why the admiration collapsed.",
        credit: 0,
      },
      {
        text: "She seems to change her mind about people.",
        credit: 0.3,
      },
      {
        text: "She likely replays an all-or-nothing template in which a person is either perfect or worthless, so one small lapse flips idealization into contempt; test whether the same rise-and-crash appears across her other close relationships, whether the trigger is always a minor, ordinary failing, and whether the contempt softens when she can hold the therapist's good and flawed sides together.",
        credit: 1.0,
      },
    ],
    correctAnswer:
      "She likely replays an all-or-nothing template in which a person is either perfect or worthless, so one small lapse flips idealization into contempt; test whether the same rise-and-crash appears across her other close relationships, whether the trigger is always a minor, ordinary failing, and whether the contempt softens when she can hold the therapist's good and flawed sides together.",
    explanation:
      "Top credit names an all-or-nothing relational template behind the repeated idealize-then-crash cycle and three checks; 'the therapist clearly failed her' is the overreach the trivial trigger and identical history defeat.",
  },
];

const hybrid: HomeworkItem[] = [
  {
    itemType: "hybrid",
    prompt:
      "A patient reports the same story about his boss, his landlord, his last two partners, and now, hesitantly, about the therapist: each one, he says, 'starts out fine and then tries to control me.' No one else describes these people as controlling. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He seems to feel controlled by a lot of people.",
        credit: 0.3,
      },
      {
        text: "He has simply been unlucky enough to surround himself with controlling people in every area of life.",
        credit: 0,
      },
      {
        text: "He likely carries a single relational template — 'closeness leads to being controlled' — and projects it onto each new figure including the therapist, so ordinary requests feel like domination; test whether the others are described as controlling by anyone but him, whether the pattern traces to a specific early controlling figure, and whether it surfaces with the therapist exactly as trust grows.",
        credit: 1.0,
      },
      {
        text: "He probably brings the same expectation to everyone; we could compare the relationships.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'one imported template' lead from the rival 'he keeps genuinely choosing controlling people,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: check whether anyone besides the patient — coworkers, friends, the therapist's own behavior — would describe these figures as controlling, since an imported template predicts the control is in his reading, not in them. My lead is refuted if independent observers consistently confirm that these people really are domineering, which would point to repeated real choices rather than a projected template.",
      yieldAnchors: [
        "The same 'tries to control me' story repeats across boss, landlord, partners, and therapist",
        "No one else describes these people as controlling",
        "The feeling appears only after closeness develops",
      ],
      riskAnchors: [
        "Independent observers do not see the others as controlling",
        "The pattern traces to a specific early controlling figure",
        "It emerges with the therapist as trust grows",
      ],
      defeatedBy: [
        "Independent observers confirm all of them are genuinely controlling",
        "The therapist is in fact behaving in a controlling way",
      ],
    },
    correctAnswer:
      "He likely carries a single relational template — 'closeness leads to being controlled' — and projects it onto each new figure including the therapist, so ordinary requests feel like domination; test whether the others are described as controlling by anyone but him, whether the pattern traces to a specific early controlling figure, and whether it surfaces with the therapist exactly as trust grows.",
    explanation:
      "Full credit names one imported template behind the identical cross-relationship story and a cheap independent-observer test that states its own refutation; 'just unlucky with controlling people everywhere' is the dodge the universality of the pattern defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "The therapist has to cancel one session because of illness. The patient, generally composed, spirals for days, convinced the therapist 'finally got sick of me.' She was raised by a parent who used silence and withdrawal as punishment whenever she 'misbehaved.' Which conclusion best follows?",
    mcOptions: [
      {
        text: "Her distress probably has roots in her childhood; we could look into the withdrawal punishments.",
        credit: 0.6,
      },
      {
        text: "A single cancellation is no big deal, so she must be exaggerating for attention.",
        credit: 0,
      },
      {
        text: "She seems thrown by the cancellation.",
        credit: 0.3,
      },
      {
        text: "The cancellation likely activated a template in which a caregiver's absence is punishment for being bad, so a neutral, illness-driven cancellation reads as rejection she caused; test whether other unavoidable absences trigger the same self-blame, whether it matches the parent's withdrawal-as-punishment pattern, and whether it eases once she learns the reason was simple illness.",
        credit: 1.0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'absence-as-punishment template' lead from the rival 'she is simply very sensitive to any disruption,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: see whether a neutral disruption that carries no hint of rejection — say, the office building closing for repairs — provokes the same self-blame, since a punishment template should fire on perceived rejection, not on disruption itself. My lead is refuted if every schedule change, however impersonal, distresses her equally, which would point to general intolerance of disruption rather than a rejection template.",
      yieldAnchors: [
        "One unavoidable cancellation triggers days of spiraling",
        "She concludes the therapist 'got sick of me'",
        "Her parent used withdrawal as punishment for misbehaving",
      ],
      riskAnchors: [
        "Other rejection-tinged absences trigger the same self-blame",
        "Impersonal disruptions provoke far less reaction",
        "The reaction eases once she learns the cause was illness",
      ],
      defeatedBy: [
        "Every impersonal schedule change distresses her equally",
        "The cancellation was actually a deliberate brush-off",
      ],
    },
    correctAnswer:
      "The cancellation likely activated a template in which a caregiver's absence is punishment for being bad, so a neutral, illness-driven cancellation reads as rejection she caused; test whether other unavoidable absences trigger the same self-blame, whether it matches the parent's withdrawal-as-punishment pattern, and whether it eases once she learns the reason was simple illness.",
    explanation:
      "Top credit binds the spiral to an absence-as-punishment template and a cheap impersonal-disruption test that names its refutation; 'exaggerating for attention' is the cynical overreach the genuine punishment history defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "When the therapist gently points out a contradiction, the patient experiences it as a 'brutal attack' and feels crushed for the rest of the session. The comment was mild and kindly worded. His mother criticized him so relentlessly that any feedback came to mean 'you are worthless.' Which conclusion best follows?",
    mcOptions: [
      {
        text: "He seems hurt by the feedback.",
        credit: 0.3,
      },
      {
        text: "Even gentle feedback is a form of attack, so his crushed reaction is appropriate.",
        credit: 0,
      },
      {
        text: "His sensitivity to feedback probably stems from his mother; we could explore her criticism.",
        credit: 0.6,
      },
      {
        text: "A mild observation likely lands on a template from a relentlessly critical mother in which any feedback equals 'you are worthless,' so a kind comment is felt as a brutal attack; test whether neutral feedback from others lands the same way, whether the reaction matches his mother's relentless criticism, and whether it lessens as the therapist's gentle comments repeatedly prove non-destructive.",
        credit: 1.0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'feedback-equals-worthlessness template' lead from the rival 'the comment really was harsher than it looked,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: review the exact wording with the patient, or have a neutral third party rate its harshness, since a template account predicts the devastation outruns anything in the actual words. My lead is refuted if the comment, examined plainly, really was cutting or contemptuous, which would make his reaction a fair response rather than a replayed template.",
      yieldAnchors: [
        "A mild, kindly comment is experienced as a brutal attack",
        "He feels crushed for the rest of the session",
        "His mother's relentless criticism made feedback mean 'worthless'",
      ],
      riskAnchors: [
        "Neutral feedback from others lands as an attack too",
        "The reaction matches his mother's pattern of criticism",
        "It lessens as gentle comments repeatedly prove harmless",
      ],
      defeatedBy: [
        "The comment, examined plainly, really was cutting",
        "He reacts calmly to all other forms of feedback",
      ],
    },
    correctAnswer:
      "A mild observation likely lands on a template from a relentlessly critical mother in which any feedback equals 'you are worthless,' so a kind comment is felt as a brutal attack; test whether neutral feedback from others lands the same way, whether the reaction matches his mother's relentless criticism, and whether it lessens as the therapist's gentle comments repeatedly prove non-destructive.",
    explanation:
      "Full credit ties the crushed reaction to a feedback-equals-worthlessness template and a cheap word-rating test that names its refutation; 'even gentle feedback is an attack' is the overreach the mild wording defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A woman keeps choosing partners in crisis — addicts, the chronically unemployed, the deeply troubled — and pours herself into rescuing each one until she is exhausted and they leave. She grew up managing an alcoholic father's life. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She just keeps meeting people who happen to need help.",
        credit: 0,
      },
      {
        text: "She seems to end up with troubled partners.",
        credit: 0.3,
      },
      {
        text: "She likely replays a rescuer template formed with an alcoholic father, seeking partners who let her re-enact saving him, so being needed feels like love; test whether she overlooks stable partners who don't need rescuing, whether the role matches her history with her father, and whether she feels strangely empty or anxious when a relationship doesn't require saving anyone.",
        credit: 1.0,
      },
      {
        text: "Her rescuing pattern probably ties to her father; we could look at those relationships.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'rescuer template' lead from the rival 'she is simply a caring person drawn to help anyone,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: introduce or notice a stable, self-sufficient partner and watch her response, since a rescuer template predicts she will lose interest or feel uneasy when there is no one to save. My lead is refuted if she is equally drawn to and content with partners who need nothing fixed, which would point to general kindness rather than a specific re-enactment of rescuing her father.",
      yieldAnchors: [
        "She repeatedly chooses partners in crisis",
        "She rescues them to the point of exhaustion",
        "She grew up managing an alcoholic father",
      ],
      riskAnchors: [
        "She overlooks stable partners who need no rescuing",
        "The role matches her history with her father",
        "She feels empty when no one needs saving",
      ],
      defeatedBy: [
        "She is equally drawn to and happy with self-sufficient partners",
        "Her partners' crises are pure coincidence with no selection on her part",
      ],
    },
    correctAnswer:
      "She likely replays a rescuer template formed with an alcoholic father, seeking partners who let her re-enact saving him, so being needed feels like love; test whether she overlooks stable partners who don't need rescuing, whether the role matches her history with her father, and whether she feels strangely empty or anxious when a relationship doesn't require saving anyone.",
    explanation:
      "Full credit names a rescuer template re-enacted from the father and a cheap stable-partner test that states its refutation; 'just keeps meeting people who need help' is the dodge the consistent selection defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "Each time the therapist shows genuine warmth, the patient narrows his eyes and asks, 'What do you want from me?' His mother was affectionate only when she needed something, then turned cold once she got it. Which conclusion best follows?",
    mcOptions: [
      {
        text: "His suspicion of warmth probably comes from his mother; we could explore that.",
        credit: 0.6,
      },
      {
        text: "Warmth always hides an agenda, so he is right to suspect the therapist wants something.",
        credit: 0,
      },
      {
        text: "He seems wary of kindness.",
        credit: 0.3,
      },
      {
        text: "He likely carries a template in which affection is always transactional, learned from a mother who was warm only to extract things, so present warmth automatically reads as a setup; test whether he distrusts warmth from everyone, whether the suspicion matches his mother's pattern, and whether it eases as the therapist's warmth repeatedly comes with no strings attached.",
        credit: 1.0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'affection-is-transactional template' lead from the rival 'he is just generally cynical about people,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: notice whether his suspicion spikes specifically at warmth and affection rather than at every interaction, since a transactional-affection template predicts kindness, not neutrality, is the trigger. My lead is refuted if he is equally distrustful of cold and warm behavior alike, which would point to broad cynicism rather than a template tied to affection.",
      yieldAnchors: [
        "Warmth specifically triggers 'what do you want from me?'",
        "His mother was affectionate only to extract things",
        "She turned cold once she got what she wanted",
      ],
      riskAnchors: [
        "He distrusts warmth from many different people",
        "The suspicion matches his mother's transactional pattern",
        "It eases as warmth repeatedly comes with no strings",
      ],
      defeatedBy: [
        "He is equally suspicious of cold and warm behavior alike",
        "The therapist actually does want something from him",
      ],
    },
    correctAnswer:
      "He likely carries a template in which affection is always transactional, learned from a mother who was warm only to extract things, so present warmth automatically reads as a setup; test whether he distrusts warmth from everyone, whether the suspicion matches his mother's pattern, and whether it eases as the therapist's warmth repeatedly comes with no strings attached.",
    explanation:
      "Top credit names a transactional-affection template behind the wariness of warmth and a cheap trigger-specificity test that names its refutation; 'warmth always hides an agenda' is the overreach the therapist's no-strings warmth defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A patient turns every interpretation into a contest, rushing to top the therapist's observations with sharper ones and visibly pleased when he 'wins.' He grew up with a brilliant older brother against whom he was constantly measured. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He seems competitive in session.",
        credit: 0.3,
      },
      {
        text: "His competitiveness probably ties to his brother; we could discuss that rivalry.",
        credit: 0.6,
      },
      {
        text: "He likely replays a sibling-rivalry template formed against a favored brother, casting the therapist as a rival he must outdo to feel worthy; test whether the same one-upmanship appears with other figures he could compete with, whether it matches his history of being measured against his brother, and whether it eases when collaboration, not winning, is rewarded in session.",
        credit: 1.0,
      },
      {
        text: "He is simply more intelligent than the therapist, which is why he keeps winning the exchanges.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'sibling-rivalry template' lead from the rival 'he is just a naturally competitive personality,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: see whether the contest specifically targets a figure he can frame as a sibling-like rival rather than appearing evenly across all situations, since a rivalry template should fire in measured-against-a-peer contexts. My lead is refuted if he competes just as hard in settings with no one to be compared to, which would point to a general competitive trait rather than a replayed sibling dynamic.",
      yieldAnchors: [
        "He turns interpretations into contests to win",
        "He is visibly pleased when he 'beats' the therapist",
        "He was constantly measured against a brilliant brother",
      ],
      riskAnchors: [
        "The one-upmanship appears with other rival-like figures",
        "It matches his history of being measured against his brother",
        "It eases when collaboration rather than winning is rewarded",
      ],
      defeatedBy: [
        "He competes equally hard where there is no one to be compared to",
        "He genuinely outclasses the therapist on every point",
      ],
    },
    correctAnswer:
      "He likely replays a sibling-rivalry template formed against a favored brother, casting the therapist as a rival he must outdo to feel worthy; test whether the same one-upmanship appears with other figures he could compete with, whether it matches his history of being measured against his brother, and whether it eases when collaboration, not winning, is rewarded in session.",
    explanation:
      "Full credit reads a sibling-rivalry template behind the contest and a cheap context-specificity test that names its refutation; 'he is simply smarter than the therapist' is the overreach the compulsive need to win defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A patient apologizes constantly in session — for talking too long, for 'wasting your time,' for 'being a burden' — though she pays for the hour and uses it normally. Her mother, depleted and overwhelmed, often sighed that the children were 'too much.' Which conclusion best follows?",
    mcOptions: [
      {
        text: "She really might be a burden, so the apologies make sense.",
        credit: 0,
      },
      {
        text: "Her apologizing probably relates to her mother; we could look at that history.",
        credit: 0.6,
      },
      {
        text: "She seems to apologize a lot.",
        credit: 0.3,
      },
      {
        text: "She likely replays a template in which her needs overwhelm the caregiver, learned from a depleted mother, so simply using her own paid hour feels like being 'too much'; test whether she apologizes for taking up space in her other relationships, whether it matches her mother's 'too much' refrain, and whether it eases when the therapist makes clear the time is hers to use.",
        credit: 1.0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'I-am-a-burden template' lead from the rival 'she is just an unusually polite person,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: notice whether the apologies cluster specifically around having needs and taking up space rather than appearing as all-purpose politeness, since a burden template should target need, not manners in general. My lead is refuted if she apologizes evenly for everything in a merely courteous way and shows no special distress about occupying her own time, which would point to politeness rather than a burden template.",
      yieldAnchors: [
        "She apologizes for 'wasting your time' and 'being a burden'",
        "She is using a normal, paid-for hour",
        "Her mother called the children 'too much'",
      ],
      riskAnchors: [
        "She apologizes for taking up space in other relationships",
        "It matches her mother's 'too much' refrain",
        "It eases when the time is framed as hers to use",
      ],
      defeatedBy: [
        "She apologizes evenly for everything as plain courtesy",
        "She shows no special distress about having needs",
      ],
    },
    correctAnswer:
      "She likely replays a template in which her needs overwhelm the caregiver, learned from a depleted mother, so simply using her own paid hour feels like being 'too much'; test whether she apologizes for taking up space in her other relationships, whether it matches her mother's 'too much' refrain, and whether it eases when the therapist makes clear the time is hers to use.",
    explanation:
      "Top credit binds the constant apologizing to an I-am-a-burden template and a cheap apology-specificity test that names its refutation; 'she really might be a burden' is the overreach the normal use of her own hour defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A man speaks of his father, his old mentor, and now the therapist with the same arc: first 'the wisest person I've ever met,' then, after one disappointment, 'a fraud who never cared.' Each fall followed a small, ordinary letdown. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He seems to change his opinion of people over time.",
        credit: 0.3,
      },
      {
        text: "Each of these mentors really did turn out to be a fraud once he got to know them.",
        credit: 0,
      },
      {
        text: "His shifting view probably reflects something about his past; we could trace the relationships.",
        credit: 0.6,
      },
      {
        text: "He likely replays an idealize-then-devalue template across mentor figures, in which a flawless guide must crash into a fraud the moment he disappoints, so an ordinary letdown triggers total reversal; test whether the same arc repeats with each new mentor, whether the trigger is always a minor failing, and whether he can, with help, hold a mentor's wisdom and limits together at once.",
        credit: 1.0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'idealize-then-devalue template' lead from the rival 'his mentors genuinely keep failing him,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: examine the size of the triggering letdown each time, since a template account predicts a small, ordinary disappointment precedes a total collapse of regard. My lead is refuted if the falls consistently follow real, serious betrayals rather than minor failings, which would mean his mentors actually failed him rather than that he is replaying a template.",
      yieldAnchors: [
        "Father, mentor, and therapist all follow idealize-then-crash",
        "Each fall followed a small, ordinary letdown",
        "The reversal is total, from 'wisest' to 'fraud'",
      ],
      riskAnchors: [
        "The arc repeats with each new mentor figure",
        "The trigger is always a minor failing",
        "He can, with help, hold wisdom and limits together",
      ],
      defeatedBy: [
        "The falls consistently follow real, serious betrayals",
        "Each mentor is independently shown to be a fraud",
      ],
    },
    correctAnswer:
      "He likely replays an idealize-then-devalue template across mentor figures, in which a flawless guide must crash into a fraud the moment he disappoints, so an ordinary letdown triggers total reversal; test whether the same arc repeats with each new mentor, whether the trigger is always a minor failing, and whether he can, with help, hold a mentor's wisdom and limits together at once.",
    explanation:
      "Full credit names an idealize-then-devalue template across mentors and a cheap trigger-size test that states its refutation; 'each mentor really was a fraud' is the overreach the trivial, repeated triggers defeat.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A patient is lively and entertaining in session, cracking jokes and telling vivid stories, but goes flat and anxious the moment the therapist looks merely thoughtful rather than delighted. As a child he could only hold a distracted parent's attention by performing. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He is just a naturally funny, outgoing person, so there is nothing to read into it.",
        credit: 0,
      },
      {
        text: "He seems to like entertaining the therapist.",
        credit: 0.3,
      },
      {
        text: "His performing probably ties to his parent's distraction; we could explore that.",
        credit: 0.6,
      },
      {
        text: "He likely replays a template in which attention must be earned by performing, learned from a distracted parent, so a merely thoughtful face reads as losing the audience and triggers anxiety; test whether the performing intensifies whenever the therapist seems less engaged, whether it matches his history of entertaining for attention, and whether it eases as he finds the therapist stays attentive even when he is quiet.",
        credit: 1.0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'attention-must-be-performed template' lead from the rival 'he simply enjoys being entertaining,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: watch what happens when the therapist's attention is plainly steady but undelighted, since a performance template predicts a spike of anxiety and harder performing precisely when the 'audience' seems to cool. My lead is refuted if he stays relaxed and merely playful regardless of how engaged the therapist looks, which would point to genuine enjoyment rather than anxious attention-seeking.",
      yieldAnchors: [
        "He performs to keep the therapist entertained",
        "He goes flat and anxious when she looks merely thoughtful",
        "He could only hold a distracted parent's attention by performing",
      ],
      riskAnchors: [
        "The performing intensifies when the therapist seems less engaged",
        "It matches his history of entertaining for attention",
        "It eases as he finds attention persists when he is quiet",
      ],
      defeatedBy: [
        "He stays relaxed regardless of how engaged the therapist looks",
        "He is equally playful whether or not anyone is watching",
      ],
    },
    correctAnswer:
      "He likely replays a template in which attention must be earned by performing, learned from a distracted parent, so a merely thoughtful face reads as losing the audience and triggers anxiety; test whether the performing intensifies whenever the therapist seems less engaged, whether it matches his history of entertaining for attention, and whether it eases as he finds the therapist stays attentive even when he is quiet.",
    explanation:
      "Full credit ties the anxious performing to an attention-must-be-earned template and a cheap cooling-attention test that names its refutation; 'just a naturally funny person' is the dodge the anxiety at a thoughtful face defeats.",
  },
];

const written: HomeworkItem[] = [
  {
    itemType: "written",
    prompt:
      "A man describes the same downfall at three jobs in a row: he grows close to a mentor, becomes convinced the mentor is secretly plotting to get rid of him, acts hostile, and is eventually let go. Now, four months in, he tells his therapist he suspects she is 'documenting reasons to drop me.' He once mentioned that his father promised to support his education, then abruptly cut him off without explanation. In one paragraph, propose the strongest conclusion about the old relationship template being replayed and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that he carries a relational template laid down with a father who offered support and then betrayed it without warning, so as soon as he depends on someone he expects a hidden plan to abandon him — and he now imports that template onto the therapist, reading her neutral record-keeping as evidence of the coming betrayal. This is a strong claim because it predicts checkable consequences: the suspicion should appear specifically once he has grown close and dependent rather than at the start; independent observers should not see his mentors or therapist as actually plotting against him; and the dread should map onto the father's broken promise, intensifying around situations that echo being cut off. I would test it by tracking whether his distrust reliably switches on as closeness deepens, by checking others' accounts of whether these figures were genuinely hostile, and by watching whether the suspicion eases when the therapist proves steadily reliable across the very moments his template predicts abandonment.",
      yieldAnchors: [
        "The same close-then-suspect-then-fired arc repeats across three jobs",
        "He now suspects the therapist is documenting reasons to drop him",
        "His father promised support and then abruptly cut him off",
      ],
      riskAnchors: [
        "The suspicion switches on once closeness and dependence develop",
        "Independent observers do not see these figures as plotting",
        "It eases as the therapist proves reliable over time",
      ],
      defeatedBy: [
        "Independent accounts confirm the mentors really were plotting against him",
        "The therapist is in fact preparing to terminate him",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that he carries a relational template laid down with a father who offered support and then betrayed it without warning, so as soon as he depends on someone he expects a hidden plan to abandon him — and he now imports that template onto the therapist, reading her neutral record-keeping as evidence of the coming betrayal. This is a strong claim because it predicts checkable consequences: the suspicion should appear specifically once he has grown close and dependent rather than at the start; independent observers should not see his mentors or therapist as actually plotting against him; and the dread should map onto the father's broken promise, intensifying around situations that echo being cut off. I would test it by tracking whether his distrust reliably switches on as closeness deepens, by checking others' accounts of whether these figures were genuinely hostile, and by watching whether the suspicion eases when the therapist proves steadily reliable across the very moments his template predicts abandonment.",
    explanation:
      "Under the inverted standard the timid 'maybe his bosses really were against him, we can't know' earns near-zero; top credit goes to the committed betrayal-template reading that maps onto the father, predicts a closeness-triggered onset, and names an independent-observer test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A woman becomes intensely angry when her female therapist pauses for even a few seconds, accusing her of 'tuning out,' yet she barely reacts when a male consulting therapist sits in silence for much longer. She was raised by a withholding, easily distracted mother and a kind but peripheral father. In one paragraph, propose the strongest conclusion about the template at work and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that she carries a template from a withholding mother in which a woman's withdrawn attention means rejection, so she imports it specifically onto the female therapist — whose brief, neutral pause reads as the mother 'tuning out' — while the same silence from a man, who matches her peripheral but kind father, carries no such charge. This is a strong claim because it predicts checkable consequences: her anger should track the caregiver's gender rather than the actual length of the silence; the reaction should match how she describes her mother's distraction; and it should ease as the female therapist's attention proves reliable across exactly the pauses that now trigger her. I would test it by comparing her responses to identical silences from women versus men, by checking whether the intensity maps onto her account of her mother, and by watching whether trust in the female therapist grows as the predicted rejections fail to materialize.",
      yieldAnchors: [
        "She rages at a few seconds of the female therapist's silence",
        "She barely reacts to much longer silence from a male therapist",
        "Her mother was withholding and distracted; her father kind but peripheral",
      ],
      riskAnchors: [
        "Her anger tracks the therapist's gender, not the silence length",
        "The reaction matches her account of her mother's distraction",
        "It eases as the female therapist proves reliably attentive",
      ],
      defeatedBy: [
        "She reacts identically to silence regardless of the therapist's gender",
        "The female therapist really was disengaged and the male was not",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that she carries a template from a withholding mother in which a woman's withdrawn attention means rejection, so she imports it specifically onto the female therapist — whose brief, neutral pause reads as the mother 'tuning out' — while the same silence from a man, who matches her peripheral but kind father, carries no such charge. This is a strong claim because it predicts checkable consequences: her anger should track the caregiver's gender rather than the actual length of the silence; the reaction should match how she describes her mother's distraction; and it should ease as the female therapist's attention proves reliable across exactly the pauses that now trigger her. I would test it by comparing her responses to identical silences from women versus men, by checking whether the intensity maps onto her account of her mother, and by watching whether trust in the female therapist grows as the predicted rejections fail to materialize.",
    explanation:
      "The cautious 'people are sensitive to silence, we can't say why' earns near-zero; credit goes to the gendered-template conclusion that explains the male-female asymmetry, maps onto the mother, and names a same-silence-different-gender test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A man quietly takes charge of his own therapy: he sets the agenda, reassures the therapist that 'we're making good progress,' tracks the time, and smooths over any awkward moment. He grew up as the steady one in a chaotic household, calming a volatile mother and parenting younger siblings. In one paragraph, propose the strongest conclusion about the relational role he is replaying and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that he replays the caretaker-manager role he held in a chaotic home, where safety depended on his keeping the volatile adult calm, so he casts the therapist as someone he must steady and reassure rather than allowing himself to be the one looked after. This is a strong claim because it predicts checkable consequences: he should take the same managing, reassuring role across his other relationships; the role should map onto his history of calming his mother and parenting his siblings; and he should become anxious or disoriented when invited to simply receive care and let the therapist hold the structure. I would test it by checking whether he runs his friendships and work relationships the same way, by tracing the role to his described childhood, and by watching his reaction when the therapist gently takes back the agenda and offers to look after him instead.",
      yieldAnchors: [
        "He sets the agenda, tracks time, and reassures the therapist",
        "He smooths over every awkward moment in session",
        "He was the steady one calming a volatile mother and parenting siblings",
      ],
      riskAnchors: [
        "He takes the same managing role in other relationships",
        "The role maps onto his childhood caretaking",
        "He grows anxious when invited to simply be cared for",
      ],
      defeatedBy: [
        "He readily lets others lead and care for him elsewhere",
        "His managing is purely practical with no anxiety when it is removed",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that he replays the caretaker-manager role he held in a chaotic home, where safety depended on his keeping the volatile adult calm, so he casts the therapist as someone he must steady and reassure rather than allowing himself to be the one looked after. This is a strong claim because it predicts checkable consequences: he should take the same managing, reassuring role across his other relationships; the role should map onto his history of calming his mother and parenting his siblings; and he should become anxious or disoriented when invited to simply receive care and let the therapist hold the structure. I would test it by checking whether he runs his friendships and work relationships the same way, by tracing the role to his described childhood, and by watching his reaction when the therapist gently takes back the agenda and offers to look after him instead.",
    explanation:
      "The dodge 'he is just an organized, considerate client, nothing to interpret' earns near-zero; top credit goes to the caretaker-role conclusion that binds the in-session managing to his childhood and names a hand-back-the-agenda test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A patient has a history of finding a 'perfect' helper — a doctor, then a coach, then a spiritual teacher — adoring them, and then dropping each one cold the instant they reveal an ordinary human flaw. Six months in, she has begun describing her therapist as 'the one who finally gets it,' and the therapist notices the same adoration building. In one paragraph, propose the strongest conclusion about the template being replayed and describe how you would test it, including what it implies for the work ahead.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that she carries an all-or-nothing template in which a helper must be flawless to be safe, so she idealizes each new figure and then must drop them entirely the moment an ordinary flaw appears — and she is now building the same idealization toward the therapist, which predicts a coming crash when the therapist inevitably proves human. This is a strong claim because it predicts checkable consequences: the rise-and-fall should repeat across her helpers; the fall should be triggered each time by a minor, ordinary lapse rather than a real failure; and, crucially, the same collapse should threaten the therapy once the therapist disappoints her in some small way. I would test it by tracing whether each past drop followed a trivial flaw, by watching for the predicted devaluation as the alliance deepens, and by deliberately working, before the crash, on whether she can hold the therapist's helpful and flawed sides together — if she can begin to tolerate an imperfect helper without dropping them, the template is loosening rather than simply repeating.",
      yieldAnchors: [
        "She idealizes each helper then drops them at the first ordinary flaw",
        "The pattern has repeated across a doctor, coach, and teacher",
        "She is now idealizing the therapist the same way",
      ],
      riskAnchors: [
        "Each past drop followed a minor, ordinary lapse",
        "A devaluation crash is predicted as the alliance deepens",
        "Tolerating an imperfect helper would show the template loosening",
      ],
      defeatedBy: [
        "Her past helpers each committed a genuine, serious failure",
        "She can already hold helpers' good and flawed sides together",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that she carries an all-or-nothing template in which a helper must be flawless to be safe, so she idealizes each new figure and then must drop them entirely the moment an ordinary flaw appears — and she is now building the same idealization toward the therapist, which predicts a coming crash when the therapist inevitably proves human. This is a strong claim because it predicts checkable consequences: the rise-and-fall should repeat across her helpers; the fall should be triggered each time by a minor, ordinary lapse rather than a real failure; and, crucially, the same collapse should threaten the therapy once the therapist disappoints her in some small way. I would test it by tracing whether each past drop followed a trivial flaw, by watching for the predicted devaluation as the alliance deepens, and by deliberately working, before the crash, on whether she can hold the therapist's helpful and flawed sides together — if she can begin to tolerate an imperfect helper without dropping them, the template is loosening rather than simply repeating.",
    explanation:
      "The timid 'maybe each helper really did let her down, we shouldn't predict' earns near-zero; credit goes to the all-or-nothing template conclusion that forecasts a devaluation crash with the therapist and names a hold-both-sides test that could refute or confirm it.",
  },
  {
    itemType: "written",
    prompt:
      "A woman expects rejection from everyone close to her and, to get ahead of it, turns cold and distant first — with friends, with partners, and now, after a warm early stretch, with her therapist, whom she has started meeting with crossed arms and clipped answers. She was raised by a parent who was affectionate one day and icy the next, for no reason she could ever predict. In one paragraph, propose the strongest conclusion about the template she is replaying and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that she carries a template from an unpredictably affectionate-then-icy parent in which closeness is dangerous because rejection can strike at any moment, so she rejects first to control the timing — and she now imports this onto the therapist, going cold precisely as the relationship warms in order to preempt the abandonment she expects. This is a strong claim because it predicts checkable consequences: her coldness should switch on as closeness grows rather than after any actual rejection; the same reject-first pattern should appear across friends, partners, and the therapist; and it should map onto the parent's unpredictable warm-then-cold swings. I would test it by checking whether her withdrawal reliably follows warmth rather than any real slight, by comparing the pattern across her relationships, and by watching whether the coldness eases as the therapist stays steadily warm and predictable, disconfirming the expectation that affection will suddenly turn to ice.",
      yieldAnchors: [
        "She turns cold first with friends, partners, and now the therapist",
        "The withdrawal followed a warm early stretch, not any rejection",
        "Her parent swung unpredictably from affectionate to icy",
      ],
      riskAnchors: [
        "Her coldness switches on as closeness grows, not after a slight",
        "The reject-first pattern repeats across her relationships",
        "It eases as the therapist stays steadily warm and predictable",
      ],
      defeatedBy: [
        "Her withdrawal each time followed a real rejection by the other person",
        "She stays warm and open as relationships deepen",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that she carries a template from an unpredictably affectionate-then-icy parent in which closeness is dangerous because rejection can strike at any moment, so she rejects first to control the timing — and she now imports this onto the therapist, going cold precisely as the relationship warms in order to preempt the abandonment she expects. This is a strong claim because it predicts checkable consequences: her coldness should switch on as closeness grows rather than after any actual rejection; the same reject-first pattern should appear across friends, partners, and the therapist; and it should map onto the parent's unpredictable warm-then-cold swings. I would test it by checking whether her withdrawal reliably follows warmth rather than any real slight, by comparing the pattern across her relationships, and by watching whether the coldness eases as the therapist stays steadily warm and predictable, disconfirming the expectation that affection will suddenly turn to ice.",
    explanation:
      "The cautious 'she's just guarded, we can't say why' earns near-zero; top credit goes to the reject-first template conclusion that ties the withdrawal to an unpredictable parent, predicts coldness rising with closeness, and names a follows-warmth-not-slight test that could refute it.",
  },
];

export const section: SectionContent = {
  slug: "transference",
  title: "Transference",
  weekNumber: 1,
  blurb:
    "Transference is the way we carry templates from old, important relationships into new ones — especially toward the therapist — so a present person gets reacted to as if they were someone from the past.",
  lectureTitle:
    "1.4 Transference: why we replay old relationships with new people",
  body: `# Transference

You have probably had the strange experience of disliking a stranger on sight, or trusting someone instantly, before they have done much of anything. Often the reason is not the person in front of you at all. It is that they rhyme with someone from your past — a tone of voice, a way of pausing, a kind of authority — and your mind quietly reaches for an old script and starts running it. Psychodynamic therapy gives this everyday phenomenon a name: **transference**. It is the tendency to bring templates from old, important relationships into new ones, and to react to a present person as if they were a figure from before.

## Templates from old relationships

Early relationships teach us what to expect from people. A child with a reliable caregiver learns that closeness is safe; a child with an unpredictable one learns to brace for sudden withdrawal. These lessons harden into **templates** — fast, automatic expectations about how others will treat us and how we must behave to stay safe. The templates are useful shortcuts, but they are built from old data. When a new relationship is even loosely similar to an old one, the mind applies the old template by default, often without our noticing. Transference is simply this default applied to people who don't actually fit it.

## Reacting to the past in the present

The signature of transference is a reaction that fits an old figure better than the present person. A patient flares with rage when the therapist is two minutes late — not because two minutes matters, but because lateness lands on a template of being abandoned by an unreliable parent. Another reads a therapist's neutral note-taking as an attack, because in childhood any record of his behavior was used against him. The present act is small and ordinary; the reaction is large and specific. That mismatch — a big, patterned response to a neutral trigger — is the clue that an old relationship is being replayed.

## Transference toward the therapist

The therapy room is a perfect stage for transference. The therapist is an important figure who matters to the patient, yet says relatively little about themselves, so the patient fills in the blanks with expectations from the past. A warm therapist gets treated as a setup for humiliation by someone whose warmth was always a trap; a quiet therapist gets read as disappointed by someone whose withdrawn parent meant silence was punishment. This is not a nuisance to be cleared away. It is gold: the old pattern, which usually plays out invisibly in the patient's life, now appears live in the room where it can be seen, named, and worked with.

## The same conflict, again and again

Transference also shows up as repetition. When the *same* relationship conflict recurs across a boss, a partner, a friend, and now the therapist — "everyone eventually tries to control me," "everyone eventually leaves" — the common factor is not four unlucky coincidences but one template the person carries into each new bond. The strongest reading looks for the single old relationship the pattern fits and asks how that template is being imported onto each new figure. The cross-situational repetition is what turns a one-off reaction into convincing evidence of a template.

## Reading transference without overreading it

As always in this course, the goal is to commit to the strongest interpretation the evidence supports — and to name what would prove it wrong. A good transference reading does three things. It identifies the specific old template (not "something about his past" but "a controlling father, so direction feels like domination"). It binds the present evidence: the size of the reaction, its trigger, the matching history. And it names cheap, concrete tests. The best transference tests are nearly always the same three: **Does the reaction appear with other figures, or only this one? Does it match the original relationship it supposedly comes from? Does it fade when the present person reliably behaves differently from the old figure?** A real template keeps firing across people and clings even to disconfirming evidence; a fair response to the present person changes when the present person changes.

## The two ways to get it wrong

There are two failure modes, and they mirror each other. The first is the timid dodge: "the mind is too complex, we can't know why she reacted that way." But the evidence — a disproportionate reaction, a matching history, a pattern across relationships — is exactly what we *can* reason from, and refusing to do so wastes it. The second is the lurid overreach: deciding the therapist really is hostile, or that the patient's suspicious partner really must be cheating, when the present facts plainly don't support it. The discipline of transference work is to read the old template from the evidence while testing it against the present reality, rather than collapsing into either "nothing can be said" or "the alarming story must be true."

## In the real world

Suppose a friend tells you her new manager is "obviously out to get her," though she has known him a week and nothing has actually happened. The dodge is "people are complicated, who knows." The overreach is "yes, sounds like a toxic boss, quit." A transference-aware move sits between them: maybe a present authority figure is being fitted to an old template. Notice what that opens up. It predicts she has felt this way about previous bosses; that the dread is out of proportion to anything the new manager has done; and that it should ease if he turns out to be reasonable over the coming weeks — whereas a genuinely hostile boss would keep giving real evidence. Three cheap checks, each able to refute the reading. That is the skill this section trains: when someone reacts to the present as if it were the past, name the old relationship being replayed, bind the evidence, and say exactly what would show you are wrong.`,
  homework: {
    mcq,
    hybrid,
    written,
  },
};
