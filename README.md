# DeckOfCards

A little test app for a deck of cards.

This is over engineered for what it is, but is an example of one way to structure a react native app.

## Sharing code with web

All of the code in _src/features/cards/lib_ should have no dependencies on react native, and could be shared with a web project (probably). Depending on how sharing is done it could be useful to lift the lib folder up the tree (_src/lib_)

## Missing

Building blocks for constructing a UI. Should have files for Typography, Colors, Strings, etc. Then additional components, and styles, are built from these.

## Only ran on iOS Sim

This project hasn't been tested on Android at all, and on no real devices.
