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

let canOp = false;

for(let i = 0; i<ops.length;i++){
    ops[i].addEventListener("click", () => {
        
        for(let j = 0; j<ops.length;j++){
            if(ops[j].style.backgroundColor = "white"){
                ops[j].style.backgroundColor = "rgb(255, 149, 0)";
                ops[j].style.color = "white";
            }
        }

        ops[i].style.backgroundColor = "white";
        ops[i].style.color = "rgb(255, 149, 0)";
        opActive = true;
        if(op == "+"){
            opsOperate();
        } else if(op == "-"){
            opsOperate();
        }
        else if(op == "x"){
        opsOperate();
    }
        else if(op == "/"){
    opsOperate();
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
        for(let i = 0; i < ops.length;i++){
            ops[i].style.backgroundColor = "rgb(255, 149, 0)";
            ops[i].style.color = "white";
        }

       
            lol[i].classList.add("btnAnim");

            setTimeout(() => {
                lol[i].classList.remove("btnAnim");
            }, 1000);

        
            if(num.innerHTML == 0){
                num.innerHTML = "";
            }
            
       
          if(!opActive){
            num.innerHTML += parseInt(lol[i].innerHTML,10); 
            
          } else {
            num.innerHTML = lol[i].innerHTML;
            opActive = false;
           
          }

          canOp = true;
           
    });
    
}

let is = document.querySelector("#is");
is.addEventListener("click",  operate)



function opsOperate(){
    opActive = true;
    
    if(op == "+" && canOp){
        op = "";
        canOp =false;
         add(parseInt(num.innerHTML),parseInt(arr[arr.length-1],10));
         return num.innerHTML =  arr[arr.length-1]
         
    }
    else if(op == "-"){
        op = "";
         subtract(parseInt(arr[arr.length-1],10),parseInt(num.innerHTML));
         return num.innerHTML =  arr[arr.length-1]
    }
    else if(op == "x"){
        op = "";
         multiply(parseInt(arr[arr.length-1],10),parseInt(num.innerHTML));
         return num.innerHTML =  arr[arr.length-1]
    }
    else if(op == "/"){
        op = "";
         divide(parseInt(arr[arr.length-1],10),parseInt(num.innerHTML));
         return num.innerHTML =  arr[arr.length-1]
    }
}

function operate(){

    for(let i = 0; i < ops.length;i++){
        ops[i].style.backgroundColor = "rgb(255, 149, 0)";
        ops[i].style.color = "white";
    }
   
    is.classList.add("anim");
    setTimeout(() => {
       is.classList.remove("anim"); 
    }, 1000);
    
    opActive = true;
    if(op == "+"){
        op = "";
         add(parseInt(num.innerHTML),parseInt(arr[arr.length-1],10));
      
         return num.innerHTML =  arr[arr.length-1]
    }
    else if(op == "-"){
        op = "";
         subtract(parseInt(arr[arr.length-1],10),parseInt(num.innerHTML));
         return num.innerHTML =  arr[arr.length-1]
    }

    else if(op == "x"){
        op = "";
         multiply(parseInt(arr[arr.length-1],10),parseInt(num.innerHTML));
         return num.innerHTML =  arr[arr.length-1]
    }
    else if(op == "/"){
        op = "";
         divide(parseInt(arr[arr.length-1],10),parseInt(num.innerHTML));
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

function multiply(num,num2){
    arr.push(num*num2)
    return num * num2;
}

function divide(num,num2){
    arr.push(num/num2)
    return num / num2;
}


let ac = document.querySelector("#ac");

ac.addEventListener("click", ()=>{
    arr = [];
    arr[0] = 0;
    num.innerHTML = arr[0];
})

let del = document.querySelector("#del");
del.addEventListener("click", ()=> {
    num.innerHTML = num.innerHTML.substring(0,num.innerHTML.length -1 );
    if(num.innerHTML.length <= 0){
        num.innerHTML = 0;
    }
})


let others = document.querySelectorAll(".others");

for(let i = 0; i < others.length; i++){
    others[i].addEventListener("click", ()=>{
        others[i].classList.add("btnAnim2");
        setTimeout(() => {
            others[i].classList.remove("btnAnim2");
        }, 1000);
    })
}