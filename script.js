let counter=0;
//metto fuori dalla funzione in modo che quando aggiorno la pagina il counter sarà a 0
function add(){
counter++;             //per aumentare di 1,ogni volta che premo il pusante +, il counter incrementa di 1
document.getElementById("number").innerHTML= counter; 
}

function subtract(){ //per diminuire di 1,ogni volta che premo il pulsante -
   
if (counter !=0) { //uso questo per evitare che il counter vada sotto lo 0;(se il contatore è diverso da zero in questo caso puoi dimnuire,se è zero no!)
    counter--;
}
document.getElementById("number").innerHTML= counter;
   
}   


                       