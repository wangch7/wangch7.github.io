function check(){
	
	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var correct = 0;

	if(question1 == "Sichuan" || question1 == "sichuan" || question1 == "SICHUAN")
	{
		correct++;
	}

	if(question2 == "Tofu")
	{
		correct++;
	}

	if(question3 == "Ginger")
	{
		correct++;
	}


	var messages = ["Excellent!", "Good job!", "Let's try again."];
	var gifs = ["gif/range0.gif", "gif/range1.gif", "gif/range2.gif"];
	var range;

	if(correct < 1)
	{
		range = 2;
	}
	else if(correct > 2)
	{
		range = 0;
	}
	else
	{
		range = 1;
	}


	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("message").innerHTML = messages[range];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("gif").src = gifs[range];
}





