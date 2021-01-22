// defining some examples of array methods 

const someArray = [

    {id: 2, name : "pradeep Kumar Sahani"},
    { id: 3, name: "Aditya Kumar Sahani" },
    { id: 4, name: "Shivansh Kumar Sahani" },



]
// this is the find array method
let data = someArray.find(x => x.id ==2)
console.log(data);

// concat method

var arraytable1 = [
    { id: 2, name: "pradeep Kumar Sahani" },
    { id: 3, name: "Aditya Kumar Sahani" },
    { id: 4, name: "Shivansh Kumar Sahani" },

];

var arraytable2 = [
    {college : "BVPIC"},
    { college: "Vidya Mandir" },
    { college: "Thatherwa" },


];

let totatData = arraytable1.concat(arraytable2);

console.log(totatData)

//find Index method 

const newArray = [

    { id: 2, name: "Deepak" },
    { id: 3, name: "Aditya " },
    { id: 4, name: "Shivansh" },

];

let sys = newArray.findIndex(x => x.id===3    )

console.log(sys);


// index of method 

var carArray = ["Jeep", "Sedan", "SUV"];

let check = carArray.indexOf("Jeep");
console.log(check);

// foreach method and very important method

const nameArray = [


    { id: 2, name: "Deepak" },
    { id: 3, name: "Aditya " },
    { id: 4, name: "Shivansh" },
    { id: 5, name: "Pradeep" },
    { id: 6, name: "Krishna" },


]

let fiii = nameArray.forEach(x => console.log(x.id, x.name))

fiii
// fiii.push(7, "Sachin");
// console.log(fiii)

// map function

const numArray = [5,4,7,6,7,6,1,6,];

const test = numArray.map(elements => elements*elements)

console.log(test);

// flat function

const dataArray = [1,[2,5,3],[9,7,3],[10,12,45]];

let test2 = dataArray.flat();

console.log(test2)

// flat map function

const checking = [[1], [2], [3], [4], [5]];

let test3 = checking.flatMap(a => a*a*a);

console.log(test3)
test3.push(99);
console.log(test3)

//filter method 

const takeArray = [
    { id: 1, name: "Akhand" },
    { id: 2, name: "Pradeep" },
    { id: 3, name: "Aditya" },
    { id: 4, name: "Sachin" },

]

let test4 = takeArray.filter(x => x.name==='Pradeep');
console.log(test4)

let test5 = takeArray.forEach(data => console.log(data.id, data.name));

test5;

// javascript events 

// on click events example




