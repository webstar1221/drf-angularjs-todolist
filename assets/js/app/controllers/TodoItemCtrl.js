app.controller('TodoItemCtrl', ['$scope', '$modalInstance', 'todoitem',
    function ($scope, $modalInstance, todoitem) {
        $scope.modal = {};
        $scope.modal.todoitem = todoitem;

        $scope.close = function () {
            $modalInstance.dismiss('cancel');
        };

        $scope.save = function () {
            $modalInstance.close($scope.modal.todoitem);
        };
    }]);
