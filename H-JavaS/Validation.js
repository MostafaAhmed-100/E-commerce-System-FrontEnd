const contactForm = document.getElementById("ContactForm");
if (contactForm) {
    contactForm.addEventListener("submit", function (e) 
{
        const nameInput = document.getElementById("Contactname");
        const emailInput = document.getElementById("Contactemail");
        const messageInput = document.getElementById("Contactmessage");

        if (nameInput.value.trim() === "" || emailInput.value.trim() === "" || messageInput.value.trim() === "") 
        {
            if (nameInput.value.trim() === "") 
            {
                alert("Please enter your name.");
                nameInput.focus();
            } else if (emailInput.value.trim() === "") 
            {
                alert("Please enter your email.");
                emailInput.focus();
            } else if (messageInput.value.trim() === "") 
            {
                alert("Please enter your message.");
                messageInput.focus();
            }
            e.preventDefault();
        }
    });
}
const loginForm = document.getElementById("LoginForm");
if (loginForm) 
{
    loginForm.addEventListener("submit", function (e) 
    {
        const emailInput = document.getElementById("Loginemail");
        const passwordInput = document.getElementById("Loginpassword");
        if (emailInput.value.trim() === "" || passwordInput.value.trim() === "" || passwordInput.value.trim().length < 11 ||passwordInput.value.trim().length > 22) 
        {
            if (emailInput.value.trim() === "") 
            {
                alert("Please enter your email.");
                emailInput.focus();
            } else if (passwordInput.value.trim() === "" || passwordInput.value.trim().length < 11) 
            {
                alert("Please enter your password (at least 11 characters).");
                passwordInput.focus();
            }
            e.preventDefault();
        }
    });
}
const registerForm = document.getElementById("RegisterForm");
if (registerForm) 
{
    registerForm.addEventListener("submit", function (e) 
    {
        const nameInput = document.getElementById("Registername");
        const emailInput = document.getElementById("Registeremail");
        const passwordInput = document.getElementById("Registerpassword");
        const confirmPasswordInput = document.getElementById("RegisterconfirmPassword");
        if (nameInput.value.trim() === "" || emailInput.value.trim() === "" || 
            passwordInput.value.trim() === "" || passwordInput.value.trim().length < 11 || 
            confirmPasswordInput.value.trim() === "" || passwordInput.value.trim() !== confirmPasswordInput.value.trim() ||passwordInput.value.trim().length > 22) 
        {
            
            if (nameInput.value.trim() === "")
            {
                alert("Please enter your name.");
                nameInput.focus();
            } else if (emailInput.value.trim() === "") 
            {
                alert("Please enter your email.");
                emailInput.focus();
            } else if (passwordInput.value.trim() === "" || passwordInput.value.trim().length < 11) 
            {
                alert("Please enter your password (at least 11 characters).");
                passwordInput.focus();
            } else if (passwordInput.value.trim() !== confirmPasswordInput.value.trim()) 
            {
                alert("Passwords do not match.");
                passwordInput.focus();
            }
            e.preventDefault();
        }
    });
}