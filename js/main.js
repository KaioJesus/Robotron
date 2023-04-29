
const braco = document.querySelector('.controle-contador');

const controle = document.querySelectorAll(".controle-ajuste")
//pega todos os elementos com a mesma classe

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.textContent);
        console.log(evento.target.par)
    })
})

function manipulaDados(operacao){
    if(operacao === "-"){
        braco.value = parseInt(braco.value) - 1;
        //parseInt -> transformar em número inteiro; se eu pego braco.value += 1, viria como incremento, uma string que seria concatenada, ou seja '00' + 1 = '001'; '001' + 1 = '0011';
    } else {
        braco.value = parseInt(braco.value) + 1;
    }
}

