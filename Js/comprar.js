// var quantidade = document.getElementById("quantidades");
// var total = document.getElementById("total");

// var precoproduto1 = parseFloat(document.getElementById("precoproduto1").value);
// var precoproduto2 = parseFloat(document.getElementById("precoproduto2").value);
// var precoproduto3 = parseFloat(document.getElementById("precoproduto3").value);

// var produto1 = parseFloat(document.getElementById("produto1").value);
// var produto2 = parseFloat(document.getElementById("produto2").value);
// var produto3 = parseFloat(document.getElementById("produto3").value);

// var somaProdutos = produto1 + produto2 + produto3;
// var precoTotalInicial = produto1 * precoproduto1 + produto2 * precoproduto2 + produto3 * precoproduto3;

// function calcular() {
//     var precoproduto1 = parseFloat(document.getElementById("precoproduto1").value);
//     var precoproduto2 = parseFloat(document.getElementById("precoproduto2").value);
//     var precoproduto3 = parseFloat(document.getElementById("precoproduto3").value);

//     var produto1 = parseFloat(document.getElementById("produto1").value);
//     var produto2 = parseFloat(document.getElementById("produto2").value);
//     var produto3 = parseFloat(document.getElementById("produto3").value);

//     var somaProdutos = produto1 + produto2 + produto3;
//     var precoTotalInicial = produto1 * precoproduto1 + produto2 * precoproduto2 + produto3 * precoproduto3;
//     var precoTotal = 0;

//     precoTotal = precoTotalInicial;

//     quantidade.innerText = somaProdutos;
//     total.innerText = precoTotal.toFixed(2);
// }


// function comprar(number) {
//     var produto = document.getElementById("produto" + number);
//     var x = parseFloat(produto.value) + 1;

//     produto.value = x.toString();

//     calcular();
// }




// var dicionario = {};
// localStorage.setItem("db", dicionario)

// function myFunc(name, value) {
//     // if (myMap.has(name)) {
//     //     myMap.get(name) += value;
//     // } else {
//     //     myMap.set(name) = value;
//     // }
//     // console.log(myMap)
//     value = parseFloat(value);
//     if (name in dicionario) {
//         dicionario[name] += value;
//     } else {
//         dicionario[name] = value;
//     }
//     console.log(dicionario)
//     $()
// };



// $(".adicionar1").click(function() {
//     var nome = $('.adicionar1').attr('name');
//     var preco = $('.adicionar1').attr('value');
//     dicionario[nome] = preco;

// });
// $(".adicionar2").click(function() {
//     console.log(dicionario);
// });