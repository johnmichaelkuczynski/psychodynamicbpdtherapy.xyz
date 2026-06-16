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
      "A therapist realizes she has misremembered an important detail about a patient's family and openly corrects herself. The patient, who had braced for the usual cold brush-off he gets from authority figures, watches her simply own the mistake — and over the next two weeks he speaks more freely and finally raises a topic he had long avoided. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The patient seems a bit more comfortable lately.",
        credit: 0.3,
      },
      {
        text: "The repair of that small rupture likely gave the patient a new relational experience — that owning a mistake need not bring rejection — and that experience, not any technique, opened him up; test whether his openness rose specifically after the repair rather than before, whether other repaired moments produce the same effect, and whether sessions with no rupture-and-repair show no such jump.",
        credit: 1.0,
      },
      {
        text: "The therapy is so personal that there is no way to say what made the patient open up.",
        credit: 0,
      },
      {
        text: "The honest correction probably helped a little; we could keep watching how he responds.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The repair of that small rupture likely gave the patient a new relational experience — that owning a mistake need not bring rejection — and that experience, not any technique, opened him up; test whether his openness rose specifically after the repair rather than before, whether other repaired moments produce the same effect, and whether sessions with no rupture-and-repair show no such jump.",
    explanation:
      "Top credit commits to rupture-and-repair as the engine and names timing checks that could refute it; 'no way to say what made him open up' refuses the inference the clear sequence supports and earns zero.",
  },
  {
    itemType: "mc",
    prompt:
      "A man has quit three previous therapies after only a few sessions, each time when he felt judged. With a new therapist who uses no special techniques but is reliably attentive and nonjudgmental, he has stayed for six months and is doing the work. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He seems to be sticking with this one.",
        credit: 0.3,
      },
      {
        text: "People are too different for one case to show why he stayed.",
        credit: 0,
      },
      {
        text: "The steady, nonjudgmental bond itself is likely what is keeping him engaged where technique alone never could, since the one thing that changed is being met without judgment; test whether his engagement tracks moments he feels accepted, whether any hint of judgment triggers the old urge to quit, and whether a purely technique-driven therapy without that bond would hold him.",
        credit: 1.0,
      },
      {
        text: "The new relationship probably helps him stay; we could ask him more about it.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The steady, nonjudgmental bond itself is likely what is keeping him engaged where technique alone never could, since the one thing that changed is being met without judgment; test whether his engagement tracks moments he feels accepted, whether any hint of judgment triggers the old urge to quit, and whether a purely technique-driven therapy without that bond would hold him.",
    explanation:
      "Full credit names the alliance as the active ingredient and lists three disconfirming checks; 'one case shows nothing' is the dodge the sharp contrast with three prior dropouts defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A patient erupts at her therapist for ending the session exactly on time, certain she will now be dropped as a client. The therapist stays warm and curious the following week rather than retaliating or pulling back — and the patient, visibly surprised, reveals that in her family anger always got her cut off. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The patient got angry and then shared something about her family.",
        credit: 0.3,
      },
      {
        text: "The therapist's surviving the anger without retaliating likely gave the patient a corrective experience that contradicts her template of 'anger ends in abandonment,' which is why she could then disclose it; test whether her trust grows specifically after such moments, whether she braces for rejection each time she shows anger, and whether her openness fails to grow in stretches with no tested-and-survived conflict.",
        credit: 1.0,
      },
      {
        text: "The inner life is too murky to say why she opened up after the conflict.",
        credit: 0,
      },
      {
        text: "The therapist staying calm probably mattered; we could explore the family history more.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The therapist's surviving the anger without retaliating likely gave the patient a corrective experience that contradicts her template of 'anger ends in abandonment,' which is why she could then disclose it; test whether her trust grows specifically after such moments, whether she braces for rejection each time she shows anger, and whether her openness fails to grow in stretches with no tested-and-survived conflict.",
    explanation:
      "Top credit reads a corrective relational experience from the surviving-the-anger sequence and names tests that could refute it; 'too murky to say' opens no inquiry and earns zero.",
  },
  {
    itemType: "mc",
    prompt:
      "Two patients with similar problems receive the identical structured protocol from the same clinic. The one who reports feeling deeply understood by her therapist improves markedly; the one who says she felt 'processed like a case file' does not. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Outcomes seem to vary between the two patients.",
        credit: 0.3,
      },
      {
        text: "Since the technique was identical, the quality of the alliance likely drove the difference in outcome, with feeling understood acting as the active ingredient; test whether feeling-understood ratings predict improvement across many such pairs, whether the same therapist gets better results with patients who bond, and whether boosting the alliance in the disconnected patient improves her response to the very same protocol.",
        credit: 1.0,
      },
      {
        text: "Therapy outcomes are too individual to attribute to anything in particular.",
        credit: 0,
      },
      {
        text: "The connection probably explains the gap; we could compare a few more patients.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Since the technique was identical, the quality of the alliance likely drove the difference in outcome, with feeling understood acting as the active ingredient; test whether feeling-understood ratings predict improvement across many such pairs, whether the same therapist gets better results with patients who bond, and whether boosting the alliance in the disconnected patient improves her response to the very same protocol.",
    explanation:
      "Full credit uses the held-constant technique to isolate the alliance and names three checks; 'too individual to attribute to anything' is the refusal the matched protocol defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A patient who has spent years being told to 'just think positive' tells her therapist, 'You're the first person who didn't try to fix me — you just got it.' Soon after, with no new homework assigned, she begins on her own to make changes she had long resisted. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Being understood is too vague a thing to count as the cause of her changes.",
        credit: 0,
      },
      {
        text: "The genuine experience of being understood by a real, non-fixing other likely freed her to change, so the relationship itself — not a method — is the lever; test whether her self-initiated changes followed the moment she felt met, whether they stall when she feels handled or corrected, and whether a technique-heavy approach without that felt understanding would produce the same movement.",
        credit: 1.0,
      },
      {
        text: "Feeling understood probably helped; we could keep track of her progress.",
        credit: 0.6,
      },
      {
        text: "She seems to like this therapist and is doing better.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The genuine experience of being understood by a real, non-fixing other likely freed her to change, so the relationship itself — not a method — is the lever; test whether her self-initiated changes followed the moment she felt met, whether they stall when she feels handled or corrected, and whether a technique-heavy approach without that felt understanding would produce the same movement.",
    explanation:
      "Top credit names the real relationship as the lever and proposes a technique-without-bond test that could refute it; 'too vague to count as a cause' is the dodge the timing of her self-initiated changes defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "Across a busy clinic, patients who rate a strong bond with their therapist by the third session tend to improve more by the end — and this holds whether the therapist uses one method or another. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Three sessions in is too early to read anything into a rating.",
        credit: 0,
      },
      {
        text: "Patients who like their therapist early seem to do a bit better.",
        credit: 0.3,
      },
      {
        text: "Early alliance probably predicts outcome; we could collect more ratings.",
        credit: 0.6,
      },
      {
        text: "Because the bond predicts outcome across different methods, the alliance likely carries real therapeutic force rather than being a by-product of one technique; test whether early alliance predicts gains even after accounting for early symptom relief, whether strengthening a weak alliance improves later outcome, and whether the link holds across therapists who otherwise work very differently.",
        credit: 1.0,
      },
    ],
    correctAnswer:
      "Because the bond predicts outcome across different methods, the alliance likely carries real therapeutic force rather than being a by-product of one technique; test whether early alliance predicts gains even after accounting for early symptom relief, whether strengthening a weak alliance improves later outcome, and whether the link holds across therapists who otherwise work very differently.",
    explanation:
      "Full credit commits to the alliance as a cross-method force and names a confound-check that could refute it; 'too early to read anything' refuses the inference the method-independent pattern supports.",
  },
  {
    itemType: "mc",
    prompt:
      "Midway through a session the patient goes quiet and gives clipped, one-word answers right after the therapist offered some firm advice. The therapist notices the shift, asks about it, and the patient admits he felt talked down to; once they sort it out, his warmth and engagement return. Which conclusion best follows?",
    mcOptions: [
      {
        text: "There was a tense moment that passed.",
        credit: 0.3,
      },
      {
        text: "A here-and-now rupture — the patient feeling talked down to — likely caused the withdrawal, and naming and repairing it in the room restored the alliance; test whether his withdrawal began precisely after the advice, whether similar 'being managed' moments reliably trigger the same shutdown, and whether engagement returns only once the rupture is openly addressed rather than ignored.",
        credit: 1.0,
      },
      {
        text: "What happens between two people in a room is too subtle to pin down.",
        credit: 0,
      },
      {
        text: "The advice probably stung him; we could be gentler next time and see.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "A here-and-now rupture — the patient feeling talked down to — likely caused the withdrawal, and naming and repairing it in the room restored the alliance; test whether his withdrawal began precisely after the advice, whether similar 'being managed' moments reliably trigger the same shutdown, and whether engagement returns only once the rupture is openly addressed rather than ignored.",
    explanation:
      "Top credit pins a here-and-now rupture and its repair with timing tests that could refute it; 'too subtle to pin down' is the refusal the tight cause-and-recovery sequence defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A guarded, intellectual patient who narrates her grief in flat clinical terms is met one day by the therapist's visibly genuine, moved reaction to her loss — not a technique, just an honest human response. Something shifts, and in the following weeks she lets herself actually feel and speak about the loss. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Emotions in therapy are too unpredictable to explain what moved her.",
        credit: 0,
      },
      {
        text: "The therapist's real, human response probably mattered; we could note when she opens up.",
        credit: 0.6,
      },
      {
        text: "Encountering a genuine, feeling other — the 'real relationship' beneath the technique — likely gave her permission to feel, so the authentic human contact, not a method, drove the thaw; test whether her openings follow moments of genuine contact, whether they stall when sessions turn mechanical, and whether a purely procedural stance without real responsiveness would produce the same change.",
        credit: 1.0,
      },
      {
        text: "She seems to be feeling her grief more now.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "Encountering a genuine, feeling other — the 'real relationship' beneath the technique — likely gave her permission to feel, so the authentic human contact, not a method, drove the thaw; test whether her openings follow moments of genuine contact, whether they stall when sessions turn mechanical, and whether a purely procedural stance without real responsiveness would produce the same change.",
    explanation:
      "Full credit names the real relationship as the active ingredient and proposes a procedural-stance test that could refute it; 'too unpredictable to explain' is the dodge the timing of her thaw defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A patient swings between calling his therapist 'the best I've ever had' and 'completely useless' from week to week. The therapist neither basks in the praise nor crumbles under the attacks, staying steady throughout — and over several months the swings grow milder and the patient grows steadier himself. Which conclusion best follows?",
    mcOptions: [
      {
        text: "His feelings about the therapist seem to be calming down.",
        credit: 0.3,
      },
      {
        text: "The therapist's steadiness under both idealization and attack likely let the patient internalize a reliable, non-reactive other, which is why his own swings shrank; test whether his stabilizing tracks stretches of consistent therapist response, whether a wobble in the therapist's steadiness brings the swings back, and whether the same calming appears in his outside relationships as he takes the steadiness in.",
        credit: 1.0,
      },
      {
        text: "The inner workings of a person are ultimately unknowable, so the change can't be explained.",
        credit: 0,
      },
      {
        text: "The therapist staying calm probably helped; we could keep tracking the swings.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The therapist's steadiness under both idealization and attack likely let the patient internalize a reliable, non-reactive other, which is why his own swings shrank; test whether his stabilizing tracks stretches of consistent therapist response, whether a wobble in the therapist's steadiness brings the swings back, and whether the same calming appears in his outside relationships as he takes the steadiness in.",
    explanation:
      "Top credit names internalizing a steady other as the mechanism and lists tests that could refute it; 'ultimately unknowable' is the refusal the parallel between therapist steadiness and patient stabilizing defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A patient reliably calls to cancel the very next session after any meeting in which she felt especially close to or moved by her therapist. The pattern is consistent across months. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She probably gets scared by closeness; we could ask her about the cancellations.",
        credit: 0.6,
      },
      {
        text: "Closeness in the room likely feels dangerous to her, so she withdraws to manage it — a here-and-now pattern worth working with directly rather than around; test whether cancellations cluster specifically after the closest sessions, whether naming the pattern in the room reduces them, and whether the same flee-after-closeness shows up in her outside relationships.",
        credit: 1.0,
      },
      {
        text: "Scheduling is too personal to read anything into when someone cancels.",
        credit: 0,
      },
      {
        text: "She cancels sometimes after good sessions.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "Closeness in the room likely feels dangerous to her, so she withdraws to manage it — a here-and-now pattern worth working with directly rather than around; test whether cancellations cluster specifically after the closest sessions, whether naming the pattern in the room reduces them, and whether the same flee-after-closeness shows up in her outside relationships.",
    explanation:
      "Full credit reads a closeness-then-flee dynamic playing out in the relationship and names tests that could refute it; 'too personal to read anything into' is the dodge the tight cancel-after-closeness link defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "Asked what helped, a patient shrugs at the coping worksheets but says that knowing her therapist was 'genuinely in her corner' is what finally let her apply for the promotion she had ducked for years. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Whatever helps in therapy is too tangled to separate the worksheets from the relationship.",
        credit: 0,
      },
      {
        text: "The supportive relationship — feeling backed by a reliable ally — likely supplied the security she needed to take the risk, making the bond rather than the technique the active lever; test whether her bolder steps followed deepening of the bond rather than worksheet practice, whether risk-taking dips when she feels the support waver, and whether matched patients given the worksheets without that felt backing take fewer such risks.",
        credit: 1.0,
      },
      {
        text: "The relationship probably mattered more than the worksheets; we could ask her more.",
        credit: 0.6,
      },
      {
        text: "She felt supported and went for the promotion.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The supportive relationship — feeling backed by a reliable ally — likely supplied the security she needed to take the risk, making the bond rather than the technique the active lever; test whether her bolder steps followed deepening of the bond rather than worksheet practice, whether risk-taking dips when she feels the support waver, and whether matched patients given the worksheets without that felt backing take fewer such risks.",
    explanation:
      "Top credit names the relationship as a secure base enabling risk and proposes a worksheets-without-bond comparison that could refute it; 'too tangled to separate' refuses the inference her own report supports.",
  },
  {
    itemType: "mc",
    prompt:
      "Reviewing a year of notes, the patient's largest gains appeared the week after a heated conflict with the therapist was openly talked through — not the week a new coping skill was first introduced. The same pattern recurs around two later conflicts. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Improvement is too erratic to tie to any particular event.",
        credit: 0,
      },
      {
        text: "The repaired conflicts seem to come before the good stretches.",
        credit: 0.3,
      },
      {
        text: "Because gains repeatedly follow repaired ruptures rather than new techniques, working through conflict in the relationship is likely what drives change; test whether each gain dates to a repair rather than a technique, whether unrepaired conflicts are followed by stalls, and whether introducing a skill in a calm week with no rupture produces no comparable jump.",
        credit: 1.0,
      },
      {
        text: "The conflicts probably helped; we could look at more weeks.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Because gains repeatedly follow repaired ruptures rather than new techniques, working through conflict in the relationship is likely what drives change; test whether each gain dates to a repair rather than a technique, whether unrepaired conflicts are followed by stalls, and whether introducing a skill in a calm week with no rupture produces no comparable jump.",
    explanation:
      "Full credit ties change to rupture-repair using the recurring timing and names a no-rupture control week that could refute it; 'too erratic to tie to any event' is the dodge the repeated pattern defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A new patient shows up late, pushes against the ground rules, and makes pointed, provocative remarks early on — seemingly daring the therapist to reject him. When the therapist holds steady, neither punishing nor caving, the testing gradually fades and the patient begins to engage in earnest. Which conclusion best follows?",
    mcOptions: [
      {
        text: "People are too unpredictable to say why his behavior changed.",
        credit: 0,
      },
      {
        text: "He was testing limits and then settled down.",
        credit: 0.3,
      },
      {
        text: "The provocations likely tested whether the therapist would reject him like others have, and the therapist's steady, nonretaliatory survival of the testing built the trust that let him engage; test whether the testing eased specifically after steady responses, whether any retaliatory or withdrawing reaction revives it, and whether his trust grows in step with repeated experiences of not being dropped.",
        credit: 1.0,
      },
      {
        text: "He was probably checking if the therapist could be trusted; we could watch how it unfolds.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The provocations likely tested whether the therapist would reject him like others have, and the therapist's steady, nonretaliatory survival of the testing built the trust that let him engage; test whether the testing eased specifically after steady responses, whether any retaliatory or withdrawing reaction revives it, and whether his trust grows in step with repeated experiences of not being dropped.",
    explanation:
      "Top credit reads testing-and-survival as the mechanism and names a 'does retaliation revive it' test that could refute it; 'too unpredictable to say' refuses the inference the clear sequence supports.",
  },
  {
    itemType: "mc",
    prompt:
      "As the agreed end of therapy approaches, a patient who had been steady grows anxious and irritable with the therapist. Rather than rushing to wrap up, the therapist slows down and works through the ending and what the relationship has meant — and afterward the patient reports the gains held and even deepened. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Endings are too emotional to draw conclusions about what helped.",
        credit: 0,
      },
      {
        text: "He got upset about ending and then felt better.",
        credit: 0.3,
      },
      {
        text: "Working through the ending of the relationship itself likely consolidated the gains by letting him face loss within a surviving bond rather than avoid it; test whether his consolidation followed the worked-through ending rather than the calendar date, whether abruptly ended cases show more relapse, and whether the same lasting effect appears when other patients' terminations are explicitly processed.",
        credit: 1.0,
      },
      {
        text: "Talking about the ending probably helped; we could check in after termination.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Working through the ending of the relationship itself likely consolidated the gains by letting him face loss within a surviving bond rather than avoid it; test whether his consolidation followed the worked-through ending rather than the calendar date, whether abruptly ended cases show more relapse, and whether the same lasting effect appears when other patients' terminations are explicitly processed.",
    explanation:
      "Full credit names working through the ending relationship as the mechanism and proposes an abrupt-versus-processed comparison that could refute it; 'too emotional to draw conclusions' is the refusal the held-and-deepened gains defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "A patient making steady progress plateaus during her therapist's month-long absence — old symptoms creep back — and then resumes improving once weekly sessions restart. The pattern is clear on both sides of the break. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She seemed to do worse while the therapist was away.",
        credit: 0.3,
      },
      {
        text: "Her gains likely depend, at least for now, on the ongoing relationship itself, since progress tracks the therapist's presence and stalls in her absence; test whether the dip and recovery line up tightly with the break, whether shorter absences cause smaller dips, and whether the dependence lessens over time as she internalizes the relationship and can hold gains through breaks.",
        credit: 1.0,
      },
      {
        text: "Recovery in therapy is too complex to link to one absence.",
        credit: 0,
      },
      {
        text: "The break probably set her back; we could see what happens at the next one.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Her gains likely depend, at least for now, on the ongoing relationship itself, since progress tracks the therapist's presence and stalls in her absence; test whether the dip and recovery line up tightly with the break, whether shorter absences cause smaller dips, and whether the dependence lessens over time as she internalizes the relationship and can hold gains through breaks.",
    explanation:
      "Top credit ties the gains to the relationship's presence using the dip-and-recovery timing and names a dose-of-absence test that could refute it; 'too complex to link to one absence' is the dodge the clean before-and-after pattern defeats.",
  },
];

const hybrid: HomeworkItem[] = [
  {
    itemType: "hybrid",
    prompt:
      "A patient who usually narrates her feelings in dry, intellectual terms finally cried in session after the therapist quietly stayed with her instead of moving on to the next topic. The next week she did something she had long avoided — calling her estranged sister. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The therapist's staying present with her feeling — an act of the relationship, not a technique — likely let her drop the intellectual defense and feel enough to act; test whether her openings follow such moments of being stayed-with, whether they stall when sessions feel rushed or procedural, and whether the same change appears when a technique is applied without that present attunement.",
        credit: 1.0,
      },
      {
        text: "Crying in session probably loosened her up; we could watch for more of it.",
        credit: 0.6,
      },
      {
        text: "She seems to be opening up more.",
        credit: 0.3,
      },
      {
        text: "Whatever happens between two people is too private to explain her change.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'the therapist staying present drove it' lead from the rival 'a new breathing technique she'd just learned caused the change,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: check whether her emotional openings cluster around moments the therapist quietly stays with her rather than around sessions where the breathing exercise was used — my lead predicts the openings track presence, not the technique. It is refuted if she opens up just as much on technique-only weeks with no such relational moment, which would credit the method instead.",
      yieldAnchors: [
        "She normally intellectualizes her feelings",
        "She cried after the therapist stayed present with her",
        "She then took a long-avoided relational risk",
      ],
      riskAnchors: [
        "Her openings follow being stayed-with",
        "They stall when sessions feel rushed or procedural",
        "The technique without attunement produces no such change",
      ],
      defeatedBy: [
        "She opens up equally on technique-only weeks",
        "Nothing in the relationship can be linked to her change",
      ],
    },
    correctAnswer:
      "The therapist's staying present with her feeling — an act of the relationship, not a technique — likely let her drop the intellectual defense and feel enough to act; test whether her openings follow such moments of being stayed-with, whether they stall when sessions feel rushed or procedural, and whether the same change appears when a technique is applied without that present attunement.",
    explanation:
      "Full credit names the relationship's presence as the active ingredient with three checks and a technique-without-attunement test that names its own refutation; 'too private to explain' opens nothing.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A patient labeled 'untreatable' after walking out on several past clinicians is, with a new therapist, engaging deeply and improving. The new therapist has done nothing technically unusual — she has simply remained consistent, warm, and nonjudgmental week after week. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He seems to be doing better with this therapist.",
        credit: 0.3,
      },
      {
        text: "The reliable, nonjudgmental relationship is likely the decisive ingredient that earlier technique-focused treatments lacked, since consistency is the one thing that changed; test whether his engagement tracks experiences of being accepted, whether any rupture left unrepaired revives the old urge to bolt, and whether a technically identical but colder therapist would hold him.",
        credit: 1.0,
      },
      {
        text: "He probably responds to the warmth; we could ask what feels different this time.",
        credit: 0.6,
      },
      {
        text: "Some people are just untreatable until they aren't, so there's nothing to conclude.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'the consistent relationship is decisive' lead from the rival 'he simply happened to be more ready to change now,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: watch what happens at the first real rupture — my lead predicts that if it is repaired he stays and deepens, whereas a 'just ready' account predicts readiness should carry him regardless of how the relationship handles conflict. It is refuted if his engagement holds steady through an unrepaired, mishandled rupture, suggesting internal readiness rather than the bond is doing the work.",
      yieldAnchors: [
        "He walked out on several past clinicians",
        "He is now engaging deeply and improving",
        "The only change is a consistent, nonjudgmental therapist",
      ],
      riskAnchors: [
        "Engagement tracks experiences of being accepted",
        "An unrepaired rupture revives the urge to leave",
        "A colder but technically identical therapist would not hold him",
      ],
      defeatedBy: [
        "He stays engaged through a mishandled, unrepaired rupture",
        "Past dropouts and current success are unrelated coincidences",
      ],
    },
    correctAnswer:
      "The reliable, nonjudgmental relationship is likely the decisive ingredient that earlier technique-focused treatments lacked, since consistency is the one thing that changed; test whether his engagement tracks experiences of being accepted, whether any rupture left unrepaired revives the old urge to bolt, and whether a technically identical but colder therapist would hold him.",
    explanation:
      "Top credit names the consistent relationship as decisive with three checks and a rupture test that names its refutation; 'untreatable until they aren't' is the empty refusal the sharp before-and-after defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A therapist forgets to mention a planned schedule change and the patient learns of it only at the door. The next session he is guarded and formal, where he is usually open. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He seems a little off this week.",
        credit: 0.3,
      },
      {
        text: "Feelings between people are too fickle to link his coolness to anything specific.",
        credit: 0,
      },
      {
        text: "The oversight likely landed as a small rupture — feeling unimportant or let down — which is why he pulled back, and naming it should repair the alliance; test whether his guardedness began precisely after the missed notice, whether openly acknowledging the slip restores his warmth, and whether similar 'being overlooked' moments reliably produce the same retreat.",
        credit: 1.0,
      },
      {
        text: "The schedule mix-up probably bothered him; we could bring it up gently.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'the oversight caused a rupture' lead from the rival 'the patient was simply in a bad mood for outside reasons,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: openly acknowledge the missed notice and watch whether his warmth returns in that same session — my lead predicts naming the slip repairs the alliance, while an unrelated-bad-mood account predicts the acknowledgment changes little. It is refuted if his guardedness persists despite a clear, sincere repair, pointing to an outside cause rather than a rupture in the relationship.",
      yieldAnchors: [
        "He is usually open in sessions",
        "He learned of the change only at the door",
        "He turned guarded the very next session",
      ],
      riskAnchors: [
        "His guardedness began right after the missed notice",
        "Acknowledging the slip restores his warmth",
        "Other 'being overlooked' moments produce the same retreat",
      ],
      defeatedBy: [
        "His coolness persists despite a clear repair",
        "Nothing in the relationship can be tied to his mood",
      ],
    },
    correctAnswer:
      "The oversight likely landed as a small rupture — feeling unimportant or let down — which is why he pulled back, and naming it should repair the alliance; test whether his guardedness began precisely after the missed notice, whether openly acknowledging the slip restores his warmth, and whether similar 'being overlooked' moments reliably produce the same retreat.",
    explanation:
      "Full credit reads a rupture from the timing with three checks and a repair test that names its own refutation; 'too fickle to link to anything' is the dodge the tight after-the-slip timing defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A patient who flooded out of two prior therapies the moment a session got intense has stayed with a new therapist who sets predictable, kind boundaries — and crucially holds them steady even when the patient pushes hard. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Reliable boundaries that hold under pressure likely give the patient a containing relationship he can trust, which is why he no longer flees the intensity; test whether he stays through intense moments specifically when boundaries hold, whether a boundary that wobbles brings back the urge to flee, and whether the same steadiness, not any technique, predicts his staying across sessions.",
        credit: 1.0,
      },
      {
        text: "The steady boundaries probably help him stay; we could watch the intense moments.",
        credit: 0.6,
      },
      {
        text: "He's tolerating sessions better now.",
        credit: 0.3,
      },
      {
        text: "He was probably just helped by a new medication, so the therapy relationship is beside the point.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'the containing relationship keeps him present' lead from the rival 'a new medication is what calmed him,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: check whether his ability to stay through intense moments tracks whether the therapist's boundaries held that session rather than tracking his medication schedule — my lead predicts staying follows steadiness, not the pill. It is refuted if he tolerates intensity equally well in sessions where a boundary wobbled, as long as the medication is on board, which would credit the drug.",
      yieldAnchors: [
        "He fled two prior therapies when sessions got intense",
        "He now stays with a therapist who holds steady boundaries",
        "The boundaries hold even when he pushes hard",
      ],
      riskAnchors: [
        "He stays through intensity when boundaries hold",
        "A wobbling boundary revives the urge to flee",
        "Steadiness, not technique, predicts his staying",
      ],
      defeatedBy: [
        "He stays equally well when boundaries wobble",
        "His staying tracks medication, not the relationship",
      ],
    },
    correctAnswer:
      "Reliable boundaries that hold under pressure likely give the patient a containing relationship he can trust, which is why he no longer flees the intensity; test whether he stays through intense moments specifically when boundaries hold, whether a boundary that wobbles brings back the urge to flee, and whether the same steadiness, not any technique, predicts his staying across sessions.",
    explanation:
      "Full credit names a containing relationship as the mechanism with three checks and a boundary-wobble test that names its refutation; the 'just the medication' option is the overreach the steadiness-dependent pattern can be set against.",
  },
  {
    itemType: "hybrid",
    prompt:
      "In a clinic's records, patients whose moments of friction with their therapist were noticed and openly repaired tend to end up better off than patients whose frictions were left unaddressed — even when the two groups started out similar. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Repaired conflicts seem to go along with better outcomes.",
        credit: 0.3,
      },
      {
        text: "Noticing and repairing ruptures in the relationship likely contributes to outcome, since matched patients differ mainly in whether their frictions were addressed; test whether outcome tracks the number of repaired ruptures after accounting for baseline severity, whether deliberately attending to ruptures improves outcomes in a trial, and whether unaddressed ruptures predict dropout.",
        credit: 1.0,
      },
      {
        text: "Therapy is too personal to learn anything from comparing groups like this.",
        credit: 0,
      },
      {
        text: "Repairing conflict probably helps; we could compare more patients.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'repair contributes to outcome' lead from the rival 'the repaired group simply had milder problems to begin with,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: compare outcomes within patients matched on baseline severity, so the only difference is whether ruptures were repaired — my lead predicts the repaired cases still do better. It is refuted if, once baseline severity is matched, the repair-versus-no-repair difference disappears, which would mean milder problems, not repair, explained the gap.",
      yieldAnchors: [
        "Repaired-rupture patients end up better off",
        "Unaddressed-rupture patients do worse",
        "The two groups started out similar",
      ],
      riskAnchors: [
        "Outcome tracks repaired ruptures after matching severity",
        "Deliberately attending to ruptures improves outcomes in a trial",
        "Unaddressed ruptures predict dropout",
      ],
      defeatedBy: [
        "The difference vanishes once baseline severity is matched",
        "The two groups were never comparable to begin with",
      ],
    },
    correctAnswer:
      "Noticing and repairing ruptures in the relationship likely contributes to outcome, since matched patients differ mainly in whether their frictions were addressed; test whether outcome tracks the number of repaired ruptures after accounting for baseline severity, whether deliberately attending to ruptures improves outcomes in a trial, and whether unaddressed ruptures predict dropout.",
    explanation:
      "Top credit commits to repair as a contributor with three checks and a baseline-matching test that names its refutation; 'too personal to learn anything' is the refusal the matched comparison defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "After a tense exchange, the therapist says plainly, 'I got that wrong — I pushed when you needed me to listen,' instead of defending herself. The patient, who has rarely heard an authority admit fault, softens visibly and the work moves forward. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Inner change is too mysterious to attribute to one remark.",
        credit: 0,
      },
      {
        text: "The therapist owning the error likely repaired the rupture and offered a corrective experience — that an authority can be fallible and still safe — which is why he softened; test whether his softening followed the admission rather than anything else that session, whether defended (unrepaired) ruptures leave him cold, and whether his trust grows with each non-defensive repair.",
        credit: 1.0,
      },
      {
        text: "He seems less tense after she apologized.",
        credit: 0.3,
      },
      {
        text: "Admitting the mistake probably helped; we could see how he responds next time.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'the non-defensive repair caused the softening' lead from the rival 'his life circumstances simply improved that week,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: check whether the softening appeared in the moment right after the admission rather than arriving gradually across the week — my lead predicts an in-session shift tied to the repair. It is refuted if he was already warmer at the start of the session before any repair, pointing to outside circumstances rather than the relationship.",
      yieldAnchors: [
        "A tense exchange preceded the moment",
        "The therapist owned the mistake without defending",
        "The patient softened and the work advanced",
      ],
      riskAnchors: [
        "Softening followed the admission within the session",
        "Defended, unrepaired ruptures leave him cold",
        "Trust grows with each non-defensive repair",
      ],
      defeatedBy: [
        "He was already warmer before any repair",
        "No remark in session could affect him at all",
      ],
    },
    correctAnswer:
      "The therapist owning the error likely repaired the rupture and offered a corrective experience — that an authority can be fallible and still safe — which is why he softened; test whether his softening followed the admission rather than anything else that session, whether defended (unrepaired) ruptures leave him cold, and whether his trust grows with each non-defensive repair.",
    explanation:
      "Full credit names a non-defensive repair as the mechanism with three checks and an in-session timing test that names its refutation; 'too mysterious to attribute' opens nothing.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A patient who expects authority figures to control and dismiss her bristles whenever the therapist asks pointed questions. When the therapist instead hands her more say over what they discuss and how, the friction eases, the alliance strengthens, and her gains pick up. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Sharing control with her probably helped the alliance, which likely carried the gains, since her improvement followed the shift in how they worked together rather than any new content; test whether her gains track strengthening of the alliance, whether reasserting tight control revives the friction and stalls progress, and whether the same content delivered without collaboration produces less improvement.",
        credit: 1.0,
      },
      {
        text: "Giving her more say probably eased things; we could try sharing the agenda more.",
        credit: 0.6,
      },
      {
        text: "She seems less prickly when she has more control.",
        credit: 0.3,
      },
      {
        text: "What drives a person is unknowable, so there's no saying why she improved.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'the strengthened alliance carried the gains' lead from the rival 'the topics just happened to get easier,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: keep the difficulty of the material the same while varying how collaborative the work feels, and check whether her gains follow the collaboration rather than the topic — my lead predicts gains rise with the alliance, not with easy content. It is refuted if her improvement tracks easier topics regardless of how controlling or collaborative the therapist is.",
      yieldAnchors: [
        "She bristles at authority she experiences as controlling",
        "Friction eased when the therapist shared control",
        "Her gains picked up as the alliance strengthened",
      ],
      riskAnchors: [
        "Gains track strengthening of the alliance",
        "Reasserting control revives friction and stalls progress",
        "The same content without collaboration helps less",
      ],
      defeatedBy: [
        "Gains track topic difficulty regardless of collaboration",
        "Nothing about why she improved can be known",
      ],
    },
    correctAnswer:
      "Sharing control with her probably helped the alliance, which likely carried the gains, since her improvement followed the shift in how they worked together rather than any new content; test whether her gains track strengthening of the alliance, whether reasserting tight control revives the friction and stalls progress, and whether the same content delivered without collaboration produces less improvement.",
    explanation:
      "Top credit names the strengthened collaborative alliance as the lever with three checks and a content-held-constant test that names its refutation; 'unknowable, no saying why' is the refusal the followed-the-shift timing defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A patient's week-to-week progress closely follows her own session-by-session ratings of how connected she felt to her therapist — more closely than it follows which specific intervention was used that week. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Her ratings seem to go up and down with her progress.",
        credit: 0.3,
      },
      {
        text: "The felt connection — the alliance — likely drives her gains more than the specific technique, since progress tracks connection rather than intervention; test whether connection ratings predict next-week gains even after accounting for the technique used, whether a strong-technique but low-connection week underperforms, and whether deliberately repairing connection lifts the following week's progress.",
        credit: 1.0,
      },
      {
        text: "Therapy is too subjective to read anything into a patient's connection ratings.",
        credit: 0,
      },
      {
        text: "The connection probably matters more than the technique; we could gather more ratings.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'felt connection drives gains' lead from the rival 'she just rates connection high on weeks she would have improved anyway,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: check whether a given week's connection rating predicts the NEXT week's gains, so the rating comes before the improvement it is supposed to drive — my lead predicts connection leads gains in time. It is refuted if connection ratings only rise alongside or after good weeks but never forecast the next one, which would make the rating a by-product rather than a cause.",
      yieldAnchors: [
        "Progress follows her connection ratings closely",
        "Progress follows the specific intervention less closely",
        "The pattern holds week to week",
      ],
      riskAnchors: [
        "Connection ratings predict next-week gains after controlling for technique",
        "High-technique, low-connection weeks underperform",
        "Repairing connection lifts the following week",
      ],
      defeatedBy: [
        "Connection ratings never forecast the next week's gains",
        "The technique used fully explains her progress",
      ],
    },
    correctAnswer:
      "The felt connection — the alliance — likely drives her gains more than the specific technique, since progress tracks connection rather than intervention; test whether connection ratings predict next-week gains even after accounting for the technique used, whether a strong-technique but low-connection week underperforms, and whether deliberately repairing connection lifts the following week's progress.",
    explanation:
      "Full credit names the alliance as the driver with three checks and a does-it-predict-next-week test that names its refutation; 'too subjective to read anything' is the dodge the tracked ratings defeat.",
  },
  {
    itemType: "hybrid",
    prompt:
      "In a heated moment a patient hurls contempt at the therapist — 'you're a fraud and this is useless' — clearly expecting to be cut off or attacked back. The therapist neither withdraws nor retaliates but stays present and engaged. Stunned, the patient says no one has ever just stayed, and the trust between them deepens. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The therapist's surviving the attack without retaliating or withdrawing likely gave the patient a corrective experience that contradicts his expectation of rupture-without-repair, deepening trust; test whether his trust rose specifically after the survived attack, whether any actual withdrawal or counterattack would shatter it, and whether the same deepening recurs each time aggression is met with steadiness rather than rejection.",
        credit: 1.0,
      },
      {
        text: "Staying calm during the attack probably helped; we could see if trust holds.",
        credit: 0.6,
      },
      {
        text: "He insulted the therapist and then felt closer.",
        credit: 0.3,
      },
      {
        text: "He was probably just venting and would have settled down on his own regardless.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'surviving the attack deepened trust' lead from the rival 'he was simply venting and would have settled regardless,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: compare this episode with any past moment where a relationship met his anger with withdrawal or counterattack — my lead predicts trust deepens only when the other survives and stays, not merely when he vents. It is refuted if his trust would have risen just as much had the therapist withdrawn or fired back, showing the venting alone, not the survival, did the work.",
      yieldAnchors: [
        "He attacked the therapist expecting rejection",
        "The therapist stayed present without retaliating",
        "He was stunned that someone stayed, and trust deepened",
      ],
      riskAnchors: [
        "Trust rose specifically after the survived attack",
        "An actual withdrawal or counterattack would shatter it",
        "Each steady response to aggression deepens trust",
      ],
      defeatedBy: [
        "Trust would have risen even if the therapist withdrew",
        "Venting alone, with no one surviving it, explains the change",
      ],
    },
    correctAnswer:
      "The therapist's surviving the attack without retaliating or withdrawing likely gave the patient a corrective experience that contradicts his expectation of rupture-without-repair, deepening trust; test whether his trust rose specifically after the survived attack, whether any actual withdrawal or counterattack would shatter it, and whether the same deepening recurs each time aggression is met with steadiness rather than rejection.",
    explanation:
      "Full credit names surviving-the-attack as a corrective experience with three checks and a withdrawal contrast that names its refutation; 'just venting, would have settled anyway' is the overreach the stunned 'no one has ever stayed' defeats.",
  },
];

const written: HomeworkItem[] = [
  {
    itemType: "written",
    prompt:
      "A patient arrives with a long list of prior therapists who, in her words, 'gave up on me' — each ended after she became difficult. With a new therapist who stays steady through the same difficult phases, she remains in treatment for over a year and makes real, lasting changes in her life. In one paragraph, propose the strongest conclusion about what drove the change and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that the relationship itself — specifically the experience of a therapist who stayed steady and nonretaliatory through the very difficulty that ended past treatments — is what drove the change, by giving her a corrective experience that contradicts her template of 'when I'm difficult, people leave.' This is a strong claim because it predicts checkable consequences: her gains should cluster around moments she tested the relationship and found it survived rather than around any new technique; reasserting distance or a real, unrepaired rupture should revive her old urge to leave and stall progress; and matched patients given the same techniques without a relationship that survives their difficulty should fare worse. I would test it by mapping her gains against the timing of tested-and-survived moments versus technique introductions, by watching how she responds when a genuine rupture goes briefly unrepaired, and by comparing her course with similar patients in technique-focused treatments that lack the steady, surviving bond.",
      yieldAnchors: [
        "Every prior therapy ended when she became difficult",
        "The new therapist stays steady through that difficulty",
        "She remains a year and makes lasting changes",
      ],
      riskAnchors: [
        "Gains cluster around tested-and-survived relational moments",
        "An unrepaired rupture revives the urge to leave",
        "Technique without a surviving bond helps less",
      ],
      defeatedBy: [
        "Her gains track techniques, not the surviving relationship",
        "One patient's history can tell us nothing about change",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that the relationship itself — specifically the experience of a therapist who stayed steady and nonretaliatory through the very difficulty that ended past treatments — is what drove the change, by giving her a corrective experience that contradicts her template of 'when I'm difficult, people leave.' This is a strong claim because it predicts checkable consequences: her gains should cluster around moments she tested the relationship and found it survived rather than around any new technique; reasserting distance or a real, unrepaired rupture should revive her old urge to leave and stall progress; and matched patients given the same techniques without a relationship that survives their difficulty should fare worse. I would test it by mapping her gains against the timing of tested-and-survived moments versus technique introductions, by watching how she responds when a genuine rupture goes briefly unrepaired, and by comparing her course with similar patients in technique-focused treatments that lack the steady, surviving bond.",
    explanation:
      "Under the inverted standard, 'one patient tells us nothing' earns near-zero; top credit goes to the surviving-relationship conclusion that names a technique-without-bond comparison as its own refutation test.",
  },
  {
    itemType: "written",
    prompt:
      "A clinic finds that, across therapists using very different methods, the patients who form a strong working bond with their therapist in the first few sessions tend to have the best outcomes by the end. In one paragraph, propose the strongest conclusion about the role of the relationship and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that the therapeutic alliance carries real change-producing force in its own right — not as a side effect of one technique — because the bond predicts outcome even across methods that otherwise share little. This is a strong claim because it predicts checkable consequences: early alliance should still predict later gains after statistically removing any early symptom relief that might itself create good feeling; deliberately strengthening a weak alliance should improve outcomes in a controlled trial; and the alliance-outcome link should hold within each method rather than only between methods. I would test it by measuring alliance and symptoms repeatedly so I can check whether alliance forecasts later improvement beyond early relief, by running a trial that trains therapists to repair weak alliances and comparing outcomes, and by checking that the bond-outcome relationship appears inside every method, not just on average.",
      yieldAnchors: [
        "Strong early bonds predict the best outcomes",
        "The pattern holds across very different methods",
        "The link is measured by the third session or so",
      ],
      riskAnchors: [
        "Alliance predicts gains after removing early symptom relief",
        "Strengthening a weak alliance improves outcomes in a trial",
        "The link holds within each method, not just between them",
      ],
      defeatedBy: [
        "The link vanishes once early symptom relief is controlled",
        "Outcomes are too personal to measure across methods",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that the therapeutic alliance carries real change-producing force in its own right — not as a side effect of one technique — because the bond predicts outcome even across methods that otherwise share little. This is a strong claim because it predicts checkable consequences: early alliance should still predict later gains after statistically removing any early symptom relief that might itself create good feeling; deliberately strengthening a weak alliance should improve outcomes in a controlled trial; and the alliance-outcome link should hold within each method rather than only between methods. I would test it by measuring alliance and symptoms repeatedly so I can check whether alliance forecasts later improvement beyond early relief, by running a trial that trains therapists to repair weak alliances and comparing outcomes, and by checking that the bond-outcome relationship appears inside every method, not just on average.",
    explanation:
      "The cautious 'too personal to measure across methods' earns near-zero; credit goes to the alliance-as-force conclusion that names a control-for-early-relief test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "Looking back over a long treatment, a patient's clearest gains consistently arrive in the sessions just after a conflict with the therapist has been openly faced and worked through, rather than after new coping skills are introduced. In one paragraph, propose the strongest conclusion about how change is happening and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that change here is driven by rupture and repair within the relationship — facing conflict together and surviving it — rather than by the acquisition of techniques, because the gains repeatedly date to repaired conflicts and not to skill introductions. This is a strong claim because it predicts checkable consequences: each major gain should map onto a specific repaired rupture rather than a coincidental calm week; conflicts left unaddressed should be followed by stalls or backsliding rather than gains; and introducing a new skill during a peaceful stretch with no rupture should produce no comparable jump. I would test it by dating every gain against the record of ruptures and skill introductions, by tracking what follows the conflicts that go unrepaired, and by deliberately introducing a skill in a calm, rupture-free week to see whether improvement follows it or not.",
      yieldAnchors: [
        "Gains arrive after repaired conflicts",
        "Gains do not track new coping skills",
        "The pattern recurs across the treatment",
      ],
      riskAnchors: [
        "Each gain maps onto a specific repaired rupture",
        "Unaddressed conflicts are followed by stalls",
        "A skill introduced in a calm week yields no jump",
      ],
      defeatedBy: [
        "Gains follow skill introductions rather than repairs",
        "Improvement is too erratic to tie to any event",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that change here is driven by rupture and repair within the relationship — facing conflict together and surviving it — rather than by the acquisition of techniques, because the gains repeatedly date to repaired conflicts and not to skill introductions. This is a strong claim because it predicts checkable consequences: each major gain should map onto a specific repaired rupture rather than a coincidental calm week; conflicts left unaddressed should be followed by stalls or backsliding rather than gains; and introducing a new skill during a peaceful stretch with no rupture should produce no comparable jump. I would test it by dating every gain against the record of ruptures and skill introductions, by tracking what follows the conflicts that go unrepaired, and by deliberately introducing a skill in a calm, rupture-free week to see whether improvement follows it or not.",
    explanation:
      "The inverted standard gives near-zero to 'too erratic to tie to any event'; top credit goes to the rupture-and-repair conclusion that names a calm-week skill test as its own refutation.",
  },
  {
    itemType: "written",
    prompt:
      "A patient who says she has never been able to accept warmth or rely on anyone slowly, over many months, lets the therapist come to matter to her. As she does, her relationships outside therapy — with friends and a partner — begin to improve in parallel. In one paragraph, propose the strongest conclusion about what is happening and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that the therapeutic relationship is serving as a live workshop for relating — by letting one trusted person matter and finding it safe, she is revising her template that 'depending on anyone is dangerous,' and that revised template generalizes to her outside relationships. This is a strong claim because it predicts checkable consequences: the outside improvements should follow, not precede, her growing trust in the therapist; the same fears she works through in the room (being let down, being too much) should be the ones easing outside; and a rupture in the therapy relationship should temporarily echo as renewed guardedness with friends and partner. I would test it by tracking whether her outside gains lag her in-room trust over time, by comparing which specific fears shift in and out of therapy, and by watching whether an in-session rupture is followed by a brief outside setback that resolves when the rupture is repaired.",
      yieldAnchors: [
        "She has never been able to accept warmth or rely on anyone",
        "She gradually lets the therapist matter",
        "Her outside relationships improve in parallel",
      ],
      riskAnchors: [
        "Outside gains follow her growing in-room trust",
        "The same fears ease both in and out of therapy",
        "An in-session rupture echoes as outside guardedness",
      ],
      defeatedBy: [
        "Outside relationships improve before any trust forms in therapy",
        "Whether anyone matters to her is unknowable",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that the therapeutic relationship is serving as a live workshop for relating — by letting one trusted person matter and finding it safe, she is revising her template that 'depending on anyone is dangerous,' and that revised template generalizes to her outside relationships. This is a strong claim because it predicts checkable consequences: the outside improvements should follow, not precede, her growing trust in the therapist; the same fears she works through in the room (being let down, being too much) should be the ones easing outside; and a rupture in the therapy relationship should temporarily echo as renewed guardedness with friends and partner. I would test it by tracking whether her outside gains lag her in-room trust over time, by comparing which specific fears shift in and out of therapy, and by watching whether an in-session rupture is followed by a brief outside setback that resolves when the rupture is repaired.",
    explanation:
      "The cautious 'whether anyone matters to her is unknowable' earns near-zero; credit goes to the relationship-as-workshop conclusion that names a does-outside-lag-inside test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A patient tends to slip back into old symptoms each time the therapist is away, and to recover once sessions resume — but over the course of treatment these dips grow smaller, until eventually a break barely sets him back at all. In one paragraph, propose the strongest conclusion about what is changing and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that the patient is gradually internalizing the relationship — early on his gains lean on the therapist's actual presence, but over time he builds a stable inner sense of that steady, supportive other that can hold him through absences, which is why the dips shrink. This is a strong claim because it predicts checkable consequences: the size of each dip should decrease as treatment progresses rather than staying constant; the shrinking should track signs that he can call the relationship to mind during breaks, such as imagining what the therapist would say; and even after termination he should retain gains far better than he did during early absences. I would test it by measuring dip size across successive breaks, by checking whether his between-session coping correlates with his ability to evoke the therapist internally, and by following his stability after therapy ends to see whether the internalized relationship persists.",
      yieldAnchors: [
        "Symptoms return when the therapist is away",
        "Recovery follows the resumption of sessions",
        "The dips shrink over the course of treatment",
      ],
      riskAnchors: [
        "Each successive dip is smaller than the last",
        "Shrinking tracks his ability to evoke the therapist internally",
        "Gains persist after termination far better than during early breaks",
      ],
      defeatedBy: [
        "The dips stay the same size throughout treatment",
        "What sustains him between sessions cannot be known",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that the patient is gradually internalizing the relationship — early on his gains lean on the therapist's actual presence, but over time he builds a stable inner sense of that steady, supportive other that can hold him through absences, which is why the dips shrink. This is a strong claim because it predicts checkable consequences: the size of each dip should decrease as treatment progresses rather than staying constant; the shrinking should track signs that he can call the relationship to mind during breaks, such as imagining what the therapist would say; and even after termination he should retain gains far better than he did during early absences. I would test it by measuring dip size across successive breaks, by checking whether his between-session coping correlates with his ability to evoke the therapist internally, and by following his stability after therapy ends to see whether the internalized relationship persists.",
    explanation:
      "The inverted standard gives near-zero to 'what sustains him cannot be known'; top credit goes to the internalization conclusion that names a shrinking-dips-over-time test as its own refutation.",
  },
];

export const section: SectionContent = {
  slug: "therapeutic-relationship",
  title: "The Therapeutic Relationship",
  weekNumber: 1,
  blurb:
    "In psychodynamic therapy the relationship between patient and therapist is not the backdrop to the work — it is the main engine of change, where old patterns get replayed, ruptured, repaired, and slowly revised.",
  lectureTitle:
    "1.5 The Therapeutic Relationship: where the real work happens",
  body: `# The Therapeutic Relationship

It is tempting to picture therapy as a set of techniques a therapist applies to a patient, the way a mechanic applies tools to a car. But decades of clinical experience and outcome research point somewhere else: the single most powerful ingredient is usually the **relationship** itself. People change less because of clever interventions and more because of what happens between two people who keep showing up, week after week, and learn to trust each other. The relationship is not the stage on which the real work occurs — it is the work.

## The alliance as the engine

The **working alliance** is the bond of trust and shared purpose between patient and therapist. Across very different methods, the strength of that bond, measured early, tends to predict how well treatment turns out. That is a striking fact: whatever the technique, patients who feel understood and on the same team as their therapist tend to do better. The strong way to read this is not "rapport is nice to have" but "the alliance is itself a change-producing force." And like any strong claim, it earns its keep by predicting checkable things — for instance, that strengthening a weak alliance should improve outcomes, not just feelings.

## Rupture and repair

No relationship runs smoothly, and therapy is no exception. A therapist pushes when the patient needed listening; a comment lands as a judgment; a forgotten detail feels like being unimportant. These are **ruptures** — small breaks in the bond. What matters is not avoiding them but **repairing** them: noticing the strain, naming it, and working it through. Repair is often where the deepest change happens, because the patient discovers that conflict need not end the relationship. When a patient's gains keep arriving right after repaired conflicts rather than after new techniques, that timing is the clue: the repair, not the technique, is doing the work.

## Surviving the patient's worst

Many patients arrive expecting that if they show anger, neediness, or contempt, the other person will retaliate or leave — because that is what happened before. A central part of the work is the therapist **surviving** these moments: meeting the patient's fury or testing without crumbling and without striking back. When a patient hurls an insult braced for rejection and the therapist simply stays present, something old gets contradicted. This is a **corrective experience**: lived evidence that the feared outcome did not occur. The strong reading commits to that mechanism and names a test — the deepening of trust should follow the survived moment, and a real withdrawal would undo it.

## The real relationship and the transferred one

Not everything in the room is transference. Alongside the old templates the patient replays, there is a **real relationship** — two actual people, one of whom is genuinely warm, fallible, and present. Sometimes the decisive moment is not an interpretation but an honest human response: the therapist visibly moved by a patient's loss, or plainly admitting "I got that wrong." Part of the craft is telling apart what belongs to the patient's old patterns from what is a genuine here-and-now encounter, because both are at work and both can heal.

## Working in the here and now

Because the patient's patterns show up live in the room, the relationship is a kind of laboratory. A patient who flees closeness everywhere will, sooner or later, flee it here — canceling after the warmest sessions. A patient who expects control will bristle at the therapist's questions. These **here-and-now** moments are gold, because they can be observed and worked with directly rather than only reported. The strong move is the same one this whole course trains: read the pattern playing out between you, commit to what it means, and name the cheapest observation that would tell you whether you are right — does naming it reduce the flight? Does it show up with others too?

## Internalizing the relationship

Over time, a good relationship gets carried inside. Early on a patient's gains may lean on the therapist's actual presence, dipping during breaks and recovering when sessions resume. As treatment goes on, those dips often shrink — a sign the patient is building a stable inner sense of a steady, supportive other that can hold them through absences. This **internalization** is part of why the work lasts after therapy ends. It also gives a clean test: if the relationship is being taken in, the setbacks around each break should grow smaller across treatment, not stay the same.

## In the real world

Suppose a friend tells you her therapy "isn't about any special method — my therapist just gets me, and somehow that changed things." The dismissive read is that nothing real happened, that it was just a nice chat. The psychodynamic move treats the relationship as the active ingredient and asks what that predicts. If the bond is the lever, her bolder steps in life should follow moments she felt genuinely backed, not random worksheets; her progress should wobble if the relationship is strained and recover when it is repaired; and a colder, purely technical version of the same therapy should help her less. Notice what this buys you — not a vague tribute to "connection," but a testable claim about where change comes from. The strongest thing you can say about therapy is rarely "techniques fixed her"; it is that a relationship that survived, repaired, and was taken inside is what let her change — and here is exactly how you would check it.`,
  homework: {
    mcq,
    hybrid,
    written,
  },
};
