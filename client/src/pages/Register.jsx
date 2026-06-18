import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API_URL from "../services/api";

function Register() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(
                `${API_URL}/register`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );

            const data = await response.json();

            alert(data.message);

            if (response.ok) {
                navigate("/login");
            }
        } catch (error) {
            console.log(error);
            alert("Registration failed");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-[#0f0f0f]">
            <div className="bg-[#181818] p-8 rounded-xl w-full max-w-md">

                <h1 className="text-3xl font-bold mb-6 text-center">
                    Register
                </h1>

                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4"
                >

                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="p-3 rounded bg-[#282828] outline-none"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="p-3 rounded bg-[#282828] outline-none"
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        className="p-3 rounded bg-[#282828] outline-none"
                    />

                    <button
                        type="submit"
                        className="bg-green-500 text-black font-semibold p-3 rounded"
                    >
                        Register
                    </button>

                    <p className="text-center text-gray-400">
                        Already have an account?{" "}
                        <Link
                            to="/login"
                            className="text-green-500"
                        >
                            Login
                        </Link>
                    </p>

                </form>

            </div>
        </div>
    );
}

export default Register;