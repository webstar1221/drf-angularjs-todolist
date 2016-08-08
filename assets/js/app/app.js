var app = angular.module('todolist',
    ['todolist.services', 'ui.bootstrap', 'ngCookies']);


app.run(['$http', '$cookies', function ($http, $cookies) {
    $http.defaults.headers.common['X-CSRFToken'] = $cookies['csrftoken'];
}]);

app.config(['$httpProvider', '$routeProvider', function ($httpProvider, $routeProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

    $routeProvider.
        when('/', {
            controller: 'TodoListCtrl',
            resolve: {
                todoitems: function (MultiTodoItemLoader) {
                    return MultiTodoItemLoader();
                }
            },
            templateUrl: 'static/js/app/views/list.html'
        }).otherwise({redirectTo: '/'});
}]);
