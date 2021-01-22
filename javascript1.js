// introduction to the javascript. 

// example of javascript. 

function data()
{
    document.getElementById("demo").innerHTML = "Hello Pradeep Kumar Sahani"
}

function bulbOff()
{
    document.getElementById("myImage").src = 'image/pic_bulboff.gif';
}

function bulbOn() {
    document.getElementById("myImage").src = 'image/pic_bulbon.gif';
}

// function calling 

function test()
{
    document.getElementById('demo2').innerHTML = "Hello Pradeep";
    document.getElementById('demo1').innerHTML = "Hello Priti";

}
// learning events
function hello() {
    var name = window.prompt('Please enter your name');
    var age = window.prompt('Please enter your age');

    alert("Hi"+ ""+name+""+"How are you today" +"your age is "+" "+ age);

}



