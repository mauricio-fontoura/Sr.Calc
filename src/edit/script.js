//AREA MANUTENÇÃO
"use strict"
const log = new Function("mensage"," return console.log(mensage)");
// VARIABLES
const scrPrint= document.getElementById("printCalc");
const scrRes = document.getElementById('resultCalc');
const btnDel = document.getElementById('btnDel');
const btnEqual = document.getElementById('btnEqual');
const wrapperOp= [...document.getElementsByClassName('op')];
const wrapperNumber= [...document.getElementsByClassName('number')];
let signal,onOff;
//------------------------------------------------------------------
// AÇÃO ESCREVER NÚMEROS 
wrapperNumber.map((number)=>{
    number.addEventListener("click", ()=>{
        onOff = true;
        signal = true;
        scrRes.style.display = "none";
        scrPrint.innerHTML += number.innerHTML;
        scrRes.innerHTML += number.innerHTML; 
        scrPrint.style.display = "block";
    });
});
 // AÇÃO ESCREVE OPERADORES ESPECIAIS
wrapperOp.map((op,specOp)=>{
    op.addEventListener('click', ()=>{
        if(signal){
            scrPrint.style.display = "block";
            if(specOp==0){
                scrPrint.innerHTML += op.innerHTML;
                scrRes.innerHTML += Math.PI;
            };
        // AÇÃO ESCREVE OPERADORES NÚMERICOS
            switch (op.innerHTML){
                case "+": scrPrint.innerText += "+";    scrRes.innerHTML += "+";
                break;
                case "-": scrPrint.innerHTML +="-";     scrRes.innerHTML += "-";
                break;
                case "÷": scrPrint.innerHTML +="÷";     scrRes.innerHTML +="/";  
                break;
                case "x": scrPrint.innerHTML +="x";     scrRes.innerHTML +=  "*";
                break;
                case "%": scrPrint.innerHTML +="%";     scrRes.innerHTML *= 0.01; 
                break;
            };
            signal =false;
            scrRes.style.display = "none";
        };
    });  
});
// AÇÃO DELETAR CONTEÚDO
btnDel.addEventListener('click', ()=>{
    signal= false
    onOff = false;
    scrPrint.innerHTML = "";
    scrRes.innerHTML = "";
});
// AÇÃO RESOLVER EQUAÇÃO
btnEqual.addEventListener('click', ()=>{
        if(onOff){
            let res = eval(scrRes.innerHTML);
            scrRes.innerHTML = res;
            scrRes.style.display = "block";
            scrPrint.innerHTML = scrRes.innerHTML;
            scrPrint.style.display = "none";
            signal =true
            onOff =false;
    };
});