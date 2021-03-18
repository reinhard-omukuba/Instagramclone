


document.getElementById("butnSignUp").onclick = function(){

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var userName = document.getElementById("userName").value;
    var phoneNmber = document.getElementById("phoneNmber").value;


    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      // ...

            firebase.firestore().collection("users").doc().set({

                nameValue: userName,
                phoneValue: phoneNmber,
                userId: user.uid

            }).then((docRef) => {

                
                  
            });
      
            window.location.href = "profile.html";
      
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });



}