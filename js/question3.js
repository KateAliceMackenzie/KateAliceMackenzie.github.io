$(document).ready(function(){

    // Create empty list for questions
    var imageCode = JSON.parse(localStorage.getItem('code'));

    $('#continue').click(function(){
        var selection = $('#topoBack').val();
        imageCode.push(selection);

        selection = $('#topoMid').val();
        imageCode.push(selection);

        selection = $('#topoFore').val();
        imageCode.push(selection);

        localStorage.setItem('code', JSON.stringify(imageCode));
        location.href = "question4.html";
    });

});