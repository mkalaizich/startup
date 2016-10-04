var movies = angular.module('movies', ['ngRoute']);

/*movies.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: './views/main.html'
        })
        .when('/addMovie', {
            templateUrl: './views/addMovie.html'
        })
        .when('/movies', {
            templateUrl: './views/main.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});*/
movies.controller('MainController', ['$scope', '$http', function ($scope, $http) {
    $http({
        method: 'GET',
        url: 'http://api.icndb.com/jokes/random'
    })
    .success(function (data, status, headers, config) {        
        console.log('Succes!');
        $scope.joke = data.value.joke;
    })
    .error(function (data, status, headers, config) {        
        console.log('The end is near!');
    });
}]);
