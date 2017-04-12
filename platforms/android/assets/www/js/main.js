$(".ansbtn").click(function (event) {
    event.preventDefault();
    
    var val = $("#ans").val();
    val = val.toLowerCase().replace(/\s+/g, '');
    
    var result = jsonObject.Level1[0];
    
//    $.getJSON("../www/answers.json", function (result) {
        if (val == result.answer1) {
            alert("Great");
        }
        else {
            alert("nope");
        }
//        console.log(result);
//    }); 
    
    
});