function MainController($scope) {
  $scope.name = 'Josh';
  $scope.email = 'josh.avina78@gmail.com';
  $scope.phone = '1234567890';
}

angular
  .module('app')
  .controller('MainController', MainController)
