
//initialize firebase 

var config = {
  apiKey: "AIzaSyDL_vY1saUSaWxhqSpYFsJvy-zz5Bbu8pg",
  authDomain: "train-time-4d0e3.firebaseapp.com",
  databaseURL: "https://train-time-4d0e3.firebaseio.com",
  projectId: "train-time-4d0e3",
  storageBucket: "train-time-4d0e3.appspot.com",
  messagingSenderId: "567306161894"
};
firebase.initializeApp(config);
  
  var database = firebase.database();

  //name the var
  var name = "";
  var destination = "";
  var time= "";
  var frequency = "";
  var minAway = "";
  
  //this makes an on click function for when you click it
  $("#add-train").on("click", function(event) {
  //sets it back to default right?
    event.preventDefault();

     

  //this is from the example of the employee tracker what i think it does it reset the time
  //its the data that firebase pulls from database?
   var name = $("#train-input").val().trim();
   var destination = $("#destination-input").val().trim();
   var time = $("#time-input").val().trim();
   var frequency = $("#frequency-input").val().trim();
  
       // Code for the push
       dataRef.ref().push({
        trainName: name,
        trainDestination: destination,
        trainTime: time,
        trainFrequency: frequency,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
      });
    });
  
    // Firebase watcher + initial loader HINT: This code behaves similarly to .on("value")
    dataRef.ref().on("child_added", function(childSnapshot) {
      
      // Log everything that's coming out of snapshot Q: why doesnt it say trainTime/trainDestination
      console.log(childSnapshot.val().name);
      console.log(childSnapshot.val().destination);
      console.log(childSnapshot).val().time;
      console.log(childSnapshot).val().frequency;
      var sv = snapshot.val();

     
    // var tFrequency = frequency;
    var frequency = {};
    array.forEach(
      function(value) { frequency[value] = 0; }
    );
    
    
    //i googled how to make a frequency timer and i got this code 
    //so i tried it.

   $('#btn').click(function () {

    var now = moment();
    var later = moment().minutes(1440).seconds(00);


    var frequency = moment().hours(10).minutes(00).seconds();
    var nextArrival = moment().hours(15).minutes(00).seconds(00);
    var minAway =moment().hours().minutes(20).seconds(00);

    
    // var firstTime = time;
  
    // var firstTimeConverted = moment(firstTime, "hh:mm").subtract(1, "years");
    // console.log(firstTimeConverted);
  
    // var currentTime = moment();
    // console.log("current time: " + currentTime)
  
  
    // var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    // console.log("Difference in time: " + diffTime);
  

// full list of items to the well
    $("#train-list").append("<tr><td>" + childSnapshot.val().name + 
            "</td><td class='train-destination'> " + snapshot.val().trainDestination + 
            "</td><td class='train-frequency'> " + snapshot.val().trainFrequency + 
            "</td><td>" + snapshot.val().trainTime+
            "</td><td>" + snapshot.val().minAway
      ); 
  //problems here
     (function(errorObject) {
        //console.log("Errors handled: " + errorObject.code);
  });
  
    dataRef.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {
      // Change the HTML to reflect
      $("#name-display").text(snapshot.val().name);
      $("#destination-display").text(snapshot.val().destination);
      $("#time-display").text(snapshot.val().time);
      $("#frequency-display").text(snapshot.val().frequency);
    };