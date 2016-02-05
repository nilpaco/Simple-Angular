angular.module('angular2App')
    .controller('Ej17controller', function($scope, Equipo) {
        $scope.equipo;
        $scope.save = function (){
            $scope.isSaving = true;
            Equipo.save($scope.equipo, onSaveSuccess, onSaveError);
        };
        var onSaveSuccess = function (result) {
            $scope.isSaving = true;
        };
        var onSaveError = function (result) {
            $scope.isSaving = false;
        };
    })
    .factory("Equipo",function($resource){
        return $resource('api/equipos/:id', {}, {
            'save': {
                method: 'POST',
                transformRequest: function (data) {
                    return angular.toJson(data);
                }
            }
        });
    });
