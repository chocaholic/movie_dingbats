var lvl = 1;
var cat;

$(document).ready(function () {
    if(window.location.href.indexOf("index.html") == -1) {
        checkLevel();
    }
    else {
        localStorage.removeItem("cat");
    }
});

function checkLevel() {
    var levelArray;
    cat = localStorage.getItem("cat");
    switch (cat) {
        case "1":
            levelArray = jsonObject.LevelQ1;
            break;
        case "2":
            levelArray = jsonObject.LevelQ2;
            break;
    }
    
    if (lvl <= levelArray.length) {
        var levelQ = levelArray[lvl - 1];
        document.getElementById("movieimg").innerHTML = '<img src=' + Object.values(levelQ) + ' />';
    }
    else {
        $('#endlevel').modal('show');
    }
    
}

$(".animLvl").click(function (event) {
    window.location = "animated.html";
    localStorage.setItem("cat", 1);
});

$(".actionLvl").click(function (event) {
    window.location = "action.html"; 
    localStorage.setItem("cat", 2);
});

$(".ansbtn").click(function (event) {
    event.preventDefault();

    var answer = $("#ans").val();
    answer = answer.toLowerCase().replace(/\s+/g, '');
    
    var answerArray;
    switch (cat) {
        case "1":
            answerArray = jsonObject.LevelA1;
            break;
        case "2":
            answerArray = jsonObject.LevelA2;
            break;
    }

    var result = answerArray[lvl - 1];

    if (answer == Object.values(result)) {
        $("#ans").val('');
        $(".wrong").hide();
        $('#correctAns').modal('show');
    }
    else {
        $(".wrong").show();
    }
});

$(".next").click(function (event) {
    event.preventDefault();
    lvl++;
    checkLevel();
});