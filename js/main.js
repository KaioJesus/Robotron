
const controle = document.querySelectorAll("[data-controle")
//pega todos os elementos com a mesma classe

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
    })
})

function manipulaDados(operacao, controle){
    const peca = controle.querySelector("[data-contador]");

    if(operacao === "-"){
        peca.value = parseInt(peca.value) - 1;
        //parseInt -> transformar em número inteiro; se eu pego peca.value += 1, viria como incremento, uma string que seria concatenada, ou seja '00' + 1 = '001'; '001' + 1 = '0011';
    } else {
        peca.value = parseInt(peca.value) + 1;
    }
}

