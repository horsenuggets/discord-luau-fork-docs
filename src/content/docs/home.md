---
title: DiscordLuau
description: Introduction to DiscordLuau.
---

## About

This is the **[Discord API](https://discord.com/developers/docs/intro) [Wrapper](https://rapidapi.com/blog/api-glossary/api-wrapper/)**, the resource that you'll be interacting with if you want to create a Discord Bot/Application!

### Project Structure

- `init.luau`: Requires Source/DiscordLuau/init.luau
- `/Source/DiscordLuau`: The source code for the Discord-Luau package
  - `/Classes`: All Discord-Luau generated objects/classes that the user can interact with.
  - `/Data`: Internal library 'data' modules, consisting of generic lua datatypes, with string values.
  - `/Enums`: Internal library 'enum' files, consisting of string keys and values.
  - `/Std`: Standard libraries that this library uses.
  - `/Types`: Type definitions for Discord Luau.
  - `/Utils`: Utility functions Discord Luau uses.
  - `/Vendor`: External resources or packages that Discord Luau uses.

### Project Goals

- Enabling developers to create a Discord bot that connects to the Discord WebSocket.
- Send and receive messages from Discord.
- Take full advantage of the Discord REST HTTP API.
- Provide detailed and clear documentation on the Discord API Wrapper.
- **Lavalink audio support** for voice functionality.

## Getting Started

Head over to the [Getting Started](/discord-luau-fork-docs/getting-started/environment/) guide to begin!

## Examples

Check out the examples in the [GitHub repository](https://github.com/horsenuggets/discord-luau-fork).
