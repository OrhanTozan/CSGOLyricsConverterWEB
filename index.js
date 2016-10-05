$(document).ready(function()
{
	$(".convertBtn").click(function()
	{
		var selectedFile = document.getElementById("convertBtn").files[0];
		console.log(selectedFile);
	});
});