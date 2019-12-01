angular.module('main')
    .directive('top', function () {
        return {
            restrict: 'E',
            scope: {
                
            },
            template:
                '<div class="text-center" style="margin-bottom:0;" id="logo">'
                +'<h1 style="color:white; "> Pet Site</h1>'
                +'<p  style="color:white">Save the abandoned dogs</p>'
                +'</div>'

        }
    });
