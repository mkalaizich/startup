var movies = angular.module('movies');

movies.controller('MovieController', ['$scope', 'serviceMovie', function ($scope, serviceMovie) {

    $scope.movies = serviceMovie.getAll();

    //serviceMovie.saveData($scope.serviceMovie.movie);
    //console.log(serviceMovie.movie);

    //$scope.movies = serviceMovie.getAll();  
}]);