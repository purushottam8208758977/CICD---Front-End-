
app.controller("allUsersController", function ($scope, allUsersServices, SocketService) {

    console.log("\n\n\tAll users controller being hit...");



    $scope.duplicationRemoval = true;


    $scope.name = localStorage.getItem('name')
    $scope.email = localStorage.getItem('email')
    $scope.token = localStorage.getItem('token')
    $scope.id = localStorage.getItem('id')

    let sentToken = $scope.token;

    $scope.messagesArray = []


    $scope.allUsers = function () {


        console.log("\n\n\t-----> All users controller being hit...");

        allUsersServices.allService($scope);
    }
    $scope.allUsers();


    $scope.showChatBox = false
    $scope.showBeforeContent = false

    $scope.getMessage = function (x) {
        console.log(" \n\n\t in get message ----> allUsers controller ", x);

        $scope.showChatBox = true
        $scope.showBeforeContent = true


        localStorage.setItem("receiverId", x._id)
        localStorage.setItem("receiverName", x.firstName)

        $scope.currentReceiver = localStorage.getItem('receiverName') // to set current user name 
        $scope.getAllMessage()
    }




    $scope.getAllMessage = function () {

        //$scope.messagesArray = ''

        allUsersServices.getAllMessage($scope, sentToken);

    }

    $scope.sendMessage = function () {
        console.log("\n\n-----> in send message controller ...");

        console.log("\n\n ----> typed message ", $scope.message);

        if ($scope.message) {    //empty message cant be sent
            var sendMessageObject = {
                'senderId': localStorage.getItem('id'),
                'senderName': $scope.name,
                'receiverId': localStorage.getItem('receiverId'),
                'receiverName': localStorage.getItem('receiverName'),
                'message': $scope.message
            }

            SocketService.emit("sendingMessage", sendMessageObject) // it sends this object to the backend server

        }




        try {

            if ($scope.duplicationRemoval) {
                SocketService.on("messageContent", function (message) {

                    console.log(" New Message in try front end-----> ", message);

                    if (localStorage.getItem('id') == message.senderId || localStorage.getItem('receiverId') == message.receiverId) {
                        if ($scope.messagesArray === undefined) {
                            $scope.messagesArray = message; //assigning message to variable
                        }
                        else {
                            $scope.messagesArray.push(message);
                        }
                    }
                })
                $scope.duplicationRemoval = false;
            }

        }
        catch (err) {
            console.log("err--> ", err)

        }
    }


});