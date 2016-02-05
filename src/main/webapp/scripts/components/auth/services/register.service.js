'use strict';

angular.module('angular2App')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


