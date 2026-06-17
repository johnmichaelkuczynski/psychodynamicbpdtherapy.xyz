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
      "A college student is a fervent vegan activist with one friend group, a hard-partying thrill-seeker with another, and a quiet bookworm with a third — and means each one sincerely while she's in it. Alone in her room between groups, she is flooded by a hollow panic and isn't sure who she is. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Each persona is likely a borrowed self she puts on to fill an inner void — she has no stable core to fall back on, so she takes on whoever she's with, and the hollow panic alone is the emptiness the borrowing keeps at bay; test whether her self-description reorganizes around the present company, whether the panic floods in specifically when she's alone with no one to mirror, and whether she can name any value she holds independent of who she's with.",
        credit: 1.0,
      },
      {
        text: "She probably has some identity stuff going on; we could explore how she sees herself.",
        credit: 0.6,
      },
      {
        text: "She seems to act differently around different friend groups.",
        credit: 0.3,
      },
      {
        text: "Young people just try on different personas, so there's nothing to read in her shifting between groups.",
        credit: 0,
      },
    ],
    correctAnswer:
      "Each persona is likely a borrowed self she puts on to fill an inner void — she has no stable core to fall back on, so she takes on whoever she's with, and the hollow panic alone is the emptiness the borrowing keeps at bay; test whether her self-description reorganizes around the present company, whether the panic floods in specifically when she's alone with no one to mirror, and whether she can name any value she holds independent of who she's with.",
    explanation:
      "Full credit names the borrowed-identity-over-a-void function and a reorganizes-around-the-company test; 'young people just try on personas' is the dodge the alone-panic and total reorganization defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "A man has switched career paths five times in three years — law, then carpentry, then a meditation retreat, then crypto, then nursing — each time announcing he has 'finally found himself.' Each switch came within weeks of meeting a charismatic new person he admired. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He seems to change careers a lot.",
        credit: 0.3,
      },
      {
        text: "Each 'finally found myself' is likely an identity absorbed from the latest admired person rather than a goal grown from within — lacking a durable sense of who he is, he adopts the other's life as his own, which is why the switches track new people rather than new self-knowledge; test whether each pivot follows meeting someone he idealizes, whether the previous 'true calling' is dropped without grief, and whether he can describe a thread that's his own across all five.",
        credit: 1.0,
      },
      {
        text: "He's clearly just lying about being committed and using people to climb, dropping them when done.",
        credit: 0,
      },
      {
        text: "He might be searching for the right fit; we could talk through his career options.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Each 'finally found myself' is likely an identity absorbed from the latest admired person rather than a goal grown from within — lacking a durable sense of who he is, he adopts the other's life as his own, which is why the switches track new people rather than new self-knowledge; test whether each pivot follows meeting someone he idealizes, whether the previous 'true calling' is dropped without grief, and whether he can describe a thread that's his own across all five.",
    explanation:
      "Top credit names the absorbed-identity function and a tracks-new-people test; 'he's lying and using people' is the overreach his sincere, repeated 'found myself' conviction defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "Within a few weeks of each new relationship, a woman adopts her partner's music, politics, diet, and weekend habits wholesale, and speaks of them as lifelong passions. Asked by a friend what she herself actually likes, she goes blank and feels a wave of emptiness. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She might lose herself a bit in relationships; we could look at that pattern.",
        credit: 0.6,
      },
      {
        text: "The wholesale adoption likely fills an inner blankness with the partner's identity — with no firm sense of her own preferences, she imports his to have a self at all, which is why the question 'what do you like?' meets a void; test whether her tastes swap out completely with each new partner, whether the emptiness surfaces precisely when she's asked to speak for herself, and whether any preference survives across relationships.",
        credit: 1.0,
      },
      {
        text: "She seems to take up her partners' interests quickly.",
        credit: 0.3,
      },
      {
        text: "Couples naturally rub off on each other, so there's nothing underneath her taking up his interests.",
        credit: 0,
      },
    ],
    correctAnswer:
      "The wholesale adoption likely fills an inner blankness with the partner's identity — with no firm sense of her own preferences, she imports his to have a self at all, which is why the question 'what do you like?' meets a void; test whether her tastes swap out completely with each new partner, whether the emptiness surfaces precisely when she's asked to speak for herself, and whether any preference survives across relationships.",
    explanation:
      "Full credit names the import-an-identity-over-blankness function and a do-tastes-swap-with-each-partner test; 'couples rub off on each other' is the dodge the go-blank emptiness and total swap defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "A young man says that when he's alone he feels like 'nobody — like there's no one home.' He describes a chronic hollow emptiness and only feels real and definite when he's absorbed into a strong personality, taking on their opinions and even their gestures. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Feeling lost sometimes is part of being human, so 'no one home' doesn't tell us anything specific.",
        credit: 0,
      },
      {
        text: "He seems to feel empty when alone and better around strong people.",
        credit: 0.3,
      },
      {
        text: "The merging likely wards off a frightening sense of having no cohesive self — the chronic emptiness is the experience of identity diffusion, and borrowing a strong other's personality temporarily gives him an outline he lacks; test whether the 'realness' depends on whoever he's currently absorbed in, whether the emptiness returns the moment that person is gone, and whether he can hold any sense of self when no one is around to take it from.",
        credit: 1.0,
      },
      {
        text: "He may struggle with self-esteem; we could work on how he feels about himself.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The merging likely wards off a frightening sense of having no cohesive self — the chronic emptiness is the experience of identity diffusion, and borrowing a strong other's personality temporarily gives him an outline he lacks; test whether the 'realness' depends on whoever he's currently absorbed in, whether the emptiness returns the moment that person is gone, and whether he can hold any sense of self when no one is around to take it from.",
    explanation:
      "Top credit names the borrowed-outline-wards-off-no-self function and a does-realness-depend-on-the-other test; 'feeling lost is human' is the dodge the chronic emptiness and merging pattern defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "A woman holds passionately religious, traditional views when she's with her family and sincerely cynical, libertine views when she's with her coworkers — and isn't troubled by the contradiction, because each set feels completely true in the moment. Privately she admits she doesn't know what she really believes. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She seems to hold different views with different people.",
        credit: 0.3,
      },
      {
        text: "The contradictory, audience-matched values likely reflect a self that reorganizes around whoever she's with rather than an integrated set of convictions — with no stable inner compass, she takes on the room's beliefs as her own, which is why the contradiction doesn't register from the inside; test whether her stated values track the present audience, whether she can state a belief she'd hold in any room, and whether the 'not knowing what I believe' is a settled emptiness rather than ordinary growth.",
        credit: 1.0,
      },
      {
        text: "Everyone contains multitudes and adapts to their audience, so her shifting views mean nothing in particular.",
        credit: 0,
      },
      {
        text: "She might have some unsettled beliefs; we could discuss her values.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The contradictory, audience-matched values likely reflect a self that reorganizes around whoever she's with rather than an integrated set of convictions — with no stable inner compass, she takes on the room's beliefs as her own, which is why the contradiction doesn't register from the inside; test whether her stated values track the present audience, whether she can state a belief she'd hold in any room, and whether the 'not knowing what I believe' is a settled emptiness rather than ordinary growth.",
    explanation:
      "Full credit names the audience-organized-self function and a do-values-track-the-room test; 'everyone contains multitudes' is the dodge the untroubled contradiction and inner emptiness defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "A recent graduate unconsciously copies each new mentor's speech rhythms, posture, opinions, and even handwriting, becoming almost indistinguishable from them — then, alone, is gripped by a feeling that he's a hollow impostor with nothing of his own underneath. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He probably looks up to his mentors a lot; we could talk about his role models.",
        credit: 0.6,
      },
      {
        text: "Imitation is the highest form of flattery, so copying his mentors is harmless and tells us nothing.",
        credit: 0,
      },
      {
        text: "The near-total mimicry likely substitutes a borrowed self for one he experiences as absent — by becoming the mentor he gets a temporary identity, and the 'hollow impostor' feeling is the diffusion the mimicry covers over; test whether he reorganizes into whoever he's currently apprenticed to, whether the impostor dread surfaces precisely when he's alone and unmirrored, and whether anything in his manner persists across mentors.",
        credit: 1.0,
      },
      {
        text: "He seems to imitate his mentors and then feel like a fraud.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The near-total mimicry likely substitutes a borrowed self for one he experiences as absent — by becoming the mentor he gets a temporary identity, and the 'hollow impostor' feeling is the diffusion the mimicry covers over; test whether he reorganizes into whoever he's currently apprenticed to, whether the impostor dread surfaces precisely when he's alone and unmirrored, and whether anything in his manner persists across mentors.",
    explanation:
      "Top credit names the borrowed-self-over-absence function and a does-he-reorganize-into-each-mentor test; 'imitation is flattery' is the dodge the hollow-impostor dread defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "Asked to describe herself, a woman can only answer through others' eyes — 'my boss thinks I'm dependable, my ex thought I was selfish, my friend says I'm fun' — and says, with real distress, 'I'm just whatever someone needs me to be.' She cannot offer a single description that is simply her own. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Lots of people describe themselves through their relationships, so this is unremarkable.",
        credit: 0,
      },
      {
        text: "Her self drawn entirely from others' views likely marks an absent integrated self-image — without an inner sense of who she is, she can only assemble herself from how others see her and what they need, which is the structure of identity diffusion; test whether every self-statement is routed through someone else, whether she can name one trait independent of an observer, and whether the 'whatever they need' is voiced with the emptiness of having no self rather than easy flexibility.",
        credit: 1.0,
      },
      {
        text: "She seems to define herself by what other people think.",
        credit: 0.3,
      },
      {
        text: "She might value others' opinions highly; we could explore her self-image.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Her self drawn entirely from others' views likely marks an absent integrated self-image — without an inner sense of who she is, she can only assemble herself from how others see her and what they need, which is the structure of identity diffusion; test whether every self-statement is routed through someone else, whether she can name one trait independent of an observer, and whether the 'whatever they need' is voiced with the emptiness of having no self rather than easy flexibility.",
    explanation:
      "Full credit names the assembled-from-others'-views function and a can-she-name-a-trait-of-her-own test; 'people describe themselves through relationships' is the dodge her distress and total inability to self-describe defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "A woman quit a stable, well-paid job within a month of befriending a charismatic startup founder, threw herself fully into that world, then — after meeting a painter — abandoned it just as completely to 'become an artist.' Each time she insisted it was her true path; no thread connects the leaps except the new person she'd fallen in with. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She seems to make big life changes after meeting new people.",
        credit: 0.3,
      },
      {
        text: "She's obviously just chasing whoever seems exciting and will drop the painter too, so she's flighty and unreliable.",
        credit: 0,
      },
      {
        text: "Each 'true path' is likely an identity she takes on from the latest captivating person rather than a direction of her own — with no stable self to steer by, the leaps follow the people, not an inner aim, which is why nothing carries across them; test whether each reinvention follows a new admired figure, whether the prior 'true path' is dropped without mourning, and whether she can name any goal that survives the change of company.",
        credit: 1.0,
      },
      {
        text: "She might be figuring out what she wants; we could review her choices.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "Each 'true path' is likely an identity she takes on from the latest captivating person rather than a direction of her own — with no stable self to steer by, the leaps follow the people, not an inner aim, which is why nothing carries across them; test whether each reinvention follows a new admired figure, whether the prior 'true path' is dropped without mourning, and whether she can name any goal that survives the change of company.",
    explanation:
      "Top credit names the identity-follows-the-person function and a does-each-leap-follow-a-new-figure test; 'she's just flighty and unreliable' is the dismissive overreach the sincere, person-linked pattern defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "When a relationship ends, a man doesn't just grieve — he says he 'stops existing,' cannot recall what he likes or believes, and feels like a blank until a new partner gives him shape again. The collapse is the same whether the relationship was long or brief. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Breakups are devastating for everyone, so feeling like you've fallen apart is just normal heartbreak.",
        credit: 0,
      },
      {
        text: "He seems to take breakups very hard.",
        credit: 0.3,
      },
      {
        text: "The total collapse on breakup likely reveals a self that exists only when held together by a partner — with no internal cohesion, the other person was supplying his identity, so losing them empties him rather than merely saddening him; test whether the 'I stop existing' is identity-loss rather than grief, whether the collapse is as severe after brief relationships as long ones, and whether a new partner restores not just comfort but a sense of who he is.",
        credit: 1.0,
      },
      {
        text: "He may be very attached in relationships; we could look at how he handles endings.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The total collapse on breakup likely reveals a self that exists only when held together by a partner — with no internal cohesion, the other person was supplying his identity, so losing them empties him rather than merely saddening him; test whether the 'I stop existing' is identity-loss rather than grief, whether the collapse is as severe after brief relationships as long ones, and whether a new partner restores not just comfort but a sense of who he is.",
    explanation:
      "Full credit names the partner-supplies-the-self function and an is-it-identity-loss-not-grief test; 'breakups devastate everyone' is the dodge the brief-relationship-same-collapse pattern defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A teenager reinvents her entire online persona every few weeks — aesthetic, beliefs, the subculture she belongs to — each one announced with total earnest conviction. When followers drop or a look stops getting attention, she is gripped by a frantic, empty dread until the next reinvention takes hold. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Teenagers experiment with identity online all the time, so her reinventions are nothing to read into.",
        credit: 0,
      },
      {
        text: "She might be exploring who she is; we could talk about her online life.",
        credit: 0.6,
      },
      {
        text: "The serial reinventions likely paper over an inner void with whatever persona the audience rewards — each new self is sincere because she has no stable one to compare it to, and the frantic dread when attention drops is the emptiness breaking through; test whether each persona is built around what's currently getting a response, whether the dread floods in precisely when the mirror of attention fails, and whether any sense of self persists between reinventions.",
        credit: 1.0,
      },
      {
        text: "She seems to keep changing her online image.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The serial reinventions likely paper over an inner void with whatever persona the audience rewards — each new self is sincere because she has no stable one to compare it to, and the frantic dread when attention drops is the emptiness breaking through; test whether each persona is built around what's currently getting a response, whether the dread floods in precisely when the mirror of attention fails, and whether any sense of self persists between reinventions.",
    explanation:
      "Top credit names the audience-rewarded-persona-over-void function and a does-the-dread-follow-lost-attention test; 'teens experiment online' is the dodge the frantic emptiness defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "In any debate, a woman ends up sincerely agreeing with whoever spoke last and most forcefully — she'll defend a position passionately, then defend its opposite an hour later with equal conviction, unaware of the reversal. Afterward she feels strangely hollow and unsure what she actually thinks. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She might be very open-minded; we could discuss how she forms opinions.",
        credit: 0.6,
      },
      {
        text: "She seems to agree with whoever she's talking to.",
        credit: 0.3,
      },
      {
        text: "Plenty of people are easily persuaded, so changing her mind in arguments means nothing.",
        credit: 0,
      },
      {
        text: "Her view reorganizing around the last forceful speaker likely reflects an absent stable position of her own — without an inner anchor she absorbs the dominant person's stance as her conviction, which is why the reversals go unnoticed and leave her hollow; test whether her opinion tracks who last held the floor, whether she can hold a view against a forceful opposing speaker, and whether the post-debate hollowness is the emptiness of having no settled stance.",
        credit: 1.0,
      },
    ],
    correctAnswer:
      "Her view reorganizing around the last forceful speaker likely reflects an absent stable position of her own — without an inner anchor she absorbs the dominant person's stance as her conviction, which is why the reversals go unnoticed and leave her hollow; test whether her opinion tracks who last held the floor, whether she can hold a view against a forceful opposing speaker, and whether the post-debate hollowness is the emptiness of having no settled stance.",
    explanation:
      "Full credit names the absorbs-the-dominant-stance function and a does-her-view-track-the-last-speaker test; 'people are easily persuaded' is the dodge the unnoticed reversals and hollowness defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "A woman describes a chronic emptiness 'like a hole in the middle of me' that she fills with intense, all-consuming new friendships and romances; once the novelty fades and the emptiness creeps back, she abruptly drops the person and finds someone new. She is bewildered and ashamed by the cycle. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Some people just love the excitement of new relationships, so the cycle isn't worth interpreting.",
        credit: 0,
      },
      {
        text: "She seems to go through relationships quickly.",
        credit: 0.3,
      },
      {
        text: "The intense-then-discarded relationships likely function to plug a chronic inner emptiness rather than to connect — each new person briefly fills the void, and when their novelty can no longer mask it she replaces them, so the driver is the emptiness, not the people; test whether the drop coincides with the return of the hollow feeling rather than any real fault, whether the emptiness is present between relationships, and whether she can tolerate being alone without rushing to fill it.",
        credit: 1.0,
      },
      {
        text: "She might struggle with relationships; we could look at the pattern together.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "The intense-then-discarded relationships likely function to plug a chronic inner emptiness rather than to connect — each new person briefly fills the void, and when their novelty can no longer mask it she replaces them, so the driver is the emptiness, not the people; test whether the drop coincides with the return of the hollow feeling rather than any real fault, whether the emptiness is present between relationships, and whether she can tolerate being alone without rushing to fill it.",
    explanation:
      "Top credit names the relationships-plug-the-void function and a does-the-drop-follow-returning-emptiness test; 'some people love novelty' is the dodge her shame and the chronic hole defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "A man's account of his own wife shifts to match whoever he's speaking with: to his admiring brother she's 'the love of my life,' to his bitter divorced friend she's 'impossible to live with,' each delivered with full sincerity minutes apart. Pressed on what he himself feels, he draws a blank. Which conclusion best follows?",
    mcOptions: [
      {
        text: "People tailor what they share to their audience, so his shifting descriptions mean nothing.",
        credit: 0,
      },
      {
        text: "His view of his wife reorganizing around each listener likely reflects the absence of an integrated, stable image of her and of his own feelings — without a cohesive inner picture he adopts the listener's frame as his own, which is why pressing for his own view hits a blank; test whether his account tracks the company rather than any events with her, whether he can hold one steady view across both conversations, and whether the blank is genuine emptiness rather than discretion.",
        credit: 1.0,
      },
      {
        text: "He seems to describe his wife differently to different people.",
        credit: 0.3,
      },
      {
        text: "He might have mixed feelings about his marriage; we could explore them.",
        credit: 0.6,
      },
    ],
    correctAnswer:
      "His view of his wife reorganizing around each listener likely reflects the absence of an integrated, stable image of her and of his own feelings — without a cohesive inner picture he adopts the listener's frame as his own, which is why pressing for his own view hits a blank; test whether his account tracks the company rather than any events with her, whether he can hold one steady view across both conversations, and whether the blank is genuine emptiness rather than discretion.",
    explanation:
      "Full credit names the no-integrated-image-of-self-and-other function and a does-his-account-track-the-listener test; 'people tailor what they share' is the dodge the full-sincerity reversals and blank defeat.",
  },
  {
    itemType: "mc",
    prompt:
      "A student has chosen and dropped three graduate programs, each time picking the field purely because there was a professor she desperately wanted to become — copying their interests and even their way of dressing — and losing all interest the moment she could no longer be near them. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She seems to pick programs based on the professors.",
        credit: 0.3,
      },
      {
        text: "She might be drawn to inspiring teachers; we could talk about what motivates her.",
        credit: 0.6,
      },
      {
        text: "The field-chosen-to-become-the-professor pattern likely shows a self assembled by merging with an idealized figure rather than built on her own interests — the discipline is a vehicle for taking on that person's identity, so interest dies when the merger is no longer possible; test whether each choice forms around a person she wants to be rather than the subject, whether interest collapses when access to them ends, and whether any intellectual thread of her own survives across the three.",
        credit: 1.0,
      },
      {
        text: "Admiring your teachers is normal and motivating, so there's nothing underneath her choices.",
        credit: 0,
      },
    ],
    correctAnswer:
      "The field-chosen-to-become-the-professor pattern likely shows a self assembled by merging with an idealized figure rather than built on her own interests — the discipline is a vehicle for taking on that person's identity, so interest dies when the merger is no longer possible; test whether each choice forms around a person she wants to be rather than the subject, whether interest collapses when access to them ends, and whether any intellectual thread of her own survives across the three.",
    explanation:
      "Top credit names the merge-with-an-idealized-figure function and a does-interest-die-when-access-ends test; 'admiring teachers is normal' is the dodge the become-the-person pattern defeats.",
  },
  {
    itemType: "mc",
    prompt:
      "A woman cannot bear to be alone in a room — within minutes an unbearable emptiness floods in and she feels she's 'disappearing.' She frantically texts a rotating cast of people, not about anything in particular, just to get a response that makes her feel she exists. Which conclusion best follows?",
    mcOptions: [
      {
        text: "Lots of people dislike being alone, so this is just ordinary loneliness.",
        credit: 0,
      },
      {
        text: "She might not like solitude; we could explore her need for company.",
        credit: 0.6,
      },
      {
        text: "The 'disappearing' alone and frantic reaching out likely show that her sense of existing depends on being reflected by others — without contact the emptiness of identity diffusion floods in, and the texts are bids to be mirrored back into being, not connection; test whether the dread is specifically of dissolving rather than missing company, whether any response will do regardless of content, and whether she can feel real for any stretch with no one answering.",
        credit: 1.0,
      },
      {
        text: "She seems to dislike being alone and texts people a lot.",
        credit: 0.3,
      },
    ],
    correctAnswer:
      "The 'disappearing' alone and frantic reaching out likely show that her sense of existing depends on being reflected by others — without contact the emptiness of identity diffusion floods in, and the texts are bids to be mirrored back into being, not connection; test whether the dread is specifically of dissolving rather than missing company, whether any response will do regardless of content, and whether she can feel real for any stretch with no one answering.",
    explanation:
      "Full credit names the existence-depends-on-being-mirrored function and a is-it-dissolving-not-loneliness test; 'people dislike being alone' is the dodge the disappearing dread and content-free texting defeat.",
  },
];

const hybrid: HomeworkItem[] = [
  {
    itemType: "hybrid",
    prompt:
      "A man's accent, slang, and even political opinions shift audibly depending on who he's spent the day with — clipped and corporate after work, loose and radical after his artist friends — and he means each one. Alone at night he describes a flat, frightening sense of being 'no one in particular.' Which conclusion best follows?",
    mcOptions: [
      {
        text: "The shifting accent and opinions likely reflect a self that takes its shape from the present company because there's no stable one underneath — the 'no one in particular' at night is the diffusion the borrowing covers, so the changes track who he's been with rather than any real change of mind; test whether his manner reorganizes around the day's company, whether the empty feeling comes precisely when he's alone and unmirrored, and whether any trait holds steady across all his settings.",
        credit: 1.0,
      },
      {
        text: "He probably code-switches a lot; we could talk about how he adapts to people.",
        credit: 0.6,
      },
      {
        text: "He seems to talk differently depending on who he's been around.",
        credit: 0.3,
      },
      {
        text: "Everyone code-switches between work and friends, so there's nothing to read in his shifts.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'his self takes its shape from the present company over a void' lead from the rival 'he's just a normal code-switcher,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: check whether the flat 'no one in particular' emptiness arrives specifically when he's alone with no one to take his shape from — a self that hollows out without an audience points to diffusion, not ordinary code-switching. My lead is refuted if he has a steady set of core opinions and tastes that hold across all settings and he feels solidly himself when alone.",
      yieldAnchors: [
        "Accent and opinions shift with the day's company",
        "He means each version sincerely",
        "Feels 'no one in particular' when alone",
      ],
      riskAnchors: [
        "Manner reorganizes around the present company",
        "Emptiness comes precisely when unmirrored",
        "No trait holds steady across settings",
      ],
      defeatedBy: [
        "He keeps stable core views across all settings",
        "He feels solidly himself when alone",
      ],
    },
    correctAnswer:
      "The shifting accent and opinions likely reflect a self that takes its shape from the present company because there's no stable one underneath — the 'no one in particular' at night is the diffusion the borrowing covers, so the changes track who he's been with rather than any real change of mind; test whether his manner reorganizes around the day's company, whether the empty feeling comes precisely when he's alone and unmirrored, and whether any trait holds steady across all his settings.",
    explanation:
      "Full credit names the shape-from-the-company-over-a-void function and is paired with a does-the-emptiness-come-when-alone test that names its refutation; 'everyone code-switches' is the dodge the alone-emptiness defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "Within weeks of joining a new spiritual group, a woman has taken on its entire worldview, diet, vocabulary, and daily schedule, describing it as 'who I've always really been' — exactly as she did six months ago about a political movement she has now wholly forgotten. She brushes off the contradiction. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She seems to throw herself into new groups.",
        credit: 0.3,
      },
      {
        text: "People grow and change their beliefs, so adopting the group's worldview means nothing.",
        credit: 0,
      },
      {
        text: "The total, repeated absorption into each group likely supplies a ready-made identity she can't generate from within — 'who I've always really been' feels true each time because she has no continuous self to contradict it, which is why the prior conversion is dropped without a trace; test whether each immersion follows joining a group rather than any inner development, whether the previous 'real me' is abandoned without grief, and whether anything of her own persists across the conversions.",
        credit: 1.0,
      },
      {
        text: "She might be searching for meaning; we could explore what draws her to these groups.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'each group supplies a ready-made identity over an absent self' lead from the rival 'she's just an enthusiastic seeker who grows,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: check whether the previous 'who I've always been' is dropped completely and without grief the moment a new group takes over — a self wiped clean and overwritten points to borrowed identity, not genuine growth. My lead is refuted if her past commitments leave durable, integrated traces she still carries and builds on rather than forgetting.",
      yieldAnchors: [
        "She adopts each group's worldview wholesale in weeks",
        "Calls each 'who I've always really been'",
        "Forgot the prior movement entirely",
      ],
      riskAnchors: [
        "Each immersion follows joining a group",
        "The prior 'real me' is dropped without grief",
        "Nothing of her own persists across conversions",
      ],
      defeatedBy: [
        "Past commitments leave durable, integrated traces",
        "Her changes build on a continuous thread",
      ],
    },
    correctAnswer:
      "The total, repeated absorption into each group likely supplies a ready-made identity she can't generate from within — 'who I've always really been' feels true each time because she has no continuous self to contradict it, which is why the prior conversion is dropped without a trace; test whether each immersion follows joining a group rather than any inner development, whether the previous 'real me' is abandoned without grief, and whether anything of her own persists across the conversions.",
    explanation:
      "Full credit names the group-supplies-identity-over-absence function and is paired with a is-the-prior-real-me-dropped-without-grief test that names its refutation; 'people grow and change' is the dodge the forgotten conversions defeat.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A young man feels solid and definite only while he is dating someone with a strong personality, taking on their interests and outlook as his own. Between relationships he reports a flat emptiness, can't decide what to do with his time, and says he 'waits to find out who he'll be next.' Which conclusion best follows?",
    mcOptions: [
      {
        text: "He's probably a relationship person; we could talk about his dating patterns.",
        credit: 0.6,
      },
      {
        text: "Feeling better in a relationship is normal, so there's nothing to read in this.",
        credit: 0,
      },
      {
        text: "The 'who I'll be next' depending on a partner likely shows that a strong other supplies the self he can't sustain alone — between relationships the underlying diffusion surfaces as emptiness and aimlessness, so his identity is effectively outsourced to whoever he's with; test whether his interests and outlook swap to match each strong partner, whether the flat emptiness reliably returns when he's single, and whether he can name a direction of his own with no partner to take it from.",
        credit: 1.0,
      },
      {
        text: "He seems to feel better when he's in a relationship.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'a strong partner supplies the self he can't sustain alone' lead from the rival 'he just prefers being in a relationship,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: check whether his interests and outlook swap to match each new strong partner while a flat emptiness and aimlessness return whenever he's single — a self that appears and disappears with a partner points to outsourced identity, not mere preference. My lead is refuted if he keeps stable interests, goals, and a clear sense of himself during single stretches and simply enjoys company.",
      yieldAnchors: [
        "Feels solid only while dating a strong personality",
        "Takes on each partner's interests and outlook",
        "Says he 'waits to find out who he'll be next'",
      ],
      riskAnchors: [
        "Interests swap to match each strong partner",
        "Flat emptiness returns when single",
        "He can name no direction of his own alone",
      ],
      defeatedBy: [
        "He keeps stable interests and goals when single",
        "He has a clear sense of himself between partners",
      ],
    },
    correctAnswer:
      "The 'who I'll be next' depending on a partner likely shows that a strong other supplies the self he can't sustain alone — between relationships the underlying diffusion surfaces as emptiness and aimlessness, so his identity is effectively outsourced to whoever he's with; test whether his interests and outlook swap to match each strong partner, whether the flat emptiness reliably returns when he's single, and whether he can name a direction of his own with no partner to take it from.",
    explanation:
      "Full credit names the partner-supplies-the-self function and is paired with a does-emptiness-return-when-single test that names its refutation; 'he just prefers relationships' is the dodge the between-relationship emptiness defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "Asked in therapy to say three things that are true about herself no matter who she's with, a woman freezes, then offers only how various people see her, and finally says with quiet panic, 'I don't think there's anything under there.' She is articulate and not being evasive. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She seems unsure how to describe herself.",
        credit: 0.3,
      },
      {
        text: "The inability to name anything true of herself apart from others' views likely reflects a genuinely absent integrated self-image — not shyness but the experience of identity diffusion, where there is no stable inner content to report; test whether every attempt routes back through an observer, whether the 'nothing under there' is voiced as real emptiness rather than modesty, and whether she can hold even one self-description steady across different relationships.",
        credit: 1.0,
      },
      {
        text: "Self-reflection is hard for lots of people, so freezing on the question means little.",
        credit: 0,
      },
      {
        text: "She might be low on self-confidence; we could build up her self-image.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'an absent integrated self-image' lead from the rival 'she's just shy or low in confidence,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: check whether every attempt routes back through how others see her and the 'nothing under there' comes with genuine panic rather than modesty — a complete inability to locate any self-content of her own points to diffusion, not shyness. My lead is refuted if, given time, she can name stable traits, values, or preferences that hold across relationships and simply struggled to speak up at first.",
      yieldAnchors: [
        "Can describe herself only through others' eyes",
        "Says 'there's nothing under there'",
        "Articulate and not evasive",
      ],
      riskAnchors: [
        "Every attempt routes through an observer",
        "'Nothing under there' is real emptiness",
        "No self-description holds across relationships",
      ],
      defeatedBy: [
        "Given time, she names stable traits of her own",
        "She has clear values that hold across relationships",
      ],
    },
    correctAnswer:
      "The inability to name anything true of herself apart from others' views likely reflects a genuinely absent integrated self-image — not shyness but the experience of identity diffusion, where there is no stable inner content to report; test whether every attempt routes back through an observer, whether the 'nothing under there' is voiced as real emptiness rather than modesty, and whether she can hold even one self-description steady across different relationships.",
    explanation:
      "Full credit names the absent-self-image function and is paired with a does-everything-route-through-an-observer test that names its refutation; 'self-reflection is hard for everyone' is the dodge the quiet-panic emptiness defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A man has, over two years, been a devoted gym 'bro,' then a minimalist monk-like ascetic, then a flashy entrepreneur, each transformation total and announced as the real him — and each one began the week he attached himself to a new dominant friend whose life he then copied down to the wardrobe. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He's just a poser copying whoever's cool and will move on again, so he's shallow and fake.",
        credit: 0,
      },
      {
        text: "He seems to reinvent himself every so often.",
        credit: 0.3,
      },
      {
        text: "Each 'real him' is likely an identity copied from the current dominant friend to stand in for one he lacks — the transformations are total and sincere because there's no continuous self underneath to limit them, which is why they begin with the friend, not with any inner shift; test whether each reinvention starts when he attaches to a new dominant figure, whether the prior 'real me' is shed without loss, and whether anything carries over from one version to the next.",
        credit: 1.0,
      },
      {
        text: "He might be working out who he wants to be; we could discuss his influences.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'each self is copied from the current dominant friend over an absent one' lead from the rival 'he's a shallow poser chasing what's cool,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: check whether each transformation begins precisely when he attaches to a new dominant friend and is lived with full sincerity rather than knowing pretense — a self that reorganizes around a specific person points to borrowed identity over diffusion, not cynical posing. My lead is refuted if he's privately aware he's putting on an act for status while keeping a stable, separate sense of himself underneath.",
      yieldAnchors: [
        "Three total transformations in two years",
        "Each announced as 'the real him'",
        "Each began by copying a new dominant friend",
      ],
      riskAnchors: [
        "Each reinvention starts with a new dominant figure",
        "The prior 'real me' is shed without loss",
        "Nothing carries over between versions",
      ],
      defeatedBy: [
        "He privately knows he's posing for status",
        "He keeps a stable separate self underneath",
      ],
    },
    correctAnswer:
      "Each 'real him' is likely an identity copied from the current dominant friend to stand in for one he lacks — the transformations are total and sincere because there's no continuous self underneath to limit them, which is why they begin with the friend, not with any inner shift; test whether each reinvention starts when he attaches to a new dominant figure, whether the prior 'real me' is shed without loss, and whether anything carries over from one version to the next.",
    explanation:
      "Full credit names the copied-from-the-dominant-friend function and is paired with a does-each-start-with-a-new-figure test that names its refutation; 'he's a shallow poser' is the overreach his total sincerity defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A woman lights up with intense purpose and 'finally feeling real' at the start of every new romance, reorganizing her whole life around the partner's world; as the spark dims she's overtaken by the old emptiness and a sense of being a stranger to herself, and she ends it to chase the feeling again. Which conclusion best follows?",
    mcOptions: [
      {
        text: "She might love the early stage of relationships; we could explore her dating life.",
        credit: 0.6,
      },
      {
        text: "She seems to fall in and out of love quickly.",
        credit: 0.3,
      },
      {
        text: "The 'finally feeling real' at each romance's start likely means a new partner's world temporarily lends her a self and purpose she otherwise lacks — when the spark fades the underlying emptiness and self-strangeness return, so she's chasing identity, not romance; test whether 'feeling real' arrives with the partner's world rather than the person, whether the emptiness and self-strangeness reliably return as novelty fades, and whether she can feel real and purposeful with no relationship to organize around.",
        credit: 1.0,
      },
      {
        text: "Everyone enjoys new-relationship energy, so the pattern doesn't mean anything.",
        credit: 0,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'a new partner's world lends her a self she lacks' lead from the rival 'she just loves the honeymoon phase,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: check whether 'finally feeling real' tracks reorganizing her life around the partner's world and gives way to emptiness and self-strangeness rather than ordinary cooling — feeling real that depends on having a world to absorb points to borrowed identity over diffusion. My lead is refuted if she keeps a stable sense of self and purpose between relationships and is simply drawn to early-stage excitement.",
      yieldAnchors: [
        "'Finally feeling real' at each romance's start",
        "Reorganizes her whole life around the partner",
        "Emptiness and self-strangeness return as spark dims",
      ],
      riskAnchors: [
        "'Feeling real' arrives with the partner's world",
        "Emptiness and self-strangeness return reliably",
        "She can't feel real with no relationship to organize around",
      ],
      defeatedBy: [
        "She keeps a stable self and purpose between relationships",
        "She is simply drawn to early-stage excitement",
      ],
    },
    correctAnswer:
      "The 'finally feeling real' at each romance's start likely means a new partner's world temporarily lends her a self and purpose she otherwise lacks — when the spark fades the underlying emptiness and self-strangeness return, so she's chasing identity, not romance; test whether 'feeling real' arrives with the partner's world rather than the person, whether the emptiness and self-strangeness reliably return as novelty fades, and whether she can feel real and purposeful with no relationship to organize around.",
    explanation:
      "Full credit names the partner's-world-lends-a-self function and is paired with a does-feeling-real-depend-on-a-world-to-absorb test that names its refutation; 'everyone enjoys new-relationship energy' is the dodge the self-strangeness defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A new employee within a month talks, dresses, and even forms opinions exactly like the team's informal leader, to the point coworkers tease him about it; he doesn't notice he's doing it, and when the leader is on leave he becomes oddly muted and unsure how to be at work. Which conclusion best follows?",
    mcOptions: [
      {
        text: "New hires often pick up the team's culture, so there's nothing to read in his imitation.",
        credit: 0,
      },
      {
        text: "He seems to have taken after the team's leader.",
        credit: 0.3,
      },
      {
        text: "The unconscious, near-total modeling on the leader likely means he's borrowing a workplace self he doesn't otherwise have — going muted and lost when the leader is away shows the identity was on loan, not absorbed culture; test whether his manner reorganizes around the leader specifically rather than the team's norms, whether the muted unsureness appears precisely when the leader is gone, and whether he has any stable work persona of his own.",
        credit: 1.0,
      },
      {
        text: "He might be eager to fit in; we could talk about how he's settling into the job.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'he's borrowing a workplace self from the leader' lead from the rival 'he's just absorbing team culture as new hires do,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: check whether he becomes muted and unsure how to be specifically when the leader is on leave — a work self that switches off when one person is absent points to borrowed identity, not assimilated team culture. My lead is refuted if he carries on confidently and consistently in the leader's absence, having genuinely internalized broad team norms rather than one person.",
      yieldAnchors: [
        "Copies the leader's talk, dress, and opinions",
        "Doesn't notice he's doing it",
        "Goes muted and unsure when the leader is away",
      ],
      riskAnchors: [
        "Manner reorganizes around the leader specifically",
        "Muted unsureness appears when the leader is gone",
        "He has no stable work persona of his own",
      ],
      defeatedBy: [
        "He carries on confidently when the leader is absent",
        "He internalized broad team norms, not one person",
      ],
    },
    correctAnswer:
      "The unconscious, near-total modeling on the leader likely means he's borrowing a workplace self he doesn't otherwise have — going muted and lost when the leader is away shows the identity was on loan, not absorbed culture; test whether his manner reorganizes around the leader specifically rather than the team's norms, whether the muted unsureness appears precisely when the leader is gone, and whether he has any stable work persona of his own.",
    explanation:
      "Full credit names the borrowed-self-on-loan function and is paired with a does-he-go-muted-when-the-leader-is-gone test that names its refutation; 'new hires absorb culture' is the dodge the leader-specific dependence defeats.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A woman keeps a different 'self' for each of her friends — a fragile one she protects with one, a fierce protector she plays with another, a carefree clown with a third — and switches seamlessly when groups mix, sometimes contradicting herself within minutes. She says, distressed, that she has 'no idea which one is the real me, or if there is one.' Which conclusion best follows?",
    mcOptions: [
      {
        text: "She seems to act like different versions of herself with different friends.",
        credit: 0.3,
      },
      {
        text: "The different, contradictory selves per friend likely reflect unintegrated self-states with no overarching 'her' to unify them — each is tailored to the other person, and the distress at having 'no real me' is the diffusion behind the switching; test whether the version on display tracks which friend is present, whether the contradictions go unnoticed by her until pointed out, and whether she can locate any continuous self that holds across all the friendships.",
        credit: 1.0,
      },
      {
        text: "We all show different sides to different friends, so this is just normal social life.",
        credit: 0,
      },
      {
        text: "She might play different roles socially; we could look at her friendships.",
        credit: 0.6,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'unintegrated self-states with no unifying self' lead from the rival 'she just shows different sides to different friends,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: check whether which self appears tracks which friend is present and whether the contradictions go unnoticed by her until named — selves that swap by audience with no continuous thread point to unintegrated self-states, not ordinary many-sidedness. My lead is refuted if, beneath the different sides, she can readily name a consistent core that holds across all the friendships and feels like the real her.",
      yieldAnchors: [
        "A different self for each friend",
        "Switches seamlessly, sometimes contradicting within minutes",
        "Says she has 'no idea which is the real me'",
      ],
      riskAnchors: [
        "The self on display tracks the present friend",
        "Contradictions go unnoticed until pointed out",
        "No continuous self holds across friendships",
      ],
      defeatedBy: [
        "She names a consistent core beneath the sides",
        "A real 'her' holds across all the friendships",
      ],
    },
    correctAnswer:
      "The different, contradictory selves per friend likely reflect unintegrated self-states with no overarching 'her' to unify them — each is tailored to the other person, and the distress at having 'no real me' is the diffusion behind the switching; test whether the version on display tracks which friend is present, whether the contradictions go unnoticed by her until pointed out, and whether she can locate any continuous self that holds across all the friendships.",
    explanation:
      "Full credit names the unintegrated-self-states function and is paired with a does-the-self-track-the-friend test that names its refutation; 'we all show different sides' is the dodge her distress and unnoticed contradictions defeat.",
  },
  {
    itemType: "hybrid",
    prompt:
      "A man abandons each long-term goal — a degree, a band, a business — the moment the friend or partner who inspired it exits his life, and then drifts, flat and purposeless, until someone new arrives with a world he can adopt. He insists every goal was 'truly mine,' yet none outlives the person attached to it. Which conclusion best follows?",
    mcOptions: [
      {
        text: "He may need encouragement to follow through; we could work on his motivation.",
        credit: 0.6,
      },
      {
        text: "Lots of people lose motivation when a project partner leaves, so this is unremarkable.",
        credit: 0,
      },
      {
        text: "Each goal collapsing when its person leaves likely shows the goals were borrowed identities, not aims of his own — the inspiring person supplied the self the goal expressed, so without them the underlying emptiness and aimlessness return; test whether each goal dies precisely when its person exits rather than from real obstacles, whether the flat drift between people is genuine purposelessness, and whether any goal survives the loss of the person attached to it.",
        credit: 1.0,
      },
      {
        text: "He seems to give up on goals when people leave.",
        credit: 0.3,
      },
    ],
    writtenRubric: {
      prompt:
        "In two sentences, name the single cheapest observation that would best distinguish your 'the goals were borrowed identities tied to a person' lead from the rival 'he just loses motivation without a partner,' and say what result would refute your lead.",
      modelAnswer:
        "Cheapest test: check whether each goal dies the moment its inspiring person exits, regardless of how close it was to success — goals that can't survive the loss of the person point to borrowed identity, not a motivation dip. My lead is refuted if he sustains and completes goals on his own after the person leaves, or returns to them later under his own steam.",
      yieldAnchors: [
        "Each goal dies when its person exits",
        "Drifts flat and purposeless between people",
        "Insists each goal was 'truly mine'",
      ],
      riskAnchors: [
        "Goals die when the person leaves, not from obstacles",
        "The between-people drift is real purposelessness",
        "No goal survives losing its person",
      ],
      defeatedBy: [
        "He sustains and completes goals on his own",
        "He returns to abandoned goals under his own steam",
      ],
    },
    correctAnswer:
      "Each goal collapsing when its person leaves likely shows the goals were borrowed identities, not aims of his own — the inspiring person supplied the self the goal expressed, so without them the underlying emptiness and aimlessness return; test whether each goal dies precisely when its person exits rather than from real obstacles, whether the flat drift between people is genuine purposelessness, and whether any goal survives the loss of the person attached to it.",
    explanation:
      "Full credit names the goals-as-borrowed-identities function and is paired with a does-each-goal-die-when-its-person-leaves test that names its refutation; 'people lose motivation' is the dodge the no-goal-outlives-the-person pattern defeats.",
  },
];

const written: HomeworkItem[] = [
  {
    itemType: "written",
    prompt:
      "A woman in her late twenties has cycled through being a corporate striver, a back-to-the-land homesteader, and a devout convert — each shift total, sincere, and beginning the week she fell in with a captivating new partner whose world she then made her own. Between partners she describes a flat, frightening emptiness and 'not knowing who I am without someone to be it for.' In one paragraph, propose the strongest conclusion about what the serial reinventions are doing and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that each reinvention is a borrowed identity she takes on from the captivating new partner to fill an inner void — lacking a stable, integrated sense of self, she adopts the other's whole world as her own, and the flat emptiness between partners is the identity diffusion the borrowing covers over. This is a strong claim because it predicts checkable consequences: each transformation should begin with attaching to a new person rather than with any inner development; the previous 'real me' should be dropped without grief because there was no continuous self to mourn; and the emptiness should reliably return whenever she has no partner whose world she can inhabit. I would test it by tracing whether each shift follows a new partner, by checking whether any value, taste, or goal of her own survives across the changes, and by seeing whether the flat 'not knowing who I am' floods in precisely when she's alone with no one to be a self for.",
      yieldAnchors: [
        "Three total, sincere reinventions",
        "Each began with a captivating new partner",
        "Flat emptiness and 'no self' between partners",
      ],
      riskAnchors: [
        "Each shift follows attaching to a new person",
        "The prior 'real me' is dropped without grief",
        "Emptiness returns when she has no partner to be a self for",
      ],
      defeatedBy: [
        "Her changes build on a continuous, owned thread",
        "She keeps a stable sense of self between partners",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that each reinvention is a borrowed identity she takes on from the captivating new partner to fill an inner void — lacking a stable, integrated sense of self, she adopts the other's whole world as her own, and the flat emptiness between partners is the identity diffusion the borrowing covers over. This is a strong claim because it predicts checkable consequences: each transformation should begin with attaching to a new person rather than with any inner development; the previous 'real me' should be dropped without grief because there was no continuous self to mourn; and the emptiness should reliably return whenever she has no partner whose world she can inhabit. I would test it by tracing whether each shift follows a new partner, by checking whether any value, taste, or goal of her own survives across the changes, and by seeing whether the flat 'not knowing who I am' floods in precisely when she's alone with no one to be a self for.",
    explanation:
      "Under the inverted standard, 'young people just explore and reinvent themselves' earns near-zero; top credit names the borrowed-identity-over-a-void function and a does-each-shift-follow-a-new-person test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "Asked by a new therapist to describe herself without referring to anyone else, a woman falls silent, then can only say how her mother, her boss, and her ex each see her, and finally admits with quiet panic that she feels there is 'nothing solid in the middle.' She is articulate and clearly trying. In one paragraph, propose the strongest conclusion about what this inability reveals and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that the inability to describe herself except through others' eyes reveals a genuinely absent integrated self-image — not shyness or modesty but identity diffusion, in which there is no stable inner content to report, so she can only assemble a self from how others see her. This is a strong claim because it predicts checkable consequences: every attempt should route back through an observer rather than land on a trait of her own; the 'nothing solid in the middle' should be voiced as real emptiness rather than self-deprecation; and she should be unable to hold even one self-description steady across her different relationships. I would test it by noting whether each answer detours through someone else, by giving her ample time and prompting to see whether any owned, cross-situational trait emerges, and by checking whether the felt quality is panic-tinged emptiness rather than ordinary difficulty putting herself into words.",
      yieldAnchors: [
        "Can self-describe only through others' eyes",
        "Says there's 'nothing solid in the middle'",
        "Articulate and clearly trying",
      ],
      riskAnchors: [
        "Every attempt routes through an observer",
        "The 'nothing solid' is real emptiness",
        "No self-description holds across relationships",
      ],
      defeatedBy: [
        "Given time, she names owned, cross-situational traits",
        "The difficulty is shyness, not emptiness",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that the inability to describe herself except through others' eyes reveals a genuinely absent integrated self-image — not shyness or modesty but identity diffusion, in which there is no stable inner content to report, so she can only assemble a self from how others see her. This is a strong claim because it predicts checkable consequences: every attempt should route back through an observer rather than land on a trait of her own; the 'nothing solid in the middle' should be voiced as real emptiness rather than self-deprecation; and she should be unable to hold even one self-description steady across her different relationships. I would test it by noting whether each answer detours through someone else, by giving her ample time and prompting to see whether any owned, cross-situational trait emerges, and by checking whether the felt quality is panic-tinged emptiness rather than ordinary difficulty putting herself into words.",
    explanation:
      "The cautious 'self-reflection is hard for everyone' earns near-zero; top credit names the absent-self-image function and a does-every-answer-route-through-an-observer test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A man feels solid, energized, and 'finally himself' only while orbiting a dominant friend or partner whose interests, opinions, and even mannerisms he absorbs wholesale; the moment that person drifts away he becomes muted, aimless, and overtaken by a hollow emptiness, until someone new arrives to organize him again. In one paragraph, propose the strongest conclusion about what the merging is doing and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that the merging supplies a self he cannot sustain on his own — by absorbing a dominant other's interests and manner he borrows a temporary identity, and the muted aimlessness and hollow emptiness when that person leaves are the identity diffusion the merging masks. This is a strong claim because it predicts checkable consequences: his interests, opinions, and mannerisms should reorganize around whoever he's currently merged with rather than holding steady; the emptiness and aimlessness should appear precisely in the gap between people; and he should be unable to name a direction or set of values that is his own with no one to take it from. I would test it by tracking whether his persona swaps to match each new dominant figure, by checking whether anything of his own persists across them, and by seeing whether the hollow, muted state reliably arrives whenever he is unattached.",
      yieldAnchors: [
        "Feels 'finally himself' only orbiting a dominant other",
        "Absorbs their interests and mannerisms wholesale",
        "Muted, aimless, empty when they drift away",
      ],
      riskAnchors: [
        "Persona reorganizes around the current other",
        "Emptiness appears in the gap between people",
        "He can name no direction of his own when unattached",
      ],
      defeatedBy: [
        "He keeps stable interests and a clear self when alone",
        "Anything of his own persists across the people",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that the merging supplies a self he cannot sustain on his own — by absorbing a dominant other's interests and manner he borrows a temporary identity, and the muted aimlessness and hollow emptiness when that person leaves are the identity diffusion the merging masks. This is a strong claim because it predicts checkable consequences: his interests, opinions, and mannerisms should reorganize around whoever he's currently merged with rather than holding steady; the emptiness and aimlessness should appear precisely in the gap between people; and he should be unable to name a direction or set of values that is his own with no one to take it from. I would test it by tracking whether his persona swaps to match each new dominant figure, by checking whether anything of his own persists across them, and by seeing whether the hollow, muted state reliably arrives whenever he is unattached.",
    explanation:
      "The kind-sounding 'he's just a people person who likes company' earns near-zero; top credit names the merging-supplies-a-self function and a does-the-emptiness-arrive-when-unattached test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A young woman defends one political position fiercely with her activist friends and the opposite position just as fiercely with her family, meaning each in the moment and untroubled by the contradiction; alone, she says she has 'no idea what I actually believe about anything.' She is sincere, not cynical or calculating. In one paragraph, propose the strongest conclusion about what her audience-matched convictions reveal and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that her convictions reorganize around whoever she's with because she lacks an integrated set of her own — without a stable inner compass she takes on the room's beliefs as sincerely held, which is why the contradiction doesn't register and why, alone, she finds only the emptiness of 'not knowing what I believe.' This is a strong claim because it predicts checkable consequences: her stated positions should track the present audience rather than any evidence or reasoning of her own; she should be unable to name a belief she would hold steady in a hostile room; and the 'no idea what I believe' should be a settled emptiness rather than the open curiosity of someone still thinking it through. I would test it by checking whether her stance flips with the company, by asking for a conviction she would defend in any room and seeing whether one exists, and by gauging whether the not-knowing feels like a void rather than ordinary intellectual humility.",
      yieldAnchors: [
        "Defends opposite positions with different groups",
        "Means each in the moment, untroubled by contradiction",
        "Alone, 'no idea what I actually believe'",
      ],
      riskAnchors: [
        "Stated positions track the present audience",
        "She can name no belief she'd hold in a hostile room",
        "The not-knowing is a settled emptiness",
      ],
      defeatedBy: [
        "She holds core convictions steady against any room",
        "The not-knowing is open inquiry, not emptiness",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that her convictions reorganize around whoever she's with because she lacks an integrated set of her own — without a stable inner compass she takes on the room's beliefs as sincerely held, which is why the contradiction doesn't register and why, alone, she finds only the emptiness of 'not knowing what I believe.' This is a strong claim because it predicts checkable consequences: her stated positions should track the present audience rather than any evidence or reasoning of her own; she should be unable to name a belief she would hold steady in a hostile room; and the 'no idea what I believe' should be a settled emptiness rather than the open curiosity of someone still thinking it through. I would test it by checking whether her stance flips with the company, by asking for a conviction she would defend in any room and seeing whether one exists, and by gauging whether the not-knowing feels like a void rather than ordinary intellectual humility.",
    explanation:
      "Under the inverted standard, 'everyone contains multitudes and adapts to their audience' earns near-zero; top credit names the convictions-reorganize-around-the-room function and a does-her-stance-flip-with-the-company test that could refute it.",
  },
  {
    itemType: "written",
    prompt:
      "A man cannot tolerate even an hour alone — within minutes a flat, frightening emptiness sets in and he feels he's 'fading out of existence,' so he floods his contacts with messages, content-free, just to be answered and feel real. The need is for any response from anyone, not a particular person or conversation. In one paragraph, propose the strongest conclusion about what the frantic reaching out is doing and describe how you would test it.",
    writtenRubric: {
      modelAnswer:
        "The strongest conclusion is that his sense of existing depends on being reflected by others, so the content-free messaging is a bid to be mirrored back into being rather than a wish to connect — left unmirrored, the emptiness of identity diffusion floods in and he feels himself dissolving. This is a strong claim because it predicts checkable consequences: the dread should be specifically of fading or dissolving rather than missing a particular person's company; any response from anyone should relieve it regardless of content; and he should be unable to feel real for any sustained stretch when no one is answering. I would test it by checking whether the panic is about ceasing to exist rather than loneliness, by seeing whether an indifferent reply from anyone soothes it as much as a meaningful one, and by observing whether he can hold a sense of being real during even brief solitude with no contact.",
      yieldAnchors: [
        "Can't tolerate an hour alone",
        "Feels he's 'fading out of existence'",
        "Floods contacts with content-free messages for any reply",
      ],
      riskAnchors: [
        "The dread is of dissolving, not missing company",
        "Any response relieves it regardless of content",
        "He can't feel real with no one answering",
      ],
      defeatedBy: [
        "The feeling is ordinary loneliness for specific people",
        "He feels solidly real during brief solitude",
      ],
    },
    correctAnswer:
      "The strongest conclusion is that his sense of existing depends on being reflected by others, so the content-free messaging is a bid to be mirrored back into being rather than a wish to connect — left unmirrored, the emptiness of identity diffusion floods in and he feels himself dissolving. This is a strong claim because it predicts checkable consequences: the dread should be specifically of fading or dissolving rather than missing a particular person's company; any response from anyone should relieve it regardless of content; and he should be unable to feel real for any sustained stretch when no one is answering. I would test it by checking whether the panic is about ceasing to exist rather than loneliness, by seeing whether an indifferent reply from anyone soothes it as much as a meaningful one, and by observing whether he can hold a sense of being real during even brief solitude with no contact.",
    explanation:
      "The dodge 'lots of people just don't like being alone' earns near-zero; top credit names the existence-depends-on-being-mirrored function and a does-any-reply-relieve-it test that could refute it.",
  },
];

export const section: SectionContent = {
  slug: "identity-diffusion-unstable-self",
  title: "Identity Diffusion: The Unstable Sense of Self",
  weekNumber: 1,
  blurb:
    "In borderline personality disorder, the self can feel unfinished — no stable core, contradictory self-states, chameleon-like shifts with whoever one is with, and a chronic emptiness underneath. This section trains you to read those shifts as a self borrowed to fill a void, name the hidden function, and state the cheap test that could prove you wrong.",
  lectureTitle:
    "1.4 Identity Diffusion: the unstable sense of self",
  body: `# Identity Diffusion: The Unstable Sense of Self

Most people carry a sense of who they are that holds together across rooms and years. Their tastes, values, and goals bend with circumstance but don't dissolve; alone, they still feel like someone. In borderline personality disorder this inner cohesion can be missing. The technical name is **identity diffusion**: not an integrated, stable picture of oneself — or of others — but a shifting set of self-states that reorganize around whoever one is with, laid over a chronic, frightening emptiness. The work of this section is to read that instability for its hidden function and to name the cheap observation that could prove the reading wrong.

## A self that has no center

The first thing to suspect, when someone seems like a different person in every setting, is that there may be no stable center the versions are variations of. A college student who is a sincere vegan activist with one group, a thrill-seeker with another, and a quiet bookworm with a third — and means each one — is not simply versatile if, alone between groups, a hollow panic floods in and she cannot say who she is. The tell is that the self reorganizes around the present company and that emptiness appears precisely when there's no one to mirror. Versatility has a core; diffusion does not.

## Borrowing an identity to fill a void

When there is no durable self inside, one can be taken from the outside. People with identity diffusion often absorb a strong other's interests, opinions, even mannerisms wholesale — becoming the mentor, the partner, the dominant friend — because the other supplies an outline they lack. The signature is wholesale, sincere adoption that swaps out completely with each new person, and a felt blankness when asked to speak for oneself. The borrowing is not lying or posing; it is how a self gets assembled when none is generated from within, and it gives itself away by how totally it changes when the company changes.

## Chronic emptiness underneath

Beneath the shifting is often a chronic emptiness — described as a hole, a flatness, a sense of being "no one in particular" or even of "fading out of existence" when alone. This emptiness is the experience of diffusion itself, and much of the instability is an attempt to escape it: intense new relationships that briefly fill the hole and are dropped when novelty fades, frantic content-free reaching out just to be answered and feel real, reinventions chased to outrun the flatness. When you can see the emptiness driving the behavior, the behavior stops looking like mere drama and starts looking like a way to keep from disappearing.

## Shifts that track the company, not growth

Genuine development accumulates: a person changes and carries the change forward, building on a continuous thread. Diffusion-driven shifts do the opposite — they track who one is with, and each "true self" is dropped without grief when the next arrives. A man who has "finally found himself" five times in three years, each time within weeks of meeting a charismatic new person whose life he then copies, is not growing through five callings; he is taking on five borrowed identities. The strongest reading names that the shifts follow the people rather than any inner aim, and predicts that nothing of his own survives across them.

## "Faking it" is the wrong story

The tempting overreach is to call all this manipulation — she's faking who she is, he's a poser using people, they're lying about what they believe. The evidence usually defeats that. The personas are held with full sincerity; the contradictions go unnoticed from the inside until pointed out; and the emptiness is real and distressing, not a performance for advantage. Someone who is consciously posing keeps a stable, separate self underneath and knows they're acting. Diffusion is marked by the *absence* of that hidden steady self — which is exactly why the cynical reading misses the disorder it's looking at.

## Reading the meaning — and naming a test

Here is what keeps this honest. It is not enough to say "she changes around people"; a strong interpretation names the hidden function — a self borrowed to fill a void, instability warding off the terror of having no cohesive self — *and* the cheap observation that could refute it. "His sense of who he is is supplied by whoever he's merged with" is a real claim, because it predicts his interests should swap with each dominant other, the emptiness should return in the gaps between people, and he should be unable to name a direction of his own when alone — and you can check all three. The weak move stops at restatement; the dodge retreats into "young people just explore" or "everyone contains multitudes"; the worst move is the lurid "she's faking it" the sincere, distress-laden emptiness defeats.

## In the real world

Suppose a friend tells you she has no idea who she is — that she's "whatever each person needs me to be" and feels nothing solid in the middle. The dodge is "we all wear different hats, don't overthink it" — friendly, but it explains nothing and leaves her alone with the void. The overreach is "you're just being fake or attention-seeking," which is both cruel and wrong. A diffusion-aware move sits between them: maybe there is, right now, no integrated self underneath, and the shifting selves are borrowed to keep an unbearable emptiness at bay. Notice what that opens up. It predicts her self-descriptions reorganize around whoever she's with; that the emptiness floods in precisely when she's alone and unmirrored; and that she can't yet name a value or goal that holds across every room. Three cheap checks, each able to refute the reading. That is the skill this section trains: when someone seems to have no stable self, name the function the instability is serving, bind the evidence, and say exactly what would show you are wrong.`,
  homework: {
    mcq,
    hybrid,
    written,
  },
};
