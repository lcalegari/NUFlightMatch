
class User{
    constructor(first_name, last_name, starthour, endhour, dest, phonenum, loc){
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
const Lisa = new User("Lisa", "Calegari", 3, 5, "Ohare", "2248770742", "North");
Users.push(Lisa);



const addUserForm = document.getElementById('#info-form');

function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const value = Object.fromEntries(data.entries());
    console.log({value});
    const newUser = new User(value.firstName, value.lastname, value.startT, value.endT, value.Destination, value.number, value.PartOnCampus);
    Users.push(newUser);
    console.log(Users);
}
const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);




alert('javascript working');


//Source referenced: https://stackoverflow.com/questions/53819881/html-form-input-into-javascript-array
//SOurce referenced: https://www.learnwithjason.dev/blog/get-form-values-as-json