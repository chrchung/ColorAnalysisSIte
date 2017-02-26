app.controller('numberOfClausesPreferencesCtrl', function($scope, Restangular, $state) {

    $scope.colors = [];

    Restangular.all('/json/clause.json')
        .getList().then(function (serverJson) {
        $scope.colors = serverJson;
    });


    $scope.Math = window.Math;
});
