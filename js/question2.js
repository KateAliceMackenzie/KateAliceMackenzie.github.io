$(document).ready(function(){

    // Create empty list for questions
    var imageCode = JSON.parse(localStorage.getItem('code'));

    $('#continue').click(function(){
        var selection = $('#terrain').val();
        imageCode.push(selection);
        localStorage.setItem('code', JSON.stringify(imageCode));
        location.href = "question3.html";
    });

});