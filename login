<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Login – Snowwyn HIA</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script type="module">
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
    import {
      getAuth,
      signInWithEmailAndPassword
    } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

    const firebaseConfig = {
      apiKey: "AIzaSyCK3JRdttpI9lMzCyIx443Poi5PCrPu2yM",
      authDomain: "snowwyn-habbo-hia.firebaseapp.com",
      projectId: "snowwyn-habbo-hia",
      storageBucket: "snowwyn-habbo-hia.firebasestorage.app",
      messagingSenderId: "863463656284",
      appId: "1:863463656284:web:da5e5506393f878a5ccf99",
      measurementId: "G-Q5F7GLEVEM"
    };

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const form = document.getElementById("login-form");

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const email = form.email.value.trim();
      const password = form.password.value;

      if (!email || !password) {
        alert("Both fields are required.");
        return;
      }

      try {
        await signInWithEmailAndPassword(auth, email, password);
        window.location.href = "dashboard.html";
      } catch (error) {
        alert("Login failed: " + error.message);
      }
    });
  </script>
</head>
<body class="bg-gray-900 text-white flex items-center justify-center min-h-screen">
  <div class="bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-md">
    <h1 class="text-3xl font-bold mb-6 text-center">Login</h1>
    <form id="login-form" class="space-y-4">
      <div>
        <label class="block mb-1 text-sm">Email</label>
        <input name="email" type="email" class="w-full p-2 rounded bg-gray-700 text-white" required />
      </div>
      <div>
        <label class="block mb-1 text-sm">Password</label>
        <input name="password" type="password" class="w-full p-2 rounded bg-gray-700 text-white" required />
      </div>
      <button type="submit" class="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded mt-4">
        Log In
      </button>
    </form>
    <p class="mt-4 text-sm text-center text-gray-400">
      Don't have an account?
      <a href="register.html" class="text-blue-400 underline">Register here</a>
    </p>
  </div>
</body>
</html>
