
'use strict'
angular.module('angular2App')
    .controller('Ej17controller', function($scope, Jugador, Equipo, entity) {
        $scope.allJugadores = entity;
        $scope.jugadorSel;
        $scope.equipos = Equipo.query();

        $scope.cargarJugador = function(id){
            Jugador.get({id: id},function(result){
                $scope.jugadorSel = result;
            });
        };
        $scope.update = function(){
            Jugador.update($scope.jugadorSel, updateOK);
        };
        var updateOK = function(){
            $scope.allJugadores = Jugador.query();
        }
    })
    .factory("Jugador",function($resource){
        return $resource('api/jugadors/:id', {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    return data;
                }
            },
            'update': {
                method: 'PUT',
                transformRequest: function (data) {
                    return angular.toJson(data);
                }
            }
        });
    });
