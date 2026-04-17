function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if (user === "sneha" && pass === "1234") {
        alert("Login Successful ✅");
        window.location.href = "admin.html";
    } else {
        alert("Invalid Credentials ❌ Try Again");
    }
}