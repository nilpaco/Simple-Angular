'use strict';

angular.module('angular2App')
    .config(function ($stateProvider) {
        $stateProvider
            .state('home', {
                parent: 'site',
                url: '/',
                data: {
                    authorities: []
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/main/main.html',
                        controller: 'MainController'
                    }
                },
                resolve: {

                }
            })
        .state('Ej7', {
            parent: 'site',
            url: '/Ej7',
            data: {
                pageTitle: 'Ej7'
            },
            views: {
                'content@': {
                    templateUrl: 'Ej7.html',
                    controller: 'jugadoresCtrl'
                }
            },
            resolve: {
            }
        })
            .state('Ej8', {
            parent: 'site',
            url: '/Ej8',
            data: {
                pageTitle: 'Ej8'
            },
            views: {
                'content@': {
                    templateUrl: 'Ej8.html',
                    controller: 'Ej8controller'
                }
            },
            resolve: {
            }
        })
            .state('Ej9', {
            parent: 'site',
            url: '/Ej9',
            data: {
                pageTitle: 'Ej9 & 10 & 11 & 13 & 14'
            },
            views: {
                'content@': {
                    templateUrl: 'Ej9.html',
                    controller: 'Ej9controller'
                }
            },
            resolve: {
            }
        })
            .state('Ej12', {
            parent: 'site',
            url: '/Ej12',
            data: {
                pageTitle: 'Ej12'
            },
            views: {
                'content@': {
                    templateUrl: 'Ej12.html',
                    controller: 'Ej12controller'
                }
            },
            resolve: {
            }
        })
            .state('Ej15', {
                parent: 'site',
                url: '/Ej15',
                data: {
                    pageTitle: 'Ej15'
                },
                views: {
                    'content@': {
                        templateUrl: 'Ej15.html',
                        controller: 'Ej15controller'
                    }
                },
                resolve: {
                }
            })
            .state('Ej16', {
                parent: 'site',
                url: '/Ej16',
                data: {
                    pageTitle: 'Ej16'
                },
                views: {
                    'content@': {
                        templateUrl: 'Ej16.html',
                        controller: 'Ej16controller'
                    }
                },
                resolve: {
                }
            })
            .state('Ej17', {
                parent: 'site',
                url: '/Ej17',
                data: {
                    pageTitle: 'Ej17'
                },
                views: {
                    'content@': {
                        templateUrl: 'Ej17.html',
                        controller: 'Ej17controller'
                    }
                },
                resolve: {
                }
            });
    });
