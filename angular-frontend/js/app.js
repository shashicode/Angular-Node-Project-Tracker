var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    
    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'mainController'
        })
        .when('/addproject', {
            templateUrl: 'pages/addproject.html',
            controller: 'mainController'
        })
        .otherwise({
            redirectTo: '/'
        });
    
});

myApp.controller('mainController', ['$scope', '$http', '$log', function ($scope, $http, $log) {

    $http.get('/api/projectlist')
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
    
    $scope.addProject = function () {
        $http.post('/api/projectlist/', $scope.projectinfo)
            .success(function (result) {
                window.location.href = '#/';
            })
            .error(function () {
               $log.info('Error adding the project');
            });
    }


}]);