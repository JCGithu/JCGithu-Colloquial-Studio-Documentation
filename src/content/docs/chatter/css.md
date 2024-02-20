---
title: CSS Classes
description: A list of custom classes in Chatter
sidebar:
  order: 2
---

Each chat bubble in Chatter has classes and variables applied dependant on the message and user.

### Message Type

These classes will be applied when applicable. You can test these with [chat commands](/chatter/commands).

- `sub`
- `mod`
- `vip`
- `partner`
- `bits`
- `announcement`
- `first`

First is the users first chat in the stream.

### Animation

Use these to overwrite the in-built Chatter animations

- `Pop_In`
- `Slide_Left`
- `Slide_Right`
- `Fade_In`
- `Grow`

### Alignment

Horizontal Alignment of the bubble. These are applied individually, so you could apply different alignments to different message types

- `flex-start`
- `center`
- `flex-end`

### Applied Each Message

Each persons username will be added as a class, allowing you to customise the look for specific individuals

The custom reward ID is for channel point redeems. You can easily find the ID for a point redeem with this [tool from Instafluff](https://www.instafluff.tv/TwitchCustomRewardID/?channel=YOURTWITCHCHANNEL)

- username
- custom-reward-id

### Applied Classes

These classes are applied if the relevant toggles are selected in the dashboard

- `dropShadow` for bubble drop shadow
- `bubbleBanner` for banner mode

### CSS Variables

- `--animTime` in seconds how fast animations play
- `--animEase` the easing function for animations
- `--userCol` the user colour for this message
- `--shadowCol` the drop shadow colour, if applicable
- `--animHeight` needed for animations, would not overwrite.

:::caution[Work in Progress]
This page is still WIP. If you have questions or some aspect of how to customise is missing please ask in [Discord](https://discord.gg/8vmqSWnKvS)
:::
