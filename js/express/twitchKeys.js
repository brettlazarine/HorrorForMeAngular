const express = require('express');
const app = express();

const twitchKeys = async () => {
    try {
        const response = await $http.get('config.json');
        return response.data.twitch;
    } catch (err) {
        console.log("Error fetching Twitch keys:", err);
    }
}

module.exports = { twitchKeys };