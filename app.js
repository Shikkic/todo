angular.module('ToDo',['firebase'])
.controller('todoController',['$scope', '$firebase',
function($scope, $firebase){
	var ref = new Firebase("https://todolist2.firebaseio.com/");
	var sync = $firebase(ref);
	$scope.data = sync.$asObject();
	var syncObject = sync.$asObject();
	syncObject.$bindTo($scope, "data");
	
	$scope.addTodo = function(){
		if (!$scope.data.todos) {
			$scope.data.todos = [];
		}
		$scope.data.todos.push({'title':$scope.newTodo,'done':false})
		$scope.newTodo = ''
	}
	$scope.clearCompleted = function(){
		if (!$scope.data.todos) {
			$scope.data.todos = [];
		}
		$scope.data.todos = $scope.data.todos.filter(function(item){
			return !item.done
		})
	}
}]);