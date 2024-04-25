app.factory('twitchKeys', ['$http', function($http) {
    return $http.get('config.json')
        .then(function(response) {
            return response.data.twitch;
        })
        .catch(function(error) {
            console.error('Error fetching Twitch keys:', error);
            throw error;
        });
}]);