function startTime(){
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    m = checkTime(m);
    document.querySelector(".clock").innerHTML = h + ":" + m;
    setTimeout(startTime,1000);
}

function checkTime(i){
    if(i<10){
        i = "0" + i;
    }
    return i;
}

let opActive = false;
let isActive = false;

let num = document.querySelector(".number"); 

let ops = document.querySelectorAll(".operator");

let op = "";

for(let i = 0; i<ops.length;i++){
    ops[i].addEventListener("click", () => {
        
        
        opActive = true;
        if(op == "+"){
            operate();
        } else {
           
        }
        arr.push(num.innerHTML);
        op =ops[i].innerHTML;
        return op;
        
    })
}

let arr = [];
arr[0] = 0;

let lol = document.querySelectorAll(".numbers");

for(let i = 0;i<lol.length;i++){
    lol[i].addEventListener("click", function(){
        
        
            if(num.innerHTML == 0){
                num.innerHTML = "";
            }
            
       
          if(!opActive){
            num.innerHTML += parseInt(lol[i].innerHTML,10); 
          } else {
            num.innerHTML = lol[i].innerHTML;
            opActive = false;
           
          }
           
        
        
        
        if(op == "+"){
            
            
            
        }
        else if(op == "-"){
            subtract(parseInt(arr[arr.length-2],10),parseInt(arr[arr.length-1],10));
        }
    });
    
}

let is = document.querySelector("#is");
is.addEventListener("click",  operate)


function operate(){
    opActive = true;
    if(op == "+"){
        op = "";
         add(parseInt(num.innerHTML),parseInt(arr[arr.length-1],10));
         return num.innerHTML =  arr[arr.length-1]
    }
    
    
    
}

function add(num,num2){
    arr.push(num+num2);
   return num + num2;
}

function subtract(num,num2){
    arr.push(num-num2)
    return num - num2;
}

function multiply(num1,num2){

}

function divide(num1,num2){

}