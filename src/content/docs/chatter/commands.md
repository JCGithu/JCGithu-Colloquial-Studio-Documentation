---
title: Test Commands
description: A number of test commands you can run
next: false
sidebar:
  order: 3
---

There are a few test commands that only the broadcaster (aka. you in your own chat) can trigger in Chatter. These are designed to test adding custom classes to chat bubbles.

Typing the following commands in chat will apply the trait after the dash:

- `!chatter-sub`
- `!chatter-mod`
- `!chatter-vip`
- `!chatter-partner`
- `!chatter-bits`.
- `!chatter-user` is a generic test command.

You can write additional text after the command if you want to preview longer messages.

### Things to Note

- `!chatter-bits` does not yet test for specific amounts due to styling. CSS does not have a simple way for conditional styling (e.g. if a variable is more than value apply X) which is needed given the range of bit values.
- There is no `!chatter-announcement` test command as the `"Connected to [your channel]"` message on load is an announcement.
