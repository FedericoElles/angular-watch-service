//do not pullute global namespace
(function(window, angular, undefined) {'use strict';


 /**
 * @desc
 * This is a replacement for the $rootScope.$watch function to know which service
 * is accessing the $scopeScope
 * @ngInject
 */
function watchService ($rootScope) {
  var watchService = {
    info:false
  };

  watchService.watch = function(watchFunc, onChangeFunc, deepWatch){
    if (watchService.info) {
      console.info('watchService> watch "' +
                   watchFunc.prototype.constructor.name +
                   '" registered for callback "' +
                   onChangeFunc.prototype.constructor.name +
                  '"');
    }
    $rootScope.$watch(watchFunc, onChangeFunc, deepWatch);
  };


  watchService.on = function(event, callbackFunc){
    if (watchService.info) {    
     console.info('watchService> on "' +
                   event +
                   '" event registered for callback "' +
                   callbackFunc.prototype.constructor.name +
                  '"');
    }    
    $rootScope.$on(event, callbackFunc);
  };

  return watchService;
}

/**
 * module definition
 */
angular
  .module('angularWatchService', [])
  .factory('watchService', watchService);

})(window, window.angular);   
