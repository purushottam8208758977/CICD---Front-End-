app.service("registerServices", function ($http, $location) {

    console.log("\n\n\tIn registration service .....");

    this.registerServiceUser = function (data, $scope) {

        //  The $http service is used to send or receive data from 
        //  the remote server using browser's XMLHttpRequest or JSONP.
        $http(

            {
                method: 'POST',
                url: 'http://3.15.39.27:4000/registration',
                data: data
            }).then(

                function (response) {

                    console.log("-------> response " + JSON.stringify(response));


                    if (response.data.result === false) {
                        console.log("\n\n\n\t\t\t\t EMAIL ALREADY REGISTERED ....!\n\n\t\t\t\tTRY WITH A DIFFERENT EMAIL !");


                        $scope.register = function () {

                            alert("\nEMAIL ALREADY REGISTERED .... !\n\nTRY WITH A DIFFERENT EMAIL !")
                        }

                    }
                    else {
                        console.log("\n\n\tRegistration successfully done !");

                        console.log(response);

                        $scope.register = function () {

                            alert("    Registration done Successfully...")
                        }

                        // $location service is used  in AngularJS to read or change the URL in the browser.
                        $location.path('/#/login');

                    }

                }).catch(function (error) {

                    $scope.register = function () {
                        alert("   Registration failed...")
                    }
                    console.log("\n\n\tRegistration failed..", error)
                });
    }
});