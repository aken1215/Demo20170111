var Hank;
(function (Hank) {
    var Chen;
    (function (Chen) {
        var Services;
        (function (Services) {
            var MemberService = (function () {
                function MemberService($http, config) {
                    this.$http = $http;
                    this.config = config;
                }
                MemberService.prototype.GetMember = function () {
                    var url = this.config.SampleApiRoot + "/sample/";
                    return this.$http.get(url);
                };
                MemberService.$inject = ['$http', 'Config'];
                return MemberService;
            }());
            Services.MemberService = MemberService;
            angular.module('Hank.Chen.Services')
                .service('MemberService', MemberService);
        })(Services = Chen.Services || (Chen.Services = {}));
    })(Chen = Hank.Chen || (Hank.Chen = {}));
})(Hank || (Hank = {}));
