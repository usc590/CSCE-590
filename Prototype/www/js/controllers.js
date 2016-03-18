angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('LocationCtrl', function($scope) {})

.controller('OrderCtrl', function($scope) {})

.controller('AddItemCtrl', function($scope) {})

.controller('MenusCtrl', function($scope, Menus) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.menus = Menus.all();
  $scope.remove = function(menu) {
    Menus.remove(menu);
  };
})

.controller('MenuDetailCtrl', function($scope, $stateParams, Menus) {
  $scope.menu = Menus.get($stateParams.menuId);
})

.controller('AccountCtrl', function($scope, $state) {

var APPLICATION_ID = '39A2CA58-20B2-F790-FFF0-A4239F494300',
    SECRET_KEY = 'C880CB24-6D10-8E4C-FF7E-9C94567FC500',
    VERSION = 'v1'; //default application version;

Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);

/*var self = this;
self.email = "";
self.password = "";
self.name = "";*/
/*$scope.register = function () {
  console.log("save to new page");
  console.log(self.email+" "+self.name);
  function userRegister
}*/

/*var user = new Backendless.User();
user.email = $scope.email;
user.password = $scope.password;
//user.name=self.name;

Backendless.UserService.register(user, new Backendless.Async(this.userRegistered, this.gotError));
//$state.go("tab.menus");*/

$scope.register=function() {
  
  console.log($scope.controller.email);
}
/*var user = new Backendless.User();
user.email = $scope.form.email;
user.password = $scope.form.password;

Backendless.UserService.register(user);*/
});


