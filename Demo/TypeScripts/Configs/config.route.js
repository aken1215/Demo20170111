var Hank;
(function (Hank) {
    var Chen;
    (function (Chen) {
        var Configs;
        (function (Configs) {
            angular.module('Hank.Chen.Configs')
                .config([
                '$stateProvider',
                '$urlRouterProvider',
                '$locationProvider',
                function ($stateProvider, $urlRouteProvider, $locationProvider) {
                    $urlRouteProvider.otherwise("member");
                }
            ]);
        })(Configs = Chen.Configs || (Chen.Configs = {}));
    })(Chen = Hank.Chen || (Hank.Chen = {}));
})(Hank || (Hank = {}));
