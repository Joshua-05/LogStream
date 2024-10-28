// Math.floor(Math.random() * 100)
let a = Math.floor(Math.random() * 100);
let b = a;
(b > 10 ? b : b * 2) > 5 ? (2 * b) + 1 : (b < 3 ? 1 : 2 * (b - 2)) > 4 ? 5 : (b % 2 == 0 ? 6 : 7);

console.log(a, b);
// условие с условным (тернарным) оператором перевести в if...else И switch()
// результат выводить в консоль, с пощью console.log()
let a1 = a
if (a > 10){ 
    a = a;
} else{
    a = a * 2;
}
if (a > 5) {
    
    console.log('This is "if..else": ',(2 * a1) + 1);
} else {
    if (a < 3){
        a = 1
    } else {
        a = 2 * (a - 2)
    }
    if (a > 4){
        a = 5
    }else{
        if (a % 2 == 0){
            console.log('This is "if..else": ', 6)
        } else console.log('This is "if..else": ', 7)
    }
}

console.log('This ter: ', (b > 10 ? b : b * 2) > 5 ? (2 * b) + 1 : (b < 3 ? 1 : 2 * (b - 2)) > 4 ? 5 : (b % 2 == 0 ? 6 : 7));
// console.log('This is "if..else": ', a);