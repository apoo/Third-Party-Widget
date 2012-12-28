var html =
    '   <div style="block">' +
    '       <h4>Using JS <i>create.element</i></h4>'+
    '       <div style="float:left;margin-right:3px;">'+
    '           <img src="http://graph.facebook.com/saheli.ali/picture"/>'+
    '       </div>'+
    '       <span><strong>Name:</strong> Ali S</strong></span><br/>' +
    '       <span><strong>GitHub:</strong> https://github.com/apooboy/</span>' +
    '   </div>';

var div = document.createElement('div');
div.innerHTML = html;

var appendTo = document.getElementById("widget-dom");
appendTo.parentNode.insertBefore(div, appendTo);

