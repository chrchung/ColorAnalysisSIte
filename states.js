app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
        .otherwise('/');

    $locationProvider.html5Mode(true);

    $stateProvider
        .state('main', {
            url: '/',
            templateUrl: 'main/main.html',
            controller: 'mainCtrl'
        });

    $stateProvider
        .state('mentions_per_decade', {
            url: '/mentions_per_decade',
            templateUrl: 'mentions_per_decade/mentions_per_decade.html',
            controller: 'mentionsPerDecadeCtrl'
        });

    $stateProvider
        .state('sentence_length_preferences', {
            url: '/sentence_length_preferences',
            templateUrl: 'sentence_length_preferences/sentence_length_preferences.html',
            controller: 'sentenceLengthPreferencesCtrl'
        });

    $stateProvider
        .state('number_of_clauses_preferences', {
            url: '/number_of_clauses_preferences',
            templateUrl: 'number_of_clauses_preferences/number_of_clauses_preferences.html',
            controller: 'numberOfClausesPreferencesCtrl'
        });

    $stateProvider
        .state('novel_visualization', {
            url: '/novel_visualization',
            templateUrl: 'novel_visualization/novel_visualization.html',
            controller: 'novelVisualizationCtrl'
        });

    $stateProvider
        .state('most_distinctive_decades', {
            url: '/most_distinctive_decades',
            templateUrl: 'most_distinctive_decades/most_distinctive_decades.html',
            controller: 'mostDistinctiveDecadesCtrl'
        });


    $stateProvider
        .state('dramatic_changes_between_decades', {
            url: '/dramatic_changes_between_decades',
            templateUrl: 'dramatic_changes_between_decades/dramatic_changes_between_decades.html',
            controller: 'dramaticChangesBetweenDecadesCtrl'
        });

    $stateProvider
        .state('distinctive_heights', {
            url: '/distinctive_heights',
            templateUrl: 'distinctive_periodicities/distinctive_periodicities.html',
            controller: 'distinctivePeriodicitiesCtrl'
        });

    $stateProvider
        .state('distinctive_periodicities', {
            url: '/distinctive_periodicities',
            templateUrl: 'distinctive_heights/distinctive_heights.html',
            controller: 'distinctiveHeightsCtrl'
        });

});
