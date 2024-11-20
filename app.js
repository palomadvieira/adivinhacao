alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 1000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let chute;
let tentativas = 1;


while(chute != numeroSecreto){
    chute = prompt(`Escolha um numero entre 0 e ${numeroMaximo}`);

    if (chute == numeroSecreto){
  
    } else{
        if(chute > numeroSecreto){
            alert(`o numero secreto é menor que ${chute}`);
        } else {
            alert(`o numero secreto é maior que ${chute}`);
        }
        tentativas++;
    }
}

let palavraTentativas = tentativas > 1 ? "tentativas" : "tentativa"
alert(`Vc descobriu o numero secreto:   "${numeroSecreto}" com ${tentativas} ${palavraTentativas}`);