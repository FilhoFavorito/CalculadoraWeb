//encontra a tela da calculadora
tela = document.getElementById('tela');
//define o valor inicial da tela como uma string vazia
tela.value = '';

// mapeia o botão de limpar tela
btn_limpa = document.getElementById('limpaTela');

//adiciona um event listener ao botão de limpar tela
btn_limpa.addEventListener("click", limpaTela);

//define todo o texto dentro do input "tela" como uma string vazia
function limpaTela(evento){
    evento.preventDefault();
    document.getElementById("tela").value = '';
}

//adiciona o caractere do botão que for pressionado
function addCaracter(caracter){ 
    if(tela.value == ''){  
        tela.value = caracter
    }
    else {
        tela.value += `${caracter}`
    }
}

//pega a string contida no input "tela" e retorna o resultado usando a função eval
function resultado(){
    document.getElementById('tela').value = eval(document.getElementById('tela').value);
}