angular.module('meanpoem', ['ngRoute']).config(config);



function PoemsController(poemDataFactory){
	var vm = this;
	vm.title = "Poems Holly likes";
	console.log(poemDataFactory);
	poemDataFactory.poemsList().then(function(response){
		console.log(response);
		vm.poems = response;
	});
}

