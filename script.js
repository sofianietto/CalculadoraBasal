let mayor
let num1=20
let num2=30
let num3=15

    if(num1>=num2 && num1>=num3){
        mayor = num1
    }
    else if(num2>=num1 && num2>=num3){
        mayor = num2
    }
    else if(num3>=num1 && num3>=num2){
        mayor = num3
    }
    console.log(mayor)


///////////////////////////////////

function comparacion(a,b,c){
    let may
    if(a>=b && a>=c){
        may = a
    }
    else if(b>=a && b>=c){
        may = b
    }
    else if(c>=a && c>=b){
        may = c
    }
    return may
}
let resultado=comparacion(13,60,772)
console.log(resultado)


//////////////////////////////////


function hollisegar(peso){
    
    let pesopluma
    if(peso<=10){
       pesopluma = peso*100
    }
    else if(peso<=20){
        pesopluma = pesopluma+((peso-10)*50)
    }
    else if(peso>20 && peso<=30){
       pesopluma = pesopluma+((peso-20)*20)
    }
    return pesopluma
}
let resultado2 = hollisegar(7)
console.log(resultado2)

//recibo peso
//si peso <= 30: aplicar segar
//si no:aplicar superficie

let peso=29;

if(peso<=30){
    segar(peso)
}else{
    superficie(peso)
}

function segar(valor){
    if(valor>20){
        console.log(((valor-20)*20)+1500)
    }
    else if(valor>10){
        console.log(((valor-10)*50)+1000)
    }
    else{
        console.log(valor*100)
    }
    console.log("segar", valor)
}

function superficie(valor){
    console.log(((valor*4)+7)/(valor+90))
    console.log("superficie", valor)
}