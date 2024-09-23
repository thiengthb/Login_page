const passwordInput = document.querySelector(".login-pannel .password-input");
const passwordDisplay = document.querySelector(".display-btn");

passwordInput.addEventListener("input", function () {
    if (passwordInput.value.length > 0) {
        passwordDisplay.style.display = "block";
    } else {
        passwordDisplay.style.display = "none";
        passwordInput.setAttribute("type", "password");
        passwordDisplay.textContent = "Show";
    }
});

passwordDisplay.addEventListener("click", function () {
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
    this.textContent = type === "password" ? "Show" : "Hide";
    passwordInput.focus();
});

//-----------------------------------------------------

const submitBtn = document.getElementById("submit-btn");
const usernameInput = document.querySelector(".login-pannel .username-input");
const usernameError = document.querySelector(".login-pannel .username-error");
const passwordError = document.querySelector(".login-pannel .password-error");

const resetUsername = document.querySelector('.modal-content .username-input');
const resetError = document.querySelector('.modal-content .username-error');
const resetPass = document.getElementById('resetpass-btn');

function validateUsername(input) {
    const username = input.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[0-9]{10}$/;

    if (username == "") {
        usernameError.textContent =  "Please enter email or phone number.";
        resetError.textContent =  "Please enter email or phone number.";
        return false;
    } 

    if (emailPattern.test(username) || phonePattern.test(username)) {
        return true;
    } 
    else {
        usernameError.textContent = "Please enter a valid email or phone number.";
        resetError.textContent = "Please enter a valid email or phone number.";
        return false;
    }
}

function validatePassword(input) {
    const password = input.value.trim();
    const minLength = 6;

    if (password.length >= minLength) {
        return true;
    } 
    else {
        passwordError.textContent = `Password must be at least ${minLength} characters long.`;
        return false;
    }
}

const mockData = [
    {
        username: "thien@gmail.com",
        password: "123123"
    },
    {
        username: "phat@gmail.com",
        password: "abcxyz"
    },
    {
        username: "chohung@gmail.com",
        password: "chomanager"
    },
    {
        username: "woffy@gmail.com",
        password: "123123"
    },
];

submitBtn.addEventListener("click", function() {
    if (!validateUsername(usernameInput)) {
        usernameError.style.display = "block";
        usernameInput.style.outline = "2px solid rgb(216, 47, 47)";
        usernameInput.style.border = "none";
        return;
    } else {
        usernameError.style.display = "none";
        usernameInput.style.outline = "2px solid rgb(56, 137, 218)"
        usernameInput.style.border = "2px solid rgb(180, 180, 180)";
    }

    if (!validatePassword(passwordInput)) {
        passwordError.style.display = "block";
        passwordInput.style.outline = "2px solid rgb(216, 47, 47)";
        passwordInput.style.border = "none";
        return;
    } else {
        passwordError.style.display = "none";
        passwordInput.style.outline = "2px solid rgb(56, 137, 218)"
        passwordInput.style.border = "2px solid rgb(180, 180, 180)";
    }

    if (mockData.find(user => user.username === usernameInput.value && user.password === passwordInput.value)) {
        window.alert("Login success.");
    } else {
        window.alert("Wrong username or password.")
    }
});


resetPass.addEventListener('click', () => {
    if (!validateUsername(resetUsername)) {
        resetError.style.display = "block";
        resetUsername.style.outline = "2px solid rgb(216, 47, 47)";
        resetUsername.style.border = "none";
        return;
    } else {
        resetError.style.display = "none";
        resetUsername.style.outline = "2px solid rgb(56, 137, 218)"
        resetUsername.style.border = "2px solid rgb(180, 180, 180)";
    }
});

//------------------------------------------------------------------------

const hamburger = document.querySelector('.hamburger');
const hamburgerMenu = document.querySelector('.hamburger-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    hamburgerMenu.classList.toggle('active');
});

//--------------------------------------------------------------------------

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');

    if (isDarkMode) {
        document.querySelector('.navbar-logo img').src = "https://tensoract.io/images/logo-dark.svg";
    } else {
        document.querySelector('.navbar-logo img').src = "https://tensoract.io/images/logo-light.svg";
    }
    
    // Toggle dark mode for other elements
    document.querySelector('.login-page').classList.toggle('dark-mode');
    document.querySelector('.navbar').classList.toggle('dark-mode');
    document.querySelector('.login-pannel').classList.toggle('dark-mode');
    document.querySelector('.darkmode-toggle').classList.toggle('dark-mode');
    document.querySelector('.hamburger').classList.toggle('dark-mode');
    document.querySelector('.hamburger-menu').classList.toggle('dark-mode');
    document.querySelector('.dropdown-menu').classList.toggle('dark-mode');
    document.querySelector('.modal').classList.toggle('dark-mode');
    document.querySelectorAll('input').forEach(input => {
        input.classList.toggle('dark-mode');
    });
    
    // Save preference in localStorage
    localStorage.setItem('darkMode', isDarkMode);
}

const darkModeToggle = document.getElementById("checkbox");

darkModeToggle.addEventListener("change", () => toggleDarkMode());    


//-----------------------------------------------------------

var btn = document.querySelector('.forgot-password');
var modal = document.querySelector('.modal');
var span = document.getElementsByClassName("close")[0];

btn.addEventListener("click", () =>  {
  modal.style.display = "flex";
});

span.addEventListener("click", () => {
  modal.style.display = "none";
})

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//------------------------------------------------------------



