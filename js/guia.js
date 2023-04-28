element.innerHTML // Obtém ou altera qualquer conteúdo no html

element.innerText //Insere textos

element.attribute //Altera o valor de um elemento

element.setAttribute(atributo, valor) //altera o valor de um atributo de um elemento

//Adicionando e excluindo elementos

document.write() //- Escreve no fluxo de saída do HTML.
document.appendChild() //- Adiciona um elemento HTML.
document.removeChild() //- Remove um elemento HTML.
document.replaceChild() //- Substitui um elemento HTML.
document.createElement() //- Cria um elemento HTML.

.addEventListener("click", console.log("Olá!")) // - esse método serve para criar um evento e fazer algo, nesse caso um clique. Ela recebe dois parâmetros, o parâmetro do evento e o que deseja fazer; Quando clicar, vai aparecer olá!

let robotron = document.querySelector('#robotron')
robotron.addEventListener('click', function(){
    console.log('Cliquei no robo.');
});
//funções anônimas normalmente são usadas quando serão usadas apenas uma vez
//podemos usar arrow functions também nesse sentido exemplo abaixo

// robotron.addEventListener('click', (evento) => {
//     console.log(evento);
// });


function dizOi(nome){
    console.log('Oi ' + nome);
    console.log('Bem-vindo ao Robotron 2000');
}

dizOi('Kaio');