document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const usernameInput = document.getElementById("username");
  const roleSelect = document.getElementById("role");

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = usernameInput.value;
      const role = roleSelect.value;
      localStorage.setItem("currentUser", JSON.stringify({ username, role }));
      window.location.href = role === "admin" ? "admin.html" : "dashboard.html";
    });
  }

  const userList = document.getElementById("userList") || document.getElementById("adminUserList");
  if (userList) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    userList.innerHTML = users.map((user, index) => \`
      <div class="bg-white p-4 rounded shadow">
        <h2 class="font-bold text-xl">\${user.username}</h2>
        <p>Role: \${user.role}</p>
        \${userList.id === "adminUserList" ? '<button onclick="deleteUser(' + index + ')" class="mt-2 bg-red-500 text-white px-2 py-1 rounded">Delete</button>' : ''}
      </div>
    \`).join('');
  }
});

function addDummyUser() {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  users.push({ username: "HabboUser" + (users.length + 1), role: "staff" });
  localStorage.setItem("users", JSON.stringify(users));
  location.reload();
}

function deleteUser(index) {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  users.splice(index, 1);
  localStorage.setItem("users", JSON.stringify(users));
  location.reload();
}