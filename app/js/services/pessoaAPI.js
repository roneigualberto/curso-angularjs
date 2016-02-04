angular.module("mainApp").factory("PessoaAPI",
			['$http','constants',function($http,constants){

	var listar = function(){
		return $http.get(constants.BASE_URL+"/pessoas");
	};


	return {
		listar: listar
	};

}]);