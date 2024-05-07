
    // Process
    function soma(){
        var numero1 = parseFloat(document.getElementById("numero1").value);
        var numero2 = parseFloat(document.getElementById("numero2").value);
        var resultado = document.getElementById("resultado");

        var soma = numero1 + numero2
        console.log(soma)
        console.log(numero1)
        console.log(numero2)

        resultado.innerText = soma;
    }
    function subtracao(){
        var numero1 = parseFloat(document.getElementById("numero1").value)
        var numero2 = parseFloat(document.getElementById("numero2").value)
        var resultado = document.getElementById("resultado")
    
        var subtracao = numero1 - numero2

        resultado.innerText = subtracao;
    }
    function multiplicao(){
        var numero1 = parseFloat(document.getElementById("numero1").value)
        var numero2 = parseFloat(document.getElementById("numero2").value)
        var resultado = document.getElementById("resultado")

        var multiplicao = numero1 * numero2

        resultado.innerText = multiplicao;
    }
    function divisao(){
        var numero1 = parseFloat(document.getElementById("numero1").value)
        var numero2 = parseFloat(document.getElementById("numero2").value)
        if (numero2 !== 0) {
            var resultado = numero1 / numero2;
            document.getElementById('resultado').innerHTML = resultado;
        } else {
            document.getElementById('resultado').innerHTML = "Não é possível dividir por zero.";
        }
      

        document.resultado.innerText = `O resultado é de ${divisao}`
    }
