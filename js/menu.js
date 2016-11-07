var quantity = 0;

displayQuantity(0);

function changeQuantity(n)
{
  if(quantity+n>=0) {quantity=quantity+n;}
  displayQuantity(quantity)
}

function displayQuantity(quantity)
{
  document.getElementById("quantity").innerHTML = quantity.toString();
  document.getElementById("quantity2").innerHTML = quantity.toString();
}
