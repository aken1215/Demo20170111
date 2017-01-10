module Hank.Chen.Controllers {
    export class MemberController {
        static $inject = ['Member'];
        constructor(
            public member: Hank.ViewModel.HR030,
            public name :string
        ) {
            this.name = "Hank";
        }
    }


    angular.module('Hank.Chen.Controllers')
        .controller('MemberController', MemberController);
}