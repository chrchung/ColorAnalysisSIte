app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
        .otherwise('/main');

    $locationProvider.html5Mode(true);

    $stateProvider
        .state('main', {
            url: '/main',
            templateUrl: 'main/main.html',
            controller: 'mainCtrl'
        });

    $stateProvider
        .state('mentions_per_decade', {
            url: '/mentions_per_decade',
            templateUrl: 'mentions_per_decade/mentions_per_decade.html',
            controller: 'mentionsPerDecadeCtrl'
        });
});
