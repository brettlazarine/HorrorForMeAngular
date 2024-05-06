app.factory('twitchKeys', ['$http', async function($http) {
    try {
        const response = await $http.get('config.json');
        return response.data.twitch;
    } catch (error) {
        console.log('Error fetching Twitch keys:', error);
    }
}]);