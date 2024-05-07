$(function(){
    $("#load").click(function(){
        $.get("t2.txt", function(Response){
            $("#result").empty();
            $("#result").append(Response);
        });
    });
});