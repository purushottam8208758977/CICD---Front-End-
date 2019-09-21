app.controller("registerController", function ($scope, registerServices) {

    console.log("\n\n\tRegister controller being hit...");

    let standard = /^[a-zA-Z]+$/;

    let emailStandard= /^([A-Za-z0-9_\-.])+@([gmail])+\.([A-Za-z]{2,4})$/;

    $scope.firstNameValidator = function (firstName) {
        if (standard.test(firstName)) {
            $scope.firstNameValidation = false;
            $scope.forRegisterationApiCall = true;
        }
        else {
            $scope.firstNameValidation = true;
            $scope.forRegisterationApiCall = false;
        }
    }

    $scope.lastNameValidator = function (lastName) {
        if (standard.test(lastName)) {
            $scope.lastNameValidation = false;
            $scope.forRegisterationApiCall = true;
        }
        else {
            $scope.lastNameValidation = true;
            $scope.forRegisterationApiCall = false;
        }
    }

    $scope.emailValidator = function (email) {
        if (emailStandard.test(email)) {
            $scope.emailValidation = false;
            $scope.forRegisterationApiCall = true;
        }
        else {
            $scope.emailValidation = true;
            $scope.forRegisterationApiCall = false;
        }
    }


    $scope.register = function () {

        if (forRegisterationApiCall) {
            let userObject =
            {
                'firstName': $scope.firstName,
                'lastName': $scope.lastName,
                'email': $scope.email,
                'password': $scope.password
            }

            console.log("\n\n\tRegistration details in register controller --> ", userObject);

            registerServices.registerServiceUser(userObject, $scope);
        }

    }
});
