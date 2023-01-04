# DeckOfCards

A little test app for a deck of cards.

This is over engineered for what it is, but is an example of one way to structure a react native app.

## Potential to share code with web

All of the code in _src/features/cards/lib_ should have no dependencies on react native, and could be shared with a web project (testing required). If there ends up being lots of features with many cross referencing lib folders it can make sense to lift the lib folder up the tree and consolidate them (_src/lib/{feature}_).

## Missing

Building blocks for constructing a UI. Should have files for Typography, Colors, Strings, etc. Then additional components, and styles, are built from these.

## Only ran on iOS Sim

This project hasn't been tested on Android at all, and on no real devices.
