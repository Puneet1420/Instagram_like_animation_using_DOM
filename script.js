let container = document.querySelector("#container");
let loveicon = document.querySelector("i");

container.addEventListener("dblclick" , function(){
    loveicon.style = "transform: translate(-50% ,-50%) scale(1)";
    loveicon.style.color = " #ed1d24 ";   
    setTimeout(function(){
        loveicon.style = "transform: translate(-50% ,-50%) scale(0)";        
        loveicon.style.opacity = "0";    
    },2000)
   
})
