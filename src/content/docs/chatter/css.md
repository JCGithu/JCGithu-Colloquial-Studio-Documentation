---
title: CSS Classes
description: A list of custom classes in Chatter
sidebar:
  order: 2
---

:::caution[Work in Progress]
:::

class="chatBubble {message.type} {$storage.chatter.inProgress.animation.replace(' ', '_')} {$storage.chatter.inProgress.align} {message.tags.username} {message.tags['msg-id'] || ''} {message.tags['custom-reward-id'] || ''}"
class:dropShadow={$storage.chatter.inProgress.highlight}
  class:bubbleBanner={$storage.chatter.inProgress.banner}
class:first={message.tags["first-msg"]}
class:bits={message.tags.bits}
class:mod={message.tags.mod}
class:vip={message.tags.badges?.vip}
style="font-family: {$storage.chatter.inProgress.font}; border-radius: {$storage.chatter.inProgress.border / 100}rem;"
style:--animTime={`${$storage.chatter.inProgress.animTime}s`}
style:--animTimeSlow={`${$storage.chatter.inProgress.animTime * 1}s`}
style:--animEase={$storage.chatter.inProgress.animEase}
  style:--userCol={$storage.chatter.inProgress.bubbleCustom ? userCol : chatBackgroundCalc}
style:--shadowCol={$storage.chatter.inProgress.togglecol ? userColAlpha : $storage.chatter.inProgress.highcolour}
style:--animHeight={animHeight}
