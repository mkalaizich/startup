var movies = angular.module('movies');

movies.controller('AddMovieController', ['$scope', 'serviceMovie', function ($scope, serviceMovie) {
    
    var movieID = 4;

    $scope.addMovie = function () {        
        $scope.newmovie.id = movieID++;        
        serviceMovie.addMovie($scope.newmovie);
    }    
}]);