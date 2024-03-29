import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import api from "../../services/api";
import "./styles.css";
import heroesImg from "../../assets/heroes.png";
import logoImg from "../../assets/logo.svg";

export default function Logon() {
  const [id, setId] = useState("");
  const history = useHistory();

  useEffect(() => {
    localStorage.getItem("ongId")
      ? history.push("/profile")
      : console.log("Não conectado");
  }, [history]);

  async function handleLogin(event) {
    event.preventDefault();
    try {
      const res = await api.post("sessions", { id });

      localStorage.setItem("ongId", id);
      localStorage.setItem("ongName", res.data.name);

      console.log(res.data.name);
      history.push("/profile");
    } catch (err) {
      alert("Ops, algo deu errado, tente novamente");
      console.log(err);
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero" />
        <form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>
          <input
            placeholder="sua ID"
            value={id}
            onChange={e => setId(e.target.value)}
          />
          <button className="button" type="submit">
            Entrar
          </button>
          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#e02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={heroesImg} alt="Heroes" />
    </div>
  );
}
