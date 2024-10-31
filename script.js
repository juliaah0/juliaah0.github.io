
// form.js

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