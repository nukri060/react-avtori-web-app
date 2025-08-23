import { useState, useEffect } from "react";

export function Registration() {
  const [formsData, setFormsData] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [passwordValidations, setPasswordValidations] = useState({
    letter: false,
    capital: false,
    number: false,
    length: false,
    equality: false,
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [loginMessage, setLoginMessage] = useState("");

  useEffect(() => {
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formsData.email);
    const passwordValid = 
      passwordValidations.letter &&
      passwordValidations.capital &&
      passwordValidations.number &&
      passwordValidations.length &&
      passwordValidations.equality;

    setIsFormValid(emailValid && passwordValid);
  }, [formsData, passwordValidations]);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormsData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "password" || name === "confirmPassword") {
      setPasswordValidations({
        letter: /[a-z]/.test(name === "password" ? value : formsData.password),
        capital: /[A-Z]/.test(name === "password" ? value : formsData.password),
        number: /[0-9]/.test(name === "password" ? value : formsData.password),
        length: (name === "password" ? value : formsData.password).length >= 6,
        equality: (name === "password" ? value : formsData.password) === (name === "confirmPassword" ? value : formsData.confirmPassword),
      });
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!isFormValid) return;

    setLoginMessage("Registering...");
    setTimeout(() => {
      setLoginMessage("Account created successfully");
      setFormsData({ email: "", password: "", confirmPassword: "" });
      setPasswordValidations({
        letter: false,
        capital: false,
        number: false,
        length: false,
        equality: false,
      });
    }, 1000);
  }

  return (
    <div className="max-w-md mx-auto p-5">
      <form
        className="text-black text-left p-10 border-2 border-blue-500 rounded-lg shadow-md"
        onSubmit={handleSubmit}
      >
        <div className="mb-5">
          <label htmlFor="email" className="block mb-1 font-semibold">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-2 border-2 border-blue-500 rounded"
            value={formsData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-2">
          <label htmlFor="password" className="block mb-1 font-semibold">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full p-2 border-2 border-blue-500 rounded"
            value={formsData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-2">
          <label htmlFor="confirmPassword" className="block mb-1 font-semibold">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="w-full p-2 border-2 border-blue-500 rounded"
            value={formsData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4 text-sm">
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
            • Minimum 6 characters
          </p>
          <p className={passwordValidations.equality ? "text-green-600" : "text-red-600"}>
            • Passwords must match
          </p>
        </div>

        <button
          type="submit"
          disabled={!isFormValid}
          className={`w-full p-2 rounded text-white font-semibold ${isFormValid ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-400 cursor-not-allowed"}`}
        >
          Register
        </button>

        {loginMessage && <p className="mt-3 text-green-600 font-semibold">{loginMessage}</p>}
      </form>
    </div>
  );
}
