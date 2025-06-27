document.addEventListener("DOMContentLoaded", () => {
  const user = JSON.parse(localStorage.getItem("ajirahub_user"));
  if (!user) {
    alert("Please login first");
    window.location.href = "login.html";
    return;
  }

  const form = document.querySelector("#profileForm");
  const preview = document.querySelector("#preview");
  const bioText = document.querySelector("#bioText");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    formData.append("id", user._id);

    try {
      const res = await fetch("http://localhost:5000/api/users/update-profile", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (res.ok) {
        alert("Profile updated!");

        // Update display
        if (data.user.profilePic) {
          preview.src = `http://localhost:5000${data.user.profilePic}`;
        }
        bioText.textContent = data.user.bio;

        // Update localStorage
        localStorage.setItem("ajirahub_user", JSON.stringify(data.user));
      } else {
        alert(data.message || "Update failed.");
      }
    } catch (err) {
      console.error("Update error:", err);
      alert("Something went wrong.");
    }
  });

  // Preload existing profile (optional)
  if (user.profilePic) {
    preview.src = `http://localhost:5000${user.profilePic}`;
  }
  if (user.bio) {
    bioText.textContent = user.bio;
    document.querySelector("#bio").value = user.bio;
  }
});
