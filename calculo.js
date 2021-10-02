const Cart = require('./cart.json')
//console.log(Cart['items']);

const itemsArr = Cart['items'];


// 1. calcular a quantidade de produtos no objeto cart.

function QuantidadeCart(arr){
    const qtd = arr.map( i => i.quantity);
    const totalQtd = qtd.reduce((accum, curr) => accum + curr );
    console.log("Quantidade de produtos no objeto cart: " + totalQtd);
}

QuantidadeCart(itemsArr);

// 2. somar o valor total do cart.

function ValorTotalCart(arr){
    const valorTotalPorItem = arr.map(i => i.price * i.quantity);
    const totalValor = valorTotalPorItem.reduce((accum, curr) => accum + curr);
    //const valorEmReais = Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(totalValor);
    console.log("Valor total do cart: " + totalValor);
}

ValorTotalCart(itemsArr);


// 3. imprimir o nome de cada produto no cart.

function NomeItems(arr){
    const title = arr.map(i => i.title);
    console.log("Nome de cada produto no cart: ");
    title.map(i => console.log(i));
}

NomeItems(itemsArr);

