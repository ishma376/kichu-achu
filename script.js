function unlock() {
  const password = "16-01-2023"; // ❤️ YOUR SECRET PASSWORD
  const input = document.getElementById("key").value;
  const door = document.getElementById("door");

  if (input === password) {
    door.style.display = "block";

    // small delay for effect
    setTimeout(() => {
      window.location.href = "home.html"; // your HOME page
    }, 1200);

  } else {
    alert("Wrong key 💔 Try again with love");
  }
}
