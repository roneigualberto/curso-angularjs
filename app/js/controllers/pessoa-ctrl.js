angular.module("mainApp").controller("PessoaListCtrl",['$scope','PessoaAPI',
					function($scope, PessoaAPI){

	$scope.teste = "Teste";

	PessoaAPI.listar().success(function(pessoas){
		$scope.pessoas = pessoas;

	});

	/*$scope.pessoas = [
		{id: 1, nome: "Ronei Macedo Gualberto", dataNascimento: new Date(), sexo:"M"},
		{id: 2, nome: "Geison Nascimento", dataNascimento: new Date(), sexo:"M"},
		{id: 3, nome: "Carlos Eduardo", dataNascimento: new Date(), sexo:"M"},
		{id: 4, nome: "Ronei Macedo Gualberto", dataNascimento: new Date(), sexo:"M"},
		{id: 5, nome: "Ronei Macedo Gualberto", dataNascimento: new Date(), sexo:"M"},
		{id: 6, nome: "Ronei Macedo Gualberto", dataNascimento: new Date(), sexo:"M"},
		{id: 7, nome: "Ronei Macedo Gualberto", dataNascimento: new Date(), sexo:"M"}

	];*/

}]);