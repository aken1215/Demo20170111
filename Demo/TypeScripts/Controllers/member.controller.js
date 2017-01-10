var Hank;
(function (Hank) {
    var Chen;
    (function (Chen) {
        var Controllers;
        (function (Controllers) {
            var MemberController = (function () {
                function MemberController(member, name) {
                    this.member = member;
                    this.name = name;
                    this.name = "Hank";
                }
                MemberController.$inject = ['Member'];
                return MemberController;
            }());
            Controllers.MemberController = MemberController;
        })(Controllers = Chen.Controllers || (Chen.Controllers = {}));
    })(Chen = Hank.Chen || (Hank.Chen = {}));
})(Hank || (Hank = {}));
