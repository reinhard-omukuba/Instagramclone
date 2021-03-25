firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.

      var myUserId = String(user.uid);
      console.log(myUserId);


      firebase.firestore().collection("users").where("userId", "==",myUserId ).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots

          

            console.log(doc.id, " => ", doc.data());

            var userName = doc.data().nameValue;



            document.getElementById("userName").innerHTML = userName;





        });
    });

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