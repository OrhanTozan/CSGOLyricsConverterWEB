$(document).ready(function()
{
	$("#convertBtn").click(function()
	{
		var file = document.getElementById("fileInput").files[0];
		var fileReader = new FileReader();
		fileReader.readAsText(file);
		fileReader.onload = function(event)
		{
			console.log(fileReader.result);
		}
	});
});