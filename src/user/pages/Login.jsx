import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const role = localStorage.getItem("role");

if (role === "ADMIN") {
  navigate("/admin/dashboard");
}

if (role === "USER") {
  navigate("/");
}

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Admin
    if (
      email === "longkhonba@gmail.com" &&
      password === "1234"
    ) {
      localStorage.setItem("role", "ADMIN");
      localStorage.setItem("email", email);

      navigate("/admin/dashboard");
      return;
    }

    // User
    if (
      email === "longkhonba4@gmail.com" &&
      password === "1234"
    ) {
      localStorage.setItem("role", "USER");
      localStorage.setItem("email", email);

      navigate("/");
      return;
    }

    alert("Email hoặc mật khẩu không đúng!");
  };

  return (
    <div className="login-page">

      <h2>Login</h2>

      <form onSubmit={handleLogin}>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">
          Login
        </button>

        <button
  onClick={() => {
    localStorage.clear();
    window.location.href = "/login";
  }}
>
  Logout
</button>

      </form>

    </div>
  );
}

export default Login;