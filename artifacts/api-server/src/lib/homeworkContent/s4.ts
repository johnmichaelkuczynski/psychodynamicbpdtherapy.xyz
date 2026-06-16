import type { SectionContent, HomeworkItem, McOption, WrittenRubric } from "./types";

const mcq: HomeworkItem[] = [
  {
    itemType: "mc",
    prompt:
      "Researchers show two groups the same video of a car crash, then ask one group how fast the cars were going when they 'smashed' and the other when they 'hit.' The 'smashed' group gives higher speed estimates and, a week later, more of them falsely recall seeing broken glass. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Memory is too personal and complex to claim a single word changed what people recall.",
        credit: 0,
      },
      {
        text: "The wording of the question likely got woven into the stored memory itself, reshaping it; test whether a neutral word like 'contacted' yields lower estimates and less false glass, whether the false-glass rate climbs the longer the delay before recall, and whether warning people beforehand that questions can mislead them shrinks the effect.",
        credit: 1.0,
      },
      {
        text: "The leading word probably distorts memory; we could rerun the study with more wording variations.",
        credit: 0.6,
      },
      {
        text: "The question's wording seems to affect what people remember.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The wording of the question likely got woven into the stored memory itself, reshaping it; test whether a neutral word like 'contacted' yields lower estimates and less false glass, whether the false-glass rate climbs the longer the delay before recall, and whether warning people beforehand that questions can mislead them shrinks the effect.",
    explanation:
      "Top credit names a mechanism — memory is reconstructed and later information edits the stored version — and lists three checkable tests; the 'too personal to say' option refuses to commit and opens no inquiry.",
  },
  {
    itemType: "mc",
    prompt:
      "Students learn a list of 30 words. Tested an hour later, they have already forgotten most of them; but those they still know after a day they tend to keep for weeks. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Forgetting is likely fastest right after learning and then levels off as surviving memories consolidate into more durable storage; test whether a recall test at 20 minutes already shows the steep drop, whether items reviewed once during the first hour resist the early loss, and whether sleep before the one-day test flattens the curve further.",
        credit: 1.0,
      },
      {
        text: "People seem to forget a lot at first and then less later.",
        credit: 0.3,
      },
      {
        text: "Forgetting probably slows down over time; we could test more lists.",
        credit: 0.6,
      },
      {
        text: "Memory loss is too unpredictable to describe with any pattern.",
        credit: 0,
      },
    ],
    correctAnswer:
      "Forgetting is likely fastest right after learning and then levels off as surviving memories consolidate into more durable storage; test whether a recall test at 20 minutes already shows the steep drop, whether items reviewed once during the first hour resist the early loss, and whether sleep before the one-day test flattens the curve further.",
    explanation:
      "The strongest answer commits to a forgetting-curve mechanism with three checkable predictions; 'too unpredictable to describe' names no pattern and so cannot be tested.",
  },
  {
    itemType: "mc",
    prompt:
      "Two classes study the same material. One crams it all in a single three-hour session; the other spreads the same three hours over six days. On a test two weeks later, the spaced class scores far higher. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Study habits are too individual to credit the schedule for the difference.",
        credit: 0,
      },
      {
        text: "Spacing seems to help people remember longer.",
        credit: 0.3,
      },
      {
        text: "Spreading practice probably forces the brain to reload and re-strengthen the memory each session, building sturdier storage than one massed dose; test whether the spaced group beats the crammers only on the delayed test and not on a same-day quiz, whether adding more gaps widens the advantage, and whether crammers who get one extra review a week later catch up.",
        credit: 1.0,
      },
      {
        text: "Spacing probably beats cramming; we could compare more class schedules.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Spreading practice probably forces the brain to reload and re-strengthen the memory each session, building sturdier storage than one massed dose; test whether the spaced group beats the crammers only on the delayed test and not on a same-day quiz, whether adding more gaps widens the advantage, and whether crammers who get one extra review a week later catch up.",
    explanation:
      "Top credit names the spacing mechanism and three tests, including one that pins when the advantage appears; 'too individual to credit the schedule' commits to nothing.",
  },
  {
    itemType: "mc",
    prompt:
      "People study a list of words all related to sleep — bed, rest, tired, dream, night — but the word 'sleep' itself never appears. Minutes later, most confidently 'remember' having seen 'sleep' on the list. Which conclusion best follows?",
    mcOptions: [
      {
        text: "People seem to misremember the related word.",
        credit: 0.3,
      },
      {
        text: "Recall probably reactivates the gist or theme of a list, and the brain fills in the strongly associated word as if it had been seen; test whether lists with weaker associations produce fewer false memories, whether the false 'sleep' is recalled as confidently as real list words, and whether warning people about the trap before study lowers the error.",
        credit: 1.0,
      },
      {
        text: "The mind is too mysterious to explain why a word no one saw feels remembered.",
        credit: 0,
      },
      {
        text: "Related words probably cause false memories; we could try other word lists.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Recall probably reactivates the gist or theme of a list, and the brain fills in the strongly associated word as if it had been seen; test whether lists with weaker associations produce fewer false memories, whether the false 'sleep' is recalled as confidently as real list words, and whether warning people about the trap before study lowers the error.",
    explanation:
      "The richest answer names a gist-and-association mechanism for false memory and three tests; 'too mysterious to explain' refuses to lead and earns zero.",
  },
  {
    itemType: "mc",
    prompt:
      "After a staged robbery in a classroom, an eyewitness picks a suspect from a lineup and says she is '100% certain.' She turns out to be wrong; the real culprit wasn't in the lineup. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Eyewitness behavior is too variable to draw any lesson from one case.",
        credit: 0,
      },
      {
        text: "High confidence probably reflects how familiar a face feels after staring at a lineup, not how accurate the memory is, so certainty and correctness can come apart; test whether confidence and accuracy line up better right after the event than after a delay, whether telling witnesses 'the culprit may not be present' cuts false picks, and whether a sequential lineup lowers confident errors.",
        credit: 1.0,
      },
      {
        text: "Confidence doesn't always mean accuracy.",
        credit: 0.3,
      },
      {
        text: "Confidence probably isn't a good guide to accuracy; we could study more lineups.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "High confidence probably reflects how familiar a face feels after staring at a lineup, not how accurate the memory is, so certainty and correctness can come apart; test whether confidence and accuracy line up better right after the event than after a delay, whether telling witnesses 'the culprit may not be present' cuts false picks, and whether a sequential lineup lowers confident errors.",
    explanation:
      "Top credit separates confidence from accuracy with a familiarity mechanism and three checkable fixes; 'too variable to draw any lesson' opens no path.",
  },
  {
    itemType: "mc",
    prompt:
      "The morning after a dramatic national news event, people write down exactly how they heard about it. Three years later they describe the same moment with vivid certainty — but compared to their own notes, many details have quietly changed. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Vivid memories seem to change over time.",
        credit: 0.3,
      },
      {
        text: "Memory is too unreliable to bother studying these 'flashbulb' moments.",
        credit: 0,
      },
      {
        text: "A feeling of vividness probably comes from emotional intensity and frequent retelling, not from the memory being accurate, so each retelling can rewrite details while confidence stays high; test whether people who retold the story most often show the most drift, whether confidence rises even as detail accuracy falls, and whether comparing to the original note surprises them.",
        credit: 1.0,
      },
      {
        text: "Strong memories probably drift; we could collect more accounts over time.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "A feeling of vividness probably comes from emotional intensity and frequent retelling, not from the memory being accurate, so each retelling can rewrite details while confidence stays high; test whether people who retold the story most often show the most drift, whether confidence rises even as detail accuracy falls, and whether comparing to the original note surprises them.",
    explanation:
      "The productive answer pins vividness to emotion and retelling rather than accuracy and names three tests; 'too unreliable to bother studying' is the barren dodge.",
  },
  {
    itemType: "mc",
    prompt:
      "Witnesses to a staged accident are later asked, by chance of phrasing, either 'Did you see the broken headlight?' or 'Did you see a broken headlight?' — though there was none. Those asked about 'the' headlight are far more likely to later report seeing one. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The word 'the' probably plants a presupposition that something existed, and the brain later integrates that suggested detail into the memory as if witnessed; test whether 'a' phrasing produces fewer false reports, whether the false detail grows more confident with delay, and whether asking immediately versus a week later changes how much sticks.",
        credit: 1.0,
      },
      {
        text: "Witnesses seem influenced by the question's wording.",
        credit: 0.3,
      },
      {
        text: "Phrasing probably shapes what people report; we could test more question forms.",
        credit: 0.6,
      },
      {
        text: "There are too many reasons people misreport details to blame one small word.",
        credit: 0,
      },
    ],
    correctAnswer:
      "The word 'the' probably plants a presupposition that something existed, and the brain later integrates that suggested detail into the memory as if witnessed; test whether 'a' phrasing produces fewer false reports, whether the false detail grows more confident with delay, and whether asking immediately versus a week later changes how much sticks.",
    explanation:
      "Top credit names the misinformation mechanism — a suggested detail merging into memory — and three tests; 'too many reasons to blame one word' refuses to commit and earns zero.",
  },
  {
    itemType: "mc",
    prompt:
      "Two groups read the same chapter. One group rereads it twice; the other reads it once and then takes a practice quiz. The quiz group remembers far more on a test a week later, even though they spent less time looking at the chapter. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Quizzing seems to help memory more than rereading.",
        credit: 0.3,
      },
      {
        text: "Study results are too noisy to say testing beats rereading.",
        credit: 0,
      },
      {
        text: "Practice quizzes probably help; we could compare more study methods.",
        credit: 0.6,
      },
      {
        text: "Actively retrieving a memory probably strengthens the path back to it more than passively reviewing does, so the effort of recall is the active ingredient; test whether harder quizzes (that still allow success) help more than easy ones, whether the rereaders catch up if given a single quiz, and whether the testing advantage is largest on the delayed test, not a same-day one.",
        credit: 1.0,
      },
    ],
    correctAnswer:
      "Actively retrieving a memory probably strengthens the path back to it more than passively reviewing does, so the effort of recall is the active ingredient; test whether harder quizzes (that still allow success) help more than easy ones, whether the rereaders catch up if given a single quiz, and whether the testing advantage is largest on the delayed test, not a same-day one.",
    explanation:
      "The strongest answer names the testing/retrieval-practice mechanism and three tests, including one isolating the effortful-recall ingredient; 'too noisy to say' is the empty refusal.",
  },
  {
    itemType: "mc",
    prompt:
      "Scuba divers learn a list of words either on the beach or underwater, then try to recall them in the same or the opposite setting. They remember more when tested in the place they learned. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Memory is too situation-dependent to draw a usable rule from divers.",
        credit: 0,
      },
      {
        text: "The surroundings at learning probably get encoded alongside the words and later act as retrieval cues, so matching the context revives the memory; test whether mentally imagining the original setting helps even when physically elsewhere, whether the effect shrinks for very well-learned items, and whether the boost tracks how distinctive the two settings are.",
        credit: 1.0,
      },
      {
        text: "Place probably affects recall; we could test more learning environments.",
        credit: 0.6,
      },
      {
        text: "People seem to recall better in the place they learned.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The surroundings at learning probably get encoded alongside the words and later act as retrieval cues, so matching the context revives the memory; test whether mentally imagining the original setting helps even when physically elsewhere, whether the effect shrinks for very well-learned items, and whether the boost tracks how distinctive the two settings are.",
    explanation:
      "Top credit names context-dependent retrieval cues and three checkable tests, including an imagination control; 'too situation-dependent' opens no inquiry.",
  },
  {
    itemType: "mc",
    prompt:
      "An adult is told by relatives, repeatedly and with detail, about a time he was 'lost in a shopping mall as a toddler.' It never happened. After several retellings he begins describing the event vividly, adding details no one gave him. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Memory is too murky to say where a vivid 'memory' of a non-event comes from.",
        credit: 0,
      },
      {
        text: "He seems to have picked up a memory that wasn't real.",
        credit: 0.3,
      },
      {
        text: "Repeated suggestion plus imagining the scene probably builds a memory that feels as real as a true one, because the brain doesn't tag where a vivid image came from; test whether more imagining sessions deepen the false memory, whether it gains sensory details with each retelling, and whether plausible suggested events are adopted more readily than wildly implausible ones.",
        credit: 1.0,
      },
      {
        text: "Suggestion probably implanted the memory; we could try this with other events.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Repeated suggestion plus imagining the scene probably builds a memory that feels as real as a true one, because the brain doesn't tag where a vivid image came from; test whether more imagining sessions deepen the false memory, whether it gains sensory details with each retelling, and whether plausible suggested events are adopted more readily than wildly implausible ones.",
    explanation:
      "The richest answer names a source-monitoring failure behind implanted memories with three tests; 'too murky to say' refuses to lead.",
  },
  {
    itemType: "mc",
    prompt:
      "Shown a real chessboard from an actual game for five seconds, chess masters can rebuild it almost perfectly, far better than beginners. But when the same pieces are scattered randomly, the masters do no better than beginners. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Experts probably store positions as a few meaningful 'chunks' (familiar patterns) rather than many separate pieces, so memory capacity rides on knowledge, not raw slots; test whether masters' advantage returns only for legal, game-like positions, whether their recall errors preserve sensible groupings, and whether beginners trained on common patterns start chunking too.",
        credit: 1.0,
      },
      {
        text: "Masters seem to remember real boards better.",
        credit: 0.3,
      },
      {
        text: "Expertise is too broad a thing to explain this memory gap.",
        credit: 0,
      },
      {
        text: "Experience probably helps memory; we could test players of more skill levels.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Experts probably store positions as a few meaningful 'chunks' (familiar patterns) rather than many separate pieces, so memory capacity rides on knowledge, not raw slots; test whether masters' advantage returns only for legal, game-like positions, whether their recall errors preserve sensible groupings, and whether beginners trained on common patterns start chunking too.",
    explanation:
      "Top credit names chunking as the mechanism — why the random board erases the edge — and three tests; 'too broad a thing to explain' commits to nothing.",
  },
  {
    itemType: "mc",
    prompt:
      "A man is sure he knows the name of an actor — it's 'on the tip of his tongue.' He knows the first letter and the number of syllables and can reject wrong guesses instantly, yet can't produce the name for an hour. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Forgetting a name is too ordinary to learn anything from.",
        credit: 0,
      },
      {
        text: "He seems to almost remember the name.",
        credit: 0.3,
      },
      {
        text: "This is probably a tip-of-the-tongue state; we could collect more examples.",
        credit: 0.6,
      },
      {
        text: "A memory's meaning and its sound are probably stored and retrieved partly separately, so he can access the concept and partial sound while the full word stays blocked; test whether giving the first syllable unlocks it, whether similar-sounding 'blockers' keep popping up, and whether the name surfaces later unbidden once the block fades.",
        credit: 1.0,
      },
    ],
    correctAnswer:
      "A memory's meaning and its sound are probably stored and retrieved partly separately, so he can access the concept and partial sound while the full word stays blocked; test whether giving the first syllable unlocks it, whether similar-sounding 'blockers' keep popping up, and whether the name surfaces later unbidden once the block fades.",
    explanation:
      "The productive answer separates meaning from sound to explain the partial access and names three tests; 'too ordinary to learn anything' is the unfruitful dodge.",
  },
  {
    itemType: "mc",
    prompt:
      "People learn a list while feeling cheerful. Later, those put back into a cheerful mood recall more of the list than those tested while feeling down; the reverse holds for words learned in a low mood. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Mood and memory are too tangled to claim one helps recall the other.",
        credit: 0,
      },
      {
        text: "A person's inner state at learning probably becomes part of the memory's retrieval cues, so matching the mood at recall reopens the file; test whether the boost shrinks for highly memorable items, whether deliberately recreating the learning mood helps when it returns, and whether the effect is larger for emotionally charged words.",
        credit: 1.0,
      },
      {
        text: "Mood seems to affect what people remember.",
        credit: 0.3,
      },
      {
        text: "Matching moods probably aids recall; we could test more mood pairs.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "A person's inner state at learning probably becomes part of the memory's retrieval cues, so matching the mood at recall reopens the file; test whether the boost shrinks for highly memorable items, whether deliberately recreating the learning mood helps when it returns, and whether the effect is larger for emotionally charged words.",
    explanation:
      "Top credit names state-dependent retrieval cues and three tests; 'too tangled to claim' opens no checkable line of inquiry.",
  },
  {
    itemType: "mc",
    prompt:
      "Students who study new material and then sleep a full night remember more of it the next day than equally tired students who study and stay awake the same number of hours. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Sleep and memory are too complicated to credit sleep for the difference.",
        credit: 0,
      },
      {
        text: "Sleep seems to help people keep what they learned.",
        credit: 0.3,
      },
      {
        text: "Sleep probably lets the brain replay and consolidate the day's new memories into more stable storage, rather than just preventing tiredness; test whether a short nap after study also helps, whether the benefit is biggest for material learned right before sleep, and whether disrupting deep sleep specifically wipes out the gain.",
        credit: 1.0,
      },
      {
        text: "Sleep probably aids memory; we could test more sleep schedules.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Sleep probably lets the brain replay and consolidate the day's new memories into more stable storage, rather than just preventing tiredness; test whether a short nap after study also helps, whether the benefit is biggest for material learned right before sleep, and whether disrupting deep sleep specifically wipes out the gain.",
    explanation:
      "The strongest answer names sleep-based consolidation (and rules out mere tiredness) with three tests; 'too complicated to credit sleep' commits to no mechanism.",
  },
  {
    itemType: "mc",
    prompt:
      "People hear a list of 20 words read once and then immediately write down all they can. They reliably remember the first few words and the last few, but the middle of the list is a blur. Which conclusion best follows?",
    mcOptions: [
      {
        text: "The first words probably got rehearsed into longer-term storage while the last words are still fresh in short-term memory, leaving the middle squeezed out of both; test whether a 30-second distraction before recall erases the last-word advantage but not the first, whether slowing the reading helps the middle, and whether the first-word edge survives a delay better than the last-word edge.",
        credit: 1.0,
      },
      {
        text: "People seem to remember the start and end of a list best.",
        credit: 0.3,
      },
      {
        text: "List position is too minor a factor to explain anything about memory.",
        credit: 0,
      },
      {
        text: "Position probably matters for recall; we could test lists of other lengths.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The first words probably got rehearsed into longer-term storage while the last words are still fresh in short-term memory, leaving the middle squeezed out of both; test whether a 30-second distraction before recall erases the last-word advantage but not the first, whether slowing the reading helps the middle, and whether the first-word edge survives a delay better than the last-word edge.",
    explanation:
      "Top credit names two distinct memory stores behind the serial-position curve and gives a test that separates them; 'too minor a factor' refuses to lead.",
  },
];

const hybrid: HomeworkItem[] = [
  {
    itemType: "hybrid",
    prompt:
      "A week after watching a video of a burglary, viewers read a short summary that mistakenly says the burglar wore gloves — he didn't. Tested later, many now confidently 'remember' the gloves, and they can't tell the suggested detail from the ones they actually saw. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Later misinformation probably gets blended into the original memory, and the brain loses track of which detail came from where (a source-monitoring failure); test whether warning viewers that the summary may contain errors cuts the false memory, whether a longer gap before the summary increases the blending, and whether viewers rate the false gloves as vividly as true details.",
        credit: 1.0,
      },
      {
        text: "Viewers seem to absorb the wrong detail.",
        credit: 0.3,
      },
      {
        text: "Memory is too easily muddled to say where the gloves came from.",
        credit: 0,
      },
      {
        text: "The summary probably altered their memory; we could test more misleading summaries.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'misinformation blends into memory' lead from the rival 'viewers just trust the written summary over their own eyes,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: after viewers report the gloves, ask them to label each detail as 'saw it in the video' or 'read it in the summary' — if misinformation truly blended in, they should misattribute the gloves to the video, not knowingly defer to the text. My lead is refuted if viewers correctly tag the gloves as coming from the summary, which would mean they are simply trusting the document rather than misremembering.",
      yieldAnchors: [
        "The summary falsely states the burglar wore gloves",
        "Many viewers later confidently recall the gloves",
        "They cannot separate the suggested detail from what they saw",
      ],
      riskAnchors: [
        "Warning viewers of possible errors cuts the false memory",
        "A longer gap before the summary increases the blending",
        "Viewers rate the false gloves as vividly as true details",
      ],
      defeatedBy: [
        "Viewers knowingly defer to the written summary over their own memory",
        "The summary has no effect on what viewers report",
      ],
    },
    correctAnswer:
      "Later misinformation probably gets blended into the original memory, and the brain loses track of which detail came from where (a source-monitoring failure); test whether warning viewers that the summary may contain errors cuts the false memory, whether a longer gap before the summary increases the blending, and whether viewers rate the false gloves as vividly as true details.",
    explanation:
      "Full credit names the misinformation-and-source-monitoring mechanism with three checks and a cheap source-tagging test that states its own refutation; 'too easily muddled to say' opens nothing.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A tutor finds that students who close the book and try to recall a definition before checking it learn it far better than students who simply copy the definition out three times, even though copying takes longer. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Learning is too personal to credit the recall step for the difference.",
        credit: 0,
      },
      {
        text: "Struggling to retrieve a memory before checking probably strengthens it more than passive copying, because the effortful search reshapes the retrieval path; test whether students who guess and fail still benefit once corrected, whether the advantage grows on a delayed test, and whether making copying active (covering and reconstructing) erases the gap.",
        credit: 1.0,
      },
      {
        text: "Recalling first seems to beat copying.",
        credit: 0.3,
      },
      {
        text: "Active recall probably helps; we could try it with more students.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'effortful retrieval strengthens memory' lead from the rival 'recall students simply pay more attention,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: have the copying group cover the text and reconstruct the definition from memory — making copying effortful too — and compare; if effortful retrieval is the active ingredient, the reconstruct group should catch up to the recall group. My lead is refuted if the reconstruct-from-memory group still lags behind plain recall, pointing to general attention rather than the act of retrieval.",
      yieldAnchors: [
        "Recall-first students learn definitions far better",
        "Copying takes longer yet works worse",
        "The comparison holds the material constant",
      ],
      riskAnchors: [
        "Students who guess wrong still benefit once corrected",
        "The advantage grows on a delayed test",
        "Making copying active erases the gap",
      ],
      defeatedBy: [
        "Recall students simply paid more attention overall",
        "The retrieval step is unrelated to how well it sticks",
      ],
    },
    correctAnswer:
      "Struggling to retrieve a memory before checking probably strengthens it more than passive copying, because the effortful search reshapes the retrieval path; test whether students who guess and fail still benefit once corrected, whether the advantage grows on a delayed test, and whether making copying active (covering and reconstructing) erases the gap.",
    explanation:
      "Full credit names effortful retrieval as the mechanism with three checks and a controlled test that names its refutation; 'too personal to credit' leads nowhere.",
  },
  {
    itemType: "hybrid",
    prompt:
      "An interviewer talking to a child witness keeps asking, 'He touched you, didn't he?' Over repeated sessions the child, who first said no, begins to agree and adds details. Other children questioned with open prompts give shorter, more stable accounts. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Children's memories are too unstable to say the questions caused anything.",
        credit: 0,
      },
      {
        text: "Repeated leading questions probably implant suggested events into a child's account, especially as repetition makes the suggestion feel familiar and self-generated; test whether open-ended prompts yield fewer invented details, whether agreement rises with each repeated session, and whether the added details drift toward what the interviewer implied rather than new independent facts.",
        credit: 1.0,
      },
      {
        text: "Leading questions seem to change the child's story.",
        credit: 0.3,
      },
      {
        text: "The questioning probably shaped the account; we could interview more children.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'leading questions implant the event' lead from the rival 'the child was reluctant at first but always remembered it,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: interview matched children about the same situation using only open prompts and compare — if leading questions implant the event, the open-prompt children should rarely report the touch, while the led children increasingly do. My lead is refuted if open-prompt children report the event just as often, which would suggest a real memory the leading questions merely uncovered.",
      yieldAnchors: [
        "The child first said no",
        "Agreement and added detail grew over repeated leading sessions",
        "Open-prompt children gave shorter, more stable accounts",
      ],
      riskAnchors: [
        "Open-ended prompts yield fewer invented details",
        "Agreement rises with each repeated session",
        "Added details track the interviewer's implications, not new facts",
      ],
      defeatedBy: [
        "The child always remembered the event and was merely reluctant",
        "The interview style is unrelated to what the child reports",
      ],
    },
    correctAnswer:
      "Repeated leading questions probably implant suggested events into a child's account, especially as repetition makes the suggestion feel familiar and self-generated; test whether open-ended prompts yield fewer invented details, whether agreement rises with each repeated session, and whether the added details drift toward what the interviewer implied rather than new independent facts.",
    explanation:
      "Full credit commits to a suggestibility mechanism with three checks and an open-prompt comparison that names its refutation; 'too unstable to say' refuses to lead.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A language learner who reviews a deck of flashcards once a day forgets fewer words than a classmate who reviews the same deck five times in one evening and then not again. Both spend the same total minutes. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Spacing the same study across days probably makes each review a fresh act of retrieval after partial forgetting, which strengthens storage more than back-to-back repetition; test whether stretching the gaps further (every two days) helps still more up to a point, whether the massed reviewer matches the spaced one if given one review the next week, and whether the spaced edge appears only on a delayed test.",
        credit: 1.0,
      },
      {
        text: "Daily review seems to beat one big session.",
        credit: 0.3,
      },
      {
        text: "Spacing probably helps memory; we could try other review schedules.",
        credit: 0.6,
      },
      {
        text: "Memory schedules are too individual to credit spacing for the difference.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'spacing forces fresh retrieval' lead from the rival 'the daily reviewer is just more disciplined,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: within the same learner, randomly assign half the cards to a spaced schedule and half to a massed schedule with total time held equal, so discipline can't differ between the two card sets — if spacing is the mechanism, the spaced cards should be retained better. My lead is refuted if spaced and massed cards are retained equally for that learner, pointing to overall discipline rather than the schedule.",
      yieldAnchors: [
        "Daily review forgets fewer words",
        "The massed reviewer crams five times in one evening",
        "Both spend the same total minutes",
      ],
      riskAnchors: [
        "Stretching the gaps further helps up to a point",
        "The massed reviewer catches up with one review next week",
        "The spaced edge appears only on a delayed test",
      ],
      defeatedBy: [
        "The daily reviewer is simply more disciplined overall",
        "Review timing is unrelated to retention",
      ],
    },
    correctAnswer:
      "Spacing the same study across days probably makes each review a fresh act of retrieval after partial forgetting, which strengthens storage more than back-to-back repetition; test whether stretching the gaps further (every two days) helps still more up to a point, whether the massed reviewer matches the spaced one if given one review the next week, and whether the spaced edge appears only on a delayed test.",
    explanation:
      "Full credit names the spacing-and-retrieval mechanism with three checks and a within-person randomized test that names its refutation; 'too individual to credit spacing' opens no inquiry.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A grocery shopper who repeats a five-item list in her head remembers all of it — until a cashier asks her a question, after which two items vanish. People given a longer 10-item list lose far more even without interruption. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Short-term memory probably holds only a few items by active rehearsal, so interruption stops the rehearsal and overload exceeds its limited capacity; test whether grouping the 10 items into named categories (chunking) restores recall, whether a silent count-back task wipes the list like the cashier did, and whether items rehearsed most recently survive the interruption best.",
        credit: 1.0,
      },
      {
        text: "Distraction seems to make people forget short lists.",
        credit: 0.3,
      },
      {
        text: "Interruptions probably hurt memory; we could test more list lengths.",
        credit: 0.6,
      },
      {
        text: "Everyday forgetting is too random to pin on rehearsal or capacity.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'limited-capacity rehearsal' lead from the rival 'the cashier's question simply made her stop caring about the list,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: replace the cashier's question with a brief, meaningless count-back task (say '7, 6, 5...') that demands attention but no caring — if rehearsal is what holds the list, this should erase items just as the question did. My lead is refuted if the meaningless distraction leaves the list intact, suggesting motivation, not interrupted rehearsal, caused the loss.",
      yieldAnchors: [
        "She holds five items by repeating them",
        "Two items vanish after the cashier interrupts",
        "A 10-item list is lost even without interruption",
      ],
      riskAnchors: [
        "Chunking the 10 items into categories restores recall",
        "A silent count-back task wipes the list like the question did",
        "The most recently rehearsed items survive interruption best",
      ],
      defeatedBy: [
        "The cashier's question merely made her stop caring",
        "List length and interruption are unrelated to forgetting",
      ],
    },
    correctAnswer:
      "Short-term memory probably holds only a few items by active rehearsal, so interruption stops the rehearsal and overload exceeds its limited capacity; test whether grouping the 10 items into named categories (chunking) restores recall, whether a silent count-back task wipes the list like the cashier did, and whether items rehearsed most recently survive the interruption best.",
    explanation:
      "Full credit names limited-capacity rehearsal with three checks and a meaningless-distractor test that names its refutation; 'too random to pin' is the barren dodge.",
  },
  {
    itemType: "hybrid",
    prompt:
      "An older man can describe in rich detail how to ride a bicycle and play a song on the piano, yet cannot recall having lunch an hour ago or the name of his new nurse. A brain injury affected his ability to form new everyday memories. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Brains are too complex to conclude anything from one injured patient.",
        credit: 0,
      },
      {
        text: "He seems to remember skills but not recent events.",
        credit: 0.3,
      },
      {
        text: "Memory probably splits into separate systems — one for skills and habits, another for conscious facts and events — that can be damaged independently; test whether he can learn a brand-new motor skill despite no memory of practicing it, whether his factual learning fails across all topics equally, and whether cueing a recent event ever revives it.",
        credit: 1.0,
      },
      {
        text: "His memory probably works in parts; we could study more patients.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'separate memory systems' lead from the rival 'he only remembers old, well-practiced things and loses everything new,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: teach him a brand-new motor skill, like a mirror-drawing task, over several days — if skill memory is a separate intact system, he should get faster at it even while swearing he's never done it before. My lead is refuted if he cannot improve at the new skill at all, which would mean he simply retains old material and cannot learn anything new of any kind.",
      yieldAnchors: [
        "He retains old skills like cycling and piano",
        "He cannot recall lunch an hour ago",
        "He cannot learn his new nurse's name",
      ],
      riskAnchors: [
        "He learns a brand-new motor skill despite no memory of practicing",
        "His factual learning fails across all topics equally",
        "Cueing a recent event sometimes revives it",
      ],
      defeatedBy: [
        "He only keeps old, well-practiced material and loses all new learning",
        "The injury erased one general memory ability, not separate systems",
      ],
    },
    correctAnswer:
      "Memory probably splits into separate systems — one for skills and habits, another for conscious facts and events — that can be damaged independently; test whether he can learn a brand-new motor skill despite no memory of practicing it, whether his factual learning fails across all topics equally, and whether cueing a recent event ever revives it.",
    explanation:
      "Full credit names dissociable memory systems with three checks and a new-skill test that names its refutation; 'too complex to conclude anything' opens no path.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A history teacher finds that students who summarize each chapter in their own words remember it months later, while students who highlight passages in bright yellow remember much less, despite feeling confident they 'knew it.' Which conclusion best follows?",
    mcOptions: [
      {
        text: "Summarizing probably forces deeper processing of meaning, which builds richer, better-connected memories than highlighting, which only marks text without engaging it; test whether highlighters who then explain each highlight catch up, whether the summarizers' advantage is largest on questions requiring understanding rather than verbatim recall, and whether highlighting's false confidence comes from fluent rereading.",
        credit: 1.0,
      },
      {
        text: "Summarizing seems to work better than highlighting.",
        credit: 0.3,
      },
      {
        text: "Summarizing probably helps; we could compare more study methods.",
        credit: 0.6,
      },
      {
        text: "Study outcomes are too varied to credit the method for the difference.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'deeper processing of meaning' lead from the rival 'summarizers simply spend more time on the material,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: hold study time equal and have highlighters add one sentence explaining why each highlight matters — if depth of processing is the mechanism, equal-time explainers should approach the summarizers. My lead is refuted if equal-time highlighters who explain still lag far behind, pointing to total time rather than depth of engagement.",
      yieldAnchors: [
        "Summarizers remember the material months later",
        "Highlighters remember much less",
        "Highlighters feel confident they knew it",
      ],
      riskAnchors: [
        "Highlighters who explain each highlight catch up",
        "The summarizers' edge is largest on understanding questions",
        "Highlighting's false confidence comes from fluent rereading",
      ],
      defeatedBy: [
        "Summarizers simply spent more time on the material",
        "Study method is unrelated to long-term retention",
      ],
    },
    correctAnswer:
      "Summarizing probably forces deeper processing of meaning, which builds richer, better-connected memories than highlighting, which only marks text without engaging it; test whether highlighters who then explain each highlight catch up, whether the summarizers' advantage is largest on questions requiring understanding rather than verbatim recall, and whether highlighting's false confidence comes from fluent rereading.",
    explanation:
      "Full credit names depth-of-processing with three checks and an equal-time test that names its refutation; 'too varied to credit the method' commits to nothing.",
  },
  {
    itemType: "hybrid",
    prompt:
      "People are asked to recall a story from a culture unlike their own. With each retelling, the story gets shorter and the unfamiliar parts quietly change into things that fit the teller's own customs, until it sounds like a story from their own world. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Memory is too creative to say what guides how a story changes.",
        credit: 0,
      },
      {
        text: "People seem to reshape the story over time.",
        credit: 0.3,
      },
      {
        text: "Recall probably reconstructs a story by fitting it to the teller's existing mental frameworks (schemas), so unfamiliar details get replaced by familiar ones; test whether elements matching the teller's culture survive better than odd ones, whether the same drift happens across many tellers in the same direction, and whether giving the framework in advance reduces the distortion.",
        credit: 1.0,
      },
      {
        text: "The story probably changes with retelling; we could test more stories.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'schema-driven reconstruction' lead from the rival 'people just forget random bits each time,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: check whether the changes are systematic — do the unfamiliar elements consistently morph toward the teller's own customs across many independent tellers? If schemas guide reconstruction, the drift should point in the same culturally-familiar direction, not scatter randomly. My lead is refuted if the lost and altered details vary randomly across tellers with no pull toward their own culture.",
      yieldAnchors: [
        "The story shortens with each retelling",
        "Unfamiliar parts change into familiar customs",
        "It ends up sounding like the teller's own world",
      ],
      riskAnchors: [
        "Culture-matching elements survive better than odd ones",
        "The drift runs the same direction across many tellers",
        "Giving the framework in advance reduces distortion",
      ],
      defeatedBy: [
        "People just forget random bits with no systematic pull",
        "Retelling is unrelated to how the story changes",
      ],
    },
    correctAnswer:
      "Recall probably reconstructs a story by fitting it to the teller's existing mental frameworks (schemas), so unfamiliar details get replaced by familiar ones; test whether elements matching the teller's culture survive better than odd ones, whether the same drift happens across many tellers in the same direction, and whether giving the framework in advance reduces the distortion.",
    explanation:
      "Full credit names schema-driven reconstruction with three checks and a systematic-direction test that names its refutation; 'too creative to say' refuses to lead.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A nurse can find any patient's room instantly after years on the ward, but a new nurse keeps getting lost. The veteran says she 'just knows,' yet on her first week in an unfamiliar hospital she gets lost as easily as a beginner. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Her speed probably comes from a rich learned map built up through repeated experience, not from a general sense of direction, since it vanishes in an unfamiliar building; test whether her advantage returns only in layouts similar to her home ward, whether her recall errors preserve sensible ward groupings, and whether a beginner drilled on the same ward reaches her speed.",
        credit: 1.0,
      },
      {
        text: "The veteran nurse seems to know her ward well.",
        credit: 0.3,
      },
      {
        text: "Experience probably builds her skill; we could test more nurses.",
        credit: 0.6,
      },
      {
        text: "Wayfinding is too individual to credit experience for her speed.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would most distinguish your 'learned map from experience' lead from the rival 'she simply has a better natural sense of direction,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: compare her wayfinding to a beginner's in a brand-new, unfamiliar hospital where neither has experience — if her edge comes from a learned map, the two should perform alike on unfamiliar ground. My lead is refuted if she still outperforms beginners in the unfamiliar building, which would point to a general navigational talent rather than ward-specific learning.",
      yieldAnchors: [
        "She finds rooms instantly after years on the ward",
        "A new nurse keeps getting lost",
        "She gets lost like a beginner in an unfamiliar hospital",
      ],
      riskAnchors: [
        "Her advantage returns only in layouts similar to her ward",
        "Her errors preserve sensible ward groupings",
        "A beginner drilled on the same ward reaches her speed",
      ],
      defeatedBy: [
        "She simply has a better natural sense of direction",
        "Experience on the ward is unrelated to her speed",
      ],
    },
    correctAnswer:
      "Her speed probably comes from a rich learned map built up through repeated experience, not from a general sense of direction, since it vanishes in an unfamiliar building; test whether her advantage returns only in layouts similar to her home ward, whether her recall errors preserve sensible ward groupings, and whether a beginner drilled on the same ward reaches her speed.",
    explanation:
      "Full credit names experience-built knowledge with three checks and an unfamiliar-building test that names its refutation; 'too individual to credit experience' opens nothing.",
  },
];

const written: HomeworkItem[] = [
  {
    itemType: "written",
    prompt:
      "A police department notices that when witnesses are shown a lineup all at once, they more often pick an innocent look-alike, but when shown one face at a time they make fewer confident false picks. The detectives also recall that all-at-once witnesses tend to compare faces and choose 'whoever looks most like' the culprit. In one paragraph, propose the strongest lead for why the all-at-once lineup produces more false identifications and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest lead is that an all-at-once lineup invites relative judgment — the witness compares the faces and picks whoever looks most like the suspect, even when the real culprit is absent — whereas a one-at-a-time lineup forces an absolute yes/no decision against memory. This lead predicts checkable things: false picks should be highest in lineups where no face is the true culprit but one is a close look-alike; warning witnesses 'the culprit may not be here' should cut all-at-once errors by discouraging comparison; and witnesses who can study faces only sequentially, without going back, should make fewer confident mistakes. I would test it by running culprit-absent versus culprit-present lineups in both formats, by adding the 'may not be present' instruction to half the all-at-once lineups, and by recording whether witnesses glance back and forth and whether that comparing behavior predicts false picks.",
      yieldAnchors: [
        "All-at-once lineups produce more false picks of innocent look-alikes",
        "One-at-a-time lineups produce fewer confident false picks",
        "All-at-once witnesses tend to compare faces and choose the closest match",
      ],
      riskAnchors: [
        "False picks peak when the culprit is absent but a look-alike is present",
        "A 'culprit may not be present' warning cuts all-at-once errors",
        "Comparing behavior predicts who makes false picks",
      ],
      defeatedBy: [
        "Lineup format is irrelevant and accuracy depends only on the witness",
        "Witnesses always identify by absolute memory regardless of format",
        "Nothing can be concluded without far more lineups",
      ],
    },
    correctAnswer:
      "The strongest lead is that an all-at-once lineup invites relative judgment — the witness compares the faces and picks whoever looks most like the suspect, even when the real culprit is absent — whereas a one-at-a-time lineup forces an absolute yes/no decision against memory. This lead predicts checkable things: false picks should be highest in lineups where no face is the true culprit but one is a close look-alike; warning witnesses 'the culprit may not be here' should cut all-at-once errors by discouraging comparison; and witnesses who can study faces only sequentially, without going back, should make fewer confident mistakes. I would test it by running culprit-absent versus culprit-present lineups in both formats, by adding the 'may not be present' instruction to half the all-at-once lineups, and by recording whether witnesses glance back and forth and whether that comparing behavior predicts false picks.",
    explanation:
      "Under inverted grading, the cautious 'nothing can be concluded without more lineups' earns near-zero and an answer naming no test scores low; top credit goes to the relative-judgment lead that commits to a mechanism and names a culprit-absent test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A college instructor finds that students who take a low-stakes quiz after each lecture score much higher on the final than students who instead get extra time to reread their notes. The quizzed students also report feeling less confident during the term, while the rereaders feel sure they know the material. In one paragraph, propose the strongest lead and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest lead is that quizzing makes students actively retrieve the material, which strengthens the memory's retrieval path and exposes gaps, while rereading only produces a false sense of fluency that feels like knowing but doesn't survive to the final. This lead is productive because it predicts checkable consequences: the quizzed group's advantage should be largest on the delayed final and small or absent on a quiz given the same day; rereaders' confidence should track how fluently they can reread, not how much they later recall; and giving rereaders a single end-of-lecture quiz should narrow the gap. I would test it by comparing same-day versus delayed test performance for both groups, by measuring whether reread fluency predicts confidence but not final scores, and by adding one quiz to a subset of rereaders to see whether retrieval alone reproduces the benefit.",
      yieldAnchors: [
        "Quizzed students score much higher on the final",
        "Rereaders feel sure they know the material",
        "Quizzed students feel less confident during the term",
      ],
      riskAnchors: [
        "The quizzing advantage is largest on the delayed final",
        "Reread fluency predicts confidence but not final scores",
        "One added quiz narrows the gap for rereaders",
      ],
      defeatedBy: [
        "Quizzed students were simply stronger to begin with",
        "Rereading and quizzing build memory equally well",
        "Learning is too individual to draw any lead",
      ],
    },
    correctAnswer:
      "The strongest lead is that quizzing makes students actively retrieve the material, which strengthens the memory's retrieval path and exposes gaps, while rereading only produces a false sense of fluency that feels like knowing but doesn't survive to the final. This lead is productive because it predicts checkable consequences: the quizzed group's advantage should be largest on the delayed final and small or absent on a quiz given the same day; rereaders' confidence should track how fluently they can reread, not how much they later recall; and giving rereaders a single end-of-lecture quiz should narrow the gap. I would test it by comparing same-day versus delayed test performance for both groups, by measuring whether reread fluency predicts confidence but not final scores, and by adding one quiz to a subset of rereaders to see whether retrieval alone reproduces the benefit.",
    explanation:
      "The cautious 'learning is too individual to draw any lead' earns near-zero; credit rewards committing to the retrieval-practice mechanism and naming the delayed-test and added-quiz checks that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A therapist notices that several clients, after weeks of being asked detailed questions about a childhood they can't clearly remember, begin to report vivid memories of events no relative can confirm and no record supports. The clients describe these memories with strong emotion and full confidence. In one paragraph, propose the strongest lead and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest lead is that repeatedly imagining and discussing suggested events can build false memories that feel completely real, because the mind doesn't reliably tag whether a vivid mental image came from a true experience or from imagination and suggestion. This lead is productive because it predicts checkable consequences: clients who spend more sessions imagining an event should report richer, more confident 'memories' of it; suggested events that are plausible should be adopted more readily than wildly implausible ones; and the confidence and emotion attached to confirmed-false memories should be just as high as for verified real ones. I would test it, ethically, in a controlled study by giving volunteers a mix of true family events and one plausible-but-false event suggested by relatives, then tracking whether repeated imagining grows the false memory, whether plausibility predicts adoption, and whether people can tell their false memories from true ones by confidence alone.",
      yieldAnchors: [
        "Vivid memories emerge only after weeks of suggestive questioning",
        "No relative or record confirms the events",
        "Clients report them with strong emotion and full confidence",
      ],
      riskAnchors: [
        "More imagining sessions yield richer, more confident false memories",
        "Plausible suggested events are adopted more readily than implausible ones",
        "Confidence and emotion cannot separate false memories from true ones",
      ],
      defeatedBy: [
        "Vivid, confident memories are always accurate records of real events",
        "The suggestive questioning played no role in the new memories",
        "Memory is too mysterious to say where the recollections came from",
      ],
    },
    correctAnswer:
      "The strongest lead is that repeatedly imagining and discussing suggested events can build false memories that feel completely real, because the mind doesn't reliably tag whether a vivid mental image came from a true experience or from imagination and suggestion. This lead is productive because it predicts checkable consequences: clients who spend more sessions imagining an event should report richer, more confident 'memories' of it; suggested events that are plausible should be adopted more readily than wildly implausible ones; and the confidence and emotion attached to confirmed-false memories should be just as high as for verified real ones. I would test it, ethically, in a controlled study by giving volunteers a mix of true family events and one plausible-but-false event suggested by relatives, then tracking whether repeated imagining grows the false memory, whether plausibility predicts adoption, and whether people can tell their false memories from true ones by confidence alone.",
    explanation:
      "Under inverted grading, 'memory is too mysterious to say where the recollections came from' earns near-zero and the overreach 'vivid memories are always accurate' is defeated by the data; top credit goes to the source-monitoring lead that commits to a mechanism and names tests that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A music student finds that when she practices a hard passage right before bed and sleeps, she plays it noticeably better the next morning without any extra practice — but when she practices the same kind of passage in the morning and stays awake all day, she shows no overnight-style jump. Her total practice time is the same in both cases. In one paragraph, propose the strongest lead and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest lead is that sleep actively consolidates the newly practiced motor skill — the brain replays and stabilizes the sequence during sleep — so the overnight gain comes from sleep itself, not merely from a rest break or the passage of time. This lead is productive because it predicts checkable consequences: a daytime nap after practice should produce a similar jump, while an equal-length awake rest should not; the gain should be biggest for passages practiced just before sleep rather than hours earlier in the day; and selectively disrupting deep sleep should erase the improvement even with the same total sleep time. I would test it by comparing a post-practice nap against an equal awake break, by varying how long before sleep the passage is practiced, and by waking her briefly out of deep sleep on some nights to see whether the morning gain disappears.",
      yieldAnchors: [
        "Practice before sleep yields a next-morning improvement with no extra practice",
        "Morning practice with no sleep shows no comparable jump",
        "Total practice time is the same in both cases",
      ],
      riskAnchors: [
        "A daytime nap produces a similar jump while an awake rest does not",
        "The gain is biggest for passages practiced just before sleep",
        "Disrupting deep sleep erases the improvement",
      ],
      defeatedBy: [
        "Any rest or the mere passage of time produces the gain",
        "Sleep plays no role and the improvement is random",
        "Skill change is too individual to draw any lead",
      ],
    },
    correctAnswer:
      "The strongest lead is that sleep actively consolidates the newly practiced motor skill — the brain replays and stabilizes the sequence during sleep — so the overnight gain comes from sleep itself, not merely from a rest break or the passage of time. This lead is productive because it predicts checkable consequences: a daytime nap after practice should produce a similar jump, while an equal-length awake rest should not; the gain should be biggest for passages practiced just before sleep rather than hours earlier in the day; and selectively disrupting deep sleep should erase the improvement even with the same total sleep time. I would test it by comparing a post-practice nap against an equal awake break, by varying how long before sleep the passage is practiced, and by waking her briefly out of deep sleep on some nights to see whether the morning gain disappears.",
    explanation:
      "The cautious 'skill change is too individual to draw any lead' earns near-zero and the rival 'any rest produces the gain' is a claim the nap-versus-awake test can defeat; top credit goes to the sleep-consolidation lead that commits to a mechanism and names tests that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A museum guide notices that visitors who are asked to retell what they saw immediately after a tour later remember the exhibits well — but if a staff member happens to mention an artifact that wasn't actually in the tour, many visitors later 'remember' seeing it, and they describe it with the same confidence as real exhibits. In one paragraph, propose the strongest lead and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest lead is that memory is reconstructed at recall, so post-event information — like the staff member's mention — gets blended into the original memory of the tour, and because the brain loses track of where each detail came from, the suggested artifact feels just as 'seen' as the real ones. This lead is productive because it predicts checkable consequences: visitors warned that later conversations may contain errors should report fewer false artifacts; the false memory should grow stronger the longer the gap before the misleading mention; and when asked to label each memory as 'saw it on the tour' or 'heard about it after,' visitors who absorbed the artifact should misattribute it to the tour itself. I would test it by adding a warning to half the visitors, by varying the delay before the false mention, and by running a source-tagging check to see whether the suggested artifact is wrongly credited to direct viewing.",
      yieldAnchors: [
        "Immediate retelling helps visitors remember real exhibits well",
        "A mentioned but absent artifact is later 'remembered' as seen",
        "Visitors describe the false artifact as confidently as real ones",
      ],
      riskAnchors: [
        "A warning about misleading mentions cuts false-artifact reports",
        "A longer gap before the mention strengthens the false memory",
        "Visitors misattribute the suggested artifact to the tour itself",
      ],
      defeatedBy: [
        "Visitors knowingly defer to staff rather than misremembering",
        "The staff mention has no effect on what visitors recall",
        "Nothing can be concluded without surveying every visitor",
      ],
    },
    correctAnswer:
      "The strongest lead is that memory is reconstructed at recall, so post-event information — like the staff member's mention — gets blended into the original memory of the tour, and because the brain loses track of where each detail came from, the suggested artifact feels just as 'seen' as the real ones. This lead is productive because it predicts checkable consequences: visitors warned that later conversations may contain errors should report fewer false artifacts; the false memory should grow stronger the longer the gap before the misleading mention; and when asked to label each memory as 'saw it on the tour' or 'heard about it after,' visitors who absorbed the artifact should misattribute it to the tour itself. I would test it by adding a warning to half the visitors, by varying the delay before the false mention, and by running a source-tagging check to see whether the suggested artifact is wrongly credited to direct viewing.",
    explanation:
      "Under inverted grading, 'nothing can be concluded without surveying every visitor' earns near-zero and an answer with no test scores low; top credit goes to the reconstructive-memory and misinformation lead that commits to a mechanism and names a source-tagging test that could refute it.",
  },
];

export const section: SectionContent = {
  slug: "memory",
  title: "Memory: How the Mind Stores, Loses, and Reshapes the Past",
  weekNumber: 1,
  blurb:
    "Memory isn't a video recorder — it encodes, loses, and rebuilds the past, which is why we forget on a predictable curve and can sincerely remember things that never happened.",
  lectureTitle:
    "1.4 Memory: how the mind stores, loses, and reshapes the past",
  body: `# Memory: How the Mind Stores, Loses, and Reshapes the Past

It is tempting to picture memory as a camera: an event happens, the brain records it, and later you press play and watch the recording. Almost everything cognitive scientists have learned says this picture is wrong. Memory is not a recording you replay; it is a process you *rebuild* every time you remember. Understanding how the mind stores, loses, and reshapes the past is one of the central achievements of cognitive science — and it has real stakes, from how you should study to whether we can trust an eyewitness.

## Three jobs: encoding, storage, retrieval

A memory has to clear three hurdles. First **encoding**: turning an experience into a trace the brain can keep. Second **storage**: holding that trace over time. Third **retrieval**: getting it back out when you need it. A failure at any stage looks like "forgetting," but the fixes differ. You can't retrieve a name you never encoded because you weren't paying attention; and you can fail to retrieve something that is, in fact, still stored — which is why a hint can suddenly bring back a word that was "gone."

## Forgetting has a shape

Forgetting is not random. When people learn a list and are tested over time, they lose the most right after learning, and then the rate of loss slows down — a steep drop that flattens into a long tail. The memories that survive the first day tend to stick around. This is why one heroic cram session fades fast, while a little review spread across several days builds something durable: each time you reload a fading memory, you strengthen it. Spacing your practice and *testing* yourself (rather than rereading) beat the methods that merely *feel* productive.

## Memory is reconstructive

Here is the surprising part. When you retrieve a memory, you don't pull out a sealed file — you rebuild the event from fragments, plugging gaps with what is plausible, expected, or recently suggested. Usually this works fine. But it means memory can be edited after the fact. In classic studies, people who watched the same crash estimated higher speeds when asked how fast the cars "smashed" rather than "hit," and later falsely remembered broken glass that was never there. The wording didn't just bias their answer; it changed the stored memory.

## False memories and the misinformation effect

Because memory is reconstructive, **information that arrives after an event can blend into the memory of the event itself**. This is the misinformation effect, and it is powerful. A misleading question, a leading interview, a relative's confident retelling — each can plant a detail that later feels genuinely "remembered." People can even acquire whole vivid memories of events that never happened, complete with sensory detail and full confidence, because the mind doesn't reliably tag where a vivid image came from (a real experience, or imagination). The feeling of remembering is not proof of accuracy.

## Confidence is not accuracy

We naturally trust a confident memory, but confidence and correctness can come apart. An eyewitness who stares at a lineup can grow certain of a face simply because it has become familiar, not because it is the right one. Flashbulb memories of dramatic news feel razor-sharp years later, yet careful checks against people's own day-after notes show the details quietly drift while confidence stays high. Knowing this doesn't make memory useless — it makes us careful: prefer immediate reports, avoid leading questions, and treat strong feelings of certainty as a clue, not a guarantee.

## In the real world

A jury hears a witness say, with total confidence, "I'll never forget that face." The camera model says: case closed. The cognitive-science view says: ask better questions. The dodge — "memory is too complex to say anything" — helps no one. The strong, testable lead is that the witness's certainty may reflect familiarity built up during the investigation, not the original memory. That lead tells us exactly what to check: Was the lineup shown all at once, inviting a "closest match" guess? Was the witness warned the culprit might not be present? How long was the gap, and were leading questions asked? Each is a concrete test that could confirm or refute the worry — and that is what treating memory as a rebuildable process, rather than a recording, buys you: not blind trust or blanket doubt, but the right questions to ask.`,
  homework: {
    mcq,
    hybrid,
    written,
  },
};
