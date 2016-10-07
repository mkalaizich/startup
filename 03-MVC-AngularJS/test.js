describe("Testing Movie Site Angular", function () {

    beforeEach(module('app'));

    describe("Testing moviesController", function () {
        
        let scope, control;
    
        beforeEach(inject(function($controller, $rootScope) {
            
            scope = $rootScope.$new();
            control = $controller('moviesController', {$scope:scope});
        }));

       it("should initialize movies", function() {
            expect(scope.movies).toBeDefined();
            expect(scope.movies.length).toBe(0);
            newMovie = {
                    title: 'Gladiator',
                    year: '2000',
                    plot: 'A story of revenge'
                };
            scope.movies.push({ title: newMovie.title, year: newMovie.year, plot: newMovie.plot });
            expect(scope.movies.length).toBe(1);
        });
    });
})