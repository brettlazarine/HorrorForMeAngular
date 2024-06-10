const express = require('express');
const app = express();
const twitchKeys = require('./twitchKeys');

const idgbToken = async () => {
    try {
        const twitchResponse = await twitchKeys;
        const clientId = twitchResponse.clientId;
        const clientSecret = twitchResponse.clientSecret;
        const url = `https://id.twitch.tv/oauth2/token?client_id=${clientId}&client_secret=${clientSecret}&grant_type=client_credentials`;
    
        const gameResponse = await $http.post(url);
        return gameResponse.data + clientId;
    } catch (err) {
        console.log("Error fetching IDGB token:", err);
    }
}


module.exports = idgbToken;