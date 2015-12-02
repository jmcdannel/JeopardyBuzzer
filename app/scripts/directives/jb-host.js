(function() {
  'use strict';

  angular.module('jeopardyBuzzerApp')
    .directive('jbHost', Directive);

  function Directive() {
    var directive = {
      restrict: 'E',
      templateUrl: 'views/jb-host.html',
      scope: {},
      link: function(scope, el, attr, ctrl) {},
      controller: Controller,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;
  }

  Controller.$inject = ['$firebaseArray'];
  function Controller($firebaseArray) {
    var vm = this;


    function activate() {
      var queueRef = window.firebase.child('queue');
      vm.loading = true;
      vm.debug = false;
      vm.reset = _reset;
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

    activate();
  }

})();
