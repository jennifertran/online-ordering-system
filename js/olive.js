/* Current Bug: When uncommented the other stuff doesnt work plz fix */

/*
var quantity = 0;

displayQuantity(0);

function changeQuantity(n)
{
  if(quantity+n>=0) {
    quantity=quantity+n;
  }

  displayQuantity(quantity);
}


function displayQuantity(quantity)
{
  document.getElementById("quantity").innerHTML = quantity.toString();
  document.getElementById("quantity2").innerHTML = quantity.toString();
}
*/

var prev = 'appetizer';

/* Changes the menu types */
function showHide(value) {

  var prevElement  = document.getElementById(prev);
  prevElement.style.display = 'none';

  // Show the next element
  var element = document.getElementById(value);
  var cStyle = getComputedStyle(element);
  var display = cStyle.getPropertyValue("display");

  if(display === "block"){
    element.style.display = 'none';
  }
  else {
    element.style.display = 'block';
  }

  // Replace prev with new
  prev = value;

}
