//YOUR FIREBASE LINKS

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);

name = message_data["name"];
message = message_data["message"];
like = message_data["like"];

name_tag = "<h4>"+ name +"<img src = 'tick.png' class = 'user_tick'> </h4>";
message_tag = "<h4>"+ message +"</h4>";
like_tag = "<button class = 'btn btn-warning' id = "+ firebase_message_id +" onclick = 'UpdateLikes(this.id)'>";
spantag = "<span class='glyphicon glyphicon-thumbs-up'></span> Like: "+ like +"</button>";

row = name_tag + message_tag + like_tag + spantag;

document.getElementById('output').innerHTML += row;

//score ++ | score = score +1 |score + = 1|

//End code
      } });  }); }
getData();

function Logout() {

localStorage.removeItem("name");
localStorage.removeItem("rn_input");
window. location = "index.html";

}

UserName = localStorage.getItem("name");

function Send() {

msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({

name: UserName,
message: msg,
like: 0

});

document.getElementById("msg").value = " ";



}

function UpdateLikes(message_id) {

button_id = message_id;
likes = document.getElementById(button_id).value;
updatedlikes = Number(likes) +1;
console.log(updatedlikes);
firebase.database().ref(room_name).child(message_id).update({
      like: updatedlikes
      
      
      });
}