$(document).ready(function(){

    // Create empty list for questions
    var imageCode = JSON.parse(localStorage.getItem('code'));

    $('#continue').click(function(){
        var selection = $('#buildBack').val();
        imageCode.push(selection);

        selection = $('#buildMid').val();
        imageCode.push(selection);

        selection = $('#buildFore').val();
        imageCode.push(selection);

        localStorage.setItem('code', JSON.stringify(imageCode));
        location.href = "question7.html";
    });

});