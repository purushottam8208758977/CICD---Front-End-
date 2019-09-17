

let app = angular.module("app", ['ui.router', 'btford.socket-io']);

app.config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {

    console.log("\n\n\tin: app.js ...");


    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'templates/login.html',
            controller: 'loginController'
        })
        .state('register', {
            url: '/registration',
            templateUrl: 'templates/register.html',
            controller: 'registerController'

        })
        .state('forgetPassword', {
            url: '/forgetPassword',
            templateUrl: 'templates/forgetPassword.html',
            controller: 'forgetPasswordController'
        })


        .state('resetPassword', {
            url: '/resetPassword/:token',
            templateUrl: 'templates/resetPassword.html',
            controller: 'resetPasswordController'
        })

        .state('allUsers', {
            url: '/allUsers',
            templateUrl: 'templates/allUsers.html',
            controller: 'allUsersController'
        })


    $urlRouterProvider.otherwise('/login');
}])


app.service('SocketService', ['socketFactory', function SocketService(socketFactory) { 
    return socketFactory({
        ioSocket: io.connect('http://localhost:4000')  // ioSocket is a built in keyword used to connect to the localhost
    }); 
}]);





