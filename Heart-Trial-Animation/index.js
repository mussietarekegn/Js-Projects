let bodyel=document.querySelector("body");

bodyel.addEventListener("mousemove",(e)=>{
    let xpos=e.offsetX;
    let ypos=e.offsetY;
    let spanel=document.createElement("span");
    spanel.style.left=xpos+"px";
    spanel.style.top=ypos+"px";
    
    let size=Math.random()*100;
    spanel.style.width=size+"px";
    spanel.style.height=size+"px";
    bodyel.appendChild(spanel);
    setTimeout(()=>{
        spanel.remove(); 
    },3000)
    
})