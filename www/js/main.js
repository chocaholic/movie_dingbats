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
        case "action":
            saveCat = JSON.parse(localStorage.getItem("saveAction"));
            checkSave(saveCat);
            break;
        case "adventure":
            saveCat = JSON.parse(localStorage.getItem("saveAdventure"));
            checkSave(saveCat);
            break;
        case "animated":
            saveCat = JSON.parse(localStorage.getItem("saveAnimated"));
            checkSave(saveCat);
            break;
        case "comedy":
            saveCat = JSON.parse(localStorage.getItem("saveComedy"));
            checkSave(saveCat);
            break;
        case "horror":
            saveCat = JSON.parse(localStorage.getItem("saveHorror"));
            checkSave(saveCat);
            break;
        case "romcom":
            saveCat = JSON.parse(localStorage.getItem("saveRomCom"));
            checkSave(saveCat);
            break;
        case "scifi":
            saveCat = JSON.parse(localStorage.getItem("saveSciFi"));
            checkSave(saveCat);
            break;
        case "war":
            saveCat = JSON.parse(localStorage.getItem("saveWar"));
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
        case "action":
            jsonLvl = jsonObject.ActionQ;
            break;
        case "adventure":
            jsonLvl = jsonObject.AdventureQ;
            break;
        case "animated":
            jsonLvl = jsonObject.AnimatedQ;
            break;
        case "comedy":
            jsonLvl = jsonObject.ComedyQ;
            break;
        case "horror":
            jsonLvl = jsonObject.HorrorQ;
            break;
        case "romcom":
            jsonLvl = jsonObject.RomComQ;
            break;
        case "scifi":
            jsonLvl = jsonObject.SciFiQ;
            break;
        case "war":
            jsonLvl = jsonObject.WarQ;
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

$(".actionLvl").click(function (event) {
    loadTemplate();
    localStorage.setItem("cat", "action");
});

$(".advLvl").click(function (event) {
    loadTemplate();
    localStorage.setItem("cat", "adventure");
});

$(".animLvl").click(function (event) {
    loadTemplate();
    localStorage.setItem("cat", "animated");
});

$(".comLvl").click(function (event) {
    loadTemplate();
    localStorage.setItem("cat", "comedy");
});

$(".horrorLvl").click(function (event) {
    loadTemplate();
    localStorage.setItem("cat", "horror");
});

$(".romcomLvl").click(function (event) {
    loadTemplate();
    localStorage.setItem("cat", "romcom");
});

$(".scifiLvl").click(function (event) {
    loadTemplate();
    localStorage.setItem("cat", "scifi");
});

$(".warLvl").click(function (event) {
    loadTemplate();
    localStorage.setItem("cat", "war");
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
        case "action":
            jsonAns = jsonObject.ActionAns;
            break;
        case "adventure":
            jsonAns = jsonObject.AdventureAns;
            break;
        case "animated":
            jsonAns = jsonObject.AnimatedAns;
            break;
        case "comedy":
            jsonAns = jsonObject.ComedyAns;
            break;
        case "horror":
            jsonAns = jsonObject.HorrorAns;
            break;
        case "romcom":
            jsonAns = jsonObject.RomComAns;
            break;
        case "scifi":
            jsonAns = jsonObject.SciFiAns;
            break;
        case "war":
            jsonAns = jsonObject.WarAns;
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
        case "action":
            localStorage.setItem("saveAction", JSON.stringify(saveProgress));
            break;
        case "adventure":
            localStorage.setItem("saveAdventure", JSON.stringify(saveProgress));
            break;
        case "animated":
            localStorage.setItem("saveAnimated", JSON.stringify(saveProgress));
            break;
        case "comedy":
            localStorage.setItem("saveComedy", JSON.stringify(saveProgress));
            break;
        case "horror":
            localStorage.setItem("saveHorror", JSON.stringify(saveProgress));
            break;
        case "romcom":
            localStorage.setItem("saveRomCom", JSON.stringify(saveProgress));
            break;
        case "scifi":
            localStorage.setItem("saveSciFi", JSON.stringify(saveProgress));
            break;
        case "war":
            localStorage.setItem("saveWar", JSON.stringify(saveProgress));
            break;
    }
    
    console.log(localStorage);    
}

$(".next").click(function (event) {
    event.preventDefault();
    lvl++;
    checkLevel();
});