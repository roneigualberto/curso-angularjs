angular.module("mainApp").controller("PessoaListCtrl",['$scope','PessoaAPI',
					function($scope, PessoaAPI){

	 $scope.pessoas = [];

	 var listarPessoas = function(){

	 	PessoaAPI.listar().success(function(pessoas){
			$scope.pessoas = pessoas;

		});
	 };

	 listarPessoas();

	
	$scope.selecionarTodos = function(selecionado){
		$scope.pessoas.forEach(function(pessoa){
			pessoa.selecionado = selecionado;
		});
	};

	$scope.existeSelecionado = function(){
		return $scope.pessoas.some(function(pessoa){
			return pessoa.selecionado;
		});
	};

	$scope.removerSelecionados = function(){
	 var pessoas =  $scope.pessoas.filter(function(pessoa){
			return pessoa.selecionado;
		}).map(function(pessoa){
			return pessoa.id;
		});

		PessoaAPI.deletar(pessoas).success(function(){
			listarPessoas();
		});
	};

	$scope.remover = function(pessoa){
		PessoaAPI.deletar(pessoa.id).success(function(){
			listarPessoas();
		});
	};

	

}]);