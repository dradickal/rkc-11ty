---
title: Fantasy Draft Tool
emoji: 🏈
# metaDescription: Will use summary if not used, or the default metadata.desciption if no summary.
summary: An interactive list of players to assist me during my live Fantasy Football draft.
date: 2024-08-01T00:00:00.000Z
sourceUrl: https://github.com/dradickal/fantasy-draft-tool-db
demoUrl: https://radickalcreations.com/demo/fantasy-draft-tool/
tags:
  - tinybase
  - vite
  - react
  - typescript
---

### Task
I first created a basic webpage for my Fantasy Drafts years ago in order to have my player list be easily searchable using the brower's page search and then marking them as drafted. These early versions were not well automated in their creation, and also possessed a major flaw. The "drafted" action only added a CSS class with javascript, not storing any other data.

More than once over the years, I would accidently hit `CTRL-R` instead of `CTRL-F` and the refreshed page would lose all "drafted" information halfway through the draft. This needed a fix!

### Solution
Using the `beforeunload` event seems like the easy solution, however, working with this event has its own challenges and is not always reliable. Searching for a better solution I came across the library TinyBase. TinyBase is an in-memory datastore that can be persisted to browser storage and is built to be "reactive".

Diving fully into the features of TinyBase, I built my lastest draft tool with TypeScript React components that utilize Context Providers for each position table. The data store is dynamically loaded from either the browser storage or from json files. Each click of the "Drafted" button persists the change to the IndexedDB.

The current version of my draft tool is now easy to prepare, safe from errant page refreshes, and ready for future feature improvments.