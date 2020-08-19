$(document).ready(function(){

    // Create empty list for questions
    var imageCode = JSON.parse(localStorage.getItem('code'));

    $('#continue').click(function(){
        var selection = $('#treesBack').val();
        imageCode.push(selection);

        selection = $('#treesMid').val();
        imageCode.push(selection);

        selection = $('#treesFore').val();
        imageCode.push(selection);

        localStorage.setItem('code', JSON.stringify(imageCode));
        location.href = "question6.html";
    });

});