//load more

document.getElementById('loadMore').addEventListener("click", function() {
	document.getElementById('hidden-cards').style.display = "flex";
	document.getElementById('loadMore').style.display = "none";
});

//colors

document.getElementById('white').addEventListener("click", function() 
{
	document.getElementById('cases-links').style.backgroundColor = "#fff";
})

document.getElementById('blue').addEventListener("click", function() 
{
	document.getElementById('cases-links').style.backgroundColor = "#43C0CF";
})

document.getElementById('grey').addEventListener("click", function() 
{
	document.getElementById('cases-links').style.backgroundColor = "#3D402F";
})

document.getElementById('green').addEventListener("click", function() 
{
	document.getElementById('cases-links').style.backgroundColor = "#4AAF00";
})

document.getElementById('purple').addEventListener("click", function() 
{
	document.getElementById('cases-links').style.backgroundColor = "#315BBD";
})

document.getElementById('orange').addEventListener("click", function() 
{
	document.getElementById('cases-links').style.backgroundColor = "#EE6115";
})

document.getElementById('red').addEventListener("click", function() 
{
	document.getElementById('cases-links').style.backgroundColor = "#DC041D";
})

document.getElementById('beije').addEventListener("click", function() 
{
	document.getElementById('cases-links').style.backgroundColor = "#EFEAD7";
})

//menu Mobile

document.getElementById('navMenuBtn').addEventListener("click", function() {
	document.getElementById('nav-menu').style.display = "block";
});

