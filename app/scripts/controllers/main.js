'use strict';

/**
 * @ngdoc function
 * @name jeopardyBuzzerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jeopardyBuzzerApp
 */
angular.module('jeopardyBuzzerApp')
  .controller('MainCtrl', function () {
    this.host = false;
    this.hostLogin = function(e) {
      this.host = !this.host;
    };
  });
