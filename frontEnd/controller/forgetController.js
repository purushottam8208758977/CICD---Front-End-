

app.controller("forgetPasswordController",function($scope, forgetPasswordServices) {
    
    console.log("\n\n\tForget password controller being hit  ...");
    
    $scope.forgetPassword =  function () {
    let forgetObject =
    {
    'email': $scope.email
    }
    
    console.log("\n\n\tForget password details in register controller --> ", forgetObject);
    
    forgetPasswordServices.forgetPasswordServiceUser(forgetObject,$scope);
    
    }
    });