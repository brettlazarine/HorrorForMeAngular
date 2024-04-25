app.factory('idgbToken', ['$http', 'twitchKeys', function($http, twitchKeys) {
    let clientId;
    let clientSecret;

    return twitchKeys.then(function(response) {
        clientId = response.clientId;
        clientSecret = response.clientSecret;
        var url = `https://id.twitch.tv/oauth2/token?client_id=${clientId}&client_secret=${clientSecret}&grant_type=client_credentials`;

        return $http.post(url)
            .then(function(response) {
                return response.data + clientId;
            })
            .catch(function(error) {
                console.error('Error fetching IGDB token:', error);
                throw error;
            });
    })
}]);