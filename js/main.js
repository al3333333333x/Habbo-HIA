document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const usernameInput = document.getElementById("username");
  const roleSelect = document.getElementById("role");

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = usernameInput.value.trim();
      const role = roleSelect.value;
      localStorage.setItem("currentUser", JSON.stringify({ username, role }));
      window.location.href = role === "admin" ? "admin.html" : "dashboard.html";
    });
  }

  const userListEl = document.getElementById("userList") || document.getElementById("adminUserList");

  if (userListEl) {
    db.collection("users").onSnapshot(snapshot => {
      userListEl.innerHTML = "";
      snapshot.forEach(doc => {
        const user = doc.data();
        const div = document.createElement("div");
        div.className = "bg-white p-4 rounded shadow";
        div.innerHTML = `
          <h2 class="font-bold text-xl">${user.username}</h2>
          <p>Role: ${user.role}</p>
          ${userListEl.id === "adminUserList" ? '<button onclick="deleteUser(\'' + doc.id + '\')" class="mt-2 bg-red-500 text-white px-2 py-1 rounded">Delete</button>' : ''}
        `;
        userListEl.appendChild(div);
      });
    });
  }
});

function addDummyUser() {
  const username = "HabboUser_" + Math.floor(Math.random() * 10000);
  db.collection("users").add({ username: username, role: "staff" });
}

function deleteUser(docId) {
  db.collection("users").doc(docId).delete();
}