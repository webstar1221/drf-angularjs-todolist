app.controller('TodoListCtrl', ['$scope', '$modal', '$log', 'todoitems', 'TodoItem', 'TodoItemConvertDate',
    function ($scope, $modal, $log, todoitems, TodoItem, TodoItemConvertDate) {
        $scope.todoitems = todoitems;

        var openModalWithItem = function (template, item) {
            var modalInstance = $modal.open({
                templateUrl: template,
                resolve: {
                    todoitem: function () {
                        return item;
                    }
                },
                controller: 'TodoItemCtrl'
            });

            return modalInstance;
        };

        $scope.openViewModal = function (item) {
            openModalWithItem('static/js/app/views/item-view.html', item);
        };

        $scope.openEditModal = function (item) {
            var modalInstance = openModalWithItem('static/js/app/views/item-edit.html', angular.copy(item));

            modalInstance.result.then(function (editedItem) {
                editedItem.$update(function (response) {
                    var idx = $scope.todoitems.indexOf(item);
                    $scope.todoitems.splice(idx, 1);
                    TodoItemConvertDate(response);
                    $scope.todoitems.push(response);
                }, function (response) {
                    $log.error('TodoItem update error: ' + response);
                })
            });
        };

        $scope.openAddModal = function () {
            var modalInstance = openModalWithItem('static/js/app/views/item-edit.html', new TodoItem());

            modalInstance.result.then(function (newItem) {
                newItem.$save(function (response) {
                    TodoItemConvertDate(response);
                    $scope.todoitems.push(response);
                }, function (response) {
                    $log.error('TodoItem save error: ' + response);
                });
            });
        };

        $scope.remove = function (item) {
            var idx = $scope.todoitems.indexOf(item);
            item.$remove(function () {
                $scope.todoitems.splice(idx, 1);
            }, function (response) {
                $log.error('TodoItem remove error: ' + response);
            });
        };

        $scope.markAsDone = function (item) {
            var copy = angular.copy(item);
            copy.done = true;
            copy.$update(function () {
                item.done = true;
            }, function (response) {
                $log.error('TodoItem update error: ' + response);
            });
        };
    }]);
