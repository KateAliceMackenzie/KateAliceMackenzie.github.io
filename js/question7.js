$(document).ready(function(){

    // Create empty list for questions
    var imageCode = JSON.parse(localStorage.getItem('code'));

    $('#continue').click(function(){
        var selection = $('#clouds').val();
        imageCode.push(selection);

        selection = $('#precipitation').val();
        imageCode.push(selection);

        selection = $('#birds').val();
        imageCode.push(selection);

        localStorage.setItem('code', JSON.stringify(imageCode));
        location.href = "question8.html";
    });

});