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
