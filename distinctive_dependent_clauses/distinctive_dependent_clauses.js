app.controller('distinctiveDependentClausesCtrl', function($scope, Restangular, $state) {

    $scope.colors = [];

    Restangular.all('/json/clause_dep.json')
        .getList().then(function (serverJson) {
        $scope.colors = serverJson;
    });


    $scope.Math = window.Math;
});
