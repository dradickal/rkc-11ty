---
title: Delivery Stats
emoji: 🚗
# metaDescription: Will use summary if not used, or the default metadata.desciption if no summary.
summary: A tool to extract data about gig delivery shifts from screenshot images.
sourceCodeUrl: https://github.com/dradickal/delivery-stats-frontend
date: 2024-07-01T00:00:00.000Z
tags:
  - mysql
  - vite
  - react
  - python
  - mikro-orm
---

### Task
Create a tool to extract data about my gig delivery shifts from screenshot images. 

### Backgorund
I take these screenshots during deliveries to record information about the details of each offer. Tracking the data helps me in multiple ways. The most straight forward benefit is being able to reference the screenshots when communicating with the Driver Support team. Giving accurate details about a delivery when issues or discrepencies arrise has help me recieve better help. 

What I also needed, was a faster way to extract additional data points about my shifts from the those screenshots. Collecting and analyzing data to understand my activity, such as the time spent driving versus waiting at the restaurant, has improved my earnings by helping me make better decisions about what offers are worth Accepting or Declining. Manually going through the images, however, is a slow and arduous task.

### Solution
I searched for and found a python library for Optical Character Recognition (OCR). The library is able to proccess the text from the screenshots with moderate accuracy. Around the OCR I built a database and a web interface to assist in proccessing and validating the text output.

Additional features that I would like to add to the application center around a dashboard to present the analyzed data.