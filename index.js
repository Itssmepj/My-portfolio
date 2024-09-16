function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    const profilePic = document.getElementById("profile");
  
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  
    if (menu.classList.contains("open")) {
      profilePic.style.marginTop = "170px";
    } else {
      profilePic.style.marginTop = "0";
    }
  }