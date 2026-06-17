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
      "Before he can leave for work, a man is gripped by the thought that he left the stove on. His chest tightens, he goes back to check, feels calm for a few seconds, then the doubt returns stronger — so he checks again, five, six, ten times. He is now late most mornings. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Everyone double-checks the stove now and then; reading a disorder into ordinary caution is overthinking it.",
        credit: 0,
      },
      {
        text: "This is likely a full OCD loop, not caution: an intrusive doubt spikes anxiety, the checking briefly relieves it, and that relief teaches the doubt to come back stronger, so each round deepens the groove; test whether the checking follows the doubt-thought rather than any real evidence, whether relief is brief and the urge returns harder, and whether the urge fades if he resists checking and lets the anxiety fall on its own.",
        credit: 1.0,
      },
      {
        text: "He probably has some anxiety about the stove; we could keep an eye on it.",
        credit: 0.6,
      },
      {
        text: "He seems to check the stove a lot.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "This is likely a full OCD loop, not caution: an intrusive doubt spikes anxiety, the checking briefly relieves it, and that relief teaches the doubt to come back stronger, so each round deepens the groove; test whether the checking follows the doubt-thought rather than any real evidence, whether relief is brief and the urge returns harder, and whether the urge fades if he resists checking and lets the anxiety fall on its own.",
    explanation:
      "Top credit names the obsession-anxiety-compulsion-relief-return cycle and a resist-and-watch test; 'everyone double-checks' is the dodge the ten checks and daily lateness defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "A woman washes her hands until they crack and bleed. It starts with a thought that she has touched something contaminated; the worry climbs until she scrubs, which calms her briefly, but the next 'dirty' contact restarts the whole thing. She now avoids door handles and has stopped cooking for her family. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She seems very concerned about germs.",
        credit: 0.3,
      },
      {
        text: "The washing likely runs as an OCD cycle: a contamination thought spikes anxiety, scrubbing delivers short-lived relief, and that relief reinforces the fear so the next contact reignites it — driving escalation and avoidance; test whether each wash follows a specific 'contact' thought rather than visible dirt, whether the relief is brief before the urge returns, and whether the anxiety subsides on its own when she delays or skips a wash.",
        credit: 1.0,
      },
      {
        text: "Hygiene habits vary hugely from person to person, so there's really no way to say what's driving her washing.",
        credit: 0,
      },
      {
        text: "She might have a thing about cleanliness; we could ask her about it.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The washing likely runs as an OCD cycle: a contamination thought spikes anxiety, scrubbing delivers short-lived relief, and that relief reinforces the fear so the next contact reignites it — driving escalation and avoidance; test whether each wash follows a specific 'contact' thought rather than visible dirt, whether the relief is brief before the urge returns, and whether the anxiety subsides on its own when she delays or skips a wash.",
    explanation:
      "Full credit reads the relief-then-return loop driving escalation and names a delay-the-wash test; 'hygiene habits vary' is the dodge the cracked, bleeding hands and abandoned cooking defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "A teenager taps the doorframe four times before entering any room. If he loses count or feels he did it 'wrong,' a wave of dread says something bad will happen, so he starts over until it feels right. The taps now make him late and have cost him friendships he says he wants. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Lots of kids have quirky little rituals; there's nothing here worth reading into.",
        credit: 0,
      },
      {
        text: "He probably has some superstition about the tapping; we could look into it.",
        credit: 0.6,
      },
      {
        text: "The tapping likely runs an OCD cycle: an intrusive 'something bad will happen' thought spikes dread, the four taps neutralize it for a moment, and the brief relief reinforces the rule so it must be repeated until 'just right' — at real social cost; test whether the redoing tracks the dread-thought rather than any real danger, whether relief is momentary before the urge returns, and whether the dread fades on its own when he enters without tapping.",
        credit: 1.0,
      },
      {
        text: "He seems to tap the doorframe before going in.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The tapping likely runs an OCD cycle: an intrusive 'something bad will happen' thought spikes dread, the four taps neutralize it for a moment, and the brief relief reinforces the rule so it must be repeated until 'just right' — at real social cost; test whether the redoing tracks the dread-thought rather than any real danger, whether relief is momentary before the urge returns, and whether the dread fades on its own when he enters without tapping.",
    explanation:
      "Top credit names the dread-tap-relief-repeat loop and an enter-without-tapping test; 'kids have quirky rituals' is the dodge the lateness and lost friendships he wants defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "A woman straightens the items on her desk until they feel 'just right.' It begins with a buzzing not-rightness she can't ignore; aligning everything settles it for a minute, then the feeling creeps back and she realigns. Mornings vanish into this, and she has missed deadlines she cares about. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She might like things tidy in a way that's gotten intense; we could talk about it.",
        credit: 0.6,
      },
      {
        text: "The 'just right' arranging likely runs as an OCD loop, not a preference: an intolerable not-right feeling spikes tension, aligning briefly relieves it, and that relief trains the feeling to return so she must realign — eating her mornings and her deadlines; test whether each round follows the not-right sensation rather than any real disorder, whether relief lasts only a minute before the urge returns, and whether the tension settles on its own when she leaves the desk as-is.",
        credit: 1.0,
      },
      {
        text: "Some people are naturally tidy and some aren't, so there's nothing underneath her arranging to understand.",
        credit: 0,
      },
      {
        text: "She seems to spend a lot of time arranging her desk.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The 'just right' arranging likely runs as an OCD loop, not a preference: an intolerable not-right feeling spikes tension, aligning briefly relieves it, and that relief trains the feeling to return so she must realign — eating her mornings and her deadlines; test whether each round follows the not-right sensation rather than any real disorder, whether relief lasts only a minute before the urge returns, and whether the tension settles on its own when she leaves the desk as-is.",
    explanation:
      "Full credit reads the not-right-align-relief-return cycle and a leave-it-as-is test; 'some people are naturally tidy' is the dodge the lost mornings and missed deadlines defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "A gentle new father is struck by sudden images of harming his baby. Horrified, he hides every knife, never bathes the baby alone, and silently repeats 'I would never' until the fear eases — for a while. The images return, and his avoidance is spreading. He has never been aggressive in his life. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Intrusive violent images mean a person is secretly dangerous, so the safest read is that he genuinely wants to harm the child.",
        credit: 0,
      },
      {
        text: "He seems frightened by these thoughts about the baby.",
        credit: 0.3,
      },
      {
        text: "This looks like a harm-OCD loop, the opposite of a real wish: an ego-dystonic intrusive image spikes horror, the hiding-and-reassuring briefly relieves it, and the relief reinforces the fear so the images return and avoidance spreads; test whether the thoughts horrify rather than attract him, whether the rituals follow the image rather than any urge, and whether the fear subsides on its own when he resists the avoidance and tolerates the thought.",
        credit: 1.0,
      },
      {
        text: "He's probably anxious about being a parent; we could check in about it.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "This looks like a harm-OCD loop, the opposite of a real wish: an ego-dystonic intrusive image spikes horror, the hiding-and-reassuring briefly relieves it, and the relief reinforces the fear so the images return and avoidance spreads; test whether the thoughts horrify rather than attract him, whether the rituals follow the image rather than any urge, and whether the fear subsides on its own when he resists the avoidance and tolerates the thought.",
    explanation:
      "Top credit reads the horror-driven loop and a does-he-resist-and-recover test; 'he secretly wants to harm the child' is the lurid overreach his horror and lifelong gentleness defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "A man texts his partner 'are we okay?' many times a day. A doubt that she's secretly angry rises, the question calms him when she answers warmly, but within an hour the doubt is back and he asks again — sometimes rewording it to feel sure. She feels worn down and he knows it, yet can't stop. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Couples check in with each other all the time; there's nothing to interpret in a few extra texts.",
        credit: 0,
      },
      {
        text: "The repeated asking likely runs an OCD reassurance loop: a doubt spikes anxiety, her answer briefly relieves it, and the relief reinforces the doubt so it returns and he must ask again — at a cost to the relationship he values; test whether each round follows the doubt rather than any real sign of trouble, whether the relief is short before the urge returns, and whether the doubt fades on its own when he resists asking.",
        credit: 1.0,
      },
      {
        text: "He probably feels insecure in the relationship; we could explore that.",
        credit: 0.6,
      },
      {
        text: "He seems to text her for reassurance a lot.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The repeated asking likely runs an OCD reassurance loop: a doubt spikes anxiety, her answer briefly relieves it, and the relief reinforces the doubt so it returns and he must ask again — at a cost to the relationship he values; test whether each round follows the doubt rather than any real sign of trouble, whether the relief is short before the urge returns, and whether the doubt fades on its own when he resists asking.",
    explanation:
      "Full credit reads reassurance-seeking as the compulsion in the loop and names a resist-asking test; 'couples check in all the time' is the dodge the many-times-daily cost defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "Whenever a 'bad' thought crosses her mind, a woman silently repeats a specific phrase three times to 'cancel' it. The dread that not doing so will cause harm spikes hard; the cancelling eases it briefly, then the next bad thought restarts it. The mental ritual now runs dozens of times a day and exhausts her. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She seems to repeat a phrase to herself when bad thoughts come.",
        credit: 0.3,
      },
      {
        text: "The mind is unknowable, so there's no real way to say what her private mental habit is doing.",
        credit: 0,
      },
      {
        text: "This looks like a mental-ritual OCD loop: an intrusive 'bad' thought spikes dread, the silent cancelling briefly relieves it, and that relief reinforces the link so the next thought reignites it dozens of times a day; test whether the cancelling follows the intrusive thought rather than any real event, whether the relief is brief before the dread returns, and whether the dread subsides on its own when she lets a thought stand without cancelling it.",
        credit: 1.0,
      },
      {
        text: "She might be using the phrase to cope with anxious thoughts; we could look into it.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "This looks like a mental-ritual OCD loop: an intrusive 'bad' thought spikes dread, the silent cancelling briefly relieves it, and that relief reinforces the link so the next thought reignites it dozens of times a day; test whether the cancelling follows the intrusive thought rather than any real event, whether the relief is brief before the dread returns, and whether the dread subsides on its own when she lets a thought stand without cancelling it.",
    explanation:
      "Top credit recognizes a covert compulsion running the same cycle and names a let-the-thought-stand test; 'the mind is unknowable' is the dodge the dozens-a-day exhaustion defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "An employee rereads every email a dozen times before sending, sure he has made an embarrassing error. The fear spikes as his cursor hovers over send; rereading calms it for a moment, then the doubt returns and he rereads again. Short messages now take him an hour, and his manager has noticed the slowdown. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Proofreading is good practice; calling careful editing a problem is overthinking it.",
        credit: 0,
      },
      {
        text: "He probably gets anxious about making mistakes; we could keep an eye on it.",
        credit: 0.6,
      },
      {
        text: "The rereading likely runs an OCD checking loop: a doubt about errors spikes anxiety, each reread briefly relieves it, and the relief reinforces the doubt so it returns and he rereads again — at a real cost to his work; test whether the rereading follows the doubt rather than actual found errors, whether the relief is brief before the urge returns, and whether the anxiety settles on its own when he sends after a single read.",
        credit: 1.0,
      },
      {
        text: "He seems to reread his emails many times.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The rereading likely runs an OCD checking loop: a doubt about errors spikes anxiety, each reread briefly relieves it, and the relief reinforces the doubt so it returns and he rereads again — at a real cost to his work; test whether the rereading follows the doubt rather than actual found errors, whether the relief is brief before the urge returns, and whether the anxiety settles on its own when he sends after a single read.",
    explanation:
      "Full credit reads compulsive checking driven by doubt-not-evidence and names a send-after-one-read test; 'proofreading is good practice' is the dodge the hour-per-email cost defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "Each night a woman checks that the front door is locked. But one check never settles it: a doubt that it might be open spikes, she checks, feels relief, then doubts the relief and checks again — often twenty times before bed. She knows it's locked and still cannot stop, and she is losing sleep. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She seems to check the lock several times at night.",
        credit: 0.3,
      },
      {
        text: "The checking likely runs an OCD loop where the relief itself feeds the doubt: a 'maybe it's open' thought spikes anxiety, checking relieves it momentarily, and the brief relief reinforces the doubt so she can never be sure enough — twenty rounds a night; test whether the checks follow the doubt rather than any real reason, whether each relief is undone within moments, and whether the doubt fades on its own when she checks just once and resists the rest.",
        credit: 1.0,
      },
      {
        text: "Home security matters and people lock up differently, so there's nothing to read into her routine.",
        credit: 0,
      },
      {
        text: "She might be anxious about safety at night; we could ask about it.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The checking likely runs an OCD loop where the relief itself feeds the doubt: a 'maybe it's open' thought spikes anxiety, checking relieves it momentarily, and the brief relief reinforces the doubt so she can never be sure enough — twenty rounds a night; test whether the checks follow the doubt rather than any real reason, whether each relief is undone within moments, and whether the doubt fades on its own when she checks just once and resists the rest.",
    explanation:
      "Top credit shows how brief relief reinforces doubt and names a check-once test; 'home security matters' is the dodge the twenty-checks-and-lost-sleep cost defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "Two roommates both keep a tidy kitchen. One simply likes it clean and feels nothing if it's messy. The other feels a contamination thought spike, must wipe every surface in a fixed order, feels brief relief, and redoes it if interrupted — skipping meals to keep the ritual intact. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Both roommates clearly have a cleaning compulsion, since they both keep the kitchen spotless.",
        credit: 0,
      },
      {
        text: "Only the second roommate's cleaning likely fits the OCD cycle: a contamination thought spikes anxiety, the fixed-order ritual gives brief relief that reinforces the fear, and interruption forces a restart — at the cost of meals — whereas the first feels no anxiety and pays no cost; test whether her wiping follows the thought rather than visible mess, whether relief is brief before the urge returns, and whether the anxiety settles on its own when she leaves a surface unwiped.",
        credit: 1.0,
      },
      {
        text: "The second roommate probably takes cleaning more seriously; we could look into it.",
        credit: 0.6,
      },
      {
        text: "The second roommate seems to clean in a very particular way.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "Only the second roommate's cleaning likely fits the OCD cycle: a contamination thought spikes anxiety, the fixed-order ritual gives brief relief that reinforces the fear, and interruption forces a restart — at the cost of meals — whereas the first feels no anxiety and pays no cost; test whether her wiping follows the thought rather than visible mess, whether relief is brief before the urge returns, and whether the anxiety settles on its own when she leaves a surface unwiped.",
    explanation:
      "Full credit distinguishes an OCD loop from an ordinary preference by trigger, relief-cycle, and cost, and names a leave-it-unwiped test; 'both have a compulsion' is the dodge the first roommate's no-anxiety, no-cost cleaning defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A devout student is plagued by blasphemous thoughts during prayer. Convinced the thought itself is a sin, he prays the passage over from the start each time one intrudes, feels briefly clean, then another thought intrudes and he restarts. A short prayer now takes an hour, and he dreads going at all. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He probably has some religious anxiety; we could revisit it.",
        credit: 0.6,
      },
      {
        text: "Faith is deeply personal, so there's no real way to know what his praying habits mean.",
        credit: 0,
      },
      {
        text: "This looks like a scrupulosity OCD loop: an unwanted blasphemous thought spikes guilt, restarting the prayer gives brief relief, and the relief reinforces the fear so the next intrusion restarts it — turning a short prayer into an hour he now dreads; test whether the restarting follows the intrusive thought rather than any real wrongdoing, whether the 'clean' feeling is brief before guilt returns, and whether the guilt subsides on its own when he prays through without restarting.",
        credit: 1.0,
      },
      {
        text: "He seems to start his prayers over a lot.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "This looks like a scrupulosity OCD loop: an unwanted blasphemous thought spikes guilt, restarting the prayer gives brief relief, and the relief reinforces the fear so the next intrusion restarts it — turning a short prayer into an hour he now dreads; test whether the restarting follows the intrusive thought rather than any real wrongdoing, whether the 'clean' feeling is brief before guilt returns, and whether the guilt subsides on its own when he prays through without restarting.",
    explanation:
      "Top credit names a scrupulosity loop and a pray-through-without-restarting test; 'faith is personal' is the dodge the hour-long prayer and dread he reports defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "After a minor headache, a man becomes sure he has a brain tumor. He googles symptoms for hours and presses on his skull to 'check,' which calms him for a few minutes until a new sensation restarts the fear. Every scan has been clean, yet the searching has taken over his evenings. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He seems worried about his health.",
        credit: 0.3,
      },
      {
        text: "The googling and self-checking likely run an OCD-style health loop: a catastrophic thought spikes fear, searching and checking briefly relieve it, and the relief reinforces the fear so each new sensation restarts it despite clean scans; test whether the checking follows the feared thought rather than any real finding, whether relief is brief before the fear returns, and whether the fear settles on its own when he resists googling and checking.",
        credit: 1.0,
      },
      {
        text: "Health worries are universal and bodies are unpredictable, so there's nothing specific to conclude here.",
        credit: 0,
      },
      {
        text: "He's probably anxious about his health; we could keep track of it.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The googling and self-checking likely run an OCD-style health loop: a catastrophic thought spikes fear, searching and checking briefly relieve it, and the relief reinforces the fear so each new sensation restarts it despite clean scans; test whether the checking follows the feared thought rather than any real finding, whether relief is brief before the fear returns, and whether the fear settles on its own when he resists googling and checking.",
    explanation:
      "Full credit reads checking-as-compulsion feeding the fear and names a resist-the-search test; 'health worries are universal' is the dodge the clean scans and lost evenings defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "A woman must touch both sides of every doorframe to keep things 'balanced.' If she touches one side, a lopsided dread rises until she touches the other, which settles it for a moment before the next doorway. She is often late and her hands are raw, and she says the balance is never quite enough. Which conclusion best follows?",
    mcOptions: [
      {
        text: "People have all kinds of little habits with doorways; there's nothing to make of it.",
        credit: 0,
      },
      {
        text: "She might have a balancing habit that's gotten out of hand; we could look into it.",
        credit: 0.6,
      },
      {
        text: "The symmetry touching likely runs an OCD loop: a lopsided 'unbalanced' feeling spikes dread, evening it out gives brief relief, and the relief reinforces the rule so the next doorway reignites it — never quite enough; test whether the second touch follows the unbalanced feeling rather than any real need, whether relief is momentary before the urge returns, and whether the dread fades on its own when she passes through touching neither side.",
        credit: 1.0,
      },
      {
        text: "She seems to touch both sides of doorways.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The symmetry touching likely runs an OCD loop: a lopsided 'unbalanced' feeling spikes dread, evening it out gives brief relief, and the relief reinforces the rule so the next doorway reignites it — never quite enough; test whether the second touch follows the unbalanced feeling rather than any real need, whether relief is momentary before the urge returns, and whether the dread fades on its own when she passes through touching neither side.",
    explanation:
      "Top credit names the symmetry loop and a touch-neither-side test; 'people have little habits' is the dodge the raw hands and never-enough quality defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "A man asks his wife to confirm, over and over, that he didn't 'accidentally say something offensive' at a party weeks ago. A doubt spikes, her reassurance calms him briefly, then he doubts her answer and asks again — recruiting friends too. No one recalls anything wrong, yet the questioning consumes his days. Which conclusion best follows?",
    mcOptions: [
      {
        text: "It's normal to wonder how you came across socially, so this is just ordinary self-consciousness.",
        credit: 0,
      },
      {
        text: "The repeated seeking of confirmation likely runs an OCD reassurance loop: a doubt spikes anxiety, each reassurance gives brief relief, and the relief reinforces the doubt so it returns and he must ask again — even doubting the answers; test whether the asking follows the doubt rather than any real evidence of offense, whether relief is brief before the doubt returns, and whether the doubt subsides on its own when he resists seeking reassurance.",
        credit: 1.0,
      },
      {
        text: "He probably feels anxious about the party; we could revisit it.",
        credit: 0.6,
      },
      {
        text: "He seems to keep asking about the party.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The repeated seeking of confirmation likely runs an OCD reassurance loop: a doubt spikes anxiety, each reassurance gives brief relief, and the relief reinforces the doubt so it returns and he must ask again — even doubting the answers; test whether the asking follows the doubt rather than any real evidence of offense, whether relief is brief before the doubt returns, and whether the doubt subsides on its own when he resists seeking reassurance.",
    explanation:
      "Full credit reads reassurance-seeking as the compulsion in the loop, including doubt of the answers, and names a resist-asking test; 'ordinary self-consciousness' is the dodge the days-long, recruit-friends scale defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A college runner counts her steps in multiples of five; if a route doesn't land on a 'safe' number, a dread that a loved one will be hurt forces her to add steps until it does. The count settles her briefly, then the next walk restarts it. She now plans detours around the counting and arrives late everywhere. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She seems to count her steps on walks.",
        credit: 0.3,
      },
      {
        text: "The step-counting likely runs an OCD loop: a magical 'someone will be hurt' thought spikes dread, hitting a safe number gives brief relief, and the relief reinforces the rule so the next walk reignites it — driving detours and lateness; test whether the adding-steps follows the dread-thought rather than any real risk, whether relief is brief before the urge returns, and whether the dread settles on its own when she walks without counting.",
        credit: 1.0,
      },
      {
        text: "Athletes track numbers all the time, so there's nothing unusual to interpret in her counting.",
        credit: 0,
      },
      {
        text: "She might have a counting habit tied to worry; we could ask her.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The step-counting likely runs an OCD loop: a magical 'someone will be hurt' thought spikes dread, hitting a safe number gives brief relief, and the relief reinforces the rule so the next walk reignites it — driving detours and lateness; test whether the adding-steps follows the dread-thought rather than any real risk, whether relief is brief before the urge returns, and whether the dread settles on its own when she walks without counting.",
    explanation:
      "Top credit reads magical counting as the compulsion in the loop and names a walk-without-counting test; 'athletes track numbers' is the dodge the harm-fear, detours, and lateness defeat.",
  },
];

const hybrid: HomeworkItem[] = [
  {
    itemType: "hybrid",
    prompt:
      "A man flips the light switch off and on until it feels 'right' before leaving any room. A not-right feeling spikes if he stops too soon; the flipping settles it briefly, then the next room restarts it. He is calm and switch-free everywhere else in life and only does this with light switches. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He seems particular about light switches.",
        credit: 0.3,
      },
      {
        text: "The switch-flipping — specific to switches while he's otherwise ritual-free — likely runs an OCD loop: a not-right feeling spikes tension, flipping until 'right' gives brief relief, and the relief reinforces the rule so each room reignites it; test whether the flipping follows the not-right feeling rather than any real need for light, whether relief is brief before the urge returns, and whether the tension settles on its own when he leaves a switch after one flip.",
        credit: 1.0,
      },
      {
        text: "Fiddling with switches is a common habit; reading a loop into it is overthinking.",
        credit: 0,
      },
      {
        text: "He probably has a thing about switches; we could keep noticing it.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'this is an OCD switch-flipping loop' lead from the rival 'he's just a fidgety person who fiddles with everything,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: watch whether the ritual is locked to light switches and driven by a not-right feeling while he handles everything else without rituals — a loop confined to switches and triggered by the feeling points to OCD rather than general fidgeting. My lead is refuted if he fiddles compulsively with all sorts of objects equally, which would make it an all-purpose habit rather than a specific loop.",
      yieldAnchors: [
        "The flipping is specific to light switches",
        "A not-right feeling spikes if he stops too soon",
        "He is calm and ritual-free everywhere else",
      ],
      riskAnchors: [
        "The flipping follows the not-right feeling, not a need for light",
        "Relief is brief before the urge returns",
        "Tension settles on its own when he leaves after one flip",
      ],
      defeatedBy: [
        "He fiddles compulsively with all objects equally",
        "The flipping bears no relation to a not-right feeling",
      ],
    },
    correctAnswer:
      "The switch-flipping — specific to switches while he's otherwise ritual-free — likely runs an OCD loop: a not-right feeling spikes tension, flipping until 'right' gives brief relief, and the relief reinforces the rule so each room reignites it; test whether the flipping follows the not-right feeling rather than any real need for light, whether relief is brief before the urge returns, and whether the tension settles on its own when he leaves a switch after one flip.",
    explanation:
      "Full credit reads a trigger-specific loop and is paired with a is-it-locked-to-switches test that names its refutation; 'fiddling is common' is the dodge the switch-specific, not-right-driven pattern defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A nurse washes correctly at work without distress, but at home a contamination thought spikes whenever she touches the mail, and she scrubs to her elbows until it feels clean, only for the next 'dirty' item to restart it. The washing is confined to home and to specific 'contaminated' objects. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Hand-washing has real medical value, so it's a stretch to call any of her washing a problem.",
        credit: 0,
      },
      {
        text: "She probably has some contamination worry at home; we could track it.",
        credit: 0.6,
      },
      {
        text: "The home washing — triggered by a thought, not visible dirt, and absent in her competent work routine — likely runs an OCD loop: the contamination thought spikes anxiety, scrubbing gives brief relief, and the relief reinforces the fear so the next item reignites it; test whether each wash follows the thought rather than real soiling, whether relief is brief before the urge returns, and whether the anxiety subsides on its own when she handles the mail without washing.",
        credit: 1.0,
      },
      {
        text: "She seems to wash a lot at home.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'home washing is an OCD contamination loop' lead from the rival 'she's simply a careful, hygienic nurse,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: check whether the home washing is set off by a contamination thought rather than visible dirt and is absent from her composed work routine — washing driven by the thought and confined to home points to a loop rather than professional hygiene. My lead is refuted if she only washes when something is actually soiled and shows the same calm, proportionate hygiene at home as at work.",
      yieldAnchors: [
        "She washes calmly and correctly at work",
        "At home a contamination thought triggers scrubbing",
        "The next 'dirty' item restarts the washing",
      ],
      riskAnchors: [
        "Each wash follows the thought, not real soiling",
        "Relief is brief before the urge returns",
        "Anxiety subsides on its own when she skips washing",
      ],
      defeatedBy: [
        "She washes only when something is actually soiled",
        "Her home hygiene matches her proportionate work hygiene",
      ],
    },
    correctAnswer:
      "The home washing — triggered by a thought, not visible dirt, and absent in her competent work routine — likely runs an OCD loop: the contamination thought spikes anxiety, scrubbing gives brief relief, and the relief reinforces the fear so the next item reignites it; test whether each wash follows the thought rather than real soiling, whether relief is brief before the urge returns, and whether the anxiety subsides on its own when she handles the mail without washing.",
    explanation:
      "Top credit reads a thought-triggered loop that spares her work routine and is paired with a thought-vs-real-dirt test that names its refutation; 'washing has medical value' is the dodge the home-only, thought-driven scrubbing defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A driver becomes convinced he may have hit a pedestrian, though he saw nothing. The thought spikes hard, he circles back to check the road, feels relief on finding nothing, then doubts what he saw and circles again. It happens only on his evening commute and nowhere else in his day. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Driving accidents are a real danger, so checking the road carefully is just being responsible.",
        credit: 0,
      },
      {
        text: "The circling-back — set off by a doubt, not by anything he saw, and confined to his commute — likely runs an OCD 'hit-and-run' loop: the intrusive thought spikes dread, checking gives brief relief, and the relief reinforces the doubt so he must check again; test whether the checking follows the thought rather than any real impact, whether relief is brief before the doubt returns, and whether the dread settles on its own when he drives on without circling back.",
        credit: 1.0,
      },
      {
        text: "He seems to double back on his commute.",
        credit: 0.3,
      },
      {
        text: "He's probably anxious about driving; we could look into it.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'this is a hit-and-run OCD checking loop' lead from the rival 'he's a cautious driver responding to a real near-miss,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: note whether the circling-back follows a pure doubt with no perceived impact and recurs on the same commute regardless of conditions — checking driven by the thought rather than any event points to a loop. My lead is refuted if he only doubles back after an actual bump or near-miss he can describe, which would make it a reasonable response to real danger.",
      yieldAnchors: [
        "He saw nothing yet is convinced he hit someone",
        "He circles back, feels relief, then doubts and circles again",
        "It happens only on his evening commute",
      ],
      riskAnchors: [
        "The checking follows the thought, not a real impact",
        "Relief is brief before the doubt returns",
        "Dread settles on its own when he drives on",
      ],
      defeatedBy: [
        "He only doubles back after a real bump or near-miss",
        "The checking tracks road conditions rather than the thought",
      ],
    },
    correctAnswer:
      "The circling-back — set off by a doubt, not by anything he saw, and confined to his commute — likely runs an OCD 'hit-and-run' loop: the intrusive thought spikes dread, checking gives brief relief, and the relief reinforces the doubt so he must check again; test whether the checking follows the thought rather than any real impact, whether relief is brief before the doubt returns, and whether the dread settles on its own when he drives on without circling back.",
    explanation:
      "Full credit reads a doubt-driven checking loop and is paired with a was-there-a-real-impact test that names its refutation; 'just a responsible driver' is the dodge the saw-nothing-yet-certain pattern defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A woman keeps every receipt, wrapper, and broken object, gripped by the thought that throwing something away will lead to disaster. Discarding spikes dread; keeping settles it briefly, then the next item restarts the worry. Her rooms are now impassable and she has stopped having anyone over. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Plenty of people are sentimental savers; there's nothing here to interpret.",
        credit: 0,
      },
      {
        text: "She might have trouble letting go of things; we could explore it.",
        credit: 0.6,
      },
      {
        text: "The saving likely runs an OCD loop, not mere sentiment: a 'disaster if I discard' thought spikes dread, keeping the item gives brief relief, and the relief reinforces the fear so the next item reignites it — at the cost of livable rooms; test whether the keeping follows the dread-thought rather than any real value, whether relief is brief before the worry returns, and whether the dread settles on its own when she discards one item and resists retrieving it.",
        credit: 1.0,
      },
      {
        text: "She seems to hold on to a lot of things.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'this saving is a fear-driven OCD loop' lead from the rival 'she's simply a sentimental keeper of things,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: watch whether discarding any item triggers a disaster fear that only keeping relieves, regardless of the item's worth — dread tied to discarding rather than affection for the object points to a loop. My lead is refuted if she keeps only genuinely meaningful things, parts easily with junk, and feels no dread when throwing wrappers away.",
      yieldAnchors: [
        "She keeps receipts, wrappers, and broken objects",
        "Discarding spikes a disaster fear that keeping relieves",
        "Her rooms are impassable and she has guests no more",
      ],
      riskAnchors: [
        "The keeping follows the dread-thought, not real value",
        "Relief is brief before the worry returns",
        "Dread settles when she discards and resists retrieving",
      ],
      defeatedBy: [
        "She keeps only meaningful things and discards junk easily",
        "Throwing wrappers away produces no dread at all",
      ],
    },
    correctAnswer:
      "The saving likely runs an OCD loop, not mere sentiment: a 'disaster if I discard' thought spikes dread, keeping the item gives brief relief, and the relief reinforces the fear so the next item reignites it — at the cost of livable rooms; test whether the keeping follows the dread-thought rather than any real value, whether relief is brief before the worry returns, and whether the dread settles on its own when she discards one item and resists retrieving it.",
    explanation:
      "Top credit reads fear-driven saving as a loop and is paired with a does-discarding-trigger-dread test that names its refutation; 'sentimental savers' is the dodge the impassable rooms and disaster-fear defeat.",
  },
  {
    itemType: "hybrid",
    prompt:
      "Every night a father checks his children's breathing many times, sure they will stop if he doesn't. The thought spikes dread, a check settles it briefly, then the doubt returns and he checks again — sometimes waking them. He is exhausted and they sleep poorly, yet he cannot stop. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He seems to check on his kids at night.",
        credit: 0.3,
      },
      {
        text: "The repeated checking likely runs an OCD loop: a 'they'll stop breathing' thought spikes dread, each check gives brief relief, and the relief reinforces the doubt so it returns and he checks again — costing everyone sleep; test whether the checking follows the thought rather than any real sign, whether relief is brief before the doubt returns, and whether the dread settles on its own when he resists a check and lets the worry pass.",
        credit: 1.0,
      },
      {
        text: "Caring parents check on their children, so this is just devoted parenting.",
        credit: 0,
      },
      {
        text: "He's probably an anxious parent; we could keep an eye on it.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'this is an OCD checking loop' lead from the rival 'he's an attentive parent doing a normal nighttime check,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: see whether the checks are driven by a recurring catastrophic thought and repeated past all reassurance to the point of waking the kids — checking that can never settle and costs everyone sleep points to a loop. My lead is refuted if a single calm check satisfies him and he sleeps fine, which would fit ordinary attentive parenting.",
      yieldAnchors: [
        "He checks breathing many times a night",
        "A check relieves the dread briefly before doubt returns",
        "He is exhausted and the children sleep poorly",
      ],
      riskAnchors: [
        "The checking follows the thought, not a real sign",
        "Relief is brief before the doubt returns",
        "Dread settles on its own when he resists a check",
      ],
      defeatedBy: [
        "A single calm check satisfies him for the night",
        "His checking causes no cost to sleep or function",
      ],
    },
    correctAnswer:
      "The repeated checking likely runs an OCD loop: a 'they'll stop breathing' thought spikes dread, each check gives brief relief, and the relief reinforces the doubt so it returns and he checks again — costing everyone sleep; test whether the checking follows the thought rather than any real sign, whether relief is brief before the doubt returns, and whether the dread settles on its own when he resists a check and lets the worry pass.",
    explanation:
      "Full credit reads a never-settling checking loop and is paired with a does-one-check-satisfy test that names its refutation; 'devoted parenting' is the dodge the wake-the-kids, can't-stop cost defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A woman avoids stepping on cracks in the sidewalk, certain that a misstep means harm to her mother. A near-miss spikes dread, careful stepping settles it briefly, then the next stretch of pavement restarts it. She now takes long detours and avoids walking with friends so no one will notice. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Avoiding cracks is a childhood game; making anything of it is overthinking.",
        credit: 0,
      },
      {
        text: "The crack-avoidance — driven by a harm fear and paid for in detours and isolation — likely runs an OCD loop: the magical thought spikes dread, careful stepping gives brief relief, and the relief reinforces the rule so each stretch reignites it; test whether the avoidance follows the dread-thought rather than any real hazard, whether relief is brief before the urge returns, and whether the dread settles on its own when she walks normally and steps on a crack on purpose.",
        credit: 1.0,
      },
      {
        text: "She probably has a superstition about cracks; we could ask her.",
        credit: 0.6,
      },
      {
        text: "She seems to avoid cracks in the pavement.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'this is a magical-harm OCD loop' lead from the rival 'it's a harmless leftover childhood game,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: have her deliberately step on a crack and see whether a real spike of dread about her mother follows and whether the avoidance is costing her detours and company — dread and cost point to a loop, not a game. My lead is refuted if stepping on a crack produces no anxiety and she avoids cracks only playfully without any disruption to her life.",
      yieldAnchors: [
        "She avoids cracks to prevent harm to her mother",
        "Careful stepping relieves dread that the next stretch revives",
        "She takes detours and avoids walking with friends",
      ],
      riskAnchors: [
        "The avoidance follows the dread-thought, not a hazard",
        "Relief is brief before the urge returns",
        "Dread settles when she steps on a crack on purpose",
      ],
      defeatedBy: [
        "Stepping on a crack produces no anxiety",
        "The avoidance causes no detours or social cost",
      ],
    },
    correctAnswer:
      "The crack-avoidance — driven by a harm fear and paid for in detours and isolation — likely runs an OCD loop: the magical thought spikes dread, careful stepping gives brief relief, and the relief reinforces the rule so each stretch reignites it; test whether the avoidance follows the dread-thought rather than any real hazard, whether relief is brief before the urge returns, and whether the dread settles on its own when she walks normally and steps on a crack on purpose.",
    explanation:
      "Top credit reads magical avoidance as a loop with real cost and is paired with a step-on-a-crack test that names its refutation; 'a childhood game' is the dodge the harm-fear, detours, and hiding-from-friends defeat.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A man reads each paragraph of a contract again and again, unable to move on until he is certain he 'understood it perfectly.' A doubt spikes that he missed something; rereading settles it briefly, then the doubt returns and he rereads. A one-page document can take all afternoon, and he has missed work deadlines. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He seems to read things very thoroughly.",
        credit: 0.3,
      },
      {
        text: "The rereading likely runs an OCD loop for certainty: a 'did I really understand it' doubt spikes anxiety, each reread gives brief relief, and the relief reinforces the doubt so he can never feel sure enough — costing him whole afternoons; test whether the rereading follows the doubt rather than genuine confusion, whether relief is brief before the doubt returns, and whether the anxiety settles on its own when he moves on after one careful read.",
        credit: 1.0,
      },
      {
        text: "Contracts are important and people read at different speeds, so there's nothing to conclude about his reading.",
        credit: 0,
      },
      {
        text: "He might get anxious about understanding things; we could look into it.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'this is an OCD certainty-checking loop' lead from the rival 'he's a slow but careful reader,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: check whether the rereading is driven by an unsettlable doubt that returns after each pass rather than by actual confusion he can point to — an urge that can never reach 'sure enough' points to a loop. My lead is refuted if a single careful read leaves him satisfied and he only rereads passages he genuinely didn't grasp.",
      yieldAnchors: [
        "He rereads each paragraph until 'perfectly' understood",
        "A doubt returns after each reread",
        "A one-page document takes all afternoon",
      ],
      riskAnchors: [
        "The rereading follows the doubt, not genuine confusion",
        "Relief is brief before the doubt returns",
        "Anxiety settles when he moves on after one read",
      ],
      defeatedBy: [
        "A single careful read leaves him satisfied",
        "He only rereads passages he truly didn't grasp",
      ],
    },
    correctAnswer:
      "The rereading likely runs an OCD loop for certainty: a 'did I really understand it' doubt spikes anxiety, each reread gives brief relief, and the relief reinforces the doubt so he can never feel sure enough — costing him whole afternoons; test whether the rereading follows the doubt rather than genuine confusion, whether relief is brief before the doubt returns, and whether the anxiety settles on its own when he moves on after one careful read.",
    explanation:
      "Full credit reads a certainty-seeking loop and is paired with a doubt-vs-real-confusion test that names its refutation; 'a slow careful reader' is the dodge the all-afternoon, missed-deadline cost defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A student silently reviews every recent conversation for signs he 'might be a bad person.' The doubt spikes, mentally replaying and reassuring himself settles it briefly, then a new memory restarts it. The reviewing fills hours, and only this moral theme — never other topics — sets it off. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Self-reflection is healthy, so examining your conduct is just being conscientious.",
        credit: 0,
      },
      {
        text: "The mental reviewing — confined to the 'bad person' theme and driven by doubt, not events — likely runs a covert OCD loop: the moral doubt spikes anxiety, replaying-and-reassuring gives brief relief, and the relief reinforces the doubt so a new memory reignites it; test whether the reviewing follows the doubt rather than any real wrongdoing, whether relief is brief before the doubt returns, and whether the anxiety settles on its own when he lets a memory stand without reviewing it.",
        credit: 1.0,
      },
      {
        text: "He probably worries about being a good person; we could revisit it.",
        credit: 0.6,
      },
      {
        text: "He seems to think over his conversations a lot.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'this is a covert moral-checking OCD loop' lead from the rival 'he's just a conscientious, reflective person,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: see whether the reviewing is set off by an unsettlable 'am I bad' doubt, confined to that theme, and consuming hours without ever resolving — a self-feeding moral doubt points to a loop, not healthy reflection. My lead is refuted if his reflection is proportionate, leads to actual decisions, and stops once he has thought a matter through.",
      yieldAnchors: [
        "He reviews conversations for signs he is a bad person",
        "Replaying relieves the doubt before a new memory revives it",
        "Only the moral theme sets it off, for hours",
      ],
      riskAnchors: [
        "The reviewing follows the doubt, not real wrongdoing",
        "Relief is brief before the doubt returns",
        "Anxiety settles when he lets a memory stand",
      ],
      defeatedBy: [
        "His reflection is proportionate and leads to decisions",
        "Thinking a matter through actually settles it",
      ],
    },
    correctAnswer:
      "The mental reviewing — confined to the 'bad person' theme and driven by doubt, not events — likely runs a covert OCD loop: the moral doubt spikes anxiety, replaying-and-reassuring gives brief relief, and the relief reinforces the doubt so a new memory reignites it; test whether the reviewing follows the doubt rather than any real wrongdoing, whether relief is brief before the doubt returns, and whether the anxiety settles on its own when he lets a memory stand without reviewing it.",
    explanation:
      "Top credit reads a theme-locked covert loop and is paired with a does-thinking-it-through-settle-it test that names its refutation; 'healthy self-reflection' is the dodge the hours-long, never-resolving review defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A woman re-sends the same work message after deleting and rewriting it many times, certain the wording could be 'taken the wrong way.' The doubt spikes, rewriting settles it briefly, then she rereads the sent version and the doubt returns. A two-line message can take an hour, and colleagues find her unresponsive. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Word choice matters at work, so being careful with messages is just professionalism.",
        credit: 0,
      },
      {
        text: "She seems to fuss over her messages.",
        credit: 0.3,
      },
      {
        text: "The rewriting likely runs an OCD loop: a 'taken the wrong way' doubt spikes anxiety, each rewrite gives brief relief, and the relief reinforces the doubt so even after sending she rereads and the doubt returns — costing her an hour per note; test whether the rewriting follows the doubt rather than any real ambiguity, whether relief is brief before the doubt returns, and whether the anxiety settles on its own when she sends after a single draft.",
        credit: 1.0,
      },
      {
        text: "She might be anxious about how she comes across; we could explore it.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'this is an OCD rewriting loop' lead from the rival 'she's a careful professional communicator,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: check whether the rewriting is driven by an unsettlable doubt that returns even after sending and balloons a two-line note into an hour — a doubt that re-fires post-send points to a loop. My lead is refuted if she drafts once, sends, and moves on, rewriting only genuinely ambiguous messages.",
      yieldAnchors: [
        "She rewrites and re-sends the same short message many times",
        "The doubt returns even after she has sent it",
        "A two-line message takes an hour",
      ],
      riskAnchors: [
        "The rewriting follows the doubt, not real ambiguity",
        "Relief is brief before the doubt returns",
        "Anxiety settles when she sends after one draft",
      ],
      defeatedBy: [
        "She drafts once, sends, and moves on",
        "She rewrites only genuinely ambiguous messages",
      ],
    },
    correctAnswer:
      "The rewriting likely runs an OCD loop: a 'taken the wrong way' doubt spikes anxiety, each rewrite gives brief relief, and the relief reinforces the doubt so even after sending she rereads and the doubt returns — costing her an hour per note; test whether the rewriting follows the doubt rather than any real ambiguity, whether relief is brief before the doubt returns, and whether the anxiety settles on its own when she sends after a single draft.",
    explanation:
      "Full credit reads a doubt-driven rewriting loop that re-fires after sending and is paired with a send-after-one-draft test that names its refutation; 'just professionalism' is the dodge the hour-per-message cost defeats.",
  },
];

const written: HomeworkItem[] = [
  {
    itemType: "written",
    prompt:
      "A man can't leave his apartment until he has checked the gas, the windows, and the locks in a fixed order. If interrupted, he restarts the whole sequence. A doubt that something is unsafe spikes each time; completing the order calms him for a moment before the doubt creeps back. He is now an hour late to everything and has been written up at work. In one paragraph, propose the strongest conclusion about what this routine is doing and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that this is a checking compulsion running the classic OCD cycle, not careful safety habits: an intrusive doubt that something is unsafe spikes anxiety, completing the fixed sequence delivers a few seconds of relief, and that relief reinforces the doubt so it returns stronger and the routine must be restarted — a loop that now costs him an hour and his standing at work. This is a strong claim because it predicts checkable consequences: the checking should follow the doubt-thought rather than any real evidence of danger; each round of relief should be brief and undone within minutes; and the doubt should actually fade on its own if he leaves after a single check and lets the anxiety crest and fall. I would test it by tracking whether the checks are triggered by the thought or by something real, by timing how long the relief lasts before the urge returns, and by having him resist the restart once to see whether the anxiety subsides without it.",
      yieldAnchors: [
        "He checks gas, windows, and locks in a fixed order",
        "An interruption forces a full restart",
        "He is an hour late and has been written up",
      ],
      riskAnchors: [
        "The checking follows the doubt, not real danger",
        "Each relief is brief and quickly undone",
        "The doubt fades on its own when he checks once and resists",
      ],
      defeatedBy: [
        "A single check leaves him reassured and on time",
        "The checking tracks real hazards rather than the doubt",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that this is a checking compulsion running the classic OCD cycle, not careful safety habits: an intrusive doubt that something is unsafe spikes anxiety, completing the fixed sequence delivers a few seconds of relief, and that relief reinforces the doubt so it returns stronger and the routine must be restarted — a loop that now costs him an hour and his standing at work. This is a strong claim because it predicts checkable consequences: the checking should follow the doubt-thought rather than any real evidence of danger; each round of relief should be brief and undone within minutes; and the doubt should actually fade on its own if he leaves after a single check and lets the anxiety crest and fall. I would test it by tracking whether the checks are triggered by the thought or by something real, by timing how long the relief lasts before the urge returns, and by having him resist the restart once to see whether the anxiety subsides without it.",
    explanation:
      "Under the inverted standard, 'he's just being safe, nothing to interpret' earns near-zero; top credit reads the doubt-anxiety-check-relief-return cycle and names a resist-the-restart test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A teenager spends two hours arranging her books, pens, and clothes until each is 'exactly right.' A buzzing not-right feeling drives it; once everything aligns, she feels a brief calm before the feeling creeps back and she starts again. She has stopped inviting friends over and her grades are slipping. In one paragraph, propose the strongest conclusion about what the arranging is doing and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that the arranging is a 'just right' compulsion driving an OCD loop rather than a tidy preference: an intolerable not-right sensation spikes tension, aligning everything brings a moment of calm, and that brief relief reinforces the sensation so it returns and the arranging must begin again — a cycle that now costs her friendships and grades. This is a strong claim because it predicts checkable consequences: the arranging should follow the not-right feeling rather than any real disorder in the room; the calm should be short-lived and give way to the urge again; and the tension should ease on its own if she leaves things misaligned and tolerates the feeling. I would test it by noting whether the trigger is the sensation or actual mess, by timing how long the calm lasts before the urge returns, and by having her leave one set of items unaligned to see whether the not-right feeling fades without action.",
      yieldAnchors: [
        "She arranges for two hours until 'exactly right'",
        "A not-right feeling drives it and creeps back after calm",
        "She has stopped having friends over and her grades slip",
      ],
      riskAnchors: [
        "The arranging follows the not-right feeling, not real mess",
        "The calm is brief before the urge returns",
        "Tension eases on its own when she leaves things misaligned",
      ],
      defeatedBy: [
        "She arranges only an actually messy space and then stops",
        "Leaving items misaligned produces no rising tension",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that the arranging is a 'just right' compulsion driving an OCD loop rather than a tidy preference: an intolerable not-right sensation spikes tension, aligning everything brings a moment of calm, and that brief relief reinforces the sensation so it returns and the arranging must begin again — a cycle that now costs her friendships and grades. This is a strong claim because it predicts checkable consequences: the arranging should follow the not-right feeling rather than any real disorder in the room; the calm should be short-lived and give way to the urge again; and the tension should ease on its own if she leaves things misaligned and tolerates the feeling. I would test it by noting whether the trigger is the sensation or actual mess, by timing how long the calm lasts before the urge returns, and by having her leave one set of items unaligned to see whether the not-right feeling fades without action.",
    explanation:
      "The cautious 'she's just tidy, nothing underneath' earns near-zero; top credit reads the not-right-align-relief-return loop and names a leave-it-misaligned test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A man is gripped by intrusive thoughts that he might be 'secretly attracted' to people he finds the idea repellent about. The thought spikes panic; he mentally checks his body for any reaction and seeks reassurance online, which calms him briefly before the next thought restarts it. He has never acted on or wanted anything of the kind, and the checking now fills his day. In one paragraph, propose the strongest conclusion about what is happening and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that this is an OCD loop built on ego-dystonic intrusive thoughts — the opposite of a real desire — in which an unwanted, repellent thought spikes panic, mental 'checking' for a reaction and online reassurance bring brief relief, and that relief reinforces the fear so the next thought reignites it and the checking devours his day. This is a strong claim because it predicts checkable consequences: the thoughts should horrify rather than attract him; the checking and reassurance should follow the thought rather than any genuine wish or action; and the panic should subside on its own if he resists checking and lets the thought sit. I would test it by asking whether the content disgusts or appeals to him, by tracking whether the rituals follow the intrusion rather than any real urge, and by having him refrain from checking once to see whether the anxiety falls without it.",
      yieldAnchors: [
        "The intrusive thoughts are about something he finds repellent",
        "He mentally checks for a reaction and seeks reassurance",
        "He has never wanted or acted on anything of the kind",
      ],
      riskAnchors: [
        "The thoughts horrify rather than attract him",
        "The checking follows the thought, not a real wish",
        "Panic subsides on its own when he resists checking",
      ],
      defeatedBy: [
        "The thoughts are wanted or pleasurable rather than distressing",
        "There is a real urge or behavior, not just an intrusive thought",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that this is an OCD loop built on ego-dystonic intrusive thoughts — the opposite of a real desire — in which an unwanted, repellent thought spikes panic, mental 'checking' for a reaction and online reassurance bring brief relief, and that relief reinforces the fear so the next thought reignites it and the checking devours his day. This is a strong claim because it predicts checkable consequences: the thoughts should horrify rather than attract him; the checking and reassurance should follow the thought rather than any genuine wish or action; and the panic should subside on its own if he resists checking and lets the thought sit. I would test it by asking whether the content disgusts or appeals to him, by tracking whether the rituals follow the intrusion rather than any real urge, and by having him refrain from checking once to see whether the anxiety falls without it.",
    explanation:
      "The lurid 'the thought proves a hidden desire' is the overreach his horror and history defeat; top credit reads an ego-dystonic intrusion driving a checking loop and names a resist-the-check test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A woman keeps a running mental tally of whether she has 'caused harm' through small actions — a careless word, a door left open. A doubt spikes, she replays the event and apologizes or confesses to clear it, feels brief relief, then a new doubt restarts the cycle. Friends are puzzled by her constant apologies, and the replaying eats her evenings. In one paragraph, propose the strongest conclusion about what the confessing is doing and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that the confessing and apologizing are compulsions in an OCD loop, not conscientiousness: a doubt that she has caused harm spikes anxiety, replaying the event and confessing to 'clear' it brings brief relief, and that relief reinforces the doubt so a new one fires and the cycle repeats — puzzling her friends and consuming her evenings. This is a strong claim because it predicts checkable consequences: the confessing should follow the doubt rather than any real harm done; the relief from each apology should be short before the next doubt arrives; and the anxiety should settle on its own if she resists confessing and lets a doubt go unaddressed. I would test it by checking whether her confessions track actual wrongdoing or just the doubt, by timing how long the relief lasts before a new doubt comes, and by having her withhold an apology once to see whether the anxiety subsides without it.",
      yieldAnchors: [
        "She tallies whether she has caused harm through small actions",
        "She replays and confesses to clear each doubt",
        "Friends are puzzled and her evenings are consumed",
      ],
      riskAnchors: [
        "The confessing follows the doubt, not real harm",
        "Relief from each apology is brief before a new doubt",
        "Anxiety settles when she withholds an apology",
      ],
      defeatedBy: [
        "Her apologies track genuine wrongdoing she can name",
        "Withholding an apology brings lasting calm, not rising anxiety",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that the confessing and apologizing are compulsions in an OCD loop, not conscientiousness: a doubt that she has caused harm spikes anxiety, replaying the event and confessing to 'clear' it brings brief relief, and that relief reinforces the doubt so a new one fires and the cycle repeats — puzzling her friends and consuming her evenings. This is a strong claim because it predicts checkable consequences: the confessing should follow the doubt rather than any real harm done; the relief from each apology should be short before the next doubt arrives; and the anxiety should settle on its own if she resists confessing and lets a doubt go unaddressed. I would test it by checking whether her confessions track actual wrongdoing or just the doubt, by timing how long the relief lasts before a new doubt comes, and by having her withhold an apology once to see whether the anxiety subsides without it.",
    explanation:
      "The dodge 'she's just very conscientious' earns near-zero; top credit reads confessing as a compulsion in the doubt-relief-return loop and names a withhold-the-apology test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A man showers for ninety minutes in a fixed sequence, certain that any deviation leaves him 'contaminated.' A contamination thought spikes dread, the long sequence settles it briefly, and if he loses his place he starts over from the beginning. His skin is raw, he is late to work, and he avoids public spaces entirely. In one paragraph, propose the strongest conclusion about what the shower ritual is doing and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that the ninety-minute shower is a washing compulsion driving an OCD loop, not thorough hygiene: a contamination thought spikes dread, the fixed sequence delivers brief relief, and that relief reinforces the fear so any deviation reignites it and he must start over — at the cost of raw skin, lateness, and withdrawal from public life. This is a strong claim because it predicts checkable consequences: the showering should follow the contamination thought rather than any real dirt; the relief should be brief and undone by the next 'contaminated' contact; and the dread should fall on its own if he shortens the shower or breaks the sequence and tolerates the feeling. I would test it by checking whether the ritual is triggered by the thought or by genuine soiling, by timing how long the relief lasts, and by having him cut the sequence short once to see whether the dread subsides without completing it.",
      yieldAnchors: [
        "He showers ninety minutes in a fixed sequence",
        "Losing his place forces a full restart",
        "His skin is raw, he is late, and he avoids public spaces",
      ],
      riskAnchors: [
        "The showering follows the contamination thought, not real dirt",
        "Relief is brief before the next contact reignites it",
        "Dread falls on its own if he breaks the sequence",
      ],
      defeatedBy: [
        "He washes only when genuinely soiled and then stops",
        "Breaking the sequence brings no rise in dread",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that the ninety-minute shower is a washing compulsion driving an OCD loop, not thorough hygiene: a contamination thought spikes dread, the fixed sequence delivers brief relief, and that relief reinforces the fear so any deviation reignites it and he must start over — at the cost of raw skin, lateness, and withdrawal from public life. This is a strong claim because it predicts checkable consequences: the showering should follow the contamination thought rather than any real dirt; the relief should be brief and undone by the next 'contaminated' contact; and the dread should fall on its own if he shortens the shower or breaks the sequence and tolerates the feeling. I would test it by checking whether the ritual is triggered by the thought or by genuine soiling, by timing how long the relief lasts, and by having him cut the sequence short once to see whether the dread subsides without completing it.",
    explanation:
      "The cautious 'he just likes to be very clean' earns near-zero; top credit reads a contamination-driven washing loop and names a break-the-sequence test that could refute it.",
  },
];

export const section: SectionContent = {
  slug: "understanding-ocd-the-cycle",
  title: "Understanding OCD: Obsessions, Compulsions, and the Cycle",
  weekNumber: 1,
  blurb:
    "OCD runs as a self-reinforcing loop: an intrusive thought spikes anxiety, a ritual brings brief relief, and that relief quietly teaches the fear to come back stronger. This section is about reading that cycle from the evidence — and telling a genuine OCD loop apart from an ordinary habit by its triggers, its short-lived relief, and its cost.",
  lectureTitle:
    "1.1 Understanding OCD: obsessions, compulsions, and the cycle",
  body: `# Understanding OCD: Obsessions, Compulsions, and the Cycle

Obsessive-compulsive disorder is easiest to understand not as a list of strange behaviors but as a loop that feeds itself. An unwanted thought arrives, it brings a spike of anxiety or doubt, the person does something to make the feeling go away, the feeling does go away — for a moment — and that moment of relief is exactly what teaches the loop to run again. Once you can see the cycle, the behaviors that looked baffling start to make sense: the person isn't choosing the ritual freely, they're caught in a circuit where each turn deepens the groove.

## The intrusive obsession

It starts with a thought, image, or urge that shows up uninvited and feels wrong — "the stove is on," "my hands are contaminated," "I might harm someone," "something bad will happen if this isn't even." Everybody has odd, intrusive thoughts; the difference in OCD is not that the thoughts are stranger but that they stick, alarm, and demand a response. Crucially, these thoughts are usually the opposite of what the person wants — a gentle parent horrified by an image of harm is showing how foreign the thought is, not how secret a wish is.

## The spike of anxiety and doubt

The obsession lands and the body answers: a surge of anxiety, dread, or a maddening sense of not-rightness. This is the fuel of the whole cycle. The feeling is genuinely uncomfortable and it carries a false promise — that the discomfort means something is truly wrong and must be fixed right now. Doubt is the engine's particular flavor in OCD: not "I forgot" but "I can't be sure," a certainty that no amount of checking ever quite satisfies.

## The compulsion or ritual

To quiet the spike, the person does something: checks, washes, counts, arranges, repeats a phrase, seeks reassurance, avoids the trigger entirely. The ritual can be visible (returning to the stove ten times) or entirely mental (silently cancelling a bad thought). Whatever its form, its job is the same — to make the unbearable feeling drop. And it works, which is exactly the problem.

## The short relief — and the trap inside it

The ritual brings relief, but only briefly. That relief feels like proof the danger was real and the ritual saved the day, so the brain files the lesson away: when that thought comes, do that thing. The next time the obsession appears, the urge to ritualize is a little stronger, the doubt a little quicker to return. The relief is the hook. This is why telling someone "just stop" doesn't work — the cycle is reinforced by its own success at killing anxiety in the short term.

## Reinforcement that strengthens the loop

Over weeks and months, each turn of the cycle wears the groove deeper. The rituals grow longer and more elaborate, new triggers get pulled in, and avoidance spreads to cover anything that might set off the thought. What began as one quick check becomes an hour; what began as washing after the bathroom becomes refusing to touch doorknobs. The loop doesn't stay the same size — left alone, it grows.

## Telling a loop from an ordinary habit

Not every routine is OCD, and the course's whole skill is distinguishing them. Three things mark a genuine loop. First, trigger-specificity: the behavior follows a particular intrusive thought or feeling rather than a real-world cue — washing because of a contamination thought, not because hands are visibly dirty. Second, the relief-then-return pattern: the calm is brief and the urge comes back, often stronger, so the person can never get "enough." Third, the cost: the loop eats time, hurts the body, strains relationships, or wrecks work, and the person keeps going anyway. A tidy person who feels nothing if the desk is messy is not in a loop; a person who must align the desk to quiet a dread that always creeps back, at the cost of their morning, is.

## Reading the meaning — and naming a test

It is not enough to say "that looks like OCD." A strong reading commits to the structure of the loop — names the obsession, the spike, the ritual, and the reinforcing relief — and then names the cheap observations that could prove it wrong. "The checking follows the doubt, not real evidence; the relief is brief; and the anxiety will fall on its own if he checks once and resists the rest" is a real claim, because each clause is checkable. The weak move stops at "he checks a lot" (which explains nothing) or retreats into "rituals are random, who can say" (which gives up before looking). The worst move is the lurid overreach the evidence defeats — reading a horrified intrusive thought as a hidden wish. The strongest reading binds the evidence in front of you and spells out the single observation that would refute it.

## In the real world

Suppose a friend can't leave the house until she's checked the locks again and again, and shrugs that she's "just careful." The dodge is to agree — it sounds reasonable, but it explains nothing and points nowhere. A clear-eyed move commits to the loop: a doubt spikes, the check relieves it for seconds, the relief feeds the doubt, and she can never be sure enough — which is why one check never settles it and she's late and exhausted. Notice how much that opens up. It predicts the checking follows the doubt rather than any real reason; that each relief is undone within moments; and that the doubt would fade on its own if she checked once and let the anxiety crest and fall. Three cheap checks, each able to refute the idea. That is what reading the cycle buys you — not a shrug at how strange the behavior is, but a testable account of the loop, and the first foothold for breaking it.`,
  homework: {
    mcq,
    hybrid,
    written,
  },
};
