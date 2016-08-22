angular.module('meanpoem',['ngRoute'])
.config(config)
.controller('PoemsController', PoemsController);

function config($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl: 'angular-app/poem-list/poems.html',
		controller: PoemsController,
		controllerAs: 'vm'
	});
}

function PoemsController(){
	var vm = this;
	vs.title = "Poems Holly likes";
}