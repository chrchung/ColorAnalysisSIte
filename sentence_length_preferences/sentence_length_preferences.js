app.controller('sentenceLengthPreferencesCtrl', function($scope, Restangular, $state) {

    $scope.colors = [];

    Restangular.all('/json/sentences.json')
        .getList().then(function (serverJson) {
        $scope.colors = serverJson;
    });


    $scope.Math = window.Math;
});
