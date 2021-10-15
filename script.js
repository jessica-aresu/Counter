// button -

const subBtn=document.createElement('button');  
subBtn.innerText='-';
buttons.appendChild(subBtn);
// button +

const addBtn=document.createElement('button'); 
addBtn.innerText="+";
const btnContainer= document.getElementById('buttons');
buttons.appendChild(addBtn);

//reset button
const resetBtn=document.createElement('button');
resetBtn.innerText='reset';
buttons.appendChild(resetBtn);

//  counter button 
 const counterBtn= document.createElement('div');
 counterBtn.innerText='0';
 const container = document.getElementById('container');
 container.appendChild(counterBtn);


//script

 let numberValue=0;
 addBtn.addEventListener('click',function(){  //per aumentare di 1,ogni volta che premo il pulsante +
     numberValue++
     let add=counterBtn.innerText=numberValue;
 }
 
 )
 subBtn.addEventListener('click',function(){  //per diminuire di 1,ogni volta che premo il pusante -
    numberValue--
    let sub=counterBtn.innerText=numberValue;
    
    
   
   
})

resetBtn.addEventListener('click',function(){
    numberValue=0;
    let sub=counterBtn.innerText=numberValue;
}

)


                       
