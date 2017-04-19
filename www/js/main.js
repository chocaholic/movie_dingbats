var lvl = 1;
$(document).ready(function () {
    checkLevel(lvl);
});

function checkLevel(lvl) {
    var levelArray = jsonObject.LevelQ1;
    if (lvl <= levelArray.length) {
        var levelQ = jsonObject.LevelQ1[lvl - 1];
        document.getElementById("movieimg").innerHTML = '<img src=' + Object.values(levelQ) + ' />';
    }
    else {
        alert("end");
    }
}

$(".ansbtn").click(function (event) {
    event.preventDefault();

    var answer = $("#ans").val();
    answer = answer.toLowerCase().replace(/\s+/g, '');

    var result = jsonObject.LevelA1[lvl - 1];

    if (answer == Object.values(result)) {
        $("#ans").val('');
        $(".wrong").hide();
        $('#\\myModal').modal('show');
    }
    else {
//        alert("nope");
        $(".wrong").show();
    }
});

$(".next").click(function (event) {
    event.preventDefault();
    lvl++;
    checkLevel(lvl);
});