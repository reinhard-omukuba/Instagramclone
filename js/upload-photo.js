firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      console.log(user.uid);

      document.getElementById("btnPost").onclick = function(){

        var caption  = document.getElementById("caption").value;

        
        // Add a new document in collection "cities"
            firebase.firestore().collection("posts").doc().set({
                postCaption: caption,
                userId: user.uid,
                postImage: "https://images.pexels.com/photos/7237083/pexels-photo-7237083.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            })
            .then(() => {
                console.log("Document successfully written!");
                window.location.href = "index.html";
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });



      }

      


    } else {
      // No user is signed in.

      window.location.href = "login.html";
    }
  });