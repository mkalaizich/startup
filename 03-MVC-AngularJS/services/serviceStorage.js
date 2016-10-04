var movies = angular.module('movies');

movies.service('serviceStorage', ['$window', function ($window) {    
    this.set = function (key, value) {
        $window.localStorage[key] = JSON.stringify(value);
    }

    this.get = function (key, defaultValue) {
        if ($window.localStorage[key] != undefined) {
            return JSON.parse($window.localStorage[key] || false);
        } else {
            return false;
        }            
    }

    this.remove = function (key) {
        $window.localStorage.removeItem(key);
    }

    this.clear = function () {
        $window.localStorage.clear();
    }    
}]);