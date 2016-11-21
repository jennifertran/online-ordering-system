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

jQuery(document).ready(function(){
  var checkoutOffset = jQuery(".right-checkout").offset().top;

  jQuery(window).scroll(function(){
    var scrollPos = jQuery(window).scrollTop();

    if(scrollPos >= checkoutOffset-55){
      jQuery(".right-checkout").css({
        position: 'fixed',
        top: '60px',
        right: '10px'
      });
    }
    else {
      jQuery(".right-checkout").css({
        position: 'static'
      });
    }
  });
});
