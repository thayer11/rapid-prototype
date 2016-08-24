angular.module('meanpoem', ['ngRoute']).config(config);

function config($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'angular-app/poem-list/poems.html',
      controller: PoemsController,
      controllerAs: 'vms'
    })
	.when('/poem/:id',{
		templateUrl: 'angular-app/poem-display/poem.html',
		controller: PoemController,
		controllerAs: 'vm'
	}); 
   }
    

