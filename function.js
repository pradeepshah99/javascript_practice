function add(x,y)
{
    return x + y;
}

// let x = 10;
// let y = 20;

// console.log(x+y)

console.log(add(5,8));

// using the eval function

let x = 4;
let y = 6
let z = 11

console.log(eval("x+y"));
console.log(z);

//using parse float methdd

let data = 3.14

let n = parseFloat(data);
console.log(n);

// decalaring the function

function isEven(number)
{
    return number%2==0 ;

    
}

console.log(isEven(15))
console.log(isEven(14))

// finding the factorial solution

function fact(num)
{
    if(num === 0)
    {
        return 1;

    }
    return num*fact(num-1);
}
let factorial = fact(4);
console.log("the factorial is" + " "+ factorial)

// example of function expression 

const count = function(array)
{
    return array.length;
}

const method = {
    number : [1,2,3,4],
    sum : function()
    {
        return this.number.reduce(function(acc, num){ // reduce method return the single value of array with value.
            return acc + num
        });
    }
}

console.log(count([1,2,3,4,5]));

console.log(method.sum())

