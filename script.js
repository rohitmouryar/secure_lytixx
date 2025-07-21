document.getElementById('login-form')?.addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('login-email').value.trim();
  const password = document.getElementById('login-password').value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;


  if (!emailRegex.test(email)) {
    alert("Please enter a valid email (e.g., user@securelytix.com)");
    return;
  }

  if (!passwordRegex.test(password)) {
    alert("Password must be at least 8 characters long and contain both letters and numbers.");
    return;
  }

  // Simulated login (use real auth in production)
  alert("Login successful!");
  window.location.href = "dashboard.html";
});
