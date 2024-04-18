app.factory('movies', ['$http', function($http){
    return $http.get('https://api.themoviedb.org/3/discover/movie?api_key=2e5aaec53df627a3c2f12b971432f2ef&with_genres=27')
        .success(function(data){
            return data;
        })
        .error(function(err){
            return err;
        });
}]);