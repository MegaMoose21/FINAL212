var toggle=false;

document.body.querySelector(".menuIcon").addEventListener("click",function (){
    toggle=!toggle;

    if(toggle){
        document.body.querySelector( ".menu").style.right="0";
    }else{
        document.body.querySelector( ".menu").style.right="-150px";
    }
})

document.body.querySelector(".box6").addEventListener("click",function (){
    toggle=!toggle;

    if(toggle){
        document.body.querySelector( ".JerseyInfo").style.left="0";
    }else{
        document.body.querySelector( ".JerseyInfo").style.left="-150px";
    }
})

document.body.querySelector(".box7").addEventListener("click",function (){
    toggle=!toggle;

    if(toggle){
        document.body.querySelector( ".JerseyInfo2").style.right="0";
    }else{
        document.body.querySelector( ".JerseyInfo2").style.right="-150px";
    }
})

document.body.querySelector(".box8").addEventListener("click",function (){
    toggle=!toggle;

    if(toggle){
        document.body.querySelector( ".HomeTickets").style.left="0";
    }else{
        document.body.querySelector( ".HomeTickets").style.left="-150px";
    }
})

document.body.querySelector(".box9").addEventListener("click",function (){
    toggle=!toggle;

    if(toggle){
        document.body.querySelector( ".SeasonTickets").style.right="0";
    }else{
        document.body.querySelector( ".SeasonTickets").style.right="-150px";
    }
})