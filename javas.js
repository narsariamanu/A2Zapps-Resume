$(document).ready(function(){
    $("li:not('#inner li')").prepend("<span class=\"fa fa-arrow-circle-right\" style='padding-right: 10px;'></span> ");
});

$(document).ready(function(){
    $("#inner li").prepend("<span class=\"fa fa-chevron-circle-right\" style='padding-right: 10px;'></span> ");
});


function swap() {
    $("#qualify").each(function() {
        var $this = $(this);
        var newrows = [];
        $this.find("tr").each(function(){
            var i = 0;
            $(this).find("th").each(function(){
                i++; 
                if(newrows[i] === undefined) { newrows[i] = $("<tr></tr>"); }
                newrows[i].append($(this));
            });
            $(this).find("td").each(function(){
                i++; 
                if(newrows[i] === undefined) { newrows[i] = $("<tr></tr>"); }
                newrows[i].append($(this));
            });
        });
        $this.find("tr").remove();
        $.each(newrows, function(){
            $this.append(this);
        });
    });
    
    return false;
}


new WOW().init();




function adjustStyle(width) {
    width = parseInt(width);
    if (width < 701) {
        swap($(this));
    } 
}

$(function() {
    adjustStyle($(this).width());
    $(window).resize(function() {
        adjustStyle($(this).width());
    });
});