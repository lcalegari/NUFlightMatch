//const { toEditorSettings } = require("typescript");

alert('Hello World, this is Lisa messing with javascript');

//var, let, const
//^^ don't use var, it is global
//

let age = 30;
age = 31;


function User(name, starthour, endhour, date, dest, phonenum, loc){
    this.name = name;
    this.starthour = starthour;
    this.endhour = endhour;
    this.date = date;
    this.destination = dest;
    this.phonenum = phonenum;
    this.loc = loc;
}

User.prototype.getTimeSpan = function() {
    let st = new Date(this.date + " " + String(this.starthour) + ":00:00").getTime();
    let en = new Date(this.date + " " + String(this.endhour) + ":00:00").getTime();
    return [st, en];
}

//^^ can put as a class as well

const Lisa = new User("Lisa", 3, 5, '05/28/2022', "Ohare", "2248770742");

alert(`Date is ${Lisa.getTimeSpan()}`);

alert(`Hello my name is ${Lisa.name} and my destination is ${Lisa.destination}`);

//ARRAYS
//const numbers = new Array()
//const fruits = ['apples', 'oranges', 'pears'];
//fruits[3] = 'grapes';
//fruits.push('mangos');
//fruits.pop();
//Array.isArray(fruits); <- check if is an array
//fruits.indexOf('oranges') <- gets index of value

const Users = [
    {
        "name": Lisa.name,
        "starttime": Lisa.starthour,
        "endtime": Lisa.endhour,
        "destination": Lisa.destination,
        "phonenumber": Lisa.phonenum,
        "location": Lisa.loc
    } //,

    //{

   // },

   //{

   // }

];

alert(`name is ${Users[0].name}`);
//but reformat this ^^ into JSON

//for of loop
//for(let todo of todos){
//    todo.ids
//}

//also have foreach:
Users.forEach(function(todo){
    return;
});

//if(x === 10) <- 3 equals?

let x = 4;
const color = x > 10 ? 'red' : 'blue'; 
//^^ if-then in declaration


//switch(color) {
//    case 'red':
        //break;
//    case 'blue':
        //break;
//}

//also can do
let num1 = 2;
 const addNums = num1 => num1 + 5; 



 //class User {
 //    constructor(put in function above)
 //}

 //HTML notes
//window.alert() = alert()

//Single element selectors
//const form = document.getElementById('info-form');
//const alt = document.querySelector('info-form');
//Multiple element selectors
//document.querySelectorAll('.item');
//getElementsByClassName('item');
//getElementsByTagName('li');
//const ul = document.querySelector('.items');
//ul.remove();
//ul.firstElementChild.textContent = 'Hello';
//ul.children[1].innerText = 'Brad';
//ul.lastElementChild.innerHTML = '<h1>Hello</h1>';
//const btn = document.querySelector('.btn');
//btn.style.background = 'red';
//const color2 = 'purple';
const btn = document.querySelector('.btn');

function updateusers() {
    console.log("Button was clicked!")
    

}
btn.addEventListener('click', updateusers());