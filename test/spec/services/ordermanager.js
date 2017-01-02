'use strict';

describe('Service: ordermanager', function () {

  // load the service's module
  beforeEach(module('mealplannerApp'));

  // instantiate service
  var ordermanager;
  beforeEach(inject(function (_ordermanager_) {
    ordermanager = _ordermanager_;
  }));

  it('should do something', function () {
    expect(!!ordermanager).toBe(true);
  });

});
