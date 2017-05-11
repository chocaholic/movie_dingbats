var cat;
//var save = JSON.parse(localStorage.getItem("save"));
var lvl;
$(document).ready(function () {
    
    //if url is template.html
    if (window.location.href.indexOf("template.html") > -1) {
        console.log(localStorage);
        
        cat = localStorage.getItem("cat");
    
        console.log(cat);
        
        var saveCat;
        switch (cat) {
        case "1":
            saveCat = JSON.parse(localStorage.getItem("saveCat1"));
            checkSave(saveCat);
            break;
        case "2":
            saveCat = JSON.parse(localStorage.getItem("saveCat2"));
            checkSave(saveCat);
            break;
    }
        
//        if (save === null) {
//            lvl = 1;
//        }
//        else {
//            lvl = save["lvl"];
//        }
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
        case "1":
            jsonLvl = jsonObject.Cat1Q;
            break;
        case "2":
            jsonLvl = jsonObject.Cat2Q;
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
    localStorage.setItem("cat", 1);
});

$(".actionLvl").click(function (event) {
    loadTemplate();
    localStorage.setItem("cat", 2);
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

    //get user answer and strip white space and change to lowercase
    var userAns = $("#ans").val();
    userAns = userAns.toLowerCase().replace(/\s+/g, '');
    
    var jsonAns;
    
    //Load the right userAnss to the current category
    switch (cat) {
        case "1":
            jsonAns = jsonObject.Cat1Ans;
            break;
        case "2":
            jsonAns = jsonObject.Cat2Ans;
            break;
    }

    var rightAns = jsonAns[lvl - 1];
    console.log(rightAns);

    //Check user answer matches right answer
    if (userAns == Object.values(rightAns)) {
        $("#ans").val('');
        $(".wrong").hide();
        $('#correctAns').modal('show');
        
        //Save user progress
        saveProgress();
    }
    else {
        $(".wrong").show();
    }
});

function saveProgress(){
    
    var saveProgress = {
        "cat": cat,
        "lvl": lvl + 1
    };
    
    switch (cat) {
        case "1":
            localStorage.setItem("saveCat1", JSON.stringify(saveProgress));
            break;
        case "2":
            localStorage.setItem("saveCat2", JSON.stringify(saveProgress));
            break;
    }
    
    console.log(localStorage);    
}

$(".next").click(function (event) {
    event.preventDefault();
    lvl++;
    checkLevel();
});