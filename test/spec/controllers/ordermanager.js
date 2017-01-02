'use strict';

describe('Controller: OrdermanagerCtrl', function () {

  // load the controller's module
  beforeEach(module('mealplannerApp'));

  var OrdermanagerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OrdermanagerCtrl = $controller('OrdermanagerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(OrdermanagerCtrl.awesomeThings.length).toBe(3);
  });
});
