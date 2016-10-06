$(document).ready(function()
{
	$("#convertBtn").click(function()
	{
		var filePath = $("#fileInput").val();
		alert(filePath);
		var xhr = new XMLHttpRequest();
		xhr.open("GET", filePath, true);
		xhr.onreadystatechange = function()
		{
			if (xhr.readyState == 4 && (xhr.statusCode == 400 || xhr.statusCode == 0))	
			{
				alert(filePath);
			}
		}
		xhr.send(null);
	});
});