angular.module('meanpoem').controller('PoemController', PoemController);

fuction PoemController($http, $routeParams){
	var vm = this;
	var id = $routeParams.id;
	$http.get('/api/poem/' + id.then(function(response){
		vm.poem = response.data
	});
}