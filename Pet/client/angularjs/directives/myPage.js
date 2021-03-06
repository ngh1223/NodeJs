angular.module('main')
    .directive('mypage', function () {
        return {
            restrict: 'E',
            scope: {

            },
            template:
'                <div ng-controller="mypageCtrl" style="margin-top:20px;">'+
                '                   <div class="row">' +
                '                      <div class="col-sm-2"></div>' +
                '                     <div class="col-sm-8">' +
                '                        <table class="table table-hover" style="text-align:center;">' +
                '                           <thead>' +
                '                              <tr>' +
       '                                 <th colspan="2">My Info</th>'+
                '                            </tr>' +
                '                       </thead>' +
          '                      <tbody style="font-size:15px">'+
                '                         <tr>' +
                '                            <td>ID</td>' +
                '                           <td>{{ accountInfo.m_id }}</td>' +
                '                      </tr>' +
                '                     <tr>' +
                '                        <td>Name</td>' +
                '                       <td>{{ accountInfo.m_name }}</td>' +
                '                  </tr>' +
                '                 <tr>' +
                '                    <td>Address</td>' +
                '                   <td>{{ accountInfo.m_address }}</td>' +
                '              </tr>' +
                '             <tr>' +
                '                <td>Joined Date</td>' +
                '               <td>{{ accountInfo.m_date }}</td>' +
                          '         </tr>'+
                '        <tr>' +
                '           <td>Photo</td>' +
                '              <td><img src="/public/uploads/{{accountInfo.m_img}}" width="150" height="100" /></td>' +
                '         </tr>' +
                            '        <tr>'+
                '           <td><button class="btn btn-info" data-toggle="modal" data-target="#myModal">Edit</button></td>' +
                '          <td><button class="btn btn-danger" ng-click="signOut(accountInfo.m_idx)">Sign Out</button></td>' +
                '        </tr>' +
                '                               </tbody>' +
  '                          </table>'+
                '                     </div>' +
                '                    <div class="col-sm-2"></div>' +
                '                   <!-- The Modal -->' +
                '      <div class="modal fade" id="myModal">' +
                '                         <div class="modal-dialog">' +
                '                            <div class="modal-content">' +
       
                '                            <!-- Modal Header -->' +
                '           <div class="modal-header">' +
          '                              <h4 class="modal-title">Edit Form</h4>'+
                '                                 <button type="button" class="close" data-dismiss="modal">��</button>' +
                '                            </div>' +
                '                           <form method="post">' +
                '                              <!-- Modal body -->' +
                '             <div class="modal-body">' +
              
                '                             <input type="hidden" class="form-control" name="uIde" id="uIde" ng-model="uIde" value="{{accountInfo.m_id}}">' +
                '                                <table class="table table-hover" style="text-align:center;">' +
                '                                   <tbody style="font-size:15px">' +
              '                                          <tr>'+
                '                                             <td>Password</td>' +
                '                                            <td><input type="password" class="form-control" name="uPwe" id="uPwe" ng-model="uPwe" value="{{accountInfo.m_pw}}" placeholder="{{accountInfo.m_pw}}"></td>' +
                '                   </tr>' +
                '                                          <tr>' +
                '                                             <td>Name</td>' +
                '                                            <td><input type="text" class="form-control" name="uNe" id="uNe" ng-model="uNe" value="{{accountInfo.m_name}}" placeholder="{{accountInfo.m_name}}"></td>' +
                '               </tr>' +
                '                                          <tr>' +
                '                                             <td>Address</td>' +
                '                                            <td><input type="text" class="form-control" name="uAde" id="uAde" ng-model="uAde" value="{{accountInfo.m_address}}" placeholder="{{accountInfo.m_address}}"></td>' +
                '                         </tr>' +
                '                                                        <tr>' +
                '                                                           <td>Photo</td>' +
                '                                                          <td><input type="file" ng-file-select="onFileSelect2($files)"></td>' +
                '                     </tr>' +
                '                </tbody>' +
                '           </table>' +
                 
                '      </div>' +
                      
                '                                             <!-- Modal footer -->' +
                '        <div class="modal-footer">' +
                '                                               <button type="button" class="btn btn-info" data-dismiss="modal" ng-click="edit()">Edit</button>' +
                '                                              <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>' +
                '                                         </div>' +
                '                   </form>' +
                '              </div>' +
                '         </div>' +
    '    </div>'+
                '                                   </div>' +
                '                                  <br />' +
                '                                 <hr />' +
                '                                <h4 style="text-align:center; margin-bottom:10px; margin-top:10px;">My Adopt List</h4>' +
                '                               <table class="table table-hover" style="margin-bottom:30px;">' +
                '                                  <thead>' +
                '                                     <tr>' +
                '                                        <th>Dog Number</th>' +
                '                                       <th>Age</th>' +
                '                                      <th>Shelter Adress</th>' +
                '                                     <th>Shelter Name</th>' +
                '                                    <th>Tel</th>' +
                '                                   <th>Photo</th>' +
                  '                                  <th>Breed</th>'+
                '                                 <th>Status</th>' +
                    '                                <th>Application date</th>'+
                '                             <th>Cancel</th>' +
                '                         </tr>' +
                '                    </thead>' +
                '                                       <tbody style="font-size:10px">' +
                '                                          <tr ng-repeat="x in myAdoptList">' +
                '                                             <td>{{ x.a_number }}</td>' +
                '                                            <td>{{ x.a_age }}</td>' +
                '                                           <td>{{ x.a_sad }}</td>' +
                '                                          <td>{{ x.a_sn }}</td>' +
                '                                         <td>{{ x.a_tel }}</td>' +
                '                                        <td><img src="{{ x.a_img}}" width="120" height="200" /></td>' +
                '                                       <td>{{ x.a_breed }}</td>' +
                '                                      <td>{{ x.a_status }}</td>' +
                '                                     <td>{{ x.a_date }}</td>' +
                '                                    <td><button class="btn btn-primary" id="{{x.a_number}}" ng-click="cancel(x.a_number)">Cancel</button></td>' +
                '                               </tr>' +
                '                          </tbody>' +
                   '                     </table>'+
                   
'</div>'

        }
    });