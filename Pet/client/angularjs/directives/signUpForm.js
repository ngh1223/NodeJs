angular.module('main')
    .directive('signupform', function () {
        return {
            restrict: 'E',
            scope: {

            },
            template:
                '<div class="row" ng-controller="memberCtrl">' +
            '<div class="col-sm-12" style="margin-top:10px;">'+
                '<h2 class="text-center">Sign Up</h2>'+
                '<br>'+
                '<form id="form" method="post">'+
                    '<div class="row" style="margin-bottom:10px">'+
                '<div class="col-sm-2"></div>' +
                '<label class="control-label col-sm-2" for="uId">ID</label>' +
                '<div class="col-sm-6">' +
                ' <input type="text" class="form-control" name="uId" id="uId" ng-model="uId"' +
                '       placeholder="Please enter id" ng-keyup="makeCall()">' +
                       ' </div>'+
                '  <div class="col-sm-2"></div>' +
                '                   </div>' +
                '                  <div class="row" style="margin-bottom:10px">' +
                '                     <div class="col-sm-4"></div>' +
                '                    <div class="col-sm-6" style="color:{{idCheckColor}};">{{idCheckMessage}}</div>' +
                '                   <div class="col-sm-2"></div>' +
                '              </div>' +
          '          <div class="row" style="margin-bottom:10px">'+
                '             <div class="col-sm-2"></div>' +
                '              <label class="control-label col-sm-2" for="uPw">Password</label>' +
                '             <div class="col-sm-6">' +
                '                <input type="password" class="form-control" name="uPw" id="uPw" ng-model="uPw"' +
                '                      placeholder="Please enter password">' +
                '          </div>' +
                '         <div class="col-sm-2"></div>' +
                '    </div>' +
                '   <div class="row" style="margin-bottom:10px">' +
                '      <div class="col-sm-4"></div>' +
                '                       <div class="col-sm-6" style="color:red;">{{pwCheckMessage}}</div>' +
                '                      <div class="col-sm-2"></div>' +
                '                 </div>' +
       
                '            <div class="row" style="margin-bottom:10px">' +
                '                 <div class="col-sm-2"></div>' +
                '                <label class="control-label col-sm-2" for="uPw2">' +
                '                   Confirm Password' +
                '              </label>' +
                '             <div class="col-sm-6">' +
                '                <input type="password" class="form-control" name="uPw2" id="uPw2" ng-model="uPw2"' +
                '                      placeholder="Please enter same password" ng-keyup="checkPw()">' +
                '          </div>' +
                '         <div class="col-sm-2"></div>' +
                '    </div>' +
                '   <div class="row" style="margin-bottom:10px">' +
                  '      <div class="col-sm-4"></div>'+
                '               <div class="col-sm-6" style="color:{{pw2CheckColor}};">{{pw2CheckMessage}}</div>' +
                '              <div class="col-sm-2"></div>' +
                '         </div>' +
               
                '    <div class="row" style="margin-bottom:10px">' +
                '        <div class="col-sm-2"></div>' +
                '         <label class="control-label col-sm-2" for="uN">Name</label>' +
                '       <div class="col-sm-6">' +
                '          <input type="text" class="form-control" name="uN" id="uN" ng-model="uN"' +
                '                placeholder="Please enter name">' +
                '    </div>' +
                '   <div class="col-sm-2"></div>' +
                '       </div>' +
                '      <div class="row" style="margin-bottom:10px">' +
                '         <div class="col-sm-4"></div>' +
                '        <div class="col-sm-6" style="color:red;">{{nameCheckMessage}}</div>' +
                 '       <div class="col-sm-2"></div>'+
                '  </div>' +
                      
                '                 <div class="row" style="margin-bottom:10px">' +
                '                    <div class="col-sm-2"></div>' +
                '                   <label class="control-label col-sm-2" for="uN">Adress</label>' +
                '                  <div class="col-sm-6">' +
                '                     <input type="text" class="form-control" name="uAd" id="uAd" ng-model="uAd"' +
                '                           placeholder="Please enter adress">' +
                '               </div>' +
                '              <div class="col-sm-2"></div>' +
                '         </div>' +
                '        <div class="row" style="margin-bottom:10px">' +
                '           <div class="col-sm-4"></div>' +
                '          <div class="col-sm-6" style="color:red;">{{adCheckMessage}}</div>' +
                '         <div class="col-sm-2"></div>' +
                '    </div>' +
            
                '        <div class="row" style="margin-bottom:10px">' +
                '           <div class="col-sm-2"></div>' +
                '          <label class="control-label col-sm-2">Photo</label>' +
                '         <div class="col-sm-6">' +
                '            <input type="file" ng-file-select="onFileSelect($files)">'+
                '       </div>' +
                '      <div class="col-sm-2"></div>' +
                ' </div>' +
                    '<div class="row" style="margin-bottom:10px">'+
                '                       <div class="col-sm-4"></div>' +
                '                      <div class="col-sm-6" style="color:red;">{{photoChk}}</div>' +
                '                     <div class="col-sm-2"></div>' +
                '                </div>' +
       
                '              <div class="row" style="margin-bottom:30px;">' +
                '                 <div class="col-sm-2"></div>' +
                '                <div class="col-sm-offset-1 col-sm-8">' +
                '                   <button type="button" class="btn btn-success btn-block" ng-click="send()">Submit</button>' +
                '              </div>' +
                '             <div class="col-sm-2"></div>' +
            '        </div>'+
                '   </form>' +
      '      </div>'+
            
                '   </div>'
        }
    });
