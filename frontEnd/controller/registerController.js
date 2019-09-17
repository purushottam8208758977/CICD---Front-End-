app.controller("registerController", function($scope, registerServices)  {

    console.log("\n\n\tRegister controller being hit...");

    $scope.register = function() {
        let userObject =
        {
            'firstName': $scope.firstName,
            'lastName': $scope.lastName,
            'email': $scope.email,
            'password': $scope.password
        }

        console.log("\n\n\tRegistration details in register controller --> ", userObject);

        registerServices.registerServiceUser(userObject,$scope);
    }
});