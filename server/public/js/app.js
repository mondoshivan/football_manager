define(["require", "exports", "angular", "./app/model/playerFactory", "./app/initialize", "jqueryui", "angularRoute"], function (require, exports, angular, playerFactory_1, initialize_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function start() {
        new initialize_1.Initialize();
        angular.element(function () {
            angular.module('myApp', ["ngRoute"])
                .config(function ($routeProvider, $locationProvider) {
                $routeProvider
                    .when("/team", {
                    templateUrl: "team",
                    controller: 'teamController'
                });
                $locationProvider.html5Mode(true);
            })
                .controller("teamController", function ($scope) {
                $scope.players = [
                    playerFactory_1.PlayerFactory.createPlayer(),
                    playerFactory_1.PlayerFactory.createPlayer(),
                ];
                $scope.rowLimit = 3;
            });
            angular.element(function () {
                angular.bootstrap(document, ['myApp']);
            });
        });
    }
    exports.start = start;
});
