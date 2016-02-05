'use strict';

angular.module('angular2App').controller('JugadorDialogController',
    ['$scope', '$stateParams', '$uibModalInstance', 'entity', 'Jugador', 'Equipo',
        function($scope, $stateParams, $uibModalInstance, entity, Jugador, Equipo) {

        $scope.jugador = entity;
        $scope.equipos = Equipo.query();
        $scope.load = function(id) {
            Jugador.get({id : id}, function(result) {
                $scope.jugador = result;
            });
        };

        var onSaveSuccess = function (result) {
            $scope.$emit('angular2App:jugadorUpdate', result);
            $uibModalInstance.close(result);
            $scope.isSaving = false;
        };

        var onSaveError = function (result) {
            $scope.isSaving = false;
        };

        $scope.save = function () {
            $scope.isSaving = true;
            if ($scope.jugador.id != null) {
                Jugador.update($scope.jugador, onSaveSuccess, onSaveError);
            } else {
                Jugador.save($scope.jugador, onSaveSuccess, onSaveError);
            }
        };

        $scope.clear = function() {
            $uibModalInstance.dismiss('cancel');
        };
        $scope.datePickerForFechaNacimiento = {};

        $scope.datePickerForFechaNacimiento.status = {
            opened: false
        };

        $scope.datePickerForFechaNacimientoOpen = function($event) {
            $scope.datePickerForFechaNacimiento.status.opened = true;
        };
}]);
