import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function onSubmit(e) {
    e.preventDefault();
    if (password !== confirm) {
      alert("Konfirmasi kata sandi tidak cocok");
      return;
    }

    setLoading(true);
    // simulasi register
    setTimeout(() => {
      setLoading(false);
      alert("Registrasi berhasil, silakan login");
      navigate("/login");
    }, 800);
  }

  return (
    <div className="container" style={{ maxWidth: 480 }}>
      <form className="form card" onSubmit={onSubmit}>
      <h2>REGISTER</h2>
        <label htmlFor="name">Nama</label>
        <input
          id="name"
          type="text"
          className="input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Kata Sandi</label>
        <input
          id="password"
          type="password"
          className="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <label htmlFor="confirm">Konfirmasi Kata Sandi</label>
        <input
          id="confirm"
          type="password"
          className="input"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          required
        />

        <button className="button primary" disabled={loading}>
          {loading ? "Loading..." : "Register"}
        </button>
        <p className="small">
          Sudah punya akun? <Link to="/index.jsx">Login</Link>
        </p>
      </form>
    </div>
  );
}
