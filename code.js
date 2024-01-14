function downloadCV() {
  // Replace "path/to/your-cv-file.jpg" with the actual path to your image file
  var cvFilePath = "C:\\Users\\zl1on\\OneDrive\\Desktop\\persone profile\\CVNN.jpg";

  var link = document.createElement("a");
  link.href = cvFilePath;
  link.download = "CVNN.jpg"; // Set the desired name for the downloaded file
  link.click();
}




// script.js

function showPhoneNumber() {
    // Get the element with the phone number
    var phoneNumberElement = document.getElementById("+964 7511209291");
  
    // Toggle the display property to show/hide the phone number
    if (phoneNumberElement.style.display === "none") {
      phoneNumberElement.style.display = "block";
    } else {
      phoneNumberElement.style.display = "none";
    }
  }
  