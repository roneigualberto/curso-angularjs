angular.module("mainApp").controller("PessoaFormCtrl",['$scope',function($scope){

	$scope.sexos = [
			{id:'M', descricao:'Masculino'},
			{id:'F', descricao:'Feminino'}
	];

	$scope.estadoCivilList = [
			{id:1, descricao:'Solteiro(a)'},
			{id:2, descricao:'Casado(a)'},
			{id:3, descricao:'Divorciado(a)'},
			{id:4, descricao:'Viuvo(a)'}
	];



}]);