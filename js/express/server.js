const express = require('express');
const app = express();
const idgbToken = require('./idgbToken');

const PORT = process.env.PORT || 4001;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.post('/games', async (req, res) => {
    try {
        const url = 'https://api.igdb.com/v4/games';

        const configKeys = await idgbToken;
        const clientId = configKeys.clientId;
        const token = configKeys.access_token;
        const config = {
            headers: {
                'Accept': 'application/json',
                'Client-ID': clientId,
                'Authorization': `Bearer ${token}`
            },
            body: "fields name, rating, cover, release_date.human; where themes = 19; limit 10; sort rating desc;"
        };

        const response = await $http.post(url, config);
        return response.data;
    } catch (error) {
        console.log('Error fetching games:', error);
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});