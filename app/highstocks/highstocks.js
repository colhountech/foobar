/**
 * Created by Micheal on 14/10/2014.
 */
//'use strict';

angular.module('myApp.highstocks', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/highstocks', {
            templateUrl: 'highstocks/highstocks.html',
            controller: 'HighstocksCtrl'
        });
    }])

    .controller('HighstocksCtrl', ['$scope', function($scope) {

        $scope.message = "Highstocks!"

    }]);