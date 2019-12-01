angular.module('main')
    .directive('adoptlist', function () {
        return {
            restrict: 'E',
            scope: {

            },
            template:
                '<div ng-controller="adoptCtrl" style="margin-top:20px;">'+
                '<table class="table table-hover">' +
                '    <thead>' +
                '                            <tr>' +
                '                               <th>Dog Number</th>' +
                '                              <th>Age</th>' +
                '                             <th>Shelter Adress</th>' +
                '                            <th>Shelter Name</th>' +
                '                           <th>Tel</th>' +
                '                          <th>Photo</th>' +
                '                         <th>Breed</th>' +
                '                        <th>Status</th>' +
                '                       <th>Adopt</th>' +
                '                  </tr>' +
           '             </thead>'+
                '            <tbody style="font-size:10px">' +
                '               <tr ng-repeat="x in adoptList">' +
              '                  <td>{{ x.desertionNo._text }}</td>'+
                '                 <td>{{ x.age._text }}</td>' +
                '                <td>{{ x.careAddr._text }}</td>' +
                '               <td>{{ x.careNm._text }}</td>' +
                '              <td>{{ x.careTel._text }}</td>' +
                '             <td><img src="{{ x.filename._text }}" width="120" height="200" /></td>' +
                '            <td>{{ x.kindCd._text }}</td>' +
                '           <td>{{ x.processState._text }}</td>' +
                '          <td><button class="btn btn-primary" id="{{ x.desertionNo._text }}" ng-click="adopt(x.desertionNo._text)">Adopt</button></td>' +
                '     </tr>' +
                '                        </tbody>' +
 '                   </table>'+
    
                '               <div class="row" style="margin-bottom:30px;">' +
                '                  <div class="col-sm-4"></div>' +
                '                    <button type="button" class="btn btn-info" ng-repeat="btn in btnNum" ng-click="getAdoptList(btn)" style="margin-right:5px;">' +
                '                       {{ btn }}' +
                '                  </button>' +
                '                 <div class="col-sm-4"></div>' +
                '            </div>' +
                '       </div>' +
                '</div>'
        
        }
    });
