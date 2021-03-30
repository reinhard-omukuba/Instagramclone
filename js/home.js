firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      console.log(user.uid)




      firebase.firestore().collection("users").get().then((querySnapshot) => {

        var content = '';

        querySnapshot.forEach((doc) => {

          var theUserName = doc.data().nameValue;


         content +=  '<img src="images/suhring_rounded.png" class="recommendedProfile" alt="">'

         content +=   '<div class="centreFollow">'
         content +=     '<div>'
         content +=         '<p>' + theUserName +'</p>'
         content +=         '<p>Suggested for you</p>'
         content +=     '</div>'
              
         content +=      '<p id="followBtn">Follow</p>'
         content +=  '</div>'





        });

        $('#latestUsers').append(content);

      });



      //pulling data from database
      firebase.firestore().collection("posts").get().then((querySnapshot) => {

        var content = '';
        
        querySnapshot.forEach((doc) => {

            var theCaption = doc.data().postCaption;
            var theImage = doc.data().postImage;

           content += '<div class="thePost">';
           content +=     '<!-- top Bar -->';
           content +=     '<div class="topBar">';
           content +=         '<div class="topProfile">';
           content +=            '<img src="images/suhring_rounded.png" class="profileIm" alt="">';
           content +=            '<div>';
           content +=                '<h3>Sample Name</h3>';
           content +=                '<p>25th March</p>';
           content +=             '</div>';
           content +=         '</div>'; 
           content +=        '<img src="images/more_vert-black-18dp (1).svg" alt="">';
           content +=    '</div>';
           content +=     '<img src="' +theImage + '" class="postImage" alt="">';
           content +=    '<img src="images/favorite-24px (1).svg" alt="">';
           content +=    '<p>' + theCaption + '</p>';
           content += '</div>';
        
        });

        $('#posts').append(content);

    });
    



    } else {
      // No user is signed in.
      window.location.href = "login.html";
    }
  });