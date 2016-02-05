angular.module('angular2App')
    .controller('Ej8controller', function($scope, $http) {
        $scope.id_Equipo = 1;
        $scope.getJ = function(){
            if($scope.id_Equipo != ""){
                $http.get("api/equipos/"+$scope.id_Equipo+"/jugadores").then(function (response) {
                    $scope.jugadores = response.data;
                });
            }
        };
    });
