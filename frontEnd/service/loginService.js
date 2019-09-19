
app.service("loginServices", function ($http, $location) {

    console.log("---------->  in to loginService.js");

    this.loginServiceUser = function (data, $scope) {

        $http(

            {
                method: 'POST',
                url: 'http://3.15.39.27:4000/login',
                data: data
            }).then(

                function (response) { // respons e will come both times when details match and also when they dont match



                    if (response.data.result === false) {

                       

                            console.log("\n\n\tResponse---->>>>  " + JSON.stringify(response));
                            console.log("\n\nLOGIN FAILED\n\nINCORRECT CREDENTIALS !")

                        
                    }
                    else {


                      
                           
                            console.log("....response received ---->", response)
                            console.log("\n\n\tLOGIN SUCCESSFULL !");


                            localStorage.setItem('email', $scope.email)
                            localStorage.setItem('token',response.data.result.token)
                            localStorage.setItem('name',response.data.result.firstName)
                            localStorage.setItem('id',response.data.result.id)

                           // console.log("\n\n\nEmail set in local storage ! ")

                            
                           
                            $location.path('/allUsers');
                           
                           
                        
                     
                        

                           
                    }
                }).catch(function (error) {

                    $scope.login = function () {
                        alert("    API FAIL ....")
                    }
                    console.log("\n\n\tAPI FAIL... !", error)
                });
               
            }
});