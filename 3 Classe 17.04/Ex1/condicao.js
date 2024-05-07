function calcular(){
    var numBooks = parseInt(document.getElementById("numBooks").value);
    console.log(numBooks)
    
    if (numBooks <= 7){
        var resultado =0;
        resultado = numBooks * 22;
        document.getElementById("resultado").innerText = `The result is R$ ${resultado},00.`
    }
    else {
        var resultado =0;
        resultado = numBooks * 15;
        document.getElementById("resultado").innerText = `The result is R$ ${resultado},00`
    }


}