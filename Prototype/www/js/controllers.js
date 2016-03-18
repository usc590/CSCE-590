angular.module('starter.controllers', [])


.controller('DashCtrl', function($scope) {})

.controller('LocationCtrl', function($scope) {})

.controller('OrderCtrl', function($scope) {})

.controller('AddItemCtrl', function($scope, $state) {
  var self = this;
  $scope.save = function(){
    var Product = Parse.Object.extend("Product");
var p = new Product();

p.set("name", self.productName);
p.set("price", parseFloat(self.price));
p.set("quantity", parseFloat(self.quantity));


p.save(null, {
  success: function(p) {
    // Execute any logic that should take place after the object is saved.
    alert('New object created with objectId: ' + p.id);
  },
  error: function(p, error) {
    // Execute any logic that should take place if the save fails.
    // error is a Parse.Error with an error code and message.
    alert('Failed to create new object, with error code: ' + error.message);
  }
  });
  }
})

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

.controller('MapCtrl', function($scope, $state, $cordovaGeolocation) {
  var options = {timeout: 10000, enableHighAccuracy: true};
 
  $cordovaGeolocation.getCurrentPosition(options).then(function(position){
 
    var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
    var mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
 
    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);
 
 google.maps.event.addListenerOnce($scope.map, 'idle', function(){
 
  var marker = new google.maps.Marker({
      map: $scope.map,
      animation: google.maps.Animation.DROP,
      position: latLng
  });      
 
  var infoWindow = new google.maps.InfoWindow({
      content: "Here I am!"
  });
 
  google.maps.event.addListener(marker, 'click', function () {
      infoWindow.open($scope.map, marker);
  });
 
});
 
  }, function(error){
    console.log("Could not get location");
  });



})


.controller('AccountCtrl', function($scope, $state) {

// var APPLICATION_ID = '39A2CA58-20B2-F790-FFF0-A4239F494300',
//     SECRET_KEY = 'C880CB24-6D10-8E4C-FF7E-9C94567FC500',
//     VERSION = 'v1'; //default application version;

// Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);

appid='pCxhz9ImIwTLYhoGymlw5PkYoQVhWz1gmPLaumO2';
jskey='OV2DwoN0ZoEB99HbMZN9vJtSULjZK38hmQS515X8';
Parse.initialize(appid,
                   jskey);

var Product= Parse.Object.extend("Product");
var query= new Parse.Query(Product);
query.find().then(function(objs){
  console.log(objs.length + "icecreams");
});


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
var self = this;

$scope.login=function() {
  
  console.log(self.email);

  Parse.User.logIn(self.email, self.password, {
  success: function(user) {
    // Do stuff after successful login.
    console.log("logged in");
    $state.go("tab.dash");
  },
  error: function(user, error) {
    // The login failed. Check error to see why.
  }
});

}
$scope.register=function() {
  
  console.log(self.email);
var user = new Parse.User();
user.set("username", self.email);
user.set("password", self.password);
user.set("email", self.email);

// other fields can be set just like with Parse.Object
//user.set("phone", "415-392-0202");

user.signUp(null, {
  success: function(user) {
    // Hooray! Let them use the app now.
    console.log("registered success");
  },
  error: function(user, error) {
    // Show the error message somewhere and let the user try again.
    alert("Error: " + error.code + " " + error.message);
  }
});


}
/*var user = new Backendless.User();
user.email = $scope.form.email;
user.password = $scope.form.password;

Backendless.UserService.register(user);*/
});


