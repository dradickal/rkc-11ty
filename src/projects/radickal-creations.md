---
title: Radickal Creations
emoji: 💻
# metaDescription: Will use summary if not used, or the default metadata.desciption if no summary.
summary: The portfolio site for David Radick
date: 2024-10-01T00:00:00.000Z
sourceCodeUrl: https://github.com/dradickal/rkc-11ty-fork
demoUrl: https://radickalcreations.com
tags:
  - 11ty
  - sass
  - responsive
---

### Task
As a technology professional, it's important to have a home for my own web presence. This is the need that `radickalcreations.com` serves to fill.

### Solution
In order to focus more on my projects, but still wanting granular control of my website, I chose to find a template that utilized the 11ty static site generator. The template I started with is [Fernfolio](https://jamstackthemes.dev/theme/fernfolio/) by Tyler M. Roderick. This was chosen for its clean, professional appearance, having a responsive layout, and its use of SASS for styling. 

#### Modifications
A number of changes were made by me to better suit my needs and improve the UX.
- Updated all files to use module ESM imports vs the existing CommonJS requires.
- Fix templating issues caused by breaking changes in 11ty.
- Removed integration with Netlify.
- Ensure accessibility with color contrasts in various locations within the theme, primarily the dark-mode.
- Made the dark-mode theme button visible in the mobile responsive size.
- Changes to the navigation in the mobile menu drawer.
  - Increased the clickable area of the nav links beyond just the text.
  - Better alignment of the opening menu button and the closing "X".