---
title: CSS Classes
description: A list of custom classes in Chatter
sidebar:
  order: 2
---

Each chat bubble in Chatter has different classes and variables that can be applied. These are dependant on the type of message and type of user.

### Message Type

You can test these with [chat commands](/chatter/commands).

- `bits`
- `announcement`
- `first`

The first event it triggered on a users first chat in the stream.

### User Type

You can test all of these (except reward IDs) with [chat commands](/chatter/commands).

- `sub`
- `mod`
- `vip`
- `partner`
- username
- custom-reward-id

Each username will be added as a class, allowing you to customise the look for specific chatters.

The custom reward ID is for channel point redeems. You can easily find the ID for a point redeem with this [tool from Instafluff](https://www.instafluff.tv/TwitchCustomRewardID/?channel=YOURTWITCHCHANNEL). Make sure to put your own channel name in the URL.

### Animation

Use these to overwrite the in-built Chatter animations

- `Pop_In`
- `Slide_Left`
- `Slide_Right`
- `Fade_In`
- `Grow`

### Alignment

Horizontal Alignment of the bubble. These are applied individually, so you could apply different alignments to different message types.

- `flex-start`
- `center`
- `flex-end`

### Applied Classes

These classes are applied if the relevant settings are selected in the app.

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
