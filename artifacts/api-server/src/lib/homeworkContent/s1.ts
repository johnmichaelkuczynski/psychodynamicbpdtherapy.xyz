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
      "When her boyfriend takes an hour to answer a text, a woman is gripped by certainty that he is leaving her. Her chest floods with panic, she fires off a barrage of furious then begging messages, and the moment he calls back warmly she feels calm — for a while. The next silence restarts it, and she has burned through friends and a job this way. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Everyone gets a little clingy when they're worried about a relationship; reading a disorder into a few anxious texts is overthinking it.",
        credit: 0,
      },
      {
        text: "This likely runs a borderline abandonment-regulation loop, not ordinary worry: a perceived rejection spikes unbearable panic, the barrage of messages pulls reassurance that briefly settles the affect, and that relief teaches the pattern to fire again so the next silence reignites it across relationship after relationship; test whether the panic follows an interpersonal trigger rather than any real sign he is leaving, whether the relief is brief before the dread returns harder, and whether the storm subsides on its own when she tolerates the silence without chasing reassurance.",
        credit: 1.0,
      },
      {
        text: "She probably feels some insecurity about the relationship; we could keep an eye on it.",
        credit: 0.6,
      },
      {
        text: "She seems to text him a lot when she's anxious.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "This likely runs a borderline abandonment-regulation loop, not ordinary worry: a perceived rejection spikes unbearable panic, the barrage of messages pulls reassurance that briefly settles the affect, and that relief teaches the pattern to fire again so the next silence reignites it across relationship after relationship; test whether the panic follows an interpersonal trigger rather than any real sign he is leaving, whether the relief is brief before the dread returns harder, and whether the storm subsides on its own when she tolerates the silence without chasing reassurance.",
    explanation:
      "Top credit names the trigger-affect-act-relief-reinforce loop and that the behavior wards off abandonment, plus a tolerate-the-silence test; 'everyone gets clingy' is the dodge the lost job and burned friendships defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "A man calls a new friend 'the only person who has ever truly understood me' within a week. When the friend reschedules a dinner, a wave of fury and hurt rises; he declares the friend a fake and cuts him off completely, feeling a cold calm. Days later he misses him desperately and reaches out. This has happened with nearly everyone close to him. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He seems to run hot and cold with his friends.",
        credit: 0.3,
      },
      {
        text: "This likely runs a borderline idealize-then-devalue loop: a small letdown spikes intolerable hurt, abruptly recasting the friend as 'a fake' and cutting him off discharges the affect and briefly steadies him, and that relief reinforces the flip so the next disappointment reignites it across nearly every close tie; test whether the devaluation follows an interpersonal let-down rather than real new information about the person, whether the cold calm is brief before he misses them again, and whether the swing softens when he names the hurt instead of acting on it.",
        credit: 1.0,
      },
      {
        text: "People are far too complicated to say what's going on inside someone's friendships, so there's really no way to read this.",
        credit: 0,
      },
      {
        text: "He might idealize people and then get disappointed; we could ask him about it.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "This likely runs a borderline idealize-then-devalue loop: a small letdown spikes intolerable hurt, abruptly recasting the friend as 'a fake' and cutting him off discharges the affect and briefly steadies him, and that relief reinforces the flip so the next disappointment reignites it across nearly every close tie; test whether the devaluation follows an interpersonal let-down rather than real new information about the person, whether the cold calm is brief before he misses them again, and whether the swing softens when he names the hurt instead of acting on it.",
    explanation:
      "Full credit reads the idealize-devalue flip as affect discharge tied to a let-down and names a does-it-track-the-disappointment test; 'people are too complicated to say' is the dodge the same-with-everyone pattern defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "After a tense fight with her mother, a teenager locks herself in the bathroom and cuts her arm. She describes the moment after as a flood of relief — the unbearable feeling finally drops and she can breathe. The next conflict brings the same urge, and the cutting is becoming more frequent. She hides the marks and says she does not want to die. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Cutting always means a person is trying to kill themselves, so the only safe read is that this is a suicide attempt.",
        credit: 0,
      },
      {
        text: "She seems to hurt herself after arguments.",
        credit: 0.3,
      },
      {
        text: "This looks like self-harm working as affect regulation in a borderline loop, not a suicide attempt: an interpersonal conflict spikes overwhelming emotion, the cutting discharges it and brings real relief, and that relief reinforces the act so the next fight reignites the urge; test whether the cutting follows an emotional spike rather than a wish to die, whether the relief is immediate but short-lived before the feeling returns, and whether the urge fades when she rides out the emotion or soothes it another way.",
        credit: 1.0,
      },
      {
        text: "She's probably going through a hard time emotionally; we could check in with her.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "This looks like self-harm working as affect regulation in a borderline loop, not a suicide attempt: an interpersonal conflict spikes overwhelming emotion, the cutting discharges it and brings real relief, and that relief reinforces the act so the next fight reignites the urge; test whether the cutting follows an emotional spike rather than a wish to die, whether the relief is immediate but short-lived before the feeling returns, and whether the urge fades when she rides out the emotion or soothes it another way.",
    explanation:
      "Top credit reads the cutting as affect regulation that relief reinforces and names a does-it-follow-emotion-not-a-death-wish test; 'it must be a suicide attempt' is the overreach her relief-seeking and stated wish to live defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "A young man describes a constant hollow emptiness 'like nothing is inside.' To make it stop he shops impulsively, drives fast, or drinks until he feels something; each gives a brief charge before the emptiness creeps back and he does it again. The spending and risk are mounting, and he cannot sit alone without reaching for one of them. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He might use these things to cope with feeling low; we could look into it.",
        credit: 0.6,
      },
      {
        text: "This likely runs a borderline emptiness-regulation loop: a chronic, intolerable emptiness drives him to an impulsive act that briefly fills it, and that fleeting charge reinforces the act so the emptiness returns and he reaches for it again — at rising cost; test whether the spending and risk follow the empty feeling rather than ordinary wants, whether the charge is brief before the hollowness returns, and whether the emptiness eases without the act when he stays with it or connects with someone instead.",
        credit: 1.0,
      },
      {
        text: "Lots of people like to shop or have a few drinks, so there's nothing underneath his habits worth reading into.",
        credit: 0,
      },
      {
        text: "He seems to spend money and take risks fairly often.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "This likely runs a borderline emptiness-regulation loop: a chronic, intolerable emptiness drives him to an impulsive act that briefly fills it, and that fleeting charge reinforces the act so the emptiness returns and he reaches for it again — at rising cost; test whether the spending and risk follow the empty feeling rather than ordinary wants, whether the charge is brief before the hollowness returns, and whether the emptiness eases without the act when he stays with it or connects with someone instead.",
    explanation:
      "Full credit reads impulsivity as a way to fill chronic emptiness that the brief charge reinforces and names a does-it-follow-the-emptiness test; 'lots of people shop' is the dodge the mounting cost and can't-be-alone quality defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "When her group of friends makes plans without her, a woman is convinced they all secretly despise her. The hurt is so intense she screams accusations at the closest friend, then hours later, terrified of losing her, sends frantic apologies and gifts. The friend is reassured and she calms — until the next perceived slight. The pattern repeats with every group she joins. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Friend groups have drama all the time; there's nothing here to interpret in a bit of conflict.",
        credit: 0,
      },
      {
        text: "This likely runs a borderline abandonment loop with a rage-then-cling swing: a perceived exclusion spikes unbearable hurt, the explosive accusation discharges it, then panic at losing the friend drives frantic repair that pulls reassurance and briefly steadies her, and that relief reinforces the whole sequence so the next slight reignites it in every group; test whether the rage and clinging follow a perceived rejection rather than any real contempt, whether the calm is brief before the next slight, and whether the storm settles when she checks the perception before acting.",
        credit: 1.0,
      },
      {
        text: "She probably gets hurt easily in groups; we could revisit it.",
        credit: 0.6,
      },
      {
        text: "She seems to fight with her friends and then make up.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "This likely runs a borderline abandonment loop with a rage-then-cling swing: a perceived exclusion spikes unbearable hurt, the explosive accusation discharges it, then panic at losing the friend drives frantic repair that pulls reassurance and briefly steadies her, and that relief reinforces the whole sequence so the next slight reignites it in every group; test whether the rage and clinging follow a perceived rejection rather than any real contempt, whether the calm is brief before the next slight, and whether the storm settles when she checks the perception before acting.",
    explanation:
      "Top credit reads the rage-then-cling sequence as regulating abandonment dread and names a check-the-perception test; 'friend groups have drama' is the dodge the every-group repetition defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "Each time a relationship starts to feel close, a man abruptly ends it, picking a fight or simply vanishing. He says it brings instant relief from a dread that the other person will eventually leave him anyway. Within days he is consumed by loss and loneliness, then starts the cycle again with someone new. He says he wants a lasting relationship more than anything. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He seems to end his relationships pretty quickly.",
        credit: 0.3,
      },
      {
        text: "This likely runs a borderline 'reject first' loop: as closeness rises, the dread of being abandoned spikes, and ending it himself discharges that dread and brings instant relief, which reinforces the move so he repeats it despite wanting to stay; test whether the breakups follow a surge of closeness rather than any real problem in the relationship, whether the relief is brief before loss and loneliness flood in, and whether the urge fades when he names the abandonment fear and tolerates the closeness.",
        credit: 1.0,
      },
      {
        text: "Some people just aren't built for long relationships, so there's no real way to know what's going on inside him.",
        credit: 0,
      },
      {
        text: "He might have a fear of commitment; we could explore that.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "This likely runs a borderline 'reject first' loop: as closeness rises, the dread of being abandoned spikes, and ending it himself discharges that dread and brings instant relief, which reinforces the move so he repeats it despite wanting to stay; test whether the breakups follow a surge of closeness rather than any real problem in the relationship, whether the relief is brief before loss and loneliness flood in, and whether the urge fades when he names the abandonment fear and tolerates the closeness.",
    explanation:
      "Top credit reads the pre-emptive breakup as warding off abandonment, reinforced by relief, and names a does-it-follow-closeness test; 'not built for relationships' is the dodge his stated longing and repeated loss defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "During a heated argument in which her partner threatens to leave, a woman says the room goes 'unreal' and she feels she is watching herself from outside, numb and far away. The detachment dampens the unbearable feeling for a time, then fades as things calm. It happens specifically when she fears abandonment, and it is starting to scare her. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She probably gets overwhelmed in arguments; we could keep track of it.",
        credit: 0.6,
      },
      {
        text: "This looks like stress-related dissociation serving as an emergency affect brake in a borderline pattern: a threat of abandonment spikes intolerable affect, the unreal, numb detachment dampens it, and that relief reinforces the response so the next abandonment threat triggers it again; test whether the dissociation follows an interpersonal threat rather than coming at random, whether the numbness lifts as the threat passes, and whether it eases when the abandonment fear is named and soothed rather than left to spike.",
        credit: 1.0,
      },
      {
        text: "Consciousness is mysterious and everyone zones out sometimes, so there's nothing specific to conclude about her experience.",
        credit: 0,
      },
      {
        text: "She seems to space out during fights.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "This looks like stress-related dissociation serving as an emergency affect brake in a borderline pattern: a threat of abandonment spikes intolerable affect, the unreal, numb detachment dampens it, and that relief reinforces the response so the next abandonment threat triggers it again; test whether the dissociation follows an interpersonal threat rather than coming at random, whether the numbness lifts as the threat passes, and whether it eases when the abandonment fear is named and soothed rather than left to spike.",
    explanation:
      "Full credit reads dissociation as an affect brake tied to abandonment threat and names a does-it-follow-the-trigger test; 'everyone zones out' is the dodge the abandonment-specific, frightening pattern defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "Two coworkers both had rough breakups this month. One feels sad for a few days, leans on friends, and slowly steadies. The other swings within hours between rage, panic, and numbness, calls her ex thirty times, cuts her own arm to stop the feeling, and says she has felt this way in every breakup since adolescence. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Both coworkers are clearly struggling with the same kind of emotional disorder, since both are upset over a breakup.",
        credit: 0,
      },
      {
        text: "Only the second coworker's reaction likely fits a borderline pattern: a relationship trigger sets off fast, extreme swings of affect and impulsive acts that briefly regulate the feeling and then reinforce it, pervasive across every breakup since adolescence — whereas the first feels proportionate sadness, uses support, and recovers; test whether her swings and self-harm follow interpersonal triggers rather than passing low mood, whether each relief is brief before the affect returns, and whether the pattern repeats across relationships at real cost.",
        credit: 1.0,
      },
      {
        text: "The second coworker probably takes breakups harder than most; we could look into it.",
        credit: 0.6,
      },
      {
        text: "The second coworker seems very upset about her breakup.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "Only the second coworker's reaction likely fits a borderline pattern: a relationship trigger sets off fast, extreme swings of affect and impulsive acts that briefly regulate the feeling and then reinforce it, pervasive across every breakup since adolescence — whereas the first feels proportionate sadness, uses support, and recovers; test whether her swings and self-harm follow interpersonal triggers rather than passing low mood, whether each relief is brief before the affect returns, and whether the pattern repeats across relationships at real cost.",
    explanation:
      "Full credit distinguishes a borderline pattern from ordinary grief by trigger, intensity, pervasiveness, and cost, and names a does-it-repeat test; 'both have the same disorder' is the dodge the first coworker's proportionate recovery defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A man who calls himself 'totally fine' goes from euphoric to despairing several times a day, each shift set off by a glance, a text, or a tone of voice he reads as rejection. When the despair peaks he gambles or picks up a stranger, which lifts him briefly before the next slight drops him again. He has lost savings and relationships this way. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He seems to have a lot of ups and downs.",
        credit: 0.3,
      },
      {
        text: "This likely runs a borderline affect-instability loop driven by interpersonal cues: a perceived rejection spikes a fast, extreme mood crash, an impulsive act lifts it briefly, and that relief reinforces the act so the next slight reignites the whole swing — costing him savings and relationships; test whether the crashes follow interpersonal cues rather than arriving out of nowhere, whether the lift is brief before the next drop, and whether the swings calm when he checks the perceived slight before acting on it.",
        credit: 1.0,
      },
      {
        text: "Everybody has good days and bad days, so there's really nothing to read into his moods.",
        credit: 0,
      },
      {
        text: "He might be a moody person who acts out; we could ask him about it.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "This likely runs a borderline affect-instability loop driven by interpersonal cues: a perceived rejection spikes a fast, extreme mood crash, an impulsive act lifts it briefly, and that relief reinforces the act so the next slight reignites the whole swing — costing him savings and relationships; test whether the crashes follow interpersonal cues rather than arriving out of nowhere, whether the lift is brief before the next drop, and whether the swings calm when he checks the perceived slight before acting on it.",
    explanation:
      "Top credit reads the interpersonally-triggered mood swings and impulsive lifts as a regulation loop and names a does-it-follow-a-cue test; 'everybody has good and bad days' is the dodge the several-times-daily, costly pattern defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "Whenever her partner seems even slightly distant, a woman drinks heavily within the hour. She describes the alcohol as the only thing that 'turns down' an unbearable rising panic that he is pulling away; the calm lasts an evening, then the next sign of distance restarts it. The drinking is escalating and only ever follows these moments with him. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She seems to drink when she's upset with her partner.",
        credit: 0.3,
      },
      {
        text: "Plenty of people have a drink after a bad evening, so there's no way to say what her drinking is really about.",
        credit: 0,
      },
      {
        text: "This likely runs a borderline affect-regulation loop with alcohol as the regulator: a sign of distance spikes abandonment panic, the drinking turns the feeling down and brings relief, and that relief reinforces the act so the next sign of distance reignites it — confined to these moments with him; test whether the drinking follows a perceived pull-away rather than other stresses, whether the calm is brief before the panic returns, and whether the urge fades when she addresses the distance directly instead of drinking.",
        credit: 1.0,
      },
      {
        text: "She might be using alcohol to cope with relationship stress; we could revisit it.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "This likely runs a borderline affect-regulation loop with alcohol as the regulator: a sign of distance spikes abandonment panic, the drinking turns the feeling down and brings relief, and that relief reinforces the act so the next sign of distance reignites it — confined to these moments with him; test whether the drinking follows a perceived pull-away rather than other stresses, whether the calm is brief before the panic returns, and whether the urge fades when she addresses the distance directly instead of drinking.",
    explanation:
      "Full credit reads drinking as the affect regulator tied to abandonment panic and names a does-it-follow-the-distance test; 'plenty of people have a drink' is the dodge the trigger-specific escalation defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A man left alone for an evening is overcome by a panic that his girlfriend has abandoned him, even though she is at a planned work event. He calls her dozens of times; when she finally answers and soothes him he feels calm, until the line goes quiet and the panic surges again. He knows where she is and still cannot stop. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Couples call each other all the time; there's nothing to interpret in a few extra calls.",
        credit: 0,
      },
      {
        text: "This likely runs a borderline abandonment-panic loop: being alone spikes a terror of being left, the repeated calling pulls reassurance that briefly settles it, and that relief reinforces the calling so the next quiet moment reignites the panic — even when he knows where she is; test whether the calling follows the alone-feeling rather than any real evidence she has left, whether the calm is brief before the panic returns, and whether the terror subsides on its own when he tolerates being alone without calling.",
        credit: 1.0,
      },
      {
        text: "He probably feels anxious when he's by himself; we could keep an eye on it.",
        credit: 0.6,
      },
      {
        text: "He seems to call her a lot when he's alone.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "This likely runs a borderline abandonment-panic loop: being alone spikes a terror of being left, the repeated calling pulls reassurance that briefly settles it, and that relief reinforces the calling so the next quiet moment reignites the panic — even when he knows where she is; test whether the calling follows the alone-feeling rather than any real evidence she has left, whether the calm is brief before the panic returns, and whether the terror subsides on its own when he tolerates being alone without calling.",
    explanation:
      "Top credit reads frantic calling as regulating abandonment terror that reassurance reinforces and names a tolerate-being-alone test; 'couples call all the time' is the dodge the dozens-of-calls-when-he-knows-where-she-is pattern defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A woman tells a partner she will harm herself if he goes to a friend's party, and when he stays she becomes calm and loving. An onlooker calls her manipulative. But she later sobs in private that she was sure she could not survive the night alone with the abandonment dread, and the threat had welled up before she could think. The pattern follows every separation. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She's plainly just manipulative and attention-seeking, staging a crisis to control her partner and get her way.",
        credit: 0,
      },
      {
        text: "She seems to get very upset when he wants to go out.",
        credit: 0.3,
      },
      {
        text: "This more likely runs a borderline abandonment loop than cold manipulation: an impending separation spikes a survival-level dread, the self-harm threat erupts before thought and pulls him to stay, which regulates the affect and reinforces the move so every separation reignites it; test whether the threat follows abandonment dread rather than a cool plan, whether her relief is real and the private distress genuine, and whether the urge eases when the separation fear is named and soothed rather than acted on.",
        credit: 1.0,
      },
      {
        text: "She might struggle when he leaves; we could look into it.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "This more likely runs a borderline abandonment loop than cold manipulation: an impending separation spikes a survival-level dread, the self-harm threat erupts before thought and pulls him to stay, which regulates the affect and reinforces the move so every separation reignites it; test whether the threat follows abandonment dread rather than a cool plan, whether her relief is real and the private distress genuine, and whether the urge eases when the separation fear is named and soothed rather than acted on.",
    explanation:
      "Top credit reads the threat as abandonment-driven affect regulation, not strategy, and names a is-the-dread-and-distress-genuine test; 'she's just manipulative and attention-seeking' is the lurid overreach her private sobbing and pre-thought welling-up defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "A man idolizes his new therapist as 'the first person who ever helped me.' When she takes a planned vacation, he is flooded with a sense of betrayal, leaves a furious voicemail firing her, then frantically calls to beg her back before the next session. The cold cutoff briefly steadied him; the longing flooded back within a day. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He seems to have strong reactions to his therapist.",
        credit: 0.3,
      },
      {
        text: "This likely runs a borderline idealize-devalue loop activated by separation: the planned break spikes a betrayal-flavored abandonment dread, the furious 'firing' devalues her to discharge the affect and briefly steadies him, and that relief reinforces the flip so longing floods back and he begs her return; test whether the devaluation follows the separation rather than any real failing on her part, whether the cold calm is brief before the longing returns, and whether the swing softens when the abandonment feeling is named instead of acted on.",
        credit: 1.0,
      },
      {
        text: "Therapy stirs up complicated feelings that no one can really untangle, so there's nothing definite to conclude here.",
        credit: 0,
      },
      {
        text: "He might have a hard time when his therapist is away; we could ask him.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "This likely runs a borderline idealize-devalue loop activated by separation: the planned break spikes a betrayal-flavored abandonment dread, the furious 'firing' devalues her to discharge the affect and briefly steadies him, and that relief reinforces the flip so longing floods back and he begs her return; test whether the devaluation follows the separation rather than any real failing on her part, whether the cold calm is brief before the longing returns, and whether the swing softens when the abandonment feeling is named instead of acted on.",
    explanation:
      "Full credit reads the firing as separation-triggered devaluation that briefly regulates affect and names a does-it-track-the-break test; 'therapy stirs up feelings no one can untangle' is the dodge the planned-vacation trigger and quick reversal defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "At the smallest criticism from her boss — a note on a report — a woman is engulfed by a shame so intense she lashes out, accuses him of hating her, then later cringes and over-apologizes. The outburst discharges the unbearable shame for a moment before it returns. The same eruption follows any hint of criticism, and she has been moved off two teams. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Workplaces are stressful and people clash with bosses; there's nothing here worth reading into.",
        credit: 0,
      },
      {
        text: "She might be sensitive to criticism; we could keep an eye on it.",
        credit: 0.6,
      },
      {
        text: "This likely runs a borderline rage-regulation loop: a hint of criticism spikes unbearable shame, the outburst discharges it and briefly relieves the feeling, and that relief reinforces the eruption so the next criticism reignites it — at real cost to her standing; test whether the rage follows a perceived criticism rather than any real attack, whether the relief is momentary before the shame returns, and whether the eruption fades when she names the shame before reacting.",
        credit: 1.0,
      },
      {
        text: "She seems to get angry when she's criticized.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "This likely runs a borderline rage-regulation loop: a hint of criticism spikes unbearable shame, the outburst discharges it and briefly relieves the feeling, and that relief reinforces the eruption so the next criticism reignites it — at real cost to her standing; test whether the rage follows a perceived criticism rather than any real attack, whether the relief is momentary before the shame returns, and whether the eruption fades when she names the shame before reacting.",
    explanation:
      "Top credit reads the rage as discharging unbearable shame that relief reinforces and names a does-it-follow-criticism test; 'people clash with bosses' is the dodge the moved-off-two-teams cost defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "Whenever a friendship cools even slightly, a man reads it as proof he is 'unlovable and about to be discarded' and immediately picks an explosive fight to 'get it over with.' The fight discharges the dread and brings a grim calm, then he is consumed by loss and reaches out in panic. The same sequence has ended a string of friendships he badly wanted to keep. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Friendships drift apart for all sorts of reasons, so there's no real way to know what's happening inside him.",
        credit: 0,
      },
      {
        text: "This likely runs a borderline abandonment loop: a small cooling spikes an 'I'm about to be discarded' dread, the explosive fight discharges it and brings brief, grim calm, and that relief reinforces the move so each cooling reignites it — ending friendships he wants to keep; test whether the fights follow a perceived cooling rather than any real rupture, whether the calm is brief before loss and panic flood in, and whether the urge fades when he checks the perception and tolerates the uncertainty.",
        credit: 1.0,
      },
      {
        text: "He probably gets insecure when friends pull back; we could explore it.",
        credit: 0.6,
      },
      {
        text: "He seems to start fights when friendships change.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "This likely runs a borderline abandonment loop: a small cooling spikes an 'I'm about to be discarded' dread, the explosive fight discharges it and brings brief, grim calm, and that relief reinforces the move so each cooling reignites it — ending friendships he wants to keep; test whether the fights follow a perceived cooling rather than any real rupture, whether the calm is brief before loss and panic flood in, and whether the urge fades when he checks the perception and tolerates the uncertainty.",
    explanation:
      "Full credit reads the pre-emptive fight as discharging abandonment dread that relief reinforces and names a does-it-follow-a-perceived-cooling test; 'friendships drift apart' is the dodge the string of wanted-but-lost friendships defeats.",
  },
];

const hybrid: HomeworkItem[] = [
  {
    itemType: "hybrid",
    prompt:
      "A woman flips from adoring her boyfriend to despising him within minutes whenever he disappoints her in a small way — a forgotten errand, a distracted reply. The hatred floods in, she berates him until it subsides, then warmth returns. This only happens with people she is close to; with acquaintances she is even-tempered. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She seems moody with her boyfriend.",
        credit: 0.3,
      },
      {
        text: "The flips — confined to close relationships and set off by small let-downs — likely run a borderline idealize-devalue loop: a disappointment spikes intolerable affect, the berating discharges it and briefly relieves her, and that relief reinforces the flip so the next let-down reignites it while acquaintances leave her even-tempered; test whether the hatred follows a disappointment rather than real new information about him, whether the warmth returns once the affect drains, and whether the swing softens when she names the hurt instead of attacking.",
        credit: 1.0,
      },
      {
        text: "Everyone gets annoyed with their partner sometimes; reading a pattern into it is overthinking.",
        credit: 0,
      },
      {
        text: "She probably has strong feelings about her boyfriend; we could keep noticing it.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'this is a borderline idealize-devalue loop' lead from the rival 'she's just a generally moody, irritable person,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: watch whether the hatred is set off specifically by a disappointment from someone close and drains back to warmth once she has discharged it, while acquaintances draw no such swing — flips locked to intimacy and triggered by let-downs point to a borderline loop rather than general moodiness. My lead is refuted if she is equally irritable with everyone regardless of closeness or disappointment, which would make it an all-purpose temperament rather than an attachment-triggered loop.",
      yieldAnchors: [
        "She flips from adoring to despising within minutes",
        "A small disappointment triggers the hatred",
        "It happens only with people she is close to",
      ],
      riskAnchors: [
        "The hatred follows a disappointment, not real new information",
        "Warmth returns once the affect drains",
        "The swing softens when she names the hurt instead of attacking",
      ],
      defeatedBy: [
        "She is equally irritable with everyone regardless of closeness",
        "The flips bear no relation to any disappointment",
      ],
    },
    correctAnswer:
      "The flips — confined to close relationships and set off by small let-downs — likely run a borderline idealize-devalue loop: a disappointment spikes intolerable affect, the berating discharges it and briefly relieves her, and that relief reinforces the flip so the next let-down reignites it while acquaintances leave her even-tempered; test whether the hatred follows a disappointment rather than real new information about him, whether the warmth returns once the affect drains, and whether the swing softens when she names the hurt instead of attacking.",
    explanation:
      "Full credit reads an intimacy-specific idealize-devalue loop and is paired with a is-it-locked-to-closeness test that names its refutation; 'everyone gets annoyed' is the dodge the close-only, disappointment-driven pattern defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A man is steady and engaged at work, but at home, the moment his wife seems preoccupied, a panic that she is withdrawing love spikes and he picks a fight that ends in him storming out. The storming-out discharges the dread; he returns hours later flooded with remorse. The eruptions are confined to home and to moments he reads as her pulling away. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Marriages have rough patches, so it's a stretch to call any of this a pattern worth reading.",
        credit: 0,
      },
      {
        text: "He probably gets reactive at home sometimes; we could track it.",
        credit: 0.6,
      },
      {
        text: "The home eruptions — triggered by a perceived withdrawal of love, not a real one, and absent from his steady work self — likely run a borderline abandonment loop: the perceived pull-away spikes panic, the fight-and-storm-out discharges it and brings brief relief, and that relief reinforces the move so the next preoccupied moment reignites it; test whether the fights follow a perceived withdrawal rather than real conflict, whether the relief is brief before remorse floods in, and whether the urge eases when he checks the perception before reacting.",
        credit: 1.0,
      },
      {
        text: "He seems to argue a lot at home.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'home eruptions are a borderline abandonment loop' lead from the rival 'he's simply a hot-tempered guy who argues with his wife,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: check whether the fights are set off specifically by his reading her as withdrawing love rather than by any real dispute, and whether the same man is composed at work — eruptions keyed to perceived pull-away and confined to home point to an abandonment loop rather than a hot temper. My lead is refuted if he flares up just as readily over unrelated frustrations at work and home and his fights track real disagreements rather than perceived withdrawal.",
      yieldAnchors: [
        "He is steady and engaged at work",
        "A perceived withdrawal of love at home triggers the fight",
        "He returns hours later flooded with remorse",
      ],
      riskAnchors: [
        "The fights follow a perceived withdrawal, not real conflict",
        "The relief is brief before remorse floods in",
        "The urge eases when he checks the perception first",
      ],
      defeatedBy: [
        "He flares up just as readily over unrelated frustrations everywhere",
        "His fights track real disagreements, not perceived withdrawal",
      ],
    },
    correctAnswer:
      "The home eruptions — triggered by a perceived withdrawal of love, not a real one, and absent from his steady work self — likely run a borderline abandonment loop: the perceived pull-away spikes panic, the fight-and-storm-out discharges it and brings brief relief, and that relief reinforces the move so the next preoccupied moment reignites it; test whether the fights follow a perceived withdrawal rather than real conflict, whether the relief is brief before remorse floods in, and whether the urge eases when he checks the perception before reacting.",
    explanation:
      "Top credit reads a trigger-specific abandonment loop that spares his work self and is paired with a perceived-vs-real-withdrawal test that names its refutation; 'marriages have rough patches' is the dodge the home-only, withdrawal-triggered eruptions defeat.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A young woman becomes convinced, after a friend's slightly short reply, that the friend secretly hates her. The thought spikes hard, she sends a string of self-deprecating messages fishing for reassurance, feels relief when the friend insists all is well, then doubts it and fishes again. It happens only when she reads coldness into a message, never otherwise. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Texting tone is easy to misread, so worrying about a short reply is just ordinary sensitivity.",
        credit: 0,
      },
      {
        text: "The reassurance-fishing — set off by reading coldness into a message, not by anything said — likely runs a borderline abandonment loop: the perceived rejection spikes dread, the reassurance briefly relieves it, and that relief reinforces the doubt so she must fish again; test whether the fishing follows a perceived coldness rather than any real sign of dislike, whether the relief is brief before the doubt returns, and whether the dread settles on its own when she tolerates the ambiguous message without fishing.",
        credit: 1.0,
      },
      {
        text: "She seems to seek a lot of reassurance from her friend.",
        credit: 0.3,
      },
      {
        text: "She's probably a bit insecure with friends; we could look into it.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'this is a borderline abandonment reassurance loop' lead from the rival 'she's just a sensitive person who misreads texts,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: note whether the fishing is driven by a perceived rejection that the reassurance only briefly quiets before doubt re-fires, recurring whenever she reads coldness into a message — a dread that reassurance can't settle points to a loop rather than passing sensitivity. My lead is refuted if a single clarification reassures her for good and she only worries when there is some real sign the friend is upset.",
      yieldAnchors: [
        "A slightly short reply convinces her the friend hates her",
        "Reassurance relieves the dread before she doubts and fishes again",
        "It happens only when she reads coldness into a message",
      ],
      riskAnchors: [
        "The fishing follows a perceived coldness, not a real sign of dislike",
        "The relief is brief before the doubt returns",
        "The dread settles on its own when she tolerates the message",
      ],
      defeatedBy: [
        "A single clarification reassures her for good",
        "She worries only when there is a real sign the friend is upset",
      ],
    },
    correctAnswer:
      "The reassurance-fishing — set off by reading coldness into a message, not by anything said — likely runs a borderline abandonment loop: the perceived rejection spikes dread, the reassurance briefly relieves it, and that relief reinforces the doubt so she must fish again; test whether the fishing follows a perceived coldness rather than any real sign of dislike, whether the relief is brief before the doubt returns, and whether the dread settles on its own when she tolerates the ambiguous message without fishing.",
    explanation:
      "Full credit reads a perception-triggered reassurance loop and is paired with a does-reassurance-settle-it test that names its refutation; 'ordinary sensitivity' is the dodge the never-settling, coldness-only pattern defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A man describes long stretches of a hollow, deadened emptiness, broken only when he starts a charged new romance. The intensity fills the void for a while; when the spark fades he feels empty again and chases the next one, often overlapping relationships. His partners feel discarded, and the pattern has cost him people he cared for. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Lots of people love the excitement of new romance; there's nothing here to interpret.",
        credit: 0,
      },
      {
        text: "He might get bored in relationships; we could explore it.",
        credit: 0.6,
      },
      {
        text: "The serial chasing likely runs a borderline emptiness-regulation loop, not mere excitement-seeking: chronic emptiness drives him to a charged romance that briefly fills the void, and the fading spark returns the emptiness so he chases the next — at the cost of the people he discards; test whether the new romance follows the empty feeling rather than genuine connection, whether the filling is brief before the void returns, and whether the emptiness eases without a new spark when he stays with it or deepens an existing bond.",
        credit: 1.0,
      },
      {
        text: "He seems to move from relationship to relationship.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'this serial chasing is a borderline emptiness-regulation loop' lead from the rival 'he simply enjoys new romance and gets bored,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: watch whether each new romance is launched to escape a deadened emptiness rather than from real attraction, and whether the void returns the moment the intensity fades — chasing driven by emptiness rather than genuine interest points to a regulation loop. My lead is refuted if he feels content and full between relationships and starts new ones out of real connection rather than to fill a hollowness.",
      yieldAnchors: [
        "He feels a hollow emptiness broken only by new romance",
        "The void returns when the spark fades and he chases the next",
        "Partners feel discarded and he has lost people he cared for",
      ],
      riskAnchors: [
        "The new romance follows the emptiness, not genuine connection",
        "The filling is brief before the void returns",
        "The emptiness eases without a new spark when he stays with it",
      ],
      defeatedBy: [
        "He feels content and full between relationships",
        "He starts new relationships out of real connection, not emptiness",
      ],
    },
    correctAnswer:
      "The serial chasing likely runs a borderline emptiness-regulation loop, not mere excitement-seeking: chronic emptiness drives him to a charged romance that briefly fills the void, and the fading spark returns the emptiness so he chases the next — at the cost of the people he discards; test whether the new romance follows the empty feeling rather than genuine connection, whether the filling is brief before the void returns, and whether the emptiness eases without a new spark when he stays with it or deepens an existing bond.",
    explanation:
      "Top credit reads serial romance as filling chronic emptiness that the brief intensity reinforces and is paired with a does-it-follow-the-emptiness test that names its refutation; 'loves the excitement' is the dodge the discarded partners and returning void defeat.",
  },
  {
    itemType: "hybrid",
    prompt:
      "Every time her best friend spends time with someone else, a woman is seized by a conviction she is being replaced. The feeling spikes dread, she texts escalating ultimatums until the friend drops the plan to reassure her, and she calms — then the next outing restarts it. She knows the friend has not abandoned her and still cannot stop. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She seems to get jealous of her friend's other plans.",
        credit: 0.3,
      },
      {
        text: "The ultimatums likely run a borderline abandonment loop: a sign her friend has other ties spikes a 'being replaced' dread, the ultimatum pulls reassurance that briefly settles it, and that relief reinforces the move so the next outing reignites it — even though she knows she isn't being abandoned; test whether the ultimatums follow a perceived replacement rather than any real desertion, whether the calm is brief before the dread returns, and whether the dread fades on its own when she lets the friend make plans without intervening.",
        credit: 1.0,
      },
      {
        text: "Friendships get complicated and jealousy is universal, so there's no real way to say what's driving her.",
        credit: 0,
      },
      {
        text: "She might feel possessive of her friend; we could ask her about it.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'this is a borderline abandonment loop' lead from the rival 'she's just a possessive, jealous friend,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: see whether the ultimatums are driven by a dread of being replaced that only the friend's reassurance briefly relieves, firing even when she knows she is not being abandoned — a dread reassurance can't settle points to an abandonment loop rather than ordinary possessiveness. My lead is refuted if she is comfortable once she trusts the friendship is secure and only objects when the friend is genuinely neglecting her.",
      yieldAnchors: [
        "Her friend's other plans convince her she is being replaced",
        "Reassurance from dropped plans briefly calms the dread",
        "She knows she isn't abandoned yet cannot stop",
      ],
      riskAnchors: [
        "The ultimatums follow a perceived replacement, not real desertion",
        "The calm is brief before the dread returns",
        "The dread fades on its own when she lets the friend make plans",
      ],
      defeatedBy: [
        "She is comfortable once she trusts the friendship is secure",
        "She objects only when the friend is genuinely neglecting her",
      ],
    },
    correctAnswer:
      "The ultimatums likely run a borderline abandonment loop: a sign her friend has other ties spikes a 'being replaced' dread, the ultimatum pulls reassurance that briefly settles it, and that relief reinforces the move so the next outing reignites it — even though she knows she isn't being abandoned; test whether the ultimatums follow a perceived replacement rather than any real desertion, whether the calm is brief before the dread returns, and whether the dread fades on its own when she lets the friend make plans without intervening.",
    explanation:
      "Full credit reads the ultimatums as regulating a being-replaced dread that reassurance reinforces and is paired with a does-knowing-she's-safe-settle-it test that names its refutation; 'jealousy is universal' is the dodge the can't-stop-despite-knowing pattern defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A man's mood is stable until a date cancels, at which point a black wave of worthlessness crashes in and he books a risky hookup that lifts him for the night. By morning the worthlessness is back, attached to the new encounter, and he lines up another. The crashes only follow a rejection, never arrive on a good day, and the hookups are escalating. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Plenty of single people date casually, so there's nothing underneath his choices to read into.",
        credit: 0,
      },
      {
        text: "The hookups — set off by a rejection-triggered crash, not by a steady appetite — likely run a borderline affect-regulation loop: the cancellation spikes a worthlessness crash, the risky encounter lifts it briefly, and that relief reinforces the act so the worthlessness returns and he lines up another; test whether the hookups follow a rejection rather than ordinary desire, whether the lift is brief before the worthlessness returns, and whether the crash eases without an encounter when he stays with the feeling or reaches out to someone he trusts.",
        credit: 1.0,
      },
      {
        text: "He probably copes with rejection by dating; we could keep an eye on it.",
        credit: 0.6,
      },
      {
        text: "He seems to have a lot of casual encounters.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'this is a rejection-driven borderline affect-regulation loop' lead from the rival 'he's just an active dater enjoying single life,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: check whether each hookup follows a rejection-triggered crash of worthlessness rather than ordinary desire, and whether the lift collapses back into worthlessness by morning — encounters keyed to rejection and chased to escape a crash point to a regulation loop. My lead is refuted if his encounters happen on good days out of genuine desire and leave him content rather than crashing back into worthlessness.",
      yieldAnchors: [
        "A cancellation triggers a worthlessness crash",
        "The risky hookup lifts him only for the night",
        "The crashes follow a rejection, never a good day",
      ],
      riskAnchors: [
        "The hookups follow a rejection, not ordinary desire",
        "The lift is brief before the worthlessness returns",
        "The crash eases without an encounter when he stays with the feeling",
      ],
      defeatedBy: [
        "His encounters happen on good days out of genuine desire",
        "The encounters leave him content rather than crashing back",
      ],
    },
    correctAnswer:
      "The hookups — set off by a rejection-triggered crash, not by a steady appetite — likely run a borderline affect-regulation loop: the cancellation spikes a worthlessness crash, the risky encounter lifts it briefly, and that relief reinforces the act so the worthlessness returns and he lines up another; test whether the hookups follow a rejection rather than ordinary desire, whether the lift is brief before the worthlessness returns, and whether the crash eases without an encounter when he stays with the feeling or reaches out to someone he trusts.",
    explanation:
      "Top credit reads the hookups as regulating a rejection-triggered worthlessness crash and is paired with a does-it-follow-rejection test that names its refutation; 'plenty of people date casually' is the dodge the rejection-only, escalating pattern defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A woman tells her therapist that her new partner is 'perfect, the love of her life' three dates in, then arrives the next week describing him as 'a cruel narcissist' after he forgot to call. The therapist hears the same intensity in both accounts, and the partner's actual behavior seems unremarkable. The flip followed the missed call. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She's clearly lying about one of the two versions, since no one can sincerely hold both.",
        credit: 0,
      },
      {
        text: "She seems to change her mind about her partner quickly.",
        credit: 0.3,
      },
      {
        text: "The flip — following a small let-down rather than new information, with the same sincere intensity both times — likely reflects a borderline idealize-devalue swing: the forgotten call spikes intolerable affect, recasting him as 'cruel' discharges it and briefly steadies her, and that relief reinforces the flip so the next disappointment reignites it; test whether the devaluation tracks a let-down rather than real cruelty, whether both accounts feel equally sincere in the moment, and whether the view re-integrates when the affect drains.",
        credit: 1.0,
      },
      {
        text: "She might have mixed feelings about her partner; we could revisit it.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'this is a borderline idealize-devalue swing' lead from the rival 'she's deceptively exaggerating to manipulate the therapist,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: notice whether the flip to 'cruel' followed a minor let-down rather than any real cruelty and whether both the adoring and the damning accounts carry the same genuine intensity in the moment — a sincere flip keyed to a disappointment points to a split image, not a lie. My lead is refuted if the partner actually behaved cruelly between sessions or if she privately admits she is exaggerating to get a reaction.",
      yieldAnchors: [
        "'Perfect, love of her life' becomes 'a cruel narcissist'",
        "The flip followed a missed call, not real cruelty",
        "Both accounts carry the same sincere intensity",
      ],
      riskAnchors: [
        "The devaluation tracks a let-down, not real cruelty",
        "Both accounts feel equally sincere in the moment",
        "The view re-integrates when the affect drains",
      ],
      defeatedBy: [
        "The partner actually behaved cruelly between sessions",
        "She privately admits she is exaggerating to get a reaction",
      ],
    },
    correctAnswer:
      "The flip — following a small let-down rather than new information, with the same sincere intensity both times — likely reflects a borderline idealize-devalue swing: the forgotten call spikes intolerable affect, recasting him as 'cruel' discharges it and briefly steadies her, and that relief reinforces the flip so the next disappointment reignites it; test whether the devaluation tracks a let-down rather than real cruelty, whether both accounts feel equally sincere in the moment, and whether the view re-integrates when the affect drains.",
    explanation:
      "Full credit reads a sincere idealize-devalue flip keyed to a let-down and is paired with a did-it-follow-a-disappointment test that names its refutation; 'she's lying about one version' is the overreach the equal, genuine intensity of both accounts defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A man is composed around colleagues, but the instant his girlfriend mentions an ex, a jealous rage spikes and he smashes something, which discharges the feeling and leaves him spent and calm. Remorse follows within the hour. The rage erupts only at perceived threats to the relationship, never at work frustrations, and the breakage is escalating. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He probably has a bit of a temper about his relationship; we could look into it.",
        credit: 0.6,
      },
      {
        text: "The rage — specific to perceived relationship threats while he's composed elsewhere — likely runs a borderline affect-discharge loop: a perceived threat to the bond spikes unbearable jealousy, smashing something discharges it and brings spent calm, and that relief reinforces the act so the next threat reignites it; test whether the rage follows a perceived threat to the relationship rather than general frustration, whether the calm is brief before remorse arrives, and whether the urge fades when he names the jealousy before acting on it.",
        credit: 1.0,
      },
      {
        text: "Lots of people get jealous and break a thing now and then, so reading a pattern into it is overthinking.",
        credit: 0,
      },
      {
        text: "He seems to get angry about his girlfriend's past.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'this rage is a borderline affect-discharge loop tied to relationship threat' lead from the rival 'he's just a hot-tempered, jealous guy,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: check whether the rage erupts specifically at perceived threats to the relationship and not at the work frustrations he handles calmly — anger keyed to attachment threat while he stays composed elsewhere points to an affect-discharge loop rather than a general temper. My lead is refuted if he flares up just as easily over unrelated frustrations everywhere, which would make it an all-purpose temper rather than a relationship-triggered loop.",
      yieldAnchors: [
        "He is composed around colleagues",
        "A mention of an ex triggers a jealous rage and breakage",
        "Remorse follows within the hour",
      ],
      riskAnchors: [
        "The rage follows a perceived relationship threat, not general frustration",
        "The calm is brief before remorse arrives",
        "The urge fades when he names the jealousy first",
      ],
      defeatedBy: [
        "He flares up just as easily over unrelated frustrations everywhere",
        "His anger bears no relation to perceived threats to the bond",
      ],
    },
    correctAnswer:
      "The rage — specific to perceived relationship threats while he's composed elsewhere — likely runs a borderline affect-discharge loop: a perceived threat to the bond spikes unbearable jealousy, smashing something discharges it and brings spent calm, and that relief reinforces the act so the next threat reignites it; test whether the rage follows a perceived threat to the relationship rather than general frustration, whether the calm is brief before remorse arrives, and whether the urge fades when he names the jealousy before acting on it.",
    explanation:
      "Full credit reads a threat-specific affect-discharge loop that spares his work self and is paired with a is-it-locked-to-relationship-threats test that names its refutation; 'lots of people get jealous' is the dodge the threat-only, escalating breakage defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A teenager scratches her skin raw whenever a friend leaves her on read. She describes a numb fog of rejection that the scratching cuts through, replacing it with a sharp, clarifying relief; the fog returns by the next slight and she scratches again. She insists she has no wish to die and hides the marks under sleeves. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Any self-injury is a clear signal she is suicidal, so the only responsible read is that she wants to die.",
        credit: 0,
      },
      {
        text: "The scratching — set off by perceived rejection and used to cut through a numb fog, with no wish to die — likely runs a borderline self-harm-as-regulation loop: a slight spikes a numb rejection-fog, scratching discharges it into sharp relief, and that relief reinforces the act so the next slight reignites it; test whether the scratching follows an interpersonal slight rather than a death wish, whether the relief is sharp but brief before the fog returns, and whether the urge fades when she rides out the rejection feeling or soothes it another way.",
        credit: 1.0,
      },
      {
        text: "She seems to hurt herself when friends ignore her.",
        credit: 0.3,
      },
      {
        text: "She might be having a hard time with her friends; we could check in.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'this is self-harm as affect regulation' lead from the rival 'this is a suicide attempt,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: ask whether the scratching is aimed at cutting through an unbearable rejection-fog and bringing relief rather than at ending her life, and whether it reliably follows an interpersonal slight — injury used to regulate affect with an explicit wish to live points to regulation, not a suicide attempt. My lead is refuted if she describes the acts as attempts to die, escalates toward lethal means, or the injuries are not tied to relief from an emotional state.",
      yieldAnchors: [
        "Being left on read triggers a numb rejection-fog",
        "Scratching replaces the fog with sharp, brief relief",
        "She insists she has no wish to die and hides the marks",
      ],
      riskAnchors: [
        "The scratching follows an interpersonal slight, not a death wish",
        "The relief is sharp but brief before the fog returns",
        "The urge fades when she rides out the rejection feeling",
      ],
      defeatedBy: [
        "She describes the acts as attempts to die",
        "The injuries escalate toward lethal means and aren't tied to relief",
      ],
    },
    correctAnswer:
      "The scratching — set off by perceived rejection and used to cut through a numb fog, with no wish to die — likely runs a borderline self-harm-as-regulation loop: a slight spikes a numb rejection-fog, scratching discharges it into sharp relief, and that relief reinforces the act so the next slight reignites it; test whether the scratching follows an interpersonal slight rather than a death wish, whether the relief is sharp but brief before the fog returns, and whether the urge fades when she rides out the rejection feeling or soothes it another way.",
    explanation:
      "Full credit reads self-harm as affect regulation tied to rejection and is paired with a regulation-vs-death-wish test that names its refutation; 'she clearly wants to die' is the overreach her stated wish to live and relief-seeking defeat.",
  },
];

const written: HomeworkItem[] = [
  {
    itemType: "written",
    prompt:
      "A woman cannot tolerate her partner leaving the house without her. The moment he reaches for his keys, a terror that he will not come back spikes; she blocks the door, threatens to harm herself, and only calms when he stays. The relief lasts the evening, then his next plan to go out restarts it. She is losing friends, he is exhausted, and she knows the fear is out of proportion. In one paragraph, propose the strongest conclusion about what this behavior is doing and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that the blocking and self-harm threats are a borderline abandonment-regulation loop, not mere neediness or manipulation: an impending separation spikes a survival-level terror of being abandoned, the dramatic move to keep him home pulls him to stay and discharges the terror, and that relief reinforces the behavior so it returns stronger and the next departure reignites it — a loop now costing her friends and exhausting him. This is a strong claim because it predicts checkable consequences: the terror should follow the cue of separation rather than any real sign he is leaving for good; each round of relief should last only as long as he stays before the dread returns; and the panic should actually subside on its own if she tolerates a brief separation and lets the feeling crest and fall. I would test it by tracking whether the eruptions are triggered by his leaving rather than by real evidence of desertion, by timing how long her calm lasts after he stays, and by having her endure one short, planned separation to see whether the terror falls without the blocking.",
      yieldAnchors: [
        "A terror of abandonment spikes when he reaches for his keys",
        "Blocking the door and threats keep him home and calm her",
        "She is losing friends and knows the fear is out of proportion",
      ],
      riskAnchors: [
        "The terror follows the cue of separation, not real desertion",
        "Her calm lasts only as long as he stays",
        "The panic falls on its own if she tolerates a brief separation",
      ],
      defeatedBy: [
        "Her distress tracks real evidence he is leaving for good",
        "A brief separation brings lasting calm rather than rising terror",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that the blocking and self-harm threats are a borderline abandonment-regulation loop, not mere neediness or manipulation: an impending separation spikes a survival-level terror of being abandoned, the dramatic move to keep him home pulls him to stay and discharges the terror, and that relief reinforces the behavior so it returns stronger and the next departure reignites it — a loop now costing her friends and exhausting him. This is a strong claim because it predicts checkable consequences: the terror should follow the cue of separation rather than any real sign he is leaving for good; each round of relief should last only as long as he stays before the dread returns; and the panic should actually subside on its own if she tolerates a brief separation and lets the feeling crest and fall. I would test it by tracking whether the eruptions are triggered by his leaving rather than by real evidence of desertion, by timing how long her calm lasts after he stays, and by having her endure one short, planned separation to see whether the terror falls without the blocking.",
    explanation:
      "Under the inverted standard, 'she's just clingy, nothing to interpret' earns near-zero; top credit reads the separation-terror-act-relief-reinforce loop that wards off abandonment and names a tolerate-a-separation test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A young man's sense of who his girlfriend is flips constantly: she is his savior one day and his tormentor the next, each shift triggered by whether she met or missed some emotional need. The 'tormentor' view erupts after a disappointment, brings a cold rush of righteous anger, then collapses back into adoration once she reassures him. His friends are baffled, and the relationship lurches from crisis to crisis. In one paragraph, propose the strongest conclusion about what these flips are doing and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that the flips are a borderline idealize-devalue swing that regulates unbearable affect, not a string of fair reassessments: a disappointment spikes intolerable hurt, recasting her as a 'tormentor' discharges it through a cold rush of righteous anger, and that brief relief reinforces the flip so it collapses back to adoration once she reassures him and re-ignites at the next let-down — keeping the relationship in perpetual crisis. This is a strong claim because it predicts checkable consequences: the devaluation should track a disappointment rather than real new information about her character; the cold anger should be short-lived and give way to adoration once the affect drains; and the integrated, both-good-and-bad view should hold if he names the hurt and tolerates it instead of acting on it. I would test it by checking whether each flip follows a let-down rather than genuine evidence, by watching whether the anger collapses back into idealization after reassurance, and by seeing whether naming the disappointment keeps him from splitting her into all-good or all-bad.",
      yieldAnchors: [
        "She is 'savior' one day and 'tormentor' the next",
        "The tormentor view erupts after a disappointment",
        "It collapses back into adoration once she reassures him",
      ],
      riskAnchors: [
        "The devaluation tracks a disappointment, not real new information",
        "The cold anger is short-lived before adoration returns",
        "An integrated view holds when he names and tolerates the hurt",
      ],
      defeatedBy: [
        "Each reassessment follows genuine new evidence about her character",
        "The shifted view persists rather than collapsing back after reassurance",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that the flips are a borderline idealize-devalue swing that regulates unbearable affect, not a string of fair reassessments: a disappointment spikes intolerable hurt, recasting her as a 'tormentor' discharges it through a cold rush of righteous anger, and that brief relief reinforces the flip so it collapses back to adoration once she reassures him and re-ignites at the next let-down — keeping the relationship in perpetual crisis. This is a strong claim because it predicts checkable consequences: the devaluation should track a disappointment rather than real new information about her character; the cold anger should be short-lived and give way to adoration once the affect drains; and the integrated, both-good-and-bad view should hold if he names the hurt and tolerates it instead of acting on it. I would test it by checking whether each flip follows a let-down rather than genuine evidence, by watching whether the anger collapses back into idealization after reassurance, and by seeing whether naming the disappointment keeps him from splitting her into all-good or all-bad.",
    explanation:
      "The cautious 'people just change their minds, nothing underneath' earns near-zero; top credit reads the idealize-devalue swing as affect regulation keyed to disappointment and names a does-it-follow-a-let-down test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A woman describes herself as 'fine' but reports that her emotions swing from elation to despair within a single afternoon, almost always after some exchange with another person — a warm look lifts her sky-high, a curt reply plunges her into self-loathing. At the bottom she binges and purges, which briefly steadies her before the next interaction swings her again. The pattern is lifelong and pervasive across every relationship. In one paragraph, propose the strongest conclusion about what is happening and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that this is borderline affective instability driven by interpersonal cues, with the bingeing and purging serving as an affect regulator, not ordinary moodiness: small relational signals spike fast, extreme swings between elation and self-loathing, the binge-purge discharges the unbearable low and briefly steadies her, and that relief reinforces the act so the next interaction swings her again — a lifelong pattern pervasive across relationships. This is a strong claim because it predicts checkable consequences: the swings should follow interpersonal cues rather than arriving out of nowhere; each steadying should be brief before the next cue swings her; and the crashes should soften if she checks the perceived signal before reacting and rides the feeling out without the binge-purge. I would test it by tracking whether each swing follows a relational exchange rather than an internal or random shift, by timing how long the post-purge steadiness lasts, and by having her pause to reappraise a curt reply to see whether the plunge and the urge ease without acting.",
      yieldAnchors: [
        "Emotions swing from elation to despair within an afternoon",
        "The swings follow exchanges with other people",
        "Bingeing and purging briefly steadies her at the bottom",
      ],
      riskAnchors: [
        "The swings follow interpersonal cues, not random shifts",
        "Each steadying is brief before the next cue swings her",
        "The crashes soften when she reappraises the cue before reacting",
      ],
      defeatedBy: [
        "The swings arrive out of nowhere, unlinked to any interaction",
        "Reappraising a cue makes no difference to the plunge",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that this is borderline affective instability driven by interpersonal cues, with the bingeing and purging serving as an affect regulator, not ordinary moodiness: small relational signals spike fast, extreme swings between elation and self-loathing, the binge-purge discharges the unbearable low and briefly steadies her, and that relief reinforces the act so the next interaction swings her again — a lifelong pattern pervasive across relationships. This is a strong claim because it predicts checkable consequences: the swings should follow interpersonal cues rather than arriving out of nowhere; each steadying should be brief before the next cue swings her; and the crashes should soften if she checks the perceived signal before reacting and rides the feeling out without the binge-purge. I would test it by tracking whether each swing follows a relational exchange rather than an internal or random shift, by timing how long the post-purge steadiness lasts, and by having her pause to reappraise a curt reply to see whether the plunge and the urge ease without acting.",
    explanation:
      "The dodge 'everyone has mood swings, nothing to read' earns near-zero; top credit reads interpersonally-cued affective instability with binge-purge as the regulator and names a does-it-follow-a-cue test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A man stages dramatic crises — sudden threats to quit his job, to leave the city, to end his life — whenever he senses a friend drifting. A bystander says he is 'just manipulative and loves the attention.' But the man describes, in private and with evident shame, an annihilating panic that he is about to be abandoned, a panic that erupts into the threat before he can think, and a hollow regret afterward. The crises follow only the sense of someone pulling away. In one paragraph, propose the strongest conclusion about what the crises are doing and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that the crises are a borderline abandonment-regulation loop rather than cold manipulation: a sense that someone is drifting spikes an annihilating abandonment panic, the dramatic threat erupts before thought and pulls the person back, which discharges the panic and briefly steadies him, and that relief reinforces the move so the next drift reignites it — leaving him ashamed and regretful afterward. This is a strong claim because it predicts checkable consequences: the crises should follow a perceived pull-away rather than a cool calculation of gain; the threats should erupt before deliberation and be followed by genuine shame and regret rather than satisfaction; and the urge should ease if the abandonment fear is named and soothed rather than acted out. I would test it by checking whether each crisis follows a perceived drift rather than a strategic opportunity, by noting whether genuine distress and regret accompany it rather than cool control, and by seeing whether naming the abandonment dread defuses the threat before it erupts.",
      yieldAnchors: [
        "He stages crises whenever he senses a friend drifting",
        "He describes an annihilating abandonment panic with evident shame",
        "The threat erupts before he can think, with hollow regret after",
      ],
      riskAnchors: [
        "The crises follow a perceived pull-away, not a cool calculation",
        "Genuine shame and regret follow rather than satisfaction",
        "The urge eases when the abandonment fear is named and soothed",
      ],
      defeatedBy: [
        "The crises are coolly timed to strategic opportunities for gain",
        "He shows satisfaction and control rather than panic and regret",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that the crises are a borderline abandonment-regulation loop rather than cold manipulation: a sense that someone is drifting spikes an annihilating abandonment panic, the dramatic threat erupts before thought and pulls the person back, which discharges the panic and briefly steadies him, and that relief reinforces the move so the next drift reignites it — leaving him ashamed and regretful afterward. This is a strong claim because it predicts checkable consequences: the crises should follow a perceived pull-away rather than a cool calculation of gain; the threats should erupt before deliberation and be followed by genuine shame and regret rather than satisfaction; and the urge should ease if the abandonment fear is named and soothed rather than acted out. I would test it by checking whether each crisis follows a perceived drift rather than a strategic opportunity, by noting whether genuine distress and regret accompany it rather than cool control, and by seeing whether naming the abandonment dread defuses the threat before it erupts.",
    explanation:
      "The lurid 'he's just manipulative and loves attention' is the overreach his pre-thought panic and private shame defeat; top credit reads the crises as abandonment-driven affect regulation and names a is-the-panic-and-regret-genuine test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "Every time intimacy deepens with a new partner, a woman becomes flooded with a dread that she will inevitably be left, and she ends the relationship first — coldly, decisively, with a sense of grim control that quiets the dread. Within days the loss crashes over her and she is consumed by loneliness, then she begins again with someone new. She says, painfully, that she wants a lasting bond more than anything. In one paragraph, propose the strongest conclusion about what the pre-emptive breakups are doing and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that the pre-emptive breakups are a borderline 'reject first' loop that wards off abandonment, not a genuine lack of desire for closeness: as intimacy deepens the dread of being left spikes, ending it herself converts helpless terror into grim control and discharges the dread, and that relief reinforces the move so she repeats it despite longing to stay — only for the loss to crash back and the cycle to begin anew. This is a strong claim because it predicts checkable consequences: the breakups should follow a surge of closeness rather than any real problem in the relationship; the controlled calm should be brief before loneliness and loss flood in; and the urge should ease if she names the abandonment dread and tolerates the rising closeness instead of cutting it off. I would test it by checking whether each breakup follows deepening intimacy rather than a genuine incompatibility, by timing how long the grim calm lasts before the loss hits, and by having her stay with the closeness once while naming the fear to see whether the urge to flee subsides.",
      yieldAnchors: [
        "She ends relationships first as intimacy deepens",
        "The cold breakup brings grim control that quiets the dread",
        "Loss crashes back within days and she wants a lasting bond",
      ],
      riskAnchors: [
        "The breakups follow a surge of closeness, not a real problem",
        "The controlled calm is brief before loneliness floods in",
        "The urge eases when she names the dread and tolerates closeness",
      ],
      defeatedBy: [
        "Her breakups track genuine incompatibilities she can name",
        "Staying with the closeness brings lasting calm, not rising dread",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that the pre-emptive breakups are a borderline 'reject first' loop that wards off abandonment, not a genuine lack of desire for closeness: as intimacy deepens the dread of being left spikes, ending it herself converts helpless terror into grim control and discharges the dread, and that relief reinforces the move so she repeats it despite longing to stay — only for the loss to crash back and the cycle to begin anew. This is a strong claim because it predicts checkable consequences: the breakups should follow a surge of closeness rather than any real problem in the relationship; the controlled calm should be brief before loneliness and loss flood in; and the urge should ease if she names the abandonment dread and tolerates the rising closeness instead of cutting it off. I would test it by checking whether each breakup follows deepening intimacy rather than a genuine incompatibility, by timing how long the grim calm lasts before the loss hits, and by having her stay with the closeness once while naming the fear to see whether the urge to flee subsides.",
    explanation:
      "The cautious 'maybe she's just not built for relationships' earns near-zero; top credit reads the pre-emptive breakup as warding off abandonment, reinforced by relief, and names a does-it-follow-closeness test that could refute it.",
  },
];

export const section: SectionContent = {
  slug: "understanding-bpd-emotion-identity-relationships",
  title: "Understanding BPD: Emotion, Identity, and Unstable Relationships",
  weekNumber: 1,
  blurb:
    "Borderline personality disorder runs as a self-reinforcing loop: an interpersonal trigger spikes overwhelming affect, an impulsive act brings brief relief, and that relief quietly teaches the pattern to come back stronger. This section is about reading that cycle from the evidence — and telling a genuine borderline pattern apart from ordinary moodiness by its interpersonal triggers, its short-lived relief, its pervasiveness, and its cost.",
  lectureTitle:
    "1.1 Understanding BPD: emotion, identity, and unstable relationships",
  body: `# Understanding BPD: Emotion, Identity, and Unstable Relationships

Borderline personality disorder is easiest to understand not as a list of dramatic behaviors but as a loop that feeds itself. Something happens between the person and someone they are attached to — a delay, a distant tone, a sense of being left — an unbearable feeling rises fast and hard, the person does something to make the feeling drop, the feeling does drop for a moment, and that moment of relief is exactly what teaches the loop to run again. Once you can see the cycle, the behaviors that looked baffling start to make sense: the person isn't choosing the storm freely, they're caught in a circuit where each turn deepens the groove. The unifying theme is instability — in emotion, in the sense of self, and above all in close relationships.

## The interpersonal trigger

It usually starts with something between the person and someone they are close to — a partner who is slow to reply, a friend who makes other plans, a warm tone that turns cool, any hint that they might be rejected, criticized, or left. Everyone feels a pang at these moments; the difference in BPD is not that the events are stranger but that they land like a catastrophe. The trigger is almost always interpersonal, and almost always read as abandonment, rejection, or worthlessness — even when the evidence for it is thin or absent.

## The surge of affect

The trigger lands and the body answers with a wave of emotion that rises faster, climbs higher, and is far harder to bear than the situation seems to warrant — terror of being abandoned, a black worthlessness, a scalding shame, an annihilating rage, or a numb, hollow emptiness. This is the fuel of the whole cycle. The feeling is genuinely unbearable and it carries a false promise — that the only way to survive it is to do something right now to make it stop.

## The impulsive act

To quiet the surge, the person does something: self-harm, a furious outburst, frantic clinging and reassurance-seeking, an abrupt cutoff, reckless spending, substance use, risky sex, a dramatic threat. The act can look outward (a screaming fight, a barrage of texts) or turn inward (cutting, bingeing, drinking). Whatever its form, its job is the same — to make the unbearable feeling drop. And it works, which is exactly the problem.

## The short relief — and the trap inside it

The act brings relief, but only briefly. The self-harm cuts through the fog, the rage discharges the shame, the clinging pulls back reassurance, the breakup converts terror into grim control. That relief feels like proof the act was necessary, so the brain files the lesson away: when that feeling comes, do that thing. The next time the trigger appears, the urge to act is a little stronger and the affect a little quicker to spike. The relief is the hook. This is why telling someone "just stop" doesn't work — the cycle is reinforced by its own success at killing an unbearable feeling in the short term.

## Reinforcement that strengthens the loop

Over months and years, each turn of the cycle wears the groove deeper. The reactions grow more extreme, more triggers get pulled in, and the same pattern repeats across relationship after relationship — partners, friends, family, even therapists. What began as one frantic call becomes dozens; what began as a single breakup becomes a string of them. The loop doesn't stay the same size — left alone, it spreads across a person's whole relational life.

## Telling a borderline pattern from ordinary moodiness

Not every strong feeling is BPD, and the course's whole skill is distinguishing them. Four things mark a genuine borderline pattern. First, the trigger: the storm follows an interpersonal cue — a perceived rejection or abandonment — rather than arriving at random. Second, the intensity: the affect is faster, higher, and more overwhelming than the situation warrants. Third, pervasiveness: the same pattern repeats across relationships and over years, not just in one bad stretch. Fourth, the cost: the loop hurts the body, wrecks relationships, and damages work, and the person keeps going anyway. Someone who feels proportionate sadness over a breakup, leans on friends, and steadies is not in a loop; someone who swings within hours between rage, panic, and numbness after every breakup since adolescence, and harms herself to make it stop, is.

## Reading the meaning — and naming a test

It is not enough to say "that looks like BPD." A strong reading commits to the hidden function of the behavior — names the interpersonal trigger, the surge of affect, the impulsive act, and the reinforcing relief, and says what the act is doing: regulating an unbearable feeling or warding off abandonment. Then it names the cheap observations that could prove it wrong. "The cutting follows an interpersonal slight rather than a wish to die; the relief is sharp but brief; and the urge will fade if she rides out the feeling another way" is a real claim, because each clause is checkable. The weak move stops at "she's moody" (which explains nothing) or retreats into "you can't know what's inside someone" (which gives up before looking). The worst move is the lurid overreach the evidence defeats — reading abandonment-driven self-harm as cold manipulation when private shame and genuine distress are right there. The strongest reading binds the evidence in front of you and spells out the single observation that would refute it.

## In the real world

Suppose a friend flies into a rage and threatens to cut everyone off the moment her partner mentions an old flame, then sobs with remorse an hour later. The dodge is to shrug that "everyone gets jealous" — it sounds reasonable, but it explains nothing and points nowhere; the other dodge is to brand her "just dramatic and attention-seeking," a lurid overreach the genuine remorse defeats. A clear-eyed move commits to the loop: a perceived threat to the bond spikes unbearable affect, the outburst discharges it for a moment, the relief feeds the pattern, and the next perceived threat reignites it — which is why the rage follows the perceived threat and not real betrayal, why the calm is brief before remorse floods in, and why naming the feeling first would head it off. Three cheap checks, each able to refute the idea. That is what reading the cycle buys you — not a shrug at how dramatic the behavior is, but a testable account of the loop, and the first foothold for breaking it.`,
  homework: {
    mcq,
    hybrid,
    written,
  },
};
