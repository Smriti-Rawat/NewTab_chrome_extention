(function() {
	var images = [
    "1.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg",
    "11.jpg",
    "12.jpg",
    "13.jpg", 
    "14.jpg",
    "15.jpg",
    "16.jpg"
  ];

	function chooseone(arr)
	{
		return arr[Math.floor(Math.random()*arr.length)];
	}

	window.onload = function()
	{
	var randomImage = chooseone(images);
    document.getElementById('background-image').style.backgroundImage = 'url("img/'+ randomImage +'")';

	}
})();


