var services = angular.module('todolist.services', ['ngResource']);

services.factory('TodoItem', ['$resource',
    function ($resource) {
        return $resource('/api/todoitems/:itemId',
            {itemId: '@id'},
            {update: {method: 'PUT'}});
    }]);

services.factory('MultiTodoItemLoader', ['$q', '$log', 'TodoItem', 'TodoItemConvertDate',
    function ($q, $log, TodoItem, TodoItemConvertDate) {
        return function () {
            var delay = $q.defer();
            TodoItem.query(function (todoitems) {
                delay.resolve(todoitems);
                angular.forEach(todoitems, function (todoitem) {
                    TodoItemConvertDate(todoitem);
                });
            }, function () {
                delay.reject('Unable to fetch todo items');
                $log.error('Unable to fetch todo items');
            });
            return delay.promise;
        };
    }]);

services.factory('TodoItemConvertDate', [
    function () {
        return function (todoitem) {
            todoitem.start_date = new Date(Date.parse(todoitem.start_date));
            todoitem.due_date = new Date(Date.parse(todoitem.due_date));
        };
    }]);

