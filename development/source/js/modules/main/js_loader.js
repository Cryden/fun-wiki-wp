var $ = require ('jquery');
 


var msglist = $("title");

var show = msglist.data("template");


console.log(show);

var scr = {"scripts":[]};

/*$.ajax({
    url:'js/bundle_'+show+'.js',
    error:
        function(){
            console.log('none');
        },
    success:
        function(){
            var scr = {"scripts":[{"src" : "js/bundle_"+show+".js", "async" : false},]};
        }
});*/

// В продакшене удалить
var scr = {"scripts":[{"src" : "js/bundle_"+show+".js", "async" : false},]};




// load JS
!function(t,n,r){"use strict";var c=function(t){if("[object Array]"!==Object.prototype.toString.call(t))return!1;for(var r=0;r<t.length;r++){var c=n.createElement("script"),e=t[r];c.src=e.src,c.async=e.async,n.body.appendChild(c)}return!0};t.addEventListener?t.addEventListener("load",function(){c(r.scripts);},!1):t.attachEvent?t.attachEvent("onload",function(){c(r.scripts)}):t.onload=function(){c(r.scripts)}}(window,document,scr);

// load CSS
    function loadCSS( href, before, media ){
        "use strict";
        var ss = window.document.createElement( "link" );
        var ref = before || window.document.getElementsByTagName( "script" )[ 0 ];
        var sheets = window.document.styleSheets;
        ss.rel = "stylesheet";
        ss.href = href;
        ss.media = "only x";
        ref.parentNode.insertBefore( ss, ref );
        function toggleMedia(){
            var defined;
            for( var i = 0; i < sheets.length; i++ ){
                if( sheets[ i ].href && sheets[ i ].href.indexOf( href ) > -1 ){
                    defined = true;
                }
            }
            if( defined ){
                ss.media = media || "all";
            }
            else {
                setTimeout( toggleMedia );
            }
        }
        toggleMedia();
        return ss;
    }

loadCSS( 'css/'+show+".css", false, "all" );
