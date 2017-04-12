$(document).ready(function() {
    var level = jsonObject.LevelQ1[0];
    document.getElementById("movieimg").innerHTML = '<img src=' + level.img1 + ' />';
});

$(".ansbtn").click(function (event) {
    event.preventDefault();

        var val = $("#ans").val();
        val = val.toLowerCase().replace(/\s+/g, '');

        var result = jsonObject.LevelA1[0];

        if (val == result.answer1) {
            alert("Great");
        }
        else {
            alert("nope");
        }    
});