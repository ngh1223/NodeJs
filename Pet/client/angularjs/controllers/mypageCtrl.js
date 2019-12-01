myapp
    .controller('mypageCtrl', ['$scope', '$upload', '$http', '$window', function ($scope,  $upload, $http, $window) {

        $scope.accountInfo;

        $http({
            method: 'GET',
            url: '/member/getAccountInfo',
            params: {},
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        }).then(function (resp) {
            $scope.accountInfo = resp.data.result;
            console.log($scope.accountInfo.m_idx);
            if (resp.data.success) {
            } else {
            }
        })

        $scope.signOut = function (m_Idx) {
            console.log('ok');
            $http({
                method: 'POST',
                url: '/member/signOut',
                data: $.param({
                    mIdx: m_Idx
                }),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                }
            }).then(function (response) {
                console.log(response.data.success);
                if (response.data.success) {
                    $window.alert('Sign Out Success');
                    $window.location.href = '/';
                } else {
                    $window.alert('Sign Out Fail');
                }

            })
        }
        $scope.onFileSelect2 = function ($files) {
            $scope.selectedFile2 = $files[0];
        };
        $scope.edit = function () {
            console.log($scope.selectedFile2);
            $scope.upload = $upload.upload({
                url: '/member/edit',
                method: 'POST',
                file: $scope.selectedFile2,
                //data 속성으로 별도의 데이터를 보냄.
                data: {
                    uId: $scope.uIde,
                    uPw: $scope.uPwe,
                    uN: $scope.uNe,
                    uAd: $scope.uAde
                },
                fileFormDataName: 'fileField1',
            }).success(function (data, status, headers, config) {
                $window.alert('Edit Success');
                $window.location.href = '/';

            });
        }

        $http({
            method: 'GET',
            url: '/member/getMyAdoptList',
            params: {},
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        }).then(function (resp) {
            $scope.myAdoptList = resp.data.result;
            console.log($scope.myAdoptList);
        })

        $scope.cancel = function (a_number) {
            
            $http({
                method: 'POST',
                url: '/adopt/cancel',
                data: $.param({
                    a_number: a_number
                }),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                }
            }).then(function (response) {
                console.log(response.data.success);
                if (response.data.success) {
                    $window.alert('Cancel Success');
                    $window.location.href = '/';
                } else {
                    $window.alert('Cancel Fail');
                }

            })
        }
        
    }]);