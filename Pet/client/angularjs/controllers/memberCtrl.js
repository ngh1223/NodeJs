myapp
    .controller('memberCtrl', ['$scope', '$upload', '$http', '$window', function ($scope, $upload, $http, $window) {
        //파일을 선택하면 전송하기 전에 파일 데이터를 보관해두었다가 send 호출 시 upload 서비스를 이용하여 전송
        $scope.onFileSelect = function ($files) {
                    $scope.selectedFile = $files[0];
        };

        $scope.idCheck = false;
        $scope.idCheckMessage = '';
        $scope.idCheckColor = 'black';

        $scope.pwCheck = false;

        $scope.checkPw = function () {
            if ($scope.uPw == $scope.uPw2) {
                $scope.pw2CheckMessage = 'Same password';
                $scope.pw2CheckColor = 'blue';
                $scope.pwCheck = true;
            } else {
                $scope.pw2CheckMessage = 'Different password';
                $scope.pw2CheckColor = 'red';
                $scope.pwCheck = false;
            }
        }

        $scope.makeCall = function () {
            $http({
                method: 'POST',
                url: '/member/idChk',
                data: $.param({
                    uId: $scope.uId
                }),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                }
            }).then(function (response) {
                console.log(response.data.success);
                if (response.data.success) {
                    $scope.idCheckMessage = 'ID already exists.';
                    $scope.idCheckColor = 'red';
                    $scope.idCheck = false;
                } else {
                    $scope.idCheckMessage = 'Available ID.';
                    $scope.idCheckColor = 'blue';
                    $scope.idCheck = true;
                }
                
            })
        };

        $scope.send = function () {
            console.log($scope.selectedFile);
            if ($scope.uId === undefined) {
                $scope.idCheckMessage = 'Please enter ID';
                $scope.idCheckColor = 'red';
            }else if (!$scope.idCheck) {
                $scope.idCheckMessage = 'ID already exists.';
                $scope.idCheckColor = 'red';
            }else if ($scope.uPw === undefined) {
                $scope.pwCheckMessage = 'Please enter Password';
            } else if (!$scope.pwCheck) {
                $scope.pw2CheckMessage = 'please check password';
                $scope.pw2CheckColor = 'red';
            }else if ($scope.uN === undefined) {
                $scope.nameCheckMessage = 'Please enter Name';
            }else if ($scope.uAd === undefined) {
                $scope.adCheckMessage = 'Please enter address';
            }else if ($scope.selectedFile === undefined) {
                $scope.photoChk = 'Please enter photo.';
            }else {
                $scope.upload = $upload.upload({
                    url: '/member/signUp',
                    method: 'POST',
                    file: $scope.selectedFile,
                    //data 속성으로 별도의 데이터를 보냄.
                    data: {
                        uId: $scope.uId,
                        uPw: $scope.uPw,
                        uN: $scope.uN,
                        uAd: $scope.uAd
                    },
                    fileFormDataName: 'fileField1',
                }).success(function (data, status, headers, config) {
                    $scope.mess = $scope.uId;
                    $window.alert('Sign In Success');
                    $window.location.href = '/';
             
                });
            }
        };




         }]);
