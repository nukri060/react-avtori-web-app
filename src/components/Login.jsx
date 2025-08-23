import { useState } from "react"

export function Login() {
    const [formsData, setFormsData] = useState({
        email: "test@example.com",
        password: "test123"
    })

    function handleSubmit(event ) {
        event.preventDefault();
        console.log(formsData) 
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setFormsData((prevData) => ({
            ...prevData,
            [name]: value 
        }))
    }

    return (
        <form
            className="text-black text-left p-10 border-2 border-blue-500"
            onSubmit={handleSubmit}
        >
            <div className="input-field">
                <label htmlFor="email-field">Email: </label>
                <input
                    type="text"
                    id="email-field"
                    name="email"
                    className="block my-5 border-2 border-blue-500"
                    value={formsData.email}
                    onChange={handleChange}
                />
            </div>
            <div className="input-field">
                <label htmlFor="password-field">Password: </label>
                <input
                    type="password"
                    id="password-field"
                    name="password"
                    className="block my-5 border-2 border-blue-500"
                    value={formsData.password}
                    onChange={handleChange}
                />
            </div>

            <button type="submit">Login</button>
        </form>
    )
}
