describe("Testing Movie Site Angular", function () {

    beforeEach(module('app'));

    describe("Testing moviesController", function () {
        
        let scope, ctrl;
    
        beforeEach(inject(function($controller, $rootScope) {
            
            scope = $rootScope.$new();
            ctrl = $controller('moviesController', {$scope:scope});
        }));

       it("should initialize movies", function() {
            expect(scope.movies).toBeDefined();
            expect(scope.movies.length).toBe(0);
        });
    });
})