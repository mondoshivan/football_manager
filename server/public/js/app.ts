
import * as $ from 'jquery';
import 'jqueryui';
import * as angular from 'angular';
import 'angularRoute';

import { PlayerFactory } from "./app/model/playerFactory";
import { Initialize } from "./app/initialize";

export function start() {

    new Initialize();

    angular.element(function() {
        angular.module('myApp', ["ngRoute"])
            .config(function($routeProvider, $locationProvider) {
                $routeProvider
                    .when("/team", {
                        templateUrl: "team",
                        controller: 'teamController'
                    });

                $locationProvider.html5Mode(true);
            })
            .controller("teamController", function ($scope) {
                $scope.players = [
                    PlayerFactory.createPlayer(),
                    PlayerFactory.createPlayer(),
                ];

                $scope.rowLimit = 3;
            });

        angular.element(function() {
            angular.bootstrap(document, ['myApp']);
        });
    });


}