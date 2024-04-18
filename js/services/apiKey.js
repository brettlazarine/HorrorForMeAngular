app.factory('apiKey', ['$http', function($http) {
    return $http.get('config.json')
        .then(function(response) {
            return response.data; // Return the data from the response
        })
        .catch(function(error) {
            console.error('Error fetching API key:', error);
            throw error; // Throw error to handle it in the caller
        });
}]);
