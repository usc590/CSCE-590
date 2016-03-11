angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})


.controller('TripsCtrl', function($scope, Trips) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.trips = Trips.all();
  

  $scope.remove = function(trip) {
    Trips.remove(trip);
  };
})


.controller('SearchTripsCtrl', function($scope, Trips) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  var self=this;
  $scope.searchtrips = Trips.all();

  $scope.search = function () {
    // body...
    parameter = self.parameter
    console.log(parameter +" keywords");
    $scope.searchtrips = Trips.search(parameter);
  }
  
  


  $scope.remove = function(trip) {
    Trips.remove(trip);
  };
})



.controller('TripDetailCtrl', function($scope, $stateParams, Trips) {
  $scope.trip = Trips.get($stateParams.tripId);
})



.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('AddTripCtrl', function($scope,$state,Trips) {
  var self=this;
  self.fromcity = "";
  self.tocity = "";
  self.date = new Date("11/21/2016");

  $scope.trips = Trips.all();
    console.log($scope.trips.length  +" trips so far ");


  $scope.save=function () {
    // body...
    console.log("save to new page ");
    console.log(self.fromcity+"  "+self.tocity);
    console.log($scope.trips.length);
    //now save the info to the Data Object. 
    console.log(Trips.all().length  +" trips so far ");
    // Trips.addtrip(self.fromcity,self.tocity,self.date);
    var currentUser = Backendless.UserService.getCurrentUser();
    if(currentUser==null){
      console.log(" cannot find user obj");
    }
    var trip = new Trip( {
     user:currentUser,
     fromcity: self.fromcity,
     tocity: self.tocity,
     tripdate:self.date,
  });
 
  var savedTrip = Backendless.Persistence.of( Trip ).save( trip );
  // $scope.trips.push(
  // {
  //   user:currentUser,
  //    fromcity: self.fromcity,
  //    tocity: self.tocity,
  //    tripdate:self.date,
  // }
  //   );
  $scope.trips = Trips.all();


    $state.go("tab.trips");
    // $ionicHistory.goBack();

  };

})


.controller('RegisterCtrl', function($scope,$state,Trips) {
  var self=this;
  self.email = "";
  self.password = "";
  self.name = "";


  $scope.save=function () {
    // body...
    console.log("save to new page ");
    console.log(self.email+"  "+self.name);
    function userRegistered( user )
    {
      Trips.gUser=user;
     alert( "user has been registered:"+user.email);
    }-
     
    function gotError( err ) // see more on error handling
    {
     console.log( "error message - " + err.message );
     console.log( "error code - " + err.statusCode );
    }
     
    var user = new Backendless.User();
    user.email = self.email;
    user.password = self.password;
    user.name=self.name;
    Backendless.UserService.register( 
      user, new Backendless.Async( 
        this.userRegistered, this.gotError ) );

    $state.go("tab.trips");
    // $ionicHistory.goBack();

  };

})



.controller('LoginCtrl', function($scope,$state,Trips) {

 var self=this;
$scope.login = function() {
  console.log("login executed");
  console.log(self.email);
 var loggedUser = Backendless.UserService.login( self.email, self.password );
   console.log( "User has been logged in: " + loggedUser );
 
   var user = Backendless.UserService.getCurrentUser();
  if( user != null )
   {
    // get user's email (i.e. mandatory/predefined property)
    // email = user.getEmail();
     console.log("logedin");
     $state.go("tab.trips");
   }
  else
   {
     console.log( "User hasn't been logged" );
   }
}

});



function Trip(args) {
   args = args || {};
  this.fromcity = args.fromcity || "";
  this.tocity = args.tocity || "";
  this.tripdate = args.tripdate || "";
}

