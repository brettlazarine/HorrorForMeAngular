app.factory('getGames', ['$http', 'idgbToken', function($http, idgbToken) {
    return idgbToken.then(function(response) {
        const url = 'https://api.igdb.com/v4/games';
        const clientId = response.clientId;
        const token = response.access_token;
        const config = {
            headers: {
                'Accept': 'application/json',
                'Client-ID': clientId,
                'Authorization': `Bearer ${token}`
            },
            body: "fields name, rating, cover, release_date.human; where themes = 19; limit 10; sort rating desc;"
        };
        return $http.post(url, config)
            .then(function(response) {
                return response.data;
            })
            .catch(function(error) {
                console.error('Error fetching games:', error);
                throw error;
            });
    });
}]);