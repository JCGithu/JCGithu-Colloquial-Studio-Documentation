---
title: Changelog
description: Guess it's not that easy.
---

### V2.2.5

- **Docs**
  - There's now documentation, and on it's own subdomain!
- Added more words in Twordle
- Trimmed some unneeded lines
- Tweaked a few Chatter style names after writing up the documentation

### V2.2.4

- **Twordle!**
  - Added more words to specific word lists
  - Added a different mode. Chat can now guess with words rather than individual letters.
- **Optimisations:** Starting to go back and do some rewrites.
  - Optimised API calls on both apps.
  - Optimised how Chatter deletes messages over time.
  - Reduced the animations on chat bubbles.
  - When running in OBS it now uses a slightly more efficient version of the apps, as your styles are ‘locked in’.
- Restyled some of the dashboard and Twordle UI.
- Removed dependencies from the project to clean things up.

### V2.2.3

- **Chatter badge support is back!** Twitch made this so much harder than it needs to be…
  - One really minor benefit from the new system is that badges load on launch - not after the first message received.
- **New Feature:** Chat limit in Chatter.
  - I originally put this to help lower spec PCs, but I quite liked the look of limiting chat to just a few messages.
- Reduced the stutter effect when new chat bubbles appear.
- Animations have sadly been downgraded. I didn’t realise OBS is quite behind on Chrome releases, so the modern tricks were breaking.
- Restyled some of the dashboard and Twordle UI.
- Polished up the alphabet game using the dashboard elements.
- Moved pronouns up 1 pixel. _It was genuinely bothering me._
- Added the option to customise the divide between username : chat message. Not in the dashboard, but applicable through OBS.
- Made this Change Log a public site!

### V2.2.2

- Improved the performance of the `!emotewipe` command for Emote Drop
- Stripped back more unneeded parts of Pixi, the graphics renderer for Emote Drop.
- Really minor optimisations for how Chatter loads messages and pronouns
- Moved custom fonts into Svelte. Hopefully fixes it not loading for people.
- Fixed the dashboard not updating when new parameters are added.
