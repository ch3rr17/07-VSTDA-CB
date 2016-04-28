var app = angular.module('myApp', []); 
app.controller('MainController', ['$scope', function($scope){
    
    $scope.todoLists = [];

    $scope.todoAdd = function() {
        $scope.todoLists.push({
            'list': $scope.addItem,
            'done': false,
            'priority': $scope.itemColor
        });
        $scope.addItem = ''
    };

    $scope.predicate = 'list';
    $scope.reverse = true;
    
    $scope.setOrder = function(predicate) {

        $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
        $scope.predicate = predicate;
    };

    $scope.delete = function(index) {
            $scope.todoLists.splice(index,1);
        };



}]);
