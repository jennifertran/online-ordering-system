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
  else if(num ==2)
  {
    if(dish2+amount>=0) {
      dish2+=amount;
    }
    displayDish = 2;
    updateTotal(amount,price2);
  }
  else if(num ==3)
  {
    if(dish3+amount>=0) {
      dish3+=amount;
    }
    displayDish = 3;
    updateTotal(amount,price3);
  }
  else if(num ==4)
  {
    if(dish4+amount>=0) {
      dish4+=amount;
    }
    displayDish = 4;
    updateTotal(amount,price4);
  }

  displayQuantity(displayDish);
}

function updateTotal(amount,price)
{
  if(amount == -1 && (total-price >= 0))
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

  if(num === 1)
  {
    document.getElementById("quantity1-1").innerHTML = dish1.toString();
    document.getElementById("quantity1-2").innerHTML = dish1.toString();
    if(dish1 === 0)
    {
      document.getElementById("check1").style.display = 'none';
    }
    else{
      document.getElementById("check1").style.display = 'block';
    }
  }
  else if(num == 2)
  {
    document.getElementById("quantity2-1").innerHTML = dish2.toString();
    document.getElementById("quantity2-2").innerHTML = dish2.toString();
    if(dish2 === 0)
    {
      document.getElementById("check2").style.display = 'none';
    }
    else{
      document.getElementById("check2").style.display = 'block';
    }
  }
  else if(num == 3)
  {
    document.getElementById("quantity3-1").innerHTML = dish3.toString();
    document.getElementById("quantity3-2").innerHTML = dish3.toString();
    if(dish3 === 0)
    {
      document.getElementById("check3").style.display = 'none';
    }
    else{
      document.getElementById("check3").style.display = 'block';
    }
  }
  else if(num == 4)
  {
    document.getElementById("quantity4-1").innerHTML = dish4.toString();
    document.getElementById("quantity4-2").innerHTML = dish4.toString();
    if(dish4 === 0)
    {
      document.getElementById("check4").style.display = 'none';
    }
    else{
      document.getElementById("check4").style.display = 'block';
    }
  }

}

function displayTotal()
{
  var result = Math.round(total*100) / 100;
  result = result.toFixed(2);

  document.getElementById("total").innerHTML = result.toString();
}
