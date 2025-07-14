import { useState } from "react";
import "./FormValidation.css";          // ⬅️ import the stylesheet

export default function FormValidation() {
  const [name, setName]       = useState("");
  const [email, setEmail]     = useState("");
  const [rollno, setRollNo]   = useState("");
  const [address, setAddress] = useState("");
  const [mNumber, setMNumber] = useState("");
  const [city, setCity]       = useState("");
  const [error, setError]     = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();              // stop page refresh

    // ── validation ─────────────────────────────────
    if (!name || !email || !rollno || !address || !mNumber || !city) {
      return setError("All fields are required");
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return setError("Invalid email format");
    }

    if (!/^\d+$/.test(rollno)) {
      return setError("Roll‑number must be numeric");
    }
    if (rollno.length < 4 || rollno.length > 6) {
      return setError("Roll‑number must be 4 – 6 digits long");
    }

    if (!/^\d{10}$/.test(mNumber)) {
      return setError("Mobile number must be exactly 10 digits");
    }
    // ──────────────────────────────────────────────

    setError("");                       // clear any old errors
    alert("Data submitted successfully!");

    console.table({ name, email, rollno, address, mNumber, city });
  };

  return (
    <form className="form-container" onSubmit={handleSubmit} noValidate>
      <h2 className="form-heading">Student Registration</h2>

      <div className="form-control">
        <label>Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </div>

      <div className="form-control">
        <label>Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
      </div>

      <div className="form-control">
        <label>Roll&nbsp;No.</label>
        <input value={rollno} onChange={(e) => setRollNo(e.target.value)} />
      </div>

      <div className="form-control">
        <label>Address</label>
        <input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label>Mobile&nbsp;Number</label>
        <input
          value={mNumber}
          onChange={(e) => setMNumber(e.target.value)}
          placeholder="10 digits"
        />
      </div>

      <div className="form-control">
        <label>City</label>
        <input value={city} onChange={(e) => setCity(e.target.value)} />
      </div>

      {error && <p className="error-message">{error}</p>}

      <button className="submit-btn" type="submit">
        Submit
      </button>
    </form>
  );
}
