window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scroll-top").style.display = "block";
  } else 
  {
    document.getElementById("scroll-top").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function toTop() {
         document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function hide(iden) {
	document.getElementById(iden).style.display = "block";
}