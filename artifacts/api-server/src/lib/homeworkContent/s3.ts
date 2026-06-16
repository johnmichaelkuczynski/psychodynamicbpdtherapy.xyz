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
      "A man who is constantly tempted by other women and barely resists becomes convinced — with no evidence at all — that his faithful partner is cheating, checks her phone nightly, and reads betrayal into her every text. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He likely protects himself from his own guilt over wanting to stray by attributing the urge to her, so the accusation says more about his impulses than her behavior; test whether his suspicion spikes right after he himself feels tempted, whether he ignores clear proof of her loyalty, and whether the jealousy fades when his own temptation is addressed directly.",
        credit: 1.0,
      },
      {
        text: "He seems pretty jealous about the relationship.",
        credit: 0.3,
      },
      {
        text: "His partner must actually be doing something suspicious, because nobody gets that jealous without a real reason.",
        credit: 0,
      },
      {
        text: "He's probably worried about losing her; we could ask him more about it.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "He likely protects himself from his own guilt over wanting to stray by attributing the urge to her, so the accusation says more about his impulses than her behavior; test whether his suspicion spikes right after he himself feels tempted, whether he ignores clear proof of her loyalty, and whether the jealousy fades when his own temptation is addressed directly.",
    explanation:
      "Top credit reads projection — the disowned impulse pinned on the partner — and names a timing test that could refute it; 'she must really be cheating' is the overreach the total lack of evidence defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A heavy smoker who has coughed up blood twice insists he is 'perfectly healthy,' calls it 'just a cold that's going around,' cancels the appointment his wife made, and refuses to discuss it. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He just hasn't gotten around to seeing a doctor yet; we could remind him.",
        credit: 0.6,
      },
      {
        text: "Health is unpredictable and the body is too complex to say what his refusal means.",
        credit: 0,
      },
      {
        text: "He seems to be avoiding the doctor.",
        credit: 0.3,
      },
      {
        text: "He likely keeps a frightening possibility out of awareness by denying the obvious signs, because facing it would mean facing real fear; test whether his calm cracks into anger or panic when pushed on the blood specifically, whether he downplays other people's symptoms far less than his own, and whether he can suddenly recall the warnings once the fear is made safe to feel.",
        credit: 1.0,
      },
    ],
    correctAnswer:
      "He likely keeps a frightening possibility out of awareness by denying the obvious signs, because facing it would mean facing real fear; test whether his calm cracks into anger or panic when pushed on the blood specifically, whether he downplays other people's symptoms far less than his own, and whether he can suddenly recall the warnings once the fear is made safe to feel.",
    explanation:
      "Full credit names denial protecting against fear and offers a 'does the calm crack' test; 'the body is too complex to say' is the refusal the pointed, selective dismissal of his own symptoms defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A student who never opened the book fails an exam and delivers a long, detailed explanation: the questions were unfair, the professor has a grudge, the room was too cold, the curve was rigged — but never once mentions not studying. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Exams have so many moving parts that there's no way to say why anyone fails.",
        credit: 0,
      },
      {
        text: "He likely builds reasonable-sounding excuses to protect himself from the painful truth that he didn't prepare, so the real cause stays conveniently off the list; test whether the one obvious factor — not studying — is the single thing he never raises, whether he accepts those same excuses from classmates who did study, and whether he prepares no differently next time.",
        credit: 1.0,
      },
      {
        text: "He seems upset about the grade.",
        credit: 0.3,
      },
      {
        text: "Maybe the test really was hard for him; we could look at his other grades.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "He likely builds reasonable-sounding excuses to protect himself from the painful truth that he didn't prepare, so the real cause stays conveniently off the list; test whether the one obvious factor — not studying — is the single thing he never raises, whether he accepts those same excuses from classmates who did study, and whether he prepares no differently next time.",
    explanation:
      "Top credit reads rationalization by the telling omission and names a 'what does he never mention' test; 'no way to say why anyone fails' is the dodge the conspicuous gap in his account defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A woman whose father died last week explains his death to friends in flat, clinical detail — the exact blockage, the survival statistics, the funeral-home logistics — and when someone asks how she's feeling, she returns to the medical facts. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She probably copes by thinking it through; we could give her time.",
        credit: 0.6,
      },
      {
        text: "She likely holds unbearable grief at a safe distance by turning it into facts and procedures, keeping the feeling out of reach; test whether emotion breaks through when she's asked about a specific shared memory rather than the diagnosis, whether the clinical detail intensifies exactly when feeling threatens, and whether she shows the same flatness only around this loss and not in general.",
        credit: 1.0,
      },
      {
        text: "Grief is a mystery, so there's nothing to read into how she talks.",
        credit: 0,
      },
      {
        text: "She seems to know a lot about what happened to him.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "She likely holds unbearable grief at a safe distance by turning it into facts and procedures, keeping the feeling out of reach; test whether emotion breaks through when she's asked about a specific shared memory rather than the diagnosis, whether the clinical detail intensifies exactly when feeling threatens, and whether she shows the same flatness only around this loss and not in general.",
    explanation:
      "Full credit names intellectualization — feeling swapped for facts — with a memory-versus-diagnosis test; 'grief is a mystery' is the refusal the precise retreat into detail whenever feeling nears defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A man lights up whenever a particular coworker enters the room, then becomes conspicuously cold and harsh to her — far ruder than to anyone else — and goes out of his way to criticize her in meetings. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He seems to dislike working with her.",
        credit: 0.3,
      },
      {
        text: "His exaggerated hostility likely defends against an attraction he can't accept, flipping the forbidden feeling into its opposite; test whether the rudeness spikes precisely when she's warm or nearby, whether he can't stop tracking her despite the coldness, and whether the harshness eases if the attraction becomes safe to acknowledge.",
        credit: 1.0,
      },
      {
        text: "He clearly just finds her annoying for some real reason we haven't seen yet.",
        credit: 0,
      },
      {
        text: "Something about her probably bothers him; we could watch how they interact.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "His exaggerated hostility likely defends against an attraction he can't accept, flipping the forbidden feeling into its opposite; test whether the rudeness spikes precisely when she's warm or nearby, whether he can't stop tracking her despite the coldness, and whether the harshness eases if the attraction becomes safe to acknowledge.",
    explanation:
      "Top credit reads reaction formation from the over-the-top, target-specific hostility and names a proximity test; 'he just finds her annoying' is the flat reading the lighting-up and excess intensity defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "A man is humiliated by his boss all day and says nothing, then comes home and explodes at his children over a spilled cup and snaps at the dog — reactions wildly out of scale with what they did. Which conclusion best follows?",
    mcOptions: [
      {
        text: "People are unpredictable, so there's no telling why he blew up at home.",
        credit: 0,
      },
      {
        text: "He likely redirects anger he couldn't safely express at his boss onto safer targets at home, which is why the reaction dwarfs its trigger; test whether his home outbursts cluster on his worst days at work, whether the anger shrinks when he can address the boss directly, and whether the targets are reliably the ones who can't retaliate.",
        credit: 1.0,
      },
      {
        text: "His kids are probably genuinely pushing his buttons and deserve the reaction.",
        credit: 0.6,
      },
      {
        text: "He seems short-tempered at home.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "He likely redirects anger he couldn't safely express at his boss onto safer targets at home, which is why the reaction dwarfs its trigger; test whether his home outbursts cluster on his worst days at work, whether the anger shrinks when he can address the boss directly, and whether the targets are reliably the ones who can't retaliate.",
    explanation:
      "Full credit names displacement from the mismatch between trigger and reaction and offers a 'do outbursts track bad work days' test; 'people are unpredictable' is the refusal the clear day-to-day pattern defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A woman has no memory of a serious car crash she was in as a child, yet she goes pale and short of breath at the smell of gasoline and refuses, without knowing why, to sit in the front seat. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She probably just doesn't like cars; we could ask her about it.",
        credit: 0.6,
      },
      {
        text: "The memory is gone, so her reactions are random quirks we can't explain.",
        credit: 0,
      },
      {
        text: "A painful memory may be held out of conscious recall while its emotional charge still drives reactions to specific cues, which is why the fear is precise but the memory is blank; test whether her panic is triggered only by crash-linked cues and not unrelated ones, whether the bodily reaction appears before any conscious thought, and whether reactions ease as the event is gradually brought into words.",
        credit: 1.0,
      },
      {
        text: "She seems nervous around cars.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "A painful memory may be held out of conscious recall while its emotional charge still drives reactions to specific cues, which is why the fear is precise but the memory is blank; test whether her panic is triggered only by crash-linked cues and not unrelated ones, whether the bodily reaction appears before any conscious thought, and whether reactions ease as the event is gradually brought into words.",
    explanation:
      "Top credit reads a repressed memory still steering cue-bound reactions and names a cue-specificity test; 'random quirks we can't explain' is the dodge the tight match between cues and the forgotten crash defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A man who badly wants a relationship but dreads rejection never asks anyone out, keeps his schedule so packed he 'has no time' to date, and smoothly changes the subject whenever friends raise it. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Dating is so personal there's nothing general to conclude about why he stays single.",
        credit: 0,
      },
      {
        text: "He likely protects himself from the pain of possible rejection by arranging his life so the risk never comes up, trading the wanted relationship for guaranteed safety; test whether the 'no time' busyness appears mainly around dating and not other goals, whether his anxiety rises the moment a real opportunity nears, and whether he can act when rejection is made to feel survivable.",
        credit: 1.0,
      },
      {
        text: "He's just a busy guy who hasn't met the right person; we could keep an eye on it.",
        credit: 0.6,
      },
      {
        text: "He seems to keep to himself about dating.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "He likely protects himself from the pain of possible rejection by arranging his life so the risk never comes up, trading the wanted relationship for guaranteed safety; test whether the 'no time' busyness appears mainly around dating and not other goals, whether his anxiety rises the moment a real opportunity nears, and whether he can act when rejection is made to feel survivable.",
    explanation:
      "Full credit names avoidance built to dodge rejection and offers a 'is the busyness dating-specific' test; 'nothing general to conclude' is the refusal the wanting-yet-systematically-evading pattern defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A manager who is privately seething with resentment toward his team insists, to anyone who'll listen, that they are 'angry and resentful' toward him — though they show no sign of it and rate him well in anonymous surveys. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The team is probably hiding real resentment, since he wouldn't sense it otherwise.",
        credit: 0,
      },
      {
        text: "He seems to think his team doesn't like him.",
        credit: 0.3,
      },
      {
        text: "He may be experiencing tension with the team; we could survey them again.",
        credit: 0.6,
      },
      {
        text: "He likely disowns his own resentment by perceiving it in his team, so his read on them mirrors his hidden feeling rather than their behavior; test whether his certainty about their anger tracks his own bad moods, whether he dismisses the positive surveys as fake, and whether his perception shifts once his own resentment is named and explored.",
        credit: 1.0,
      },
    ],
    correctAnswer:
      "He likely disowns his own resentment by perceiving it in his team, so his read on them mirrors his hidden feeling rather than their behavior; test whether his certainty about their anger tracks his own bad moods, whether he dismisses the positive surveys as fake, and whether his perception shifts once his own resentment is named and explored.",
    explanation:
      "Top credit reads projection — his own resentment seen in others — and names a mood-tracking test; 'the team must be hiding it' is the overreach the positive anonymous surveys defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "A woman whose husband has quietly moved his things out and stopped coming home insists 'everything is completely fine,' enthusiastically plans their anniversary party, and brushes aside every worried question from friends. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Marriages are complicated, so we can't say anything about what she's doing.",
        credit: 0,
      },
      {
        text: "She likely shields herself from an unbearable truth by refusing to register the plain signs that the marriage is ending, since acknowledging it would mean facing the loss; test whether her cheer collapses into distress when the absence is named concretely, whether she avoids any topic that would force the issue, and whether she can take it in once support is in place.",
        credit: 1.0,
      },
      {
        text: "She seems optimistic about her marriage.",
        credit: 0.3,
      },
      {
        text: "Maybe things really are okay between them; we could talk to her more.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "She likely shields herself from an unbearable truth by refusing to register the plain signs that the marriage is ending, since acknowledging it would mean facing the loss; test whether her cheer collapses into distress when the absence is named concretely, whether she avoids any topic that would force the issue, and whether she can take it in once support is in place.",
    explanation:
      "Full credit names denial that wards off loss and offers a 'does the cheer collapse when named' test; 'we can't say anything' is the refusal the stark gap between the facts and her story defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A man drinks heavily every night and, whenever it comes up, explains smoothly that 'everyone in my industry drinks this much — it's just how deals get done,' never touching on how he feels when he stops. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He seems to drink a fair amount after work.",
        credit: 0.3,
      },
      {
        text: "He may be drinking more than he should; we could track how often it happens.",
        credit: 0.6,
      },
      {
        text: "He likely defends the drinking with a socially acceptable reason so he never has to face what it's actually doing for him, keeping the real motive out of view; test whether he gets irritable or evasive when asked how he feels on nights he doesn't drink, whether the 'industry norm' excuse holds up against peers who drink little, and whether the justifications multiply as the drinking grows.",
        credit: 1.0,
      },
      {
        text: "Drinking habits vary so much that there's nothing to be learned from his explanation.",
        credit: 0,
      },
    ],
    correctAnswer:
      "He likely defends the drinking with a socially acceptable reason so he never has to face what it's actually doing for him, keeping the real motive out of view; test whether he gets irritable or evasive when asked how he feels on nights he doesn't drink, whether the 'industry norm' excuse holds up against peers who drink little, and whether the justifications multiply as the drinking grows.",
    explanation:
      "Top credit reads rationalization shielding the real motive and names a 'does the excuse survive scrutiny' test; 'nothing to be learned' is the dodge the convenient, feeling-avoiding excuse defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A nurse who has just received a frightening diagnosis of her own responds by lecturing her family on treatment protocols, printing out journal articles, and debating survival percentages — but waves off every question about how she's holding up. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Being scared is so private that her behavior can't tell us anything.",
        credit: 0,
      },
      {
        text: "She probably feels more in control with information; we could check in later.",
        credit: 0.6,
      },
      {
        text: "She likely keeps terror at bay by living in the facts of the illness, using expertise as armor against feeling it; test whether her composure cracks when asked about fear rather than figures, whether the flood of data peaks right when emotion threatens, and whether she's far more clinical about her own case than she is comforting with patients.",
        credit: 1.0,
      },
      {
        text: "She seems very informed about her condition.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "She likely keeps terror at bay by living in the facts of the illness, using expertise as armor against feeling it; test whether her composure cracks when asked about fear rather than figures, whether the flood of data peaks right when emotion threatens, and whether she's far more clinical about her own case than she is comforting with patients.",
    explanation:
      "Full credit names intellectualization — expertise as armor — with a 'fear versus figures' test; 'being scared is private, can't tell us anything' is the refusal the precise retreat into data when feeling nears defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A teenager who is secretly eaten up with envy at her best friend's sudden popularity becomes gushingly, over-the-top complimentary toward her, praising her constantly and clinging closer than ever. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She probably really does admire her friend that much; nothing more to it.",
        credit: 0,
      },
      {
        text: "Her exaggerated adoration likely covers an envy she can't admit, converting the ugly feeling into its showy opposite; test whether the praise rings hollow or strained rather than warm, whether small put-downs slip out underneath the flattery, and whether the gushing intensifies right after her friend gets new attention.",
        credit: 1.0,
      },
      {
        text: "She seems to look up to her friend.",
        credit: 0.3,
      },
      {
        text: "She might be a little jealous; we could see how the friendship goes.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Her exaggerated adoration likely covers an envy she can't admit, converting the ugly feeling into its showy opposite; test whether the praise rings hollow or strained rather than warm, whether small put-downs slip out underneath the flattery, and whether the gushing intensifies right after her friend gets new attention.",
    explanation:
      "Top credit reads reaction formation from the strained excess of the praise and names a 'do put-downs leak through' test; 'she just really admires her' is the surface reading the secret envy and overdone intensity defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "A woman is furious at her controlling mother but stays sugary-sweet and dutiful with her, while picking constant, bitter fights with her gentle boyfriend — especially whenever he does some small thing that reminds her of her mother. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Relationships are too tangled to say why she fights with her boyfriend.",
        credit: 0,
      },
      {
        text: "She seems to argue with her boyfriend a lot.",
        credit: 0.3,
      },
      {
        text: "She likely diverts anger she can't safely aim at her mother onto her boyfriend, which is why the fights flare on exactly the mother-like cues; test whether the conflicts spike right after tense contact with her mother, whether the boyfriend's 'offenses' are trivial echoes of the mother's behavior, and whether the fighting eases when the real anger at her mother is faced.",
        credit: 1.0,
      },
      {
        text: "Her boyfriend might genuinely be doing annoying things; we could hear his side.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "She likely diverts anger she can't safely aim at her mother onto her boyfriend, which is why the fights flare on exactly the mother-like cues; test whether the conflicts spike right after tense contact with her mother, whether the boyfriend's 'offenses' are trivial echoes of the mother's behavior, and whether the fighting eases when the real anger at her mother is faced.",
    explanation:
      "Full credit names displacement from the mother-linked triggers and offers a 'do fights follow contact with mother' test; 'too tangled to say' is the refusal the precise cueing by mother-like acts defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A man gets a letter marked 'urgent' from a medical clinic, sets it on the counter unopened, lets it sit for three weeks behind a stack of mail, throws himself into a home-renovation project, and twice 'forgets' to call back. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He's probably just disorganized; we could help him sort his mail.",
        credit: 0.6,
      },
      {
        text: "He seems to be putting off the clinic.",
        credit: 0.3,
      },
      {
        text: "People forget things all the time, so there's nothing to read into it.",
        credit: 0,
      },
      {
        text: "He likely keeps a dreaded result at arm's length by not opening, not calling, and burying himself in a project, because engaging would make the fear real; test whether his avoidance is specific to this letter and not his bills, whether his tension rises whenever the letter is mentioned, and whether he can act once the fear of the result is talked through.",
        credit: 1.0,
      },
    ],
    correctAnswer:
      "He likely keeps a dreaded result at arm's length by not opening, not calling, and burying himself in a project, because engaging would make the fear real; test whether his avoidance is specific to this letter and not his bills, whether his tension rises whenever the letter is mentioned, and whether he can act once the fear of the result is talked through.",
    explanation:
      "Top credit reads fear-driven avoidance from the layered evasion and names a 'is it specific to this letter' test; 'he's just disorganized' is the bland reading the targeted, anxious dodging of one dreaded item defeats.",
  },
];

const hybrid: HomeworkItem[] = [
  {
    itemType: "hybrid",
    prompt:
      "A woman who has just been laid off spends the week energetically reassuring everyone that she's 'totally fine, honestly better off,' refuses to update her résumé, and gets irritated when anyone treats it as a setback. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She likely fends off the fear and shame of the loss by insisting it doesn't hurt, which is why she won't take the practical steps that would force her to face it; test whether her brightness gives way when the layoff is named plainly, whether she avoids tasks that would make it real, and whether she can plan once the feeling is acknowledged as safe.",
        credit: 1.0,
      },
      {
        text: "She seems to be taking the layoff in stride.",
        credit: 0.3,
      },
      {
        text: "Maybe she really is relieved to be out of that job; people lose jobs all the time and there's nothing to interpret.",
        credit: 0,
      },
      {
        text: "She might be more upset than she lets on; we could keep checking in.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'denial protecting against the loss' lead from the rival 'she is genuinely relieved to be free of a bad job,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: watch what happens when the layoff is named plainly as a loss rather than a relief — my lead predicts her bright front cracks into distress or anger because the calm is a defense, while genuine relief would stay steady and even welcome the conversation. It is refuted if she can discuss the loss openly, acknowledge the sting, and still move forward, which would point to real relief rather than denial.",
      yieldAnchors: [
        "She insists she is 'totally fine, better off'",
        "She refuses the practical steps a job loss requires",
        "She gets irritated when it's treated as a setback",
      ],
      riskAnchors: [
        "Her brightness gives way when the loss is named plainly",
        "She avoids tasks that would make the loss real",
        "She can plan once the feeling is made safe to feel",
      ],
      defeatedBy: [
        "She discusses the loss openly and still feels genuinely relieved",
        "She takes practical steps without distress",
      ],
    },
    correctAnswer:
      "She likely fends off the fear and shame of the loss by insisting it doesn't hurt, which is why she won't take the practical steps that would force her to face it; test whether her brightness gives way when the layoff is named plainly, whether she avoids tasks that would make it real, and whether she can plan once the feeling is acknowledged as safe.",
    explanation:
      "Full credit names denial and pairs it with a 'does the calm crack when named' test that states its own refutation; 'there's nothing to interpret' is the dodge the refusal of every reality-facing step defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A man who routinely cuts corners and pads his expense reports is loudly, relentlessly suspicious that his colleagues are 'all on the take,' demanding audits of everyone but himself. Which conclusion best follows?",
    mcOptions: [
      {
        text: "His office is probably full of cheaters; honest people don't accuse without cause.",
        credit: 0,
      },
      {
        text: "He seems distrustful of his coworkers.",
        credit: 0.3,
      },
      {
        text: "He may have some workplace conflicts; we could review the team's reports.",
        credit: 0.6,
      },
      {
        text: "He likely offloads his own dishonesty by seeing it everywhere but in himself, so the suspicion maps his behavior onto others; test whether his accusations spike right after his own worst cheating, whether he exempts only himself from the audits he demands, and whether the suspicion subsides when his own conduct is examined.",
        credit: 1.0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'projection of his own dishonesty' lead from the rival 'he has accurately spotted real corruption around him,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: run the same audit on everyone including him — my lead predicts the records will show his own padding while the colleagues come up clean, because the suspicion is his behavior projected outward. It is refuted if independent audits actually turn up widespread cheating by others and clear him, which would mean he was perceiving a real pattern rather than his own.",
      yieldAnchors: [
        "He pads his own expense reports and cuts corners",
        "He is relentlessly suspicious of colleagues",
        "He demands audits of everyone but himself",
      ],
      riskAnchors: [
        "His accusations spike right after his own worst cheating",
        "He alone is exempt from the audits he demands",
        "The suspicion subsides once his own conduct is examined",
      ],
      defeatedBy: [
        "Independent audits reveal his colleagues really are cheating",
        "His own records come back completely clean",
      ],
    },
    correctAnswer:
      "He likely offloads his own dishonesty by seeing it everywhere but in himself, so the suspicion maps his behavior onto others; test whether his accusations spike right after his own worst cheating, whether he exempts only himself from the audits he demands, and whether the suspicion subsides when his own conduct is examined.",
    explanation:
      "Full credit names projection and offers an audit-everyone test that names its own refutation; 'honest people don't accuse without cause' is the overreach his own padded reports defeat.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A therapist notices that a client, whenever the talk turns to his recent divorce, immediately shifts into analyzing 'the sociology of modern marriage' and the statistics on divorce rates, never landing on his own pain. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He seems interested in the topic of marriage.",
        credit: 0.3,
      },
      {
        text: "He likely escapes the raw hurt of his own divorce by floating up into abstract analysis, keeping the feeling at a manageable distance; test whether the abstraction kicks in exactly when a personal feeling is approached, whether he can stay with a concrete memory without theorizing, and whether emotion surfaces when the general talk is gently redirected to him.",
        credit: 1.0,
      },
      {
        text: "He probably likes thinking about big-picture issues; we could let him talk it out.",
        credit: 0.6,
      },
      {
        text: "Some people are just intellectual, so there's nothing here worth reading into.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'intellectualization to avoid the pain' lead from the rival 'he is simply a naturally analytical person,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: gently steer him from the general topic to one concrete moment of his own divorce and watch whether he can stay with the feeling or instantly abstracts again — my lead predicts the retreat into theory fires precisely when personal emotion is near. It is refuted if he can dwell on his own pain with feeling when asked, and the analytic style shows up evenly across emotional and neutral topics alike.",
      yieldAnchors: [
        "He shifts to abstract sociology whenever his divorce comes up",
        "He cites divorce statistics instead of his experience",
        "He never lands on his own pain",
      ],
      riskAnchors: [
        "The abstraction starts exactly when a personal feeling is approached",
        "He can't stay with a concrete memory without theorizing",
        "Emotion surfaces when the talk is redirected to him",
      ],
      defeatedBy: [
        "He can dwell on his own pain with feeling when asked",
        "He is equally analytical about neutral, non-painful topics",
      ],
    },
    correctAnswer:
      "He likely escapes the raw hurt of his own divorce by floating up into abstract analysis, keeping the feeling at a manageable distance; test whether the abstraction kicks in exactly when a personal feeling is approached, whether he can stay with a concrete memory without theorizing, and whether emotion surfaces when the general talk is gently redirected to him.",
    explanation:
      "Full credit names intellectualization with a 'general-to-personal' test that states its refutation; 'some people are just intellectual' is the dodge the feeling-timed retreat into abstraction defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A volunteer at an animal shelter who privately can't stand one needy dog becomes that dog's most fervent champion — fussing over it endlessly, insisting she 'loves it most' — while quietly handling it more roughly than the others. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She clearly just loves that dog the most; the rough handling is nothing.",
        credit: 0,
      },
      {
        text: "Her loud devotion likely masks a dislike she can't admit, with the real feeling leaking out in how she actually handles the dog; test whether the rough handling appears only when she thinks no one is watching, whether the gushing devotion spikes when others are present, and whether her warmth toward easier dogs is calmer and more genuine.",
        credit: 1.0,
      },
      {
        text: "She seems very attached to that dog.",
        credit: 0.3,
      },
      {
        text: "She might have mixed feelings about it; we could watch her with the animals.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'reaction formation hiding dislike' lead from the rival 'she genuinely loves the dog and the rough handling is meaningless,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: compare how she handles the dog when observed versus when she thinks she's alone — my lead predicts the warmth is for the audience while the rougher, truer feeling shows when unwatched. It is refuted if she is gentle and affectionate with the dog even when no one is looking, which would mean the love is real rather than a cover.",
      yieldAnchors: [
        "She loudly insists she loves the dog most",
        "She fusses over it more than any other",
        "She handles it more roughly when unobserved",
      ],
      riskAnchors: [
        "Rough handling appears only when she's unwatched",
        "The gushing spikes when others are present",
        "Her warmth toward easier dogs is calmer and genuine",
      ],
      defeatedBy: [
        "She is gentle with the dog even when alone",
        "The rough handling never actually occurs",
      ],
    },
    correctAnswer:
      "Her loud devotion likely masks a dislike she can't admit, with the real feeling leaking out in how she actually handles the dog; test whether the rough handling appears only when she thinks no one is watching, whether the gushing devotion spikes when others are present, and whether her warmth toward easier dogs is calmer and more genuine.",
    explanation:
      "Full credit names reaction formation and offers a watched-versus-unwatched test that names its refutation; 'she just loves it most' is the surface reading the secret roughness leaking through defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A woman who is terrified by her own ambition and the thought of outshining her family insists at every turn that she's 'just not the competitive type,' turns down promotions, and downplays each success as luck. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Ambition is too personal to say anything about why she turns things down.",
        credit: 0,
      },
      {
        text: "She seems modest about her achievements.",
        credit: 0.3,
      },
      {
        text: "She may lack confidence; we could encourage her more.",
        credit: 0.6,
      },
      {
        text: "She likely guards against the guilt of wanting to surpass her family by disowning her ambition and shrinking from anything that would prove it, paying the price in a stalled career; test whether her self-erasing spikes right when real success looms, whether private moments reveal strong drive she won't claim, and whether she can accept an opportunity once the guilt is named and eased.",
        credit: 1.0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'she defends against guilt over her ambition' lead from the rival 'she genuinely lacks ambition and prefers a quiet role,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: see what happens to her drive in a low-stakes setting where outshining her family isn't in play — my lead predicts vivid ambition surfaces when the guilt isn't triggered, then vanishes the instant success threatens that boundary. It is refuted if she shows no drive in any context and feels genuine contentment turning opportunities down, which would mean she truly prefers a quiet role.",
      yieldAnchors: [
        "She insists she's 'just not competitive'",
        "She turns down promotions she could take",
        "She writes off each success as luck",
      ],
      riskAnchors: [
        "Her self-erasing spikes right when success looms",
        "Private moments reveal a drive she won't claim",
        "She can accept an opportunity once the guilt is eased",
      ],
      defeatedBy: [
        "She shows no ambition in any setting and is content",
        "She turns down promotions with genuine ease and no conflict",
      ],
    },
    correctAnswer:
      "She likely guards against the guilt of wanting to surpass her family by disowning her ambition and shrinking from anything that would prove it, paying the price in a stalled career; test whether her self-erasing spikes right when real success looms, whether private moments reveal strong drive she won't claim, and whether she can accept an opportunity once the guilt is named and eased.",
    explanation:
      "Full credit reads a defense disowning ambition, names its career cost, and offers a low-stakes test of hidden drive that could refute it; 'too personal to say anything' is the refusal the success-timed self-sabotage defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A new father who is overwhelmed and resentful about how the baby has upended his life can't tolerate those feelings, so he becomes a tirelessly doting, picture-perfect dad — yet he's developed headaches, can't sleep, and snaps at strangers. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He's probably just a devoted dad adjusting to a new baby; we could give him time.",
        credit: 0.6,
      },
      {
        text: "He likely converts unbearable resentment into showy over-devotion, but the buried feeling exacts its price in his body and his temper elsewhere; test whether the symptoms ease when the resentment is acknowledged as normal, whether his irritability lands on safe outsiders rather than the baby, and whether the doting feels driven and anxious rather than relaxed.",
        credit: 1.0,
      },
      {
        text: "He seems like a caring father.",
        credit: 0.3,
      },
      {
        text: "New parenthood is so individual that his symptoms could mean anything or nothing.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'over-devotion defending against resentment, paid for in symptoms' lead from the rival 'he is simply a devoted dad who is run-down from new-parent exhaustion,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: gently normalize that many new parents feel resentment and watch whether his headaches and edginess ease as the feeling becomes sayable — my lead predicts relief follows owning the buried resentment, because the symptoms carry what the over-devotion won't let him feel. It is refuted if his symptoms are fully explained by sleep loss and resolve with rest while no resentment ever surfaces, pointing to plain exhaustion.",
      yieldAnchors: [
        "He feels overwhelmed and resentful but can't tolerate it",
        "He has become a tirelessly perfect dad",
        "He has headaches, insomnia, and snaps at strangers",
      ],
      riskAnchors: [
        "Symptoms ease when the resentment is acknowledged as normal",
        "His irritability lands on safe outsiders, not the baby",
        "The doting feels driven and anxious, not relaxed",
      ],
      defeatedBy: [
        "His symptoms resolve with sleep and no resentment exists",
        "His devotion is relaxed and carries no hidden strain",
      ],
    },
    correctAnswer:
      "He likely converts unbearable resentment into showy over-devotion, but the buried feeling exacts its price in his body and his temper elsewhere; test whether the symptoms ease when the resentment is acknowledged as normal, whether his irritability lands on safe outsiders rather than the baby, and whether the doting feels driven and anxious rather than relaxed.",
    explanation:
      "Full credit names reaction formation plus its bodily cost and offers a 'does naming the resentment bring relief' test that states its refutation; 'could mean anything or nothing' is the dodge the symptoms-plus-displaced-temper pattern defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A woman who was deeply hurt by a friend's betrayal says, with a shrug, that she 'honestly can't even remember the details' of what happened — yet she tenses up and changes the subject the instant that friend's name comes up. Which conclusion best follows?",
    mcOptions: [
      {
        text: "People forget old arguments all the time, so the blank memory means nothing.",
        credit: 0,
      },
      {
        text: "She seems uncomfortable talking about her former friend.",
        credit: 0.3,
      },
      {
        text: "The painful memory may be held out of recall while its charge still shows in her body's reaction, which is why the details are 'gone' but the name still stings; test whether her tension is specific to this friend and not other old acquaintances, whether the bodily reaction precedes any conscious thought, and whether details return as the hurt is approached in a safe setting.",
        credit: 1.0,
      },
      {
        text: "She might still be a bit bothered by it; we could ask her again later.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'the painful memory is repressed but still charged' lead from the rival 'she has genuinely, neutrally forgotten an unimportant old spat,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: track whether her body reacts — tensing, subject-changing — specifically to this friend's name and not to other old acquaintances, since a live charge with a blank memory points to repression rather than ordinary forgetting. It is refuted if she stays relaxed and can recall the details easily once prompted, which would mean the event simply faded without any defensive blocking.",
      yieldAnchors: [
        "She claims she can't remember the betrayal's details",
        "She tenses up when the friend's name comes up",
        "She abruptly changes the subject",
      ],
      riskAnchors: [
        "Her tension is specific to this friend, not others",
        "The bodily reaction precedes any conscious thought",
        "Details return as the hurt is approached safely",
      ],
      defeatedBy: [
        "She stays relaxed and recalls the details easily when prompted",
        "She reacts the same way to many neutral old acquaintances",
      ],
    },
    correctAnswer:
      "The painful memory may be held out of recall while its charge still shows in her body's reaction, which is why the details are 'gone' but the name still stings; test whether her tension is specific to this friend and not other old acquaintances, whether the bodily reaction precedes any conscious thought, and whether details return as the hurt is approached in a safe setting.",
    explanation:
      "Full credit names repression with a live charge and offers a cue-specificity test that names its refutation; 'the blank memory means nothing' is the dodge the body's targeted reaction to that one name defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A man who is anxious about commitment but won't admit it keeps booking himself solid — extra shifts, weekend trips, side projects — and tells his frustrated girlfriend he 'would love to talk about the future, there's just never time.' Which conclusion best follows?",
    mcOptions: [
      {
        text: "He's clearly just a busy, ambitious guy with a packed life; nothing to interpret.",
        credit: 0,
      },
      {
        text: "He likely keeps commitment-anxiety at bay by staying too busy to ever face the relationship question, trading closeness for the safety of avoidance; test whether the sudden busyness clusters around moments the relationship deepens, whether his anxiety rises when a real conversation is scheduled, and whether time appears once the fear of commitment is talked through.",
        credit: 1.0,
      },
      {
        text: "He may be a little nervous about the relationship; we could nudge him to make time.",
        credit: 0.6,
      },
      {
        text: "He seems to have a lot going on.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'busyness as avoidance of commitment' lead from the rival 'he is genuinely overcommitted and would engage if he truly had time,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: clear the calendar by handing him a genuinely free evening set aside for 'the future' talk and see whether he suddenly manufactures a new obligation — my lead predicts fresh busyness materializes precisely to dodge the conversation. It is refuted if, given real free time, he eagerly and calmly engages with the relationship question, which would mean he was simply overcommitted.",
      yieldAnchors: [
        "He's anxious about commitment but won't admit it",
        "He keeps himself booked solid",
        "He says he'd 'love to talk' but never has time",
      ],
      riskAnchors: [
        "Busyness clusters when the relationship deepens",
        "His anxiety rises when a real talk is scheduled",
        "Time appears once the fear of commitment is addressed",
      ],
      defeatedBy: [
        "Given genuinely free time, he engages eagerly and calmly",
        "His schedule is forced on him and unrelated to the relationship",
      ],
    },
    correctAnswer:
      "He likely keeps commitment-anxiety at bay by staying too busy to ever face the relationship question, trading closeness for the safety of avoidance; test whether the sudden busyness clusters around moments the relationship deepens, whether his anxiety rises when a real conversation is scheduled, and whether time appears once the fear of commitment is talked through.",
    explanation:
      "Full credit names avoidance dressed as busyness and offers a 'give him free time and watch' test that names its refutation; 'nothing to interpret' is the dodge the relationship-timed scheduling defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "After being passed over for a promotion he badly wanted, a man declares he 'never even cared about that job — it's beneath me, really,' and lists all the reasons the role is undesirable, though he'd campaigned hard for it weeks earlier. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He seems to have changed his mind about the job.",
        credit: 0.3,
      },
      {
        text: "He likely softens the sting of rejection by recasting the prize he lost as worthless, so the disappointment never has to be felt; test whether his disdain appeared only after the rejection and not before, whether he still shows envy or hurt when the role comes up, and whether the contempt fades once the disappointment is acknowledged.",
        credit: 1.0,
      },
      {
        text: "Maybe the job really wasn't right for him after all; we could ask why he applied.",
        credit: 0.6,
      },
      {
        text: "People's preferences shift constantly, so there's nothing to make of it.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'rationalizing away the loss (sour grapes)' lead from the rival 'he genuinely reconsidered and decided the role was wrong for him,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: check the timing — did his contempt for the job appear only after he was rejected, despite his hard campaigning days earlier — because a sudden post-loss reversal is the signature of protecting against disappointment. It is refuted if he had voiced real doubts about the role before the decision, or if he can both admit it stings and stand by his new view, which would mean a genuine reconsideration.",
      yieldAnchors: [
        "He campaigned hard for the job weeks earlier",
        "After losing, he calls it 'beneath me'",
        "He lists reasons the role is undesirable",
      ],
      riskAnchors: [
        "The disdain appeared only after the rejection",
        "He still shows envy or hurt about the role",
        "The contempt fades once disappointment is acknowledged",
      ],
      defeatedBy: [
        "He had voiced real doubts about the role beforehand",
        "He can admit it stings yet genuinely stand by his new view",
      ],
    },
    correctAnswer:
      "He likely softens the sting of rejection by recasting the prize he lost as worthless, so the disappointment never has to be felt; test whether his disdain appeared only after the rejection and not before, whether he still shows envy or hurt when the role comes up, and whether the contempt fades once the disappointment is acknowledged.",
    explanation:
      "Full credit names rationalization (sour grapes) and offers a timing-of-the-disdain test that states its refutation; 'preferences shift, nothing to make of it' is the dodge the abrupt post-rejection reversal defeats.",
  },
];

const written: HomeworkItem[] = [
  {
    itemType: "written",
    prompt:
      "A man whose younger brother recently died describes the funeral and his brother's illness without a flicker of feeling, throws himself into organizing the estate paperwork with brisk efficiency, and gently steers every conversation away from how he himself is doing — yet his friends notice he has stopped sleeping. In one paragraph, propose the strongest conclusion about the dynamic at work and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that he is defending against overwhelming grief by holding it out of awareness — staying busy and factual so the feeling never reaches him — but the cost is leaking out in his sleeplessness, because feelings kept from the mind tend to surface in the body. This is a strong claim because it predicts checkable consequences: his composure should crack specifically when the loss is named in personal, emotional terms rather than logistical ones; the insomnia and other strain should ease as the grief becomes sayable and is shared; and his flatness should be specific to this loss, not a lifelong style. I would test it by gently shifting talk from estate paperwork to a concrete shared memory and watching whether feeling breaks through, by tracking whether his sleep improves as the grief is acknowledged, and by checking whether he shows normal emotion about everything except his brother's death.",
      yieldAnchors: [
        "He describes the death without any feeling",
        "He buries himself in brisk estate paperwork",
        "He has stopped sleeping",
      ],
      riskAnchors: [
        "His composure cracks when the loss is named personally",
        "The insomnia eases as grief becomes sayable and shared",
        "The flatness is specific to this loss, not a lifelong style",
      ],
      defeatedBy: [
        "He is simply a calm person and feels no buried grief",
        "Nothing about a person's coping can be inferred from how they talk",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that he is defending against overwhelming grief by holding it out of awareness — staying busy and factual so the feeling never reaches him — but the cost is leaking out in his sleeplessness, because feelings kept from the mind tend to surface in the body. This is a strong claim because it predicts checkable consequences: his composure should crack specifically when the loss is named in personal, emotional terms rather than logistical ones; the insomnia and other strain should ease as the grief becomes sayable and is shared; and his flatness should be specific to this loss, not a lifelong style. I would test it by gently shifting talk from estate paperwork to a concrete shared memory and watching whether feeling breaks through, by tracking whether his sleep improves as the grief is acknowledged, and by checking whether he shows normal emotion about everything except his brother's death.",
    explanation:
      "Under the inverted standard, 'nothing can be inferred from how he talks' earns near-zero; top credit goes to naming a grief defense that binds the flatness and insomnia and proposes a memory test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A woman who is often sharply critical and quick to find fault is utterly convinced that her partner, friends, and coworkers are all 'so judgmental and harsh,' and she feels constantly attacked by them — though others describe those same people as warm and easygoing. In one paragraph, propose the strongest conclusion about the dynamic and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that she protects herself from owning her own harsh, critical streak by experiencing it as coming from everyone around her, so the judgment she can't accept in herself feels like it's aimed at her from outside. This is a strong claim because it predicts checkable consequences: her sense of being attacked should spike right after her own most critical moments; the people she calls harsh should be ones others find warm, marking the perception as hers rather than theirs; and the feeling of being judged should ease as she comes to recognize and accept her own critical side. I would test it by tracking whether her 'they're so judgmental' episodes follow her own bouts of fault-finding, by gathering outside descriptions of the same people to see whether the harshness is really there, and by watching whether owning her critical streak softens her sense of being attacked.",
      yieldAnchors: [
        "She is herself sharply critical and quick to fault others",
        "She's convinced everyone around her is judgmental and harsh",
        "Others describe those same people as warm and easygoing",
      ],
      riskAnchors: [
        "Her sense of being attacked spikes after her own critical moments",
        "Outsiders find the 'harsh' people warm",
        "Feeling judged eases as she owns her own critical side",
      ],
      defeatedBy: [
        "Independent accounts confirm the others really are harsh to her",
        "The unconscious is unknowable, so her complaints can't be read",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that she protects herself from owning her own harsh, critical streak by experiencing it as coming from everyone around her, so the judgment she can't accept in herself feels like it's aimed at her from outside. This is a strong claim because it predicts checkable consequences: her sense of being attacked should spike right after her own most critical moments; the people she calls harsh should be ones others find warm, marking the perception as hers rather than theirs; and the feeling of being judged should ease as she comes to recognize and accept her own critical side. I would test it by tracking whether her 'they're so judgmental' episodes follow her own bouts of fault-finding, by gathering outside descriptions of the same people to see whether the harshness is really there, and by watching whether owning her critical streak softens her sense of being attacked.",
    explanation:
      "The inverted standard gives near-zero to 'the unconscious is unknowable'; credit goes to naming projection that binds the gap between her view and others' and proposes a timing test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A teenage boy who is privately frightened and confused by his own tender, vulnerable feelings has become aggressively 'tough' — mocking anything sentimental, picking fights to prove he's hard, and sneering at friends who show emotion — yet he secretly writes poetry he hides from everyone. In one paragraph, propose the strongest conclusion about the dynamic and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that his exaggerated toughness is a defense against tender feelings he finds unbearable, flipping the soft, vulnerable side he can't accept into its loud opposite — and the hidden poetry is the disowned feeling still alive underneath. This is a strong claim because it predicts checkable consequences: his hardness should intensify exactly when something threatens to move him; the contempt should ring forced and brittle rather than relaxed; and the aggression should soften if his tender feelings are made safe to have rather than shameful. I would test it by watching whether his toughest displays come right on the heels of emotional moments, by noting whether his sneering feels strained when sentiment appears, and by checking whether validating the feelings behind the poetry reduces the need for the tough front.",
      yieldAnchors: [
        "He's privately frightened by his own tender feelings",
        "He acts aggressively tough and mocks all sentiment",
        "He secretly writes poetry he hides",
      ],
      riskAnchors: [
        "His hardness intensifies when something threatens to move him",
        "The contempt rings forced and brittle, not relaxed",
        "The aggression softens when tender feelings are made safe",
      ],
      defeatedBy: [
        "He is simply a naturally tough kid with no hidden tenderness",
        "Teenagers are unreadable, so his behavior means nothing",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that his exaggerated toughness is a defense against tender feelings he finds unbearable, flipping the soft, vulnerable side he can't accept into its loud opposite — and the hidden poetry is the disowned feeling still alive underneath. This is a strong claim because it predicts checkable consequences: his hardness should intensify exactly when something threatens to move him; the contempt should ring forced and brittle rather than relaxed; and the aggression should soften if his tender feelings are made safe to have rather than shameful. I would test it by watching whether his toughest displays come right on the heels of emotional moments, by noting whether his sneering feels strained when sentiment appears, and by checking whether validating the feelings behind the poetry reduces the need for the tough front.",
    explanation:
      "The cautious 'teenagers are unreadable' earns near-zero; top credit goes to naming reaction formation that binds the hidden poetry and proposes a 'does toughness spike after emotional moments' test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "For fifteen years a woman who longs for closeness has turned down every chance at a serious relationship the moment it gets real — ending things 'before they can go wrong,' staying friendly but never letting anyone in — and now, lonely, she insists she 'just hasn't met the right person.' In one paragraph, propose the strongest conclusion about the dynamic and the cost it has carried, and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that she protects herself from the risk of being hurt or abandoned by avoiding real closeness — pulling away exactly when intimacy deepens — and the long-term cost is the very loneliness she's now suffering, so the defense has bought safety at the price of what she most wants. This is a strong claim because it predicts checkable consequences: her urge to end things should fire precisely at the points where a relationship turns serious rather than at random; her anxiety should rise as closeness grows and drop once she's retreated to safe distance; and she should be able to stay in a relationship if the fear of being hurt is faced and made bearable. I would test it by mapping whether her breakups cluster at moments of deepening intimacy, by tracking whether her anxiety tracks closeness, and by seeing whether addressing the underlying fear lets her tolerate staying rather than fleeing.",
      yieldAnchors: [
        "She longs for closeness yet ends every serious relationship",
        "She pulls away the moment things get real",
        "She is now lonely but blames 'not meeting the right person'",
      ],
      riskAnchors: [
        "Her urge to end things fires when intimacy deepens",
        "Her anxiety rises with closeness and drops after retreat",
        "She can stay once the fear of being hurt is faced",
      ],
      defeatedBy: [
        "She genuinely prefers being single and feels no real loss",
        "She has simply had bad luck meeting compatible partners",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that she protects herself from the risk of being hurt or abandoned by avoiding real closeness — pulling away exactly when intimacy deepens — and the long-term cost is the very loneliness she's now suffering, so the defense has bought safety at the price of what she most wants. This is a strong claim because it predicts checkable consequences: her urge to end things should fire precisely at the points where a relationship turns serious rather than at random; her anxiety should rise as closeness grows and drop once she's retreated to safe distance; and she should be able to stay in a relationship if the fear of being hurt is faced and made bearable. I would test it by mapping whether her breakups cluster at moments of deepening intimacy, by tracking whether her anxiety tracks closeness, and by seeing whether addressing the underlying fear lets her tolerate staying rather than fleeing.",
    explanation:
      "The inverted standard gives near-zero to 'she just hasn't met the right person'; credit goes to naming avoidance that binds the fifteen-year pattern, names its cost in loneliness, and proposes a 'do breakups cluster at deepening intimacy' test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A surgeon who is quietly devastated by a patient's death on the table responds by immediately reviewing the operative statistics, discussing the case as a 'technically interesting complication,' and correcting a colleague's terminology — while declining, with a tight smile, to say how the loss affected him. In one paragraph, propose the strongest conclusion about the dynamic and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that he keeps the grief and guilt of losing a patient at a safe distance by retreating into technical analysis, letting facts and procedure stand in for feeling so the loss never lands emotionally. This is a strong claim because it predicts checkable consequences: the rush into statistics and terminology should intensify exactly when the human side of the loss is approached; his tight composure should give way if he's asked about the patient as a person rather than as a case; and the clinical detachment should be specific to emotionally loaded losses rather than his manner with every routine case. I would test it by steering the conversation from the operative numbers to the patient as a person and watching whether feeling surfaces or the abstraction redoubles, by noting whether his analysis peaks precisely when emotion threatens, and by comparing his detachment on this case to his tone on ordinary, low-stakes ones.",
      yieldAnchors: [
        "He's quietly devastated by the patient's death",
        "He retreats into statistics and a 'technically interesting' framing",
        "He won't say how the loss affected him",
      ],
      riskAnchors: [
        "The technical talk intensifies when the human side is approached",
        "His composure gives way if asked about the patient as a person",
        "The detachment is specific to emotionally loaded losses",
      ],
      defeatedBy: [
        "He is genuinely unaffected and feels no grief or guilt",
        "A person's coping can't be read from how clinically they speak",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that he keeps the grief and guilt of losing a patient at a safe distance by retreating into technical analysis, letting facts and procedure stand in for feeling so the loss never lands emotionally. This is a strong claim because it predicts checkable consequences: the rush into statistics and terminology should intensify exactly when the human side of the loss is approached; his tight composure should give way if he's asked about the patient as a person rather than as a case; and the clinical detachment should be specific to emotionally loaded losses rather than his manner with every routine case. I would test it by steering the conversation from the operative numbers to the patient as a person and watching whether feeling surfaces or the abstraction redoubles, by noting whether his analysis peaks precisely when emotion threatens, and by comparing his detachment on this case to his tone on ordinary, low-stakes ones.",
    explanation:
      "'Coping can't be read from how clinically he speaks' is the refusal the tight smile and feeling-timed retreat defeat; top credit goes to naming intellectualization that binds the evidence and proposes a 'person versus case' test that could refute it.",
  },
];

export const section: SectionContent = {
  slug: "defense-mechanisms",
  title: "Defense Mechanisms",
  weekNumber: 1,
  blurb:
    "Defenses are the automatic moves the mind makes to keep painful feelings out of awareness — denial, projection, rationalization, and the rest — and the craft is reading which one is at work from its behavioral signature and the price it quietly exacts.",
  lectureTitle:
    "1.3 Defense Mechanisms: how we protect ourselves, and what it costs",
  body: `# Defense Mechanisms

Some feelings are too painful, too frightening, or too shameful to hold in mind, so the mind does something clever: it keeps them out of awareness. The maneuvers it uses are called **defense mechanisms**, and everyone uses them. A defense isn't a flaw or a lie; it's an automatic, out-of-awareness move that protects you from a feeling you can't yet face. The trouble is that protection is never free. A defense buys relief in the moment but charges interest over time — a stalled career, a strained marriage, a body that won't sleep. The clinical skill is to read which defense is running from the pattern it leaves behind, and to notice the cost it quietly exacts.

## What a defense is — and isn't

A defense is not a conscious decision. The man who can't face that he's seriously ill doesn't sit down and choose to ignore the blood he coughed up; the ignoring happens automatically, below the level of deliberate thought. That's what makes defenses worth studying the same way we study any hidden process: you don't see the defense directly, you see its **signature** in behavior — what the person does, avoids, insists on, or can't quite feel. From that signature you infer the feeling being warded off. The behavior is the data; the defense is the explanation that accounts for it.

## A field guide to the common defenses

**Denial** refuses to register a painful reality — the spouse who plans an anniversary party while the marriage visibly collapses. **Projection** disowns a feeling by seeing it in someone else — the man tempted to cheat who becomes certain his faithful partner is cheating. **Rationalization** supplies a reasonable-sounding excuse so the real cause stays hidden — the student who failed because the test was "unfair," never because he didn't study. **Intellectualization** swaps feeling for facts — the grieving daughter who recites survival statistics instead of crying. **Reaction formation** flips a forbidden feeling into its loud opposite — the man who's attracted to a coworker and treats her with conspicuous coldness. **Displacement** redirects a feeling onto a safer target — the worker humiliated by his boss who comes home and yells at his kids. **Repression** holds a painful memory out of recall while its emotional charge still drives reactions. **Avoidance** simply arranges life so the feared thing never comes up.

## How to read the signature

Each defense leaves tell-tale marks. Look for **disproportion**: a reaction far bigger or smaller than its trigger, like exploding at a spilled cup after a humiliating day. Look for **conspicuous omission**: the one obvious cause a person never mentions, like the student who lists every excuse except not studying. Look for **timing**: a feeling that flares precisely when something threatens, like abstraction that kicks in the instant grief is approached. Look for **leakage**: the warded-off feeling slipping out sideways — small put-downs underneath gushing praise, insomnia under a calm front. None of these proves a defense by itself, but together they point one way.

## Always name a test

A strong reading of a defense doesn't just slap on a label; it commits to a specific feeling being defended and then names the cheapest observation that would prove it wrong. If you think a man's loud devotion to a dog is reaction formation hiding dislike, predict that he'll handle the dog roughly when unwatched — and look. If you think a woman's busyness is avoidance of commitment, predict that fresh obligations will appear exactly when a real conversation is scheduled — and watch. The weak move is the lazy diagnosis that risks nothing. The strong move fits the evidence in front of you **and** spells out the result that would refute it.

## The cost side of the ledger

Because defenses work, it's tempting to leave them alone. But the whole reason they matter clinically is the **cost**. Avoidance of rejection can cost someone the relationship they most want. Displacement can wreck the home life of someone who never confronts their boss. Repressed feelings tend to surface in the body — headaches, sleeplessness, panic at a stray cue. Reading a defense isn't about catching someone out; it's about seeing what the protection is costing them, so the warded-off feeling can eventually be faced more cheaply than the defense charges.

## In the real world

Suppose a friend who just got dumped announces he "never even liked her — total relief, honestly." The dodge is to take it at face value, or to throw up your hands and say feelings are too private to read. A sharper move commits to a reading: this sudden contempt for someone he was crazy about last week looks like rationalization softening a loss he can't admit. Notice how much that opens up. It predicts the disdain appeared only after she ended it, not before; that hurt or longing still leaks through when her name comes up; and that the contempt fades once the disappointment is actually felt. Three cheap checks, each able to refute the idea. That's the habit this course is built on — not labeling people, but committing to the strongest reading the evidence supports and naming the observation that could prove you wrong.`,
  homework: {
    mcq,
    hybrid,
    written,
  },
};
