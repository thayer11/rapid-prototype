angular.module('meanpoem').factory('poemDataFactory', poemDataFactory);

function poemDataFactory($http){
	return {
		poemsList: poemsList,
		poemDisplay: poemDisplay
	};

function poemsList() {
	return $http.get('/api/poems?count=10').then(complete).catch(failed);
}

function poemDisplay(id) {
	return $http.get('/api/poems/'+ id).then(complete).catch(failed);
}

function complete(response){
	return response.data;
}

function failed(error){
	console.log(error.statusText);
}

}
