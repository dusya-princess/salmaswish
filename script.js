var currentwish=1;

var wishlist=["travelling to Italy","To see Snow"];
var imagelist=[
    'images/Grand-Canal-Venice.webp',
    'images/Grand-Canal-Venice.webp'
];


const hammer=new hammer(document,body);
hammer.on("swipeleft",()=>{
    currentwish++;
    document.getElementById("wish").innerHTML=imagelist[currentwish-1];
});