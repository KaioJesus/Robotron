
const subtrair = document.querySelector('#subtrair');
const somar = document.querySelector('#adicionar');
const braco = document.querySelector('#braco');

const controle = document.querySelectorAll(".controle-ajuste")
//pega todos os elementos com a mesma classe

controle.forEach( (elemento) => {
    console.log(elemento);
})

somar.addEventListener("click", () => {manipulaDados("somar")})
subtrair.addEventListener("click", () => {manipulaDados("subtrair")})

function manipulaDados(operacao){
    if(operacao === "subtrair"){
        braco.value = parseInt(braco.value) - 1;
        //parseInt -> transformar em número inteiro; se eu pego braco.value += 1, viria como incremento, uma string que seria concatenada, ou seja '00' + 1 = '001'; '001' + 1 = '0011';
    } else {
        braco.value = parseInt(braco.value) + 1;
    }
}

