
// Event listener for the "nameButton".
document.getElementById("nameButton").addEventListener("click", function() {
    let userName = prompt("Please enter your name:"); // Ask user for name
    if (userName) {
      document.getElementById("nameDisplay").innerText = "Hello, " + userName + "!";
    }
  });
  
// Event listener for the profile picture.
document.getElementById("profilePic").addEventListener("click", function() {
    this.classList.toggle("enlarged");
  });

// Function to handle the dropdown toggle.
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// This function will close the dropdown if the user clicks outside of the dropdown menu
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
    this.style.color = "blue"; 
  });

// When the mouse moves away, reset the text color to the default
  item.addEventListener("mouseout", function() {
    this.style.color = ""; 
  });
});

// Function to handle form submission and save data to local storage
function submitForm() {
  // Gather form data
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
  document.getElementById("contactForm").reset();
  alert("Form cleared!");
}