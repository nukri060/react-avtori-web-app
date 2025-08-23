export function Login() {
    return (
        <form action="" className="text-black text-left p-10 border-2 border-blue-500">
            <div className="input-field">
                <label htmlFor="email-field">Email: </label>
                <input type="text" id="email-field" name="email-field" className="block my-5 border-2 border-blue-500"/>
            </div>
            <div className="input-field">
                <label htmlFor="password-field">Password: </label>
                <input type="password" id="password-field" name="password-field" className="block my-5 border-2 border-blue-500"/>
            </div>

            <button type="submit">Login</button>
        </form>
    )
}
