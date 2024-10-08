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

let navItems = document.querySelectorAll("#navMenu > li > a");

navItems.forEach(function(item) {
  item.addEventListener("mouseover", function() {
    this.style.color = "blue"; 
  });

  item.addEventListener("mouseout", function() {
    this.style.color = ""; 
  });
});
