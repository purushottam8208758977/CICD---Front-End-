app.service("forgetPasswordServices", function ($http, $location) {

    this.forgetPasswordServiceUser = function (data, $scope) {

        $http(

            {
                method: 'POST',
                url: 'http://3.17.58.103:4000/forgetPassword',
                data: data
            }).then(

                function (response) {

                    if (response.data.result === false) {

                        console.log("\n\n\t\tENTERED EMAIL NOT PRESNT IN DATABASE \n\nPLEASE ENTER A VALID EMAIL")

                        $scope.forgetPassword = function () {
                            alert("ENTERED EMAIL NOT PRESENT IN DATABASE \n\nPLEASE ENTER A VALID EMAIL")
                        }

                    }
                    else {
                        console.log("\n\n\tForgetPassword successfully done !\nLink is being sent to your mail \n");

                        console.log(response);

                        $scope.forgetPassword = function () {

                            alert("ForgetPassword successfully done !\nLink is being sent to your mail \n")
                        }

                        $location.path('/#/forgetPassword');
                    }


                }).catch(function (error) {

                    $scope.forgetPassword = function () {
                        alert("     ForgetPassword failed...")
                    }
                    console.log("\n\n\tForgetPassword failed... !", error)
                });
    }
});