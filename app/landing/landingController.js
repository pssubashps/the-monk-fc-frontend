myapp.controller('landingController', function ($scope, $location, playersFactory) {
  $scope.players = [];
  $scope.totalMatchCount = 0;
  function getPlayersPointDetails() {

    playersFactory.getPlayerPoints().then(function (response) {
      $scope.totalMatchCount = response.data.total_match.totalMatchCount;
      $scope.players = response.data.player_points;
    
    });
  }
  function init() {
    getPlayersPointDetails();
  }
  init();
});
