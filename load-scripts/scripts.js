var script = document.createElement("script");
    script.async = true;
    script.src = "http://ajax.googleapis.com/ajax/libs/jqueryui/1.9.2/jquery-ui.min.js";


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

