---
title: Shortening long feedback loops iteratively
author: Jason Olson
authorTitle: Staff Software Engineer
date: 2024-09-10T20:26:02.863Z
description: Exploring initial steps at shortening feedback loops
---
 ***TL;DR;***

* Feedback loops, especially short ones, are extremely important for developing high quality software
* A rapid feedback loop of < 5-10 minutes is not always possible. If people or manual steps are involved, days may not even be possible.
* Feedback loops can be shortened over time with iterative releases and small improvements.
* When fixing a bug or finding an issue, we can ask ourselves “What would have helped us find this sooner?” Several iterations of this sort can quickly add up to massive gains in shortening feedback loops.

  * We can apply this to the development of new features as well through the use of Vertical Slices and early demoing to product owners and stakeholders.

**Feedback loops are a key aspect of any system. Software is no different.**

Lately, I’ve been thinking a lot about feedback loops and cycles. An important part of being able to move quickly is getting feedback quickly so any corrections can be made as close to the source as possible. As engineers, we excel when this feedback loop is very short indeed. This is a big benefit of certain practices like Test-Driven Development.

But Enterprise software can be challenging. It’s not always possible for important feedback loops to happen in the span of seconds, or even minutes. Sometimes, feedback loops can even take weeks or months.

How many times have you been fixing a bug and realized the code that causes the bug has been checked in for months without problems? The cycle from the point of the bug being introduced and it being fixed has been a very long one. The context from the work done when the bug introduced may be lost. It could even be that the engineer that wrote the original code is no longer with the company.

**A simple first step for shortening future cycles is asking ourselves: “What information could have helped us get this feedback sooner?”**

It doesn’t need to be a large architectural change, or massive sweeping code change to make our lives better. Iterative improvements add up over time. They take on similar elements as compounding interest.

As we develop the practice of easing our pain one step at a time, future steps become easier to take. And by working on bringing the feedback loop back closer to the original context, we can also increase the options we have available to use for shortening the feedback loop. Perhaps you can start using runtime asserts, or improved logging, or compile-time feedback for code issues.

**We can apply these thoughts to developing new features as well.**

The sooner we get feedback on new features we develop, the cheaper it is to react to that feedback. We can use techniques like Vertical Slides combined with early and frequent demos to product owners and stakeholders to help guide our work through a new feature.

The longer you wait to get feedback on a new feature, the more painful it can be to react to feedback. We start experiencing potential pains around excessive rework, or wasted time from building the wrong feature.