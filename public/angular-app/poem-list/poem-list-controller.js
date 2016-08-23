angular.module('meanpoem', ['ngRoute']).config(config);

function PoemsController(){
	var vm = this;
	vm.title = "Poems Holly likes";
	poemdDataFactory.poemlist().then(function(response){
		vm.poems = response.data;
	});
}

