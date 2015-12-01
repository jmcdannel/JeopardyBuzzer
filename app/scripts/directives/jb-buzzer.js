(function() {
  'use strict';

  angular.module('jeopardyBuzzerApp')
    .directive('jbBuzzer', Directive);

  function Directive() {
    var directive = {
          restrict: 'E',
          templateUrl: '/scripts/templates/jb-buzzer.html',
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

  function Controller() {
    var vm = this;

    vm.buzz = _buzz;

    activate();

    function activate() {
      vm.team = {
        name: _genTemName()
      };
      console.log(vm);
    }

    function _genTemName() {
      var min = 1, max = 100;
      var teamNum = Math.floor(Math.random() * (max - min) + min);
      return 'Team ' + teamNum;
    }

    function _buzz() {
      console.log('buzz clicked', arguments);
      var queueRef = window.firebase.child('queue');
      var buzzerRef = queueRef.push().set({
        team: vm.team.name
      });
    }
  }

})();
