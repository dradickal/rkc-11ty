---
title: Delivery Stats
emoji: 🚗
# metaDescription: Will use summary if not used, or the default metadata.desciption if no summary.
summary: A tool to extract data about gig delivery shifts from screenshot images.
date: 2024-07-01T00:00:00.000Z
tags:
  - mysql
  - vite
  - react
  - python
  - mikro-orm
---

### Task
Create a tool to extract data about my gig delivery shifts from screenshot images. I take these screenshots during deliveries to record information about the details of each offer. Tracking the data helps me in multiple ways. The most straight forward benefit is being able to reference the screenshots when communicating with to the Driver Support team. Giving accurate details when issues or discrepencies arrise with a delivery has help me recieve better help. 

What I really needed though, was a faster way to extract additional data points about my shifts and the offers from the images. Collecting and analyzing activity such as the time spent driving versus waiting at the restaurant has improved my earnings by helping me make better decisions about what offers are worth Accepting or Declining. Manually going through the images, however, is a slow and arduous task.

### Solution
I searched for and found a python library for Optical Character Recognition (OCR).