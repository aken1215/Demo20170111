function GetMemberData($q: ng.IQService,
    MemberService: Hank.Chen.Services.MemberService) {
    var deferred = $q.defer();

    MemberService.GetMember()
        .success((data) => {
            deferred.resolve(data);
        });

    return deferred.promise;
}

GetMemberData.$inject = ['$q', 'MemberService'];


function MemberControllerRoute($stateProvider: angular.ui.IStateProvider) {
    $stateProvider
        .state('member',
        {
            url: '/member',
            templateUrl: 'TypeScripts/Controllers/memberLogin/member.html',
            controller: 'MemberController',
            controllerAs: 'MemberCtrl',
            resolve: {
                Member: GetMemberData
            }
        })
}

MemberControllerRoute.$inject = ['$stateProvider'];

angular.module('Hank.Chen.Controllers')
    .config(MemberControllerRoute);