module Hank.Chen.Services {
    export class MemberService {
        static $inject = ['$http', 'Config']

        constructor(
            private $http: ng.IHttpService,
            private config: Configs.IConfig

        ) {
        }

        GetMember(): ng.IHttpPromise<ViewModel.HR030> {
            var url = `${this.config.SampleApiRoot}/sample/`;
            return this.$http.get<ViewModel.HR030>(url);
        }
    }

    angular.module('Hank.Chen.Services')
        .service('MemberService', MemberService);
}