'use strict';

describe('myApp.device module', function() {
    beforeEach(module('myApp.device'));

    describe('device service', function() {
        it('should return current device', inject(function(version) {
            expect(version).toEqual('0.1');
        }));
    });
});