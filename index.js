$(document).ready(function()
{
	var step = 1;
	var bindkey;
	var rawlyrics;

	$(function() {
		$("form").submit(function() { return false; });
	});

	$('input, textarea').keypress(function(e){
		if(e.keyCode==13)
			$('.step').click();
	});

	$(".step").click(function()
	{
		if (step == 1)
		{
			rawLyrics = $(".rawtext").val();	
			$(".temptext").html(rawLyrics);
			$(".temptext").trigger('autoresize');
			$(".row1").slideUp();
			$(".row2").slideDown();
			$(".row3").slideUp();
			$(".rightcol").slideDown();
		}
		else if (step == 2)
		{
			bindKey = $("#bindKey").val();
			$(".temptext").html("<span style=\"color:yellow;\">bind " + bindKey + " \"nextLine\"</span>\r\n" + $(".temptext").html());
			$(".temptext").trigger('autoresize');
			$(".row1").slideUp();
			$(".row2").slideUp();
			$(".row3").slideDown();
			$(this).fadeOut();
		}
		step++;
	});

	$("#convertBtn").click(function()
	{
		var lines = rawLyrics.split("\n");
		var scriptedLyrics = "<span style=\"color:yellow;\">alias nextLine \"l0\"</span>";
		for (let i = 0; i < lines.length; i++)
		{
			scriptedLyrics += "\r\n<span style=\"color:yellow;\">alias l" + i + " \"say </span>" + lines[i] + "<span style=\"color:yellow;\">;alias nextLine l" + (i + 1) + "\"</span>";
		}
		$(".temptext").html("<span style=\"color:yellow;\">bind " + bindKey + " \"nextLine\"</span>\r\n" + scriptedLyrics);
		
		
		setTimeout(function()
		{
			$(".leftcol").slideUp(400, function()
			{
				$(".rightcol").removeClass("offset-s1");
				$(".rightcol").removeClass("hide-on-med-and-down");
				$("#temptextTitle").text("Result");
			});
		});
	});
});