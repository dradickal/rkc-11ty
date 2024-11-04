---
title: Podcast Web App
emoji: 🎧
# metaDescription: Will use summary if not used, or the default metadata.desciption if no summary.
summary: A project built to practice React and show the use of a third-party API.
date: 2024-04-01T00:00:00.000Z
tags:
  - api
  - vite
  - react
  - responsive
---

### Task
Build an example web app that utilizes React and is not a to-do list. It should include a number of UX and HTML/CSS details that would match the typical feature requests built in a job environment. 

### Solution
Imitate the podcast app I use on my phone as a web app. The podcast graphics would provide visual imagery. The different states of downloading and playing the audio would highlight various benefits of react in an interactive app. Also displaying lists of complex data is a common need.

### Implementation
I was already a user of the podcast database [Listen Notes](https://www.listennotes.com/) which allows API access their data. Using the API let me focus on aspects of the app outside of data management. I still wrote my own API layer as a security measure to normalize and sanatize responses because it is, after all, third-party data. It also acts as an abstraction to prevent being tightly coupled to the data source.

The site did not require many pages to route, but by using React Router I was able to prefetch and reuse data to improve the load time of clicking back and forth between podcasts and the series list after the initial load. 



