Stuff = (function(window, undefind){
    var stuff = {};

    function loadScript(url, callback){
        var script = document.createElement("script");
        script.src = url;
        script.async = true;


        var target = document.getElementsByTagName("script")[0];
        target.parentNode.insertBefore(script, target);

        script.onload = script.onreadystatechange = function(){
            var rdyState = script.readyState;
            if(!rdyState || /complete|loaded/.test(script.readyState)){

                callback();

                script.onload = null;
                script.onreadystatechange = null;
            }
        };
    }

    function alertMe(){
        $("#sendMe").click(function(){
            var inp = document.getElementById("alrt");
            alert(inp.value);
        });
    }

    stuff.doIt = function(){
        jqueryURL = "http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js";
        loadScript(jqueryURL, alertMe)
    }

    return stuff;

})(window);
