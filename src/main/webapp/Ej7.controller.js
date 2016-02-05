angular.module('angular2App')
.controller('jugadoresCtrl', function($scope, $http) {
    $http.get("/api/jugadors").then(function (response) {
        $scope.jugadores = response.data;
    });
});
