// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyAoXeIU-xohsOwn2Kw9PQM_k0PVdeMnrL0",
    authDomain: "project100-9835c.firebaseapp.com",
    databaseURL: "https://project100-9835c-default-rtdb.firebaseio.com",
    projectId: "project100-9835c",
    storageBucket: "project100-9835c.appspot.com",
    messagingSenderId: "505074108293",
    appId: "1:505074108293:web:30e70c9abc143f922fa6ec"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



