'use strict';

var firebase = new Firebase('https://jeopardybuzzer.firebaseio.com/');

/**
 * @ngdoc overview
 * @name jeopardyBuzzerApp
 * @description
 * # jeopardyBuzzerApp
 *
 * Main module of the application.
 */
angular
  .module('jeopardyBuzzerApp', [
    'ngAnimate',
    'firebase',
     'ngAudio'
  ]);
