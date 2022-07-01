function scuberGreetingForFeet(feet){
  // Write your code here!
  let price

  if (feet <= 400) {
     price = "This one is on me!"
 }
 else if (feet<2000 ){
  price = "That will be twenty bucks."
 }
 else if (feet<2500){
    price = "I will gladly take your thirty bucks."
 }
 else if (feet > 2500){
   price = "No can do."
 }


 return price
}

function ternaryCheckCity(city){
if (city == 'NYC'){
  return "Ok, sounds good."
}
else {
  return "No go."
}
}

function switchOnCharmFromTip(tip){
  // Write your code here!
switch (tip){
  case 'generous':
  return('Thank you so much.')
  break;

  case 'not as generous':
  return('Thank you.')
  break;

  default: 
  return('Bye.')
  break;


}

}
