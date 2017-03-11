app.controller('distinctivePeriodicitiesCtrl', function($scope, Restangular, $state) {

    $scope.colors = [];

    Restangular.all('/json/distinctive_periods.json')
        .getList().then(function (serverJson) {
        $scope.colors = serverJson;
    });


    $scope.Math = window.Math;
});
