var script = document.createElement("script");
    script.async = true;
    script.src = "http:////ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js";


var entry = document.getElementsByTagName("script")[0];
entry.parentNode.insertBefore(script, entry);

script.onload = script.onreadystatechange = function(){
    var rdyState = script.readyState;
    if(!rdyState || /complete|loaded/.test(script.readyState)){
        var span = document.createElement("span");
        span.innerHTML = "jQuery is LOADED";
        span.style.color = 'red';

        var appendTo = document.getElementById("widget");
        appendTo.parentNode.insertBefore(span,appendTo);
    }
};

