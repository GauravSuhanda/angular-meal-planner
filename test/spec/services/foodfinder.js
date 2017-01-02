'use strict';

describe('Service: foodfinder', function () {

  // load the service's module
  beforeEach(module('mealplannerApp'));

  // instantiate service
  var foodfinder;
  beforeEach(inject(function (_foodfinder_) {
    foodfinder = _foodfinder_;
  }));

  it('should do something', function () {
    expect(!!foodfinder).toBe(true);
  });

});
