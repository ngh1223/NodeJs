myapp
    .controller('mainCtrl', ['$scope', '$http', '$window', function ($scope, $http, $window) {

        $http({
            method: 'GET',
            url: '/member/getSession',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        }).then(function (response) {
            if (response.data.session.uIdx != '' && response.data.session.uIdx !== undefined) {
                $scope.LoginBtn = 'none';
                $scope.LogoutBtn = 'list-item';
                $scope.SignUpBtn = 'none';
                $scope.MypageBtn = 'list-item';

            } else {
                $scope.LoginBtn = 'list-item';
                $scope.LogoutBtn = 'none';
                $scope.SignUpBtn = 'list-item';
                $scope.MypageBtn = 'none';
            }

        })

        $scope.signupform = 'none';
        $scope.loginform = 'none';
        $scope.adoptlist = 'none';
        $scope.mypage = 'none';

        $scope.showSignUpForm = function () {
            $scope.signupform = 'block';
            $scope.loginform = 'none';
            $scope.adoptlist = 'none';
            $scope.mypage = 'none';
        }
        $scope.showLoginForm = function () {
            $scope.signupform = 'none';
            $scope.loginform = 'block';
            $scope.adoptlist = 'none';
            $scope.mypage = 'none';
        }
        $scope.showAdoptList = function () {
            $scope.signupform = 'none';
            $scope.loginform = 'none';
            $scope.adoptlist = 'block';
            $scope.mypage = 'none';
        }
        $scope.showMypage = function () {
            $scope.signupform = 'none';
            $scope.loginform = 'none';
            $scope.adoptlist = 'none';
            $scope.mypage = 'block';
        }

        $scope.logout = function () {
            $http({
                method: 'GET',
                url: '/member/getSession',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                }
            }).then(function (response) {
                $scope.session = response.data.session;
                $http({
                    method: 'POST',
                    url: '/member/logout',
                    data: $.param({
                        uIdx: $scope.session.uIdx
                    }),
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                    }
                }).then(function (response) {
                    console.log(response.data.success);
                    if (response.data.success) {
                        $window.alert('Logout Success');
                        console.log(response.data.session);
                        $window.location.href = '/';
                    } else {
                        $window.alert('Logout Fail');
                    }

                })

            })

        }

    }]);

