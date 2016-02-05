angular.module('angular2App')
    .controller('Ej12controller', function($scope, $http) {
        $http.get("/api/jugadors").then(function (response) {
            $scope.jugadores = response.data;
        });
    });
