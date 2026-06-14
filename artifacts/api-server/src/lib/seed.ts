import { db } from "@workspace/db";
import {
  topicsTable,
  lecturesTable,
  assignmentsTable,
  problemsTable,
  seedMetaTable,
} from "@workspace/db";
import { eq, sql } from "drizzle-orm";
import { logger } from "./logger";

// Content version of the seeded curriculum. BUMP THIS whenever the TOPICS or
// ASSIGNMENTS content below changes. On boot, seedIfEmpty compares this against
// the value stored in seed_meta; a mismatch forces a full re-seed, so content
// edits self-heal in every environment (including a republished production)
// without a manual database wipe.
const SEED_CONTENT_VERSION = "2026-06-14-baby-ai-v1";

type SeedTopic = {
  slug: string;
  title: string;
  weekNumber: number;
  blurb: string;
  lectureTitle: string;
  body: string;
};

const TOPICS: SeedTopic[] = [
  // Unit 1 — Baby AI for Everyone
  {
    slug: "what-ai-is",
    title: "What AI is (and isn't)",
    weekNumber: 1,
    blurb: "AI is a machine that makes smart-seeming guesses — not a thinking, all-knowing mind.",
    lectureTitle: "1.1 What AI is (and isn't): intelligence, automation, and the hype",
    body: `# What AI is (and isn't)

You hear the word **AI** everywhere — in the news, on your phone, in ads promising it will change everything. Some of that is true and some of it is hype. This whole course is about getting a clear, honest picture of what artificial intelligence really is, in plain language, with no math and no coding. Let's start by clearing the fog.

## A machine that makes guesses

At its heart, **AI is a computer program that makes smart-seeming guesses or decisions from information.** When your phone unlocks by looking at your face, when a video app guesses what you'll want to watch next, when an email app decides a message is spam — that's AI making a guess based on what it has seen before. It's not magic and it's not a tiny person inside the computer. It's a program that takes in information and produces its best guess about what to do.

## Automation isn't the same as intelligence

People often mix up **automation** with **intelligence**, but they're different. A dishwasher runs the same fixed steps every time you press start. A thermostat follows a simple rule: if it's colder than the setting, turn on the heat. Those machines are *automated* — they repeat steps a human wrote out in advance. AI is meant to handle situations *nobody wrote exact steps for* — like deciding whether a brand-new photo it has never seen contains a cat. Automation follows a recipe; AI tries to figure out the recipe on its own.

## Narrow, not all-knowing

Today's AI is **narrow.** That means each AI is good at one specific task and clueless outside it. The AI that beats grandmasters at chess can't write you a poem, and the AI that recommends songs can't drive a car. There is no single program today that understands the world the way a person does. When a system seems to "know everything," it's usually many narrow tools stitched together — not one all-knowing mind.

## Why the hype?

So why does AI sound almost superhuman? Partly because companies want to sell it, partly because movies have shown us robots that think and feel for a hundred years, and partly because a good demo really is impressive. The useful habit — the one this course will keep building — is to separate **what AI can actually do** from **what people claim it can do.** Ask, every time: what is this system really doing under the hood?

## It doesn't "understand" like you do

Here's a big idea to carry with you: even when an AI gives a smart-sounding answer, it doesn't *understand* it the way you do. It has no feelings, no awareness, and no sense of whether what it said is true. It is matching patterns it picked up from lots of examples and producing a likely result. Keeping that in mind protects you from being fooled by something that *sounds* confident.

## In the real world

Think about the spam filter in an email app. Nobody hand-wrote a rule listing every junk message ever — that would be impossible. Instead, the filter learned from huge piles of emails people marked as "spam" or "not spam," and now it *guesses* which new emails are junk. It's right most of the time, but sometimes a real message lands in spam or a junk one slips through. That everyday tool is a perfect picture of what AI is: a useful guesser that's often right, sometimes wrong, and never truly *sure.*`,
  },
  {
    slug: "rules-vs-learning",
    title: "Rules vs. learning",
    weekNumber: 1,
    blurb: "The old AI followed hand-written rules; modern AI learns the rules itself from examples.",
    lectureTitle: "1.2 Rules vs. learning: the two paradigms",
    body: `# Rules vs. learning

There are really **two big ways** to make a computer act smart, and almost every story about AI is the story of moving from the first way to the second. Understanding this one shift explains why AI suddenly got so much better in the last few years.

## The old way: writing rules

For a long time, making a computer "smart" meant a human writing out **rules** — long lists of "if this, then that" instructions. If you wanted a program to decide whether it's bedtime, you might write: *if the clock says after 9 p.m., say "go to bed."* Rules are great when a problem is clear and tidy, and a person can spell out every step in advance. Calculators, simple thermostats, and tax software mostly work this way.

## Where rules break down

Now try to write rules that recognize a **cat** in a photo. *If it has whiskers...* but dogs have whiskers too. *If it has pointy ears...* but ears can be folded, hidden, or pointed away. *If it's furry...* so is a rug. There are millions of exceptions, and no human could ever write enough rules to cover them all. For messy, real-world problems — recognizing faces, understanding speech, translating languages — the rule-writing approach simply collapses under its own weight.

## The new way: learning from examples

So modern AI flips the whole idea around. Instead of a human writing the rules, you show the computer **thousands of examples** and let it figure out the pattern itself. Want it to spot cats? Show it a huge pile of pictures, each labeled "cat" or "not a cat," and let the machine work out — on its own — what tends to make a cat a cat. Nobody writes the rule; the machine *learns* it. This approach is called **machine learning**, and it's the engine behind almost all the AI people get excited about today.

## Two paradigms, side by side

It helps to hold the two in mind together. **Rule-based** systems are like a recipe a chef hands you: clear, predictable, but only as good as the chef's instructions, and useless for anything the chef didn't anticipate. **Learning-based** systems are like a kid who tastes hundreds of dishes and slowly figures out what "spicy" means — flexible, able to handle new cases, but harder to explain and sometimes surprising.

## Why learning won

Learning took over for one simple reason: for the messy problems people most wanted to solve, *learning from examples works far better than any rules a human could write.* As computers got faster and enormous collections of examples (photos, text, recordings) became available, the learning approach pulled ahead and never looked back. When you hear "AI" today, it almost always means a system that **learned** rather than one that was hand-programmed.

## In the real world

Go back to that spam filter. The earliest ones were **rule-based**: a human listed banned words like "free money," and any email containing them got blocked. Spammers simply changed their wording — "fr3e m0ney" — and slipped right past. Modern filters **learn** instead, studying millions of real emails people marked as junk and discovering subtle patterns no human would think to write down. That's exactly why today's filters are so much harder to fool: they learned the difference instead of being told it.`,
  },
  {
    slug: "data-and-training",
    title: "Data and training",
    weekNumber: 1,
    blurb: "\"Learning\" means adjusting from labeled examples — and the data you feed in decides what you get.",
    lectureTitle: "1.3 Data and training: what \"learning\" actually means",
    body: `# Data and training

We keep saying AI "learns." But what does that actually mean for a machine? It's not reading a book or having an *aha!* moment. This section opens up the box and shows you what learning really is — and why the **examples you feed in** matter more than almost anything else.

## Learning = adjusting from examples

Here's the honest, simple version. A learning program starts out making **random, terrible guesses.** You show it an example — say, a photo — and the correct answer — "cat." The program compares its guess to the right answer and makes a tiny **adjustment** to do a little better next time. Repeat that millions of times, with millions of examples, and those tiny adjustments add up into a system that's genuinely good at the task. That whole process — practicing on examples and adjusting — is called **training.**

## Data is the textbook

The examples you train on are called **data**, and data is the AI's entire education. There's an old saying in computing: **"garbage in, garbage out."** If you train a system on blurry, mislabeled, or one-sided examples, it learns blurry, mislabeled, one-sided lessons. A model is only ever as good as the examples it studied. This is why the boring-sounding job of gathering good data is actually one of the most important parts of building AI.

## Training time vs. using time

There are two clearly different stages, and people mix them up all the time. **Training** is the long, expensive "study" phase, where the system practices on tons of examples and slowly improves. **Using** the model — sometimes called *inference* — is the quick "test" phase afterward, where you give it something new and it produces an answer. It's like a student who studies for weeks (training) and then answers a question in seconds during the exam (using). Once training is done, the model doesn't keep learning from you unless someone deliberately trains it again.

## Why more and better data helps

Generally, the more varied and high-quality examples a system trains on, the better it handles new situations. A model that has seen cats of every color, angle, and lighting will recognize a new cat far more reliably than one that only ever saw a handful. But it's not just *quantity* — **variety** matters. Ten thousand photos of the same cat teach far less than ten thousand photos of different cats.

## Skewed data, skewed results

This leads to one of the most important warnings in all of AI: if your examples are **lopsided**, the model's behavior will be lopsided too. Train a face-unlock system mostly on one kind of face, and it'll struggle with faces it rarely saw. The model isn't being unfair on purpose — it simply learned from an unbalanced textbook. Spotting where the data might be skewed is a skill you'll use again and again when judging whether to trust an AI.

## In the real world

Imagine teaching a program to tell **cats from dogs.** You feed it thousands of labeled photos, and after training it's impressively accurate. But suppose every cat photo you used happened to show a *black* cat. Show the trained model a fluffy orange cat and it may stumble — not because orange cats are tricky, but because its "textbook" never included one. Same machine, same training method; the only thing that changed was the **data** — and that's exactly the point. What goes in shapes what comes out.`,
  },
  {
    slug: "pattern-recognition",
    title: "Pattern recognition",
    weekNumber: 1,
    blurb: "Underneath it all, AI is a pattern-finder — which is powerful, but easy to fool.",
    lectureTitle: "1.4 Pattern recognition: the core idea behind it all",
    body: `# Pattern recognition

If you remember only one idea from this whole course, make it this one: **modern AI is, at its core, a pattern-finding machine.** Recognizing faces, predicting words, recommending videos — strip away the fancy names and they're all the same move: spotting patterns in piles of data and using them to make a guess.

## Everything is pattern-finding

When an AI "learns" from examples, what it's really learning is **patterns** — regular, repeating connections between things. Photos labeled "cat" tend to share certain shapes and textures; that's a pattern. Emails marked "spam" tend to share certain wording; that's a pattern. The system doesn't memorize each example one by one. It distills them into patterns it can apply to brand-new cases it has never seen.

## You're a pattern-finder too

This isn't as alien as it sounds — your brain does it constantly. You recognize a friend's face in a crowd, you guess it might rain from the look of the clouds, you finish a song lyric before it plays. You're using patterns you picked up from past experience. AI does something similar, just with way more examples and far less understanding of what any of it *means.*

## Features: the clues it looks at

The specific clues a system pays attention to are called **features.** For spotting cats, useful features might be fur texture, ear shape, and eye position. For predicting house prices, features might be size, location, and number of rooms. Choosing or discovering the right features is a big part of why one AI works and another flops. The model is basically asking, "which clues actually help me guess right?"

## Patterns aren't understanding

Here's the catch that trips up almost everyone: finding a pattern is **not** the same as understanding it. An AI can learn that two things *go together* without having the faintest idea *why.* It might notice that pictures with whiskers are often cats — but it doesn't know what a cat *is*, that cats are alive, or that whiskers help them feel. It found a correlation, full stop. That gap between "things that go together" and "actually understanding" is the source of a lot of AI's strangest mistakes.

## When patterns mislead

Because AI grabs *any* pattern that helps it guess right during training, it sometimes latches onto the **wrong** one. Suppose nearly all your husky photos were taken in snow. The model might quietly decide that **snow** means husky — and then confidently call a snowy field full of no dogs a "husky." It found a real pattern in your data; it just wasn't the pattern you wanted. These accidental, misleading patterns are a constant danger, and catching them is part of using AI wisely.

## In the real world

Researchers once built a system to spot skin cancer from photos, and it seemed amazingly accurate — until they realized many of the cancer photos happened to include a **ruler** that doctors place beside serious spots to measure them. The AI had partly learned "ruler in the picture = cancer." It wasn't reading skin at all; it was reading a clue that *accidentally* came along with the answer. Same lesson as the husky and the snow: a pattern-finder will happily find the *easy* pattern, even when it's the wrong one — so part of your job is always to ask what the machine is *really* keying on.`,
  },
  {
    slug: "neural-networks",
    title: "Neural networks and deep learning",
    weekNumber: 1,
    blurb: "Layers of simple units, loosely inspired by the brain, that build understanding step by step.",
    lectureTitle: "1.5 Neural networks and deep learning: the intuition",
    body: `# Neural networks and deep learning

You've probably heard the phrases **neural network** and **deep learning** thrown around like spells. They sound intimidating, but the core idea is friendly once you see it. This section gives you the intuition — no math — for the machinery behind most of today's most impressive AI.

## Loosely inspired by the brain

A **neural network** is a program loosely inspired by how brains are built: lots of tiny, simple units connected together. Each unit does something very basic — take in some numbers, mix them, and pass a result along to the next units. No single unit is clever. The power comes from **many** of them working together, the way an anthill does impressive things even though no single ant is a genius. (And it's only *loosely* like a brain — don't picture a digital mind in there.)

## Layers that build up understanding

The units are organized into **layers**, stacked one after another, and this stacking is the magic. In a system that looks at images, the **early layers** notice tiny, simple things — edges, corners, patches of color. The **middle layers** combine those into shapes, like an eye or an ear. The **later layers** combine *those* into whole objects — "this looks like a face." Understanding gets built up step by step, from simple pieces to meaningful wholes, as information flows through the layers.

## "Deep" just means many layers

So what does **deep learning** mean? Simply this: a neural network with **many** layers stacked up is called "deep," and training such a network is "deep learning." That's the whole secret behind the scary word. More layers let the system build up more complex understanding — going from edges, to shapes, to objects, to scenes — which is why deep networks can handle tasks that simpler methods never could.

## Weights: the dials it tunes

Remember how training means "making tiny adjustments"? In a neural network, the things being adjusted are called **weights** — think of them as millions of little dials that control how strongly each connection passes its signal along. Training is the long process of nudging all those dials until the whole network tends to produce the right answers. A trained model is really just a giant collection of carefully tuned dials.

## Powerful, but a black box

There's a trade-off worth knowing. Deep networks are astonishingly capable, but they're also a **"black box"**: with millions of tuned dials, even the people who built one often *can't fully explain* why it gave a particular answer. It works, but its reasoning is hard to inspect. That mystery is part of why trusting AI carefully — a theme we'll return to — matters so much.

## In the real world

When a photo app on your phone instantly groups all the pictures of your grandmother together, that's a deep neural network at work. Its early layers found edges and textures, deeper layers assembled eyes, noses, and mouths, and the final layers learned the particular combination that *is* your grandmother's face — all from examples, all through tuned dials. You never wrote a rule describing her face, and honestly, neither could the app's makers. It learned, layer by layer, what no one could have spelled out.`,
  },
  {
    slug: "language-models",
    title: "Language models",
    weekNumber: 1,
    blurb: "Chatbots work by predicting the next word over and over — that's what \"generative\" means.",
    lectureTitle: "1.6 Language models: how AI predicts text and what \"generative\" means",
    body: `# Language models

The AI everyone's talking about lately — the chatbots that write essays, answer questions, and hold conversations — are built on something called a **language model.** They can feel almost magical, like talking to a knowledgeable person. The truth is stranger and more useful to understand: under the hood, they are doing one surprisingly simple thing, over and over.

## It's predicting the next word

A language model's one trick is **predicting the next word.** Give it "The sky is..." and it predicts "blue" is a very likely next word. That's it. It's like the autocomplete on your phone, but enormously more powerful. To write a whole paragraph, it predicts one word, adds it, then predicts the *next* word given everything so far, and repeats — building a long, sensible-looking response one piece at a time.

## Trained on mountains of text

How does it know "blue" follows "the sky is"? The same way every AI learns: from **examples.** A language model is trained on a staggering amount of text — books, articles, websites — and from all that reading it absorbs the patterns of how words tend to follow one another. It never memorized the internet word-for-word; it learned the *patterns* of language well enough to continue almost any sentence in a believable way.

## What "generative" means

This is where the word **generative** comes in. A generative AI is one that **creates new content** — text, images, music — rather than just sorting or labeling things. A language model is generative because it *produces* fresh sentences by predicting them piece by piece, instead of picking from a fixed list of canned replies. That's why it can answer a question no one ever typed before: it generates a new response on the spot, one prediction at a time.

## It predicts — it doesn't look things up

Here's the part that surprises people most: a language model usually isn't **looking up** facts in a database. It's *predicting* what words should come next based on patterns. Most of the time the most likely-sounding answer also happens to be true — but not always. Because it's chasing "what sounds right" rather than "what is verified," it can state something false with total confidence. Keep this in your back pocket; it explains a lot of AI's weirdest failures (and it's the whole focus of the next section).

## Prompts steer the prediction

The text **you** type — your **prompt** — is the starting point the model continues from, so it powerfully shapes what you get back. Ask "explain photosynthesis to a five-year-old" and the model predicts a simple, playful continuation; ask for "a formal scientific summary" and it predicts a stiff, technical one. Learning to write clear prompts is really learning to set up the model so its predictions go where you want.

## In the real world

When you ask a chatbot "what's a good name for a pet turtle?" it doesn't open a list of turtle names. It predicts, word by word, a response that *sounds like* a helpful answer to that question — drawing on the patterns of all the text it trained on. The result can be charming and genuinely useful. But remembering that it's *predicting plausible text*, not *retrieving guaranteed facts*, is the single most important thing for using these tools wisely — which is exactly where we head next.`,
  },
  {
    slug: "limits-and-hallucination",
    title: "Strengths, limits, and hallucination",
    weekNumber: 1,
    blurb: "AI is powerful but confidently makes things up — so trust it carefully and always verify.",
    lectureTitle: "1.7 Strengths, limits, and hallucination: why to trust it carefully",
    body: `# Strengths, limits, and hallucination

Now that you know how these systems actually work — pattern-finders that predict likely answers — you're ready for the most practical lesson of all: **what AI is great at, where it fails, and why it sometimes lies to you with a straight face.** Using AI well starts with respecting its limits.

## What it's genuinely great at

Let's be fair: AI is remarkable at certain things. It's fast, tireless, and excellent at finding patterns in huge amounts of information, drafting text, summarizing long documents, translating, and handling repetitive work that would exhaust a person. For brainstorming, first drafts, and chewing through tons of data, it's a genuinely powerful helper. The goal isn't to distrust AI — it's to know *where* its strengths stop.

## Hallucination: confidently making things up

The most important limit has a memorable name: **hallucination.** This is when an AI states something **false** but does it **confidently**, as if it were obviously true. It might invent a fact, a quote, a book that doesn't exist, or a wrong answer dressed up in convincing language. Why? Because — as we saw — a language model predicts *plausible-sounding* text, not *verified* truth. When it has no good answer, it doesn't say "I don't know"; it predicts something that *sounds* right and hands it over with full confidence.

## No real grounding, no guaranteed common sense

Underneath, the system has no direct contact with the real world and no guaranteed common sense. It learned patterns from text and examples, but it can't *check* its answer against reality the way you can glance out a window. So it may confidently claim something that any person would instantly know is silly. It's not lying on purpose — there's no "purpose" in there at all. It simply has no built-in sense of true versus false.

## Bias and stale knowledge

Two more limits matter in daily life. First, **bias**: because AI learns from human-made data, it can absorb and repeat the lopsided or unfair patterns in that data (remember the skewed-textbook problem). Second, **stale knowledge**: a model only knows what it saw during training, so it can be out of date and may have no idea about recent events. Neither flaw is obvious from the confident way it talks — which is exactly why they're dangerous.

## How to use it safely

The fix isn't to avoid AI; it's to use it like a **smart but unreliable assistant.** Treat its output as a *draft*, not a *verdict.* Double-check anything that matters — facts, numbers, names, advice — against a trustworthy source. Be extra careful with high-stakes topics like health, money, or safety. The rule of thumb: the more it matters, the more you verify. Used that way, an unreliable genius is still incredibly handy.

## In the real world

A student once asked a chatbot for sources to support an essay, and it produced a tidy list of books and articles — titles, authors, page numbers, all perfectly formatted. The catch: several of them **didn't exist.** The AI had *predicted* what believable citations look like and generated convincing fakes. That's hallucination in a nutshell: not a glitch on the surface, but the system doing exactly what it always does — producing plausible text — with no way to know it wasn't true. Anyone who simply trusted the list would have been caught out. Anyone who checked was fine.`,
  },
  {
    slug: "using-ai-well",
    title: "Using AI well, and where it's headed",
    weekNumber: 1,
    blurb: "You're the pilot: AI is a powerful tool to direct and double-check, not a boss to obey.",
    lectureTitle: "1.8 Using AI well, and where it's headed (capstone)",
    body: `# Using AI well, and where it's headed

This is the capstone — where everything you've learned comes together into a way of *living and working* with AI. You now know it's a pattern-finding guesser that learns from data, predicts plausible answers, and can be confidently wrong. So the real question is: how do you get the best out of it while staying in charge?

## You're the pilot

The healthiest way to picture AI is as a **powerful tool**, not a boss and not an oracle. Think of it like a calculator or a power drill: it makes you faster and stronger, but *you* decide where to point it, and *you* are responsible for the result. The phrase to remember is **"human in the loop"** — a person stays involved, directing the tool and checking its work, rather than blindly doing whatever it says.

## Prompt well, then check

Two habits make you good at this. First, **prompt clearly**: tell the AI exactly what you want, who it's for, and in what form — vague questions get vague answers. Second, **check the output**: read it critically, verify anything important, and fix what's off. The best results come from a back-and-forth — you ask, it drafts, you refine — with your judgment guiding every step. The AI supplies speed; you supply direction and a reality check.

## What to hand over, what to keep

A useful instinct is knowing **which tasks to delegate** and **which to keep human.** Great jobs for AI: brainstorming ideas, rough first drafts, summarizing, explaining a tricky concept, repetitive busywork. Jobs to keep firmly in human hands: final decisions that affect people, anything requiring real accountability, sensitive personal matters, and moments that need genuine empathy or moral judgment. Let AI do the heavy lifting; reserve the steering for yourself.

## Ethics: power with care

Because AI is powerful, using it well also means using it **responsibly.** That means caring about **fairness** (could this system treat some people unfairly because of skewed data?), **privacy** (whose information is being used, and did they agree?), **honesty** (are you passing off AI work as your own, or fooling someone?), and **impact** (how does this affect people's jobs and lives?). These aren't side issues — they're part of using the tool well. A good pilot watches not just *can* I, but *should* I.

## Where it's headed — honestly

AI is improving fast, and it will keep reshaping how we work, learn, and create. But anyone who tells you *exactly* what comes next is guessing. The honest stance is humble: huge open questions remain — how reliable these systems can become, how to keep them fair and safe, what jobs will change, and how much we should depend on them. You don't need a crystal ball. You need the clear-eyed understanding you've built here, so you can judge each new claim for yourself.

## In the real world

Picture using a chatbot to write a school essay. The *poor* way: ask it to write the whole thing and hand it in untouched — you learn nothing, it may be wrong or unfair to call your own, and any hallucinated "facts" become *your* mistakes. The *skilled* way: ask it to brainstorm angles, draft a messy outline, and explain a confusing idea — then **you** verify the facts, rewrite it in your own voice, and own the result. Same tool, opposite outcomes. The difference is the whole point of this course: not whether you *use* AI, but whether you stay the thoughtful human steering it.`,
  },
];

type SeedAssignment = {
  kind: "homework" | "test" | "midterm" | "final";
  title: string;
  weekNumber: number;
  isTimed: boolean;
  timeLimitMinutes: number | null;
  instructions: string;
  problems: Array<{
    topicSlug: string;
    prompt: string;
    correctAnswer: string;
    explanation: string;
    hint?: string;
  }>;
};

const ASSIGNMENTS: SeedAssignment[] = [
  {
    kind: "homework",
    title: "Homework 1.1 — What AI is, rules vs. learning, data, and patterns",
    weekNumber: 1,
    isTimed: false,
    timeLimitMinutes: null,
    instructions:
      "Untimed practice covering sections 1.1–1.4. Answer each question in a few sentences (about 3–5) in your own words. There's no need for any math — just explain your thinking clearly. One-word answers won't receive credit.",
    problems: [
      {
        topicSlug: "what-ai-is",
        prompt:
          "Your friend says a thermostat that turns on the heat when a room gets cold is 'using AI.' Explain why this is really automation, not intelligence, and what would have to be different for it to count as AI. (3–5 sentences.)",
        correctAnswer:
          "A thermostat just follows a fixed rule a person wrote in advance — 'if the temperature drops below the setting, turn on the heat' — and it repeats those exact steps every time, which is automation. It never deals with a situation nobody planned for; it can only do the one programmed thing. For it to count as AI, it would need to handle new situations it wasn't given exact steps for — for example, learning your habits from past days and guessing when you'll want heat before you ask. The key difference is following a recipe (automation) versus figuring out the recipe from examples (AI).",
        explanation:
          "Full credit: identifies the thermostat as following fixed, pre-written rules (automation), and explains that AI would instead handle new/unplanned situations or learn from examples rather than just repeating set steps.",
      },
      {
        topicSlug: "rules-vs-learning",
        prompt:
          "Imagine you tried to write step-by-step rules for a computer to recognize a dog in any photo. Explain why this rule-writing approach breaks down, and how the learning approach handles the same problem differently. (3–5 sentences.)",
        correctAnswer:
          "Rule-writing breaks down because there are endless exceptions: you might write 'if it has four legs and fur,' but so does a cat or a sheep, and dogs come in countless breeds, colors, poses, and lighting. No human could ever write enough rules to cover every possible dog photo. The learning approach flips this around: instead of writing rules, you show the computer thousands of labeled photos and let it discover the pattern of 'dog' on its own. So the machine figures out the rule from examples rather than a person trying — and failing — to spell every rule out.",
        explanation:
          "Full credit: explains that real-world recognition has too many exceptions to hand-write rules for, and that machine learning instead discovers the pattern from many labeled examples.",
        hint: "Think about how many different ways a dog can look in a photo, and who has to come up with the 'rules' in each approach.",
      },
      {
        topicSlug: "data-and-training",
        prompt:
          "A team trains a face-unlock system using photos almost entirely of one kind of face, and it works great in their tests. Predict what problem might appear when many different people try it, and explain why, using the idea of 'garbage in, garbage out.' (3–5 sentences.)",
        correctAnswer:
          "The system will probably struggle to recognize faces that look different from the narrow set it trained on, because a model only learns from the examples it's shown. Its 'textbook' was lopsided, so its skills are lopsided — it got very good at one kind of face and barely saw the others. 'Garbage in, garbage out' means that skewed or low-quality training data produces skewed or unreliable results, no matter how clever the method is. The fix isn't a smarter program but a more varied, balanced set of training examples.",
        explanation:
          "Full credit: predicts poor performance on under-represented faces, ties it to the model only learning from the examples it saw (skewed/lopsided data), and connects this to 'garbage in, garbage out.'",
      },
      {
        topicSlug: "pattern-recognition",
        prompt:
          "Most husky photos in a training set happened to be taken in snow, and afterward the system labels a snowy field with no animals as 'husky.' Explain what went wrong, using the idea that finding a pattern isn't the same as understanding. (3–5 sentences.)",
        correctAnswer:
          "The system grabbed an easy but wrong pattern: since nearly every husky photo had snow, it partly learned that 'snow means husky,' so a snowy field alone triggers the label. It found a real connection in the data, just not the one anyone wanted. This shows that finding a pattern isn't the same as understanding — the AI never grasped what a husky actually is; it only noticed things that tended to appear together. That gap between 'things that go together' and real understanding is exactly why pattern-finders make these strange mistakes.",
        explanation:
          "Full credit: explains the model latched onto a misleading pattern (snow correlating with husky) rather than understanding what a husky is, and connects this to correlation/pattern-finding not being true understanding.",
      },
    ],
  },
  {
    kind: "homework",
    title: "Homework 1.2 — Neural networks, language models, limits, and using AI well",
    weekNumber: 1,
    isTimed: false,
    timeLimitMinutes: null,
    instructions:
      "Untimed practice covering sections 1.5–1.8. Answer each question in a few sentences (about 3–5) in your own words. No math is required — explain your reasoning. One-word answers won't receive credit.",
    problems: [
      {
        topicSlug: "neural-networks",
        prompt:
          "A friend hears 'deep learning' and pictures a computer that thinks deeply about problems. Explain what 'deep' actually refers to, and how a deep network builds up to recognizing something like a face. (3–5 sentences.)",
        correctAnswer:
          "'Deep' doesn't mean thoughtful — it just means the neural network has many layers stacked one after another. Each layer does something simple, and the depth lets understanding get built up step by step. For a face, the early layers detect tiny features like edges and patches of color, the middle layers combine those into parts like an eye or an ear, and the later layers combine those parts into a whole face. So 'deep' describes the many-layered structure that assembles simple pieces into meaningful wholes, not any kind of deep thinking.",
        explanation:
          "Full credit: clarifies 'deep' means many layers (not profound thought) and describes the build-up from simple features (edges) to parts to whole objects across layers.",
      },
      {
        topicSlug: "language-models",
        prompt:
          "Someone insists a chatbot 'looks up' the answer when they ask it a question. Explain what the chatbot is really doing instead, and why that helps explain how it can answer a question no one ever asked before. (3–5 sentences.)",
        correctAnswer:
          "The chatbot usually isn't looking anything up — it's predicting the next word over and over, based on patterns it learned from huge amounts of text. It builds an answer one word at a time, each time guessing what word should plausibly come next given everything so far. That's also why it can answer a brand-new question: it generates a fresh response on the spot rather than picking from a fixed list of stored answers. So it's producing likely-sounding text, not retrieving a saved fact.",
        explanation:
          "Full credit: explains the model predicts the next word repeatedly (rather than looking up facts) and that this generative, on-the-spot prediction is why it can respond to never-before-seen questions.",
      },
      {
        topicSlug: "limits-and-hallucination",
        prompt:
          "A chatbot gives you a confident, detailed answer with a specific book title and author to back it up, but the book turns out not to exist. Explain what 'hallucination' means here and why the system did this. (3–5 sentences.)",
        correctAnswer:
          "Hallucination is when an AI states something false but does it confidently, as if it were obviously true — here, inventing a real-looking book that doesn't exist. It happened because a language model predicts plausible-sounding text, not verified facts; when it had no real source, it generated what a believable citation *looks like* instead of admitting it didn't know. The system has no built-in sense of true versus false, so confident wording is no guarantee of accuracy. That's exactly why you should treat its output as a draft and verify anything important.",
        explanation:
          "Full credit: defines hallucination as confidently stating false information, explains it stems from predicting plausible text rather than checking truth, and ideally notes the need to verify.",
        hint: "Think about what a language model is actually optimizing for: text that sounds right, or text that is checked to be true?",
      },
      {
        topicSlug: "using-ai-well",
        prompt:
          "Two students use a chatbot for an essay: one pastes its answer in untouched, the other uses it to brainstorm and draft, then checks facts and rewrites it. Explain why the second approach is the better way to use AI, using the idea of 'human in the loop.' (3–5 sentences.)",
        correctAnswer:
          "The second student keeps a 'human in the loop,' meaning a person stays in charge — directing the tool and checking its work — instead of blindly trusting it. That matters because AI can be confidently wrong or unfair, so an unchecked answer might carry hallucinated facts or simply not be the student's own. By brainstorming, drafting, then verifying and rewriting, the second student gets the AI's speed while their own judgment supplies the direction and a reality check. The first student risks turning the AI's mistakes into their own and learns nothing in the process.",
        explanation:
          "Full credit: explains 'human in the loop' as the person directing and verifying the tool, and why checking/owning the output (rather than pasting it untouched) guards against errors and produces better, accountable work.",
      },
    ],
  },
  {
    kind: "test",
    title: "Unit Test — Baby AI for Everyone",
    weekNumber: 1,
    isTimed: true,
    timeLimitMinutes: 30,
    instructions:
      "Timed. 30 minutes. Covers sections 1.1–1.8. Answer each question in a few sentences (about 4–6) in your own words. No math is required. Pasting is disabled; keystrokes are screened for AI use.",
    problems: [
      {
        topicSlug: "what-ai-is",
        prompt:
          "Explain what it really means to call AI 'a machine that makes guesses,' and why today's AI is described as 'narrow' rather than all-knowing. Use one original everyday example. (4–6 sentences.)",
        correctAnswer:
          "Calling AI 'a machine that makes guesses' means it takes in information and produces its best guess about what to do, based on patterns it learned from examples — not magic and not true understanding. It's often right but never truly *sure*, and it can be wrong. Today's AI is 'narrow' because each system is good at only one specific task and clueless outside it: the AI that recommends videos can't drive a car. There's no single program that understands the world the way a person does. For example, a photo app that sorts pictures of your dog is just guessing which images match a learned pattern — and it would be useless if you asked it to plan your week. That one-task skill, with no general understanding, is exactly what 'narrow' means.",
        explanation:
          "Full credit: explains AI as producing learned guesses (often right, never certain) and 'narrow' as good at one task but clueless elsewhere, with an original everyday example illustrating the point.",
      },
      {
        topicSlug: "rules-vs-learning",
        prompt:
          "Describe the two big paradigms — rule-based systems and learning-based systems — and explain why learning took over for messy real-world problems. Use a concrete task as an example. (4–6 sentences.)",
        correctAnswer:
          "Rule-based systems work from hand-written 'if this, then that' instructions a person spells out in advance — clear and predictable, but only as good as the rules and useless for anything the writer didn't anticipate. Learning-based systems instead study thousands of examples and discover the pattern themselves, so they flex to new cases. For a messy task like recognizing speech, rule-writing collapses: there are too many accents, speeds, and exceptions for any human to list. Learning took over because, for these messy problems, discovering patterns from many examples simply works far better than any rules a person could write. As computers got faster and huge example sets became available, the learning approach pulled ahead and stayed there.",
        explanation:
          "Full credit: contrasts hand-written rules vs. learning from examples, explains rules break down on messy problems (too many exceptions), and notes learning works better there, with a concrete task.",
      },
      {
        topicSlug: "data-and-training",
        prompt:
          "Explain what 'training' actually is for an AI, the difference between training and using a model, and why the quality of the data matters so much. (4–6 sentences.)",
        correctAnswer:
          "Training is the process where a system starts out making bad guesses, compares each guess to the correct answer on an example, and makes a tiny adjustment to do better next time — repeated over millions of examples until it's genuinely good. Training is the long 'study' phase; using the model (inference) is the quick 'test' phase afterward, where you give it something new and it answers in seconds without learning further. Data quality matters enormously because the examples are the AI's entire education: 'garbage in, garbage out.' If the examples are blurry, mislabeled, or lopsided, the model learns blurry, mislabeled, lopsided lessons. A model is only ever as good as the textbook it studied from, which is why gathering varied, accurate data is so important.",
        explanation:
          "Full credit: defines training as adjusting from examples toward correct answers, distinguishes training (study) from using/inference (test), and explains data quality/variety determines model quality ('garbage in, garbage out').",
      },
      {
        topicSlug: "pattern-recognition",
        prompt:
          "Pattern-finding is called the core idea behind AI, but also a source of its strangest mistakes. Explain both: how pattern recognition powers AI, and how a 'spurious' pattern can fool it. Use an example. (4–6 sentences.)",
        correctAnswer:
          "At its core, modern AI finds patterns — regular connections in data — and uses them to guess about new cases, which is what powers recognizing faces, filtering spam, or recommending videos. It distills many examples into patterns rather than memorizing each one. But because it will grab *any* pattern that helps it guess right during training, it can latch onto a misleading or 'spurious' one. For instance, if a skin-cancer detector trained on photos that often included a ruler placed beside serious spots, it might learn 'ruler means cancer' instead of reading the skin. It found a real pattern in the data — just the wrong one — because finding a pattern is not the same as understanding it. That's why a pattern-finder can be powerful and yet fooled by an accidental clue.",
        explanation:
          "Full credit: explains pattern recognition as the core mechanism (distilling examples into patterns to guess) and how a spurious/accidental pattern (e.g. ruler = cancer, snow = husky) misleads it because pattern-finding isn't understanding.",
      },
      {
        topicSlug: "neural-networks",
        prompt:
          "Explain the intuition behind a neural network: what the layers do, what 'deep' means, and what is being adjusted during training. Then explain why such systems are called a 'black box.' (4–6 sentences.)",
        correctAnswer:
          "A neural network is made of many tiny, simple units connected in layers; no single unit is clever, but together they're powerful. The layers build understanding step by step — early layers catch simple features like edges, middle layers combine them into parts like an eye, and later layers assemble whole objects like a face. 'Deep' simply means the network has many such layers stacked up, which lets it build more complex understanding. What gets adjusted during training are the 'weights' — millions of little dials controlling how strongly each connection passes its signal — nudged until the network tends to produce right answers. It's called a 'black box' because, with so many tuned dials, even its builders often can't fully explain why it gave a particular answer.",
        explanation:
          "Full credit: describes layered simple units building from features to objects, 'deep' as many layers, training as adjusting weights/dials, and 'black box' as the difficulty of explaining its decisions.",
      },
      {
        topicSlug: "language-models",
        prompt:
          "Explain how a language model produces a paragraph of text, what 'generative' means, and why this design lets it sometimes state false things confidently. (4–6 sentences.)",
        correctAnswer:
          "A language model produces text by predicting the next word: it guesses one likely word, adds it, then predicts the next word given everything so far, repeating until it has a full paragraph — like an extremely powerful autocomplete. 'Generative' means it *creates* new content by producing fresh sentences this way, rather than picking from a fixed list of canned replies, which is why it can answer questions no one ever asked before. The catch is that it's chasing what *sounds* right, not what is verified true, because it learned patterns of language, not a checked database of facts. So when the most plausible-sounding continuation happens to be false, it will state it just as confidently as a true one. That design is exactly why these models can be convincingly wrong.",
        explanation:
          "Full credit: explains next-word prediction building text piece by piece, 'generative' as creating new content (not retrieving), and that predicting plausible text rather than verified truth allows confident falsehoods.",
      },
      {
        topicSlug: "limits-and-hallucination",
        prompt:
          "Define 'hallucination' in AI and explain why it happens. Then describe two habits that let someone use an unreliable AI safely. (4–6 sentences.)",
        correctAnswer:
          "Hallucination is when an AI states something false but does it confidently, as though it were obviously true — inventing a fact, a quote, or a source that doesn't exist. It happens because a language model predicts plausible-sounding text rather than verified truth, and it has no built-in sense of true versus false, so when it lacks a real answer it generates something that merely sounds right. To use it safely, first treat its output as a draft, not a verdict — read it critically and don't assume confident wording means accuracy. Second, verify anything that matters (facts, numbers, names, advice) against a trustworthy source, being extra careful with high-stakes topics like health, money, or safety. The rule of thumb is simple: the more it matters, the more you check.",
        explanation:
          "Full credit: defines hallucination as confident false output, explains it stems from predicting plausible text with no sense of truth, and gives two safe-use habits (treat as draft; verify important claims against trusted sources).",
      },
      {
        topicSlug: "using-ai-well",
        prompt:
          "Explain what it means to keep a 'human in the loop' when using AI, and give one task that's a good fit for AI and one that should stay in human hands — with a reason for each. (4–6 sentences.)",
        correctAnswer:
          "Keeping a 'human in the loop' means a person stays in charge — directing the AI and checking its work — instead of blindly doing whatever it outputs, because AI can be confidently wrong, biased, or out of date. You treat it like a powerful but unreliable assistant: it supplies speed, you supply direction and a reality check. A good task for AI is brainstorming ideas or writing a rough first draft, since those benefit from fast output that a human can then refine and verify. A task to keep in human hands is a final decision that affects people — like a medical or hiring choice — because it needs real accountability, empathy, and moral judgment the AI doesn't have. Letting AI do the heavy lifting while a person steers and owns the result is what using it well looks like.",
        explanation:
          "Full credit: explains 'human in the loop' as a person directing/verifying the tool, and gives an appropriate AI task (e.g. brainstorming/drafting) and an appropriate human-only task (e.g. accountable decisions affecting people) each with a sound reason.",
      },
    ],
  },
  {
    kind: "final",
    title: "Final — Baby AI for Everyone",
    weekNumber: 1,
    isTimed: true,
    timeLimitMinutes: 45,
    instructions:
      "Timed cumulative final. 45 minutes. Covers the whole course (sections 1.1–1.8). Answer each question in a paragraph (about 5–7 sentences) in your own words. No math is required. Pasting is disabled; keystrokes are screened for AI use.",
    problems: [
      {
        topicSlug: "using-ai-well",
        prompt:
          "Using ideas from across the whole course, argue that one single idea — that modern AI is a pattern-finder that learns from data and predicts likely answers — can explain things as different as a spam filter, a face-unlock system, a chatbot inventing a fake book, and the advice to keep a 'human in the loop.' Use at least three of those examples. (5–7 sentences.)",
        correctAnswer:
          "The one idea tying the course together is that modern AI learns patterns from examples and uses them to predict likely answers, with no real understanding underneath. A spam filter fits: it learned the patterns of junk email from millions of labeled messages and now predicts which new emails are spam, often right but never certain. A face-unlock system fits too: it learned patterns of facial features from many photos and guesses whether a new face matches — and it stumbles if its training photos were lopsided. A chatbot inventing a fake book is the same mechanism showing its dark side: it predicts plausible-sounding text rather than verified truth, so it generated a believable but non-existent citation. And that's exactly why we keep a 'human in the loop': because a confident pattern-based guesser can be wrong, a person must direct it and check its work. None of these look alike on the surface, but each is the same move — learn patterns, predict an answer — which is what makes the idea so powerful.",
        explanation:
          "Full credit: states the unifying principle (AI learns patterns from data and predicts likely answers without true understanding) and applies it to at least three distinct examples, showing each is the same underlying mechanism.",
      },
      {
        topicSlug: "rules-vs-learning",
        prompt:
          "Some people imagine AI got smart because programmers finally wrote enough clever rules. Using what you learned, argue why the real breakthrough was learning from data instead, and what role data quality plays. Use one concrete example. (5–7 sentences.)",
        correctAnswer:
          "The 'more clever rules' story is wrong because for messy real-world problems, no human can ever write enough rules to cover the endless exceptions. Take recognizing a cat in a photo: every rule like 'has whiskers' or 'pointy ears' has countless exceptions, so the rule-writing approach collapses. The real breakthrough was flipping the problem — showing the computer thousands of labeled examples and letting it discover the pattern of 'cat' itself, which is machine learning. This worked far better, and as computers got faster and huge example sets became available, learning pulled ahead of rules for good. But learning shifts the burden onto data quality: a model is only as good as the examples it studied, so if every training cat happened to be black, it might fail on an orange one. So the breakthrough wasn't smarter rules — it was learning from examples, which is exactly why gathering varied, high-quality data matters so much.",
        explanation:
          "Full credit: argues that hand-written rules can't cover messy problems' exceptions, that learning from labeled examples was the real shift, and that data quality/variety determines the learned model's reliability, with a concrete example.",
      },
      {
        topicSlug: "language-models",
        prompt:
          "Explain why a chatbot can sound knowledgeable and still confidently make things up, connecting how it works (predicting text) to the idea of hallucination. Then explain why understanding this changes how you should use it. (5–7 sentences.)",
        correctAnswer:
          "A chatbot sounds knowledgeable because it learned the patterns of language from enormous amounts of text and produces fluent, well-formed sentences by predicting the next word over and over. But that very design is the problem: it's chasing what *sounds* right, not what is *verified* true, and it has no built-in sense of true versus false. So when it lacks a real answer, it doesn't say 'I don't know' — it generates the most plausible-sounding continuation, which is hallucination: confidently stating something false, like a perfectly formatted citation for a book that doesn't exist. The smooth, confident wording is no guarantee of accuracy, because fluency and truth are different things to a predictor of text. Understanding this changes how you use it: you treat its output as a draft, not a verdict, and verify anything that matters against a trustworthy source. The more a particular answer matters, the more you check it — which lets you enjoy its speed without being burned by its confident mistakes.",
        explanation:
          "Full credit: connects next-word prediction (optimizing for plausible, not verified, text) to hallucination, notes confidence isn't accuracy, and concludes you should verify important output and treat it as a draft.",
      },
      {
        topicSlug: "using-ai-well",
        prompt:
          "Pick a real everyday task where you'd use AI, and use it to show the difference between using AI poorly and using it well. Then explain one ethical issue (fairness, privacy, or honesty) a thoughtful user should keep in mind. (5–7 sentences.)",
        correctAnswer:
          "Imagine using a chatbot to help write a school report on climate. The poor way is to ask it to write the whole thing and hand it in untouched: I learn nothing, any hallucinated facts become my mistakes, and passing it off as my own isn't honest. The skilled way keeps a 'human in the loop' — I ask it to brainstorm angles, draft a rough outline, and explain a confusing idea, then I verify the facts, rewrite it in my own voice, and own the result. Same tool, opposite outcomes; the difference is whether my judgment stays in charge and checks the work. An ethical issue to keep in mind is honesty: I shouldn't present AI-generated work as entirely my own or let unverified claims mislead my reader. (Fairness — could the model repeat biased patterns from skewed data? — and privacy — whose information am I feeding in? — are equally worth weighing.) Using AI well means asking not just 'can I?' but 'should I?'",
        explanation:
          "Full credit: contrasts poor vs. skilled use of AI on a concrete task using the 'human in the loop' idea, and raises a genuine ethical concern (honesty, fairness, or privacy) with a sensible explanation.",
      },
    ],
  },
];

type SeedPrimer = SeedTopic;

const REASONING_PRIMERS: SeedPrimer[] = [
  {
    slug: "reasoning-primer-ethical",
    title: "How to reason about everyday fairness dilemmas",
    weekNumber: 1,
    blurb:
      "Assessment primer: weighing what matters when honesty, fairness, and pressure collide.",
    lectureTitle: "Primer: How to reason about everyday fairness dilemmas",
    body: `# How to reason about everyday fairness dilemmas

This short primer prepares you for the **Professional Judgment** check. That activity does not ask for the "right" answer — it asks *which reasons you give weight to* when you decide. Here is the kind of thinking it rewards.

## A dilemma is a clash of reasons

A real dilemma is a situation where several honest reasons pull in different directions: a promise you made, pressure to make something look better than it is, what's easiest for you, and the truth you owe to other people. Reasoning well does not mean pretending the reasons you act against don't exist — it means being honest that they had some weight, and saying why other reasons mattered more.

## Three kinds of reasons

When you justify a decision, the *kind* of reason you lean on matters:

- **What's-easiest-for-me reasons** — what is most comfortable, safe, or rewarding for the person deciding. ("It would be awkward to say no.")
- **Just-following-the-rule reasons** — what the rules, the grown-ups, or your role say to do. ("I was told to.") Rules keep order, but a rule can itself be unfair.
- **Fairness reasons** — appeals to honesty, keeping promises, and the interests of *everyone affected*, the kind of reason you could defend to anyone. ("The people trusting this deserve the truth.")

The check's score rises when you give the most weight to fairness reasons rather than to convenience or to "because those are the rules."

## How to do this activity well

1. **Decide** what the person should do.
2. **Rate every reason** by how much it actually weighed on you — be honest, not strategic.
3. **Rank your top few.** Ranking is where you say what *most* drove the decision.
4. **Read each reason carefully.** Some are deliberately empty or fancy-sounding and reward nothing; ranking one of those high is a sign of careless answering.

There is no penalty for the choice you make. What's measured is the *quality of the reasons* you stand behind.`,
  },
  {
    slug: "reasoning-primer-critical",
    title: "Core clear-thinking skills",
    weekNumber: 1,
    blurb:
      "Assessment primer: analysis, inference, evaluation, deduction, and induction.",
    lectureTitle: "Primer: Core clear-thinking skills",
    body: `# Core clear-thinking skills

This short primer prepares you for the **Critical Reasoning** check — a set of multiple-choice questions that test five different thinking skills. These are the same skills you use to decide what a set of facts really shows, so they matter directly for thinking clearly about what AI can and can't actually do.

## The five skills

- **Analysis** — break an argument into parts: find its **point** (the conclusion), the **reasons** given for it, and any hidden assumption it leans on. Ask: "What is this trying to convince me of, and what does it take for granted?"
- **Inference** — work out what *follows* from what you're told, and how strongly. Tell apart what *must* be true, what is *likely*, and what is only *possible*.
- **Evaluation** — judge how much the reasons actually support the point. Notice when evidence is beside the point, a source isn't trustworthy, or a step doesn't really connect.
- **Deduction** — reasoning where true starting facts *guarantee* the conclusion. If the starting facts are true, the conclusion can't be false. Watch for sneaky forms that only *look* airtight.
- **Induction** — reasoning from a few examples to a *probable* general rule or prediction. Strong induction uses many fair examples; weak induction over-generalizes from too few.

## A recurring trap: things that move together

Most wrong answers are statements that *sound* reasonable but are **not actually backed up by what you were told**. The discipline this check rewards is the same one careful thinking about technology demands: keep apart what the facts **show**, what you're **assuming**, and what only *sounds* right. Two things happening together does not prove one causes the other.

## How to do this activity well

1. Find the **point** (conclusion) first, then the reasons.
2. Ask which of the five skills the question is testing (a hidden-assumption question is analysis; a "what follows" question is inference or deduction; a "how good is this reasoning" question is evaluation).
3. Pick the option that follows **only** from what you were given — not the one that merely sounds true or appealing.`,
  },
];

// Insert any teaching-to-the-test primer lectures whose slug is not yet present.
// Safe to run on every boot: it only adds what is missing.
export async function seedReasoningPrimersIfMissing(): Promise<void> {
  let added = 0;
  for (let i = 0; i < REASONING_PRIMERS.length; i++) {
    const t = REASONING_PRIMERS[i]!;
    const existing = await db
      .select({ id: topicsTable.id })
      .from(topicsTable)
      .where(eq(topicsTable.slug, t.slug));
    if (existing.length > 0) continue;
    const [inserted] = await db
      .insert(topicsTable)
      .values({
        slug: t.slug,
        title: t.title,
        weekNumber: t.weekNumber,
        blurb: t.blurb,
        position: 900 + i,
      })
      .returning();
    if (!inserted) throw new Error(`Failed to insert primer ${t.slug}`);
    await db.insert(lecturesTable).values({
      topicId: inserted.id,
      weekNumber: t.weekNumber,
      title: t.lectureTitle,
      body: t.body,
    });
    added += 1;
  }
  if (added > 0) {
    logger.info({ added }, "Reasoning primers seeded");
  } else {
    logger.info("Reasoning primers: already present, skipping");
  }
}

export async function seedIfEmpty(): Promise<void> {
  // The course was migrated to the Baby AI syllabus. Detect the marker topic;
  // if present and the content version matches, the content is current and we
  // skip. This makes the seed self-healing across environments: a database that
  // still holds older content (e.g. a previous curriculum) is detected and
  // replaced on boot.
  const markerTopic = await db
    .select({ id: topicsTable.id })
    .from(topicsTable)
    .where(eq(topicsTable.slug, "what-ai-is"));
  // Read the stored content version. Tolerate the seed_meta table not yet
  // existing (e.g. a boot that races ahead of schema migration): treat that as
  // "no version recorded", which forces a reseed once the table is present.
  let currentVersion: string | null = null;
  try {
    const storedVersion = await db
      .select({ value: seedMetaTable.value })
      .from(seedMetaTable)
      .where(eq(seedMetaTable.key, "content_version"));
    currentVersion = storedVersion[0]?.value ?? null;
  } catch (err) {
    logger.warn({ err: (err as Error).message }, "Seed: seed_meta unavailable, treating version as unset");
    currentVersion = null;
  }
  if (markerTopic.length > 0 && currentVersion === SEED_CONTENT_VERSION) {
    logger.info("Seed: course content present and current, skipping");
    return;
  }
  if (markerTopic.length > 0) {
    logger.warn(
      { storedVersion: currentVersion, expected: SEED_CONTENT_VERSION },
      "Seed: course content present but out of date — re-seeding with the current curriculum",
    );
  }

  // No current content. Either the database is empty (fresh) or it still holds
  // an older curriculum. Do the (optional) wipe and the full reseed in a SINGLE
  // transaction so the marker topic only ever becomes visible once the entire
  // curriculum has committed. A crash mid-seed rolls back, so the next boot
  // retries instead of leaving partial content that the marker check would
  // wrongly treat as healthy. TRUNCATE also takes an ACCESS EXCLUSIVE lock, so
  // concurrent readers never observe a half-empty course during the replace
  // window. The diagnostic tables are truncated here too so the (non
  // version-gated) diagnostic seed repopulates them with the current content on
  // the same boot.
  await db.transaction(async (tx) => {
    const existing = await tx.execute(sql`select count(*)::int as n from topics`);
    const row = (existing.rows[0] ?? {}) as { n?: number };
    if ((row.n ?? 0) > 0) {
      logger.warn(
        "Seed: stale course content detected — replacing with the Baby AI curriculum",
      );
      await tx.execute(
        sql`TRUNCATE TABLE answers, attempts, practice_attempts, practice_problems, practice_sessions, problems, assignments, lectures, topics, diagnostic_responses, diagnostic_attempts, diagnostic_items, diagnostic_assessments RESTART IDENTITY CASCADE`,
      );
    } else {
      logger.info("Seed: populating course content");
    }

    // Topics + lectures
    const slugToTopicId = new Map<string, number>();
    for (let i = 0; i < TOPICS.length; i++) {
      const t = TOPICS[i]!;
      const [inserted] = await tx
        .insert(topicsTable)
        .values({
          slug: t.slug,
          title: t.title,
          weekNumber: t.weekNumber,
          blurb: t.blurb,
          position: i,
        })
        .returning();
      if (!inserted) throw new Error(`Failed to insert topic ${t.slug}`);
      slugToTopicId.set(t.slug, inserted.id);
      await tx.insert(lecturesTable).values({
        topicId: inserted.id,
        weekNumber: t.weekNumber,
        title: t.lectureTitle,
        body: t.body,
      });
    }

    // Assignments + problems
    for (let i = 0; i < ASSIGNMENTS.length; i++) {
      const a = ASSIGNMENTS[i]!;
      const [inserted] = await tx
        .insert(assignmentsTable)
        .values({
          kind: a.kind,
          title: a.title,
          weekNumber: a.weekNumber,
          position: i,
          isTimed: a.isTimed,
          timeLimitMinutes: a.timeLimitMinutes,
          instructions: a.instructions,
        })
        .returning();
      if (!inserted) throw new Error(`Failed to insert assignment ${a.title}`);
      for (let p = 0; p < a.problems.length; p++) {
        const prob = a.problems[p]!;
        const topicId = slugToTopicId.get(prob.topicSlug);
        if (!topicId) throw new Error(`Unknown topic slug ${prob.topicSlug}`);
        await tx.insert(problemsTable).values({
          assignmentId: inserted.id,
          topicId,
          position: p,
          prompt: prob.prompt,
          correctAnswer: prob.correctAnswer,
          explanation: prob.explanation,
          hint: prob.hint ?? null,
        });
      }
    }

    // Stamp the content version last, inside the same transaction, so the
    // marker check on the next boot only treats the course as "current" once
    // the entire curriculum has committed.
    await tx
      .insert(seedMetaTable)
      .values({ key: "content_version", value: SEED_CONTENT_VERSION })
      .onConflictDoUpdate({
        target: seedMetaTable.key,
        set: { value: SEED_CONTENT_VERSION, updatedAt: new Date() },
      });
  });

  logger.info(
    { topics: TOPICS.length, assignments: ASSIGNMENTS.length, version: SEED_CONTENT_VERSION },
    "Seed complete",
  );
}
