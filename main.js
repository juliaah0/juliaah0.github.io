// Event listener for the "nameButton" to prompt for user name and display it
document.getElementById("nameButton").addEventListener("click", function() {
  let userName = prompt("Please enter your name:"); // Ask user for name
  if (userName) {
      document.getElementById("nameDisplay").innerText = "Hello, " + userName + "!";
  }
});

// Event listener for the profile picture to toggle enlargement
document.getElementById("profilePic").addEventListener("click", function() {
  this.classList.toggle("enlarged");
});

// Function to handle dropdown menu toggle
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// This function will close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
          }
      }
  }
};

// Query all navigation menu items within the "#navMenu" and store them in the "navItems" variable
let navItems = document.querySelectorAll("#navMenu > li > a");

// Loop through each navigation item to add hover effects
navItems.forEach(function(item) {
  item.addEventListener("mouseover", function() {
      this.style.color = "blue"; // Change color on hover
  });

  // When the mouse moves away, reset the text color to the default
  item.addEventListener("mouseout", function() {
      this.style.color = ""; // Reset color on mouse out
  });
});

// Function to enlarge text on the entire page
function enlargeText() {
  document.body.classList.add("large-text"); 
}

// Function to reset text size on the entire page
function resetText() {
  document.body.classList.remove("large-text"); 
}

// Function to enlarge text on the entire page (separate implementation)
function enlargeText() {
  document.body.style.fontSize = "1.25em"; // Increase font size
}

// Function to reset text size on the entire page (separate implementation)
function resetText() {
  document.body.style.fontSize = ""; // Reset to default size
}

// Function to toggle black-and-white mode for all images
function toggleBlackAndWhite() {
  document.body.classList.toggle("black-and-white");
}

// Function to show alt text for a specific image
function showAltText(imageId) {
  const image = document.getElementById(imageId);
  alert(image.alt);
}

// Function to submit form data to local storage
function submitForm() {
  const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      jobTitle: document.querySelector('input[name="jobTitle"]:checked')?.value || '',
      portfolioRole: document.querySelector('input[name="portfolioRole"]:checked')?.value || '',
      designPreference: document.querySelector('input[name="designPreference"]:checked')?.value || '',
      comments: document.getElementById("comments").value
  };

  // Save formData to local storage
  localStorage.setItem("contactFormData", JSON.stringify(formData));
  alert("Form data saved!");
}

// Function to clear the form fields
function clearForm() {
  document.getElementById("contactForm").reset(); // Reset form fields
  alert("Form cleared!");
}

