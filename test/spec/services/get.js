'use strict';

describe('Service: get', function () {

  // load the service's module
  beforeEach(module('mealplannerApp'));

  // instantiate service
  var get;
  beforeEach(inject(function (_get_) {
    get = _get_;
  }));

  it('should do something', function () {
    expect(!!get).toBe(true);
  });

});
