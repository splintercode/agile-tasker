﻿"use strict";

beforeEach(function () {
    module('app.directives');
});

describe("app Directive example", function () {
    it('does exist', inject(function ($injector) {
        var directive = $injector.has('example');
        expect(directive).toBe(true);
    }));
});