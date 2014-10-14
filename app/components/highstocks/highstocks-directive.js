
'use strict';

angular.module('myApp.device.device-directive', [])

    .directive('appVersion', ['version', function(version) {
        return function(scope, elm, attrs) {
            elm.text(version);
        };
    }]);