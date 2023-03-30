var clickMenuDesplega=document.getElementById("desplegaMenu");
var clickMenuContrae=document.getElementById("contraeMenu");
var mouseSobre1=document.getElementById("imagenes1");
var mouseSobre2=document.getElementById("imagenes2");
var mouseSobre3=document.getElementById("imagenes3");


clickMenuDesplega.addEventListener("click",()=>{
    document.getElementById("desplega").style.visibility="visible";
    document.getElementById("desplega").style.opacity="1";
    document.getElementById("desplega").style.top="-5em";
    document.getElementById("desplegaMenu").style.visibility="hidden";
    document.getElementById("contraeMenu").style.visibility="visible";
});

clickMenuContrae.addEventListener("click",()=>{
    document.getElementById("desplega").style.visibility="hidden";
    document.getElementById("desplega").style.opacity="0";
    document.getElementById("desplega").style.top="5em";
    document.getElementById("desplegaMenu").style.visibility="visible";
    document.getElementById("contraeMenu").style.visibility="hidden";
});

mouseSobre1.addEventListener("click",()=>{
    document.getElementById("imagenes1").style.top="23.3em";
    document.getElementById("contenido").style.height="900px";
})

mouseSobre1.addEventListener("mouseover",()=>{
    document.getElementById("imagenes1").style.top="0";
    document.getElementById("contenido").style.height="0";
})


mouseSobre2.addEventListener("click",()=>{
    document.getElementById("imagenes2").style.top="23.3em";
})

mouseSobre2.addEventListener("mouseover",()=>{
    document.getElementById("imagenes2").style.top="0";
})


mouseSobre3.addEventListener("click",()=>{
    document.getElementById("imagenes3").style.top="23.3em";
    document.getElementById("contenido").style.height="900px";
})

mouseSobre3.addEventListener("mouseover",()=>{
    document.getElementById("imagenes3").style.top="0";
    document.getElementById("contenido").style.height="0";
})