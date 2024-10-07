document.getElementById("nameButton").addEventListener("click", function() {
    let userName = prompt("Please enter your name:");
    if (userName) {
      document.getElementById("nameDisplay").innerText = "Hello, " + userName + "!";
    }
  });
  
  document.getElementById("profilePic").addEventListener("click", function() {
    this.classList.toggle("enlarged");
  });
  