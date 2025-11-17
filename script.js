var currentwish=1;

// добавить желания в список wishlist

// добавить названия изображений к желаниям в список imagelist

// снежинки (можешь поменять цвет, размер, текст щэдов)
var wishlist=["travelling to Italy","To see Snow","visiting Disneyland","flying on an air balloon"];
var imagelist=[
    'Grand-Canal-Venice.webp',
    'snow.jpeg',
    "disneyland.jpg",
    "airballon.webp"

    
    
];


function changewish(){

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
