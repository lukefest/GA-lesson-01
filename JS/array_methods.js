var fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log ("(1) " + fruits.toString()); // print

console.log ("(2) " + fruits.join(" * "));

console.log ("(3) " + fruits.shift());

fruits.unshift("Green banana");

console.log ("(4) " + fruits.toString()); // print

fruits[1] = "Balls"; //Replace 2nd fruit with balls

console.log ("(5) " + fruits.toString()); // print

fruits.push("Dick");

console.log ("(6) Holy shit dude, " + fruits.reverse());
