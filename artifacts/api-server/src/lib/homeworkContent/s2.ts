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
      "A patient three weeks into therapy tells her counselor, 'you are the only person who has ever truly understood me.' The week the counselor takes a long-planned vacation, the patient declares her 'cold and useless, just like everyone else.' Which conclusion best follows?",
    mcOptions: [
      {
        text: "She seems to change how she feels about her counselor.",
        credit: 0.3,
      },
      {
        text: "The flip tracks the let-down, not the person: an all-good image that collapses into all-bad the moment the counselor is unavailable points to splitting — she cannot hold that someone she loves has also disappointed her, so the cherished 'good' counselor is swapped wholesale for an 'all-bad' one to keep love and anger from ever touching; test whether the devaluation began precisely with the vacation rather than any real failing, whether the counselor is now seen as entirely bad with no good remembered, and whether the warm image returns intact once they reconnect.",
        credit: 1.0,
      },
      {
        text: "She might have mixed feelings about the counselor leaving; we could explore the reaction.",
        credit: 0.6,
      },
      {
        text: "People are entitled to change their minds about who helps them, so there is nothing here to read into.",
        credit: 0,
      },
    ],
    correctAnswer:
      "The flip tracks the let-down, not the person: an all-good image that collapses into all-bad the moment the counselor is unavailable points to splitting — she cannot hold that someone she loves has also disappointed her, so the cherished 'good' counselor is swapped wholesale for an 'all-bad' one to keep love and anger from ever touching; test whether the devaluation began precisely with the vacation rather than any real failing, whether the counselor is now seen as entirely bad with no good remembered, and whether the warm image returns intact once they reconnect.",
    explanation:
      "Top credit reads an idealized image collapsing to all-bad at the exact moment of the vacation as splitting and names a flip-tracks-the-let-down test; 'people change their minds' is the dodge the disappointment-locked timing defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "For three weeks a woman calls her new boyfriend 'perfect, my soulmate, the one.' The night he forgets a dinner reservation, she decides he is 'a selfish liar who never cared about me at all.' Which conclusion best follows?",
    mcOptions: [
      {
        text: "The soulmate talk was an act; she was lying about liking him the whole time.",
        credit: 0,
      },
      {
        text: "The valuation flips on a tiny disappointment, not new information: 'soulmate' becoming 'liar who never cared' over one forgotten reservation points to splitting — a single let-down introduced 'bad' into an all-good image she cannot integrate, so the whole person is rewritten as all-bad to keep the good love uncontaminated by anger; test whether the devaluation is out of all proportion to the mistake, whether nothing good about him survives the flip, and whether the adoring image snaps back the moment he makes amends.",
        credit: 1.0,
      },
      {
        text: "She seems to go back and forth on her boyfriend.",
        credit: 0.3,
      },
      {
        text: "She might have caught real warning signs; we could talk about the relationship.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The valuation flips on a tiny disappointment, not new information: 'soulmate' becoming 'liar who never cared' over one forgotten reservation points to splitting — a single let-down introduced 'bad' into an all-good image she cannot integrate, so the whole person is rewritten as all-bad to keep the good love uncontaminated by anger; test whether the devaluation is out of all proportion to the mistake, whether nothing good about him survives the flip, and whether the adoring image snaps back the moment he makes amends.",
    explanation:
      "Top credit reads a soulmate-to-liar flip over one small letdown as splitting and names a disproportion-to-the-mistake test; 'she was lying the whole time' is the lurid overreach the sincerity and suddenness of the shift defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "On an inpatient unit a patient insists her day nurse is 'an angel who actually cares' while the night nurse is 'abusive and out to get me.' Within days the two nurses are quietly feuding about her care. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Patients are allowed to like some staff more than others, so there is nothing to read into her preferences.",
        credit: 0,
      },
      {
        text: "She seems to like one nurse and dislike the other.",
        credit: 0.3,
      },
      {
        text: "The all-angel/all-devil split, spilling into a staff feud, is the tell: she is parceling out a 'good' and a 'bad' caregiver onto two real people because holding both care and disappointment in one relationship is intolerable — the staff are now living out the split she cannot hold inside; test whether each nurse is painted as wholly good or wholly bad with no nuance, whether the praise and blame track who last gratified versus frustrated her, and whether the labels swap if the 'good' nurse ever lets her down.",
        credit: 1.0,
      },
      {
        text: "It might be classic staff splitting; the team could compare notes on her.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The all-angel/all-devil split, spilling into a staff feud, is the tell: she is parceling out a 'good' and a 'bad' caregiver onto two real people because holding both care and disappointment in one relationship is intolerable — the staff are now living out the split she cannot hold inside; test whether each nurse is painted as wholly good or wholly bad with no nuance, whether the praise and blame track who last gratified versus frustrated her, and whether the labels swap if the 'good' nurse ever lets her down.",
    explanation:
      "Top credit reads the angel/devil division spilling into a staff feud as externalized splitting and names a wholly-good-vs-wholly-bad test; 'patients are allowed favorites' is the dodge the team-fracturing, all-or-nothing pattern defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A graduate student describes herself as 'brilliant, destined for greatness' on the days her work is praised, then as 'worthless human garbage' the day a single paper comes back with a B. There is no middle. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The self-image flips wholesale with each verdict: 'brilliant' becoming 'garbage' over one B, with no middle, points to splitting turned on the self — she cannot hold a self that is both capable and flawed, so a single disappointment converts an all-good self into an all-bad one to keep the two from mixing; test whether her self-worth swings entirely with the last piece of feedback, whether nothing good about herself survives a setback, and whether the grandiose self returns intact the next time she is praised.",
        credit: 1.0,
      },
      {
        text: "She is just fishing for reassurance and exaggerating to get attention.",
        credit: 0,
      },
      {
        text: "She seems to feel very up and down about herself.",
        credit: 0.3,
      },
      {
        text: "She might be hard on herself; we could look at her standards.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The self-image flips wholesale with each verdict: 'brilliant' becoming 'garbage' over one B, with no middle, points to splitting turned on the self — she cannot hold a self that is both capable and flawed, so a single disappointment converts an all-good self into an all-bad one to keep the two from mixing; test whether her self-worth swings entirely with the last piece of feedback, whether nothing good about herself survives a setback, and whether the grandiose self returns intact the next time she is praised.",
    explanation:
      "Top credit reads a self-image that swings from brilliant to garbage over one B as splitting of the self and names a swings-with-the-last-verdict test; 'fishing for attention' is the lurid overreach her genuine, all-or-nothing distress defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A teenager calls her best friend 'the only person who truly gets me, my whole world.' After the friend spends one Saturday with someone else, she announces the friend is 'a backstabbing fake who was never really my friend.' Which conclusion best follows?",
    mcOptions: [
      {
        text: "Teenage friendships are fickle and everyone drifts apart, so there is nothing to read into it.",
        credit: 0,
      },
      {
        text: "It might sting to feel left out; we could talk about the friendship.",
        credit: 0.6,
      },
      {
        text: "The reversal follows the slight, not any real betrayal: 'my whole world' becoming 'never really my friend' over one ordinary Saturday points to splitting — the small abandonment introduced 'bad' into a perfect friendship she cannot hold as both loving and imperfect, so the whole bond is rewritten as fake to keep love and hurt apart; test whether the devaluation began exactly when she felt excluded, whether the friend is now all-bad with no good remembered, and whether the adoring image returns the moment the friend gives her attention again.",
        credit: 1.0,
      },
      {
        text: "She seems to flip on her friends a lot.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The reversal follows the slight, not any real betrayal: 'my whole world' becoming 'never really my friend' over one ordinary Saturday points to splitting — the small abandonment introduced 'bad' into a perfect friendship she cannot hold as both loving and imperfect, so the whole bond is rewritten as fake to keep love and hurt apart; test whether the devaluation began exactly when she felt excluded, whether the friend is now all-bad with no good remembered, and whether the adoring image returns the moment the friend gives her attention again.",
    explanation:
      "Top credit reads a whole-world-to-fake flip over one missed Saturday as splitting and names a began-when-she-felt-excluded test; 'teen friendships are just fickle' is the dodge the all-or-nothing reversal and slight-locked timing defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "A man idolizes a mentor as 'the wisest person I know, a genius.' The first time the mentor gives him critical feedback, he recasts him as 'a fraud who has secretly always hated me and wanted me to fail.' Which conclusion best follows?",
    mcOptions: [
      {
        text: "He is lying about ever respecting the mentor; the praise was never sincere.",
        credit: 0,
      },
      {
        text: "He might be sensitive to criticism; we could discuss the feedback.",
        credit: 0.6,
      },
      {
        text: "He seems to have turned against his mentor.",
        credit: 0.3,
      },
      {
        text: "The 'genius' becomes a 'fraud who always hated me' the instant criticism arrives, which is the signature of splitting: a single disappointment introduced 'bad' into an idealized figure he cannot hold as both wise and disappointing, so the mentor is rewritten as wholly malign to protect the love from anger; test whether the reversal began precisely with the feedback rather than any new fact, whether nothing admirable about the mentor survives it, and whether the idealization returns once the mentor offers warmth again.",
        credit: 1.0,
      },
    ],
    correctAnswer:
      "The 'genius' becomes a 'fraud who always hated me' the instant criticism arrives, which is the signature of splitting: a single disappointment introduced 'bad' into an idealized figure he cannot hold as both wise and disappointing, so the mentor is rewritten as wholly malign to protect the love from anger; test whether the reversal began precisely with the feedback rather than any new fact, whether nothing admirable about the mentor survives it, and whether the idealization returns once the mentor offers warmth again.",
    explanation:
      "Top credit reads a genius-to-fraud reversal triggered by one critique as splitting and names a began-with-the-feedback test; 'he was never sincere' is the lurid overreach his genuine prior idealization defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A man describes his mother as 'a literal saint' the weeks she dotes on him and 'a monster who ruined my life' the weeks she frustrates him. He never holds both at once, and the label tracks the latest visit. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Everyone's feelings about their parents go up and down, so there is nothing to read into it.",
        credit: 0,
      },
      {
        text: "The saint/monster labels swap with each visit, never coexisting, which points to splitting: he cannot hold a mother who both loves and disappoints him, so she is filed as all-good or all-bad depending on whether she just gratified or frustrated him — keeping the cherished good mother safe from his anger at the bad one; test whether the label tracks the most recent interaction rather than any stable truth, whether the 'good' and 'bad' mother are ever allowed to be the same person, and whether the praise returns the moment she gratifies him again.",
        credit: 1.0,
      },
      {
        text: "He might have a complicated relationship with his mother; we could explore it.",
        credit: 0.6,
      },
      {
        text: "He seems to flip between loving and hating his mother.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The saint/monster labels swap with each visit, never coexisting, which points to splitting: he cannot hold a mother who both loves and disappoints him, so she is filed as all-good or all-bad depending on whether she just gratified or frustrated him — keeping the cherished good mother safe from his anger at the bad one; test whether the label tracks the most recent interaction rather than any stable truth, whether the 'good' and 'bad' mother are ever allowed to be the same person, and whether the praise returns the moment she gratifies him again.",
    explanation:
      "Top credit reads saint/monster labels that never coexist and track the latest visit as splitting and names a labels-follow-the-last-interaction test; 'everyone's feelings change' is the dodge the all-or-nothing, gratify-versus-frustrate pattern defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A woman calls her roommate 'the best friend I've ever had, basically family.' After the roommate borrows her charger and forgets to return it, she declares her 'a selfish user who was only ever using me.' Which conclusion best follows?",
    mcOptions: [
      {
        text: "She seems to have soured on her roommate.",
        credit: 0.3,
      },
      {
        text: "She is just being dramatic to manipulate the roommate into apologizing.",
        credit: 0,
      },
      {
        text: "It might be more than the charger; we could ask what is bothering her.",
        credit: 0.6,
      },
      {
        text: "'Basically family' becoming 'a user who was only using me' over a forgotten charger is splitting: a trivial let-down introduced 'bad' into an idealized friendship she cannot hold as both close and imperfect, so the whole relationship is rewritten as exploitative to keep the love free of disappointment; test whether the devaluation is wildly out of proportion to the charger, whether anything good about the roommate survives it, and whether the 'family' image returns the instant the roommate makes it right.",
        credit: 1.0,
      },
    ],
    correctAnswer:
      "'Basically family' becoming 'a user who was only using me' over a forgotten charger is splitting: a trivial let-down introduced 'bad' into an idealized friendship she cannot hold as both close and imperfect, so the whole relationship is rewritten as exploitative to keep the love free of disappointment; test whether the devaluation is wildly out of proportion to the charger, whether anything good about the roommate survives it, and whether the 'family' image returns the instant the roommate makes it right.",
    explanation:
      "Top credit reads a family-to-user flip over a forgotten charger as splitting and names a disproportion-to-the-offense test; 'she's just being manipulative' is the lurid overreach the genuine, instant reversal defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A patient speaks of her late father as 'a flawless, perfect man' and of her living mother as 'pure poison, the source of everything wrong with me.' Neither portrait admits a single exception. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Lots of people prefer one parent over the other, so there is nothing to read into it.",
        credit: 0,
      },
      {
        text: "The flawless-father/poison-mother division, with no exceptions allowed, points to splitting across two people: she keeps one parent perfectly good by depositing all the 'bad' into the other, because a father who was both loved and disappointing — and a mother who is both — is intolerable to hold; test whether each portrait is absolute with no counter-examples permitted, whether faults of the 'good' father are minimized or denied, and whether challenging the all-bad mother image is met with the bad simply migrating rather than integrating.",
        credit: 1.0,
      },
      {
        text: "She seems to idealize her father and blame her mother.",
        credit: 0.3,
      },
      {
        text: "She might have unresolved feelings about her parents; we could explore them.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The flawless-father/poison-mother division, with no exceptions allowed, points to splitting across two people: she keeps one parent perfectly good by depositing all the 'bad' into the other, because a father who was both loved and disappointing — and a mother who is both — is intolerable to hold; test whether each portrait is absolute with no counter-examples permitted, whether faults of the 'good' father are minimized or denied, and whether challenging the all-bad mother image is met with the bad simply migrating rather than integrating.",
    explanation:
      "Top credit reads an exceptionless good-parent/bad-parent division as splitting that protects one love by dumping 'bad' into the other and names a no-counter-examples-allowed test; 'people prefer one parent' is the dodge the absolute, all-or-nothing portraits defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "A woman joins a new community and within a week calls it 'perfect, I've finally found my people, my real family.' After one member gently disagrees with her, she declares the whole group 'toxic and fake' and quits. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She is faking the enthusiasm to fit in and never really meant it.",
        credit: 0,
      },
      {
        text: "She seems to have turned on the group.",
        credit: 0.3,
      },
      {
        text: "It might not have been the right fit; we could talk about what happened.",
        credit: 0.6,
      },
      {
        text: "'My real family' becoming 'toxic and fake' over a single disagreement is splitting: the instant idealization left no room for ordinary friction, so one note of 'bad' collapsed the all-good group into an all-bad one she had to flee, keeping the fantasy of perfect belonging from being spoiled; test whether the rejection followed the disagreement rather than any real harm, whether the whole group is condemned with no good member spared, and whether she would re-idealize a different group just as fast.",
        credit: 1.0,
      },
    ],
    correctAnswer:
      "'My real family' becoming 'toxic and fake' over a single disagreement is splitting: the instant idealization left no room for ordinary friction, so one note of 'bad' collapsed the all-good group into an all-bad one she had to flee, keeping the fantasy of perfect belonging from being spoiled; test whether the rejection followed the disagreement rather than any real harm, whether the whole group is condemned with no good member spared, and whether she would re-idealize a different group just as fast.",
    explanation:
      "Top credit reads instant idealization collapsing to 'all toxic' over one disagreement as splitting and names a followed-the-disagreement test; 'she was faking it' is the lurid overreach her sincere search for belonging defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "After one heated argument in which his wife snapped at him, a man concludes 'she has never loved me, the entire marriage has been a lie.' Twenty years of warmth are erased in an afternoon. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He seems very upset about the argument.",
        credit: 0.3,
      },
      {
        text: "Couples say harsh things in fights and people reconsider, so there is nothing to read into it.",
        credit: 0,
      },
      {
        text: "Twenty years of love erased by one snapped remark is splitting: the argument introduced 'bad' into an image of his wife he cannot hold as both loving and capable of hurting him, so the whole marriage is rewritten as a lie to keep love and anger from coexisting; test whether the 'she never loved me' verdict appeared only after the fight, whether all prior good is genuinely wiped out rather than balanced against the hurt, and whether the loving image returns the moment they reconcile.",
        credit: 1.0,
      },
      {
        text: "He might be hurt and reactive; we could revisit it once he's calmer.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Twenty years of love erased by one snapped remark is splitting: the argument introduced 'bad' into an image of his wife he cannot hold as both loving and capable of hurting him, so the whole marriage is rewritten as a lie to keep love and anger from coexisting; test whether the 'she never loved me' verdict appeared only after the fight, whether all prior good is genuinely wiped out rather than balanced against the hurt, and whether the loving image returns the moment they reconcile.",
    explanation:
      "Top credit reads twenty years erased by one remark as splitting and names an appeared-only-after-the-fight test; 'couples say harsh things' is the dodge the total wipeout of all prior good defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A high-schooler adores her favorite teacher as 'the only one who believes in me.' When the teacher marks her essay down a grade, she tells everyone the teacher is 'cruel and has always been out to destroy me.' Which conclusion best follows?",
    mcOptions: [
      {
        text: "She is manipulating the situation to pressure the teacher into a better grade.",
        credit: 0,
      },
      {
        text: "It might feel like a betrayal; we could talk about the grade.",
        credit: 0.6,
      },
      {
        text: "The beloved teacher becoming 'cruel and always out to destroy me' over one lowered grade is splitting: a disappointment introduced 'bad' into an idealized figure she cannot hold as both supportive and capable of marking her down, so the teacher is recast as wholly malicious to shield the cherished belief that someone believes in her; test whether the hatred began exactly with the grade rather than any pattern, whether nothing good about the teacher survives it, and whether the adoration returns the next time the teacher encourages her.",
        credit: 1.0,
      },
      {
        text: "She seems to have changed her mind about the teacher.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The beloved teacher becoming 'cruel and always out to destroy me' over one lowered grade is splitting: a disappointment introduced 'bad' into an idealized figure she cannot hold as both supportive and capable of marking her down, so the teacher is recast as wholly malicious to shield the cherished belief that someone believes in her; test whether the hatred began exactly with the grade rather than any pattern, whether nothing good about the teacher survives it, and whether the adoration returns the next time the teacher encourages her.",
    explanation:
      "Top credit reads a beloved-to-cruel reversal over one grade as splitting and names a began-with-the-grade test; 'she's manipulating for a better grade' is the lurid overreach her genuine prior adoration and distress defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "Describing a recent ex, a woman swings between 'he was the most amazing man alive' and 'he was a pure monster' with each phone call between them, never settling on a mixed picture. Which conclusion best follows?",
    mcOptions: [
      {
        text: "People have complicated feelings about their exes, so there is nothing to read into it.",
        credit: 0,
      },
      {
        text: "She seems unsure how she feels about him.",
        credit: 0.3,
      },
      {
        text: "The swing between 'most amazing' and 'pure monster' with each contact, never integrated, is splitting: she cannot hold a single ex who was both loved and hurtful, so each call resets him to all-good or all-bad depending on whether it gratified or wounded her — keeping the good love quarantined from the rage; test whether the portrait flips with the tone of the latest call rather than new facts, whether 'amazing' and 'monster' are ever allowed to be the same man, and whether a warm call instantly restores the idealized version.",
        credit: 1.0,
      },
      {
        text: "She might still be processing the breakup; we could give it time.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The swing between 'most amazing' and 'pure monster' with each contact, never integrated, is splitting: she cannot hold a single ex who was both loved and hurtful, so each call resets him to all-good or all-bad depending on whether it gratified or wounded her — keeping the good love quarantined from the rage; test whether the portrait flips with the tone of the latest call rather than new facts, whether 'amazing' and 'monster' are ever allowed to be the same man, and whether a warm call instantly restores the idealized version.",
    explanation:
      "Top credit reads an amazing/monster swing that resets with each call as splitting and names a flips-with-the-latest-contact test; 'people have complicated feelings about exes' is the dodge the never-integrated, all-or-nothing oscillation defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A man in recovery calls his sponsor 'a lifesaver, the best man I know.' The night the sponsor says he cannot take a 3 a.m. call, the man brands him 'a phony who never actually gave a damn.' Which conclusion best follows?",
    mcOptions: [
      {
        text: "He is lying about the sponsor mattering; it was never genuine gratitude.",
        credit: 0,
      },
      {
        text: "He might feel let down; we could talk about what he needed.",
        credit: 0.6,
      },
      {
        text: "He seems to have flipped on his sponsor.",
        credit: 0.3,
      },
      {
        text: "A 'lifesaver' becoming 'a phony who never gave a damn' the moment one limit is set is splitting: the boundary introduced 'bad' into an idealized helper he cannot hold as both caring and unavailable, so the sponsor is rewritten as wholly false to keep the cherished sense of being saved from any disappointment; test whether the contempt began precisely with the declined call rather than any real neglect, whether all the sponsor's prior help is wiped out, and whether the gratitude returns the next time the sponsor is available.",
        credit: 1.0,
      },
    ],
    correctAnswer:
      "A 'lifesaver' becoming 'a phony who never gave a damn' the moment one limit is set is splitting: the boundary introduced 'bad' into an idealized helper he cannot hold as both caring and unavailable, so the sponsor is rewritten as wholly false to keep the cherished sense of being saved from any disappointment; test whether the contempt began precisely with the declined call rather than any real neglect, whether all the sponsor's prior help is wiped out, and whether the gratitude returns the next time the sponsor is available.",
    explanation:
      "Top credit reads a lifesaver-to-phony flip the moment a boundary is set as splitting and names a began-with-the-declined-call test; 'he was never grateful' is the lurid overreach his genuine prior reliance defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A patient calls a new specialist 'the only doctor who can save me, brilliant.' When the appointment starts twenty minutes late, she storms out calling him 'incompetent and dismissive, just like all the rest.' Which conclusion best follows?",
    mcOptions: [
      {
        text: "Everyone gets annoyed when a doctor runs late, so there is nothing to read into it.",
        credit: 0,
      },
      {
        text: "The brilliant savior becoming 'incompetent, just like all the rest' over a late start is splitting: a small frustration introduced 'bad' into an idealized rescuer she cannot hold as both skilled and fallible, so he is collapsed into the all-bad pile to protect the fantasy of a perfect savior elsewhere; test whether the contempt is wildly disproportionate to a late start, whether his competence is now denied wholesale, and whether the next clinician will be idealized just as quickly before the cycle repeats.",
        credit: 1.0,
      },
      {
        text: "She seems impatient with the doctor.",
        credit: 0.3,
      },
      {
        text: "She might have had a long wait and felt dismissed; we could discuss it.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The brilliant savior becoming 'incompetent, just like all the rest' over a late start is splitting: a small frustration introduced 'bad' into an idealized rescuer she cannot hold as both skilled and fallible, so he is collapsed into the all-bad pile to protect the fantasy of a perfect savior elsewhere; test whether the contempt is wildly disproportionate to a late start, whether his competence is now denied wholesale, and whether the next clinician will be idealized just as quickly before the cycle repeats.",
    explanation:
      "Top credit reads a savior-to-incompetent flip over a late start as splitting and names a disproportion-and-repeating-cycle test; 'everyone gets annoyed at a late doctor' is the dodge the wholesale denial of competence defeats.",
  },
];

const hybrid: HomeworkItem[] = [
  {
    itemType: "hybrid",
    prompt:
      "On a psychiatric unit a patient tells everyone her primary nurse is 'the only one who actually cares' and the charge nurse is 'cruel and trying to hurt me.' Soon the two nurses are arguing over her treatment plan. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She seems to favor one nurse over the other.",
        credit: 0.3,
      },
      {
        text: "The all-caring/all-cruel split that has set the staff against each other is the tell: she is depositing a 'good' and a 'bad' caregiver onto two real people because holding care and disappointment together in one relationship is intolerable, so the team is now enacting the split she cannot hold inside; test whether each nurse is painted wholly good or wholly bad with no nuance, whether the praise and blame track who last gratified versus frustrated her, and whether the 'good' nurse would be recast as bad the first time she sets a limit.",
        credit: 1.0,
      },
      {
        text: "She is playing the nurses against each other to get her way.",
        credit: 0,
      },
      {
        text: "It might be staff splitting; the team could compare notes.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'this is splitting' lead from the rival 'the charge nurse really is treating her worse,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: have the team compare actual care notes and watch whether each nurse is painted in absolute, no-exception terms that track who last gratified or frustrated her — all-or-nothing labels untethered from the real care point to splitting, not a real difference. My lead is refuted if the records show the charge nurse genuinely provided worse, neglectful care, which would make the 'bad' label an accurate report rather than a split.",
      yieldAnchors: [
        "One nurse is 'the only one who cares,' the other 'cruel'",
        "The two nurses are now feuding over her care",
        "The portraits are absolute, with no nuance",
      ],
      riskAnchors: [
        "Each nurse is painted wholly good or wholly bad",
        "Praise and blame track who last gratified or frustrated her",
        "The 'good' nurse would be recast as bad after one limit",
      ],
      defeatedBy: [
        "Records show the charge nurse really did give neglectful care",
        "Her judgments stay stable and proportionate over time",
      ],
    },
    correctAnswer:
      "The all-caring/all-cruel split that has set the staff against each other is the tell: she is depositing a 'good' and a 'bad' caregiver onto two real people because holding care and disappointment together in one relationship is intolerable, so the team is now enacting the split she cannot hold inside; test whether each nurse is painted wholly good or wholly bad with no nuance, whether the praise and blame track who last gratified versus frustrated her, and whether the 'good' nurse would be recast as bad the first time she sets a limit.",
    explanation:
      "Top credit reads the caring/cruel division fracturing the team as externalized splitting and is paired with a compare-the-care-notes test that names its refutation; 'she's playing them against each other' is the lurid overreach her genuine inability to integrate defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A woman three weeks into dating calls her partner 'flawless, the love of my life.' The night he does not answer one phone call, she decides he is 'a cold-hearted liar who never cared.' Which conclusion best follows?",
    mcOptions: [
      {
        text: "He probably gave her real reasons to doubt him; we could examine the relationship.",
        credit: 0.6,
      },
      {
        text: "She seems to swing on her partner.",
        credit: 0.3,
      },
      {
        text: "She is exaggerating to guilt-trip him into more attention.",
        credit: 0,
      },
      {
        text: "'The love of my life' becoming 'a cold-hearted liar' over one missed call is splitting: a tiny disappointment introduced 'bad' into an all-good image she cannot integrate, so the whole partner is rewritten as all-bad to keep the love uncontaminated by anger; test whether the devaluation is grossly out of proportion to a missed call, whether nothing good about him survives it, and whether the adoring image returns the instant he calls back.",
        credit: 1.0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'this is splitting' lead from the rival 'she spotted a genuine red flag,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: check whether the devaluation is wildly out of proportion to a single missed call and erases everything good about him at once — an instant, total reversal over a trivial trigger points to splitting, not a measured response to a real warning sign. My lead is refuted if the missed call turns out to sit atop a real pattern of deceit she has been weighing, which would make her conclusion a proportionate judgment.",
      yieldAnchors: [
        "Three weeks of calling him 'flawless, the love of my life'",
        "He is recast as a 'liar who never cared' over one missed call",
        "The reversal is total, with no good remembered",
      ],
      riskAnchors: [
        "The devaluation is out of all proportion to the trigger",
        "Nothing good about him survives the flip",
        "The adoring image returns the instant he calls back",
      ],
      defeatedBy: [
        "The missed call caps a real, weighed pattern of deceit",
        "Her view of him is stable and proportionate over time",
      ],
    },
    correctAnswer:
      "'The love of my life' becoming 'a cold-hearted liar' over one missed call is splitting: a tiny disappointment introduced 'bad' into an all-good image she cannot integrate, so the whole partner is rewritten as all-bad to keep the love uncontaminated by anger; test whether the devaluation is grossly out of proportion to a missed call, whether nothing good about him survives it, and whether the adoring image returns the instant he calls back.",
    explanation:
      "Top credit reads a love-of-my-life-to-liar flip over one missed call as splitting and is paired with a disproportion-to-the-trigger test that names its refutation; 'she's guilt-tripping him' is the lurid overreach the sincere, instant reversal defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A man calls his sister 'my rock, the one person I can always count on.' When she cannot lend him money one month, he declares her 'dead to me, a selfish snake who never loved me.' Which conclusion best follows?",
    mcOptions: [
      {
        text: "Money strains a lot of families, so there is nothing to read into it.",
        credit: 0,
      },
      {
        text: "The 'rock' becoming 'a selfish snake who never loved me' over one declined loan is splitting: a single refusal introduced 'bad' into an idealized sister he cannot hold as both loving and unable to help this once, so she is rewritten as all-bad to keep love and resentment from mixing; test whether the cutoff began precisely with the refusal rather than any real betrayal, whether years of support are wiped out at once, and whether the 'rock' image returns the next time she comes through for him.",
        credit: 1.0,
      },
      {
        text: "He seems angry at his sister.",
        credit: 0.3,
      },
      {
        text: "He might feel unsupported; we could talk it through.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'this is splitting' lead from the rival 'his sister really has a history of letting him down,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: see whether one declined loan instantly erases years of reliable support and recasts her as wholly bad — a total reversal triggered by a single refusal points to splitting, not a fair tally of a real pattern. My lead is refuted if she actually has a long record of abandoning him and the loan was the latest in a documented series, which would make 'snake' a weighed conclusion.",
      yieldAnchors: [
        "He calls his sister 'my rock' he can always count on",
        "One declined loan makes her 'dead to me'",
        "Years of support are erased at once",
      ],
      riskAnchors: [
        "The cutoff began precisely with the refusal",
        "Years of support are wiped out wholesale",
        "The 'rock' image returns when she next comes through",
      ],
      defeatedBy: [
        "She has a real, documented history of abandoning him",
        "His view of her stays stable and proportionate",
      ],
    },
    correctAnswer:
      "The 'rock' becoming 'a selfish snake who never loved me' over one declined loan is splitting: a single refusal introduced 'bad' into an idealized sister he cannot hold as both loving and unable to help this once, so she is rewritten as all-bad to keep love and resentment from mixing; test whether the cutoff began precisely with the refusal rather than any real betrayal, whether years of support are wiped out at once, and whether the 'rock' image returns the next time she comes through for him.",
    explanation:
      "Top credit reads a rock-to-snake reversal over one declined loan as splitting and is paired with a one-refusal-erases-years test that names its refutation; 'money strains families' is the dodge the total wipeout of years of support defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A patient describes herself as 'exceptional, better than everyone here' on good days and 'subhuman, a piece of trash' the day after a minor setback. The two self-images never coexist. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She seems to have low self-esteem some days.",
        credit: 0.3,
      },
      {
        text: "She is exaggerating both extremes to get reactions from staff.",
        credit: 0,
      },
      {
        text: "The self swinging from 'exceptional' to 'trash' over a minor setback, never integrated, is splitting turned inward: she cannot hold a self that is both worthy and flawed, so a single disappointment converts an all-good self into an all-bad one to keep them from touching; test whether her self-worth swings entirely with the latest outcome, whether any stable middle self survives a setback, and whether the grandiose self returns intact the next time things go well.",
        credit: 1.0,
      },
      {
        text: "She might judge herself harshly; we could look at her self-talk.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'splitting of the self-image' lead from the rival 'this is ordinary disappointment after a setback,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: watch whether a minor setback flips her entire self-image to 'subhuman trash' with no stable middle and then resets to 'exceptional' at the next success — total, polarized swings tied to the latest outcome point to splitting of the self, not normal letdown. My lead is refuted if she holds a steady, mixed view of herself through setbacks and only feels proportionate, passing disappointment.",
      yieldAnchors: [
        "She is 'exceptional' on good days, 'subhuman trash' after setbacks",
        "The two self-images never coexist",
        "A minor setback triggers the crash",
      ],
      riskAnchors: [
        "Self-worth swings entirely with the latest outcome",
        "No stable middle self survives a setback",
        "The grandiose self returns intact after a success",
      ],
      defeatedBy: [
        "She holds a steady, mixed view of herself through setbacks",
        "Her low moments are proportionate and passing",
      ],
    },
    correctAnswer:
      "The self swinging from 'exceptional' to 'trash' over a minor setback, never integrated, is splitting turned inward: she cannot hold a self that is both worthy and flawed, so a single disappointment converts an all-good self into an all-bad one to keep them from touching; test whether her self-worth swings entirely with the latest outcome, whether any stable middle self survives a setback, and whether the grandiose self returns intact the next time things go well.",
    explanation:
      "Top credit reads an exceptional-to-trash swing over a minor setback as splitting of the self and is paired with a swings-with-the-latest-outcome test that names its refutation; 'she's exaggerating for reactions' is the lurid overreach the genuine, polarized self-states defeat.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A client idealizes her therapist as 'the warmest, most caring person I've ever met.' When the therapist ends a session on time while she is mid-story, she recasts her as 'robotic, cold, and uncaring like everyone else.' Which conclusion best follows?",
    mcOptions: [
      {
        text: "Therapists can come across as cold; we could ask if she felt dismissed.",
        credit: 0.6,
      },
      {
        text: "She is performing hurt to manipulate the therapist into longer sessions.",
        credit: 0,
      },
      {
        text: "The warmest person becoming 'robotic and uncaring' the moment a session ends on time is splitting: the ordinary boundary introduced 'bad' into an idealized caregiver she cannot hold as both warm and limit-setting, so the therapist is collapsed into the all-bad pile to keep the cherished warmth from being spoiled by frustration; test whether the coldness verdict began exactly at the session boundary rather than any real neglect, whether all prior warmth is denied, and whether the idealized image returns at the next attuned moment.",
        credit: 1.0,
      },
      {
        text: "She seems to have changed her view of the therapist.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'this is splitting' lead from the rival 'the therapist genuinely was cold and dismissive,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: check whether the 'uncaring' verdict was triggered solely by the on-time ending and erased all the warmth she described minutes earlier — a total reversal pinned to a routine boundary points to splitting, not an accurate read of real coldness. My lead is refuted if the therapist actually behaved curtly or dismissively beyond simply keeping time, which would make the patient's reaction a fair response.",
      yieldAnchors: [
        "She called the therapist the warmest person she's met",
        "Ending on time made her 'robotic and uncaring'",
        "All prior warmth is suddenly denied",
      ],
      riskAnchors: [
        "The coldness verdict began exactly at the boundary",
        "All prior warmth is wiped out",
        "The idealized image returns at the next attuned moment",
      ],
      defeatedBy: [
        "The therapist actually behaved curtly beyond keeping time",
        "Her view of the therapist stays stable and proportionate",
      ],
    },
    correctAnswer:
      "The warmest person becoming 'robotic and uncaring' the moment a session ends on time is splitting: the ordinary boundary introduced 'bad' into an idealized caregiver she cannot hold as both warm and limit-setting, so the therapist is collapsed into the all-bad pile to keep the cherished warmth from being spoiled by frustration; test whether the coldness verdict began exactly at the session boundary rather than any real neglect, whether all prior warmth is denied, and whether the idealized image returns at the next attuned moment.",
    explanation:
      "Top credit reads a warmest-to-uncaring flip at an on-time ending as splitting and is paired with a triggered-by-the-boundary test that names its refutation; 'she's performing hurt to manipulate' is the lurid overreach the genuine prior idealization defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A teenager calls her friend group 'the best friends anyone could have.' After she is not invited to one weekend outing, she sobs that 'they all secretly hate me and always have.' Which conclusion best follows?",
    mcOptions: [
      {
        text: "Friends leave each other out sometimes; there is nothing to read into it.",
        credit: 0,
      },
      {
        text: "She seems hurt about being left out.",
        credit: 0.3,
      },
      {
        text: "'The best friends anyone could have' becoming 'they all secretly hate me' over one missed invite is splitting: the exclusion introduced 'bad' into an all-good group she cannot hold as both loving and capable of leaving her out, so the whole group is recast as secretly hostile to keep love and rejection from coexisting; test whether the 'they hate me' verdict began precisely with the missed invite, whether every member is condemned with no exception, and whether the warm image returns the moment they include her again.",
        credit: 1.0,
      },
      {
        text: "She might feel excluded; we could talk about what happened.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'this is splitting' lead from the rival 'the group really is excluding and disliking her,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: see whether one missed invitation flips the whole group from 'best friends' to 'all secretly hate me' with no member spared and no real evidence of dislike — a total, sudden reversal over a single slight points to splitting, not an accurate read of rejection. My lead is refuted if the group actually has been consistently freezing her out and treating her with hostility, which would make her conclusion a fair appraisal.",
      yieldAnchors: [
        "She calls them 'the best friends anyone could have'",
        "One missed invite makes 'they all secretly hate me'",
        "Every member is condemned with no exception",
      ],
      riskAnchors: [
        "The 'they hate me' verdict began with the missed invite",
        "No member is spared the condemnation",
        "The warm image returns once they include her",
      ],
      defeatedBy: [
        "The group has consistently frozen her out and been hostile",
        "Her view of the group is stable and proportionate",
      ],
    },
    correctAnswer:
      "'The best friends anyone could have' becoming 'they all secretly hate me' over one missed invite is splitting: the exclusion introduced 'bad' into an all-good group she cannot hold as both loving and capable of leaving her out, so the whole group is recast as secretly hostile to keep love and rejection from coexisting; test whether the 'they hate me' verdict began precisely with the missed invite, whether every member is condemned with no exception, and whether the warm image returns the moment they include her again.",
    explanation:
      "Top credit reads a best-friends-to-all-hate-me flip over one missed invite as splitting and is paired with a began-with-the-missed-invite test that names its refutation; 'friends leave each other out' is the dodge the no-exception condemnation of the whole group defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A woman speaks of her late father as 'a perfect, gentle saint' and of her living mother as 'pure evil who poisoned everything.' She bristles at any fact that complicates either picture. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She seems to love her father and resent her mother.",
        credit: 0.3,
      },
      {
        text: "Plenty of people prefer one parent, so there is nothing to read into it.",
        credit: 0,
      },
      {
        text: "The perfect-saint father and pure-evil mother, defended against any complicating fact, point to splitting across two people: she keeps one parent flawlessly good by depositing all the 'bad' into the other, because a parent who is both loved and disappointing is intolerable to hold together; test whether each portrait is absolute with no exceptions permitted, whether faults of the 'good' father are denied outright, and whether challenging the all-bad mother makes the 'bad' migrate rather than integrate into a mixed view.",
        credit: 1.0,
      },
      {
        text: "She might have unresolved family feelings; we could explore them.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'this is splitting' lead from the rival 'her father really was kind and her mother really was abusive,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: offer one mild, true complication to each portrait and watch whether she can hold it — a flat refusal to allow her father any fault or her mother any virtue points to splitting, not an accurate memory of two very different parents. My lead is refuted if she can acknowledge real flaws in her father and real kindnesses in her mother while still judging the mother harshly, which would fit a fair, integrated appraisal of genuinely different people.",
      yieldAnchors: [
        "Father is a 'perfect, gentle saint'",
        "Mother is 'pure evil who poisoned everything'",
        "She bristles at any complicating fact",
      ],
      riskAnchors: [
        "Each portrait is absolute, with no exceptions",
        "Faults of the 'good' father are denied outright",
        "Challenged, the 'bad' migrates rather than integrates",
      ],
      defeatedBy: [
        "She can hold real flaws in the father and virtues in the mother",
        "The mother was genuinely, verifiably abusive",
      ],
    },
    correctAnswer:
      "The perfect-saint father and pure-evil mother, defended against any complicating fact, point to splitting across two people: she keeps one parent flawlessly good by depositing all the 'bad' into the other, because a parent who is both loved and disappointing is intolerable to hold together; test whether each portrait is absolute with no exceptions permitted, whether faults of the 'good' father are denied outright, and whether challenging the all-bad mother makes the 'bad' migrate rather than integrate into a mixed view.",
    explanation:
      "Top credit reads an exceptionless saint/evil division defended against all nuance as splitting that keeps one love pure and is paired with a try-a-mild-complication test that names its refutation; 'people prefer one parent' is the dodge the absolute, all-or-nothing portraits defeat.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A new employee gushes that her supervisor is 'a visionary, the best boss alive.' The first time the supervisor corrects a small error, she tells colleagues he is 'a tyrant who has always wanted me gone.' Which conclusion best follows?",
    mcOptions: [
      {
        text: "She is bad-mouthing him to build allies and undermine him.",
        credit: 0,
      },
      {
        text: "She seems to have turned on her boss.",
        credit: 0.3,
      },
      {
        text: "The 'visionary' becoming 'a tyrant who always wanted me gone' over a small correction is splitting: the criticism introduced 'bad' into an idealized boss she cannot hold as both admirable and capable of correcting her, so he is recast as wholly hostile to keep her admiration safe from the sting; test whether the contempt began exactly with the correction rather than any pattern, whether nothing good about him survives it, and whether the idealization returns the next time he praises her.",
        credit: 1.0,
      },
      {
        text: "She might feel criticized; we could talk about the feedback.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'this is splitting' lead from the rival 'the supervisor really is a hostile, punitive boss,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: check whether a single small correction flipped him instantly from 'best boss alive' to 'tyrant who always wanted me gone,' erasing all the good with no real pattern of hostility — a total reversal pinned to one piece of feedback points to splitting. My lead is refuted if he has a documented history of punitive, targeting behavior toward her, which would make 'tyrant' a fair description rather than a split.",
      yieldAnchors: [
        "She called him 'a visionary, the best boss alive'",
        "One small correction made him 'a tyrant'",
        "She claims he 'always wanted me gone'",
      ],
      riskAnchors: [
        "The contempt began exactly with the correction",
        "Nothing good about him survives the flip",
        "The idealization returns the next time he praises her",
      ],
      defeatedBy: [
        "He has a real history of punitive, targeting behavior",
        "Her view of him stays stable and proportionate",
      ],
    },
    correctAnswer:
      "The 'visionary' becoming 'a tyrant who always wanted me gone' over a small correction is splitting: the criticism introduced 'bad' into an idealized boss she cannot hold as both admirable and capable of correcting her, so he is recast as wholly hostile to keep her admiration safe from the sting; test whether the contempt began exactly with the correction rather than any pattern, whether nothing good about him survives it, and whether the idealization returns the next time he praises her.",
    explanation:
      "Top credit reads a visionary-to-tyrant flip over one correction as splitting and is paired with a began-with-the-correction test that names its refutation; 'she's bad-mouthing him to build allies' is the lurid overreach her genuine prior admiration defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "In one day a woman calls her boyfriend 'my whole world, the only good thing in my life' in the morning and 'a monster I have to escape' by night — the shift coming after he disagreed with her about a movie. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Couples bicker and feelings shift; there is nothing to read into a single day.",
        credit: 0,
      },
      {
        text: "The same-day swing from 'my whole world' to 'a monster' over a disagreement about a movie is splitting at high speed: a trivial difference introduced 'bad' into an all-good image she cannot integrate, so within hours he is rewritten as all-bad to keep love and anger from ever overlapping; test whether the flip tracks the disagreement rather than anything serious, whether the morning's good is wholly erased by night, and whether 'my whole world' returns by the next morning if he placates her.",
        credit: 1.0,
      },
      {
        text: "She seems to run hot and cold on her boyfriend.",
        credit: 0.3,
      },
      {
        text: "She might be overwhelmed today; we could check in tomorrow.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'rapid splitting' lead from the rival 'this is an ordinary couple's spat,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: watch whether a minor disagreement flips 'my whole world' to 'a monster' within hours, wiping out the morning's adoration, and then resets to idealization once he placates her — same-day total reversals over trivia point to rapid splitting, not a normal spat. My lead is refuted if her feelings stay proportionate and mixed through the disagreement rather than collapsing into all-good or all-bad extremes.",
      yieldAnchors: [
        "Morning: 'my whole world, the only good thing'",
        "Night: 'a monster I have to escape'",
        "The trigger was disagreeing about a movie",
      ],
      riskAnchors: [
        "The flip tracks the disagreement, not anything serious",
        "The morning's good is wholly erased by night",
        "Idealization returns by morning if he placates her",
      ],
      defeatedBy: [
        "Her feelings stay proportionate and mixed through the spat",
        "The 'monster' label reflects genuinely serious behavior",
      ],
    },
    correctAnswer:
      "The same-day swing from 'my whole world' to 'a monster' over a disagreement about a movie is splitting at high speed: a trivial difference introduced 'bad' into an all-good image she cannot integrate, so within hours he is rewritten as all-bad to keep love and anger from ever overlapping; test whether the flip tracks the disagreement rather than anything serious, whether the morning's good is wholly erased by night, and whether 'my whole world' returns by the next morning if he placates her.",
    explanation:
      "Top credit reads a same-day whole-world-to-monster swing over a movie disagreement as rapid splitting and is paired with a flip-tracks-the-disagreement test that names its refutation; 'couples bicker' is the dodge the total, hours-long reversal over trivia defeats.",
  },
];

const written: HomeworkItem[] = [
  {
    itemType: "written",
    prompt:
      "Early in treatment a patient tells you 'you've already saved my life, you're the only good therapist I've ever had.' In one paragraph, propose the strongest conclusion about what this instant idealization is expressing and what it predicts, and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that an instant, total idealization is the front half of a split: by making me all-good she keeps care and disappointment from ever mixing, which means the same all-or-nothing machinery will recast me as all-bad the first time I frustrate her — a missed appointment, a limit, a vacation. This is a strong claim because it predicts checkable consequences: the idealization should be absolute and exceptionless rather than warm-but-realistic; it should rest on very little actual knowledge of me; and it should flip to wholesale devaluation upon the first ordinary let-down, then swing back when I am attuned again. I would test it by noting how nuanced or absolute her view of me is, by watching what happens at the first small disappointment, and by tracking whether her image of me reorganizes around the latest interaction rather than holding steady — refuted if she can already hold me as helpful but imperfect and stays proportionate when I let her down.",
      yieldAnchors: [
        "Instant, total idealization of the therapist",
        "'The only good therapist,' with no qualification",
        "It rests on very little real knowledge of me",
      ],
      riskAnchors: [
        "The idealization is absolute and exceptionless",
        "It will flip to devaluation at the first let-down",
        "The image reorganizes around the latest interaction",
      ],
      defeatedBy: [
        "She holds me as helpful but imperfect from the start",
        "She stays proportionate when I first disappoint her",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that an instant, total idealization is the front half of a split: by making me all-good she keeps care and disappointment from ever mixing, which means the same all-or-nothing machinery will recast me as all-bad the first time I frustrate her — a missed appointment, a limit, a vacation. This is a strong claim because it predicts checkable consequences: the idealization should be absolute and exceptionless rather than warm-but-realistic; it should rest on very little actual knowledge of me; and it should flip to wholesale devaluation upon the first ordinary let-down, then swing back when I am attuned again. I would test it by noting how nuanced or absolute her view of me is, by watching what happens at the first small disappointment, and by tracking whether her image of me reorganizes around the latest interaction rather than holding steady — refuted if she can already hold me as helpful but imperfect and stays proportionate when I let her down.",
    explanation:
      "Under the inverted standard, 'she just appreciates me' and 'idealization is meaningless flattery' both miss; top credit reads an instant, exceptionless idealization as the front half of a split and names a watch-the-first-disappointment test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A patient's relationships all follow the same arc: a new person is 'amazing, the one,' then after a single disappointment becomes 'a monster I have to escape,' with no one ever landing in between. In one paragraph, propose the strongest conclusion about what this recurring pattern is expressing and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that the repeating 'amazing-then-monster' arc is splitting operating as her default way of holding people: because a person who is both loved and disappointing feels intolerable, each relationship is filed as all-good until a let-down introduces 'bad,' at which point the whole person is rewritten as all-bad to keep love and anger from touching. This is a strong claim because it predicts checkable consequences: the flip should reliably follow a disappointment rather than new information about the person's character; no one should be allowed a stable, mixed picture; and the devaluation should be grossly out of proportion to the triggering let-down. I would test it by mapping each reversal against what actually happened just before it, by checking whether anyone is ever held as good-and-flawed at once, and by watching whether the same arc repeats with the next person — refuted if her shifts track genuine, proportionate evidence about each individual and she can sustain an integrated view of someone over time.",
      yieldAnchors: [
        "Every relationship runs 'amazing' then 'monster'",
        "The flip follows a single disappointment",
        "No one ever lands in a stable middle",
      ],
      riskAnchors: [
        "The flip follows a let-down, not new character information",
        "No one is held as good-and-flawed at once",
        "The devaluation is out of proportion to the trigger",
      ],
      defeatedBy: [
        "Her shifts track genuine, proportionate evidence",
        "She can sustain a mixed view of someone over time",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that the repeating 'amazing-then-monster' arc is splitting operating as her default way of holding people: because a person who is both loved and disappointing feels intolerable, each relationship is filed as all-good until a let-down introduces 'bad,' at which point the whole person is rewritten as all-bad to keep love and anger from touching. This is a strong claim because it predicts checkable consequences: the flip should reliably follow a disappointment rather than new information about the person's character; no one should be allowed a stable, mixed picture; and the devaluation should be grossly out of proportion to the triggering let-down. I would test it by mapping each reversal against what actually happened just before it, by checking whether anyone is ever held as good-and-flawed at once, and by watching whether the same arc repeats with the next person — refuted if her shifts track genuine, proportionate evidence about each individual and she can sustain an integrated view of someone over time.",
    explanation:
      "'People just have bad luck with relationships' and 'her exes were all really monsters' both miss; top credit reads the repeating amazing-then-monster arc as habitual splitting and names a map-each-flip-to-the-prior-event test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A man cannot name a single fault in his late father or a single virtue in his living mother; the father is 'perfect' and the mother is 'all bad,' and he resists any fact that blurs the line. In one paragraph, propose the strongest conclusion about what this rigid division is expressing and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that the perfect-father/all-bad-mother division is splitting spread across two real people: by keeping his father flawlessly good and depositing every 'bad' feeling into his mother, he avoids the unbearable task of holding either parent as a mixture of love and disappointment. This is a strong claim because it predicts checkable consequences: each portrait should be absolute and defended against any exception; faults of the idealized father should be denied or minimized rather than integrated; and when the all-bad mother image is gently challenged, the 'bad' should migrate or intensify rather than soften into a mixed view. I would test it by offering one mild, true complication to each portrait and watching whether he can tolerate it, and by checking whether his anger has a designated container that never lets the good parent be touched — refuted if he can acknowledge real flaws in his father and real kindnesses in his mother while still judging her harshly, which would fit an integrated appraisal of genuinely different parents.",
      yieldAnchors: [
        "No fault allowed in the father, no virtue in the mother",
        "Father is 'perfect,' mother is 'all bad'",
        "He resists any fact that blurs the line",
      ],
      riskAnchors: [
        "Each portrait is absolute and defended against exceptions",
        "Faults of the idealized father are denied or minimized",
        "Challenged, the 'bad' migrates rather than integrates",
      ],
      defeatedBy: [
        "He can hold real flaws in the father and virtues in the mother",
        "His judgment of each parent is proportionate to real evidence",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that the perfect-father/all-bad-mother division is splitting spread across two real people: by keeping his father flawlessly good and depositing every 'bad' feeling into his mother, he avoids the unbearable task of holding either parent as a mixture of love and disappointment. This is a strong claim because it predicts checkable consequences: each portrait should be absolute and defended against any exception; faults of the idealized father should be denied or minimized rather than integrated; and when the all-bad mother image is gently challenged, the 'bad' should migrate or intensify rather than soften into a mixed view. I would test it by offering one mild, true complication to each portrait and watching whether he can tolerate it, and by checking whether his anger has a designated container that never lets the good parent be touched — refuted if he can acknowledge real flaws in his father and real kindnesses in his mother while still judging her harshly, which would fit an integrated appraisal of genuinely different parents.",
    explanation:
      "'People are entitled to favor one parent' earns near-zero; top credit reads the exceptionless good-parent/bad-parent split as a defense that keeps one love pure and names a try-a-mild-complication test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A patient's sense of herself swings between grandiosity ('I'm extraordinary, above the rules') and worthlessness ('I'm nothing, a complete failure') with each success or setback, and the two never blend. In one paragraph, propose the strongest conclusion about what this self-image swing is expressing and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that the grandiosity-to-worthlessness swing is splitting turned on the self: unable to hold a single self that is both capable and flawed, she lets each outcome convert her into an all-good or an all-bad self, so that a success makes her 'extraordinary' and a setback makes her 'nothing,' with no stable middle to absorb either. This is a strong claim because it predicts checkable consequences: her self-worth should track the latest result almost entirely rather than rest on a steady baseline; the two self-states should never coexist or moderate each other; and the grandiose self should return intact after the next success rather than chastened by the prior crash. I would test it by mapping her self-descriptions against recent wins and losses, by checking whether any integrated 'good-enough' self ever appears, and by watching whether each extreme resets with the next outcome — refuted if she maintains a stable, mixed self-appraisal through ups and downs and feels only proportionate pride or disappointment.",
      yieldAnchors: [
        "Self swings between 'extraordinary' and 'nothing'",
        "The swing tracks each success or setback",
        "The two self-states never blend",
      ],
      riskAnchors: [
        "Self-worth tracks the latest result, not a baseline",
        "The two self-states never coexist or moderate",
        "The grandiose self resets intact after a success",
      ],
      defeatedBy: [
        "She holds a stable, mixed self-appraisal through ups and downs",
        "Her pride and disappointment are proportionate and passing",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that the grandiosity-to-worthlessness swing is splitting turned on the self: unable to hold a single self that is both capable and flawed, she lets each outcome convert her into an all-good or an all-bad self, so that a success makes her 'extraordinary' and a setback makes her 'nothing,' with no stable middle to absorb either. This is a strong claim because it predicts checkable consequences: her self-worth should track the latest result almost entirely rather than rest on a steady baseline; the two self-states should never coexist or moderate each other; and the grandiose self should return intact after the next success rather than chastened by the prior crash. I would test it by mapping her self-descriptions against recent wins and losses, by checking whether any integrated 'good-enough' self ever appears, and by watching whether each extreme resets with the next outcome — refuted if she maintains a stable, mixed self-appraisal through ups and downs and feels only proportionate pride or disappointment.",
    explanation:
      "'Everyone's confidence goes up and down' earns near-zero; top credit reads a grandiosity-to-worthlessness swing tied to each outcome as splitting of the self and names a maps-to-the-latest-result test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A client who has called her best friend 'the most loyal person alive' for years declares overnight, after the friend cancels one lunch, that the friend is 'a fake who never truly cared.' In one paragraph, propose the strongest conclusion about what this sudden reversal is expressing and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that an overnight reversal from 'most loyal person alive' to 'a fake who never cared,' triggered by a single cancelled lunch, is splitting: the small let-down introduced 'bad' into an idealized friendship she cannot hold as both loving and imperfect, so the whole relationship is rewritten as false to keep love and disappointment from coexisting. This is a strong claim because it predicts checkable consequences: the devaluation should be wildly out of proportion to a cancelled lunch; years of genuine loyalty should be erased wholesale rather than weighed against the slight; and the loyal image should snap back the moment the friend reaches out and makes it right. I would test it by checking how proportionate the reaction is to the trigger, by asking whether any of the friend's prior loyalty still counts, and by watching whether reconnection instantly restores the idealized version — refuted if the cancellation actually capped a real, weighed pattern of the friend repeatedly abandoning her, which would make 'fake' a fair conclusion.",
      yieldAnchors: [
        "Years of calling the friend 'the most loyal person alive'",
        "One cancelled lunch makes her 'a fake who never cared'",
        "The reversal happened overnight",
      ],
      riskAnchors: [
        "The devaluation is out of proportion to the trigger",
        "Years of loyalty are erased wholesale",
        "The loyal image snaps back when the friend makes it right",
      ],
      defeatedBy: [
        "The cancellation caps a real, weighed pattern of abandonment",
        "Her view of the friend stays stable and proportionate",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that an overnight reversal from 'most loyal person alive' to 'a fake who never cared,' triggered by a single cancelled lunch, is splitting: the small let-down introduced 'bad' into an idealized friendship she cannot hold as both loving and imperfect, so the whole relationship is rewritten as false to keep love and disappointment from coexisting. This is a strong claim because it predicts checkable consequences: the devaluation should be wildly out of proportion to a cancelled lunch; years of genuine loyalty should be erased wholesale rather than weighed against the slight; and the loyal image should snap back the moment the friend reaches out and makes it right. I would test it by checking how proportionate the reaction is to the trigger, by asking whether any of the friend's prior loyalty still counts, and by watching whether reconnection instantly restores the idealized version — refuted if the cancellation actually capped a real, weighed pattern of the friend repeatedly abandoning her, which would make 'fake' a fair conclusion.",
    explanation:
      "'People drift and reassess friendships' and 'the friend was clearly never loyal' both miss; top credit reads an overnight loyal-to-fake reversal over one cancelled lunch as splitting and names a proportion-and-snap-back test that could refute it.",
  },
];

export const section: SectionContent = {
  slug: "splitting-black-and-white",
  title: "Splitting and the Black-and-White World",
  weekNumber: 1,
  blurb:
    "In borderline personality disorder, the same person can be adored one day and despised the next. This section is about splitting — the defense of keeping all-good and all-bad images of self and others apart because holding love and disappointment together feels intolerable — and about reading a sudden flip from the evidence and naming a cheap test that could prove the reading wrong.",
  lectureTitle:
    "1.2 Splitting and the Black-and-White World",
  body: `# Splitting and the Black-and-White World

A patient calls her therapist the only person who has ever understood her. Two weeks later, after the therapist takes a vacation, the same patient calls her cold and useless, just like everyone else. Nothing about the therapist changed — but the *image* of her flipped completely, from all-good to all-bad, with nothing in between. This is splitting, and once you can see it you will see it everywhere in borderline personality disorder (BPD): in relationships, in self-image, and even in how a treatment team starts to argue with itself. The strong move is not to take either snapshot at face value, but to read the flip itself.

## All-good and all-bad, never both

Most of us hold mixed pictures of the people we love: a partner can be kind *and* forgetful, a parent loving *and* maddening. Splitting is the loss of that "and." People and even the self get filed as wholly good or wholly bad, and the two files are never open at once. The same friend is "my whole world" or "a backstabbing fake," the same mother a "saint" or a "monster," the same self "extraordinary" or "nothing" — but never a single person who is both. When you notice that a description admits no exceptions and no middle, you have found a split worth reading.

## Why integration feels intolerable

Splitting is not laziness or drama; it is protection. For someone whose early world felt unsafe, holding love and hate toward the same person at the same time can feel unbearable — as if the anger would destroy the love, or the love would leave them defenseless against the hurt. Keeping the good image and the bad image apart is a way to keep the cherished good from being spoiled by disappointment, and to keep the rage from contaminating the love. The cost is that the inner world becomes brittle: any let-down can tip a whole relationship from one file into the other.

## The flip follows a disappointment, not new information

Here is the most useful diagnostic fact: the switch from idealization to devaluation almost always tracks a *let-down*, not a discovery. The therapist did not turn cruel; she went on vacation. The boyfriend did not reveal a hidden character; he forgot a reservation. The mentor did not become a fraud; he gave one piece of criticism. A small disappointment introduces "bad" into an all-good image, and because that image cannot tolerate any bad, the whole person is rewritten as all-bad. So the question to ask is always: did the valuation flip because the person revealed something new, or because they let the patient down? Track the trigger and you can usually tell.

## Idealization and devaluation are two sides of one coin

It is tempting to treat the warm phase as "the good part" and the contempt as "the problem," but they are the same mechanism running in two directions. An instant, total idealization — "you've already saved my life" after one session — is not a compliment to take at face value; it is the front half of a split, and the same all-or-nothing machinery that built the pedestal will tear it down at the first frustration. Reading the idealization as fragile lets you *predict* the devaluation instead of being surprised by it.

## Splitting shows up between people too

Splitting does not stay inside one mind. On an inpatient unit a patient may experience one nurse as an angel and another as abusive, and within days the staff are quietly feuding — each one drawn into playing the "good" or "bad" object the patient cannot hold together internally. This is "staff splitting," and the tell is not just the patient's words but the fracture in the team. When clinicians who normally agree find themselves split into the patient's defenders and accusers, the split has migrated outward, and naming it usually does more than relitigating who was right.

## Two ways to get it wrong

The course penalizes two opposite errors. The first is the shrug: "people change their minds," "everyone has favorites," "teenage friendships are fickle." That gives up before looking, and it is defeated the moment a reaction turns out to be a total, exceptionless reversal triggered by a trivial let-down. The second is the lurid leap: "she's lying about how she ever felt," "he's just manipulating people," "she's faking the enthusiasm." That overreaches past the evidence, and it is defeated by the sincerity and suddenness of the shift — the idealization was real, which is exactly why its collapse is splitting and not deceit.

## Reading the flip — and naming a test

A good interpretation commits to what the flip is doing *and* names the cheap observation that would prove it wrong. "Her devaluation is splitting" is a real claim, because it predicts that the flip began at a disappointment rather than a discovery, that nothing good survives the reversal, and that the idealized image will return once the person makes amends — and you can watch for all three. The weak move stops at "she runs hot and cold" (which explains nothing) or retreats to "people just change" (which explains away). The worst move is the lurid story the patient's genuine prior love defeats. The strongest reading binds the specific reversal in front of you and spells out the single result — a proportionate, weighed judgment that holds someone as both good and flawed — that would refute it.

## In the real world

Suppose a friend who raved last month about a new coworker now insists that coworker is "a two-faced snake who was always out to get me," and the change dates to the afternoon the coworker disagreed with her in a meeting. The dodge is "people clash at work, who knows" — easy, but it reads nothing. The lurid leap is "she's just being dramatic and manipulative" — and it ignores that her admiration was real. The splitting read commits to a meaning: a small disappointment introduced "bad" into an all-good image she cannot hold as mixed, so the whole coworker got rewritten as all-bad to keep the earlier warmth from being spoiled. And it predicts: the flip should track the disagreement rather than any real betrayal; nothing good about the coworker should survive it; and the warm image should come back the moment the coworker smooths things over. Three cheap checks, each able to refute the reading. That is what taking the flip seriously buys you — not a shrug at how changeable people are, and not an accusation, but a testable account of why love became hatred overnight.`,
  homework: {
    mcq,
    hybrid,
    written,
  },
};
