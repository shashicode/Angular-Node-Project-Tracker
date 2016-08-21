var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    
    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'mainController'
        })
        .otherwise({
            redirectTo: '/'
        });
    
});

myApp.controller('mainController', ['$scope', '$http', '$log', function ($scope, $http, $log) {

    $http.get('http://localhost:3000/api/projectlist')
        .success(function (result) {
            $scope.projectlists= result;
        })
        .error(function (data, status) {
            $log.info('Error feting information' + status);
        });


    $scope.deleteProject = function (id) {
        $http.delete('/api/projectlist/' + id)
            .success(function (result) {
                window.location.href= "#/";
            })
            .error(function (data, status) {
                $log.info('Error deleting data');
            });
    }

}]);