var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

function updateSubtot($product) {
  // Iteration 1.1
  let subTot = $product.querySelector('.subtot span');
  subTot.innerText = Number($product.querySelector('.pu span').innerText) * Number($product.querySelector('.qty label input').value);
  return Number(subTot.innerText)
}

function calcAll() {
  // Iteration 1.2
  let products = $cart.querySelectorAll('tr');
  let itemTotals = [];
  for (let i = 0; i < products.length; i++ ) {
    itemTotals.push(updateSubtot(products[i]));
  }
  document.querySelector('h2 span').innerText = itemTotals.reduce((accum, item) => {
    return accum + item
  });
}
$calc.onclick = calcAll;

