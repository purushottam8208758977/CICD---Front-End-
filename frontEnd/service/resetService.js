app.service("resetPasswordServices", function ($http, $location) {

    this.resetPasswordServiceUser = function (data, $scope) {

       // console.log("\n\nHeaders in reset service ----> ",headers.token);

        $http(

            {
                method: 'POST',
                url: 'http://3.17.58.103:4000/resetPassword/:token',
                data: data,
               
            }).then(

                function (response) {


                    console.log("\n\n\tResetPassword successfully done !");

                    console.log(response);

                    $scope.resetPassword = function () {

                        alert("     Reset Password done Successfully... !")
                    }

                    $location.path('/#/login');

                }).catch(function (error) {

                    // $scope.resetPassword = function () {
                    //     alert("     ResetPassword failed...")
                    // }
                    console.log("\n\n\tResetPassword failed... !", error)
                });
    }
});