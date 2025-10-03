// Access Style Link
let styleLink = document.querySelector("#styleLink");

// Access nav ( github logo )
let githubLogo = document.querySelector("#githubLogo");

// Access From where to change ( Nav Logo )
let changeTheme = document.querySelector("#changeTheme");

let isDarkTheme = true;

changeTheme.addEventListener("mouseover", () => {
  if (isDarkTheme) {
    styleLink.href = "Light_Theme.css";
    githubLogo.src = "/Assets/github-mark-dark.svg";
  } else {
    styleLink.href = "Dark_Theme.css";
    githubLogo.src = "/Assets/github-mark-white.svg";
  }

  // flip => true or false
  isDarkTheme = !isDarkTheme;
});
