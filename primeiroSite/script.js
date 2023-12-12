/*alert("oi, essa mensagem é de alerta");*/

document.getElementById("paragrafoInicial").style.color="purple";
//Criando uma função em javaScript
function calcular(operacao) {
    //Criando uma variável
    //parseFloat();-converte o que está dentro dos parênteses em numero float
    var numero1= parseFloat(document.getElementById("numero1").value);
    var numero2= parseFloat(document.getElementById("numero2").value);
    //a variável resultado receberá as informações que estiverem na tag p
    var resultado= document.getElementById("resultado");

    //isNan é uma função que verifica se a informação digitada é um texto (não é um número)
    if(isNaN(numero1) || isNaN(numero2)){
        resultado.textContent = "por favor insira números válidos";
        return;
    }
    
    switch (operacao){
        case 'soma':
            resultado.textContent = "Resultado: " + (numero1+numero2);
            break;
        
        case 'subtracao':
            resultado.textContent = "Resultado: " + (numero1-numero2);
            break;
        
        case 'multiplicacao':
            resultado.textContent = "Resultado: " + (numero1*numero2);
            break;
        
        case 'divisao':
            resultado.textContent = "Resultado: " + (numero1/numero2);
            break;

        default:
            resultado.textContent = "Escolha uma posição existente";
    }
}


function ligarLuz(){
    document.getElementById('luz').src= 'src/imagens/luzAcesa.png';
}

function apagarLuz(){
    document.getElementById('luz').src= 'src/imagens/luzApagada.png';
}