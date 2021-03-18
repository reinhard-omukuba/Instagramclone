firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.

      var myUserId = String(user.uid);

      console.log(myUserId);

    } else {
      // No user is signed in.

      console.log("No user is signed in");

      window.location.href = "login.html"
    }
  });


  document.getElementById("signOut").onclick = function(){

    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        window.location.href = "login.html";

      }).catch((error) => {
        // An error happened.
      });

  }