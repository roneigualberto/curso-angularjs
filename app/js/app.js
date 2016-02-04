var mainApp = angular.module("mainApp",['ngRoute','ngMessages','ui.bootstrap']);


mainApp.config(['$routeProvider',function($routeProvider){

	$routeProvider
    	.when('/pessoas', {
        	templateUrl: 'view/pessoa-list.html',
        	controller: 'PessoaListCtrl'
      	})
        .when('/pessoa/form', {
          templateUrl: 'view/pessoa-form.html',
          controller: 'PessoaFormCtrl'
        })
      	.when('/pessoa/edit/:pessoaId', {
        	templateUrl: 'view/pessoa-edit.html',
        	controller: 'PessoaListCtrl'
      	})
       	.otherwise({redirectTo: '/pessoas'});


}]);




