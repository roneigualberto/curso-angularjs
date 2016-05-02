angular.module("mainApp").factory("PessoaAPI",
			['$http','constants',function($http,constants){

	var listar = function(){
		return $http.get(constants.BASE_URL+"/pessoas");
	};

	var deletar = function(ids){
		if (angular.isArray(ids)) {
			return $http.delete(constants.BASE_URL+"/pessoas",{
				headers: {'Content-Type': 'application/json'}, data: ids});
		}
		return $http.delete(constants.BASE_URL+"/pessoas/"+ids);
	};


	return {
		listar: listar,
		deletar: deletar
	};

}]);