module Hank.Chen.Controllers {
    export class MemberController {
        static $inject = ['Member'];

        constructor(
            public member: Hank.ViewModel.HR030,
            public memberList: Hank.ViewModel.HR030[],
            public name :string
        ) {
            this.name = "Hank";

            this.memberList=
            [
                { EMPNO: "VR123456"},
                { EMPNO: "VR123457"},
                { EMPNO: "VR123458"},
                { EMPNO: "VR123459"}
            ];
        }

        Update(): void {
            this.member.EMPNO = "00012345";
            console.log('test');
        }
    }


    angular.module('Hank.Chen.Controllers')
        .controller('MemberController', MemberController);
}