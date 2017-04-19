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

    var val = $("#ans").val();
    val = val.toLowerCase().replace(/\s+/g, '');

    var result = jsonObject.LevelA1[lvl - 1];

    if (val == Object.values(result)) {
        alert("Great");
        lvl++;
        checkLevel(lvl);
    }
    else {
        alert("nope");
    }
});