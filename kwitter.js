function  AddUser() {
NS = document.getElementById("text_input").value;
localStorage.setItem("name", NS);
window.location = "kwitter_room.html";
}