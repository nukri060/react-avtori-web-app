import { useState, useEffect } from "react";

export function Login() {
  const [formsData, setFormsData] = useState({
    email: "",
    password: "",
  });

  const [passwordValidations, setPasswordValidations] = useState({
    letter: false,
    capital: false,
    number: false,
    length: false,
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [loginMessage, setLoginMessage] = useState("");

  useEffect(() => {
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formsData.email);
    const passwordValid = Object.values(passwordValidations).every(Boolean);
    setIsFormValid(emailValid && passwordValid);
  }, [formsData, passwordValidations]);

  function handleSubmit(event) {
    event.preventDefault();
    if (!isFormValid) return;

    setLoginMessage("Logging in...");
    setTimeout(() => {
      setLoginMessage("Login successful");
    }, 1000);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormsData((prevData) => ({ ...prevData, [name]: value }));

    if (name === "password") {
      const validations = {
        letter: /[a-z]/.test(value),
        capital: /[A-Z]/.test(value),
        number: /[0-9]/.test(value),
        length: value.length >= 8,
      };
      setPasswordValidations(validations);
    }
  }

  return (
    <div className="max-w-md mx-auto p-5">
      <form
        className="text-black text-left p-10 border-2 border-blue-500 rounded-lg shadow-md"
        onSubmit={handleSubmit}>
        <div className="input-field mb-5">
          <label htmlFor="email-field" className="block mb-1 font-semibold">
            Email:
          </label>
          <input
            type="email"
            id="email-field"
            name="email"
            className="w-full p-2 border-2 border-blue-500 rounded"
            value={formsData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-field mb-2">
          <label htmlFor="password-field" className="block mb-1 font-semibold">
            Password:
          </label>
          <input
            type="password"
            id="password-field"
            name="password"
            className="w-full p-2 border-2 border-blue-500 rounded"
            value={formsData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div id="message" className="mb-4 text-sm">
          <p className={passwordValidations.letter ? "text-green-600" : "text-red-600"}>
            • At least one lowercase letter
          </p>
          <p className={passwordValidations.capital ? "text-green-600" : "text-red-600"}>
            • At least one uppercase letter
          </p>
          <p className={passwordValidations.number ? "text-green-600" : "text-red-600"}>
            • At least one number
          </p>
          <p className={passwordValidations.length ? "text-green-600" : "text-red-600"}>
            • Minimum 8 characters
          </p>
        </div>

        <button
          type="submit"
          disabled={!isFormValid}
          className={`w-full p-2 rounded text-white font-semibold ${
            isFormValid ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-400 cursor-not-allowed"
          }`}>
          Login
        </button>

        <p className="mt-3 text-gray-600 text-sm">Forgot Password?</p>

        {loginMessage && <p className="mt-3 text-green-600 font-semibold">{loginMessage}</p>}
      </form>
    </div>
  );
}
