'use strict';

describe('myApp.view1 module', function () {

    beforeEach(module('myApp.view1'));

    describe('view1 controller', function () {

        var scope;
        var controller;

        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            controller = $controller('View1Ctrl', {
                '$scope': scope
            });
        }));

        it('should be created', function () {
            expect(controller).toBeDefined();
        });

        it('should populate devices', function () {
            expect(scope.devices).toBeDefined();
        });

        it('should populate device[0] ', function () {
            expect(scope.devices[0].name).toEqual('iphone');

        });
    });
});
