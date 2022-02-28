//wishlist - cart

document.getElementById('addToCart').addEventListener("click", function() 
{	const quantity = document.getElementById("inputQuantity").value;
	document.getElementById('number-cart').innerHTML = quantity;
})

// var number = 0;

// document.getElementById('addToCart').addEventListener("click", function() 
// { document.getElementsByClassName('.quantity').value=number.push;
// document.getElementById('number-cart').add('number');
// })

// document.getElementById('addToCart').addEventListener("click", function() {
// function getVal() {
// 	const val = document.getElementsByClassName('.quantity').value;
// 	console.log(val);
//   }})


  document.getElementById('myBtn').addEventListener("click", function() 
{
	document.getElementById('more').style.display = "block";
})

//img
function changeImage(a) {
	document.getElementById("img").src=a;
}

//menu Mobile

document.getElementById('navMenuBtn').addEventListener("click", function() {
	document.getElementById('nav-menu').style.display = "block";
});

//quantity
// function validateForm(){

// 	var z = document.getElementsByClassName[".quantity"].value;
  
// 	if(!/^[0-9]+$/.test(z)){
// 	  alert("")
// 	}
  
//   }

  // description
  function showStuff(id) {
	if (document.getElementById(id).style.display === "flex") {
	  document.getElementById(id).style.display = "none";
	} else {
	  document.getElementById(id).style.display = "flex";
	}
  }


  var iconSelect;

  window.onload = function(){

	  iconSelect = new IconSelect("my-icon-select");

	  var icons = [];
	  icons.push({'iconFilePath':'/assets/dark\ grey.png', 'iconValue':'1'});
	  
	  iconSelect.refresh(icons);

  };