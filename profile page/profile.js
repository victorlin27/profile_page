function editprofile(){
    console.log("user");
    user.innerHTML = "Tan Doan"
}

var user = document.querySelector("#mainuser")

console.log(user);

function accept(){
    console.log("yes")
    todd.remove();
    count--;
    countelement.innerHTML = count + " Connection Requests"
    connectioncount++;
    connectioncountelement.innerHTML = connectioncount + " : Your Connections"
}

var todd = document.querySelector("#user1")

console.log(todd)

function decline(){
    console.log("no")
    todd.remove();
    count--;
    countelement.innerHTML = count + " Connection Requests"
}

var todd = document.querySelector("#user1")

function accepts(){
    console.log("yes")
    phil.remove();
    count--;
    countelement.innerHTML = count + " Connection Requests"
    connectioncount++;
    connectioncountelement.innerHTML = connectioncount + " : Your Connections"
}

var phil = document.querySelector(".phil")

console.log(phil)

function declines(){
    phil.remove();
    count--;
    countelement.innerHTML = count + " Connection Requests"
}

var count = 2
var countelement = document.querySelector("#connection-count")

console.log(countelement)

var connectioncount = 67
var connectioncountelement = document.querySelector("#connectioncount")

console.log(connectioncountelement)