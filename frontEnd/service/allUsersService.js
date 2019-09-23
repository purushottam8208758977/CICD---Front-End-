
app.service("allUsersServices", function ($http, $location) {

    console.log("---------->  in to all users service ");

    var token = localStorage.getItem('token')

    this.allService = function ($scope) {
        //  console.log(" token", token);

        $http(

            {
                method: 'GET',
                url: 'http://3.17.58.103:4000/allUsers',
                // data: data,
                headers: {
                    token: token
                }
            }).then(

                function (response) { // response will come both times when details match and also when they dont match
                    if (response) {

                        console.log(" response ", response.data.result);

                        $scope.allUsers = response.data.result; // array is rceived as response

                        console.log("\n\n\t\tALL USERS LOADED !")

                        $scope.currentUser = localStorage.getItem('name')


                        $scope.login = function () {


                            console.log("\n\n\tResponse doing stirngify ---->>>>  " + JSON.stringify(response));

                            $location.path('/allUsers');
                        }
                    }
                }).catch(function (error) {

                    $scope.login = function () {
                        alert("    API FAIL ....")
                    }
                    console.log("\n\n\tAPI FAIL... !", error)
                });
    }

    this.getAllMessage = function ($scope) {

        var array = []

        $http(   //ajax

            {
                method: 'GET',
                url: 'http://3.17.58.103:4000/receiveMessage',
                // data: data,
                headers: {
                    token: token
                }
            }).then(

                function (response) { // response will come both times when details match and also when they dont match



                    if (response) {

                        console.log(" ----->response ", response);

                        for (var i = 0; i < response.data.result.length; i++) {

                          //  console.log("---->in for loop  .....");

                            var messageDetails = response.data.result[i]
                            //console.log("\n\neach item ------>", messageDetails);

                            //console.log("local storage id ", localStorage.getItem('id'));

                            //console.log("sender id ", messageDetails.receiverId);

                            $scope.senderRightId=localStorage.getItem('id')

                            $scope.currentReceiver=localStorage.getItem('receiverName') // to set current user name 

                            if (((localStorage.getItem('id') === messageDetails.receiverId) &&

                                (localStorage.getItem('receiverId') === messageDetails.senderId)) ||

                                ((localStorage.getItem('id') === messageDetails.senderId) &&

                                    (localStorage.getItem('receiverId') === messageDetails.receiverId))) {
                               // console.log("in if ")

                                array.push(messageDetails)

    
                                console.log("\n\n\t\tMESSAGES LOADED SUCCESFULLY !")
                            }
                            $scope.messagesArray = array;
                           
                        }








                        $scope.login = function () {


                            console.log("\n\n\tResponse doing srngify ---->>>>  " + JSON.stringify(response));


                        }


                    }
                }).catch(function (error) {

                    $scope.login = function () {
                        alert("    API FAIL ....")
                    }
                    console.log("\n\n\tAPI FAIL... !", error)
                });

    }

    


});