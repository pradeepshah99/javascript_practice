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

// method declaration 

const testing = {
    items : [],
    add(...items)
    {
        this.items.push(...items)
    },
    get(index)
    {
        return this.items[index];
    }

}
testing.add("javascript","java","Kotlin", "Php");

console.log(testing.get(1));
// in above program we define how to push the data in emply array and how to get the added data index.

// object literals shorthand method defination

// Using the arrow => function in the program

const dataValue = (num) =>
{
    if(num < 0)
    {
        return -(num)+(num);
    }
    else
    {
        return num;
    }
}


console.log(dataValue(-15))


// using function generator 

function* indexGenerator() // itializing the function generator
{
    var index = 0;// initializing the index variable
    while(true)
    {
        yield index++ // incrementing the index

    }
}
const g = indexGenerator(); // assigning function to the variable
console.log(g.next().value); // calling the function
console.log(g.next().value);
