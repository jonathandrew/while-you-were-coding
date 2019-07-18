console.log('Challenge #1');

// Console out the numbers from 1-20, but only if they're divisible by 3.

// Use `if` and a modulus operation.
const challenge1 = "solution for Challenge 1";
const challenge2 = "solution for Challenge 2";
const challenge3 = " solution for Challenge 3";
const challenge4 = "solution for challenge 4";
const challenge5 = "solution for challenge 5";
const howdy = "Boy Howdy am I good at this!";
const everyday = "And getting better everyday.";
const best =" Am i the best?"
const challenge6 = "solution for challenge 6"




let number = 1;
while (number <= 20){
    if (number % 3 === 0){
        console.log(number)
    }
    if (number >=20){
        console.log(challenge1)
    }
    number = number + 1
}
console.log('Challenge #2');

// Same problem as #1, but no `if`s, `mods`, or `but`s (and no, that last one is
// not a thing). If you did it right, you should run the loop 6 times with 1
// console log per loop. That's called... a clue!
number = 3
while (number <=3){
    console.log(number)
    number = number + 3
}
while (number <=6){
    console.log(number)
    number = number + 3
}
while (number <=9){
    console.log(number)
    number = number + 3
}
while (number <=12){
    console.log(number)
    number = number + 3
}
while (number <=15){
    console.log(number)
    number = number + 3
}
while (number <=18){
    console.log(number)
    number = number + 3
}
console.log(challenge2)


console.log('Challenge #3');

// Console out the numbers from 1-20. BACKWARDS.

// (And, optionally, in heels.)

// (That's a reference that only Olds make, and only if they're SUPER CULTURED.)

// (No extra credit will be given for wearing heels during this challenge.)
number = 20;
while(number > 1){
    if (number % 3 === 0){
        console.log(number)
    }
    number = number -1
}
 console.log(challenge3)


console.log('Challenge #4');

// For the string 'Boy howdy am I good at this!', console out the letters
// individually.
number = 0

while(number <= howdy.length){
    console.log(howdy[number]);
    number = number + 1;
}
console.log (challenge4)



console.log('Challenge #5');

// For the string, 'And getting better every day.', starting with the second
// character, print out every third character.
number = 1

while (number <= everyday.length){
console.log( everyday[number])
number = number + 3;
}
console.log (challenge5)

console.log('Challenge #6');

// For the string 'Am I the best?', console out the letters individually, AND
// UPPERCASED.
number = 0

while(number <= best.length){
    console.log(best[number].toUpperCase);
    number = number + 1;
}
console.log (challenge6)

console.log('Challenge #7');

// For the string 'Whoa, I am the best!', console out the letters individually,
// but also capitalize the letters in the third word.


console.log('Challenge #8');


// For the string 'I am become death, destroyer of worlds.', console out the letters
//  individually, but backwards. That is, the first console log should be
// `.`, followed by `s`, followed by `d`, and so on.


console.log('Challenge #9');

const names = 'Colin|Mesuara|Drew|In Seop|Emma|Ben|J|Ryan|Olgy|Mike|Chris|John';

// Console out the individual letters of each person in class today, which are
// in the string above. Every time you start a new name (including the first
// one!), console out the string: 'Here today is:'.

// You'll know you're at a new person's name when you hit the pipe character.

// Don't print the pipes!

