let i=0,j = 0;
const txt = [" Sathya Swaroop "," Backend Developer ", " Tech Stack Node.js My SQL and Mongo DB "," Working on Nest Js FrameWork "];
const speed = 500;
const items=document.getElementsByClassName("description");
console.log(items);
console.log('f');
function typeWriter(i) {
    
    const timer= setTimeout(typeWriter(i),100);
    if(i<txt[0].length){
     items[0].innerHTML+=txt[0].charAt(i);

    }
    else{
        clearTimeout(timer);
    }
    i++;
   
   timer; 
   console.log('end',i);
    
    
}
typeWriter();