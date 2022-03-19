let header = document.querySelector("header"),
    a = document.querySelectorAll(".header__nav-li-a");

window.addEventListener("scroll", ()=>{
    if(scrollY>0){
        header.style.backgroundColor ="green";
        header.style.color = "white";
        header.style.height = "2.5rem";
        a.forEach((i)=>{
            i.style.color = "white";
        })
    } else{
        header.style.backgroundColor ="white";
        header.style.color = "blue";
        header.style.height = "3rem";
        a.forEach((b) =>{
            b.style.color = "#007bff"; 

        })
        
        
    } 
   
});
