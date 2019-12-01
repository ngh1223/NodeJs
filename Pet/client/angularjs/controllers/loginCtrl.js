myapp
    .controller('loginCtrl', ['$scope', '$http', '$window', function ($scope, $http, $window) {
        $scope.login = function () {
            if ($scope.loginUid === undefined) {
                $scope.loginIdCheckMessage = 'Please enter ID';
            } else if ($scope.loginUpw === undefined) {
                $scope.loginPwCheckMessage = 'Please enter password';
            } else {
                $http({
                    method: 'POST',
                    url: '/member/login',
                    data: $.param({
                        uId: $scope.loginUid,
                        uPw: $scope.loginUpw
                    }),
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                    }
                }).then(function (response) {
                    console.log(response.data.success);
                    if (response.data.success) {
                        $window.alert('Login Success');
                        console.log(response.data.session);
                        $window.location.href = '/';
                    } else {
                        $window.alert('Login Fail');
                    }

                })
            }
        }

        
           
    }]);