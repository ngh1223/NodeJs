
angular.module('main')
    .directive('loginform', function () {
        return {
            restrict: 'E',
            scope: {

            },
            template:
 
            '<div class="row" ng-controller="loginCtrl">'+
            '                <div class="col-sm-12" style="margin-top:10px;">'+
            '               <h2 class="text-center">Login</h2>'+
            '              <br>'+
                '                 <form id="form" method="post">'+
                '                   <div class="row" style="margin-bottom:10px">'+
                '                   <div class="col-sm-2"></div>' +
                '                  <label class="control-label col-sm-2" for="uId2">ID</label>' +
                '                 <div class="col-sm-6">' +
                '                    <input type="text" class="form-control" name="uId2" id="uId2" ng-model="loginUid"' +
                '                          placeholder="Please enter id">' +
                '              </div>' +
                '             <div class="col-sm-2"></div>' +
                '        </div>' +
                '       <div class="row" style="margin-bottom:10px">' +
                '          <div class="col-sm-4"></div>' +
                '         <div class="col-sm-6" style="color:red;">{{loginIdCheckMessage}}</div>' +
                '        <div class="col-sm-2"></div>' +
                '   </div>' +
                    
                '                    <div class="row" style="margin-bottom:10px">' +
                '                        <div class="col-sm-2"></div>' +
                '                       <label class="control-label col-sm-2" for="uPw3">Password</label>' +
                '                      <div class="col-sm-6">' +
                '                         <input type="password" class="form-control" name="uPw3" id="uPw3" ng-model="loginUpw"' +
                '                               placeholder="Please enter password">' +
                '                   </div>' +
                '                  <div class="col-sm-2"></div>' +
                '             </div>' +
                '          <div class="row" style="margin-bottom:10px">' +
                '                 <div class="col-sm-4"></div>' +
                '                <div class="col-sm-6" style="color:red;">{{loginPwCheckMessage}}</div>' +
                '               <div class="col-sm-2"></div>' +
                '                    </div>' +
             
                '      <div class="row" style="margin-bottom:30px;">' +
                '         <div class="col-sm-2"></div>' +
                '                       <div class="col-sm-offset-1 col-sm-8">' +
                '                            <button type="button" class="btn btn-success btn-block" ng-click="login()">Login</button>' +
                '                      </div>' +
                '                     <div class="col-sm-2"></div>' +
    '                </div>'+
                '           </form>' +
                '      </div>' +
      
                ' </div>' 
                    
                            }
    });