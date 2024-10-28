function manyChecks(a) {
  console.log(`a = ${a}`);
  
  return (
    console.log( a > 10 
      ? 'a is bigger than 10' 
      : 'a is less than or equal to 10 ' + (a === 5 
        ? 'an example of a special case' 
        : '')) 
        + (a === 15 
          ? 'but a is not 15' 
          : '')
          + (a > 5 
            ? 'and a is greater than 5' 
            : 'and a is less than or equal to 5 ') 
            + (a % 2 
              ? ' and a is odd' 
              : ' and a is even '));
}



// условие с условным (тернарным) оператором перевести в if...else И switch()
// результат выводить в консоль, с пощью console.log()
function manyChecksMy(a) {
  console.log(`a = ${a}`);

  let result = '';

  switch (true) {
    case a > 10:
      result += 'a is bigger than 10';
      break;
    case a <= 10:
      result += 'a is less than or equal to 10 ';
      if (a === 5) {
        result += 'an example of a special case';
      }
      else break;

      if (a === 15) {
        result += 'but a is not 15';
      }
      else break;

      if (a > 5) {
        result += 'and a is greater than 5';
      }
      else result += 'and a is less than or equal to 5';

      if (a % 2 == 0) {
        result += ' and a is odd';
      }
      else result += ' and a is even ';
  }

  console.log(result);
}
// Math.floor(Math.random() * 20) + 1
let a =  Math.floor(Math.random() * 20) + 1;
manyChecks(a);
manyChecksMy(a);