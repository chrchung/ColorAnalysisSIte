app.controller('distinctiveHeightsCtrl', function($scope, Restangular, $state) {

    $scope.colors = [];

    Restangular.all('/json/distinctive_heights.json')
        .getList().then(function (serverJson) {
        $scope.colors = serverJson;
    });


    $scope.Math = window.Math;
});
