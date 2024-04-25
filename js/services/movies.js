app.factory('movies', ['$http', 'apiKey', function($http, apiKey){
    return apiKey.then(function(response) {
        var key = response.apiKey;
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=27`;
        return $http.get(url)
            .then(function(response) {
                return response.data;
            })
            .catch(function(error) {
                console.error('Error fetching movies:', error);
                throw error;
            });
    });
}]);