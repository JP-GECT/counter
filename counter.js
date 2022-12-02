const btn1 = document.getElementById("btn");

const btn2= document.getElementById("two");

const count = document.getElementById("number");

const col =document.querySelector(".count");
let num=0

btn1.addEventListener('click',function(){
    num+=1;
    count.innerHTML=num;
    })


btn2.addEventListener('click',function(){
    num-=1;
    count.innerHTML=num;
})




