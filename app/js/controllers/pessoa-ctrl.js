angular.module("mainApp").controller("PessoaListCtrl",['$scope','PessoaAPI',
					function($scope, PessoaAPI){

	$scope.teste = "Teste";

	/*PessoaAPI.listar().success(function(pessoas){
		$scope.pessoas = pessoas;

	});*/

	$scope.pessoas = [
		{id: 1, nome: "Ronei Macedo Gualberto", dataNascimento: new Date(), sexo:"M"},
		{id: 2, nome: "Gerson Bastista", dataNascimento: new Date(), sexo:"M"},
		{id: 3, nome: "Carlos Eduardo", dataNascimento: new Date(), sexo:"M"},
		{id: 4, nome: "Geison Nascimento", dataNascimento: new Date(), sexo:"M"},
		{id: 5, nome: "Juliane Silva", dataNascimento: new Date(), sexo:"F"},
		{id: 6, nome: "Alessandra Machado", dataNascimento: new Date(), sexo:"M"},
		{id: 7, nome: "Diovane Monteiro", dataNascimento: new Date(), sexo:"M"}

	];

	




	$scope.remover = function(pessoas,pessoa){
		var posicao = pessoas.indexOf(pessoa);
		pessoas.splice(posicao,1);
	};

}]);