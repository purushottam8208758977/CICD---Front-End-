app.controller("resetPasswordController", function ($scope,$stateParams, resetPasswordServices) {

    console.log("\n\n\tReset password's controller being hit...");

  //  console.log("\n\n\\Token found ----->",$stateParams.token);
    
    $scope.resetPassword = function () {

        let resetObject =
        {
            'password': $scope.password,
            'token':$stateParams.token
        }

        console.log("\n\n\tReset Password details in reset password controller --> ", resetObject);

        resetPasswordServices.resetPasswordServiceUser(resetObject, $scope);
    }
});