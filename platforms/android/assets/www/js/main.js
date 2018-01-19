var cat;
var lvl;
$(document).ready(function () {
    
    //if url is template.html
    if (window.location.href.indexOf("template.html") > -1) {
        console.log(localStorage);
        
        cat = localStorage.getItem("cat");
    
        console.log(cat);
        
        var saveCat;
        switch (cat) {
        case "animated":
            saveCat = JSON.parse(localStorage.getItem("saveAnimated"));
            checkSave(saveCat);
            break;
        case "action":
            saveCat = JSON.parse(localStorage.getItem("saveAction"));
            checkSave(saveCat);
            break;
    }
        checkLevel();
    }
    //if url is index.html
    else if (window.location.href.indexOf("index.html") > -1) {
        localStorage.removeItem("cat");
    }
});

function checkSave(saveCat) {
    if (saveCat === null) {
        lvl = 1;
    }
    else {
        lvl = saveCat["lvl"];
    }
}

function checkLevel() {
    var jsonLvl;
    
    //Load the right questions to the current category
    switch (cat) {
        case "animated":
            jsonLvl = jsonObject.AnimatedQ;
            break;
        case "action":
            jsonLvl = jsonObject.ActionQ;
            break;
    }
    
    console.log(lvl, jsonLvl.length);
    
    //Load img question
    if (lvl <= jsonLvl.length) {
        var question = jsonLvl[lvl - 1];
        console.log(question);
        document.getElementById("movieimg").innerHTML = '<img src=' + Object.values(question) + ' />';
    }
    else {
        $('#endlevel').modal('show');
    }
    
}

$(".animLvl").click(function (event) {
    loadTemplate();
    localStorage.setItem("cat", "animated");
});

$(".actionLvl").click(function (event) {
    loadTemplate();
    localStorage.setItem("cat", "action");
});

$(".resetlvl").click(function (event) {
    localStorage.clear();
//    lvl = 1;
    
    console.log(localStorage);
});

function loadTemplate() {
    window.location = "template.html";
}

$(".ansbtn").click(function (event) {
    event.preventDefault();
    $(".wrong").hide();

    //get user answer and strip white space and change to lowercase
    var userAns = $("#ans").val();
    userAns = userAns.toLowerCase().replace(/\s+/g, '');
    
    var jsonAns;
    
    //Load the right userAnss to the current category
    switch (cat) {
        case "animated":
            jsonAns = jsonObject.AnimatedAns;
            break;
        case "action":
            jsonAns = jsonObject.ActionAns;
            break;
    }

    var rightAns = jsonAns[lvl - 1];
    console.log(rightAns);

    //Check user answer matches right answer
    if (userAns == Object.values(rightAns)) {
        $("#ans").val('');
        $('#correctAns').modal('show');
        
        //Save user progress
        saveProgress();
    }
    else {
        $(".wrong").show();
        $(".useranswer").addClass('.shake');
    }
});

function saveProgress(){
    
    var saveProgress = {
        "cat": cat,
        "lvl": lvl + 1
    };
    
    switch (cat) {
        case "animated":
            localStorage.setItem("saveAnimated", JSON.stringify(saveProgress));
            break;
        case "action":
            localStorage.setItem("saveAction", JSON.stringify(saveProgress));
            break;
    }
    
    console.log(localStorage);    
}

$(".next").click(function (event) {
    event.preventDefault();
    lvl++;
    checkLevel();
});