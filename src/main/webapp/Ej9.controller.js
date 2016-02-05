angular.module('angular2App')
    .controller('Ej9controller', function($scope, $http) {
        $http.get("/api/jugadors").then(function (response) {
            $scope.jugadores = response.data;
        });
        $scope.orderByMe = function(jugadores) {
            $scope.myOrderBy = jugadores;
        }

    });
