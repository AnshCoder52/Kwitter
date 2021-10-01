var UserName = localStorage.getItem("name");
document.getElementById("welcome_user").innerHTML = " Welcome " + UserName;

const firebaseConfig = {
      apiKey: "AIzaSyBRwYSBuRIBjyx8bRsdmLUOSFWXiOHSa6w",
      authDomain: "kwitter-748b8.firebaseapp.com",
      databaseURL: "https://kwitter-748b8-default-rtdb.firebaseio.com",
      projectId: "kwitter-748b8",
      storageBucket: "kwitter-748b8.appspot.com",
      messagingSenderId: "117047365859",
      appId: "1:117047365859:web:859157d8ccfc12c10835d6",
      measurementId: "G-DEZ2DSPMQG"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log(Room_names);
var row = "<div id="+Room_names+" onclick = 'redirect(this.id)' class='room_name'> # "+Room_names+" </div> <hr>";
document.getElementById("output").innerHTML += row;


//End code
      });});}
getData();

function redirect(name) {

localStorage.setItem("rn_input", name);
window.location = "kwitter_page.html";

}

function AddRoom() {

var room_name = document.getElementById("rn_input").value;
firebase.database().ref("/").child(room_name).update({
purpose: "Adding new room"


});
localStorage.setItem("rn_input", room_name);
window.location = "kwitter_page.html";
}

function Logout() {

localStorage.removeItem("name");
localStorage.removeItem("rn_input");
window.location = "index.html";
}

