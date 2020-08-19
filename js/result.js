$(document).ready(function(){
        
    var imageCode = JSON.parse(localStorage.getItem('code'));
    
    let timeOfDay = imageCode[0],
        terrain = imageCode[1],
        topo3 = imageCode[2],
        topo2 = imageCode[3],
        topo1 = imageCode[4],
        water =   imageCode[5],
        foliage3 = imageCode[6],
        foliage2 = imageCode[7],
        foliage1 = imageCode[8],
        building3 = imageCode[9],
        building2 = imageCode[10],
        building1 = imageCode[11],
        clouds =   imageCode[12],
        precip =  imageCode[13],
        birds =   imageCode[14];
    
    // Sky
    $('#sky').prop('src','images/assets/'+timeOfDay+".png");
    $('#sky').removeClass('d-none');

    // Clouds
    $('#clouds').prop('src','images/assets/'+timeOfDay+clouds+".png");
    $('#clouds').removeClass('d-none');

    // European or Asian Town 3 layer
    if( building3 === 'ET3' || building3 === 'AT3'){
        $('#TO3').prop('src','images/assets/'+timeOfDay+building3+".png");
        $('#TO3').removeClass('d-none');
    };

    // Mountains or Hills 3 layers
    if( topo3 === 'MT3' || topo3 === 'HI3'){
        $('#MTHI3').prop('src','images/assets/'+timeOfDay+terrain+topo3+".png");
        $('#MTHI3').removeClass('d-none');
    };

    // Foliage 3
    if(foliage3){
        $('#foliage3').prop('src','images/assets/'+timeOfDay+foliage3+".png");
        $('#foliage3').removeClass('d-none');
    }

    // Building 3
    if(building3 && building3 !== 'ET3' && building3 !== 'AT3'){
        $('#building3').prop('src','images/assets/'+timeOfDay+building3+".png");
        $('#building3').removeClass('d-none');
    }

    // Flat 3
    if( topo3 === 'FL3'){
        $('#flat3').prop('src','images/assets/'+timeOfDay+terrain+topo3+".png");
        $('#flat3').removeClass('d-none');
    };

    // Foliage 2
    if(foliage2){
        $('#foliage2').prop('src','images/assets/'+timeOfDay+foliage2+".png");
        $('#foliage2').removeClass('d-none');
    }

    // Building 2
    if(building2){
        $('#building2').prop('src','images/assets/'+timeOfDay+building2+".png");
        $('#building2').removeClass('d-none');
    }

    // Back mist
    if(precip==="BM"){
        $('#BM').prop('src','images/assets/'+timeOfDay+precip+".png");
        $('#BM').removeClass('d-none');
    }

    // Land 2
    $('#land2').prop('src','images/assets/'+timeOfDay+terrain+topo2+".png");
    $('#land2').removeClass('d-none');

    // Lake or river
    if(water==="LA" || water==="RI"){
        $('#LARI').prop('src','images/assets/'+timeOfDay+water+".png");
        $('#LARI').removeClass('d-none');
    };

    // Foliage 1
    if(foliage1){
        $('#foliage1').prop('src','images/assets/'+timeOfDay+foliage1+".png");
        $('#foliage1').removeClass('d-none');
    }

    // Building 1
    if(building1){
        $('#building1').prop('src','images/assets/'+timeOfDay+building1+".png");
        $('#building1').removeClass('d-none');
    }

    // Land 1
    $('#land1').prop('src','images/assets/'+timeOfDay+terrain+topo1+".png");
    $('#land1').removeClass('d-none');

    // Lake or river
    if(water==="OC"){
        $('#ocean').prop('src','images/assets/'+timeOfDay+water+".png");
        $('#ocean').removeClass('d-none');
    };

    // Lake or river
    if(precip && precip !== "BM"){
        $('#weather').prop('src','images/assets/'+timeOfDay+precip+".png");
        $('#weather').removeClass('d-none');
    };

    // Birds
    if(birds){
        $('#birds').prop('src','images/assets/'+timeOfDay+birds+".png");
        $('#birds').removeClass('d-none');
    };

    $('#reset').click(function(){
        location.href = "page1.html";
    });

});