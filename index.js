$(document).ready(function()
{
	var step = 1;
	$(".step").click(function()
	{
		if (step == 1)
		{
			$(".temptext").val($(".rawtext").val());
			$(".temptext").trigger('autoresize');
			$(".row1").slideUp();
			$(".row2").slideDown();
			$(".row3").slideUp();
			$(".rightcol").slideDown();
		}
		else if (step == 2)
		{
			$(".row1").slideUp();
			$(".row2").slideUp();
			$(".row3").slideDown();
			$(this).fadeOut();
		}
		step++;
	});

	$("#convertBtn").click(function()
	{
		var file = document.getElementById("fileInput").files[0]; // GET FILE
		var bindKey = "MOUSE3"; // GET BINDKEY
		var convertedText = "alias nextLine \"l0\"";              // TEXT START
		convertedText += "\r\nbind " + bindKey + " \"nextLine\"";
		var fileReader = new FileReader(); // INIT FILEREADER

		fileReader.readAsText(file);
		fileReader.onload = function(event)
		{
			var rawLyrics = fileReader.result;
			var lines = rawLyrics.split("\n");
			for (let i = 0; i < lines.length; i++)
			{
				convertedText += "\r\nalias l" + i + " \"say " + lines[i] + ";alias nextLine l" + (i + 1) + "\"";
			}
			console.log(convertedText);
		}
	});
});