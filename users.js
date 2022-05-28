
class User{
    constructor(first_name, last_name,starthour, endhour, dest, phonenum, loc){
        this.fname = first_name;
        this.lname = last_name;
        this.starthour = starthour;
        this.endhour = endhour;
        this.destination = dest;
        this.phonenum = phonenum;
        this.loc = loc;
    }

    getTimeSpan() {
        let st = new Date(this.date + " " + String(this.starthour) + ":00:00").getTime();
        let en = new Date(this.date + " " + String(this.endhour) + ":00:00").getTime();
        return [st, en];
    }
}

const Users = [];
const Lisa = new User("Lisa", 3, 5, "Ohare", "2248770742", "North");
Users.push(Lisa);



const addUserForm = document.getElementById('#info-form');

//let dst = destInput;

/*nameInput.addEventListener('input', updateValue(newname));
function updateValue(e, editing) {
    editing = e.target.value;
}*/


//addUserForm.addEventListener('submit', onSubmit);

function updateusers(){
    console.log(document.getElementById('#fname'));
    var nameInput = document.getElementById('#fname').value;
    var numberInput = document.getElementById('#fnum').value;
    var sTimeInput = document.getElementById('#fst').value;
    var eTimeInput = document.getElementById('#fet').value;
    var aboutMeInput = document.getElementById('#abtme').value;
    var destInput = document.getElementById('#dest').value;
    var LocInput = document.getElementById('#loc').value;
    var lastInput = document.getElementById('#lname').value;
    let newUser = new User(nameInput, lastInput, sTimeInput, eTimeInput, destInput, numberInput, LocInput);
    Users.push(newUser);
    console.log(Users);

}




alert('javascript working');


//Source referenced: https://stackoverflow.com/questions/53819881/html-form-input-into-javascript-array