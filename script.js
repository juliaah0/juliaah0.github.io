document.getElementById("nameButton").addEventListener("click", function() {
    let userName = prompt("Please enter your name:");
    if (userName) {
      document.getElementById("nameDisplay").innerText = "Hello, " + userName + "!";
    }
  });
  
document.getElementById("profilePic").addEventListener("click", function() {
    this.classList.toggle("enlarged");
  });


  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
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
}
