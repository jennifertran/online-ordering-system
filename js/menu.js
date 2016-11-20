var total = 0;

// Dishes represents the appetizer prices only
var dish1 = 0;
var dish2 = 0;
var dish3 = 0;
var dish4 = 0;

// Prices for Dishes
var price1 = 20.75;
var price2 = 10.75;
var price3 = 9.99;
var price4 = 7.99;

displayQuantity(0);

// Num represents dish numbers
function changeQuantity(amount,num)
{
  var displayDish = 0; // Represents the dish the needs to be shown

  if(num == 1)
  {
    if(dish1+amount>=0) {
      dish1+=amount;
    }
    displayDish = 1;
    updateTotal(amount,price1);
  }

  displayQuantity(displayDish);
}

function updateTotal(amount,price)
{
  if(amount == -1 && total-price >= 0)
  {
    total-=price;
  }
  else if(amount == 1){
    total+=price;
  }

  displayTotal();
}

function displayQuantity(num)
{
  if(num == 1)
  {
    document.getElementById("quantity").innerHTML = dish1.toString();
    document.getElementById("quantity2").innerHTML = dish1.toString();

    if(dish1 === 0)
    {
      
    }
  }

}

function displayTotal()
{
  document.getElementById("total").innerHTML = total.toString();
}
