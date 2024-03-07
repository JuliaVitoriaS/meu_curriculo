//DOM -document object Model -Modelo de objeto do Documento 
//Transforma tudo na pagina em objetos. Cada objeto recebe atributos(propriedades) e metodos (funções)
// Saber o tema atual e obter o elemento o tema atual e opbter o elemento do tema atual

//funções
//funcion nomeDaFuncao (parametros) {
    //  corpó da função(o que le a vai fazer com os parâmetros e o que ela vai retornar para quem a chamaou);
    //}


//Saber onde está op atributo de tema
//SE o botão clicado,então...
document.querySelector('#botaoTrocaTema').addEventListener('click',function trocaTema() {
    //pegar o elemento com o tema
    //se o tema for light, então mude o atributo para dark
    // se não, então mude o atributo para light
    if(document.documentElement.getAttribute('data_tema') === 
    'light') {
        document.documentElement.setAttribute('data_tema', 'dark');
    } else {
        document.documentElement.setAttribute('data_tema' ,'light');
    }
});
//Trocar o tema . Para qual?
//1-Pegar o lelemento com o tema
//2-Apagar o atributo do tema ataul
//3-Escrever o atributo do novo tema

