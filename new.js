const firebaseConfig = {
    apiKey: "AIzaSyBNa0bZizwmcFD8McERVb0rShytiId2pfE",
    authDomain: "sanjeev-kiryana-store-ea049.firebaseapp.com",
    databaseURL: "https://sanjeev-kiryana-store-ea049-default-rtdb.firebaseio.com",
    projectId: "sanjeev-kiryana-store-ea049",
    storageBucket: "sanjeev-kiryana-store-ea049.appspot.com",
    messagingSenderId: "476385887371",
    appId: "1:476385887371:web:5c698130806afc4437c08e"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var PhoneNo = getElementVal("PhoneNo");
    var Address = getElementVal("Address");
    var msgContent = getElementVal("msgContent");
    var date = new Date(); // Get the current date and time
  
    saveMessages(name, date, PhoneNo, Address, msgContent);
  
    // Enable alert
    document.querySelector(".alert").style.display = "block";
  
    // Remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    // Reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, date, PhoneNo, Address, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      date: date.toString(), // Convert the date to a string before saving
      PhoneNo: PhoneNo,
      Address: Address,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
  