module Hank.Chen.Configs {
    export class IConfig {
        SampleApiRoot: string
    }
}

module Hank.Chen.Configs {
    export class ConfigProvider implements ng.IServiceProvider {
        config: IConfig = {
            SampleApiRoot: 'http://localhost:60381/api/',
        }

        $get() {
            return this.config;
        }
    }

    angular.module('Hank.Chen.Configs')
        .provider('Config', ConfigProvider)
}