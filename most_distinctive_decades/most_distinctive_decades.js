app.controller('mostDistinctiveDecadesCtrl', function($scope, Restangular, $state) {

    $scope.colors = [];

    Restangular.all('/json/distinctive_decades.json')
        .getList().then(function (serverJson) {
        $scope.colors = serverJson;
    });


    $scope.Math = window.Math;
});
