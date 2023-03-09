import Loading from './loading'
import React from "react";
import { Link } from "react-router-dom";
import { useStates } from "../States";
const FormSignup = () => {
  const {
    handleSubmit,
    email,
    setEmail,
    password,
    setPassword,
    name,
    setName,
    pnumber,
    setPnumber,
    photoURL,
    setPhotoURL,
    loading
  } = useStates();
  return (
    <div className="form">
      {loading&& <Loading/>}
      <h1>Sign Up</h1>
      <h2>hustle up!</h2>
      <h3>create your account </h3>
      <div className="form-inputs">
        <input
          type="text"
          className="form-input"
          placeholder="FullName"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-inputs">
        <input
          type="email"
          className="form-input"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-inputs">
        <input
          id="Password"
          type="password"
          className="form-input"
          placeholder="Password"
          minLength={8}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="form-inputs">
        <input
          type="number"
          className="form-input"
          placeholder="MobileNo"
          maxLength={10}
          minLength={10}
          value={pnumber}
          onChange={(e) => setPnumber(e.target.value)}
          required
        />
      </div>
      <div className="form-inputs">
        <input
          type="text"
          className="form-input"
          placeholder="Photo URL"
          value={photoURL}
          onChange={(e) => setPhotoURL(e.target.value)}
        />
      </div>
      <button
        className="form-input-button"
        type="submit"
        onClick={handleSubmit}
      >
        Sign Up
      </button>

      <span className="form-inputs-login">
        Alreadly have an account? Login <Link to="/login">here</Link>
      </span>
    </div>
  );
};
export default FormSignup;
