// Cookies

var cookieModal = document.querySelector('.cookie-consent-modal')
var cancelCookieBtn = document.getElementById('cancel-button')
var acceptCookieBtn = document.getElementById('accept-button')


if(cancelCookieBtn) {
cancelCookieBtn?.addEventListener("click", function (){
	cookieModal.classList.remove("active")
})
					}

acceptCookieBtn?.addEventListener("click", function (){
	cookieModal.classList.remove("active")
	localStorage.setItem("cookieAccepted", true)
})

setTimeout(function (){
	let cookieAccepted = localStorage.getItem("cookieAccepted")
	if (cookieAccepted){
		// fa ceva daca cookie-ul exista
		cookieModal?.classList.add("active")
	}
}, 10000)

//Login

document.getElementById('login').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "flex";
});

document.querySelector('.close').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "none";
});

//menu Mobile

document.getElementById('navMenuBtn').addEventListener("click", function() {
	document.getElementById('nav-menu').style.display = "block";
	document.getElementById('navMenuBtn').style.display = "none";
	document.getElementById('closeBtn').style.display = "block";
});

document.getElementById('closeBtn').addEventListener("click", function() {
	document.getElementById('nav-menu').style.display = "none";
	document.getElementById('navMenuBtn').style.display = "block";
	document.getElementById('closeBtn').style.display = "none";
});	
//wishlist - favorite and cart


document.getElementById('addToFavBtn').addEventListener("click", function() 
{
	document.getElementById('number-favorite').style.display = "flex";
})

document.getElementById('addToCartBtn').addEventListener("click", function() 
{
	document.getElementById('number-cart').style.display = "flex";
})

document.getElementById('btnBuyNow').addEventListener("click", function() 
{
	document.getElementById('number-cart').style.display = "none";
	document.getElementById('number-cart2').style.display = "flex";
})


	//for password
var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");


// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
	document.getElementById("message").style.display = "block";
  }
  
  // When the user clicks outside of the password field, hide the message box
  myInput.onblur = function() {
	document.getElementById("message").style.display = "none";
  }
  
  // When the user starts to type something inside the password field
  myInput.onkeyup = function() {
	// Validate lowercase letters
	var lowerCaseLetters = /[a-z]/g;
	if(myInput.value.match(lowerCaseLetters)) {
	  letter.classList.remove("invalid");
	  letter.classList.add("valid");
	} else {
	  letter.classList.remove("valid");
	  letter.classList.add("invalid");
  }
  
	// Validate capital letters
	var upperCaseLetters = /[A-Z]/g;
	if(myInput.value.match(upperCaseLetters)) {
	  capital.classList.remove("invalid");
	  capital.classList.add("valid");
	} else {
	  capital.classList.remove("valid");
	  capital.classList.add("invalid");
	}
  
	// Validate numbers
	var numbers = /[0-7]/g;
	if(myInput.value.match(numbers)) {
	  number.classList.remove("invalid");
	  number.classList.add("valid");
	} else {
	  number.classList.remove("valid");
	  number.classList.add("invalid");
	}
  
	// Validate length
	if(myInput.value.length >= 6) {
	  length.classList.remove("invalid");
	  length.classList.add("valid");
	} else {
	  length.classList.remove("valid");
	  length.classList.add("invalid");
	}
  }



// Date 2019
		var date = " 2019";
		document.getElementById("date").innerHTML = date;

// load more

$(document).ready(function () {
		$(".moreBox").slice(0, 0).show();
		if ($(".blogBox:hidden").length != 0) {
			$("#loadMore-button").show();
		}		
		$("#loadMore").on('click', function (e) {
			e.preventDefault();
			$(".moreBox:hidden").slice(0, 6).slideDown();
			if ($(".moreBox:hidden").length == 0) {
				$("#loadMore").fadeOut('slow');
			}
		});
	});


// $(".loadMore-button").on("click", function(){
// 	$(".moreBox:hidden").slice(0, 3).slideDown()
// 	if ($(".moreBox:hidden").length == 0) {
// 		$(".loadMore-button").fadeOut('slow')
// 	}
// })

//heart 
$(document).ready(function(){
	$(".heart").click(function(){
		$(this).toggleClass("active_heart");
	})
});


