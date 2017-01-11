var Hank;
(function (Hank) {
    var Chen;
    (function (Chen) {
        var Controllers;
        (function (Controllers) {
            var MemberController = (function () {
                function MemberController(member, memberList, name) {
                    this.member = member;
                    this.memberList = memberList;
                    this.name = name;
                    this.name = "Hank";
                    this.memberList =
                        [
                            { EMPNO: "VR123456" },
                            { EMPNO: "VR123457" },
                            { EMPNO: "VR123458" },
                            { EMPNO: "VR123459" }
                        ];
                }
                MemberController.prototype.Update = function () {
                    this.member.EMPNO = "00012345";
                    console.log('test');
                };
                MemberController.$inject = ['Member'];
                return MemberController;
            }());
            Controllers.MemberController = MemberController;
            angular.module('Hank.Chen.Controllers')
                .controller('MemberController', MemberController);
        })(Controllers = Chen.Controllers || (Chen.Controllers = {}));
    })(Chen = Hank.Chen || (Hank.Chen = {}));
})(Hank || (Hank = {}));
//# sourceMappingURL=member.controller.js.map