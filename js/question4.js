$(document).ready(function(){

    // Create empty list for questions
    var imageCode = JSON.parse(localStorage.getItem('code'));

    $('#continue').click(function(){
        var selection = $('#water').val();
        imageCode.push(selection);
        localStorage.setItem('code', JSON.stringify(imageCode));
        location.href = "question5.html";
    });

});