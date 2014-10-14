'use strict';

angular.module('myApp.device.interpolate-filter', [])

    .filter('interpolate', ['version', function(version) {
        return function(text) {
            return String(text).replace(/\%VERSION\%/mg, version);
        };
    }]);