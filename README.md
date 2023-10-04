# Websockets in Node Proof of Concept

## Introduction

The goal is to build out a system of apps communicating with each other via websockets in Node.  The apps are:
- A browser client capable of sending and receiving a piece of state to a server
- A socket server serving state to multiple instances of the browser client above 
- A browser listener client receiving state from the socket server and forwards it to the sign-server
- A sign server which receives state from the listener client and drives a software relay controlled electronic sign 

## Setup
1. Start the socket-server: `cd socket-server && npm run start`
2. Start the sign server: `cd sign-server && npm run start`
3. In one browser tab, open the listener's `index.html` by running `open -a "Google Chrome" REPO_PATH/listener/index.html`: 
4. In another browser tab, open the app's `index.html` by running`open -a "Google Chrome" REPO_PATH/app/index.html`: 

## Use

To observe the proof of concept in action, go to the app browser client page and click Send.  This sends a message via websocket to the socket server.

The socket server in turn receives the message, toggles a boolean flag, and sends this value out to all receivers listening for messages on the `server-outbound` channel at localhost:8080.

This includes both kinds of browser clients.  The app browser client console log's the flag value.  The listener client passes the flag value to a dedicated server.

The dedicated server exists because terminal scripts are disallowed from being invoked by the browser for security reasons.  This server only receives the message from the listener client.
