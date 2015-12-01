(function() {
  'use strict';

  angular.module('jeopardyBuzzerApp')
    .directive('jbHost', Directive);

  function Directive() {
    var directive = {
          restrict: 'E',
          templateUrl: '/scripts/templates/jb-host.html',
          scope: {
          },
          link: linkFunc,
          controller: Controller,
          controllerAs: 'vm',
          bindToController: true
      };

      return directive;

      function linkFunc(scope, el, attr, ctrl) {

      }
  }
  Controller.$inject = ['$firebaseArray'];
  function Controller($firebaseArray) {
    var vm = this;

    var queueRef = window.firebase.child('queue');

    vm.reset = _reset;

    activate();

    function activate() {
      vm.loading = true;
      vm.debug = false;
      vm.buzzes = $firebaseArray(queueRef);
      vm.buzzes.$loaded().then(function() {
        vm.loading = false;
      });
    }

    function _reset() {
      vm.buzzes.forEach(function(buzz) {
        vm.buzzes.$remove(buzz);
      });
    }
  }

})();
