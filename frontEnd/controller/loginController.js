app.controller('loginController', function($scope,loginServices)  {

    console.log("\n\n\t----->Login controller being hit...");

    $scope.login = function () {
        console.log("$scope.email-----",$scope.email);
        
        let loginObject =
        {
            'email': $scope.email,
            'password': $scope.password
        }



     

        console.log("\n\n\tLogin details in login controller --> ", loginObject);

        loginServices.loginServiceUser(loginObject, $scope);
    }
});