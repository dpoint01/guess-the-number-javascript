var hidden = Math.floor(Math.random()*101);

var guess = prompt("Please pick a number between 0 and 100: ");

var count = 1;

while(guess != hidden){
	if(guess < 0 || guess > 100){
		var guess = prompt("Make a guess between 0 and 100 idiot, try again");
	}
	else if (guess < hidden){
		var guess = prompt("Your guess is too low, try again: ");
		count++;
	}
	else if (guess > hidden){
		var guess = prompt("Your guess is too high, try again: ");
		count++;
	}
}

if (guess == hidden){ 
	var string = "Congrats you guessed the right number. The number was " + hidden.toString() + " ! it took you " + count.toString() + " guesses";
	alert(string);
}