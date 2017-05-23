var correct_number;
var first_text;
var guessed_number;
var condition= false;
var guesses=0

function game()
{
  var random_number= Math.random()*100;
  var random_number_rounded= Math.floor(random_number);
  correct_number = random_number_rounded;

  while (!condition)
  {
    first_text= prompt("Can You guess the number I am thinking right now?\n\n"+
                        "My number is in the range 1 to 100\n\n"+"What is the number?")

    guessed_number= parseInt(first_text);
    guesses  +=1;
    condition = check_guess();

  }
}
function check_guess()
{
  if (isNaN(guessed_number))
   { alert ("You have not entered a number\n\n"+"Please enter a number in the range 1 to 100");
   return false;
   }
  if ((guessed_number < 1) || (guessed_number > 100))
  {
    alert ("Please enter a number in the range 1 to 100");
    return false;
  }
  if (guessed_number > correct_number)
  {
    alert ("Your number is too large!");
    return false;
  }
  if (guessed_number < correct_number)
  {
   alert ("Your number is too small!");
   return false;
 }
 alert ("You got it ! The number was " + correct_number + "\n\nIt took you "+ guesses+ " guesses to guess the number");
 alert ("To play again press F5");
return true;
}
