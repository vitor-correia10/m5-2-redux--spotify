# Workshop: Redux Spotify App

Today, we'll build a mini-frontend for the Spotify API

## Registering an API key

First, you'll need a Spotify account. If you don't already have one, you can create one for free at this URL: https://www.spotify.com/signup

After you have an account, navigate to the Dashboard login screen: https://developer.spotify.com/dashboard/login. Log in with your new account.

The very first time you do this, you'll need to agree to the terms of service.

We need to create an "app". Essentially, we need to tell Spotify what we want to do with its API. In return, it will give us some API keys we can use.

![Spotify create screen](./__lecture/assets/spotify-create.png)

Enter something like the following:

![Spotify Wizard](./__lecture/assets/spotify-wizard-1.png)

You'll be asked if this is a commercial or non-commercial application. Select **non-commercial**.

![Spotify Wizard](./__lecture/assets/spotify-wizard-2.png)

Afterwards, you should be taken to the app's home screen. This page will give us our Client ID and our Secret (we'll need to click "Show client secret" to reveal it):

![Spotify keys](./__lecture/assets/spotify-keys.png)

Create a new file in the root directory named `.env`. Copy and paste this into it:

```
SPOTIFY_CLIENT_ID=YOUR_KEY_HERE
SPOTIFY_SECRET=YOUR_KEY_HERE
```

Replace "YOUR_KEY_HERE" with the keys provided from Spotify

## Initial state

## Setup

- Add proxy to package.json, `"proxy": "http://localhost:5678",`
