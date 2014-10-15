//'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', function($scope) {

        $scope.devices = [{
            name: "iphone",
            assetTag: "12312",
            owner: "dev",
            desc: "iOS 4.2"
        },
            {
                name: "laptop",
                assetTag: "12313",
                owner: "dev",
                desc: "iOS 4.2"
            },
            {
                name: "android",
                assetTag: "12314",
                owner: "dev",
                desc: "iOS 4.2"
            }];
}]);