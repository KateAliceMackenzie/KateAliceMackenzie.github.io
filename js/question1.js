$(document).ready(function(){

    // Create empty list for questions
    localStorage.clear();
    var imageCode = [];

    $('#continue').click(function(){
        var selection = $('#timeOfDay').val();
        imageCode.push(selection);
        localStorage.setItem('code', JSON.stringify(imageCode));
        location.href = "question2.html";
    });

});