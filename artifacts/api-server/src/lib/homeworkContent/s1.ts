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
      "A man says he desperately wants a new job, but he has arrived late to every single job interview this past year — even though he is reliably on time for work, friends, and the dentist. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He's simply a disorganized, careless person, and there's nothing beneath the surface to read into.",
        credit: 0,
      },
      {
        text: "The lateness likely serves an out-of-awareness purpose — giving him a reason other than himself for a rejection he fears, so being turned down feels like bad timing rather than not being good enough; test whether the lateness shows up only for things he badly wants, whether he quietly downplays each interview right after missing it, and whether the pattern eases once he can name the fear of being judged on his merits.",
        credit: 1.0,
      },
      {
        text: "It's probably about some hidden fear of being judged; we could keep talking about it.",
        credit: 0.6,
      },
      {
        text: "He seems to have trouble getting to interviews on time.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The lateness likely serves an out-of-awareness purpose — giving him a reason other than himself for a rejection he fears, so being turned down feels like bad timing rather than not being good enough; test whether the lateness shows up only for things he badly wants, whether he quietly downplays each interview right after missing it, and whether the pattern eases once he can name the fear of being judged on his merits.",
    explanation:
      "Top credit reads a hidden function out of a pattern that holds only where rejection is possible and names three disconfirming checks; 'just disorganized' is the overreach his reliable punctuality everywhere else defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A woman gets a tight, churning stomachache every Sunday evening. She has no symptoms during the week or on Saturdays, and the one detail she mentions in passing is that Sunday is the night she calls her mother. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She probably has some stomach issue on Sundays.",
        credit: 0.3,
      },
      {
        text: "The stomachache likely carries a meaning her words don't — it tracks the dread of a call she feels obligated to make but finds upsetting, so the body voices a conflict she hasn't let herself name; test whether the symptom is absent on Sundays she skips the call, whether it eases when the call goes unusually well, and whether naming what she fears about her mother loosens its grip.",
        credit: 1.0,
      },
      {
        text: "Bodies are mysterious and stomach pain can come from anything, so there's nothing here to interpret.",
        credit: 0,
      },
      {
        text: "It's probably connected to her mother somehow; we could look into it more.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The stomachache likely carries a meaning her words don't — it tracks the dread of a call she feels obligated to make but finds upsetting, so the body voices a conflict she hasn't let herself name; test whether the symptom is absent on Sundays she skips the call, whether it eases when the call goes unusually well, and whether naming what she fears about her mother loosens its grip.",
    explanation:
      "Full credit reads a symptom that tracks one specific event as meaningful and names a skip-the-call test that could refute it; 'pain can come from anything' is the refusal the tight Sunday-only timing defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "Asked how he feels about his upcoming divorce hearing, a patient says flatly, 'I'm completely fine with it, totally at peace' — while his knee bounces, his hands grip the armrests, and his voice tightens. Which conclusion best follows?",
    mcOptions: [
      {
        text: "People say one thing and do another all the time, so the mismatch tells us nothing worth pursuing.",
        credit: 0,
      },
      {
        text: "His body likely registers a distress his words are smoothing over, so the strongest reading attends to what he shows rather than only what he says; test whether his calm wording cracks when the hearing is described in detail, whether the physical agitation eases as he admits any worry, and whether he changes the subject quickly after declaring he's fine.",
        credit: 1.0,
      },
      {
        text: "He seems a little tense while saying he's fine.",
        credit: 0.3,
      },
      {
        text: "He's probably more upset than he's letting on; we could ask him about it.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "His body likely registers a distress his words are smoothing over, so the strongest reading attends to what he shows rather than only what he says; test whether his calm wording cracks when the hearing is described in detail, whether the physical agitation eases as he admits any worry, and whether he changes the subject quickly after declaring he's fine.",
    explanation:
      "Top credit treats the gap between calm words and an agitated body as the real signal and names a detail-the-hearing test; 'people do that all the time, it tells us nothing' is the dodge the specific contradiction defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A man scrubs and reorganizes his entire apartment — but only in the days before a big work deadline. When there is no deadline, the place stays messy and he never feels the urge. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He probably just likes a clean space when he's stressed; we could explore that.",
        credit: 0.6,
      },
      {
        text: "The cleaning likely isn't pointless but serves a function — it lets him feel busy and in control while avoiding the deadline that actually frightens him; test whether the urge appears only when a real deadline looms, whether he feels relief but also falls further behind after cleaning, and whether the urge fades once he starts the dreaded task itself.",
        credit: 1.0,
      },
      {
        text: "He seems to clean a lot before deadlines.",
        credit: 0.3,
      },
      {
        text: "Some people are neat and some aren't; there's nothing to understand about when he cleans.",
        credit: 0,
      },
    ],
    correctAnswer:
      "The cleaning likely isn't pointless but serves a function — it lets him feel busy and in control while avoiding the deadline that actually frightens him; test whether the urge appears only when a real deadline looms, whether he feels relief but also falls further behind after cleaning, and whether the urge fades once he starts the dreaded task itself.",
    explanation:
      "Full credit reads a 'pointless' habit as serving avoidance and names a does-the-urge-fade-once-he-starts test; 'some people are just neat' is the dodge the deadline-only timing defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A woman says she longs for a kind, steady partner, yet over ten years she has chosen, one after another, partners who belittle her — and she loses interest in the gentle ones who treat her well. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The choices likely follow an out-of-awareness template in which harsh treatment feels like familiar love while kindness feels foreign or 'boring,' so she is drawn back to what she knows rather than what she wants; test whether the kind partners she dropped were described as dull rather than disliked, whether the belittling ones resemble an early caregiver, and whether she can stay engaged with a kind partner once the pattern is named.",
        credit: 1.0,
      },
      {
        text: "She's probably repeating something from her past; we could talk about her exes.",
        credit: 0.6,
      },
      {
        text: "She seems to keep picking the wrong people.",
        credit: 0.3,
      },
      {
        text: "Attraction is random and inexplicable, so there's no pattern worth studying in who she dates.",
        credit: 0,
      },
    ],
    correctAnswer:
      "The choices likely follow an out-of-awareness template in which harsh treatment feels like familiar love while kindness feels foreign or 'boring,' so she is drawn back to what she knows rather than what she wants; test whether the kind partners she dropped were described as dull rather than disliked, whether the belittling ones resemble an early caregiver, and whether she can stay engaged with a kind partner once the pattern is named.",
    explanation:
      "Top credit names a familiarity template binding a ten-year repetition and a was-kindness-called-boring test; 'attraction is random' is the refusal the consistent, against-her-stated-wish pattern defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A thirteen-year-old gets crushing headaches every school morning. On weekends, holidays, and the entire summer the headaches vanish, and every medical test comes back normal. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The mind and body are too tangled to ever say why a kid gets headaches, so we shouldn't read anything into the timing.",
        credit: 0,
      },
      {
        text: "He seems to get headaches on school days.",
        credit: 0.3,
      },
      {
        text: "The headache likely expresses something about school that he can't yet put into words — the body carrying a distress (fear, dread, or pressure) that has no other outlet; test whether the headaches stay gone on a long break and return the first school morning, whether they cluster around a specific class or social situation, and whether they ease as he can name what he dreads at school.",
        credit: 1.0,
      },
      {
        text: "It probably has to do with school stress; we could keep an eye on it.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The headache likely expresses something about school that he can't yet put into words — the body carrying a distress (fear, dread, or pressure) that has no other outlet; test whether the headaches stay gone on a long break and return the first school morning, whether they cluster around a specific class or social situation, and whether they ease as he can name what he dreads at school.",
    explanation:
      "Full credit reads a symptom that tracks school days as meaningful and names a return-the-first-school-morning test; 'too tangled to ever say' is the dodge the clean school-only timing and normal tests defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "Whenever a group of friends goes out, one man 'forgets' his wallet — but, examined over a year, it happens only on the evenings it would have been his turn to pay, never when someone else is covering. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Everyone forgets their wallet sometimes; reading meaning into an honest mistake is overthinking it.",
        credit: 0,
      },
      {
        text: "The 'forgetting' is probably not random but patterned — it spares him a cost he resents while letting him feel it was an accident rather than a choice; test whether the lapses really cluster only on his turns to pay, whether he reacts with relief rather than embarrassment, and whether the pattern stops once the unfairness he feels about money is talked through.",
        credit: 1.0,
      },
      {
        text: "He's probably avoiding paying without realizing it; we could watch and see.",
        credit: 0.6,
      },
      {
        text: "He seems forgetful about his wallet.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The 'forgetting' is probably not random but patterned — it spares him a cost he resents while letting him feel it was an accident rather than a choice; test whether the lapses really cluster only on his turns to pay, whether he reacts with relief rather than embarrassment, and whether the pattern stops once the unfairness he feels about money is talked through.",
    explanation:
      "Top credit reads a slip that lands only on his turns as serving a hidden function and names a relief-vs-embarrassment test; 'everyone forgets sometimes' is the dodge the perfectly timed pattern defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A woman insists she is 'genuinely thrilled' her younger sister just got engaged. Then she misreads the party date, double-books herself, and ends up missing the celebration — the only family event she has skipped in years. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She seems to have missed the party by mistake.",
        credit: 0.3,
      },
      {
        text: "Scheduling slips happen; there's no reason to connect an honest mix-up to her feelings about her sister.",
        credit: 0,
      },
      {
        text: "The 'accident' likely expresses a mixed feeling her words deny — alongside real gladness, an envy or hurt she can't admit, which her actions enact for her; test whether such slips cluster around her sister's milestones specifically, whether she's quick to insist she isn't jealous before anyone asks, and whether the slips ease once any rivalry is openly acknowledged.",
        credit: 1.0,
      },
      {
        text: "She might have complicated feelings about her sister; we could ask her.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The 'accident' likely expresses a mixed feeling her words deny — alongside real gladness, an envy or hurt she can't admit, which her actions enact for her; test whether such slips cluster around her sister's milestones specifically, whether she's quick to insist she isn't jealous before anyone asks, and whether the slips ease once any rivalry is openly acknowledged.",
    explanation:
      "Full credit reads a one-off, out-of-character miss against insistent words as enacting a denied feeling and names a milestone-clustering test; 'mix-ups happen' is the dodge the contradiction between thrilled words and the only-skipped-event defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "Every time the conversation drifts toward his childhood, a patient suddenly checks his phone, cracks a joke, or asks the therapist a question about her weekend — smoothly steering away each time, though he is talkative about everything else. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Some people just don't like talking about the past; there's nothing to make of it.",
        credit: 0,
      },
      {
        text: "He probably finds childhood uncomfortable; we could gently revisit it later.",
        credit: 0.6,
      },
      {
        text: "The reliable swerve likely marks the childhood material as charged — the very effort to avoid it points to where the meaning is, so the avoidance is itself a clue; test whether the deflections happen only around that topic and not others, whether his manner tightens just before he changes course, and whether staying with the topic a moment longer brings up something painful he's been steering past.",
        credit: 1.0,
      },
      {
        text: "He seems to change the subject when childhood comes up.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The reliable swerve likely marks the childhood material as charged — the very effort to avoid it points to where the meaning is, so the avoidance is itself a clue; test whether the deflections happen only around that topic and not others, whether his manner tightens just before he changes course, and whether staying with the topic a moment longer brings up something painful he's been steering past.",
    explanation:
      "Top credit reads the avoidance itself as a signpost to meaning and names a topic-specificity test; 'some people just don't like the past' is the dodge the reliable, topic-locked swerve in an otherwise talkative man defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A man recites a long list of ailments and grievances each session, but brightens whenever the therapist leans in with concern, and looks deflated whenever a complaint is actually solved. At home, his family rallies around him only when he is suffering. Which conclusion best follows?",
    mcOptions: [
      {
        text: "His complaints likely serve a hidden function beyond the problems themselves — they reliably draw the care and attention he doesn't know how to ask for directly, so being better would cost him that closeness; test whether his mood lifts with concern but sags when a problem is fixed, whether new complaints appear as old ones resolve, and whether he can hold the care once he asks for connection openly.",
        credit: 1.0,
      },
      {
        text: "He's probably getting something out of complaining; we could look at that.",
        credit: 0.6,
      },
      {
        text: "He seems to complain a lot.",
        credit: 0.3,
      },
      {
        text: "Some people are just negative by nature, so there's no deeper function to his complaining.",
        credit: 0,
      },
    ],
    correctAnswer:
      "His complaints likely serve a hidden function beyond the problems themselves — they reliably draw the care and attention he doesn't know how to ask for directly, so being better would cost him that closeness; test whether his mood lifts with concern but sags when a problem is fixed, whether new complaints appear as old ones resolve, and whether he can hold the care once he asks for connection openly.",
    explanation:
      "Full credit reads complaining as serving a connection-seeking function and names a brightens-with-concern-but-sags-when-solved test; 'just negative by nature' is the dodge the deflation-at-solutions pattern defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A five-year-old who was fully toilet-trained for a year suddenly starts wetting the bed again — and the relapse began the same week his baby sister came home from the hospital. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Kids regress for no reason all the time, so the timing with the new baby is just coincidence.",
        credit: 0,
      },
      {
        text: "It's probably about the new sibling; we could give it time.",
        credit: 0.6,
      },
      {
        text: "The bedwetting likely carries a meaning he can't say — a bid to reclaim the babying and attention the newborn now receives, expressed through behavior because he lacks the words; test whether the relapse tracks moments the baby gets the most attention, whether other 'little' behaviors return alongside it, and whether it fades as he's given special time and helped to voice feeling displaced.",
        credit: 1.0,
      },
      {
        text: "He seems to have started wetting the bed again.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The bedwetting likely carries a meaning he can't say — a bid to reclaim the babying and attention the newborn now receives, expressed through behavior because he lacks the words; test whether the relapse tracks moments the baby gets the most attention, whether other 'little' behaviors return alongside it, and whether it fades as he's given special time and helped to voice feeling displaced.",
    explanation:
      "Top credit reads a symptom that tracks the sibling's arrival as a meaningful bid for attention and names a tracks-the-baby's-attention test; 'kids regress for no reason' is the dodge the exact timing defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A talented designer redrafts every project endlessly, always finding one more flaw to fix, and as a result almost never submits anything — repeatedly missing chances she says she wants. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She seems like a perfectionist.",
        credit: 0.3,
      },
      {
        text: "The endless polishing likely serves a function beyond quality — as long as the work is 'not finished,' it can never be judged and found wanting, so perfectionism shields her from a feared verdict; test whether the redrafting intensifies precisely as a deadline or audience nears, whether she feels dread rather than pride at the point of submitting, and whether she can let work go once the fear of being judged is addressed.",
        credit: 1.0,
      },
      {
        text: "Some people are wired to be perfectionists, so there's nothing underneath it to understand.",
        credit: 0,
      },
      {
        text: "She's probably afraid of being judged; we could talk about her standards.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The endless polishing likely serves a function beyond quality — as long as the work is 'not finished,' it can never be judged and found wanting, so perfectionism shields her from a feared verdict; test whether the redrafting intensifies precisely as a deadline or audience nears, whether she feels dread rather than pride at the point of submitting, and whether she can let work go once the fear of being judged is addressed.",
    explanation:
      "Full credit reads perfectionism as serving avoidance of judgment and names an intensifies-as-the-deadline-nears test; 'just wired that way' is the dodge the self-defeating, against-her-wishes pattern defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "While describing the night her father walked out when she was eight — a memory she calls 'no big deal' — a woman smiles and even chuckles, though her eyes well up at the same moment. Which conclusion best follows?",
    mcOptions: [
      {
        text: "People react to memories in odd ways; the smile while tearing up doesn't tell us anything in particular.",
        credit: 0,
      },
      {
        text: "The mismatch between her light words and her welling eyes likely marks a grief she has learned to wave off, so the feeling leaks out even as she minimizes it; test whether the tears come specifically at the abandonment detail, whether her 'no big deal' framing softens when the sadness is named, and whether other losses get the same smile-it-away treatment.",
        credit: 1.0,
      },
      {
        text: "She seems to have mixed reactions to the memory.",
        credit: 0.3,
      },
      {
        text: "There may be more feeling there than she admits; we could revisit it.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The mismatch between her light words and her welling eyes likely marks a grief she has learned to wave off, so the feeling leaks out even as she minimizes it; test whether the tears come specifically at the abandonment detail, whether her 'no big deal' framing softens when the sadness is named, and whether other losses get the same smile-it-away treatment.",
    explanation:
      "Top credit treats the gap between minimizing words and welling eyes as the real signal and names a tears-at-the-abandonment-detail test; 'people react in odd ways' is the dodge the precise affect-content mismatch defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A capable man has, four times now, quit a job abruptly within days of being told a promotion was coming — each time citing a different, plausible-sounding reason. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He probably has some issue with success; we could explore his job history.",
        credit: 0.6,
      },
      {
        text: "Sometimes people just change jobs; four different reasons means four separate decisions, nothing more.",
        credit: 0,
      },
      {
        text: "He seems to leave jobs around promotion time.",
        credit: 0.3,
      },
      {
        text: "The repetition likely reveals an out-of-awareness conflict about rising — perhaps a fear of the exposure, expectation, or rivalry that success brings — that he resolves by leaving before he can be elevated, then explains away; test whether the exits really cluster at the moment of advancement and not at random, whether he feels relief rather than regret afterward, and whether the urge to flee softens once the fear behind it is named.",
        credit: 1.0,
      },
    ],
    correctAnswer:
      "The repetition likely reveals an out-of-awareness conflict about rising — perhaps a fear of the exposure, expectation, or rivalry that success brings — that he resolves by leaving before he can be elevated, then explains away; test whether the exits really cluster at the moment of advancement and not at random, whether he feels relief rather than regret afterward, and whether the urge to flee softens once the fear behind it is named.",
    explanation:
      "Full credit reads four differently-explained exits at the same threshold as one patterned conflict and names a clusters-at-advancement test; 'four separate decisions, nothing more' is the dodge the identical timing defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A woman says learning the piano is her great passion and she'd give anything for it — yet for three years she has 'never found the time,' even though she spends long evenings scrolling her phone and the rented keyboard sits untouched. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She seems too busy to practice.",
        credit: 0.3,
      },
      {
        text: "Everyone's busy and hobbies fall away; there's nothing to interpret in skipping piano.",
        credit: 0,
      },
      {
        text: "The gap between her stated passion and her untouched keyboard likely points to a hidden function in not starting — keeping the dream untested protects it (and her) from the risk of being mediocre at the thing she most prizes; test whether she avoids practice most when she has clear free time, whether she feels anxiety rather than mere indifference near the keyboard, and whether she can begin once the fear of not being good is named.",
        credit: 1.0,
      },
      {
        text: "She probably has mixed feelings about starting; we could talk it over.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The gap between her stated passion and her untouched keyboard likely points to a hidden function in not starting — keeping the dream untested protects it (and her) from the risk of being mediocre at the thing she most prizes; test whether she avoids practice most when she has clear free time, whether she feels anxiety rather than mere indifference near the keyboard, and whether she can begin once the fear of not being good is named.",
    explanation:
      "Top credit reads 'no time' against hours of scrolling as a protective avoidance and names an avoids-most-when-free test; 'everyone's busy' is the dodge the available-but-unused time defeats.",
  },
];

const hybrid: HomeworkItem[] = [
  {
    itemType: "hybrid",
    prompt:
      "A man is punctual for work, dates, and his commute, but has arrived ten minutes late to every therapy session for two months. He apologizes warmly each time and seems puzzled by it himself. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He seems to run late for therapy.",
        credit: 0.3,
      },
      {
        text: "The lateness — specific to therapy while he's punctual everywhere else — likely carries a meaning about the session itself, perhaps a wish to limit how much it can reach him by shaving time off each one; test whether the lateness eases when sessions feel safe and worsens before hard topics, whether he's relieved to have 'less time,' and whether naming the wish to keep therapy at arm's length changes the pattern.",
        credit: 1.0,
      },
      {
        text: "Lateness is just a habit some people have; reading meaning into a few late arrivals is overthinking.",
        credit: 0,
      },
      {
        text: "It's probably about something to do with therapy; we could keep noticing it.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'lateness is specific to therapy' lead from the rival 'he's simply a chronically late person,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: check his punctuality across his other commitments — work, dates, the commute — since lateness that appears only for therapy points to a meaning about the session rather than a general trait. My lead is refuted if he turns out to run late for everything equally, which would make it a habit rather than a signal about therapy.",
      yieldAnchors: [
        "He is punctual everywhere except therapy",
        "He has been late to every session for two months",
        "He is puzzled by his own lateness",
      ],
      riskAnchors: [
        "The lateness eases when sessions feel safe",
        "It worsens right before difficult topics",
        "Naming the wish to keep therapy at arm's length changes it",
      ],
      defeatedBy: [
        "He is late for every appointment in his life",
        "The lateness has no relation to what happens in session",
      ],
    },
    correctAnswer:
      "The lateness — specific to therapy while he's punctual everywhere else — likely carries a meaning about the session itself, perhaps a wish to limit how much it can reach him by shaving time off each one; test whether the lateness eases when sessions feel safe and worsens before hard topics, whether he's relieved to have 'less time,' and whether naming the wish to keep therapy at arm's length changes the pattern.",
    explanation:
      "Full credit reads therapy-specific lateness as meaningful and is paired with a check-his-other-commitments test that names its own refutation; 'lateness is just a habit' is the dodge his punctuality everywhere else defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A woman's migraines began the same month her father was diagnosed with a serious illness. She says the two are unrelated — 'I'm handling Dad's news fine' — yet the headaches spike on the days she visits him in the hospital. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Migraines have medical causes, so tying them to her father's illness is reading too much in.",
        credit: 0,
      },
      {
        text: "She probably has some stress around her father; we could keep track of the headaches.",
        credit: 0.6,
      },
      {
        text: "The migraines likely voice a distress about her father's illness that her words deny, with the body carrying what she insists she's 'handling fine'; test whether the headaches spike specifically on visit days, whether they ease on days she lets herself feel the fear, and whether they began at no other life change but this one.",
        credit: 1.0,
      },
      {
        text: "She seems to get migraines lately.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'the headaches track distress about her father' lead from the rival 'this is an ordinary medical migraine pattern,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: compare headache frequency on hospital-visit days against matched ordinary days — a clean spike tied to seeing her father points to meaning rather than a random medical pattern. My lead is refuted if the migraines are spread evenly across all days regardless of whether she visits, which would fit a purely physical cause.",
      yieldAnchors: [
        "The migraines began the month of the diagnosis",
        "They spike on hospital-visit days",
        "She insists she is handling the news fine",
      ],
      riskAnchors: [
        "Headaches cluster on visit days specifically",
        "They ease when she lets herself feel the fear",
        "They began at no other life change but this one",
      ],
      defeatedBy: [
        "The migraines occur evenly regardless of visits",
        "They predate her father's diagnosis",
      ],
    },
    correctAnswer:
      "The migraines likely voice a distress about her father's illness that her words deny, with the body carrying what she insists she's 'handling fine'; test whether the headaches spike specifically on visit days, whether they ease on days she lets herself feel the fear, and whether they began at no other life change but this one.",
    explanation:
      "Top credit reads a symptom that tracks the father's illness as meaningful and is paired with a visit-days-vs-ordinary-days test that names its refutation; 'migraines are medical' is the dodge the visit-day spikes and exact onset defeat.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A man tells everyone he loves his job and feels lucky to have it. Yet he calls in sick almost every Monday, dreads Sunday nights, and lights up only when describing his weekends. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Lots of people dislike Mondays; there's nothing to interpret in a few sick days.",
        credit: 0,
      },
      {
        text: "His Monday absences and Sunday dread likely tell the truth his words won't — that he's unhappy at work in a way he can't admit, so his behavior says what he can't; test whether the sick days cluster on work days and not weekends, whether his mood reliably drops as the work week nears, and whether his stated love of the job softens once the dread is taken seriously.",
        credit: 1.0,
      },
      {
        text: "He seems to miss a lot of Mondays.",
        credit: 0.3,
      },
      {
        text: "He might not like work as much as he says; we could ask him.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'his behavior reveals hidden unhappiness at work' lead from the rival 'he genuinely loves the job and just has bad luck with illness,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: check whether the sick days fall specifically on work days while weekends stay symptom-free — illness that politely avoids his days off points to dread rather than a virus. My lead is refuted if his absences are scattered across weekends and weekdays alike with genuine documented illness, which would fit real bad luck rather than hidden unhappiness.",
      yieldAnchors: [
        "He says he loves his job",
        "He calls in sick almost every Monday",
        "He dreads Sunday nights and lights up about weekends",
      ],
      riskAnchors: [
        "Sick days cluster on work days, not weekends",
        "His mood drops as the work week nears",
        "His stated love of the job softens when dread is named",
      ],
      defeatedBy: [
        "His absences are random and medically verified",
        "He feels just as low on weekends as on Mondays",
      ],
    },
    correctAnswer:
      "His Monday absences and Sunday dread likely tell the truth his words won't — that he's unhappy at work in a way he can't admit, so his behavior says what he can't; test whether the sick days cluster on work days and not weekends, whether his mood reliably drops as the work week nears, and whether his stated love of the job softens once the dread is taken seriously.",
    explanation:
      "Full credit reads the gap between loving-words and Monday-avoidance as the real signal and is paired with a work-days-vs-weekends test that names its refutation; 'lots of people dislike Mondays' is the dodge the reliable Sunday dread defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "Over two years, a woman has 'lost' or broken nearly every gift her partner has given her — a scarf, a bracelet, a framed photo — while keeping her own possessions carefully. She feels terrible each time and calls herself clumsy. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She probably has some unspoken feeling about the gifts; we could look into it.",
        credit: 0.6,
      },
      {
        text: "People lose things; calling a string of accidents meaningful is reading tea leaves.",
        credit: 0,
      },
      {
        text: "The pattern — careful with her own things, careless only with his gifts — likely enacts a mixed feeling about the relationship or about receiving, something she can't say so her actions perform it; test whether the 'accidents' really spare her own belongings, whether they cluster after tension with her partner, and whether they stop once any ambivalence about him or about being given to is voiced.",
        credit: 1.0,
      },
      {
        text: "She seems to keep losing his gifts.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'the losses enact a mixed feeling toward the gifts' lead from the rival 'she is simply a clumsy, forgetful person,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: compare how she treats his gifts versus her own equally fragile, valued possessions — damage that lands only on his gifts while hers survive points to meaning, not general clumsiness. My lead is refuted if she loses and breaks her own things just as often, which would make it ordinary carelessness rather than a signal about the relationship.",
      yieldAnchors: [
        "She has lost or broken nearly every gift from her partner",
        "She keeps her own possessions carefully",
        "She feels terrible and calls herself clumsy",
      ],
      riskAnchors: [
        "The 'accidents' spare her own belongings",
        "They cluster after tension with her partner",
        "They stop once ambivalence about him is voiced",
      ],
      defeatedBy: [
        "She loses her own valued things just as often",
        "The losses are unrelated to the state of the relationship",
      ],
    },
    correctAnswer:
      "The pattern — careful with her own things, careless only with his gifts — likely enacts a mixed feeling about the relationship or about receiving, something she can't say so her actions perform it; test whether the 'accidents' really spare her own belongings, whether they cluster after tension with her partner, and whether they stop once any ambivalence about him or about being given to is voiced.",
    explanation:
      "Top credit reads selectively-damaged gifts as enacting ambivalence and is paired with a his-gifts-vs-her-own test that names its refutation; 'people lose things' is the dodge the her-things-survive selectivity defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A woman says she wants a close, lasting relationship more than anything. Yet each time a partner becomes warm and committed, she picks a sharp fight over something minor and pulls away — a sequence that has ended four promising relationships. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The fights — timed to moments of growing closeness — likely serve a function she doesn't intend: creating distance when intimacy starts to feel threatening, so she controls the leaving before she can be hurt; test whether the conflicts reliably erupt right as things deepen rather than randomly, whether the 'minor' triggers are pretexts she can barely recall later, and whether she can tolerate closeness once the fear under it is named.",
        credit: 1.0,
      },
      {
        text: "She seems to fight with her partners.",
        credit: 0.3,
      },
      {
        text: "Relationships are complicated and end for all sorts of reasons, so there's no pattern to read here.",
        credit: 0,
      },
      {
        text: "She might be scared of closeness; we could talk about her relationships.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'the fights create distance when intimacy threatens' lead from the rival 'her partners simply happened to become difficult,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: map the timing of each blow-up against the relationship's trajectory — fights that erupt precisely as warmth and commitment grow point to intimacy-driven distancing rather than genuine partner problems. My lead is refuted if the conflicts arise at random points or clearly track real misconduct by her partners rather than moments of closeness.",
      yieldAnchors: [
        "She says she wants lasting closeness most of all",
        "She picks fights just as partners become warm and committed",
        "The sequence has ended four promising relationships",
      ],
      riskAnchors: [
        "Conflicts erupt as things deepen, not randomly",
        "The triggers are minor pretexts she barely recalls",
        "She tolerates closeness once the fear is named",
      ],
      defeatedBy: [
        "The fights occur at random relationship stages",
        "Her partners genuinely behaved badly each time",
      ],
    },
    correctAnswer:
      "The fights — timed to moments of growing closeness — likely serve a function she doesn't intend: creating distance when intimacy starts to feel threatening, so she controls the leaving before she can be hurt; test whether the conflicts reliably erupt right as things deepen rather than randomly, whether the 'minor' triggers are pretexts she can barely recall later, and whether she can tolerate closeness once the fear under it is named.",
    explanation:
      "Full credit reads closeness-timed fights as serving distance and is paired with a map-the-timing test that names its refutation; 'relationships end for all sorts of reasons' is the dodge the four-times-at-the-same-moment pattern defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "Whenever a charged topic comes up, a patient quietly begins lining up the pens on the table, straightening the tissue box, and smoothing his sleeves — small tidying that appears only at those moments and stops once the topic passes. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He seems fidgety when certain things come up.",
        credit: 0.3,
      },
      {
        text: "Fidgeting is just a nervous habit; there's nothing to read into a bit of tidying.",
        credit: 0,
      },
      {
        text: "The tidying likely serves a function — a way to manage a rising anxiety by doing something small and controllable just as an uncontrollable feeling stirs, so the habit marks where the charge is; test whether the tidying appears only around specific topics and not others, whether his speech tightens or trails off as it starts, and whether naming the feeling at that moment makes the tidying unnecessary.",
        credit: 1.0,
      },
      {
        text: "He probably tidies when he's anxious; we could watch for it.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'tidying manages anxiety at charged moments' lead from the rival 'he's just a restless person who always fidgets,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: note whether the tidying appears only around emotionally charged topics and disappears during neutral talk — behavior locked to charged moments points to anxiety management rather than general restlessness. My lead is refuted if he tidies just as much during small talk and silence as during difficult material, which would make it an all-purpose fidget.",
      yieldAnchors: [
        "The tidying appears only at charged moments",
        "It stops once the topic passes",
        "It is small, controllable, repetitive behavior",
      ],
      riskAnchors: [
        "The tidying is topic-specific, not constant",
        "His speech tightens or trails off as it begins",
        "Naming the feeling makes the tidying unnecessary",
      ],
      defeatedBy: [
        "He fidgets equally during neutral conversation",
        "The tidying bears no relation to the topic",
      ],
    },
    correctAnswer:
      "The tidying likely serves a function — a way to manage a rising anxiety by doing something small and controllable just as an uncontrollable feeling stirs, so the habit marks where the charge is; test whether the tidying appears only around specific topics and not others, whether his speech tightens or trails off as it starts, and whether naming the feeling at that moment makes the tidying unnecessary.",
    explanation:
      "Top credit reads topic-locked tidying as anxiety-managing and is paired with a charged-vs-neutral test that names its refutation; 'just a nervous habit' is the dodge the topic-specific timing defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A man's chronic back pain reliably flares in the two days before any large family gathering, then subsides afterward — the pattern holding for years, with no injury and clean scans. He says family events are 'no trouble at all.' Which conclusion best follows?",
    mcOptions: [
      {
        text: "Back pain is physical; connecting it to family gatherings is grasping at straws.",
        credit: 0,
      },
      {
        text: "The flares — timed to gatherings he insists are 'no trouble' — likely carry a tension about family he hasn't let himself feel, the body voicing a dread his words deny; test whether the pain reliably precedes gatherings and eases after, whether it spikes most before the most fraught relatives, and whether it lessens once he can name what he braces for at these events.",
        credit: 1.0,
      },
      {
        text: "He seems to get back pain around family events.",
        credit: 0.3,
      },
      {
        text: "It might be linked to family stress; we could keep an eye on the timing.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'the pain expresses dread of family gatherings' lead from the rival 'it's an ordinary physical back problem,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: track the pain against the calendar of gatherings — flares that reliably rise in the days before family events and fade afterward point to dread rather than a structural back problem. My lead is refuted if the pain is constant or random across the year with no relation to gatherings, which would fit a purely physical cause.",
      yieldAnchors: [
        "The pain flares before family gatherings and subsides after",
        "There is no injury and scans are clean",
        "He insists the events are no trouble",
      ],
      riskAnchors: [
        "The pain reliably precedes gatherings",
        "It spikes most before the most fraught relatives",
        "It lessens once he names what he braces for",
      ],
      defeatedBy: [
        "The pain is constant regardless of gatherings",
        "A clear physical injury fully explains the flares",
      ],
    },
    correctAnswer:
      "The flares — timed to gatherings he insists are 'no trouble' — likely carry a tension about family he hasn't let himself feel, the body voicing a dread his words deny; test whether the pain reliably precedes gatherings and eases after, whether it spikes most before the most fraught relatives, and whether it lessens once he can name what he braces for at these events.",
    explanation:
      "Full credit reads a symptom that tracks family gatherings as meaningful and is paired with a track-against-the-calendar test that names its refutation; 'back pain is physical' is the dodge the gathering-timed flares and clean scans defeat.",
  },
  {
    itemType: "hybrid",
    prompt:
      "After an unusually raw session in which she nearly cried, a patient who is normally meticulous about appointments forgets the next one entirely, then misremembers her therapist's first name in the session after that. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Everyone forgets appointments and names; making meaning of two slips is overreach.",
        credit: 0,
      },
      {
        text: "She probably had a reaction to the raw session; we could mention it.",
        credit: 0.6,
      },
      {
        text: "The slips — landing right after she nearly broke down — likely express a pull to retreat from a closeness that felt dangerous, putting distance between herself and the therapy by 'losing track' of it; test whether such lapses follow emotionally intense sessions specifically, whether she seems relieved to have created distance, and whether they stop once the fear stirred by getting close is talked through.",
        credit: 1.0,
      },
      {
        text: "She seems to have forgotten a couple of things.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'the slips are a retreat from a session that felt too close' lead from the rival 'she's just been generally forgetful lately,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: check whether the forgetting clusters specifically after emotionally intense sessions rather than scattering randomly — lapses tied to the rawest moments point to a retreat from closeness. My lead is refuted if she's been forgetting appointments and names across all areas of life regardless of what happened in session, which would fit ordinary forgetfulness.",
      yieldAnchors: [
        "She is normally meticulous about appointments",
        "She forgot the session right after a raw one",
        "She then misremembered the therapist's name",
      ],
      riskAnchors: [
        "Lapses follow emotionally intense sessions specifically",
        "She seems relieved to have created distance",
        "They stop once the fear of closeness is addressed",
      ],
      defeatedBy: [
        "She has become forgetful in every area of life",
        "The slips bear no relation to session intensity",
      ],
    },
    correctAnswer:
      "The slips — landing right after she nearly broke down — likely express a pull to retreat from a closeness that felt dangerous, putting distance between herself and the therapy by 'losing track' of it; test whether such lapses follow emotionally intense sessions specifically, whether she seems relieved to have created distance, and whether they stop once the fear stirred by getting close is talked through.",
    explanation:
      "Top credit reads post-intensity slips in a meticulous patient as a retreat from closeness and is paired with a after-intense-sessions-specifically test that names its refutation; 'everyone forgets' is the dodge the timing right after the raw session defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A man laid off three weeks ago insists he's 'honestly relieved, not bothered at all.' Since the layoff he has been unable to sleep, snaps at his kids over trifles, and has lost his appetite — changes he says are 'probably just a bug going around.' Which conclusion best follows?",
    mcOptions: [
      {
        text: "He seems a bit off since the layoff.",
        credit: 0.3,
      },
      {
        text: "The insomnia, irritability, and lost appetite — all dating from the layoff he claims doesn't bother him — likely reveal a distress his words deny, the symptoms saying what he won't; test whether the symptoms began precisely with the layoff and not before, whether they ease as he admits any hurt or fear about losing the job, and whether his 'just a bug' framing gives way once the loss is named.",
        credit: 1.0,
      },
      {
        text: "Sleep and mood problems have many causes, so linking them to the layoff is a stretch.",
        credit: 0,
      },
      {
        text: "He might be more affected than he admits; we could ask about the layoff.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'the symptoms express denied distress about the layoff' lead from the rival 'he genuinely feels fine and just caught a virus,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: pin down whether all three symptoms started right at the layoff and not before — a cluster that begins exactly with the loss points to denied distress rather than a coincidental illness. My lead is refuted if the sleep, mood, and appetite changes predate the layoff or come with clear physical signs of infection, which would fit a real bug.",
      yieldAnchors: [
        "He says he's relieved and not bothered",
        "Insomnia, irritability, and lost appetite began at the layoff",
        "He attributes the changes to a bug",
      ],
      riskAnchors: [
        "The symptoms began precisely with the layoff",
        "They ease as he admits hurt about the job",
        "His 'just a bug' framing gives way once loss is named",
      ],
      defeatedBy: [
        "The symptoms predate the layoff",
        "Clear physical illness fully explains them",
      ],
    },
    correctAnswer:
      "The insomnia, irritability, and lost appetite — all dating from the layoff he claims doesn't bother him — likely reveal a distress his words deny, the symptoms saying what he won't; test whether the symptoms began precisely with the layoff and not before, whether they ease as he admits any hurt or fear about losing the job, and whether his 'just a bug' framing gives way once the loss is named.",
    explanation:
      "Full credit reads symptoms that track the layoff as a denied distress and is paired with a did-they-start-exactly-at-the-layoff test that names its refutation; 'sleep problems have many causes' is the dodge the symptom onset at the layoff defeats.",
  },
];

const written: HomeworkItem[] = [
  {
    itemType: "written",
    prompt:
      "A man describes his childhood as 'totally normal, happy, nothing to report.' But every concrete memory he offers — a birthday, a holiday, a sick day — features him alone: waiting by a window, eating in silence, entertaining himself. He notices nothing odd about this. In one paragraph, propose the strongest conclusion about what the surface 'happy childhood' is covering and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that his blanket 'happy, normal' label sits on top of a childhood marked by emotional aloneness he never registered as a problem, so the meaning lives in the specific memories rather than the headline — each scene quietly shows a child left to himself. This is a strong claim because it predicts checkable consequences: when asked for more memories he should keep producing solitary scenes rather than connected ones; he should struggle to name a moment of being comforted or sought out; and the 'nothing to report' framing should soften, perhaps bringing feeling, once the loneliness in his own stories is pointed out. I would test it by gathering several more concrete memories and counting how many involve closeness versus solitude, by asking directly for a memory of being soothed by someone, and by noting whether naming the pattern changes how he talks about his childhood.",
      yieldAnchors: [
        "He labels his childhood happy and unremarkable",
        "Every concrete memory shows him alone",
        "He notices nothing odd about the pattern",
      ],
      riskAnchors: [
        "Further memories keep coming back solitary",
        "He can't readily name a moment of being comforted",
        "The 'nothing to report' framing softens once the pattern is named",
      ],
      defeatedBy: [
        "His detailed memories are full of warmth and connection",
        "The contents match the cheerful label once examined",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that his blanket 'happy, normal' label sits on top of a childhood marked by emotional aloneness he never registered as a problem, so the meaning lives in the specific memories rather than the headline — each scene quietly shows a child left to himself. This is a strong claim because it predicts checkable consequences: when asked for more memories he should keep producing solitary scenes rather than connected ones; he should struggle to name a moment of being comforted or sought out; and the 'nothing to report' framing should soften, perhaps bringing feeling, once the loneliness in his own stories is pointed out. I would test it by gathering several more concrete memories and counting how many involve closeness versus solitude, by asking directly for a memory of being soothed by someone, and by noting whether naming the pattern changes how he talks about his childhood.",
    explanation:
      "Under the inverted standard, the cautious 'a happy childhood, nothing to interpret' earns near-zero; top credit goes to reading the meaning in the consistently solitary memories and naming a count-the-memories test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A woman who fought hard for a long-awaited promotion had her first panic attack the very week it came through, and the attacks have continued since. She is baffled — 'this is exactly what I wanted; I should be celebrating.' In one paragraph, propose the strongest conclusion about what the panic is expressing and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that the panic carries a meaning her celebration story can't hold — the promotion, however wanted, also stirs an out-of-awareness conflict (perhaps a fear of the exposure, expectation, or rivalry that rising brings), and the body sounds the alarm her words deny. This is a strong claim because it predicts checkable consequences: the attacks should cluster around moments the new role is most visible — presenting, being watched, outranking former peers — rather than at random; they should ease as she lets herself name an ambivalence about success rather than only joy; and they should not be explained by a separate stressor that began the same week. I would test it by logging when each attack strikes against what she was doing, by exploring directly whether any part of her dreads the new position, and by checking whether the timing really pins to the promotion and nothing else.",
      yieldAnchors: [
        "The panic began the week the promotion came through",
        "She fought hard for the promotion",
        "She is baffled because she expected to feel only happy",
      ],
      riskAnchors: [
        "Attacks cluster around the role's most exposing moments",
        "They ease as she names ambivalence about success",
        "No separate stressor began the same week",
      ],
      defeatedBy: [
        "She feels only uncomplicated joy about the promotion",
        "An unrelated event fully explains the panic's timing",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that the panic carries a meaning her celebration story can't hold — the promotion, however wanted, also stirs an out-of-awareness conflict (perhaps a fear of the exposure, expectation, or rivalry that rising brings), and the body sounds the alarm her words deny. This is a strong claim because it predicts checkable consequences: the attacks should cluster around moments the new role is most visible — presenting, being watched, outranking former peers — rather than at random; they should ease as she lets herself name an ambivalence about success rather than only joy; and they should not be explained by a separate stressor that began the same week. I would test it by logging when each attack strikes against what she was doing, by exploring directly whether any part of her dreads the new position, and by checking whether the timing really pins to the promotion and nothing else.",
    explanation:
      "The inverted standard gives near-zero to 'it's just what she wanted, so the panic must be unrelated'; credit goes to reading the symptom that tracks the promotion as a conflict and naming a log-the-timing test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A patient arrives most weeks announcing 'I really don't have anything to talk about today,' fills the hour with small talk, and then, with five minutes left, drops something major — a marriage on the brink, a frightening medical result. This has happened for months. In one paragraph, propose the strongest conclusion about what this recurring shape means and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that the 'nothing to talk about' opening and the last-minute bombshell form a single patterned way of approaching what frightens her — keeping the charged material at a safe distance until the closing minutes make it impossible to truly open it, so she both reveals and protects herself at once. This is a strong claim because it predicts checkable consequences: the genuinely important material should reliably surface near the end rather than scattering through the hour; the small talk should function as avoidance, thinning when she feels safer; and naming the pattern should shift the timing, letting heavier topics arrive earlier. I would test it by tracking when the significant disclosures land each week, by noting whether the filler eases as trust grows, and by observing whether pointing out the late-arrival pattern changes when she brings the real material.",
      yieldAnchors: [
        "She opens by saying she has nothing to discuss",
        "She fills the hour with small talk",
        "She drops something major in the final minutes",
      ],
      riskAnchors: [
        "Important material reliably surfaces near the end",
        "The small talk thins as she feels safer",
        "Naming the pattern shifts heavy topics earlier",
      ],
      defeatedBy: [
        "Her major disclosures are spread evenly through the hour",
        "The late timing is random and never shifts",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that the 'nothing to talk about' opening and the last-minute bombshell form a single patterned way of approaching what frightens her — keeping the charged material at a safe distance until the closing minutes make it impossible to truly open it, so she both reveals and protects herself at once. This is a strong claim because it predicts checkable consequences: the genuinely important material should reliably surface near the end rather than scattering through the hour; the small talk should function as avoidance, thinning when she feels safer; and naming the pattern should shift the timing, letting heavier topics arrive earlier. I would test it by tracking when the significant disclosures land each week, by noting whether the filler eases as trust grows, and by observing whether pointing out the late-arrival pattern changes when she brings the real material.",
    explanation:
      "The cautious 'she just runs out of time' earns near-zero; top credit goes to reading the recurring shape as a way of approaching and avoiding what frightens her and naming a track-the-timing test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A man jokes his way through every painful subject. When his divorce comes up he does a bit; when his father's death comes up he delivers a punchline; the room laughs and the topic passes. He says, 'I just like to keep things light.' In one paragraph, propose the strongest conclusion about what the joking is doing and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that the humor isn't merely a personality quirk but serves a function — it lets him touch painful material while instantly discharging the feeling and steering everyone, including himself, away before it can land, so the joke marks exactly where the hurt is. This is a strong claim because it predicts checkable consequences: the jokes should cluster on the most painful topics rather than spread evenly across light and heavy ones; the laughter should arrive right at the moments feeling would otherwise surface; and if he's gently asked to stay with a topic without the joke, real emotion should appear. I would test it by noting which subjects reliably trigger humor, by watching whether the punchlines land precisely at emotional peaks, and by checking whether blocking the exit — staying with the painful point a beat longer — brings feeling rather than another joke.",
      yieldAnchors: [
        "He jokes through divorce and his father's death",
        "The laughter lets each painful topic pass",
        "He calls it just keeping things light",
      ],
      riskAnchors: [
        "Jokes cluster on the most painful topics",
        "Laughter lands right at emotional peaks",
        "Staying with the topic without a joke brings real feeling",
      ],
      defeatedBy: [
        "He jokes just as much about trivial, painless things",
        "Blocking the joke produces no feeling at all",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that the humor isn't merely a personality quirk but serves a function — it lets him touch painful material while instantly discharging the feeling and steering everyone, including himself, away before it can land, so the joke marks exactly where the hurt is. This is a strong claim because it predicts checkable consequences: the jokes should cluster on the most painful topics rather than spread evenly across light and heavy ones; the laughter should arrive right at the moments feeling would otherwise surface; and if he's gently asked to stay with a topic without the joke, real emotion should appear. I would test it by noting which subjects reliably trigger humor, by watching whether the punchlines land precisely at emotional peaks, and by checking whether blocking the exit — staying with the painful point a beat longer — brings feeling rather than another joke.",
    explanation:
      "The inverted standard gives near-zero to 'he just likes to keep things light'; credit goes to reading the joking as a feeling-discharging function and naming a stay-with-the-topic test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A woman has dated, over fifteen years, a long string of partners who were already married, lived overseas, or were emotionally checked out — and each relationship ended the same way. She concludes, 'I've just had terrible luck with men.' In one paragraph, propose the strongest conclusion about what is really driving the pattern and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that this is not luck but a pattern she is part of — she is repeatedly drawn to unavailable partners, which suggests an out-of-awareness pull toward relationships that can't fully arrive, perhaps because real, available closeness feels more threatening than the longing for someone out of reach. This is a strong claim because it predicts checkable consequences: looking closely, the 'unavailability' should be present from the start rather than a surprise that developed; available, interested partners should leave her cool or uninterested rather than relieved; and the pull should weaken once the fear of genuine closeness is named. I would test it by reviewing each partner for signs of unavailability that were visible early, by checking how she responds to clearly available people, and by seeing whether understanding the pattern changes who she's drawn to next.",
      yieldAnchors: [
        "Fifteen years of unavailable partners",
        "Each relationship ended the same way",
        "She attributes it to bad luck",
      ],
      riskAnchors: [
        "The unavailability was visible from the start each time",
        "Available, interested partners leave her cool",
        "The pull weakens once fear of closeness is named",
      ],
      defeatedBy: [
        "Her partners were genuinely available and became unavailable by chance",
        "She is equally drawn to available partners",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that this is not luck but a pattern she is part of — she is repeatedly drawn to unavailable partners, which suggests an out-of-awareness pull toward relationships that can't fully arrive, perhaps because real, available closeness feels more threatening than the longing for someone out of reach. This is a strong claim because it predicts checkable consequences: looking closely, the 'unavailability' should be present from the start rather than a surprise that developed; available, interested partners should leave her cool or uninterested rather than relieved; and the pull should weaken once the fear of genuine closeness is named. I would test it by reviewing each partner for signs of unavailability that were visible early, by checking how she responds to clearly available people, and by seeing whether understanding the pattern changes who she's drawn to next.",
    explanation:
      "'Terrible luck with men' is the surface story the fifteen-year repetition defeats; top credit goes to reading the consistent choice of unavailable partners as a pattern and naming a how-does-she-respond-to-available-people test that could refute it.",
  },
];

export const section: SectionContent = {
  slug: "what-psychodynamic-therapy-is",
  title: "What Psychodynamic Therapy Is",
  weekNumber: 1,
  blurb:
    "Psychodynamic therapy treats symptoms and behavior as meaningful, reading the patterns and feelings beneath the surface from observable evidence — repetitions, contradictions between words and actions, and symptoms that track a person's life.",
  lectureTitle:
    "1.1 What Psychodynamic Therapy Is: reading the meaning beneath the surface",
  body: `# What Psychodynamic Therapy Is

You can't watch a feeling form or photograph a motive in the act. Yet people are driven by feelings and motives all the time — many of which they couldn't name if you asked. Psychodynamic therapy is the craft of studying that hidden layer the way a good detective studies a case: not by guessing wildly, but by reading the visible evidence a person leaves behind. Its core bet is that behavior, symptoms, and even "accidents" are not random noise. They mean something. The work is to figure out what.

## Symptoms and behavior have meaning

The starting move is to assume that what looks pointless or puzzling often has a point we just can't see yet. A man "forgets" his wallet — but only on the nights it's his turn to pay. A woman gets a stomachache every Sunday, the one evening she calls her mother. A child starts wetting the bed the week a new sibling comes home. Taken alone, each could be a coincidence. But the timing is the tell. When a symptom appears in one specific situation and vanishes in others, the situation is part of the meaning. The behavior is the data; the hidden feeling or purpose is the explanation we build to account for it.

## A part of the mind works outside awareness

People are honestly puzzled by their own patterns because much of the mind runs outside of awareness. The man who quits every job right before a promotion isn't lying when he says he wants to succeed; another part of him, one he can't easily reach, pulls the other way. This is not about hidden demons or buried curses. It's closer to a set of automatic habits and expectations, learned early and running quietly in the background. The point of therapy isn't to accuse people of secret motives — it's to help bring those background patterns into the light, where they can finally be looked at and chosen.

## Words versus actions

One of the richest sources of evidence is the gap between what someone says and what they show. A patient declares he's "completely at peace" about his divorce while his knee bounces and his voice shakes. A woman insists she's "thrilled" for her sister, then double-books herself and misses the engagement party — the only family event she's skipped in years. When words and actions disagree, the actions and the body often tell the truer story. The skill is to notice the contradiction rather than smoothing it over, and to treat it as a clue pointing toward a feeling the person can't yet say out loud.

## Symptoms that track a life event

Another powerful clue is timing. When a problem starts at the exact moment something changed in a person's life — panic attacks beginning the week a long-wanted promotion arrives, migraines starting the month a father gets sick, headaches that come only on school mornings and vanish all summer — that timing is rarely an accident. The symptom is often carrying a distress the person hasn't let themselves feel directly. Pinning down *when* a symptom appears and disappears is one of the cheapest, sharpest tools we have for reading what it means.

## "Pointless" habits that serve a function

Some behaviors look useless until you ask what they accomplish. The deep-cleaning that strikes only before a dreaded deadline lets a person feel busy while avoiding the task that frightens them. The endless perfecting that means work is never submitted protects it — and the person — from ever being judged. The constant complaining that quietly draws in care and attention would cost the complainer that closeness if the problems were ever solved. The question "what does this behavior do for them?" turns a baffling habit into a readable one.

## Reading the meaning — and naming a test

Here is the part that keeps this honest. It's not enough to spin a clever story; a strong interpretation commits to a specific meaning *and* names the cheap observations that could prove it wrong. "He's late only to things he badly wants" is a real claim, because it predicts the lateness should vanish for low-stakes errands — and you can check that. The weak move is to stop at "he seems to run late" (which explains nothing) or to retreat into "the mind is too complex to say anything" (which gives up before looking). The worst move is the lurid overreach the evidence actually defeats. The strongest reading is the one that both binds the evidence in front of you and spells out the single observation that would refute it.

## In the real world

Suppose a friend keeps choosing partners who treat her badly, then sighs that she has "terrible luck." The dodge is to agree — it sounds kind, but it explains nothing and points nowhere. A psychodynamic move commits to a meaning: maybe harsh treatment feels like familiar love, so the gentle ones feel "boring" and get dropped. Notice how much that opens up. It predicts the partners she leaves were called dull rather than unkind; that the difficult ones echo someone from early life; and that she could stay engaged with a kind partner once the pattern is named. Three cheap checks, each able to refute the idea. That is what reading the mind beneath the surface buys you — not a shrug at how mysterious people are, but a testable story about the meaning underneath, and a way to change it.`,
  homework: {
    mcq,
    hybrid,
    written,
  },
};
