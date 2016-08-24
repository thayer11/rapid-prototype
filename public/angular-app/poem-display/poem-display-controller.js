angular.module('meanpoem').controller('PoemController', PoemController);
console.log("this is also working")
function PoemController($routeParams, poemDataFactory){
	var vm = this;
	var id = $routeParams.id;
	poemDataFactory.poemDisplay(id).then(function(response){
		console.log(response);
		vm.poem = response
	});
}