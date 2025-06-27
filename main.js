document.addEventListener("DOMContentLoaded", () => {
  const user = JSON.parse(localStorage.getItem("ajirahub_user"));
  if (user) {
    document.getElementById("profile-pic").src = user.profilePic || "default.jpg";
    document.getElementById("user-bio").textContent = user.bio || "No bio added";
  }

  document.getElementById("updateProfileForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    formData.append("id", user._id);

    const res = await fetch("http://localhost:5000/api/users/update-profile", {
      method: "POST",
      body: formData
    });

    const data = await res.json();
    if (res.ok) {
      localStorage.setItem("ajirahub_user", JSON.stringify(data.user));
      alert("Profile updated!");
      location.reload();
    } else {
      alert("Failed to update.");
    }
  });
});
