var currentwish=1;

// добавить желания в список wishlist

// добавить названия изображений к желаниям в список imagelist

// снежинки (можешь поменять цвет, размер, текст щэдов)
var wishlist=["Travelling to Italy","To see Snow","visiting Disneyland","Flying on an air balloon","Home theatre " ,"Visiting ice rink in moscow","Jewlery Box","minky blanket","Nice Candles","Home Swing"];
var imagelist=[
    'Grand-Canal-Venice.webp',
    'snow.jpeg',
    "disneyland.jpg",
    "airballon.webp",
    "home theatre.jpg",
    "skating rink.png",
    "jewlery box.png",
    "minky blanket.avif",
    "candles.jpeg",
    "HOME SWING.webp",
];


function changewish(){
  //opacity

    document.getElementById("wish").innerHTML=wishlist[currentwish-1];
    document.getElementById("imgwish").src=`images/${imagelist[currentwish-1]}`;
  
}
var wind=3;

function createsnowflake(){
    var size=Math.random()*10+10;
    var snowflake=document.createElement("div");
    snowflake.innerHTML="❄";
    snowflake.style.left=Math.random()*100+"vw";
    snowflake.style.top="5vh";
    snowflake.style.fontSize=size+"px";
    snowflake.classList.add("snowflake");
    snowflake.style.animationDuration=(30- size) * 0.5+"s";
    snowflake.style.opacity=Math.random();
    
    document.body.appendChild(snowflake);
    

    setTimeout(() => {
        snowflake.remove();
    }, 10000);

}

setInterval(createsnowflake,100);


function updatetiming(){
    var newyeardate=new Date("January 1, 2026 00:00:00").getTime();
    var currentdate=new Date().getTime();
    var millisecond=newyeardate-currentdate;

    if (millisecond<0){
         document.getElementById('timing').innerHTML="Happy New Year";
        return;
    }
    var daysleft=Math.floor(millisecond/(1000*60*60*24));
    var hoursleft=Math.floor((millisecond%(1000*60*60*24))/(1000*60*60));
    var minutesleft=Math.floor((millisecond%(1000*60*60))/(1000*60));
    var secondsleft=Math.floor((millisecond%(1000*60))/(1000));
    var text=`${daysleft} days <br> ${hoursleft}:${minutesleft}:${secondsleft}`;
    var test='salma';
    document.getElementById('timing').innerHTML=text;

}

updatetiming();
setInterval(updatetiming, 1000);