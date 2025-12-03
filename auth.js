// auth.js 

document.addEventListener("DOMContentLoaded", () => {
  const toggleBtns = document.querySelectorAll(".auth-toggle-btn");
  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");
  const title = document.getElementById("auth-title");
  const sub = document.getElementById("auth-sub");

  if (!toggleBtns.length || !loginForm || !registerForm) return;

  toggleBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const mode = btn.dataset.mode;

      toggleBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      if (mode === "login") {
        loginForm.classList.add("active");
        registerForm.classList.remove("active");
        title.textContent = "Login";
        sub.textContent = "Enter your email and password.";
      } else {
        loginForm.classList.remove("active");
        registerForm.classList.add("active");
        title.textContent = "Register";
        sub.textContent = "Enter your information below to register.";
      }
    });
  });
});
