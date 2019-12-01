myapp
    .controller('adoptCtrl', ['$scope', '$http', '$window', function ($scope, $http, $window) {
        $scope.pageNum = '1';
        $scope.btnNum = new Array();
        for (var i = 0; i < 10; i++) {
            $scope.btnNum[i] = i + 1;
        }

        $http({
            method: 'GET',
            url: '/adopt/getAdoptList',
            params: { number: $scope.adoptListNumber },
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        }).then(function (resp) {
            $scope.adoptList = JSON.parse(resp.data.result);
            if ($scope.adoptList.response.body === undefined) {
                $scope.getAdoptList(1);
            }
            console.log($scope.adoptList.response.body['items']);
            if (resp.data.success) {
                $scope.adoptList = $scope.adoptList.response.body['items'].item;
            } else {
            }

        })

        $scope.getAdoptList = function (btn) {
            console.log(btn);
            $scope.pageNum = btn;
            if (btn != '1') {
                var k = 0;
                for (var i = btn - 2; i < btn + 8; i++) {
                    $scope.btnNum[k] = i + 1;
                    k++;
                    }
                }

                $http({
                    method: 'GET',
                    url: '/adopt/getAdoptList',
                    params: { number: btn},
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                    }
                }).then(function (resp) {
                    $scope.adoptList = JSON.parse(resp.data.result);
                    if ($scope.adoptList.response.body === undefined) {
                        $scope.getAdoptList(btn);
                    }
                    console.log($scope.adoptList.response.body['items']);
                    if (resp.data.success) {
                        $scope.adoptList = $scope.adoptList.response.body['items'].item;
                    } else {
                    }

                })  
        }

        $scope.adopt = function (dogNum) {
            $http({
                method: 'GET',
                url: '/adopt/getAdoptList',
                params: { number: $scope.pageNum },
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                }
            }).then(function (resp) {
                var adoptLists = JSON.parse(resp.data.result);
                if (resp.data.success) {
                    var adoptLists = adoptLists.response.body['items'].item;
                    for (var i = 0; i < 10; i++){
                        if (adoptLists[i].desertionNo._text == dogNum) {
                            var adoptLists2 = adoptLists[i];
                            $http({
                                method: 'GET',
                                url: '/member/getSession',
                                headers: {
                                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                                }
                            }).then(function (response) {
                                if (response.data.session.uIdx != '' && response.data.session.uIdx !== undefined) {
                                    $http({
                                        method: 'POST',
                                        url: '/adopt/adopt',
                                        data: $.param({
                                            a_number: dogNum,
                                            a_age: adoptLists2.age._text,
                                            a_sad: adoptLists2.careAddr._text,
                                            a_sn: adoptLists2.careNm._text,
                                            a_tel: adoptLists2.careTel._text,
                                            a_img: adoptLists2.filename._text,
                                            a_breed: adoptLists2.kindCd._text,
                                            a_status: adoptLists2.processState._text,
                                            m_idx: response.data.session.uIdx
                                        }),
                                        headers: {
                                            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                                        }
                                    }).then(function (respons) {
                                        if (respons.data.success) {
                                            $window.alert('Adopt success');
                                        } else {
                                            $window.alert('A dog already adopted');
                                        }
                                    })
                                } else {
                                    $window.alert('Login please');
                                    
                                }

                            })
                           
                        }
                     }

                } else {
                }

            })  
                
        }



    }]);