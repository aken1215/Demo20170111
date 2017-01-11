var Hank;
(function (Hank) {
    var Chen;
    (function (Chen) {
        var Configs;
        (function (Configs) {
            var IConfig = (function () {
                function IConfig() {
                }
                return IConfig;
            }());
            Configs.IConfig = IConfig;
        })(Configs = Chen.Configs || (Chen.Configs = {}));
    })(Chen = Hank.Chen || (Hank.Chen = {}));
})(Hank || (Hank = {}));
var Hank;
(function (Hank) {
    var Chen;
    (function (Chen) {
        var Configs;
        (function (Configs) {
            var ConfigProvider = (function () {
                function ConfigProvider() {
                    this.config = {
                        SampleApiRoot: 'http://localhost:60381/api/',
                    };
                }
                ConfigProvider.prototype.$get = function () {
                    return this.config;
                };
                return ConfigProvider;
            }());
            Configs.ConfigProvider = ConfigProvider;
            angular.module('Hank.Chen.Configs')
                .provider('Config', ConfigProvider);
        })(Configs = Chen.Configs || (Chen.Configs = {}));
    })(Chen = Hank.Chen || (Hank.Chen = {}));
})(Hank || (Hank = {}));
