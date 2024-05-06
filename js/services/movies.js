app.factory('movies', ['$http', 'apiKey', async function($http, apiKey){
    const config = await apiKey;
    const key = config.apiKey;
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=27`;

    try {
        const response = await $http.get(url);
        return response.data;
    } catch (error) {
        console.log('Error fetching movies:', error);
    }
}]);