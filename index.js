
function scuberGreetingForFeet(distance){
  // Write your code here!


  if (distance<=400){
     return('This one is on me!');
  }
  else if (distance>400 && distance <=2000) {
    return('That will be twenty bucks.');
  }

  else if (distance>2000 && distance <=2500) {
    return('I will gladly take your thirty bucks.');
  }
  else {
    return('No can do.');
  }

}
console.log(typeof(450));

console.log(scuberGreetingForFeet(300));
console.log(scuberGreetingForFeet(450));
console.log(scuberGreetingForFeet(2300));
console.log(scuberGreetingForFeet(2500));
console.log(scuberGreetingForFeet(3000));

function ternaryCheckCity(city){
  // Write your code here!
  return city=='NYC'? 'Ok, sounds good.':'No go.'
  }

console.log(ternaryCheckCity("NYC"));



function switchOnCharmFromTip(tip){
  // Write your code here!
  switch(tip){
    case 'generous':
      return ('Thank you so much.');
      break;
    case 'not as generous':
      return('Thank you.');
     break;

     default:
      return('Bye.');

  }
  }
console.log(switchOnCharmFromTip(20));
