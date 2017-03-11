app.controller('distinctivePeriodicitiesCtrl', function($scope, Restangular, $state) {

    $scope.colors = [];

    Restangular.all('/json/distinctive_perio.json')
        .getList().then(function (serverJson) {
        $scope.colors = serverJson;
    });


    $scope.Math = window.Math;
});
