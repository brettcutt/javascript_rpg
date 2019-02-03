
//--------------------------------------------------------------------------- VARIABLE
// 1. VARIABLE
var variable = 1;

//--------------------------------------------------------------------------- OUTPUTTING
//2. OUTPUTTING
var num = 1;
console.log(num);

//--------------------------------------------------------------------------- STRING
// 3. STRING
var string = "1";

//--------------------------------------------------------------------------- ARRAY
// 4. ARRAY
var array = ["word1", "word2"];
console.log(array)
var cities = new Array("Zagreb", "Dublin", "Dublin", "New York");
console.log(cities)

//--------------------------------------------------------------------------- MULITDIMENSIONAL ARRAY
// 5. MULITDIMENSIONAL ARRAY
var twoDimensionalArray = [["a", "b", "c"], ["d", "e", "f"], ["g", "h", "i"]];
console.log(twoDimensionalArray[0][2]);
// C

//--------------------------------------------------------------------------- OBJECT
// 5. OBJECT
var keyValueArray = { "name": "word2", "age": 30 };

//--------------------------------------------------------------------------- TYPEOF
// 6. TYPEOF
var num = 1;
console.log(typeof (num));
// number

var string = "hello";
console.log(typeof (string));
// string

var boolean = true
console.log(typeof (boolean));
// boolean

var object = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };
console.log(typeof (object));
// object

//--------------------------------------------------------------------------- isNAN
// 6. isNAn, is not a number 
var string = "string"
console.log(isNaN(string));
// true


//--------------------------------------------------------------------------- BOOLEAN
console.log(Boolean("banana"));
// true
console.log(Boolean(2));
// true
console.log(Boolean(-1.5));
// true
console.log(Boolean(""));
// false
console.log(Boolean(-0));
// false
console.log(Boolean(null));
// false

//--------------------------------------------------------------------------- ToString
// 7. TOSTRING, convert an integer to a string
number = 23
number = number.toString()
console.log(typeof (number))
// 23

//--------------------------------------------------------------------------- ParseInt
// 8. PARSEINT, convert a string to an integer
var string = "2";
string = parseInt(string)
console.log()

//--------------------------------------------------------------------------- ParseFloat
var string = "2.5468";
string = parseFloat(string)
console.log(string)

//--------------------------------------------------------------------------- JOIN array to string
// 9. JOIN, convert an array to string
var array = ["milk", "bread", "chocolate", "juice"];
array = array.join(", ");
console.log(array)
// milk, bread, chocolate, juice

//or

var array = ["milk", "bread", "chocolate", "juice"];
array = array.toString();
console.log(array)
// milk,bread,chocolate,juice

//--------------------------------------------------------------------------- CONCAT
// 9a. CONCAT, conbine two arrays
var array1 = ['a', 'b', 'c'];
var array2 = ['d', 'e', 'f'];
var array3 = array1.concat(array2);
console.log(array3);

//--------------------------------------------------------------------------- SPLIT string to array
// 10. SPLIT, convert a string to an array
var sentence = "How are you doing today?";
sentence = sentence.split(" ")
console.log(sentence)
// [ 'How', 'are', 'you', 'doing', 'today?' ]

/* Split will stop after fourth split*/
var string = "string, string, string, string, string, string";
var array = string.split(",", 4);
console.log(array)

/* Split will stop after fourth split and happen after each and word */
var string = "string and string and string and string";
var array = string.split("and", 4);
console.log(array)

//--------------------------------------------------------------------------- SPLICE
// 12.a SPLICE, insert item into specific index position
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
array.splice(3, 0, "E");
console.log(array)
//[ 1, 2, 3, 'E', 4, 5, 6, 7, 8, 9 ]

// 12b. SPLICE remove specific element from array by index position
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
array.splice(2, 1);
console.log(array)
//[ 1, 2, 4, 5, 6, 7, 8, 9 ]

// 12b. SPLICE assigning array to array splice gives back the individual spliced element
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
array = array.splice(2, 1);
console.log(array)
//[3]

//--------------------------------------------------------------------------- REPLACE ARRAY ELEMENT
// 12c. REPLACE, Replace an element in an array with another element
var array = ["milk", "bread", "chocolate"];
array[1] = "banana";
console.log(array);
// [ 'milk', 'banana', 'chocolate' ]

//--------------------------------------------------------------------------- FILL
// 12d. FILL, fill the whole content of an array with what's specified , fill to a select index positions
var array1 = ["milk", "bread", "chocolate", "lemon", "banana"];
console.log(array1.fill("a"));
//[ 'a', 'a', 'a', 'a', 'a' ]

var array2 = ["one", "three", "four", "five", "six"];
console.log(array2.fill("a", 1, 3));
//[ 'one', 'a', 'a', 'five', 'six' ]

//--------------------------------------------------------------------------- SLICE
// 13. SLICE, keep the specific segment of an array or string
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var array = array.slice(2, 5)
console.log(array)
// [ 3, 4, 5 ]

var string = 'thisIsMyString!';
var string = string.slice(3, 4);
console.log(string)
// s

var myString = 'thisIsMyString!';
var string = string.slice(0, -2);
console.log(string)
// thisIsMyStrin
//--------------------------------------------------------------------------- UNSHIFT

//14a. UNSHIFT, add an item to the front of an array

var array = ["milk", "bread", "chocolate", "juice"];
array.unshift("flour");
console.log(array);
// [ 'flour', 'milk', 'bread', 'chocolate', 'juice' ]

//--------------------------------------------------------------------------- SHIFT

// 14.b SHIFT, removes the first element from an array
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
array = array.shift()
console.log(array)
//[2, 3, 4, 5, 6, 7, 8, 9]         if the pop function is called before the console.log, the output will be the array with element removed

// 14c. SHIFT method to output the first element of an array
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(array.shift());
// 1        if the shift function is in the console.log, it will output the individual number

//--------------------------------------------------------------------------- PUSH

// 15a. PUSH, add an element to the end of an array 
var array = ['this', 'is', 'an']
var newItem = "array";
array.push(newItem);
// ['this', 'is', 'an', 'array']
//--------------------------------------------------------------------------- POP

// 15b. POP, removes the last element from an array
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
arrray = array.pop()
console.log(array)
//[ 1, 2, 3, 4, 5, 6, 7, 8 ]   if the pop function is called before the console.log, the output will be the array with element removed

// 15c. POP method to output the last element of an array
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(array.pop())
// 9     
//--------------------------------------------------------------------------- KEYS OF KEY VALUE ARRAY

// 16. get keys of key value array
var array = { "name": "brett", "age": 30 }
array = Object.keys(array)
console.log(array)
// [ 'name', 'age' ]

//--------------------------------------------------------------------------- SORT
// 18. SORT, sort an array by alphabetical or numeric order
var numbers = [3, 6, 8, 9]
numbers = numbers.sort();
console.log(numbers)
// [ 3, 6, 8, 9 ]

var letters = ['d', 'b', 'c', 'a', 'f'];
letters = letters.sort();
console.log(letters)
//[ 'a', 'b', 'c', 'd', 'f' ]

//--------------------------------------------------------------------------- REVERSE
// 19. REVERSE, reverses the order of an array.
var array = ['How', 'Are', 'doing', 'you', 'today!']
array = array.reverse();
console.log(array)
// [ 'today!', 'you', 'doing', 'Are', 'How' ]
//--------------------------------------------------------------------------- LENGTH

// 20. LENGTH, get the amount of characters in a string or elements in an array
var string = "hello"
string = string.length
console.log(length)
// 5

//--------------------------------------------------------------------------- IF STATMENT
// 21. IF STATEMENT
if (1 + 1 == 2) {
    //console.log('correct')
}

//--------------------------------------------------------------------------- IF STATMENT SHORTHAND
// 22. IF STATMENT SHORTHAND, 1. condition 2. statment1(if) 3. statement2(else)
var num = 25;
console.log((num > 18) ? "number is greater than 18" : "number is less than 18")
// number is greater than 18
var fruit = apple;
console.log(fruit == "banana" ? monkey.eat() : monkey.sleep());

//--------------------------------------------------------------------------- INCLUDES
// 22. INCLUDES IF STATEMENT. checks if an element is in the array
var animals = ['dog', 'cat', 'mouse', 'rabbit'];

if (animals.includes('hare')) {
    console.log("hare");
} else if (animals.includes('dog')) {
    console.log('dog');
}
// dog

//--------------------------------------------------------------------------- FORLOOP
// 23. FORLOOP
var string = "hello";
for (var i = 0; i < 10; i++) {
    console.log(string)
}

//--------------------------------------------------------------------------- NESTED FORLOOP
// 23. FORLOOP
var array = [[1, 2], [3, 4], [5, 6], [7, 8]];
var i;
var j;

for (i = 0; i < array.length; i++) {

    for (j = 0; j < array[i].length; j++) {
        console.log(array[i][j])
    }
}

//--------------------------------------------------------------------------- FOREACH
//24. FOREACH
var animals = ['dog', 'cat', 'mouse', 'rabbit']
animals.forEach(function (item) {
    console.log(item);
})
// dog
// cat
// mouse
// rabbit

//or

var sports = ["basketball", "football", "tennis", "chess"];
for (var i = 0; i < sports.length; i++) {
    console.log(sports[i]);
}
//basketball
//football
//tennis
//chess

//--------------------------------------------------------------------------- SWITCH
// 25. SWITCH

var fruit = "banana";

switch (fruit) {
    case 'apple': console.log("The fruit is apple");
        break;

    case "lemon": console.log("The fruit is lemon");
        break;

    case "strawberry": console.log("The fruit is strawberry");
        break;

    case "banana": console.log("The fruit is banana");
        break;

    default: console.log("This is the default value when none of the cases were true");
}
// The fruit is banana

//--------------------------------------------------------------------------- WHILE
// 25. WHILE

var i = 0;

while (i < 10) {
    console.log(i);
    i++;
}
//--------------------------------------------------------------------------- DO WHILE
// 25. DO WHILE, executes the code before the while statment begins

var i = 0;
do {
    console.log(i);
    i++;
} while (i < 10);

var i = 10;
do {
    console.log(i);
    i++;
} while (i < 10);

//--------------------------------------------------------------------------- BREAK
// 25. BREAK, stops the iteration process

var i;
for (i = 0; i < 5; i++) {
    if (i === 4) {
        break;
    }
    console.log("i: " + i);
}

//--------------------------------------------------------------------------- CONTINUE
// 25. CONTINUE, continues after a condition is met. if i is equal 4 then skip the iteration 

var i;
for (i = 0; i < 10; i++) {

    if (i === 4) {
        continue;
    }
    console.log(i);
}

//--------------------------------------------------------------------------- FUNCTIONS
// 25. FUNCTIONS
// m and n are the parameters and 5 and 2 are the arguments
function multiply(m, n) {
    return m * n;
}
multiply(5, 2);

//--------------------------------------------------------------------------- DEFAULT VALUE IN FUNCTIONS
// 25. FUNCTIONS, if a variable is set in the function and not set when the funciton is called
// a default is set in the missing values place
function multiply(a, b = 10) {
    return a * b;
}
console.log(multiply(2));
// 20

function multiply(a, b = 10) {
    return a * b;
}
console.log(multiply(2, 5));
// 10

//--------------------------------------------------------------------------- MATH RANDOM
// 25. MATH RANDOM, get a random element from an array by its index position.

var numbers = [3, 6, 8, 4, 9, 5, 1, 2];
var randomAnswer = animals[Math.floor(Math.random() * animals.length)];

//--------------------------------------------------------------------------- MATH MAX
//26a. MATH MAX, get the max number in an array
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
numbers = Math.max.apply(Math, numbers)
// 9

//--------------------------------------------------------------------------- MATH MIN
// 26b. MATH MIN, get the min number in an array
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
numbers = Math.min.apply(Math, numbers)
// 1

//--------------------------------------------------------------------------- INDEXOF
//27. INDEX, get the first index position of an element in an array or character(s) in a string
var array = ['these', 'are', 'the', 'words', 'within', 'the', 'array']
words = words.indexOf('the')
// 2

//--------------------------------------------------------------------------- LASTINDEXOF
// 28. LASTINDEXOF, get the last index position of an element in a string or an array
var array = ['these', 'are', 'the', 'words', 'within', 'the', 'array']
lastElement = array.lastIndexOf('the')
// 5

//--------------------------------------------------------------------------- TOUPPERCASE
//29. UPPERCASE, convert a string to uppercase
string = "hello"
string = string.toUpperCase();

//--------------------------------------------------------------------------- TOLOWERCASE
// 30. TOLOWERCASE, convert a string to lowercase

string = string.toLowerCase();

//--------------------------------------------------------------------------- REPEAT
// 31. REPEAT, repeat a string
string.repeat(3);

//--------------------------------------------------------------------------- CONCATENATION METHOD
// 32, CONCATENATION METHOD
//a.
var str1 = "Hello ";
var str2 = " concatenation!";
var str3 = str1 + "What a beautiful day to learn Javascript" + str2;
// Hello What a beautiful day to learn Javascript concatenation!

//b.
var str1 = "Hello ";
var str2 = "What a beautiful day to learn Javascript";
var str3 = " concatenation!";

var concat = str1.concat(str2, str3);
// Hello What a beautiful day to learn Javascript concatenation!

//--------------------------------------------------------------------------- TEMPLATE LITERALS
// 33. TEMPLATE LITERALS CONCATENATION
var leftSide = 10;
var rightSide = 20;
var result = `Left side is equal to ${leftSide} and right side is equal to ${rightSide}.`
// Left side is equal to 10 and right side is equal to 20.

//---------------------------------------------------------------------------

var d = {};

['zebra', 'horse'].forEach(function (k) {
    d[k] = 1;
});
console.log(d);
//  { zebra: undefined, horse: undefined }

//---------------------------------------------------------------------------

var country = {
    name: "Croatia",
    population: 4.224,
    sea: true,
    islands: 1000,
    language: "croatian",
    bio: function () {
        console.log(this.name + " is a country with " + this.population + " people");
    }
};
bio();

console.log(d)