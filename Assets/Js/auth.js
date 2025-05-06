
// auth.js

// Signup function
function signup(username, password) {
    if (!username || !password) return alert("Please enter all fields.");
    let users = JSON.parse(localStorage.getItem("users") || "[]");

    if (users.find(u => u.username === username)) {
        return alert("User already exists.");
    }

    users.push({ username, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Signup successful! Please login.");
    window.location.href = "login.html";
}

// Login function
function login(username, password) {
    let users = JSON.parse(localStorage.getItem("users") || "[]");
    let user = users.find(u => u.username === username && u.password === password);

    if (user) {
        localStorage.setItem("currentUser", JSON.stringify(user));
        alert("Login successful!");
        window.location.href = "index.html";
    } else {
        alert("Invalid credentials.");
    }
}

// Logout
function logout() {
    localStorage.removeItem("currentUser");
    alert("Logged out!");
    window.location.href = "login.html";
}
