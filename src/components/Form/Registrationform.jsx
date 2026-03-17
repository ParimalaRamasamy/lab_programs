import React, { useState } from "react";

export default function RegistrationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  function handleForm() {
    if (!name.trim()) {
      alert("Fill the name");
      return;
    }

    if (!email.trim()) {
      alert("Fill the email");
      return;
    }

    if (!password.trim()) {
      alert("Fill the password");
      return;
    }

    setSubmittedData({ name, email, password });

    setName("");
    setEmail("");
    setPassword("");
  }

  return (
    <div>
      <h2>Registration Form</h2>

      <div>
        <label>Name</label><br />
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <br />

      <div>
        <label>Email</label><br />
        <input
          type="text"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <br />

      <div>
        <label>Password</label><br />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <br />

      <button onClick={handleForm}>Submit</button>

      {submittedData && (
        <div>
          <h3>Submitted Data</h3>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
          <p>Password: {submittedData.password}</p>
        </div>
      )}
    </div>
  );
}
