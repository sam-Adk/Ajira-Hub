const API_BASE = 'http://localhost:5000/api/users';

if (window.location.pathname.includes("login.html")) {
  const form = document.querySelector("#loginForm");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    try {
      const res = await fetch(`${API_BASE}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        // Save token and user
        localStorage.setItem("ajirahub_token", data.token);
        localStorage.setItem("ajirahub_user", JSON.stringify(data.user));

        // Redirect to appropriate dashboard
        if (data.user.role === "househelp") {
          window.location.href = "dashboard-househelp.html";
        } else {
          window.location.href = "dashboard-employer.html";
        }
      } else {
        alert(data.message || "Login failed.");
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("Something went wrong.");
    }
  });
}

