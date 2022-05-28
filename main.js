
class User{
    constructor(first_name, last_name, starthour, endhour, dest, phonenum, loc, aboutme){
        this.fname = first_name;
        this.lname = last_name;
        this.starthour = starthour;
        this.endhour = endhour;
        this.destination = dest;
        this.phonenum = phonenum;
        this.loc = loc;
        this.aboutme = aboutme;
    }

    getTimeSpan() {
        let st = new Date(this.date + " " + String(this.starthour) + ":00:00").getTime();
        let en = new Date(this.date + " " + String(this.endhour) + ":00:00").getTime();
        return [st, en];
    }
}

const Users = [];
//const Lisa = new User("Lisa", "Calegari", "15:00", "17:00", "Ohare", "-", "North", "hi, this is an example entry");
//Users.push(Lisa);



const addUserForm = document.getElementById('#info-form');

function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const value = Object.fromEntries(data.entries());
    console.log({value});
    if(value.firstName === "" || value.lastname === ""){
        alert("enter a valid first and last name");
        exit;
    }
    if(!(isNaN(value.startT)) || !(isNaN(value.endT))){
        alert("enter valid start and end times");
        exit;
    }
    //TODO: find more reliable check ^^
    if(value.number === "" || (value.number).length != 10){
        alert("enter valid 10 digit phone number, just enter the numbers");
        exit;
    }
    if(value.PartOnCampus === ""){
        alert("enter a valid current location: North or South");
        exit;
    }
    if(!(value.PartOnCampus=== "North" || value.PartOnCampus === "South")){
        alert("enter a valid current location: North or South");
        exit;
    }
    
    const newUser = new User(value.firstName, value.lastname, value.startT, value.endT, value.Destination, value.number, value.PartOnCampus, value.intro);
    Users.push(newUser);
    console.log(Users);
    addToTable();
}
const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);




alert('javascript working');


//Source referenced: https://stackoverflow.com/questions/53819881/html-form-input-into-javascript-array
//SOurce referenced: https://www.learnwithjason.dev/blog/get-form-values-as-json

//Source referenced: https://stackoverflow.com/questions/29335369/display-array-of-objects-in-a-dynamic-table-javascript

//Enter Users Data in Table
function addToTable(){
var html = "<table border='1|1'>";
html+="<tr>";
html+="<th> First Name </th>";
html+="<th> Starting Availability </th>";
html+="<th> Ending Availability </th>";
html+="<th> From </th>";
html+="<th> To </th>";
html+="<th> Bio </th>";
html+="<th> Phone Number! </th>";
for (var i = 0; i < Users.length; i++) {
    html+="<tr>";
    html+="<td>"+Users[i].fname+"</td>";
    html+="<td>"+Users[i].starthour+"</td>";
    html+="<td>"+Users[i].endhour+"</td>";
    html+="<td>"+Users[i].loc+"</td>";
    html+="<td>"+Users[i].destination+"</td>";
    html+="<td>"+Users[i].aboutme+"</td>";
    html+="<td>"+Users[i].phonenum+"</td>";
    html+="</tr>";
}
html+="</table>";
document.getElementById("box").innerHTML = html;
}