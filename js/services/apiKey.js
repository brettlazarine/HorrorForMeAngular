app.factory('apiKey', ['$http', function($http) {
    return $http.get('config.json')
        .then(function(response) {
            return response.data;
        })
        .catch(function(error) {
            console.error('Error fetching API key:', error);
            throw error;
        });
}]);
