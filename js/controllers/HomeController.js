app.controller('HomeController', ['$scope', 'movies', function($scope, movies) {
    movies.then(function(data) {
        $scope.movies = data;
    }).catch(function(error) {
        console.error('Error fetching movies:', error);
        $scope.errorMessage = 'An error occurred while fetching movies. Please try again later.';
    });
}]);