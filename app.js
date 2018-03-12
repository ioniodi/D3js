
function callTheSound()
{
	var audio = new Audio('button.mp3');
	audio.play();
}

function goTo(strDonor)
{
	window.open(
		  "https://www.google.gr/search?q="+strDonor,
		  '_blank' // <- This is what makes it open in a new window.
	);
}
