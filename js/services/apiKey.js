app.factory('apiKey', ['$http', async function($http) {
    try {
        const config = await $http.get('config.json');
        return config.data;
    } catch (error) {
        console.log('Error fetching API key:', error);
    }
}]);
