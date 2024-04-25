app.controller('HomeController', ['$scope', 'movies', 'getGames', function($scope, movies, getGames) {
    movies.then(function(data) {
        $scope.movies = data;
    }).catch(function(error) {
        console.error('Error fetching movies:', error);
        $scope.errorMessage = 'An error occurred while fetching movies. Please try again later.';
    });

    // getGames.then(function(data) {
    //     $scope.games = data;
    // }).catch(function(error) {
    //     console.error('Error fetching games:', error);
    //     $scope.errorMessage = 'An error occurred while fetching games. Please try again later.';
    // });
}]);