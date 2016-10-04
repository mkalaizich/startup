var movies = angular.module('movies');

movies.controller('MovieController', ['$scope', 'serviceMovie', function ($scope, serviceMovie) {
    $scope.moviesList = serviceMovie.getAll();    

    $scope.updateGrid = function () {
        $scope.moviesList = serviceMovie.getAll();
    }

    $scope.addMovie = function () {        
        serviceMovie.addMovie($scope.newmovie);
        $scope.updateGrid();

        $scope.newmovie = '';
    }

    $scope.deleteMovie = function (movieId) {        
        serviceMovie.deleteMovie(movieId);
        $scope.updateGrid();
    }

    $scope.editMovie = function (movieId) {
        $scope.newmovie = angular.copy(serviceMovie.getMovie(movieId));
        $scope.updateGrid();
    }    
}]);