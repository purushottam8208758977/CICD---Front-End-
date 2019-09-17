
app.controller("allUsersController", function ($scope, allUsersServices, SocketService) {

    console.log("\n\n\tAll users controller being hit...");

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

    $scope.getMessage = function (x) {
        console.log(" \n\n\t in get message ----> allUsers controller ", x);

 
        localStorage.setItem("receiverId", x._id)
        localStorage.setItem("receiverName", x.firstName)

        $scope.rName = localStorage.getItem('receiverName')
        $scope.getAllMessage()
    }

    $scope.showChatBox=false
    $scope.showBeforeContent=false

    $scope.getAllMessage = function () {

        $scope.messagesArray=''

        $scope.showChatBox=true
        $scope.showBeforeContent=true

       
        allUsersServices.getAllMessage($scope, sentToken);

    }

    $scope.sendMessage = function () {
        console.log("\n\n-----> in send message controller ...");

        console.log("\n\n ----> typed message ", $scope.message);

        

        var sendMessageObject = {
            'senderId': localStorage.getItem('id'),
            'senderName': $scope.name,
            'receiverId': localStorage.getItem('receiverId'),
            'receiverName': localStorage.getItem('receiverName'),
            'message': $scope.message
        }
        
        SocketService.emit("sendingMessage", sendMessageObject) // it sends this object to the backend server
        
        
        try {
            SocketService.on($scope.senderId, function(message) {

                console.log(" New Message-----> ", message);
                
                if (localStorage.getItem('id') == message.senderId || localStorage.getItem('receiverId') == message.receiverId) {
                    if ($scope.messagesArray === undefined) {
                        $scope.messagesArray = message; //assigning message to variable
                    }
                    else {
                        $scope.messagesArray.push(message);
                    }
                }
            })
        }
        catch (err) {
            console.log("err--> ", err)
         
        }
         $scope.messagesArray.push(sendMessageObject) // shows the message in the chat box the moment you click the send button
    }


});