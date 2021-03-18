
document.getElementById("butnSignUp").onclick = function(){

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            // ...

            window.location.href = "profile.html"
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
        });
}