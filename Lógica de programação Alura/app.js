alert("Bem vindo ao jogo do NÚMERO SECRETO");
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1)
console.log(numeroSecreto);
let chute ;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    if (numeroSecreto == chute) {
        break        
    } else {
        if (chute > numeroSecreto) {
            alert("Você errou! O número é menor que " + chute);
        } else {
            alert("Você errou! O número é maior que " + chute);
        }
        tentativas++;
    }  
        
}
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert (`Você acertou com ${tentativas}` + ` ${palavraTentativa}!! O número é ${numeroSecreto}`);

