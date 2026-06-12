import { useState } from "react";
import { useNavigate } from "react-router";

function Login() {
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const navigate = useNavigate();

    function handleChange(e) {
        const { name, value } = e.target;

        setUser(prev => ({
            ...prev,
            [name]: value
        }));
    }

    function handleLogin(e) {
        e.preventDefault();

        if (!user.email.trim()) {
            alert("Email is required");
            return;
        }

        if (user.password.length < 6) {
            alert("Password should be at least 6 characters");
            return;
        }

        localStorage.setItem("user", JSON.stringify(user));
        navigate("/jobs");
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form
                onSubmit={handleLogin}
                className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg border"
            >
                <h2 className="text-3xl font-bold text-center mb-8">
                    Login
                </h2>

                <div className="mb-5">
                    <label className="block mb-2 font-medium">
                        Email
                    </label>

                    <input
                        name="email"
                        type="email"
                        value={user.email}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="johndoe@gmail.com"
                    />
                </div>

                <div className="mb-6">
                    <label className="block mb-2 font-medium">
                        Password
                    </label>

                    <input
                        name="password"
                        type="password"
                        value={user.password}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter password"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-lg cursor-pointer hover:bg-blue-700 transition"
                >
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;